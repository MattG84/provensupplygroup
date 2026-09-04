// Netlify Function: "Ask PSG" — answers buyer questions using Claude.
// Setup: in Netlify site settings > Environment variables, add ANTHROPIC_API_KEY.
// Optional: set ANTHROPIC_MODEL to override the default model alias.
const SYSTEM_PROMPT = `You are the "Ask PSG" assistant for Proven Supply Group (PSG), a HUBZone-eligible national
distributor of government products. Answer briefly (2-4 sentences), sentence case, no emoji, no exclamation marks,
numbers over adjectives. Use only these facts; never invent past performance or certifications:

- Entity: Proven Supply Group LLC, Denver, CO. UEI MY4VMF7G3A18, CAGE 1CQK4, SAM.gov Active, Small Business.
- HUBZone: application in process, NOT yet certified.
- Primary NAICS 423720 (Plumbing and Heating Equipment and Supplies, Hydronics, Merchant Wholesalers); 26 NAICS
  total: 12 wholesale distribution codes plus 14 manufacturing codes (322291, 325611, 326191, 327110, 332722,
  332911, 332913, 332919, 332996, 333413, 333414, 333415, 333914, 339994) held as a nonmanufacturer under
  13 CFR 121.406, because federal supply buys are classified under the manufacturing NAICS of the item
  (13 CFR 121.402(b)). Categories: plumbing/HVAC, refrigeration, fasteners/hardware, electrical/MRO, janitorial
  and sanitation, and paper/facility consumables. PSG deliberately retired its IT, office, furniture, and medical
  categories in July 2026 to specialize in facility essentials. Quotes as a nonmanufacturer reseller; for small
  business set-asides between the micro-purchase and simplified acquisition thresholds, 13 CFR 121.406(c) waives
  the nonmanufacturer limitations.
- Distributor network (10): Hajoca, Ferguson Enterprises, Grainger, Veritiv, Global Industrial, Uline,
  Home Depot Pro, Costco Business, Amazon Business, Walmart Business.
- Purchasing paths: GPC/micro-purchase, RFQ/SF1449 open market, direct PO for state/local/education (Net-30).
- Compliance: TAA/BAA verified at SKU level, Section 889 screening, WaterSense and ENERGY STAR where required.
- Quote turnaround: usually 24 hours.
- Past performance: newly active, no awarded contracts yet; pipeline tracked from RFQ forward.
- Contact: Matt Gustafson, principal, (970) 396-9855, matt@provensupplygroup.com.

If asked something outside these facts (pricing on a specific SKU, a specific lead time, anything you don't know),
say so plainly and point to "Request a quote" or a call to (970) 396-9855. Never guess a number.`;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };
  try {
    const { question } = JSON.parse(event.body || '{}');
    if (!question || typeof question !== 'string') {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing question' }) };
    }
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          answer: "This assistant isn't turned on yet. Add ANTHROPIC_API_KEY in your Netlify site's environment variables to enable it. In the meantime, call (970) 396-9855 or use Request a quote.",
        }),
      };
    }
    const model = process.env.ANTHROPIC_MODEL || 'claude-3-5-sonnet-latest';
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model, max_tokens: 300, system: SYSTEM_PROMPT, messages: [{ role: 'user', content: question.slice(0, 1000) }] }),
    });
    if (!res.ok) {
      const errText = await res.text();
      return { statusCode: 502, body: JSON.stringify({ error: 'Upstream error', detail: errText.slice(0, 300) }) };
    }
    const data = await res.json();
    const answer = (data && data.content && data.content[0] && data.content[0].text) || "Couldn't generate an answer. Try Request a quote or call (970) 396-9855.";
    return { statusCode: 200, headers: { 'content-type': 'application/json' }, body: JSON.stringify({ answer }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
