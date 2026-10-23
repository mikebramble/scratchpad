import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as n from "svelte/internal/client";
import { SuggestionKind as me } from "harper.js";
import { tick as jc } from "svelte";
import { slide as $a, fade as hr, fly as Fc } from "svelte/transition";
import { cubicOut as Bc } from "svelte/easing";
import "svelte/store";
import "svelte/motion";
const ba = "-", Dc = (e) => {
  const t = Wc(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(ba);
      return l[0] === "" && l.length !== 1 && l.shift(), vs(l, t) || Hc(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const c = r[s] || [];
      return l && a[s] ? [...c, ...a[s]] : c;
    }
  };
}, vs = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], a = t.nextPart.get(r), o = a ? vs(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(ba);
  return t.validators.find(({
    validator: s
  }) => s(i))?.classGroupId;
}, Va = /^\[(.+)\]$/, Hc = (e) => {
  if (Va.test(e)) {
    const t = Va.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Wc = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return $c(Object.entries(e.classGroups), r).forEach(([i, s]) => {
    $n(s, a, i, t);
  }), a;
}, $n = (e, t, r, a) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Ga(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (qc(o)) {
        $n(o(a), t, r, a);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      $n(s, Ga(t, i), r, a);
    });
  });
}, Ga = (e, t) => {
  let r = e;
  return t.split(ba).forEach((a) => {
    r.nextPart.has(a) || r.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(a);
  }), r;
}, qc = (e) => e.isThemeGetter, $c = (e, t) => t ? e.map(([r, a]) => {
  const o = a.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l])) : i);
  return [r, o];
}) : e, Vc = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const o = (i, s) => {
    r.set(i, s), t++, t > e && (t = 0, a = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let s = r.get(i);
      if (s !== void 0)
        return s;
      if ((s = a.get(i)) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      r.has(i) ? r.set(i, s) : o(i, s);
    }
  };
}, bs = "!", Gc = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, a = t.length === 1, o = t[0], i = t.length, s = (l) => {
    const c = [];
    let u = 0, d = 0, f;
    for (let b = 0; b < l.length; b++) {
      let y = l[b];
      if (u === 0) {
        if (y === o && (a || l.slice(b, b + i) === t)) {
          c.push(l.slice(d, b)), d = b + i;
          continue;
        }
        if (y === "/") {
          f = b;
          continue;
        }
      }
      y === "[" ? u++ : y === "]" && u--;
    }
    const h = c.length === 0 ? l : l.substring(d), p = h.startsWith(bs), g = p ? h.substring(1) : h, m = f && f > d ? f - d : void 0;
    return {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: m
    };
  };
  return r ? (l) => r({
    className: l,
    parseClassName: s
  }) : s;
}, Uc = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...r.sort(), a), r = []) : r.push(a);
  }), t.push(...r.sort()), t;
}, Yc = (e) => ({
  cache: Vc(e.cacheSize),
  parseClassName: Gc(e),
  ...Dc(e)
}), Xc = /\s+/, Kc = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  } = t, i = [], s = e.trim().split(Xc);
  let l = "";
  for (let c = s.length - 1; c >= 0; c -= 1) {
    const u = s[c], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: p
    } = r(u);
    let g = !!p, m = a(g ? h.substring(0, p) : h);
    if (!m) {
      if (!g) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (m = a(h), !m) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      g = !1;
    }
    const b = Uc(d).join(":"), y = f ? b + bs : b, v = y + m;
    if (i.includes(v))
      continue;
    i.push(v);
    const _ = o(m, g);
    for (let C = 0; C < _.length; ++C) {
      const x = _[C];
      i.push(y + x);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Jc() {
  let e = 0, t, r, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = ys(t)) && (a && (a += " "), a += r);
  return a;
}
const ys = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = ys(e[a])) && (r && (r += " "), r += t);
  return r;
};
function Zc(e, ...t) {
  let r, a, o, i = s;
  function s(c) {
    const u = t.reduce((d, f) => f(d), e());
    return r = Yc(u), a = r.cache.get, o = r.cache.set, i = l, l(c);
  }
  function l(c) {
    const u = a(c);
    if (u)
      return u;
    const d = Kc(c, r);
    return o(c, d), d;
  }
  return function() {
    return i(Jc.apply(null, arguments));
  };
}
const K = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, xs = /^\[(?:([a-z-]+):)?(.+)\]$/i, Qc = /^\d+\/\d+$/, eu = /* @__PURE__ */ new Set(["px", "full", "screen"]), tu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ru = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, au = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ou = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Be = (e) => yt(e) || eu.has(e) || Qc.test(e), Ve = (e) => Lt(e, "length", hu), yt = (e) => !!e && !Number.isNaN(Number(e)), $r = (e) => Lt(e, "number", yt), Rt = (e) => !!e && Number.isInteger(Number(e)), iu = (e) => e.endsWith("%") && yt(e.slice(0, -1)), B = (e) => xs.test(e), Ge = (e) => tu.test(e), su = /* @__PURE__ */ new Set(["length", "size", "percentage"]), lu = (e) => Lt(e, su, ws), cu = (e) => Lt(e, "position", ws), uu = /* @__PURE__ */ new Set(["image", "url"]), du = (e) => Lt(e, uu, mu), fu = (e) => Lt(e, "", pu), Tt = () => !0, Lt = (e, t, r) => {
  const a = xs.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : r(a[2]) : !1;
}, hu = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ru.test(e) && !nu.test(e)
), ws = () => !1, pu = (e) => au.test(e), mu = (e) => ou.test(e), gu = () => {
  const e = K("colors"), t = K("spacing"), r = K("blur"), a = K("brightness"), o = K("borderColor"), i = K("borderRadius"), s = K("borderSpacing"), l = K("borderWidth"), c = K("contrast"), u = K("grayscale"), d = K("hueRotate"), f = K("invert"), h = K("gap"), p = K("gradientColorStops"), g = K("gradientColorStopPositions"), m = K("inset"), b = K("margin"), y = K("opacity"), v = K("padding"), _ = K("saturate"), C = K("scale"), x = K("sepia"), w = K("skew"), M = K("space"), E = K("translate"), S = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", B, t], I = () => [B, t], V = () => ["", Be, Ve], F = () => ["auto", yt, B], O = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], P = () => ["solid", "dashed", "dotted", "double", "none"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Z = () => ["", "0", B], ie = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], X = () => [yt, B];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Tt],
      spacing: [Be, Ve],
      blur: ["none", "", Ge, B],
      brightness: X(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ge, B],
      borderSpacing: I(),
      borderWidth: V(),
      contrast: X(),
      grayscale: Z(),
      hueRotate: X(),
      invert: Z(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [iu, Ve],
      inset: z(),
      margin: z(),
      opacity: X(),
      padding: I(),
      saturate: X(),
      scale: X(),
      sepia: Z(),
      skew: X(),
      space: I(),
      translate: I()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", B]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ge]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ie()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ie()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...O(), B]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Rt, B]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: z()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", B]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Rt, B]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Tt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Rt, B]
        }, B]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Tt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Rt, B]
        }, B]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", B]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", B]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...G()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...G(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...G(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [M]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [M]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", B, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [B, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [B, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ge]
        }, Ge]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [B, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [B, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [B, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [B, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ge, Ve]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", $r]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Tt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", B]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", yt, $r]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Be, B]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", B]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", B]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...P(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Be, Ve]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Be, B]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", B]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", B]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...O(), cu]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", lu]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, du]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...P(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: P()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...P()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Be, B]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Be, Ve]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: V()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Be, Ve]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ge, fu]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Tt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...U(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": U()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ge, B]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [x]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [x]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", B]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: X()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", B]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: X()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", B]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Rt, B]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [E]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [E]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [w]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [w]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", B]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", B]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", B]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Be, Ve, $r]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Ua = /* @__PURE__ */ Zc(gu);
n.from_svg('<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>');
n.from_svg('<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>');
n.from_html("<div><div><!></div></div>");
n.from_html('<div class="hidden"><div><!></div></div>');
n.from_html('<h2 class="group"><button type="button"><!> <!></button></h2> <!>', 1);
n.from_html("<div><!></div>");
n.from_html('<span class="sr-only"> </span>');
n.from_html("<a><!> <!></a>");
n.from_html('<span class="sr-only"> </span>');
n.from_html("<button><!> <!></button>");
n.from_svg('<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>');
n.from_html("<div><!></div>");
n.from_html("<!> <!> <!>", 1);
n.from_html("<div><!></div>");
n.from_html("<img/>");
n.from_svg('<svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>');
n.from_html("<!> <!>", 1);
n.from_html("<img/>");
n.from_html("<!> <!>", 1);
n.from_html('<div class="flex items-center"><!></div>');
n.from_html("<div><!> <div><!></div> <!></div>");
n.from_html("<div><!> <div><!></div></div>");
n.from_html("<!> <span> </span>", 1);
n.from_html('<div><div role="group"><!></div></div>');
n.from_html("<button> </button>");
n.from_html("<nav><ol><!></ol></nav>");
n.from_svg('<svg class="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>');
n.from_html("<a><!> <!></a>");
n.from_svg('<svg class="w-6 h-6 text-gray-400 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>');
n.from_html("<a><!></a>");
n.from_html("<span><!></span>");
n.from_html("<!> <!>", 1);
n.from_html("<li><!></li>");
n.from_html("<a><!></a>");
n.from_html("<button><!></button>");
n.from_html("<div><!></div>");
n.from_html("<div><!></div>");
n.from_html('<img alt=""/> <div><!></div>', 1);
n.from_svg('<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>');
n.from_svg('<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>');
n.from_html('<span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"><!> <span class="sr-only"> </span></span>');
n.from_html('<button type="button"><!></button>');
n.from_html("<!> <!>", 1);
n.from_html("<button><!></button>");
n.from_html("<div></div>");
n.from_html("<img/>");
n.from_html("<img/>");
n.from_html('<link rel="preload" as="image"/>');
n.from_html('<div class="relative" role="button" tabindex="0"><div><!></div> <!></div>');
n.from_html("<img/>");
n.from_html("<button><!></button>");
n.from_html("<div></div>");
n.from_html("<div></div>");
n.with_script(n.from_html(
  `<script>
    if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) window.document.documentElement.classList.add('dark');
    }
  <\/script><!>`,
  1
));
n.from_svg(`<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`);
n.from_svg('<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>');
n.from_html('<button><span class="hidden dark:block"><!></span> <span class="block dark:hidden"><!></span></button>');
n.from_svg('<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>');
n.with_script(n.from_html('<link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"/> <script src="https://unpkg.com/flowbite@1.5.1/dist/datepicker.js"><\/script>', 1));
n.from_html('<div date-rangepicker="" class="flex items-center"><div class="relative"><div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none"><!></div> <input name="start" type="text" placeholder="Select date start"/></div> <span class="mx-4 text-gray-500">to</span> <div class="relative"><div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none"><!></div> <input name="end" type="text" placeholder="Select date end"/></div></div>');
n.from_html("<input/>");
n.from_html("<input/>");
n.from_html('<div class="relative"><div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none"><!></div> <!> <!></div>');
n.from_html("<div><div></div> <div></div> <div></div> <div></div> <div></div> <div><!></div></div>");
n.from_html("<div><div></div> <div></div> <div></div> <div></div> <div><!></div></div>");
n.from_html("<div><div><!></div></div> <div></div> <div></div>", 1);
n.from_html("<div><div></div> <div></div> <div></div> <div></div> <div><!></div></div>");
n.from_html("<div><div><!></div></div> <div><div></div></div>", 1);
n.from_html("<div></div> <div><div></div> <div></div> <div><!></div></div> <div></div>", 1);
n.from_html("<div><div></div> <div></div> <div></div> <div></div> <div><!></div></div>");
n.from_html('<div class="border p-3 text-xl">Unknow device</div>');
n.from_html('<div role="presentation"></div>');
n.from_html('<div role="presentation"></div>');
n.from_html("<!> <div><!></div>", 1);
n.from_html("<div></div>");
n.from_html("<div></div>");
n.from_html("<!> <!>", 1);
n.from_html("<!> <!>", 1);
n.from_html("<div><!></div>");
n.from_html("<div><!></div>");
n.from_html("<!> <ul><!></ul> <!>", 1);
n.from_html("<div></div>");
n.from_html("<div><!></div> <!>", 1);
n.from_html("<footer><!></footer>");
n.from_html("<a><img/> <span> </span> <!></a>");
n.from_html("<img/>");
n.from_html("<a> </a>");
n.from_html('<span class="ms-1"> </span>');
n.from_html("<span> <!> </span>");
n.from_html("<a><!></a>");
n.from_html("<li><a><!></a></li>");
n.from_html("<ul><!></ul>");
n.from_html("<label><!></label>");
n.from_html("<input/> <!>", 1);
n.from_html("<input/> <!>", 1);
n.from_html("<input/> <!>", 1);
n.from_html('<button type="button"><!></button> <label class="hidden"><input/></label>', 1);
n.from_html("<div><!></div>");
n.from_html("<input/>");
n.from_html("<div><!></div>");
n.from_html("<!> <!> <!>", 1);
n.from_html("<input/>");
n.from_html("<div><input/> <label><!></label></div>");
n.from_html("<p><!></p>");
n.from_html("<div><!></div>");
n.from_html("<option> </option>");
n.from_html('<div role="presentation"> </div>');
n.from_html('<div role="presentation"></div>');
n.from_html('<select></select> <div tabindex="-1" role="listbox"><span class="flex gap-2 flex-wrap"><!></span> <div class="flex ms-auto gap-2 items-center"><!> <div class="w-[1px] bg-gray-300 dark:bg-gray-600"></div> <svg class="cursor-pointer h-3 w-3 ms-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div> <!></div>', 1);
n.from_html("<input/>");
n.from_html("<input/> <!>", 1);
n.from_html("<input/>");
n.from_svg('<svg slot="left" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>');
n.from_html('<div class="flex absolute inset-y-0 end-0 items-center text-gray-500 dark:text-gray-400"><!></div>');
n.from_html("<!> <!>", 1);
n.from_html("<option disabled selected> </option>");
n.from_html("<option> </option>");
n.from_html("<select><!><!></select>");
n.from_html("<div><!></div>");
n.from_html("<textarea></textarea>");
n.from_html("<div><!></div>");
n.from_html("<!> <!> <!>", 1);
n.from_html("<span></span> <!>", 1);
n.from_html("<div><img/></div>");
n.from_html("<div></div>");
n.from_html("<kbd><!></kbd>");
n.from_svg('<svg><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"></path></svg>');
n.from_svg('<svg><path d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"></path></svg>');
n.from_svg('<svg><path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"></path></svg>');
n.from_svg('<svg><path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z"></path></svg>');
n.from_html("<li><!></li>");
n.from_html("<a><!></a>");
n.from_html("<button><!></button>");
n.from_html('<div role="banner"><div class="flex justify-around items-center min-w-full"><!></div> <div class="flex justify-around items-center min-w-full"><!></div></div>');
n.from_html("<h3> </h3>");
n.from_html("<!> <!>", 1);
n.from_html('<!> <div role="document"><!> <!></div> <!>', 1);
n.from_html('<div></div>  <div tabindex="-1" aria-modal="true" role="dialog"><div><!></div></div>', 1);
n.from_html("<li><!></li>");
n.from_html('<div class="md:w-1/3 mt-4 md:mt-0"><!></div>');
n.from_html('<div class="flex flex-col md:flex-row p-4 max-w-screen-md justify-center mx-auto mt-2"><ul></ul> <!></div>');
n.from_html("<div><!></div>");
n.from_html("<a><!></a>");
n.from_svg("<svg><!></svg>");
n.from_html("<li><!></li>");
n.from_html("<div><!></div>");
n.from_html("<div><ul><!></ul></div>");
n.from_html("<li><!></li>");
n.from_html("<nav><ul><li><!></li> <!> <li><!></li></ul></nav>");
n.from_html('<h3 class="font-semibold text-gray-900 dark:text-white"> </h3>');
n.from_html('<div class="py-2 px-3 bg-gray-100 rounded-t-md border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700"><!></div>');
n.from_html("<!> <div><!></div>", 1);
n.from_html('<div><span class="text-base font-medium text-blue-700 dark:text-white"> </span> <span class="text-sm font-medium text-blue-700 dark:text-white"> </span></div>');
n.from_html("<div> </div>");
n.from_html("<div></div>");
n.from_html("<!> <div><!></div>", 1);
n.from_svg('<stop offset="0%"></stop><stop></stop><stop stop-color="transparent"></stop><stop offset="100%" stop-color="transparent"></stop>', 1);
n.from_svg('<stop offset="0%"></stop><stop offset="100%"></stop>', 1);
n.from_svg(`<svg><defs><linearGradient><!></linearGradient></defs><g stroke-width="2"><polygon points="165.000, 185.000, 188.511, 197.361, 184.021, 171.180, 
    203.042, 152.639, 176.756, 148.820, 165.000, 125.000, 
    153.244, 148.820, 126.958, 152.639, 145.979, 171.180,
    141.489, 197.361, 165.000, 185.000"></polygon></g></svg>`);
n.from_html('<!> <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white"> </p> <!>', 1);
n.from_html("<!> <!> <!> <!>", 1);
n.from_html("<div><!></div>");
n.from_html("<div><span> </span> <div><div></div></div> <span> </span></div>");
n.from_html("<!> <!> <!>", 1);
n.from_html("<p> </p>");
n.from_html("<p> </p>");
n.from_html("<span></span> <p> </p>", 1);
n.from_html("<a> </a>");
n.from_html('<dl><dt class="text-sm font-medium text-gray-500 dark:text-gray-400"> </dt> <dd class="flex items-center mb-3"><div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2"><div></div></div> <span class="text-sm font-medium text-gray-500 dark:text-gray-400"> </span></dd></dl>');
n.from_html('<dl><dt class="text-sm font-medium text-gray-500 dark:text-gray-400"> </dt> <dd class="flex items-center mb-3"><div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2"><div></div></div> <span class="text-sm font-medium text-gray-500 dark:text-gray-400"> </span></dd></dl>');
n.from_html('<div class="flex items-center mb-5"><!> <!> <!> <!></div> <div class="gap-8 sm:grid sm:grid-cols-2"><div></div> <div></div></div>', 1);
n.from_html('<p slot="text" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"> </p>');
n.from_html('<h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white"> </h3>');
n.from_html('<footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p> </p></footer>');
n.from_html('<a class="ps-4 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Report abuse</a>');
n.from_html('<div class="flex items-center mt-3 space-x-3 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600"><!> <!></div>');
n.from_html('<article><div class="flex items-center mb-4 space-x-4 rtl:space-x-reverse"><img class="w-10 h-10 rounded-full"/> <div class="space-y-1 font-medium dark:text-white"><p> <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400"> </time></p></div></div> <div class="flex items-center mb-1"><!> <!></div> <!> <!> <aside><p class="mt-1 text-xs text-gray-500 dark:text-gray-400"><!></p> <!></aside></article>');
n.from_html('<div class="flex items-center text-sm text-gray-500 dark:text-gray-400"><!></div>');
n.from_html("<li><!></li>");
n.from_html("<li><!></li>");
n.from_html("<li><!></li>");
n.from_html("<ul><!> <!> <!></ul>");
n.from_html('<footer><p class="mb-2 text-sm text-gray-500 dark:text-gray-400"> </p></footer>');
n.from_html('<article><div><div><img/> <div class="space-y-1 font-medium dark:text-white"><p> </p> <!></div></div> <!></div> <div class="col-span-2 mt-6 md:mt-0"><div class="flex items-start mb-5"><div class="pe-4"><!> <h4 class="text-xl font-bold text-gray-900 dark:text-white"> </h4></div> <p class="bg-primary-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded"> </p></div> <!></div></article>');
n.from_svg('<stop offset="0%"></stop><stop></stop><stop stop-color="transparent"></stop><stop offset="100%" stop-color="transparent"></stop>', 1);
n.from_svg('<stop offset="0%"></stop><stop offset="100%"></stop>', 1);
n.from_svg('<svg><defs><linearGradient><!></linearGradient></defs><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>');
n.from_svg('<stop offset="0%"></stop><stop></stop><stop stop-color="transparent"></stop><stop offset="100%" stop-color="transparent"></stop>', 1);
n.from_svg('<stop offset="0%"></stop><stop offset="100%"></stop>', 1);
n.from_svg('<svg><defs><linearGradient><!></linearGradient></defs><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path></svg>');
n.from_html("<aside><!></aside>");
n.from_html("<li><a><!> <span> </span> <!></a></li>");
n.from_html("<a><img/> <span> </span></a>");
n.from_html("<div><div><span> </span> <!></div> <!></div>");
n.from_html("<li><a> </a></li>");
n.from_svg('<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>');
n.from_svg('<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>');
n.from_html("<ul><!></ul>");
n.from_html("<li><button><!> <span> </span> <!></button> <!></li>");
n.from_html("<ul><!></ul>");
n.from_html("<div><!></div>");
n.from_html('<div role="status"><div class="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700"><svg width="48" height="48" class="text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg></div> <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div> <div class="flex items-center mt-4 space-x-3 rtl:space-x-reverse"><svg class="w-14 h-14 text-gray-200 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg> <div><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div> <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div></div> <span class="sr-only">Loading...</span></div>');
n.from_html('<div role="status"><div><svg width="48" height="48" class="text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg></div> <div class="w-full"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12"></div></div> <span class="sr-only">Loading...</span></div>');
n.from_html('<div role="status"><div class="flex justify-between items-center"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div> <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div> <div class="flex justify-between items-center pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div> <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div> <div class="flex justify-between items-center pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div> <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div> <div class="flex justify-between items-center pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div> <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div> <div class="flex justify-between items-center pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div> <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div> <span class="sr-only">Loading...</span></div>');
n.from_html('<div role="status"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12"></div> <span class="sr-only">Loading...</span></div>');
n.from_html('<div role="status"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div> <div class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div> <div class="flex justify-center items-center mt-4"><svg class="me-2 w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg> <div class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div> <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div> <span class="sr-only">Loading...</span></div>');
n.from_html('<div role="status"><div class="flex items-center space-x-2 rtl:space-x-reverse w-full"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-11/12"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-9/12"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div> <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-11/12"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-10/12"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div> <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-8/12"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div> <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></div> <span class="sr-only">Loading...</span></div>');
n.from_html('<div role="status"><svg width="48" height="48" class="text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"></path></svg> <span class="sr-only">Loading...</span></div>');
n.from_html('<div role="status"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div> <div class="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div> <div class="flex items-baseline mt-4 space-x-6 rtl:space-x-reverse"><div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div> <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div> <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div> <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div> <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div> <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div> <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div></div> <span class="sr-only">Loading...</span></div>');
n.from_svg('<svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>');
n.from_html('<!> <span class="sr-only"> </span>', 1);
n.from_svg('<svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>');
n.from_html('<!> <span class="sr-only"> </span>', 1);
n.from_html("<div><!> <!></div>");
n.from_html('<span class="sr-only"> </span>');
n.from_html("<span> </span>");
n.from_html("<span> </span>");
n.from_html("<!> <!>", 1);
n.from_html("<!> <!>", 1);
var vu = n.from_svg('<svg><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"></path></svg>');
function bu(e, t) {
  const r = n.legacy_rest_props(t, ["children", "$$slots", "$$events", "$$legacy"]), a = n.legacy_rest_props(r, [
    "color",
    "bg",
    "customColor",
    "size",
    "currentFill",
    "currentColor"
  ]);
  n.push(t, !1);
  let o = n.prop(t, "color", 12, "primary"), i = n.prop(t, "bg", 8, "text-gray-300"), s = n.prop(t, "customColor", 8, ""), l = n.prop(t, "size", 8, "8"), c = n.prop(t, "currentFill", 8, "currentFill"), u = n.prop(t, "currentColor", 8, "currentColor"), d = `w-${l()} h-${l()}`;
  c() !== "currentFill" && o(void 0);
  const f = {
    primary: "fill-primary-600",
    blue: "fill-blue-600",
    gray: "fill-gray-600 dark:fill-gray-300",
    green: "fill-green-500",
    red: "fill-red-600",
    yellow: "fill-yellow-400",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    white: "fill-white",
    custom: s()
  };
  let h = o() === void 0 ? "" : f[o()] ?? f.blue;
  n.init();
  var p = vu();
  n.attribute_effect(
    p,
    (b) => ({
      ...a,
      role: "status",
      class: b,
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }),
    [
      () => (n.deep_read_state(Ua), n.deep_read_state(i()), n.deep_read_state(r), n.untrack(() => Ua("inline -mt-px animate-spin dark:text-gray-600", d, i(), h, r.class)))
    ]
  );
  var g = n.child(p), m = n.sibling(g);
  n.reset(p), n.template_effect(() => {
    n.set_attribute(g, "fill", u()), n.set_attribute(m, "fill", c());
  }), n.append(e, p), n.pop();
}
n.from_html('<h3 class="text-base font-semibold"> </h3>');
n.from_html("<div></div>");
n.from_html('<div class="relative w-full h-full"><div></div> <!></div>');
n.from_html("<div></div>");
n.from_html('<div class="w-full h-full rounded-sm bg-gray-200 dark:bg-gray-700"></div>');
n.from_html("<div><!> <div></div></div>");
n.from_html("<div><table><!></table></div>");
n.from_html("<tbody><!></tbody>");
n.from_html("<tr><!></tr>");
n.from_html("<tr><!></tr>");
n.from_html("<thead><!></thead>");
n.from_html("<th><!></th>");
n.from_svg('<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>');
n.from_html('<div><div><label for="table-search" class="sr-only">Search</label> <div><div><!></div> <input type="text" id="table-search"/></div> <!></div> <table><!></table> <!></div>');
n.from_html('<div class="hidden tab_content_placeholder"><div><!></div></div>');
n.from_html('<li role="presentation"><button><!></button> <!></li>');
n.from_html('<div class="h-px bg-gray-200 dark:bg-gray-700"></div>');
n.from_html('<ul><!></ul> <!> <div role="tabpanel" aria-labelledby="id-tab"></div>', 1);
n.from_html("<div><time> </time> <ol><!></ol></div>");
n.from_html('<div class="text-sm font-normal"> </div>');
n.from_svg('<svg class="me-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path></svg> Private', 1);
n.from_svg('<svg class="me-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg> Public', 1);
n.from_html("<li><a><img/> <div><div><!></div> <!> <span><!></span></div></a></li>");
n.from_html("<ol><!></ol>");
n.from_html("<div><!></div>");
n.from_html("<li><span><img/></span> <div><div><time> </time> <div><!></div></div> <!></div></li>");
n.from_html("<ol><!></ol>");
n.from_svg('<svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>');
n.from_html("<time> </time>");
n.from_html("<h3> </h3>");
n.from_html("<time> </time>");
n.from_html("<li><div></div> <!> <!> <!> <!></li>");
n.from_html("<!> <div><!></div> <!>", 1);
n.from_html("<!> <!>", 1);
n.from_html("<div><!></div>");
n.from_html("<a><!></a>");
n.from_html("<blockquote><!></blockquote>");
n.from_html("<div><hr/> <div><!></div></div>");
n.from_html("<hr/>");
n.from_html("<figure><img/> <figcaption><!></figcaption></figure>");
n.from_html("<img/>");
n.from_html("<div><!></div>");
n.from_html("<li><!></li>");
n.from_html("<mark><!></mark>");
n.from_html("<p><!></p>");
n.from_html("<small><!></small>");
n.from_html("<span><!></span>");
n.from_html('<video><source/> <!> <track kind="captions"/> Your browser does not support the video tag.</video>', 2);
function yu(e, t) {
  n.push(t, !0);
  let r = n.prop(t, "active", 3, !1), a = n.prop(t, "delayMs", 3, 0), o = n.state(!1), i = null;
  function s() {
    i != null && (clearTimeout(i), i = null);
  }
  n.user_effect(() => {
    if (s(), !r()) {
      n.set(o, !1);
      return;
    }
    return i = setTimeout(
      () => {
        n.set(o, !0), i = null;
      },
      a()
    ), s;
  });
  var l = n.comment(), c = n.first_child(l);
  {
    var u = (d) => {
      var f = n.comment(), h = n.first_child(f);
      n.snippet(h, () => t.children ?? n.noop), n.append(d, f);
    };
    n.if(c, (d) => {
      n.get(o) && d(u);
    });
  }
  n.append(e, l), n.pop();
}
var xu = Object.defineProperty, wu = (e, t, r) => t in e ? xu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, W = (e, t, r) => wu(e, typeof t != "symbol" ? t + "" : t, r);
function _u() {
  return {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight
  };
}
function at(e, t) {
  const [r, a] = e;
  return r >= t.x && r <= t.x + t.width && a >= t.y && a <= t.y + t.height;
}
function Vr(e) {
  const t = _u();
  return !!(at([e.x, e.y], t) || at([e.x + e.width, e.y], t) || at([e.x + e.width, e.y + e.height], t) || at([e.x, e.y + e.height], t));
}
function _s(e, t) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function kt(e) {
  return {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  };
}
function ks(e, t) {
  const r = [e.x, e.y + e.height], a = [e.x + e.width, e.y + e.height];
  return at(r, t) && at(a, t);
}
function Cs(e, t) {
  const r = e.x + e.width / 2, a = e.y + e.height / 2;
  let o = Number.POSITIVE_INFINITY, i = -1;
  for (let s = 0; s < t.length; s++) {
    const l = t[s];
    if (_s(e, l)) return s;
    const c = l.x + l.width / 2, u = l.y + l.height / 2, d = Math.hypot(c - r, u - a);
    d < o && (o = d, i = s);
  }
  return i;
}
function Ms(e, t) {
  const r = Math.max(e.x, t.x), a = Math.max(e.y, t.y), o = Math.min(e.x + e.width, t.x + t.width), i = Math.min(e.y + e.height, t.y + t.height);
  return { x: r, y: a, width: Math.max(0, o - r), height: Math.max(0, i - a) };
}
function ku(e) {
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    t.push(a);
  }
  return t;
}
function Ss(e) {
  let t = e;
  for (; t != null && t.isContentEditable; )
    t = t.parentElement;
  return t ?? e.ownerDocument.documentElement;
}
function ya(e) {
  const t = [], r = ku(e.childNodes);
  if (r.length === 0)
    return [e];
  for (const a of r)
    ya(a).forEach((o) => {
      t.push(o);
    });
  return t;
}
function Es(e, t) {
  const r = ya(e), a = document.createRange();
  let o = 0, i = !1;
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    if (l.nodeName === "BR") {
      o += 1;
      continue;
    }
    const c = l.textContent ?? "";
    if (o + c.length > t.start && !i && (a.setStart(l, t.start - o), i = !0), i && o + c.length >= t.end)
      return a.setEnd(l, t.end - o), a;
    o += c?.length ?? 0;
  }
  return null;
}
const Gr = typeof document < "u" ? document.createRange() : null;
function Cu(e) {
  if (!(e instanceof Element)) return !1;
  const t = e.tagName.toLowerCase();
  if (/^h[1-6]$/.test(t)) return !0;
  const r = e.getAttribute("role");
  return r?.toLowerCase() === "heading";
}
function Mu(e) {
  try {
    if (!e || !e.ownerDocument) return !1;
    if (e instanceof Element) {
      if (!e.isConnected) return !1;
      if (e.getAttribute("data-harper-google-docs-target") === "true") {
        const s = e.closest(".kix-appview-editor");
        return s ? Vr(s.getBoundingClientRect()) : !1;
      }
      const a = e.getBoundingClientRect();
      if (!Vr(a)) return !1;
      const o = e.checkVisibility;
      if (typeof o == "function") return o.call(e);
      const i = getComputedStyle(e);
      return !(i.display === "none" || i.visibility === "hidden" || i.opacity === "0");
    }
    if (!Gr) return !1;
    const t = e.parentElement;
    if (t && !t.isConnected) return !1;
    Gr.selectNode(e);
    const r = Gr.getBoundingClientRect();
    return Vr(r);
  } catch {
    return !1;
  }
}
const As = class Ue {
  /**
   * Create a range-like object for a given text input field.
   * @param field - A HTMLTextAreaElement or a HTMLInputElement (of type "text").
   * @param startOffset - The starting character index.
   * @param endOffset - The ending character index.
   */
  constructor(t, r, a) {
    if (W(this, "field"), W(this, "startOffset"), W(this, "endOffset"), W(this, "arena"), !(t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement))
      throw new Error("TextFieldRange expects an HTMLTextAreaElement or HTMLInputElement");
    this.field = t, this.startOffset = r, this.endOffset = a, this.arena = Ue.ensureArena(this.field), this.arena.refs++;
  }
  /**
   * Creates (or reuses) an off-screen mirror element that mimics the field's styles
   * and positions it exactly over the field.
   */
  static ensureArena(t) {
    const r = Ue.arenas.get(t);
    if (r != null && r.mirror.isConnected) return r;
    if (r) {
      try {
        r.mirror.remove();
      } catch {
      }
      Ue.arenas.delete(t);
    }
    const a = document.createElement("div");
    a.className = "harper-textfield-mirror";
    const o = window.getComputedStyle(t);
    [
      "fontFamily",
      "fontSize",
      "fontWeight",
      "fontStyle",
      "letterSpacing",
      "lineHeight",
      "textTransform",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "borderTopWidth",
      "borderRightWidth",
      "borderBottomWidth",
      "borderLeftWidth",
      "boxSizing",
      "overflowX",
      "overflowY"
    ].forEach((l) => {
      a.style[l] = o[l];
    }), t instanceof HTMLTextAreaElement && (a.style.overflowX = "auto", a.style.overflowY = "auto"), Ue.positionMirror(a, t), Object.assign(a.style, {
      boxSizing: "border-box",
      whiteSpace: t.tagName.toLowerCase() === "textarea" ? "pre-wrap" : "pre",
      wordWrap: "break-word",
      visibility: "hidden",
      position: "absolute",
      pointerEvents: "none"
    });
    const i = document.createTextNode("");
    a.appendChild(i), i.nodeValue = t.value, document.body.appendChild(a), a.scrollTop = t.scrollTop, a.scrollLeft = t.scrollLeft;
    const s = { mirror: a, text: i, refs: 0 };
    return Ue.arenas.set(t, s), s;
  }
  static positionMirror(t, r) {
    const a = r.getBoundingClientRect(), o = window.scrollY || document.documentElement.scrollTop, i = window.scrollX || document.documentElement.scrollLeft;
    Object.assign(t.style, {
      top: `${a.top + o}px`,
      left: `${a.left + i}px`,
      width: `${a.width}px`,
      height: `${a.height}px`
    });
  }
  /**
   * Updates the mirror's text node with the current value of the field.
   */
  syncMirror() {
    this.arena.text.nodeValue = this.field.value, this.arena.mirror.scrollTop = this.field.scrollTop, this.arena.mirror.scrollLeft = this.field.scrollLeft, Ue.positionMirror(this.arena.mirror, this.field);
  }
  /**
   * Returns an array of DOMRect objects corresponding to the range's visual segments.
   * This mimics the native Range.getClientRects() method.
   * @returns {DOMRect[]} An array of DOMRect objects.
   */
  getClientRects() {
    this.syncMirror();
    const t = document.createRange();
    t.setStart(this.arena.text, this.startOffset), t.setEnd(this.arena.text, this.endOffset);
    let r = Array.from(t.getClientRects());
    const a = kt(this.field.getBoundingClientRect());
    return r = r.filter((o) => {
      const i = kt(o);
      return _s(i, a);
    }), r;
  }
  getBoundingClientRect() {
    return this.syncMirror(), this.arena.mirror.getBoundingClientRect();
  }
  /**
   * Detaches (removes) the mirror element from the document.
   */
  detach() {
    var t;
    if (this.arena.refs = Math.max(0, this.arena.refs - 1), !document.contains(this.field)) {
      try {
        (t = this.arena.mirror.parentNode) == null || t.removeChild(this.arena.mirror);
      } catch {
      }
      Ue.arenas.delete(this.field);
    }
  }
};
W(As, "arenas", /* @__PURE__ */ new WeakMap());
let Ls = As;
function Ae(e, t) {
  let r = e;
  for (; r != null; ) {
    if (t(r)) return r;
    r = r.parentElement;
  }
  return null;
}
function Su(e) {
  return Ae(
    e,
    (t) => !Ie(t) && t.closest("article, main, section") != null
  );
}
function Ns(e) {
  return Ae(
    e,
    (t) => !Ie(t) && t.classList.contains("public-DraftEditor-content")
  );
}
function Eu(e) {
  return Ae(
    e,
    (t) => !Ie(t) && t.classList.contains("ProseMirror")
  );
}
function xa(e) {
  return Ae(
    e,
    (t) => !Ie(t) && t.classList.contains("cm-editor")
  );
}
function Au() {
  return document.getElementById("notion-app");
}
function Rs(e) {
  return Ae(
    e,
    (t) => !Ie(t) && t.getAttribute("data-slate-editor") === "true"
  );
}
function Ts(e) {
  return Ae(
    e,
    (t) => !Ie(t) && t.getAttribute("data-lexical-editor") === "true"
  );
}
function Lu(e) {
  return Ae(
    e,
    (t) => !Ie(t) && t.classList.contains("ck-editor__editable")
  );
}
function Nu(e) {
  return Ae(
    e,
    (t) => t.nodeName == "MAIN" && location.hostname == "medium.com"
  );
}
function Ru(e) {
  return Ae(
    e,
    (t) => !Ie(t) && t.nodeName == "SHREDDIT-COMPOSER"
  );
}
function Tu(e) {
  return Ae(
    e,
    (t) => !Ie(t) && t.classList.contains("ql-container")
  );
}
function Iu(e) {
  return Ae(
    e,
    (t) => !Ie(t) && (t.id === "p2" || t.classList.contains("p2"))
  );
}
function Pu(e) {
  return Ae(
    e,
    (t) => !Ie(t) && (t.id === "editor" || t.classList.contains("editor-styles-wrapper"))
  );
}
function zu(e) {
  return Ae(e, (t) => t.nodeName == "TRIX-EDITOR");
}
function Is() {
  const e = document.activeElement;
  if (e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement && e.type === "text") {
    if (e.selectionStart == null || e.selectionEnd == null || e.selectionStart !== e.selectionEnd)
      return null;
    const a = e.selectionStart, o = new Ls(e, a, a), i = o.getClientRects();
    return o.detach(), i.length ? kt(i[0]) : null;
  }
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  return r.collapsed ? kt(r.getBoundingClientRect()) : null;
}
function Vn(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement;
}
function Ie(e) {
  return e.nodeType === Node.TEXT_NODE;
}
let Ur;
function Ou() {
  return Ur !== void 0 || (Ur = document.createElement("canvas").getContext("2d")), Ur;
}
function ju(e, t, r, a) {
  const o = e.getBoundingClientRect();
  if (o.width <= 0 || o.height <= 0)
    return null;
  const i = Math.max(0, Math.min(r, t.length)), s = Math.max(i, Math.min(a, t.length));
  if (i === s)
    return null;
  const l = Ou();
  if (l == null)
    return o;
  const c = getComputedStyle(e), u = c.font && c.font !== "" ? c.font : `${c.fontStyle} ${c.fontVariant} ${c.fontWeight} ${c.fontSize} / ${c.lineHeight} ${c.fontFamily}`;
  l.font = u;
  const d = t.slice(0, i), f = t.slice(i, s), h = l.measureText(d).width, p = Math.max(1, l.measureText(f).width), g = Number.parseFloat(c.letterSpacing), m = Number.isFinite(g) ? g : 0, b = h + Math.max(0, i - 1) * m, y = p + Math.max(0, s - i - 1) * m, v = o.x + Math.min(o.width, Math.max(0, b)), _ = Math.max(1, Math.min(o.right - v, y));
  return new DOMRect(v, o.y, _, o.height);
}
function Ya(e, t) {
  const r = Math.min(e.length, t.length);
  let a = 0;
  for (; a < r && e.charCodeAt(a) === t.charCodeAt(a); )
    a += 1;
  return a;
}
function Xa(e, t) {
  const r = Math.min(e.length, t.length);
  let a = 0;
  for (; a < r && e.charCodeAt(e.length - 1 - a) === t.charCodeAt(t.length - 1 - a); )
    a += 1;
  return a;
}
function Ka(e, t) {
  if (!e || !t)
    return 0;
  const r = new Array(t.length + 1).fill(0), a = new Array(t.length + 1).fill(0);
  for (let o = 1; o <= e.length; o += 1) {
    a[0] = 0;
    for (let i = 1; i <= t.length; i += 1)
      e.charCodeAt(o - 1) === t.charCodeAt(i - 1) ? a[i] = r[i - 1] + 1 : a[i] = Math.max(r[i], a[i - 1]);
    for (let i = 0; i <= t.length; i += 1)
      r[i] = a[i];
  }
  return r[t.length];
}
function Fu(e, t) {
  const r = Math.max(0, Math.min(t.span.start, t.source.length)), a = Math.max(r, Math.min(t.span.end, t.source.length)), o = t.source.slice(r, a);
  if (o.length === 0)
    return null;
  if (e.slice(r, a) === o)
    return { start: r, end: a };
  const i = a - r, s = e.length - t.source.length, l = Math.max(0, r + s);
  for (let m = -12; m <= 12; m += 1) {
    const b = l + m;
    if (b < 0)
      continue;
    const y = b + i;
    if (!(y > e.length) && e.slice(b, y) === o)
      return { start: b, end: y };
  }
  const c = 64, u = t.source.slice(Math.max(0, r - c), r), d = t.source.slice(
    a,
    Math.min(t.source.length, a + c)
  ), f = Math.max(u.length * 2, u.length + 64), h = Math.max(d.length * 2, d.length + 64), p = [];
  let g = 0;
  for (; g <= e.length; ) {
    const m = e.indexOf(o, g);
    if (m < 0)
      break;
    const b = m + o.length, y = e.slice(Math.max(0, m - f), m), v = e.slice(
      b,
      Math.min(e.length, b + h)
    );
    let _ = 0;
    _ += Ka(u, y) * 8, _ += Ka(d, v) * 8, _ += Ya(u, y) * 4, _ += Xa(u, y) * 4, _ += Ya(d, v) * 4, _ += Xa(d, v) * 4, _ -= Math.abs(m - l) / 1e3, p.push({ start: m, end: b, score: _ }), g = m + 1;
  }
  return p.length === 0 ? null : (p.sort((m, b) => b.score - m.score), { start: p[0].start, end: p[0].end });
}
function Ps(e) {
  return e.getAttribute("data-harper-google-docs-target") === "true";
}
function Bu(e, t) {
  var r, a;
  const o = ya(e), i = [];
  let s = 0;
  for (const l of o) {
    const c = l.textContent ?? "", u = c.length, d = s, f = d + u;
    s = f;
    const h = Math.max(0, t.start - d), p = Math.min(u, t.end - d);
    if (u === 0 || f <= t.start || d >= t.end)
      continue;
    const g = Du(l, e);
    if (g != null) {
      const v = ju(g, c, h, p);
      if (v != null && v.width > 0 && v.height > 0) {
        i.push(v);
        continue;
      }
    }
    const m = document.createRange();
    m.setStart(l, h), m.setEnd(l, p);
    const b = Array.from(m.getClientRects()).filter(
      (v) => v.width > 0 && v.height > 0
    );
    if (b.length > 0) {
      i.push(...b), (r = m.detach) == null || r.call(m);
      continue;
    }
    const y = g?.getBoundingClientRect();
    y != null && y.width > 0 && y.height > 0 && i.push(y), (a = m.detach) == null || a.call(m);
  }
  return i;
}
function Du(e, t) {
  let r = e.parentElement;
  for (; r != null && r !== t; ) {
    if (getComputedStyle(r).position === "absolute")
      return r;
    r = r.parentElement;
  }
  return null;
}
async function Hu(e, t, r) {
  try {
    const a = Math.max(0, Math.min(e.start, r.length)), o = Math.max(a, Math.min(e.end, r.length)), i = r.slice(a, o), s = 64, l = r.slice(Math.max(0, a - s), a), c = r.slice(o, Math.min(r.length, o + s)), u = {
      start: e.start,
      end: e.end,
      replacementText: t,
      expectedText: i,
      beforeContext: l,
      afterContext: c
    }, d = window.__harperGoogleDocsBridgeClient;
    return d && typeof d.replaceText == "function" ? !!await d.replaceText(
      u.start,
      u.end,
      u.replacementText,
      u.expectedText,
      u.beforeContext,
      u.afterContext
    ) : !1;
  } catch {
    return !1;
  }
}
const zs = ".kix-appview-editor", Wu = "data-harper-gdocs-syncing";
function qu(e, t, r, a) {
  if (!Ps(e))
    return null;
  try {
    const o = document.querySelector(zs), i = e.textContent ?? "", s = Fu(i, t);
    if (!o || s == null)
      return [];
    const l = Bu(e, s), c = kt(o.getBoundingClientRect());
    if (l.length === 0)
      return [];
    const u = [];
    for (const d of l) {
      if (!ks(d, c))
        continue;
      const f = Ms(d, c);
      u.push({
        x: f.x,
        y: f.y,
        width: f.width,
        height: f.height,
        lint: t,
        source: o,
        rule: r,
        applySuggestion: async (h) => {
          const p = Uu(h, s, i);
          await Hu(s, p, i);
        },
        ignoreLint: a.ignoreLint ? () => a.ignoreLint(t.context_hash) : void 0
      });
    }
    return u;
  } catch {
    return [];
  }
}
function qt(e) {
  return e instanceof HTMLElement && (e.classList.contains("kix-appview-editor") || e.closest(zs) != null);
}
function Ja(e) {
  return qt(e) && e.getAttribute(Wu) === "true";
}
function $u(e) {
  return qt(e) ? e : null;
}
function Vu(e) {
  if (!qt(e))
    return null;
  const t = e.getBoundingClientRect();
  return {
    x: t.x - e.scrollLeft,
    y: t.y - e.scrollTop
  };
}
function Gu(e, t) {
  return qt(t) ? (e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.width = "0px", e.style.height = "0px", e.style.contain = "none", e.style.transform = "none", e.style.zIndex = "2147483647", !0) : !1;
}
function Uu(e, t, r) {
  switch (e.kind) {
    case me.Replace:
      return e.replacement_text;
    case me.Remove:
      return "";
    case me.InsertAfter:
      return r.slice(t.start, t.end) + e.replacement_text;
  }
}
async function Yu(e, t, r) {
  const a = t.span(), o = { start: a.start, end: a.end };
  return a.free(), {
    span: o,
    message_html: t.message_html(),
    problem_text: t.get_problem_text(),
    lint_kind: t.lint_kind(),
    lint_kind_pretty: t.lint_kind_pretty(),
    suggestions: t.suggestions().map((i) => {
      const s = { kind: i.kind(), replacement_text: i.get_replacement_text() };
      return i.free(), s;
    }),
    context_hash: (await r.contextHash(e, t)).toString(),
    source: e
  };
}
function Xu(e, t, r) {
  switch (r.kind) {
    case me.Remove:
      return e.slice(0, t.start) + e.slice(t.end);
    case me.Replace:
      return e.slice(0, t.start) + r.replacement_text + e.slice(t.end);
    case me.InsertAfter:
      return e.slice(0, t.end) + r.replacement_text + e.slice(t.end);
  }
}
function Ku(e, t, r, a) {
  var o;
  const i = qu(e, t, r, a);
  if (i != null)
    return i;
  try {
    let s = null;
    if (Vn(e) ? s = new Ls(e, t.span.start, t.span.end) : s = Es(e, t.span), !s)
      return [];
    const l = Array.from(
      s.getClientRects ? s.getClientRects() : []
    ), c = kt(s.getBoundingClientRect());
    (o = s.detach) == null || o.call(s);
    const u = [];
    let d = null;
    if (e.tagName == null ? d = e.parentElement : d = e, d == null)
      return [];
    for (const f of l) {
      if (!ks(f, c))
        continue;
      const h = Ms(f, c);
      u.push({
        x: h.x,
        y: h.y,
        width: h.width,
        height: h.height,
        lint: t,
        source: d,
        rule: r,
        range: s instanceof Range ? s : void 0,
        applySuggestion: (p) => {
          const g = Vn(e) ? e.value : e.innerText;
          Zu(e, t.span, Ju(p, t.span, g));
        },
        ignoreLint: a.ignoreLint ? () => a.ignoreLint(t.context_hash) : void 0
      });
    }
    return u;
  } catch {
    return [];
  }
}
function Ju(e, t, r) {
  switch (e.kind) {
    case me.Replace:
      return e.replacement_text;
    case me.Remove:
      return "";
    case me.InsertAfter:
      return r.slice(t.start, t.end) + e.replacement_text;
  }
}
function Zu(e, t, r) {
  Vn(e) ? Qu(e, t, r) : Ts(e) != null ? ed(e, t, r) : Ns(e) != null ? td(e, t, r) : xa(e) != null ? nd(e, t, r) : Rs(e) != null || Lu(e) != null ? rd(e, t, r) : ad(e, t, r), e.dispatchEvent(new Event("change", { bubbles: !0 }));
}
function Qu(e, t, r) {
  e.focus(), e.setSelectionRange(t.start, t.end), document.execCommand("insertText", !1, r);
}
function ed(e, t, r) {
  const a = $t(e, t);
  if (!a) return;
  const { doc: o, sel: i, range: s } = a;
  Vt(o, i, s, r), e.dispatchEvent(new InputEvent("input", { bubbles: !0, cancelable: !1 }));
}
function td(e, t, r) {
  const a = $t(e, t);
  if (!a) return;
  const { doc: o, sel: i, range: s } = a;
  setTimeout(() => {
    const l = new InputEvent("beforeinput", {
      bubbles: !0,
      cancelable: !0,
      inputType: "insertText",
      data: r
    });
    e.dispatchEvent(l), l.defaultPrevented || Vt(o, i, s, r), e.dispatchEvent(new InputEvent("input", { bubbles: !0, inputType: "insertText" }));
  }, 0);
}
function $t(e, t) {
  var r;
  const a = e.ownerDocument, o = (r = a.defaultView) == null ? void 0 : r.getSelection();
  if (!o)
    return null;
  e.focus();
  const i = Es(e, t);
  return i ? (o.removeAllRanges(), o.addRange(i), { doc: a, sel: o, range: i }) : null;
}
function rd(e, t, r) {
  const a = $t(e, t);
  if (!a) return;
  const { doc: o, sel: i, range: s } = a, l = {
    bubbles: !0,
    cancelable: !0,
    inputType: "insertReplacementText",
    data: r
  };
  "StaticRange" in self && (l.targetRanges = [new StaticRange(s)]);
  const c = new InputEvent("beforeinput", l);
  e.dispatchEvent(c), c.defaultPrevented || (Vt(o, i, s, r), e.dispatchEvent(new InputEvent("input", { bubbles: !0, cancelable: !1 })));
}
function nd(e, t, r) {
  const a = $t(e, t);
  if (!a) return;
  const { doc: o, sel: i, range: s } = a, l = {
    bubbles: !0,
    cancelable: !0,
    inputType: "insertReplacementText",
    data: r
  };
  "StaticRange" in self && (l.targetRanges = [new StaticRange(s)]);
  const c = new InputEvent("beforeinput", l);
  e.dispatchEvent(c), c.defaultPrevented || (Vt(o, i, s, r), e.dispatchEvent(
    new InputEvent("input", {
      bubbles: !0,
      cancelable: !1,
      inputType: "insertReplacementText",
      data: r
    })
  ));
}
function Vt(e, t, r, a) {
  const o = r.startContainer, i = r.endContainer;
  if (o === i && o.nodeType === Node.TEXT_NODE) {
    const s = o, l = r.startOffset, c = r.endOffset, u = s.textContent || "", d = u.substring(0, l) + a + u.substring(c);
    s.textContent = d;
    const f = e.createRange(), h = l + a.length;
    f.setStart(s, h), f.setEnd(s, h), t.removeAllRanges(), t.addRange(f);
  } else {
    r.deleteContents();
    const s = e.createTextNode(a);
    r.insertNode(s);
    const l = e.createRange();
    l.setStartAfter(s), l.setEndAfter(s), t.removeAllRanges(), t.addRange(l);
  }
}
function ad(e, t, r) {
  if (t && r !== void 0) {
    const a = $t(e, t);
    if (a) {
      const { doc: o, sel: i, range: s } = a;
      Vt(o, i, s, r), e.dispatchEvent(new InputEvent("input", { bubbles: !0, cancelable: !1 }));
      return;
    }
  }
  e.textContent = Xu(e.innerText, t, {
    kind: me.Replace,
    replacement_text: r
  }), e.dispatchEvent(new InputEvent("input", { bubbles: !0 }));
}
var yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Er(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function od(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function a() {
      return this instanceof a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var o = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(r, a, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), r;
}
var Yr, Za;
function wa() {
  if (Za) return Yr;
  Za = 1;
  var e = Array.isArray, t = Object.prototype.toString;
  Yr = e || r;
  function r(a) {
    return t.call(a) === "[object Array]";
  }
  return Yr;
}
var Qa, eo;
function Gt() {
  return eo || (eo = 1, Qa = "2"), Qa;
}
var Xr, to;
function Ut() {
  if (to) return Xr;
  to = 1;
  var e = /* @__PURE__ */ Gt();
  Xr = t;
  function t(r) {
    return r && r.type === "VirtualNode" && r.version === e;
  }
  return Xr;
}
var Kr, ro;
function ut() {
  if (ro) return Kr;
  ro = 1, Kr = e;
  function e(t) {
    return t && t.type === "Widget";
  }
  return Kr;
}
var Jr, no;
function Ar() {
  if (no) return Jr;
  no = 1, Jr = e;
  function e(t) {
    return t && t.type === "Thunk";
  }
  return Jr;
}
var Zr, ao;
function Lr() {
  if (ao) return Zr;
  ao = 1, Zr = e;
  function e(t) {
    return t && (typeof t.hook == "function" && !t.hasOwnProperty("hook") || typeof t.unhook == "function" && !t.hasOwnProperty("unhook"));
  }
  return Zr;
}
var Qr, oo;
function Os() {
  if (oo) return Qr;
  oo = 1;
  var e = /* @__PURE__ */ Gt(), t = /* @__PURE__ */ Ut(), r = /* @__PURE__ */ ut(), a = /* @__PURE__ */ Ar(), o = /* @__PURE__ */ Lr();
  Qr = l;
  var i = {}, s = [];
  function l(c, u, d, f, h) {
    this.tagName = c, this.properties = u || i, this.children = d || s, this.key = f != null ? String(f) : void 0, this.namespace = typeof h == "string" ? h : null;
    var p = d && d.length || 0, g = 0, m = !1, b = !1, y = !1, v;
    for (var _ in u)
      if (u.hasOwnProperty(_)) {
        var C = u[_];
        o(C) && C.unhook && (v || (v = {}), v[_] = C);
      }
    for (var x = 0; x < p; x++) {
      var w = d[x];
      t(w) ? (g += w.count || 0, !m && w.hasWidgets && (m = !0), !b && w.hasThunks && (b = !0), !y && (w.hooks || w.descendantHooks) && (y = !0)) : !m && r(w) ? typeof w.destroy == "function" && (m = !0) : !b && a(w) && (b = !0);
    }
    this.count = p + g, this.hasWidgets = m, this.hasThunks = b, this.hooks = v, this.descendantHooks = y;
  }
  return l.prototype.version = e, l.prototype.type = "VirtualNode", Qr;
}
var en, io;
function js() {
  if (io) return en;
  io = 1;
  var e = /* @__PURE__ */ Gt();
  en = t;
  function t(r) {
    this.text = String(r);
  }
  return t.prototype.version = e, t.prototype.type = "VirtualText", en;
}
var tn, so;
function Nr() {
  if (so) return tn;
  so = 1;
  var e = /* @__PURE__ */ Gt();
  tn = t;
  function t(r) {
    return r && r.type === "VirtualText" && r.version === e;
  }
  return tn;
}
var lo, co;
function id() {
  return co || (co = 1, lo = (function(e) {
    var t = String.prototype.split, r = /()??/.exec("")[1] === e, a;
    return a = function(o, d, s) {
      if (Object.prototype.toString.call(d) !== "[object RegExp]")
        return t.call(o, d, s);
      var l = [], c = (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.extended ? "x" : "") + // Proposed for ES6
      (d.sticky ? "y" : ""), u = 0, d = new RegExp(d.source, c + "g"), f, h, p, g;
      for (o += "", r || (f = new RegExp("^" + d.source + "$(?!\\s)", c)), s = s === e ? -1 >>> 0 : (
        // Math.pow(2, 32) - 1
        s >>> 0
      ); (h = d.exec(o)) && (p = h.index + h[0].length, !(p > u && (l.push(o.slice(u, h.index)), !r && h.length > 1 && h[0].replace(f, function() {
        for (var m = 1; m < arguments.length - 2; m++)
          arguments[m] === e && (h[m] = e);
      }), h.length > 1 && h.index < o.length && Array.prototype.push.apply(l, h.slice(1)), g = h[0].length, u = p, l.length >= s))); )
        d.lastIndex === h.index && d.lastIndex++;
      return u === o.length ? (g || !d.test("")) && l.push("") : l.push(o.slice(u)), l.length > s ? l.slice(0, s) : l;
    }, a;
  })()), lo;
}
var rn, uo;
function sd() {
  if (uo) return rn;
  uo = 1;
  var e = /* @__PURE__ */ id(), t = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/, r = /^\.|#/;
  rn = a;
  function a(o, i) {
    if (!o)
      return "DIV";
    var s = !i.hasOwnProperty("id"), l = e(o, t), c = null;
    r.test(l[1]) && (c = "DIV");
    var u, d, f, h;
    for (h = 0; h < l.length; h++)
      d = l[h], d && (f = d.charAt(0), c ? f === "." ? (u = u || [], u.push(d.substring(1, d.length))) : f === "#" && s && (i.id = d.substring(1, d.length)) : c = d);
    return u && (i.className && u.push(i.className), i.className = u.join(" ")), i.namespace ? c : c.toUpperCase();
  }
  return rn;
}
var nn, fo;
function ld() {
  if (fo) return nn;
  fo = 1, nn = e;
  function e(t) {
    if (!(this instanceof e))
      return new e(t);
    this.value = t;
  }
  return e.prototype.hook = function(t, r) {
    t[r] !== this.value && (t[r] = this.value);
  }, nn;
}
var an, ho;
function cd() {
  if (ho) return an;
  ho = 1;
  var e = typeof window < "u" ? window : typeof yr < "u" ? yr : {};
  an = t;
  function t(r, a) {
    return r in e ? e[r] : (e[r] = a, a);
  }
  return an;
}
var on, po;
function ud() {
  if (po) return on;
  po = 1;
  var e = /* @__PURE__ */ cd();
  on = t;
  function t(r, a, o) {
    var i = "__INDIVIDUAL_ONE_VERSION_" + r, s = i + "_ENFORCE_SINGLETON", l = e(s, a);
    if (l !== a)
      throw new Error("Can only have one copy of " + r + `.
You already have version ` + l + ` installed.
This means you cannot install version ` + a);
    return e(i, o);
  }
  return on;
}
var sn, mo;
function dd() {
  if (mo) return sn;
  mo = 1;
  var e = /* @__PURE__ */ ud(), t = "7";
  e("ev-store", t);
  var r = "__EV_STORE_KEY@" + t;
  sn = a;
  function a(o) {
    var i = o[r];
    return i || (i = o[r] = {}), i;
  }
  return sn;
}
var ln, go;
function fd() {
  if (go) return ln;
  go = 1;
  var e = /* @__PURE__ */ dd();
  ln = t;
  function t(r) {
    if (!(this instanceof t))
      return new t(r);
    this.value = r;
  }
  return t.prototype.hook = function(r, a) {
    var o = e(r), i = a.substr(3);
    o[i] = this.value;
  }, t.prototype.unhook = function(r, a) {
    var o = e(r), i = a.substr(3);
    o[i] = void 0;
  }, ln;
}
var cn, vo;
function hd() {
  if (vo) return cn;
  vo = 1;
  var e = /* @__PURE__ */ wa(), t = /* @__PURE__ */ Os(), r = /* @__PURE__ */ js(), a = /* @__PURE__ */ Ut(), o = /* @__PURE__ */ Nr(), i = /* @__PURE__ */ ut(), s = /* @__PURE__ */ Lr(), l = /* @__PURE__ */ Ar(), c = /* @__PURE__ */ sd(), u = /* @__PURE__ */ ld(), d = /* @__PURE__ */ fd();
  cn = f;
  function f(v, _, C) {
    var x = [], w, M, E, S;
    return !C && m(_) && (C = _, M = {}), M = M || _ || {}, w = c(v, M), M.hasOwnProperty("key") && (E = M.key, M.key = void 0), M.hasOwnProperty("namespace") && (S = M.namespace, M.namespace = void 0), w === "INPUT" && !S && M.hasOwnProperty("value") && M.value !== void 0 && !s(M.value) && (M.value = u(M.value)), p(M), C != null && h(C, x, w, M), new t(w, M, x, E, S);
  }
  function h(v, _, C, x) {
    if (typeof v == "string")
      _.push(new r(v));
    else if (typeof v == "number")
      _.push(new r(String(v)));
    else if (g(v))
      _.push(v);
    else if (e(v))
      for (var w = 0; w < v.length; w++)
        h(v[w], _, C, x);
    else {
      if (v == null)
        return;
      throw b({
        foreignObject: v,
        parentVnode: {
          tagName: C,
          properties: x
        }
      });
    }
  }
  function p(v) {
    for (var _ in v)
      if (v.hasOwnProperty(_)) {
        var C = v[_];
        if (s(C))
          continue;
        _.substr(0, 3) === "ev-" && (v[_] = d(C));
      }
  }
  function g(v) {
    return a(v) || o(v) || i(v) || l(v);
  }
  function m(v) {
    return typeof v == "string" || e(v) || g(v);
  }
  function b(v) {
    var _ = new Error();
    return _.type = "virtual-hyperscript.unexpected.virtual-element", _.message = `Unexpected virtual child passed to h().
Expected a VNode / Vthunk / VWidget / string but:
got:
` + y(v.foreignObject) + `.
The parent vnode is:
` + y(v.parentVnode), _.foreignObject = v.foreignObject, _.parentVnode = v.parentVnode, _;
  }
  function y(v) {
    try {
      return JSON.stringify(v, null, "    ");
    } catch {
      return String(v);
    }
  }
  return cn;
}
var un, bo;
function Fs() {
  if (bo) return un;
  bo = 1;
  var e = /* @__PURE__ */ hd();
  return un = e, un;
}
var pd = /* @__PURE__ */ Fs();
const pr = /* @__PURE__ */ Er(pd);
function ee(e, t) {
  let r = e.length;
  Array.isArray(e[0]) || (e = [e]), Array.isArray(t[0]) || (t = t.map((s) => [s]));
  let a = t[0].length, o = t[0].map((s, l) => t.map((c) => c[l])), i = e.map((s) => o.map((l) => {
    let c = 0;
    if (!Array.isArray(s)) {
      for (let u of l)
        c += s * u;
      return c;
    }
    for (let u = 0; u < s.length; u++)
      c += s[u] * (l[u] || 0);
    return c;
  }));
  return r === 1 && (i = i[0]), a === 1 ? i.map((s) => s[0]) : i;
}
function Yt(e) {
  return Ye(e) === "string";
}
function Ye(e) {
  return (Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function xr(e, { precision: t, unit: r }) {
  return Xe(e) ? "none" : Bs(e, t) + (r ?? "");
}
function Xe(e) {
  return Number.isNaN(e) || e instanceof Number && e?.none;
}
function le(e) {
  return Xe(e) ? 0 : e;
}
function Bs(e, t) {
  if (e === 0)
    return 0;
  let r = ~~e, a = 0;
  r && t && (a = ~~Math.log10(Math.abs(r)) + 1);
  const o = 10 ** (t - a);
  return Math.floor(e * o + 0.5) / o;
}
const md = {
  deg: 1,
  grad: 0.9,
  rad: 180 / Math.PI,
  turn: 360
};
function Ds(e) {
  if (!e)
    return;
  e = e.trim();
  const t = /^([a-z]+)\((.+?)\)$/i, r = /^-?[\d.]+$/, a = /%|deg|g?rad|turn$/, o = /\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;
  let i = e.match(t);
  if (i) {
    let s = [];
    return i[2].replace(o, (l, c) => {
      let u = c.match(a), d = c;
      if (u) {
        let f = u[0], h = d.slice(0, -f.length);
        f === "%" ? (d = new Number(h / 100), d.type = "<percentage>") : (d = new Number(h * md[f]), d.type = "<angle>", d.unit = f);
      } else r.test(d) ? (d = new Number(d), d.type = "<number>") : d === "none" && (d = new Number(NaN), d.none = !0);
      l.startsWith("/") && (d = d instanceof Number ? d : new Number(d), d.alpha = !0), typeof d == "object" && d instanceof Number && (d.raw = c), s.push(d);
    }), {
      name: i[1].toLowerCase(),
      rawName: i[1],
      rawArgs: i[2],
      // An argument could be (as of css-color-4):
      // a number, percentage, degrees (hue), ident (in color())
      args: s
    };
  }
}
function Hs(e) {
  return e[e.length - 1];
}
function Bt(e, t, r) {
  return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * r;
}
function Ws(e, t, r) {
  return (r - e) / (t - e);
}
function _a(e, t, r) {
  return Bt(t[0], t[1], Ws(e[0], e[1], r));
}
function qs(e) {
  return e.map((t) => t.split("|").map((r) => {
    r = r.trim();
    let a = r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
    if (a) {
      let o = new String(a[1]);
      return o.range = [+a[2], +a[3]], o;
    }
    return r;
  }));
}
function $s(e, t, r) {
  return Math.max(Math.min(r, t), e);
}
function Rr(e, t) {
  return Math.sign(e) === Math.sign(t) ? e : -e;
}
function Pe(e, t) {
  return Rr(Math.abs(e) ** t, e);
}
function ka(e, t) {
  return t === 0 ? 0 : e / t;
}
function Vs(e, t, r = 0, a = e.length) {
  for (; r < a; ) {
    const o = r + a >> 1;
    e[o] < t ? r = o + 1 : a = o;
  }
  return r;
}
var gd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  bisectLeft: Vs,
  clamp: $s,
  copySign: Rr,
  interpolate: Bt,
  interpolateInv: Ws,
  isNone: Xe,
  isString: Yt,
  last: Hs,
  mapRange: _a,
  multiplyMatrices: ee,
  parseCoordGrammar: qs,
  parseFunction: Ds,
  serializeNumber: xr,
  skipNone: le,
  spow: Pe,
  toPrecision: Bs,
  type: Ye,
  zdiv: ka
});
class vd {
  add(t, r, a) {
    if (typeof arguments[0] != "string") {
      for (var t in arguments[0])
        this.add(t, arguments[0][t], arguments[1]);
      return;
    }
    (Array.isArray(t) ? t : [t]).forEach(function(o) {
      this[o] = this[o] || [], r && this[o][a ? "unshift" : "push"](r);
    }, this);
  }
  run(t, r) {
    this[t] = this[t] || [], this[t].forEach(function(a) {
      a.call(r && r.context ? r.context : r, r);
    });
  }
}
const Ke = new vd();
var yo, xo, wo, Ee = {
  gamut_mapping: "css",
  precision: 5,
  deltaE: "76",
  // Default deltaE method
  verbose: ((wo = (xo = (yo = globalThis?.process) == null ? void 0 : yo.env) == null ? void 0 : xo.NODE_ENV) == null ? void 0 : wo.toLowerCase()) !== "test",
  warn: function(e) {
    var t, r;
    this.verbose && ((r = (t = globalThis?.console) == null ? void 0 : t.warn) == null || r.call(t, e));
  }
};
const ye = {
  // for compatibility, the four-digit chromaticity-derived ones everyone else uses
  D50: [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585],
  D65: [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329]
};
function Gn(e) {
  return Array.isArray(e) ? e : ye[e];
}
function wr(e, t, r, a = {}) {
  if (e = Gn(e), t = Gn(t), !e || !t)
    throw new TypeError(`Missing white point to convert ${e ? "" : "from"}${!e && !t ? "/" : ""}${t ? "" : "to"}`);
  if (e === t)
    return r;
  let o = { W1: e, W2: t, XYZ: r, options: a };
  if (Ke.run("chromatic-adaptation-start", o), o.M || (o.W1 === ye.D65 && o.W2 === ye.D50 ? o.M = [
    [1.0479297925449969, 0.022946870601609652, -0.05019226628920524],
    [0.02962780877005599, 0.9904344267538799, -0.017073799063418826],
    [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371]
  ] : o.W1 === ye.D50 && o.W2 === ye.D65 && (o.M = [
    [0.955473421488075, -0.02309845494876471, 0.06325924320057072],
    [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323],
    [0.012314014864481998, -0.020507649298898964, 1.330365926242124]
  ])), Ke.run("chromatic-adaptation-end", o), o.M)
    return ee(o.M, o.XYZ);
  throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
const bd = /* @__PURE__ */ new Set(["<number>", "<percentage>", "<angle>"]);
function _o(e, t, r, a) {
  return Object.entries(e.coords).map(([o, i], s) => {
    let l = t.coordGrammar[s], c = a[s], u = c?.type, d;
    if (c.none ? d = l.find((p) => bd.has(p)) : d = l.find((p) => p == u), !d) {
      let p = i.name || o;
      throw new TypeError(`${u ?? c.raw} not allowed for ${p} in ${r}()`);
    }
    let f = d.range;
    u === "<percentage>" && (f || (f = [0, 1]));
    let h = i.range || i.refRange;
    return f && h && (a[s] = _a(f, h, a[s])), d;
  });
}
function Gs(e, { meta: t } = {}) {
  var r, a, o, i;
  let s = { str: (r = String(e)) == null ? void 0 : r.trim() };
  if (Ke.run("parse-start", s), s.color)
    return s.color;
  if (s.parsed = Ds(s.str), s.parsed) {
    let l = s.parsed.name;
    if (l === "color") {
      let c = s.parsed.args.shift(), u = c.startsWith("--") ? c.substring(2) : `--${c}`, d = [c, u], f = s.parsed.rawArgs.indexOf("/") > 0 ? s.parsed.args.pop() : 1;
      for (let g of R.all) {
        let m = g.getFormat("color");
        if (m && (d.includes(m.id) || (a = m.ids) != null && a.filter((b) => d.includes(b)).length)) {
          const b = Object.keys(g.coords).map((v, _) => s.parsed.args[_] || 0);
          let y;
          return m.coordGrammar && (y = _o(g, m, "color", b)), t && Object.assign(t, { formatId: "color", types: y }), m.id.startsWith("--") && !c.startsWith("--") && Ee.warn(`${g.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${m.id}) instead of color(${c}).`), c.startsWith("--") && !m.id.startsWith("--") && Ee.warn(`${g.name} is a standard space and supported in the CSS spec. Use color(${m.id}) instead of prefixed color(${c}).`), { spaceId: g.id, coords: b, alpha: f };
        }
      }
      let h = "", p = c in R.registry ? c : u;
      if (p in R.registry) {
        let g = (i = (o = R.registry[p].formats) == null ? void 0 : o.color) == null ? void 0 : i.id;
        g && (h = `Did you mean color(${g})?`);
      }
      throw new TypeError(`Cannot parse color(${c}). ` + (h || "Missing a plugin?"));
    } else
      for (let c of R.all) {
        let u = c.getFormat(l);
        if (u && u.type === "function") {
          let d = 1;
          (u.lastAlpha || Hs(s.parsed.args).alpha) && (d = s.parsed.args.pop());
          let f = s.parsed.args, h;
          return u.coordGrammar && (h = _o(c, u, l, f)), t && Object.assign(t, { formatId: u.name, types: h }), {
            spaceId: c.id,
            coords: f,
            alpha: d
          };
        }
      }
  } else
    for (let l of R.all)
      for (let c in l.formats) {
        let u = l.formats[c];
        if (u.type !== "custom" || u.test && !u.test(s.str))
          continue;
        let d = u.parse(s.str);
        if (d)
          return d.alpha ?? (d.alpha = 1), t && (t.formatId = c), d;
      }
  throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);
}
function H(e) {
  if (Array.isArray(e))
    return e.map(H);
  if (!e)
    throw new TypeError("Empty color reference");
  Yt(e) && (e = Gs(e));
  let t = e.space || e.spaceId;
  return t instanceof R || (e.space = R.get(t)), e.alpha === void 0 && (e.alpha = 1), e;
}
const yd = 75e-6, Un = class Ne {
  constructor(t) {
    var r;
    this.id = t.id, this.name = t.name, this.base = t.base ? Ne.get(t.base) : null, this.aliases = t.aliases, this.base && (this.fromBase = t.fromBase, this.toBase = t.toBase);
    let a = t.coords ?? this.base.coords;
    for (let i in a)
      "name" in a[i] || (a[i].name = i);
    this.coords = a;
    let o = t.white ?? this.base.white ?? "D65";
    this.white = Gn(o), this.formats = t.formats ?? {};
    for (let i in this.formats) {
      let s = this.formats[i];
      s.type || (s.type = "function"), s.name || (s.name = i);
    }
    (r = this.formats.color) != null && r.id || (this.formats.color = {
      ...this.formats.color ?? {},
      id: t.cssId || this.id
    }), t.gamutSpace ? this.gamutSpace = t.gamutSpace === "self" ? this : Ne.get(t.gamutSpace) : this.isPolar ? this.gamutSpace = this.base : this.gamutSpace = this, this.gamutSpace.isUnbounded && (this.inGamut = (i, s) => !0), this.referred = t.referred, Object.defineProperty(this, "path", {
      value: xd(this).reverse(),
      writable: !1,
      enumerable: !0,
      configurable: !0
    }), Ke.run("colorspace-init-end", this);
  }
  inGamut(t, { epsilon: r = yd } = {}) {
    if (!this.equals(this.gamutSpace))
      return t = this.to(this.gamutSpace, t), this.gamutSpace.inGamut(t, { epsilon: r });
    let a = Object.values(this.coords);
    return t.every((o, i) => {
      let s = a[i];
      if (s.type !== "angle" && s.range) {
        if (Number.isNaN(o))
          return !0;
        let [l, c] = s.range;
        return (l === void 0 || o >= l - r) && (c === void 0 || o <= c + r);
      }
      return !0;
    });
  }
  get isUnbounded() {
    return Object.values(this.coords).every((t) => !("range" in t));
  }
  get cssId() {
    var t, r;
    return ((r = (t = this.formats) == null ? void 0 : t.color) == null ? void 0 : r.id) || this.id;
  }
  get isPolar() {
    for (let t in this.coords)
      if (this.coords[t].type === "angle")
        return !0;
    return !1;
  }
  getFormat(t) {
    if (typeof t == "object")
      return t = ko(t, this), t;
    let r;
    return t === "default" ? r = Object.values(this.formats)[0] : r = this.formats[t], r ? (r = ko(r, this), r) : null;
  }
  /**
   * Check if this color space is the same as another color space reference.
   * Allows proxying color space objects and comparing color spaces with ids.
   * @param {string | ColorSpace} space ColorSpace object or id to compare to
   * @returns {boolean}
   */
  equals(t) {
    return t ? this === t || this.id === t || this.id === t.id : !1;
  }
  to(t, r) {
    if (arguments.length === 1) {
      const l = H(t);
      [t, r] = [l.space, l.coords];
    }
    if (t = Ne.get(t), this.equals(t))
      return r;
    r = r.map((l) => Number.isNaN(l) ? 0 : l);
    let a = this.path, o = t.path, i, s;
    for (let l = 0; l < a.length && a[l].equals(o[l]); l++)
      i = a[l], s = l;
    if (!i)
      throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);
    for (let l = a.length - 1; l > s; l--)
      r = a[l].toBase(r);
    for (let l = s + 1; l < o.length; l++)
      r = o[l].fromBase(r);
    return r;
  }
  from(t, r) {
    if (arguments.length === 1) {
      const a = H(t);
      [t, r] = [a.space, a.coords];
    }
    return t = Ne.get(t), t.to(this, r);
  }
  toString() {
    return `${this.name} (${this.id})`;
  }
  getMinCoords() {
    let t = [];
    for (let r in this.coords) {
      let a = this.coords[r], o = a.range || a.refRange;
      t.push(o?.min ?? 0);
    }
    return t;
  }
  // Returns array of unique color spaces
  static get all() {
    return [...new Set(Object.values(Ne.registry))];
  }
  static register(t, r) {
    if (arguments.length === 1 && (r = arguments[0], t = r.id), r = this.get(r), this.registry[t] && this.registry[t] !== r)
      throw new Error(`Duplicate color space registration: '${t}'`);
    if (this.registry[t] = r, arguments.length === 1 && r.aliases)
      for (let a of r.aliases)
        this.register(a, r);
    return r;
  }
  /**
   * Lookup ColorSpace object by name
   * @param {ColorSpace | string} name
   */
  static get(t, ...r) {
    if (!t || t instanceof Ne)
      return t;
    if (Ye(t) === "string") {
      let a = Ne.registry[t.toLowerCase()];
      if (!a)
        throw new TypeError(`No color space found with id = "${t}"`);
      return a;
    }
    if (r.length)
      return Ne.get(...r);
    throw new TypeError(`${t} is not a valid color space`);
  }
  /**
   * Get metadata about a coordinate of a color space
   *
   * @static
   * @param {Array | string} ref
   * @param {ColorSpace | string} [workingSpace]
   * @return {Object}
   */
  static resolveCoord(t, r) {
    var a;
    let o = Ye(t), i, s;
    if (o === "string" ? t.includes(".") ? [i, s] = t.split(".") : [i, s] = [, t] : Array.isArray(t) ? [i, s] = t : (i = t.space, s = t.coordId), i = Ne.get(i), i || (i = r), !i)
      throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);
    if (o = Ye(s), o === "number" || o === "string" && s >= 0) {
      let u = Object.entries(i.coords)[s];
      if (u)
        return { space: i, id: u[0], index: s, ...u[1] };
    }
    i = Ne.get(i);
    let l = s.toLowerCase(), c = 0;
    for (let u in i.coords) {
      let d = i.coords[u];
      if (u.toLowerCase() === l || ((a = d.name) == null ? void 0 : a.toLowerCase()) === l)
        return { space: i, id: u, index: c, ...d };
      c++;
    }
    throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`);
  }
};
W(Un, "registry", {}), W(Un, "DEFAULT_FORMAT", {
  type: "functions",
  name: "color"
});
let R = Un;
function xd(e) {
  let t = [e];
  for (let r = e; r = r.base; )
    t.push(r);
  return t;
}
function ko(e, { coords: t } = {}) {
  if (e.coords && !e.coordGrammar) {
    e.type || (e.type = "function"), e.name || (e.name = "color"), e.coordGrammar = qs(e.coords);
    let r = Object.entries(t).map(([a, o], i) => {
      let s = e.coordGrammar[i][0], l = o.range || o.refRange, c = s.range, u = "";
      return s == "<percentage>" ? (c = [0, 100], u = "%") : s == "<angle>" && (u = "deg"), { fromRange: l, toRange: c, suffix: u };
    });
    e.serializeCoords = (a, o) => a.map((i, s) => {
      let { fromRange: l, toRange: c, suffix: u } = r[s];
      return l && c && (i = _a(l, c, i)), i = xr(i, { precision: o, unit: u }), i;
    });
  }
  return e;
}
var fe = new R({
  id: "xyz-d65",
  name: "XYZ D65",
  coords: {
    x: { name: "X" },
    y: { name: "Y" },
    z: { name: "Z" }
  },
  white: "D65",
  formats: {
    color: {
      ids: ["xyz-d65", "xyz"]
    }
  },
  aliases: ["xyz"]
});
class we extends R {
  /**
   * Creates a new RGB ColorSpace.
   * If coords are not specified, they will use the default RGB coords.
   * Instead of `fromBase()` and `toBase()` functions,
   * you can specify to/from XYZ matrices and have `toBase()` and `fromBase()` automatically generated.
   * @param {*} options - Same options as {@link ColorSpace} plus:
   * @param {number[][]} options.toXYZ_M - Matrix to convert to XYZ
   * @param {number[][]} options.fromXYZ_M - Matrix to convert from XYZ
   */
  constructor(t) {
    t.coords || (t.coords = {
      r: {
        range: [0, 1],
        name: "Red"
      },
      g: {
        range: [0, 1],
        name: "Green"
      },
      b: {
        range: [0, 1],
        name: "Blue"
      }
    }), t.base || (t.base = fe), t.toXYZ_M && t.fromXYZ_M && (t.toBase ?? (t.toBase = (r) => {
      let a = ee(t.toXYZ_M, r);
      return this.white !== this.base.white && (a = wr(this.white, this.base.white, a)), a;
    }), t.fromBase ?? (t.fromBase = (r) => (r = wr(this.base.white, this.white, r), ee(t.fromXYZ_M, r)))), t.referred ?? (t.referred = "display"), super(t);
  }
}
function Xt(e, t) {
  return e = H(e), !t || e.space.equals(t) ? e.coords.slice() : (t = R.get(t), t.from(e));
}
function Me(e, t) {
  e = H(e);
  let { space: r, index: a } = R.resolveCoord(t, e.space);
  return Xt(e, r)[a];
}
function Ca(e, t, r) {
  return e = H(e), t = R.get(t), e.coords = t.to(e.space, r), e;
}
Ca.returns = "color";
function De(e, t, r) {
  if (e = H(e), arguments.length === 2 && Ye(arguments[1]) === "object") {
    let a = arguments[1];
    for (let o in a)
      De(e, o, a[o]);
  } else {
    typeof r == "function" && (r = r(Me(e, t)));
    let { space: a, index: o } = R.resolveCoord(t, e.space), i = Xt(e, a);
    i[o] = r, Ca(e, a, i);
  }
  return e;
}
De.returns = "color";
var Ma = new R({
  id: "xyz-d50",
  name: "XYZ D50",
  white: "D50",
  base: fe,
  fromBase: (e) => wr(fe.white, "D50", e),
  toBase: (e) => wr("D50", fe.white, e)
});
const wd = 216 / 24389, Co = 24 / 116, tr = 24389 / 27;
let dn = ye.D50;
var Se = new R({
  id: "lab",
  name: "Lab",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    a: {
      refRange: [-125, 125]
    },
    b: {
      refRange: [-125, 125]
    }
  },
  // Assuming XYZ is relative to D50, convert to CIE Lab
  // from CIE standard, which now defines these as a rational fraction
  white: dn,
  base: Ma,
  // Convert D50-adapted XYX to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(e) {
    let t = e.map((r, a) => r / dn[a]).map((r) => r > wd ? Math.cbrt(r) : (tr * r + 16) / 116);
    return [
      116 * t[1] - 16,
      // L
      500 * (t[0] - t[1]),
      // a
      200 * (t[1] - t[2])
      // b
    ];
  },
  // Convert Lab to D50-adapted XYZ
  // Same result as CIE 15.3:2004 Appendix D although the derivation is different
  // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
  toBase(e) {
    let t = [];
    return t[1] = (e[0] + 16) / 116, t[0] = e[1] / 500 + t[1], t[2] = t[1] - e[2] / 200, [
      t[0] > Co ? Math.pow(t[0], 3) : (116 * t[0] - 16) / tr,
      e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / tr,
      t[2] > Co ? Math.pow(t[2], 3) : (116 * t[2] - 16) / tr
    ].map((r, a) => r * dn[a]);
  },
  formats: {
    lab: {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function Oe(e) {
  return (e % 360 + 360) % 360;
}
function _d(e, t) {
  if (e === "raw")
    return t;
  let [r, a] = t.map(Oe), o = a - r;
  return e === "increasing" ? o < 0 && (a += 360) : e === "decreasing" ? o > 0 && (r += 360) : e === "longer" ? -180 < o && o < 180 && (o > 0 ? r += 360 : a += 360) : e === "shorter" && (o > 180 ? r += 360 : o < -180 && (a += 360)), [r, a];
}
var Dt = new R({
  id: "lch",
  name: "LCH",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    c: {
      refRange: [0, 150],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: Se,
  fromBase(e) {
    let [t, r, a] = e, o;
    const i = 0.02;
    return Math.abs(r) < i && Math.abs(a) < i ? o = NaN : o = Math.atan2(a, r) * 180 / Math.PI, [
      t,
      // L is still L
      Math.sqrt(r ** 2 + a ** 2),
      // Chroma
      Oe(o)
      // Hue, in degrees [0 to 360)
    ];
  },
  toBase(e) {
    let [t, r, a] = e;
    return r < 0 && (r = 0), isNaN(a) && (a = 0), [
      t,
      // L is still L
      r * Math.cos(a * Math.PI / 180),
      // a
      r * Math.sin(a * Math.PI / 180)
      // b
    ];
  },
  formats: {
    lch: {
      coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"]
    }
  }
});
const Mo = 25 ** 7, _r = Math.PI, So = 180 / _r, ht = _r / 180;
function Eo(e) {
  const t = e * e;
  return t * t * t * e;
}
function Us(e, t, { kL: r = 1, kC: a = 1, kH: o = 1 } = {}) {
  [e, t] = H([e, t]);
  let [i, s, l] = Se.from(e), c = Dt.from(Se, [i, s, l])[1], [u, d, f] = Se.from(t), h = Dt.from(Se, [u, d, f])[1];
  c < 0 && (c = 0), h < 0 && (h = 0);
  let p = (c + h) / 2, g = Eo(p), m = 0.5 * (1 - Math.sqrt(g / (g + Mo))), b = (1 + m) * s, y = (1 + m) * d, v = Math.sqrt(b ** 2 + l ** 2), _ = Math.sqrt(y ** 2 + f ** 2), C = b === 0 && l === 0 ? 0 : Math.atan2(l, b), x = y === 0 && f === 0 ? 0 : Math.atan2(f, y);
  C < 0 && (C += 2 * _r), x < 0 && (x += 2 * _r), C *= So, x *= So;
  let w = u - i, M = _ - v, E = x - C, S = C + x, A = Math.abs(E), z;
  v * _ === 0 ? z = 0 : A <= 180 ? z = E : E > 180 ? z = E - 360 : E < -180 ? z = E + 360 : Ee.warn("the unthinkable has happened");
  let I = 2 * Math.sqrt(_ * v) * Math.sin(z * ht / 2), V = (i + u) / 2, F = (v + _) / 2, O = Eo(F), P;
  v * _ === 0 ? P = S : A <= 180 ? P = S / 2 : S < 360 ? P = (S + 360) / 2 : P = (S - 360) / 2;
  let U = (V - 50) ** 2, G = 1 + 0.015 * U / Math.sqrt(20 + U), Z = 1 + 0.045 * F, ie = 1;
  ie -= 0.17 * Math.cos((P - 30) * ht), ie += 0.24 * Math.cos(2 * P * ht), ie += 0.32 * Math.cos((3 * P + 6) * ht), ie -= 0.2 * Math.cos((4 * P - 63) * ht);
  let X = 1 + 0.015 * F * ie, se = 30 * Math.exp(-1 * ((P - 275) / 25) ** 2), te = 2 * Math.sqrt(O / (O + Mo)), re = -1 * Math.sin(2 * se * ht) * te, ce = (w / (r * G)) ** 2;
  return ce += (M / (a * Z)) ** 2, ce += (I / (o * X)) ** 2, ce += re * (M / (a * Z)) * (I / (o * X)), Math.sqrt(ce);
}
const kd = [
  [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
  [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
  [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
], Cd = [
  [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
  [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
  [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
], Md = [
  [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
  [1.9779985324311684, -2.42859224204858, 0.450593709617411],
  [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
], Sd = [
  [1, 0.3963377773761749, 0.2158037573099136],
  [1, -0.1055613458156586, -0.0638541728258133],
  [1, -0.0894841775298119, -1.2914855480194092]
];
var Ct = new R({
  id: "oklab",
  name: "Oklab",
  coords: {
    l: {
      refRange: [0, 1],
      name: "Lightness"
    },
    a: {
      refRange: [-0.4, 0.4]
    },
    b: {
      refRange: [-0.4, 0.4]
    }
  },
  // Note that XYZ is relative to D65
  white: "D65",
  base: fe,
  fromBase(e) {
    let t = ee(kd, e).map((r) => Math.cbrt(r));
    return ee(Md, t);
  },
  toBase(e) {
    let t = ee(Sd, e).map((r) => r ** 3);
    return ee(Cd, t);
  },
  formats: {
    oklab: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function Yn(e, t) {
  [e, t] = H([e, t]);
  let [r, a, o] = Ct.from(e), [i, s, l] = Ct.from(t), c = r - i, u = a - s, d = o - l;
  return Math.sqrt(c ** 2 + u ** 2 + d ** 2);
}
const Ed = 75e-6;
function it(e, t, { epsilon: r = Ed } = {}) {
  e = H(e), t || (t = e.space), t = R.get(t);
  let a = e.coords;
  return t !== e.space && (a = t.from(e)), t.inGamut(a, { epsilon: r });
}
function Mt(e) {
  return {
    space: e.space,
    coords: e.coords.slice(),
    alpha: e.alpha
  };
}
function Ys(e, t, r = "lab") {
  r = R.get(r);
  let a = r.from(e), o = r.from(t);
  return Math.sqrt(a.reduce((i, s, l) => {
    let c = o[l];
    return isNaN(s) || isNaN(c) ? i : i + (c - s) ** 2;
  }, 0));
}
function Ad(e, t) {
  return Ys(e, t, "lab");
}
const Ld = Math.PI, Ao = Ld / 180;
function Nd(e, t, { l: r = 2, c: a = 1 } = {}) {
  [e, t] = H([e, t]);
  let [o, i, s] = Se.from(e), [, l, c] = Dt.from(Se, [o, i, s]), [u, d, f] = Se.from(t), h = Dt.from(Se, [u, d, f])[1];
  l < 0 && (l = 0), h < 0 && (h = 0);
  let p = o - u, g = l - h, m = i - d, b = s - f, y = m ** 2 + b ** 2 - g ** 2, v = 0.511;
  o >= 16 && (v = 0.040975 * o / (1 + 0.01765 * o));
  let _ = 0.0638 * l / (1 + 0.0131 * l) + 0.638, C;
  Number.isNaN(c) && (c = 0), c >= 164 && c <= 345 ? C = 0.56 + Math.abs(0.2 * Math.cos((c + 168) * Ao)) : C = 0.36 + Math.abs(0.4 * Math.cos((c + 35) * Ao));
  let x = Math.pow(l, 4), w = Math.sqrt(x / (x + 1900)), M = _ * (w * C + 1 - w), E = (p / (r * v)) ** 2;
  return E += (g / (a * _)) ** 2, E += y / M ** 2, Math.sqrt(E);
}
const Lo = 203;
var Sa = new R({
  // Absolute CIE XYZ, with a D65 whitepoint,
  // as used in most HDR colorspaces as a starting point.
  // SDR spaces are converted per BT.2048
  // so that diffuse, media white is 203 cd/m²
  id: "xyz-abs-d65",
  cssId: "--xyz-abs-d65",
  name: "Absolute XYZ D65",
  coords: {
    x: {
      refRange: [0, 9504.7],
      name: "Xa"
    },
    y: {
      refRange: [0, 1e4],
      name: "Ya"
    },
    z: {
      refRange: [0, 10888.3],
      name: "Za"
    }
  },
  base: fe,
  fromBase(e) {
    return e.map((t) => Math.max(t * Lo, 0));
  },
  toBase(e) {
    return e.map((t) => Math.max(t / Lo, 0));
  }
});
const rr = 1.15, nr = 0.66, No = 2610 / 2 ** 14, Rd = 2 ** 14 / 2610, Ro = 3424 / 2 ** 12, To = 2413 / 2 ** 7, Io = 2392 / 2 ** 7, Td = 1.7 * 2523 / 2 ** 5, Po = 2 ** 5 / (1.7 * 2523), ar = -0.56, fn = 16295499532821565e-27, Id = [
  [0.41478972, 0.579999, 0.014648],
  [-0.20151, 1.120649, 0.0531008],
  [-0.0166008, 0.2648, 0.6684799]
], Pd = [
  [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
  [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
  [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]
], zd = [
  [0.5, 0.5, 0],
  [3.524, -4.066708, 0.542708],
  [0.199076, 1.096799, -1.295875]
], Od = [
  [1, 0.1386050432715393, 0.05804731615611886],
  [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
  [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]
];
var Xs = new R({
  id: "jzazbz",
  name: "Jzazbz",
  coords: {
    jz: {
      refRange: [0, 1],
      name: "Jz"
    },
    az: {
      refRange: [-0.5, 0.5]
    },
    bz: {
      refRange: [-0.5, 0.5]
    }
  },
  base: Sa,
  fromBase(e) {
    let [t, r, a] = e, o = rr * t - (rr - 1) * a, i = nr * r - (nr - 1) * t, s = ee(Id, [o, i, a]).map(function(d) {
      let f = Ro + To * (d / 1e4) ** No, h = 1 + Io * (d / 1e4) ** No;
      return (f / h) ** Td;
    }), [l, c, u] = ee(zd, s);
    return [(1 + ar) * l / (1 + ar * l) - fn, c, u];
  },
  toBase(e) {
    let [t, r, a] = e, o = (t + fn) / (1 + ar - ar * (t + fn)), i = ee(Od, [o, r, a]).map(function(f) {
      let h = Ro - f ** Po, p = Io * f ** Po - To;
      return 1e4 * (h / p) ** Rd;
    }), [s, l, c] = ee(Pd, i), u = (s + (rr - 1) * c) / rr, d = (l + (nr - 1) * u) / nr;
    return [u, d, c];
  },
  formats: {
    // https://drafts.csswg.org/css-color-hdr/#Jzazbz
    color: {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
}), Xn = new R({
  id: "jzczhz",
  name: "JzCzHz",
  coords: {
    jz: {
      refRange: [0, 1],
      name: "Jz"
    },
    cz: {
      refRange: [0, 1],
      name: "Chroma"
    },
    hz: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: Xs,
  fromBase(e) {
    let [t, r, a] = e, o;
    const i = 2e-4;
    return Math.abs(r) < i && Math.abs(a) < i ? o = NaN : o = Math.atan2(a, r) * 180 / Math.PI, [
      t,
      // Jz is still Jz
      Math.sqrt(r ** 2 + a ** 2),
      // Chroma
      Oe(o)
      // Hue, in degrees [0 to 360)
    ];
  },
  toBase(e) {
    return [
      e[0],
      // Jz is still Jz
      e[1] * Math.cos(e[2] * Math.PI / 180),
      // az
      e[1] * Math.sin(e[2] * Math.PI / 180)
      // bz
    ];
  }
});
function jd(e, t) {
  [e, t] = H([e, t]);
  let [r, a, o] = Xn.from(e), [i, s, l] = Xn.from(t), c = r - i, u = a - s;
  Number.isNaN(o) && Number.isNaN(l) ? (o = 0, l = 0) : Number.isNaN(o) ? o = l : Number.isNaN(l) && (l = o);
  let d = o - l, f = 2 * Math.sqrt(a * s) * Math.sin(d / 2 * (Math.PI / 180));
  return Math.sqrt(c ** 2 + u ** 2 + f ** 2);
}
const Ks = 3424 / 4096, Js = 2413 / 128, Zs = 2392 / 128, zo = 2610 / 16384, Fd = 2523 / 32, Bd = 16384 / 2610, Oo = 32 / 2523, Dd = [
  [0.3592832590121217, 0.6976051147779502, -0.035891593232029],
  [-0.1920808463704993, 1.100476797037432, 0.0753748658519118],
  [0.0070797844607479, 0.0748396662186362, 0.8433265453898765]
], Hd = [
  [2048 / 4096, 2048 / 4096, 0],
  [6610 / 4096, -13613 / 4096, 7003 / 4096],
  [17933 / 4096, -17390 / 4096, -543 / 4096]
], Wd = [
  [0.9999999999999998, 0.0086090370379328, 0.111029625003026],
  [0.9999999999999998, -0.0086090370379328, -0.1110296250030259],
  [0.9999999999999998, 0.5600313357106791, -0.3206271749873188]
], qd = [
  [2.0701522183894223, -1.3263473389671563, 0.2066510476294053],
  [0.3647385209748072, 0.6805660249472273, -0.0453045459220347],
  [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042]
];
var Kn = new R({
  id: "ictcp",
  name: "ICTCP",
  // From BT.2100-2 page 7:
  // During production, signal values are expected to exceed the
  // range E′ = [0.0 : 1.0]. This provides processing headroom and avoids
  // signal degradation during cascaded processing. Such values of E′,
  // below 0.0 or exceeding 1.0, should not be clipped during production
  // and exchange.
  // Values below 0.0 should not be clipped in reference displays (even
  // though they represent “negative” light) to allow the black level of
  // the signal (LB) to be properly set using test signals known as “PLUGE”
  coords: {
    i: {
      refRange: [0, 1],
      // Constant luminance,
      name: "I"
    },
    ct: {
      refRange: [-0.5, 0.5],
      // Full BT.2020 gamut in range [-0.5, 0.5]
      name: "CT"
    },
    cp: {
      refRange: [-0.5, 0.5],
      name: "CP"
    }
  },
  base: Sa,
  fromBase(e) {
    let t = ee(Dd, e);
    return $d(t);
  },
  toBase(e) {
    let t = Vd(e);
    return ee(qd, t);
  }
});
function $d(e) {
  let t = e.map(function(r) {
    let a = Ks + Js * (r / 1e4) ** zo, o = 1 + Zs * (r / 1e4) ** zo;
    return (a / o) ** Fd;
  });
  return ee(Hd, t);
}
function Vd(e) {
  return ee(Wd, e).map(function(t) {
    let r = Math.max(t ** Oo - Ks, 0), a = Js - Zs * t ** Oo;
    return 1e4 * (r / a) ** Bd;
  });
}
function Gd(e, t) {
  [e, t] = H([e, t]);
  let [r, a, o] = Kn.from(e), [i, s, l] = Kn.from(t);
  return 720 * Math.sqrt((r - i) ** 2 + 0.25 * (a - s) ** 2 + (o - l) ** 2);
}
const Ud = ye.D65, Qs = 0.42, jo = 1 / Qs, hn = 2 * Math.PI, el = [
  [0.401288, 0.650173, -0.051461],
  [-0.250268, 1.204414, 0.045854],
  [-2079e-6, 0.048952, 0.953127]
], Yd = [
  [1.8620678550872327, -1.0112546305316843, 0.14918677544445175],
  [0.38752654323613717, 0.6214474419314753, -0.008973985167612518],
  [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496]
], Xd = [
  [460, 451, 288],
  [460, -891, -261],
  [460, -220, -6300]
], Kd = {
  dark: [0.8, 0.525, 0.8],
  dim: [0.9, 0.59, 0.9],
  average: [1, 0.69, 1]
}, nt = {
  // Red, Yellow, Green, Blue, Red
  h: [20.14, 90, 164.25, 237.53, 380.14],
  e: [0.8, 0.7, 1, 1.2, 0.8],
  H: [0, 100, 200, 300, 400]
}, Jd = 180 / Math.PI, Fo = Math.PI / 180;
function tl(e, t) {
  return e.map((r) => {
    const a = Pe(t * Math.abs(r) * 0.01, Qs);
    return 400 * Rr(a, r) / (a + 27.13);
  });
}
function Zd(e, t) {
  const r = 100 / t * 27.13 ** jo;
  return e.map((a) => {
    const o = Math.abs(a);
    return Rr(r * Pe(o / (400 - o), jo), a);
  });
}
function Qd(e) {
  let t = Oe(e);
  t <= nt.h[0] && (t += 360);
  const r = Vs(nt.h, t) - 1, [a, o] = nt.h.slice(r, r + 2), [i, s] = nt.e.slice(r, r + 2), l = nt.H[r], c = (t - a) / i;
  return l + 100 * c / (c + (o - t) / s);
}
function ef(e) {
  let t = (e % 400 + 400) % 400;
  const r = Math.floor(0.01 * t);
  t = t % 100;
  const [a, o] = nt.h.slice(r, r + 2), [i, s] = nt.e.slice(r, r + 2);
  return Oe(
    (t * (s * a - i * o) - 100 * a * s) / (t * (s - i) - 100 * s)
  );
}
function rl(e, t, r, a, o) {
  const i = {};
  i.discounting = o, i.refWhite = e, i.surround = a;
  const s = e.map((g) => g * 100);
  i.la = t, i.yb = r;
  const l = s[1], c = ee(el, s);
  a = Kd[i.surround];
  const u = a[0];
  i.c = a[1], i.nc = a[2];
  const d = (1 / (5 * i.la + 1)) ** 4;
  i.fl = d * i.la + 0.1 * (1 - d) * (1 - d) * Math.cbrt(5 * i.la), i.flRoot = i.fl ** 0.25, i.n = i.yb / l, i.z = 1.48 + Math.sqrt(i.n), i.nbb = 0.725 * i.n ** -0.2, i.ncb = i.nbb;
  const f = Math.max(
    Math.min(u * (1 - 1 / 3.6 * Math.exp((-i.la - 42) / 92)), 1),
    0
  );
  i.dRgb = c.map((g) => Bt(1, l / g, f)), i.dRgbInv = i.dRgb.map((g) => 1 / g);
  const h = c.map((g, m) => g * i.dRgb[m]), p = tl(h, i.fl);
  return i.aW = i.nbb * (2 * p[0] + p[1] + 0.05 * p[2]), i;
}
const Bo = rl(
  Ud,
  64 / Math.PI * 0.2,
  20,
  "average",
  !1
);
function Jn(e, t) {
  if (!(e.J !== void 0 ^ e.Q !== void 0))
    throw new Error("Conversion requires one and only one: 'J' or 'Q'");
  if (!(e.C !== void 0 ^ e.M !== void 0 ^ e.s !== void 0))
    throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");
  if (!(e.h !== void 0 ^ e.H !== void 0))
    throw new Error("Conversion requires one and only one: 'h' or 'H'");
  if (e.J === 0 || e.Q === 0)
    return [0, 0, 0];
  let r = 0;
  e.h !== void 0 ? r = Oe(e.h) * Fo : r = ef(e.H) * Fo;
  const a = Math.cos(r), o = Math.sin(r);
  let i = 0;
  e.J !== void 0 ? i = Pe(e.J, 1 / 2) * 0.1 : e.Q !== void 0 && (i = 0.25 * t.c * e.Q / ((t.aW + 4) * t.flRoot));
  let s = 0;
  e.C !== void 0 ? s = e.C / i : e.M !== void 0 ? s = e.M / t.flRoot / i : e.s !== void 0 && (s = 4e-4 * e.s ** 2 * (t.aW + 4) / t.c);
  const l = Pe(
    s * Math.pow(1.64 - Math.pow(0.29, t.n), -0.73),
    10 / 9
  ), c = 0.25 * (Math.cos(r + 2) + 3.8), u = t.aW * Pe(i, 2 / t.c / t.z), d = 5e4 / 13 * t.nc * t.ncb * c, f = u / t.nbb, h = 23 * (f + 0.305) * ka(l, 23 * d + l * (11 * a + 108 * o)), p = h * a, g = h * o, m = Zd(
    ee(Xd, [f, p, g]).map((b) => b * 1 / 1403),
    t.fl
  );
  return ee(
    Yd,
    m.map((b, y) => b * t.dRgbInv[y])
  ).map((b) => b / 100);
}
function nl(e, t) {
  const r = e.map((_) => _ * 100), a = tl(
    ee(el, r).map((_, C) => _ * t.dRgb[C]),
    t.fl
  ), o = a[0] + (-12 * a[1] + a[2]) / 11, i = (a[0] + a[1] - 2 * a[2]) / 9, s = (Math.atan2(i, o) % hn + hn) % hn, l = 0.25 * (Math.cos(s + 2) + 3.8), c = 5e4 / 13 * t.nc * t.ncb * ka(
    l * Math.sqrt(o ** 2 + i ** 2),
    a[0] + a[1] + 1.05 * a[2] + 0.305
  ), u = Pe(c, 0.9) * Math.pow(1.64 - Math.pow(0.29, t.n), 0.73), d = t.nbb * (2 * a[0] + a[1] + 0.05 * a[2]), f = Pe(d / t.aW, 0.5 * t.c * t.z), h = 100 * Pe(f, 2), p = 4 / t.c * f * (t.aW + 4) * t.flRoot, g = u * f, m = g * t.flRoot, b = Oe(s * Jd), y = Qd(b), v = 50 * Pe(t.c * u / (t.aW + 4), 1 / 2);
  return { J: h, C: g, h: b, s: v, Q: p, M: m, H: y };
}
var tf = new R({
  id: "cam16-jmh",
  cssId: "--cam16-jmh",
  name: "CAM16-JMh",
  coords: {
    j: {
      refRange: [0, 100],
      name: "J"
    },
    m: {
      refRange: [0, 105],
      name: "Colorfulness"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: fe,
  fromBase(e) {
    const t = nl(e, Bo);
    return [t.J, t.M, t.h];
  },
  toBase(e) {
    return Jn(
      { J: e[0], M: e[1], h: e[2] },
      Bo
    );
  }
});
const rf = ye.D65, nf = 216 / 24389, al = 24389 / 27;
function af(e) {
  return 116 * (e > nf ? Math.cbrt(e) : (al * e + 16) / 116) - 16;
}
function Zn(e) {
  return e > 8 ? Math.pow((e + 16) / 116, 3) : e / al;
}
function of(e, t) {
  let [r, a, o] = e, i = [], s = 0;
  if (o === 0)
    return [0, 0, 0];
  let l = Zn(o);
  o > 0 ? s = 0.00379058511492914 * o ** 2 + 0.608983189401032 * o + 0.9155088574762233 : s = 9514440756550361e-21 * o ** 2 + 0.08693057439788597 * o - 21.928975842194614;
  const c = 2e-12, u = 15;
  let d = 0, f = 1 / 0;
  for (; d <= u; ) {
    i = Jn({ J: s, C: a, h: r }, t);
    const h = Math.abs(i[1] - l);
    if (h < f) {
      if (h <= c)
        return i;
      f = h;
    }
    s = s - (i[1] - l) * s / (2 * i[1]), d += 1;
  }
  return Jn({ J: s, C: a, h: r }, t);
}
function sf(e, t) {
  const r = af(e[1]);
  if (r === 0)
    return [0, 0, 0];
  const a = nl(e, Ea);
  return [Oe(a.h), a.C, r];
}
const Ea = rl(
  rf,
  200 / Math.PI * Zn(50),
  Zn(50) * 100,
  "average",
  !1
);
var Ht = new R({
  id: "hct",
  name: "HCT",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    c: {
      refRange: [0, 145],
      name: "Colorfulness"
    },
    t: {
      refRange: [0, 100],
      name: "Tone"
    }
  },
  base: fe,
  fromBase(e) {
    return sf(e);
  },
  toBase(e) {
    return of(e, Ea);
  },
  formats: {
    color: {
      id: "--hct",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});
const lf = Math.PI / 180, Do = [1, 7e-3, 0.0228];
function Ho(e) {
  e[1] < 0 && (e = Ht.fromBase(Ht.toBase(e)));
  const t = Math.log(Math.max(1 + Do[2] * e[1] * Ea.flRoot, 1)) / Do[2], r = e[0] * lf, a = t * Math.cos(r), o = t * Math.sin(r);
  return [e[2], a, o];
}
function cf(e, t) {
  [e, t] = H([e, t]);
  let [r, a, o] = Ho(Ht.from(e)), [i, s, l] = Ho(Ht.from(t));
  return Math.sqrt((r - i) ** 2 + (a - s) ** 2 + (o - l) ** 2);
}
var St = {
  deltaE76: Ad,
  deltaECMC: Nd,
  deltaE2000: Us,
  deltaEJz: jd,
  deltaEITP: Gd,
  deltaEOK: Yn,
  deltaEHCT: cf
};
function uf(e) {
  const t = e ? Math.floor(Math.log10(Math.abs(e))) : 0;
  return Math.max(parseFloat(`1e${t - 2}`), 1e-6);
}
const Wo = {
  hct: {
    method: "hct.c",
    jnd: 2,
    deltaEMethod: "hct",
    blackWhiteClamp: {}
  },
  "hct-tonal": {
    method: "hct.c",
    jnd: 0,
    deltaEMethod: "hct",
    blackWhiteClamp: { channel: "hct.t", min: 0, max: 100 }
  }
};
function Je(e, {
  method: t = Ee.gamut_mapping,
  space: r = void 0,
  deltaEMethod: a = "",
  jnd: o = 2,
  blackWhiteClamp: i = {}
} = {}) {
  if (e = H(e), Yt(arguments[1]) ? r = arguments[1] : r || (r = e.space), r = R.get(r), it(e, r, { epsilon: 0 }))
    return e;
  let s;
  if (t === "css")
    s = df(e, { space: r });
  else {
    if (t !== "clip" && !it(e, r)) {
      Object.prototype.hasOwnProperty.call(Wo, t) && ({ method: t, jnd: o, deltaEMethod: a, blackWhiteClamp: i } = Wo[t]);
      let l = Us;
      if (a !== "") {
        for (let u in St)
          if ("deltae" + a.toLowerCase() === u.toLowerCase()) {
            l = St[u];
            break;
          }
      }
      let c = Je(Q(e, r), { method: "clip", space: r });
      if (l(e, c) > o) {
        if (Object.keys(i).length === 3) {
          let y = R.resolveCoord(i.channel), v = Me(Q(e, y.space), y.id);
          if (Xe(v) && (v = 0), v >= i.max)
            return Q({ space: "xyz-d65", coords: ye.D65 }, e.space);
          if (v <= i.min)
            return Q({ space: "xyz-d65", coords: [0, 0, 0] }, e.space);
        }
        let u = R.resolveCoord(t), d = u.space, f = u.id, h = Q(e, d);
        h.coords.forEach((y, v) => {
          Xe(y) && (h.coords[v] = 0);
        });
        let p = (u.range || u.refRange)[0], g = uf(o), m = p, b = Me(h, f);
        for (; b - m > g; ) {
          let y = Mt(h);
          y = Je(y, { space: r, method: "clip" }), l(h, y) - o < g ? m = Me(h, f) : b = Me(h, f), De(h, f, (m + b) / 2);
        }
        s = Q(h, r);
      } else
        s = c;
    } else
      s = Q(e, r);
    if (t === "clip" || !it(s, r, { epsilon: 0 })) {
      let l = Object.values(r.coords).map((c) => c.range || []);
      s.coords = s.coords.map((c, u) => {
        let [d, f] = l[u];
        return d !== void 0 && (c = Math.max(d, c)), f !== void 0 && (c = Math.min(c, f)), c;
      });
    }
  }
  return r !== e.space && (s = Q(s, e.space)), e.coords = s.coords, e;
}
Je.returns = "color";
const qo = {
  WHITE: { space: Ct, coords: [1, 0, 0] },
  BLACK: { space: Ct, coords: [0, 0, 0] }
};
function df(e, { space: t } = {}) {
  e = H(e), t || (t = e.space), t = R.get(t);
  const r = R.get("oklch");
  if (t.isUnbounded)
    return Q(e, t);
  const a = Q(e, r);
  let o = a.coords[0];
  if (o >= 1) {
    const h = Q(qo.WHITE, t);
    return h.alpha = e.alpha, Q(h, t);
  }
  if (o <= 0) {
    const h = Q(qo.BLACK, t);
    return h.alpha = e.alpha, Q(h, t);
  }
  if (it(a, t, { epsilon: 0 }))
    return Q(a, t);
  function i(h) {
    const p = Q(h, t), g = Object.values(t.coords);
    return p.coords = p.coords.map((m, b) => {
      if ("range" in g[b]) {
        const [y, v] = g[b].range;
        return $s(y, m, v);
      }
      return m;
    }), p;
  }
  let s = 0, l = a.coords[1], c = !0, u = Mt(a), d = i(u), f = Yn(d, u);
  if (f < 0.02)
    return d;
  for (; l - s > 1e-4; ) {
    const h = (s + l) / 2;
    if (u.coords[1] = h, c && it(u, t, { epsilon: 0 }))
      s = h;
    else if (d = i(u), f = Yn(d, u), f < 0.02) {
      if (0.02 - f < 1e-4)
        break;
      c = !1, s = h;
    } else
      l = h;
  }
  return d;
}
function Q(e, t, { inGamut: r } = {}) {
  e = H(e), t = R.get(t);
  let a = t.from(e), o = { space: t, coords: a, alpha: e.alpha };
  return r && (o = Je(o, r === !0 ? void 0 : r)), o;
}
Q.returns = "color";
function Ot(e, {
  precision: t = Ee.precision,
  format: r = "default",
  inGamut: a = !0,
  ...o
} = {}) {
  var i;
  let s;
  e = H(e);
  let l = r;
  r = e.space.getFormat(r) ?? e.space.getFormat("default") ?? R.DEFAULT_FORMAT;
  let c = e.coords.slice();
  if (a || (a = r.toGamut), a && !it(e) && (c = Je(Mt(e), a === !0 ? void 0 : a).coords), r.type === "custom")
    if (o.precision = t, r.serialize)
      s = r.serialize(c, e.alpha, o);
    else
      throw new TypeError(`format ${l} can only be used to parse colors, not for serialization`);
  else {
    let u = r.name || "color";
    r.serializeCoords ? c = r.serializeCoords(c, t) : t !== null && (c = c.map((p) => xr(p, { precision: t })));
    let d = [...c];
    if (u === "color") {
      let p = r.id || ((i = r.ids) == null ? void 0 : i[0]) || e.space.id;
      d.unshift(p);
    }
    let f = e.alpha;
    t !== null && (f = xr(f, { precision: t }));
    let h = e.alpha >= 1 || r.noAlpha ? "" : `${r.commas ? "," : " /"} ${f}`;
    s = `${u}(${d.join(r.commas ? ", " : " ")}${h})`;
  }
  return s;
}
const ff = [
  [0.6369580483012914, 0.14461690358620832, 0.1688809751641721],
  [0.2627002120112671, 0.6779980715188708, 0.05930171646986196],
  [0, 0.028072693049087428, 1.060985057710791]
], hf = [
  [1.716651187971268, -0.355670783776392, -0.25336628137366],
  [-0.666684351832489, 1.616481236634939, 0.0157685458139111],
  [0.017639857445311, -0.042770613257809, 0.942103121235474]
];
var Tr = new we({
  id: "rec2020-linear",
  cssId: "--rec2020-linear",
  name: "Linear REC.2020",
  white: "D65",
  toXYZ_M: ff,
  fromXYZ_M: hf
});
const or = 1.09929682680944, $o = 0.018053968510807;
var ol = new we({
  id: "rec2020",
  name: "REC.2020",
  base: Tr,
  // Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
  toBase(e) {
    return e.map(function(t) {
      return t < $o * 4.5 ? t / 4.5 : Math.pow((t + or - 1) / or, 1 / 0.45);
    });
  },
  fromBase(e) {
    return e.map(function(t) {
      return t >= $o ? or * Math.pow(t, 0.45) - (or - 1) : 4.5 * t;
    });
  }
});
const pf = [
  [0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
  [0.2289745640697488, 0.6917385218365064, 0.079286914093745],
  [0, 0.04511338185890264, 1.043944368900976]
], mf = [
  [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
  [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
  [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]
];
var il = new we({
  id: "p3-linear",
  cssId: "--display-p3-linear",
  name: "Linear P3",
  white: "D65",
  toXYZ_M: pf,
  fromXYZ_M: mf
});
const gf = [
  [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
  [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
  [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]
], je = [
  [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
  [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
  [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]
];
var sl = new we({
  id: "srgb-linear",
  name: "Linear sRGB",
  white: "D65",
  toXYZ_M: gf,
  fromXYZ_M: je
}), Vo = {
  aliceblue: [240 / 255, 248 / 255, 1],
  antiquewhite: [250 / 255, 235 / 255, 215 / 255],
  aqua: [0, 1, 1],
  aquamarine: [127 / 255, 1, 212 / 255],
  azure: [240 / 255, 1, 1],
  beige: [245 / 255, 245 / 255, 220 / 255],
  bisque: [1, 228 / 255, 196 / 255],
  black: [0, 0, 0],
  blanchedalmond: [1, 235 / 255, 205 / 255],
  blue: [0, 0, 1],
  blueviolet: [138 / 255, 43 / 255, 226 / 255],
  brown: [165 / 255, 42 / 255, 42 / 255],
  burlywood: [222 / 255, 184 / 255, 135 / 255],
  cadetblue: [95 / 255, 158 / 255, 160 / 255],
  chartreuse: [127 / 255, 1, 0],
  chocolate: [210 / 255, 105 / 255, 30 / 255],
  coral: [1, 127 / 255, 80 / 255],
  cornflowerblue: [100 / 255, 149 / 255, 237 / 255],
  cornsilk: [1, 248 / 255, 220 / 255],
  crimson: [220 / 255, 20 / 255, 60 / 255],
  cyan: [0, 1, 1],
  darkblue: [0, 0, 139 / 255],
  darkcyan: [0, 139 / 255, 139 / 255],
  darkgoldenrod: [184 / 255, 134 / 255, 11 / 255],
  darkgray: [169 / 255, 169 / 255, 169 / 255],
  darkgreen: [0, 100 / 255, 0],
  darkgrey: [169 / 255, 169 / 255, 169 / 255],
  darkkhaki: [189 / 255, 183 / 255, 107 / 255],
  darkmagenta: [139 / 255, 0, 139 / 255],
  darkolivegreen: [85 / 255, 107 / 255, 47 / 255],
  darkorange: [1, 140 / 255, 0],
  darkorchid: [153 / 255, 50 / 255, 204 / 255],
  darkred: [139 / 255, 0, 0],
  darksalmon: [233 / 255, 150 / 255, 122 / 255],
  darkseagreen: [143 / 255, 188 / 255, 143 / 255],
  darkslateblue: [72 / 255, 61 / 255, 139 / 255],
  darkslategray: [47 / 255, 79 / 255, 79 / 255],
  darkslategrey: [47 / 255, 79 / 255, 79 / 255],
  darkturquoise: [0, 206 / 255, 209 / 255],
  darkviolet: [148 / 255, 0, 211 / 255],
  deeppink: [1, 20 / 255, 147 / 255],
  deepskyblue: [0, 191 / 255, 1],
  dimgray: [105 / 255, 105 / 255, 105 / 255],
  dimgrey: [105 / 255, 105 / 255, 105 / 255],
  dodgerblue: [30 / 255, 144 / 255, 1],
  firebrick: [178 / 255, 34 / 255, 34 / 255],
  floralwhite: [1, 250 / 255, 240 / 255],
  forestgreen: [34 / 255, 139 / 255, 34 / 255],
  fuchsia: [1, 0, 1],
  gainsboro: [220 / 255, 220 / 255, 220 / 255],
  ghostwhite: [248 / 255, 248 / 255, 1],
  gold: [1, 215 / 255, 0],
  goldenrod: [218 / 255, 165 / 255, 32 / 255],
  gray: [128 / 255, 128 / 255, 128 / 255],
  green: [0, 128 / 255, 0],
  greenyellow: [173 / 255, 1, 47 / 255],
  grey: [128 / 255, 128 / 255, 128 / 255],
  honeydew: [240 / 255, 1, 240 / 255],
  hotpink: [1, 105 / 255, 180 / 255],
  indianred: [205 / 255, 92 / 255, 92 / 255],
  indigo: [75 / 255, 0, 130 / 255],
  ivory: [1, 1, 240 / 255],
  khaki: [240 / 255, 230 / 255, 140 / 255],
  lavender: [230 / 255, 230 / 255, 250 / 255],
  lavenderblush: [1, 240 / 255, 245 / 255],
  lawngreen: [124 / 255, 252 / 255, 0],
  lemonchiffon: [1, 250 / 255, 205 / 255],
  lightblue: [173 / 255, 216 / 255, 230 / 255],
  lightcoral: [240 / 255, 128 / 255, 128 / 255],
  lightcyan: [224 / 255, 1, 1],
  lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255],
  lightgray: [211 / 255, 211 / 255, 211 / 255],
  lightgreen: [144 / 255, 238 / 255, 144 / 255],
  lightgrey: [211 / 255, 211 / 255, 211 / 255],
  lightpink: [1, 182 / 255, 193 / 255],
  lightsalmon: [1, 160 / 255, 122 / 255],
  lightseagreen: [32 / 255, 178 / 255, 170 / 255],
  lightskyblue: [135 / 255, 206 / 255, 250 / 255],
  lightslategray: [119 / 255, 136 / 255, 153 / 255],
  lightslategrey: [119 / 255, 136 / 255, 153 / 255],
  lightsteelblue: [176 / 255, 196 / 255, 222 / 255],
  lightyellow: [1, 1, 224 / 255],
  lime: [0, 1, 0],
  limegreen: [50 / 255, 205 / 255, 50 / 255],
  linen: [250 / 255, 240 / 255, 230 / 255],
  magenta: [1, 0, 1],
  maroon: [128 / 255, 0, 0],
  mediumaquamarine: [102 / 255, 205 / 255, 170 / 255],
  mediumblue: [0, 0, 205 / 255],
  mediumorchid: [186 / 255, 85 / 255, 211 / 255],
  mediumpurple: [147 / 255, 112 / 255, 219 / 255],
  mediumseagreen: [60 / 255, 179 / 255, 113 / 255],
  mediumslateblue: [123 / 255, 104 / 255, 238 / 255],
  mediumspringgreen: [0, 250 / 255, 154 / 255],
  mediumturquoise: [72 / 255, 209 / 255, 204 / 255],
  mediumvioletred: [199 / 255, 21 / 255, 133 / 255],
  midnightblue: [25 / 255, 25 / 255, 112 / 255],
  mintcream: [245 / 255, 1, 250 / 255],
  mistyrose: [1, 228 / 255, 225 / 255],
  moccasin: [1, 228 / 255, 181 / 255],
  navajowhite: [1, 222 / 255, 173 / 255],
  navy: [0, 0, 128 / 255],
  oldlace: [253 / 255, 245 / 255, 230 / 255],
  olive: [128 / 255, 128 / 255, 0],
  olivedrab: [107 / 255, 142 / 255, 35 / 255],
  orange: [1, 165 / 255, 0],
  orangered: [1, 69 / 255, 0],
  orchid: [218 / 255, 112 / 255, 214 / 255],
  palegoldenrod: [238 / 255, 232 / 255, 170 / 255],
  palegreen: [152 / 255, 251 / 255, 152 / 255],
  paleturquoise: [175 / 255, 238 / 255, 238 / 255],
  palevioletred: [219 / 255, 112 / 255, 147 / 255],
  papayawhip: [1, 239 / 255, 213 / 255],
  peachpuff: [1, 218 / 255, 185 / 255],
  peru: [205 / 255, 133 / 255, 63 / 255],
  pink: [1, 192 / 255, 203 / 255],
  plum: [221 / 255, 160 / 255, 221 / 255],
  powderblue: [176 / 255, 224 / 255, 230 / 255],
  purple: [128 / 255, 0, 128 / 255],
  rebeccapurple: [102 / 255, 51 / 255, 153 / 255],
  red: [1, 0, 0],
  rosybrown: [188 / 255, 143 / 255, 143 / 255],
  royalblue: [65 / 255, 105 / 255, 225 / 255],
  saddlebrown: [139 / 255, 69 / 255, 19 / 255],
  salmon: [250 / 255, 128 / 255, 114 / 255],
  sandybrown: [244 / 255, 164 / 255, 96 / 255],
  seagreen: [46 / 255, 139 / 255, 87 / 255],
  seashell: [1, 245 / 255, 238 / 255],
  sienna: [160 / 255, 82 / 255, 45 / 255],
  silver: [192 / 255, 192 / 255, 192 / 255],
  skyblue: [135 / 255, 206 / 255, 235 / 255],
  slateblue: [106 / 255, 90 / 255, 205 / 255],
  slategray: [112 / 255, 128 / 255, 144 / 255],
  slategrey: [112 / 255, 128 / 255, 144 / 255],
  snow: [1, 250 / 255, 250 / 255],
  springgreen: [0, 1, 127 / 255],
  steelblue: [70 / 255, 130 / 255, 180 / 255],
  tan: [210 / 255, 180 / 255, 140 / 255],
  teal: [0, 128 / 255, 128 / 255],
  thistle: [216 / 255, 191 / 255, 216 / 255],
  tomato: [1, 99 / 255, 71 / 255],
  turquoise: [64 / 255, 224 / 255, 208 / 255],
  violet: [238 / 255, 130 / 255, 238 / 255],
  wheat: [245 / 255, 222 / 255, 179 / 255],
  white: [1, 1, 1],
  whitesmoke: [245 / 255, 245 / 255, 245 / 255],
  yellow: [1, 1, 0],
  yellowgreen: [154 / 255, 205 / 255, 50 / 255]
};
let Go = Array(3).fill("<percentage> | <number>[0, 255]"), Uo = Array(3).fill("<number>[0, 255]");
var Et = new we({
  id: "srgb",
  name: "sRGB",
  base: sl,
  fromBase: (e) => e.map((t) => {
    let r = t < 0 ? -1 : 1, a = t * r;
    return a > 31308e-7 ? r * (1.055 * a ** (1 / 2.4) - 0.055) : 12.92 * t;
  }),
  toBase: (e) => e.map((t) => {
    let r = t < 0 ? -1 : 1, a = t * r;
    return a <= 0.04045 ? t / 12.92 : r * ((a + 0.055) / 1.055) ** 2.4;
  }),
  formats: {
    rgb: {
      coords: Go
    },
    rgb_number: {
      name: "rgb",
      commas: !0,
      coords: Uo,
      noAlpha: !0
    },
    color: {
      /* use defaults */
    },
    rgba: {
      coords: Go,
      commas: !0,
      lastAlpha: !0
    },
    rgba_number: {
      name: "rgba",
      commas: !0,
      coords: Uo
    },
    hex: {
      type: "custom",
      toGamut: !0,
      test: (e) => /^#([a-f0-9]{3,4}){1,2}$/i.test(e),
      parse(e) {
        e.length <= 5 && (e = e.replace(/[a-f0-9]/gi, "$&$&"));
        let t = [];
        return e.replace(/[a-f0-9]{2}/gi, (r) => {
          t.push(parseInt(r, 16) / 255);
        }), {
          spaceId: "srgb",
          coords: t.slice(0, 3),
          alpha: t.slice(3)[0]
        };
      },
      serialize: (e, t, {
        collapse: r = !0
        // collapse to 3-4 digit hex when possible?
      } = {}) => {
        t < 1 && e.push(t), e = e.map((o) => Math.round(o * 255));
        let a = r && e.every((o) => o % 17 === 0);
        return "#" + e.map((o) => a ? (o / 17).toString(16) : o.toString(16).padStart(2, "0")).join("");
      }
    },
    keyword: {
      type: "custom",
      test: (e) => /^[a-z]+$/i.test(e),
      parse(e) {
        e = e.toLowerCase();
        let t = { spaceId: "srgb", coords: null, alpha: 1 };
        if (e === "transparent" ? (t.coords = Vo.black, t.alpha = 0) : t.coords = Vo[e], t.coords)
          return t;
      }
    }
  }
}), ll = new we({
  id: "p3",
  cssId: "display-p3",
  name: "P3",
  base: il,
  // Gamma encoding/decoding is the same as sRGB
  fromBase: Et.fromBase,
  toBase: Et.toBase
});
Ee.display_space = Et;
let Yo;
if (typeof CSS < "u" && CSS.supports)
  for (let e of [Se, ol, ll]) {
    let t = e.getMinCoords(), r = Ot({ space: e, coords: t, alpha: 1 });
    if (CSS.supports("color", r)) {
      Ee.display_space = e;
      break;
    }
  }
function vf(e, { space: t = Ee.display_space, ...r } = {}) {
  let a = Ot(e, r);
  if (typeof CSS > "u" || CSS.supports("color", a) || !Ee.display_space)
    a = new String(a), a.color = e;
  else {
    let o = e;
    if ((e.coords.some(Xe) || Xe(e.alpha)) && !(Yo ?? (Yo = CSS.supports("color", "hsl(none 50% 50%)"))) && (o = Mt(e), o.coords = o.coords.map(le), o.alpha = le(o.alpha), a = Ot(o, r), CSS.supports("color", a)))
      return a = new String(a), a.color = o, a;
    o = Q(o, t), a = new String(Ot(o, r)), a.color = o;
  }
  return a;
}
function bf(e, t) {
  return e = H(e), t = H(t), e.space === t.space && e.alpha === t.alpha && e.coords.every((r, a) => r === t.coords[a]);
}
function Ze(e) {
  return Me(e, [fe, "y"]);
}
function cl(e, t) {
  De(e, [fe, "y"], t);
}
function yf(e) {
  Object.defineProperty(e.prototype, "luminance", {
    get() {
      return Ze(this);
    },
    set(t) {
      cl(this, t);
    }
  });
}
var xf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getLuminance: Ze,
  register: yf,
  setLuminance: cl
});
function wf(e, t) {
  e = H(e), t = H(t);
  let r = Math.max(Ze(e), 0), a = Math.max(Ze(t), 0);
  return a > r && ([r, a] = [a, r]), (r + 0.05) / (a + 0.05);
}
const _f = 0.56, kf = 0.57, Cf = 0.62, Mf = 0.65, Xo = 0.022, Sf = 1.414, Ef = 0.1, Af = 5e-4, Lf = 1.14, Ko = 0.027, Nf = 1.14;
function Jo(e) {
  return e >= Xo ? e : e + (Xo - e) ** Sf;
}
function pt(e) {
  let t = e < 0 ? -1 : 1, r = Math.abs(e);
  return t * Math.pow(r, 2.4);
}
function Rf(e, t) {
  t = H(t), e = H(e);
  let r, a, o, i, s, l;
  t = Q(t, "srgb"), [i, s, l] = t.coords;
  let c = pt(i) * 0.2126729 + pt(s) * 0.7151522 + pt(l) * 0.072175;
  e = Q(e, "srgb"), [i, s, l] = e.coords;
  let u = pt(i) * 0.2126729 + pt(s) * 0.7151522 + pt(l) * 0.072175, d = Jo(c), f = Jo(u), h = f > d;
  return Math.abs(f - d) < Af ? a = 0 : h ? (r = f ** _f - d ** kf, a = r * Lf) : (r = f ** Mf - d ** Cf, a = r * Nf), Math.abs(a) < Ef ? o = 0 : a > 0 ? o = a - Ko : o = a + Ko, o * 100;
}
function Tf(e, t) {
  e = H(e), t = H(t);
  let r = Math.max(Ze(e), 0), a = Math.max(Ze(t), 0);
  a > r && ([r, a] = [a, r]);
  let o = r + a;
  return o === 0 ? 0 : (r - a) / o;
}
const If = 5e4;
function Pf(e, t) {
  e = H(e), t = H(t);
  let r = Math.max(Ze(e), 0), a = Math.max(Ze(t), 0);
  return a > r && ([r, a] = [a, r]), a === 0 ? If : (r - a) / a;
}
function zf(e, t) {
  e = H(e), t = H(t);
  let r = Me(e, [Se, "l"]), a = Me(t, [Se, "l"]);
  return Math.abs(r - a);
}
const Of = 216 / 24389, Zo = 24 / 116, ir = 24389 / 27;
let pn = ye.D65;
var Qn = new R({
  id: "lab-d65",
  name: "Lab D65",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    a: {
      refRange: [-125, 125]
    },
    b: {
      refRange: [-125, 125]
    }
  },
  // Assuming XYZ is relative to D65, convert to CIE Lab
  // from CIE standard, which now defines these as a rational fraction
  white: pn,
  base: fe,
  // Convert D65-adapted XYZ to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(e) {
    let t = e.map((r, a) => r / pn[a]).map((r) => r > Of ? Math.cbrt(r) : (ir * r + 16) / 116);
    return [
      116 * t[1] - 16,
      // L
      500 * (t[0] - t[1]),
      // a
      200 * (t[1] - t[2])
      // b
    ];
  },
  // Convert Lab to D65-adapted XYZ
  // Same result as CIE 15.3:2004 Appendix D although the derivation is different
  // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
  toBase(e) {
    let t = [];
    return t[1] = (e[0] + 16) / 116, t[0] = e[1] / 500 + t[1], t[2] = t[1] - e[2] / 200, [
      t[0] > Zo ? Math.pow(t[0], 3) : (116 * t[0] - 16) / ir,
      e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / ir,
      t[2] > Zo ? Math.pow(t[2], 3) : (116 * t[2] - 16) / ir
    ].map((r, a) => r * pn[a]);
  },
  formats: {
    "lab-d65": {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
const mn = Math.pow(5, 0.5) * 0.5 + 0.5;
function jf(e, t) {
  e = H(e), t = H(t);
  let r = Me(e, [Qn, "l"]), a = Me(t, [Qn, "l"]), o = Math.abs(Math.pow(r, mn) - Math.pow(a, mn)), i = Math.pow(o, 1 / mn) * Math.SQRT2 - 40;
  return i < 7.5 ? 0 : i;
}
var mr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  contrastAPCA: Rf,
  contrastDeltaPhi: jf,
  contrastLstar: zf,
  contrastMichelson: Tf,
  contrastWCAG21: wf,
  contrastWeber: Pf
});
function Ff(e, t, r = {}) {
  Yt(r) && (r = { algorithm: r });
  let { algorithm: a, ...o } = r;
  if (!a) {
    let i = Object.keys(mr).map((s) => s.replace(/^contrast/, "")).join(", ");
    throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`);
  }
  e = H(e), t = H(t);
  for (let i in mr)
    if ("contrast" + a.toLowerCase() === i.toLowerCase())
      return mr[i](e, t, o);
  throw new TypeError(`Unknown contrast algorithm: ${a}`);
}
function Ir(e) {
  let [t, r, a] = Xt(e, fe), o = t + 15 * r + 3 * a;
  return [4 * t / o, 9 * r / o];
}
function ul(e) {
  let [t, r, a] = Xt(e, fe), o = t + r + a;
  return [t / o, r / o];
}
function Bf(e) {
  Object.defineProperty(e.prototype, "uv", {
    get() {
      return Ir(this);
    }
  }), Object.defineProperty(e.prototype, "xy", {
    get() {
      return ul(this);
    }
  });
}
var Df = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  register: Bf,
  uv: Ir,
  xy: ul
});
function It(e, t, r = {}) {
  Yt(r) && (r = { method: r });
  let { method: a = Ee.deltaE, ...o } = r;
  for (let i in St)
    if ("deltae" + a.toLowerCase() === i.toLowerCase())
      return St[i](e, t, o);
  throw new TypeError(`Unknown deltaE method: ${a}`);
}
function Hf(e, t = 0.25) {
  let r = [R.get("oklch", "lch"), "l"];
  return De(e, r, (a) => a * (1 + t));
}
function Wf(e, t = 0.25) {
  let r = [R.get("oklch", "lch"), "l"];
  return De(e, r, (a) => a * (1 - t));
}
var qf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  darken: Wf,
  lighten: Hf
});
function dl(e, t, r = 0.5, a = {}) {
  return [e, t] = [H(e), H(t)], Ye(r) === "object" && ([r, a] = [0.5, r]), Kt(e, t, a)(r);
}
function fl(e, t, r = {}) {
  let a;
  Aa(e) && ([a, r] = [e, t], [e, t] = a.rangeArgs.colors);
  let {
    maxDeltaE: o,
    deltaEMethod: i,
    steps: s = 2,
    maxSteps: l = 1e3,
    ...c
  } = r;
  a || ([e, t] = [H(e), H(t)], a = Kt(e, t, c));
  let u = It(e, t), d = o > 0 ? Math.max(s, Math.ceil(u / o) + 1) : s, f = [];
  if (l !== void 0 && (d = Math.min(d, l)), d === 1)
    f = [{ p: 0.5, color: a(0.5) }];
  else {
    let h = 1 / (d - 1);
    f = Array.from({ length: d }, (p, g) => {
      let m = g * h;
      return { p: m, color: a(m) };
    });
  }
  if (o > 0) {
    let h = f.reduce((p, g, m) => {
      if (m === 0)
        return 0;
      let b = It(g.color, f[m - 1].color, i);
      return Math.max(p, b);
    }, 0);
    for (; h > o; ) {
      h = 0;
      for (let p = 1; p < f.length && f.length < l; p++) {
        let g = f[p - 1], m = f[p], b = (m.p + g.p) / 2, y = a(b);
        h = Math.max(h, It(y, g.color), It(y, m.color)), f.splice(p, 0, { p: b, color: a(b) }), p++;
      }
    }
  }
  return f = f.map((h) => h.color), f;
}
function Kt(e, t, r = {}) {
  if (Aa(e)) {
    let [c, u] = [e, t];
    return Kt(...c.rangeArgs.colors, { ...c.rangeArgs.options, ...u });
  }
  let { space: a, outputSpace: o, progression: i, premultiplied: s } = r;
  e = H(e), t = H(t), e = Mt(e), t = Mt(t);
  let l = { colors: [e, t], options: r };
  if (a ? a = R.get(a) : a = R.registry[Ee.interpolationSpace] || e.space, o = o ? R.get(o) : a, e = Q(e, a), t = Q(t, a), e = Je(e), t = Je(t), a.coords.h && a.coords.h.type === "angle") {
    let c = r.hue = r.hue || "shorter", u = [a, "h"], [d, f] = [Me(e, u), Me(t, u)];
    isNaN(d) && !isNaN(f) ? d = f : isNaN(f) && !isNaN(d) && (f = d), [d, f] = _d(c, [d, f]), De(e, u, d), De(t, u, f);
  }
  return s && (e.coords = e.coords.map((c) => c * e.alpha), t.coords = t.coords.map((c) => c * t.alpha)), Object.assign((c) => {
    c = i ? i(c) : c;
    let u = e.coords.map((h, p) => {
      let g = t.coords[p];
      return Bt(h, g, c);
    }), d = Bt(e.alpha, t.alpha, c), f = { space: a, coords: u, alpha: d };
    return s && (f.coords = f.coords.map((h) => h / d)), o !== a && (f = Q(f, o)), f;
  }, {
    rangeArgs: l
  });
}
function Aa(e) {
  return Ye(e) === "function" && !!e.rangeArgs;
}
Ee.interpolationSpace = "lab";
function $f(e) {
  e.defineFunction("mix", dl, { returns: "color" }), e.defineFunction("range", Kt, { returns: "function<color>" }), e.defineFunction("steps", fl, { returns: "array<color>" });
}
var Vf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  isRange: Aa,
  mix: dl,
  range: Kt,
  register: $f,
  steps: fl
}), hl = new R({
  id: "hsl",
  name: "HSL",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    l: {
      range: [0, 100],
      name: "Lightness"
    }
  },
  base: Et,
  // Adapted from https://drafts.csswg.org/css-color-4/better-rgbToHsl.js
  fromBase: (e) => {
    let t = Math.max(...e), r = Math.min(...e), [a, o, i] = e, [s, l, c] = [NaN, 0, (r + t) / 2], u = t - r;
    if (u !== 0) {
      switch (l = c === 0 || c === 1 ? 0 : (t - c) / Math.min(c, 1 - c), t) {
        case a:
          s = (o - i) / u + (o < i ? 6 : 0);
          break;
        case o:
          s = (i - a) / u + 2;
          break;
        case i:
          s = (a - o) / u + 4;
      }
      s = s * 60;
    }
    return l < 0 && (s += 180, l = Math.abs(l)), s >= 360 && (s -= 360), [s, l * 100, c * 100];
  },
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
  toBase: (e) => {
    let [t, r, a] = e;
    t = t % 360, t < 0 && (t += 360), r /= 100, a /= 100;
    function o(i) {
      let s = (i + t / 30) % 12, l = r * Math.min(a, 1 - a);
      return a - l * Math.max(-1, Math.min(s - 3, 9 - s, 1));
    }
    return [o(0), o(8), o(4)];
  },
  formats: {
    hsl: {
      coords: ["<number> | <angle>", "<percentage>", "<percentage>"]
    },
    hsla: {
      coords: ["<number> | <angle>", "<percentage>", "<percentage>"],
      commas: !0,
      lastAlpha: !0
    }
  }
}), pl = new R({
  id: "hsv",
  name: "HSV",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    v: {
      range: [0, 100],
      name: "Value"
    }
  },
  base: hl,
  // https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
  fromBase(e) {
    let [t, r, a] = e;
    r /= 100, a /= 100;
    let o = a + r * Math.min(a, 1 - a);
    return [
      t,
      // h is the same
      o === 0 ? 0 : 200 * (1 - a / o),
      // s
      100 * o
    ];
  },
  // https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
  toBase(e) {
    let [t, r, a] = e;
    r /= 100, a /= 100;
    let o = a * (1 - r / 2);
    return [
      t,
      // h is the same
      o === 0 || o === 1 ? 0 : (a - o) / Math.min(o, 1 - o) * 100,
      o * 100
    ];
  },
  formats: {
    color: {
      id: "--hsv",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
}), Gf = new R({
  id: "hwb",
  name: "HWB",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    w: {
      range: [0, 100],
      name: "Whiteness"
    },
    b: {
      range: [0, 100],
      name: "Blackness"
    }
  },
  base: pl,
  fromBase(e) {
    let [t, r, a] = e;
    return [t, a * (100 - r) / 100, 100 - a];
  },
  toBase(e) {
    let [t, r, a] = e;
    r /= 100, a /= 100;
    let o = r + a;
    if (o >= 1) {
      let l = r / o;
      return [t, 0, l * 100];
    }
    let i = 1 - a, s = i === 0 ? 0 : 1 - r / i;
    return [t, s * 100, i * 100];
  },
  formats: {
    hwb: {
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});
const Uf = [
  [0.5766690429101305, 0.1855582379065463, 0.1882286462349947],
  [0.29734497525053605, 0.6273635662554661, 0.07529145849399788],
  [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]
], Yf = [
  [2.0415879038107465, -0.5650069742788596, -0.34473135077832956],
  [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557],
  [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]
];
var ml = new we({
  id: "a98rgb-linear",
  cssId: "--a98-rgb-linear",
  name: "Linear Adobe® 98 RGB compatible",
  white: "D65",
  toXYZ_M: Uf,
  fromXYZ_M: Yf
}), Xf = new we({
  id: "a98rgb",
  cssId: "a98-rgb",
  name: "Adobe® 98 RGB compatible",
  base: ml,
  toBase: (e) => e.map((t) => Math.pow(Math.abs(t), 563 / 256) * Math.sign(t)),
  fromBase: (e) => e.map((t) => Math.pow(Math.abs(t), 256 / 563) * Math.sign(t))
});
const Kf = [
  [0.7977666449006423, 0.13518129740053308, 0.0313477341283922],
  [0.2880748288194013, 0.711835234241873, 8993693872564e-17],
  [0, 0, 0.8251046025104602]
], Jf = [
  [1.3457868816471583, -0.25557208737979464, -0.05110186497554526],
  [-0.5446307051249019, 1.5082477428451468, 0.02052744743642139],
  [0, 0, 1.2119675456389452]
];
var gl = new we({
  id: "prophoto-linear",
  cssId: "--prophoto-rgb-linear",
  name: "Linear ProPhoto",
  white: "D50",
  base: Ma,
  toXYZ_M: Kf,
  fromXYZ_M: Jf
});
const Zf = 1 / 512, Qf = 16 / 512;
var e0 = new we({
  id: "prophoto",
  cssId: "prophoto-rgb",
  name: "ProPhoto",
  base: gl,
  toBase(e) {
    return e.map((t) => t < Qf ? t / 16 : t ** 1.8);
  },
  fromBase(e) {
    return e.map((t) => t >= Zf ? t ** (1 / 1.8) : 16 * t);
  }
}), t0 = new R({
  id: "oklch",
  name: "Oklch",
  coords: {
    l: {
      refRange: [0, 1],
      name: "Lightness"
    },
    c: {
      refRange: [0, 0.4],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  white: "D65",
  base: Ct,
  fromBase(e) {
    let [t, r, a] = e, o;
    const i = 2e-4;
    return Math.abs(r) < i && Math.abs(a) < i ? o = NaN : o = Math.atan2(a, r) * 180 / Math.PI, [
      t,
      // OKLab L is still L
      Math.sqrt(r ** 2 + a ** 2),
      // Chroma
      Oe(o)
      // Hue, in degrees [0 to 360)
    ];
  },
  // Convert from polar form
  toBase(e) {
    let [t, r, a] = e, o, i;
    return isNaN(a) ? (o = 0, i = 0) : (o = r * Math.cos(a * Math.PI / 180), i = r * Math.sin(a * Math.PI / 180)), [t, o, i];
  },
  formats: {
    oklch: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[0,1]", "<number> | <angle>"]
    }
  }
});
let vl = ye.D65;
const r0 = 216 / 24389, Qo = 24389 / 27, [ei, ti] = Ir({ space: fe, coords: vl });
var bl = new R({
  id: "luv",
  name: "Luv",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    // Reference ranges from https://facelessuser.github.io/coloraide/colors/luv/
    u: {
      refRange: [-215, 215]
    },
    v: {
      refRange: [-215, 215]
    }
  },
  white: vl,
  base: fe,
  // Convert D65-adapted XYZ to Luv
  // https://en.wikipedia.org/wiki/CIELUV#The_forward_transformation
  fromBase(e) {
    let t = [le(e[0]), le(e[1]), le(e[2])], r = t[1], [a, o] = Ir({ space: fe, coords: t });
    if (!Number.isFinite(a) || !Number.isFinite(o))
      return [0, 0, 0];
    let i = r <= r0 ? Qo * r : 116 * Math.cbrt(r) - 16;
    return [
      i,
      13 * i * (a - ei),
      13 * i * (o - ti)
    ];
  },
  // Convert Luv to D65-adapted XYZ
  // https://en.wikipedia.org/wiki/CIELUV#The_reverse_transformation
  toBase(e) {
    let [t, r, a] = e;
    if (t === 0 || Xe(t))
      return [0, 0, 0];
    r = le(r), a = le(a);
    let o = r / (13 * t) + ei, i = a / (13 * t) + ti, s = t <= 8 ? t / Qo : Math.pow((t + 16) / 116, 3);
    return [
      s * (9 * o / (4 * i)),
      s,
      s * ((12 - 3 * o - 20 * i) / (4 * i))
    ];
  },
  formats: {
    color: {
      id: "--luv",
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
}), La = new R({
  id: "lchuv",
  name: "LChuv",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    c: {
      refRange: [0, 220],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: bl,
  fromBase(e) {
    let [t, r, a] = e, o;
    const i = 0.02;
    return Math.abs(r) < i && Math.abs(a) < i ? o = NaN : o = Math.atan2(a, r) * 180 / Math.PI, [
      t,
      // L is still L
      Math.sqrt(r ** 2 + a ** 2),
      // Chroma
      Oe(o)
      // Hue, in degrees [0 to 360)
    ];
  },
  toBase(e) {
    let [t, r, a] = e;
    return r < 0 && (r = 0), isNaN(a) && (a = 0), [
      t,
      // L is still L
      r * Math.cos(a * Math.PI / 180),
      // u
      r * Math.sin(a * Math.PI / 180)
      // v
    ];
  },
  formats: {
    color: {
      id: "--lchuv",
      coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"]
    }
  }
});
const n0 = 216 / 24389, a0 = 24389 / 27, ri = je[0][0], ni = je[0][1], gn = je[0][2], ai = je[1][0], oi = je[1][1], vn = je[1][2], ii = je[2][0], si = je[2][1], bn = je[2][2];
function mt(e, t, r) {
  const a = t / (Math.sin(r) - e * Math.cos(r));
  return a < 0 ? 1 / 0 : a;
}
function kr(e) {
  const t = Math.pow(e + 16, 3) / 1560896, r = t > n0 ? t : e / a0, a = r * (284517 * ri - 94839 * gn), o = r * (838422 * gn + 769860 * ni + 731718 * ri), i = r * (632260 * gn - 126452 * ni), s = r * (284517 * ai - 94839 * vn), l = r * (838422 * vn + 769860 * oi + 731718 * ai), c = r * (632260 * vn - 126452 * oi), u = r * (284517 * ii - 94839 * bn), d = r * (838422 * bn + 769860 * si + 731718 * ii), f = r * (632260 * bn - 126452 * si);
  return {
    r0s: a / i,
    r0i: o * e / i,
    r1s: a / (i + 126452),
    r1i: (o - 769860) * e / (i + 126452),
    g0s: s / c,
    g0i: l * e / c,
    g1s: s / (c + 126452),
    g1i: (l - 769860) * e / (c + 126452),
    b0s: u / f,
    b0i: d * e / f,
    b1s: u / (f + 126452),
    b1i: (d - 769860) * e / (f + 126452)
  };
}
function li(e, t) {
  const r = t / 360 * Math.PI * 2, a = mt(e.r0s, e.r0i, r), o = mt(e.r1s, e.r1i, r), i = mt(e.g0s, e.g0i, r), s = mt(e.g1s, e.g1i, r), l = mt(e.b0s, e.b0i, r), c = mt(e.b1s, e.b1i, r);
  return Math.min(a, o, i, s, l, c);
}
var o0 = new R({
  id: "hsluv",
  name: "HSLuv",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    l: {
      range: [0, 100],
      name: "Lightness"
    }
  },
  base: La,
  gamutSpace: Et,
  // Convert LCHuv to HSLuv
  fromBase(e) {
    let [t, r, a] = [le(e[0]), le(e[1]), le(e[2])], o;
    if (t > 99.9999999)
      o = 0, t = 100;
    else if (t < 1e-8)
      o = 0, t = 0;
    else {
      let i = kr(t), s = li(i, a);
      o = r / s * 100;
    }
    return [a, o, t];
  },
  // Convert HSLuv to LCHuv
  toBase(e) {
    let [t, r, a] = [le(e[0]), le(e[1]), le(e[2])], o;
    if (a > 99.9999999)
      a = 100, o = 0;
    else if (a < 1e-8)
      a = 0, o = 0;
    else {
      let i = kr(a);
      o = li(i, t) / 100 * r;
    }
    return [a, o, t];
  },
  formats: {
    color: {
      id: "--hsluv",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});
function gt(e, t) {
  return Math.abs(t) / Math.sqrt(Math.pow(e, 2) + 1);
}
function ci(e) {
  let t = gt(e.r0s, e.r0i), r = gt(e.r1s, e.r1i), a = gt(e.g0s, e.g0i), o = gt(e.g1s, e.g1i), i = gt(e.b0s, e.b0i), s = gt(e.b1s, e.b1i);
  return Math.min(t, r, a, o, i, s);
}
var i0 = new R({
  id: "hpluv",
  name: "HPLuv",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    l: {
      range: [0, 100],
      name: "Lightness"
    }
  },
  base: La,
  gamutSpace: "self",
  // Convert LCHuv to HPLuv
  fromBase(e) {
    let [t, r, a] = [le(e[0]), le(e[1]), le(e[2])], o;
    if (t > 99.9999999)
      o = 0, t = 100;
    else if (t < 1e-8)
      o = 0, t = 0;
    else {
      let i = kr(t), s = ci(i);
      o = r / s * 100;
    }
    return [a, o, t];
  },
  // Convert HPLuv to LCHuv
  toBase(e) {
    let [t, r, a] = [le(e[0]), le(e[1]), le(e[2])], o;
    if (a > 99.9999999)
      a = 100, o = 0;
    else if (a < 1e-8)
      a = 0, o = 0;
    else {
      let i = kr(a);
      o = ci(i) / 100 * r;
    }
    return [a, o, t];
  },
  formats: {
    color: {
      id: "--hpluv",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});
const ui = 203, di = 2610 / 2 ** 14, s0 = 2 ** 14 / 2610, l0 = 2523 / 2 ** 5, fi = 2 ** 5 / 2523, hi = 3424 / 2 ** 12, pi = 2413 / 2 ** 7, mi = 2392 / 2 ** 7;
var c0 = new we({
  id: "rec2100pq",
  cssId: "rec2100-pq",
  name: "REC.2100-PQ",
  base: Tr,
  toBase(e) {
    return e.map(function(t) {
      return (Math.max(t ** fi - hi, 0) / (pi - mi * t ** fi)) ** s0 * 1e4 / ui;
    });
  },
  fromBase(e) {
    return e.map(function(t) {
      let r = Math.max(t * ui / 1e4, 0), a = hi + pi * r ** di, o = 1 + mi * r ** di;
      return (a / o) ** l0;
    });
  }
});
const gi = 0.17883277, vi = 0.28466892, bi = 0.55991073, yn = 3.7743;
var u0 = new we({
  id: "rec2100hlg",
  cssId: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: Tr,
  toBase(e) {
    return e.map(function(t) {
      return t <= 0.5 ? t ** 2 / 3 * yn : (Math.exp((t - bi) / gi) + vi) / 12 * yn;
    });
  },
  fromBase(e) {
    return e.map(function(t) {
      return t /= yn, t <= 1 / 12 ? Math.sqrt(3 * t) : gi * Math.log(12 * t - vi) + bi;
    });
  }
});
const yl = {};
Ke.add("chromatic-adaptation-start", (e) => {
  e.options.method && (e.M = xl(e.W1, e.W2, e.options.method));
});
Ke.add("chromatic-adaptation-end", (e) => {
  e.M || (e.M = xl(e.W1, e.W2, e.options.method));
});
function Pr({ id: e, toCone_M: t, fromCone_M: r }) {
  yl[e] = arguments[0];
}
function xl(e, t, r = "Bradford") {
  let a = yl[r], [o, i, s] = ee(a.toCone_M, e), [l, c, u] = ee(a.toCone_M, t), d = [
    [l / o, 0, 0],
    [0, c / i, 0],
    [0, 0, u / s]
  ], f = ee(d, a.toCone_M);
  return ee(a.fromCone_M, f);
}
Pr({
  id: "von Kries",
  toCone_M: [
    [0.40024, 0.7076, -0.08081],
    [-0.2263, 1.16532, 0.0457],
    [0, 0, 0.91822]
  ],
  fromCone_M: [
    [1.8599363874558397, -1.1293816185800916, 0.21989740959619328],
    [0.3611914362417676, 0.6388124632850422, -6370596838649899e-21],
    [0, 0, 1.0890636230968613]
  ]
});
Pr({
  id: "Bradford",
  // Convert an array of XYZ values in the range 0.0 - 1.0
  // to cone fundamentals
  toCone_M: [
    [0.8951, 0.2664, -0.1614],
    [-0.7502, 1.7135, 0.0367],
    [0.0389, -0.0685, 1.0296]
  ],
  // and back
  fromCone_M: [
    [0.9869929054667121, -0.14705425642099013, 0.15996265166373122],
    [0.4323052697233945, 0.5183602715367774, 0.049291228212855594],
    [-0.00852866457517732, 0.04004282165408486, 0.96848669578755]
  ]
});
Pr({
  id: "CAT02",
  // with complete chromatic adaptation to W2, so D = 1.0
  toCone_M: [
    [0.7328, 0.4296, -0.1624],
    [-0.7036, 1.6975, 61e-4],
    [3e-3, 0.0136, 0.9834]
  ],
  fromCone_M: [
    [1.0961238208355142, -0.27886900021828726, 0.18274517938277307],
    [0.4543690419753592, 0.4735331543074117, 0.07209780371722911],
    [-0.009627608738429355, -0.00569803121611342, 1.0153256399545427]
  ]
});
Pr({
  id: "CAT16",
  toCone_M: [
    [0.401288, 0.650173, -0.051461],
    [-0.250268, 1.204414, 0.045854],
    [-2079e-6, 0.048952, 0.953127]
  ],
  // the extra precision is needed to avoid roundtripping errors
  fromCone_M: [
    [1.862067855087233, -1.0112546305316845, 0.14918677544445172],
    [0.3875265432361372, 0.6214474419314753, -0.008973985167612521],
    [-0.01584149884933386, -0.03412293802851557, 1.0499644368778496]
  ]
});
Object.assign(ye, {
  // whitepoint values from ASTM E308-01 with 10nm spacing, 1931 2 degree observer
  // all normalized to Y (luminance) = 1.00000
  // Illuminant A is a tungsten electric light, giving a very warm, orange light.
  A: [1.0985, 1, 0.35585],
  // Illuminant C was an early approximation to daylight: illuminant A with a blue filter.
  C: [0.98074, 1, 1.18232],
  // The daylight series of illuminants simulate natural daylight.
  // The color temperature (in degrees Kelvin/100) ranges from
  // cool, overcast daylight (D50) to bright, direct sunlight (D65).
  D55: [0.95682, 1, 0.92149],
  D75: [0.94972, 1, 1.22638],
  // Equal-energy illuminant, used in two-stage CAT16
  E: [1, 1, 1],
  // The F series of illuminants represent fluorescent lights
  F2: [0.99186, 1, 0.67393],
  F7: [0.95041, 1, 1.08747],
  F11: [1.00962, 1, 0.6435]
});
ye.ACES = [0.32168 / 0.33767, 1, (1 - 0.32168 - 0.33767) / 0.33767];
const d0 = [
  [0.6624541811085053, 0.13400420645643313, 0.1561876870049078],
  [0.27222871678091454, 0.6740817658111484, 0.05368951740793705],
  [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]
], f0 = [
  [1.6410233796943257, -0.32480329418479, -0.23642469523761225],
  [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137],
  [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]
];
var wl = new we({
  id: "acescg",
  cssId: "--acescg",
  name: "ACEScg",
  // ACEScg – A scene-referred, linear-light encoding of ACES Data
  // https://docs.acescentral.com/specifications/acescg/
  // uses the AP1 primaries, see section 4.3.1 Color primaries
  coords: {
    r: {
      range: [0, 65504],
      name: "Red"
    },
    g: {
      range: [0, 65504],
      name: "Green"
    },
    b: {
      range: [0, 65504],
      name: "Blue"
    }
  },
  referred: "scene",
  white: ye.ACES,
  toXYZ_M: d0,
  fromXYZ_M: f0
});
const sr = 2 ** -16, xn = -0.35828683, lr = (Math.log2(65504) + 9.72) / 17.52;
var h0 = new we({
  id: "acescc",
  cssId: "--acescc",
  name: "ACEScc",
  // see S-2014-003 ACEScc – A Logarithmic Encoding of ACES Data
  // https://docs.acescentral.com/specifications/acescc/
  // uses the AP1 primaries, see section 4.3.1 Color primaries
  // Appendix A: "Very small ACES scene referred values below 7 1/4 stops
  // below 18% middle gray are encoded as negative ACEScc values.
  // These values should be preserved per the encoding in Section 4.4
  // so that all positive ACES values are maintained."
  coords: {
    r: {
      range: [xn, lr],
      name: "Red"
    },
    g: {
      range: [xn, lr],
      name: "Green"
    },
    b: {
      range: [xn, lr],
      name: "Blue"
    }
  },
  referred: "scene",
  base: wl,
  // from section 4.4.2 Decoding Function
  toBase(e) {
    const t = -0.3013698630136986;
    return e.map(function(r) {
      return r <= t ? (2 ** (r * 17.52 - 9.72) - sr) * 2 : r < lr ? 2 ** (r * 17.52 - 9.72) : 65504;
    });
  },
  // Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
  fromBase(e) {
    return e.map(function(t) {
      return t <= 0 ? (Math.log2(sr) + 9.72) / 17.52 : t < sr ? (Math.log2(sr + t * 0.5) + 9.72) / 17.52 : (Math.log2(t) + 9.72) / 17.52;
    });
  }
  // encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
  // encoded media black (rgb 0,0,0) => linear [ 0.0011857, 0.0011857, 0.0011857]
}), yi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  A98RGB: Xf,
  A98RGB_Linear: ml,
  ACEScc: h0,
  ACEScg: wl,
  CAM16_JMh: tf,
  HCT: Ht,
  HPLuv: i0,
  HSL: hl,
  HSLuv: o0,
  HSV: pl,
  HWB: Gf,
  ICTCP: Kn,
  JzCzHz: Xn,
  Jzazbz: Xs,
  LCH: Dt,
  LCHuv: La,
  Lab: Se,
  Lab_D65: Qn,
  Luv: bl,
  OKLCH: t0,
  OKLab: Ct,
  P3: ll,
  P3_Linear: il,
  ProPhoto: e0,
  ProPhoto_Linear: gl,
  REC_2020: ol,
  REC_2020_Linear: Tr,
  REC_2100_HLG: u0,
  REC_2100_PQ: c0,
  XYZ_ABS_D65: Sa,
  XYZ_D50: Ma,
  XYZ_D65: fe,
  sRGB: Et,
  sRGB_Linear: sl
});
class Y {
  /**
   * Creates an instance of Color.
   * Signatures:
   * - `new Color(stringToParse)`
   * - `new Color(otherColor)`
   * - `new Color({space, coords, alpha})`
   * - `new Color(space, coords, alpha)`
   * - `new Color(spaceId, coords, alpha)`
   */
  constructor(...t) {
    let r;
    t.length === 1 && (r = H(t[0]));
    let a, o, i;
    r ? (a = r.space || r.spaceId, o = r.coords, i = r.alpha) : [a, o, i] = t, Object.defineProperty(this, "space", {
      value: R.get(a),
      writable: !1,
      enumerable: !0,
      configurable: !0
      // see note in https://262.ecma-international.org/8.0/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver
    }), this.coords = o ? o.slice() : [0, 0, 0], this.alpha = i > 1 || i === void 0 ? 1 : i < 0 ? 0 : i;
    for (let s = 0; s < this.coords.length; s++)
      this.coords[s] === "NaN" && (this.coords[s] = NaN);
    for (let s in this.space.coords)
      Object.defineProperty(this, s, {
        get: () => this.get(s),
        set: (l) => this.set(s, l)
      });
  }
  get spaceId() {
    return this.space.id;
  }
  clone() {
    return new Y(this.space, this.coords, this.alpha);
  }
  toJSON() {
    return {
      spaceId: this.spaceId,
      coords: this.coords,
      alpha: this.alpha
    };
  }
  display(...t) {
    let r = vf(this, ...t);
    return r.color = new Y(r.color), r;
  }
  /**
   * Get a color from the argument passed
   * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
   */
  static get(t, ...r) {
    return t instanceof Y ? t : new Y(t, ...r);
  }
  static defineFunction(t, r, a = r) {
    let { instance: o = !0, returns: i } = a, s = function(...l) {
      let c = r(...l);
      if (i === "color")
        c = Y.get(c);
      else if (i === "function<color>") {
        let u = c;
        c = function(...d) {
          let f = u(...d);
          return Y.get(f);
        }, Object.assign(c, u);
      } else i === "array<color>" && (c = c.map((u) => Y.get(u)));
      return c;
    };
    t in Y || (Y[t] = s), o && (Y.prototype[t] = function(...l) {
      return s(this, ...l);
    });
  }
  static defineFunctions(t) {
    for (let r in t)
      Y.defineFunction(r, t[r], t[r]);
  }
  static extend(t) {
    if (t.register)
      t.register(Y);
    else
      for (let r in t)
        Y.defineFunction(r, t[r]);
  }
}
Y.defineFunctions({
  get: Me,
  getAll: Xt,
  set: De,
  setAll: Ca,
  to: Q,
  equals: bf,
  inGamut: it,
  toGamut: Je,
  distance: Ys,
  toString: Ot
});
Object.assign(Y, {
  util: gd,
  hooks: Ke,
  WHITES: ye,
  Space: R,
  spaces: R.registry,
  parse: Gs,
  // Global defaults one may want to configure
  defaults: Ee
});
for (let e of Object.keys(yi))
  R.register(yi[e]);
for (let e in R.registry)
  ea(e, R.registry[e]);
Ke.add("colorspace-init-end", (e) => {
  var t;
  ea(e.id, e), (t = e.aliases) == null || t.forEach((r) => {
    ea(r, e);
  });
});
function ea(e, t) {
  let r = e.replace(/-/g, "_");
  Object.defineProperty(Y.prototype, r, {
    // Convert coords to coords in another colorspace and return them
    // Source colorspace: this.spaceId
    // Target colorspace: id
    get() {
      let a = this.getAll(e);
      return typeof Proxy > "u" ? a : new Proxy(a, {
        has: (o, i) => {
          try {
            return R.resolveCoord([t, i]), !0;
          } catch {
          }
          return Reflect.has(o, i);
        },
        get: (o, i, s) => {
          if (i && typeof i != "symbol" && !(i in o)) {
            let { index: l } = R.resolveCoord([t, i]);
            if (l >= 0)
              return o[l];
          }
          return Reflect.get(o, i, s);
        },
        set: (o, i, s, l) => {
          if (i && typeof i != "symbol" && !(i in o) || i >= 0) {
            let { index: c } = R.resolveCoord([t, i]);
            if (c >= 0)
              return o[c] = s, this.setAll(e, o), !0;
          }
          return Reflect.set(o, i, s, l);
        }
      });
    },
    // Convert coords in another colorspace to internal coords and set them
    // Target colorspace: this.spaceId
    // Source colorspace: id
    set(a) {
      this.setAll(e, a);
    },
    configurable: !0,
    enumerable: !0
  });
}
Y.extend(St);
Y.extend({ deltaE: It });
Object.assign(Y, { deltaEMethods: St });
Y.extend(qf);
Y.extend({ contrast: Ff });
Y.extend(Df);
Y.extend(xf);
Y.extend(Vf);
Y.extend(mr);
const p0 = {
  Agreement: "#228B22",
  // Forest green
  BoundaryError: "#8B4513",
  // Saddle brown
  Capitalization: "#540D6E",
  // Deep purple
  Eggcorn: "#FF8C00",
  // Dark orange
  Enhancement: "#0EAD69",
  // Green
  Formatting: "#7D3C98",
  // Amethyst purple
  Grammar: "#9B59B6",
  // Medium purple
  Malapropism: "#C71585",
  // Medium violet red
  Miscellaneous: "#3BCEAC",
  // Turquoise
  Nonstandard: "#008B8B",
  // Dark cyan
  Punctuation: "#D4850F",
  // Dark orange
  Readability: "#2E8B57",
  // Sea green
  Redundancy: "#4682B4",
  // Steel blue
  Regionalism: "#C061CB",
  // Vibrant purple
  Repetition: "#00A67C",
  // Green-cyan
  Spelling: "#EE4266",
  // Pink-red
  Style: "#FFD23F",
  // Yellow
  Typo: "#FF6B35",
  // Vibrant orange-red
  Usage: "#1E90FF",
  // Dodger blue
  WordChoice: "#228B22",
  // Forest green
  WordOrder: "#4D4DFF"
  // Royal blue
};
function xt(e) {
  const t = p0[e];
  if (!t)
    throw new Error(`Unexpected lint kind: ${e}`);
  return t;
}
const m0 = {}, g0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: m0
}, Symbol.toStringTag, { value: "Module" })), v0 = /* @__PURE__ */ od(g0);
var wn, xi;
function _l() {
  if (xi) return wn;
  xi = 1;
  var e = typeof yr < "u" ? yr : typeof window < "u" ? window : {}, t = v0, r;
  return typeof document < "u" ? r = document : (r = e["__GLOBAL_DOCUMENT_CACHE@4"], r || (r = e["__GLOBAL_DOCUMENT_CACHE@4"] = t)), wn = r, wn;
}
var wi, _i;
function kl() {
  return _i || (_i = 1, wi = function(e) {
    return typeof e == "object" && e !== null;
  }), wi;
}
var _n, ki;
function Cl() {
  if (ki) return _n;
  ki = 1;
  var e = /* @__PURE__ */ kl(), t = /* @__PURE__ */ Lr();
  _n = r;
  function r(s, l, c) {
    for (var u in l) {
      var d = l[u];
      d === void 0 ? a(s, u, d, c) : t(d) ? (a(s, u, d, c), d.hook && d.hook(
        s,
        u,
        c ? c[u] : void 0
      )) : e(d) ? o(s, l, c, u, d) : s[u] = d;
    }
  }
  function a(s, l, c, u) {
    if (u) {
      var d = u[l];
      if (t(d))
        d.unhook && d.unhook(s, l, c);
      else if (l === "attributes")
        for (var f in d)
          s.removeAttribute(f);
      else if (l === "style")
        for (var h in d)
          s.style[h] = "";
      else typeof d == "string" ? s[l] = "" : s[l] = null;
    }
  }
  function o(s, l, c, u, d) {
    var f = c ? c[u] : void 0;
    if (u === "attributes") {
      for (var h in d) {
        var p = d[h];
        p === void 0 ? s.removeAttribute(h) : s.setAttribute(h, p);
      }
      return;
    }
    if (f && e(f) && i(f) !== i(d)) {
      s[u] = d;
      return;
    }
    e(s[u]) || (s[u] = {});
    var g = u === "style" ? "" : void 0;
    for (var m in d) {
      var b = d[m];
      s[u][m] = b === void 0 ? g : b;
    }
  }
  function i(s) {
    if (Object.getPrototypeOf)
      return Object.getPrototypeOf(s);
    if (s.__proto__)
      return s.__proto__;
    if (s.constructor)
      return s.constructor.prototype;
  }
  return _n;
}
var kn, Ci;
function Ml() {
  if (Ci) return kn;
  Ci = 1;
  var e = /* @__PURE__ */ Ut(), t = /* @__PURE__ */ Nr(), r = /* @__PURE__ */ ut(), a = /* @__PURE__ */ Ar();
  kn = o;
  function o(s, l) {
    var c = s, u = l;
    return a(l) && (u = i(l, s)), a(s) && (c = i(s, null)), {
      a: c,
      b: u
    };
  }
  function i(s, l) {
    var c = s.vnode;
    if (c || (c = s.vnode = s.render(l)), !(e(c) || t(c) || r(c)))
      throw new Error("thunk did not return a valid node");
    return c;
  }
  return kn;
}
var Cn, Mi;
function Sl() {
  if (Mi) return Cn;
  Mi = 1;
  var e = /* @__PURE__ */ _l(), t = /* @__PURE__ */ Cl(), r = /* @__PURE__ */ Ut(), a = /* @__PURE__ */ Nr(), o = /* @__PURE__ */ ut(), i = /* @__PURE__ */ Ml();
  Cn = s;
  function s(l, c) {
    var u = c && c.document || e, d = c ? c.warn : null;
    if (l = i(l).a, o(l))
      return l.init();
    if (a(l))
      return u.createTextNode(l.text);
    if (!r(l))
      return d && d("Item is not a valid virtual dom node", l), null;
    var f = l.namespace === null ? u.createElement(l.tagName) : u.createElementNS(l.namespace, l.tagName), h = l.properties;
    t(f, h);
    for (var p = l.children, g = 0; g < p.length; g++) {
      var m = s(p[g], c);
      m && f.appendChild(m);
    }
    return f;
  }
  return Cn;
}
var Mn, Si;
function El() {
  if (Si) return Mn;
  Si = 1;
  var e = /* @__PURE__ */ Sl();
  return Mn = e, Mn;
}
var b0 = /* @__PURE__ */ El();
const y0 = /* @__PURE__ */ Er(b0);
var Sn, Ei;
function Al() {
  if (Ei) return Sn;
  Ei = 1;
  var e = /* @__PURE__ */ Gt();
  t.NONE = 0, t.VTEXT = 1, t.VNODE = 2, t.WIDGET = 3, t.PROPS = 4, t.ORDER = 5, t.INSERT = 6, t.REMOVE = 7, t.THUNK = 8, Sn = t;
  function t(r, a, o) {
    this.type = Number(r), this.vNode = a, this.patch = o;
  }
  return t.prototype.version = e, t.prototype.type = "VirtualPatch", Sn;
}
var En, Ai;
function x0() {
  if (Ai) return En;
  Ai = 1;
  var e = /* @__PURE__ */ kl(), t = /* @__PURE__ */ Lr();
  En = r;
  function r(o, i) {
    var s;
    for (var l in o) {
      l in i || (s = s || {}, s[l] = void 0);
      var c = o[l], u = i[l];
      if (c !== u)
        if (e(c) && e(u))
          if (a(u) !== a(c))
            s = s || {}, s[l] = u;
          else if (t(u))
            s = s || {}, s[l] = u;
          else {
            var d = r(c, u);
            d && (s = s || {}, s[l] = d);
          }
        else
          s = s || {}, s[l] = u;
    }
    for (var f in i)
      f in o || (s = s || {}, s[f] = i[f]);
    return s;
  }
  function a(o) {
    if (Object.getPrototypeOf)
      return Object.getPrototypeOf(o);
    if (o.__proto__)
      return o.__proto__;
    if (o.constructor)
      return o.constructor.prototype;
  }
  return En;
}
var An, Li;
function w0() {
  if (Li) return An;
  Li = 1;
  var e = /* @__PURE__ */ wa(), t = /* @__PURE__ */ Al(), r = /* @__PURE__ */ Ut(), a = /* @__PURE__ */ Nr(), o = /* @__PURE__ */ ut(), i = /* @__PURE__ */ Ar(), s = /* @__PURE__ */ Ml(), l = /* @__PURE__ */ x0();
  An = c;
  function c(x, w) {
    var M = { a: x };
    return u(x, w, M, 0), M;
  }
  function u(x, w, M, E) {
    if (x !== w) {
      var S = M[E], A = !1;
      if (i(x) || i(w))
        p(x, w, M, E);
      else if (w == null)
        o(x) || (f(x, M, E), S = M[E]), S = C(S, new t(t.REMOVE, x, w));
      else if (r(w))
        if (r(x))
          if (x.tagName === w.tagName && x.namespace === w.namespace && x.key === w.key) {
            var z = l(x.properties, w.properties);
            z && (S = C(
              S,
              new t(t.PROPS, x, z)
            )), S = d(x, w, M, S, E);
          } else
            S = C(S, new t(t.VNODE, x, w)), A = !0;
        else
          S = C(S, new t(t.VNODE, x, w)), A = !0;
      else a(w) ? a(x) ? x.text !== w.text && (S = C(S, new t(t.VTEXT, x, w))) : (S = C(S, new t(t.VTEXT, x, w)), A = !0) : o(w) && (o(x) || (A = !0), S = C(S, new t(t.WIDGET, x, w)));
      S && (M[E] = S), A && f(x, M, E);
    }
  }
  function d(x, w, M, E, S) {
    for (var A = x.children, z = y(A, w.children), I = z.children, V = A.length, F = I.length, O = V > F ? V : F, P = 0; P < O; P++) {
      var U = A[P], G = I[P];
      S += 1, U ? u(U, G, M, S) : G && (E = C(
        E,
        new t(t.INSERT, null, G)
      )), r(U) && U.count && (S += U.count);
    }
    return z.moves && (E = C(E, new t(
      t.ORDER,
      x,
      z.moves
    ))), E;
  }
  function f(x, w, M) {
    m(x, w, M), h(x, w, M);
  }
  function h(x, w, M) {
    if (o(x))
      typeof x.destroy == "function" && (w[M] = C(
        w[M],
        new t(t.REMOVE, x, null)
      ));
    else if (r(x) && (x.hasWidgets || x.hasThunks))
      for (var E = x.children, S = E.length, A = 0; A < S; A++) {
        var z = E[A];
        M += 1, h(z, w, M), r(z) && z.count && (M += z.count);
      }
    else i(x) && p(x, null, w, M);
  }
  function p(x, w, M, E) {
    var S = s(x, w), A = c(S.a, S.b);
    g(A) && (M[E] = new t(t.THUNK, null, A));
  }
  function g(x) {
    for (var w in x)
      if (w !== "a")
        return !0;
    return !1;
  }
  function m(x, w, M) {
    if (r(x)) {
      if (x.hooks && (w[M] = C(
        w[M],
        new t(
          t.PROPS,
          x,
          b(x.hooks)
        )
      )), x.descendantHooks || x.hasThunks)
        for (var E = x.children, S = E.length, A = 0; A < S; A++) {
          var z = E[A];
          M += 1, m(z, w, M), r(z) && z.count && (M += z.count);
        }
    } else i(x) && p(x, null, w, M);
  }
  function b(x) {
    var w = {};
    for (var M in x)
      w[M] = void 0;
    return w;
  }
  function y(x, w) {
    var M = _(w), E = M.keys, S = M.free;
    if (S.length === w.length)
      return {
        children: w,
        moves: null
      };
    var A = _(x), z = A.keys, I = A.free;
    if (I.length === x.length)
      return {
        children: w,
        moves: null
      };
    for (var V = [], F = 0, O = S.length, P = 0, U = 0; U < x.length; U++) {
      var G = x[U], Z;
      G.key ? E.hasOwnProperty(G.key) ? (Z = E[G.key], V.push(w[Z])) : (Z = U - P++, V.push(null)) : F < O ? (Z = S[F++], V.push(w[Z])) : (Z = U - P++, V.push(null));
    }
    for (var ie = F >= S.length ? w.length : S[F], X = 0; X < w.length; X++) {
      var se = w[X];
      se.key ? z.hasOwnProperty(se.key) || V.push(se) : X >= ie && V.push(se);
    }
    for (var te = V.slice(), re = 0, ce = [], ge = [], $, de = 0; de < w.length; ) {
      var pe = w[de];
      for ($ = te[re]; $ === null && te.length; )
        ce.push(v(te, re, null)), $ = te[re];
      !$ || $.key !== pe.key ? pe.key ? ($ && $.key ? E[$.key] !== de + 1 ? (ce.push(v(te, re, $.key)), $ = te[re], !$ || $.key !== pe.key ? ge.push({ key: pe.key, to: de }) : re++) : ge.push({ key: pe.key, to: de }) : ge.push({ key: pe.key, to: de }), de++) : $ && $.key && ce.push(v(te, re, $.key)) : (re++, de++);
    }
    for (; re < te.length; )
      $ = te[re], ce.push(v(te, re, $ && $.key));
    return ce.length === P && !ge.length ? {
      children: V,
      moves: null
    } : {
      children: V,
      moves: {
        removes: ce,
        inserts: ge
      }
    };
  }
  function v(x, w, M) {
    return x.splice(w, 1), {
      from: w,
      key: M
    };
  }
  function _(x) {
    for (var w = {}, M = [], E = x.length, S = 0; S < E; S++) {
      var A = x[S];
      A.key ? w[A.key] = S : M.push(S);
    }
    return {
      keys: w,
      // A hash of key name to index
      free: M
      // An array of unkeyed item indices
    };
  }
  function C(x, w) {
    return x ? (e(x) ? x.push(w) : x = [x, w], x) : w;
  }
  return An;
}
var Ln, Ni;
function Ll() {
  if (Ni) return Ln;
  Ni = 1;
  var e = /* @__PURE__ */ w0();
  return Ln = e, Ln;
}
var _0 = /* @__PURE__ */ Ll();
const k0 = /* @__PURE__ */ Er(_0);
var Nn, Ri;
function C0() {
  if (Ri) return Nn;
  Ri = 1;
  var e = {};
  Nn = t;
  function t(i, s, l, c) {
    return !l || l.length === 0 ? {} : (l.sort(o), r(i, s, l, c, 0));
  }
  function r(i, s, l, c, u) {
    if (c = c || {}, i) {
      a(l, u, u) && (c[u] = i);
      var d = s.children;
      if (d)
        for (var f = i.childNodes, h = 0; h < s.children.length; h++) {
          u += 1;
          var p = d[h] || e, g = u + (p.count || 0);
          a(l, u, g) && r(f[h], p, l, c, u), u = g;
        }
    }
    return c;
  }
  function a(i, s, l) {
    if (i.length === 0)
      return !1;
    for (var c = 0, u = i.length - 1, d, f; c <= u; ) {
      if (d = (u + c) / 2 >> 0, f = i[d], c === u)
        return f >= s && f <= l;
      if (f < s)
        c = d + 1;
      else if (f > l)
        u = d - 1;
      else
        return !0;
    }
    return !1;
  }
  function o(i, s) {
    return i > s ? 1 : -1;
  }
  return Nn;
}
var Rn, Ti;
function M0() {
  if (Ti) return Rn;
  Ti = 1;
  var e = /* @__PURE__ */ ut();
  Rn = t;
  function t(r, a) {
    return e(r) && e(a) ? "name" in r && "name" in a ? r.id === a.id : r.init === a.init : !1;
  }
  return Rn;
}
var Tn, Ii;
function S0() {
  if (Ii) return Tn;
  Ii = 1;
  var e = /* @__PURE__ */ Cl(), t = /* @__PURE__ */ ut(), r = /* @__PURE__ */ Al(), a = /* @__PURE__ */ M0();
  Tn = o;
  function o(p, g, m) {
    var b = p.type, y = p.vNode, v = p.patch;
    switch (b) {
      case r.REMOVE:
        return i(g, y);
      case r.INSERT:
        return s(g, v, m);
      case r.VTEXT:
        return l(g, y, v, m);
      case r.WIDGET:
        return c(g, y, v, m);
      case r.VNODE:
        return u(g, y, v, m);
      case r.ORDER:
        return f(g, v), g;
      case r.PROPS:
        return e(g, v, y.properties), g;
      case r.THUNK:
        return h(
          g,
          m.patch(g, v, m)
        );
      default:
        return g;
    }
  }
  function i(p, g) {
    var m = p.parentNode;
    return m && m.removeChild(p), d(p, g), null;
  }
  function s(p, g, m) {
    var b = m.render(g, m);
    return p && p.appendChild(b), p;
  }
  function l(p, g, m, b) {
    var y;
    if (p.nodeType === 3)
      p.replaceData(0, p.length, m.text), y = p;
    else {
      var v = p.parentNode;
      y = b.render(m, b), v && y !== p && v.replaceChild(y, p);
    }
    return y;
  }
  function c(p, g, m, b) {
    var y = a(g, m), v;
    y ? v = m.update(g, p) || p : v = b.render(m, b);
    var _ = p.parentNode;
    return _ && v !== p && _.replaceChild(v, p), y || d(p, g), v;
  }
  function u(p, g, m, b) {
    var y = p.parentNode, v = b.render(m, b);
    return y && v !== p && y.replaceChild(v, p), v;
  }
  function d(p, g) {
    typeof g.destroy == "function" && t(g) && g.destroy(p);
  }
  function f(p, g) {
    for (var m = p.childNodes, b = {}, y, v, _, C = 0; C < g.removes.length; C++)
      v = g.removes[C], y = m[v.from], v.key && (b[v.key] = y), p.removeChild(y);
    for (var x = m.length, w = 0; w < g.inserts.length; w++)
      _ = g.inserts[w], y = b[_.key], p.insertBefore(y, _.to >= x++ ? null : m[_.to]);
  }
  function h(p, g) {
    return p && g && p !== g && p.parentNode && p.parentNode.replaceChild(g, p), g;
  }
  return Tn;
}
var In, Pi;
function E0() {
  if (Pi) return In;
  Pi = 1;
  var e = /* @__PURE__ */ _l(), t = /* @__PURE__ */ wa(), r = /* @__PURE__ */ Sl(), a = /* @__PURE__ */ C0(), o = /* @__PURE__ */ S0();
  In = i;
  function i(u, d, f) {
    return f = f || {}, f.patch = f.patch && f.patch !== i ? f.patch : s, f.render = f.render || r, f.patch(u, d, f);
  }
  function s(u, d, f) {
    var h = c(d);
    if (h.length === 0)
      return u;
    var p = a(u, d.a, h), g = u.ownerDocument;
    !f.document && g !== e && (f.document = g);
    for (var m = 0; m < h.length; m++) {
      var b = h[m];
      u = l(
        u,
        p[b],
        d[b],
        f
      );
    }
    return u;
  }
  function l(u, d, f, h) {
    if (!d)
      return u;
    var p;
    if (t(f))
      for (var g = 0; g < f.length; g++)
        p = o(f[g], d, h), d === u && (u = p);
    else
      p = o(f, d, h), d === u && (u = p);
    return u;
  }
  function c(u) {
    var d = [];
    for (var f in u)
      f !== "a" && d.push(Number(f));
    return d;
  }
  return In;
}
var Pn, zi;
function Nl() {
  if (zi) return Pn;
  zi = 1;
  var e = /* @__PURE__ */ E0();
  return Pn = e, Pn;
}
var A0 = /* @__PURE__ */ Nl();
const L0 = /* @__PURE__ */ Er(A0);
class Rl {
  constructor(t) {
    W(this, "parentResolver"), W(this, "virtualRoot"), W(this, "virtualTree"), W(this, "shadowHost"), this.parentResolver = typeof t == "function" ? t : () => t, this.shadowHost = document.createElement("harper-render-box"), this.parentResolver().appendChild(this.shadowHost);
  }
  /** Render to the box. */
  render(t) {
    if (this.shadowHost.isConnected || this.parentResolver().appendChild(this.shadowHost), !this.virtualRoot || !this.virtualTree)
      this.virtualRoot = y0(t), this.shadowHost.attachShadow({ mode: "open" }).appendChild(this.virtualRoot);
    else {
      const r = k0(this.virtualTree, t);
      this.virtualRoot = L0(this.virtualRoot, r);
    }
    this.virtualTree = t;
  }
  /** Remove the box from the DOM. */
  remove() {
    try {
      this.shadowHost.outerHTML = this.shadowHost.outerHTML;
    } catch (t) {
      console.error(t);
    }
    this.virtualRoot = void 0, this.virtualTree = void 0;
  }
  getShadowHost() {
    return this.shadowHost;
  }
}
class N0 {
  constructor() {
    W(this, "renderBoxes"), W(this, "highlights"), this.renderBoxes = /* @__PURE__ */ new Map(), this.highlights = I0() ? /* @__PURE__ */ new Map() : null;
  }
  /** Used for CSS highlight API */
  insertHighlightStyle(t, r) {
    const a = xt(r.lint_kind), o = `underline ${a} solid 2px`, i = `${a}22`, s = `harper-highlight-style-${r.lint_kind}`;
    if (document.getElementById(s)) return;
    const l = document.createElement("style");
    l.id = s, l.textContent = `
      ::highlight(${t}) {
        text-decoration: ${o};
        background-color: ${i};
      }
    `, document.head.appendChild(l);
  }
  renderLintBoxes(t) {
    const r = /* @__PURE__ */ new Map();
    if (this.highlights)
      for (const [o, i] of this.highlights)
        i.clear();
    for (const o of t) {
      if (o.range && this.highlights != null) {
        let u = this.highlights.get(o.lint.lint_kind);
        if (u != null)
          u.add(o.range);
        else {
          u = new Highlight();
          const d = `harper-${o.lint.lint_kind}`;
          CSS.highlights.set(d, u), this.insertHighlightStyle(d, o.lint), u.add(o.range), this.highlights.set(o.lint.lint_kind, u);
        }
        continue;
      }
      let i = this.renderBoxes.get(o.source);
      i == null && (i = new Rl(this.computeRenderTarget(o.source)), this.renderBoxes.set(o.source, i));
      const s = r.get(o.source), l = R0(i.getShadowHost());
      let c = null;
      c == null && l != null && (c = l), s == null ? r.set(o.source, { boxes: [o], cpa: c }) : r.set(o.source, { boxes: [...s.boxes, o], cpa: c });
    }
    const a = /* @__PURE__ */ new Set();
    for (const [o, { boxes: i, cpa: s }] of r.entries()) {
      if (Ja(o)) {
        a.add(o);
        continue;
      }
      const l = this.renderBoxes.get(o), c = l.getShadowHost();
      c.id = "harper-highlight-host";
      const u = qt(o);
      if (!Gu(c, o)) if (s != null) {
        const h = c.style;
        h.position = "absolute", h.top = "0px", h.left = "0px", h.inset = "0", h.pointerEvents = "none", h.width = "0px", h.height = "0px", h.contain = "none", h.transform = "none";
      } else c.hasAttribute("style") && c.removeAttribute("style");
      const d = Vu(o) ?? (u || s == null ? null : { x: s.x, y: s.y }), f = u ? "absolute" : "fixed";
      l.render(this.renderTree(i, d, f)), a.add(o);
    }
    for (const [o, i] of this.renderBoxes.entries())
      if (!a.has(o)) {
        if (Ja(o))
          continue;
        i.render(pr("div", {}, []));
      }
    this.pruneDetachedSources();
  }
  /** Remove the render boxes for sources that aren't attached any longer. */
  pruneDetachedSources() {
    for (const [t, r] of this.renderBoxes.entries())
      document.contains(t) || (r.remove(), this.renderBoxes.delete(t));
  }
  renderTree(t, r, a) {
    const o = [], i = r?.x ?? 0, s = r?.y ?? 0;
    for (const l of t) {
      const c = l.x - i, u = l.y - s, d = a === "fixed" ? {
        position: "fixed",
        left: "0px",
        top: "0px",
        transform: `translate(${c}px, ${u}px)`
      } : {
        position: "absolute",
        left: `${c}px`,
        top: `${u}px`
      }, f = pr(
        "div",
        {
          style: {
            ...d,
            width: `${l.width}px`,
            height: `${l.height}px`,
            pointerEvents: "none",
            borderBottom: `2px solid ${xt(l.lint.lint_kind)}`,
            backgroundColor: `${xt(l.lint.lint_kind)}22`
          },
          id: "harper-highlight"
        },
        []
      );
      o.push(f);
    }
    return pr("div", {}, o);
  }
  /** Determines which target the render boxes should be attached to.
   * Depends on text editor. */
  computeRenderTarget(t) {
    var r;
    const a = $u(t);
    if (a != null)
      return a;
    if ((r = t.parentElement) != null && r.classList.contains("ProseMirror"))
      return t.parentElement.parentElement;
    const o = [
      Tu,
      Au,
      Su,
      Ns,
      Eu,
      xa,
      Rs,
      Nu,
      Ru,
      Ts,
      Iu,
      Pu,
      zu
    ];
    for (const i of o) {
      const s = i(t);
      if (s != null)
        return s.parentElement;
    }
    return Ss(t.parentElement);
  }
}
function R0(e) {
  let t = e.parentElement;
  for (; t && t.nodeType === 1; ) {
    if (T0(t))
      return t.getBoundingClientRect();
    t = t.parentElement;
  }
  return null;
}
function T0(e) {
  if (!(e instanceof Element))
    throw new TypeError("Expected a DOM Element");
  const t = window.getComputedStyle(e);
  if (t.getPropertyValue("filter") !== "none" || t.getPropertyValue("backdrop-filter") !== "none" || t.getPropertyValue("transform") !== "none" || t.getPropertyValue("perspective") !== "none" || t.getPropertyValue("contain").match(/\b(layout|paint|strict|content)\b/))
    return !0;
  const r = t.getPropertyValue("will-change");
  if (r && r.trim() !== "auto") {
    const a = r.split(",").map((i) => i.trim()), o = ["filter", "backdrop-filter", "transform", "perspective"];
    if (a.filter((i) => o.includes(i)).length)
      return !0;
  }
  return t.getPropertyValue("content-visibility") === "auto";
}
function I0() {
  var e, t, r, a;
  const o = (e = globalThis.document) == null ? void 0 : e.documentElement;
  if (((t = o?.getAttribute) == null ? void 0 : t.call(o, "data-harper-disable-css-highlights")) === "true" || ((r = o?.dataset) == null ? void 0 : r.harperDisableCssHighlights) === "true" || ((a = globalThis.navigator) == null ? void 0 : a.webdriver) === !0 || !("CSS" in window) || typeof CSS.supports != "function") return !1;
  const i = CSS.supports("selector(::highlight(__x))"), s = CSS?.highlights, l = !!s && ["get", "set", "has", "delete", "clear"].every((d) => typeof s[d] == "function"), c = typeof window.Highlight == "function";
  let u = !1;
  if (l && c)
    try {
      const d = new Highlight();
      CSS.highlights.set("__probe__", d), u = CSS.highlights.has("__probe__"), CSS.highlights.delete("__probe__");
    } catch {
    }
  return i && l && c && u;
}
const Oi = [
  "Vary sentence length to keep readers engaged.",
  "Replace clichés with fresh, precise wording.",
  "Check subject‑verb agreement, especially in long sentences.",
  "Keep consistent terminology across the document.",
  "Read aloud to catch awkward phrasing.",
  "You can easily write em-dashes by typing out three hyphens in a row.",
  "You can easily write en-dashes by typing out two hyphens in a row.",
  "Harper can be configured to open with a hotkey. Check the extension's settings.",
  "Don't agree with a suggestion? Click 'Dismiss' and Harper will adapt to your writing style.",
  "You can add specialized terms, names, or acronyms to your personal dictionary in Harper's settings.",
  "Check your language preferences in Settings to get suggestions for different dialects (e.g., American vs. British English).",
  `Don't want Harper to check your work every keystroke? Set the "delay" in your settings to 300 milliseconds.`
];
function ta(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
  return a;
}
function P0(e) {
  if (Array.isArray(e)) return e;
}
function z0(e) {
  if (Array.isArray(e)) return ta(e);
}
function O0(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function j0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Tl(a.key), a);
  }
}
function F0(e, t, r) {
  return t && j0(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function gr(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Na(e)) || t) {
      r && (e = r);
      var a = 0, o = function() {
      };
      return {
        s: o,
        n: function() {
          return a >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[a++]
          };
        },
        e: function(c) {
          throw c;
        },
        f: o
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, s = !0, l = !1;
  return {
    s: function() {
      r = r.call(e);
    },
    n: function() {
      var c = r.next();
      return s = c.done, c;
    },
    e: function(c) {
      l = !0, i = c;
    },
    f: function() {
      try {
        s || r.return == null || r.return();
      } finally {
        if (l) throw i;
      }
    }
  };
}
function D(e, t, r) {
  return (t = Tl(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function B0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function D0(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a, o, i, s, l = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (a = i.call(r)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (d) {
      u = !0, o = d;
    } finally {
      try {
        if (!c && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw o;
      }
    }
    return l;
  }
}
function H0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function W0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ji(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ji(Object(r), !0).forEach(function(a) {
      D(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ji(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function zr(e, t) {
  return P0(e) || D0(e, t) || Na(e, t) || H0();
}
function Te(e) {
  return z0(e) || B0(e) || Na(e) || W0();
}
function q0(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tl(e) {
  var t = q0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Cr(e) {
  "@babel/helpers - typeof";
  return Cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cr(e);
}
function Na(e, t) {
  if (e) {
    if (typeof e == "string") return ta(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ta(e, t) : void 0;
  }
}
var Fi = function() {
}, Ra = {}, Il = {}, Pl = null, zl = {
  mark: Fi,
  measure: Fi
};
try {
  typeof window < "u" && (Ra = window), typeof document < "u" && (Il = document), typeof MutationObserver < "u" && (Pl = MutationObserver), typeof performance < "u" && (zl = performance);
} catch {
}
var $0 = Ra.navigator || {}, Bi = $0.userAgent, Di = Bi === void 0 ? "" : Bi, st = Ra, J = Il, Hi = Pl, cr = zl, qe = !!J.documentElement && !!J.head && typeof J.addEventListener == "function" && typeof J.createElement == "function", Ol = ~Di.indexOf("MSIE") || ~Di.indexOf("Trident/"), zn, V0 = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, G0 = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i, jl = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  },
  slab: {
    "fa-regular": "regular",
    faslr: "regular"
  },
  "slab-press": {
    "fa-regular": "regular",
    faslpr: "regular"
  },
  thumbprint: {
    "fa-light": "light",
    fatl: "light"
  },
  whiteboard: {
    "fa-semibold": "semibold",
    fawsb: "semibold"
  },
  notdog: {
    "fa-solid": "solid",
    fans: "solid"
  },
  "notdog-duo": {
    "fa-solid": "solid",
    fands: "solid"
  },
  etch: {
    "fa-solid": "solid",
    faes: "solid"
  },
  jelly: {
    "fa-regular": "regular",
    fajr: "regular"
  },
  "jelly-fill": {
    "fa-regular": "regular",
    fajfr: "regular"
  },
  "jelly-duo": {
    "fa-regular": "regular",
    fajdr: "regular"
  },
  chisel: {
    "fa-regular": "regular",
    facr: "regular"
  },
  utility: {
    "fa-semibold": "semibold",
    fausb: "semibold"
  },
  "utility-duo": {
    "fa-semibold": "semibold",
    faudsb: "semibold"
  },
  "utility-fill": {
    "fa-semibold": "semibold",
    faufsb: "semibold"
  }
}, U0 = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Fl = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], he = "classic", Jt = "duotone", Bl = "sharp", Dl = "sharp-duotone", Hl = "chisel", Wl = "etch", ql = "jelly", $l = "jelly-duo", Vl = "jelly-fill", Gl = "notdog", Ul = "notdog-duo", Yl = "slab", Xl = "slab-press", Kl = "thumbprint", Jl = "utility", Zl = "utility-duo", Ql = "utility-fill", ec = "whiteboard", Y0 = "Classic", X0 = "Duotone", K0 = "Sharp", J0 = "Sharp Duotone", Z0 = "Chisel", Q0 = "Etch", eh = "Jelly", th = "Jelly Duo", rh = "Jelly Fill", nh = "Notdog", ah = "Notdog Duo", oh = "Slab", ih = "Slab Press", sh = "Thumbprint", lh = "Utility", ch = "Utility Duo", uh = "Utility Fill", dh = "Whiteboard", tc = [he, Jt, Bl, Dl, Hl, Wl, ql, $l, Vl, Gl, Ul, Yl, Xl, Kl, Jl, Zl, Ql, ec];
zn = {}, D(D(D(D(D(D(D(D(D(D(zn, he, Y0), Jt, X0), Bl, K0), Dl, J0), Hl, Z0), Wl, Q0), ql, eh), $l, th), Vl, rh), Gl, nh), D(D(D(D(D(D(D(D(zn, Ul, ah), Yl, oh), Xl, ih), Kl, sh), Jl, lh), Zl, ch), Ql, uh), ec, dh);
var fh = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  slab: {
    400: "faslr"
  },
  "slab-press": {
    400: "faslpr"
  },
  whiteboard: {
    600: "fawsb"
  },
  thumbprint: {
    300: "fatl"
  },
  notdog: {
    900: "fans"
  },
  "notdog-duo": {
    900: "fands"
  },
  etch: {
    900: "faes"
  },
  chisel: {
    400: "facr"
  },
  jelly: {
    400: "fajr"
  },
  "jelly-fill": {
    400: "fajfr"
  },
  "jelly-duo": {
    400: "fajdr"
  },
  utility: {
    600: "fausb"
  },
  "utility-duo": {
    600: "faudsb"
  },
  "utility-fill": {
    600: "faufsb"
  }
}, hh = {
  "Font Awesome 7 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 7 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 7 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 7 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 7 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 7 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  "Font Awesome 7 Jelly": {
    400: "fajr",
    normal: "fajr"
  },
  "Font Awesome 7 Jelly Fill": {
    400: "fajfr",
    normal: "fajfr"
  },
  "Font Awesome 7 Jelly Duo": {
    400: "fajdr",
    normal: "fajdr"
  },
  "Font Awesome 7 Slab": {
    400: "faslr",
    normal: "faslr"
  },
  "Font Awesome 7 Slab Press": {
    400: "faslpr",
    normal: "faslpr"
  },
  "Font Awesome 7 Thumbprint": {
    300: "fatl",
    normal: "fatl"
  },
  "Font Awesome 7 Notdog": {
    900: "fans",
    normal: "fans"
  },
  "Font Awesome 7 Notdog Duo": {
    900: "fands",
    normal: "fands"
  },
  "Font Awesome 7 Etch": {
    900: "faes",
    normal: "faes"
  },
  "Font Awesome 7 Chisel": {
    400: "facr",
    normal: "facr"
  },
  "Font Awesome 7 Whiteboard": {
    600: "fawsb",
    normal: "fawsb"
  },
  "Font Awesome 7 Utility": {
    600: "fausb",
    normal: "fausb"
  },
  "Font Awesome 7 Utility Duo": {
    600: "faudsb",
    normal: "faudsb"
  },
  "Font Awesome 7 Utility Fill": {
    600: "faufsb",
    normal: "faufsb"
  }
}, ph = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["chisel", {
  defaultShortPrefixId: "facr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["etch", {
  defaultShortPrefixId: "faes",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["jelly", {
  defaultShortPrefixId: "fajr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-duo", {
  defaultShortPrefixId: "fajdr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-fill", {
  defaultShortPrefixId: "fajfr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["notdog", {
  defaultShortPrefixId: "fans",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["notdog-duo", {
  defaultShortPrefixId: "fands",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["slab", {
  defaultShortPrefixId: "faslr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["slab-press", {
  defaultShortPrefixId: "faslpr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["thumbprint", {
  defaultShortPrefixId: "fatl",
  defaultStyleId: "light",
  styleIds: ["light"],
  futureStyleIds: [],
  defaultFontWeight: 300
}], ["utility", {
  defaultShortPrefixId: "fausb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-duo", {
  defaultShortPrefixId: "faudsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-fill", {
  defaultShortPrefixId: "faufsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["whiteboard", {
  defaultShortPrefixId: "fawsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}]]), mh = {
  chisel: {
    regular: "facr"
  },
  classic: {
    brands: "fab",
    light: "fal",
    regular: "far",
    solid: "fas",
    thin: "fat"
  },
  duotone: {
    light: "fadl",
    regular: "fadr",
    solid: "fad",
    thin: "fadt"
  },
  etch: {
    solid: "faes"
  },
  jelly: {
    regular: "fajr"
  },
  "jelly-duo": {
    regular: "fajdr"
  },
  "jelly-fill": {
    regular: "fajfr"
  },
  notdog: {
    solid: "fans"
  },
  "notdog-duo": {
    solid: "fands"
  },
  sharp: {
    light: "fasl",
    regular: "fasr",
    solid: "fass",
    thin: "fast"
  },
  "sharp-duotone": {
    light: "fasdl",
    regular: "fasdr",
    solid: "fasds",
    thin: "fasdt"
  },
  slab: {
    regular: "faslr"
  },
  "slab-press": {
    regular: "faslpr"
  },
  thumbprint: {
    light: "fatl"
  },
  utility: {
    semibold: "fausb"
  },
  "utility-duo": {
    semibold: "faudsb"
  },
  "utility-fill": {
    semibold: "faufsb"
  },
  whiteboard: {
    semibold: "fawsb"
  }
}, rc = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Wi = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, gh = ["kit"], vh = "kit", bh = "kit-duotone", yh = "Kit", xh = "Kit Duotone";
D(D({}, vh, yh), bh, xh);
var wh = {
  kit: {
    "fa-kit": "fak"
  }
}, _h = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, kh = {
  kit: {
    fak: "fa-kit"
  }
}, qi = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, On, ur = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ch = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], Mh = "classic", Sh = "duotone", Eh = "sharp", Ah = "sharp-duotone", Lh = "chisel", Nh = "etch", Rh = "jelly", Th = "jelly-duo", Ih = "jelly-fill", Ph = "notdog", zh = "notdog-duo", Oh = "slab", jh = "slab-press", Fh = "thumbprint", Bh = "utility", Dh = "utility-duo", Hh = "utility-fill", Wh = "whiteboard", qh = "Classic", $h = "Duotone", Vh = "Sharp", Gh = "Sharp Duotone", Uh = "Chisel", Yh = "Etch", Xh = "Jelly", Kh = "Jelly Duo", Jh = "Jelly Fill", Zh = "Notdog", Qh = "Notdog Duo", ep = "Slab", tp = "Slab Press", rp = "Thumbprint", np = "Utility", ap = "Utility Duo", op = "Utility Fill", ip = "Whiteboard";
On = {}, D(D(D(D(D(D(D(D(D(D(On, Mh, qh), Sh, $h), Eh, Vh), Ah, Gh), Lh, Uh), Nh, Yh), Rh, Xh), Th, Kh), Ih, Jh), Ph, Zh), D(D(D(D(D(D(D(D(On, zh, Qh), Oh, ep), jh, tp), Fh, rp), Bh, np), Dh, ap), Hh, op), Wh, ip);
var sp = "kit", lp = "kit-duotone", cp = "Kit", up = "Kit Duotone";
D(D({}, sp, cp), lp, up);
var dp = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  },
  slab: {
    "fa-regular": "faslr"
  },
  "slab-press": {
    "fa-regular": "faslpr"
  },
  whiteboard: {
    "fa-semibold": "fawsb"
  },
  thumbprint: {
    "fa-light": "fatl"
  },
  notdog: {
    "fa-solid": "fans"
  },
  "notdog-duo": {
    "fa-solid": "fands"
  },
  etch: {
    "fa-solid": "faes"
  },
  jelly: {
    "fa-regular": "fajr"
  },
  "jelly-fill": {
    "fa-regular": "fajfr"
  },
  "jelly-duo": {
    "fa-regular": "fajdr"
  },
  chisel: {
    "fa-regular": "facr"
  },
  utility: {
    "fa-semibold": "fausb"
  },
  "utility-duo": {
    "fa-semibold": "faudsb"
  },
  "utility-fill": {
    "fa-semibold": "faufsb"
  }
}, fp = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  slab: ["faslr"],
  "slab-press": ["faslpr"],
  whiteboard: ["fawsb"],
  thumbprint: ["fatl"],
  notdog: ["fans"],
  "notdog-duo": ["fands"],
  etch: ["faes"],
  jelly: ["fajr"],
  "jelly-fill": ["fajfr"],
  "jelly-duo": ["fajdr"],
  chisel: ["facr"],
  utility: ["fausb"],
  "utility-duo": ["faudsb"],
  "utility-fill": ["faufsb"]
}, ra = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  },
  slab: {
    faslr: "fa-regular"
  },
  "slab-press": {
    faslpr: "fa-regular"
  },
  whiteboard: {
    fawsb: "fa-semibold"
  },
  thumbprint: {
    fatl: "fa-light"
  },
  notdog: {
    fans: "fa-solid"
  },
  "notdog-duo": {
    fands: "fa-solid"
  },
  etch: {
    faes: "fa-solid"
  },
  jelly: {
    fajr: "fa-regular"
  },
  "jelly-fill": {
    fajfr: "fa-regular"
  },
  "jelly-duo": {
    fajdr: "fa-regular"
  },
  chisel: {
    facr: "fa-regular"
  },
  utility: {
    fausb: "fa-semibold"
  },
  "utility-duo": {
    faudsb: "fa-semibold"
  },
  "utility-fill": {
    faufsb: "fa-semibold"
  }
}, hp = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"], nc = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(Ch, hp), pp = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ac = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mp = ac.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), gp = ["aw", "fw", "pull-left", "pull-right"], vp = [].concat(Te(Object.keys(fp)), pp, gp, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", ur.GROUP, ur.SWAP_OPACITY, ur.PRIMARY, ur.SECONDARY]).concat(ac.map(function(e) {
  return "".concat(e, "x");
})).concat(mp.map(function(e) {
  return "w-".concat(e);
})), bp = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, He = "___FONT_AWESOME___", na = 16, oc = "fa", ic = "svg-inline--fa", lt = "data-fa-i2svg", aa = "data-fa-pseudo-element", yp = "data-fa-pseudo-element-pending", Ta = "data-prefix", Ia = "data-icon", $i = "fontawesome-i2svg", xp = "async", wp = ["HTML", "HEAD", "STYLE", "SCRIPT"], sc = ["::before", "::after", ":before", ":after"], lc = (function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Zt(e) {
  return new Proxy(e, {
    get: function(t, r) {
      return r in t ? t[r] : t[he];
    }
  });
}
var cc = k({}, jl);
cc[he] = k(k(k(k({}, {
  "fa-duotone": "duotone"
}), jl[he]), Wi.kit), Wi["kit-duotone"]);
var _p = Zt(cc), oa = k({}, mh);
oa[he] = k(k(k(k({}, {
  duotone: "fad"
}), oa[he]), qi.kit), qi["kit-duotone"]);
var Vi = Zt(oa), ia = k({}, ra);
ia[he] = k(k({}, ia[he]), kh.kit);
var Pa = Zt(ia), sa = k({}, dp);
sa[he] = k(k({}, sa[he]), wh.kit);
Zt(sa);
var kp = V0, uc = "fa-layers-text", Cp = G0, Mp = k({}, fh);
Zt(Mp);
var Sp = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], jn = U0, Ep = [].concat(Te(gh), Te(vp)), jt = st.FontAwesomeConfig || {};
function Ap(e) {
  var t = J.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Lp(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (J && typeof J.querySelector == "function") {
  var Np = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Np.forEach(function(e) {
    var t = zr(e, 2), r = t[0], a = t[1], o = Lp(Ap(r));
    o != null && (jt[a] = o);
  });
}
var dc = {
  styleDefault: "solid",
  familyDefault: he,
  cssPrefix: oc,
  replacementClass: ic,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  searchPseudoElements: !1,
  searchPseudoElementsWarnings: !0,
  searchPseudoElementsFullScan: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
jt.familyPrefix && (jt.cssPrefix = jt.familyPrefix);
var At = k(k({}, dc), jt);
At.autoReplaceSvg || (At.observeMutations = !1);
var T = {};
Object.keys(dc).forEach(function(e) {
  Object.defineProperty(T, e, {
    enumerable: !0,
    set: function(t) {
      At[e] = t, Ft.forEach(function(r) {
        return r(T);
      });
    },
    get: function() {
      return At[e];
    }
  });
});
Object.defineProperty(T, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    At.cssPrefix = e, Ft.forEach(function(t) {
      return t(T);
    });
  },
  get: function() {
    return At.cssPrefix;
  }
});
st.FontAwesomeConfig = T;
var Ft = [];
function Rp(e) {
  return Ft.push(e), function() {
    Ft.splice(Ft.indexOf(e), 1);
  };
}
var vt = na, ze = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Tp(e) {
  if (!(!e || !qe)) {
    var t = J.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var r = J.head.childNodes, a = null, o = r.length - 1; o > -1; o--) {
      var i = r[o], s = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (a = i);
    }
    return J.head.insertBefore(t, a), e;
  }
}
var Ip = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Gi() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Ip[Math.random() * 62 | 0];
  return t;
}
function Nt(e) {
  for (var t = [], r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function za(e) {
  return e.classList ? Nt(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function fc(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Pp(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, '="').concat(fc(e[r]), '" ');
  }, "").trim();
}
function Or(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, ": ").concat(e[r].trim(), ";");
  }, "");
}
function Oa(e) {
  return e.size !== ze.size || e.x !== ze.x || e.y !== ze.y || e.rotate !== ze.rotate || e.flipX || e.flipY;
}
function zp(e) {
  var t = e.transform, r = e.containerWidth, a = e.iconWidth, o = {
    transform: "translate(".concat(r / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), c = {
    transform: "".concat(i, " ").concat(s, " ").concat(l)
  }, u = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: o,
    inner: c,
    path: u
  };
}
function Op(e) {
  var t = e.transform, r = e.width, a = r === void 0 ? na : r, o = e.height, i = o === void 0 ? na : o, s = "";
  return Ol ? s += "translate(".concat(t.x / vt - a / 2, "em, ").concat(t.y / vt - i / 2, "em) ") : s += "translate(calc(-50% + ".concat(t.x / vt, "em), calc(-50% + ").concat(t.y / vt, "em)) "), s += "scale(".concat(t.size / vt * (t.flipX ? -1 : 1), ", ").concat(t.size / vt * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var jp = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;
function hc() {
  var e = oc, t = ic, r = T.cssPrefix, a = T.replacementClass, o = jp;
  if (r !== e || a !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    o = o.replace(i, ".".concat(r, "-")).replace(s, "--".concat(r, "-")).replace(l, ".".concat(a));
  }
  return o;
}
var Ui = !1;
function Fn() {
  T.autoAddCss && !Ui && (Tp(hc()), Ui = !0);
}
var Fp = {
  mixout: function() {
    return {
      dom: {
        css: hc,
        insertCss: Fn
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Fn();
      },
      beforeI2svg: function() {
        Fn();
      }
    };
  }
}, We = st || {};
We[He] || (We[He] = {});
We[He].styles || (We[He].styles = {});
We[He].hooks || (We[He].hooks = {});
We[He].shims || (We[He].shims = []);
var Re = We[He], pc = [], mc = function() {
  J.removeEventListener("DOMContentLoaded", mc), Mr = 1, pc.map(function(e) {
    return e();
  });
}, Mr = !1;
qe && (Mr = (J.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(J.readyState), Mr || J.addEventListener("DOMContentLoaded", mc));
function Bp(e) {
  qe && (Mr ? setTimeout(e, 0) : pc.push(e));
}
function Qt(e) {
  var t = e.tag, r = e.attributes, a = r === void 0 ? {} : r, o = e.children, i = o === void 0 ? [] : o;
  return typeof e == "string" ? fc(e) : "<".concat(t, " ").concat(Pp(a), ">").concat(i.map(Qt).join(""), "</").concat(t, ">");
}
function Yi(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Bn = function(e, t, r, a) {
  var o = Object.keys(e), i = o.length, s = t, l, c, u;
  for (r === void 0 ? (l = 1, u = e[o[0]]) : (l = 0, u = r); l < i; l++)
    c = o[l], u = s(u, e[c], c, e);
  return u;
};
function gc(e) {
  return Te(e).length !== 1 ? null : e.codePointAt(0).toString(16);
}
function Xi(e) {
  return Object.keys(e).reduce(function(t, r) {
    var a = e[r], o = !!a.icon;
    return o ? t[a.iconName] = a.icon : t[r] = a, t;
  }, {});
}
function la(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.skipHooks, o = a === void 0 ? !1 : a, i = Xi(t);
  typeof Re.hooks.addPack == "function" && !o ? Re.hooks.addPack(e, Xi(t)) : Re.styles[e] = k(k({}, Re.styles[e] || {}), i), e === "fas" && la("fa", t);
}
var Wt = Re.styles, Dp = Re.shims, vc = Object.keys(Pa), Hp = vc.reduce(function(e, t) {
  return e[t] = Object.keys(Pa[t]), e;
}, {}), ja = null, bc = {}, yc = {}, xc = {}, wc = {}, _c = {};
function Wp(e) {
  return ~Ep.indexOf(e);
}
function qp(e, t) {
  var r = t.split("-"), a = r[0], o = r.slice(1).join("-");
  return a === e && o !== "" && !Wp(o) ? o : null;
}
var kc = function() {
  var e = function(a) {
    return Bn(Wt, function(o, i, s) {
      return o[s] = Bn(i, a, {}), o;
    }, {});
  };
  bc = e(function(a, o, i) {
    if (o[3] && (a[o[3]] = i), o[2]) {
      var s = o[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        a[l.toString(16)] = i;
      });
    }
    return a;
  }), yc = e(function(a, o, i) {
    if (a[i] = i, o[2]) {
      var s = o[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        a[l] = i;
      });
    }
    return a;
  }), _c = e(function(a, o, i) {
    var s = o[2];
    return a[i] = i, s.forEach(function(l) {
      a[l] = i;
    }), a;
  });
  var t = "far" in Wt || T.autoFetchSvg, r = Bn(Dp, function(a, o) {
    var i = o[0], s = o[1], l = o[2];
    return s === "far" && !t && (s = "fas"), typeof i == "string" && (a.names[i] = {
      prefix: s,
      iconName: l
    }), typeof i == "number" && (a.unicodes[i.toString(16)] = {
      prefix: s,
      iconName: l
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  xc = r.names, wc = r.unicodes, ja = jr(T.styleDefault, {
    family: T.familyDefault
  });
};
Rp(function(e) {
  ja = jr(e.styleDefault, {
    family: T.familyDefault
  });
});
kc();
function Fa(e, t) {
  return (bc[e] || {})[t];
}
function $p(e, t) {
  return (yc[e] || {})[t];
}
function ot(e, t) {
  return (_c[e] || {})[t];
}
function Cc(e) {
  return xc[e] || {
    prefix: null,
    iconName: null
  };
}
function Vp(e) {
  var t = wc[e], r = Fa("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Qe() {
  return ja;
}
var Mc = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Gp(e) {
  var t = he, r = vc.reduce(function(a, o) {
    return a[o] = "".concat(T.cssPrefix, "-").concat(o), a;
  }, {});
  return tc.forEach(function(a) {
    (e.includes(r[a]) || e.some(function(o) {
      return Hp[a].includes(o);
    })) && (t = a);
  }), t;
}
function jr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.family, a = r === void 0 ? he : r, o = _p[a][e];
  if (a === Jt && !e)
    return "fad";
  var i = Vi[a][e] || Vi[a][o], s = e in Re.styles ? e : null, l = i || s || null;
  return l;
}
function Up(e) {
  var t = [], r = null;
  return e.forEach(function(a) {
    var o = qp(T.cssPrefix, a);
    o ? r = o : a && t.push(a);
  }), {
    iconName: r,
    rest: t
  };
}
function Ki(e) {
  return e.sort().filter(function(t, r, a) {
    return a.indexOf(t) === r;
  });
}
var Ji = nc.concat(rc);
function Fr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipLookups, a = r === void 0 ? !1 : r, o = null, i = Ki(e.filter(function(p) {
    return Ji.includes(p);
  })), s = Ki(e.filter(function(p) {
    return !Ji.includes(p);
  })), l = i.filter(function(p) {
    return o = p, !Fl.includes(p);
  }), c = zr(l, 1), u = c[0], d = u === void 0 ? null : u, f = Gp(i), h = k(k({}, Up(s)), {}, {
    prefix: jr(d, {
      family: f
    })
  });
  return k(k(k({}, h), Jp({
    values: e,
    family: f,
    styles: Wt,
    config: T,
    canonical: h,
    givenPrefix: o
  })), Yp(a, o, h));
}
function Yp(e, t, r) {
  var a = r.prefix, o = r.iconName;
  if (e || !a || !o)
    return {
      prefix: a,
      iconName: o
    };
  var i = t === "fa" ? Cc(o) : {}, s = ot(a, o);
  return o = i.iconName || s || o, a = i.prefix || a, a === "far" && !Wt.far && Wt.fas && !T.autoFetchSvg && (a = "fas"), {
    prefix: a,
    iconName: o
  };
}
var Xp = tc.filter(function(e) {
  return e !== he || e !== Jt;
}), Kp = Object.keys(ra).filter(function(e) {
  return e !== he;
}).map(function(e) {
  return Object.keys(ra[e]);
}).flat();
function Jp(e) {
  var t = e.values, r = e.family, a = e.canonical, o = e.givenPrefix, i = o === void 0 ? "" : o, s = e.styles, l = s === void 0 ? {} : s, c = e.config, u = c === void 0 ? {} : c, d = r === Jt, f = t.includes("fa-duotone") || t.includes("fad"), h = u.familyDefault === "duotone", p = a.prefix === "fad" || a.prefix === "fa-duotone";
  if (!d && (f || h || p) && (a.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (a.prefix = "fab"), !a.prefix && Xp.includes(r)) {
    var g = Object.keys(l).find(function(b) {
      return Kp.includes(b);
    });
    if (g || u.autoFetchSvg) {
      var m = ph.get(r).defaultShortPrefixId;
      a.prefix = m, a.iconName = ot(a.prefix, a.iconName) || a.iconName;
    }
  }
  return (a.prefix === "fa" || i === "fa") && (a.prefix = Qe() || "fas"), a;
}
var Zp = /* @__PURE__ */ (function() {
  function e() {
    O0(this, e), this.definitions = {};
  }
  return F0(e, [{
    key: "add",
    value: function() {
      for (var t = this, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
        a[o] = arguments[o];
      var i = a.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(s) {
        t.definitions[s] = k(k({}, t.definitions[s] || {}), i[s]), la(s, i[s]);
        var l = Pa[he][s];
        l && la(l, i[s]), kc();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(t, r) {
      var a = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(a).map(function(o) {
        var i = a[o], s = i.prefix, l = i.iconName, c = i.icon, u = c[2];
        t[s] || (t[s] = {}), u.length > 0 && u.forEach(function(d) {
          typeof d == "string" && (t[s][d] = c);
        }), t[s][l] = c;
      }), t;
    }
  }]);
})(), Zi = [], bt = {}, wt = {}, Qp = Object.keys(wt);
function em(e, t) {
  var r = t.mixoutsTo;
  return Zi = e, bt = {}, Object.keys(wt).forEach(function(a) {
    Qp.indexOf(a) === -1 && delete wt[a];
  }), Zi.forEach(function(a) {
    var o = a.mixout ? a.mixout() : {};
    if (Object.keys(o).forEach(function(s) {
      typeof o[s] == "function" && (r[s] = o[s]), Cr(o[s]) === "object" && Object.keys(o[s]).forEach(function(l) {
        r[s] || (r[s] = {}), r[s][l] = o[s][l];
      });
    }), a.hooks) {
      var i = a.hooks();
      Object.keys(i).forEach(function(s) {
        bt[s] || (bt[s] = []), bt[s].push(i[s]);
      });
    }
    a.provides && a.provides(wt);
  }), r;
}
function ca(e, t) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    a[o - 2] = arguments[o];
  var i = bt[e] || [];
  return i.forEach(function(s) {
    t = s.apply(null, [t].concat(a));
  }), t;
}
function ct(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    r[a - 1] = arguments[a];
  var o = bt[e] || [];
  o.forEach(function(i) {
    i.apply(null, r);
  });
}
function et() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return wt[e] ? wt[e].apply(null, t) : void 0;
}
function ua(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, r = e.prefix || Qe();
  if (t)
    return t = ot(r, t) || t, Yi(Sc.definitions, r, t) || Yi(Re.styles, r, t);
}
var Sc = new Zp(), tm = function() {
  T.autoReplaceSvg = !1, T.observeMutations = !1, ct("noAuto");
}, rm = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return qe ? (ct("beforeI2svg", e), et("pseudoElements2svg", e), et("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot;
    T.autoReplaceSvg === !1 && (T.autoReplaceSvg = !0), T.observeMutations = !0, Bp(function() {
      am({
        autoReplaceSvgRoot: t
      }), ct("watch", e);
    });
  }
}, nm = {
  icon: function(e) {
    if (e === null)
      return null;
    if (Cr(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: ot(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = jr(e[0]);
      return {
        prefix: r,
        iconName: ot(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(T.cssPrefix, "-")) > -1 || e.match(kp))) {
      var a = Fr(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || Qe(),
        iconName: ot(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof e == "string") {
      var o = Qe();
      return {
        prefix: o,
        iconName: ot(o, e) || e
      };
    }
  }
}, Ba = {
  noAuto: tm,
  config: T,
  dom: rm,
  parse: nm,
  library: Sc,
  findIconDefinition: ua,
  toHtml: Qt
}, am = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot, r = t === void 0 ? J : t;
  (Object.keys(Re.styles).length > 0 || T.autoFetchSvg) && qe && T.autoReplaceSvg && Ba.dom.i2svg({
    node: r
  });
};
function Br(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return Qt(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (qe) {
        var r = J.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function om(e) {
  var t = e.children, r = e.main, a = e.mask, o = e.attributes, i = e.styles, s = e.transform;
  if (Oa(s) && r.found && !a.found) {
    var l = r.width, c = r.height, u = {
      x: l / c / 2,
      y: 0.5
    };
    o.style = Or(k(k({}, i), {}, {
      "transform-origin": "".concat(u.x + s.x / 16, "em ").concat(u.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function im(e) {
  var t = e.prefix, r = e.iconName, a = e.children, o = e.attributes, i = e.symbol, s = i === !0 ? "".concat(t, "-").concat(T.cssPrefix, "-").concat(r) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: k(k({}, o), {}, {
        id: s
      }),
      children: a
    }]
  }];
}
function sm(e) {
  var t = ["aria-label", "aria-labelledby", "title", "role"];
  return t.some(function(r) {
    return r in e;
  });
}
function Da(e) {
  var t = e.icons, r = t.main, a = t.mask, o = e.prefix, i = e.iconName, s = e.transform, l = e.symbol, c = e.maskId, u = e.extra, d = e.watchable, f = d === void 0 ? !1 : d, h = a.found ? a : r, p = h.width, g = h.height, m = [T.replacementClass, i ? "".concat(T.cssPrefix, "-").concat(i) : ""].filter(function(x) {
    return u.classes.indexOf(x) === -1;
  }).filter(function(x) {
    return x !== "" || !!x;
  }).concat(u.classes).join(" "), b = {
    children: [],
    attributes: k(k({}, u.attributes), {}, {
      "data-prefix": o,
      "data-icon": i,
      class: m,
      role: u.attributes.role || "img",
      viewBox: "0 0 ".concat(p, " ").concat(g)
    })
  };
  !sm(u.attributes) && !u.attributes["aria-hidden"] && (b.attributes["aria-hidden"] = "true"), f && (b.attributes[lt] = "");
  var y = k(k({}, b), {}, {
    prefix: o,
    iconName: i,
    main: r,
    mask: a,
    maskId: c,
    transform: s,
    symbol: l,
    styles: k({}, u.styles)
  }), v = a.found && r.found ? et("generateAbstractMask", y) || {
    children: [],
    attributes: {}
  } : et("generateAbstractIcon", y) || {
    children: [],
    attributes: {}
  }, _ = v.children, C = v.attributes;
  return y.children = _, y.attributes = C, l ? im(y) : om(y);
}
function Qi(e) {
  var t = e.content, r = e.width, a = e.height, o = e.transform, i = e.extra, s = e.watchable, l = s === void 0 ? !1 : s, c = k(k({}, i.attributes), {}, {
    class: i.classes.join(" ")
  });
  l && (c[lt] = "");
  var u = k({}, i.styles);
  Oa(o) && (u.transform = Op({
    transform: o,
    width: r,
    height: a
  }), u["-webkit-transform"] = u.transform);
  var d = Or(u);
  d.length > 0 && (c.style = d);
  var f = [];
  return f.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), f;
}
function lm(e) {
  var t = e.content, r = e.extra, a = k(k({}, r.attributes), {}, {
    class: r.classes.join(" ")
  }), o = Or(r.styles);
  o.length > 0 && (a.style = o);
  var i = [];
  return i.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), i;
}
var Dn = Re.styles;
function da(e) {
  var t = e[0], r = e[1], a = e.slice(4), o = zr(a, 1), i = o[0], s = null;
  return Array.isArray(i) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(T.cssPrefix, "-").concat(jn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(T.cssPrefix, "-").concat(jn.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(T.cssPrefix, "-").concat(jn.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: r,
    icon: s
  };
}
var cm = {
  found: !1,
  width: 512,
  height: 512
};
function um(e, t) {
  !lc && !T.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function fa(e, t) {
  var r = t;
  return t === "fa" && T.styleDefault !== null && (t = Qe()), new Promise(function(a, o) {
    if (r === "fa") {
      var i = Cc(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Dn[t] && Dn[t][e]) {
      var s = Dn[t][e];
      return a(da(s));
    }
    um(e, t), a(k(k({}, cm), {}, {
      icon: T.showMissingIcons && e ? et("missingIconAbstract") || {} : {}
    }));
  });
}
var es = function() {
}, ha = T.measurePerformance && cr && cr.mark && cr.measure ? cr : {
  mark: es,
  measure: es
}, Pt = 'FA "7.1.0"', dm = function(e) {
  return ha.mark("".concat(Pt, " ").concat(e, " begins")), function() {
    return Ec(e);
  };
}, Ec = function(e) {
  ha.mark("".concat(Pt, " ").concat(e, " ends")), ha.measure("".concat(Pt, " ").concat(e), "".concat(Pt, " ").concat(e, " begins"), "".concat(Pt, " ").concat(e, " ends"));
}, Ha = {
  begin: dm,
  end: Ec
}, vr = function() {
};
function ts(e) {
  var t = e.getAttribute ? e.getAttribute(lt) : null;
  return typeof t == "string";
}
function fm(e) {
  var t = e.getAttribute ? e.getAttribute(Ta) : null, r = e.getAttribute ? e.getAttribute(Ia) : null;
  return t && r;
}
function hm(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(T.replacementClass);
}
function pm() {
  if (T.autoReplaceSvg === !0)
    return br.replace;
  var e = br[T.autoReplaceSvg];
  return e || br.replace;
}
function mm(e) {
  return J.createElementNS("http://www.w3.org/2000/svg", e);
}
function gm(e) {
  return J.createElement(e);
}
function Ac(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.ceFn, a = r === void 0 ? e.tag === "svg" ? mm : gm : r;
  if (typeof e == "string")
    return J.createTextNode(e);
  var o = a(e.tag);
  Object.keys(e.attributes || []).forEach(function(s) {
    o.setAttribute(s, e.attributes[s]);
  });
  var i = e.children || [];
  return i.forEach(function(s) {
    o.appendChild(Ac(s, {
      ceFn: a
    }));
  }), o;
}
function vm(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var br = {
  replace: function(e) {
    var t = e[0];
    if (t.parentNode)
      if (e[1].forEach(function(a) {
        t.parentNode.insertBefore(Ac(a), t);
      }), t.getAttribute(lt) === null && T.keepOriginalSource) {
        var r = J.createComment(vm(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    var t = e[0], r = e[1];
    if (~za(t).indexOf(T.replacementClass))
      return br.replace(e);
    var a = new RegExp("".concat(T.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var o = r[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === T.replacementClass || l.match(a) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    var i = r.map(function(s) {
      return Qt(s);
    }).join(`
`);
    t.setAttribute(lt, ""), t.innerHTML = i;
  }
};
function rs(e) {
  e();
}
function Lc(e, t) {
  var r = typeof t == "function" ? t : vr;
  if (e.length === 0)
    r();
  else {
    var a = rs;
    T.mutateApproach === xp && (a = st.requestAnimationFrame || rs), a(function() {
      var o = pm(), i = Ha.begin("mutate");
      e.map(o), i(), r();
    });
  }
}
var Wa = !1;
function Nc() {
  Wa = !0;
}
function pa() {
  Wa = !1;
}
var Sr = null;
function ns(e) {
  if (Hi && T.observeMutations) {
    var t = e.treeCallback, r = t === void 0 ? vr : t, a = e.nodeCallback, o = a === void 0 ? vr : a, i = e.pseudoElementsCallback, s = i === void 0 ? vr : i, l = e.observeMutationsRoot, c = l === void 0 ? J : l;
    Sr = new Hi(function(u) {
      if (!Wa) {
        var d = Qe();
        Nt(u).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !ts(f.addedNodes[0]) && (T.searchPseudoElements && s(f.target), r(f.target)), f.type === "attributes" && f.target.parentNode && T.searchPseudoElements && s([f.target], !0), f.type === "attributes" && ts(f.target) && ~Sp.indexOf(f.attributeName))
            if (f.attributeName === "class" && fm(f.target)) {
              var h = Fr(za(f.target)), p = h.prefix, g = h.iconName;
              f.target.setAttribute(Ta, p || d), g && f.target.setAttribute(Ia, g);
            } else hm(f.target) && o(f.target);
        });
      }
    }), qe && Sr.observe(c, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function bm() {
  Sr && Sr.disconnect();
}
function ym(e) {
  var t = e.getAttribute("style"), r = [];
  return t && (r = t.split(";").reduce(function(a, o) {
    var i = o.split(":"), s = i[0], l = i.slice(1);
    return s && l.length > 0 && (a[s] = l.join(":").trim()), a;
  }, {})), r;
}
function xm(e) {
  var t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), a = e.innerText !== void 0 ? e.innerText.trim() : "", o = Fr(za(e));
  return o.prefix || (o.prefix = Qe()), t && r && (o.prefix = t, o.iconName = r), o.iconName && o.prefix || (o.prefix && a.length > 0 && (o.iconName = $p(o.prefix, e.innerText) || Fa(o.prefix, gc(e.innerText))), !o.iconName && T.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function wm(e) {
  var t = Nt(e.attributes).reduce(function(r, a) {
    return r.name !== "class" && r.name !== "style" && (r[a.name] = a.value), r;
  }, {});
  return t;
}
function _m() {
  return {
    iconName: null,
    prefix: null,
    transform: ze,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function as(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = xm(e), a = r.iconName, o = r.prefix, i = r.rest, s = wm(e), l = ca("parseNodeAttributes", {}, e), c = t.styleParser ? ym(e) : [];
  return k({
    iconName: a,
    prefix: o,
    transform: ze,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: c,
      attributes: s
    }
  }, l);
}
var km = Re.styles;
function Rc(e) {
  var t = T.autoReplaceSvg === "nest" ? as(e, {
    styleParser: !1
  }) : as(e);
  return ~t.extra.classes.indexOf(uc) ? et("generateLayersText", e, t) : et("generateSvgReplacementMutation", e, t);
}
function Cm() {
  return [].concat(Te(rc), Te(nc));
}
function os(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!qe) return Promise.resolve();
  var r = J.documentElement.classList, a = function(d) {
    return r.add("".concat($i, "-").concat(d));
  }, o = function(d) {
    return r.remove("".concat($i, "-").concat(d));
  }, i = T.autoFetchSvg ? Cm() : Fl.concat(Object.keys(km));
  i.includes("fa") || i.push("fa");
  var s = [".".concat(uc, ":not([").concat(lt, "])")].concat(i.map(function(d) {
    return ".".concat(d, ":not([").concat(lt, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var l = [];
  try {
    l = Nt(e.querySelectorAll(s));
  } catch {
  }
  if (l.length > 0)
    a("pending"), o("complete");
  else
    return Promise.resolve();
  var c = Ha.begin("onTree"), u = l.reduce(function(d, f) {
    try {
      var h = Rc(f);
      h && d.push(h);
    } catch (p) {
      lc || p.name === "MissingIcon" && console.error(p);
    }
    return d;
  }, []);
  return new Promise(function(d, f) {
    Promise.all(u).then(function(h) {
      Lc(h, function() {
        a("active"), a("complete"), o("pending"), typeof t == "function" && t(), c(), d();
      });
    }).catch(function(h) {
      c(), f(h);
    });
  });
}
function Mm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Rc(e).then(function(r) {
    r && Lc([r], t);
  });
}
function Sm(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = (t || {}).icon ? t : ua(t || {}), o = r.mask;
    return o && (o = (o || {}).icon ? o : ua(o || {})), e(a, k(k({}, r), {}, {
      mask: o
    }));
  };
}
var Em = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.transform, a = r === void 0 ? ze : r, o = t.symbol, i = o === void 0 ? !1 : o, s = t.mask, l = s === void 0 ? null : s, c = t.maskId, u = c === void 0 ? null : c, d = t.classes, f = d === void 0 ? [] : d, h = t.attributes, p = h === void 0 ? {} : h, g = t.styles, m = g === void 0 ? {} : g;
  if (e) {
    var b = e.prefix, y = e.iconName, v = e.icon;
    return Br(k({
      type: "icon"
    }, e), function() {
      return ct("beforeDOMElementCreation", {
        iconDefinition: e,
        params: t
      }), Da({
        icons: {
          main: da(v),
          mask: l ? da(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: b,
        iconName: y,
        transform: k(k({}, ze), a),
        symbol: i,
        maskId: u,
        extra: {
          attributes: p,
          styles: m,
          classes: f
        }
      });
    });
  }
}, Am = {
  mixout: function() {
    return {
      icon: Sm(Em)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(e) {
        return e.treeCallback = os, e.nodeCallback = Mm, e;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(t) {
      var r = t.node, a = r === void 0 ? J : r, o = t.callback, i = o === void 0 ? function() {
      } : o;
      return os(a, i);
    }, e.generateSvgReplacementMutation = function(t, r) {
      var a = r.iconName, o = r.prefix, i = r.transform, s = r.symbol, l = r.mask, c = r.maskId, u = r.extra;
      return new Promise(function(d, f) {
        Promise.all([fa(a, o), l.iconName ? fa(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(h) {
          var p = zr(h, 2), g = p[0], m = p[1];
          d([t, Da({
            icons: {
              main: g,
              mask: m
            },
            prefix: o,
            iconName: a,
            transform: i,
            symbol: s,
            maskId: c,
            extra: u,
            watchable: !0
          })]);
        }).catch(f);
      });
    }, e.generateAbstractIcon = function(t) {
      var r = t.children, a = t.attributes, o = t.main, i = t.transform, s = t.styles, l = Or(s);
      l.length > 0 && (a.style = l);
      var c;
      return Oa(i) && (c = et("generateAbstractTransformGrouping", {
        main: o,
        transform: i,
        containerWidth: o.width,
        iconWidth: o.width
      })), r.push(c || o.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, Lm = {
  mixout: function() {
    return {
      layer: function(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.classes, a = r === void 0 ? [] : r;
        return Br({
          type: "layer"
        }, function() {
          ct("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          var o = [];
          return e(function(i) {
            Array.isArray(i) ? i.map(function(s) {
              o = o.concat(s.abstract);
            }) : o = o.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(T.cssPrefix, "-layers")].concat(Te(a)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, Nm = {
  mixout: function() {
    return {
      counter: function(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.classes, a = r === void 0 ? [] : r, o = t.attributes, i = o === void 0 ? {} : o, s = t.styles, l = s === void 0 ? {} : s;
        return Br({
          type: "counter",
          content: e
        }, function() {
          return ct("beforeDOMElementCreation", {
            content: e,
            params: t
          }), lm({
            content: e.toString(),
            extra: {
              attributes: i,
              styles: l,
              classes: ["".concat(T.cssPrefix, "-layers-counter")].concat(Te(a))
            }
          });
        });
      }
    };
  }
}, Rm = {
  mixout: function() {
    return {
      text: function(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.transform, a = r === void 0 ? ze : r, o = t.classes, i = o === void 0 ? [] : o, s = t.attributes, l = s === void 0 ? {} : s, c = t.styles, u = c === void 0 ? {} : c;
        return Br({
          type: "text",
          content: e
        }, function() {
          return ct("beforeDOMElementCreation", {
            content: e,
            params: t
          }), Qi({
            content: e,
            transform: k(k({}, ze), a),
            extra: {
              attributes: l,
              styles: u,
              classes: ["".concat(T.cssPrefix, "-layers-text")].concat(Te(i))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(t, r) {
      var a = r.transform, o = r.extra, i = null, s = null;
      if (Ol) {
        var l = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        i = c.width / l, s = c.height / l;
      }
      return Promise.resolve([t, Qi({
        content: t.innerHTML,
        width: i,
        height: s,
        transform: a,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, Tc = new RegExp('"', "ug"), is = [1105920, 1112319], ss = k(k(k(k({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), hh), bp), _h), ma = Object.keys(ss).reduce(function(e, t) {
  return e[t.toLowerCase()] = ss[t], e;
}, {}), Tm = Object.keys(ma).reduce(function(e, t) {
  var r = ma[t];
  return e[t] = r[900] || Te(Object.entries(r))[0][1], e;
}, {});
function Im(e) {
  var t = e.replace(Tc, "");
  return gc(Te(t)[0] || "");
}
function Pm(e) {
  var t = e.getPropertyValue("font-feature-settings").includes("ss01"), r = e.getPropertyValue("content"), a = r.replace(Tc, ""), o = a.codePointAt(0), i = o >= is[0] && o <= is[1], s = a.length === 2 ? a[0] === a[1] : !1;
  return i || s || t;
}
function zm(e, t) {
  var r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(t), o = isNaN(a) ? "normal" : a;
  return (ma[r] || {})[o] || Tm[r];
}
function ls(e, t) {
  var r = "".concat(yp).concat(t.replace(":", "-"));
  return new Promise(function(a, o) {
    if (e.getAttribute(r) !== null)
      return a();
    var i = Nt(e.children), s = i.filter(function(w) {
      return w.getAttribute(aa) === t;
    })[0], l = st.getComputedStyle(e, t), c = l.getPropertyValue("font-family"), u = c.match(Cp), d = l.getPropertyValue("font-weight"), f = l.getPropertyValue("content");
    if (s && !u)
      return e.removeChild(s), a();
    if (u && f !== "none" && f !== "") {
      var h = l.getPropertyValue("content"), p = zm(c, d), g = Im(h), m = u[0].startsWith("FontAwesome"), b = Pm(l), y = Fa(p, g), v = y;
      if (m) {
        var _ = Vp(g);
        _.iconName && _.prefix && (y = _.iconName, p = _.prefix);
      }
      if (y && !b && (!s || s.getAttribute(Ta) !== p || s.getAttribute(Ia) !== v)) {
        e.setAttribute(r, v), s && e.removeChild(s);
        var C = _m(), x = C.extra;
        x.attributes[aa] = t, fa(y, p).then(function(w) {
          var M = Da(k(k({}, C), {}, {
            icons: {
              main: w,
              mask: Mc()
            },
            prefix: p,
            iconName: v,
            extra: x,
            watchable: !0
          })), E = J.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(E, e.firstChild) : e.appendChild(E), E.outerHTML = M.map(function(S) {
            return Qt(S);
          }).join(`
`), e.removeAttribute(r), a();
        }).catch(o);
      } else
        a();
    } else
      a();
  });
}
function Om(e) {
  return Promise.all([ls(e, "::before"), ls(e, "::after")]);
}
function jm(e) {
  return e.parentNode !== document.head && !~wp.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(aa) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
var Fm = function(e) {
  return !!e && sc.some(function(t) {
    return e.includes(t);
  });
}, Bm = function(e) {
  if (!e) return [];
  var t = /* @__PURE__ */ new Set(), r = e.split(/,(?![^()]*\))/).map(function(l) {
    return l.trim();
  });
  r = r.flatMap(function(l) {
    return l.includes("(") ? l : l.split(",").map(function(c) {
      return c.trim();
    });
  });
  var a = gr(r), o;
  try {
    for (a.s(); !(o = a.n()).done; ) {
      var i = o.value;
      if (Fm(i)) {
        var s = sc.reduce(function(l, c) {
          return l.replace(c, "");
        }, i);
        s !== "" && s !== "*" && t.add(s);
      }
    }
  } catch (l) {
    a.e(l);
  } finally {
    a.f();
  }
  return t;
};
function cs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (qe) {
    var r;
    if (t)
      r = e;
    else if (T.searchPseudoElementsFullScan)
      r = e.querySelectorAll("*");
    else {
      var a = /* @__PURE__ */ new Set(), o = gr(document.styleSheets), i;
      try {
        for (o.s(); !(i = o.n()).done; ) {
          var s = i.value;
          try {
            var l = gr(s.cssRules), c;
            try {
              for (l.s(); !(c = l.n()).done; ) {
                var u = c.value, d = Bm(u.selectorText), f = gr(d), h;
                try {
                  for (f.s(); !(h = f.n()).done; ) {
                    var p = h.value;
                    a.add(p);
                  }
                } catch (m) {
                  f.e(m);
                } finally {
                  f.f();
                }
              }
            } catch (m) {
              l.e(m);
            } finally {
              l.f();
            }
          } catch (m) {
            T.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href, " (").concat(m.message, `)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`));
          }
        }
      } catch (m) {
        o.e(m);
      } finally {
        o.f();
      }
      if (!a.size) return;
      var g = Array.from(a).join(", ");
      try {
        r = e.querySelectorAll(g);
      } catch {
      }
    }
    return new Promise(function(m, b) {
      var y = Nt(r).filter(jm).map(Om), v = Ha.begin("searchPseudoElements");
      Nc(), Promise.all(y).then(function() {
        v(), pa(), m();
      }).catch(function() {
        v(), pa(), b();
      });
    });
  }
}
var Dm = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(e) {
        return e.pseudoElementsCallback = cs, e;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(t) {
      var r = t.node, a = r === void 0 ? J : r;
      T.searchPseudoElements && cs(a);
    };
  }
}, us = !1, Hm = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Nc(), us = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        ns(ca("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        bm();
      },
      watch: function(e) {
        var t = e.observeMutationsRoot;
        us ? pa() : ns(ca("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
}, ds = function(e) {
  var t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce(function(r, a) {
    var o = a.toLowerCase().split("-"), i = o[0], s = o.slice(1).join("-");
    if (i && s === "h")
      return r.flipX = !0, r;
    if (i && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (i) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, t);
}, Wm = {
  mixout: function() {
    return {
      parse: {
        transform: function(e) {
          return ds(e);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(e, t) {
        var r = t.getAttribute("data-fa-transform");
        return r && (e.transform = ds(r)), e;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(t) {
      var r = t.main, a = t.transform, o = t.containerWidth, i = t.iconWidth, s = {
        transform: "translate(".concat(o / 2, " 256)")
      }, l = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), c = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), u = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(c, " ").concat(u)
      }, f = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, h = {
        outer: s,
        inner: d,
        path: f
      };
      return {
        tag: "g",
        attributes: k({}, h.outer),
        children: [{
          tag: "g",
          attributes: k({}, h.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: k(k({}, r.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
}, Hn = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function fs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function qm(e) {
  return e.tag === "g" ? e.children : [e];
}
var $m = {
  hooks: function() {
    return {
      parseNodeAttributes: function(e, t) {
        var r = t.getAttribute("data-fa-mask"), a = r ? Fr(r.split(" ").map(function(o) {
          return o.trim();
        })) : Mc();
        return a.prefix || (a.prefix = Qe()), e.mask = a, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(t) {
      var r = t.children, a = t.attributes, o = t.main, i = t.mask, s = t.maskId, l = t.transform, c = o.width, u = o.icon, d = i.width, f = i.icon, h = zp({
        transform: l,
        containerWidth: d,
        iconWidth: c
      }), p = {
        tag: "rect",
        attributes: k(k({}, Hn), {}, {
          fill: "white"
        })
      }, g = u.children ? {
        children: u.children.map(fs)
      } : {}, m = {
        tag: "g",
        attributes: k({}, h.inner),
        children: [fs(k({
          tag: u.tag,
          attributes: k(k({}, u.attributes), h.path)
        }, g))]
      }, b = {
        tag: "g",
        attributes: k({}, h.outer),
        children: [m]
      }, y = "mask-".concat(s || Gi()), v = "clip-".concat(s || Gi()), _ = {
        tag: "mask",
        attributes: k(k({}, Hn), {}, {
          id: y,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, b]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: v
          },
          children: qm(f)
        }, _]
      };
      return r.push(C, {
        tag: "rect",
        attributes: k({
          fill: "currentColor",
          "clip-path": "url(#".concat(v, ")"),
          mask: "url(#".concat(y, ")")
        }, Hn)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, Vm = {
  provides: function(e) {
    var t = !1;
    st.matchMedia && (t = st.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: k(k({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var i = k(k({}, o), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: k(k({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: k(k({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: k(k({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: k(k({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: k(k({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: k(k({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: k(k({}, i), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, Gm = {
  hooks: function() {
    return {
      parseNodeAttributes: function(e, t) {
        var r = t.getAttribute("data-fa-symbol"), a = r === null ? !1 : r === "" ? !0 : r;
        return e.symbol = a, e;
      }
    };
  }
}, Um = [Fp, Am, Lm, Nm, Rm, Dm, Hm, Wm, $m, Vm, Gm];
em(Um, {
  mixoutsTo: Ba
});
var Ym = Ba.icon;
var Xm = {
  prefix: "fas",
  iconName: "sliders",
  icon: [512, 512, ["sliders-h"], "f1de", "M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z"]
}, Wn, hs;
function Km() {
  if (hs) return Wn;
  hs = 1;
  var e = /* @__PURE__ */ Ll(), t = /* @__PURE__ */ Nl(), r = /* @__PURE__ */ Fs(), a = /* @__PURE__ */ El(), o = /* @__PURE__ */ Os(), i = /* @__PURE__ */ js();
  return Wn = {
    diff: e,
    patch: t,
    h: r,
    create: a,
    VNode: o,
    VText: i
  }, Wn;
}
var oe = /* @__PURE__ */ Km();
const Jm = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-down-icon lucide-book-down"><path d="M12 13V7"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 10 3 3 3-3"/></svg>', Zm = Ym(Xm).html.join(""), rt = 6, Qm = 8;
let _t = null;
function e1() {
  _t = null;
  const e = document.activeElement;
  if (!(!e || e === document.body || e.tagName.toLowerCase() === "harper-render-box")) {
    if (e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement) {
      const t = e.selectionStart, r = e.selectionEnd, a = e.selectionDirection ?? void 0;
      _t = t != null ? () => {
        e.focus({ preventScroll: !0 }), e.setSelectionRange(t, r, a);
      } : () => e.focus({ preventScroll: !0 });
    } else if (e instanceof HTMLElement) {
      const t = window.getSelection(), r = t && t.rangeCount > 0 ? t.getRangeAt(0).cloneRange() : null;
      _t = () => {
        if (e.focus({ preventScroll: !0 }), r) {
          const a = window.getSelection();
          a && (a.removeAllRanges(), a.addRange(r));
        }
      };
    }
  }
}
function t1() {
  const e = _t;
  _t = null, e && setTimeout(() => {
    try {
      e();
    } catch {
    }
  }, 0);
}
function dr(e, t, r) {
  return Math.max(t, Math.min(e, Math.max(t, r)));
}
function r1(e, t, r, a) {
  const o = Qm, i = r.width + rt + a.width + o * 2 > t.width, s = i ? r.height + rt + a.height : r.height, l = e.y + e.height + 3, c = l + s + o > t.height, u = dr(
    c ? e.y - s - 3 : l,
    o,
    t.height - s - o
  );
  let d = dr(e.x, o, t.width - r.width - o);
  const f = d + r.width + rt + a.width + o > t.width;
  f && !i && (d = dr(d, o + a.width + rt, t.width - r.width - o));
  const h = i ? 0 : f ? -a.width - rt : r.width + rt, p = i ? u + r.height + rt : dr(u, o, t.height - a.height - o);
  return { top: u, left: d, flyoutLeft: h, flyoutTop: p - u, flipped: c, opensLeft: f };
}
function n1(e) {
  let t, r;
  return /* @__PURE__ */ Object.create({
    hook(a) {
      a.isConnected ? t = e(a) : r = requestAnimationFrame(() => {
        a.isConnected && (t = e(a));
      });
    },
    unhook() {
      cancelAnimationFrame(r), t?.();
    }
  });
}
function a1(e, t) {
  return n1((r) => {
    const a = r.querySelector(".harper-container"), o = r.querySelector(".harper-flyout"), i = () => {
      if (!r.isConnected) return;
      const u = r1(
        e.box,
        { width: window.innerWidth, height: window.innerHeight },
        { width: a.offsetWidth, height: a.offsetHeight },
        { width: o.offsetWidth, height: o.offsetHeight }
      );
      r.style.top = `${u.top}px`, r.style.left = `${u.left}px`, o.style.left = `${u.flyoutLeft}px`, o.style.top = `${u.flyoutTop}px`, r.style.transformOrigin = `${u.flipped ? "bottom" : "top"} ${u.opensLeft ? "right" : "left"}`, r.style.visibility = "visible";
    }, s = requestAnimationFrame(() => {
      r.isConnected && (i(), r.dataset.autofocused || (e1(), r.dataset.autofocused = "true", ga(r, e.selectedIndex)), i());
    }), l = (u) => {
      u.key === "Escape" && (u.preventDefault(), t());
    }, c = new ResizeObserver(i);
    return c.observe(a), c.observe(o), window.addEventListener("resize", i), window.addEventListener("keydown", l), () => {
      cancelAnimationFrame(s), c.disconnect(), window.removeEventListener("resize", i), window.removeEventListener("keydown", l);
    };
  });
}
function ga(e, t) {
  const r = e.querySelector(`#harper-suggestion-${t}`);
  r?.focus({ preventScroll: !0 }), r?.scrollIntoView({ block: "nearest", inline: "nearest" });
}
function o1(e) {
  switch (e) {
    case me.Replace:
      return "Replace";
    case me.Remove:
      return "Remove";
    case me.InsertAfter:
      return "Insert After";
  }
}
function i1(e) {
  return e.replacement_text || o1(e.kind);
}
function s1(e, t) {
  switch (e.kind) {
    case me.Replace:
      return `Click to replace "${t}" with "${e.replacement_text}"`;
    case me.Remove:
      return `Click to remove "${t}"`;
    case me.InsertAfter:
      return `Click to insert "${e.replacement_text}" after "${t}"`;
  }
}
function zt(e, t, r = {}) {
  return oe.h(
    "button",
    {
      type: "button",
      className: "harper-btn",
      onclick: t,
      onmousedown: (a) => a.preventDefault(),
      ...r
    },
    e
  );
}
function l1(e) {
  if (e)
    return oe.h(
      "div",
      { className: "harper-hint-drawer", attributes: { role: "note", "aria-live": "polite" } },
      [
        oe.h("div", { className: "harper-hint-content" }, [
          oe.h("div", { className: "harper-hint-icon", attributes: { "aria-hidden": "true" } }, "💡"),
          oe.h("div", {}, [oe.h("div", { className: "harper-hint-title" }, "Tip"), oe.h("div", {}, e)])
        ])
      ]
    );
}
function c1(e, t, r, a) {
  const { box: o } = r, i = t === r.selectedIndex, s = e ? i1(e) : "No replacements", l = e ? o.lint.suggestions.slice(0, t).filter(
    (c) => c.kind === e.kind && c.replacement_text === e.replacement_text
  ).length : 0;
  return oe.h(
    "button",
    {
      key: JSON.stringify([e?.kind, e?.replacement_text, l]),
      id: `harper-suggestion-${t}`,
      type: "button",
      className: `harper-row${i ? " harper-selected" : ""}`,
      tabIndex: i ? 0 : -1,
      attributes: {
        role: "menuitem",
        "aria-controls": "harper-flyout",
        "aria-expanded": String(i)
      },
      title: e ? s1(e, o.lint.problem_text) : `No replacements for "${o.lint.problem_text}"`,
      onmouseenter: () => r.onSelect(t),
      onfocus: () => r.onSelect(t),
      onclick: a
    },
    [
      oe.h(
        "span",
        {
          className: "harper-swatch",
          style: { background: xt(o.lint.lint_kind) },
          attributes: { "aria-hidden": "true" }
        },
        []
      ),
      oe.h("span", { className: "harper-row-label" }, s),
      oe.h("span", { className: "harper-chevron", attributes: { "aria-hidden": "true" } }, "›")
    ]
  );
}
function u1(e, t, r) {
  const a = e.lint, o = xt(a.lint_kind), i = e.ignoreLint, s = [
    oe.h(
      "div",
      { id: "harper-kind", className: "harper-kind", style: { borderBottomColor: o } },
      a.lint_kind_pretty
    ),
    oe.h("div", { className: "harper-body", innerHTML: a.message_html }, []),
    oe.h("div", { className: "harper-actions" }, [
      ...i ? [
        zt("Dismiss", () => r(i), {
          className: "harper-btn harper-dismiss",
          title: "Ignore this lint"
        })
      ] : [],
      ...a.lint_kind === "Spelling" && t.addToUserDictionary ? [
        zt("", () => r(() => t.addToUserDictionary([a.problem_text])), {
          title: "Add word to user dictionary",
          attributes: { "aria-label": "Add word to user dictionary" },
          innerHTML: Jm
        })
      ] : []
    ])
  ];
  return t.setRuleEnabled && e.rule && s.push(
    zt(
      `Disable rule ${e.rule}`,
      () => r(() => t.setRuleEnabled(e.rule, !1)),
      {
        className: "harper-disable",
        title: `Disable the ${e.rule} rule`
      }
    )
  ), t.reportError && s.push(
    zt(
      "Report",
      () => {
        t.reportError(a, e.rule);
      },
      {
        className: "harper-report-link",
        title: "Report an issue with this lint"
      }
    )
  ), oe.h(
    "div",
    {
      id: "harper-flyout",
      className: "harper-flyout",
      attributes: { role: "group", "aria-labelledby": "harper-kind" }
    },
    s
  );
}
function d1(e, t) {
  const r = [];
  return e.actions.openOptions && r.push(
    oe.h(
      "button",
      {
        type: "button",
        className: "harper-footer-row",
        title: "Click to go to Harper settings",
        onclick: () => {
          e.actions.openOptions();
        }
      },
      [
        oe.h(
          "span",
          {
            className: "harper-settings-icon",
            innerHTML: Zm,
            attributes: { "aria-hidden": "true" }
          },
          []
        ),
        "Go to Harper settings"
      ]
    )
  ), r.push(
    zt("×", t, {
      className: "harper-close-btn",
      title: "Close",
      attributes: { "aria-label": "Close" }
    })
  ), oe.h("div", { className: "harper-list-footer" }, r);
}
function f1(e) {
  return oe.h(
    "style",
    { id: "harper-suggestion-style" },
    `
.harper-popup, .harper-popup * { box-sizing:border-box; }
.harper-popup {
 position:fixed; z-index:5000; visibility:hidden; pointer-events:none;
 font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
 font-size:13px; line-height:20px; text-align:left; color:#1f2328;
}
.harper-popup button { font-family:inherit; cursor:pointer; }
.harper-container, .harper-flyout {
 background:#ffffff; border:1px solid #d0d7de; border-radius:8px;
 box-shadow:0 4px 12px rgba(140,149,159,0.3); pointer-events:auto;
 max-height:min(400px, calc(100vh - 16px)); overflow-y:auto; overscroll-behavior:contain;
}
.harper-container { position:relative; width:min(210px, calc(100vw - 16px)); padding:4px 0; }
.harper-flyout { position:absolute; width:min(190px, calc(100vw - 16px)); overflow-x:hidden; }
.harper-row {
 display:flex; align-items:center; gap:8px; height:30px; width:100%;
 padding:0 8px 0 10px; border:0; background:transparent; text-align:left;
 transition:background 120ms ease;
}
.harper-selected, .harper-footer-row:hover, .harper-disable:hover { background:rgba(0,0,0,0.045); }
.harper-swatch { width:3px; height:16px; border-radius:2px; flex:0 0 auto; }
.harper-row-label { font-size:13px; font-weight:600; color:#1f2328; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.harper-chevron { margin-left:auto; font-size:12px; color:#8b949e; }
.harper-kind { padding:6px 10px; font-size:12px; font-weight:600; border-bottom:2px solid; }
.harper-body { padding:8px 10px; font-size:12px; line-height:17px; color:#57606a; overflow-wrap:anywhere; }
.harper-body p { margin:0; }
.harper-body p + p { margin-top:8px; }
.harper-body code { text-decoration:underline solid ${xt(e)} 2px; padding:0.125rem; border-radius:0.25rem; }
.harper-actions { display:flex; flex-wrap:wrap; gap:6px; padding:0 10px 8px; }
.harper-btn {
 display:inline-flex; align-items:center; justify-content:center; gap:4px;
 border:none; border-radius:6px; padding:3px 8px; min-height:24px;
 font-size:12px; font-weight:600; line-height:18px; overflow-wrap:anywhere; max-width:100%;
 transition:background 120ms ease,transform 80ms ease;
}
.harper-btn svg { width:18px; height:18px; }
.harper-btn:hover { filter:brightness(0.92); }
.harper-btn:active { transform:scale(0.97); }
.harper-dismiss { background:#e5e5e5; color:#000000; font-weight:400; }
.harper-disable {
 display:block; width:100%; border:0; border-top:1px solid #eaeef2;
 background:transparent; padding:6px 10px; font-size:11px; color:#8b949e; text-align:left; overflow-wrap:anywhere;
}
.harper-disable:hover { color:#57606a; }
.harper-list-footer { position:relative; border-top:1px solid #eaeef2; margin-top:4px; padding:4px 26px 0 0; min-height:32px; }
.harper-footer-row { display:flex; align-items:center; gap:6px; width:100%; border:0; background:transparent; height:28px; padding:0 10px; font-size:12px; color:#57606a; text-align:left; }
.harper-close-btn { position:absolute; right:4px; top:6px; border:0; background:transparent; color:#57606a; padding:0 4px; font-size:20px; line-height:20px; }
.harper-close-btn:hover { color:#1f2328; }
.harper-settings-icon, .harper-settings-icon svg { display:block; width:14px; height:14px; }
.harper-report-link { display:block; margin:8px 10px; background:none; border:none; padding:0; color:#0969da; font-size:13px; font-weight:600; }
.harper-report-link:hover { text-decoration:underline; }
.harper-popup button:focus-visible { outline:2px solid #0969da; outline-offset:-2px; }
.harper-hint-drawer { margin-top:6px; border-top:1px solid #eaeef2; background:#f6f8fa; color:#3e4c59; border-radius:0 0 6px 6px; }
.harper-hint-content { display:flex; gap:8px; align-items:flex-start; padding:8px 10px; font-size:13px; line-height:18px; }
.harper-hint-icon { flex:0 0 auto; width:18px; height:18px; border-radius:50%; background:#fff3c4; color:#7c5e10; display:flex; align-items:center; justify-content:center; font-weight:700; }
.harper-hint-title { font-weight:600; margin-right:6px; color:#1f2328; }
.fade-in { animation:fadeIn 100ms ease-in-out; }
@keyframes fadeIn { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }
@media (max-width:421px) {
 .harper-container, .harper-flyout { max-height:min(400px, calc((100vh - 22px) / 2)); }
}
@media (prefers-reduced-motion:reduce) {
 .fade-in { animation:none; }
 .harper-row, .harper-btn { transition:none; }
 .harper-btn:active { transform:none; }
}
@media (prefers-color-scheme:dark) {
 .harper-popup, .harper-row-label, .harper-hint-title { color:#e6edf3; }
 .harper-container, .harper-flyout { background:#0d1117; border-color:#30363d; box-shadow:0 4px 12px rgba(1,4,9,0.85); }
 .harper-body, .harper-footer-row, .harper-close-btn { color:#8b949e; }
 .harper-body code { background:#1f2d3d; color:#c9d1d9; }
 .harper-selected, .harper-footer-row:hover, .harper-disable:hover { background:rgba(255,255,255,0.06); }
 .harper-disable:hover, .harper-close-btn:hover { color:#e6edf3; }
 .harper-btn { background:#21262d; color:#c9d1d9; }
 .harper-btn:hover { filter:brightness(1.15); }
 .harper-dismiss { background:#4b4b4b; color:#ffffff; }
 .harper-disable, .harper-list-footer, .harper-hint-drawer { border-top-color:#30363d; }
 .harper-hint-drawer { background:#151b23; color:#9aa4af; }
 .harper-hint-icon { background:#3a2f0b; color:#f2cc60; }
 .harper-report-link { color:#58a6ff; }
 .harper-popup button:focus-visible { outline-color:#58a6ff; }
}
`
  );
}
function h1(e) {
  const { box: t, selectedIndex: r, actions: a, close: o } = e, i = t.lint.suggestions.length ? t.lint.suggestions : [void 0], s = i[r], l = () => {
    t1(), o();
  }, c = (p) => {
    Promise.resolve().then(p).catch(console.error).finally(l);
  }, u = (p) => {
    p && (_t = null, Promise.resolve().then(() => t.applySuggestion(p)).catch(console.error).finally(o));
  }, d = (p) => {
    var g;
    const m = p.target, b = p.currentTarget, y = m.closest(".harper-row") != null;
    if (p.key === "ArrowLeft" && m.closest(".harper-flyout"))
      p.preventDefault(), p.stopPropagation(), ga(b, r);
    else if (y && ["ArrowDown", "ArrowUp", "ArrowRight", "Enter"].includes(p.key))
      if (p.preventDefault(), p.stopPropagation(), p.key === "Enter") u(s);
      else if (p.key === "ArrowRight")
        (g = b.querySelector(".harper-flyout button")) == null || g.focus({ preventScroll: !0 });
      else {
        const v = (r + (p.key === "ArrowDown" ? 1 : -1) + i.length) % i.length;
        e.onSelect(v), ga(b, v);
      }
  }, f = i.map(
    (p, g) => c1(p, g, e, () => u(p))
  ), h = l1(e.hint);
  return oe.h(
    "div",
    {
      key: "harper-suggestion-popup",
      className: "harper-popup fade-in",
      onkeydown: d,
      "harper-popup-hook": a1(e, l)
    },
    [
      f1(t.lint.lint_kind),
      oe.h("div", { className: "harper-container" }, [
        oe.h(
          "div",
          {
            attributes: {
              role: "menu",
              "aria-label": "Suggestions for this lint",
              "aria-activedescendant": `harper-suggestion-${r}`
            }
          },
          f
        ),
        d1(e, l),
        ...h ? [h] : []
      ]),
      u1(t, a, c)
    ]
  );
}
function p1(e, t, r = 300) {
  let a = 0;
  const o = (i) => {
    if (i.key.toLowerCase() !== t.toLowerCase()) return;
    const s = performance.now(), l = s - a;
    l <= r && l > 10 && e(), a = s;
  };
  return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
}
class m1 {
  constructor(t) {
    W(this, "currentLintBoxes"), W(this, "popupLint"), W(this, "selectedSuggestion", 0), W(this, "currentHint"), W(this, "currentHintFor"), W(this, "renderBox"), W(this, "pointerDownCallback"), W(this, "activationKeyListener"), W(this, "actions"), W(this, "close", () => {
      this.popupLint = void 0, this.selectedSuggestion = 0, this.render();
    }), W(this, "onOutsidePointerDown", (r) => {
      const a = r.composedPath();
      a.includes(this.renderBox.getShadowHost()) || this.currentLintBoxes.some((o) => a.includes(o.source)) || this.close();
    }), this.actions = t, this.currentLintBoxes = [], this.currentHint = void 0, this.currentHintFor = void 0, this.renderBox = new Rl(() => Ss(document.body)), this.renderBox.getShadowHost().popover = "manual", this.renderBox.getShadowHost().style.pointerEvents = "none", this.renderBox.getShadowHost().style.border = "none", this.pointerDownCallback = (r) => {
      this.onPointerDown(r);
    }, this.updateActivationKeyListener();
  }
  updateActivationKeyListener() {
    this.activationKeyListener && (this.activationKeyListener(), this.activationKeyListener = void 0);
    const t = this.actions.getActivationKey;
    t && t().then((r) => {
      r !== "off" && (this.activationKeyListener = p1(() => this.openClosestToCaret(), r));
    });
  }
  /** Open and render the row nearest the editor caret immediately on activation. */
  openClosestToCaret() {
    const t = this.renderBox.getShadowHost(), r = document.activeElement === t, a = r ? null : Is(), o = a ? Cs(a, this.currentLintBoxes) : r ? this.popupLint : void 0;
    o == null || o < 0 || (this.popupLint = o, this.selectedSuggestion = 0, this.render(), r && this.focusSelectedSuggestion());
  }
  /** Focus the active replacement without replacing the renderer's saved editor selection. */
  focusSelectedSuggestion() {
    var t;
    const r = (t = this.renderBox.getShadowHost().shadowRoot) == null ? void 0 : t.querySelector(".harper-selected");
    r?.focus({ preventScroll: !0 }), r?.scrollIntoView({ block: "nearest" });
  }
  onPointerDown(t) {
    for (let r = 0; r < this.currentLintBoxes.length; r++) {
      const a = this.currentLintBoxes[r];
      if (t.composedPath().includes(a.source) && at([t.x, t.y], a)) {
        this.popupLint != null && this.close(), this.popupLint = r, this.selectedSuggestion = 0, this.render();
        return;
      }
    }
    this.close();
  }
  render() {
    let t = pr("div", {}, []);
    const r = this.renderBox.getShadowHost();
    if (this.updateHint(), this.popupLint != null && this.popupLint < this.currentLintBoxes.length) {
      const a = this.currentLintBoxes[this.popupLint];
      t = h1({
        box: a,
        selectedIndex: this.selectedSuggestion,
        onSelect: (o) => {
          o !== this.selectedSuggestion && (this.selectedSuggestion = o, this.render());
        },
        actions: this.actions,
        hint: this.currentHint ?? null,
        close: this.close
      });
    }
    this.renderBox.render(t), this.popupLint != null && this.popupLint < this.currentLintBoxes.length ? (document.addEventListener("pointerdown", this.onOutsidePointerDown, !0), r.style.setProperty("visibility", "visible", "important"), r.isConnected && !r.matches(":popover-open") && r.showPopover()) : (document.removeEventListener("pointerdown", this.onOutsidePointerDown, !0), r.style.setProperty("visibility", "hidden", "important"), r.isConnected && r.matches(":popover-open") && r.hidePopover());
  }
  /** Synchronize the hint with the currently focused lint.
   * - If no lint is open, clear the hint state.
   * - If a different lint opens, or the hint is uninitialized, decide once (~10%).
   */
  updateHint() {
    if (this.popupLint == null) {
      this.currentHint = void 0, this.currentHintFor = void 0;
      return;
    }
    if (this.currentHintFor !== this.popupLint || this.currentHint === void 0) {
      const t = Array.isArray(Oi) ? Oi.filter((a) => typeof a == "string") : [], r = Math.random() < 0.1 && t.length > 0;
      this.currentHint = r ? t[Math.floor(Math.random() * t.length)] : null, this.currentHintFor = this.popupLint;
    }
  }
  /** Preserve logical selection through geometry updates, but never retarget stale row indices. */
  updateLintBoxes(t) {
    var r;
    const a = this.renderBox.getShadowHost(), o = document.activeElement === a;
    this.currentLintBoxes.forEach((c) => {
      c.source.removeEventListener("pointerdown", this.pointerDownCallback);
    });
    const i = this.popupLint == null ? void 0 : this.currentLintBoxes[this.popupLint], s = i?.lint.suggestions[this.selectedSuggestion];
    if (i) {
      const c = this.currentLintBoxes.slice(0, this.popupLint).filter(
        (d) => d.lint.context_hash === i.lint.context_hash && d.source === i.source && d.lint.span.start === i.lint.span.start && d.lint.span.end === i.lint.span.end
      ).length, u = t.flatMap(
        (d, f) => d.lint.context_hash === i.lint.context_hash && d.source === i.source && d.lint.span.start === i.lint.span.start && d.lint.span.end === i.lint.span.end && d.lint.source === i.lint.source ? [f] : []
      );
      this.popupLint = u[Math.min(c, u.length - 1)];
    }
    const l = this.popupLint == null ? void 0 : t[this.popupLint];
    this.selectedSuggestion = l && s ? Math.max(
      0,
      l.lint.suggestions.findIndex(
        (c) => c.kind === s.kind && c.replacement_text === s.replacement_text
      )
    ) : 0, this.popupLint != null && (this.currentHintFor = this.popupLint), this.currentLintBoxes = t, this.currentLintBoxes.forEach((c) => {
      c.source.addEventListener("pointerdown", this.pointerDownCallback);
    }), this.render(), o && this.popupLint != null && !((r = a.shadowRoot) != null && r.activeElement) && this.focusSelectedSuggestion();
  }
}
function g1(e, t) {
  if (e === t)
    return null;
  let r = 0;
  const a = Math.min(e.length, t.length);
  for (; r < a && e[r] === t[r]; )
    r++;
  let o = 0;
  for (; o < e.length - r && o < t.length - r && e[e.length - 1 - o] === t[t.length - 1 - o]; )
    o++;
  const i = r, s = e.length - o, l = r, c = t.length - o;
  return {
    oldStart: i,
    oldEnd: s,
    newStart: l,
    newEnd: c,
    delta: c - l - (s - i)
  };
}
function v1(e, t) {
  return t == null ? { ...e } : e.end <= t.oldStart ? { ...e } : e.start >= t.oldEnd ? {
    start: e.start + t.delta,
    end: e.end + t.delta
  } : null;
}
function b1(e, t) {
  if (e.source === t)
    return e;
  const r = v1(e.span, g1(e.source, t));
  return r == null || t.slice(r.start, r.end) !== e.problem_text ? null : {
    ...e,
    span: r,
    source: t
  };
}
const ps = ["focus", "keyup", "keydown", "paste", "change", "scroll", "input"], y1 = [
  "resize",
  "scroll",
  "keyup",
  "keydown",
  "input",
  "compositionend",
  "selectionchange"
];
class x1 {
  constructor(t, r) {
    W(this, "highlights"), W(this, "popupHandler"), W(this, "targets"), W(this, "scrollableAncestors"), W(this, "lintRequest", null), W(this, "renderRequested", !1), W(this, "lintDelayTimer", null), W(this, "lastInputAt", 0), W(this, "lastLints", []), W(this, "lastBoxes", []), W(this, "lastLintBoxes", []), W(this, "updateEventCallback"), W(this, "lintProvider"), W(this, "actions"), this.lintProvider = t, this.actions = r, this.highlights = new N0(), this.popupHandler = new m1({
      getActivationKey: r.getActivationKey,
      openOptions: r.openOptions,
      addToUserDictionary: r.addToUserDictionary,
      reportError: r.reportError,
      setRuleEnabled: r.setRuleEnabled
    }), this.targets = /* @__PURE__ */ new Set(), this.scrollableAncestors = /* @__PURE__ */ new Set(), this.lastLints = [], this.updateEventCallback = () => {
      this.lastInputAt = Date.now(), this.update();
    };
    const a = () => {
      this.update(), setTimeout(a, 1e3);
    };
    a(), this.attachWindowListeners();
  }
  /** Returns the currents targets that are visible on-screen. */
  onScreenTargets() {
    const t = [];
    for (const r of this.targets)
      Mu(r) && t.push(r);
    return t;
  }
  async update() {
    this.requestRender(), this.requestLintUpdate();
  }
  async requestLintUpdate(t = !1) {
    var r, a;
    const o = await ((a = (r = this.actions).getDelay) == null ? void 0 : a.call(r)) ?? 0, i = o - (Date.now() - this.lastInputAt);
    if (!t && o > 0 && i > 0) {
      this.lintDelayTimer != null && window.clearTimeout(this.lintDelayTimer), this.lintDelayTimer = window.setTimeout(() => {
        this.lintDelayTimer = null, this.requestLintUpdate();
      }, i);
      return;
    }
    if (this.lintDelayTimer != null && (window.clearTimeout(this.lintDelayTimer), this.lintDelayTimer = null), this.lintRequest != null) {
      if (!t)
        return;
      try {
        await this.lintRequest;
      } catch {
      }
      await this.requestLintUpdate(!0);
      return;
    }
    if (this.targets.size !== 0) {
      const s = Promise.all(
        this.onScreenTargets().map(async (c) => {
          if (!document.contains(c))
            return this.targets.delete(c), { target: null, lints: {} };
          const { text: u, isCM: d, newLineIndices: f } = this.getTargetText(c);
          if (!u || u.length > 12e4)
            return { target: null, lints: {} };
          const h = _1(c);
          let p = await this.lintProvider(u, window.location.hostname, {
            forceAllHeadings: Cu(c),
            language: h
          });
          if (d) {
            p = window.structuredClone(p);
            for (const g of Object.values(p))
              for (const m of g) {
                const b = f.findIndex((v) => v > m.span.start), y = f.findIndex((v) => v > m.span.end);
                m.span.start -= b, m.span.end -= y;
              }
          }
          return { target: c, lints: p };
        })
      );
      this.lintRequest = s;
      const l = await s.finally(() => {
        this.lintRequest === s && (this.lintRequest = null);
      });
      this.lastLints = l.filter((c) => c.target != null), this.requestRender();
    }
  }
  /**
   * Hotkey to apply the suggestion of the most likely word
   */
  async lintHotkey() {
    var t, r;
    const a = await ((r = (t = this.actions).getHotkey) == null ? void 0 : r.call(t));
    document.addEventListener(
      "keydown",
      (o) => {
        var i;
        if (!a) return;
        const s = o.key.toLowerCase(), l = a.key.toLowerCase(), c = o.ctrlKey === a.modifiers.includes("Ctrl"), u = o.altKey === a.modifiers.includes("Alt"), d = o.shiftKey === a.modifiers.includes("Shift");
        if (s === l && c && u && d) {
          o.preventDefault(), o.stopImmediatePropagation();
          const f = Is();
          if (f != null) {
            const h = Cs(f, this.lastBoxes);
            if (h < 0)
              return;
            const p = this.lastBoxes[h], g = p.lint.suggestions;
            g.length > 0 ? p.applySuggestion(g[0]) : (i = p.ignoreLint) == null || i.call(p);
          }
        }
      },
      { capture: !0 }
    );
  }
  async addTarget(t) {
    this.targets.has(t) || (this.targets.add(t), this.update(), this.attachTargetListeners(t));
  }
  async removeTarget(t) {
    if (this.targets.has(t))
      this.targets.delete(t), this.update(), this.detachTargetListeners(t);
    else
      throw new Error("HTMLElement not added.");
  }
  /** Return the last known ignorable lint boxes rendered on-screen. */
  getLastIgnorableLintBoxes() {
    return this.lastLintBoxes;
  }
  attachTargetListeners(t) {
    for (const i of ps)
      t.addEventListener(i, this.updateEventCallback);
    const r = new MutationObserver(this.updateEventCallback), a = { subtree: !0, characterData: !0 };
    t.tagName == null ? r.observe(t.parentElement, a) : r.observe(t, a);
    const o = w1(t);
    for (const i of o)
      this.scrollableAncestors.has(i) || (this.scrollableAncestors.add(i), i.addEventListener("scroll", this.updateEventCallback, {
        capture: !0,
        passive: !0
      }));
  }
  detachTargetListeners(t) {
    for (const r of ps)
      t.removeEventListener(r, this.updateEventCallback);
  }
  attachWindowListeners() {
    this.lintHotkey();
    for (const t of y1)
      window.addEventListener(t, this.updateEventCallback);
  }
  getTargetText(t) {
    let r = null;
    const a = t instanceof HTMLElement && xa(t) != null;
    if (a) {
      const s = t.querySelectorAll(".cm-line");
      r = Array.from(s).map((l) => l.textContent).reduce((l, c) => `${l}${c ?? ""}
`, "");
    } else t instanceof HTMLElement && Ps(t) ? r = t.textContent : r = t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement ? t.value : t.innerText;
    const o = [];
    let i = 0;
    for (const s of r ?? "")
      s == `
` && o.push(i), i++;
    return { text: r, isCM: a, newLineIndices: o };
  }
  requestRender() {
    this.renderRequested || (this.renderRequested = !0, requestAnimationFrame(() => {
      const t = this.lastLints.flatMap(({ target: r, lints: a }) => {
        if (!r)
          return [];
        const { text: o, isCM: i } = this.getTargetText(r);
        return o == null ? [] : Object.entries(a).flatMap(
          ([s, l]) => l.flatMap((c) => {
            const u = i ? c.source === o ? c : null : b1(c, o);
            return u == null ? [] : Ku(r, u, s, {
              ignoreLint: this.actions.ignoreLint ? async (d) => {
                var f, h;
                await ((h = (f = this.actions).ignoreLint) == null ? void 0 : h.call(f, d)), await this.requestLintUpdate(!0);
              } : void 0
            });
          })
        );
      });
      this.lastLintBoxes = t, this.highlights.renderLintBoxes(t), this.popupHandler.updateLintBoxes(t), this.renderRequested = !1, this.lastBoxes = t;
    }));
  }
}
function w1(e) {
  const t = [], r = document.scrollingElement || document.documentElement;
  let a = e.parentElement;
  for (; a; ) {
    const o = window.getComputedStyle(a), { overflowY: i, overflowX: s } = o, l = i.includes("auto") || i.includes("scroll"), c = s.includes("auto") || s.includes("scroll");
    (l || c) && t.push(a), a = a.parentElement;
  }
  return r && t[t.length - 1] !== r && t.push(r), t;
}
function _1(e) {
  if (!(e instanceof Element)) return;
  const t = e.getAttribute("data-language");
  switch (t) {
    case "plaintext":
    case "markdown":
    case "typst":
      return t;
    default:
      return;
  }
}
const va = [
  {
    value: "sans",
    label: "Sans",
    sample: "Aa",
    stack: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif"
  },
  {
    value: "serif",
    label: "Serif",
    sample: "Aa",
    stack: "'Iowan Old Style', 'New York', Georgia, serif"
  },
  {
    value: "mono",
    label: "Mono",
    sample: "Aa",
    stack: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
  }
], k1 = [12, 13, 14, 15, 16, 17, 18, 20, 22], qn = "default", Ic = [
  "Spelling",
  "Typo",
  "Capitalization",
  "Grammar",
  "Agreement",
  "BoundaryError",
  "Punctuation",
  "Usage",
  "WordChoice",
  "WordOrder",
  "Style",
  "Readability",
  "Enhancement",
  "Redundancy",
  "Repetition",
  "Formatting",
  "Regionalism",
  "Nonstandard",
  "Eggcorn",
  "Malapropism",
  "Miscellaneous"
], Pc = {
  Agreement: {
    label: "Agreement",
    dotClass: "bg-emerald-500",
    haloClass: "bg-emerald-100",
    textClass: "text-emerald-700",
    softClass: "bg-emerald-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-emerald-500/10"
  },
  BoundaryError: {
    label: "Boundary",
    dotClass: "bg-indigo-500",
    haloClass: "bg-indigo-100",
    textClass: "text-indigo-700",
    softClass: "bg-indigo-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-indigo-500/10"
  },
  Capitalization: {
    label: "Capitalization",
    dotClass: "bg-rose-500",
    haloClass: "bg-rose-100",
    textClass: "text-rose-700",
    softClass: "bg-rose-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-rose-500/10"
  },
  Eggcorn: {
    label: "Eggcorn",
    dotClass: "bg-violet-500",
    haloClass: "bg-violet-100",
    textClass: "text-violet-700",
    softClass: "bg-violet-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-violet-500/10"
  },
  Enhancement: {
    label: "Enhancement",
    dotClass: "bg-amber-600",
    haloClass: "bg-amber-100",
    textClass: "text-amber-700",
    softClass: "bg-amber-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-amber-600/10"
  },
  Formatting: {
    label: "Formatting",
    dotClass: "bg-slate-500",
    haloClass: "bg-slate-100",
    textClass: "text-slate-700",
    softClass: "bg-slate-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-slate-500/10"
  },
  Grammar: {
    label: "Grammar",
    dotClass: "bg-emerald-600",
    haloClass: "bg-emerald-100",
    textClass: "text-emerald-700",
    softClass: "bg-emerald-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-emerald-600/10"
  },
  Malapropism: {
    label: "Malapropism",
    dotClass: "bg-fuchsia-500",
    haloClass: "bg-fuchsia-100",
    textClass: "text-fuchsia-700",
    softClass: "bg-fuchsia-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-fuchsia-500/10"
  },
  Miscellaneous: {
    label: "Miscellaneous",
    dotClass: "bg-sky-500",
    haloClass: "bg-sky-100",
    textClass: "text-sky-700",
    softClass: "bg-sky-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-sky-500/10"
  },
  Nonstandard: {
    label: "Nonstandard",
    dotClass: "bg-stone-500",
    haloClass: "bg-stone-100",
    textClass: "text-stone-700",
    softClass: "bg-stone-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-stone-500/10"
  },
  Punctuation: {
    label: "Punctuation",
    dotClass: "bg-cyan-600",
    haloClass: "bg-cyan-100",
    textClass: "text-cyan-700",
    softClass: "bg-cyan-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-cyan-600/10"
  },
  Readability: {
    label: "Readability",
    dotClass: "bg-violet-600",
    haloClass: "bg-violet-100",
    textClass: "text-violet-700",
    softClass: "bg-violet-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-violet-600/10"
  },
  Redundancy: {
    label: "Redundancy",
    dotClass: "bg-amber-600",
    haloClass: "bg-amber-100",
    textClass: "text-amber-700",
    softClass: "bg-amber-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-amber-600/10"
  },
  Regionalism: {
    label: "Regionalism",
    dotClass: "bg-teal-700",
    haloClass: "bg-teal-100",
    textClass: "text-teal-700",
    softClass: "bg-teal-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-teal-700/10"
  },
  Repetition: {
    label: "Repetition",
    dotClass: "bg-amber-700",
    haloClass: "bg-amber-100",
    textClass: "text-amber-700",
    softClass: "bg-amber-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-amber-700/10"
  },
  Spelling: {
    label: "Spelling",
    dotClass: "bg-rose-500",
    haloClass: "bg-rose-100",
    textClass: "text-rose-700",
    softClass: "bg-rose-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-rose-500/10"
  },
  Style: {
    label: "Style",
    dotClass: "bg-blue-500",
    haloClass: "bg-blue-100",
    textClass: "text-blue-700",
    softClass: "bg-blue-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-blue-500/10"
  },
  Typo: {
    label: "Typo",
    dotClass: "bg-rose-500",
    haloClass: "bg-rose-100",
    textClass: "text-rose-700",
    softClass: "bg-rose-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-rose-500/10"
  },
  Usage: {
    label: "Usage",
    dotClass: "bg-green-600",
    haloClass: "bg-green-100",
    textClass: "text-green-700",
    softClass: "bg-green-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-green-600/10"
  },
  WordChoice: {
    label: "Word Choice",
    dotClass: "bg-blue-600",
    haloClass: "bg-blue-100",
    textClass: "text-blue-700",
    softClass: "bg-blue-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-blue-600/10"
  },
  WordOrder: {
    label: "Word Order",
    dotClass: "bg-indigo-600",
    haloClass: "bg-indigo-100",
    textClass: "text-indigo-700",
    softClass: "bg-indigo-50",
    activeClass: "border-[rgba(28,26,22,0.14)] shadow-indigo-600/10"
  }
}, C1 = Ic.map(
  (e) => [e, Pc[e]]
);
function ms() {
  return Object.fromEntries(Ic.map((e) => [e, 0]));
}
function M1(e) {
  return e === "serif" || e === "mono" ? e : "sans";
}
function S1(e) {
  return va.find((t) => t.value === e)?.stack ?? va[0].stack;
}
function gs(e) {
  if (e === qn || e == null || e === "")
    return qn;
  const t = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(t))
    return qn;
  const r = Math.round(t);
  return Math.min(28, Math.max(11, r));
}
function fr(e) {
  return e.replacement_text !== "" ? e.replacement_text : String(e.kind);
}
function E1(e) {
  return e.trim().match(/\S+/g)?.length ?? 0;
}
var A1 = n.from_html('<button type="button"> </button>'), L1 = n.from_html('<div class="flex flex-1 flex-wrap justify-end gap-1.5"></div>'), N1 = n.from_html('<span class="mr-auto text-xs text-stone-400">No suggestions available.</span>'), R1 = n.from_html('<div class="flex flex-col gap-2.5 px-3 pt-0.5 pb-3"><button type="button" class="m-0 flex w-full flex-col border-0 bg-transparent p-0 text-left text-[13px] leading-[1.4] font-medium text-stone-950"><span><!></span></button> <button type="button" class="m-0 block max-h-[84px] w-full overflow-hidden rounded-[7px] border-[0.5px] border-[rgba(28,26,22,0.09)] bg-[#fbfaf6] px-3 py-2.5 text-left text-xs leading-[1.45] text-stone-700" aria-label="Focus problem in editor"><span class="text-stone-500"> </span> <mark> </mark> <span class="text-stone-500"> </span></button> <div class="flex items-center justify-end gap-2"><!> <button type="button" class="h-[26px] shrink-0 border-0 bg-transparent px-1 text-[12.5px] font-medium text-stone-500 shadow-none">Ignore</button></div></div>'), T1 = n.from_html('<div role="group"><button type="button" class="m-0 flex min-h-8 w-full items-center gap-2 border-0 bg-transparent px-3 py-2 text-left text-inherit"><span><span></span></span> <span class="text-[12.5px] leading-[1.1] font-semibold text-stone-950"> </span> <span><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6 8 10 12 6"></path></svg></span></button> <!></div>');
function I1(e, t) {
  n.push(t, !1);
  const r = n.mutable_source();
  let a = n.prop(t, "lint", 8), o = n.prop(t, "open", 8, !1), i = n.prop(t, "active", 8, !1), s = n.prop(t, "onToggleOpen", 8), l = n.prop(t, "focusError", 8), c = n.prop(t, "onActivate", 8, () => {
  }), u = n.prop(t, "onApply", 8), d = n.prop(t, "onIgnore", 8, () => {
  }), f = n.prop(t, "snippet", 8), h = n.mutable_source(null);
  const p = "h-3.5 w-3.5 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]", g = "h-[26px] max-w-full overflow-hidden text-ellipsis rounded-full px-[11px] text-[12.5px] font-semibold";
  function m() {
    c()(), l()?.();
  }
  n.legacy_pre_effect(() => n.deep_read_state(a()), () => {
    n.set(r, Pc[a().lint_kind]);
  }), n.legacy_pre_effect(() => (n.deep_read_state(o()), n.get(h)), () => {
    o() && n.get(h) != null && requestAnimationFrame(() => {
      const A = n.get(h)?.closest("[data-problems-scroller]");
      if (!(A instanceof HTMLElement) || n.get(h) == null)
        return;
      const z = n.get(h).offsetTop, I = z + n.get(h).offsetHeight, V = A.scrollTop, F = V + A.clientHeight;
      z < V + 8 ? A.scrollTo({ top: Math.max(0, z - 14), behavior: "smooth" }) : I > F - 8 && A.scrollTo({ top: I - A.clientHeight + 14, behavior: "smooth" });
    });
  }), n.legacy_pre_effect_reset(), n.init();
  var b = T1(), y = n.child(b), v = n.child(y), _ = n.child(v);
  n.reset(v);
  var C = n.sibling(v, 2), x = n.child(C, !0);
  n.reset(C);
  var w = n.sibling(C, 2), M = n.child(w);
  n.set_class(M, 0, n.clsx(p)), n.reset(w), n.reset(y);
  var E = n.sibling(y, 2);
  {
    var S = (A) => {
      var z = R1(), I = n.child(z), V = n.child(I), F = n.child(V);
      n.html(F, () => (n.deep_read_state(a()), n.untrack(() => a().message_html))), n.reset(V), n.reset(I);
      var O = n.sibling(I, 2), P = n.child(O), U = n.child(P);
      n.reset(P);
      var G = n.sibling(P, 2), Z = n.child(G, !0);
      n.reset(G);
      var ie = n.sibling(G, 2), X = n.child(ie);
      n.reset(ie), n.reset(O);
      var se = n.sibling(O, 2), te = n.child(se);
      {
        var re = ($) => {
          var de = L1();
          n.each(
            de,
            5,
            () => (n.deep_read_state(a()), n.untrack(() => a().suggestions)),
            n.index,
            (pe, _e, Fe) => {
              var ve = A1(), dt = n.child(ve, !0);
              n.reset(ve), n.template_effect(
                (tt, ft) => {
                  n.set_class(ve, 1, (n.get(r), n.untrack(() => `${g} ${Fe === 0 ? `border-transparent ${n.get(r).softClass} ${n.get(r).textClass} shadow-none` : "border-[0.5px] border-stone-300 bg-linear-to-b from-white to-stone-50 text-stone-950 shadow-sm shadow-stone-950/5"}`))), n.set_attribute(ve, "title", tt), n.set_text(dt, ft);
                },
                [
                  () => (n.deep_read_state(fr), n.get(_e), n.untrack(() => `Replace with "${fr(n.get(_e))}"`)),
                  () => (n.deep_read_state(fr), n.get(_e), n.untrack(() => fr(n.get(_e))))
                ]
              ), n.event("click", ve, (tt) => {
                tt.stopPropagation(), u()?.(n.get(_e));
              }), n.append(pe, ve);
            }
          ), n.reset(de), n.append($, de);
        }, ce = ($) => {
          var de = N1();
          n.append($, de);
        };
        n.if(te, ($) => {
          n.deep_read_state(a()), n.untrack(() => a().suggestions && a().suggestions.length > 0) ? $(re) : $(ce, !1);
        });
      }
      var ge = n.sibling(te, 2);
      n.reset(se), n.reset(z), n.template_effect(() => {
        n.set_text(U, `${n.deep_read_state(f()), n.untrack(() => f().prefixEllipsis ? "..." : "") ?? ""}${n.deep_read_state(f()), n.untrack(() => f().prefix) ?? ""}`), n.set_class(G, 1, (n.get(r), n.untrack(() => `rounded-[3px] px-0.5 font-semibold ${n.get(r).softClass} ${n.get(r).textClass}`))), n.set_text(Z, (n.deep_read_state(f()), n.untrack(() => f().problem))), n.set_text(X, `${n.deep_read_state(f()), n.untrack(() => f().suffix) ?? ""}${n.deep_read_state(f()), n.untrack(() => f().suffixEllipsis ? "..." : "") ?? ""}`);
      }), n.event("click", I, m), n.event("click", O, m), n.event("click", ge, ($) => {
        $.stopPropagation(), d()();
      }), n.transition(1, z, () => $a, () => ({ duration: 130 })), n.transition(2, z, () => $a, () => ({ duration: 130 })), n.append(A, z);
    };
    n.if(E, (A) => {
      o() && A(S);
    });
  }
  n.reset(b), n.bind_this(b, (A) => n.set(h, A), () => n.get(h)), n.template_effect(() => {
    n.set_class(b, 1, (n.deep_read_state(i()), n.get(r), n.untrack(() => `shrink-0 overflow-hidden rounded-[10px] border-[0.5px] bg-white shadow-sm shadow-stone-950/5 transition-[box-shadow,border-color] duration-150 ${i() ? n.get(r).activeClass : "border-[rgba(28,26,22,0.14)]"}`))), n.set_attribute(y, "aria-expanded", o()), n.set_class(v, 1, (n.get(r), n.untrack(() => `inline-flex h-[11px] w-[11px] shrink-0 items-center justify-center rounded-full ${n.get(r).haloClass}`))), n.set_class(_, 1, (n.get(r), n.untrack(() => `h-[7px] w-[7px] rounded-full ${n.get(r).dotClass}`))), n.set_text(x, (n.get(r), n.untrack(() => n.get(r).label))), n.set_class(w, 1, `ml-auto inline-flex shrink-0 text-stone-500 transition-transform duration-150 ${o() ? "rotate-180" : ""}`);
  }), n.event("click", y, function(...A) {
    s()?.apply(this, A);
  }), n.event("mouseenter", b, function(...A) {
    c()?.apply(this, A);
  }), n.append(e, b), n.pop();
}
var P1 = n.from_html('<div id="problem-actions-menu" role="menu" class="absolute top-[calc(100%+6px)] right-0 z-30 w-36 overflow-hidden rounded-lg border-[0.5px] border-[rgba(28,26,22,0.16)] bg-white py-1 shadow-lg shadow-stone-950/10"><button type="button" role="menuitem">Open All</button> <button type="button" role="menuitem">Close All</button> <div class="my-1 h-px bg-[rgba(28,26,22,0.09)]"></div> <button type="button" role="menuitem">Ignore All</button></div>'), z1 = n.from_html('<div class="grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-1 whitespace-nowrap text-[10px] font-medium text-stone-500"><span><span></span></span> <span class="overflow-hidden text-ellipsis"> </span> <strong class="font-medium text-stone-400 tabular-nums"> </strong></div>'), O1 = n.from_html('<div class="grid grid-cols-3 gap-x-2 gap-y-[7px] overflow-hidden border-b-[0.5px] border-[rgba(28,26,22,0.09)] px-[18px] pb-3" aria-label="Problem lint kinds"></div>'), j1 = n.from_html('<div class="m-auto max-w-[220px] px-3 py-7 text-center text-[12.5px] leading-[1.55] text-stone-500"><div aria-hidden="true" class="mb-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-b from-emerald-400 to-emerald-600 text-white shadow-sm shadow-emerald-900/20"><svg viewBox="0 0 16 16" class="h-4 w-4 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M3.5 8.5 6.5 11.5 12.5 5"></path></svg></div> <strong class="mb-0.5 block font-semibold text-stone-950">All clear</strong> <p class="m-0">Harper has no suggestions for this document.</p></div>'), F1 = n.from_html('<div class="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/35 px-4" role="presentation"><div class="w-full max-w-[340px] rounded-lg border-[0.5px] border-[rgba(28,26,22,0.16)] bg-white p-4 text-stone-950 shadow-2xl shadow-stone-950/20" role="dialog" aria-modal="true" aria-labelledby="ignore-all-title" tabindex="-1"><h3 id="ignore-all-title" class="!m-0 !p-0 text-[15px] leading-5 font-semibold">Ignore all problems?</h3> <p class="mt-2 mb-4 text-[13px] leading-5 text-stone-600"> </p> <div class="flex justify-end gap-2"><button type="button" class="h-8 rounded-md border-[0.5px] border-stone-300 bg-linear-to-b from-white to-stone-50 px-3 text-[13px] font-medium text-stone-700 shadow-sm shadow-stone-950/5">Cancel</button> <button type="button" class="h-8 rounded-md border-[0.5px] border-red-700 bg-red-700 px-3 text-[13px] font-medium text-white shadow-sm shadow-red-950/10 disabled:opacity-50">Ignore All</button></div></div></div>'), B1 = n.from_html('<aside class="flex min-h-0 w-[320px] flex-[0_0_320px] overflow-hidden border-l-[0.5px] border-[rgba(28,26,22,0.14)] bg-[#f4f0e7] @max-[760px]:w-full @max-[760px]:flex-[0_0_42%] @max-[760px]:border-t-[0.5px] @max-[760px]:border-l-0 svelte-166hzxe" aria-label="Problems"><div class="flex min-h-0 flex-1 flex-col"><header class="flex items-center gap-1.5 px-3.5 pt-2.5 pb-2"><h2 class="m-0! flex min-w-0 flex-1 items-center p-0! text-[15px]! leading-none! font-bold! text-stone-950 font-[inherit]!"><button type="button" class="m-0! inline-flex min-w-0 items-center gap-1.5 border-0 bg-transparent p-0! text-left text-[15px]! leading-none! font-[inherit] text-inherit">Problems <span class="inline-flex h-[18px] min-w-5 items-center justify-center rounded-full bg-amber-700 px-1.5 text-[11px] font-semibold text-white tabular-nums"> </span> <span><svg viewBox="0 0 16 16" aria-hidden="true" class="h-3.5 w-3.5 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M4 6 8 10 12 6"></path></svg></span></button></h2> <div class="relative flex shrink-0 items-center gap-1.5"><button type="button" aria-label="Hide problems sidebar" title="Hide problems sidebar"><svg viewBox="0 0 20 20" aria-hidden="true" class="h-[18px] w-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"><rect x="3.5" y="3" width="13" height="14" rx="3"></rect><path d="M13.25 5.5v9"></path></svg></button> <button type="button" aria-label="More problem actions" aria-haspopup="menu" title="More problem actions"><svg viewBox="0 0 16 16" aria-hidden="true" class="h-4 w-4 fill-current"><circle cx="8" cy="4" r="1.15"></circle><circle cx="8" cy="8" r="1.15"></circle><circle cx="8" cy="12" r="1.15"></circle></svg></button> <!></div></header> <!> <div class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto px-3.5 pt-3.5 pb-6" data-problems-scroller=""><!></div></div></aside> <!>', 1);
function D1(e, t) {
  n.push(t, !1);
  const r = n.mutable_source(), a = n.mutable_source(), o = n.mutable_source(), i = n.mutable_source(), s = n.mutable_source();
  let l = n.prop(t, "lintBoxes", 24, () => []), c = n.prop(t, "activeLintId", 8, null), u = n.prop(t, "focusLint", 8, () => {
  }), d = n.prop(t, "onActivate", 8, () => {
  }), f = n.prop(t, "onApplied", 8, () => {
  }), h = n.prop(t, "onIgnored", 8, () => {
  }), p = n.prop(t, "onIgnoreAll", 8, null), g = n.prop(t, "onHideSidebar", 8, () => {
  }), m = n.mutable_source(/* @__PURE__ */ new Set()), b = n.mutable_source(null), y = n.mutable_source(""), v = n.mutable_source(!0), _ = n.mutable_source(!1), C = n.mutable_source(!1);
  const x = "inline-flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent text-stone-600 shadow-none transition-colors duration-150 hover:text-stone-950 disabled:opacity-50", w = "m-0 flex h-8 w-full items-center border-0 bg-transparent px-3 text-left text-[13px] font-medium text-stone-700 shadow-none hover:bg-stone-100 disabled:text-stone-300 disabled:hover:bg-transparent", M = "m-0 flex h-8 w-full items-center border-0 bg-transparent px-3 text-left text-[13px] font-medium text-red-700 shadow-none hover:bg-red-50 disabled:text-stone-300 disabled:hover:bg-transparent";
  async function E() {
    if (p() != null)
      await p()();
    else {
      const N = [...l()];
      for (const j of N)
        await j.ignoreLint?.();
    }
    n.set(m, /* @__PURE__ */ new Set()), h()();
  }
  function S() {
    n.set(_, !1), n.set(C, !1), g()();
  }
  function A() {
    n.set(m, new Set(l().map((N) => N.lint.context_hash))), n.set(_, !1);
  }
  function z() {
    n.set(m, /* @__PURE__ */ new Set()), n.set(_, !1);
  }
  function I() {
    n.set(_, !1), n.set(C, !0);
  }
  async function V() {
    n.set(C, !1), await E();
  }
  function F() {
    n.set(C, !1);
  }
  function O(N) {
    N.target === N.currentTarget && F();
  }
  function P(N) {
    !n.get(_) || n.get(b) == null || N.target == null || n.get(b).contains(N.target) || n.set(_, !1);
  }
  function U(N) {
    if (N.key === "Escape") {
      if (n.get(C)) {
        N.preventDefault(), n.set(C, !1);
        return;
      }
      n.get(_) && (N.preventDefault(), n.set(_, !1));
    }
  }
  function G(N) {
    const j = new Set(n.get(m));
    j.has(N) ? j.delete(N) : j.add(N), n.set(m, j);
  }
  function Z(N) {
    return N.replace(/\s+/g, " ").trim();
  }
  function ie(N) {
    let j = N.lint, ne = j.source || N.source.textContent || "";
    const ue = 60, ae = Math.max(0, j.span.start - ue), Ce = Math.min(ne.length, j.span.end + ue);
    let be = ne.slice(ae, j.span.start), Le = ne.slice(j.span.end, Ce);
    be = Z(be);
    const $e = Z(j.problem_text);
    return Le = Z(Le), {
      prefix: be,
      problem: $e,
      suffix: Le,
      prefixEllipsis: ae > 0,
      suffixEllipsis: Ce < ne.length
    };
  }
  n.legacy_pre_effect(() => n.deep_read_state(l()), () => {
    n.set(s, l().map((N) => N.lint.context_hash).join("|"));
  }), n.legacy_pre_effect(
    () => (n.get(s), n.get(y), n.deep_read_state(l()), n.get(m)),
    () => {
      if (n.get(s) !== n.get(y)) {
        n.set(y, n.get(s));
        const N = new Set(l().map((ne) => ne.lint.context_hash)), j = new Set([...n.get(m)].filter((ne) => N.has(ne)));
        j.size === 0 && l().length > 0 && j.add(l()[0].lint.context_hash), n.set(m, j);
      }
    }
  ), n.legacy_pre_effect(() => (n.deep_read_state(l()), n.get(m)), () => {
    n.set(r, l().length > 0 && n.get(m).size === l().length);
  }), n.legacy_pre_effect(() => n.deep_read_state(l()), () => {
    n.set(a, `${l().length} ${l().length === 1 ? "problem" : "problems"}`);
  }), n.legacy_pre_effect(() => (n.deep_read_state(l()), ms), () => {
    n.set(o, l().reduce(
      (N, j) => (N[j.lint.lint_kind] += 1, N),
      ms()
    ));
  }), n.legacy_pre_effect(() => n.get(o), () => {
    n.set(i, C1.filter(([N]) => n.get(o)[N] > 0));
  }), n.legacy_pre_effect_reset(), n.init();
  var X = B1();
  n.event("click", n.window, P), n.event("keydown", n.window, U);
  var se = n.first_child(X), te = n.child(se), re = n.child(te), ce = n.child(re), ge = n.child(ce), $ = n.sibling(n.child(ge)), de = n.child($, !0);
  n.reset($);
  var pe = n.sibling($, 2);
  n.reset(ge), n.reset(ce);
  var _e = n.sibling(ce, 2), Fe = n.child(_e);
  n.set_class(Fe, 1, n.clsx(x));
  var ve = n.sibling(Fe, 2);
  n.set_class(ve, 1, n.clsx(x));
  var dt = n.sibling(ve, 2);
  {
    var tt = (N) => {
      var j = P1(), ne = n.child(j);
      n.set_class(ne, 1, n.clsx(w));
      var ue = n.sibling(ne, 2);
      n.set_class(ue, 1, n.clsx(w));
      var ae = n.sibling(ue, 4);
      n.set_class(ae, 1, n.clsx(M)), n.reset(j), n.template_effect(() => {
        ne.disabled = (n.deep_read_state(l()), n.get(r), n.untrack(() => l().length === 0 || n.get(r))), ue.disabled = (n.deep_read_state(l()), n.get(m), n.untrack(() => l().length === 0 || n.get(m).size === 0)), ae.disabled = (n.deep_read_state(l()), n.untrack(() => l().length === 0));
      }), n.event("click", ne, A), n.event("click", ue, z), n.event("click", ae, I), n.transition(3, j, () => hr, () => ({ duration: 100 })), n.append(N, j);
    };
    n.if(dt, (N) => {
      n.get(_) && N(tt);
    });
  }
  n.reset(_e), n.bind_this(_e, (N) => n.set(b, N), () => n.get(b)), n.reset(re);
  var ft = n.sibling(re, 2);
  {
    var Dr = (N) => {
      var j = O1();
      n.each(j, 5, () => n.get(i), n.index, (ne, ue) => {
        var ae = n.derived(() => n.to_array(n.get(ue), 2));
        let Ce = () => n.get(ae)[0], be = () => n.get(ae)[1];
        var Le = z1(), $e = n.child(Le), Wr = n.child($e);
        n.reset($e);
        var qr = n.sibling($e, 2), zc = n.child(qr, !0);
        n.reset(qr);
        var qa = n.sibling(qr, 2), Oc = n.child(qa, !0);
        n.reset(qa), n.reset(Le), n.template_effect(() => {
          n.set_class($e, 1, (be(), n.untrack(() => `inline-flex h-[9px] w-[9px] shrink-0 items-center justify-center rounded-full ${be().haloClass}`))), n.set_class(Wr, 1, (be(), n.untrack(() => `h-[7px] w-[7px] rounded-full ${be().dotClass}`))), n.set_text(zc, (be(), n.untrack(() => be().label))), n.set_text(Oc, (n.get(o), Ce(), n.untrack(() => n.get(o)[Ce()])));
        }), n.append(ne, Le);
      }), n.reset(j), n.append(N, j);
    };
    n.if(ft, (N) => {
      n.get(v), n.get(i), n.untrack(() => n.get(v) && n.get(i).length > 0) && N(Dr);
    });
  }
  var er = n.sibling(ft, 2), Hr = n.child(er);
  {
    var L = (N) => {
      var j = j1();
      n.append(N, j);
    }, q = (N) => {
      var j = n.comment(), ne = n.first_child(j);
      n.each(ne, 1, l, n.index, (ue, ae) => {
        const Ce = n.derived_safe_equal(() => (n.get(ae), n.untrack(() => n.get(ae).lint.context_hash)));
        {
          let be = n.derived_safe_equal(() => (n.get(ae), n.untrack(() => ie(n.get(ae))))), Le = n.derived_safe_equal(() => (n.get(m), n.deep_read_state(n.get(Ce)), n.untrack(() => n.get(m).has(n.get(Ce))))), $e = n.derived_safe_equal(() => c() === n.get(Ce));
          I1(ue, {
            get lint() {
              return n.get(ae), n.untrack(() => n.get(ae).lint);
            },
            get snippet() {
              return n.get(be);
            },
            get open() {
              return n.get(Le);
            },
            get active() {
              return n.get($e);
            },
            onToggleOpen: () => G(n.get(Ce)),
            focusError: () => u()(n.get(ae)),
            onActivate: () => d()(n.get(ae)),
            onApply: (Wr) => {
              n.get(ae).applySuggestion(Wr), f()();
            },
            onIgnore: async () => {
              await n.get(ae).ignoreLint?.(), h()();
            }
          });
        }
      }), n.append(N, j);
    };
    n.if(Hr, (N) => {
      n.deep_read_state(l()), n.untrack(() => l().length === 0) ? N(L) : N(q, !1);
    });
  }
  n.reset(er), n.reset(te), n.reset(se);
  var ke = n.sibling(se, 2);
  {
    var xe = (N) => {
      var j = F1(), ne = n.child(j), ue = n.sibling(n.child(ne), 2), ae = n.child(ue);
      n.reset(ue);
      var Ce = n.sibling(ue, 2), be = n.child(Ce), Le = n.sibling(be, 2);
      n.reset(Ce), n.reset(ne), n.reset(j), n.template_effect(() => {
        n.set_text(ae, `This will ignore ${n.get(a) ?? ""} in the current document.`), Le.disabled = (n.deep_read_state(l()), n.untrack(() => l().length === 0));
      }), n.event("click", be, F), n.event("click", Le, V), n.transition(3, j, () => hr, () => ({ duration: 120 })), n.event("click", j, O), n.append(N, j);
    };
    n.if(ke, (N) => {
      n.get(C) && N(xe);
    });
  }
  n.template_effect(() => {
    n.set_attribute(ge, "aria-expanded", n.get(v)), n.set_text(de, (n.deep_read_state(l()), n.untrack(() => l().length))), n.set_class(pe, 1, `inline-flex shrink-0 text-stone-500 transition-transform duration-150 ${n.get(v) ? "rotate-180" : ""}`), n.set_attribute(ve, "aria-expanded", n.get(_));
  }), n.event("click", ge, () => n.set(v, !n.get(v))), n.event("click", Fe, S), n.event("click", ve, () => n.set(_, !n.get(_))), n.transition(3, te, () => hr, () => ({ duration: 250 })), n.transition(3, se, () => Fc, () => ({ x: 320, duration: 250, easing: Bc })), n.append(e, X), n.pop();
}
var H1 = n.from_html('<button type="button"> </button>'), W1 = n.from_html("<option> </option>"), q1 = n.from_html(`<footer class="flex min-h-[26px] flex-[0_0_26px] items-center gap-3.5 border-t-[0.5px] border-[rgba(28,26,22,0.09)] bg-[#f4f0e7] px-2 pr-2 pl-3.5 text-[11px] whitespace-nowrap text-stone-500 tabular-nums [font-family:'JetBrains_Mono',ui-monospace,'SF_Mono',Menlo,monospace] @max-[760px]:h-auto @max-[760px]:min-h-[30px] @max-[760px]:flex-wrap @max-[760px]:gap-y-1.5 @max-[760px]:py-[5px]" aria-label="Editor status"><div class="inline-flex items-center gap-2"><span class="inline-flex items-center gap-1.5"><span></span> <!></span></div> <span class="h-2.5 w-px bg-[rgba(28,26,22,0.14)]"></span> <span> </span> <span> </span> <span class="flex-1"></span> <div class="inline-flex h-[18px] items-center rounded-[5px] border-[0.5px] border-stone-200 bg-stone-200/60 p-px" aria-label="Font family"></div> <label class="relative inline-flex h-[18px] items-center rounded-[5px] border-[0.5px] border-stone-200 bg-stone-200/60 pr-[18px] pl-2 text-[11px] font-medium text-stone-950 after:absolute after:top-1/2 after:right-[5px] after:-translate-y-1/2 after:text-[9px] after:leading-none after:text-stone-500 after:content-['v'] after:[font-family:-apple-system,BlinkMacSystemFont,'SF_Pro_Text',sans-serif]"><span> </span> <select class="absolute inset-0 border-0 opacity-0" aria-label="Font size"><option>Default</option><!></select></label></footer>`);
function $1(e, t) {
  n.push(t, !1);
  const r = n.mutable_source(), a = n.mutable_source();
  let o = n.prop(t, "text", 8, ""), i = n.prop(t, "problemCount", 8, 0), s = n.prop(t, "fontFamily", 8, "sans"), l = n.prop(t, "fontSize", 8, "default"), c = n.prop(t, "onFontFamilyChange", 8, () => {
  }), u = n.prop(t, "onFontSizeChange", 8, () => {
  });
  const d = "inline-flex h-4 min-w-7 items-center justify-center rounded px-2 text-xs leading-none font-medium text-stone-500";
  n.legacy_pre_effect(() => n.deep_read_state(o()), () => {
    n.set(r, E1(o()));
  }), n.legacy_pre_effect(() => n.deep_read_state(o()), () => {
    n.set(a, o().length);
  }), n.legacy_pre_effect_reset(), n.init();
  var f = q1(), h = n.child(f), p = n.child(h), g = n.child(p), m = n.sibling(g, 2);
  {
    var b = (F) => {
      var O = n.text("All clear");
      n.append(F, O);
    }, y = (F) => {
      var O = n.text();
      n.template_effect(() => n.set_text(O, `${i() ?? ""} problem${i() === 1 ? "" : "s"}`)), n.append(F, O);
    };
    n.if(m, (F) => {
      i() === 0 ? F(b) : F(y, !1);
    });
  }
  n.reset(p), n.reset(h);
  var v = n.sibling(h, 4), _ = n.child(v);
  n.reset(v);
  var C = n.sibling(v, 2), x = n.child(C);
  n.reset(C);
  var w = n.sibling(C, 4);
  n.each(w, 5, () => va, n.index, (F, O) => {
    var P = H1(), U = n.child(P, !0);
    n.reset(P), n.template_effect(
      (G) => {
        n.set_class(P, 1, (n.deep_read_state(s()), n.get(O), n.untrack(() => `${d} ${s() === n.get(O).value ? "bg-white font-bold text-stone-950 shadow-sm shadow-stone-950/10" : ""}`))), n.set_style(P, (n.get(O), n.untrack(() => `font-family: ${n.get(O).stack}`))), n.set_attribute(P, "title", (n.get(O), n.untrack(() => n.get(O).label))), n.set_attribute(P, "aria-label", G), n.set_attribute(P, "aria-pressed", (n.deep_read_state(s()), n.get(O), n.untrack(() => s() === n.get(O).value))), n.set_text(U, (n.get(O), n.untrack(() => n.get(O).sample)));
      },
      [
        () => (n.get(O), n.untrack(() => `Use ${n.get(O).label.toLowerCase()} font`))
      ]
    ), n.event("click", P, () => c()(n.get(O).value)), n.append(F, P);
  }), n.reset(w);
  var M = n.sibling(w, 2), E = n.child(M), S = n.child(E, !0);
  n.reset(E);
  var A = n.sibling(E, 2), z = n.child(A);
  z.value = z.__value = "default";
  var I = n.sibling(z);
  n.each(I, 1, () => k1, n.index, (F, O) => {
    var P = W1(), U = n.child(P);
    n.reset(P);
    var G = {};
    n.template_effect(() => {
      n.set_text(U, `${n.get(O) ?? ""}px`), G !== (G = n.get(O)) && (P.value = (P.__value = n.get(O)) ?? "");
    }), n.append(F, P);
  }), n.reset(A);
  var V;
  n.init_select(A), n.reset(M), n.reset(f), n.template_effect(() => {
    n.set_class(g, 1, `h-1.5 w-1.5 rounded-full ${i() === 0 ? "bg-emerald-600" : "bg-amber-700"}`), n.set_text(_, `${n.get(r) ?? ""} words`), n.set_text(x, `${n.get(a) ?? ""} chars`), n.set_text(S, l() === "default" ? "Default" : `${l()}px`), V !== (V = l()) && (A.value = (A.__value = l()) ?? "", n.select_option(A, l()));
  }), n.event("change", A, (F) => {
    const O = F.currentTarget.value;
    u()(O === "default" ? "default" : Number(O));
  }), n.append(e, f), n.pop();
}
var V1 = n.from_html('<button type="button" class="absolute top-3 right-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-md border-0 bg-transparent text-stone-600 shadow-none transition-colors duration-150 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500" aria-label="Show problems sidebar" title="Show problems sidebar"><svg viewBox="0 0 20 20" aria-hidden="true" class="h-[18px] w-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"><rect x="3.5" y="3" width="13" height="14" rx="3"></rect><path d="M12.5 3v14"></path></svg></button>'), G1 = n.from_html('<div class="harper-editor @container flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[10px] border-[0.5px] border-[rgba(28,26,22,0.14)] bg-[#fbfaf6] text-stone-950 shadow-2xl shadow-stone-950/5"><div class="flex min-h-0 min-w-0 flex-1"><section class="relative min-w-0 flex-1 bg-[#fbfaf6]" aria-label="Document editor"><div class="h-full overflow-auto p-[34px_40px_56px] @max-[760px]:p-[28px_24px_42px]"><div class="mx-auto flex min-h-full max-w-[640px]"><div class="flex min-h-full w-full flex-1" spellcheck="false"></div></div></div> <!></section> <!></div> <!></div>');
function U1(e, t) {
  n.push(t, !1);
  const r = n.mutable_source(), a = n.mutable_source();
  let o = n.prop(t, "content", 8, ""), i = n.prop(t, "linter", 8), s = n.prop(t, "onReady", 8, () => null), l = n.prop(t, "defaultFontFamily", 8, "sans"), c = n.prop(t, "defaultFontSize", 8, "default"), u = n.prop(t, "onChange", 8, () => {
  }), d = n.prop(t, "onAddToDictionary", 8, null), f = n.prop(t, "onSetRuleEnabled", 8, null), h = n.prop(t, "onDisplayChange", 8, () => {
  }), p = n.mutable_source(), g = n.mutable_source(0), m = n.mutable_source(), b = n.mutable_source([]), y = n.mutable_source(null), v = n.mutable_source(o()), _ = n.mutable_source(M1(l())), C = n.mutable_source(gs(c())), x = n.mutable_source(o()), w = n.mutable_source(!1), M = n.mutable_source(!0), E = "automated", S = null;
  const z = 250 + 40;
  let I = new x1(
    async (L) => {
      const q = await i().organizedLints(L), ke = await Promise.all(Object.entries(q).map(async ([N, j]) => {
        const ne = await Promise.all(j.map((ue) => Yu(L, ue, i())));
        return j.forEach((ue) => {
          ue.free();
        }), [N, ne];
      })), xe = Object.fromEntries(ke);
      return se(), xe;
    },
    {
      addToUserDictionary: d() == null ? void 0 : async (L) => {
        await d()?.(L), await I.requestLintUpdate(!0), se();
      },
      setRuleEnabled: f() == null ? void 0 : async (L, q) => {
        await f()?.(L, q), await I.requestLintUpdate(!0), se();
      },
      ignoreLint: async (L) => {
        try {
          await i().ignoreLintHash(BigInt(L)), console.log(`Ignored ${L}`), I.update(), se();
        } catch (q) {
          console.error("Failed to ignore lint", q);
        }
      }
    }
  ), V = new ResizeObserver((L) => {
    for (let q of L)
      q.contentBoxSize[0].inlineSize < 640 ? $("automated") : ge("automated");
  }), F = n.mutable_source(null);
  async function O() {
    if (n.get(p) != null) {
      if (n.get(m) == null) {
        let { default: L } = await import("./chunks/quill-v-dZfs5K.js");
        n.set(m, new L(n.get(p), { formats: [], placeholder: "Start writing..." })), (n.get(m).container ?? n.get(m).root?.parentElement)?.classList.add("harper-editor-quill-container"), n.get(m).root?.classList.add("harper-editor-surface"), n.get(m).root?.setAttribute("data-enable-grammarly", "false"), n.get(m).root?.setAttribute("spellcheck", "false"), G(o(), !1), n.get(m).on("text-change", () => {
          ie(!0), te();
        });
      }
      for (let L of n.get(p).getElementsByTagName("p"))
        I.addTarget(L);
    }
  }
  function P(L) {
    if (typeof window > "u")
      return;
    n.set(y, L.lint.context_hash);
    const q = L.range;
    if (q)
      try {
        const ke = q.getBoundingClientRect(), xe = window.getSelection();
        xe && (xe.removeAllRanges(), xe.addRange(q.cloneRange()));
        const N = Math.max(10, window.innerHeight * 0.2), j = Math.max(0, window.scrollY + ke.top - N);
        window.scrollTo({ top: j, behavior: "smooth" });
      } catch (ke) {
        console.error("Failed to jump to lint", ke);
      }
  }
  function U(L) {
    return L.endsWith(`
`) ? L.slice(0, -1) : L;
  }
  function G(L, q) {
    if (n.get(m) == null) {
      n.set(v, L);
      return;
    }
    n.get(m).setText(L, "silent"), n.get(m).history?.clear(), ie(q);
  }
  function Z(L) {
    n.get(m) != null && (n.get(m).history?.cutoff(), n.get(m).setText(L, "user"), n.get(m).history?.cutoff());
  }
  function ie(L) {
    if (n.get(m) == null)
      return;
    const q = U(n.get(m).getText());
    q !== n.get(v) && (n.set(v, q), L && u()(q));
  }
  function X() {
    const L = /* @__PURE__ */ new Set();
    n.set(b, I.getLastIgnorableLintBoxes().filter((q) => L.has(q.lint) ? !1 : (L.add(q.lint), !0))), n.get(y) != null && !n.get(b).some((q) => q.lint.context_hash === n.get(y)) && n.set(y, null);
  }
  function se() {
    requestAnimationFrame(() => {
      requestAnimationFrame(X);
    }), S != null && clearTimeout(S), S = setTimeout(X, 150);
  }
  function te() {
    O(), I.update(), se();
  }
  function re() {
    ie(!0), te();
  }
  async function ce() {
    ie(!1);
    const L = n.get(v), q = i(), ke = await q.organizedLints(L, { dedup: !1 }), xe = Object.values(ke).flat();
    xe.length !== 0 && await q.ignoreLints(L, xe);
  }
  async function ge(L = "automated") {
    E === "user" && L === "automated" || (await jc(), E = L, n.set(M, !0));
  }
  function $(L = "automated") {
    E === "user" && L === "automated" || (E = L, n.get(M) !== !1 && n.set(M, !1));
  }
  n.legacy_pre_effect(
    () => (n.deep_read_state(h()), n.get(_), n.get(C)),
    () => {
      h()({ fontFamily: n.get(_), fontSize: n.get(C) });
    }
  ), n.legacy_pre_effect(() => n.get(_), () => {
    n.set(r, S1(n.get(_)));
  }), n.legacy_pre_effect(() => (n.get(r), n.get(C)), () => {
    n.set(a, `--harper-editor-font-family: ${n.get(r)};` + (n.get(C) === "default" ? "" : ` --harper-editor-font-size: ${n.get(C)}px;`));
  }), n.legacy_pre_effect(
    () => (n.deep_read_state(i()), n.get(m), n.get(w), n.deep_read_state(s())),
    () => {
      i() != null && n.get(m) != null && (n.get(w) || (n.set(w, !0), s()()));
    }
  ), n.legacy_pre_effect(() => n.get(F), () => {
    n.get(F) != null && V.observe(n.get(F));
  }), n.legacy_pre_effect(
    () => (n.get(g), n.deep_read_state(i()), n.deep_read_state(o()), n.get(p)),
    () => {
      const L = n.update_pre(g), q = i();
      n.set(b, []), (async () => {
        try {
          await q.setup(), await q.lint(o());
        } catch (ke) {
          console.error("Failed to initialize linter", ke);
        }
        L === n.get(g) && n.get(p) != null && I.update();
      })();
    }
  ), n.legacy_pre_effect(() => n.get(p), () => {
    n.get(p) != null && (new MutationObserver(O).observe(n.get(p), { childList: !0, subtree: !0 }), O());
  }), n.legacy_pre_effect(
    () => (n.get(m), n.deep_read_state(o()), n.get(x), n.get(v)),
    () => {
      n.get(m) != null && o() !== n.get(x) && (n.set(x, o()), o() !== n.get(v) && (G(o(), !1), te()));
    }
  ), n.legacy_pre_effect_reset();
  var de = { replaceAll: Z };
  n.init();
  var pe = G1(), _e = n.child(pe), Fe = n.child(_e), ve = n.child(Fe), dt = n.child(ve), tt = n.child(dt);
  n.bind_this(
    tt,
    (L) => n.set(
      // Quill always keeps a trailing document newline; callers expect plain text.
      // Text placed by the host (such as a restored draft) is a fresh document, not an
      // edit. Without this, pressing undo once too often rolls back the load and empties the editor.
      /**
       * Host hook: replace the whole text as one edit of the reader's own, so that it reaches
       * `onChange` and can be taken back with undo. Used for "clear".
       */
      // Close the current undo step first, so undo restores exactly what was replaced.
      // Keep the public text state and `onChange` callback in sync with Quill's document.
      // The lint framework owns highlight DOM, so copy its latest boxes into Svelte state.
      // A problem that wraps onto several lines gets one box per line. List and count it once.
      // Lint decorations settle across layout frames; the timeout catches slower browser updates.
      // Refresh target elements, ask the framework to lint, then mirror its current boxes.
      // Suggestions and ignores mutate the document/lint state outside Quill's text-change path.
      p,
      L
    ),
    () => n.get(p)
  ), n.reset(dt), n.reset(ve);
  var ft = n.sibling(ve, 2);
  {
    let L = n.derived_safe_equal(() => !n.get(M));
    yu(ft, {
      get active() {
        return n.get(L);
      },
      delayMs: z,
      children: (q, ke) => {
        var xe = V1();
        n.transition(1, xe, () => hr, () => ({ duration: 120 })), n.event("click", xe, () => ge("user")), n.append(q, xe);
      },
      $$slots: { default: !0 }
    });
  }
  n.reset(Fe);
  var Dr = n.sibling(Fe, 2);
  {
    var er = (L) => {
      D1(L, {
        get lintBoxes() {
          return n.get(b);
        },
        get activeLintId() {
          return n.get(y);
        },
        focusLint: P,
        onActivate: (q) => n.set(y, q == null ? null : q.lint.context_hash),
        onApplied: re,
        onIgnored: re,
        onIgnoreAll: ce,
        onHideSidebar: () => $("user")
      });
    };
    n.if(Dr, (L) => {
      n.get(M) && L(er);
    });
  }
  n.reset(_e);
  var Hr = n.sibling(_e, 2);
  return $1(Hr, {
    get text() {
      return n.get(v);
    },
    get problemCount() {
      return n.get(b), n.untrack(() => n.get(b).length);
    },
    get fontFamily() {
      return n.get(_);
    },
    get fontSize() {
      return n.get(C);
    },
    onFontFamilyChange: (L) => n.set(_, L),
    onFontSizeChange: (L) => n.set(C, gs(L))
  }), n.reset(pe), n.bind_this(pe, (L) => n.set(F, L), () => n.get(F)), n.template_effect(() => n.set_style(pe, n.get(a))), n.append(e, pe), n.bind_prop(t, "replaceAll", Z), n.pop(de);
}
const Y1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: U1
}, Symbol.toStringTag, { value: "Module" }));
var X1 = n.from_html("<div><!></div>"), K1 = n.from_html(`<div class="flex h-full max-w-full flex-col items-center justify-center gap-2"><!> <p class="text-sm">Loading Harper's grammar engine...</p></div>`), J1 = n.from_html("<!> <!>", 1);
function ig(e, t) {
  let r = n.prop(t, "content", 8, ""), a = n.prop(t, "linter", 8), o = n.prop(t, "defaultFontFamily", 8, "sans"), i = n.prop(t, "defaultFontSize", 8, "default"), s = n.prop(t, "onChange", 8, () => {
  }), l = Promise.resolve().then(() => Y1), c = n.mutable_source(!0);
  function u() {
    n.set(c, !1);
  }
  var d = J1(), f = n.first_child(d);
  n.await(f, () => l, null, (g, m) => {
    var b = n.derived_safe_equal(() => {
      var { default: C } = n.get(m);
      return { Editor: C };
    }), y = n.derived_safe_equal(() => n.get(b).Editor), v = X1(), _ = n.child(v);
    n.get(y)(_, {
      get content() {
        return r();
      },
      get linter() {
        return a();
      },
      onReady: u,
      get defaultFontFamily() {
        return o();
      },
      get defaultFontSize() {
        return i();
      },
      get onChange() {
        return s();
      }
    }), n.reset(v), n.template_effect(() => n.set_class(v, 1, `flex-row h-full w-full ${n.get(c) ? "hidden" : "flex"}`)), n.append(g, v);
  });
  var h = n.sibling(f, 2);
  {
    var p = (g) => {
      var m = K1(), b = n.child(m);
      bu(b, { color: "green" }), n.next(2), n.reset(m), n.append(g, m);
    };
    n.if(h, (g) => {
      n.get(c) && g(p);
    });
  }
  n.append(e, d);
}
export {
  U1 as Editor,
  ig as LazyEditor,
  I1 as LintCard,
  D1 as LintSidebar
};
