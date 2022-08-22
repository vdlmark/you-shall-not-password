var ot = Object.defineProperty;
var rt = (n, t, e) => t in n ? ot(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var z = (n, t, e) => (rt(n, typeof t != "symbol" ? t + "" : t, e), e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, L = Symbol(), B = /* @__PURE__ */ new WeakMap();
class Y {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== L)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (j && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = B.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && B.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const lt = (n) => new Y(typeof n == "string" ? n : n + "", void 0, L), ht = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((i, s, r) => i + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[r + 1], n[0]);
  return new Y(e, n, L);
}, at = (n, t) => {
  j ? n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e) => {
    const i = document.createElement("style"), s = window.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, n.appendChild(i);
  });
}, D = j ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules)
    e += i.cssText;
  return lt(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var N;
const V = window.trustedTypes, dt = V ? V.emptyScript : "", W = window.reactiveElementPolyfillSupport, I = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? dt : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, tt = (n, t) => t !== n && (t == t || n == n), O = { attribute: !0, type: String, converter: I, reflect: !1, hasChanged: tt };
class f extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(t) {
    var e;
    (e = this.h) !== null && e !== void 0 || (this.h = []), this.h.push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((e, i) => {
      const s = this._$Ep(i, e);
      s !== void 0 && (this._$Ev.set(s, i), t.push(s));
    }), t;
  }
  static createProperty(t, e = O) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const i = typeof t == "symbol" ? Symbol() : "__" + t, s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && Object.defineProperty(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return { get() {
      return this[e];
    }, set(s) {
      const r = this[t];
      this[e] = s, this.requestUpdate(t, r, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || O;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, i = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const s of i)
        this.createProperty(s, e[s]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i)
        e.unshift(D(s));
    } else
      t !== void 0 && e.push(D(t));
    return e;
  }
  static _$Ep(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, i;
    ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) === null || i === void 0 || i.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return at(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) === null || i === void 0 ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) === null || i === void 0 ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EO(t, e, i = O) {
    var s, r;
    const o = this.constructor._$Ep(t, i);
    if (o !== void 0 && i.reflect === !0) {
      const d = ((r = (s = i.converter) === null || s === void 0 ? void 0 : s.toAttribute) !== null && r !== void 0 ? r : I.toAttribute)(e, i.type);
      this._$El = t, d == null ? this.removeAttribute(o) : this.setAttribute(o, d), this._$El = null;
    }
  }
  _$AK(t, e) {
    var i, s;
    const r = this.constructor, o = r._$Ev.get(t);
    if (o !== void 0 && this._$El !== o) {
      const d = r.getPropertyOptions(o), l = d.converter, h = (s = (i = l == null ? void 0 : l.fromAttribute) !== null && i !== void 0 ? i : typeof l == "function" ? l : null) !== null && s !== void 0 ? s : I.fromAttribute;
      this._$El = o, this[o] = h(e, d.type), this._$El = null;
    }
  }
  requestUpdate(t, e, i) {
    let s = !0;
    t !== void 0 && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || tt)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), i.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, i))) : s = !1), !this.isUpdatePending && s && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((s, r) => this[r] = s), this._$Ei = void 0);
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (t = this._$ES) === null || t === void 0 || t.forEach((s) => {
        var r;
        return (r = s.hostUpdate) === null || r === void 0 ? void 0 : r.call(s);
      }), this.update(i)) : this._$Ek();
    } catch (s) {
      throw e = !1, this._$Ek(), s;
    }
    e && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
      var s;
      return (s = i.hostUpdated) === null || s === void 0 ? void 0 : s.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 && (this._$EC.forEach((e, i) => this._$EO(i, this[i], e)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
f.finalized = !0, f.elementProperties = /* @__PURE__ */ new Map(), f.elementStyles = [], f.shadowRootOptions = { mode: "open" }, W == null || W({ ReactiveElement: f }), ((N = globalThis.reactiveElementVersions) !== null && N !== void 0 ? N : globalThis.reactiveElementVersions = []).push("1.3.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var R;
const g = globalThis.trustedTypes, q = g ? g.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, v = `lit$${(Math.random() + "").slice(9)}$`, et = "?" + v, ct = `<${et}>`, m = document, w = (n = "") => m.createComment(n), C = (n) => n === null || typeof n != "object" && typeof n != "function", it = Array.isArray, ut = (n) => it(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, J = /-->/g, K = />/g, _ = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Z = /'/g, F = /"/g, st = /^(?:script|style|textarea|title)$/i, pt = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), $t = pt(1), y = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), G = /* @__PURE__ */ new WeakMap(), vt = (n, t, e) => {
  var i, s;
  const r = (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : t;
  let o = r._$litPart$;
  if (o === void 0) {
    const d = (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0 ? s : null;
    r._$litPart$ = o = new P(t.insertBefore(w(), d), d, void 0, e != null ? e : {});
  }
  return o._$AI(n), o;
}, A = m.createTreeWalker(m, 129, null, !1), _t = (n, t) => {
  const e = n.length - 1, i = [];
  let s, r = t === 2 ? "<svg>" : "", o = S;
  for (let l = 0; l < e; l++) {
    const h = n[l];
    let $, a, c = -1, p = 0;
    for (; p < h.length && (o.lastIndex = p, a = o.exec(h), a !== null); )
      p = o.lastIndex, o === S ? a[1] === "!--" ? o = J : a[1] !== void 0 ? o = K : a[2] !== void 0 ? (st.test(a[2]) && (s = RegExp("</" + a[2], "g")), o = _) : a[3] !== void 0 && (o = _) : o === _ ? a[0] === ">" ? (o = s != null ? s : S, c = -1) : a[1] === void 0 ? c = -2 : (c = o.lastIndex - a[2].length, $ = a[1], o = a[3] === void 0 ? _ : a[3] === '"' ? F : Z) : o === F || o === Z ? o = _ : o === J || o === K ? o = S : (o = _, s = void 0);
    const U = o === _ && n[l + 1].startsWith("/>") ? " " : "";
    r += o === S ? h + ct : c >= 0 ? (i.push($), h.slice(0, c) + "$lit$" + h.slice(c) + v + U) : h + v + (c === -2 ? (i.push(void 0), l) : U);
  }
  const d = r + (n[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [q !== void 0 ? q.createHTML(d) : d, i];
};
class x {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let r = 0, o = 0;
    const d = t.length - 1, l = this.parts, [h, $] = _t(t, e);
    if (this.el = x.createElement(h, i), A.currentNode = this.el.content, e === 2) {
      const a = this.el.content, c = a.firstChild;
      c.remove(), a.append(...c.childNodes);
    }
    for (; (s = A.nextNode()) !== null && l.length < d; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) {
          const a = [];
          for (const c of s.getAttributeNames())
            if (c.endsWith("$lit$") || c.startsWith(v)) {
              const p = $[o++];
              if (a.push(c), p !== void 0) {
                const U = s.getAttribute(p.toLowerCase() + "$lit$").split(v), H = /([.?@])?(.*)/.exec(p);
                l.push({ type: 1, index: r, name: H[2], strings: U, ctor: H[1] === "." ? At : H[1] === "?" ? mt : H[1] === "@" ? yt : T });
              } else
                l.push({ type: 6, index: r });
            }
          for (const c of a)
            s.removeAttribute(c);
        }
        if (st.test(s.tagName)) {
          const a = s.textContent.split(v), c = a.length - 1;
          if (c > 0) {
            s.textContent = g ? g.emptyScript : "";
            for (let p = 0; p < c; p++)
              s.append(a[p], w()), A.nextNode(), l.push({ type: 2, index: ++r });
            s.append(a[c], w());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === et)
          l.push({ type: 2, index: r });
        else {
          let a = -1;
          for (; (a = s.data.indexOf(v, a + 1)) !== -1; )
            l.push({ type: 7, index: r }), a += v.length - 1;
        }
      r++;
    }
  }
  static createElement(t, e) {
    const i = m.createElement("template");
    return i.innerHTML = t, i;
  }
}
function E(n, t, e = n, i) {
  var s, r, o, d;
  if (t === y)
    return t;
  let l = i !== void 0 ? (s = e._$Cl) === null || s === void 0 ? void 0 : s[i] : e._$Cu;
  const h = C(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== h && ((r = l == null ? void 0 : l._$AO) === null || r === void 0 || r.call(l, !1), h === void 0 ? l = void 0 : (l = new h(n), l._$AT(n, e, i)), i !== void 0 ? ((o = (d = e)._$Cl) !== null && o !== void 0 ? o : d._$Cl = [])[i] = l : e._$Cu = l), l !== void 0 && (t = E(n, l._$AS(n, t.values), l, i)), t;
}
class ft {
  constructor(t, e) {
    this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t) {
    var e;
    const { el: { content: i }, parts: s } = this._$AD, r = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : m).importNode(i, !0);
    A.currentNode = r;
    let o = A.nextNode(), d = 0, l = 0, h = s[0];
    for (; h !== void 0; ) {
      if (d === h.index) {
        let $;
        h.type === 2 ? $ = new P(o, o.nextSibling, this, t) : h.type === 1 ? $ = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && ($ = new Et(o, this, t)), this.v.push($), h = s[++l];
      }
      d !== (h == null ? void 0 : h.index) && (o = A.nextNode(), d++);
    }
    return r;
  }
  m(t) {
    let e = 0;
    for (const i of this.v)
      i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class P {
  constructor(t, e, i, s) {
    var r;
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$C_ = (r = s == null ? void 0 : s.isConnected) === null || r === void 0 || r;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$C_;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = E(this, t, e), C(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== y && this.T(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.k(t) : ut(t) ? this.S(t) : this.T(t);
  }
  j(t, e = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, e);
  }
  k(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.j(t));
  }
  T(t) {
    this._$AH !== u && C(this._$AH) ? this._$AA.nextSibling.data = t : this.k(m.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var e;
    const { values: i, _$litType$: s } = t, r = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = x.createElement(s.h, this.options)), s);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.m(i);
    else {
      const o = new ft(r, this), d = o.p(this.options);
      o.m(i), this.k(d), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = G.get(t.strings);
    return e === void 0 && G.set(t.strings, e = new x(t)), e;
  }
  S(t) {
    it(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const r of t)
      s === e.length ? e.push(i = new P(this.j(w()), this.j(w()), this, this.options)) : i = e[s], i._$AI(r), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$C_ = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class T {
  constructor(t, e, i, s, r) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = u;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, s) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      t = E(this, t, e, 0), o = !C(t) || t !== this._$AH && t !== y, o && (this._$AH = t);
    else {
      const d = t;
      let l, h;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        h = E(this, d[i + l], e, l), h === y && (h = this._$AH[l]), o || (o = !C(h) || h !== this._$AH[l]), h === u ? t = u : t !== u && (t += (h != null ? h : "") + r[l + 1]), this._$AH[l] = h;
    }
    o && !s && this.P(t);
  }
  P(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class At extends T {
  constructor() {
    super(...arguments), this.type = 3;
  }
  P(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
const gt = g ? g.emptyScript : "";
class mt extends T {
  constructor() {
    super(...arguments), this.type = 4;
  }
  P(t) {
    t && t !== u ? this.element.setAttribute(this.name, gt) : this.element.removeAttribute(this.name);
  }
}
class yt extends T {
  constructor(t, e, i, s, r) {
    super(t, e, i, s, r), this.type = 5;
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = E(this, t, e, 0)) !== null && i !== void 0 ? i : u) === y)
      return;
    const s = this._$AH, r = t === u && s !== u || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== u && (s === u || r);
    r && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && i !== void 0 ? i : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Et {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    E(this, t);
  }
}
const Q = window.litHtmlPolyfillSupport;
Q == null || Q(x, P), ((R = globalThis.litHtmlVersions) !== null && R !== void 0 ? R : globalThis.litHtmlVersions = []).push("2.2.7");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var M, k;
class b extends f {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = i.firstChild), i;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = vt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return y;
  }
}
b.finalized = !0, b._$litElement$ = !0, (M = globalThis.litElementHydrateSupport) === null || M === void 0 || M.call(globalThis, { LitElement: b });
const X = globalThis.litElementPolyfillSupport;
X == null || X({ LitElement: b });
((k = globalThis.litElementVersions) !== null && k !== void 0 ? k : globalThis.litElementVersions = []).push("3.2.2");
class nt extends b {
  constructor() {
    super(), this.audio = !1, this.width = 640, this.height = 480;
  }
  willUpdate() {
    this.contraints = {
      audio: this.audio,
      video: {
        width: this.width,
        height: this.height
      }
    }, this.deviceId && (console.info("Using deviceId: ", this.deviceId), this.contraints.video.deviceId = this.deviceId), this.getMedia();
  }
  getMedia() {
    navigator.mediaDevices.getUserMedia(this.contraints).then((t) => {
      const e = this.renderRoot.querySelector("video");
      e.srcObject = t, e.onloadedmetadata = function(i) {
        e.play();
      };
    }).catch((t) => {
      console.error(t);
    });
  }
  render() {
    return $t`
      <video>Webcam stream goes here, ty</video>
    `;
  }
  static get styles() {
    return ht`
      video {
        width: 100%;
        height: 100%;
      }
    `;
  }
}
z(nt, "properties", {
  audio: { type: Boolean },
  width: { type: Number },
  height: { type: Number },
  deviceId: { type: String }
});
window.customElements.define("io-webcam-view", nt);
export {
  nt as iOWebcamView
};
