/* @ds-bundle: {"format":4,"namespace":"PSGDesignSystem_608ca3","components":[{"name":"CapabilityGrid","sourcePath":"components/content/CapabilityGrid.jsx"},{"name":"CtaBand","sourcePath":"components/content/CtaBand.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"ProofCard","sourcePath":"components/content/ProofCard.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"CredentialRow","sourcePath":"components/credential/CredentialRow.jsx"},{"name":"EntityCard","sourcePath":"components/credential/EntityCard.jsx"},{"name":"StatusChip","sourcePath":"components/credential/StatusChip.jsx"}],"sourceHashes":{"components/content/CapabilityGrid.jsx":"d980a27424c0","components/content/CtaBand.jsx":"c408123c9d3a","components/content/Eyebrow.jsx":"9fe5bdf19670","components/content/ProofCard.jsx":"aa748beed9ab","components/content/StatBlock.jsx":"5043ea6a642a","components/core/Button.jsx":"a5484750d9b7","components/core/Logo.jsx":"9acfbe8c5b4a","components/credential/CredentialRow.jsx":"5690feba53f1","components/credential/EntityCard.jsx":"873e0c1be0e8","components/credential/StatusChip.jsx":"4d2af4d11684","ui_kits/psg-marketing/CapabilityStatement.jsx":"27969b8c96d9","ui_kits/psg-marketing/HomeScreen.jsx":"617c8fa10089","ui_kits/psg-marketing/SiteHeader.jsx":"47c841e34a5f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PSGDesignSystem_608ca3 = window.PSGDesignSystem_608ca3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/CapabilityGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PSG CapabilityGrid — 01 / 02 / 03 numbered tiles, each with a title, a
 * one-line scope, and relevant NAICS codes. Numerals in the accent color.
 * `columns` defaults to 3. `accent`: gold | blue.
 */
function CapabilityGrid({
  items,
  columns = 3,
  accent = 'gold',
  style = {},
  ...rest
}) {
  const data = items || [{
    title: 'Plumbing & HVAC supply',
    scope: 'National distribution + manufacturer-direct.',
    naics: ['423720', '423730']
  }, {
    title: 'MRO & industrial',
    scope: 'Maintenance, repair, operations supplies.',
    naics: ['423840', '423850']
  }, {
    title: 'IT & office',
    scope: 'Hardware, stationery, office equipment.',
    naics: ['423440', '424120']
  }];
  const accentColor = accent === 'blue' ? 'var(--psg-blue)' : 'var(--psg-gold)';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "psg-capability-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: '16px',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), data.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card, 12px)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '22px',
      letterSpacing: '0.02em',
      color: accentColor
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: 1.25,
      color: 'var(--text-strong)'
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, it.scope), it.naics && it.naics.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      marginTop: '4px'
    }
  }, it.naics.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0.04em',
      color: 'var(--text-muted)',
      background: 'var(--color-bg-sunken)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-chip, 8px)',
      padding: '3px 8px'
    }
  }, n))))));
}
Object.assign(__ds_scope, { CapabilityGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CapabilityGrid.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PSG Eyebrow — the section header pattern: small uppercase label,
 * Archivo headline, one Slate support line. `align`: left | center.
 * `tone`: light (on white) | dark (on navy). `accent`: gold | blue.
 */
function Eyebrow({
  eyebrow,
  headline,
  support,
  align = 'left',
  tone = 'light',
  accent = 'gold',
  style = {},
  ...rest
}) {
  const onDark = tone === 'dark';
  const accentColor = accent === 'blue' ? 'var(--psg-blue)' : 'var(--psg-gold)';
  return /*#__PURE__*/React.createElement("header", _extends({
    className: "psg-eyebrow",
    style: {
      fontFamily: 'var(--font-body)',
      textAlign: align,
      maxWidth: '58ch',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: onDark ? accentColor : accentColor,
      marginBottom: '12px'
    }
  }, eyebrow), headline && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2, 30px)',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      margin: 0,
      color: onDark ? '#fff' : 'var(--text-strong)',
      textWrap: 'balance'
    }
  }, headline), support && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: 1.55,
      margin: '14px 0 0',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, support));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/ProofCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PSG ProofCard — numbered advantage (i / ii / iii) with a bold claim and a
 * one-line substantiation. Every claim sits near a number or a credential.
 * `numeral`: roman (default) | arabic. `accent`: gold | blue.
 */
const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];
function ProofCard({
  index = 0,
  claim,
  detail,
  numeral = 'roman',
  accent = 'gold',
  style = {},
  ...rest
}) {
  const accentColor = accent === 'blue' ? 'var(--psg-blue)' : 'var(--psg-gold)';
  const mark = numeral === 'arabic' ? String(index + 1).padStart(2, '0') : ROMAN[index] || String(index + 1);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "psg-proof-card",
    style: {
      display: 'flex',
      gap: '18px',
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card, 12px)',
      padding: '24px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '20px',
      color: accentColor,
      lineHeight: 1,
      flexShrink: 0,
      minWidth: '28px',
      paddingTop: '2px'
    }
  }, mark), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: 1.3,
      color: 'var(--text-strong)'
    }
  }, claim), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      lineHeight: 1.5,
      marginTop: '6px',
      color: 'var(--text-body)'
    }
  }, detail)));
}
Object.assign(__ds_scope, { ProofCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProofCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PSG StatBlock — oversized Archivo number + short label. Numbers beat
 * adjectives. Used in rows of 3–4. `tone`: light | dark. `accent` colors
 * the number's rule/value: gold | blue | none.
 */
function StatBlock({
  value,
  label,
  sub,
  tone = 'light',
  accent = 'gold',
  style = {},
  ...rest
}) {
  const onDark = tone === 'dark';
  const accentColor = accent === 'blue' ? 'var(--psg-blue)' : accent === 'none' ? onDark ? '#fff' : 'var(--text-strong)' : 'var(--psg-gold)';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "psg-stat-block",
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 3,
      background: accentColor,
      marginBottom: '14px',
      borderRadius: '2px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-stat, 56px)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: onDark ? '#fff' : 'var(--text-strong)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      fontWeight: 600,
      marginTop: '10px',
      color: onDark ? '#fff' : 'var(--text-strong)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      marginTop: '4px',
      lineHeight: 1.45,
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, sub));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PSG Button. One CTA per asset — reach for `primary` (navy) as the default,
 * and use `gold` or `blue` only as the single accent moment on a view.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '14px',
      gap: '6px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '16px',
      gap: '8px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '18px',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--psg-navy)',
      color: '#fff',
      border: '1px solid var(--psg-navy)'
    },
    gold: {
      background: 'var(--psg-gold)',
      color: 'var(--psg-navy)',
      border: '1px solid var(--psg-gold)'
    },
    blue: {
      background: 'var(--psg-blue)',
      color: '#fff',
      border: '1px solid var(--psg-blue)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--psg-navy)',
      border: '1px solid var(--border-strong, #CBD5E1)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--psg-navy)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: 'var(--radius-chip, 8px)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'filter 180ms ease, box-shadow 180ms ease',
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,
    ...variants[variant],
    ...style
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "psg-button",
    style: base,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.92)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/CtaBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PSG CtaBand — navy section, white headline, single gold or tech-blue
 * button. One CTA only (matches the voice rule: one ask). Optional
 * support line and eyebrow.
 */
function CtaBand({
  eyebrow,
  headline = 'Government supply, without the runaround.',
  support,
  ctaLabel = 'Request a quote',
  ctaHref,
  accent = 'blue',
  onCtaClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "psg-cta-band",
    style: {
      background: 'var(--navy-gradient)',
      borderRadius: 'var(--radius-card, 12px)',
      padding: '56px 48px',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: accent === 'blue' ? 'var(--psg-blue)' : 'var(--psg-gold)',
      marginBottom: '14px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(26px, 3.4vw, 38px)',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: '#fff',
      margin: '0 auto',
      maxWidth: '20ch',
      textWrap: 'balance'
    }
  }, headline), support && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: 1.55,
      color: 'var(--text-on-dark-muted)',
      margin: '16px auto 0',
      maxWidth: '48ch',
      textWrap: 'pretty'
    }
  }, support), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: accent === 'blue' ? 'blue' : 'gold',
    size: "lg",
    as: ctaHref ? 'a' : 'button',
    href: ctaHref,
    onClick: onCtaClick
  }, ctaLabel)));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PSG Logo. Renders the provided brand SVGs from assets/.
 * `variant`: 'primary' (navy container, for light bg),
 *            'light' (white container, for busy/colored bg fallback),
 *            'icon' (square avatar / favicon).
 * `src` overrides the asset path if the design system lives elsewhere.
 * NOTE: current marks are container logos (see readme §Logo). On navy or
 * photographic panels use `light`.
 */
function Logo({
  variant = 'primary',
  height,
  src,
  alt = 'Proven Supply Group',
  style = {},
  ...rest
}) {
  const map = {
    primary: 'assets/psg-logo-primary.svg',
    light: 'assets/psg-logo-light.svg',
    icon: 'assets/psg-logo-icon.svg'
  };
  const defaultHeights = {
    primary: 64,
    light: 64,
    icon: 48
  };
  const raw = height ?? defaultHeights[variant];
  const h = typeof raw === 'string' && /^\d+$/.test(raw) ? Number(raw) : raw;
  return /*#__PURE__*/React.createElement("img", _extends({
    className: "psg-logo",
    src: src || map[variant],
    alt: alt,
    style: {
      height: h,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/credential/CredentialRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PSG CredentialRow — horizontal strip near the top of every asset:
 * SAM Active | UEI | CAGE | Primary NAICS. Compliance-forward, hero element,
 * not fine print. `tone`: 'light' (on white) or 'dark' (on navy).
 */
function CredentialRow({
  items,
  tone = 'light',
  style = {},
  ...rest
}) {
  const rows = items || [{
    label: 'SAM.gov',
    value: 'Active',
    status: 'active'
  }, {
    label: 'UEI',
    value: 'MY4VMF7G3A18'
  }, {
    label: 'CAGE',
    value: '1CQK4'
  }, {
    label: 'Primary NAICS',
    value: '423720'
  }];
  const onDark = tone === 'dark';
  const labelColor = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  const valueColor = onDark ? '#fff' : 'var(--text-strong)';
  const divider = onDark ? 'rgba(255,255,255,0.14)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "psg-credential-row",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '0',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), rows.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      padding: '0 20px',
      borderLeft: i === 0 ? 'none' : `1px solid ${divider}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontSize: '15px',
      fontWeight: 600,
      color: valueColor,
      fontFamily: it.mono ? 'var(--font-mono)' : 'var(--font-body)',
      letterSpacing: it.mono ? '0.04em' : 'normal'
    }
  }, it.status && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: it.status === 'active' ? 'var(--status-active)' : it.status === 'inprocess' ? 'var(--status-inprocess)' : 'var(--status-planned)'
    }
  }), it.value))));
}
Object.assign(__ds_scope, { CredentialRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/credential/CredentialRow.jsx", error: String((e && e.message) || e) }); }

// components/credential/StatusChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PSG StatusChip — the honest Active / In Process / Planned / Alert pill.
 * Signature move: never decorative, always accurate. Never overstate.
 */
function StatusChip({
  status = 'active',
  children,
  size = 'md',
  style = {},
  ...rest
}) {
  const map = {
    active: {
      label: 'Active',
      color: 'var(--status-active)',
      dot: 'var(--status-active)'
    },
    inprocess: {
      label: 'In Process',
      color: 'var(--status-inprocess)',
      dot: 'var(--status-inprocess)'
    },
    planned: {
      label: 'Planned',
      color: 'var(--status-planned)',
      dot: 'var(--status-planned)'
    },
    alert: {
      label: 'Alert',
      color: 'var(--status-alert)',
      dot: 'var(--status-alert)'
    }
  };
  const s = map[status] || map.active;
  const sizes = {
    sm: {
      fontSize: '11px',
      padding: '3px 8px',
      dot: 6,
      gap: '6px'
    },
    md: {
      fontSize: '12px',
      padding: '4px 10px',
      dot: 7,
      gap: '7px'
    }
  };
  const z = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "psg-status-chip",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: z.gap,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: z.fontSize,
      letterSpacing: '0.02em',
      color: s.color,
      background: 'color-mix(in srgb, ' + s.color + ' 10%, #fff)',
      border: '1px solid color-mix(in srgb, ' + s.color + ' 28%, transparent)',
      borderRadius: 'var(--radius-pill, 999px)',
      padding: z.padding,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: z.dot,
      height: z.dot,
      borderRadius: '50%',
      background: s.dot,
      flexShrink: 0
    }
  }), children || s.label);
}
Object.assign(__ds_scope, { StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/credential/StatusChip.jsx", error: String((e && e.message) || e) }); }

// components/credential/EntityCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PSG EntityCard — the at-a-glance boxed data list (Entity, UEI, CAGE,
 * HUBZone, NAICS, Size, Compliance) with honest status chips. The single
 * most important trust component. Defaults to PSG's real data.
 */
function EntityCard({
  title = 'Company Data',
  rows,
  footnote,
  style = {},
  ...rest
}) {
  const data = rows || [{
    label: 'Entity',
    value: 'Proven Supply Group'
  }, {
    label: 'UEI',
    value: 'MY4VMF7G3A18',
    mono: true
  }, {
    label: 'CAGE',
    value: '1CQK4',
    mono: true
  }, {
    label: 'SAM.gov',
    chip: 'active'
  }, {
    label: 'Business Size',
    value: 'Small Business'
  }, {
    label: 'HUBZone',
    chip: 'inprocess',
    chipLabel: 'In Process'
  }, {
    label: 'Primary NAICS',
    value: '423720',
    mono: true
  }, {
    label: 'Location',
    value: 'Denver, CO'
  }];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "psg-entity-card",
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card, 12px)',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '16px 24px',
      background: 'var(--psg-navy)',
      borderBottom: '3px solid var(--psg-gold)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '15px',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: '#fff'
    }
  }, title)), /*#__PURE__*/React.createElement("div", null, data.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      padding: '12px 24px',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, r.label), r.chip ? /*#__PURE__*/React.createElement(__ds_scope.StatusChip, {
    status: r.chip,
    size: "sm"
  }, r.chipLabel) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontFamily: r.mono ? 'var(--font-mono)' : 'var(--font-body)',
      letterSpacing: r.mono ? '0.04em' : 'normal',
      textAlign: 'right'
    }
  }, r.value)))), footnote && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 24px',
      background: 'var(--color-bg-subtle)',
      borderTop: '1px solid var(--border-default)',
      fontSize: '12px',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, footnote));
}
Object.assign(__ds_scope, { EntityCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/credential/EntityCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/psg-marketing/CapabilityStatement.jsx
try { (() => {
// PSG capability statement — the 1-page workhorse, laid out per design system §11.
const {
  Logo,
  CredentialRow,
  EntityCard,
  CapabilityGrid,
  ProofCard,
  StatusChip
} = window.PSGDesignSystem_608ca3;
function CapabilityStatement() {
  const Label = ({
    children,
    accent
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--psg-gold)',
      margin: '0 0 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 2,
      background: 'var(--psg-gold)'
    }
  }), children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg-subtle)',
      padding: '40px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 940,
      margin: '0 auto',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 14,
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-gradient)',
      padding: '32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "icon",
    height: 44
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      color: '#fff',
      margin: '16px 0 4px',
      letterSpacing: '-0.01em'
    }
  }, "Capability Statement"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)',
      margin: 0
    }
  }, "National government product supply & resale \xA0|\xA0 Plumbing \xB7 HVAC \xB7 MRO \xB7 IT/Office")), /*#__PURE__*/React.createElement(StatusChip, {
    status: "active",
    size: "md"
  }, "SAM.gov Active")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement(CredentialRow, {
    tone: "dark",
    items: [{
      label: 'UEI',
      value: 'MY4VMF7G3A18',
      mono: true
    }, {
      label: 'CAGE',
      value: '1CQK4',
      mono: true
    }, {
      label: 'Business Size',
      value: 'Small Business'
    }, {
      label: 'HUBZone',
      value: 'In Process',
      status: 'inprocess'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: 36,
      padding: '36px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '0 0 28px'
    }
  }, "Proven Supply Group is a small-business national supplier delivering plumbing, HVAC, MRO, and IT/office products to federal, state, and local government buyers. PSG pairs an established Mountain West distribution backbone with AI-driven opportunity scanning to find, quote, and fulfill supply requirements faster than conventional resellers."), /*#__PURE__*/React.createElement(Label, null, "Core competencies"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(CapabilityGrid, {
    columns: 2,
    items: [{
      title: 'Product supply & resale',
      scope: 'National distribution + manufacturer-direct.',
      naics: ['423720', '423730']
    }, {
      title: 'AI opportunity scanning',
      scope: 'Daily SAM.gov + partner feeds, bid/no-bid gate.',
      naics: []
    }, {
      title: 'Fast quote turnaround',
      scope: 'RFQ-to-quote with margin verification per line.',
      naics: []
    }, {
      title: 'FAR Part 13 fluency',
      scope: 'RFQ, SF1449, Sources Sought / RFI packages.',
      naics: []
    }]
  })), /*#__PURE__*/React.createElement(Label, null, "Differentiators"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ProofCard, {
    index: 0,
    claim: "Speed plus accuracy",
    detail: "AI-assisted scanning + a disciplined quote process, without losing line-item precision."
  }), /*#__PURE__*/React.createElement(ProofCard, {
    index: 1,
    claim: "BOP plumbing & HVAC focus",
    detail: "Targeted specialization in a high-volume federal category."
  }), /*#__PURE__*/React.createElement(ProofCard, {
    index: 2,
    claim: "Hajoca-anchored supply chain",
    detail: "Competitive pricing and reliable availability in plumbing and HVAC."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(EntityCard, {
    footnote: "NAICS listed are a subset of PSG's active SAM.gov registration (primary 423720). HUBZone status is in process, not certified."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Past performance"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 12,
      padding: 20,
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(StatusChip, {
    status: "inprocess",
    size: "sm"
  }, "Active pipeline")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Newly active government supplier building its award history. Federal and state/local opportunities tracked from identification through quote submission. No awarded contracts to date; references provided as awards complete."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--psg-navy)',
      borderRadius: 12,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--psg-gold)',
      marginBottom: 10
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#fff'
    }
  }, "Matt Gustafson"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)',
      marginTop: 6,
      lineHeight: 1.6
    }
  }, "(970) 396-9855", /*#__PURE__*/React.createElement("br", null), "matt@provensupplygroup.com", /*#__PURE__*/React.createElement("br", null), "7270 Gilpin Way, Ste 150, Denver, CO 80229")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg-sunken)',
      borderTop: '1px solid var(--border-default)',
      padding: '14px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      letterSpacing: '0.03em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "UEI MY4VMF7G3A18 \xA0\xB7\xA0 CAGE 1CQK4"), /*#__PURE__*/React.createElement("span", null, "Refreshed 2026-06-29"))));
}
window.CapabilityStatement = CapabilityStatement;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/psg-marketing/CapabilityStatement.jsx", error: String((e && e.message) || e) }); }

// ui_kits/psg-marketing/HomeScreen.jsx
try { (() => {
// PSG marketing homepage — hero, credential band, stats, capabilities, proof, CTA.
const {
  Button,
  CredentialRow,
  Eyebrow,
  StatBlock,
  CapabilityGrid,
  ProofCard,
  CtaBand
} = window.PSGDesignSystem_608ca3;
function Section({
  children,
  bg,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg || 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, children));
}
function HomeScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-gradient)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '88px 32px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--psg-gold)',
      marginBottom: 20
    }
  }, "National government product supply"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px, 5.4vw, 60px)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: 0,
      maxWidth: '16ch',
      textWrap: 'balance'
    }
  }, "Government supply, without the runaround."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.55,
      color: 'var(--text-on-dark-muted)',
      margin: '22px 0 0',
      maxWidth: '52ch',
      textWrap: 'pretty'
    }
  }, "Next-day fulfillment for plumbing, HVAC, MRO, and IT/office. Compliance pre-screened, and the principal answers the phone."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "blue",
    size: "lg",
    as: "a",
    href: "mailto:matt@provensupplygroup.com"
  }, "Request a quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.28)'
    },
    onClick: () => onNav('statement')
  }, "View capability statement"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '22px 20px'
    }
  }, /*#__PURE__*/React.createElement(CredentialRow, {
    tone: "dark"
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "10",
    label: "Registered NAICS",
    accent: "blue",
    sub: "Across nine verticals"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "24h",
    label: "Quote turnaround",
    accent: "blue",
    sub: "Priced, screened, dated"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "GPC",
    label: "Card accepted",
    accent: "gold",
    sub: "Micro-purchase ready"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "1",
    label: "Accountable supplier",
    accent: "gold",
    sub: "Not fifty vendors"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg-subtle)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    eyebrow: "Core capabilities",
    headline: "Nine verticals. One accountable supplier.",
    support: "PSG consolidates government product buying across IT, facilities, and professional services, so agencies source from fewer vendors, with tighter compliance and faster turnaround."
  })), /*#__PURE__*/React.createElement(CapabilityGrid, {
    columns: 3,
    items: [{
      title: 'IT Hardware & Computer Equipment',
      scope: 'Desktops, servers, networking, storage, peripherals.',
      naics: ['7021', '7025', '7050']
    }, {
      title: 'Office Furniture & Workstations',
      scope: 'Seating, modular systems, height-adjustable desks.',
      naics: ['7110', '7195']
    }, {
      title: 'Plumbing, HVAC & Hardware',
      scope: 'Pipe, fittings, valves, HVAC components, fasteners.',
      naics: ['4510', '4120']
    }, {
      title: 'Medical & Lab Equipment',
      scope: 'Diagnostics, lab supplies, patient care, dental.',
      naics: ['6505', '6530']
    }, {
      title: 'Office & Janitorial Supplies',
      scope: 'Paper, toner, floor care, PPE, breakroom, safety.',
      naics: ['7510', '7930']
    }, {
      title: 'Industrial & MRO Supplies',
      scope: 'Electrical, lighting, motors, bearings, abrasives.',
      naics: ['5120', '6810']
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    eyebrow: "Why PSG",
    headline: "Built for government buyers, and their deadlines",
    support: "Most distributors are built for volume. PSG is built for buyers who need the right product, cleared through the right compliance, delivered by the right date."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProofCard, {
    index: 0,
    accent: "blue",
    claim: "Direct line to the principal",
    detail: "You reach a decision-maker, not a rep three levels from the answer. Every quote passes one human sanity check."
  }), /*#__PURE__*/React.createElement(ProofCard, {
    index: 1,
    accent: "blue",
    claim: "Wholesale + manufacturer-direct sourcing",
    detail: "Tier-1 wholesale supply chains and direct manufacturer relationships across IT, plumbing/HVAC, MRO, and office."
  }), /*#__PURE__*/React.createElement(ProofCard, {
    index: 2,
    accent: "blue",
    claim: "Compliance is a baseline, not a feature",
    detail: "TAA / BAA verified at the SKU level, Section 889 screening, EPEAT-registered IT when required."
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg-subtle)"
  }, /*#__PURE__*/React.createElement(CtaBand, {
    eyebrow: "Get started",
    headline: "Send your next RFQ to the team that answers the phone.",
    support: "A real person reads your request, checks distributor inventory, and emails back with a price, a lead time, and a compliance note.",
    ctaLabel: "Email matt@provensupplygroup.com",
    ctaHref: "mailto:matt@provensupplygroup.com"
  })));
}
window.HomeScreen = HomeScreen;
window.PSGSection = Section;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/psg-marketing/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/psg-marketing/SiteHeader.jsx
try { (() => {
// PSG marketing site header — navy bar, reversed logo, nav, single CTA.
const {
  Button,
  Logo
} = window.PSGDesignSystem_608ca3;
function SiteHeader({
  current,
  onNav
}) {
  const nav = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'capabilities',
    label: 'Capabilities'
  }, {
    id: 'compliance',
    label: 'Compliance'
  }, {
    id: 'statement',
    label: 'Capability Statement'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--psg-navy)',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "icon",
    height: 38
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: '#fff',
      fontSize: 18,
      letterSpacing: '-0.01em',
      marginLeft: 12
    }
  }, "Proven Supply Group")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: current === n.id ? '#fff' : 'var(--text-on-dark-muted)',
      textDecoration: 'none',
      paddingBottom: 2,
      borderBottom: current === n.id ? '2px solid var(--psg-gold)' : '2px solid transparent'
    }
  }, n.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "blue",
    size: "sm",
    as: "a",
    href: "mailto:matt@provensupplygroup.com"
  }, "Request a quote"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/psg-marketing/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CapabilityGrid = __ds_scope.CapabilityGrid;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.ProofCard = __ds_scope.ProofCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.CredentialRow = __ds_scope.CredentialRow;

__ds_ns.EntityCard = __ds_scope.EntityCard;

__ds_ns.StatusChip = __ds_scope.StatusChip;

})();
