/*! For license information please see main.6bc81107.js.LICENSE.txt */
( () => {
    "use strict";
    var e = {
        4: (e, t, n) => {
            var r = n(853)
              , i = n(43)
              , a = n(950);
            function o(e) {
                var t = "https://react.dev/errors/" + e;
                if (1 < arguments.length) {
                    t += "?args[]=" + encodeURIComponent(arguments[1]);
                    for (var n = 2; n < arguments.length; n++)
                        t += "&args[]=" + encodeURIComponent(arguments[n])
                }
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            function s(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }
            var l = Symbol.for("react.element")
              , u = Symbol.for("react.transitional.element")
              , c = Symbol.for("react.portal")
              , d = Symbol.for("react.fragment")
              , f = Symbol.for("react.strict_mode")
              , h = Symbol.for("react.profiler")
              , p = Symbol.for("react.provider")
              , m = Symbol.for("react.consumer")
              , g = Symbol.for("react.context")
              , v = Symbol.for("react.forward_ref")
              , y = Symbol.for("react.suspense")
              , b = Symbol.for("react.suspense_list")
              , w = Symbol.for("react.memo")
              , S = Symbol.for("react.lazy");
            Symbol.for("react.scope"),
            Symbol.for("react.debug_trace_mode");
            var k = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"),
            Symbol.for("react.tracing_marker");
            var x = Symbol.for("react.memo_cache_sentinel")
              , P = Symbol.iterator;
            function E(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = P && e[P] || e["@@iterator"]) ? e : null
            }
            var C = Symbol.for("react.client.reference");
            function T(e) {
                if (null == e)
                    return null;
                if ("function" === typeof e)
                    return e.$$typeof === C ? null : e.displayName || e.name || null;
                if ("string" === typeof e)
                    return e;
                switch (e) {
                case d:
                    return "Fragment";
                case c:
                    return "Portal";
                case h:
                    return "Profiler";
                case f:
                    return "StrictMode";
                case y:
                    return "Suspense";
                case b:
                    return "SuspenseList"
                }
                if ("object" === typeof e)
                    switch (e.$$typeof) {
                    case g:
                        return (e.displayName || "Context") + ".Provider";
                    case m:
                        return (e._context.displayName || "Context") + ".Consumer";
                    case v:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                    case w:
                        return null !== (t = e.displayName || null) ? t : T(e.type) || "Memo";
                    case S:
                        t = e._payload,
                        e = e._init;
                        try {
                            return T(e(t))
                        } catch (n) {}
                    }
                return null
            }
            var A, M, D = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.assign;
            function R(e) {
                if (void 0 === A)
                    try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        A = t && t[1] || "",
                        M = -1 < n.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
                    }
                return "\n" + A + e + M
            }
            var N = !1;
            function O(e, t) {
                if (!e || N)
                    return "";
                N = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    var r = {
                        DetermineComponentFrameRoot: function() {
                            try {
                                if (t) {
                                    var n = function() {
                                        throw Error()
                                    };
                                    if (Object.defineProperty(n.prototype, "props", {
                                        set: function() {
                                            throw Error()
                                        }
                                    }),
                                    "object" === typeof Reflect && Reflect.construct) {
                                        try {
                                            Reflect.construct(n, [])
                                        } catch (i) {
                                            var r = i
                                        }
                                        Reflect.construct(e, [], n)
                                    } else {
                                        try {
                                            n.call()
                                        } catch (a) {
                                            r = a
                                        }
                                        e.call(n.prototype)
                                    }
                                } else {
                                    try {
                                        throw Error()
                                    } catch (o) {
                                        r = o
                                    }
                                    (n = e()) && "function" === typeof n.catch && n.catch((function() {}
                                    ))
                                }
                            } catch (s) {
                                if (s && r && "string" === typeof s.stack)
                                    return [s.stack, r.stack]
                            }
                            return [null, null]
                        }
                    };
                    r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                    var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
                    i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                        value: "DetermineComponentFrameRoot"
                    });
                    var a = r.DetermineComponentFrameRoot()
                      , o = a[0]
                      , s = a[1];
                    if (o && s) {
                        var l = o.split("\n")
                          , u = s.split("\n");
                        for (i = r = 0; r < l.length && !l[r].includes("DetermineComponentFrameRoot"); )
                            r++;
                        for (; i < u.length && !u[i].includes("DetermineComponentFrameRoot"); )
                            i++;
                        if (r === l.length || i === u.length)
                            for (r = l.length - 1,
                            i = u.length - 1; 1 <= r && 0 <= i && l[r] !== u[i]; )
                                i--;
                        for (; 1 <= r && 0 <= i; r--,
                        i--)
                            if (l[r] !== u[i]) {
                                if (1 !== r || 1 !== i)
                                    do {
                                        if (r--,
                                        0 > --i || l[r] !== u[i]) {
                                            var c = "\n" + l[r].replace(" at new ", " at ");
                                            return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)),
                                            c
                                        }
                                    } while (1 <= r && 0 <= i);
                                break
                            }
                    }
                } finally {
                    N = !1,
                    Error.prepareStackTrace = n
                }
                return (n = e ? e.displayName || e.name : "") ? R(n) : ""
            }
            function _(e) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    return R(e.type);
                case 16:
                    return R("Lazy");
                case 13:
                    return R("Suspense");
                case 19:
                    return R("SuspenseList");
                case 0:
                case 15:
                    return e = O(e.type, !1);
                case 11:
                    return e = O(e.type.render, !1);
                case 1:
                    return e = O(e.type, !0);
                default:
                    return ""
                }
            }
            function z(e) {
                try {
                    var t = "";
                    do {
                        t += _(e),
                        e = e.return
                    } while (e);
                    return t
                } catch (n) {
                    return "\nError generating stack: " + n.message + "\n" + n.stack
                }
            }
            function F(e) {
                var t = e
                  , n = e;
                if (e.alternate)
                    for (; t.return; )
                        t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (4098 & (t = e).flags) && (n = t.return),
                        e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }
            function V(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)),
                    null !== t)
                        return t.dehydrated
                }
                return null
            }
            function I(e) {
                if (F(e) !== e)
                    throw Error(o(188))
            }
            function j(e) {
                var t = e.tag;
                if (5 === t || 26 === t || 27 === t || 6 === t)
                    return e;
                for (e = e.child; null !== e; ) {
                    if (null !== (t = j(e)))
                        return t;
                    e = e.sibling
                }
                return null
            }
            var B = Array.isArray
              , U = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
              , $ = {
                pending: !1,
                data: null,
                method: null,
                action: null
            }
              , W = []
              , H = -1;
            function q(e) {
                return {
                    current: e
                }
            }
            function Q(e) {
                0 > H || (e.current = W[H],
                W[H] = null,
                H--)
            }
            function Y(e, t) {
                H++,
                W[H] = e.current,
                e.current = t
            }
            var K = q(null)
              , X = q(null)
              , G = q(null)
              , Z = q(null);
            function J(e, t) {
                switch (Y(G, t),
                Y(X, e),
                Y(K, null),
                e = t.nodeType) {
                case 9:
                case 11:
                    t = (t = t.documentElement) && (t = t.namespaceURI) ? Xc(t) : 0;
                    break;
                default:
                    if (t = (e = 8 === e ? t.parentNode : t).tagName,
                    e = e.namespaceURI)
                        t = Gc(e = Xc(e), t);
                    else
                        switch (t) {
                        case "svg":
                            t = 1;
                            break;
                        case "math":
                            t = 2;
                            break;
                        default:
                            t = 0
                        }
                }
                Q(K),
                Y(K, t)
            }
            function ee() {
                Q(K),
                Q(X),
                Q(G)
            }
            function te(e) {
                null !== e.memoizedState && Y(Z, e);
                var t = K.current
                  , n = Gc(t, e.type);
                t !== n && (Y(X, e),
                Y(K, n))
            }
            function ne(e) {
                X.current === e && (Q(K),
                Q(X)),
                Z.current === e && (Q(Z),
                zd._currentValue = $)
            }
            var re = Object.prototype.hasOwnProperty
              , ie = r.unstable_scheduleCallback
              , ae = r.unstable_cancelCallback
              , oe = r.unstable_shouldYield
              , se = r.unstable_requestPaint
              , le = r.unstable_now
              , ue = r.unstable_getCurrentPriorityLevel
              , ce = r.unstable_ImmediatePriority
              , de = r.unstable_UserBlockingPriority
              , fe = r.unstable_NormalPriority
              , he = r.unstable_LowPriority
              , pe = r.unstable_IdlePriority
              , me = r.log
              , ge = r.unstable_setDisableYieldValue
              , ve = null
              , ye = null;
            function be(e) {
                if ("function" === typeof me && ge(e),
                ye && "function" === typeof ye.setStrictMode)
                    try {
                        ye.setStrictMode(ve, e)
                    } catch (t) {}
            }
            var we = Math.clz32 ? Math.clz32 : function(e) {
                return 0 === (e >>>= 0) ? 32 : 31 - (Se(e) / ke | 0) | 0
            }
              , Se = Math.log
              , ke = Math.LN2;
            var xe = 128
              , Pe = 4194304;
            function Ee(e) {
                var t = 42 & e;
                if (0 !== t)
                    return t;
                switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                    return 64;
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return 4194176 & e;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return 62914560 & e;
                case 67108864:
                    return 67108864;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 0;
                default:
                    return e
                }
            }
            function Ce(e, t) {
                var n = e.pendingLanes;
                if (0 === n)
                    return 0;
                var r = 0
                  , i = e.suspendedLanes
                  , a = e.pingedLanes
                  , o = e.warmLanes;
                e = 0 !== e.finishedLanes;
                var s = 134217727 & n;
                return 0 !== s ? 0 !== (n = s & ~i) ? r = Ee(n) : 0 !== (a &= s) ? r = Ee(a) : e || 0 !== (o = s & ~o) && (r = Ee(o)) : 0 !== (s = n & ~i) ? r = Ee(s) : 0 !== a ? r = Ee(a) : e || 0 !== (o = n & ~o) && (r = Ee(o)),
                0 === r ? 0 : 0 !== t && t !== r && 0 === (t & i) && ((i = r & -r) >= (o = t & -t) || 32 === i && 0 !== (4194176 & o)) ? t : r
            }
            function Te(e, t) {
                return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
            }
            function Ae(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 4:
                case 8:
                    return t + 250;
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                default:
                    return -1
                }
            }
            function Me() {
                var e = xe;
                return 0 === (4194176 & (xe <<= 1)) && (xe = 128),
                e
            }
            function De() {
                var e = Pe;
                return 0 === (62914560 & (Pe <<= 1)) && (Pe = 4194304),
                e
            }
            function Le(e) {
                for (var t = [], n = 0; 31 > n; n++)
                    t.push(e);
                return t
            }
            function Re(e, t) {
                e.pendingLanes |= t,
                268435456 !== t && (e.suspendedLanes = 0,
                e.pingedLanes = 0,
                e.warmLanes = 0)
            }
            function Ne(e, t, n) {
                e.pendingLanes |= t,
                e.suspendedLanes &= ~t;
                var r = 31 - we(t);
                e.entangledLanes |= t,
                e.entanglements[r] = 1073741824 | e.entanglements[r] | 4194218 & n
            }
            function Oe(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n; ) {
                    var r = 31 - we(n)
                      , i = 1 << r;
                    i & t | e[r] & t && (e[r] |= t),
                    n &= ~i
                }
            }
            function _e(e) {
                return 2 < (e &= -e) ? 8 < e ? 0 !== (134217727 & e) ? 32 : 268435456 : 8 : 2
            }
            function ze() {
                var e = U.p;
                return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Gd(e.type)
            }
            var Fe = Math.random().toString(36).slice(2)
              , Ve = "__reactFiber$" + Fe
              , Ie = "__reactProps$" + Fe
              , je = "__reactContainer$" + Fe
              , Be = "__reactEvents$" + Fe
              , Ue = "__reactListeners$" + Fe
              , $e = "__reactHandles$" + Fe
              , We = "__reactResources$" + Fe
              , He = "__reactMarker$" + Fe;
            function qe(e) {
                delete e[Ve],
                delete e[Ie],
                delete e[Be],
                delete e[Ue],
                delete e[$e]
            }
            function Qe(e) {
                var t = e[Ve];
                if (t)
                    return t;
                for (var n = e.parentNode; n; ) {
                    if (t = n[je] || n[Ve]) {
                        if (n = t.alternate,
                        null !== t.child || null !== n && null !== n.child)
                            for (e = ld(e); null !== e; ) {
                                if (n = e[Ve])
                                    return n;
                                e = ld(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }
            function Ye(e) {
                if (e = e[Ve] || e[je]) {
                    var t = e.tag;
                    if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t)
                        return e
                }
                return null
            }
            function Ke(e) {
                var t = e.tag;
                if (5 === t || 26 === t || 27 === t || 6 === t)
                    return e.stateNode;
                throw Error(o(33))
            }
            function Xe(e) {
                var t = e[We];
                return t || (t = e[We] = {
                    hoistableStyles: new Map,
                    hoistableScripts: new Map
                }),
                t
            }
            function Ge(e) {
                e[He] = !0
            }
            var Ze = new Set
              , Je = {};
            function et(e, t) {
                tt(e, t),
                tt(e + "Capture", t)
            }
            function tt(e, t) {
                for (Je[e] = t,
                e = 0; e < t.length; e++)
                    Ze.add(t[e])
            }
            var nt = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement)
              , rt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
              , it = {}
              , at = {};
            function ot(e, t, n) {
                if (i = t,
                re.call(at, i) || !re.call(it, i) && (rt.test(i) ? at[i] = !0 : (it[i] = !0,
                0)))
                    if (null === n)
                        e.removeAttribute(t);
                    else {
                        switch (typeof n) {
                        case "undefined":
                        case "function":
                        case "symbol":
                            return void e.removeAttribute(t);
                        case "boolean":
                            var r = t.toLowerCase().slice(0, 5);
                            if ("data-" !== r && "aria-" !== r)
                                return void e.removeAttribute(t)
                        }
                        e.setAttribute(t, "" + n)
                    }
                var i
            }
            function st(e, t, n) {
                if (null === n)
                    e.removeAttribute(t);
                else {
                    switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        return void e.removeAttribute(t)
                    }
                    e.setAttribute(t, "" + n)
                }
            }
            function lt(e, t, n, r) {
                if (null === r)
                    e.removeAttribute(n);
                else {
                    switch (typeof r) {
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        return void e.removeAttribute(n)
                    }
                    e.setAttributeNS(t, n, "" + r)
                }
            }
            function ut(e) {
                switch (typeof e) {
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                    return e;
                default:
                    return ""
                }
            }
            function ct(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }
            function dt(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = ct(e) ? "checked" : "value"
                      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
                      , r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var i = n.get
                          , a = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return i.call(this)
                            },
                            set: function(e) {
                                r = "" + e,
                                a.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }),
                        {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[t]
                            }
                        }
                    }
                }(e))
            }
            function ft(e) {
                if (!e)
                    return !1;
                var t = e._valueTracker;
                if (!t)
                    return !0;
                var n = t.getValue()
                  , r = "";
                return e && (r = ct(e) ? e.checked ? "true" : "false" : e.value),
                (e = r) !== n && (t.setValue(e),
                !0)
            }
            function ht(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }
            var pt = /[\n"\\]/g;
            function mt(e) {
                return e.replace(pt, (function(e) {
                    return "\\" + e.charCodeAt(0).toString(16) + " "
                }
                ))
            }
            function gt(e, t, n, r, i, a, o, s) {
                e.name = "",
                null != o && "function" !== typeof o && "symbol" !== typeof o && "boolean" !== typeof o ? e.type = o : e.removeAttribute("type"),
                null != t ? "number" === o ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + ut(t)) : e.value !== "" + ut(t) && (e.value = "" + ut(t)) : "submit" !== o && "reset" !== o || e.removeAttribute("value"),
                null != t ? yt(e, o, ut(t)) : null != n ? yt(e, o, ut(n)) : null != r && e.removeAttribute("value"),
                null == i && null != a && (e.defaultChecked = !!a),
                null != i && (e.checked = i && "function" !== typeof i && "symbol" !== typeof i),
                null != s && "function" !== typeof s && "symbol" !== typeof s && "boolean" !== typeof s ? e.name = "" + ut(s) : e.removeAttribute("name")
            }
            function vt(e, t, n, r, i, a, o, s) {
                if (null != a && "function" !== typeof a && "symbol" !== typeof a && "boolean" !== typeof a && (e.type = a),
                null != t || null != n) {
                    if (!("submit" !== a && "reset" !== a || void 0 !== t && null !== t))
                        return;
                    n = null != n ? "" + ut(n) : "",
                    t = null != t ? "" + ut(t) : n,
                    s || t === e.value || (e.value = t),
                    e.defaultValue = t
                }
                r = "function" !== typeof (r = null != r ? r : i) && "symbol" !== typeof r && !!r,
                e.checked = s ? e.checked : !!r,
                e.defaultChecked = !!r,
                null != o && "function" !== typeof o && "symbol" !== typeof o && "boolean" !== typeof o && (e.name = o)
            }
            function yt(e, t, n) {
                "number" === t && ht(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
            }
            function bt(e, t, n, r) {
                if (e = e.options,
                t) {
                    t = {};
                    for (var i = 0; i < n.length; i++)
                        t["$" + n[i]] = !0;
                    for (n = 0; n < e.length; n++)
                        i = t.hasOwnProperty("$" + e[n].value),
                        e[n].selected !== i && (e[n].selected = i),
                        i && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + ut(n),
                    t = null,
                    i = 0; i < e.length; i++) {
                        if (e[i].value === n)
                            return e[i].selected = !0,
                            void (r && (e[i].defaultSelected = !0));
                        null !== t || e[i].disabled || (t = e[i])
                    }
                    null !== t && (t.selected = !0)
                }
            }
            function wt(e, t, n) {
                null == t || ((t = "" + ut(t)) !== e.value && (e.value = t),
                null != n) ? e.defaultValue = null != n ? "" + ut(n) : "" : e.defaultValue !== t && (e.defaultValue = t)
            }
            function St(e, t, n, r) {
                if (null == t) {
                    if (null != r) {
                        if (null != n)
                            throw Error(o(92));
                        if (B(r)) {
                            if (1 < r.length)
                                throw Error(o(93));
                            r = r[0]
                        }
                        n = r
                    }
                    null == n && (n = ""),
                    t = n
                }
                n = ut(t),
                e.defaultValue = n,
                (r = e.textContent) === n && "" !== r && null !== r && (e.value = r)
            }
            function kt(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType)
                        return void (n.nodeValue = t)
                }
                e.textContent = t
            }
            var xt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
            function Pt(e, t, n) {
                var r = 0 === t.indexOf("--");
                null == n || "boolean" === typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" !== typeof n || 0 === n || xt.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
            }
            function Et(e, t, n) {
                if (null != t && "object" !== typeof t)
                    throw Error(o(62));
                if (e = e.style,
                null != n) {
                    for (var r in n)
                        !n.hasOwnProperty(r) || null != t && t.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "");
                    for (var i in t)
                        r = t[i],
                        t.hasOwnProperty(i) && n[i] !== r && Pt(e, i, r)
                } else
                    for (var a in t)
                        t.hasOwnProperty(a) && Pt(e, a, t[a])
            }
            function Ct(e) {
                if (-1 === e.indexOf("-"))
                    return !1;
                switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
                }
            }
            var Tt = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
              , At = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
            function Mt(e) {
                return At.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
            }
            var Dt = null;
            function Lt(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            var Rt = null
              , Nt = null;
            function Ot(e) {
                var t = Ye(e);
                if (t && (e = t.stateNode)) {
                    var n = e[Ie] || null;
                    e: switch (e = t.stateNode,
                    t.type) {
                    case "input":
                        if (gt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                        t = n.name,
                        "radio" === n.type && null != t) {
                            for (n = e; n.parentNode; )
                                n = n.parentNode;
                            for (n = n.querySelectorAll('input[name="' + mt("" + t) + '"][type="radio"]'),
                            t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var i = r[Ie] || null;
                                    if (!i)
                                        throw Error(o(90));
                                    gt(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name)
                                }
                            }
                            for (t = 0; t < n.length; t++)
                                (r = n[t]).form === e.form && ft(r)
                        }
                        break e;
                    case "textarea":
                        wt(e, n.value, n.defaultValue);
                        break e;
                    case "select":
                        null != (t = n.value) && bt(e, !!n.multiple, t, !1)
                    }
                }
            }
            var _t = !1;
            function zt(e, t, n) {
                if (_t)
                    return e(t, n);
                _t = !0;
                try {
                    return e(t)
                } finally {
                    if (_t = !1,
                    (null !== Rt || null !== Nt) && (Vu(),
                    Rt && (t = Rt,
                    e = Nt,
                    Nt = Rt = null,
                    Ot(t),
                    e)))
                        for (t = 0; t < e.length; t++)
                            Ot(e[t])
                }
            }
            function Ft(e, t) {
                var n = e.stateNode;
                if (null === n)
                    return null;
                var r = n[Ie] || null;
                if (null === r)
                    return null;
                n = r[t];
                e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !r;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (n && "function" !== typeof n)
                    throw Error(o(231, t, typeof n));
                return n
            }
            var Vt = !1;
            if (nt)
                try {
                    var It = {};
                    Object.defineProperty(It, "passive", {
                        get: function() {
                            Vt = !0
                        }
                    }),
                    window.addEventListener("test", It, It),
                    window.removeEventListener("test", It, It)
                } catch (kf) {
                    Vt = !1
                }
            var jt = null
              , Bt = null
              , Ut = null;
            function $t() {
                if (Ut)
                    return Ut;
                var e, t, n = Bt, r = n.length, i = "value"in jt ? jt.value : jt.textContent, a = i.length;
                for (e = 0; e < r && n[e] === i[e]; e++)
                    ;
                var o = r - e;
                for (t = 1; t <= o && n[r - t] === i[a - t]; t++)
                    ;
                return Ut = i.slice(e, 1 < t ? 1 - t : void 0)
            }
            function Wt(e) {
                var t = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            function Ht() {
                return !0
            }
            function qt() {
                return !1
            }
            function Qt(e) {
                function t(t, n, r, i, a) {
                    for (var o in this._reactName = t,
                    this._targetInst = r,
                    this.type = n,
                    this.nativeEvent = i,
                    this.target = a,
                    this.currentTarget = null,
                    e)
                        e.hasOwnProperty(o) && (t = e[o],
                        this[o] = t ? t(i) : i[o]);
                    return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? Ht : qt,
                    this.isPropagationStopped = qt,
                    this
                }
                return L(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                        this.isDefaultPrevented = Ht)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                        this.isPropagationStopped = Ht)
                    },
                    persist: function() {},
                    isPersistent: Ht
                }),
                t
            }
            var Yt, Kt, Xt, Gt = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, Zt = Qt(Gt), Jt = L({}, Gt, {
                view: 0,
                detail: 0
            }), en = Qt(Jt), tn = L({}, Jt, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: hn,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX"in e ? e.movementX : (e !== Xt && (Xt && "mousemove" === e.type ? (Yt = e.screenX - Xt.screenX,
                    Kt = e.screenY - Xt.screenY) : Kt = Yt = 0,
                    Xt = e),
                    Yt)
                },
                movementY: function(e) {
                    return "movementY"in e ? e.movementY : Kt
                }
            }), nn = Qt(tn), rn = Qt(L({}, tn, {
                dataTransfer: 0
            })), an = Qt(L({}, Jt, {
                relatedTarget: 0
            })), on = Qt(L({}, Gt, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), sn = Qt(L({}, Gt, {
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            })), ln = Qt(L({}, Gt, {
                data: 0
            })), un = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, cn = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, dn = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function fn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = dn[e]) && !!t[e]
            }
            function hn() {
                return fn
            }
            var pn = Qt(L({}, Jt, {
                key: function(e) {
                    if (e.key) {
                        var t = un[e.key] || e.key;
                        if ("Unidentified" !== t)
                            return t
                    }
                    return "keypress" === e.type ? 13 === (e = Wt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? cn[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: hn,
                charCode: function(e) {
                    return "keypress" === e.type ? Wt(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? Wt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            }))
              , mn = Qt(L({}, tn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
              , gn = Qt(L({}, Jt, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: hn
            }))
              , vn = Qt(L({}, Gt, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
              , yn = Qt(L({}, tn, {
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            }))
              , bn = Qt(L({}, Gt, {
                newState: 0,
                oldState: 0
            }))
              , wn = [9, 13, 27, 32]
              , Sn = nt && "CompositionEvent"in window
              , kn = null;
            nt && "documentMode"in document && (kn = document.documentMode);
            var xn = nt && "TextEvent"in window && !kn
              , Pn = nt && (!Sn || kn && 8 < kn && 11 >= kn)
              , En = String.fromCharCode(32)
              , Cn = !1;
            function Tn(e, t) {
                switch (e) {
                case "keyup":
                    return -1 !== wn.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
                }
            }
            function An(e) {
                return "object" === typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var Mn = !1;
            var Dn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function Ln(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Dn[e.type] : "textarea" === t
            }
            function Rn(e, t, n, r) {
                Rt ? Nt ? Nt.push(r) : Nt = [r] : Rt = r,
                0 < (t = zc(t, "onChange")).length && (n = new Zt("onChange","change",null,n,r),
                e.push({
                    event: n,
                    listeners: t
                }))
            }
            var Nn = null
              , On = null;
            function _n(e) {
                Ac(e, 0)
            }
            function zn(e) {
                if (ft(Ke(e)))
                    return e
            }
            function Fn(e, t) {
                if ("change" === e)
                    return t
            }
            var Vn = !1;
            if (nt) {
                var In;
                if (nt) {
                    var jn = "oninput"in document;
                    if (!jn) {
                        var Bn = document.createElement("div");
                        Bn.setAttribute("oninput", "return;"),
                        jn = "function" === typeof Bn.oninput
                    }
                    In = jn
                } else
                    In = !1;
                Vn = In && (!document.documentMode || 9 < document.documentMode)
            }
            function Un() {
                Nn && (Nn.detachEvent("onpropertychange", $n),
                On = Nn = null)
            }
            function $n(e) {
                if ("value" === e.propertyName && zn(On)) {
                    var t = [];
                    Rn(t, On, e, Lt(e)),
                    zt(_n, t)
                }
            }
            function Wn(e, t, n) {
                "focusin" === e ? (Un(),
                On = n,
                (Nn = t).attachEvent("onpropertychange", $n)) : "focusout" === e && Un()
            }
            function Hn(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return zn(On)
            }
            function qn(e, t) {
                if ("click" === e)
                    return zn(t)
            }
            function Qn(e, t) {
                if ("input" === e || "change" === e)
                    return zn(t)
            }
            var Yn = "function" === typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            }
            ;
            function Kn(e, t) {
                if (Yn(e, t))
                    return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
                    return !1;
                var n = Object.keys(e)
                  , r = Object.keys(t);
                if (n.length !== r.length)
                    return !1;
                for (r = 0; r < n.length; r++) {
                    var i = n[r];
                    if (!re.call(t, i) || !Yn(e[i], t[i]))
                        return !1
                }
                return !0
            }
            function Xn(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function Gn(e, t) {
                var n, r = Xn(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length,
                        e <= t && n >= t)
                            return {
                                node: r,
                                offset: t - e
                            };
                        e = n
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = Xn(r)
                }
            }
            function Zn(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Zn(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }
            function Jn(e) {
                for (var t = ht((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n)
                        break;
                    t = ht((e = t.contentWindow).document)
                }
                return t
            }
            function er(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            function tr(e, t) {
                var n = Jn(t);
                t = e.focusedElem;
                var r = e.selectionRange;
                if (n !== t && t && t.ownerDocument && Zn(t.ownerDocument.documentElement, t)) {
                    if (null !== r && er(t))
                        if (e = r.start,
                        void 0 === (n = r.end) && (n = e),
                        "selectionStart"in t)
                            t.selectionStart = e,
                            t.selectionEnd = Math.min(n, t.value.length);
                        else if ((n = (e = t.ownerDocument || document) && e.defaultView || window).getSelection) {
                            n = n.getSelection();
                            var i = t.textContent.length
                              , a = Math.min(r.start, i);
                            r = void 0 === r.end ? a : Math.min(r.end, i),
                            !n.extend && a > r && (i = r,
                            r = a,
                            a = i),
                            i = Gn(t, a);
                            var o = Gn(t, r);
                            i && o && (1 !== n.rangeCount || n.anchorNode !== i.node || n.anchorOffset !== i.offset || n.focusNode !== o.node || n.focusOffset !== o.offset) && ((e = e.createRange()).setStart(i.node, i.offset),
                            n.removeAllRanges(),
                            a > r ? (n.addRange(e),
                            n.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset),
                            n.addRange(e)))
                        }
                    for (e = [],
                    n = t; n = n.parentNode; )
                        1 === n.nodeType && e.push({
                            element: n,
                            left: n.scrollLeft,
                            top: n.scrollTop
                        });
                    for ("function" === typeof t.focus && t.focus(),
                    t = 0; t < e.length; t++)
                        (n = e[t]).element.scrollLeft = n.left,
                        n.element.scrollTop = n.top
                }
            }
            var nr = nt && "documentMode"in document && 11 >= document.documentMode
              , rr = null
              , ir = null
              , ar = null
              , or = !1;
            function sr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                or || null == rr || rr !== ht(r) || ("selectionStart"in (r = rr) && er(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                },
                ar && Kn(ar, r) || (ar = r,
                0 < (r = zc(ir, "onSelect")).length && (t = new Zt("onSelect","select",null,t,n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = rr)))
            }
            function lr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(),
                n["Webkit" + e] = "webkit" + t,
                n["Moz" + e] = "moz" + t,
                n
            }
            var ur = {
                animationend: lr("Animation", "AnimationEnd"),
                animationiteration: lr("Animation", "AnimationIteration"),
                animationstart: lr("Animation", "AnimationStart"),
                transitionrun: lr("Transition", "TransitionRun"),
                transitionstart: lr("Transition", "TransitionStart"),
                transitioncancel: lr("Transition", "TransitionCancel"),
                transitionend: lr("Transition", "TransitionEnd")
            }
              , cr = {}
              , dr = {};
            function fr(e) {
                if (cr[e])
                    return cr[e];
                if (!ur[e])
                    return e;
                var t, n = ur[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in dr)
                        return cr[e] = n[t];
                return e
            }
            nt && (dr = document.createElement("div").style,
            "AnimationEvent"in window || (delete ur.animationend.animation,
            delete ur.animationiteration.animation,
            delete ur.animationstart.animation),
            "TransitionEvent"in window || delete ur.transitionend.transition);
            var hr = fr("animationend")
              , pr = fr("animationiteration")
              , mr = fr("animationstart")
              , gr = fr("transitionrun")
              , vr = fr("transitionstart")
              , yr = fr("transitioncancel")
              , br = fr("transitionend")
              , wr = new Map
              , Sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");
            function kr(e, t) {
                wr.set(e, t),
                et(t, [e])
            }
            var xr = []
              , Pr = 0
              , Er = 0;
            function Cr() {
                for (var e = Pr, t = Er = Pr = 0; t < e; ) {
                    var n = xr[t];
                    xr[t++] = null;
                    var r = xr[t];
                    xr[t++] = null;
                    var i = xr[t];
                    xr[t++] = null;
                    var a = xr[t];
                    if (xr[t++] = null,
                    null !== r && null !== i) {
                        var o = r.pending;
                        null === o ? i.next = i : (i.next = o.next,
                        o.next = i),
                        r.pending = i
                    }
                    0 !== a && Dr(n, i, a)
                }
            }
            function Tr(e, t, n, r) {
                xr[Pr++] = e,
                xr[Pr++] = t,
                xr[Pr++] = n,
                xr[Pr++] = r,
                Er |= r,
                e.lanes |= r,
                null !== (e = e.alternate) && (e.lanes |= r)
            }
            function Ar(e, t, n, r) {
                return Tr(e, t, n, r),
                Lr(e)
            }
            function Mr(e, t) {
                return Tr(e, null, null, t),
                Lr(e)
            }
            function Dr(e, t, n) {
                e.lanes |= n;
                var r = e.alternate;
                null !== r && (r.lanes |= n);
                for (var i = !1, a = e.return; null !== a; )
                    a.childLanes |= n,
                    null !== (r = a.alternate) && (r.childLanes |= n),
                    22 === a.tag && (null === (e = a.stateNode) || 1 & e._visibility || (i = !0)),
                    e = a,
                    a = a.return;
                i && null !== t && 3 === e.tag && (a = e.stateNode,
                i = 31 - we(n),
                null === (e = (a = a.hiddenUpdates)[i]) ? a[i] = [t] : e.push(t),
                t.lane = 536870912 | n)
            }
            function Lr(e) {
                if (50 < Au)
                    throw Au = 0,
                    Mu = null,
                    Error(o(185));
                for (var t = e.return; null !== t; )
                    t = (e = t).return;
                return 3 === e.tag ? e.stateNode : null
            }
            var Rr = {}
              , Nr = new WeakMap;
            function Or(e, t) {
                if ("object" === typeof e && null !== e) {
                    var n = Nr.get(e);
                    return void 0 !== n ? n : (t = {
                        value: e,
                        source: t,
                        stack: z(t)
                    },
                    Nr.set(e, t),
                    t)
                }
                return {
                    value: e,
                    source: t,
                    stack: z(t)
                }
            }
            var _r = []
              , zr = 0
              , Fr = null
              , Vr = 0
              , Ir = []
              , jr = 0
              , Br = null
              , Ur = 1
              , $r = "";
            function Wr(e, t) {
                _r[zr++] = Vr,
                _r[zr++] = Fr,
                Fr = e,
                Vr = t
            }
            function Hr(e, t, n) {
                Ir[jr++] = Ur,
                Ir[jr++] = $r,
                Ir[jr++] = Br,
                Br = e;
                var r = Ur;
                e = $r;
                var i = 32 - we(r) - 1;
                r &= ~(1 << i),
                n += 1;
                var a = 32 - we(t) + i;
                if (30 < a) {
                    var o = i - i % 5;
                    a = (r & (1 << o) - 1).toString(32),
                    r >>= o,
                    i -= o,
                    Ur = 1 << 32 - we(t) + i | n << i | r,
                    $r = a + e
                } else
                    Ur = 1 << a | n << i | r,
                    $r = e
            }
            function qr(e) {
                null !== e.return && (Wr(e, 1),
                Hr(e, 1, 0))
            }
            function Qr(e) {
                for (; e === Fr; )
                    Fr = _r[--zr],
                    _r[zr] = null,
                    Vr = _r[--zr],
                    _r[zr] = null;
                for (; e === Br; )
                    Br = Ir[--jr],
                    Ir[jr] = null,
                    $r = Ir[--jr],
                    Ir[jr] = null,
                    Ur = Ir[--jr],
                    Ir[jr] = null
            }
            var Yr = null
              , Kr = null
              , Xr = !1
              , Gr = null
              , Zr = !1
              , Jr = Error(o(519));
            function ei(e) {
                throw ai(Or(Error(o(418, "")), e)),
                Jr
            }
            function ti(e) {
                var t = e.stateNode
                  , n = e.type
                  , r = e.memoizedProps;
                switch (t[Ve] = e,
                t[Ie] = r,
                n) {
                case "dialog":
                    Mc("cancel", t),
                    Mc("close", t);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Mc("load", t);
                    break;
                case "video":
                case "audio":
                    for (n = 0; n < Cc.length; n++)
                        Mc(Cc[n], t);
                    break;
                case "source":
                    Mc("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    Mc("error", t),
                    Mc("load", t);
                    break;
                case "details":
                    Mc("toggle", t);
                    break;
                case "input":
                    Mc("invalid", t),
                    vt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0),
                    dt(t);
                    break;
                case "select":
                    Mc("invalid", t);
                    break;
                case "textarea":
                    Mc("invalid", t),
                    St(t, r.value, r.defaultValue, r.children),
                    dt(t)
                }
                "string" !== typeof (n = r.children) && "number" !== typeof n && "bigint" !== typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Uc(t.textContent, n) ? (null != r.popover && (Mc("beforetoggle", t),
                Mc("toggle", t)),
                null != r.onScroll && Mc("scroll", t),
                null != r.onScrollEnd && Mc("scrollend", t),
                null != r.onClick && (t.onclick = $c),
                t = !0) : t = !1,
                t || ei(e)
            }
            function ni(e) {
                for (Yr = e.return; Yr; )
                    switch (Yr.tag) {
                    case 3:
                    case 27:
                        return void (Zr = !0);
                    case 5:
                    case 13:
                        return void (Zr = !1);
                    default:
                        Yr = Yr.return
                    }
            }
            function ri(e) {
                if (e !== Yr)
                    return !1;
                if (!Xr)
                    return ni(e),
                    Xr = !0,
                    !1;
                var t, n = !1;
                if ((t = 3 !== e.tag && 27 !== e.tag) && ((t = 5 === e.tag) && (t = !("form" !== (t = e.type) && "button" !== t) || Zc(e.type, e.memoizedProps)),
                t = !t),
                t && (n = !0),
                n && Kr && ei(e),
                ni(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(o(317));
                    e: {
                        for (e = e.nextSibling,
                        n = 0; e; ) {
                            if (8 === e.nodeType)
                                if ("/$" === (t = e.data)) {
                                    if (0 === n) {
                                        Kr = sd(e.nextSibling);
                                        break e
                                    }
                                    n--
                                } else
                                    "$" !== t && "$!" !== t && "$?" !== t || n++;
                            e = e.nextSibling
                        }
                        Kr = null
                    }
                } else
                    Kr = Yr ? sd(e.stateNode.nextSibling) : null;
                return !0
            }
            function ii() {
                Kr = Yr = null,
                Xr = !1
            }
            function ai(e) {
                null === Gr ? Gr = [e] : Gr.push(e)
            }
            var oi = Error(o(460))
              , si = Error(o(474))
              , li = {
                then: function() {}
            };
            function ui(e) {
                return "fulfilled" === (e = e.status) || "rejected" === e
            }
            function ci() {}
            function di(e, t, n) {
                switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(ci, ci),
                t = n),
                t.status) {
                case "fulfilled":
                    return t.value;
                case "rejected":
                    if ((e = t.reason) === oi)
                        throw Error(o(483));
                    throw e;
                default:
                    if ("string" === typeof t.status)
                        t.then(ci, ci);
                    else {
                        if (null !== (e = tu) && 100 < e.shellSuspendCounter)
                            throw Error(o(482));
                        (e = t).status = "pending",
                        e.then((function(e) {
                            if ("pending" === t.status) {
                                var n = t;
                                n.status = "fulfilled",
                                n.value = e
                            }
                        }
                        ), (function(e) {
                            if ("pending" === t.status) {
                                var n = t;
                                n.status = "rejected",
                                n.reason = e
                            }
                        }
                        ))
                    }
                    switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        if ((e = t.reason) === oi)
                            throw Error(o(483));
                        throw e
                    }
                    throw fi = t,
                    oi
                }
            }
            var fi = null;
            function hi() {
                if (null === fi)
                    throw Error(o(459));
                var e = fi;
                return fi = null,
                e
            }
            var pi = null
              , mi = 0;
            function gi(e) {
                var t = mi;
                return mi += 1,
                null === pi && (pi = []),
                di(pi, e, t)
            }
            function vi(e, t) {
                t = t.props.ref,
                e.ref = void 0 !== t ? t : null
            }
            function yi(e, t) {
                if (t.$$typeof === l)
                    throw Error(o(525));
                throw e = Object.prototype.toString.call(t),
                Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }
            function bi(e) {
                return (0,
                e._init)(e._payload)
            }
            function wi(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n],
                        t.flags |= 16) : r.push(n)
                    }
                }
                function n(n, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        t(n, r),
                        r = r.sibling;
                    return null
                }
                function r(e) {
                    for (var t = new Map; null !== e; )
                        null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                        e = e.sibling;
                    return t
                }
                function i(e, t) {
                    return (e = Fl(e, t)).index = 0,
                    e.sibling = null,
                    e
                }
                function a(t, n, r) {
                    return t.index = r,
                    e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 33554434,
                    n) : r : (t.flags |= 33554434,
                    n) : (t.flags |= 1048576,
                    n)
                }
                function s(t) {
                    return e && null === t.alternate && (t.flags |= 33554434),
                    t
                }
                function l(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Ul(n, e.mode, r)).return = e,
                    t) : ((t = i(t, n)).return = e,
                    t)
                }
                function f(e, t, n, r) {
                    var a = n.type;
                    return a === d ? p(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" === typeof a && null !== a && a.$$typeof === S && bi(a) === t.type) ? (vi(t = i(t, n.props), n),
                    t.return = e,
                    t) : (vi(t = Il(n.type, n.key, n.props, null, e.mode, r), n),
                    t.return = e,
                    t)
                }
                function h(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = $l(n, e.mode, r)).return = e,
                    t) : ((t = i(t, n.children || [])).return = e,
                    t)
                }
                function p(e, t, n, r, a) {
                    return null === t || 7 !== t.tag ? ((t = jl(n, e.mode, r, a)).return = e,
                    t) : ((t = i(t, n)).return = e,
                    t)
                }
                function m(e, t, n) {
                    if ("string" === typeof t && "" !== t || "number" === typeof t || "bigint" === typeof t)
                        return (t = Ul("" + t, e.mode, n)).return = e,
                        t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case u:
                            return vi(n = Il(t.type, t.key, t.props, null, e.mode, n), t),
                            n.return = e,
                            n;
                        case c:
                            return (t = $l(t, e.mode, n)).return = e,
                            t;
                        case S:
                            return m(e, t = (0,
                            t._init)(t._payload), n)
                        }
                        if (B(t) || E(t))
                            return (t = jl(t, e.mode, n, null)).return = e,
                            t;
                        if ("function" === typeof t.then)
                            return m(e, gi(t), n);
                        if (t.$$typeof === g)
                            return m(e, Cs(e, t), n);
                        yi(e, t)
                    }
                    return null
                }
                function v(e, t, n, r) {
                    var i = null !== t ? t.key : null;
                    if ("string" === typeof n && "" !== n || "number" === typeof n || "bigint" === typeof n)
                        return null !== i ? null : l(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case u:
                            return n.key === i ? f(e, t, n, r) : null;
                        case c:
                            return n.key === i ? h(e, t, n, r) : null;
                        case S:
                            return v(e, t, n = (i = n._init)(n._payload), r)
                        }
                        if (B(n) || E(n))
                            return null !== i ? null : p(e, t, n, r, null);
                        if ("function" === typeof n.then)
                            return v(e, t, gi(n), r);
                        if (n.$$typeof === g)
                            return v(e, t, Cs(e, n), r);
                        yi(e, n)
                    }
                    return null
                }
                function y(e, t, n, r, i) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r || "bigint" === typeof r)
                        return l(t, e = e.get(n) || null, "" + r, i);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case u:
                            return f(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                        case c:
                            return h(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                        case S:
                            return y(e, t, n, r = (0,
                            r._init)(r._payload), i)
                        }
                        if (B(r) || E(r))
                            return p(t, e = e.get(n) || null, r, i, null);
                        if ("function" === typeof r.then)
                            return y(e, t, n, gi(r), i);
                        if (r.$$typeof === g)
                            return y(e, t, n, Cs(t, r), i);
                        yi(t, r)
                    }
                    return null
                }
                function b(l, f, h, p) {
                    if ("object" === typeof h && null !== h && h.type === d && null === h.key && (h = h.props.children),
                    "object" === typeof h && null !== h) {
                        switch (h.$$typeof) {
                        case u:
                            e: {
                                for (var w = h.key; null !== f; ) {
                                    if (f.key === w) {
                                        if ((w = h.type) === d) {
                                            if (7 === f.tag) {
                                                n(l, f.sibling),
                                                (p = i(f, h.props.children)).return = l,
                                                l = p;
                                                break e
                                            }
                                        } else if (f.elementType === w || "object" === typeof w && null !== w && w.$$typeof === S && bi(w) === f.type) {
                                            n(l, f.sibling),
                                            vi(p = i(f, h.props), h),
                                            p.return = l,
                                            l = p;
                                            break e
                                        }
                                        n(l, f);
                                        break
                                    }
                                    t(l, f),
                                    f = f.sibling
                                }
                                h.type === d ? ((p = jl(h.props.children, l.mode, p, h.key)).return = l,
                                l = p) : (vi(p = Il(h.type, h.key, h.props, null, l.mode, p), h),
                                p.return = l,
                                l = p)
                            }
                            return s(l);
                        case c:
                            e: {
                                for (w = h.key; null !== f; ) {
                                    if (f.key === w) {
                                        if (4 === f.tag && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                                            n(l, f.sibling),
                                            (p = i(f, h.children || [])).return = l,
                                            l = p;
                                            break e
                                        }
                                        n(l, f);
                                        break
                                    }
                                    t(l, f),
                                    f = f.sibling
                                }
                                (p = $l(h, l.mode, p)).return = l,
                                l = p
                            }
                            return s(l);
                        case S:
                            return b(l, f, h = (w = h._init)(h._payload), p)
                        }
                        if (B(h))
                            return function(i, o, s, l) {
                                for (var u = null, c = null, d = o, f = o = 0, h = null; null !== d && f < s.length; f++) {
                                    d.index > f ? (h = d,
                                    d = null) : h = d.sibling;
                                    var p = v(i, d, s[f], l);
                                    if (null === p) {
                                        null === d && (d = h);
                                        break
                                    }
                                    e && d && null === p.alternate && t(i, d),
                                    o = a(p, o, f),
                                    null === c ? u = p : c.sibling = p,
                                    c = p,
                                    d = h
                                }
                                if (f === s.length)
                                    return n(i, d),
                                    Xr && Wr(i, f),
                                    u;
                                if (null === d) {
                                    for (; f < s.length; f++)
                                        null !== (d = m(i, s[f], l)) && (o = a(d, o, f),
                                        null === c ? u = d : c.sibling = d,
                                        c = d);
                                    return Xr && Wr(i, f),
                                    u
                                }
                                for (d = r(d); f < s.length; f++)
                                    null !== (h = y(d, i, f, s[f], l)) && (e && null !== h.alternate && d.delete(null === h.key ? f : h.key),
                                    o = a(h, o, f),
                                    null === c ? u = h : c.sibling = h,
                                    c = h);
                                return e && d.forEach((function(e) {
                                    return t(i, e)
                                }
                                )),
                                Xr && Wr(i, f),
                                u
                            }(l, f, h, p);
                        if (E(h)) {
                            if ("function" !== typeof (w = E(h)))
                                throw Error(o(150));
                            return function(i, s, l, u) {
                                if (null == l)
                                    throw Error(o(151));
                                for (var c = null, d = null, f = s, h = s = 0, p = null, g = l.next(); null !== f && !g.done; h++,
                                g = l.next()) {
                                    f.index > h ? (p = f,
                                    f = null) : p = f.sibling;
                                    var b = v(i, f, g.value, u);
                                    if (null === b) {
                                        null === f && (f = p);
                                        break
                                    }
                                    e && f && null === b.alternate && t(i, f),
                                    s = a(b, s, h),
                                    null === d ? c = b : d.sibling = b,
                                    d = b,
                                    f = p
                                }
                                if (g.done)
                                    return n(i, f),
                                    Xr && Wr(i, h),
                                    c;
                                if (null === f) {
                                    for (; !g.done; h++,
                                    g = l.next())
                                        null !== (g = m(i, g.value, u)) && (s = a(g, s, h),
                                        null === d ? c = g : d.sibling = g,
                                        d = g);
                                    return Xr && Wr(i, h),
                                    c
                                }
                                for (f = r(f); !g.done; h++,
                                g = l.next())
                                    null !== (g = y(f, i, h, g.value, u)) && (e && null !== g.alternate && f.delete(null === g.key ? h : g.key),
                                    s = a(g, s, h),
                                    null === d ? c = g : d.sibling = g,
                                    d = g);
                                return e && f.forEach((function(e) {
                                    return t(i, e)
                                }
                                )),
                                Xr && Wr(i, h),
                                c
                            }(l, f, h = w.call(h), p)
                        }
                        if ("function" === typeof h.then)
                            return b(l, f, gi(h), p);
                        if (h.$$typeof === g)
                            return b(l, f, Cs(l, h), p);
                        yi(l, h)
                    }
                    return "string" === typeof h && "" !== h || "number" === typeof h || "bigint" === typeof h ? (h = "" + h,
                    null !== f && 6 === f.tag ? (n(l, f.sibling),
                    (p = i(f, h)).return = l,
                    l = p) : (n(l, f),
                    (p = Ul(h, l.mode, p)).return = l,
                    l = p),
                    s(l)) : n(l, f)
                }
                return function(e, t, n, r) {
                    try {
                        mi = 0;
                        var i = b(e, t, n, r);
                        return pi = null,
                        i
                    } catch (o) {
                        if (o === oi)
                            throw o;
                        var a = _l(29, o, null, e.mode);
                        return a.lanes = r,
                        a.return = e,
                        a
                    }
                }
            }
            var Si = wi(!0)
              , ki = wi(!1)
              , xi = q(null)
              , Pi = q(0);
            function Ei(e, t) {
                Y(Pi, e = uu),
                Y(xi, t),
                uu = e | t.baseLanes
            }
            function Ci() {
                Y(Pi, uu),
                Y(xi, xi.current)
            }
            function Ti() {
                uu = Pi.current,
                Q(xi),
                Q(Pi)
            }
            var Ai = q(null)
              , Mi = null;
            function Di(e) {
                var t = e.alternate;
                Y(Oi, 1 & Oi.current),
                Y(Ai, e),
                null === Mi && (null === t || null !== xi.current || null !== t.memoizedState) && (Mi = e)
            }
            function Li(e) {
                if (22 === e.tag) {
                    if (Y(Oi, Oi.current),
                    Y(Ai, e),
                    null === Mi) {
                        var t = e.alternate;
                        null !== t && null !== t.memoizedState && (Mi = e)
                    }
                } else
                    Ri()
            }
            function Ri() {
                Y(Oi, Oi.current),
                Y(Ai, Ai.current)
            }
            function Ni(e) {
                Q(Ai),
                Mi === e && (Mi = null),
                Q(Oi)
            }
            var Oi = q(0);
            function _i(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                            return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (128 & t.flags))
                            return t
                    } else if (null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e)
                            return null;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
                return null
            }
            var zi = "undefined" !== typeof AbortController ? AbortController : function() {
                var e = []
                  , t = this.signal = {
                    aborted: !1,
                    addEventListener: function(t, n) {
                        e.push(n)
                    }
                };
                this.abort = function() {
                    t.aborted = !0,
                    e.forEach((function(e) {
                        return e()
                    }
                    ))
                }
            }
              , Fi = r.unstable_scheduleCallback
              , Vi = r.unstable_NormalPriority
              , Ii = {
                $$typeof: g,
                Consumer: null,
                Provider: null,
                _currentValue: null,
                _currentValue2: null,
                _threadCount: 0
            };
            function ji() {
                return {
                    controller: new zi,
                    data: new Map,
                    refCount: 0
                }
            }
            function Bi(e) {
                e.refCount--,
                0 === e.refCount && Fi(Vi, (function() {
                    e.controller.abort()
                }
                ))
            }
            var Ui = null
              , $i = 0
              , Wi = 0
              , Hi = null;
            function qi() {
                if (0 === --$i && null !== Ui) {
                    null !== Hi && (Hi.status = "fulfilled");
                    var e = Ui;
                    Ui = null,
                    Wi = 0,
                    Hi = null;
                    for (var t = 0; t < e.length; t++)
                        (0,
                        e[t])()
                }
            }
            var Qi = D.S;
            D.S = function(e, t) {
                "object" === typeof t && null !== t && "function" === typeof t.then && function(e, t) {
                    if (null === Ui) {
                        var n = Ui = [];
                        $i = 0,
                        Wi = Sc(),
                        Hi = {
                            status: "pending",
                            value: void 0,
                            then: function(e) {
                                n.push(e)
                            }
                        }
                    }
                    $i++,
                    t.then(qi, qi)
                }(0, t),
                null !== Qi && Qi(e, t)
            }
            ;
            var Yi = q(null);
            function Ki() {
                var e = Yi.current;
                return null !== e ? e : tu.pooledCache
            }
            function Xi(e, t) {
                Y(Yi, null === t ? Yi.current : t.pool)
            }
            function Gi() {
                var e = Ki();
                return null === e ? null : {
                    parent: Ii._currentValue,
                    pool: e
                }
            }
            var Zi = 0
              , Ji = null
              , ea = null
              , ta = null
              , na = !1
              , ra = !1
              , ia = !1
              , aa = 0
              , oa = 0
              , sa = null
              , la = 0;
            function ua() {
                throw Error(o(321))
            }
            function ca(e, t) {
                if (null === t)
                    return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!Yn(e[n], t[n]))
                        return !1;
                return !0
            }
            function da(e, t, n, r, i, a) {
                return Zi = a,
                Ji = t,
                t.memoizedState = null,
                t.updateQueue = null,
                t.lanes = 0,
                D.H = null === e || null === e.memoizedState ? Co : To,
                ia = !1,
                a = n(r, i),
                ia = !1,
                ra && (a = ha(t, n, r, i)),
                fa(e),
                a
            }
            function fa(e) {
                D.H = Eo;
                var t = null !== ea && null !== ea.next;
                if (Zi = 0,
                ta = ea = Ji = null,
                na = !1,
                oa = 0,
                sa = null,
                t)
                    throw Error(o(300));
                null === e || Wo || null !== (e = e.dependencies) && xs(e) && (Wo = !0)
            }
            function ha(e, t, n, r) {
                Ji = e;
                var i = 0;
                do {
                    if (ra && (sa = null),
                    oa = 0,
                    ra = !1,
                    25 <= i)
                        throw Error(o(301));
                    if (i += 1,
                    ta = ea = null,
                    null != e.updateQueue) {
                        var a = e.updateQueue;
                        a.lastEffect = null,
                        a.events = null,
                        a.stores = null,
                        null != a.memoCache && (a.memoCache.index = 0)
                    }
                    D.H = Ao,
                    a = t(n, r)
                } while (ra);
                return a
            }
            function pa() {
                var e = D.H
                  , t = e.useState()[0];
                return t = "function" === typeof t.then ? wa(t) : t,
                e = e.useState()[0],
                (null !== ea ? ea.memoizedState : null) !== e && (Ji.flags |= 1024),
                t
            }
            function ma() {
                var e = 0 !== aa;
                return aa = 0,
                e
            }
            function ga(e, t, n) {
                t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~n
            }
            function va(e) {
                if (na) {
                    for (e = e.memoizedState; null !== e; ) {
                        var t = e.queue;
                        null !== t && (t.pending = null),
                        e = e.next
                    }
                    na = !1
                }
                Zi = 0,
                ta = ea = Ji = null,
                ra = !1,
                oa = aa = 0,
                sa = null
            }
            function ya() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === ta ? Ji.memoizedState = ta = e : ta = ta.next = e,
                ta
            }
            function ba() {
                if (null === ea) {
                    var e = Ji.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = ea.next;
                var t = null === ta ? Ji.memoizedState : ta.next;
                if (null !== t)
                    ta = t,
                    ea = e;
                else {
                    if (null === e) {
                        if (null === Ji.alternate)
                            throw Error(o(467));
                        throw Error(o(310))
                    }
                    e = {
                        memoizedState: (ea = e).memoizedState,
                        baseState: ea.baseState,
                        baseQueue: ea.baseQueue,
                        queue: ea.queue,
                        next: null
                    },
                    null === ta ? Ji.memoizedState = ta = e : ta = ta.next = e
                }
                return ta
            }
            function wa(e) {
                var t = oa;
                return oa += 1,
                null === sa && (sa = []),
                e = di(sa, e, t),
                t = Ji,
                null === (null === ta ? t.memoizedState : ta.next) && (t = t.alternate,
                D.H = null === t || null === t.memoizedState ? Co : To),
                e
            }
            function Sa(e) {
                if (null !== e && "object" === typeof e) {
                    if ("function" === typeof e.then)
                        return wa(e);
                    if (e.$$typeof === g)
                        return Es(e)
                }
                throw Error(o(438, String(e)))
            }
            function ka(e) {
                var t = null
                  , n = Ji.updateQueue;
                if (null !== n && (t = n.memoCache),
                null == t) {
                    var r = Ji.alternate;
                    null !== r && (null !== (r = r.updateQueue) && (null != (r = r.memoCache) && (t = {
                        data: r.data.map((function(e) {
                            return e.slice()
                        }
                        )),
                        index: 0
                    })))
                }
                if (null == t && (t = {
                    data: [],
                    index: 0
                }),
                null === n && (n = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                },
                Ji.updateQueue = n),
                n.memoCache = t,
                void 0 === (n = t.data[t.index]))
                    for (n = t.data[t.index] = Array(e),
                    r = 0; r < e; r++)
                        n[r] = x;
                return t.index++,
                n
            }
            function xa(e, t) {
                return "function" === typeof t ? t(e) : t
            }
            function Pa(e) {
                return Ea(ba(), ea, e)
            }
            function Ea(e, t, n) {
                var r = e.queue;
                if (null === r)
                    throw Error(o(311));
                r.lastRenderedReducer = n;
                var i = e.baseQueue
                  , a = r.pending;
                if (null !== a) {
                    if (null !== i) {
                        var s = i.next;
                        i.next = a.next,
                        a.next = s
                    }
                    t.baseQueue = i = a,
                    r.pending = null
                }
                if (a = e.baseState,
                null === i)
                    e.memoizedState = a;
                else {
                    var l = s = null
                      , u = null
                      , c = t = i.next
                      , d = !1;
                    do {
                        var f = -536870913 & c.lane;
                        if (f !== c.lane ? (ru & f) === f : (Zi & f) === f) {
                            var h = c.revertLane;
                            if (0 === h)
                                null !== u && (u = u.next = {
                                    lane: 0,
                                    revertLane: 0,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                }),
                                f === Wi && (d = !0);
                            else {
                                if ((Zi & h) === h) {
                                    c = c.next,
                                    h === Wi && (d = !0);
                                    continue
                                }
                                f = {
                                    lane: 0,
                                    revertLane: c.revertLane,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                },
                                null === u ? (l = u = f,
                                s = a) : u = u.next = f,
                                Ji.lanes |= h,
                                du |= h
                            }
                            f = c.action,
                            ia && n(a, f),
                            a = c.hasEagerState ? c.eagerState : n(a, f)
                        } else
                            h = {
                                lane: f,
                                revertLane: c.revertLane,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            },
                            null === u ? (l = u = h,
                            s = a) : u = u.next = h,
                            Ji.lanes |= f,
                            du |= f;
                        c = c.next
                    } while (null !== c && c !== t);
                    if (null === u ? s = a : u.next = l,
                    !Yn(a, e.memoizedState) && (Wo = !0,
                    d && null !== (n = Hi)))
                        throw n;
                    e.memoizedState = a,
                    e.baseState = s,
                    e.baseQueue = u,
                    r.lastRenderedState = a
                }
                return null === i && (r.lanes = 0),
                [e.memoizedState, r.dispatch]
            }
            function Ca(e) {
                var t = ba()
                  , n = t.queue;
                if (null === n)
                    throw Error(o(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch
                  , i = n.pending
                  , a = t.memoizedState;
                if (null !== i) {
                    n.pending = null;
                    var s = i = i.next;
                    do {
                        a = e(a, s.action),
                        s = s.next
                    } while (s !== i);
                    Yn(a, t.memoizedState) || (Wo = !0),
                    t.memoizedState = a,
                    null === t.baseQueue && (t.baseState = a),
                    n.lastRenderedState = a
                }
                return [a, r]
            }
            function Ta(e, t, n) {
                var r = Ji
                  , i = ba()
                  , a = Xr;
                if (a) {
                    if (void 0 === n)
                        throw Error(o(407));
                    n = n()
                } else
                    n = t();
                var s = !Yn((ea || i).memoizedState, n);
                if (s && (i.memoizedState = n,
                Wo = !0),
                i = i.queue,
                Za(Da.bind(null, r, i, e), [e]),
                i.getSnapshot !== t || s || null !== ta && 1 & ta.memoizedState.tag) {
                    if (r.flags |= 2048,
                    Qa(9, Ma.bind(null, r, i, n, t), {
                        destroy: void 0
                    }, null),
                    null === tu)
                        throw Error(o(349));
                    a || 0 !== (60 & Zi) || Aa(r, t, n)
                }
                return n
            }
            function Aa(e, t, n) {
                e.flags |= 16384,
                e = {
                    getSnapshot: t,
                    value: n
                },
                null === (t = Ji.updateQueue) ? (t = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                },
                Ji.updateQueue = t,
                t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }
            function Ma(e, t, n, r) {
                t.value = n,
                t.getSnapshot = r,
                La(t) && Ra(e)
            }
            function Da(e, t, n) {
                return n((function() {
                    La(t) && Ra(e)
                }
                ))
            }
            function La(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !Yn(e, n)
                } catch (r) {
                    return !0
                }
            }
            function Ra(e) {
                var t = Mr(e, 2);
                null !== t && Ru(t, e, 2)
            }
            function Na(e) {
                var t = ya();
                if ("function" === typeof e) {
                    var n = e;
                    if (e = n(),
                    ia) {
                        be(!0);
                        try {
                            n()
                        } finally {
                            be(!1)
                        }
                    }
                }
                return t.memoizedState = t.baseState = e,
                t.queue = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: xa,
                    lastRenderedState: e
                },
                t
            }
            function Oa(e, t, n, r) {
                return e.baseState = n,
                Ea(e, ea, "function" === typeof r ? r : xa)
            }
            function _a(e, t, n, r, i) {
                if (ko(e))
                    throw Error(o(485));
                if (null !== (e = t.action)) {
                    var a = {
                        payload: i,
                        action: e,
                        next: null,
                        isTransition: !0,
                        status: "pending",
                        value: null,
                        reason: null,
                        listeners: [],
                        then: function(e) {
                            a.listeners.push(e)
                        }
                    };
                    null !== D.T ? n(!0) : a.isTransition = !1,
                    r(a),
                    null === (n = t.pending) ? (a.next = t.pending = a,
                    za(t, a)) : (a.next = n.next,
                    t.pending = n.next = a)
                }
            }
            function za(e, t) {
                var n = t.action
                  , r = t.payload
                  , i = e.state;
                if (t.isTransition) {
                    var a = D.T
                      , o = {};
                    D.T = o;
                    try {
                        var s = n(i, r)
                          , l = D.S;
                        null !== l && l(o, s),
                        Fa(e, t, s)
                    } catch (u) {
                        Ia(e, t, u)
                    } finally {
                        D.T = a
                    }
                } else
                    try {
                        Fa(e, t, a = n(i, r))
                    } catch (c) {
                        Ia(e, t, c)
                    }
            }
            function Fa(e, t, n) {
                null !== n && "object" === typeof n && "function" === typeof n.then ? n.then((function(n) {
                    Va(e, t, n)
                }
                ), (function(n) {
                    return Ia(e, t, n)
                }
                )) : Va(e, t, n)
            }
            function Va(e, t, n) {
                t.status = "fulfilled",
                t.value = n,
                ja(t),
                e.state = n,
                null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next,
                t.next = n,
                za(e, n)))
            }
            function Ia(e, t, n) {
                var r = e.pending;
                if (e.pending = null,
                null !== r) {
                    r = r.next;
                    do {
                        t.status = "rejected",
                        t.reason = n,
                        ja(t),
                        t = t.next
                    } while (t !== r)
                }
                e.action = null
            }
            function ja(e) {
                e = e.listeners;
                for (var t = 0; t < e.length; t++)
                    (0,
                    e[t])()
            }
            function Ba(e, t) {
                return t
            }
            function Ua(e, t) {
                if (Xr) {
                    var n = tu.formState;
                    if (null !== n) {
                        e: {
                            var r = Ji;
                            if (Xr) {
                                if (Kr) {
                                    t: {
                                        for (var i = Kr, a = Zr; 8 !== i.nodeType; ) {
                                            if (!a) {
                                                i = null;
                                                break t
                                            }
                                            if (null === (i = sd(i.nextSibling))) {
                                                i = null;
                                                break t
                                            }
                                        }
                                        i = "F!" === (a = i.data) || "F" === a ? i : null
                                    }
                                    if (i) {
                                        Kr = sd(i.nextSibling),
                                        r = "F!" === i.data;
                                        break e
                                    }
                                }
                                ei(r)
                            }
                            r = !1
                        }
                        r && (t = n[0])
                    }
                }
                return (n = ya()).memoizedState = n.baseState = t,
                r = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ba,
                    lastRenderedState: t
                },
                n.queue = r,
                n = bo.bind(null, Ji, r),
                r.dispatch = n,
                r = Na(!1),
                a = So.bind(null, Ji, !1, r.queue),
                i = {
                    state: t,
                    dispatch: null,
                    action: e,
                    pending: null
                },
                (r = ya()).queue = i,
                n = _a.bind(null, Ji, i, a, n),
                i.dispatch = n,
                r.memoizedState = e,
                [t, n, !1]
            }
            function $a(e) {
                return Wa(ba(), ea, e)
            }
            function Wa(e, t, n) {
                t = Ea(e, t, Ba)[0],
                e = Pa(xa)[0],
                t = "object" === typeof t && null !== t && "function" === typeof t.then ? wa(t) : t;
                var r = ba()
                  , i = r.queue
                  , a = i.dispatch;
                return n !== r.memoizedState && (Ji.flags |= 2048,
                Qa(9, Ha.bind(null, i, n), {
                    destroy: void 0
                }, null)),
                [t, a, e]
            }
            function Ha(e, t) {
                e.action = t
            }
            function qa(e) {
                var t = ba()
                  , n = ea;
                if (null !== n)
                    return Wa(t, n, e);
                ba(),
                t = t.memoizedState;
                var r = (n = ba()).queue.dispatch;
                return n.memoizedState = e,
                [t, r, !1]
            }
            function Qa(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    inst: n,
                    deps: r,
                    next: null
                },
                null === (t = Ji.updateQueue) && (t = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                },
                Ji.updateQueue = t),
                null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
                n.next = e,
                e.next = r,
                t.lastEffect = e),
                e
            }
            function Ya() {
                return ba().memoizedState
            }
            function Ka(e, t, n, r) {
                var i = ya();
                Ji.flags |= e,
                i.memoizedState = Qa(1 | t, n, {
                    destroy: void 0
                }, void 0 === r ? null : r)
            }
            function Xa(e, t, n, r) {
                var i = ba();
                r = void 0 === r ? null : r;
                var a = i.memoizedState.inst;
                null !== ea && null !== r && ca(r, ea.memoizedState.deps) ? i.memoizedState = Qa(t, n, a, r) : (Ji.flags |= e,
                i.memoizedState = Qa(1 | t, n, a, r))
            }
            function Ga(e, t) {
                Ka(8390656, 8, e, t)
            }
            function Za(e, t) {
                Xa(2048, 8, e, t)
            }
            function Ja(e, t) {
                return Xa(4, 2, e, t)
            }
            function eo(e, t) {
                return Xa(4, 4, e, t)
            }
            function to(e, t) {
                if ("function" === typeof t) {
                    e = e();
                    var n = t(e);
                    return function() {
                        "function" === typeof n ? n() : t(null)
                    }
                }
                if (null !== t && void 0 !== t)
                    return e = e(),
                    t.current = e,
                    function() {
                        t.current = null
                    }
            }
            function no(e, t, n) {
                n = null !== n && void 0 !== n ? n.concat([e]) : null,
                Xa(4, 4, to.bind(null, t, e), n)
            }
            function ro() {}
            function io(e, t) {
                var n = ba();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== t && ca(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
                e)
            }
            function ao(e, t) {
                var n = ba();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                if (null !== t && ca(t, r[1]))
                    return r[0];
                if (r = e(),
                ia) {
                    be(!0);
                    try {
                        e()
                    } finally {
                        be(!1)
                    }
                }
                return n.memoizedState = [r, t],
                r
            }
            function oo(e, t, n) {
                return void 0 === n || 0 !== (1073741824 & Zi) ? e.memoizedState = t : (e.memoizedState = n,
                e = Lu(),
                Ji.lanes |= e,
                du |= e,
                n)
            }
            function so(e, t, n, r) {
                return Yn(n, t) ? n : null !== xi.current ? (e = oo(e, n, r),
                Yn(e, t) || (Wo = !0),
                e) : 0 === (42 & Zi) ? (Wo = !0,
                e.memoizedState = n) : (e = Lu(),
                Ji.lanes |= e,
                du |= e,
                t)
            }
            function lo(e, t, n, r, i) {
                var a = U.p;
                U.p = 0 !== a && 8 > a ? a : 8;
                var o = D.T
                  , s = {};
                D.T = s,
                So(e, !1, t, n);
                try {
                    var l = i()
                      , u = D.S;
                    if (null !== u && u(s, l),
                    null !== l && "object" === typeof l && "function" === typeof l.then)
                        wo(e, t, function(e, t) {
                            var n = []
                              , r = {
                                status: "pending",
                                value: null,
                                reason: null,
                                then: function(e) {
                                    n.push(e)
                                }
                            };
                            return e.then((function() {
                                r.status = "fulfilled",
                                r.value = t;
                                for (var e = 0; e < n.length; e++)
                                    (0,
                                    n[e])(t)
                            }
                            ), (function(e) {
                                for (r.status = "rejected",
                                r.reason = e,
                                e = 0; e < n.length; e++)
                                    (0,
                                    n[e])(void 0)
                            }
                            )),
                            r
                        }(l, r), Du());
                    else
                        wo(e, t, r, Du())
                } catch (c) {
                    wo(e, t, {
                        then: function() {},
                        status: "rejected",
                        reason: c
                    }, Du())
                } finally {
                    U.p = a,
                    D.T = o
                }
            }
            function uo() {}
            function co(e, t, n, r) {
                if (5 !== e.tag)
                    throw Error(o(476));
                var i = fo(e).queue;
                lo(e, i, t, $, null === n ? uo : function() {
                    return ho(e),
                    n(r)
                }
                )
            }
            function fo(e) {
                var t = e.memoizedState;
                if (null !== t)
                    return t;
                var n = {};
                return (t = {
                    memoizedState: $,
                    baseState: $,
                    baseQueue: null,
                    queue: {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: xa,
                        lastRenderedState: $
                    },
                    next: null
                }).next = {
                    memoizedState: n,
                    baseState: n,
                    baseQueue: null,
                    queue: {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: xa,
                        lastRenderedState: n
                    },
                    next: null
                },
                e.memoizedState = t,
                null !== (e = e.alternate) && (e.memoizedState = t),
                t
            }
            function ho(e) {
                wo(e, fo(e).next.queue, {}, Du())
            }
            function po() {
                return Es(zd)
            }
            function mo() {
                return ba().memoizedState
            }
            function go() {
                return ba().memoizedState
            }
            function vo(e) {
                for (var t = e.return; null !== t; ) {
                    switch (t.tag) {
                    case 24:
                    case 3:
                        var n = Du()
                          , r = Rs(t, e = Ls(n), n);
                        return null !== r && (Ru(r, t, n),
                        Ns(r, t, n)),
                        t = {
                            cache: ji()
                        },
                        void (e.payload = t)
                    }
                    t = t.return
                }
            }
            function yo(e, t, n) {
                var r = Du();
                n = {
                    lane: r,
                    revertLane: 0,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                },
                ko(e) ? xo(t, n) : null !== (n = Ar(e, t, n, r)) && (Ru(n, e, r),
                Po(n, t, r))
            }
            function bo(e, t, n) {
                wo(e, t, n, Du())
            }
            function wo(e, t, n, r) {
                var i = {
                    lane: r,
                    revertLane: 0,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (ko(e))
                    xo(t, i);
                else {
                    var a = e.alternate;
                    if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
                        try {
                            var o = t.lastRenderedState
                              , s = a(o, n);
                            if (i.hasEagerState = !0,
                            i.eagerState = s,
                            Yn(s, o))
                                return Tr(e, t, i, 0),
                                null === tu && Cr(),
                                !1
                        } catch (l) {}
                    if (null !== (n = Ar(e, t, i, r)))
                        return Ru(n, e, r),
                        Po(n, t, r),
                        !0
                }
                return !1
            }
            function So(e, t, n, r) {
                if (r = {
                    lane: 2,
                    revertLane: Sc(),
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                },
                ko(e)) {
                    if (t)
                        throw Error(o(479))
                } else
                    null !== (t = Ar(e, n, r, 2)) && Ru(t, e, 2)
            }
            function ko(e) {
                var t = e.alternate;
                return e === Ji || null !== t && t === Ji
            }
            function xo(e, t) {
                ra = na = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next,
                n.next = t),
                e.pending = t
            }
            function Po(e, t, n) {
                if (0 !== (4194176 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes,
                    t.lanes = n,
                    Oe(e, n)
                }
            }
            var Eo = {
                readContext: Es,
                use: Sa,
                useCallback: ua,
                useContext: ua,
                useEffect: ua,
                useImperativeHandle: ua,
                useLayoutEffect: ua,
                useInsertionEffect: ua,
                useMemo: ua,
                useReducer: ua,
                useRef: ua,
                useState: ua,
                useDebugValue: ua,
                useDeferredValue: ua,
                useTransition: ua,
                useSyncExternalStore: ua,
                useId: ua
            };
            Eo.useCacheRefresh = ua,
            Eo.useMemoCache = ua,
            Eo.useHostTransitionStatus = ua,
            Eo.useFormState = ua,
            Eo.useActionState = ua,
            Eo.useOptimistic = ua;
            var Co = {
                readContext: Es,
                use: Sa,
                useCallback: function(e, t) {
                    return ya().memoizedState = [e, void 0 === t ? null : t],
                    e
                },
                useContext: Es,
                useEffect: Ga,
                useImperativeHandle: function(e, t, n) {
                    n = null !== n && void 0 !== n ? n.concat([e]) : null,
                    Ka(4194308, 4, to.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return Ka(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    Ka(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = ya();
                    t = void 0 === t ? null : t;
                    var r = e();
                    if (ia) {
                        be(!0);
                        try {
                            e()
                        } finally {
                            be(!1)
                        }
                    }
                    return n.memoizedState = [r, t],
                    r
                },
                useReducer: function(e, t, n) {
                    var r = ya();
                    if (void 0 !== n) {
                        var i = n(t);
                        if (ia) {
                            be(!0);
                            try {
                                n(t)
                            } finally {
                                be(!1)
                            }
                        }
                    } else
                        i = t;
                    return r.memoizedState = r.baseState = i,
                    e = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: i
                    },
                    r.queue = e,
                    e = e.dispatch = yo.bind(null, Ji, e),
                    [r.memoizedState, e]
                },
                useRef: function(e) {
                    return e = {
                        current: e
                    },
                    ya().memoizedState = e
                },
                useState: function(e) {
                    var t = (e = Na(e)).queue
                      , n = bo.bind(null, Ji, t);
                    return t.dispatch = n,
                    [e.memoizedState, n]
                },
                useDebugValue: ro,
                useDeferredValue: function(e, t) {
                    return oo(ya(), e, t)
                },
                useTransition: function() {
                    var e = Na(!1);
                    return e = lo.bind(null, Ji, e.queue, !0, !1),
                    ya().memoizedState = e,
                    [!1, e]
                },
                useSyncExternalStore: function(e, t, n) {
                    var r = Ji
                      , i = ya();
                    if (Xr) {
                        if (void 0 === n)
                            throw Error(o(407));
                        n = n()
                    } else {
                        if (n = t(),
                        null === tu)
                            throw Error(o(349));
                        0 !== (60 & ru) || Aa(r, t, n)
                    }
                    i.memoizedState = n;
                    var a = {
                        value: n,
                        getSnapshot: t
                    };
                    return i.queue = a,
                    Ga(Da.bind(null, r, a, e), [e]),
                    r.flags |= 2048,
                    Qa(9, Ma.bind(null, r, a, n, t), {
                        destroy: void 0
                    }, null),
                    n
                },
                useId: function() {
                    var e = ya()
                      , t = tu.identifierPrefix;
                    if (Xr) {
                        var n = $r;
                        t = ":" + t + "R" + (n = (Ur & ~(1 << 32 - we(Ur) - 1)).toString(32) + n),
                        0 < (n = aa++) && (t += "H" + n.toString(32)),
                        t += ":"
                    } else
                        t = ":" + t + "r" + (n = la++).toString(32) + ":";
                    return e.memoizedState = t
                },
                useCacheRefresh: function() {
                    return ya().memoizedState = vo.bind(null, Ji)
                }
            };
            Co.useMemoCache = ka,
            Co.useHostTransitionStatus = po,
            Co.useFormState = Ua,
            Co.useActionState = Ua,
            Co.useOptimistic = function(e) {
                var t = ya();
                t.memoizedState = t.baseState = e;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = n,
                t = So.bind(null, Ji, !0, n),
                n.dispatch = t,
                [e, t]
            }
            ;
            var To = {
                readContext: Es,
                use: Sa,
                useCallback: io,
                useContext: Es,
                useEffect: Za,
                useImperativeHandle: no,
                useInsertionEffect: Ja,
                useLayoutEffect: eo,
                useMemo: ao,
                useReducer: Pa,
                useRef: Ya,
                useState: function() {
                    return Pa(xa)
                },
                useDebugValue: ro,
                useDeferredValue: function(e, t) {
                    return so(ba(), ea.memoizedState, e, t)
                },
                useTransition: function() {
                    var e = Pa(xa)[0]
                      , t = ba().memoizedState;
                    return ["boolean" === typeof e ? e : wa(e), t]
                },
                useSyncExternalStore: Ta,
                useId: mo
            };
            To.useCacheRefresh = go,
            To.useMemoCache = ka,
            To.useHostTransitionStatus = po,
            To.useFormState = $a,
            To.useActionState = $a,
            To.useOptimistic = function(e, t) {
                return Oa(ba(), 0, e, t)
            }
            ;
            var Ao = {
                readContext: Es,
                use: Sa,
                useCallback: io,
                useContext: Es,
                useEffect: Za,
                useImperativeHandle: no,
                useInsertionEffect: Ja,
                useLayoutEffect: eo,
                useMemo: ao,
                useReducer: Ca,
                useRef: Ya,
                useState: function() {
                    return Ca(xa)
                },
                useDebugValue: ro,
                useDeferredValue: function(e, t) {
                    var n = ba();
                    return null === ea ? oo(n, e, t) : so(n, ea.memoizedState, e, t)
                },
                useTransition: function() {
                    var e = Ca(xa)[0]
                      , t = ba().memoizedState;
                    return ["boolean" === typeof e ? e : wa(e), t]
                },
                useSyncExternalStore: Ta,
                useId: mo
            };
            function Mo(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : L({}, t, n),
                e.memoizedState = n,
                0 === e.lanes && (e.updateQueue.baseState = n)
            }
            Ao.useCacheRefresh = go,
            Ao.useMemoCache = ka,
            Ao.useHostTransitionStatus = po,
            Ao.useFormState = qa,
            Ao.useActionState = qa,
            Ao.useOptimistic = function(e, t) {
                var n = ba();
                return null !== ea ? Oa(n, 0, e, t) : (n.baseState = e,
                [e, n.queue.dispatch])
            }
            ;
            var Do = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && F(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = Du()
                      , i = Ls(r);
                    i.payload = t,
                    void 0 !== n && null !== n && (i.callback = n),
                    null !== (t = Rs(e, i, r)) && (Ru(t, e, r),
                    Ns(t, e, r))
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = Du()
                      , i = Ls(r);
                    i.tag = 1,
                    i.payload = t,
                    void 0 !== n && null !== n && (i.callback = n),
                    null !== (t = Rs(e, i, r)) && (Ru(t, e, r),
                    Ns(t, e, r))
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = Du()
                      , r = Ls(n);
                    r.tag = 2,
                    void 0 !== t && null !== t && (r.callback = t),
                    null !== (t = Rs(e, r, n)) && (Ru(t, e, n),
                    Ns(t, e, n))
                }
            };
            function Lo(e, t, n, r, i, a, o) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, o) : !t.prototype || !t.prototype.isPureReactComponent || (!Kn(n, r) || !Kn(i, a))
            }
            function Ro(e, t, n, r) {
                e = t.state,
                "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && Do.enqueueReplaceState(t, t.state, null)
            }
            function No(e, t) {
                var n = t;
                if ("ref"in t)
                    for (var r in n = {},
                    t)
                        "ref" !== r && (n[r] = t[r]);
                if (e = e.defaultProps)
                    for (var i in n === t && (n = L({}, n)),
                    e)
                        void 0 === n[i] && (n[i] = e[i]);
                return n
            }
            var Oo = "function" === typeof reportError ? reportError : function(e) {
                if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                    var t = new window.ErrorEvent("error",{
                        bubbles: !0,
                        cancelable: !0,
                        message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e),
                        error: e
                    });
                    if (!window.dispatchEvent(t))
                        return
                } else if ("object" === typeof process && "function" === typeof process.emit)
                    return void process.emit("uncaughtException", e);
                console.error(e)
            }
            ;
            function _o(e) {
                Oo(e)
            }
            function zo(e) {
                console.error(e)
            }
            function Fo(e) {
                Oo(e)
            }
            function Vo(e, t) {
                try {
                    (0,
                    e.onUncaughtError)(t.value, {
                        componentStack: t.stack
                    })
                } catch (n) {
                    setTimeout((function() {
                        throw n
                    }
                    ))
                }
            }
            function Io(e, t, n) {
                try {
                    (0,
                    e.onCaughtError)(n.value, {
                        componentStack: n.stack,
                        errorBoundary: 1 === t.tag ? t.stateNode : null
                    })
                } catch (r) {
                    setTimeout((function() {
                        throw r
                    }
                    ))
                }
            }
            function jo(e, t, n) {
                return (n = Ls(n)).tag = 3,
                n.payload = {
                    element: null
                },
                n.callback = function() {
                    Vo(e, t)
                }
                ,
                n
            }
            function Bo(e) {
                return (e = Ls(e)).tag = 3,
                e
            }
            function Uo(e, t, n, r) {
                var i = n.type.getDerivedStateFromError;
                if ("function" === typeof i) {
                    var a = r.value;
                    e.payload = function() {
                        return i(a)
                    }
                    ,
                    e.callback = function() {
                        Io(t, n, r)
                    }
                }
                var o = n.stateNode;
                null !== o && "function" === typeof o.componentDidCatch && (e.callback = function() {
                    Io(t, n, r),
                    "function" !== typeof i && (null === ku ? ku = new Set([this]) : ku.add(this));
                    var e = r.stack;
                    this.componentDidCatch(r.value, {
                        componentStack: null !== e ? e : ""
                    })
                }
                )
            }
            var $o = Error(o(461))
              , Wo = !1;
            function Ho(e, t, n, r) {
                t.child = null === e ? ki(t, null, n, r) : Si(t, e.child, n, r)
            }
            function qo(e, t, n, r, i) {
                n = n.render;
                var a = t.ref;
                if ("ref"in r) {
                    var o = {};
                    for (var s in r)
                        "ref" !== s && (o[s] = r[s])
                } else
                    o = r;
                return Ps(t),
                r = da(e, t, n, o, a, i),
                s = ma(),
                null === e || Wo ? (Xr && s && qr(t),
                t.flags |= 1,
                Ho(e, t, r, i),
                t.child) : (ga(e, t, i),
                fs(e, t, i))
            }
            function Qo(e, t, n, r, i) {
                if (null === e) {
                    var a = n.type;
                    return "function" !== typeof a || zl(a) || void 0 !== a.defaultProps || null !== n.compare ? ((e = Il(n.type, null, r, t, t.mode, i)).ref = t.ref,
                    e.return = t,
                    t.child = e) : (t.tag = 15,
                    t.type = a,
                    Yo(e, t, a, r, i))
                }
                if (a = e.child,
                !hs(e, i)) {
                    var o = a.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : Kn)(o, r) && e.ref === t.ref)
                        return fs(e, t, i)
                }
                return t.flags |= 1,
                (e = Fl(a, r)).ref = t.ref,
                e.return = t,
                t.child = e
            }
            function Yo(e, t, n, r, i) {
                if (null !== e) {
                    var a = e.memoizedProps;
                    if (Kn(a, r) && e.ref === t.ref) {
                        if (Wo = !1,
                        t.pendingProps = r = a,
                        !hs(e, i))
                            return t.lanes = e.lanes,
                            fs(e, t, i);
                        0 !== (131072 & e.flags) && (Wo = !0)
                    }
                }
                return Zo(e, t, n, r, i)
            }
            function Ko(e, t, n) {
                var r = t.pendingProps
                  , i = r.children
                  , a = 0 !== (2 & t.stateNode._pendingVisibility)
                  , o = null !== e ? e.memoizedState : null;
                if (Go(e, t),
                "hidden" === r.mode || a) {
                    if (0 !== (128 & t.flags)) {
                        if (r = null !== o ? o.baseLanes | n : n,
                        null !== e) {
                            for (i = t.child = e.child,
                            a = 0; null !== i; )
                                a = a | i.lanes | i.childLanes,
                                i = i.sibling;
                            t.childLanes = a & ~r
                        } else
                            t.childLanes = 0,
                            t.child = null;
                        return Xo(e, t, r, n)
                    }
                    if (0 === (536870912 & n))
                        return t.lanes = t.childLanes = 536870912,
                        Xo(e, t, null !== o ? o.baseLanes | n : n, n);
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null
                    },
                    null !== e && Xi(0, null !== o ? o.cachePool : null),
                    null !== o ? Ei(t, o) : Ci(),
                    Li(t)
                } else
                    null !== o ? (Xi(0, o.cachePool),
                    Ei(t, o),
                    Ri(),
                    t.memoizedState = null) : (null !== e && Xi(0, null),
                    Ci(),
                    Ri());
                return Ho(e, t, i, n),
                t.child
            }
            function Xo(e, t, n, r) {
                var i = Ki();
                return i = null === i ? null : {
                    parent: Ii._currentValue,
                    pool: i
                },
                t.memoizedState = {
                    baseLanes: n,
                    cachePool: i
                },
                null !== e && Xi(0, null),
                Ci(),
                Li(t),
                null !== e && ks(e, t, r, !0),
                null
            }
            function Go(e, t) {
                var n = t.ref;
                if (null === n)
                    null !== e && null !== e.ref && (t.flags |= 2097664);
                else {
                    if ("function" !== typeof n && "object" !== typeof n)
                        throw Error(o(284));
                    null !== e && e.ref === n || (t.flags |= 2097664)
                }
            }
            function Zo(e, t, n, r, i) {
                return Ps(t),
                n = da(e, t, n, r, void 0, i),
                r = ma(),
                null === e || Wo ? (Xr && r && qr(t),
                t.flags |= 1,
                Ho(e, t, n, i),
                t.child) : (ga(e, t, i),
                fs(e, t, i))
            }
            function Jo(e, t, n, r, i, a) {
                return Ps(t),
                t.updateQueue = null,
                n = ha(t, r, n, i),
                fa(e),
                r = ma(),
                null === e || Wo ? (Xr && r && qr(t),
                t.flags |= 1,
                Ho(e, t, n, a),
                t.child) : (ga(e, t, a),
                fs(e, t, a))
            }
            function es(e, t, n, r, i) {
                if (Ps(t),
                null === t.stateNode) {
                    var a = Rr
                      , o = n.contextType;
                    "object" === typeof o && null !== o && (a = Es(o)),
                    a = new n(r,a),
                    t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null,
                    a.updater = Do,
                    t.stateNode = a,
                    a._reactInternals = t,
                    (a = t.stateNode).props = r,
                    a.state = t.memoizedState,
                    a.refs = {},
                    Ms(t),
                    o = n.contextType,
                    a.context = "object" === typeof o && null !== o ? Es(o) : Rr,
                    a.state = t.memoizedState,
                    "function" === typeof (o = n.getDerivedStateFromProps) && (Mo(t, n, o, r),
                    a.state = t.memoizedState),
                    "function" === typeof n.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (o = a.state,
                    "function" === typeof a.componentWillMount && a.componentWillMount(),
                    "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                    o !== a.state && Do.enqueueReplaceState(a, a.state, null),
                    Fs(t, r, a, i),
                    zs(),
                    a.state = t.memoizedState),
                    "function" === typeof a.componentDidMount && (t.flags |= 4194308),
                    r = !0
                } else if (null === e) {
                    a = t.stateNode;
                    var s = t.memoizedProps
                      , l = No(n, s);
                    a.props = l;
                    var u = a.context
                      , c = n.contextType;
                    o = Rr,
                    "object" === typeof c && null !== c && (o = Es(c));
                    var d = n.getDerivedStateFromProps;
                    c = "function" === typeof d || "function" === typeof a.getSnapshotBeforeUpdate,
                    s = t.pendingProps !== s,
                    c || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (s || u !== o) && Ro(t, a, r, o),
                    As = !1;
                    var f = t.memoizedState;
                    a.state = f,
                    Fs(t, r, a, i),
                    zs(),
                    u = t.memoizedState,
                    s || f !== u || As ? ("function" === typeof d && (Mo(t, n, d, r),
                    u = t.memoizedState),
                    (l = As || Lo(t, n, l, r, f, u, o)) ? (c || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || ("function" === typeof a.componentWillMount && a.componentWillMount(),
                    "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                    "function" === typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308),
                    t.memoizedProps = r,
                    t.memoizedState = u),
                    a.props = r,
                    a.state = u,
                    a.context = o,
                    r = l) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308),
                    r = !1)
                } else {
                    a = t.stateNode,
                    Ds(e, t),
                    c = No(n, o = t.memoizedProps),
                    a.props = c,
                    d = t.pendingProps,
                    f = a.context,
                    u = n.contextType,
                    l = Rr,
                    "object" === typeof u && null !== u && (l = Es(u)),
                    (u = "function" === typeof (s = n.getDerivedStateFromProps) || "function" === typeof a.getSnapshotBeforeUpdate) || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (o !== d || f !== l) && Ro(t, a, r, l),
                    As = !1,
                    f = t.memoizedState,
                    a.state = f,
                    Fs(t, r, a, i),
                    zs();
                    var h = t.memoizedState;
                    o !== d || f !== h || As || null !== e && null !== e.dependencies && xs(e.dependencies) ? ("function" === typeof s && (Mo(t, n, s, r),
                    h = t.memoizedState),
                    (c = As || Lo(t, n, c, r, f, h, l) || null !== e && null !== e.dependencies && xs(e.dependencies)) ? (u || "function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate || ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(r, h, l),
                    "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof a.componentDidUpdate && (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof a.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = h),
                    a.props = r,
                    a.state = h,
                    a.context = l,
                    r = c) : ("function" !== typeof a.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                    r = !1)
                }
                return a = r,
                Go(e, t),
                r = 0 !== (128 & t.flags),
                a || r ? (a = t.stateNode,
                n = r && "function" !== typeof n.getDerivedStateFromError ? null : a.render(),
                t.flags |= 1,
                null !== e && r ? (t.child = Si(t, e.child, null, i),
                t.child = Si(t, null, n, i)) : Ho(e, t, n, i),
                t.memoizedState = a.state,
                e = t.child) : e = fs(e, t, i),
                e
            }
            function ts(e, t, n, r) {
                return ii(),
                t.flags |= 256,
                Ho(e, t, n, r),
                t.child
            }
            var ns = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function rs(e) {
                return {
                    baseLanes: e,
                    cachePool: Gi()
                }
            }
            function is(e, t, n) {
                return e = null !== e ? e.childLanes & ~n : 0,
                t && (e |= pu),
                e
            }
            function as(e, t, n) {
                var r, i = t.pendingProps, a = !1, s = 0 !== (128 & t.flags);
                if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & Oi.current)),
                r && (a = !0,
                t.flags &= -129),
                r = 0 !== (32 & t.flags),
                t.flags &= -33,
                null === e) {
                    if (Xr) {
                        if (a ? Di(t) : Ri(),
                        Xr) {
                            var l, u = Kr;
                            if (l = u) {
                                e: {
                                    for (l = u,
                                    u = Zr; 8 !== l.nodeType; ) {
                                        if (!u) {
                                            u = null;
                                            break e
                                        }
                                        if (null === (l = sd(l.nextSibling))) {
                                            u = null;
                                            break e
                                        }
                                    }
                                    u = l
                                }
                                null !== u ? (t.memoizedState = {
                                    dehydrated: u,
                                    treeContext: null !== Br ? {
                                        id: Ur,
                                        overflow: $r
                                    } : null,
                                    retryLane: 536870912
                                },
                                (l = _l(18, null, null, 0)).stateNode = u,
                                l.return = t,
                                t.child = l,
                                Yr = t,
                                Kr = null,
                                l = !0) : l = !1
                            }
                            l || ei(t)
                        }
                        if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
                            return "$!" === u.data ? t.lanes = 16 : t.lanes = 536870912,
                            null;
                        Ni(t)
                    }
                    return u = i.children,
                    i = i.fallback,
                    a ? (Ri(),
                    u = ss({
                        mode: "hidden",
                        children: u
                    }, a = t.mode),
                    i = jl(i, a, n, null),
                    u.return = t,
                    i.return = t,
                    u.sibling = i,
                    t.child = u,
                    (a = t.child).memoizedState = rs(n),
                    a.childLanes = is(e, r, n),
                    t.memoizedState = ns,
                    i) : (Di(t),
                    os(t, u))
                }
                if (null !== (l = e.memoizedState) && null !== (u = l.dehydrated)) {
                    if (s)
                        256 & t.flags ? (Di(t),
                        t.flags &= -257,
                        t = ls(e, t, n)) : null !== t.memoizedState ? (Ri(),
                        t.child = e.child,
                        t.flags |= 128,
                        t = null) : (Ri(),
                        a = i.fallback,
                        u = t.mode,
                        i = ss({
                            mode: "visible",
                            children: i.children
                        }, u),
                        (a = jl(a, u, n, null)).flags |= 2,
                        i.return = t,
                        a.return = t,
                        i.sibling = a,
                        t.child = i,
                        Si(t, e.child, null, n),
                        (i = t.child).memoizedState = rs(n),
                        i.childLanes = is(e, r, n),
                        t.memoizedState = ns,
                        t = a);
                    else if (Di(t),
                    "$!" === u.data) {
                        if (r = u.nextSibling && u.nextSibling.dataset)
                            var c = r.dgst;
                        r = c,
                        (i = Error(o(419))).stack = "",
                        i.digest = r,
                        ai({
                            value: i,
                            source: null,
                            stack: null
                        }),
                        t = ls(e, t, n)
                    } else if (Wo || ks(e, t, n, !1),
                    r = 0 !== (n & e.childLanes),
                    Wo || r) {
                        if (null !== (r = tu)) {
                            if (0 !== (42 & (i = n & -n)))
                                i = 1;
                            else
                                switch (i) {
                                case 2:
                                    i = 1;
                                    break;
                                case 8:
                                    i = 4;
                                    break;
                                case 32:
                                    i = 16;
                                    break;
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                    i = 64;
                                    break;
                                case 268435456:
                                    i = 134217728;
                                    break;
                                default:
                                    i = 0
                                }
                            if (0 !== (i = 0 !== (i & (r.suspendedLanes | n)) ? 0 : i) && i !== l.retryLane)
                                throw l.retryLane = i,
                                Mr(e, i),
                                Ru(r, e, i),
                                $o
                        }
                        "$?" === u.data || Wu(),
                        t = ls(e, t, n)
                    } else
                        "$?" === u.data ? (t.flags |= 128,
                        t.child = e.child,
                        t = sc.bind(null, e),
                        u._reactRetry = t,
                        t = null) : (e = l.treeContext,
                        Kr = sd(u.nextSibling),
                        Yr = t,
                        Xr = !0,
                        Gr = null,
                        Zr = !1,
                        null !== e && (Ir[jr++] = Ur,
                        Ir[jr++] = $r,
                        Ir[jr++] = Br,
                        Ur = e.id,
                        $r = e.overflow,
                        Br = t),
                        (t = os(t, i.children)).flags |= 4096);
                    return t
                }
                return a ? (Ri(),
                a = i.fallback,
                u = t.mode,
                c = (l = e.child).sibling,
                (i = Fl(l, {
                    mode: "hidden",
                    children: i.children
                })).subtreeFlags = 31457280 & l.subtreeFlags,
                null !== c ? a = Fl(c, a) : (a = jl(a, u, n, null)).flags |= 2,
                a.return = t,
                i.return = t,
                i.sibling = a,
                t.child = i,
                i = a,
                a = t.child,
                null === (u = e.child.memoizedState) ? u = rs(n) : (null !== (l = u.cachePool) ? (c = Ii._currentValue,
                l = l.parent !== c ? {
                    parent: c,
                    pool: c
                } : l) : l = Gi(),
                u = {
                    baseLanes: u.baseLanes | n,
                    cachePool: l
                }),
                a.memoizedState = u,
                a.childLanes = is(e, r, n),
                t.memoizedState = ns,
                i) : (Di(t),
                e = (n = e.child).sibling,
                (n = Fl(n, {
                    mode: "visible",
                    children: i.children
                })).return = t,
                n.sibling = null,
                null !== e && (null === (r = t.deletions) ? (t.deletions = [e],
                t.flags |= 16) : r.push(e)),
                t.child = n,
                t.memoizedState = null,
                n)
            }
            function os(e, t) {
                return (t = ss({
                    mode: "visible",
                    children: t
                }, e.mode)).return = e,
                e.child = t
            }
            function ss(e, t) {
                return Bl(e, t, 0, null)
            }
            function ls(e, t, n) {
                return Si(t, e.child, null, n),
                (e = os(t, t.pendingProps.children)).flags |= 2,
                t.memoizedState = null,
                e
            }
            function us(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t),
                ws(e.return, t, n)
            }
            function cs(e, t, n, r, i) {
                var a = e.memoizedState;
                null === a ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: i
                } : (a.isBackwards = t,
                a.rendering = null,
                a.renderingStartTime = 0,
                a.last = r,
                a.tail = n,
                a.tailMode = i)
            }
            function ds(e, t, n) {
                var r = t.pendingProps
                  , i = r.revealOrder
                  , a = r.tail;
                if (Ho(e, t, r.children, n),
                0 !== (2 & (r = Oi.current)))
                    r = 1 & r | 2,
                    t.flags |= 128;
                else {
                    if (null !== e && 0 !== (128 & e.flags))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && us(e, n, t);
                            else if (19 === e.tag)
                                us(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === t)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                switch (Y(Oi, r),
                i) {
                case "forwards":
                    for (n = t.child,
                    i = null; null !== n; )
                        null !== (e = n.alternate) && null === _i(e) && (i = n),
                        n = n.sibling;
                    null === (n = i) ? (i = t.child,
                    t.child = null) : (i = n.sibling,
                    n.sibling = null),
                    cs(t, !1, i, n, a);
                    break;
                case "backwards":
                    for (n = null,
                    i = t.child,
                    t.child = null; null !== i; ) {
                        if (null !== (e = i.alternate) && null === _i(e)) {
                            t.child = i;
                            break
                        }
                        e = i.sibling,
                        i.sibling = n,
                        n = i,
                        i = e
                    }
                    cs(t, !0, n, null, a);
                    break;
                case "together":
                    cs(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null
                }
                return t.child
            }
            function fs(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies),
                du |= t.lanes,
                0 === (n & t.childLanes)) {
                    if (null === e)
                        return null;
                    if (ks(e, t, n, !1),
                    0 === (n & t.childLanes))
                        return null
                }
                if (null !== e && t.child !== e.child)
                    throw Error(o(153));
                if (null !== t.child) {
                    for (n = Fl(e = t.child, e.pendingProps),
                    t.child = n,
                    n.return = t; null !== e.sibling; )
                        e = e.sibling,
                        (n = n.sibling = Fl(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }
            function hs(e, t) {
                return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !xs(e))
            }
            function ps(e, t, n) {
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps)
                        Wo = !0;
                    else {
                        if (!hs(e, n) && 0 === (128 & t.flags))
                            return Wo = !1,
                            function(e, t, n) {
                                switch (t.tag) {
                                case 3:
                                    J(t, t.stateNode.containerInfo),
                                    ys(t, Ii, e.memoizedState.cache),
                                    ii();
                                    break;
                                case 27:
                                case 5:
                                    te(t);
                                    break;
                                case 4:
                                    J(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    ys(t, t.type, t.memoizedProps.value);
                                    break;
                                case 13:
                                    var r = t.memoizedState;
                                    if (null !== r)
                                        return null !== r.dehydrated ? (Di(t),
                                        t.flags |= 128,
                                        null) : 0 !== (n & t.child.childLanes) ? as(e, t, n) : (Di(t),
                                        null !== (e = fs(e, t, n)) ? e.sibling : null);
                                    Di(t);
                                    break;
                                case 19:
                                    var i = 0 !== (128 & e.flags);
                                    if ((r = 0 !== (n & t.childLanes)) || (ks(e, t, n, !1),
                                    r = 0 !== (n & t.childLanes)),
                                    i) {
                                        if (r)
                                            return ds(e, t, n);
                                        t.flags |= 128
                                    }
                                    if (null !== (i = t.memoizedState) && (i.rendering = null,
                                    i.tail = null,
                                    i.lastEffect = null),
                                    Y(Oi, Oi.current),
                                    r)
                                        break;
                                    return null;
                                case 22:
                                case 23:
                                    return t.lanes = 0,
                                    Ko(e, t, n);
                                case 24:
                                    ys(t, Ii, e.memoizedState.cache)
                                }
                                return fs(e, t, n)
                            }(e, t, n);
                        Wo = 0 !== (131072 & e.flags)
                    }
                else
                    Wo = !1,
                    Xr && 0 !== (1048576 & t.flags) && Hr(t, Vr, t.index);
                switch (t.lanes = 0,
                t.tag) {
                case 16:
                    e: {
                        e = t.pendingProps;
                        var r = t.elementType
                          , i = r._init;
                        if (r = i(r._payload),
                        t.type = r,
                        "function" !== typeof r) {
                            if (void 0 !== r && null !== r) {
                                if ((i = r.$$typeof) === v) {
                                    t.tag = 11,
                                    t = qo(null, t, r, e, n);
                                    break e
                                }
                                if (i === w) {
                                    t.tag = 14,
                                    t = Qo(null, t, r, e, n);
                                    break e
                                }
                            }
                            throw t = T(r) || r,
                            Error(o(306, t, ""))
                        }
                        zl(r) ? (e = No(r, e),
                        t.tag = 1,
                        t = es(null, t, r, e, n)) : (t.tag = 0,
                        t = Zo(null, t, r, e, n))
                    }
                    return t;
                case 0:
                    return Zo(e, t, t.type, t.pendingProps, n);
                case 1:
                    return es(e, t, r = t.type, i = No(r, t.pendingProps), n);
                case 3:
                    e: {
                        if (J(t, t.stateNode.containerInfo),
                        null === e)
                            throw Error(o(387));
                        var a = t.pendingProps;
                        r = (i = t.memoizedState).element,
                        Ds(e, t),
                        Fs(t, a, null, n);
                        var s = t.memoizedState;
                        if (a = s.cache,
                        ys(t, Ii, a),
                        a !== i.cache && Ss(t, [Ii], n, !0),
                        zs(),
                        a = s.element,
                        i.isDehydrated) {
                            if (i = {
                                element: a,
                                isDehydrated: !1,
                                cache: s.cache
                            },
                            t.updateQueue.baseState = i,
                            t.memoizedState = i,
                            256 & t.flags) {
                                t = ts(e, t, a, n);
                                break e
                            }
                            if (a !== r) {
                                ai(r = Or(Error(o(424)), t)),
                                t = ts(e, t, a, n);
                                break e
                            }
                            for (Kr = sd(t.stateNode.containerInfo.firstChild),
                            Yr = t,
                            Xr = !0,
                            Gr = null,
                            Zr = !0,
                            n = ki(t, null, a, n),
                            t.child = n; n; )
                                n.flags = -3 & n.flags | 4096,
                                n = n.sibling
                        } else {
                            if (ii(),
                            a === r) {
                                t = fs(e, t, n);
                                break e
                            }
                            Ho(e, t, a, n)
                        }
                        t = t.child
                    }
                    return t;
                case 26:
                    return Go(e, t),
                    null === e ? (n = gd(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Xr || (n = t.type,
                    e = t.pendingProps,
                    (r = Kc(G.current).createElement(n))[Ve] = t,
                    r[Ie] = e,
                    qc(r, n, e),
                    Ge(r),
                    t.stateNode = r) : t.memoizedState = gd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
                    null;
                case 27:
                    return te(t),
                    null === e && Xr && (r = t.stateNode = ud(t.type, t.pendingProps, G.current),
                    Yr = t,
                    Zr = !0,
                    Kr = sd(r.firstChild)),
                    r = t.pendingProps.children,
                    null !== e || Xr ? Ho(e, t, r, n) : t.child = Si(t, null, r, n),
                    Go(e, t),
                    t.child;
                case 5:
                    return null === e && Xr && ((i = r = Kr) && (null !== (r = function(e, t, n, r) {
                        for (; 1 === e.nodeType; ) {
                            var i = n;
                            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                                if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type))
                                    break
                            } else if (r) {
                                if (!e[He])
                                    switch (t) {
                                    case "meta":
                                        if (!e.hasAttribute("itemprop"))
                                            break;
                                        return e;
                                    case "link":
                                        if ("stylesheet" === (a = e.getAttribute("rel")) && e.hasAttribute("data-precedence"))
                                            break;
                                        if (a !== i.rel || e.getAttribute("href") !== (null == i.href ? null : i.href) || e.getAttribute("crossorigin") !== (null == i.crossOrigin ? null : i.crossOrigin) || e.getAttribute("title") !== (null == i.title ? null : i.title))
                                            break;
                                        return e;
                                    case "style":
                                        if (e.hasAttribute("data-precedence"))
                                            break;
                                        return e;
                                    case "script":
                                        if (((a = e.getAttribute("src")) !== (null == i.src ? null : i.src) || e.getAttribute("type") !== (null == i.type ? null : i.type) || e.getAttribute("crossorigin") !== (null == i.crossOrigin ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                                            break;
                                        return e;
                                    default:
                                        return e
                                    }
                            } else {
                                if ("input" !== t || "hidden" !== e.type)
                                    return e;
                                var a = null == i.name ? null : "" + i.name;
                                if ("hidden" === i.type && e.getAttribute("name") === a)
                                    return e
                            }
                            if (null === (e = sd(e.nextSibling)))
                                break
                        }
                        return null
                    }(r, t.type, t.pendingProps, Zr)) ? (t.stateNode = r,
                    Yr = t,
                    Kr = sd(r.firstChild),
                    Zr = !1,
                    i = !0) : i = !1),
                    i || ei(t)),
                    te(t),
                    i = t.type,
                    a = t.pendingProps,
                    s = null !== e ? e.memoizedProps : null,
                    r = a.children,
                    Zc(i, a) ? r = null : null !== s && Zc(i, s) && (t.flags |= 32),
                    null !== t.memoizedState && (i = da(e, t, pa, null, null, n),
                    zd._currentValue = i),
                    Go(e, t),
                    Ho(e, t, r, n),
                    t.child;
                case 6:
                    return null === e && Xr && ((e = n = Kr) && (null !== (n = function(e, t, n) {
                        if ("" === t)
                            return null;
                        for (; 3 !== e.nodeType; ) {
                            if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n)
                                return null;
                            if (null === (e = sd(e.nextSibling)))
                                return null
                        }
                        return e
                    }(n, t.pendingProps, Zr)) ? (t.stateNode = n,
                    Yr = t,
                    Kr = null,
                    e = !0) : e = !1),
                    e || ei(t)),
                    null;
                case 13:
                    return as(e, t, n);
                case 4:
                    return J(t, t.stateNode.containerInfo),
                    r = t.pendingProps,
                    null === e ? t.child = Si(t, null, r, n) : Ho(e, t, r, n),
                    t.child;
                case 11:
                    return qo(e, t, t.type, t.pendingProps, n);
                case 7:
                    return Ho(e, t, t.pendingProps, n),
                    t.child;
                case 8:
                case 12:
                    return Ho(e, t, t.pendingProps.children, n),
                    t.child;
                case 10:
                    return r = t.pendingProps,
                    ys(t, t.type, r.value),
                    Ho(e, t, r.children, n),
                    t.child;
                case 9:
                    return i = t.type._context,
                    r = t.pendingProps.children,
                    Ps(t),
                    r = r(i = Es(i)),
                    t.flags |= 1,
                    Ho(e, t, r, n),
                    t.child;
                case 14:
                    return Qo(e, t, t.type, t.pendingProps, n);
                case 15:
                    return Yo(e, t, t.type, t.pendingProps, n);
                case 19:
                    return ds(e, t, n);
                case 22:
                    return Ko(e, t, n);
                case 24:
                    return Ps(t),
                    r = Es(Ii),
                    null === e ? (null === (i = Ki()) && (i = tu,
                    a = ji(),
                    i.pooledCache = a,
                    a.refCount++,
                    null !== a && (i.pooledCacheLanes |= n),
                    i = a),
                    t.memoizedState = {
                        parent: r,
                        cache: i
                    },
                    Ms(t),
                    ys(t, Ii, i)) : (0 !== (e.lanes & n) && (Ds(e, t),
                    Fs(t, null, null, n),
                    zs()),
                    i = e.memoizedState,
                    a = t.memoizedState,
                    i.parent !== r ? (i = {
                        parent: r,
                        cache: r
                    },
                    t.memoizedState = i,
                    0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = i),
                    ys(t, Ii, r)) : (r = a.cache,
                    ys(t, Ii, r),
                    r !== i.cache && Ss(t, [Ii], n, !0))),
                    Ho(e, t, t.pendingProps.children, n),
                    t.child;
                case 29:
                    throw t.pendingProps
                }
                throw Error(o(156, t.tag))
            }
            var ms = q(null)
              , gs = null
              , vs = null;
            function ys(e, t, n) {
                Y(ms, t._currentValue),
                t._currentValue = n
            }
            function bs(e) {
                e._currentValue = ms.current,
                Q(ms)
            }
            function ws(e, t, n) {
                for (; null !== e; ) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                    null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
                    e === n)
                        break;
                    e = e.return
                }
            }
            function Ss(e, t, n, r) {
                var i = e.child;
                for (null !== i && (i.return = e); null !== i; ) {
                    var a = i.dependencies;
                    if (null !== a) {
                        var s = i.child;
                        a = a.firstContext;
                        e: for (; null !== a; ) {
                            var l = a;
                            a = i;
                            for (var u = 0; u < t.length; u++)
                                if (l.context === t[u]) {
                                    a.lanes |= n,
                                    null !== (l = a.alternate) && (l.lanes |= n),
                                    ws(a.return, n, e),
                                    r || (s = null);
                                    break e
                                }
                            a = l.next
                        }
                    } else if (18 === i.tag) {
                        if (null === (s = i.return))
                            throw Error(o(341));
                        s.lanes |= n,
                        null !== (a = s.alternate) && (a.lanes |= n),
                        ws(s, n, e),
                        s = null
                    } else
                        s = i.child;
                    if (null !== s)
                        s.return = i;
                    else
                        for (s = i; null !== s; ) {
                            if (s === e) {
                                s = null;
                                break
                            }
                            if (null !== (i = s.sibling)) {
                                i.return = s.return,
                                s = i;
                                break
                            }
                            s = s.return
                        }
                    i = s
                }
            }
            function ks(e, t, n, r) {
                e = null;
                for (var i = t, a = !1; null !== i; ) {
                    if (!a)
                        if (0 !== (524288 & i.flags))
                            a = !0;
                        else if (0 !== (262144 & i.flags))
                            break;
                    if (10 === i.tag) {
                        var s = i.alternate;
                        if (null === s)
                            throw Error(o(387));
                        if (null !== (s = s.memoizedProps)) {
                            var l = i.type;
                            Yn(i.pendingProps.value, s.value) || (null !== e ? e.push(l) : e = [l])
                        }
                    } else if (i === Z.current) {
                        if (null === (s = i.alternate))
                            throw Error(o(387));
                        s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (null !== e ? e.push(zd) : e = [zd])
                    }
                    i = i.return
                }
                null !== e && Ss(t, e, n, r),
                t.flags |= 262144
            }
            function xs(e) {
                for (e = e.firstContext; null !== e; ) {
                    if (!Yn(e.context._currentValue, e.memoizedValue))
                        return !0;
                    e = e.next
                }
                return !1
            }
            function Ps(e) {
                gs = e,
                vs = null,
                null !== (e = e.dependencies) && (e.firstContext = null)
            }
            function Es(e) {
                return Ts(gs, e)
            }
            function Cs(e, t) {
                return null === gs && Ps(e),
                Ts(e, t)
            }
            function Ts(e, t) {
                var n = t._currentValue;
                if (t = {
                    context: t,
                    memoizedValue: n,
                    next: null
                },
                null === vs) {
                    if (null === e)
                        throw Error(o(308));
                    vs = t,
                    e.dependencies = {
                        lanes: 0,
                        firstContext: t
                    },
                    e.flags |= 524288
                } else
                    vs = vs.next = t;
                return n
            }
            var As = !1;
            function Ms(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        lanes: 0,
                        hiddenCallbacks: null
                    },
                    callbacks: null
                }
            }
            function Ds(e, t) {
                e = e.updateQueue,
                t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    callbacks: null
                })
            }
            function Ls(e) {
                return {
                    lane: e,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function Rs(e, t, n) {
                var r = e.updateQueue;
                if (null === r)
                    return null;
                if (r = r.shared,
                0 !== (2 & eu)) {
                    var i = r.pending;
                    return null === i ? t.next = t : (t.next = i.next,
                    i.next = t),
                    r.pending = t,
                    t = Lr(e),
                    Dr(e, null, n),
                    t
                }
                return Tr(e, r, t, n),
                Lr(e)
            }
            function Ns(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared,
                0 !== (4194176 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes,
                    t.lanes = n,
                    Oe(e, n)
                }
            }
            function Os(e, t) {
                var n = e.updateQueue
                  , r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var i = null
                      , a = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var o = {
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: null,
                                next: null
                            };
                            null === a ? i = a = o : a = a.next = o,
                            n = n.next
                        } while (null !== n);
                        null === a ? i = a = t : a = a.next = t
                    } else
                        i = a = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: i,
                        lastBaseUpdate: a,
                        shared: r.shared,
                        callbacks: r.callbacks
                    },
                    void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t,
                n.lastBaseUpdate = t
            }
            var _s = !1;
            function zs() {
                if (_s) {
                    if (null !== Hi)
                        throw Hi
                }
            }
            function Fs(e, t, n, r) {
                _s = !1;
                var i = e.updateQueue;
                As = !1;
                var a = i.firstBaseUpdate
                  , o = i.lastBaseUpdate
                  , s = i.shared.pending;
                if (null !== s) {
                    i.shared.pending = null;
                    var l = s
                      , u = l.next;
                    l.next = null,
                    null === o ? a = u : o.next = u,
                    o = l;
                    var c = e.alternate;
                    null !== c && ((s = (c = c.updateQueue).lastBaseUpdate) !== o && (null === s ? c.firstBaseUpdate = u : s.next = u,
                    c.lastBaseUpdate = l))
                }
                if (null !== a) {
                    var d = i.baseState;
                    for (o = 0,
                    c = u = l = null,
                    s = a; ; ) {
                        var f = -536870913 & s.lane
                          , h = f !== s.lane;
                        if (h ? (ru & f) === f : (r & f) === f) {
                            0 !== f && f === Wi && (_s = !0),
                            null !== c && (c = c.next = {
                                lane: 0,
                                tag: s.tag,
                                payload: s.payload,
                                callback: null,
                                next: null
                            });
                            e: {
                                var p = e
                                  , m = s;
                                f = t;
                                var g = n;
                                switch (m.tag) {
                                case 1:
                                    if ("function" === typeof (p = m.payload)) {
                                        d = p.call(g, d, f);
                                        break e
                                    }
                                    d = p;
                                    break e;
                                case 3:
                                    p.flags = -65537 & p.flags | 128;
                                case 0:
                                    if (null === (f = "function" === typeof (p = m.payload) ? p.call(g, d, f) : p) || void 0 === f)
                                        break e;
                                    d = L({}, d, f);
                                    break e;
                                case 2:
                                    As = !0
                                }
                            }
                            null !== (f = s.callback) && (e.flags |= 64,
                            h && (e.flags |= 8192),
                            null === (h = i.callbacks) ? i.callbacks = [f] : h.push(f))
                        } else
                            h = {
                                lane: f,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            },
                            null === c ? (u = c = h,
                            l = d) : c = c.next = h,
                            o |= f;
                        if (null === (s = s.next)) {
                            if (null === (s = i.shared.pending))
                                break;
                            s = (h = s).next,
                            h.next = null,
                            i.lastBaseUpdate = h,
                            i.shared.pending = null
                        }
                    }
                    null === c && (l = d),
                    i.baseState = l,
                    i.firstBaseUpdate = u,
                    i.lastBaseUpdate = c,
                    null === a && (i.shared.lanes = 0),
                    du |= o,
                    e.lanes = o,
                    e.memoizedState = d
                }
            }
            function Vs(e, t) {
                if ("function" !== typeof e)
                    throw Error(o(191, e));
                e.call(t)
            }
            function Is(e, t) {
                var n = e.callbacks;
                if (null !== n)
                    for (e.callbacks = null,
                    e = 0; e < n.length; e++)
                        Vs(n[e], t)
            }
            function js(e, t) {
                try {
                    var n = t.updateQueue
                      , r = null !== n ? n.lastEffect : null;
                    if (null !== r) {
                        var i = r.next;
                        n = i;
                        do {
                            if ((n.tag & e) === e) {
                                r = void 0;
                                var a = n.create
                                  , o = n.inst;
                                r = a(),
                                o.destroy = r
                            }
                            n = n.next
                        } while (n !== i)
                    }
                } catch (s) {
                    rc(t, t.return, s)
                }
            }
            function Bs(e, t, n) {
                try {
                    var r = t.updateQueue
                      , i = null !== r ? r.lastEffect : null;
                    if (null !== i) {
                        var a = i.next;
                        r = a;
                        do {
                            if ((r.tag & e) === e) {
                                var o = r.inst
                                  , s = o.destroy;
                                if (void 0 !== s) {
                                    o.destroy = void 0,
                                    i = t;
                                    var l = n;
                                    try {
                                        s()
                                    } catch (u) {
                                        rc(i, l, u)
                                    }
                                }
                            }
                            r = r.next
                        } while (r !== a)
                    }
                } catch (u) {
                    rc(t, t.return, u)
                }
            }
            function Us(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    var n = e.stateNode;
                    try {
                        Is(t, n)
                    } catch (r) {
                        rc(e, e.return, r)
                    }
                }
            }
            function $s(e, t, n) {
                n.props = No(e.type, e.memoizedProps),
                n.state = e.memoizedState;
                try {
                    n.componentWillUnmount()
                } catch (r) {
                    rc(e, t, r)
                }
            }
            function Ws(e, t) {
                try {
                    var n = e.ref;
                    if (null !== n) {
                        var r = e.stateNode;
                        switch (e.tag) {
                        case 26:
                        case 27:
                        case 5:
                            var i = r;
                            break;
                        default:
                            i = r
                        }
                        "function" === typeof n ? e.refCleanup = n(i) : n.current = i
                    }
                } catch (a) {
                    rc(e, t, a)
                }
            }
            function Hs(e, t) {
                var n = e.ref
                  , r = e.refCleanup;
                if (null !== n)
                    if ("function" === typeof r)
                        try {
                            r()
                        } catch (i) {
                            rc(e, t, i)
                        } finally {
                            e.refCleanup = null,
                            null != (e = e.alternate) && (e.refCleanup = null)
                        }
                    else if ("function" === typeof n)
                        try {
                            n(null)
                        } catch (a) {
                            rc(e, t, a)
                        }
                    else
                        n.current = null
            }
            function qs(e) {
                var t = e.type
                  , n = e.memoizedProps
                  , r = e.stateNode;
                try {
                    e: switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n.autoFocus && r.focus();
                        break e;
                    case "img":
                        n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
                    }
                } catch (i) {
                    rc(e, e.return, i)
                }
            }
            function Qs(e, t, n) {
                try {
                    var r = e.stateNode;
                    !function(e, t, n, r) {
                        switch (t) {
                        case "div":
                        case "span":
                        case "svg":
                        case "path":
                        case "a":
                        case "g":
                        case "p":
                        case "li":
                            break;
                        case "input":
                            var i = null
                              , a = null
                              , s = null
                              , l = null
                              , u = null
                              , c = null
                              , d = null;
                            for (p in n) {
                                var f = n[p];
                                if (n.hasOwnProperty(p) && null != f)
                                    switch (p) {
                                    case "checked":
                                    case "value":
                                        break;
                                    case "defaultValue":
                                        u = f;
                                    default:
                                        r.hasOwnProperty(p) || Wc(e, t, p, null, r, f)
                                    }
                            }
                            for (var h in r) {
                                var p = r[h];
                                if (f = n[h],
                                r.hasOwnProperty(h) && (null != p || null != f))
                                    switch (h) {
                                    case "type":
                                        a = p;
                                        break;
                                    case "name":
                                        i = p;
                                        break;
                                    case "checked":
                                        c = p;
                                        break;
                                    case "defaultChecked":
                                        d = p;
                                        break;
                                    case "value":
                                        s = p;
                                        break;
                                    case "defaultValue":
                                        l = p;
                                        break;
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        if (null != p)
                                            throw Error(o(137, t));
                                        break;
                                    default:
                                        p !== f && Wc(e, t, h, p, r, f)
                                    }
                            }
                            return void gt(e, s, l, u, c, d, a, i);
                        case "select":
                            for (a in p = s = l = h = null,
                            n)
                                if (u = n[a],
                                n.hasOwnProperty(a) && null != u)
                                    switch (a) {
                                    case "value":
                                        break;
                                    case "multiple":
                                        p = u;
                                    default:
                                        r.hasOwnProperty(a) || Wc(e, t, a, null, r, u)
                                    }
                            for (i in r)
                                if (a = r[i],
                                u = n[i],
                                r.hasOwnProperty(i) && (null != a || null != u))
                                    switch (i) {
                                    case "value":
                                        h = a;
                                        break;
                                    case "defaultValue":
                                        l = a;
                                        break;
                                    case "multiple":
                                        s = a;
                                    default:
                                        a !== u && Wc(e, t, i, a, r, u)
                                    }
                            return t = l,
                            n = s,
                            r = p,
                            void (null != h ? bt(e, !!n, h, !1) : !!r !== !!n && (null != t ? bt(e, !!n, t, !0) : bt(e, !!n, n ? [] : "", !1)));
                        case "textarea":
                            for (l in p = h = null,
                            n)
                                if (i = n[l],
                                n.hasOwnProperty(l) && null != i && !r.hasOwnProperty(l))
                                    switch (l) {
                                    case "value":
                                    case "children":
                                        break;
                                    default:
                                        Wc(e, t, l, null, r, i)
                                    }
                            for (s in r)
                                if (i = r[s],
                                a = n[s],
                                r.hasOwnProperty(s) && (null != i || null != a))
                                    switch (s) {
                                    case "value":
                                        h = i;
                                        break;
                                    case "defaultValue":
                                        p = i;
                                        break;
                                    case "children":
                                        break;
                                    case "dangerouslySetInnerHTML":
                                        if (null != i)
                                            throw Error(o(91));
                                        break;
                                    default:
                                        i !== a && Wc(e, t, s, i, r, a)
                                    }
                            return void wt(e, h, p);
                        case "option":
                            for (var m in n)
                                if (h = n[m],
                                n.hasOwnProperty(m) && null != h && !r.hasOwnProperty(m))
                                    if ("selected" === m)
                                        e.selected = !1;
                                    else
                                        Wc(e, t, m, null, r, h);
                            for (u in r)
                                if (h = r[u],
                                p = n[u],
                                r.hasOwnProperty(u) && h !== p && (null != h || null != p))
                                    if ("selected" === u)
                                        e.selected = h && "function" !== typeof h && "symbol" !== typeof h;
                                    else
                                        Wc(e, t, u, h, r, p);
                            return;
                        case "img":
                        case "link":
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "embed":
                        case "hr":
                        case "keygen":
                        case "meta":
                        case "param":
                        case "source":
                        case "track":
                        case "wbr":
                        case "menuitem":
                            for (var g in n)
                                h = n[g],
                                n.hasOwnProperty(g) && null != h && !r.hasOwnProperty(g) && Wc(e, t, g, null, r, h);
                            for (c in r)
                                if (h = r[c],
                                p = n[c],
                                r.hasOwnProperty(c) && h !== p && (null != h || null != p))
                                    switch (c) {
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        if (null != h)
                                            throw Error(o(137, t));
                                        break;
                                    default:
                                        Wc(e, t, c, h, r, p)
                                    }
                            return;
                        default:
                            if (Ct(t)) {
                                for (var v in n)
                                    h = n[v],
                                    n.hasOwnProperty(v) && void 0 !== h && !r.hasOwnProperty(v) && Hc(e, t, v, void 0, r, h);
                                for (d in r)
                                    h = r[d],
                                    p = n[d],
                                    !r.hasOwnProperty(d) || h === p || void 0 === h && void 0 === p || Hc(e, t, d, h, r, p);
                                return
                            }
                        }
                        for (var y in n)
                            h = n[y],
                            n.hasOwnProperty(y) && null != h && !r.hasOwnProperty(y) && Wc(e, t, y, null, r, h);
                        for (f in r)
                            h = r[f],
                            p = n[f],
                            !r.hasOwnProperty(f) || h === p || null == h && null == p || Wc(e, t, f, h, r, p)
                    }(r, e.type, n, t),
                    r[Ie] = t
                } catch (i) {
                    rc(e, e.return, i)
                }
            }
            function Ys(e) {
                return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag || 4 === e.tag
            }
            function Ks(e) {
                e: for (; ; ) {
                    for (; null === e.sibling; ) {
                        if (null === e.return || Ys(e.return))
                            return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return,
                    e = e.sibling; 5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag; ) {
                        if (2 & e.flags)
                            continue e;
                        if (null === e.child || 4 === e.tag)
                            continue e;
                        e.child.return = e,
                        e = e.child
                    }
                    if (!(2 & e.flags))
                        return e.stateNode
                }
            }
            function Xs(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                    null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = $c));
                else if (4 !== r && 27 !== r && null !== (e = e.child))
                    for (Xs(e, t, n),
                    e = e.sibling; null !== e; )
                        Xs(e, t, n),
                        e = e.sibling
            }
            function Gs(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && 27 !== r && null !== (e = e.child))
                    for (Gs(e, t, n),
                    e = e.sibling; null !== e; )
                        Gs(e, t, n),
                        e = e.sibling
            }
            var Zs = !1
              , Js = !1
              , el = !1
              , tl = "function" === typeof WeakSet ? WeakSet : Set
              , nl = null
              , rl = !1;
            function il(e, t, n) {
                var r = n.flags;
                switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    vl(e, n),
                    4 & r && js(5, n);
                    break;
                case 1:
                    if (vl(e, n),
                    4 & r)
                        if (e = n.stateNode,
                        null === t)
                            try {
                                e.componentDidMount()
                            } catch (s) {
                                rc(n, n.return, s)
                            }
                        else {
                            var i = No(n.type, t.memoizedProps);
                            t = t.memoizedState;
                            try {
                                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                            } catch (l) {
                                rc(n, n.return, l)
                            }
                        }
                    64 & r && Us(n),
                    512 & r && Ws(n, n.return);
                    break;
                case 3:
                    if (vl(e, n),
                    64 & r && null !== (r = n.updateQueue)) {
                        if (e = null,
                        null !== n.child)
                            switch (n.child.tag) {
                            case 27:
                            case 5:
                            case 1:
                                e = n.child.stateNode
                            }
                        try {
                            Is(r, e)
                        } catch (s) {
                            rc(n, n.return, s)
                        }
                    }
                    break;
                case 26:
                    vl(e, n),
                    512 & r && Ws(n, n.return);
                    break;
                case 27:
                case 5:
                    vl(e, n),
                    null === t && 4 & r && qs(n),
                    512 & r && Ws(n, n.return);
                    break;
                case 12:
                default:
                    vl(e, n);
                    break;
                case 13:
                    vl(e, n),
                    4 & r && cl(e, n);
                    break;
                case 22:
                    if (!(i = null !== n.memoizedState || Zs)) {
                        t = null !== t && null !== t.memoizedState || Js;
                        var a = Zs
                          , o = Js;
                        Zs = i,
                        (Js = t) && !o ? bl(e, n, 0 !== (8772 & n.subtreeFlags)) : vl(e, n),
                        Zs = a,
                        Js = o
                    }
                    512 & r && ("manual" === n.memoizedProps.mode ? Ws(n, n.return) : Hs(n, n.return))
                }
            }
            function al(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null,
                al(t)),
                e.child = null,
                e.deletions = null,
                e.sibling = null,
                5 === e.tag && (null !== (t = e.stateNode) && qe(t)),
                e.stateNode = null,
                e.return = null,
                e.dependencies = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.stateNode = null,
                e.updateQueue = null
            }
            var ol = null
              , sl = !1;
            function ll(e, t, n) {
                for (n = n.child; null !== n; )
                    ul(e, t, n),
                    n = n.sibling
            }
            function ul(e, t, n) {
                if (ye && "function" === typeof ye.onCommitFiberUnmount)
                    try {
                        ye.onCommitFiberUnmount(ve, n)
                    } catch (o) {}
                switch (n.tag) {
                case 26:
                    Js || Hs(n, t),
                    ll(e, t, n),
                    n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                    break;
                case 27:
                    Js || Hs(n, t);
                    var r = ol
                      , i = sl;
                    for (ol = n.stateNode,
                    ll(e, t, n),
                    t = (n = n.stateNode).attributes; t.length; )
                        n.removeAttributeNode(t[0]);
                    qe(n),
                    ol = r,
                    sl = i;
                    break;
                case 5:
                    Js || Hs(n, t);
                case 6:
                    i = ol;
                    var a = sl;
                    if (ol = null,
                    ll(e, t, n),
                    sl = a,
                    null !== (ol = i))
                        if (sl)
                            try {
                                e = ol,
                                r = n.stateNode,
                                8 === e.nodeType ? e.parentNode.removeChild(r) : e.removeChild(r)
                            } catch (s) {
                                rc(n, t, s)
                            }
                        else
                            try {
                                ol.removeChild(n.stateNode)
                            } catch (s) {
                                rc(n, t, s)
                            }
                    break;
                case 18:
                    null !== ol && (sl ? (t = ol,
                    n = n.stateNode,
                    8 === t.nodeType ? ad(t.parentNode, n) : 1 === t.nodeType && ad(t, n),
                    gf(t)) : ad(ol, n.stateNode));
                    break;
                case 4:
                    r = ol,
                    i = sl,
                    ol = n.stateNode.containerInfo,
                    sl = !0,
                    ll(e, t, n),
                    ol = r,
                    sl = i;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    Js || Bs(2, n, t),
                    Js || Bs(4, n, t),
                    ll(e, t, n);
                    break;
                case 1:
                    Js || (Hs(n, t),
                    "function" === typeof (r = n.stateNode).componentWillUnmount && $s(n, t, r)),
                    ll(e, t, n);
                    break;
                case 21:
                    ll(e, t, n);
                    break;
                case 22:
                    Js || Hs(n, t),
                    Js = (r = Js) || null !== n.memoizedState,
                    ll(e, t, n),
                    Js = r;
                    break;
                default:
                    ll(e, t, n)
                }
            }
            function cl(e, t) {
                if (null === t.memoizedState && (null !== (e = t.alternate) && (null !== (e = e.memoizedState) && null !== (e = e.dehydrated))))
                    try {
                        gf(e)
                    } catch (n) {
                        rc(t, t.return, n)
                    }
            }
            function dl(e, t) {
                var n = function(e) {
                    switch (e.tag) {
                    case 13:
                    case 19:
                        var t = e.stateNode;
                        return null === t && (t = e.stateNode = new tl),
                        t;
                    case 22:
                        return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new tl),
                        t;
                    default:
                        throw Error(o(435, e.tag))
                    }
                }(e);
                t.forEach((function(t) {
                    var r = lc.bind(null, e, t);
                    n.has(t) || (n.add(t),
                    t.then(r, r))
                }
                ))
            }
            function fl(e, t) {
                var n = t.deletions;
                if (null !== n)
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r]
                          , a = e
                          , s = t
                          , l = s;
                        e: for (; null !== l; ) {
                            switch (l.tag) {
                            case 27:
                            case 5:
                                ol = l.stateNode,
                                sl = !1;
                                break e;
                            case 3:
                            case 4:
                                ol = l.stateNode.containerInfo,
                                sl = !0;
                                break e
                            }
                            l = l.return
                        }
                        if (null === ol)
                            throw Error(o(160));
                        ul(a, s, i),
                        ol = null,
                        sl = !1,
                        null !== (a = i.alternate) && (a.return = null),
                        i.return = null
                    }
                if (13878 & t.subtreeFlags)
                    for (t = t.child; null !== t; )
                        pl(t, e),
                        t = t.sibling
            }
            var hl = null;
            function pl(e, t) {
                var n = e.alternate
                  , r = e.flags;
                switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    fl(t, e),
                    ml(e),
                    4 & r && (Bs(3, e, e.return),
                    js(3, e),
                    Bs(5, e, e.return));
                    break;
                case 1:
                    fl(t, e),
                    ml(e),
                    512 & r && (Js || null === n || Hs(n, n.return)),
                    64 & r && Zs && (null !== (e = e.updateQueue) && (null !== (r = e.callbacks) && (n = e.shared.hiddenCallbacks,
                    e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
                    break;
                case 26:
                    var i = hl;
                    if (fl(t, e),
                    ml(e),
                    512 & r && (Js || null === n || Hs(n, n.return)),
                    4 & r) {
                        var a = null !== n ? n.memoizedState : null;
                        if (r = e.memoizedState,
                        null === n)
                            if (null === r)
                                if (null === e.stateNode) {
                                    e: {
                                        r = e.type,
                                        n = e.memoizedProps,
                                        i = i.ownerDocument || i;
                                        t: switch (r) {
                                        case "title":
                                            (!(a = i.getElementsByTagName("title")[0]) || a[He] || a[Ve] || "http://www.w3.org/2000/svg" === a.namespaceURI || a.hasAttribute("itemprop")) && (a = i.createElement(r),
                                            i.head.insertBefore(a, i.querySelector("head > title"))),
                                            qc(a, r, n),
                                            a[Ve] = e,
                                            Ge(a),
                                            r = a;
                                            break e;
                                        case "link":
                                            var s = Td("link", "href", i).get(r + (n.href || ""));
                                            if (s)
                                                for (var l = 0; l < s.length; l++)
                                                    if ((a = s[l]).getAttribute("href") === (null == n.href ? null : n.href) && a.getAttribute("rel") === (null == n.rel ? null : n.rel) && a.getAttribute("title") === (null == n.title ? null : n.title) && a.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                        s.splice(l, 1);
                                                        break t
                                                    }
                                            qc(a = i.createElement(r), r, n),
                                            i.head.appendChild(a);
                                            break;
                                        case "meta":
                                            if (s = Td("meta", "content", i).get(r + (n.content || "")))
                                                for (l = 0; l < s.length; l++)
                                                    if ((a = s[l]).getAttribute("content") === (null == n.content ? null : "" + n.content) && a.getAttribute("name") === (null == n.name ? null : n.name) && a.getAttribute("property") === (null == n.property ? null : n.property) && a.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && a.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                        s.splice(l, 1);
                                                        break t
                                                    }
                                            qc(a = i.createElement(r), r, n),
                                            i.head.appendChild(a);
                                            break;
                                        default:
                                            throw Error(o(468, r))
                                        }
                                        a[Ve] = e,
                                        Ge(a),
                                        r = a
                                    }
                                    e.stateNode = r
                                } else
                                    Ad(i, e.type, e.stateNode);
                            else
                                e.stateNode = kd(i, r, e.memoizedProps);
                        else
                            a !== r ? (null === a ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : a.count--,
                            null === r ? Ad(i, e.type, e.stateNode) : kd(i, r, e.memoizedProps)) : null === r && null !== e.stateNode && Qs(e, e.memoizedProps, n.memoizedProps)
                    }
                    break;
                case 27:
                    if (4 & r && null === e.alternate) {
                        i = e.stateNode,
                        a = e.memoizedProps;
                        try {
                            for (var u = i.firstChild; u; ) {
                                var c = u.nextSibling
                                  , d = u.nodeName;
                                u[He] || "HEAD" === d || "BODY" === d || "SCRIPT" === d || "STYLE" === d || "LINK" === d && "stylesheet" === u.rel.toLowerCase() || i.removeChild(u),
                                u = c
                            }
                            for (var f = e.type, h = i.attributes; h.length; )
                                i.removeAttributeNode(h[0]);
                            qc(i, f, a),
                            i[Ve] = e,
                            i[Ie] = a
                        } catch (m) {
                            rc(e, e.return, m)
                        }
                    }
                case 5:
                    if (fl(t, e),
                    ml(e),
                    512 & r && (Js || null === n || Hs(n, n.return)),
                    32 & e.flags) {
                        i = e.stateNode;
                        try {
                            kt(i, "")
                        } catch (m) {
                            rc(e, e.return, m)
                        }
                    }
                    4 & r && null != e.stateNode && Qs(e, i = e.memoizedProps, null !== n ? n.memoizedProps : i),
                    1024 & r && (el = !0);
                    break;
                case 6:
                    if (fl(t, e),
                    ml(e),
                    4 & r) {
                        if (null === e.stateNode)
                            throw Error(o(162));
                        r = e.memoizedProps,
                        n = e.stateNode;
                        try {
                            n.nodeValue = r
                        } catch (m) {
                            rc(e, e.return, m)
                        }
                    }
                    break;
                case 3:
                    if (Cd = null,
                    i = hl,
                    hl = fd(t.containerInfo),
                    fl(t, e),
                    hl = i,
                    ml(e),
                    4 & r && null !== n && n.memoizedState.isDehydrated)
                        try {
                            gf(t.containerInfo)
                        } catch (m) {
                            rc(e, e.return, m)
                        }
                    el && (el = !1,
                    gl(e));
                    break;
                case 4:
                    r = hl,
                    hl = fd(e.stateNode.containerInfo),
                    fl(t, e),
                    ml(e),
                    hl = r;
                    break;
                case 12:
                    fl(t, e),
                    ml(e);
                    break;
                case 13:
                    fl(t, e),
                    ml(e),
                    8192 & e.child.flags && null !== e.memoizedState !== (null !== n && null !== n.memoizedState) && (bu = le()),
                    4 & r && (null !== (r = e.updateQueue) && (e.updateQueue = null,
                    dl(e, r)));
                    break;
                case 22:
                    if (512 & r && (Js || null === n || Hs(n, n.return)),
                    u = null !== e.memoizedState,
                    c = null !== n && null !== n.memoizedState,
                    Zs = (d = Zs) || u,
                    Js = (f = Js) || c,
                    fl(t, e),
                    Js = f,
                    Zs = d,
                    ml(e),
                    (t = e.stateNode)._current = e,
                    t._visibility &= -3,
                    t._visibility |= 2 & t._pendingVisibility,
                    8192 & r && (t._visibility = u ? -2 & t._visibility : 1 | t._visibility,
                    u && (t = Zs || Js,
                    null === n || c || t || yl(e)),
                    null === e.memoizedProps || "manual" !== e.memoizedProps.mode))
                        e: for (n = null,
                        t = e; ; ) {
                            if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
                                if (null === n) {
                                    c = n = t;
                                    try {
                                        if (i = c.stateNode,
                                        u)
                                            "function" === typeof (a = i.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none";
                                        else {
                                            s = c.stateNode;
                                            var p = void 0 !== (l = c.memoizedProps.style) && null !== l && l.hasOwnProperty("display") ? l.display : null;
                                            s.style.display = null == p || "boolean" === typeof p ? "" : ("" + p).trim()
                                        }
                                    } catch (m) {
                                        rc(c, c.return, m)
                                    }
                                }
                            } else if (6 === t.tag) {
                                if (null === n) {
                                    c = t;
                                    try {
                                        c.stateNode.nodeValue = u ? "" : c.memoizedProps
                                    } catch (m) {
                                        rc(c, c.return, m)
                                    }
                                }
                            } else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                                t.child.return = t,
                                t = t.child;
                                continue
                            }
                            if (t === e)
                                break e;
                            for (; null === t.sibling; ) {
                                if (null === t.return || t.return === e)
                                    break e;
                                n === t && (n = null),
                                t = t.return
                            }
                            n === t && (n = null),
                            t.sibling.return = t.return,
                            t = t.sibling
                        }
                    4 & r && (null !== (r = e.updateQueue) && (null !== (n = r.retryQueue) && (r.retryQueue = null,
                    dl(e, n))));
                    break;
                case 19:
                    fl(t, e),
                    ml(e),
                    4 & r && (null !== (r = e.updateQueue) && (e.updateQueue = null,
                    dl(e, r)));
                    break;
                case 21:
                    break;
                default:
                    fl(t, e),
                    ml(e)
                }
            }
            function ml(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        if (27 !== e.tag) {
                            e: {
                                for (var n = e.return; null !== n; ) {
                                    if (Ys(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(o(160))
                            }
                            switch (r.tag) {
                            case 27:
                                var i = r.stateNode;
                                Gs(e, Ks(e), i);
                                break;
                            case 5:
                                var a = r.stateNode;
                                32 & r.flags && (kt(a, ""),
                                r.flags &= -33),
                                Gs(e, Ks(e), a);
                                break;
                            case 3:
                            case 4:
                                var s = r.stateNode.containerInfo;
                                Xs(e, Ks(e), s);
                                break;
                            default:
                                throw Error(o(161))
                            }
                        }
                    } catch (l) {
                        rc(e, e.return, l)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }
            function gl(e) {
                if (1024 & e.subtreeFlags)
                    for (e = e.child; null !== e; ) {
                        var t = e;
                        gl(t),
                        5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                        e = e.sibling
                    }
            }
            function vl(e, t) {
                if (8772 & t.subtreeFlags)
                    for (t = t.child; null !== t; )
                        il(e, t.alternate, t),
                        t = t.sibling
            }
            function yl(e) {
                for (e = e.child; null !== e; ) {
                    var t = e;
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Bs(4, t, t.return),
                        yl(t);
                        break;
                    case 1:
                        Hs(t, t.return);
                        var n = t.stateNode;
                        "function" === typeof n.componentWillUnmount && $s(t, t.return, n),
                        yl(t);
                        break;
                    case 26:
                    case 27:
                    case 5:
                        Hs(t, t.return),
                        yl(t);
                        break;
                    case 22:
                        Hs(t, t.return),
                        null === t.memoizedState && yl(t);
                        break;
                    default:
                        yl(t)
                    }
                    e = e.sibling
                }
            }
            function bl(e, t, n) {
                for (n = n && 0 !== (8772 & t.subtreeFlags),
                t = t.child; null !== t; ) {
                    var r = t.alternate
                      , i = e
                      , a = t
                      , o = a.flags;
                    switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                        bl(i, a, n),
                        js(4, a);
                        break;
                    case 1:
                        if (bl(i, a, n),
                        "function" === typeof (i = (r = a).stateNode).componentDidMount)
                            try {
                                i.componentDidMount()
                            } catch (u) {
                                rc(r, r.return, u)
                            }
                        if (null !== (i = (r = a).updateQueue)) {
                            var s = r.stateNode;
                            try {
                                var l = i.shared.hiddenCallbacks;
                                if (null !== l)
                                    for (i.shared.hiddenCallbacks = null,
                                    i = 0; i < l.length; i++)
                                        Vs(l[i], s)
                            } catch (u) {
                                rc(r, r.return, u)
                            }
                        }
                        n && 64 & o && Us(a),
                        Ws(a, a.return);
                        break;
                    case 26:
                    case 27:
                    case 5:
                        bl(i, a, n),
                        n && null === r && 4 & o && qs(a),
                        Ws(a, a.return);
                        break;
                    case 12:
                    default:
                        bl(i, a, n);
                        break;
                    case 13:
                        bl(i, a, n),
                        n && 4 & o && cl(i, a);
                        break;
                    case 22:
                        null === a.memoizedState && bl(i, a, n),
                        Ws(a, a.return)
                    }
                    t = t.sibling
                }
            }
            function wl(e, t) {
                var n = null;
                null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool),
                e = null,
                null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool),
                e !== n && (null != e && e.refCount++,
                null != n && Bi(n))
            }
            function Sl(e, t) {
                e = null,
                null !== t.alternate && (e = t.alternate.memoizedState.cache),
                (t = t.memoizedState.cache) !== e && (t.refCount++,
                null != e && Bi(e))
            }
            function kl(e, t, n, r) {
                if (10256 & t.subtreeFlags)
                    for (t = t.child; null !== t; )
                        xl(e, t, n, r),
                        t = t.sibling
            }
            function xl(e, t, n, r) {
                var i = t.flags;
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    kl(e, t, n, r),
                    2048 & i && js(9, t);
                    break;
                case 3:
                    kl(e, t, n, r),
                    2048 & i && (e = null,
                    null !== t.alternate && (e = t.alternate.memoizedState.cache),
                    (t = t.memoizedState.cache) !== e && (t.refCount++,
                    null != e && Bi(e)));
                    break;
                case 12:
                    if (2048 & i) {
                        kl(e, t, n, r),
                        e = t.stateNode;
                        try {
                            var a = t.memoizedProps
                              , o = a.id
                              , s = a.onPostCommit;
                            "function" === typeof s && s(o, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0)
                        } catch (l) {
                            rc(t, t.return, l)
                        }
                    } else
                        kl(e, t, n, r);
                    break;
                case 23:
                    break;
                case 22:
                    a = t.stateNode,
                    null !== t.memoizedState ? 4 & a._visibility ? kl(e, t, n, r) : El(e, t) : 4 & a._visibility ? kl(e, t, n, r) : (a._visibility |= 4,
                    Pl(e, t, n, r, 0 !== (10256 & t.subtreeFlags))),
                    2048 & i && wl(t.alternate, t);
                    break;
                case 24:
                    kl(e, t, n, r),
                    2048 & i && Sl(t.alternate, t);
                    break;
                default:
                    kl(e, t, n, r)
                }
            }
            function Pl(e, t, n, r, i) {
                for (i = i && 0 !== (10256 & t.subtreeFlags),
                t = t.child; null !== t; ) {
                    var a = e
                      , o = t
                      , s = n
                      , l = r
                      , u = o.flags;
                    switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Pl(a, o, s, l, i),
                        js(8, o);
                        break;
                    case 23:
                        break;
                    case 22:
                        var c = o.stateNode;
                        null !== o.memoizedState ? 4 & c._visibility ? Pl(a, o, s, l, i) : El(a, o) : (c._visibility |= 4,
                        Pl(a, o, s, l, i)),
                        i && 2048 & u && wl(o.alternate, o);
                        break;
                    case 24:
                        Pl(a, o, s, l, i),
                        i && 2048 & u && Sl(o.alternate, o);
                        break;
                    default:
                        Pl(a, o, s, l, i)
                    }
                    t = t.sibling
                }
            }
            function El(e, t) {
                if (10256 & t.subtreeFlags)
                    for (t = t.child; null !== t; ) {
                        var n = e
                          , r = t
                          , i = r.flags;
                        switch (r.tag) {
                        case 22:
                            El(n, r),
                            2048 & i && wl(r.alternate, r);
                            break;
                        case 24:
                            El(n, r),
                            2048 & i && Sl(r.alternate, r);
                            break;
                        default:
                            El(n, r)
                        }
                        t = t.sibling
                    }
            }
            var Cl = 8192;
            function Tl(e) {
                if (e.subtreeFlags & Cl)
                    for (e = e.child; null !== e; )
                        Al(e),
                        e = e.sibling
            }
            function Al(e) {
                switch (e.tag) {
                case 26:
                    Tl(e),
                    e.flags & Cl && null !== e.memoizedState && function(e, t, n) {
                        if (null === Dd)
                            throw Error(o(475));
                        var r = Dd;
                        if ("stylesheet" === t.type && ("string" !== typeof n.media || !1 !== matchMedia(n.media).matches) && 0 === (4 & t.state.loading)) {
                            if (null === t.instance) {
                                var i = vd(n.href)
                                  , a = e.querySelector(yd(i));
                                if (a)
                                    return null !== (e = a._p) && "object" === typeof e && "function" === typeof e.then && (r.count++,
                                    r = Rd.bind(r),
                                    e.then(r, r)),
                                    t.state.loading |= 4,
                                    t.instance = a,
                                    void Ge(a);
                                a = e.ownerDocument || e,
                                n = bd(n),
                                (i = cd.get(i)) && Pd(n, i),
                                Ge(a = a.createElement("link"));
                                var s = a;
                                s._p = new Promise((function(e, t) {
                                    s.onload = e,
                                    s.onerror = t
                                }
                                )),
                                qc(a, "link", n),
                                t.instance = a
                            }
                            null === r.stylesheets && (r.stylesheets = new Map),
                            r.stylesheets.set(t, e),
                            (e = t.state.preload) && 0 === (3 & t.state.loading) && (r.count++,
                            t = Rd.bind(r),
                            e.addEventListener("load", t),
                            e.addEventListener("error", t))
                        }
                    }(hl, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                default:
                    Tl(e);
                    break;
                case 3:
                case 4:
                    var t = hl;
                    hl = fd(e.stateNode.containerInfo),
                    Tl(e),
                    hl = t;
                    break;
                case 22:
                    null === e.memoizedState && (null !== (t = e.alternate) && null !== t.memoizedState ? (t = Cl,
                    Cl = 16777216,
                    Tl(e),
                    Cl = t) : Tl(e))
                }
            }
            function Ml(e) {
                var t = e.alternate;
                if (null !== t && null !== (e = t.child)) {
                    t.child = null;
                    do {
                        t = e.sibling,
                        e.sibling = null,
                        e = t
                    } while (null !== e)
                }
            }
            function Dl(e) {
                var t = e.deletions;
                if (0 !== (16 & e.flags)) {
                    if (null !== t)
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            nl = r,
                            Nl(r, e)
                        }
                    Ml(e)
                }
                if (10256 & e.subtreeFlags)
                    for (e = e.child; null !== e; )
                        Ll(e),
                        e = e.sibling
            }
            function Ll(e) {
                switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    Dl(e),
                    2048 & e.flags && Bs(9, e, e.return);
                    break;
                case 3:
                case 12:
                default:
                    Dl(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    null !== e.memoizedState && 4 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -5,
                    Rl(e)) : Dl(e)
                }
            }
            function Rl(e) {
                var t = e.deletions;
                if (0 !== (16 & e.flags)) {
                    if (null !== t)
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            nl = r,
                            Nl(r, e)
                        }
                    Ml(e)
                }
                for (e = e.child; null !== e; ) {
                    switch ((t = e).tag) {
                    case 0:
                    case 11:
                    case 15:
                        Bs(8, t, t.return),
                        Rl(t);
                        break;
                    case 22:
                        4 & (n = t.stateNode)._visibility && (n._visibility &= -5,
                        Rl(t));
                        break;
                    default:
                        Rl(t)
                    }
                    e = e.sibling
                }
            }
            function Nl(e, t) {
                for (; null !== nl; ) {
                    var n = nl;
                    switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Bs(8, n, t);
                        break;
                    case 23:
                    case 22:
                        if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                            var r = n.memoizedState.cachePool.pool;
                            null != r && r.refCount++
                        }
                        break;
                    case 24:
                        Bi(n.memoizedState.cache)
                    }
                    if (null !== (r = n.child))
                        r.return = n,
                        nl = r;
                    else
                        e: for (n = e; null !== nl; ) {
                            var i = (r = nl).sibling
                              , a = r.return;
                            if (al(r),
                            r === n) {
                                nl = null;
                                break e
                            }
                            if (null !== i) {
                                i.return = a,
                                nl = i;
                                break e
                            }
                            nl = a
                        }
                }
            }
            function Ol(e, t, n, r) {
                this.tag = e,
                this.key = n,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.refCleanup = this.ref = null,
                this.pendingProps = t,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.subtreeFlags = this.flags = 0,
                this.deletions = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function _l(e, t, n, r) {
                return new Ol(e,t,n,r)
            }
            function zl(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function Fl(e, t) {
                var n = e.alternate;
                return null === n ? ((n = _l(e.tag, t, e.key, e.mode)).elementType = e.elementType,
                n.type = e.type,
                n.stateNode = e.stateNode,
                n.alternate = e,
                e.alternate = n) : (n.pendingProps = t,
                n.type = e.type,
                n.flags = 0,
                n.subtreeFlags = 0,
                n.deletions = null),
                n.flags = 31457280 & e.flags,
                n.childLanes = e.childLanes,
                n.lanes = e.lanes,
                n.child = e.child,
                n.memoizedProps = e.memoizedProps,
                n.memoizedState = e.memoizedState,
                n.updateQueue = e.updateQueue,
                t = e.dependencies,
                n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                },
                n.sibling = e.sibling,
                n.index = e.index,
                n.ref = e.ref,
                n.refCleanup = e.refCleanup,
                n
            }
            function Vl(e, t) {
                e.flags &= 31457282;
                var n = e.alternate;
                return null === n ? (e.childLanes = 0,
                e.lanes = t,
                e.child = null,
                e.subtreeFlags = 0,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.updateQueue = null,
                e.dependencies = null,
                e.stateNode = null) : (e.childLanes = n.childLanes,
                e.lanes = n.lanes,
                e.child = n.child,
                e.subtreeFlags = 0,
                e.deletions = null,
                e.memoizedProps = n.memoizedProps,
                e.memoizedState = n.memoizedState,
                e.updateQueue = n.updateQueue,
                e.type = n.type,
                t = n.dependencies,
                e.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }),
                e
            }
            function Il(e, t, n, r, i, a) {
                var s = 0;
                if (r = e,
                "function" === typeof e)
                    zl(e) && (s = 1);
                else if ("string" === typeof e)
                    s = function(e, t, n) {
                        if (1 === n || null != t.itemProp)
                            return !1;
                        switch (e) {
                        case "meta":
                        case "title":
                            return !0;
                        case "style":
                            if ("string" !== typeof t.precedence || "string" !== typeof t.href || "" === t.href)
                                break;
                            return !0;
                        case "link":
                            if ("string" !== typeof t.rel || "string" !== typeof t.href || "" === t.href || t.onLoad || t.onError)
                                break;
                            return "stylesheet" !== t.rel || (e = t.disabled,
                            "string" === typeof t.precedence && null == e);
                        case "script":
                            if (t.async && "function" !== typeof t.async && "symbol" !== typeof t.async && !t.onLoad && !t.onError && t.src && "string" === typeof t.src)
                                return !0
                        }
                        return !1
                    }(e, n, K.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
                else
                    e: switch (e) {
                    case d:
                        return jl(n.children, i, a, t);
                    case f:
                        s = 8,
                        i |= 24;
                        break;
                    case h:
                        return (e = _l(12, n, t, 2 | i)).elementType = h,
                        e.lanes = a,
                        e;
                    case y:
                        return (e = _l(13, n, t, i)).elementType = y,
                        e.lanes = a,
                        e;
                    case b:
                        return (e = _l(19, n, t, i)).elementType = b,
                        e.lanes = a,
                        e;
                    case k:
                        return Bl(n, i, a, t);
                    default:
                        if ("object" === typeof e && null !== e)
                            switch (e.$$typeof) {
                            case p:
                            case g:
                                s = 10;
                                break e;
                            case m:
                                s = 9;
                                break e;
                            case v:
                                s = 11;
                                break e;
                            case w:
                                s = 14;
                                break e;
                            case S:
                                s = 16,
                                r = null;
                                break e
                            }
                        s = 29,
                        n = Error(o(130, null === e ? "null" : typeof e, "")),
                        r = null
                    }
                return (t = _l(s, n, t, i)).elementType = e,
                t.type = r,
                t.lanes = a,
                t
            }
            function jl(e, t, n, r) {
                return (e = _l(7, e, r, t)).lanes = n,
                e
            }
            function Bl(e, t, n, r) {
                (e = _l(22, e, r, t)).elementType = k,
                e.lanes = n;
                var i = {
                    _visibility: 1,
                    _pendingVisibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null,
                    _current: null,
                    detach: function() {
                        var e = i._current;
                        if (null === e)
                            throw Error(o(456));
                        if (0 === (2 & i._pendingVisibility)) {
                            var t = Mr(e, 2);
                            null !== t && (i._pendingVisibility |= 2,
                            Ru(t, e, 2))
                        }
                    },
                    attach: function() {
                        var e = i._current;
                        if (null === e)
                            throw Error(o(456));
                        if (0 !== (2 & i._pendingVisibility)) {
                            var t = Mr(e, 2);
                            null !== t && (i._pendingVisibility &= -3,
                            Ru(t, e, 2))
                        }
                    }
                };
                return e.stateNode = i,
                e
            }
            function Ul(e, t, n) {
                return (e = _l(6, e, null, t)).lanes = n,
                e
            }
            function $l(e, t, n) {
                return (t = _l(4, null !== e.children ? e.children : [], e.key, t)).lanes = n,
                t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                t
            }
            function Wl(e) {
                e.flags |= 4
            }
            function Hl(e, t) {
                if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
                    e.flags &= -16777217;
                else if (e.flags |= 16777216,
                !Md(t)) {
                    if (null !== (t = Ai.current) && ((4194176 & ru) === ru ? null !== Mi : (62914560 & ru) !== ru && 0 === (536870912 & ru) || t !== Mi))
                        throw fi = li,
                        si;
                    e.flags |= 8192
                }
            }
            function ql(e, t) {
                null !== t && (e.flags |= 4),
                16384 & e.flags && (t = 22 !== e.tag ? De() : 536870912,
                e.lanes |= t,
                mu |= t)
            }
            function Ql(e, t) {
                if (!Xr)
                    switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; )
                            null !== t.alternate && (n = t),
                            t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; )
                            null !== n.alternate && (r = n),
                            n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
            }
            function Yl(e) {
                var t = null !== e.alternate && e.alternate.child === e.child
                  , n = 0
                  , r = 0;
                if (t)
                    for (var i = e.child; null !== i; )
                        n |= i.lanes | i.childLanes,
                        r |= 31457280 & i.subtreeFlags,
                        r |= 31457280 & i.flags,
                        i.return = e,
                        i = i.sibling;
                else
                    for (i = e.child; null !== i; )
                        n |= i.lanes | i.childLanes,
                        r |= i.subtreeFlags,
                        r |= i.flags,
                        i.return = e,
                        i = i.sibling;
                return e.subtreeFlags |= r,
                e.childLanes = n,
                t
            }
            function Kl(e, t, n) {
                var r = t.pendingProps;
                switch (Qr(t),
                t.tag) {
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                case 1:
                    return Yl(t),
                    null;
                case 3:
                    return n = t.stateNode,
                    r = null,
                    null !== e && (r = e.memoizedState.cache),
                    t.memoizedState.cache !== r && (t.flags |= 2048),
                    bs(Ii),
                    ee(),
                    n.pendingContext && (n.context = n.pendingContext,
                    n.pendingContext = null),
                    null !== e && null !== e.child || (ri(t) ? Wl(t) : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024,
                    null !== Gr && (Ou(Gr),
                    Gr = null))),
                    Yl(t),
                    null;
                case 26:
                    return n = t.memoizedState,
                    null === e ? (Wl(t),
                    null !== n ? (Yl(t),
                    Hl(t, n)) : (Yl(t),
                    t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Wl(t),
                    Yl(t),
                    Hl(t, n)) : (Yl(t),
                    t.flags &= -16777217) : (e.memoizedProps !== r && Wl(t),
                    Yl(t),
                    t.flags &= -16777217),
                    null;
                case 27:
                    ne(t),
                    n = G.current;
                    var i = t.type;
                    if (null !== e && null != t.stateNode)
                        e.memoizedProps !== r && Wl(t);
                    else {
                        if (!r) {
                            if (null === t.stateNode)
                                throw Error(o(166));
                            return Yl(t),
                            null
                        }
                        e = K.current,
                        ri(t) ? ti(t) : (e = ud(i, r, n),
                        t.stateNode = e,
                        Wl(t))
                    }
                    return Yl(t),
                    null;
                case 5:
                    if (ne(t),
                    n = t.type,
                    null !== e && null != t.stateNode)
                        e.memoizedProps !== r && Wl(t);
                    else {
                        if (!r) {
                            if (null === t.stateNode)
                                throw Error(o(166));
                            return Yl(t),
                            null
                        }
                        if (e = K.current,
                        ri(t))
                            ti(t);
                        else {
                            switch (i = Kc(G.current),
                            e) {
                            case 1:
                                e = i.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch (n) {
                                case "svg":
                                    e = i.createElementNS("http://www.w3.org/2000/svg", n);
                                    break;
                                case "math":
                                    e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                    break;
                                case "script":
                                    (e = i.createElement("div")).innerHTML = "<script><\/script>",
                                    e = e.removeChild(e.firstChild);
                                    break;
                                case "select":
                                    e = "string" === typeof r.is ? i.createElement("select", {
                                        is: r.is
                                    }) : i.createElement("select"),
                                    r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
                                    break;
                                default:
                                    e = "string" === typeof r.is ? i.createElement(n, {
                                        is: r.is
                                    }) : i.createElement(n)
                                }
                            }
                            e[Ve] = t,
                            e[Ie] = r;
                            e: for (i = t.child; null !== i; ) {
                                if (5 === i.tag || 6 === i.tag)
                                    e.appendChild(i.stateNode);
                                else if (4 !== i.tag && 27 !== i.tag && null !== i.child) {
                                    i.child.return = i,
                                    i = i.child;
                                    continue
                                }
                                if (i === t)
                                    break e;
                                for (; null === i.sibling; ) {
                                    if (null === i.return || i.return === t)
                                        break e;
                                    i = i.return
                                }
                                i.sibling.return = i.return,
                                i = i.sibling
                            }
                            t.stateNode = e;
                            e: switch (qc(e, n, r),
                            n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!r.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                            }
                            e && Wl(t)
                        }
                    }
                    return Yl(t),
                    t.flags &= -16777217,
                    null;
                case 6:
                    if (e && null != t.stateNode)
                        e.memoizedProps !== r && Wl(t);
                    else {
                        if ("string" !== typeof r && null === t.stateNode)
                            throw Error(o(166));
                        if (e = G.current,
                        ri(t)) {
                            if (e = t.stateNode,
                            n = t.memoizedProps,
                            r = null,
                            null !== (i = Yr))
                                switch (i.tag) {
                                case 27:
                                case 5:
                                    r = i.memoizedProps
                                }
                            e[Ve] = t,
                            (e = !!(e.nodeValue === n || null !== r && !0 === r.suppressHydrationWarning || Uc(e.nodeValue, n))) || ei(t)
                        } else
                            (e = Kc(e).createTextNode(r))[Ve] = t,
                            t.stateNode = e
                    }
                    return Yl(t),
                    null;
                case 13:
                    if (r = t.memoizedState,
                    null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                        if (i = ri(t),
                        null !== r && null !== r.dehydrated) {
                            if (null === e) {
                                if (!i)
                                    throw Error(o(318));
                                if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                                    throw Error(o(317));
                                i[Ve] = t
                            } else
                                ii(),
                                0 === (128 & t.flags) && (t.memoizedState = null),
                                t.flags |= 4;
                            Yl(t),
                            i = !1
                        } else
                            null !== Gr && (Ou(Gr),
                            Gr = null),
                            i = !0;
                        if (!i)
                            return 256 & t.flags ? (Ni(t),
                            t) : (Ni(t),
                            null)
                    }
                    if (Ni(t),
                    0 !== (128 & t.flags))
                        return t.lanes = n,
                        t;
                    if (n = null !== r,
                    e = null !== e && null !== e.memoizedState,
                    n) {
                        i = null,
                        null !== (r = t.child).alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (i = r.alternate.memoizedState.cachePool.pool);
                        var a = null;
                        null !== r.memoizedState && null !== r.memoizedState.cachePool && (a = r.memoizedState.cachePool.pool),
                        a !== i && (r.flags |= 2048)
                    }
                    return n !== e && n && (t.child.flags |= 8192),
                    ql(t, t.updateQueue),
                    Yl(t),
                    null;
                case 4:
                    return ee(),
                    null === e && Rc(t.stateNode.containerInfo),
                    Yl(t),
                    null;
                case 10:
                    return bs(t.type),
                    Yl(t),
                    null;
                case 19:
                    if (Q(Oi),
                    null === (i = t.memoizedState))
                        return Yl(t),
                        null;
                    if (r = 0 !== (128 & t.flags),
                    null === (a = i.rendering))
                        if (r)
                            Ql(i, !1);
                        else {
                            if (0 !== cu || null !== e && 0 !== (128 & e.flags))
                                for (e = t.child; null !== e; ) {
                                    if (null !== (a = _i(e))) {
                                        for (t.flags |= 128,
                                        Ql(i, !1),
                                        e = a.updateQueue,
                                        t.updateQueue = e,
                                        ql(t, e),
                                        t.subtreeFlags = 0,
                                        e = n,
                                        n = t.child; null !== n; )
                                            Vl(n, e),
                                            n = n.sibling;
                                        return Y(Oi, 1 & Oi.current | 2),
                                        t.child
                                    }
                                    e = e.sibling
                                }
                            null !== i.tail && le() > wu && (t.flags |= 128,
                            r = !0,
                            Ql(i, !1),
                            t.lanes = 4194304)
                        }
                    else {
                        if (!r)
                            if (null !== (e = _i(a))) {
                                if (t.flags |= 128,
                                r = !0,
                                e = e.updateQueue,
                                t.updateQueue = e,
                                ql(t, e),
                                Ql(i, !0),
                                null === i.tail && "hidden" === i.tailMode && !a.alternate && !Xr)
                                    return Yl(t),
                                    null
                            } else
                                2 * le() - i.renderingStartTime > wu && 536870912 !== n && (t.flags |= 128,
                                r = !0,
                                Ql(i, !1),
                                t.lanes = 4194304);
                        i.isBackwards ? (a.sibling = t.child,
                        t.child = a) : (null !== (e = i.last) ? e.sibling = a : t.child = a,
                        i.last = a)
                    }
                    return null !== i.tail ? (t = i.tail,
                    i.rendering = t,
                    i.tail = t.sibling,
                    i.renderingStartTime = le(),
                    t.sibling = null,
                    e = Oi.current,
                    Y(Oi, r ? 1 & e | 2 : 1 & e),
                    t) : (Yl(t),
                    null);
                case 22:
                case 23:
                    return Ni(t),
                    Ti(),
                    r = null !== t.memoizedState,
                    null !== e ? null !== e.memoizedState !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
                    r ? 0 !== (536870912 & n) && 0 === (128 & t.flags) && (Yl(t),
                    6 & t.subtreeFlags && (t.flags |= 8192)) : Yl(t),
                    null !== (n = t.updateQueue) && ql(t, n.retryQueue),
                    n = null,
                    null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool),
                    r = null,
                    null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool),
                    r !== n && (t.flags |= 2048),
                    null !== e && Q(Yi),
                    null;
                case 24:
                    return n = null,
                    null !== e && (n = e.memoizedState.cache),
                    t.memoizedState.cache !== n && (t.flags |= 2048),
                    bs(Ii),
                    Yl(t),
                    null;
                case 25:
                    return null
                }
                throw Error(o(156, t.tag))
            }
            function Xl(e, t) {
                switch (Qr(t),
                t.tag) {
                case 1:
                    return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 3:
                    return bs(Ii),
                    ee(),
                    0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 26:
                case 27:
                case 5:
                    return ne(t),
                    null;
                case 13:
                    if (Ni(t),
                    null !== (e = t.memoizedState) && null !== e.dehydrated) {
                        if (null === t.alternate)
                            throw Error(o(340));
                        ii()
                    }
                    return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 19:
                    return Q(Oi),
                    null;
                case 4:
                    return ee(),
                    null;
                case 10:
                    return bs(t.type),
                    null;
                case 22:
                case 23:
                    return Ni(t),
                    Ti(),
                    null !== e && Q(Yi),
                    65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 24:
                    return bs(Ii),
                    null;
                default:
                    return null
                }
            }
            function Gl(e, t) {
                switch (Qr(t),
                t.tag) {
                case 3:
                    bs(Ii),
                    ee();
                    break;
                case 26:
                case 27:
                case 5:
                    ne(t);
                    break;
                case 4:
                    ee();
                    break;
                case 13:
                    Ni(t);
                    break;
                case 19:
                    Q(Oi);
                    break;
                case 10:
                    bs(t.type);
                    break;
                case 22:
                case 23:
                    Ni(t),
                    Ti(),
                    null !== e && Q(Yi);
                    break;
                case 24:
                    bs(Ii)
                }
            }
            var Zl = {
                getCacheForType: function(e) {
                    var t = Es(Ii)
                      , n = t.data.get(e);
                    return void 0 === n && (n = e(),
                    t.data.set(e, n)),
                    n
                }
            }
              , Jl = "function" === typeof WeakMap ? WeakMap : Map
              , eu = 0
              , tu = null
              , nu = null
              , ru = 0
              , iu = 0
              , au = null
              , ou = !1
              , su = !1
              , lu = !1
              , uu = 0
              , cu = 0
              , du = 0
              , fu = 0
              , hu = 0
              , pu = 0
              , mu = 0
              , gu = null
              , vu = null
              , yu = !1
              , bu = 0
              , wu = 1 / 0
              , Su = null
              , ku = null
              , xu = !1
              , Pu = null
              , Eu = 0
              , Cu = 0
              , Tu = null
              , Au = 0
              , Mu = null;
            function Du() {
                if (0 !== (2 & eu) && 0 !== ru)
                    return ru & -ru;
                if (null !== D.T) {
                    return 0 !== Wi ? Wi : Sc()
                }
                return ze()
            }
            function Lu() {
                0 === pu && (pu = 0 === (536870912 & ru) || Xr ? Me() : 536870912);
                var e = Ai.current;
                return null !== e && (e.flags |= 32),
                pu
            }
            function Ru(e, t, n) {
                (e === tu && 2 === iu || null !== e.cancelPendingCommit) && (ju(e, 0),
                Fu(e, ru, pu, !1)),
                Re(e, n),
                0 !== (2 & eu) && e === tu || (e === tu && (0 === (2 & eu) && (fu |= n),
                4 === cu && Fu(e, ru, pu, !1)),
                mc(e))
            }
            function Nu(e, t, n) {
                if (0 !== (6 & eu))
                    throw Error(o(327));
                for (var r = !n && 0 === (60 & t) && 0 === (t & e.expiredLanes) || Te(e, t), i = r ? function(e, t) {
                    var n = eu;
                    eu |= 2;
                    var r = Uu()
                      , i = $u();
                    tu !== e || ru !== t ? (Su = null,
                    wu = le() + 500,
                    ju(e, t)) : su = Te(e, t);
                    e: for (; ; )
                        try {
                            if (0 !== iu && null !== nu) {
                                t = nu;
                                var a = au;
                                t: switch (iu) {
                                case 1:
                                    iu = 0,
                                    au = null,
                                    Xu(e, t, a, 1);
                                    break;
                                case 2:
                                    if (ui(a)) {
                                        iu = 0,
                                        au = null,
                                        Ku(t);
                                        break
                                    }
                                    t = function() {
                                        2 === iu && tu === e && (iu = 7),
                                        mc(e)
                                    }
                                    ,
                                    a.then(t, t);
                                    break e;
                                case 3:
                                    iu = 7;
                                    break e;
                                case 4:
                                    iu = 5;
                                    break e;
                                case 7:
                                    ui(a) ? (iu = 0,
                                    au = null,
                                    Ku(t)) : (iu = 0,
                                    au = null,
                                    Xu(e, t, a, 7));
                                    break;
                                case 5:
                                    var s = null;
                                    switch (nu.tag) {
                                    case 26:
                                        s = nu.memoizedState;
                                    case 5:
                                    case 27:
                                        var l = nu;
                                        if (!s || Md(s)) {
                                            iu = 0,
                                            au = null;
                                            var u = l.sibling;
                                            if (null !== u)
                                                nu = u;
                                            else {
                                                var c = l.return;
                                                null !== c ? (nu = c,
                                                Gu(c)) : nu = null
                                            }
                                            break t
                                        }
                                    }
                                    iu = 0,
                                    au = null,
                                    Xu(e, t, a, 5);
                                    break;
                                case 6:
                                    iu = 0,
                                    au = null,
                                    Xu(e, t, a, 6);
                                    break;
                                case 8:
                                    Iu(),
                                    cu = 6;
                                    break e;
                                default:
                                    throw Error(o(462))
                                }
                            }
                            Qu();
                            break
                        } catch (d) {
                            Bu(e, d)
                        }
                    return vs = gs = null,
                    D.H = r,
                    D.A = i,
                    eu = n,
                    null !== nu ? 0 : (tu = null,
                    ru = 0,
                    Cr(),
                    cu)
                }(e, t) : Hu(e, t, !0), a = r; ; ) {
                    if (0 === i) {
                        su && !r && Fu(e, t, 0, !1);
                        break
                    }
                    if (6 === i)
                        Fu(e, t, 0, !ou);
                    else {
                        if (n = e.current.alternate,
                        a && !zu(n)) {
                            i = Hu(e, t, !1),
                            a = !1;
                            continue
                        }
                        if (2 === i) {
                            if (a = t,
                            e.errorRecoveryDisabledLanes & a)
                                var s = 0;
                            else
                                s = 0 !== (s = -536870913 & e.pendingLanes) ? s : 536870912 & s ? 536870912 : 0;
                            if (0 !== s) {
                                t = s;
                                e: {
                                    var l = e;
                                    i = gu;
                                    var u = l.current.memoizedState.isDehydrated;
                                    if (u && (ju(l, s).flags |= 256),
                                    2 !== (s = Hu(l, s, !1))) {
                                        if (lu && !u) {
                                            l.errorRecoveryDisabledLanes |= a,
                                            fu |= a,
                                            i = 4;
                                            break e
                                        }
                                        a = vu,
                                        vu = i,
                                        null !== a && Ou(a)
                                    }
                                    i = s
                                }
                                if (a = !1,
                                2 !== i)
                                    continue
                            }
                        }
                        if (1 === i) {
                            ju(e, 0),
                            Fu(e, t, 0, !0);
                            break
                        }
                        e: {
                            switch (r = e,
                            i) {
                            case 0:
                            case 1:
                                throw Error(o(345));
                            case 4:
                                if ((4194176 & t) === t) {
                                    Fu(r, t, pu, !ou);
                                    break e
                                }
                                break;
                            case 2:
                                vu = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(o(329))
                            }
                            if (r.finishedWork = n,
                            r.finishedLanes = t,
                            (62914560 & t) === t && 10 < (a = bu + 300 - le())) {
                                if (Fu(r, t, pu, !ou),
                                0 !== Ce(r, 0))
                                    break e;
                                r.timeoutHandle = ed(_u.bind(null, r, n, vu, Su, yu, t, pu, fu, mu, ou, 2, -0, 0), a)
                            } else
                                _u(r, n, vu, Su, yu, t, pu, fu, mu, ou, 0, -0, 0)
                        }
                    }
                    break
                }
                mc(e)
            }
            function Ou(e) {
                null === vu ? vu = e : vu.push.apply(vu, e)
            }
            function _u(e, t, n, r, i, a, s, l, u, c, d, f, h) {
                var p = t.subtreeFlags;
                if ((8192 & p || 16785408 === (16785408 & p)) && (Dd = {
                    stylesheets: null,
                    count: 0,
                    unsuspend: Ld
                },
                Al(t),
                null !== (t = function() {
                    if (null === Dd)
                        throw Error(o(475));
                    var e = Dd;
                    return e.stylesheets && 0 === e.count && Od(e, e.stylesheets),
                    0 < e.count ? function(t) {
                        var n = setTimeout((function() {
                            if (e.stylesheets && Od(e, e.stylesheets),
                            e.unsuspend) {
                                var t = e.unsuspend;
                                e.unsuspend = null,
                                t()
                            }
                        }
                        ), 6e4);
                        return e.unsuspend = t,
                        function() {
                            e.unsuspend = null,
                            clearTimeout(n)
                        }
                    }
                    : null
                }())))
                    return e.cancelPendingCommit = t(Ju.bind(null, e, n, r, i, s, l, u, 1, f, h)),
                    void Fu(e, a, s, !c);
                Ju(e, n, r, i, s, l, u, d, f, h)
            }
            function zu(e) {
                for (var t = e; ; ) {
                    var n = t.tag;
                    if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && (null !== (n = t.updateQueue) && null !== (n = n.stores)))
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r]
                              , a = i.getSnapshot;
                            i = i.value;
                            try {
                                if (!Yn(a(), i))
                                    return !1
                            } catch (o) {
                                return !1
                            }
                        }
                    if (n = t.child,
                    16384 & t.subtreeFlags && null !== n)
                        n.return = t,
                        t = n;
                    else {
                        if (t === e)
                            break;
                        for (; null === t.sibling; ) {
                            if (null === t.return || t.return === e)
                                return !0;
                            t = t.return
                        }
                        t.sibling.return = t.return,
                        t = t.sibling
                    }
                }
                return !0
            }
            function Fu(e, t, n, r) {
                t &= ~hu,
                t &= ~fu,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                r && (e.warmLanes |= t),
                r = e.expirationTimes;
                for (var i = t; 0 < i; ) {
                    var a = 31 - we(i)
                      , o = 1 << a;
                    r[a] = -1,
                    i &= ~o
                }
                0 !== n && Ne(e, n, t)
            }
            function Vu() {
                return 0 !== (6 & eu) || (gc(0, !1),
                !1)
            }
            function Iu() {
                if (null !== nu) {
                    if (0 === iu)
                        var e = nu.return;
                    else
                        vs = gs = null,
                        va(e = nu),
                        pi = null,
                        mi = 0,
                        e = nu;
                    for (; null !== e; )
                        Gl(e.alternate, e),
                        e = e.return;
                    nu = null
                }
            }
            function ju(e, t) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var n = e.timeoutHandle;
                -1 !== n && (e.timeoutHandle = -1,
                td(n)),
                null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null,
                n()),
                Iu(),
                tu = e,
                nu = n = Fl(e.current, null),
                ru = t,
                iu = 0,
                au = null,
                ou = !1,
                su = Te(e, t),
                lu = !1,
                mu = pu = hu = fu = du = cu = 0,
                vu = gu = null,
                yu = !1,
                0 !== (8 & t) && (t |= 32 & t);
                var r = e.entangledLanes;
                if (0 !== r)
                    for (e = e.entanglements,
                    r &= t; 0 < r; ) {
                        var i = 31 - we(r)
                          , a = 1 << i;
                        t |= e[i],
                        r &= ~a
                    }
                return uu = t,
                Cr(),
                n
            }
            function Bu(e, t) {
                Ji = null,
                D.H = Eo,
                t === oi ? (t = hi(),
                iu = 3) : t === si ? (t = hi(),
                iu = 4) : iu = t === $o ? 8 : null !== t && "object" === typeof t && "function" === typeof t.then ? 6 : 1,
                au = t,
                null === nu && (cu = 1,
                Vo(e, Or(t, e.current)))
            }
            function Uu() {
                var e = D.H;
                return D.H = Eo,
                null === e ? Eo : e
            }
            function $u() {
                var e = D.A;
                return D.A = Zl,
                e
            }
            function Wu() {
                cu = 4,
                ou || (4194176 & ru) !== ru && null !== Ai.current || (su = !0),
                0 === (134217727 & du) && 0 === (134217727 & fu) || null === tu || Fu(tu, ru, pu, !1)
            }
            function Hu(e, t, n) {
                var r = eu;
                eu |= 2;
                var i = Uu()
                  , a = $u();
                tu === e && ru === t || (Su = null,
                ju(e, t)),
                t = !1;
                var o = cu;
                e: for (; ; )
                    try {
                        if (0 !== iu && null !== nu) {
                            var s = nu
                              , l = au;
                            switch (iu) {
                            case 8:
                                Iu(),
                                o = 6;
                                break e;
                            case 3:
                            case 2:
                            case 6:
                                null === Ai.current && (t = !0);
                                var u = iu;
                                if (iu = 0,
                                au = null,
                                Xu(e, s, l, u),
                                n && su) {
                                    o = 0;
                                    break e
                                }
                                break;
                            default:
                                u = iu,
                                iu = 0,
                                au = null,
                                Xu(e, s, l, u)
                            }
                        }
                        qu(),
                        o = cu;
                        break
                    } catch (c) {
                        Bu(e, c)
                    }
                return t && e.shellSuspendCounter++,
                vs = gs = null,
                eu = r,
                D.H = i,
                D.A = a,
                null === nu && (tu = null,
                ru = 0,
                Cr()),
                o
            }
            function qu() {
                for (; null !== nu; )
                    Yu(nu)
            }
            function Qu() {
                for (; null !== nu && !oe(); )
                    Yu(nu)
            }
            function Yu(e) {
                var t = ps(e.alternate, e, uu);
                e.memoizedProps = e.pendingProps,
                null === t ? Gu(e) : nu = t
            }
            function Ku(e) {
                var t = e
                  , n = t.alternate;
                switch (t.tag) {
                case 15:
                case 0:
                    t = Jo(n, t, t.pendingProps, t.type, void 0, ru);
                    break;
                case 11:
                    t = Jo(n, t, t.pendingProps, t.type.render, t.ref, ru);
                    break;
                case 5:
                    va(t);
                default:
                    Gl(n, t),
                    t = ps(n, t = nu = Vl(t, uu), uu)
                }
                e.memoizedProps = e.pendingProps,
                null === t ? Gu(e) : nu = t
            }
            function Xu(e, t, n, r) {
                vs = gs = null,
                va(t),
                pi = null,
                mi = 0;
                var i = t.return;
                try {
                    if (function(e, t, n, r, i) {
                        if (n.flags |= 32768,
                        null !== r && "object" === typeof r && "function" === typeof r.then) {
                            if (null !== (t = n.alternate) && ks(t, n, i, !0),
                            null !== (n = Ai.current)) {
                                switch (n.tag) {
                                case 13:
                                    return null === Mi ? Wu() : null === n.alternate && 0 === cu && (cu = 3),
                                    n.flags &= -257,
                                    n.flags |= 65536,
                                    n.lanes = i,
                                    r === li ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([r]) : t.add(r),
                                    ic(e, r, i)),
                                    !1;
                                case 22:
                                    return n.flags |= 65536,
                                    r === li ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                        transitions: null,
                                        markerInstances: null,
                                        retryQueue: new Set([r])
                                    },
                                    n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([r]) : n.add(r),
                                    ic(e, r, i)),
                                    !1
                                }
                                throw Error(o(435, n.tag))
                            }
                            return ic(e, r, i),
                            Wu(),
                            !1
                        }
                        if (Xr)
                            return null !== (t = Ai.current) ? (0 === (65536 & t.flags) && (t.flags |= 256),
                            t.flags |= 65536,
                            t.lanes = i,
                            r !== Jr && ai(Or(e = Error(o(422), {
                                cause: r
                            }), n))) : (r !== Jr && ai(Or(t = Error(o(423), {
                                cause: r
                            }), n)),
                            (e = e.current.alternate).flags |= 65536,
                            i &= -i,
                            e.lanes |= i,
                            r = Or(r, n),
                            Os(e, i = jo(e.stateNode, r, i)),
                            4 !== cu && (cu = 2)),
                            !1;
                        var a = Error(o(520), {
                            cause: r
                        });
                        if (a = Or(a, n),
                        null === gu ? gu = [a] : gu.push(a),
                        4 !== cu && (cu = 2),
                        null === t)
                            return !0;
                        r = Or(r, n),
                        n = t;
                        do {
                            switch (n.tag) {
                            case 3:
                                return n.flags |= 65536,
                                e = i & -i,
                                n.lanes |= e,
                                Os(n, e = jo(n.stateNode, r, e)),
                                !1;
                            case 1:
                                if (t = n.type,
                                a = n.stateNode,
                                0 === (128 & n.flags) && ("function" === typeof t.getDerivedStateFromError || null !== a && "function" === typeof a.componentDidCatch && (null === ku || !ku.has(a))))
                                    return n.flags |= 65536,
                                    i &= -i,
                                    n.lanes |= i,
                                    Uo(i = Bo(i), e, n, r),
                                    Os(n, i),
                                    !1
                            }
                            n = n.return
                        } while (null !== n);
                        return !1
                    }(e, i, t, n, ru))
                        return cu = 1,
                        Vo(e, Or(n, e.current)),
                        void (nu = null)
                } catch (a) {
                    if (null !== i)
                        throw nu = i,
                        a;
                    return cu = 1,
                    Vo(e, Or(n, e.current)),
                    void (nu = null)
                }
                32768 & t.flags ? (Xr || 1 === r ? e = !0 : su || 0 !== (536870912 & ru) ? e = !1 : (ou = e = !0,
                (2 === r || 3 === r || 6 === r) && (null !== (r = Ai.current) && 13 === r.tag && (r.flags |= 16384))),
                Zu(t, e)) : Gu(t)
            }
            function Gu(e) {
                var t = e;
                do {
                    if (0 !== (32768 & t.flags))
                        return void Zu(t, ou);
                    e = t.return;
                    var n = Kl(t.alternate, t, uu);
                    if (null !== n)
                        return void (nu = n);
                    if (null !== (t = t.sibling))
                        return void (nu = t);
                    nu = t = e
                } while (null !== t);
                0 === cu && (cu = 5)
            }
            function Zu(e, t) {
                do {
                    var n = Xl(e.alternate, e);
                    if (null !== n)
                        return n.flags &= 32767,
                        void (nu = n);
                    if (null !== (n = e.return) && (n.flags |= 32768,
                    n.subtreeFlags = 0,
                    n.deletions = null),
                    !t && null !== (e = e.sibling))
                        return void (nu = e);
                    nu = e = n
                } while (null !== e);
                cu = 6,
                nu = null
            }
            function Ju(e, t, n, r, i, a, s, l, u, c) {
                var d = D.T
                  , f = U.p;
                try {
                    U.p = 2,
                    D.T = null,
                    function(e, t, n, r, i, a, s, l) {
                        do {
                            tc()
                        } while (null !== Pu);
                        if (0 !== (6 & eu))
                            throw Error(o(327));
                        var u = e.finishedWork;
                        if (r = e.finishedLanes,
                        null === u)
                            return null;
                        if (e.finishedWork = null,
                        e.finishedLanes = 0,
                        u === e.current)
                            throw Error(o(177));
                        e.callbackNode = null,
                        e.callbackPriority = 0,
                        e.cancelPendingCommit = null;
                        var c = u.lanes | u.childLanes;
                        if (function(e, t, n, r, i, a) {
                            var o = e.pendingLanes;
                            e.pendingLanes = n,
                            e.suspendedLanes = 0,
                            e.pingedLanes = 0,
                            e.warmLanes = 0,
                            e.expiredLanes &= n,
                            e.entangledLanes &= n,
                            e.errorRecoveryDisabledLanes &= n,
                            e.shellSuspendCounter = 0;
                            var s = e.entanglements
                              , l = e.expirationTimes
                              , u = e.hiddenUpdates;
                            for (n = o & ~n; 0 < n; ) {
                                var c = 31 - we(n)
                                  , d = 1 << c;
                                s[c] = 0,
                                l[c] = -1;
                                var f = u[c];
                                if (null !== f)
                                    for (u[c] = null,
                                    c = 0; c < f.length; c++) {
                                        var h = f[c];
                                        null !== h && (h.lane &= -536870913)
                                    }
                                n &= ~d
                            }
                            0 !== r && Ne(e, r, 0),
                            0 !== a && 0 === i && 0 !== e.tag && (e.suspendedLanes |= a & ~(o & ~t))
                        }(e, r, c |= Er, a, s, l),
                        e === tu && (nu = tu = null,
                        ru = 0),
                        0 === (10256 & u.subtreeFlags) && 0 === (10256 & u.flags) || xu || (xu = !0,
                        Cu = c,
                        Tu = n,
                        function(e, t) {
                            ie(e, t)
                        }(fe, (function() {
                            return tc(),
                            null
                        }
                        ))),
                        n = 0 !== (15990 & u.flags),
                        0 !== (15990 & u.subtreeFlags) || n ? (n = D.T,
                        D.T = null,
                        a = U.p,
                        U.p = 2,
                        s = eu,
                        eu |= 4,
                        function(e, t) {
                            if (e = e.containerInfo,
                            Qc = Wd,
                            er(e = Jn(e))) {
                                if ("selectionStart"in e)
                                    var n = {
                                        start: e.selectionStart,
                                        end: e.selectionEnd
                                    };
                                else
                                    e: {
                                        var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var i = r.anchorOffset
                                              , a = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                n.nodeType,
                                                a.nodeType
                                            } catch (g) {
                                                n = null;
                                                break e
                                            }
                                            var s = 0
                                              , l = -1
                                              , u = -1
                                              , c = 0
                                              , d = 0
                                              , f = e
                                              , h = null;
                                            t: for (; ; ) {
                                                for (var p; f !== n || 0 !== i && 3 !== f.nodeType || (l = s + i),
                                                f !== a || 0 !== r && 3 !== f.nodeType || (u = s + r),
                                                3 === f.nodeType && (s += f.nodeValue.length),
                                                null !== (p = f.firstChild); )
                                                    h = f,
                                                    f = p;
                                                for (; ; ) {
                                                    if (f === e)
                                                        break t;
                                                    if (h === n && ++c === i && (l = s),
                                                    h === a && ++d === r && (u = s),
                                                    null !== (p = f.nextSibling))
                                                        break;
                                                    h = (f = h).parentNode
                                                }
                                                f = p
                                            }
                                            n = -1 === l || -1 === u ? null : {
                                                start: l,
                                                end: u
                                            }
                                        } else
                                            n = null
                                    }
                                n = n || {
                                    start: 0,
                                    end: 0
                                }
                            } else
                                n = null;
                            for (Yc = {
                                focusedElem: e,
                                selectionRange: n
                            },
                            Wd = !1,
                            nl = t; null !== nl; )
                                if (e = (t = nl).child,
                                0 !== (1028 & t.subtreeFlags) && null !== e)
                                    e.return = t,
                                    nl = e;
                                else
                                    for (; null !== nl; ) {
                                        switch (a = (t = nl).alternate,
                                        e = t.flags,
                                        t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 26:
                                        case 27:
                                        case 6:
                                        case 4:
                                        case 17:
                                            break;
                                        case 1:
                                            if (0 !== (1024 & e) && null !== a) {
                                                e = void 0,
                                                n = t,
                                                i = a.memoizedProps,
                                                a = a.memoizedState,
                                                r = n.stateNode;
                                                try {
                                                    var m = No(n.type, i, (n.elementType,
                                                    n.type));
                                                    e = r.getSnapshotBeforeUpdate(m, a),
                                                    r.__reactInternalSnapshotBeforeUpdate = e
                                                } catch (v) {
                                                    rc(n, n.return, v)
                                                }
                                            }
                                            break;
                                        case 3:
                                            if (0 !== (1024 & e))
                                                if (9 === (n = (e = t.stateNode.containerInfo).nodeType))
                                                    od(e);
                                                else if (1 === n)
                                                    switch (e.nodeName) {
                                                    case "HEAD":
                                                    case "HTML":
                                                    case "BODY":
                                                        od(e);
                                                        break;
                                                    default:
                                                        e.textContent = ""
                                                    }
                                            break;
                                        default:
                                            if (0 !== (1024 & e))
                                                throw Error(o(163))
                                        }
                                        if (null !== (e = t.sibling)) {
                                            e.return = t.return,
                                            nl = e;
                                            break
                                        }
                                        nl = t.return
                                    }
                            m = rl,
                            rl = !1
                        }(e, u),
                        pl(u, e),
                        tr(Yc, e.containerInfo),
                        Wd = !!Qc,
                        Yc = Qc = null,
                        e.current = u,
                        il(e, u.alternate, u),
                        se(),
                        eu = s,
                        U.p = a,
                        D.T = n) : e.current = u,
                        xu ? (xu = !1,
                        Pu = e,
                        Eu = r) : ec(e, c),
                        c = e.pendingLanes,
                        0 === c && (ku = null),
                        function(e) {
                            if (ye && "function" === typeof ye.onCommitFiberRoot)
                                try {
                                    ye.onCommitFiberRoot(ve, e, void 0, 128 === (128 & e.current.flags))
                                } catch (t) {}
                        }(u.stateNode),
                        mc(e),
                        null !== t)
                            for (i = e.onRecoverableError,
                            u = 0; u < t.length; u++)
                                c = t[u],
                                i(c.value, {
                                    componentStack: c.stack
                                });
                        0 !== (3 & Eu) && tc(),
                        c = e.pendingLanes,
                        0 !== (4194218 & r) && 0 !== (42 & c) ? e === Mu ? Au++ : (Au = 0,
                        Mu = e) : Au = 0,
                        gc(0, !1)
                    }(e, t, n, r, f, i, a, s)
                } finally {
                    D.T = d,
                    U.p = f
                }
            }
            function ec(e, t) {
                0 === (e.pooledCacheLanes &= t) && (null != (t = e.pooledCache) && (e.pooledCache = null,
                Bi(t)))
            }
            function tc() {
                if (null !== Pu) {
                    var e = Pu
                      , t = Cu;
                    Cu = 0;
                    var n = _e(Eu)
                      , r = D.T
                      , i = U.p;
                    try {
                        if (U.p = 32 > n ? 32 : n,
                        D.T = null,
                        null === Pu)
                            var a = !1;
                        else {
                            n = Tu,
                            Tu = null;
                            var s = Pu
                              , l = Eu;
                            if (Pu = null,
                            Eu = 0,
                            0 !== (6 & eu))
                                throw Error(o(331));
                            var u = eu;
                            if (eu |= 4,
                            Ll(s.current),
                            xl(s, s.current, l, n),
                            eu = u,
                            gc(0, !1),
                            ye && "function" === typeof ye.onPostCommitFiberRoot)
                                try {
                                    ye.onPostCommitFiberRoot(ve, s)
                                } catch (c) {}
                            a = !0
                        }
                        return a
                    } finally {
                        U.p = i,
                        D.T = r,
                        ec(e, t)
                    }
                }
                return !1
            }
            function nc(e, t, n) {
                t = Or(n, t),
                null !== (e = Rs(e, t = jo(e.stateNode, t, 2), 2)) && (Re(e, 2),
                mc(e))
            }
            function rc(e, t, n) {
                if (3 === e.tag)
                    nc(e, e, n);
                else
                    for (; null !== t; ) {
                        if (3 === t.tag) {
                            nc(t, e, n);
                            break
                        }
                        if (1 === t.tag) {
                            var r = t.stateNode;
                            if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === ku || !ku.has(r))) {
                                e = Or(n, e),
                                null !== (r = Rs(t, n = Bo(2), 2)) && (Uo(n, r, t, e),
                                Re(r, 2),
                                mc(r));
                                break
                            }
                        }
                        t = t.return
                    }
            }
            function ic(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new Jl;
                    var i = new Set;
                    r.set(t, i)
                } else
                    void 0 === (i = r.get(t)) && (i = new Set,
                    r.set(t, i));
                i.has(n) || (lu = !0,
                i.add(n),
                e = ac.bind(null, e, t, n),
                t.then(e, e))
            }
            function ac(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t),
                e.pingedLanes |= e.suspendedLanes & n,
                e.warmLanes &= ~n,
                tu === e && (ru & n) === n && (4 === cu || 3 === cu && (62914560 & ru) === ru && 300 > le() - bu ? 0 === (2 & eu) && ju(e, 0) : hu |= n,
                mu === ru && (mu = 0)),
                mc(e)
            }
            function oc(e, t) {
                0 === t && (t = De()),
                null !== (e = Mr(e, t)) && (Re(e, t),
                mc(e))
            }
            function sc(e) {
                var t = e.memoizedState
                  , n = 0;
                null !== t && (n = t.retryLane),
                oc(e, n)
            }
            function lc(e, t) {
                var n = 0;
                switch (e.tag) {
                case 13:
                    var r = e.stateNode
                      , i = e.memoizedState;
                    null !== i && (n = i.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                case 22:
                    r = e.stateNode._retryCache;
                    break;
                default:
                    throw Error(o(314))
                }
                null !== r && r.delete(t),
                oc(e, n)
            }
            var uc = null
              , cc = null
              , dc = !1
              , fc = !1
              , hc = !1
              , pc = 0;
            function mc(e) {
                var t;
                e !== cc && null === e.next && (null === cc ? uc = cc = e : cc = cc.next = e),
                fc = !0,
                dc || (dc = !0,
                t = vc,
                rd((function() {
                    0 !== (6 & eu) ? ie(ce, t) : t()
                }
                )))
            }
            function gc(e, t) {
                if (!hc && fc) {
                    hc = !0;
                    do {
                        for (var n = !1, r = uc; null !== r; ) {
                            if (!t)
                                if (0 !== e) {
                                    var i = r.pendingLanes;
                                    if (0 === i)
                                        var a = 0;
                                    else {
                                        var o = r.suspendedLanes
                                          , s = r.pingedLanes;
                                        a = (1 << 31 - we(42 | e) + 1) - 1,
                                        a = 201326677 & (a &= i & ~(o & ~s)) ? 201326677 & a | 1 : a ? 2 | a : 0
                                    }
                                    0 !== a && (n = !0,
                                    wc(r, a))
                                } else
                                    a = ru,
                                    0 === (3 & (a = Ce(r, r === tu ? a : 0))) || Te(r, a) || (n = !0,
                                    wc(r, a));
                            r = r.next
                        }
                    } while (n);
                    hc = !1
                }
            }
            function vc() {
                fc = dc = !1;
                var e = 0;
                0 !== pc && (function() {
                    var e = window.event;
                    if (e && "popstate" === e.type)
                        return e !== Jc && (Jc = e,
                        !0);
                    return Jc = null,
                    !1
                }() && (e = pc),
                pc = 0);
                for (var t = le(), n = null, r = uc; null !== r; ) {
                    var i = r.next
                      , a = yc(r, t);
                    0 === a ? (r.next = null,
                    null === n ? uc = i : n.next = i,
                    null === i && (cc = n)) : (n = r,
                    (0 !== e || 0 !== (3 & a)) && (fc = !0)),
                    r = i
                }
                gc(e, !1)
            }
            function yc(e, t) {
                for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = -62914561 & e.pendingLanes; 0 < a; ) {
                    var o = 31 - we(a)
                      , s = 1 << o
                      , l = i[o];
                    -1 === l ? 0 !== (s & n) && 0 === (s & r) || (i[o] = Ae(s, t)) : l <= t && (e.expiredLanes |= s),
                    a &= ~s
                }
                if (n = ru,
                n = Ce(e, e === (t = tu) ? n : 0),
                r = e.callbackNode,
                0 === n || e === t && 2 === iu || null !== e.cancelPendingCommit)
                    return null !== r && null !== r && ae(r),
                    e.callbackNode = null,
                    e.callbackPriority = 0;
                if (0 === (3 & n) || Te(e, n)) {
                    if ((t = n & -n) === e.callbackPriority)
                        return t;
                    switch (null !== r && ae(r),
                    _e(n)) {
                    case 2:
                    case 8:
                        n = de;
                        break;
                    case 32:
                    default:
                        n = fe;
                        break;
                    case 268435456:
                        n = pe
                    }
                    return r = bc.bind(null, e),
                    n = ie(n, r),
                    e.callbackPriority = t,
                    e.callbackNode = n,
                    t
                }
                return null !== r && null !== r && ae(r),
                e.callbackPriority = 2,
                e.callbackNode = null,
                2
            }
            function bc(e, t) {
                var n = e.callbackNode;
                if (tc() && e.callbackNode !== n)
                    return null;
                var r = ru;
                return 0 === (r = Ce(e, e === tu ? r : 0)) ? null : (Nu(e, r, t),
                yc(e, le()),
                null != e.callbackNode && e.callbackNode === n ? bc.bind(null, e) : null)
            }
            function wc(e, t) {
                if (tc())
                    return null;
                Nu(e, t, !0)
            }
            function Sc() {
                return 0 === pc && (pc = Me()),
                pc
            }
            function kc(e) {
                return null == e || "symbol" === typeof e || "boolean" === typeof e ? null : "function" === typeof e ? e : Mt("" + e)
            }
            function xc(e, t) {
                var n = t.ownerDocument.createElement("input");
                return n.name = t.name,
                n.value = t.value,
                e.id && n.setAttribute("form", e.id),
                t.parentNode.insertBefore(n, t),
                e = new FormData(e),
                n.parentNode.removeChild(n),
                e
            }
            for (var Pc = 0; Pc < Sr.length; Pc++) {
                var Ec = Sr[Pc];
                kr(Ec.toLowerCase(), "on" + (Ec[0].toUpperCase() + Ec.slice(1)))
            }
            kr(hr, "onAnimationEnd"),
            kr(pr, "onAnimationIteration"),
            kr(mr, "onAnimationStart"),
            kr("dblclick", "onDoubleClick"),
            kr("focusin", "onFocus"),
            kr("focusout", "onBlur"),
            kr(gr, "onTransitionRun"),
            kr(vr, "onTransitionStart"),
            kr(yr, "onTransitionCancel"),
            kr(br, "onTransitionEnd"),
            tt("onMouseEnter", ["mouseout", "mouseover"]),
            tt("onMouseLeave", ["mouseout", "mouseover"]),
            tt("onPointerEnter", ["pointerout", "pointerover"]),
            tt("onPointerLeave", ["pointerout", "pointerover"]),
            et("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
            et("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
            et("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
            et("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
            et("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
            et("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Cc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , Tc = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cc));
            function Ac(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]
                      , i = r.event;
                    r = r.listeners;
                    e: {
                        var a = void 0;
                        if (t)
                            for (var o = r.length - 1; 0 <= o; o--) {
                                var s = r[o]
                                  , l = s.instance
                                  , u = s.currentTarget;
                                if (s = s.listener,
                                l !== a && i.isPropagationStopped())
                                    break e;
                                a = s,
                                i.currentTarget = u;
                                try {
                                    a(i)
                                } catch (c) {
                                    Oo(c)
                                }
                                i.currentTarget = null,
                                a = l
                            }
                        else
                            for (o = 0; o < r.length; o++) {
                                if (l = (s = r[o]).instance,
                                u = s.currentTarget,
                                s = s.listener,
                                l !== a && i.isPropagationStopped())
                                    break e;
                                a = s,
                                i.currentTarget = u;
                                try {
                                    a(i)
                                } catch (c) {
                                    Oo(c)
                                }
                                i.currentTarget = null,
                                a = l
                            }
                    }
                }
            }
            function Mc(e, t) {
                var n = t[Be];
                void 0 === n && (n = t[Be] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Nc(t, e, 2, !1),
                n.add(r))
            }
            function Dc(e, t, n) {
                var r = 0;
                t && (r |= 4),
                Nc(n, e, r, t)
            }
            var Lc = "_reactListening" + Math.random().toString(36).slice(2);
            function Rc(e) {
                if (!e[Lc]) {
                    e[Lc] = !0,
                    Ze.forEach((function(t) {
                        "selectionchange" !== t && (Tc.has(t) || Dc(t, !1, e),
                        Dc(t, !0, e))
                    }
                    ));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[Lc] || (t[Lc] = !0,
                    Dc("selectionchange", !1, t))
                }
            }
            function Nc(e, t, n, r) {
                switch (Gd(t)) {
                case 2:
                    var i = Hd;
                    break;
                case 8:
                    i = qd;
                    break;
                default:
                    i = Qd
                }
                n = i.bind(null, t, n, e),
                i = void 0,
                !Vt || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (i = !0),
                r ? void 0 !== i ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: i
                }) : e.addEventListener(t, n, !0) : void 0 !== i ? e.addEventListener(t, n, {
                    passive: i
                }) : e.addEventListener(t, n, !1)
            }
            function Oc(e, t, n, r, i) {
                var a = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r)
                    e: for (; ; ) {
                        if (null === r)
                            return;
                        var o = r.tag;
                        if (3 === o || 4 === o) {
                            var s = r.stateNode.containerInfo;
                            if (s === i || 8 === s.nodeType && s.parentNode === i)
                                break;
                            if (4 === o)
                                for (o = r.return; null !== o; ) {
                                    var l = o.tag;
                                    if ((3 === l || 4 === l) && ((l = o.stateNode.containerInfo) === i || 8 === l.nodeType && l.parentNode === i))
                                        return;
                                    o = o.return
                                }
                            for (; null !== s; ) {
                                if (null === (o = Qe(s)))
                                    return;
                                if (5 === (l = o.tag) || 6 === l || 26 === l || 27 === l) {
                                    r = a = o;
                                    continue e
                                }
                                s = s.parentNode
                            }
                        }
                        r = r.return
                    }
                zt((function() {
                    var r = a
                      , i = Lt(n)
                      , o = [];
                    e: {
                        var s = wr.get(e);
                        if (void 0 !== s) {
                            var l = Zt
                              , u = e;
                            switch (e) {
                            case "keypress":
                                if (0 === Wt(n))
                                    break e;
                            case "keydown":
                            case "keyup":
                                l = pn;
                                break;
                            case "focusin":
                                u = "focus",
                                l = an;
                                break;
                            case "focusout":
                                u = "blur",
                                l = an;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                l = an;
                                break;
                            case "click":
                                if (2 === n.button)
                                    break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                l = nn;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                l = rn;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                l = gn;
                                break;
                            case hr:
                            case pr:
                            case mr:
                                l = on;
                                break;
                            case br:
                                l = vn;
                                break;
                            case "scroll":
                            case "scrollend":
                                l = en;
                                break;
                            case "wheel":
                                l = yn;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                l = sn;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                l = mn;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                l = bn
                            }
                            var c = 0 !== (4 & t)
                              , d = !c && ("scroll" === e || "scrollend" === e)
                              , f = c ? null !== s ? s + "Capture" : null : s;
                            c = [];
                            for (var h, p = r; null !== p; ) {
                                var m = p;
                                if (h = m.stateNode,
                                5 !== (m = m.tag) && 26 !== m && 27 !== m || null === h || null === f || null != (m = Ft(p, f)) && c.push(_c(p, m, h)),
                                d)
                                    break;
                                p = p.return
                            }
                            0 < c.length && (s = new l(s,u,null,n,i),
                            o.push({
                                event: s,
                                listeners: c
                            }))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (l = "mouseout" === e || "pointerout" === e,
                        (!(s = "mouseover" === e || "pointerover" === e) || n === Dt || !(u = n.relatedTarget || n.fromElement) || !Qe(u) && !u[je]) && (l || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window,
                        l ? (l = r,
                        null !== (u = (u = n.relatedTarget || n.toElement) ? Qe(u) : null) && (d = F(u),
                        c = u.tag,
                        u !== d || 5 !== c && 27 !== c && 6 !== c) && (u = null)) : (l = null,
                        u = r),
                        l !== u)) {
                            if (c = nn,
                            m = "onMouseLeave",
                            f = "onMouseEnter",
                            p = "mouse",
                            "pointerout" !== e && "pointerover" !== e || (c = mn,
                            m = "onPointerLeave",
                            f = "onPointerEnter",
                            p = "pointer"),
                            d = null == l ? s : Ke(l),
                            h = null == u ? s : Ke(u),
                            (s = new c(m,p + "leave",l,n,i)).target = d,
                            s.relatedTarget = h,
                            m = null,
                            Qe(i) === r && ((c = new c(f,p + "enter",u,n,i)).target = h,
                            c.relatedTarget = d,
                            m = c),
                            d = m,
                            l && u)
                                e: {
                                    for (f = u,
                                    p = 0,
                                    h = c = l; h; h = Fc(h))
                                        p++;
                                    for (h = 0,
                                    m = f; m; m = Fc(m))
                                        h++;
                                    for (; 0 < p - h; )
                                        c = Fc(c),
                                        p--;
                                    for (; 0 < h - p; )
                                        f = Fc(f),
                                        h--;
                                    for (; p--; ) {
                                        if (c === f || null !== f && c === f.alternate)
                                            break e;
                                        c = Fc(c),
                                        f = Fc(f)
                                    }
                                    c = null
                                }
                            else
                                c = null;
                            null !== l && Vc(o, s, l, c, !1),
                            null !== u && null !== d && Vc(o, d, u, c, !0)
                        }
                        if ("select" === (l = (s = r ? Ke(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type)
                            var g = Fn;
                        else if (Ln(s))
                            if (Vn)
                                g = Qn;
                            else {
                                g = Hn;
                                var v = Wn
                            }
                        else
                            !(l = s.nodeName) || "input" !== l.toLowerCase() || "checkbox" !== s.type && "radio" !== s.type ? r && Ct(r.elementType) && (g = Fn) : g = qn;
                        switch (g && (g = g(e, r)) ? Rn(o, g, n, i) : (v && v(e, s, r),
                        "focusout" === e && r && "number" === s.type && null != r.memoizedProps.value && yt(s, "number", s.value)),
                        v = r ? Ke(r) : window,
                        e) {
                        case "focusin":
                            (Ln(v) || "true" === v.contentEditable) && (rr = v,
                            ir = r,
                            ar = null);
                            break;
                        case "focusout":
                            ar = ir = rr = null;
                            break;
                        case "mousedown":
                            or = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            or = !1,
                            sr(o, n, i);
                            break;
                        case "selectionchange":
                            if (nr)
                                break;
                        case "keydown":
                        case "keyup":
                            sr(o, n, i)
                        }
                        var y;
                        if (Sn)
                            e: {
                                switch (e) {
                                case "compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                                }
                                b = void 0
                            }
                        else
                            Mn ? Tn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (Pn && "ko" !== n.locale && (Mn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Mn && (y = $t()) : (Bt = "value"in (jt = i) ? jt.value : jt.textContent,
                        Mn = !0)),
                        0 < (v = zc(r, b)).length && (b = new ln(b,e,null,n,i),
                        o.push({
                            event: b,
                            listeners: v
                        }),
                        y ? b.data = y : null !== (y = An(n)) && (b.data = y))),
                        (y = xn ? function(e, t) {
                            switch (e) {
                            case "compositionend":
                                return An(t);
                            case "keypress":
                                return 32 !== t.which ? null : (Cn = !0,
                                En);
                            case "textInput":
                                return (e = t.data) === En && Cn ? null : e;
                            default:
                                return null
                            }
                        }(e, n) : function(e, t) {
                            if (Mn)
                                return "compositionend" === e || !Sn && Tn(e, t) ? (e = $t(),
                                Ut = Bt = jt = null,
                                Mn = !1,
                                e) : null;
                            switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length)
                                        return t.char;
                                    if (t.which)
                                        return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return Pn && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && (0 < (b = zc(r, "onBeforeInput")).length && (v = new ln("onBeforeInput","beforeinput",null,n,i),
                        o.push({
                            event: v,
                            listeners: b
                        }),
                        v.data = y)),
                        function(e, t, n, r, i) {
                            if ("submit" === t && n && n.stateNode === i) {
                                var a = kc((i[Ie] || null).action)
                                  , o = r.submitter;
                                o && null !== (t = (t = o[Ie] || null) ? kc(t.formAction) : o.getAttribute("formAction")) && (a = t,
                                o = null);
                                var s = new Zt("action","action",null,r,i);
                                e.push({
                                    event: s,
                                    listeners: [{
                                        instance: null,
                                        listener: function() {
                                            if (r.defaultPrevented) {
                                                if (0 !== pc) {
                                                    var e = o ? xc(i, o) : new FormData(i);
                                                    co(n, {
                                                        pending: !0,
                                                        data: e,
                                                        method: i.method,
                                                        action: a
                                                    }, null, e)
                                                }
                                            } else
                                                "function" === typeof a && (s.preventDefault(),
                                                e = o ? xc(i, o) : new FormData(i),
                                                co(n, {
                                                    pending: !0,
                                                    data: e,
                                                    method: i.method,
                                                    action: a
                                                }, a, e))
                                        },
                                        currentTarget: i
                                    }]
                                })
                            }
                        }(o, e, r, n, i)
                    }
                    Ac(o, t)
                }
                ))
            }
            function _c(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }
            function zc(e, t) {
                for (var n = t + "Capture", r = []; null !== e; ) {
                    var i = e
                      , a = i.stateNode;
                    5 !== (i = i.tag) && 26 !== i && 27 !== i || null === a || (null != (i = Ft(e, n)) && r.unshift(_c(e, i, a)),
                    null != (i = Ft(e, t)) && r.push(_c(e, i, a))),
                    e = e.return
                }
                return r
            }
            function Fc(e) {
                if (null === e)
                    return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag && 27 !== e.tag);
                return e || null
            }
            function Vc(e, t, n, r, i) {
                for (var a = t._reactName, o = []; null !== n && n !== r; ) {
                    var s = n
                      , l = s.alternate
                      , u = s.stateNode;
                    if (s = s.tag,
                    null !== l && l === r)
                        break;
                    5 !== s && 26 !== s && 27 !== s || null === u || (l = u,
                    i ? null != (u = Ft(n, a)) && o.unshift(_c(n, u, l)) : i || null != (u = Ft(n, a)) && o.push(_c(n, u, l))),
                    n = n.return
                }
                0 !== o.length && e.push({
                    event: t,
                    listeners: o
                })
            }
            var Ic = /\r\n?/g
              , jc = /\u0000|\uFFFD/g;
            function Bc(e) {
                return ("string" === typeof e ? e : "" + e).replace(Ic, "\n").replace(jc, "")
            }
            function Uc(e, t) {
                return t = Bc(t),
                Bc(e) === t
            }
            function $c() {}
            function Wc(e, t, n, r, i, a) {
                switch (n) {
                case "children":
                    "string" === typeof r ? "body" === t || "textarea" === t && "" === r || kt(e, r) : ("number" === typeof r || "bigint" === typeof r) && "body" !== t && kt(e, "" + r);
                    break;
                case "className":
                    st(e, "class", r);
                    break;
                case "tabIndex":
                    st(e, "tabindex", r);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    st(e, n, r);
                    break;
                case "style":
                    Et(e, r, a);
                    break;
                case "data":
                    if ("object" !== t) {
                        st(e, "data", r);
                        break
                    }
                case "src":
                case "href":
                    if ("" === r && ("a" !== t || "href" !== n)) {
                        e.removeAttribute(n);
                        break
                    }
                    if (null == r || "function" === typeof r || "symbol" === typeof r || "boolean" === typeof r) {
                        e.removeAttribute(n);
                        break
                    }
                    r = Mt("" + r),
                    e.setAttribute(n, r);
                    break;
                case "action":
                case "formAction":
                    if ("function" === typeof r) {
                        e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break
                    }
                    if ("function" === typeof a && ("formAction" === n ? ("input" !== t && Wc(e, t, "name", i.name, i, null),
                    Wc(e, t, "formEncType", i.formEncType, i, null),
                    Wc(e, t, "formMethod", i.formMethod, i, null),
                    Wc(e, t, "formTarget", i.formTarget, i, null)) : (Wc(e, t, "encType", i.encType, i, null),
                    Wc(e, t, "method", i.method, i, null),
                    Wc(e, t, "target", i.target, i, null))),
                    null == r || "symbol" === typeof r || "boolean" === typeof r) {
                        e.removeAttribute(n);
                        break
                    }
                    r = Mt("" + r),
                    e.setAttribute(n, r);
                    break;
                case "onClick":
                    null != r && (e.onclick = $c);
                    break;
                case "onScroll":
                    null != r && Mc("scroll", e);
                    break;
                case "onScrollEnd":
                    null != r && Mc("scrollend", e);
                    break;
                case "dangerouslySetInnerHTML":
                    if (null != r) {
                        if ("object" !== typeof r || !("__html"in r))
                            throw Error(o(61));
                        if (null != (n = r.__html)) {
                            if (null != i.children)
                                throw Error(o(60));
                            e.innerHTML = n
                        }
                    }
                    break;
                case "multiple":
                    e.multiple = r && "function" !== typeof r && "symbol" !== typeof r;
                    break;
                case "muted":
                    e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                case "autoFocus":
                    break;
                case "xlinkHref":
                    if (null == r || "function" === typeof r || "boolean" === typeof r || "symbol" === typeof r) {
                        e.removeAttribute("xlink:href");
                        break
                    }
                    n = Mt("" + r),
                    e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    null != r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
                    break;
                case "inert":
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                    r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
                    break;
                case "capture":
                case "download":
                    !0 === r ? e.setAttribute(n, "") : !1 !== r && null != r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    null != r && "function" !== typeof r && "symbol" !== typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                    break;
                case "rowSpan":
                case "start":
                    null == r || "function" === typeof r || "symbol" === typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                    break;
                case "popover":
                    Mc("beforetoggle", e),
                    Mc("toggle", e),
                    ot(e, "popover", r);
                    break;
                case "xlinkActuate":
                    lt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                    break;
                case "xlinkArcrole":
                    lt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                    break;
                case "xlinkRole":
                    lt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                    break;
                case "xlinkShow":
                    lt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                    break;
                case "xlinkTitle":
                    lt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                    break;
                case "xlinkType":
                    lt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                    break;
                case "xmlBase":
                    lt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                    break;
                case "xmlLang":
                    lt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                    break;
                case "xmlSpace":
                    lt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                    break;
                case "is":
                    ot(e, "is", r);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && ot(e, n = Tt.get(n) || n, r)
                }
            }
            function Hc(e, t, n, r, i, a) {
                switch (n) {
                case "style":
                    Et(e, r, a);
                    break;
                case "dangerouslySetInnerHTML":
                    if (null != r) {
                        if ("object" !== typeof r || !("__html"in r))
                            throw Error(o(61));
                        if (null != (n = r.__html)) {
                            if (null != i.children)
                                throw Error(o(60));
                            e.innerHTML = n
                        }
                    }
                    break;
                case "children":
                    "string" === typeof r ? kt(e, r) : ("number" === typeof r || "bigint" === typeof r) && kt(e, "" + r);
                    break;
                case "onScroll":
                    null != r && Mc("scroll", e);
                    break;
                case "onScrollEnd":
                    null != r && Mc("scrollend", e);
                    break;
                case "onClick":
                    null != r && (e.onclick = $c);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "innerHTML":
                case "ref":
                case "innerText":
                case "textContent":
                    break;
                default:
                    Je.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (i = n.endsWith("Capture"),
                    t = n.slice(2, i ? n.length - 7 : void 0),
                    "function" === typeof (a = null != (a = e[Ie] || null) ? a[n] : null) && e.removeEventListener(t, a, i),
                    "function" !== typeof r) ? n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : ot(e, n, r) : ("function" !== typeof a && null !== a && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, i)))
                }
            }
            function qc(e, t, n) {
                switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "img":
                    Mc("error", e),
                    Mc("load", e);
                    var r, i = !1, a = !1;
                    for (r in n)
                        if (n.hasOwnProperty(r)) {
                            var s = n[r];
                            if (null != s)
                                switch (r) {
                                case "src":
                                    i = !0;
                                    break;
                                case "srcSet":
                                    a = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(o(137, t));
                                default:
                                    Wc(e, t, r, s, n, null)
                                }
                        }
                    return a && Wc(e, t, "srcSet", n.srcSet, n, null),
                    void (i && Wc(e, t, "src", n.src, n, null));
                case "input":
                    Mc("invalid", e);
                    var l = r = s = a = null
                      , u = null
                      , c = null;
                    for (i in n)
                        if (n.hasOwnProperty(i)) {
                            var d = n[i];
                            if (null != d)
                                switch (i) {
                                case "name":
                                    a = d;
                                    break;
                                case "type":
                                    s = d;
                                    break;
                                case "checked":
                                    u = d;
                                    break;
                                case "defaultChecked":
                                    c = d;
                                    break;
                                case "value":
                                    r = d;
                                    break;
                                case "defaultValue":
                                    l = d;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != d)
                                        throw Error(o(137, t));
                                    break;
                                default:
                                    Wc(e, t, i, d, n, null)
                                }
                        }
                    return vt(e, r, l, u, c, s, a, !1),
                    void dt(e);
                case "select":
                    for (a in Mc("invalid", e),
                    i = s = r = null,
                    n)
                        if (n.hasOwnProperty(a) && null != (l = n[a]))
                            switch (a) {
                            case "value":
                                r = l;
                                break;
                            case "defaultValue":
                                s = l;
                                break;
                            case "multiple":
                                i = l;
                            default:
                                Wc(e, t, a, l, n, null)
                            }
                    return t = r,
                    n = s,
                    e.multiple = !!i,
                    void (null != t ? bt(e, !!i, t, !1) : null != n && bt(e, !!i, n, !0));
                case "textarea":
                    for (s in Mc("invalid", e),
                    r = a = i = null,
                    n)
                        if (n.hasOwnProperty(s) && null != (l = n[s]))
                            switch (s) {
                            case "value":
                                i = l;
                                break;
                            case "defaultValue":
                                a = l;
                                break;
                            case "children":
                                r = l;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (null != l)
                                    throw Error(o(91));
                                break;
                            default:
                                Wc(e, t, s, l, n, null)
                            }
                    return St(e, i, a, r),
                    void dt(e);
                case "option":
                    for (u in n)
                        if (n.hasOwnProperty(u) && null != (i = n[u]))
                            if ("selected" === u)
                                e.selected = i && "function" !== typeof i && "symbol" !== typeof i;
                            else
                                Wc(e, t, u, i, n, null);
                    return;
                case "dialog":
                    Mc("cancel", e),
                    Mc("close", e);
                    break;
                case "iframe":
                case "object":
                    Mc("load", e);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Cc.length; i++)
                        Mc(Cc[i], e);
                    break;
                case "image":
                    Mc("error", e),
                    Mc("load", e);
                    break;
                case "details":
                    Mc("toggle", e);
                    break;
                case "embed":
                case "source":
                case "link":
                    Mc("error", e),
                    Mc("load", e);
                case "area":
                case "base":
                case "br":
                case "col":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "track":
                case "wbr":
                case "menuitem":
                    for (c in n)
                        if (n.hasOwnProperty(c) && null != (i = n[c]))
                            switch (c) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(o(137, t));
                            default:
                                Wc(e, t, c, i, n, null)
                            }
                    return;
                default:
                    if (Ct(t)) {
                        for (d in n)
                            n.hasOwnProperty(d) && (void 0 !== (i = n[d]) && Hc(e, t, d, i, n, void 0));
                        return
                    }
                }
                for (l in n)
                    n.hasOwnProperty(l) && (null != (i = n[l]) && Wc(e, t, l, i, n, null))
            }
            var Qc = null
              , Yc = null;
            function Kc(e) {
                return 9 === e.nodeType ? e : e.ownerDocument
            }
            function Xc(e) {
                switch (e) {
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0
                }
            }
            function Gc(e, t) {
                if (0 === e)
                    switch (t) {
                    case "svg":
                        return 1;
                    case "math":
                        return 2;
                    default:
                        return 0
                    }
                return 1 === e && "foreignObject" === t ? 0 : e
            }
            function Zc(e, t) {
                return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "bigint" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var Jc = null;
            var ed = "function" === typeof setTimeout ? setTimeout : void 0
              , td = "function" === typeof clearTimeout ? clearTimeout : void 0
              , nd = "function" === typeof Promise ? Promise : void 0
              , rd = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof nd ? function(e) {
                return nd.resolve(null).then(e).catch(id)
            }
            : ed;
            function id(e) {
                setTimeout((function() {
                    throw e
                }
                ))
            }
            function ad(e, t) {
                var n = t
                  , r = 0;
                do {
                    var i = n.nextSibling;
                    if (e.removeChild(n),
                    i && 8 === i.nodeType)
                        if ("/$" === (n = i.data)) {
                            if (0 === r)
                                return e.removeChild(i),
                                void gf(t);
                            r--
                        } else
                            "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = i
                } while (n);
                gf(t)
            }
            function od(e) {
                var t = e.firstChild;
                for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
                    var n = t;
                    switch (t = t.nextSibling,
                    n.nodeName) {
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        od(n),
                        qe(n);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if ("stylesheet" === n.rel.toLowerCase())
                            continue
                    }
                    e.removeChild(n)
                }
            }
            function sd(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t)
                        break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t || "F!" === t || "F" === t)
                            break;
                        if ("/$" === t)
                            return null
                    }
                }
                return e
            }
            function ld(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t)
                                return e;
                            t--
                        } else
                            "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            function ud(e, t, n) {
                switch (t = Kc(n),
                e) {
                case "html":
                    if (!(e = t.documentElement))
                        throw Error(o(452));
                    return e;
                case "head":
                    if (!(e = t.head))
                        throw Error(o(453));
                    return e;
                case "body":
                    if (!(e = t.body))
                        throw Error(o(454));
                    return e;
                default:
                    throw Error(o(451))
                }
            }
            var cd = new Map
              , dd = new Set;
            function fd(e) {
                return "function" === typeof e.getRootNode ? e.getRootNode() : e.ownerDocument
            }
            var hd = U.d;
            U.d = {
                f: function() {
                    var e = hd.f()
                      , t = Vu();
                    return e || t
                },
                r: function(e) {
                    var t = Ye(e);
                    null !== t && 5 === t.tag && "form" === t.type ? ho(t) : hd.r(e)
                },
                D: function(e) {
                    hd.D(e),
                    md("dns-prefetch", e, null)
                },
                C: function(e, t) {
                    hd.C(e, t),
                    md("preconnect", e, t)
                },
                L: function(e, t, n) {
                    hd.L(e, t, n);
                    var r = pd;
                    if (r && e && t) {
                        var i = 'link[rel="preload"][as="' + mt(t) + '"]';
                        "image" === t && n && n.imageSrcSet ? (i += '[imagesrcset="' + mt(n.imageSrcSet) + '"]',
                        "string" === typeof n.imageSizes && (i += '[imagesizes="' + mt(n.imageSizes) + '"]')) : i += '[href="' + mt(e) + '"]';
                        var a = i;
                        switch (t) {
                        case "style":
                            a = vd(e);
                            break;
                        case "script":
                            a = wd(e)
                        }
                        cd.has(a) || (e = L({
                            rel: "preload",
                            href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                            as: t
                        }, n),
                        cd.set(a, e),
                        null !== r.querySelector(i) || "style" === t && r.querySelector(yd(a)) || "script" === t && r.querySelector(Sd(a)) || (qc(t = r.createElement("link"), "link", e),
                        Ge(t),
                        r.head.appendChild(t)))
                    }
                },
                m: function(e, t) {
                    hd.m(e, t);
                    var n = pd;
                    if (n && e) {
                        var r = t && "string" === typeof t.as ? t.as : "script"
                          , i = 'link[rel="modulepreload"][as="' + mt(r) + '"][href="' + mt(e) + '"]'
                          , a = i;
                        switch (r) {
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            a = wd(e)
                        }
                        if (!cd.has(a) && (e = L({
                            rel: "modulepreload",
                            href: e
                        }, t),
                        cd.set(a, e),
                        null === n.querySelector(i))) {
                            switch (r) {
                            case "audioworklet":
                            case "paintworklet":
                            case "serviceworker":
                            case "sharedworker":
                            case "worker":
                            case "script":
                                if (n.querySelector(Sd(a)))
                                    return
                            }
                            qc(r = n.createElement("link"), "link", e),
                            Ge(r),
                            n.head.appendChild(r)
                        }
                    }
                },
                X: function(e, t) {
                    hd.X(e, t);
                    var n = pd;
                    if (n && e) {
                        var r = Xe(n).hoistableScripts
                          , i = wd(e)
                          , a = r.get(i);
                        a || ((a = n.querySelector(Sd(i))) || (e = L({
                            src: e,
                            async: !0
                        }, t),
                        (t = cd.get(i)) && Ed(e, t),
                        Ge(a = n.createElement("script")),
                        qc(a, "link", e),
                        n.head.appendChild(a)),
                        a = {
                            type: "script",
                            instance: a,
                            count: 1,
                            state: null
                        },
                        r.set(i, a))
                    }
                },
                S: function(e, t, n) {
                    hd.S(e, t, n);
                    var r = pd;
                    if (r && e) {
                        var i = Xe(r).hoistableStyles
                          , a = vd(e);
                        t = t || "default";
                        var o = i.get(a);
                        if (!o) {
                            var s = {
                                loading: 0,
                                preload: null
                            };
                            if (o = r.querySelector(yd(a)))
                                s.loading = 5;
                            else {
                                e = L({
                                    rel: "stylesheet",
                                    href: e,
                                    "data-precedence": t
                                }, n),
                                (n = cd.get(a)) && Pd(e, n);
                                var l = o = r.createElement("link");
                                Ge(l),
                                qc(l, "link", e),
                                l._p = new Promise((function(e, t) {
                                    l.onload = e,
                                    l.onerror = t
                                }
                                )),
                                l.addEventListener("load", (function() {
                                    s.loading |= 1
                                }
                                )),
                                l.addEventListener("error", (function() {
                                    s.loading |= 2
                                }
                                )),
                                s.loading |= 4,
                                xd(o, t, r)
                            }
                            o = {
                                type: "stylesheet",
                                instance: o,
                                count: 1,
                                state: s
                            },
                            i.set(a, o)
                        }
                    }
                },
                M: function(e, t) {
                    hd.M(e, t);
                    var n = pd;
                    if (n && e) {
                        var r = Xe(n).hoistableScripts
                          , i = wd(e)
                          , a = r.get(i);
                        a || ((a = n.querySelector(Sd(i))) || (e = L({
                            src: e,
                            async: !0,
                            type: "module"
                        }, t),
                        (t = cd.get(i)) && Ed(e, t),
                        Ge(a = n.createElement("script")),
                        qc(a, "link", e),
                        n.head.appendChild(a)),
                        a = {
                            type: "script",
                            instance: a,
                            count: 1,
                            state: null
                        },
                        r.set(i, a))
                    }
                }
            };
            var pd = "undefined" === typeof document ? null : document;
            function md(e, t, n) {
                var r = pd;
                if (r && "string" === typeof t && t) {
                    var i = mt(t);
                    i = 'link[rel="' + e + '"][href="' + i + '"]',
                    "string" === typeof n && (i += '[crossorigin="' + n + '"]'),
                    dd.has(i) || (dd.add(i),
                    e = {
                        rel: e,
                        crossOrigin: n,
                        href: t
                    },
                    null === r.querySelector(i) && (qc(t = r.createElement("link"), "link", e),
                    Ge(t),
                    r.head.appendChild(t)))
                }
            }
            function gd(e, t, n, r) {
                var i, a, s, l, u = (u = G.current) ? fd(u) : null;
                if (!u)
                    throw Error(o(446));
                switch (e) {
                case "meta":
                case "title":
                    return null;
                case "style":
                    return "string" === typeof n.precedence && "string" === typeof n.href ? (t = vd(n.href),
                    (r = (n = Xe(u).hoistableStyles).get(t)) || (r = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    },
                    n.set(t, r)),
                    r) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if ("stylesheet" === n.rel && "string" === typeof n.href && "string" === typeof n.precedence) {
                        e = vd(n.href);
                        var c = Xe(u).hoistableStyles
                          , d = c.get(e);
                        if (d || (u = u.ownerDocument || u,
                        d = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        },
                        c.set(e, d),
                        (c = u.querySelector(yd(e))) && !c._p && (d.instance = c,
                        d.state.loading = 5),
                        cd.has(e) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        },
                        cd.set(e, n),
                        c || (i = u,
                        a = e,
                        s = n,
                        l = d.state,
                        i.querySelector('link[rel="preload"][as="style"][' + a + "]") ? l.loading = 1 : (a = i.createElement("link"),
                        l.preload = a,
                        a.addEventListener("load", (function() {
                            return l.loading |= 1
                        }
                        )),
                        a.addEventListener("error", (function() {
                            return l.loading |= 2
                        }
                        )),
                        qc(a, "link", s),
                        Ge(a),
                        i.head.appendChild(a))))),
                        t && null === r)
                            throw Error(o(528, ""));
                        return d
                    }
                    if (t && null !== r)
                        throw Error(o(529, ""));
                    return null;
                case "script":
                    return t = n.async,
                    "string" === typeof (n = n.src) && t && "function" !== typeof t && "symbol" !== typeof t ? (t = wd(n),
                    (r = (n = Xe(u).hoistableScripts).get(t)) || (r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    },
                    n.set(t, r)),
                    r) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(o(444, e))
                }
            }
            function vd(e) {
                return 'href="' + mt(e) + '"'
            }
            function yd(e) {
                return 'link[rel="stylesheet"][' + e + "]"
            }
            function bd(e) {
                return L({}, e, {
                    "data-precedence": e.precedence,
                    precedence: null
                })
            }
            function wd(e) {
                return '[src="' + mt(e) + '"]'
            }
            function Sd(e) {
                return "script[async]" + e
            }
            function kd(e, t, n) {
                if (t.count++,
                null === t.instance)
                    switch (t.type) {
                    case "style":
                        var r = e.querySelector('style[data-href~="' + mt(n.href) + '"]');
                        if (r)
                            return t.instance = r,
                            Ge(r),
                            r;
                        var i = L({}, n, {
                            "data-href": n.href,
                            "data-precedence": n.precedence,
                            href: null,
                            precedence: null
                        });
                        return Ge(r = (e.ownerDocument || e).createElement("style")),
                        qc(r, "style", i),
                        xd(r, n.precedence, e),
                        t.instance = r;
                    case "stylesheet":
                        i = vd(n.href);
                        var a = e.querySelector(yd(i));
                        if (a)
                            return t.state.loading |= 4,
                            t.instance = a,
                            Ge(a),
                            a;
                        r = bd(n),
                        (i = cd.get(i)) && Pd(r, i),
                        Ge(a = (e.ownerDocument || e).createElement("link"));
                        var s = a;
                        return s._p = new Promise((function(e, t) {
                            s.onload = e,
                            s.onerror = t
                        }
                        )),
                        qc(a, "link", r),
                        t.state.loading |= 4,
                        xd(a, n.precedence, e),
                        t.instance = a;
                    case "script":
                        return a = wd(n.src),
                        (i = e.querySelector(Sd(a))) ? (t.instance = i,
                        Ge(i),
                        i) : (r = n,
                        (i = cd.get(a)) && Ed(r = L({}, n), i),
                        Ge(i = (e = e.ownerDocument || e).createElement("script")),
                        qc(i, "link", r),
                        e.head.appendChild(i),
                        t.instance = i);
                    case "void":
                        return null;
                    default:
                        throw Error(o(443, t.type))
                    }
                else
                    "stylesheet" === t.type && 0 === (4 & t.state.loading) && (r = t.instance,
                    t.state.loading |= 4,
                    xd(r, n.precedence, e));
                return t.instance
            }
            function xd(e, t, n) {
                for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
                    var s = r[o];
                    if (s.dataset.precedence === t)
                        a = s;
                    else if (a !== i)
                        break
                }
                a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild)
            }
            function Pd(e, t) {
                null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
                null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
                null == e.title && (e.title = t.title)
            }
            function Ed(e, t) {
                null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
                null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
                null == e.integrity && (e.integrity = t.integrity)
            }
            var Cd = null;
            function Td(e, t, n) {
                if (null === Cd) {
                    var r = new Map
                      , i = Cd = new Map;
                    i.set(n, r)
                } else
                    (r = (i = Cd).get(n)) || (r = new Map,
                    i.set(n, r));
                if (r.has(e))
                    return r;
                for (r.set(e, null),
                n = n.getElementsByTagName(e),
                i = 0; i < n.length; i++) {
                    var a = n[i];
                    if (!(a[He] || a[Ve] || "link" === e && "stylesheet" === a.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== a.namespaceURI) {
                        var o = a.getAttribute(t) || "";
                        o = e + o;
                        var s = r.get(o);
                        s ? s.push(a) : r.set(o, [a])
                    }
                }
                return r
            }
            function Ad(e, t, n) {
                (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null)
            }
            function Md(e) {
                return "stylesheet" !== e.type || 0 !== (3 & e.state.loading)
            }
            var Dd = null;
            function Ld() {}
            function Rd() {
                if (this.count--,
                0 === this.count)
                    if (this.stylesheets)
                        Od(this, this.stylesheets);
                    else if (this.unsuspend) {
                        var e = this.unsuspend;
                        this.unsuspend = null,
                        e()
                    }
            }
            var Nd = null;
            function Od(e, t) {
                e.stylesheets = null,
                null !== e.unsuspend && (e.count++,
                Nd = new Map,
                t.forEach(_d, e),
                Nd = null,
                Rd.call(e))
            }
            function _d(e, t) {
                if (!(4 & t.state.loading)) {
                    var n = Nd.get(e);
                    if (n)
                        var r = n.get(null);
                    else {
                        n = new Map,
                        Nd.set(e, n);
                        for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
                            var o = i[a];
                            "LINK" !== o.nodeName && "not all" === o.getAttribute("media") || (n.set(o.dataset.precedence, o),
                            r = o)
                        }
                        r && n.set(null, r)
                    }
                    o = (i = t.instance).getAttribute("data-precedence"),
                    (a = n.get(o) || r) === r && n.set(null, i),
                    n.set(o, i),
                    this.count++,
                    r = Rd.bind(this),
                    i.addEventListener("load", r),
                    i.addEventListener("error", r),
                    a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(i, e.firstChild),
                    t.state.loading |= 4
                }
            }
            var zd = {
                $$typeof: g,
                Provider: null,
                Consumer: null,
                _currentValue: $,
                _currentValue2: $,
                _threadCount: 0
            };
            function Fd(e, t, n, r, i, a, o, s) {
                this.tag = 1,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
                this.callbackPriority = 0,
                this.expirationTimes = Le(-1),
                this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = Le(0),
                this.hiddenUpdates = Le(null),
                this.identifierPrefix = r,
                this.onUncaughtError = i,
                this.onCaughtError = a,
                this.onRecoverableError = o,
                this.pooledCache = null,
                this.pooledCacheLanes = 0,
                this.formState = s,
                this.incompleteTransitions = new Map
            }
            function Vd(e, t, n, r, i, a, o, s, l, u, c, d) {
                return e = new Fd(e,t,n,o,s,l,u,d),
                t = 1,
                !0 === a && (t |= 24),
                a = _l(3, null, null, t),
                e.current = a,
                a.stateNode = e,
                (t = ji()).refCount++,
                e.pooledCache = t,
                t.refCount++,
                a.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: t
                },
                Ms(a),
                e
            }
            function Id(e) {
                return e ? e = Rr : Rr
            }
            function jd(e, t, n, r, i, a) {
                i = Id(i),
                null === r.context ? r.context = i : r.pendingContext = i,
                (r = Ls(t)).payload = {
                    element: n
                },
                null !== (a = void 0 === a ? null : a) && (r.callback = a),
                null !== (n = Rs(e, r, t)) && (Ru(n, 0, t),
                Ns(n, e, t))
            }
            function Bd(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }
            function Ud(e, t) {
                Bd(e, t),
                (e = e.alternate) && Bd(e, t)
            }
            function $d(e) {
                if (13 === e.tag) {
                    var t = Mr(e, 67108864);
                    null !== t && Ru(t, 0, 67108864),
                    Ud(e, 67108864)
                }
            }
            var Wd = !0;
            function Hd(e, t, n, r) {
                var i = D.T;
                D.T = null;
                var a = U.p;
                try {
                    U.p = 2,
                    Qd(e, t, n, r)
                } finally {
                    U.p = a,
                    D.T = i
                }
            }
            function qd(e, t, n, r) {
                var i = D.T;
                D.T = null;
                var a = U.p;
                try {
                    U.p = 8,
                    Qd(e, t, n, r)
                } finally {
                    U.p = a,
                    D.T = i
                }
            }
            function Qd(e, t, n, r) {
                if (Wd) {
                    var i = Yd(r);
                    if (null === i)
                        Oc(e, t, r, Kd, n),
                        sf(e, r);
                    else if (function(e, t, n, r, i) {
                        switch (t) {
                        case "focusin":
                            return Jd = lf(Jd, e, t, n, r, i),
                            !0;
                        case "dragenter":
                            return ef = lf(ef, e, t, n, r, i),
                            !0;
                        case "mouseover":
                            return tf = lf(tf, e, t, n, r, i),
                            !0;
                        case "pointerover":
                            var a = i.pointerId;
                            return nf.set(a, lf(nf.get(a) || null, e, t, n, r, i)),
                            !0;
                        case "gotpointercapture":
                            return a = i.pointerId,
                            rf.set(a, lf(rf.get(a) || null, e, t, n, r, i)),
                            !0
                        }
                        return !1
                    }(i, e, t, n, r))
                        r.stopPropagation();
                    else if (sf(e, r),
                    4 & t && -1 < of.indexOf(e)) {
                        for (; null !== i; ) {
                            var a = Ye(i);
                            if (null !== a)
                                switch (a.tag) {
                                case 3:
                                    if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                                        var o = Ee(a.pendingLanes);
                                        if (0 !== o) {
                                            var s = a;
                                            for (s.pendingLanes |= 2,
                                            s.entangledLanes |= 2; o; ) {
                                                var l = 1 << 31 - we(o);
                                                s.entanglements[1] |= l,
                                                o &= ~l
                                            }
                                            mc(a),
                                            0 === (6 & eu) && (wu = le() + 500,
                                            gc(0, !1))
                                        }
                                    }
                                    break;
                                case 13:
                                    null !== (s = Mr(a, 2)) && Ru(s, 0, 2),
                                    Vu(),
                                    Ud(a, 2)
                                }
                            if (null === (a = Yd(r)) && Oc(e, t, r, Kd, n),
                            a === i)
                                break;
                            i = a
                        }
                        null !== i && r.stopPropagation()
                    } else
                        Oc(e, t, r, null, n)
                }
            }
            function Yd(e) {
                return Xd(e = Lt(e))
            }
            var Kd = null;
            function Xd(e) {
                if (Kd = null,
                null !== (e = Qe(e))) {
                    var t = F(e);
                    if (null === t)
                        e = null;
                    else {
                        var n = t.tag;
                        if (13 === n) {
                            if (null !== (e = V(t)))
                                return e;
                            e = null
                        } else if (3 === n) {
                            if (t.stateNode.current.memoizedState.isDehydrated)
                                return 3 === t.tag ? t.stateNode.containerInfo : null;
                            e = null
                        } else
                            t !== e && (e = null)
                    }
                }
                return Kd = e,
                null
            }
            function Gd(e) {
                switch (e) {
                case "beforetoggle":
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "toggle":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 2;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 8;
                case "message":
                    switch (ue()) {
                    case ce:
                        return 2;
                    case de:
                        return 8;
                    case fe:
                    case he:
                        return 32;
                    case pe:
                        return 268435456;
                    default:
                        return 32
                    }
                default:
                    return 32
                }
            }
            var Zd = !1
              , Jd = null
              , ef = null
              , tf = null
              , nf = new Map
              , rf = new Map
              , af = []
              , of = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
            function sf(e, t) {
                switch (e) {
                case "focusin":
                case "focusout":
                    Jd = null;
                    break;
                case "dragenter":
                case "dragleave":
                    ef = null;
                    break;
                case "mouseover":
                case "mouseout":
                    tf = null;
                    break;
                case "pointerover":
                case "pointerout":
                    nf.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    rf.delete(t.pointerId)
                }
            }
            function lf(e, t, n, r, i, a) {
                return null === e || e.nativeEvent !== a ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: a,
                    targetContainers: [i]
                },
                null !== t && (null !== (t = Ye(t)) && $d(t)),
                e) : (e.eventSystemFlags |= r,
                t = e.targetContainers,
                null !== i && -1 === t.indexOf(i) && t.push(i),
                e)
            }
            function uf(e) {
                var t = Qe(e.target);
                if (null !== t) {
                    var n = F(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = V(n)))
                                return e.blockedOn = t,
                                void function(e, t) {
                                    var n = U.p;
                                    try {
                                        return U.p = e,
                                        t()
                                    } finally {
                                        U.p = n
                                    }
                                }(e.priority, (function() {
                                    if (13 === n.tag) {
                                        var e = Du()
                                          , t = Mr(n, e);
                                        null !== t && Ru(t, 0, e),
                                        Ud(n, e)
                                    }
                                }
                                ))
                        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                            return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function cf(e) {
                if (null !== e.blockedOn)
                    return !1;
                for (var t = e.targetContainers; 0 < t.length; ) {
                    var n = Yd(e.nativeEvent);
                    if (null !== n)
                        return null !== (t = Ye(n)) && $d(t),
                        e.blockedOn = n,
                        !1;
                    var r = new (n = e.nativeEvent).constructor(n.type,n);
                    Dt = r,
                    n.target.dispatchEvent(r),
                    Dt = null,
                    t.shift()
                }
                return !0
            }
            function df(e, t, n) {
                cf(e) && n.delete(t)
            }
            function ff() {
                Zd = !1,
                null !== Jd && cf(Jd) && (Jd = null),
                null !== ef && cf(ef) && (ef = null),
                null !== tf && cf(tf) && (tf = null),
                nf.forEach(df),
                rf.forEach(df)
            }
            function hf(e, t) {
                e.blockedOn === t && (e.blockedOn = null,
                Zd || (Zd = !0,
                r.unstable_scheduleCallback(r.unstable_NormalPriority, ff)))
            }
            var pf = null;
            function mf(e) {
                pf !== e && (pf = e,
                r.unstable_scheduleCallback(r.unstable_NormalPriority, (function() {
                    pf === e && (pf = null);
                    for (var t = 0; t < e.length; t += 3) {
                        var n = e[t]
                          , r = e[t + 1]
                          , i = e[t + 2];
                        if ("function" !== typeof r) {
                            if (null === Xd(r || n))
                                continue;
                            break
                        }
                        var a = Ye(n);
                        null !== a && (e.splice(t, 3),
                        t -= 3,
                        co(a, {
                            pending: !0,
                            data: i,
                            method: n.method,
                            action: r
                        }, r, i))
                    }
                }
                )))
            }
            function gf(e) {
                function t(t) {
                    return hf(t, e)
                }
                null !== Jd && hf(Jd, e),
                null !== ef && hf(ef, e),
                null !== tf && hf(tf, e),
                nf.forEach(t),
                rf.forEach(t);
                for (var n = 0; n < af.length; n++) {
                    var r = af[n];
                    r.blockedOn === e && (r.blockedOn = null)
                }
                for (; 0 < af.length && null === (n = af[0]).blockedOn; )
                    uf(n),
                    null === n.blockedOn && af.shift();
                if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
                    for (r = 0; r < n.length; r += 3) {
                        var i = n[r]
                          , a = n[r + 1]
                          , o = i[Ie] || null;
                        if ("function" === typeof a)
                            o || mf(n);
                        else if (o) {
                            var s = null;
                            if (a && a.hasAttribute("formAction")) {
                                if (i = a,
                                o = a[Ie] || null)
                                    s = o.formAction;
                                else if (null !== Xd(i))
                                    continue
                            } else
                                s = o.action;
                            "function" === typeof s ? n[r + 1] = s : (n.splice(r, 3),
                            r -= 3),
                            mf(n)
                        }
                    }
            }
            function vf(e) {
                this._internalRoot = e
            }
            function yf(e) {
                this._internalRoot = e
            }
            yf.prototype.render = vf.prototype.render = function(e) {
                var t = this._internalRoot;
                if (null === t)
                    throw Error(o(409));
                jd(t.current, Du(), e, t, null, null)
            }
            ,
            yf.prototype.unmount = vf.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    0 === e.tag && tc(),
                    jd(e.current, 2, null, e, null, null),
                    Vu(),
                    t[je] = null
                }
            }
            ,
            yf.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var t = ze();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: t
                    };
                    for (var n = 0; n < af.length && 0 !== t && t < af[n].priority; n++)
                        ;
                    af.splice(n, 0, e),
                    0 === n && uf(e)
                }
            }
            ;
            var bf = i.version;
            if ("19.0.0" !== bf)
                throw Error(o(527, bf, "19.0.0"));
            U.findDOMNode = function(e) {
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render)
                        throw Error(o(188));
                    throw e = Object.keys(e).join(","),
                    Error(o(268, e))
                }
                return e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = F(e)))
                            throw Error(o(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ; ) {
                        var i = n.return;
                        if (null === i)
                            break;
                        var a = i.alternate;
                        if (null === a) {
                            if (null !== (r = i.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (i.child === a.child) {
                            for (a = i.child; a; ) {
                                if (a === n)
                                    return I(i),
                                    e;
                                if (a === r)
                                    return I(i),
                                    t;
                                a = a.sibling
                            }
                            throw Error(o(188))
                        }
                        if (n.return !== r.return)
                            n = i,
                            r = a;
                        else {
                            for (var s = !1, l = i.child; l; ) {
                                if (l === n) {
                                    s = !0,
                                    n = i,
                                    r = a;
                                    break
                                }
                                if (l === r) {
                                    s = !0,
                                    r = i,
                                    n = a;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!s) {
                                for (l = a.child; l; ) {
                                    if (l === n) {
                                        s = !0,
                                        n = a,
                                        r = i;
                                        break
                                    }
                                    if (l === r) {
                                        s = !0,
                                        r = a,
                                        n = i;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!s)
                                    throw Error(o(189))
                            }
                        }
                        if (n.alternate !== r)
                            throw Error(o(190))
                    }
                    if (3 !== n.tag)
                        throw Error(o(188));
                    return n.stateNode.current === n ? e : t
                }(t),
                e = null === (e = null !== e ? j(e) : null) ? null : e.stateNode
            }
            ;
            var wf = {
                bundleType: 0,
                version: "19.0.0",
                rendererPackageName: "react-dom",
                currentDispatcherRef: D,
                findFiberByHostInstance: Qe,
                reconcilerVersion: "19.0.0"
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var Sf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!Sf.isDisabled && Sf.supportsFiber)
                    try {
                        ve = Sf.inject(wf),
                        ye = Sf
                    } catch (xf) {}
            }
            t.createRoot = function(e, t) {
                if (!s(e))
                    throw Error(o(299));
                var n = !1
                  , r = ""
                  , i = _o
                  , a = zo
                  , l = Fo;
                return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onUncaughtError && (i = t.onUncaughtError),
                void 0 !== t.onCaughtError && (a = t.onCaughtError),
                void 0 !== t.onRecoverableError && (l = t.onRecoverableError),
                void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks),
                t = Vd(e, 1, !1, null, 0, n, r, i, a, l, 0, null),
                e[je] = t.current,
                Rc(8 === e.nodeType ? e.parentNode : e),
                new vf(t)
            }
            ,
            t.hydrateRoot = function(e, t, n) {
                if (!s(e))
                    throw Error(o(299));
                var r = !1
                  , i = ""
                  , a = _o
                  , l = zo
                  , u = Fo
                  , c = null;
                return null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (a = n.onUncaughtError),
                void 0 !== n.onCaughtError && (l = n.onCaughtError),
                void 0 !== n.onRecoverableError && (u = n.onRecoverableError),
                void 0 !== n.unstable_transitionCallbacks && n.unstable_transitionCallbacks,
                void 0 !== n.formState && (c = n.formState)),
                (t = Vd(e, 1, !0, t, 0, r, i, a, l, u, 0, c)).context = Id(null),
                n = t.current,
                (i = Ls(r = Du())).callback = null,
                Rs(n, i, r),
                t.current.lanes = r,
                Re(t, r),
                mc(t),
                e[je] = t.current,
                Rc(e),
                new yf(t)
            }
            ,
            t.version = "19.0.0"
        }
        ,
        672: (e, t, n) => {
            var r = n(43);
            function i(e) {
                var t = "https://react.dev/errors/" + e;
                if (1 < arguments.length) {
                    t += "?args[]=" + encodeURIComponent(arguments[1]);
                    for (var n = 2; n < arguments.length; n++)
                        t += "&args[]=" + encodeURIComponent(arguments[n])
                }
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            function a() {}
            var o = {
                d: {
                    f: a,
                    r: function() {
                        throw Error(i(522))
                    },
                    D: a,
                    C: a,
                    L: a,
                    m: a,
                    X: a,
                    S: a,
                    M: a
                },
                p: 0,
                findDOMNode: null
            }
              , s = Symbol.for("react.portal");
            var l = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
            function u(e, t) {
                return "font" === e ? "" : "string" === typeof t ? "use-credentials" === t ? t : "" : void 0
            }
            t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
            t.createPortal = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
                    throw Error(i(299));
                return function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: s,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }(e, t, null, n)
            }
            ,
            t.flushSync = function(e) {
                var t = l.T
                  , n = o.p;
                try {
                    if (l.T = null,
                    o.p = 2,
                    e)
                        return e()
                } finally {
                    l.T = t,
                    o.p = n,
                    o.d.f()
                }
            }
            ,
            t.preconnect = function(e, t) {
                "string" === typeof e && (t ? t = "string" === typeof (t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : t = null,
                o.d.C(e, t))
            }
            ,
            t.prefetchDNS = function(e) {
                "string" === typeof e && o.d.D(e)
            }
            ,
            t.preinit = function(e, t) {
                if ("string" === typeof e && t && "string" === typeof t.as) {
                    var n = t.as
                      , r = u(n, t.crossOrigin)
                      , i = "string" === typeof t.integrity ? t.integrity : void 0
                      , a = "string" === typeof t.fetchPriority ? t.fetchPriority : void 0;
                    "style" === n ? o.d.S(e, "string" === typeof t.precedence ? t.precedence : void 0, {
                        crossOrigin: r,
                        integrity: i,
                        fetchPriority: a
                    }) : "script" === n && o.d.X(e, {
                        crossOrigin: r,
                        integrity: i,
                        fetchPriority: a,
                        nonce: "string" === typeof t.nonce ? t.nonce : void 0
                    })
                }
            }
            ,
            t.preinitModule = function(e, t) {
                if ("string" === typeof e)
                    if ("object" === typeof t && null !== t) {
                        if (null == t.as || "script" === t.as) {
                            var n = u(t.as, t.crossOrigin);
                            o.d.M(e, {
                                crossOrigin: n,
                                integrity: "string" === typeof t.integrity ? t.integrity : void 0,
                                nonce: "string" === typeof t.nonce ? t.nonce : void 0
                            })
                        }
                    } else
                        null == t && o.d.M(e)
            }
            ,
            t.preload = function(e, t) {
                if ("string" === typeof e && "object" === typeof t && null !== t && "string" === typeof t.as) {
                    var n = t.as
                      , r = u(n, t.crossOrigin);
                    o.d.L(e, n, {
                        crossOrigin: r,
                        integrity: "string" === typeof t.integrity ? t.integrity : void 0,
                        nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                        type: "string" === typeof t.type ? t.type : void 0,
                        fetchPriority: "string" === typeof t.fetchPriority ? t.fetchPriority : void 0,
                        referrerPolicy: "string" === typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                        imageSrcSet: "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                        imageSizes: "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                        media: "string" === typeof t.media ? t.media : void 0
                    })
                }
            }
            ,
            t.preloadModule = function(e, t) {
                if ("string" === typeof e)
                    if (t) {
                        var n = u(t.as, t.crossOrigin);
                        o.d.m(e, {
                            as: "string" === typeof t.as && "script" !== t.as ? t.as : void 0,
                            crossOrigin: n,
                            integrity: "string" === typeof t.integrity ? t.integrity : void 0
                        })
                    } else
                        o.d.m(e)
            }
            ,
            t.requestFormReset = function(e) {
                o.d.r(e)
            }
            ,
            t.unstable_batchedUpdates = function(e, t) {
                return e(t)
            }
            ,
            t.useFormState = function(e, t, n) {
                return l.H.useFormState(e, t, n)
            }
            ,
            t.useFormStatus = function() {
                return l.H.useHostTransitionStatus()
            }
            ,
            t.version = "19.0.0"
        }
        ,
        391: (e, t, n) => {
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
            }(),
            e.exports = n(4)
        }
        ,
        950: (e, t, n) => {
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
            }(),
            e.exports = n(672)
        }
        ,
        799: (e, t) => {
            var n = Symbol.for("react.transitional.element");
            function r(e, t, r) {
                var i = null;
                if (void 0 !== r && (i = "" + r),
                void 0 !== t.key && (i = "" + t.key),
                "key"in t)
                    for (var a in r = {},
                    t)
                        "key" !== a && (r[a] = t[a]);
                else
                    r = t;
                return t = r.ref,
                {
                    $$typeof: n,
                    type: e,
                    key: i,
                    ref: void 0 !== t ? t : null,
                    props: r
                }
            }
            Symbol.for("react.fragment"),
            t.jsx = r,
            t.jsxs = r
        }
        ,
        288: (e, t) => {
            var n = Symbol.for("react.transitional.element")
              , r = Symbol.for("react.portal")
              , i = Symbol.for("react.fragment")
              , a = Symbol.for("react.strict_mode")
              , o = Symbol.for("react.profiler")
              , s = Symbol.for("react.consumer")
              , l = Symbol.for("react.context")
              , u = Symbol.for("react.forward_ref")
              , c = Symbol.for("react.suspense")
              , d = Symbol.for("react.memo")
              , f = Symbol.for("react.lazy")
              , h = Symbol.iterator;
            var p = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , m = Object.assign
              , g = {};
            function v(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = g,
                this.updater = n || p
            }
            function y() {}
            function b(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = g,
                this.updater = n || p
            }
            v.prototype.isReactComponent = {},
            v.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e)
                    throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }
            ,
            v.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            y.prototype = v.prototype;
            var w = b.prototype = new y;
            w.constructor = b,
            m(w, v.prototype),
            w.isPureReactComponent = !0;
            var S = Array.isArray
              , k = {
                H: null,
                A: null,
                T: null,
                S: null
            }
              , x = Object.prototype.hasOwnProperty;
            function P(e, t, r, i, a, o) {
                return r = o.ref,
                {
                    $$typeof: n,
                    type: e,
                    key: t,
                    ref: void 0 !== r ? r : null,
                    props: o
                }
            }
            function E(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }
            var C = /\/+/g;
            function T(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }
                    ))
                }("" + e.key) : t.toString(36)
            }
            function A() {}
            function M(e, t, i, a, o) {
                var s = typeof e;
                "undefined" !== s && "boolean" !== s || (e = null);
                var l, u, c = !1;
                if (null === e)
                    c = !0;
                else
                    switch (s) {
                    case "bigint":
                    case "string":
                    case "number":
                        c = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case n:
                        case r:
                            c = !0;
                            break;
                        case f:
                            return M((c = e._init)(e._payload), t, i, a, o)
                        }
                    }
                if (c)
                    return o = o(e),
                    c = "" === a ? "." + T(e, 0) : a,
                    S(o) ? (i = "",
                    null != c && (i = c.replace(C, "$&/") + "/"),
                    M(o, t, i, "", (function(e) {
                        return e
                    }
                    ))) : null != o && (E(o) && (l = o,
                    u = i + (null == o.key || e && e.key === o.key ? "" : ("" + o.key).replace(C, "$&/") + "/") + c,
                    o = P(l.type, u, void 0, 0, 0, l.props)),
                    t.push(o)),
                    1;
                c = 0;
                var d, p = "" === a ? "." : a + ":";
                if (S(e))
                    for (var m = 0; m < e.length; m++)
                        c += M(a = e[m], t, i, s = p + T(a, m), o);
                else if ("function" === typeof (m = null === (d = e) || "object" !== typeof d ? null : "function" === typeof (d = h && d[h] || d["@@iterator"]) ? d : null))
                    for (e = m.call(e),
                    m = 0; !(a = e.next()).done; )
                        c += M(a = a.value, t, i, s = p + T(a, m++), o);
                else if ("object" === s) {
                    if ("function" === typeof e.then)
                        return M(function(e) {
                            switch (e.status) {
                            case "fulfilled":
                                return e.value;
                            case "rejected":
                                throw e.reason;
                            default:
                                switch ("string" === typeof e.status ? e.then(A, A) : (e.status = "pending",
                                e.then((function(t) {
                                    "pending" === e.status && (e.status = "fulfilled",
                                    e.value = t)
                                }
                                ), (function(t) {
                                    "pending" === e.status && (e.status = "rejected",
                                    e.reason = t)
                                }
                                ))),
                                e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason
                                }
                            }
                            throw e
                        }(e), t, i, a, o);
                    throw t = String(e),
                    Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
                }
                return c
            }
            function D(e, t, n) {
                if (null == e)
                    return e;
                var r = []
                  , i = 0;
                return M(e, r, "", "", (function(e) {
                    return t.call(n, e, i++)
                }
                )),
                r
            }
            function L(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1,
                        e._result = t)
                    }
                    ), (function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2,
                        e._result = t)
                    }
                    )),
                    -1 === e._status && (e._status = 0,
                    e._result = t)
                }
                if (1 === e._status)
                    return e._result.default;
                throw e._result
            }
            var R = "function" === typeof reportError ? reportError : function(e) {
                if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                    var t = new window.ErrorEvent("error",{
                        bubbles: !0,
                        cancelable: !0,
                        message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e),
                        error: e
                    });
                    if (!window.dispatchEvent(t))
                        return
                } else if ("object" === typeof process && "function" === typeof process.emit)
                    return void process.emit("uncaughtException", e);
                console.error(e)
            }
            ;
            function N() {}
            t.Children = {
                map: D,
                forEach: function(e, t, n) {
                    D(e, (function() {
                        t.apply(this, arguments)
                    }
                    ), n)
                },
                count: function(e) {
                    var t = 0;
                    return D(e, (function() {
                        t++
                    }
                    )),
                    t
                },
                toArray: function(e) {
                    return D(e, (function(e) {
                        return e
                    }
                    )) || []
                },
                only: function(e) {
                    if (!E(e))
                        throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            },
            t.Component = v,
            t.Fragment = i,
            t.Profiler = o,
            t.PureComponent = b,
            t.StrictMode = a,
            t.Suspense = c,
            t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k,
            t.act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }
            ,
            t.cache = function(e) {
                return function() {
                    return e.apply(null, arguments)
                }
            }
            ,
            t.cloneElement = function(e, t, n) {
                if (null === e || void 0 === e)
                    throw Error("The argument must be a React element, but you passed " + e + ".");
                var r = m({}, e.props)
                  , i = e.key;
                if (null != t)
                    for (a in void 0 !== t.ref && void 0,
                    void 0 !== t.key && (i = "" + t.key),
                    t)
                        !x.call(t, a) || "key" === a || "__self" === a || "__source" === a || "ref" === a && void 0 === t.ref || (r[a] = t[a]);
                var a = arguments.length - 2;
                if (1 === a)
                    r.children = n;
                else if (1 < a) {
                    for (var o = Array(a), s = 0; s < a; s++)
                        o[s] = arguments[s + 2];
                    r.children = o
                }
                return P(e.type, i, void 0, 0, 0, r)
            }
            ,
            t.createContext = function(e) {
                return (e = {
                    $$typeof: l,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = e,
                e.Consumer = {
                    $$typeof: s,
                    _context: e
                },
                e
            }
            ,
            t.createElement = function(e, t, n) {
                var r, i = {}, a = null;
                if (null != t)
                    for (r in void 0 !== t.key && (a = "" + t.key),
                    t)
                        x.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (i[r] = t[r]);
                var o = arguments.length - 2;
                if (1 === o)
                    i.children = n;
                else if (1 < o) {
                    for (var s = Array(o), l = 0; l < o; l++)
                        s[l] = arguments[l + 2];
                    i.children = s
                }
                if (e && e.defaultProps)
                    for (r in o = e.defaultProps)
                        void 0 === i[r] && (i[r] = o[r]);
                return P(e, a, void 0, 0, 0, i)
            }
            ,
            t.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            t.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }
            ,
            t.isValidElement = E,
            t.lazy = function(e) {
                return {
                    $$typeof: f,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: L
                }
            }
            ,
            t.memo = function(e, t) {
                return {
                    $$typeof: d,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }
            ,
            t.startTransition = function(e) {
                var t = k.T
                  , n = {};
                k.T = n;
                try {
                    var r = e()
                      , i = k.S;
                    null !== i && i(n, r),
                    "object" === typeof r && null !== r && "function" === typeof r.then && r.then(N, R)
                } catch (a) {
                    R(a)
                } finally {
                    k.T = t
                }
            }
            ,
            t.unstable_useCacheRefresh = function() {
                return k.H.useCacheRefresh()
            }
            ,
            t.use = function(e) {
                return k.H.use(e)
            }
            ,
            t.useActionState = function(e, t, n) {
                return k.H.useActionState(e, t, n)
            }
            ,
            t.useCallback = function(e, t) {
                return k.H.useCallback(e, t)
            }
            ,
            t.useContext = function(e) {
                return k.H.useContext(e)
            }
            ,
            t.useDebugValue = function() {}
            ,
            t.useDeferredValue = function(e, t) {
                return k.H.useDeferredValue(e, t)
            }
            ,
            t.useEffect = function(e, t) {
                return k.H.useEffect(e, t)
            }
            ,
            t.useId = function() {
                return k.H.useId()
            }
            ,
            t.useImperativeHandle = function(e, t, n) {
                return k.H.useImperativeHandle(e, t, n)
            }
            ,
            t.useInsertionEffect = function(e, t) {
                return k.H.useInsertionEffect(e, t)
            }
            ,
            t.useLayoutEffect = function(e, t) {
                return k.H.useLayoutEffect(e, t)
            }
            ,
            t.useMemo = function(e, t) {
                return k.H.useMemo(e, t)
            }
            ,
            t.useOptimistic = function(e, t) {
                return k.H.useOptimistic(e, t)
            }
            ,
            t.useReducer = function(e, t, n) {
                return k.H.useReducer(e, t, n)
            }
            ,
            t.useRef = function(e) {
                return k.H.useRef(e)
            }
            ,
            t.useState = function(e) {
                return k.H.useState(e)
            }
            ,
            t.useSyncExternalStore = function(e, t, n) {
                return k.H.useSyncExternalStore(e, t, n)
            }
            ,
            t.useTransition = function() {
                return k.H.useTransition()
            }
            ,
            t.version = "19.0.0"
        }
        ,
        43: (e, t, n) => {
            e.exports = n(288)
        }
        ,
        579: (e, t, n) => {
            e.exports = n(799)
        }
        ,
        896: (e, t) => {
            function n(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n; ) {
                    var r = n - 1 >>> 1
                      , i = e[r];
                    if (!(0 < a(i, t)))
                        break e;
                    e[r] = t,
                    e[n] = i,
                    n = r
                }
            }
            function r(e) {
                return 0 === e.length ? null : e[0]
            }
            function i(e) {
                if (0 === e.length)
                    return null;
                var t = e[0]
                  , n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
                        var s = 2 * (r + 1) - 1
                          , l = e[s]
                          , u = s + 1
                          , c = e[u];
                        if (0 > a(l, n))
                            u < i && 0 > a(c, l) ? (e[r] = c,
                            e[u] = n,
                            r = u) : (e[r] = l,
                            e[s] = n,
                            r = s);
                        else {
                            if (!(u < i && 0 > a(c, n)))
                                break e;
                            e[r] = c,
                            e[u] = n,
                            r = u
                        }
                    }
                }
                return t
            }
            function a(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if (t.unstable_now = void 0,
            "object" === typeof performance && "function" === typeof performance.now) {
                var o = performance;
                t.unstable_now = function() {
                    return o.now()
                }
            } else {
                var s = Date
                  , l = s.now();
                t.unstable_now = function() {
                    return s.now() - l
                }
            }
            var u = []
              , c = []
              , d = 1
              , f = null
              , h = 3
              , p = !1
              , m = !1
              , g = !1
              , v = "function" === typeof setTimeout ? setTimeout : null
              , y = "function" === typeof clearTimeout ? clearTimeout : null
              , b = "undefined" !== typeof setImmediate ? setImmediate : null;
            function w(e) {
                for (var t = r(c); null !== t; ) {
                    if (null === t.callback)
                        i(c);
                    else {
                        if (!(t.startTime <= e))
                            break;
                        i(c),
                        t.sortIndex = t.expirationTime,
                        n(u, t)
                    }
                    t = r(c)
                }
            }
            function S(e) {
                if (g = !1,
                w(e),
                !m)
                    if (null !== r(u))
                        m = !0,
                        L();
                    else {
                        var t = r(c);
                        null !== t && R(S, t.startTime - e)
                    }
            }
            var k, x = !1, P = -1, E = 5, C = -1;
            function T() {
                return !(t.unstable_now() - C < E)
            }
            function A() {
                if (x) {
                    var e = t.unstable_now();
                    C = e;
                    var n = !0;
                    try {
                        e: {
                            m = !1,
                            g && (g = !1,
                            y(P),
                            P = -1),
                            p = !0;
                            var a = h;
                            try {
                                t: {
                                    for (w(e),
                                    f = r(u); null !== f && !(f.expirationTime > e && T()); ) {
                                        var o = f.callback;
                                        if ("function" === typeof o) {
                                            f.callback = null,
                                            h = f.priorityLevel;
                                            var s = o(f.expirationTime <= e);
                                            if (e = t.unstable_now(),
                                            "function" === typeof s) {
                                                f.callback = s,
                                                w(e),
                                                n = !0;
                                                break t
                                            }
                                            f === r(u) && i(u),
                                            w(e)
                                        } else
                                            i(u);
                                        f = r(u)
                                    }
                                    if (null !== f)
                                        n = !0;
                                    else {
                                        var l = r(c);
                                        null !== l && R(S, l.startTime - e),
                                        n = !1
                                    }
                                }
                                break e
                            } finally {
                                f = null,
                                h = a,
                                p = !1
                            }
                            n = void 0
                        }
                    } finally {
                        n ? k() : x = !1
                    }
                }
            }
            if ("function" === typeof b)
                k = function() {
                    b(A)
                }
                ;
            else if ("undefined" !== typeof MessageChannel) {
                var M = new MessageChannel
                  , D = M.port2;
                M.port1.onmessage = A,
                k = function() {
                    D.postMessage(null)
                }
            } else
                k = function() {
                    v(A, 0)
                }
                ;
            function L() {
                x || (x = !0,
                k())
            }
            function R(e, n) {
                P = v((function() {
                    e(t.unstable_now())
                }
                ), n)
            }
            t.unstable_IdlePriority = 5,
            t.unstable_ImmediatePriority = 1,
            t.unstable_LowPriority = 4,
            t.unstable_NormalPriority = 3,
            t.unstable_Profiling = null,
            t.unstable_UserBlockingPriority = 2,
            t.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            t.unstable_continueExecution = function() {
                m || p || (m = !0,
                L())
            }
            ,
            t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1e3 / e) : 5
            }
            ,
            t.unstable_getCurrentPriorityLevel = function() {
                return h
            }
            ,
            t.unstable_getFirstCallbackNode = function() {
                return r(u)
            }
            ,
            t.unstable_next = function(e) {
                switch (h) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = h
                }
                var n = h;
                h = t;
                try {
                    return e()
                } finally {
                    h = n
                }
            }
            ,
            t.unstable_pauseExecution = function() {}
            ,
            t.unstable_requestPaint = function() {}
            ,
            t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var n = h;
                h = e;
                try {
                    return t()
                } finally {
                    h = n
                }
            }
            ,
            t.unstable_scheduleCallback = function(e, i, a) {
                var o = t.unstable_now();
                switch ("object" === typeof a && null !== a ? a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o : a = o,
                e) {
                case 1:
                    var s = -1;
                    break;
                case 2:
                    s = 250;
                    break;
                case 5:
                    s = 1073741823;
                    break;
                case 4:
                    s = 1e4;
                    break;
                default:
                    s = 5e3
                }
                return e = {
                    id: d++,
                    callback: i,
                    priorityLevel: e,
                    startTime: a,
                    expirationTime: s = a + s,
                    sortIndex: -1
                },
                a > o ? (e.sortIndex = a,
                n(c, e),
                null === r(u) && e === r(c) && (g ? (y(P),
                P = -1) : g = !0,
                R(S, a - o))) : (e.sortIndex = s,
                n(u, e),
                m || p || (m = !0,
                L())),
                e
            }
            ,
            t.unstable_shouldYield = T,
            t.unstable_wrapCallback = function(e) {
                var t = h;
                return function() {
                    var n = h;
                    h = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        h = n
                    }
                }
            }
        }
        ,
        853: (e, t, n) => {
            e.exports = n(896)
        }
        ,
        47: e => {
            var t = {
                linear: function(e, t, n, r) {
                    return (n - t) * e / r + t
                },
                easeInQuad: function(e, t, n, r) {
                    return (n - t) * (e /= r) * e + t
                },
                easeOutQuad: function(e, t, n, r) {
                    return -(n - t) * (e /= r) * (e - 2) + t
                },
                easeInOutQuad: function(e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
                },
                easeInCubic: function(e, t, n, r) {
                    return (n - t) * (e /= r) * e * e + t
                },
                easeOutCubic: function(e, t, n, r) {
                    return (n - t) * ((e = e / r - 1) * e * e + 1) + t
                },
                easeInOutCubic: function(e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t
                },
                easeInQuart: function(e, t, n, r) {
                    return (n - t) * (e /= r) * e * e * e + t
                },
                easeOutQuart: function(e, t, n, r) {
                    return -(n - t) * ((e = e / r - 1) * e * e * e - 1) + t
                },
                easeInOutQuart: function(e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + t : -i / 2 * ((e -= 2) * e * e * e - 2) + t
                },
                easeInQuint: function(e, t, n, r) {
                    return (n - t) * (e /= r) * e * e * e * e + t
                },
                easeOutQuint: function(e, t, n, r) {
                    return (n - t) * ((e = e / r - 1) * e * e * e * e + 1) + t
                },
                easeInOutQuint: function(e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + t : i / 2 * ((e -= 2) * e * e * e * e + 2) + t
                },
                easeInSine: function(e, t, n, r) {
                    var i = n - t;
                    return -i * Math.cos(e / r * (Math.PI / 2)) + i + t
                },
                easeOutSine: function(e, t, n, r) {
                    return (n - t) * Math.sin(e / r * (Math.PI / 2)) + t
                },
                easeInOutSine: function(e, t, n, r) {
                    return -(n - t) / 2 * (Math.cos(Math.PI * e / r) - 1) + t
                },
                easeInExpo: function(e, t, n, r) {
                    return 0 == e ? t : (n - t) * Math.pow(2, 10 * (e / r - 1)) + t
                },
                easeOutExpo: function(e, t, n, r) {
                    var i = n - t;
                    return e == r ? t + i : i * (1 - Math.pow(2, -10 * e / r)) + t
                },
                easeInOutExpo: function(e, t, n, r) {
                    var i = n - t;
                    return 0 === e ? t : e === r ? t + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + t : i / 2 * (2 - Math.pow(2, -10 * --e)) + t
                },
                easeInCirc: function(e, t, n, r) {
                    return -(n - t) * (Math.sqrt(1 - (e /= r) * e) - 1) + t
                },
                easeOutCirc: function(e, t, n, r) {
                    return (n - t) * Math.sqrt(1 - (e = e / r - 1) * e) + t
                },
                easeInOutCirc: function(e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + t : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                },
                easeInElastic: function(e, t, n, r) {
                    var i, a, o, s = n - t;
                    return o = 1.70158,
                    0 === e ? t : 1 === (e /= r) ? t + s : ((a = 0) || (a = .3 * r),
                    (i = s) < Math.abs(s) ? (i = s,
                    o = a / 4) : o = a / (2 * Math.PI) * Math.asin(s / i),
                    -i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / a) + t)
                },
                easeOutElastic: function(e, t, n, r) {
                    var i, a, o, s = n - t;
                    return o = 1.70158,
                    0 === e ? t : 1 === (e /= r) ? t + s : ((a = 0) || (a = .3 * r),
                    (i = s) < Math.abs(s) ? (i = s,
                    o = a / 4) : o = a / (2 * Math.PI) * Math.asin(s / i),
                    i * Math.pow(2, -10 * e) * Math.sin((e * r - o) * (2 * Math.PI) / a) + s + t)
                },
                easeInOutElastic: function(e, t, n, r) {
                    var i, a, o, s = n - t;
                    return o = 1.70158,
                    0 === e ? t : 2 === (e /= r / 2) ? t + s : ((a = 0) || (a = r * (.3 * 1.5)),
                    (i = s) < Math.abs(s) ? (i = s,
                    o = a / 4) : o = a / (2 * Math.PI) * Math.asin(s / i),
                    e < 1 ? i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / a) * -.5 + t : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / a) * .5 + s + t)
                },
                easeInBack: function(e, t, n, r, i) {
                    return void 0 === i && (i = 1.70158),
                    (n - t) * (e /= r) * e * ((i + 1) * e - i) + t
                },
                easeOutBack: function(e, t, n, r, i) {
                    return void 0 === i && (i = 1.70158),
                    (n - t) * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) + t
                },
                easeInOutBack: function(e, t, n, r, i) {
                    var a = n - t;
                    return void 0 === i && (i = 1.70158),
                    (e /= r / 2) < 1 ? a / 2 * (e * e * ((1 + (i *= 1.525)) * e - i)) + t : a / 2 * ((e -= 2) * e * ((1 + (i *= 1.525)) * e + i) + 2) + t
                },
                easeInBounce: function(e, n, r, i) {
                    var a = r - n;
                    return a - t.easeOutBounce(i - e, 0, a, i) + n
                },
                easeOutBounce: function(e, t, n, r) {
                    var i = n - t;
                    return (e /= r) < 1 / 2.75 ? i * (7.5625 * e * e) + t : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
                },
                easeInOutBounce: function(e, n, r, i) {
                    var a = r - n;
                    return e < i / 2 ? .5 * t.easeInBounce(2 * e, 0, a, i) + n : .5 * t.easeOutBounce(2 * e - i, 0, a, i) + .5 * a + n
                }
            };
            e.exports = t
        }
    }
      , t = {};
    function n(r) {
        var i = t[r];
        if (void 0 !== i)
            return i.exports;
        var a = t[r] = {
            exports: {}
        };
        return e[r](a, a.exports, n),
        a.exports
    }
    var r = n(43)
      , i = n(391);
    function a(e) {
        if ("undefined" === typeof Proxy)
            return e;
        const t = new Map;
        return new Proxy((function() {
            return e(...arguments)
        }
        ),{
            get: (n, r) => "create" === r ? e : (t.has(r) || t.set(r, e(r)),
            t.get(r))
        })
    }
    function o(e) {
        return null !== e && "object" === typeof e && "function" === typeof e.start
    }
    function s(e) {
        const t = [{}, {}];
        return null === e || void 0 === e || e.values.forEach(( (e, n) => {
            t[0][n] = e.get(),
            t[1][n] = e.getVelocity()
        }
        )),
        t
    }
    function l(e, t, n, r) {
        if ("function" === typeof t) {
            const [i,a] = s(r);
            t = t(void 0 !== n ? n : e.custom, i, a)
        }
        if ("string" === typeof t && (t = e.variants && e.variants[t]),
        "function" === typeof t) {
            const [i,a] = s(r);
            t = t(void 0 !== n ? n : e.custom, i, a)
        }
        return t
    }
    function u(e, t, n) {
        const r = e.getProps();
        return l(r, t, void 0 !== n ? n : r.custom, e)
    }
    function c(e) {
        let t;
        return () => (void 0 === t && (t = e()),
        t)
    }
    const d = c(( () => void 0 !== window.ScrollTimeline));
    class f {
        constructor(e) {
            this.stop = () => this.runAll("stop"),
            this.animations = e.filter(Boolean)
        }
        get finished() {
            return Promise.all(this.animations.map((e => "finished"in e ? e.finished : e)))
        }
        getAll(e) {
            return this.animations[0][e]
        }
        setAll(e, t) {
            for (let n = 0; n < this.animations.length; n++)
                this.animations[n][e] = t
        }
        attachTimeline(e, t) {
            const n = this.animations.map((n => d() && n.attachTimeline ? n.attachTimeline(e) : "function" === typeof t ? t(n) : void 0));
            return () => {
                n.forEach(( (e, t) => {
                    e && e(),
                    this.animations[t].stop()
                }
                ))
            }
        }
        get time() {
            return this.getAll("time")
        }
        set time(e) {
            this.setAll("time", e)
        }
        get speed() {
            return this.getAll("speed")
        }
        set speed(e) {
            this.setAll("speed", e)
        }
        get startTime() {
            return this.getAll("startTime")
        }
        get duration() {
            let e = 0;
            for (let t = 0; t < this.animations.length; t++)
                e = Math.max(e, this.animations[t].duration);
            return e
        }
        runAll(e) {
            this.animations.forEach((t => t[e]()))
        }
        flatten() {
            this.runAll("flatten")
        }
        play() {
            this.runAll("play")
        }
        pause() {
            this.runAll("pause")
        }
        cancel() {
            this.runAll("cancel")
        }
        complete() {
            this.runAll("complete")
        }
    }
    class h extends f {
        then(e, t) {
            return Promise.all(this.animations).then(e).catch(t)
        }
    }
    function p(e, t) {
        return e ? e[t] || e.default || e : void 0
    }
    const m = 2e4;
    function g(e) {
        let t = 0;
        let n = e.next(t);
        for (; !n.done && t < m; )
            t += 50,
            n = e.next(t);
        return t >= m ? 1 / 0 : t
    }
    function v(e) {
        return "function" === typeof e
    }
    function y(e, t) {
        e.timeline = t,
        e.onfinish = null
    }
    const b = e => Array.isArray(e) && "number" === typeof e[0]
      , w = {
        linearEasing: void 0
    };
    function S(e, t) {
        const n = c(e);
        return () => {
            var e;
            return null !== (e = w[t]) && void 0 !== e ? e : n()
        }
    }
    const k = S(( () => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch (e) {
            return !1
        }
        return !0
    }
    ), "linearEasing")
      , x = (e, t, n) => {
        const r = t - e;
        return 0 === r ? 1 : (n - e) / r
    }
      , P = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10
          , r = "";
        const i = Math.max(Math.round(t / n), 2);
        for (let a = 0; a < i; a++)
            r += e(x(0, i - 1, a)) + ", ";
        return `linear(${r.substring(0, r.length - 2)})`
    };
    function E(e) {
        return Boolean("function" === typeof e && k() || !e || "string" === typeof e && (e in T || k()) || b(e) || Array.isArray(e) && e.every(E))
    }
    const C = e => {
        let[t,n,r,i] = e;
        return `cubic-bezier(${t}, ${n}, ${r}, ${i})`
    }
      , T = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: C([0, .65, .55, 1]),
        circOut: C([.55, 0, 1, .45]),
        backIn: C([.31, .01, .66, -.59]),
        backOut: C([.33, 1.53, .69, .99])
    };
    function A(e, t) {
        return e ? "function" === typeof e && k() ? P(e, t) : b(e) ? C(e) : Array.isArray(e) ? e.map((e => A(e, t) || T.easeOut)) : T[e] : void 0
    }
    const M = {
        x: !1,
        y: !1
    };
    function D() {
        return M.x || M.y
    }
    function L(e, t) {
        const n = function(e, t, n) {
            var r;
            if (e instanceof Element)
                return [e];
            if ("string" === typeof e) {
                let i = document;
                t && (i = t.current);
                const a = null !== (r = null === n || void 0 === n ? void 0 : n[e]) && void 0 !== r ? r : i.querySelectorAll(e);
                return a ? Array.from(a) : []
            }
            return Array.from(e)
        }(e)
          , r = new AbortController;
        return [n, {
            passive: !0,
            ...t,
            signal: r.signal
        }, () => r.abort()]
    }
    function R(e) {
        return !("touch" === e.pointerType || D())
    }
    const N = (e, t) => !!t && (e === t || N(e, t.parentElement))
      , O = e => "mouse" === e.pointerType ? "number" !== typeof e.button || e.button <= 0 : !1 !== e.isPrimary
      , _ = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
    const z = new WeakSet;
    function F(e) {
        return t => {
            "Enter" === t.key && e(t)
        }
    }
    function V(e, t) {
        e.dispatchEvent(new PointerEvent("pointer" + t,{
            isPrimary: !0,
            bubbles: !0
        }))
    }
    function I(e) {
        return O(e) && !D()
    }
    function j(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const [r,i,a] = L(e, n)
          , o = e => {
            const r = e.currentTarget;
            if (!I(e) || z.has(r))
                return;
            z.add(r);
            const a = t(r, e)
              , o = (e, t) => {
                window.removeEventListener("pointerup", s),
                window.removeEventListener("pointercancel", l),
                I(e) && z.has(r) && (z.delete(r),
                "function" === typeof a && a(e, {
                    success: t
                }))
            }
              , s = e => {
                o(e, n.useGlobalTarget || N(r, e.target))
            }
              , l = e => {
                o(e, !1)
            }
            ;
            window.addEventListener("pointerup", s, i),
            window.addEventListener("pointercancel", l, i)
        }
        ;
        return r.forEach((e => {
            (function(e) {
                return _.has(e.tagName) || -1 !== e.tabIndex
            }
            )(e) || null !== e.getAttribute("tabindex") || (e.tabIndex = 0);
            (n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i),
            e.addEventListener("focus", (e => ( (e, t) => {
                const n = e.currentTarget;
                if (!n)
                    return;
                const r = F(( () => {
                    if (z.has(n))
                        return;
                    V(n, "down");
                    const e = F(( () => {
                        V(n, "up")
                    }
                    ));
                    n.addEventListener("keyup", e, t),
                    n.addEventListener("blur", ( () => V(n, "cancel")), t)
                }
                ));
                n.addEventListener("keydown", r, t),
                n.addEventListener("blur", ( () => n.removeEventListener("keydown", r)), t)
            }
            )(e, i)), i)
        }
        )),
        a
    }
    const B = e => 1e3 * e
      , U = e => e / 1e3
      , $ = e => e;
    const W = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
      , H = new Set(W)
      , q = new Set(["width", "height", "top", "left", "right", "bottom", ...W])
      , Q = e => Array.isArray(e)
      , Y = !1
      , K = !1
      , X = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
      , G = {
        value: null,
        addProjectionMetrics: null
    };
    function Z(e, t) {
        let n = !1
          , r = !0;
        const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        }
          , a = () => n = !0
          , o = X.reduce(( (e, n) => (e[n] = function(e, t) {
            let n = new Set
              , r = new Set
              , i = !1
              , a = !1;
            const o = new WeakSet;
            let s = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , l = 0;
            function u(t) {
                o.has(t) && (c.schedule(t),
                e()),
                l++,
                t(s)
            }
            const c = {
                schedule: function(e) {
                    const t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && i ? n : r;
                    return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && o.add(e),
                    t.has(e) || t.add(e),
                    e
                },
                cancel: e => {
                    r.delete(e),
                    o.delete(e)
                }
                ,
                process: e => {
                    s = e,
                    i ? a = !0 : (i = !0,
                    [n,r] = [r, n],
                    n.forEach(u),
                    t && G.value && G.value.frameloop[t].push(l),
                    l = 0,
                    n.clear(),
                    i = !1,
                    a && (a = !1,
                    c.process(e)))
                }
            };
            return c
        }(a, t ? n : void 0),
        e)), {})
          , {read: s, resolveKeyframes: l, update: u, preRender: c, render: d, postRender: f} = o
          , h = () => {
            const a = K ? i.timestamp : performance.now();
            n = !1,
            K || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, 40), 1)),
            i.timestamp = a,
            i.isProcessing = !0,
            s.process(i),
            l.process(i),
            u.process(i),
            c.process(i),
            d.process(i),
            f.process(i),
            i.isProcessing = !1,
            n && t && (r = !1,
            e(h))
        }
          , p = X.reduce(( (t, a) => {
            const s = o[a];
            return t[a] = function(t) {
                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return n || (n = !0,
                r = !0,
                i.isProcessing || e(h)),
                s.schedule(t, a, o)
            }
            ,
            t
        }
        ), {});
        return {
            schedule: p,
            cancel: e => {
                for (let t = 0; t < X.length; t++)
                    o[X[t]].cancel(e)
            }
            ,
            state: i,
            steps: o
        }
    }
    const {schedule: J, cancel: ee, state: te, steps: ne} = Z("undefined" !== typeof requestAnimationFrame ? requestAnimationFrame : $, !0);
    let re;
    function ie() {
        re = void 0
    }
    const ae = {
        now: () => (void 0 === re && ae.set(te.isProcessing || K ? te.timestamp : performance.now()),
        re),
        set: e => {
            re = e,
            queueMicrotask(ie)
        }
    };
    function oe(e, t) {
        -1 === e.indexOf(t) && e.push(t)
    }
    function se(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }
    class le {
        constructor() {
            this.subscriptions = []
        }
        add(e) {
            return oe(this.subscriptions, e),
            () => se(this.subscriptions, e)
        }
        notify(e, t, n) {
            const r = this.subscriptions.length;
            if (r)
                if (1 === r)
                    this.subscriptions[0](e, t, n);
                else
                    for (let i = 0; i < r; i++) {
                        const r = this.subscriptions[i];
                        r && r(e, t, n)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }
    function ue(e, t) {
        return t ? e * (1e3 / t) : 0
    }
    const ce = {
        current: void 0
    };
    class de {
        constructor(e) {
            var t = this;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.version = "12.4.1",
            this.canTrackVelocity = null,
            this.events = {},
            this.updateAndNotify = function(e) {
                let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                const r = ae.now();
                t.updatedAt !== r && t.setPrevFrameValue(),
                t.prev = t.current,
                t.setCurrent(e),
                t.current !== t.prev && t.events.change && t.events.change.notify(t.current),
                n && t.events.renderRequest && t.events.renderRequest.notify(t.current)
            }
            ,
            this.hasAnimated = !1,
            this.setCurrent(e),
            this.owner = n.owner
        }
        setCurrent(e) {
            var t;
            this.current = e,
            this.updatedAt = ae.now(),
            null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = (t = this.current,
            !isNaN(parseFloat(t))))
        }
        setPrevFrameValue() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.current;
            this.prevFrameValue = e,
            this.prevUpdatedAt = this.updatedAt
        }
        onChange(e) {
            return this.on("change", e)
        }
        on(e, t) {
            this.events[e] || (this.events[e] = new le);
            const n = this.events[e].add(t);
            return "change" === e ? () => {
                n(),
                J.read(( () => {
                    this.events.change.getSize() || this.stop()
                }
                ))
            }
            : n
        }
        clearListeners() {
            for (const e in this.events)
                this.events[e].clear()
        }
        attach(e, t) {
            this.passiveEffect = e,
            this.stopPassiveEffect = t
        }
        set(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
        }
        setWithVelocity(e, t, n) {
            this.set(t),
            this.prev = void 0,
            this.prevFrameValue = e,
            this.prevUpdatedAt = this.updatedAt - n
        }
        jump(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.updateAndNotify(e),
            this.prev = e,
            this.prevUpdatedAt = this.prevFrameValue = void 0,
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
        }
        get() {
            return ce.current && ce.current.push(this),
            this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            const e = ae.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30)
                return 0;
            const t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return ue(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
        }
        start(e) {
            return this.stop(),
            new Promise((t => {
                this.hasAnimated = !0,
                this.animation = e(t),
                this.events.animationStart && this.events.animationStart.notify()
            }
            )).then(( () => {
                this.events.animationComplete && this.events.animationComplete.notify(),
                this.clearAnimation()
            }
            ))
        }
        stop() {
            this.animation && (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
        }
    }
    function fe(e, t) {
        return new de(e,t)
    }
    function he(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, fe(n))
    }
    const pe = e => Boolean(e && e.getVelocity);
    function me(e, t) {
        const n = e.getValue("willChange");
        if (r = n,
        Boolean(pe(r) && r.add))
            return n.add(t);
        var r
    }
    const ge = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
      , ve = "data-" + ge("framerAppearId");
    function ye(e) {
        return e.props[ve]
    }
    const be = !1
      , we = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
    function Se(e, t, n, r) {
        if (e === t && n === r)
            return $;
        const i = t => function(e, t, n, r, i) {
            let a, o, s = 0;
            do {
                o = t + (n - t) / 2,
                a = we(o, r, i) - e,
                a > 0 ? n = o : t = o
            } while (Math.abs(a) > 1e-7 && ++s < 12);
            return o
        }(t, 0, 1, e, n);
        return e => 0 === e || 1 === e ? e : we(i(e), t, r)
    }
    const ke = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
      , xe = e => t => 1 - e(1 - t)
      , Pe = Se(.33, 1.53, .69, .99)
      , Ee = xe(Pe)
      , Ce = ke(Ee)
      , Te = e => (e *= 2) < 1 ? .5 * Ee(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
      , Ae = e => 1 - Math.sin(Math.acos(e))
      , Me = xe(Ae)
      , De = ke(Ae)
      , Le = e => /^0[^.\s]+$/u.test(e);
    const Re = (e, t, n) => n > t ? t : n < e ? e : n
      , Ne = {
        test: e => "number" === typeof e,
        parse: parseFloat,
        transform: e => e
    }
      , Oe = {
        ...Ne,
        transform: e => Re(0, 1, e)
    }
      , _e = {
        ...Ne,
        default: 1
    }
      , ze = e => Math.round(1e5 * e) / 1e5
      , Fe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    const Ve = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
      , Ie = (e, t) => n => Boolean("string" === typeof n && Ve.test(n) && n.startsWith(e) || t && !function(e) {
        return null == e
    }(n) && Object.prototype.hasOwnProperty.call(n, t))
      , je = (e, t, n) => r => {
        if ("string" !== typeof r)
            return r;
        const [i,a,o,s] = r.match(Fe);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(a),
            [n]: parseFloat(o),
            alpha: void 0 !== s ? parseFloat(s) : 1
        }
    }
      , Be = {
        ...Ne,
        transform: e => Math.round((e => Re(0, 255, e))(e))
    }
      , Ue = {
        test: Ie("rgb", "red"),
        parse: je("red", "green", "blue"),
        transform: e => {
            let {red: t, green: n, blue: r, alpha: i=1} = e;
            return "rgba(" + Be.transform(t) + ", " + Be.transform(n) + ", " + Be.transform(r) + ", " + ze(Oe.transform(i)) + ")"
        }
    };
    const $e = {
        test: Ie("#"),
        parse: function(e) {
            let t = ""
              , n = ""
              , r = ""
              , i = "";
            return e.length > 5 ? (t = e.substring(1, 3),
            n = e.substring(3, 5),
            r = e.substring(5, 7),
            i = e.substring(7, 9)) : (t = e.substring(1, 2),
            n = e.substring(2, 3),
            r = e.substring(3, 4),
            i = e.substring(4, 5),
            t += t,
            n += n,
            r += r,
            i += i),
            {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1
            }
        },
        transform: Ue.transform
    }
      , We = e => ({
        test: t => "string" === typeof t && t.endsWith(e) && 1 === t.split(" ").length,
        parse: parseFloat,
        transform: t => `${t}${e}`
    })
      , He = We("deg")
      , qe = We("%")
      , Qe = We("px")
      , Ye = We("vh")
      , Ke = We("vw")
      , Xe = {
        ...qe,
        parse: e => qe.parse(e) / 100,
        transform: e => qe.transform(100 * e)
    }
      , Ge = {
        test: Ie("hsl", "hue"),
        parse: je("hue", "saturation", "lightness"),
        transform: e => {
            let {hue: t, saturation: n, lightness: r, alpha: i=1} = e;
            return "hsla(" + Math.round(t) + ", " + qe.transform(ze(n)) + ", " + qe.transform(ze(r)) + ", " + ze(Oe.transform(i)) + ")"
        }
    }
      , Ze = {
        test: e => Ue.test(e) || $e.test(e) || Ge.test(e),
        parse: e => Ue.test(e) ? Ue.parse(e) : Ge.test(e) ? Ge.parse(e) : $e.parse(e),
        transform: e => "string" === typeof e ? e : e.hasOwnProperty("red") ? Ue.transform(e) : Ge.transform(e)
    }
      , Je = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
    const et = "number"
      , tt = "color"
      , nt = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    function rt(e) {
        const t = e.toString()
          , n = []
          , r = {
            color: [],
            number: [],
            var: []
        }
          , i = [];
        let a = 0;
        const o = t.replace(nt, (e => (Ze.test(e) ? (r.color.push(a),
        i.push(tt),
        n.push(Ze.parse(e))) : e.startsWith("var(") ? (r.var.push(a),
        i.push("var"),
        n.push(e)) : (r.number.push(a),
        i.push(et),
        n.push(parseFloat(e))),
        ++a,
        "${}"))).split("${}");
        return {
            values: n,
            split: o,
            indexes: r,
            types: i
        }
    }
    function it(e) {
        return rt(e).values
    }
    function at(e) {
        const {split: t, types: n} = rt(e)
          , r = t.length;
        return e => {
            let i = "";
            for (let a = 0; a < r; a++)
                if (i += t[a],
                void 0 !== e[a]) {
                    const t = n[a];
                    i += t === et ? ze(e[a]) : t === tt ? Ze.transform(e[a]) : e[a]
                }
            return i
        }
    }
    const ot = e => "number" === typeof e ? 0 : e;
    const st = {
        test: function(e) {
            var t, n;
            return isNaN(e) && "string" === typeof e && ((null === (t = e.match(Fe)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(Je)) || void 0 === n ? void 0 : n.length) || 0) > 0
        },
        parse: it,
        createTransformer: at,
        getAnimatableNone: function(e) {
            const t = it(e);
            return at(e)(t.map(ot))
        }
    }
      , lt = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function ut(e) {
        const [t,n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t)
            return e;
        const [r] = n.match(Fe) || [];
        if (!r)
            return e;
        const i = n.replace(r, "");
        let a = lt.has(t) ? 1 : 0;
        return r !== n && (a *= 100),
        t + "(" + a + i + ")"
    }
    const ct = /\b([a-z-]*)\(.*?\)/gu
      , dt = {
        ...st,
        getAnimatableNone: e => {
            const t = e.match(ct);
            return t ? t.map(ut).join(" ") : e
        }
    }
      , ft = {
        borderWidth: Qe,
        borderTopWidth: Qe,
        borderRightWidth: Qe,
        borderBottomWidth: Qe,
        borderLeftWidth: Qe,
        borderRadius: Qe,
        radius: Qe,
        borderTopLeftRadius: Qe,
        borderTopRightRadius: Qe,
        borderBottomRightRadius: Qe,
        borderBottomLeftRadius: Qe,
        width: Qe,
        maxWidth: Qe,
        height: Qe,
        maxHeight: Qe,
        top: Qe,
        right: Qe,
        bottom: Qe,
        left: Qe,
        padding: Qe,
        paddingTop: Qe,
        paddingRight: Qe,
        paddingBottom: Qe,
        paddingLeft: Qe,
        margin: Qe,
        marginTop: Qe,
        marginRight: Qe,
        marginBottom: Qe,
        marginLeft: Qe,
        backgroundPositionX: Qe,
        backgroundPositionY: Qe
    }
      , ht = {
        rotate: He,
        rotateX: He,
        rotateY: He,
        rotateZ: He,
        scale: _e,
        scaleX: _e,
        scaleY: _e,
        scaleZ: _e,
        skew: He,
        skewX: He,
        skewY: He,
        distance: Qe,
        translateX: Qe,
        translateY: Qe,
        translateZ: Qe,
        x: Qe,
        y: Qe,
        z: Qe,
        perspective: Qe,
        transformPerspective: Qe,
        opacity: Oe,
        originX: Xe,
        originY: Xe,
        originZ: Qe
    }
      , pt = {
        ...Ne,
        transform: Math.round
    }
      , mt = {
        ...ft,
        ...ht,
        zIndex: pt,
        size: Qe,
        fillOpacity: Oe,
        strokeOpacity: Oe,
        numOctaves: pt
    }
      , gt = {
        ...mt,
        color: Ze,
        backgroundColor: Ze,
        outlineColor: Ze,
        fill: Ze,
        stroke: Ze,
        borderColor: Ze,
        borderTopColor: Ze,
        borderRightColor: Ze,
        borderBottomColor: Ze,
        borderLeftColor: Ze,
        filter: dt,
        WebkitFilter: dt
    }
      , vt = e => gt[e];
    function yt(e, t) {
        let n = vt(e);
        return n !== dt && (n = st),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    }
    const bt = new Set(["auto", "none", "0"]);
    const wt = e => e === Ne || e === Qe
      , St = (e, t) => parseFloat(e.split(", ")[t])
      , kt = (e, t) => (n, r) => {
        let {transform: i} = r;
        if ("none" === i || !i)
            return 0;
        const a = i.match(/^matrix3d\((.+)\)$/u);
        if (a)
            return St(a[1], t);
        {
            const t = i.match(/^matrix\((.+)\)$/u);
            return t ? St(t[1], e) : 0
        }
    }
      , xt = new Set(["x", "y", "z"])
      , Pt = W.filter((e => !xt.has(e)));
    const Et = {
        width: (e, t) => {
            let {x: n} = e
              , {paddingLeft: r="0", paddingRight: i="0"} = t;
            return n.max - n.min - parseFloat(r) - parseFloat(i)
        }
        ,
        height: (e, t) => {
            let {y: n} = e
              , {paddingTop: r="0", paddingBottom: i="0"} = t;
            return n.max - n.min - parseFloat(r) - parseFloat(i)
        }
        ,
        top: (e, t) => {
            let {top: n} = t;
            return parseFloat(n)
        }
        ,
        left: (e, t) => {
            let {left: n} = t;
            return parseFloat(n)
        }
        ,
        bottom: (e, t) => {
            let {y: n} = e
              , {top: r} = t;
            return parseFloat(r) + (n.max - n.min)
        }
        ,
        right: (e, t) => {
            let {x: n} = e
              , {left: r} = t;
            return parseFloat(r) + (n.max - n.min)
        }
        ,
        x: kt(4, 13),
        y: kt(5, 14)
    };
    Et.translateX = Et.x,
    Et.translateY = Et.y;
    const Ct = new Set;
    let Tt = !1
      , At = !1;
    function Mt() {
        if (At) {
            const e = Array.from(Ct).filter((e => e.needsMeasurement))
              , t = new Set(e.map((e => e.element)))
              , n = new Map;
            t.forEach((e => {
                const t = function(e) {
                    const t = [];
                    return Pt.forEach((n => {
                        const r = e.getValue(n);
                        void 0 !== r && (t.push([n, r.get()]),
                        r.set(n.startsWith("scale") ? 1 : 0))
                    }
                    )),
                    t
                }(e);
                t.length && (n.set(e, t),
                e.render())
            }
            )),
            e.forEach((e => e.measureInitialState())),
            t.forEach((e => {
                e.render();
                const t = n.get(e);
                t && t.forEach((t => {
                    let[n,r] = t;
                    var i;
                    null === (i = e.getValue(n)) || void 0 === i || i.set(r)
                }
                ))
            }
            )),
            e.forEach((e => e.measureEndState())),
            e.forEach((e => {
                void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
            }
            ))
        }
        At = !1,
        Tt = !1,
        Ct.forEach((e => e.complete())),
        Ct.clear()
    }
    function Dt() {
        Ct.forEach((e => {
            e.readKeyframes(),
            e.needsMeasurement && (At = !0)
        }
        ))
    }
    class Lt {
        constructor(e, t, n, r, i) {
            let a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            this.isComplete = !1,
            this.isAsync = !1,
            this.needsMeasurement = !1,
            this.isScheduled = !1,
            this.unresolvedKeyframes = [...e],
            this.onComplete = t,
            this.name = n,
            this.motionValue = r,
            this.element = i,
            this.isAsync = a
        }
        scheduleResolve() {
            this.isScheduled = !0,
            this.isAsync ? (Ct.add(this),
            Tt || (Tt = !0,
            J.read(Dt),
            J.resolveKeyframes(Mt))) : (this.readKeyframes(),
            this.complete())
        }
        readKeyframes() {
            const {unresolvedKeyframes: e, name: t, element: n, motionValue: r} = this;
            for (let i = 0; i < e.length; i++)
                if (null === e[i])
                    if (0 === i) {
                        const i = null === r || void 0 === r ? void 0 : r.get()
                          , a = e[e.length - 1];
                        if (void 0 !== i)
                            e[0] = i;
                        else if (n && t) {
                            const r = n.readValue(t, a);
                            void 0 !== r && null !== r && (e[0] = r)
                        }
                        void 0 === e[0] && (e[0] = a),
                        r && void 0 === i && r.set(e[0])
                    } else
                        e[i] = e[i - 1]
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
            this.isComplete = !0,
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            Ct.delete(this)
        }
        cancel() {
            this.isComplete || (this.isScheduled = !1,
            Ct.delete(this))
        }
        resume() {
            this.isComplete || this.scheduleResolve()
        }
    }
    let Rt = $
      , Nt = $;
    const Ot = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
      , _t = e => t => "string" === typeof t && t.startsWith(e)
      , zt = _t("--")
      , Ft = _t("var(--")
      , Vt = e => !!Ft(e) && It.test(e.split("/*")[0].trim())
      , It = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
      , jt = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
    function Bt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        Nt(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
        const [r,i] = function(e) {
            const t = jt.exec(e);
            if (!t)
                return [, ];
            const [,n,r,i] = t;
            return [`--${null !== n && void 0 !== n ? n : r}`, i]
        }(e);
        if (!r)
            return;
        const a = window.getComputedStyle(t).getPropertyValue(r);
        if (a) {
            const e = a.trim();
            return Ot(e) ? parseFloat(e) : e
        }
        return Vt(i) ? Bt(i, t, n + 1) : i
    }
    const Ut = e => t => t.test(e)
      , $t = [Ne, Qe, qe, He, Ke, Ye, {
        test: e => "auto" === e,
        parse: e => e
    }]
      , Wt = e => $t.find(Ut(e));
    class Ht extends Lt {
        constructor(e, t, n, r, i) {
            super(e, t, n, r, i, !0)
        }
        readKeyframes() {
            const {unresolvedKeyframes: e, element: t, name: n} = this;
            if (!t || !t.current)
                return;
            super.readKeyframes();
            for (let s = 0; s < e.length; s++) {
                let n = e[s];
                if ("string" === typeof n && (n = n.trim(),
                Vt(n))) {
                    const r = Bt(n, t.current);
                    void 0 !== r && (e[s] = r),
                    s === e.length - 1 && (this.finalKeyframe = n)
                }
            }
            if (this.resolveNoneKeyframes(),
            !q.has(n) || 2 !== e.length)
                return;
            const [r,i] = e
              , a = Wt(r)
              , o = Wt(i);
            if (a !== o)
                if (wt(a) && wt(o))
                    for (let s = 0; s < e.length; s++) {
                        const t = e[s];
                        "string" === typeof t && (e[s] = parseFloat(t))
                    }
                else
                    this.needsMeasurement = !0
        }
        resolveNoneKeyframes() {
            const {unresolvedKeyframes: e, name: t} = this
              , n = [];
            for (let i = 0; i < e.length; i++)
                ("number" === typeof (r = e[i]) ? 0 === r : null === r || "none" === r || "0" === r || Le(r)) && n.push(i);
            var r;
            n.length && function(e, t, n) {
                let r, i = 0;
                for (; i < e.length && !r; ) {
                    const t = e[i];
                    "string" === typeof t && !bt.has(t) && rt(t).values.length && (r = e[i]),
                    i++
                }
                if (r && n)
                    for (const a of t)
                        e[a] = yt(n, r)
            }(e, n, t)
        }
        measureInitialState() {
            const {element: e, unresolvedKeyframes: t, name: n} = this;
            if (!e || !e.current)
                return;
            "height" === n && (this.suspendedScrollY = window.pageYOffset),
            this.measuredOrigin = Et[n](e.measureViewportBox(), window.getComputedStyle(e.current)),
            t[0] = this.measuredOrigin;
            const r = t[t.length - 1];
            void 0 !== r && e.getValue(n, r).jump(r, !1)
        }
        measureEndState() {
            var e;
            const {element: t, name: n, unresolvedKeyframes: r} = this;
            if (!t || !t.current)
                return;
            const i = t.getValue(n);
            i && i.jump(this.measuredOrigin, !1);
            const a = r.length - 1
              , o = r[a];
            r[a] = Et[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
            null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
            (null === (e = this.removedTransforms) || void 0 === e ? void 0 : e.length) && this.removedTransforms.forEach((e => {
                let[n,r] = e;
                t.getValue(n).set(r)
            }
            )),
            this.resolveNoneKeyframes()
        }
    }
    const qt = (e, t) => "zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !st.test(e) && "0" !== e || e.startsWith("url(")));
    function Qt(e, t, n, r) {
        const i = e[0];
        if (null === i)
            return !1;
        if ("display" === t || "visibility" === t)
            return !0;
        const a = e[e.length - 1]
          , o = qt(i, t)
          , s = qt(a, t);
        return Rt(o === s, `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`),
        !(!o || !s) && (function(e) {
            const t = e[0];
            if (1 === e.length)
                return !0;
            for (let n = 0; n < e.length; n++)
                if (e[n] !== t)
                    return !0
        }(e) || ("spring" === n || v(n)) && r)
    }
    const Yt = e => null !== e;
    function Kt(e, t, n) {
        let {repeat: r, repeatType: i="loop"} = t;
        const a = e.filter(Yt)
          , o = r && "loop" !== i && r % 2 === 1 ? 0 : a.length - 1;
        return o && void 0 !== n ? n : a[o]
    }
    class Xt {
        constructor(e) {
            let {autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: a=0, repeatType: o="loop", ...s} = e;
            this.isStopped = !1,
            this.hasAttemptedResolve = !1,
            this.createdAt = ae.now(),
            this.options = {
                autoplay: t,
                delay: n,
                type: r,
                repeat: i,
                repeatDelay: a,
                repeatType: o,
                ...s
            },
            this.updateFinishedPromise()
        }
        calcStartTime() {
            return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
        }
        get resolved() {
            return this._resolved || this.hasAttemptedResolve || (Dt(),
            Mt()),
            this._resolved
        }
        onKeyframesResolved(e, t) {
            this.resolvedAt = ae.now(),
            this.hasAttemptedResolve = !0;
            const {name: n, type: r, velocity: i, delay: a, onComplete: o, onUpdate: s, isGenerator: l} = this.options;
            if (!l && !Qt(e, n, r, i)) {
                if (be || !a)
                    return s && s(Kt(e, this.options, t)),
                    o && o(),
                    void this.resolveFinishedPromise();
                this.options.duration = 0
            }
            const u = this.initPlayback(e, t);
            !1 !== u && (this._resolved = {
                keyframes: e,
                finalKeyframe: t,
                ...u
            },
            this.onPostResolved())
        }
        onPostResolved() {}
        then(e, t) {
            return this.currentFinishedPromise.then(e, t)
        }
        flatten() {
            this.options.type = "keyframes",
            this.options.ease = "linear"
        }
        updateFinishedPromise() {
            this.currentFinishedPromise = new Promise((e => {
                this.resolveFinishedPromise = e
            }
            ))
        }
    }
    const Gt = {
        layout: 0,
        mainThread: 0,
        waapi: 0
    }
      , Zt = (e, t, n) => e + (t - e) * n;
    function Jt(e, t, n) {
        return n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }
    function en(e, t) {
        return n => n > 0 ? t : e
    }
    const tn = (e, t, n) => {
        const r = e * e
          , i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    }
      , nn = [$e, Ue, Ge];
    function rn(e) {
        const t = (n = e,
        nn.find((e => e.test(n))));
        var n;
        if (Rt(Boolean(t), `'${e}' is not an animatable color. Use the equivalent color code instead.`),
        !Boolean(t))
            return !1;
        let r = t.parse(e);
        return t === Ge && (r = function(e) {
            let {hue: t, saturation: n, lightness: r, alpha: i} = e;
            t /= 360,
            n /= 100,
            r /= 100;
            let a = 0
              , o = 0
              , s = 0;
            if (n) {
                const e = r < .5 ? r * (1 + n) : r + n - r * n
                  , i = 2 * r - e;
                a = Jt(i, e, t + 1 / 3),
                o = Jt(i, e, t),
                s = Jt(i, e, t - 1 / 3)
            } else
                a = o = s = r;
            return {
                red: Math.round(255 * a),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: i
            }
        }(r)),
        r
    }
    const an = (e, t) => {
        const n = rn(e)
          , r = rn(t);
        if (!n || !r)
            return en(e, t);
        const i = {
            ...n
        };
        return e => (i.red = tn(n.red, r.red, e),
        i.green = tn(n.green, r.green, e),
        i.blue = tn(n.blue, r.blue, e),
        i.alpha = Zt(n.alpha, r.alpha, e),
        Ue.transform(i))
    }
      , on = (e, t) => n => t(e(n))
      , sn = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return t.reduce(on)
    }
      , ln = new Set(["none", "hidden"]);
    function un(e, t) {
        return n => Zt(e, t, n)
    }
    function cn(e) {
        return "number" === typeof e ? un : "string" === typeof e ? Vt(e) ? en : Ze.test(e) ? an : hn : Array.isArray(e) ? dn : "object" === typeof e ? Ze.test(e) ? an : fn : en
    }
    function dn(e, t) {
        const n = [...e]
          , r = n.length
          , i = e.map(( (e, n) => cn(e)(e, t[n])));
        return e => {
            for (let t = 0; t < r; t++)
                n[t] = i[t](e);
            return n
        }
    }
    function fn(e, t) {
        const n = {
            ...e,
            ...t
        }
          , r = {};
        for (const i in n)
            void 0 !== e[i] && void 0 !== t[i] && (r[i] = cn(e[i])(e[i], t[i]));
        return e => {
            for (const t in r)
                n[t] = r[t](e);
            return n
        }
    }
    const hn = (e, t) => {
        const n = st.createTransformer(t)
          , r = rt(e)
          , i = rt(t);
        return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? ln.has(e) && !i.values.length || ln.has(t) && !r.values.length ? function(e, t) {
            return ln.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
        }(e, t) : sn(dn(function(e, t) {
            var n;
            const r = []
              , i = {
                color: 0,
                var: 0,
                number: 0
            };
            for (let a = 0; a < t.values.length; a++) {
                const o = t.types[a]
                  , s = e.indexes[o][i[o]]
                  , l = null !== (n = e.values[s]) && void 0 !== n ? n : 0;
                r[a] = l,
                i[o]++
            }
            return r
        }(r, i), i.values), n) : (Rt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
        en(e, t))
    }
    ;
    function pn(e, t, n) {
        if ("number" === typeof e && "number" === typeof t && "number" === typeof n)
            return Zt(e, t, n);
        return cn(e)(e, t)
    }
    function mn(e, t, n) {
        const r = Math.max(t - 5, 0);
        return ue(n - e(r), t - r)
    }
    const gn = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    }
      , vn = .001;
    function yn(e) {
        let t, n, {duration: r=gn.duration, bounce: i=gn.bounce, velocity: a=gn.velocity, mass: o=gn.mass} = e;
        Rt(r <= B(gn.maxDuration), "Spring duration must be 10 seconds or less");
        let s = 1 - i;
        s = Re(gn.minDamping, gn.maxDamping, s),
        r = Re(gn.minDuration, gn.maxDuration, U(r)),
        s < 1 ? (t = e => {
            const t = e * s
              , n = t * r
              , i = t - a
              , o = wn(e, s)
              , l = Math.exp(-n);
            return vn - i / o * l
        }
        ,
        n = e => {
            const n = e * s * r
              , i = n * a + a
              , o = Math.pow(s, 2) * Math.pow(e, 2) * r
              , l = Math.exp(-n)
              , u = wn(Math.pow(e, 2), s);
            return (-t(e) + vn > 0 ? -1 : 1) * ((i - o) * l) / u
        }
        ) : (t = e => Math.exp(-e * r) * ((e - a) * r + 1) - .001,
        n = e => Math.exp(-e * r) * (r * r * (a - e)));
        const l = function(e, t, n) {
            let r = n;
            for (let i = 1; i < bn; i++)
                r -= e(r) / t(r);
            return r
        }(t, n, 5 / r);
        if (r = B(r),
        isNaN(l))
            return {
                stiffness: gn.stiffness,
                damping: gn.damping,
                duration: r
            };
        {
            const e = Math.pow(l, 2) * o;
            return {
                stiffness: e,
                damping: 2 * s * Math.sqrt(o * e),
                duration: r
            }
        }
    }
    const bn = 12;
    function wn(e, t) {
        return e * Math.sqrt(1 - t * t)
    }
    const Sn = ["duration", "bounce"]
      , kn = ["stiffness", "damping", "mass"];
    function xn(e, t) {
        return t.some((t => void 0 !== e[t]))
    }
    function Pn() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gn.visualDuration
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gn.bounce;
        const n = "object" !== typeof e ? {
            visualDuration: e,
            keyframes: [0, 1],
            bounce: t
        } : e;
        let {restSpeed: r, restDelta: i} = n;
        const a = n.keyframes[0]
          , o = n.keyframes[n.keyframes.length - 1]
          , s = {
            done: !1,
            value: a
        }
          , {stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h} = function(e) {
            let t = {
                velocity: gn.velocity,
                stiffness: gn.stiffness,
                damping: gn.damping,
                mass: gn.mass,
                isResolvedFromDuration: !1,
                ...e
            };
            if (!xn(e, kn) && xn(e, Sn))
                if (e.visualDuration) {
                    const n = e.visualDuration
                      , r = 2 * Math.PI / (1.2 * n)
                      , i = r * r
                      , a = 2 * Re(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
                    t = {
                        ...t,
                        mass: gn.mass,
                        stiffness: i,
                        damping: a
                    }
                } else {
                    const n = yn(e);
                    t = {
                        ...t,
                        ...n,
                        mass: gn.mass
                    },
                    t.isResolvedFromDuration = !0
                }
            return t
        }({
            ...n,
            velocity: -U(n.velocity || 0)
        })
          , p = f || 0
          , v = u / (2 * Math.sqrt(l * c))
          , y = o - a
          , b = U(Math.sqrt(l / c))
          , w = Math.abs(y) < 5;
        let S;
        if (r || (r = w ? gn.restSpeed.granular : gn.restSpeed.default),
        i || (i = w ? gn.restDelta.granular : gn.restDelta.default),
        v < 1) {
            const e = wn(b, v);
            S = t => {
                const n = Math.exp(-v * b * t);
                return o - n * ((p + v * b * y) / e * Math.sin(e * t) + y * Math.cos(e * t))
            }
        } else if (1 === v)
            S = e => o - Math.exp(-b * e) * (y + (p + b * y) * e);
        else {
            const e = b * Math.sqrt(v * v - 1);
            S = t => {
                const n = Math.exp(-v * b * t)
                  , r = Math.min(e * t, 300);
                return o - n * ((p + v * b * y) * Math.sinh(r) + e * y * Math.cosh(r)) / e
            }
        }
        const k = {
            calculatedDuration: h && d || null,
            next: e => {
                const t = S(e);
                if (h)
                    s.done = e >= d;
                else {
                    let n = 0;
                    v < 1 && (n = 0 === e ? B(p) : mn(S, e, t));
                    const a = Math.abs(n) <= r
                      , l = Math.abs(o - t) <= i;
                    s.done = a && l
                }
                return s.value = s.done ? o : t,
                s
            }
            ,
            toString: () => {
                const e = Math.min(g(k), m)
                  , t = P((t => k.next(e * t).value), e, 30);
                return e + "ms " + t
            }
        };
        return k
    }
    function En(e) {
        let {keyframes: t, velocity: n=0, power: r=.8, timeConstant: i=325, bounceDamping: a=10, bounceStiffness: o=500, modifyTarget: s, min: l, max: u, restDelta: c=.5, restSpeed: d} = e;
        const f = t[0]
          , h = {
            done: !1,
            value: f
        }
          , p = e => void 0 === l ? u : void 0 === u || Math.abs(l - e) < Math.abs(u - e) ? l : u;
        let m = r * n;
        const g = f + m
          , v = void 0 === s ? g : s(g);
        v !== g && (m = v - f);
        const y = e => -m * Math.exp(-e / i)
          , b = e => v + y(e)
          , w = e => {
            const t = y(e)
              , n = b(e);
            h.done = Math.abs(t) <= c,
            h.value = h.done ? v : n
        }
        ;
        let S, k;
        const x = e => {
            var t;
            (t = h.value,
            void 0 !== l && t < l || void 0 !== u && t > u) && (S = e,
            k = Pn({
                keyframes: [h.value, p(h.value)],
                velocity: mn(b, e, h.value),
                damping: a,
                stiffness: o,
                restDelta: c,
                restSpeed: d
            }))
        }
        ;
        return x(0),
        {
            calculatedDuration: null,
            next: e => {
                let t = !1;
                return k || void 0 !== S || (t = !0,
                w(e),
                x(e)),
                void 0 !== S && e >= S ? k.next(e - S) : (!t && w(e),
                h)
            }
        }
    }
    const Cn = Se(.42, 0, 1, 1)
      , Tn = Se(0, 0, .58, 1)
      , An = Se(.42, 0, .58, 1)
      , Mn = {
        linear: $,
        easeIn: Cn,
        easeInOut: An,
        easeOut: Tn,
        circIn: Ae,
        circInOut: De,
        circOut: Me,
        backIn: Ee,
        backInOut: Ce,
        backOut: Pe,
        anticipate: Te
    }
      , Dn = e => {
        if (b(e)) {
            Nt(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
            const [t,n,r,i] = e;
            return Se(t, n, r, i)
        }
        return "string" === typeof e ? (Nt(void 0 !== Mn[e], `Invalid easing type '${e}'`),
        Mn[e]) : e
    }
    ;
    function Ln(e, t) {
        let {clamp: n=!0, ease: r, mixer: i} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const a = e.length;
        if (Nt(a === t.length, "Both input and output ranges must be the same length"),
        1 === a)
            return () => t[0];
        if (2 === a && t[0] === t[1])
            return () => t[1];
        const o = e[0] === e[1];
        e[0] > e[a - 1] && (e = [...e].reverse(),
        t = [...t].reverse());
        const s = function(e, t, n) {
            const r = []
              , i = n || pn
              , a = e.length - 1;
            for (let o = 0; o < a; o++) {
                let n = i(e[o], e[o + 1]);
                if (t) {
                    const e = Array.isArray(t) ? t[o] || $ : t;
                    n = sn(e, n)
                }
                r.push(n)
            }
            return r
        }(t, r, i)
          , l = s.length
          , u = n => {
            if (o && n < e[0])
                return t[0];
            let r = 0;
            if (l > 1)
                for (; r < e.length - 2 && !(n < e[r + 1]); r++)
                    ;
            const i = x(e[r], e[r + 1], n);
            return s[r](i)
        }
        ;
        return n ? t => u(Re(e[0], e[a - 1], t)) : u
    }
    function Rn(e) {
        const t = [0];
        return function(e, t) {
            const n = e[e.length - 1];
            for (let r = 1; r <= t; r++) {
                const i = x(0, t, r);
                e.push(Zt(n, 1, i))
            }
        }(t, e.length - 1),
        t
    }
    function Nn(e) {
        let {duration: t=300, keyframes: n, times: r, ease: i="easeInOut"} = e;
        const a = (e => Array.isArray(e) && "number" !== typeof e[0])(i) ? i.map(Dn) : Dn(i)
          , o = {
            done: !1,
            value: n[0]
        }
          , s = function(e, t) {
            return e.map((e => e * t))
        }(r && r.length === n.length ? r : Rn(n), t)
          , l = Ln(s, n, {
            ease: Array.isArray(a) ? a : (u = n,
            c = a,
            u.map(( () => c || An)).splice(0, u.length - 1))
        });
        var u, c;
        return {
            calculatedDuration: t,
            next: e => (o.value = l(e),
            o.done = e >= t,
            o)
        }
    }
    const On = e => {
        const t = t => {
            let {timestamp: n} = t;
            return e(n)
        }
        ;
        return {
            start: () => J.update(t, !0),
            stop: () => ee(t),
            now: () => te.isProcessing ? te.timestamp : ae.now()
        }
    }
      , _n = {
        decay: En,
        inertia: En,
        tween: Nn,
        keyframes: Nn,
        spring: Pn
    }
      , zn = e => e / 100;
    class Fn extends Xt {
        constructor(e) {
            super(e),
            this.holdTime = null,
            this.cancelTime = null,
            this.currentTime = 0,
            this.playbackSpeed = 1,
            this.pendingPlayState = "running",
            this.startTime = null,
            this.state = "idle",
            this.stop = () => {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                this.teardown();
                const {onStop: e} = this.options;
                e && e()
            }
            ;
            const {name: t, motionValue: n, element: r, keyframes: i} = this.options
              , a = (null === r || void 0 === r ? void 0 : r.KeyframeResolver) || Lt;
            this.resolver = new a(i,( (e, t) => this.onKeyframesResolved(e, t)),t,n,r),
            this.resolver.scheduleResolve()
        }
        flatten() {
            super.flatten(),
            this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
        }
        initPlayback(e) {
            const {type: t="keyframes", repeat: n=0, repeatDelay: r=0, repeatType: i, velocity: a=0} = this.options
              , o = v(t) ? t : _n[t] || Nn;
            let s, l;
            o !== Nn && "number" !== typeof e[0] && (s = sn(zn, pn(e[0], e[1])),
            e = [0, 100]);
            const u = o({
                ...this.options,
                keyframes: e
            });
            "mirror" === i && (l = o({
                ...this.options,
                keyframes: [...e].reverse(),
                velocity: -a
            })),
            null === u.calculatedDuration && (u.calculatedDuration = g(u));
            const {calculatedDuration: c} = u
              , d = c + r;
            return {
                generator: u,
                mirroredGenerator: l,
                mapPercentToKeyframes: s,
                calculatedDuration: c,
                resolvedDuration: d,
                totalDuration: d * (n + 1) - r
            }
        }
        onPostResolved() {
            const {autoplay: e=!0} = this.options;
            Gt.mainThread++,
            this.play(),
            "paused" !== this.pendingPlayState && e ? this.state = this.pendingPlayState : this.pause()
        }
        tick(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const {resolved: n} = this;
            if (!n) {
                const {keyframes: e} = this.options;
                return {
                    done: !0,
                    value: e[e.length - 1]
                }
            }
            const {finalKeyframe: r, generator: i, mirroredGenerator: a, mapPercentToKeyframes: o, keyframes: s, calculatedDuration: l, totalDuration: u, resolvedDuration: c} = n;
            if (null === this.startTime)
                return i.next(0);
            const {delay: d, repeat: f, repeatType: h, repeatDelay: p, onUpdate: m} = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t ? this.currentTime = e : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
            const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
              , v = this.speed >= 0 ? g < 0 : g > u;
            this.currentTime = Math.max(g, 0),
            "finished" === this.state && null === this.holdTime && (this.currentTime = u);
            let y = this.currentTime
              , b = i;
            if (f) {
                const e = Math.min(this.currentTime, u) / c;
                let t = Math.floor(e)
                  , n = e % 1;
                !n && e >= 1 && (n = 1),
                1 === n && t--,
                t = Math.min(t, f + 1);
                Boolean(t % 2) && ("reverse" === h ? (n = 1 - n,
                p && (n -= p / c)) : "mirror" === h && (b = a)),
                y = Re(0, 1, n) * c
            }
            const w = v ? {
                done: !1,
                value: s[0]
            } : b.next(y);
            o && (w.value = o(w.value));
            let {done: S} = w;
            v || null === l || (S = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
            const k = null === this.holdTime && ("finished" === this.state || "running" === this.state && S);
            return k && void 0 !== r && (w.value = Kt(s, this.options, r)),
            m && m(w.value),
            k && this.finish(),
            w
        }
        get duration() {
            const {resolved: e} = this;
            return e ? U(e.calculatedDuration) : 0
        }
        get time() {
            return U(this.currentTime)
        }
        set time(e) {
            e = B(e),
            this.currentTime = e,
            null !== this.holdTime || 0 === this.speed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(e) {
            const t = this.playbackSpeed !== e;
            this.playbackSpeed = e,
            t && (this.time = U(this.currentTime))
        }
        play() {
            if (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
                return void (this.pendingPlayState = "running");
            if (this.isStopped)
                return;
            const {driver: e=On, onPlay: t, startTime: n} = this.options;
            this.driver || (this.driver = e((e => this.tick(e)))),
            t && t();
            const r = this.driver.now();
            null !== this.holdTime ? this.startTime = r - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = r) : this.startTime = null !== n && void 0 !== n ? n : this.calcStartTime(),
            "finished" === this.state && this.updateFinishedPromise(),
            this.cancelTime = this.startTime,
            this.holdTime = null,
            this.state = "running",
            this.driver.start()
        }
        pause() {
            var e;
            this._resolved ? (this.state = "paused",
            this.holdTime = null !== (e = this.currentTime) && void 0 !== e ? e : 0) : this.pendingPlayState = "paused"
        }
        complete() {
            "running" !== this.state && this.play(),
            this.pendingPlayState = this.state = "finished",
            this.holdTime = null
        }
        finish() {
            this.teardown(),
            this.state = "finished";
            const {onComplete: e} = this.options;
            e && e()
        }
        cancel() {
            null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise()
        }
        teardown() {
            this.state = "idle",
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            this.startTime = this.cancelTime = null,
            this.resolver.cancel(),
            Gt.mainThread--
        }
        stopDriver() {
            this.driver && (this.driver.stop(),
            this.driver = void 0)
        }
        sample(e) {
            return this.startTime = 0,
            this.tick(e, !0)
        }
    }
    const Vn = new Set(["opacity", "clipPath", "filter", "transform"]);
    const In = c(( () => Object.hasOwnProperty.call(Element.prototype, "animate")));
    const jn = {
        anticipate: Te,
        backInOut: Ce,
        circInOut: De
    };
    class Bn extends Xt {
        constructor(e) {
            super(e);
            const {name: t, motionValue: n, element: r, keyframes: i} = this.options;
            this.resolver = new Ht(i,( (e, t) => this.onKeyframesResolved(e, t)),t,n,r),
            this.resolver.scheduleResolve()
        }
        initPlayback(e, t) {
            let {duration: n=300, times: r, ease: i, type: a, motionValue: o, name: s, startTime: l} = this.options;
            if (!o.owner || !o.owner.current)
                return !1;
            var u;
            if ("string" === typeof i && k() && i in jn && (i = jn[i]),
            v((u = this.options).type) || "spring" === u.type || !E(u.ease)) {
                const {onComplete: t, onUpdate: o, motionValue: s, element: l, ...u} = this.options
                  , c = function(e, t) {
                    const n = new Fn({
                        ...t,
                        keyframes: e,
                        repeat: 0,
                        delay: 0,
                        isGenerator: !0
                    });
                    let r = {
                        done: !1,
                        value: e[0]
                    };
                    const i = [];
                    let a = 0;
                    for (; !r.done && a < 2e4; )
                        r = n.sample(a),
                        i.push(r.value),
                        a += 10;
                    return {
                        times: void 0,
                        keyframes: i,
                        duration: a - 10,
                        ease: "linear"
                    }
                }(e, u);
                1 === (e = c.keyframes).length && (e[1] = e[0]),
                n = c.duration,
                r = c.times,
                i = c.ease,
                a = "keyframes"
            }
            const c = function(e, t, n) {
                let {delay: r=0, duration: i=300, repeat: a=0, repeatType: o="loop", ease: s="easeInOut", times: l} = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                const u = {
                    [t]: n
                };
                l && (u.offset = l);
                const c = A(s, i);
                Array.isArray(c) && (u.easing = c),
                G.value && Gt.waapi++;
                const d = e.animate(u, {
                    delay: r,
                    duration: i,
                    easing: Array.isArray(c) ? "linear" : c,
                    fill: "both",
                    iterations: a + 1,
                    direction: "reverse" === o ? "alternate" : "normal"
                });
                return G.value && d.finished.finally(( () => {
                    Gt.waapi--
                }
                )),
                d
            }(o.owner.current, s, e, {
                ...this.options,
                duration: n,
                times: r,
                ease: i
            });
            return c.startTime = null !== l && void 0 !== l ? l : this.calcStartTime(),
            this.pendingTimeline ? (y(c, this.pendingTimeline),
            this.pendingTimeline = void 0) : c.onfinish = () => {
                const {onComplete: n} = this.options;
                o.set(Kt(e, this.options, t)),
                n && n(),
                this.cancel(),
                this.resolveFinishedPromise()
            }
            ,
            {
                animation: c,
                duration: n,
                times: r,
                type: a,
                ease: i,
                keyframes: e
            }
        }
        get duration() {
            const {resolved: e} = this;
            if (!e)
                return 0;
            const {duration: t} = e;
            return U(t)
        }
        get time() {
            const {resolved: e} = this;
            if (!e)
                return 0;
            const {animation: t} = e;
            return U(t.currentTime || 0)
        }
        set time(e) {
            const {resolved: t} = this;
            if (!t)
                return;
            const {animation: n} = t;
            n.currentTime = B(e)
        }
        get speed() {
            const {resolved: e} = this;
            if (!e)
                return 1;
            const {animation: t} = e;
            return t.playbackRate
        }
        set speed(e) {
            const {resolved: t} = this;
            if (!t)
                return;
            const {animation: n} = t;
            n.playbackRate = e
        }
        get state() {
            const {resolved: e} = this;
            if (!e)
                return "idle";
            const {animation: t} = e;
            return t.playState
        }
        get startTime() {
            const {resolved: e} = this;
            if (!e)
                return null;
            const {animation: t} = e;
            return t.startTime
        }
        attachTimeline(e) {
            if (this._resolved) {
                const {resolved: t} = this;
                if (!t)
                    return $;
                const {animation: n} = t;
                y(n, e)
            } else
                this.pendingTimeline = e;
            return $
        }
        play() {
            if (this.isStopped)
                return;
            const {resolved: e} = this;
            if (!e)
                return;
            const {animation: t} = e;
            "finished" === t.playState && this.updateFinishedPromise(),
            t.play()
        }
        pause() {
            const {resolved: e} = this;
            if (!e)
                return;
            const {animation: t} = e;
            t.pause()
        }
        stop() {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            "idle" === this.state)
                return;
            this.resolveFinishedPromise(),
            this.updateFinishedPromise();
            const {resolved: e} = this;
            if (!e)
                return;
            const {animation: t, keyframes: n, duration: r, type: i, ease: a, times: o} = e;
            if ("idle" === t.playState || "finished" === t.playState)
                return;
            if (this.time) {
                const {motionValue: e, onUpdate: t, onComplete: s, element: l, ...u} = this.options
                  , c = new Fn({
                    ...u,
                    keyframes: n,
                    duration: r,
                    type: i,
                    ease: a,
                    times: o,
                    isGenerator: !0
                })
                  , d = B(this.time);
                e.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10)
            }
            const {onStop: s} = this.options;
            s && s(),
            this.cancel()
        }
        complete() {
            const {resolved: e} = this;
            e && e.animation.finish()
        }
        cancel() {
            const {resolved: e} = this;
            e && e.animation.cancel()
        }
        static supports(e) {
            const {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o} = e;
            if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
                return !1;
            const {onUpdate: s, transformTemplate: l} = t.owner.getProps();
            return In() && n && Vn.has(n) && !s && !l && !r && "mirror" !== i && 0 !== a && "inertia" !== o
        }
    }
    const Un = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    }
      , $n = {
        type: "keyframes",
        duration: .8
    }
      , Wn = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    }
      , Hn = (e, t) => {
        let {keyframes: n} = t;
        return n.length > 2 ? $n : H.has(e) ? e.startsWith("scale") ? {
            type: "spring",
            stiffness: 550,
            damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        } : Un : Wn
    }
    ;
    const qn = function(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          , i = arguments.length > 4 ? arguments[4] : void 0
          , a = arguments.length > 5 ? arguments[5] : void 0;
        return o => {
            const s = p(r, e) || {}
              , l = s.delay || r.delay || 0;
            let {elapsed: u=0} = r;
            u -= B(l);
            let c = {
                keyframes: Array.isArray(n) ? n : [null, n],
                ease: "easeOut",
                velocity: t.getVelocity(),
                ...s,
                delay: -u,
                onUpdate: e => {
                    t.set(e),
                    s.onUpdate && s.onUpdate(e)
                }
                ,
                onComplete: () => {
                    o(),
                    s.onComplete && s.onComplete()
                }
                ,
                name: e,
                motionValue: t,
                element: a ? void 0 : i
            };
            (function(e) {
                let {when: t, delay: n, delayChildren: r, staggerChildren: i, staggerDirection: a, repeat: o, repeatType: s, repeatDelay: l, from: u, elapsed: c, ...d} = e;
                return !!Object.keys(d).length
            }
            )(s) || (c = {
                ...c,
                ...Hn(e, c)
            }),
            c.duration && (c.duration = B(c.duration)),
            c.repeatDelay && (c.repeatDelay = B(c.repeatDelay)),
            void 0 !== c.from && (c.keyframes[0] = c.from);
            let d = !1;
            if ((!1 === c.type || 0 === c.duration && !c.repeatDelay) && (c.duration = 0,
            0 === c.delay && (d = !0)),
            (be || Y) && (d = !0,
            c.duration = 0,
            c.delay = 0),
            d && !a && void 0 !== t.get()) {
                const e = Kt(c.keyframes, s);
                if (void 0 !== e)
                    return J.update(( () => {
                        c.onUpdate(e),
                        c.onComplete()
                    }
                    )),
                    new h([])
            }
            return !a && Bn.supports(c) ? new Bn(c) : new Fn(c)
        }
    };
    function Qn(e, t) {
        let {protectedKeys: n, needsAnimating: r} = e;
        const i = n.hasOwnProperty(t) && !0 !== r[t];
        return r[t] = !1,
        i
    }
    function Yn(e, t) {
        let {delay: n=0, transitionOverride: r, type: i} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        var a;
        let {transition: o=e.getDefaultTransition(), transitionEnd: s, ...l} = t;
        r && (o = r);
        const c = []
          , d = i && e.animationState && e.animationState.getState()[i];
        for (const u in l) {
            const t = e.getValue(u, null !== (a = e.latestValues[u]) && void 0 !== a ? a : null)
              , r = l[u];
            if (void 0 === r || d && Qn(d, u))
                continue;
            const i = {
                delay: n,
                ...p(o || {}, u)
            };
            let s = !1;
            if (window.MotionHandoffAnimation) {
                const t = ye(e);
                if (t) {
                    const e = window.MotionHandoffAnimation(t, u, J);
                    null !== e && (i.startTime = e,
                    s = !0)
                }
            }
            me(e, u),
            t.start(qn(u, t, r, e.shouldReduceMotion && q.has(u) ? {
                type: !1
            } : i, e, s));
            const f = t.animation;
            f && c.push(f)
        }
        return s && Promise.all(c).then(( () => {
            J.update(( () => {
                s && function(e, t) {
                    const n = u(e, t);
                    let {transitionEnd: r={}, transition: i={}, ...a} = n || {};
                    a = {
                        ...a,
                        ...r
                    };
                    for (const s in a)
                        he(e, s, (o = a[s],
                        Q(o) ? o[o.length - 1] || 0 : o));
                    var o
                }(e, s)
            }
            ))
        }
        )),
        c
    }
    function Kn(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        var r;
        const i = u(e, t, "exit" === n.type ? null === (r = e.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
        let {transition: a=e.getDefaultTransition() || {}} = i || {};
        n.transitionOverride && (a = n.transitionOverride);
        const o = i ? () => Promise.all(Yn(e, i, n)) : () => Promise.resolve()
          , s = e.variantChildren && e.variantChildren.size ? function() {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            const {delayChildren: i=0, staggerChildren: o, staggerDirection: s} = a;
            return function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                  , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1
                  , a = arguments.length > 5 ? arguments[5] : void 0;
                const o = []
                  , s = (e.variantChildren.size - 1) * r
                  , l = 1 === i ? function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) * r
                }
                : function() {
                    return s - (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) * r
                }
                ;
                return Array.from(e.variantChildren).sort(Xn).forEach(( (e, r) => {
                    e.notify("AnimationStart", t),
                    o.push(Kn(e, t, {
                        ...a,
                        delay: n + l(r)
                    }).then(( () => e.notify("AnimationComplete", t))))
                }
                )),
                Promise.all(o)
            }(e, t, i + r, o, s, n)
        }
        : () => Promise.resolve()
          , {when: l} = a;
        if (l) {
            const [e,t] = "beforeChildren" === l ? [o, s] : [s, o];
            return e().then(( () => t()))
        }
        return Promise.all([o(), s(n.delay)])
    }
    function Xn(e, t) {
        return e.sortNodePosition(t)
    }
    function Gn(e, t) {
        if (!Array.isArray(t))
            return !1;
        const n = t.length;
        if (n !== e.length)
            return !1;
        for (let r = 0; r < n; r++)
            if (t[r] !== e[r])
                return !1;
        return !0
    }
    function Zn(e) {
        return "string" === typeof e || Array.isArray(e)
    }
    const Jn = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
      , er = ["initial", ...Jn]
      , tr = er.length;
    function nr(e) {
        if (!e)
            return;
        if (!e.isControllingVariants) {
            const t = e.parent && nr(e.parent) || {};
            return void 0 !== e.props.initial && (t.initial = e.props.initial),
            t
        }
        const t = {};
        for (let n = 0; n < tr; n++) {
            const r = er[n]
              , i = e.props[r];
            (Zn(i) || !1 === i) && (t[r] = i)
        }
        return t
    }
    const rr = [...Jn].reverse()
      , ir = Jn.length;
    function ar(e) {
        return t => Promise.all(t.map((t => {
            let {animation: n, options: r} = t;
            return function(e, t) {
                let n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (e.notify("AnimationStart", t),
                Array.isArray(t)) {
                    const i = t.map((t => Kn(e, t, r)));
                    n = Promise.all(i)
                } else if ("string" === typeof t)
                    n = Kn(e, t, r);
                else {
                    const i = "function" === typeof t ? u(e, t, r.custom) : t;
                    n = Promise.all(Yn(e, i, r))
                }
                return n.then(( () => {
                    e.notify("AnimationComplete", t)
                }
                ))
            }(e, n, r)
        }
        )))
    }
    function or(e) {
        let t = ar(e)
          , n = ur()
          , r = !0;
        const i = t => (n, r) => {
            var i;
            const a = u(e, r, "exit" === t ? null === (i = e.presenceContext) || void 0 === i ? void 0 : i.custom : void 0);
            if (a) {
                const {transition: e, transitionEnd: t, ...r} = a;
                n = {
                    ...n,
                    ...r,
                    ...t
                }
            }
            return n
        }
        ;
        function a(a) {
            const {props: s} = e
              , l = nr(e.parent) || {}
              , c = []
              , d = new Set;
            let f = {}
              , h = 1 / 0;
            for (let t = 0; t < ir; t++) {
                const u = rr[t]
                  , p = n[u]
                  , m = void 0 !== s[u] ? s[u] : l[u]
                  , g = Zn(m)
                  , v = u === a ? p.isActive : null;
                !1 === v && (h = t);
                let y = m === l[u] && m !== s[u] && g;
                if (y && r && e.manuallyAnimateOnMount && (y = !1),
                p.protectedKeys = {
                    ...f
                },
                !p.isActive && null === v || !m && !p.prevProp || o(m) || "boolean" === typeof m)
                    continue;
                const b = sr(p.prevProp, m);
                let w = b || u === a && p.isActive && !y && g || t > h && g
                  , S = !1;
                const k = Array.isArray(m) ? m : [m];
                let x = k.reduce(i(u), {});
                !1 === v && (x = {});
                const {prevResolvedValues: P={}} = p
                  , E = {
                    ...P,
                    ...x
                }
                  , C = t => {
                    w = !0,
                    d.has(t) && (S = !0,
                    d.delete(t)),
                    p.needsAnimating[t] = !0;
                    const n = e.getValue(t);
                    n && (n.liveStyle = !1)
                }
                ;
                for (const e in E) {
                    const t = x[e]
                      , n = P[e];
                    if (f.hasOwnProperty(e))
                        continue;
                    let r = !1;
                    r = Q(t) && Q(n) ? !Gn(t, n) : t !== n,
                    r ? void 0 !== t && null !== t ? C(e) : d.add(e) : void 0 !== t && d.has(e) ? C(e) : p.protectedKeys[e] = !0
                }
                p.prevProp = m,
                p.prevResolvedValues = x,
                p.isActive && (f = {
                    ...f,
                    ...x
                }),
                r && e.blockInitialAnimation && (w = !1);
                w && (!(y && b) || S) && c.push(...k.map((e => ({
                    animation: e,
                    options: {
                        type: u
                    }
                }))))
            }
            if (d.size) {
                const t = {};
                if ("boolean" !== typeof s.initial) {
                    const n = u(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
                    n && n.transition && (t.transition = n.transition)
                }
                d.forEach((n => {
                    const r = e.getBaseTarget(n)
                      , i = e.getValue(n);
                    i && (i.liveStyle = !0),
                    t[n] = null !== r && void 0 !== r ? r : null
                }
                )),
                c.push({
                    animation: t
                })
            }
            let p = Boolean(c.length);
            return !r || !1 !== s.initial && s.initial !== s.animate || e.manuallyAnimateOnMount || (p = !1),
            r = !1,
            p ? t(c) : Promise.resolve()
        }
        return {
            animateChanges: a,
            setActive: function(t, r) {
                var i;
                if (n[t].isActive === r)
                    return Promise.resolve();
                null === (i = e.variantChildren) || void 0 === i || i.forEach((e => {
                    var n;
                    return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
                }
                )),
                n[t].isActive = r;
                const o = a(t);
                for (const e in n)
                    n[e].protectedKeys = {};
                return o
            },
            setAnimateFunction: function(n) {
                t = n(e)
            },
            getState: () => n,
            reset: () => {
                n = ur(),
                r = !0
            }
        }
    }
    function sr(e, t) {
        return "string" === typeof t ? t !== e : !!Array.isArray(t) && !Gn(t, e)
    }
    function lr() {
        return {
            isActive: arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }
    function ur() {
        return {
            animate: lr(!0),
            whileInView: lr(),
            whileHover: lr(),
            whileTap: lr(),
            whileDrag: lr(),
            whileFocus: lr(),
            exit: lr()
        }
    }
    class cr {
        constructor(e) {
            this.isMounted = !1,
            this.node = e
        }
        update() {}
    }
    let dr = 0;
    const fr = {
        animation: {
            Feature: class extends cr {
                constructor(e) {
                    super(e),
                    e.animationState || (e.animationState = or(e))
                }
                updateAnimationControlsSubscription() {
                    const {animate: e} = this.node.getProps();
                    o(e) && (this.unmountControls = e.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    const {animate: e} = this.node.getProps()
                      , {animate: t} = this.node.prevProps || {};
                    e !== t && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var e;
                    this.node.animationState.reset(),
                    null === (e = this.unmountControls) || void 0 === e || e.call(this)
                }
            }
        },
        exit: {
            Feature: class extends cr {
                constructor() {
                    super(...arguments),
                    this.id = dr++
                }
                update() {
                    if (!this.node.presenceContext)
                        return;
                    const {isPresent: e, onExitComplete: t} = this.node.presenceContext
                      , {isPresent: n} = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || e === n)
                        return;
                    const r = this.node.animationState.setActive("exit", !e);
                    t && !e && r.then(( () => {
                        t(this.id)
                    }
                    ))
                }
                mount() {
                    const {register: e, onExitComplete: t} = this.node.presenceContext || {};
                    t && t(this.id),
                    e && (this.unmount = e(this.id))
                }
                unmount() {}
            }
        }
    };
    function hr(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            passive: !0
        };
        return e.addEventListener(t, n, r),
        () => e.removeEventListener(t, n)
    }
    function pr(e) {
        return {
            point: {
                x: e.pageX,
                y: e.pageY
            }
        }
    }
    function mr(e, t, n, r) {
        return hr(e, t, (e => t => O(t) && e(t, pr(t)))(n), r)
    }
    const gr = (e, t) => Math.abs(e - t);
    class vr {
        constructor(e, t) {
            let {transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i=!1} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (this.startEvent = null,
            this.lastMoveEvent = null,
            this.lastMoveEventInfo = null,
            this.handlers = {},
            this.contextWindow = window,
            this.updatePoint = () => {
                if (!this.lastMoveEvent || !this.lastMoveEventInfo)
                    return;
                const e = wr(this.lastMoveEventInfo, this.history)
                  , t = null !== this.startEvent
                  , n = function(e, t) {
                    const n = gr(e.x, t.x)
                      , r = gr(e.y, t.y);
                    return Math.sqrt(n ** 2 + r ** 2)
                }(e.offset, {
                    x: 0,
                    y: 0
                }) >= 3;
                if (!t && !n)
                    return;
                const {point: r} = e
                  , {timestamp: i} = te;
                this.history.push({
                    ...r,
                    timestamp: i
                });
                const {onStart: a, onMove: o} = this.handlers;
                t || (a && a(this.lastMoveEvent, e),
                this.startEvent = this.lastMoveEvent),
                o && o(this.lastMoveEvent, e)
            }
            ,
            this.handlePointerMove = (e, t) => {
                this.lastMoveEvent = e,
                this.lastMoveEventInfo = yr(t, this.transformPagePoint),
                J.update(this.updatePoint, !0)
            }
            ,
            this.handlePointerUp = (e, t) => {
                this.end();
                const {onEnd: n, onSessionEnd: r, resumeAnimation: i} = this.handlers;
                if (this.dragSnapToOrigin && i && i(),
                !this.lastMoveEvent || !this.lastMoveEventInfo)
                    return;
                const a = wr("pointercancel" === e.type ? this.lastMoveEventInfo : yr(t, this.transformPagePoint), this.history);
                this.startEvent && n && n(e, a),
                r && r(e, a)
            }
            ,
            !O(e))
                return;
            this.dragSnapToOrigin = i,
            this.handlers = t,
            this.transformPagePoint = n,
            this.contextWindow = r || window;
            const a = yr(pr(e), this.transformPagePoint)
              , {point: o} = a
              , {timestamp: s} = te;
            this.history = [{
                ...o,
                timestamp: s
            }];
            const {onSessionStart: l} = t;
            l && l(e, wr(a, this.history)),
            this.removeListeners = sn(mr(this.contextWindow, "pointermove", this.handlePointerMove), mr(this.contextWindow, "pointerup", this.handlePointerUp), mr(this.contextWindow, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(e) {
            this.handlers = e
        }
        end() {
            this.removeListeners && this.removeListeners(),
            ee(this.updatePoint)
        }
    }
    function yr(e, t) {
        return t ? {
            point: t(e.point)
        } : e
    }
    function br(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }
    function wr(e, t) {
        let {point: n} = e;
        return {
            point: n,
            delta: br(n, kr(t)),
            offset: br(n, Sr(t)),
            velocity: xr(t, .1)
        }
    }
    function Sr(e) {
        return e[0]
    }
    function kr(e) {
        return e[e.length - 1]
    }
    function xr(e, t) {
        if (e.length < 2)
            return {
                x: 0,
                y: 0
            };
        let n = e.length - 1
          , r = null;
        const i = kr(e);
        for (; n >= 0 && (r = e[n],
        !(i.timestamp - r.timestamp > B(t))); )
            n--;
        if (!r)
            return {
                x: 0,
                y: 0
            };
        const a = U(i.timestamp - r.timestamp);
        if (0 === a)
            return {
                x: 0,
                y: 0
            };
        const o = {
            x: (i.x - r.x) / a,
            y: (i.y - r.y) / a
        };
        return o.x === 1 / 0 && (o.x = 0),
        o.y === 1 / 0 && (o.y = 0),
        o
    }
    function Pr(e) {
        return e && "object" === typeof e && Object.prototype.hasOwnProperty.call(e, "current")
    }
    function Er(e) {
        return e.max - e.min
    }
    function Cr(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
        e.origin = r,
        e.originPoint = Zt(t.min, t.max, e.origin),
        e.scale = Er(n) / Er(t),
        e.translate = Zt(n.min, n.max, e.origin) - e.originPoint,
        (e.scale >= .9999 && e.scale <= 1.0001 || isNaN(e.scale)) && (e.scale = 1),
        (e.translate >= -.01 && e.translate <= .01 || isNaN(e.translate)) && (e.translate = 0)
    }
    function Tr(e, t, n, r) {
        Cr(e.x, t.x, n.x, r ? r.originX : void 0),
        Cr(e.y, t.y, n.y, r ? r.originY : void 0)
    }
    function Ar(e, t, n) {
        e.min = n.min + t.min,
        e.max = e.min + Er(t)
    }
    function Mr(e, t, n) {
        e.min = t.min - n.min,
        e.max = e.min + Er(t)
    }
    function Dr(e, t, n) {
        Mr(e.x, t.x, n.x),
        Mr(e.y, t.y, n.y)
    }
    function Lr(e, t, n) {
        return {
            min: void 0 !== t ? e.min + t : void 0,
            max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
        }
    }
    function Rr(e, t) {
        let n = t.min - e.min
          , r = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
        {
            min: n,
            max: r
        }
    }
    const Nr = .35;
    function Or(e, t, n) {
        return {
            min: _r(e, t),
            max: _r(e, n)
        }
    }
    function _r(e, t) {
        return "number" === typeof e ? e : e[t] || 0
    }
    const zr = () => ({
        x: {
            min: 0,
            max: 0
        },
        y: {
            min: 0,
            max: 0
        }
    });
    function Fr(e) {
        return [e("x"), e("y")]
    }
    function Vr(e) {
        let {top: t, left: n, right: r, bottom: i} = e;
        return {
            x: {
                min: n,
                max: r
            },
            y: {
                min: t,
                max: i
            }
        }
    }
    function Ir(e) {
        return void 0 === e || 1 === e
    }
    function jr(e) {
        let {scale: t, scaleX: n, scaleY: r} = e;
        return !Ir(t) || !Ir(n) || !Ir(r)
    }
    function Br(e) {
        return jr(e) || Ur(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
    }
    function Ur(e) {
        return $r(e.x) || $r(e.y)
    }
    function $r(e) {
        return e && "0%" !== e
    }
    function Wr(e, t, n) {
        return n + t * (e - n)
    }
    function Hr(e, t, n, r, i) {
        return void 0 !== i && (e = Wr(e, i, r)),
        Wr(e, n, r) + t
    }
    function qr(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
          , r = arguments.length > 3 ? arguments[3] : void 0
          , i = arguments.length > 4 ? arguments[4] : void 0;
        e.min = Hr(e.min, t, n, r, i),
        e.max = Hr(e.max, t, n, r, i)
    }
    function Qr(e, t) {
        let {x: n, y: r} = t;
        qr(e.x, n.translate, n.scale, n.originPoint),
        qr(e.y, r.translate, r.scale, r.originPoint)
    }
    const Yr = .999999999999
      , Kr = 1.0000000000001;
    function Xr(e, t) {
        e.min = e.min + t,
        e.max = e.max + t
    }
    function Gr(e, t, n, r) {
        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5;
        qr(e, t, n, Zt(e.min, e.max, i), r)
    }
    function Zr(e, t) {
        Gr(e.x, t.x, t.scaleX, t.scale, t.originX),
        Gr(e.y, t.y, t.scaleY, t.scale, t.originY)
    }
    function Jr(e, t) {
        return Vr(function(e, t) {
            if (!t)
                return e;
            const n = t({
                x: e.left,
                y: e.top
            })
              , r = t({
                x: e.right,
                y: e.bottom
            });
            return {
                top: n.y,
                left: n.x,
                bottom: r.y,
                right: r.x
            }
        }(e.getBoundingClientRect(), t))
    }
    const ei = e => {
        let {current: t} = e;
        return t ? t.ownerDocument.defaultView : null
    }
      , ti = new WeakMap;
    class ni {
        constructor(e) {
            this.openDragLock = null,
            this.isDragging = !1,
            this.currentDirection = null,
            this.originPoint = {
                x: 0,
                y: 0
            },
            this.constraints = !1,
            this.hasMutatedConstraints = !1,
            this.elastic = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            },
            this.visualElement = e
        }
        start(e) {
            let {snapToCursor: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const {presenceContext: n} = this.visualElement;
            if (n && !1 === n.isPresent)
                return;
            const {dragSnapToOrigin: r} = this.getProps();
            this.panSession = new vr(e,{
                onSessionStart: e => {
                    const {dragSnapToOrigin: n} = this.getProps();
                    n ? this.pauseAnimation() : this.stopAnimation(),
                    t && this.snapToCursor(pr(e).point)
                }
                ,
                onStart: (e, t) => {
                    const {drag: n, dragPropagation: r, onDragStart: i} = this.getProps();
                    if (n && !r && (this.openDragLock && this.openDragLock(),
                    this.openDragLock = "x" === (a = n) || "y" === a ? M[a] ? null : (M[a] = !0,
                    () => {
                        M[a] = !1
                    }
                    ) : M.x || M.y ? null : (M.x = M.y = !0,
                    () => {
                        M.x = M.y = !1
                    }
                    ),
                    !this.openDragLock))
                        return;
                    var a;
                    this.isDragging = !0,
                    this.currentDirection = null,
                    this.resolveConstraints(),
                    this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                    this.visualElement.projection.target = void 0),
                    Fr((e => {
                        let t = this.getAxisMotionValue(e).get() || 0;
                        if (qe.test(t)) {
                            const {projection: n} = this.visualElement;
                            if (n && n.layout) {
                                const r = n.layout.layoutBox[e];
                                if (r) {
                                    t = Er(r) * (parseFloat(t) / 100)
                                }
                            }
                        }
                        this.originPoint[e] = t
                    }
                    )),
                    i && J.postRender(( () => i(e, t))),
                    me(this.visualElement, "transform");
                    const {animationState: o} = this.visualElement;
                    o && o.setActive("whileDrag", !0)
                }
                ,
                onMove: (e, t) => {
                    const {dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a} = this.getProps();
                    if (!n && !this.openDragLock)
                        return;
                    const {offset: o} = t;
                    if (r && null === this.currentDirection)
                        return this.currentDirection = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10
                              , n = null;
                            Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x");
                            return n
                        }(o),
                        void (null !== this.currentDirection && i && i(this.currentDirection));
                    this.updateAxis("x", t.point, o),
                    this.updateAxis("y", t.point, o),
                    this.visualElement.render(),
                    a && a(e, t)
                }
                ,
                onSessionEnd: (e, t) => this.stop(e, t),
                resumeAnimation: () => Fr((e => {
                    var t;
                    return "paused" === this.getAnimationState(e) && (null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.play())
                }
                ))
            },{
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: r,
                contextWindow: ei(this.visualElement)
            })
        }
        stop(e, t) {
            const n = this.isDragging;
            if (this.cancel(),
            !n)
                return;
            const {velocity: r} = t;
            this.startAnimation(r);
            const {onDragEnd: i} = this.getProps();
            i && J.postRender(( () => i(e, t)))
        }
        cancel() {
            this.isDragging = !1;
            const {projection: e, animationState: t} = this.visualElement;
            e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            this.panSession = void 0;
            const {dragPropagation: n} = this.getProps();
            !n && this.openDragLock && (this.openDragLock(),
            this.openDragLock = null),
            t && t.setActive("whileDrag", !1)
        }
        updateAxis(e, t, n) {
            const {drag: r} = this.getProps();
            if (!n || !ri(e, r, this.currentDirection))
                return;
            const i = this.getAxisMotionValue(e);
            let a = this.originPoint[e] + n[e];
            this.constraints && this.constraints[e] && (a = function(e, t, n) {
                let {min: r, max: i} = t;
                return void 0 !== r && e < r ? e = n ? Zt(r, e, n.min) : Math.max(e, r) : void 0 !== i && e > i && (e = n ? Zt(i, e, n.max) : Math.min(e, i)),
                e
            }(a, this.constraints[e], this.elastic[e])),
            i.set(a)
        }
        resolveConstraints() {
            var e;
            const {dragConstraints: t, dragElastic: n} = this.getProps()
              , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout
              , i = this.constraints;
            t && Pr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !r) && function(e, t) {
                let {top: n, left: r, bottom: i, right: a} = t;
                return {
                    x: Lr(e.x, r, a),
                    y: Lr(e.y, n, i)
                }
            }(r.layoutBox, t),
            this.elastic = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nr;
                return !1 === e ? e = 0 : !0 === e && (e = Nr),
                {
                    x: Or(e, "left", "right"),
                    y: Or(e, "top", "bottom")
                }
            }(n),
            i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Fr((e => {
                !1 !== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                    const n = {};
                    return void 0 !== t.min && (n.min = t.min - e.min),
                    void 0 !== t.max && (n.max = t.max - e.min),
                    n
                }(r.layoutBox[e], this.constraints[e]))
            }
            ))
        }
        resolveRefConstraints() {
            const {dragConstraints: e, onMeasureDragConstraints: t} = this.getProps();
            if (!e || !Pr(e))
                return !1;
            const n = e.current;
            Nt(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
            const {projection: r} = this.visualElement;
            if (!r || !r.layout)
                return !1;
            const i = function(e, t, n) {
                const r = Jr(e, n)
                  , {scroll: i} = t;
                return i && (Xr(r.x, i.offset.x),
                Xr(r.y, i.offset.y)),
                r
            }(n, r.root, this.visualElement.getTransformPagePoint());
            let a = function(e, t) {
                return {
                    x: Rr(e.x, t.x),
                    y: Rr(e.y, t.y)
                }
            }(r.layout.layoutBox, i);
            if (t) {
                const e = t(function(e) {
                    let {x: t, y: n} = e;
                    return {
                        top: n.min,
                        right: t.max,
                        bottom: n.max,
                        left: t.min
                    }
                }(a));
                this.hasMutatedConstraints = !!e,
                e && (a = Vr(e))
            }
            return a
        }
        startAnimation(e) {
            const {drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o} = this.getProps()
              , s = this.constraints || {}
              , l = Fr((o => {
                if (!ri(o, t, this.currentDirection))
                    return;
                let l = s && s[o] || {};
                a && (l = {
                    min: 0,
                    max: 0
                });
                const u = r ? 200 : 1e6
                  , c = r ? 40 : 1e7
                  , d = {
                    type: "inertia",
                    velocity: n ? e[o] : 0,
                    bounceStiffness: u,
                    bounceDamping: c,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...i,
                    ...l
                };
                return this.startAxisValueAnimation(o, d)
            }
            ));
            return Promise.all(l).then(o)
        }
        startAxisValueAnimation(e, t) {
            const n = this.getAxisMotionValue(e);
            return me(this.visualElement, e),
            n.start(qn(e, n, 0, t, this.visualElement, !1))
        }
        stopAnimation() {
            Fr((e => this.getAxisMotionValue(e).stop()))
        }
        pauseAnimation() {
            Fr((e => {
                var t;
                return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.pause()
            }
            ))
        }
        getAnimationState(e) {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.state
        }
        getAxisMotionValue(e) {
            const t = `_drag${e.toUpperCase()}`
              , n = this.visualElement.getProps()
              , r = n[t];
            return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
        }
        snapToCursor(e) {
            Fr((t => {
                const {drag: n} = this.getProps();
                if (!ri(t, n, this.currentDirection))
                    return;
                const {projection: r} = this.visualElement
                  , i = this.getAxisMotionValue(t);
                if (r && r.layout) {
                    const {min: n, max: a} = r.layout.layoutBox[t];
                    i.set(e[t] - Zt(n, a, .5))
                }
            }
            ))
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current)
                return;
            const {drag: e, dragConstraints: t} = this.getProps()
              , {projection: n} = this.visualElement;
            if (!Pr(t) || !n || !this.constraints)
                return;
            this.stopAnimation();
            const r = {
                x: 0,
                y: 0
            };
            Fr((e => {
                const t = this.getAxisMotionValue(e);
                if (t && !1 !== this.constraints) {
                    const n = t.get();
                    r[e] = function(e, t) {
                        let n = .5;
                        const r = Er(e)
                          , i = Er(t);
                        return i > r ? n = x(t.min, t.max - r, e.min) : r > i && (n = x(e.min, e.max - i, t.min)),
                        Re(0, 1, n)
                    }({
                        min: n,
                        max: n
                    }, this.constraints[e])
                }
            }
            ));
            const {transformTemplate: i} = this.visualElement.getProps();
            this.visualElement.current.style.transform = i ? i({}, "") : "none",
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            Fr((t => {
                if (!ri(t, e, null))
                    return;
                const n = this.getAxisMotionValue(t)
                  , {min: i, max: a} = this.constraints[t];
                n.set(Zt(i, a, r[t]))
            }
            ))
        }
        addListeners() {
            if (!this.visualElement.current)
                return;
            ti.set(this.visualElement, this);
            const e = mr(this.visualElement.current, "pointerdown", (e => {
                const {drag: t, dragListener: n=!0} = this.getProps();
                t && n && this.start(e)
            }
            ))
              , t = () => {
                const {dragConstraints: e} = this.getProps();
                Pr(e) && e.current && (this.constraints = this.resolveRefConstraints())
            }
              , {projection: n} = this.visualElement
              , r = n.addEventListener("measure", t);
            n && !n.layout && (n.root && n.root.updateScroll(),
            n.updateLayout()),
            J.read(t);
            const i = hr(window, "resize", ( () => this.scalePositionWithinConstraints()))
              , a = n.addEventListener("didUpdate", (e => {
                let {delta: t, hasLayoutChanged: n} = e;
                this.isDragging && n && (Fr((e => {
                    const n = this.getAxisMotionValue(e);
                    n && (this.originPoint[e] += t[e].translate,
                    n.set(n.get() + t[e].translate))
                }
                )),
                this.visualElement.render())
            }
            ));
            return () => {
                i(),
                e(),
                r(),
                a && a()
            }
        }
        getProps() {
            const e = this.visualElement.getProps()
              , {drag: t=!1, dragDirectionLock: n=!1, dragPropagation: r=!1, dragConstraints: i=!1, dragElastic: a=Nr, dragMomentum: o=!0} = e;
            return {
                ...e,
                drag: t,
                dragDirectionLock: n,
                dragPropagation: r,
                dragConstraints: i,
                dragElastic: a,
                dragMomentum: o
            }
        }
    }
    function ri(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e)
    }
    const ii = e => (t, n) => {
        e && J.postRender(( () => e(t, n)))
    }
    ;
    var ai = n(579);
    const oi = (0,
    r.createContext)(null);
    const si = (0,
    r.createContext)({})
      , li = (0,
    r.createContext)({})
      , ui = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };
    function ci(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
    }
    const di = {
        correct: (e, t) => {
            if (!t.target)
                return e;
            if ("string" === typeof e) {
                if (!Qe.test(e))
                    return e;
                e = parseFloat(e)
            }
            return `${ci(e, t.target.x)}% ${ci(e, t.target.y)}%`
        }
    }
      , fi = {
        correct: (e, t) => {
            let {treeScale: n, projectionDelta: r} = t;
            const i = e
              , a = st.parse(e);
            if (a.length > 5)
                return i;
            const o = st.createTransformer(e)
              , s = "number" !== typeof a[0] ? 1 : 0
              , l = r.x.scale * n.x
              , u = r.y.scale * n.y;
            a[0 + s] /= l,
            a[1 + s] /= u;
            const c = Zt(l, u, .5);
            return "number" === typeof a[2 + s] && (a[2 + s] /= c),
            "number" === typeof a[3 + s] && (a[3 + s] /= c),
            o(a)
        }
    }
      , hi = {};
    const {schedule: pi, cancel: mi} = Z(queueMicrotask, !1);
    class gi extends r.Component {
        componentDidMount() {
            const {visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r} = this.props
              , {projection: i} = e;
            !function(e) {
                for (const t in e)
                    hi[t] = e[t],
                    zt(t) && (hi[t].isCSSVariable = !0)
            }(yi),
            i && (t.group && t.group.add(i),
            n && n.register && r && n.register(i),
            i.root.didUpdate(),
            i.addEventListener("animationComplete", ( () => {
                this.safeToRemove()
            }
            )),
            i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove()
            })),
            ui.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
            const {layoutDependency: t, visualElement: n, drag: r, isPresent: i} = this.props
              , a = n.projection;
            return a ? (a.isPresent = i,
            r || e.layoutDependency !== t || void 0 === t ? a.willUpdate() : this.safeToRemove(),
            e.isPresent !== i && (i ? a.promote() : a.relegate() || J.postRender(( () => {
                const e = a.getStack();
                e && e.members.length || this.safeToRemove()
            }
            ))),
            null) : null
        }
        componentDidUpdate() {
            const {projection: e} = this.props.visualElement;
            e && (e.root.didUpdate(),
            pi.postRender(( () => {
                !e.currentAnimation && e.isLead() && this.safeToRemove()
            }
            )))
        }
        componentWillUnmount() {
            const {visualElement: e, layoutGroup: t, switchLayoutGroup: n} = this.props
              , {projection: r} = e;
            r && (r.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(r),
            n && n.deregister && n.deregister(r))
        }
        safeToRemove() {
            const {safeToRemove: e} = this.props;
            e && e()
        }
        render() {
            return null
        }
    }
    function vi(e) {
        const [t,n] = function() {
            let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            const t = (0,
            r.useContext)(oi);
            if (null === t)
                return [!0, null];
            const {isPresent: n, onExitComplete: i, register: a} = t
              , o = (0,
            r.useId)();
            (0,
            r.useEffect)(( () => {
                e && a(o)
            }
            ), [e]);
            const s = (0,
            r.useCallback)(( () => e && i && i(o)), [o, i, e]);
            return !n && i ? [!1, s] : [!0]
        }()
          , i = (0,
        r.useContext)(si);
        return (0,
        ai.jsx)(gi, {
            ...e,
            layoutGroup: i,
            switchLayoutGroup: (0,
            r.useContext)(li),
            isPresent: t,
            safeToRemove: n
        })
    }
    const yi = {
        borderRadius: {
            ...di,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: di,
        borderTopRightRadius: di,
        borderBottomLeftRadius: di,
        borderBottomRightRadius: di,
        boxShadow: fi
    };
    const bi = (e, t) => e.depth - t.depth;
    class wi {
        constructor() {
            this.children = [],
            this.isDirty = !1
        }
        add(e) {
            oe(this.children, e),
            this.isDirty = !0
        }
        remove(e) {
            se(this.children, e),
            this.isDirty = !0
        }
        forEach(e) {
            this.isDirty && this.children.sort(bi),
            this.isDirty = !1,
            this.children.forEach(e)
        }
    }
    function Si(e, t) {
        const n = ae.now()
          , r = i => {
            let {timestamp: a} = i;
            const o = a - n;
            o >= t && (ee(r),
            e(o - t))
        }
        ;
        return J.read(r, !0),
        () => ee(r)
    }
    function ki(e) {
        const t = pe(e) ? e.get() : e;
        return n = t,
        Boolean(n && "object" === typeof n && n.mix && n.toValue) ? t.toValue() : t;
        var n
    }
    const xi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
      , Pi = xi.length
      , Ei = e => "string" === typeof e ? parseFloat(e) : e
      , Ci = e => "number" === typeof e || Qe.test(e);
    function Ti(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius
    }
    const Ai = Di(0, .5, Me)
      , Mi = Di(.5, .95, $);
    function Di(e, t, n) {
        return r => r < e ? 0 : r > t ? 1 : n(x(e, t, r))
    }
    function Li(e, t) {
        e.min = t.min,
        e.max = t.max
    }
    function Ri(e, t) {
        Li(e.x, t.x),
        Li(e.y, t.y)
    }
    function Ni(e, t) {
        e.translate = t.translate,
        e.scale = t.scale,
        e.originPoint = t.originPoint,
        e.origin = t.origin
    }
    function Oi(e, t, n, r, i) {
        return e = Wr(e -= t, 1 / n, r),
        void 0 !== i && (e = Wr(e, 1 / i, r)),
        e
    }
    function _i(e, t, n, r, i) {
        let[a,o,s] = n;
        !function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5
              , i = arguments.length > 4 ? arguments[4] : void 0
              , a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e
              , o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e;
            qe.test(t) && (t = parseFloat(t),
            t = Zt(o.min, o.max, t / 100) - o.min);
            if ("number" !== typeof t)
                return;
            let s = Zt(a.min, a.max, r);
            e === a && (s -= t),
            e.min = Oi(e.min, t, n, s, i),
            e.max = Oi(e.max, t, n, s, i)
        }(e, t[a], t[o], t[s], t.scale, r, i)
    }
    const zi = ["x", "scaleX", "originX"]
      , Fi = ["y", "scaleY", "originY"];
    function Vi(e, t, n, r) {
        _i(e.x, t, zi, n ? n.x : void 0, r ? r.x : void 0),
        _i(e.y, t, Fi, n ? n.y : void 0, r ? r.y : void 0)
    }
    function Ii(e) {
        return 0 === e.translate && 1 === e.scale
    }
    function ji(e) {
        return Ii(e.x) && Ii(e.y)
    }
    function Bi(e, t) {
        return e.min === t.min && e.max === t.max
    }
    function Ui(e, t) {
        return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
    }
    function $i(e, t) {
        return Ui(e.x, t.x) && Ui(e.y, t.y)
    }
    function Wi(e) {
        return Er(e.x) / Er(e.y)
    }
    function Hi(e, t) {
        return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
    }
    class qi {
        constructor() {
            this.members = []
        }
        add(e) {
            oe(this.members, e),
            e.scheduleRender()
        }
        remove(e) {
            if (se(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead) {
                const e = this.members[this.members.length - 1];
                e && this.promote(e)
            }
        }
        relegate(e) {
            const t = this.members.findIndex((t => e === t));
            if (0 === t)
                return !1;
            let n;
            for (let r = t; r >= 0; r--) {
                const e = this.members[r];
                if (!1 !== e.isPresent) {
                    n = e;
                    break
                }
            }
            return !!n && (this.promote(n),
            !0)
        }
        promote(e, t) {
            const n = this.lead;
            if (e !== n && (this.prevLead = n,
            this.lead = e,
            e.show(),
            n)) {
                n.instance && n.scheduleRender(),
                e.scheduleRender(),
                e.resumeFrom = n,
                t && (e.resumeFrom.preserveOpacity = !0),
                n.snapshot && (e.snapshot = n.snapshot,
                e.snapshot.latestValues = n.animationValues || n.latestValues),
                e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                const {crossfade: r} = e.options;
                !1 === r && n.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach((e => {
                const {options: t, resumingFrom: n} = e;
                t.onExitComplete && t.onExitComplete(),
                n && n.options.onExitComplete && n.options.onExitComplete()
            }
            ))
        }
        scheduleRender() {
            this.members.forEach((e => {
                e.instance && e.scheduleRender(!1)
            }
            ))
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
    }
    const Qi = {
        nodes: 0,
        calculatedTargetDeltas: 0,
        calculatedProjections: 0
    }
      , Yi = ["", "X", "Y", "Z"]
      , Ki = {
        visibility: "hidden"
    };
    let Xi = 0;
    function Gi(e, t, n, r) {
        const {latestValues: i} = t;
        i[e] && (n[e] = i[e],
        t.setStaticValue(e, 0),
        r && (r[e] = 0))
    }
    function Zi(e) {
        if (e.hasCheckedOptimisedAppear = !0,
        e.root === e)
            return;
        const {visualElement: t} = e.options;
        if (!t)
            return;
        const n = ye(t);
        if (window.MotionHasOptimisedAnimation(n, "transform")) {
            const {layout: t, layoutId: r} = e.options;
            window.MotionCancelOptimisedAnimation(n, "transform", J, !(t || r))
        }
        const {parent: r} = e;
        r && !r.hasCheckedOptimisedAppear && Zi(r)
    }
    function Ji(e) {
        let {attachResizeListener: t, defaultParent: n, measureScroll: r, checkIsScrollRoot: i, resetTransform: a} = e;
        return class {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === n || void 0 === n ? void 0 : n();
                this.id = Xi++,
                this.animationId = 0,
                this.children = new Set,
                this.options = {},
                this.isTreeAnimating = !1,
                this.isAnimationBlocked = !1,
                this.isLayoutDirty = !1,
                this.isProjectionDirty = !1,
                this.isSharedProjectionDirty = !1,
                this.isTransformDirty = !1,
                this.updateManuallyBlocked = !1,
                this.updateBlockedByResize = !1,
                this.isUpdating = !1,
                this.isSVG = !1,
                this.needsReset = !1,
                this.shouldResetTransform = !1,
                this.hasCheckedOptimisedAppear = !1,
                this.treeScale = {
                    x: 1,
                    y: 1
                },
                this.eventHandlers = new Map,
                this.hasTreeAnimated = !1,
                this.updateScheduled = !1,
                this.scheduleUpdate = () => this.update(),
                this.projectionUpdateScheduled = !1,
                this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1,
                    this.clearAllSnapshots())
                }
                ,
                this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1,
                    G.value && (Qi.nodes = Qi.calculatedTargetDeltas = Qi.calculatedProjections = 0),
                    this.nodes.forEach(na),
                    this.nodes.forEach(ua),
                    this.nodes.forEach(ca),
                    this.nodes.forEach(ra),
                    G.addProjectionMetrics && G.addProjectionMetrics(Qi)
                }
                ,
                this.resolvedRelativeTargetAt = 0,
                this.hasProjected = !1,
                this.isVisible = !0,
                this.animationProgress = 0,
                this.sharedNodes = new Map,
                this.latestValues = e,
                this.root = t ? t.root || t : this,
                this.path = t ? [...t.path, t] : [],
                this.parent = t,
                this.depth = t ? t.depth + 1 : 0;
                for (let n = 0; n < this.path.length; n++)
                    this.path[n].shouldResetTransform = !0;
                this.root === this && (this.nodes = new wi)
            }
            addEventListener(e, t) {
                return this.eventHandlers.has(e) || this.eventHandlers.set(e, new le),
                this.eventHandlers.get(e).add(t)
            }
            notifyListeners(e) {
                const t = this.eventHandlers.get(e);
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                    r[i - 1] = arguments[i];
                t && t.notify(...r)
            }
            hasListeners(e) {
                return this.eventHandlers.has(e)
            }
            mount(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root.hasTreeAnimated;
                if (this.instance)
                    return;
                var r;
                this.isSVG = (r = e)instanceof SVGElement && "svg" !== r.tagName,
                this.instance = e;
                const {layoutId: i, layout: a, visualElement: o} = this.options;
                if (o && !o.current && o.mount(e),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                n && (a || i) && (this.isLayoutDirty = !0),
                t) {
                    let n;
                    const r = () => this.root.updateBlockedByResize = !1;
                    t(e, ( () => {
                        this.root.updateBlockedByResize = !0,
                        n && n(),
                        n = Si(r, 250),
                        ui.hasAnimatedSinceResize && (ui.hasAnimatedSinceResize = !1,
                        this.nodes.forEach(la))
                    }
                    ))
                }
                i && this.root.registerSharedNode(i, this),
                !1 !== this.options.animate && o && (i || a) && this.addEventListener("didUpdate", (e => {
                    let {delta: t, hasLayoutChanged: n, hasRelativeLayoutChanged: r, layout: i} = e;
                    if (this.isTreeAnimationBlocked())
                        return this.target = void 0,
                        void (this.relativeTarget = void 0);
                    const a = this.options.transition || o.getDefaultTransition() || ga
                      , {onLayoutAnimationStart: s, onLayoutAnimationComplete: l} = o.getProps()
                      , u = !this.targetLayout || !$i(this.targetLayout, i)
                      , c = !n && r;
                    if (this.options.layoutRoot || this.resumeFrom || c || n && (u || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                        this.resumingFrom.resumingFrom = void 0),
                        this.setAnimationOrigin(t, c);
                        const e = {
                            ...p(a, "layout"),
                            onPlay: s,
                            onComplete: l
                        };
                        (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                        e.type = !1),
                        this.startAnimation(e)
                    } else
                        n || la(this),
                        this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = i
                }
                ))
            }
            unmount() {
                this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
                const e = this.getStack();
                e && e.remove(this),
                this.parent && this.parent.children.delete(this),
                this.instance = void 0,
                ee(this.updateProjection)
            }
            blockUpdate() {
                this.updateManuallyBlocked = !0
            }
            unblockUpdate() {
                this.updateManuallyBlocked = !1
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize
            }
            isTreeAnimationBlocked() {
                return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
            }
            startUpdate() {
                this.isUpdateBlocked() || (this.isUpdating = !0,
                this.nodes && this.nodes.forEach(da),
                this.animationId++)
            }
            getTransformTemplate() {
                const {visualElement: e} = this.options;
                return e && e.getProps().transformTemplate
            }
            willUpdate() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (this.root.hasTreeAnimated = !0,
                this.root.isUpdateBlocked())
                    return void (this.options.onExitComplete && this.options.onExitComplete());
                if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Zi(this),
                !this.root.isUpdating && this.root.startUpdate(),
                this.isLayoutDirty)
                    return;
                this.isLayoutDirty = !0;
                for (let i = 0; i < this.path.length; i++) {
                    const e = this.path[i];
                    e.shouldResetTransform = !0,
                    e.updateScroll("snapshot"),
                    e.options.layoutRoot && e.willUpdate(!1)
                }
                const {layoutId: t, layout: n} = this.options;
                if (void 0 === t && !n)
                    return;
                const r = this.getTransformTemplate();
                this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0,
                this.updateSnapshot(),
                e && this.notifyListeners("willUpdate")
            }
            update() {
                this.updateScheduled = !1;
                if (this.isUpdateBlocked())
                    return this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    void this.nodes.forEach(aa);
                this.isUpdating || this.nodes.forEach(oa),
                this.isUpdating = !1,
                this.nodes.forEach(sa),
                this.nodes.forEach(ea),
                this.nodes.forEach(ta),
                this.clearAllSnapshots();
                const e = ae.now();
                te.delta = Re(0, 1e3 / 60, e - te.timestamp),
                te.timestamp = e,
                te.isProcessing = !0,
                ne.update.process(te),
                ne.preRender.process(te),
                ne.render.process(te),
                te.isProcessing = !1
            }
            didUpdate() {
                this.updateScheduled || (this.updateScheduled = !0,
                pi.read(this.scheduleUpdate))
            }
            clearAllSnapshots() {
                this.nodes.forEach(ia),
                this.sharedNodes.forEach(fa)
            }
            scheduleUpdateProjection() {
                this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                J.preRender(this.updateProjection, !1, !0))
            }
            scheduleCheckAfterUnmount() {
                J.postRender(( () => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                }
                ))
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure(),
                !this.snapshot || Er(this.snapshot.measuredBox.x) || Er(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
            }
            updateLayout() {
                if (!this.instance)
                    return;
                if (this.updateScroll(),
                (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty)
                    return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let n = 0; n < this.path.length; n++) {
                        this.path[n].updateScroll()
                    }
                const e = this.layout;
                this.layout = this.measure(!1),
                this.layoutCorrected = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                },
                this.isLayoutDirty = !1,
                this.projectionDelta = void 0,
                this.notifyListeners("measure", this.layout.layoutBox);
                const {visualElement: t} = this.options;
                t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
            }
            updateScroll() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "measure"
                  , t = Boolean(this.options.layoutScroll && this.instance);
                if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1),
                t) {
                    const t = i(this.instance);
                    this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: t,
                        offset: r(this.instance),
                        wasRoot: this.scroll ? this.scroll.isRoot : t
                    }
                }
            }
            resetTransform() {
                if (!a)
                    return;
                const e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                  , t = this.projectionDelta && !ji(this.projectionDelta)
                  , n = this.getTransformTemplate()
                  , r = n ? n(this.latestValues, "") : void 0
                  , i = r !== this.prevTransformTemplateValue;
                e && (t || Br(this.latestValues) || i) && (a(this.instance, r),
                this.shouldResetTransform = !1,
                this.scheduleRender())
            }
            measure() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                const t = this.measurePageBox();
                let n = this.removeElementScroll(t);
                var r;
                return e && (n = this.removeTransform(n)),
                ba((r = n).x),
                ba(r.y),
                {
                    animationId: this.root.animationId,
                    measuredBox: t,
                    layoutBox: n,
                    latestValues: {},
                    source: this.id
                }
            }
            measurePageBox() {
                var e;
                const {visualElement: t} = this.options;
                if (!t)
                    return {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                const n = t.measureViewportBox();
                if (!((null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) || this.path.some(Sa))) {
                    const {scroll: e} = this.root;
                    e && (Xr(n.x, e.offset.x),
                    Xr(n.y, e.offset.y))
                }
                return n
            }
            removeElementScroll(e) {
                var t;
                const n = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                };
                if (Ri(n, e),
                null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
                    return n;
                for (let r = 0; r < this.path.length; r++) {
                    const t = this.path[r]
                      , {scroll: i, options: a} = t;
                    t !== this.root && i && a.layoutScroll && (i.wasRoot && Ri(n, e),
                    Xr(n.x, i.offset.x),
                    Xr(n.y, i.offset.y))
                }
                return n
            }
            applyTransform(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const n = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                };
                Ri(n, e);
                for (let r = 0; r < this.path.length; r++) {
                    const e = this.path[r];
                    !t && e.options.layoutScroll && e.scroll && e !== e.root && Zr(n, {
                        x: -e.scroll.offset.x,
                        y: -e.scroll.offset.y
                    }),
                    Br(e.latestValues) && Zr(n, e.latestValues)
                }
                return Br(this.latestValues) && Zr(n, this.latestValues),
                n
            }
            removeTransform(e) {
                const t = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                };
                Ri(t, e);
                for (let n = 0; n < this.path.length; n++) {
                    const e = this.path[n];
                    if (!e.instance)
                        continue;
                    if (!Br(e.latestValues))
                        continue;
                    jr(e.latestValues) && e.updateSnapshot();
                    const r = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    Ri(r, e.measurePageBox()),
                    Vi(t, e.latestValues, e.snapshot ? e.snapshot.layoutBox : void 0, r)
                }
                return Br(this.latestValues) && Vi(t, this.latestValues),
                t
            }
            setTargetDelta(e) {
                this.targetDelta = e,
                this.root.scheduleUpdateProjection(),
                this.isProjectionDirty = !0
            }
            setOptions(e) {
                this.options = {
                    ...this.options,
                    ...e,
                    crossfade: void 0 === e.crossfade || e.crossfade
                }
            }
            clearMeasurements() {
                this.scroll = void 0,
                this.layout = void 0,
                this.snapshot = void 0,
                this.prevTransformTemplateValue = void 0,
                this.targetDelta = void 0,
                this.target = void 0,
                this.isLayoutDirty = !1
            }
            forceRelativeParentToResolveTarget() {
                this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== te.timestamp && this.relativeParent.resolveTargetDelta(!0)
            }
            resolveTargetDelta() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                var t;
                const n = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty),
                this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
                this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
                const r = Boolean(this.resumingFrom) || this !== n;
                if (!(e || r && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                    return;
                const {layout: i, layoutId: a} = this.options;
                if (this.layout && (i || a)) {
                    if (this.resolvedRelativeTargetAt = te.timestamp,
                    !this.targetDelta && !this.relativeTarget) {
                        const e = this.getClosestProjectingParent();
                        e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        },
                        this.relativeTargetOrigin = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        },
                        Dr(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox),
                        Ri(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    if (this.relativeTarget || this.targetDelta) {
                        var o, s, l;
                        if (this.target || (this.target = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        },
                        this.targetWithTransforms = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }),
                        this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                        o = this.target,
                        s = this.relativeTarget,
                        l = this.relativeParent.target,
                        Ar(o.x, s.x, l.x),
                        Ar(o.y, s.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Ri(this.target, this.layout.layoutBox),
                        Qr(this.target, this.targetDelta)) : Ri(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget) {
                            this.attemptToResolveRelativeTarget = !1;
                            const e = this.getClosestProjectingParent();
                            e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            },
                            this.relativeTargetOrigin = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            },
                            Dr(this.relativeTargetOrigin, this.target, e.target),
                            Ri(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        G.value && Qi.calculatedTargetDeltas++
                    }
                }
            }
            getClosestProjectingParent() {
                if (this.parent && !jr(this.parent.latestValues) && !Ur(this.parent.latestValues))
                    return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
            }
            isProjecting() {
                return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
            }
            calcProjection() {
                var e;
                const t = this.getLead()
                  , n = Boolean(this.resumingFrom) || this !== t;
                let r = !0;
                if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (r = !1),
                n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1),
                this.resolvedRelativeTargetAt === te.timestamp && (r = !1),
                r)
                    return;
                const {layout: i, layoutId: a} = this.options;
                if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !i && !a)
                    return;
                Ri(this.layoutCorrected, this.layout.layoutBox);
                const o = this.treeScale.x
                  , s = this.treeScale.y;
                !function(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    const i = n.length;
                    if (!i)
                        return;
                    let a, o;
                    t.x = t.y = 1;
                    for (let s = 0; s < i; s++) {
                        a = n[s],
                        o = a.projectionDelta;
                        const {visualElement: i} = a.options;
                        i && i.props.style && "contents" === i.props.style.display || (r && a.options.layoutScroll && a.scroll && a !== a.root && Zr(e, {
                            x: -a.scroll.offset.x,
                            y: -a.scroll.offset.y
                        }),
                        o && (t.x *= o.x.scale,
                        t.y *= o.y.scale,
                        Qr(e, o)),
                        r && Br(a.latestValues) && Zr(e, a.latestValues))
                    }
                    t.x < Kr && t.x > Yr && (t.x = 1),
                    t.y < Kr && t.y > Yr && (t.y = 1)
                }(this.layoutCorrected, this.treeScale, this.path, n),
                !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox,
                t.targetWithTransforms = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                });
                const {target: l} = t;
                l ? (this.projectionDelta && this.prevProjectionDelta ? (Ni(this.prevProjectionDelta.x, this.projectionDelta.x),
                Ni(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                Tr(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                this.treeScale.x === o && this.treeScale.y === s && Hi(this.projectionDelta.x, this.prevProjectionDelta.x) && Hi(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
                G.value && Qi.calculatedProjections++) : this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender())
            }
            hide() {
                this.isVisible = !1
            }
            show() {
                this.isVisible = !0
            }
            scheduleRender() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                var t;
                if (null === (t = this.options.visualElement) || void 0 === t || t.scheduleRender(),
                e) {
                    const e = this.getStack();
                    e && e.scheduleRender()
                }
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
            createProjectionDeltas() {
                this.prevProjectionDelta = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                },
                this.projectionDelta = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                },
                this.projectionDeltaWithTransform = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                }
            }
            setAnimationOrigin(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const n = this.snapshot
                  , r = n ? n.latestValues : {}
                  , i = {
                    ...this.latestValues
                }
                  , a = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                };
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                this.attemptToResolveRelativeTarget = !t;
                const o = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                }
                  , s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0)
                  , l = this.getStack()
                  , u = !l || l.members.length <= 1
                  , c = Boolean(s && !u && !0 === this.options.crossfade && !this.path.some(ma));
                let d;
                this.animationProgress = 0,
                this.mixTargetDelta = t => {
                    const n = t / 1e3;
                    var l, f, h, p, m, g;
                    ha(a.x, e.x, n),
                    ha(a.y, e.y, n),
                    this.setTargetDelta(a),
                    this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Dr(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                    h = this.relativeTarget,
                    p = this.relativeTargetOrigin,
                    m = o,
                    g = n,
                    pa(h.x, p.x, m.x, g),
                    pa(h.y, p.y, m.y, g),
                    d && (l = this.relativeTarget,
                    f = d,
                    Bi(l.x, f.x) && Bi(l.y, f.y)) && (this.isProjectionDirty = !1),
                    d || (d = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }),
                    Ri(d, this.relativeTarget)),
                    s && (this.animationValues = i,
                    function(e, t, n, r, i, a) {
                        i ? (e.opacity = Zt(0, void 0 !== n.opacity ? n.opacity : 1, Ai(r)),
                        e.opacityExit = Zt(void 0 !== t.opacity ? t.opacity : 1, 0, Mi(r))) : a && (e.opacity = Zt(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                        for (let o = 0; o < Pi; o++) {
                            const i = `border${xi[o]}Radius`;
                            let a = Ti(t, i)
                              , s = Ti(n, i);
                            void 0 === a && void 0 === s || (a || (a = 0),
                            s || (s = 0),
                            0 === a || 0 === s || Ci(a) === Ci(s) ? (e[i] = Math.max(Zt(Ei(a), Ei(s), r), 0),
                            (qe.test(s) || qe.test(a)) && (e[i] += "%")) : e[i] = s)
                        }
                        (t.rotate || n.rotate) && (e.rotate = Zt(t.rotate || 0, n.rotate || 0, r))
                    }(i, r, this.latestValues, n, c, u)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    this.animationProgress = n
                }
                ,
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
            }
            startAnimation(e) {
                this.notifyListeners("animationStart"),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation && (ee(this.pendingAnimation),
                this.pendingAnimation = void 0),
                this.pendingAnimation = J.update(( () => {
                    ui.hasAnimatedSinceResize = !0,
                    Gt.layout++,
                    this.currentAnimation = function(e, t, n) {
                        const r = pe(e) ? e : fe(e);
                        return r.start(qn("", r, t, n)),
                        r.animation
                    }(0, 1e3, {
                        ...e,
                        onUpdate: t => {
                            this.mixTargetDelta(t),
                            e.onUpdate && e.onUpdate(t)
                        }
                        ,
                        onStop: () => {
                            Gt.layout--
                        }
                        ,
                        onComplete: () => {
                            Gt.layout--,
                            e.onComplete && e.onComplete(),
                            this.completeAnimation()
                        }
                    }),
                    this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                    this.pendingAnimation = void 0
                }
                ))
            }
            completeAnimation() {
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                this.resumingFrom.preserveOpacity = void 0);
                const e = this.getStack();
                e && e.exitAnimationComplete(),
                this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                this.notifyListeners("animationComplete")
            }
            finishAnimation() {
                this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                this.currentAnimation.stop()),
                this.completeAnimation()
            }
            applyTransformsToTarget() {
                const e = this.getLead();
                let {targetWithTransforms: t, target: n, layout: r, latestValues: i} = e;
                if (t && n && r) {
                    if (this !== e && this.layout && r && wa(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                        n = this.target || {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        const t = Er(this.layout.layoutBox.x);
                        n.x.min = e.target.x.min,
                        n.x.max = n.x.min + t;
                        const r = Er(this.layout.layoutBox.y);
                        n.y.min = e.target.y.min,
                        n.y.max = n.y.min + r
                    }
                    Ri(t, n),
                    Zr(t, i),
                    Tr(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
                }
            }
            registerSharedNode(e, t) {
                this.sharedNodes.has(e) || this.sharedNodes.set(e, new qi);
                this.sharedNodes.get(e).add(t);
                const n = t.options.initialPromotionConfig;
                t.promote({
                    transition: n ? n.transition : void 0,
                    preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
                })
            }
            isLead() {
                const e = this.getStack();
                return !e || e.lead === this
            }
            getLead() {
                var e;
                const {layoutId: t} = this.options;
                return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
            }
            getPrevLead() {
                var e;
                const {layoutId: t} = this.options;
                return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
            }
            getStack() {
                const {layoutId: e} = this.options;
                if (e)
                    return this.root.sharedNodes.get(e)
            }
            promote() {
                let {needsReset: e, transition: t, preserveFollowOpacity: n} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const r = this.getStack();
                r && r.promote(this, n),
                e && (this.projectionDelta = void 0,
                this.needsReset = !0),
                t && this.setOptions({
                    transition: t
                })
            }
            relegate() {
                const e = this.getStack();
                return !!e && e.relegate(this)
            }
            resetSkewAndRotation() {
                const {visualElement: e} = this.options;
                if (!e)
                    return;
                let t = !1;
                const {latestValues: n} = e;
                if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0),
                !t)
                    return;
                const r = {};
                n.z && Gi("z", e, r, this.animationValues);
                for (let i = 0; i < Yi.length; i++)
                    Gi(`rotate${Yi[i]}`, e, r, this.animationValues),
                    Gi(`skew${Yi[i]}`, e, r, this.animationValues);
                e.render();
                for (const i in r)
                    e.setStaticValue(i, r[i]),
                    this.animationValues && (this.animationValues[i] = r[i]);
                e.scheduleRender()
            }
            getProjectionStyles(e) {
                var t, n;
                if (!this.instance || this.isSVG)
                    return;
                if (!this.isVisible)
                    return Ki;
                const r = {
                    visibility: ""
                }
                  , i = this.getTransformTemplate();
                if (this.needsReset)
                    return this.needsReset = !1,
                    r.opacity = "",
                    r.pointerEvents = ki(null === e || void 0 === e ? void 0 : e.pointerEvents) || "",
                    r.transform = i ? i(this.latestValues, "") : "none",
                    r;
                const a = this.getLead();
                if (!this.projectionDelta || !this.layout || !a.target) {
                    const t = {};
                    return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                    t.pointerEvents = ki(null === e || void 0 === e ? void 0 : e.pointerEvents) || ""),
                    this.hasProjected && !Br(this.latestValues) && (t.transform = i ? i({}, "") : "none",
                    this.hasProjected = !1),
                    t
                }
                const o = a.animationValues || a.latestValues;
                this.applyTransformsToTarget(),
                r.transform = function(e, t, n) {
                    let r = "";
                    const i = e.x.translate / t.x
                      , a = e.y.translate / t.y
                      , o = (null === n || void 0 === n ? void 0 : n.z) || 0;
                    if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
                    1 === t.x && 1 === t.y || (r += `scale(${1 / t.x}, ${1 / t.y}) `),
                    n) {
                        const {transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: o, skewY: s} = n;
                        e && (r = `perspective(${e}px) ${r}`),
                        t && (r += `rotate(${t}deg) `),
                        i && (r += `rotateX(${i}deg) `),
                        a && (r += `rotateY(${a}deg) `),
                        o && (r += `skewX(${o}deg) `),
                        s && (r += `skewY(${s}deg) `)
                    }
                    const s = e.x.scale * t.x
                      , l = e.y.scale * t.y;
                    return 1 === s && 1 === l || (r += `scale(${s}, ${l})`),
                    r || "none"
                }(this.projectionDeltaWithTransform, this.treeScale, o),
                i && (r.transform = i(o, r.transform));
                const {x: s, y: l} = this.projectionDelta;
                r.transformOrigin = `${100 * s.origin}% ${100 * l.origin}% 0`,
                a.animationValues ? r.opacity = a === this ? null !== (n = null !== (t = o.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : r.opacity = a === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0;
                for (const u in hi) {
                    if (void 0 === o[u])
                        continue;
                    const {correct: e, applyTo: t, isCSSVariable: n} = hi[u]
                      , i = "none" === r.transform ? o[u] : e(o[u], a);
                    if (t) {
                        const e = t.length;
                        for (let n = 0; n < e; n++)
                            r[t[n]] = i
                    } else
                        n ? this.options.visualElement.renderState.vars[u] = i : r[u] = i
                }
                return this.options.layoutId && (r.pointerEvents = a === this ? ki(null === e || void 0 === e ? void 0 : e.pointerEvents) || "" : "none"),
                r
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0
            }
            resetTree() {
                this.root.nodes.forEach((e => {
                    var t;
                    return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                }
                )),
                this.root.nodes.forEach(aa),
                this.root.sharedNodes.clear()
            }
        }
    }
    function ea(e) {
        e.updateLayout()
    }
    function ta(e) {
        var t;
        const n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
            const {layoutBox: t, measuredBox: r} = e.layout
              , {animationType: i} = e.options
              , a = n.source !== e.layout.source;
            "size" === i ? Fr((e => {
                const r = a ? n.measuredBox[e] : n.layoutBox[e]
                  , i = Er(r);
                r.min = t[e].min,
                r.max = r.min + i
            }
            )) : wa(i, n.layoutBox, t) && Fr((r => {
                const i = a ? n.measuredBox[r] : n.layoutBox[r]
                  , o = Er(t[r]);
                i.max = i.min + o,
                e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
                e.relativeTarget[r].max = e.relativeTarget[r].min + o)
            }
            ));
            const o = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            };
            Tr(o, t, n.layoutBox);
            const s = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            };
            a ? Tr(s, e.applyTransform(r, !0), n.measuredBox) : Tr(s, t, n.layoutBox);
            const l = !ji(o);
            let u = !1;
            if (!e.resumeFrom) {
                const r = e.getClosestProjectingParent();
                if (r && !r.resumeFrom) {
                    const {snapshot: i, layout: a} = r;
                    if (i && a) {
                        const o = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Dr(o, n.layoutBox, i.layoutBox);
                        const s = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Dr(s, t, a.layoutBox),
                        $i(o, s) || (u = !0),
                        r.options.layoutRoot && (e.relativeTarget = s,
                        e.relativeTargetOrigin = o,
                        e.relativeParent = r)
                    }
                }
            }
            e.notifyListeners("didUpdate", {
                layout: t,
                snapshot: n,
                delta: s,
                layoutDelta: o,
                hasLayoutChanged: l,
                hasRelativeLayoutChanged: u
            })
        } else if (e.isLead()) {
            const {onExitComplete: t} = e.options;
            t && t()
        }
        e.options.transition = void 0
    }
    function na(e) {
        G.value && Qi.nodes++,
        e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
        e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
    }
    function ra(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
    }
    function ia(e) {
        e.clearSnapshot()
    }
    function aa(e) {
        e.clearMeasurements()
    }
    function oa(e) {
        e.isLayoutDirty = !1
    }
    function sa(e) {
        const {visualElement: t} = e.options;
        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
        e.resetTransform()
    }
    function la(e) {
        e.finishAnimation(),
        e.targetDelta = e.relativeTarget = e.target = void 0,
        e.isProjectionDirty = !0
    }
    function ua(e) {
        e.resolveTargetDelta()
    }
    function ca(e) {
        e.calcProjection()
    }
    function da(e) {
        e.resetSkewAndRotation()
    }
    function fa(e) {
        e.removeLeadSnapshot()
    }
    function ha(e, t, n) {
        e.translate = Zt(t.translate, 0, n),
        e.scale = Zt(t.scale, 1, n),
        e.origin = t.origin,
        e.originPoint = t.originPoint
    }
    function pa(e, t, n, r) {
        e.min = Zt(t.min, n.min, r),
        e.max = Zt(t.max, n.max, r)
    }
    function ma(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
    }
    const ga = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    }
      , va = e => "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
      , ya = va("applewebkit/") && !va("chrome/") ? Math.round : $;
    function ba(e) {
        e.min = ya(e.min),
        e.max = ya(e.max)
    }
    function wa(e, t, n) {
        return "position" === e || "preserve-aspect" === e && (r = Wi(t),
        i = Wi(n),
        a = .2,
        !(Math.abs(r - i) <= a));
        var r, i, a
    }
    function Sa(e) {
        var t;
        return e !== e.root && (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
    }
    const ka = Ji({
        attachResizeListener: (e, t) => hr(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    })
      , xa = {
        current: void 0
    }
      , Pa = Ji({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!xa.current) {
                const e = new ka({});
                e.mount(window),
                e.setOptions({
                    layoutScroll: !0
                }),
                xa.current = e
            }
            return xa.current
        }
        ,
        resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none"
        }
        ,
        checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
    })
      , Ea = {
        pan: {
            Feature: class extends cr {
                constructor() {
                    super(...arguments),
                    this.removePointerDownListener = $
                }
                onPointerDown(e) {
                    this.session = new vr(e,this.createPanHandlers(),{
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: ei(this.node)
                    })
                }
                createPanHandlers() {
                    const {onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r} = this.node.getProps();
                    return {
                        onSessionStart: ii(e),
                        onStart: ii(t),
                        onMove: n,
                        onEnd: (e, t) => {
                            delete this.session,
                            r && J.postRender(( () => r(e, t)))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = mr(this.node.current, "pointerdown", (e => this.onPointerDown(e)))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(),
                    this.session && this.session.end()
                }
            }
        },
        drag: {
            Feature: class extends cr {
                constructor(e) {
                    super(e),
                    this.removeGroupControls = $,
                    this.removeListeners = $,
                    this.controls = new ni(e)
                }
                mount() {
                    const {dragControls: e} = this.node.getProps();
                    e && (this.removeGroupControls = e.subscribe(this.controls)),
                    this.removeListeners = this.controls.addListeners() || $
                }
                unmount() {
                    this.removeGroupControls(),
                    this.removeListeners()
                }
            }
            ,
            ProjectionNode: Pa,
            MeasureLayout: vi
        }
    };
    function Ca(e, t, n) {
        const {props: r} = e;
        e.animationState && r.whileHover && e.animationState.setActive("whileHover", "Start" === n);
        const i = r["onHover" + n];
        i && J.postRender(( () => i(t, pr(t))))
    }
    function Ta(e, t, n) {
        const {props: r} = e;
        e.animationState && r.whileTap && e.animationState.setActive("whileTap", "Start" === n);
        const i = r["onTap" + ("End" === n ? "" : n)];
        i && J.postRender(( () => i(t, pr(t))))
    }
    const Aa = new WeakMap
      , Ma = new WeakMap
      , Da = e => {
        const t = Aa.get(e.target);
        t && t(e)
    }
      , La = e => {
        e.forEach(Da)
    }
    ;
    function Ra(e, t, n) {
        const r = function(e) {
            let {root: t, ...n} = e;
            const r = t || document;
            Ma.has(r) || Ma.set(r, {});
            const i = Ma.get(r)
              , a = JSON.stringify(n);
            return i[a] || (i[a] = new IntersectionObserver(La,{
                root: t,
                ...n
            })),
            i[a]
        }(t);
        return Aa.set(e, n),
        r.observe(e),
        () => {
            Aa.delete(e),
            r.unobserve(e)
        }
    }
    const Na = {
        some: 0,
        all: 1
    };
    const Oa = {
        inView: {
            Feature: class extends cr {
                constructor() {
                    super(...arguments),
                    this.hasEnteredView = !1,
                    this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    const {viewport: e={}} = this.node.getProps()
                      , {root: t, margin: n, amount: r="some", once: i} = e
                      , a = {
                        root: t ? t.current : void 0,
                        rootMargin: n,
                        threshold: "number" === typeof r ? r : Na[r]
                    };
                    return Ra(this.node.current, a, (e => {
                        const {isIntersecting: t} = e;
                        if (this.isInView === t)
                            return;
                        if (this.isInView = t,
                        i && !t && this.hasEnteredView)
                            return;
                        t && (this.hasEnteredView = !0),
                        this.node.animationState && this.node.animationState.setActive("whileInView", t);
                        const {onViewportEnter: n, onViewportLeave: r} = this.node.getProps()
                          , a = t ? n : r;
                        a && a(e)
                    }
                    ))
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" === typeof IntersectionObserver)
                        return;
                    const {props: e, prevProps: t} = this.node
                      , n = ["amount", "margin", "root"].some(function(e) {
                        let {viewport: t={}} = e
                          , {viewport: n={}} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return e => t[e] !== n[e]
                    }(e, t));
                    n && this.startObserver()
                }
                unmount() {}
            }
        },
        tap: {
            Feature: class extends cr {
                mount() {
                    const {current: e} = this.node;
                    e && (this.unmount = j(e, ( (e, t) => (Ta(this.node, t, "Start"),
                    (e, t) => {
                        let {success: n} = t;
                        return Ta(this.node, e, n ? "End" : "Cancel")
                    }
                    )), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
        },
        focus: {
            Feature: class extends cr {
                constructor() {
                    super(...arguments),
                    this.isActive = !1
                }
                onFocus() {
                    let e = !1;
                    try {
                        e = this.node.current.matches(":focus-visible")
                    } catch (t) {
                        e = !0
                    }
                    e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                    this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                    this.isActive = !1)
                }
                mount() {
                    this.unmount = sn(hr(this.node.current, "focus", ( () => this.onFocus())), hr(this.node.current, "blur", ( () => this.onBlur())))
                }
                unmount() {}
            }
        },
        hover: {
            Feature: class extends cr {
                mount() {
                    const {current: e} = this.node;
                    e && (this.unmount = function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        const [r,i,a] = L(e, n)
                          , o = e => {
                            if (!R(e))
                                return;
                            const {target: n} = e
                              , r = t(n, e);
                            if ("function" !== typeof r || !n)
                                return;
                            const a = e => {
                                R(e) && (r(e),
                                n.removeEventListener("pointerleave", a))
                            }
                            ;
                            n.addEventListener("pointerleave", a, i)
                        }
                        ;
                        return r.forEach((e => {
                            e.addEventListener("pointerenter", o, i)
                        }
                        )),
                        a
                    }(e, ( (e, t) => (Ca(this.node, t, "Start"),
                    e => Ca(this.node, e, "End")))))
                }
                unmount() {}
            }
        }
    }
      , _a = {
        layout: {
            ProjectionNode: Pa,
            MeasureLayout: vi
        }
    }
      , za = (0,
    r.createContext)({
        strict: !1
    })
      , Fa = (0,
    r.createContext)({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    })
      , Va = (0,
    r.createContext)({});
    function Ia(e) {
        return o(e.animate) || er.some((t => Zn(e[t])))
    }
    function ja(e) {
        return Boolean(Ia(e) || e.variants)
    }
    function Ba(e) {
        const {initial: t, animate: n} = function(e, t) {
            if (Ia(e)) {
                const {initial: t, animate: n} = e;
                return {
                    initial: !1 === t || Zn(t) ? t : void 0,
                    animate: Zn(n) ? n : void 0
                }
            }
            return !1 !== e.inherit ? t : {}
        }(e, (0,
        r.useContext)(Va));
        return (0,
        r.useMemo)(( () => ({
            initial: t,
            animate: n
        })), [Ua(t), Ua(n)])
    }
    function Ua(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    const $a = "undefined" !== typeof window
      , Wa = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    }
      , Ha = {};
    for (const as in Wa)
        Ha[as] = {
            isEnabled: e => Wa[as].some((t => !!e[t]))
        };
    const qa = Symbol.for("motionComponentSymbol");
    function Qa(e, t, n) {
        return (0,
        r.useCallback)((r => {
            r && e.onMount && e.onMount(r),
            t && (r ? t.mount(r) : t.unmount()),
            n && ("function" === typeof n ? n(r) : Pr(n) && (n.current = r))
        }
        ), [t])
    }
    const Ya = $a ? r.useLayoutEffect : r.useEffect;
    function Ka(e, t, n, i, a) {
        var o, s;
        const {visualElement: l} = (0,
        r.useContext)(Va)
          , u = (0,
        r.useContext)(za)
          , c = (0,
        r.useContext)(oi)
          , d = (0,
        r.useContext)(Fa).reducedMotion
          , f = (0,
        r.useRef)(null);
        i = i || u.renderer,
        !f.current && i && (f.current = i(e, {
            visualState: t,
            parent: l,
            props: n,
            presenceContext: c,
            blockInitialAnimation: !!c && !1 === c.initial,
            reducedMotionConfig: d
        }));
        const h = f.current
          , p = (0,
        r.useContext)(li);
        !h || h.projection || !a || "html" !== h.type && "svg" !== h.type || function(e, t, n, r) {
            const {layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: l, layoutRoot: u} = t;
            e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : Xa(e.parent)),
            e.projection.setOptions({
                layoutId: i,
                layout: a,
                alwaysMeasureLayout: Boolean(o) || s && Pr(s),
                visualElement: e,
                animationType: "string" === typeof a ? a : "both",
                initialPromotionConfig: r,
                layoutScroll: l,
                layoutRoot: u
            })
        }(f.current, n, a, p);
        const m = (0,
        r.useRef)(!1);
        (0,
        r.useInsertionEffect)(( () => {
            h && m.current && h.update(n, c)
        }
        ));
        const g = n[ve]
          , v = (0,
        r.useRef)(Boolean(g) && !(null === (o = window.MotionHandoffIsComplete) || void 0 === o ? void 0 : o.call(window, g)) && (null === (s = window.MotionHasOptimisedAnimation) || void 0 === s ? void 0 : s.call(window, g)));
        return Ya(( () => {
            h && (m.current = !0,
            window.MotionIsMounted = !0,
            h.updateFeatures(),
            pi.render(h.render),
            v.current && h.animationState && h.animationState.animateChanges())
        }
        )),
        (0,
        r.useEffect)(( () => {
            h && (!v.current && h.animationState && h.animationState.animateChanges(),
            v.current && (queueMicrotask(( () => {
                var e;
                null === (e = window.MotionHandoffMarkAsComplete) || void 0 === e || e.call(window, g)
            }
            )),
            v.current = !1))
        }
        )),
        h
    }
    function Xa(e) {
        if (e)
            return !1 !== e.options.allowProjection ? e.projection : Xa(e.parent)
    }
    function Ga(e) {
        let {preloadedFeatures: t, createVisualElement: n, useRender: i, useVisualState: a, Component: o} = e;
        var s, l;
        function u(e, t) {
            let s;
            const l = {
                ...(0,
                r.useContext)(Fa),
                ...e,
                layoutId: Za(e)
            }
              , {isStatic: u} = l
              , c = Ba(e)
              , d = a(e, u);
            if (!u && $a) {
                !function() {
                    (0,
                    r.useContext)(za).strict;
                    0
                }();
                const e = function(e) {
                    const {drag: t, layout: n} = Ha;
                    if (!t && !n)
                        return {};
                    const r = {
                        ...t,
                        ...n
                    };
                    return {
                        MeasureLayout: (null === t || void 0 === t ? void 0 : t.isEnabled(e)) || (null === n || void 0 === n ? void 0 : n.isEnabled(e)) ? r.MeasureLayout : void 0,
                        ProjectionNode: r.ProjectionNode
                    }
                }(l);
                s = e.MeasureLayout,
                c.visualElement = Ka(o, d, l, n, e.ProjectionNode)
            }
            return (0,
            ai.jsxs)(Va.Provider, {
                value: c,
                children: [s && c.visualElement ? (0,
                ai.jsx)(s, {
                    visualElement: c.visualElement,
                    ...l
                }) : null, i(o, e, Qa(d, c.visualElement, t), d, u, c.visualElement)]
            })
        }
        t && function(e) {
            for (const t in e)
                Ha[t] = {
                    ...Ha[t],
                    ...e[t]
                }
        }(t),
        u.displayName = `motion.${"string" === typeof o ? o : `create(${null !== (l = null !== (s = o.displayName) && void 0 !== s ? s : o.name) && void 0 !== l ? l : ""})`}`;
        const c = (0,
        r.forwardRef)(u);
        return c[qa] = o,
        c
    }
    function Za(e) {
        let {layoutId: t} = e;
        const n = (0,
        r.useContext)(si).id;
        return n && void 0 !== t ? n + "-" + t : t
    }
    function Ja(e, t) {
        let {layout: n, layoutId: r} = t;
        return H.has(e) || e.startsWith("origin") || (n || void 0 !== r) && (!!hi[e] || "opacity" === e)
    }
    const eo = (e, t) => t && "number" === typeof e ? t.transform(e) : e
      , to = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    }
      , no = W.length;
    function ro(e, t, n) {
        const {style: r, vars: i, transformOrigin: a} = e;
        let o = !1
          , s = !1;
        for (const l in t) {
            const e = t[l];
            if (H.has(l))
                o = !0;
            else if (zt(l))
                i[l] = e;
            else {
                const t = eo(e, mt[l]);
                l.startsWith("origin") ? (s = !0,
                a[l] = t) : r[l] = t
            }
        }
        if (t.transform || (o || n ? r.transform = function(e, t, n) {
            let r = ""
              , i = !0;
            for (let a = 0; a < no; a++) {
                const o = W[a]
                  , s = e[o];
                if (void 0 === s)
                    continue;
                let l = !0;
                if (l = "number" === typeof s ? s === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(s),
                !l || n) {
                    const e = eo(s, mt[o]);
                    l || (i = !1,
                    r += `${to[o] || o}(${e}) `),
                    n && (t[o] = e)
                }
            }
            return r = r.trim(),
            n ? r = n(t, i ? "" : r) : i && (r = "none"),
            r
        }(t, e.transform, n) : r.transform && (r.transform = "none")),
        s) {
            const {originX: e="50%", originY: t="50%", originZ: n=0} = a;
            r.transformOrigin = `${e} ${t} ${n}`
        }
    }
    const io = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });
    function ao(e, t, n) {
        for (const r in t)
            pe(t[r]) || Ja(r, n) || (e[r] = t[r])
    }
    function oo(e, t) {
        const n = {};
        return ao(n, e.style || {}, e),
        Object.assign(n, function(e, t) {
            let {transformTemplate: n} = e;
            return (0,
            r.useMemo)(( () => {
                const e = {
                    style: {},
                    transform: {},
                    transformOrigin: {},
                    vars: {}
                };
                return ro(e, t, n),
                Object.assign({}, e.vars, e.style)
            }
            ), [t])
        }(e, t)),
        n
    }
    function so(e, t) {
        const n = {}
          , r = oo(e, t);
        return e.drag && !1 !== e.dragListener && (n.draggable = !1,
        r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
        r.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x")),
        void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
        n.style = r,
        n
    }
    const lo = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
    function uo(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || lo.has(e)
    }
    let co = e => !uo(e);
    try {
        (fo = require("@emotion/is-prop-valid").default) && (co = e => e.startsWith("on") ? !uo(e) : fo(e))
    } catch (is) {}
    var fo;
    const ho = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
    function po(e) {
        return "string" === typeof e && !e.includes("-") && !!(ho.indexOf(e) > -1 || /[A-Z]/u.test(e))
    }
    const mo = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    }
      , go = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };
    function vo(e, t, n) {
        return "string" === typeof e ? e : Qe.transform(t + n * e)
    }
    function yo(e, t, n, r) {
        let {attrX: i, attrY: a, attrScale: o, originX: s, originY: l, pathLength: u, pathSpacing: c=1, pathOffset: d=0, ...f} = t;
        if (ro(e, f, r),
        n)
            return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        e.attrs = e.style,
        e.style = {};
        const {attrs: h, style: p, dimensions: m} = e;
        h.transform && (m && (p.transform = h.transform),
        delete h.transform),
        m && (void 0 !== s || void 0 !== l || p.transform) && (p.transformOrigin = function(e, t, n) {
            return `${vo(t, e.x, e.width)} ${vo(n, e.y, e.height)}`
        }(m, void 0 !== s ? s : .5, void 0 !== l ? l : .5)),
        void 0 !== i && (h.x = i),
        void 0 !== a && (h.y = a),
        void 0 !== o && (h.scale = o),
        void 0 !== u && function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
              , i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
            e.pathLength = 1;
            const a = i ? mo : go;
            e[a.offset] = Qe.transform(-r);
            const o = Qe.transform(t)
              , s = Qe.transform(n);
            e[a.array] = `${o} ${s}`
        }(h, u, c, d, !1)
    }
    const bo = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
        attrs: {}
    })
      , wo = e => "string" === typeof e && "svg" === e.toLowerCase();
    function So(e, t, n, i) {
        const a = (0,
        r.useMemo)(( () => {
            const n = {
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {},
                attrs: {}
            };
            return yo(n, t, wo(i), e.transformTemplate),
            {
                ...n.attrs,
                style: {
                    ...n.style
                }
            }
        }
        ), [t]);
        if (e.style) {
            const t = {};
            ao(t, e.style, e),
            a.style = {
                ...t,
                ...a.style
            }
        }
        return a
    }
    function ko() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (t, n, i, a, o) => {
            let {latestValues: s} = a;
            const l = (po(t) ? So : so)(n, s, o, t)
              , u = function(e, t, n) {
                const r = {};
                for (const i in e)
                    "values" === i && "object" === typeof e.values || (co(i) || !0 === n && uo(i) || !t && !uo(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
                return r
            }(n, "string" === typeof t, e)
              , c = t !== r.Fragment ? {
                ...u,
                ...l,
                ref: i
            } : {}
              , {children: d} = n
              , f = (0,
            r.useMemo)(( () => pe(d) ? d.get() : d), [d]);
            return (0,
            r.createElement)(t, {
                ...c,
                children: f
            })
        }
    }
    const xo = e => (t, n) => {
        const i = (0,
        r.useContext)(Va)
          , a = (0,
        r.useContext)(oi)
          , o = () => function(e, t, n, r) {
            let {scrapeMotionValuesFromProps: i, createRenderState: a, onUpdate: o} = e;
            const s = {
                latestValues: Po(t, n, r, i),
                renderState: a()
            };
            return o && (s.onMount = e => o({
                props: t,
                current: e,
                ...s
            }),
            s.onUpdate = e => o(e)),
            s
        }(e, t, i, a);
        return n ? o() : function(e) {
            const t = (0,
            r.useRef)(null);
            return null === t.current && (t.current = e()),
            t.current
        }(o)
    }
    ;
    function Po(e, t, n, r) {
        const i = {}
          , a = r(e, {});
        for (const o in a)
            i[o] = ki(a[o]);
        let {initial: s, animate: u} = e;
        const c = Ia(e)
          , d = ja(e);
        t && d && !c && !1 !== e.inherit && (void 0 === s && (s = t.initial),
        void 0 === u && (u = t.animate));
        let f = !!n && !1 === n.initial;
        f = f || !1 === s;
        const h = f ? u : s;
        if (h && "boolean" !== typeof h && !o(h)) {
            const t = Array.isArray(h) ? h : [h];
            for (let n = 0; n < t.length; n++) {
                const r = l(e, t[n]);
                if (r) {
                    const {transitionEnd: e, transition: t, ...n} = r;
                    for (const r in n) {
                        let e = n[r];
                        if (Array.isArray(e)) {
                            e = e[f ? e.length - 1 : 0]
                        }
                        null !== e && (i[r] = e)
                    }
                    for (const r in e)
                        i[r] = e[r]
                }
            }
        }
        return i
    }
    function Eo(e, t, n) {
        var r;
        const {style: i} = e
          , a = {};
        for (const o in i)
            (pe(i[o]) || t.style && pe(t.style[o]) || Ja(o, e) || void 0 !== (null === (r = null === n || void 0 === n ? void 0 : n.getValue(o)) || void 0 === r ? void 0 : r.liveStyle)) && (a[o] = i[o]);
        return a
    }
    const Co = {
        useVisualState: xo({
            scrapeMotionValuesFromProps: Eo,
            createRenderState: io
        })
    };
    function To(e, t) {
        try {
            t.dimensions = "function" === typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
        } catch (n) {
            t.dimensions = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        }
    }
    function Ao(e, t, n, r) {
        let {style: i, vars: a} = t;
        Object.assign(e.style, i, r && r.getProjectionStyles(n));
        for (const o in a)
            e.style.setProperty(o, a[o])
    }
    const Mo = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
    function Do(e, t, n, r) {
        Ao(e, t, void 0, r);
        for (const i in t.attrs)
            e.setAttribute(Mo.has(i) ? i : ge(i), t.attrs[i])
    }
    function Lo(e, t, n) {
        const r = Eo(e, t, n);
        for (const i in e)
            if (pe(e[i]) || pe(t[i])) {
                r[-1 !== W.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = e[i]
            }
        return r
    }
    const Ro = ["x", "y", "width", "height", "cx", "cy", "r"]
      , No = {
        useVisualState: xo({
            scrapeMotionValuesFromProps: Lo,
            createRenderState: bo,
            onUpdate: e => {
                let {props: t, prevProps: n, current: r, renderState: i, latestValues: a} = e;
                if (!r)
                    return;
                let o = !!t.drag;
                if (!o)
                    for (const l in a)
                        if (H.has(l)) {
                            o = !0;
                            break
                        }
                if (!o)
                    return;
                let s = !n;
                if (n)
                    for (let l = 0; l < Ro.length; l++) {
                        const e = Ro[l];
                        t[e] !== n[e] && (s = !0)
                    }
                s && J.read(( () => {
                    To(r, i),
                    J.render(( () => {
                        yo(i, a, wo(r.tagName), t.transformTemplate),
                        Do(r, i)
                    }
                    ))
                }
                ))
            }
        })
    };
    function Oo(e, t) {
        return function(n) {
            let {forwardMotionProps: r} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                forwardMotionProps: !1
            };
            return Ga({
                ...po(n) ? No : Co,
                preloadedFeatures: e,
                useRender: ko(r),
                createVisualElement: t,
                Component: n
            })
        }
    }
    const _o = {
        current: null
    }
      , zo = {
        current: !1
    };
    const Fo = [...$t, Ze, st]
      , Vo = new WeakMap;
    const Io = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
    class jo {
        scrapeMotionValuesFromProps(e, t, n) {
            return {}
        }
        constructor(e) {
            let {parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: a, visualState: o} = e
              , s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.current = null,
            this.children = new Set,
            this.isVariantNode = !1,
            this.isControllingVariants = !1,
            this.shouldReduceMotion = null,
            this.values = new Map,
            this.KeyframeResolver = Lt,
            this.features = {},
            this.valueSubscriptions = new Map,
            this.prevMotionValues = {},
            this.events = {},
            this.propEventSubscriptions = {},
            this.notifyUpdate = () => this.notify("Update", this.latestValues),
            this.render = () => {
                this.current && (this.triggerBuild(),
                this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }
            ,
            this.renderScheduledAt = 0,
            this.scheduleRender = () => {
                const e = ae.now();
                this.renderScheduledAt < e && (this.renderScheduledAt = e,
                J.render(this.render, !1, !0))
            }
            ;
            const {latestValues: l, renderState: u, onUpdate: c} = o;
            this.onUpdate = c,
            this.latestValues = l,
            this.baseTarget = {
                ...l
            },
            this.initialValues = n.initial ? {
                ...l
            } : {},
            this.renderState = u,
            this.parent = t,
            this.props = n,
            this.presenceContext = r,
            this.depth = t ? t.depth + 1 : 0,
            this.reducedMotionConfig = i,
            this.options = s,
            this.blockInitialAnimation = Boolean(a),
            this.isControllingVariants = Ia(n),
            this.isVariantNode = ja(n),
            this.isVariantNode && (this.variantChildren = new Set),
            this.manuallyAnimateOnMount = Boolean(t && t.current);
            const {willChange: d, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
            for (const h in f) {
                const e = f[h];
                void 0 !== l[h] && pe(e) && e.set(l[h], !1)
            }
        }
        mount(e) {
            this.current = e,
            Vo.set(e, this),
            this.projection && !this.projection.instance && this.projection.mount(e),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach(( (e, t) => this.bindToMotionValue(t, e))),
            zo.current || function() {
                if (zo.current = !0,
                $a)
                    if (window.matchMedia) {
                        const e = window.matchMedia("(prefers-reduced-motion)")
                          , t = () => _o.current = e.matches;
                        e.addListener(t),
                        t()
                    } else
                        _o.current = !1
            }(),
            this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || _o.current),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext)
        }
        unmount() {
            this.projection && this.projection.unmount(),
            ee(this.notifyUpdate),
            ee(this.render),
            this.valueSubscriptions.forEach((e => e())),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this);
            for (const e in this.events)
                this.events[e].clear();
            for (const e in this.features) {
                const t = this.features[e];
                t && (t.unmount(),
                t.isMounted = !1)
            }
            this.current = null
        }
        bindToMotionValue(e, t) {
            this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
            const n = H.has(e);
            n && this.onBindTransform && this.onBindTransform();
            const r = t.on("change", (t => {
                this.latestValues[e] = t,
                this.props.onUpdate && J.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0)
            }
            ))
              , i = t.on("renderRequest", this.scheduleRender);
            let a;
            window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, ( () => {
                r(),
                i(),
                a && a(),
                t.owner && t.stop()
            }
            ))
        }
        sortNodePosition(e) {
            return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        updateFeatures() {
            let e = "animation";
            for (e in Ha) {
                const t = Ha[e];
                if (!t)
                    continue;
                const {isEnabled: n, Feature: r} = t;
                if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)),
                this.features[e]) {
                    const t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(),
                    t.isMounted = !0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            }
        }
        getStaticValue(e) {
            return this.latestValues[e]
        }
        setStaticValue(e, t) {
            this.latestValues[e] = t
        }
        update(e, t) {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            this.prevProps = this.props,
            this.props = e,
            this.prevPresenceContext = this.presenceContext,
            this.presenceContext = t;
            for (let n = 0; n < Io.length; n++) {
                const t = Io[n];
                this.propEventSubscriptions[t] && (this.propEventSubscriptions[t](),
                delete this.propEventSubscriptions[t]);
                const r = e["on" + t];
                r && (this.propEventSubscriptions[t] = this.on(t, r))
            }
            this.prevMotionValues = function(e, t, n) {
                for (const r in t) {
                    const i = t[r]
                      , a = n[r];
                    if (pe(i))
                        e.addValue(r, i);
                    else if (pe(a))
                        e.addValue(r, fe(i, {
                            owner: e
                        }));
                    else if (a !== i)
                        if (e.hasValue(r)) {
                            const t = e.getValue(r);
                            !0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i)
                        } else {
                            const t = e.getStaticValue(r);
                            e.addValue(r, fe(void 0 !== t ? t : i, {
                                owner: e
                            }))
                        }
                }
                for (const r in n)
                    void 0 === t[r] && e.removeValue(r);
                return t
            }(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this)
        }
        getProps() {
            return this.props
        }
        getVariant(e) {
            return this.props.variants ? this.props.variants[e] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(e) {
            const t = this.getClosestVariantNode();
            if (t)
                return t.variantChildren && t.variantChildren.add(e),
                () => t.variantChildren.delete(e)
        }
        addValue(e, t) {
            const n = this.values.get(e);
            t !== n && (n && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            this.latestValues[e] = t.get())
        }
        removeValue(e) {
            this.values.delete(e);
            const t = this.valueSubscriptions.get(e);
            t && (t(),
            this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
            return this.values.has(e)
        }
        getValue(e, t) {
            if (this.props.values && this.props.values[e])
                return this.props.values[e];
            let n = this.values.get(e);
            return void 0 === n && void 0 !== t && (n = fe(null === t ? void 0 : t, {
                owner: this
            }),
            this.addValue(e, n)),
            n
        }
        readValue(e, t) {
            var n;
            let r = void 0 === this.latestValues[e] && this.current ? null !== (n = this.getBaseTargetFromProps(this.props, e)) && void 0 !== n ? n : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
            var i;
            return void 0 !== r && null !== r && ("string" === typeof r && (Ot(r) || Le(r)) ? r = parseFloat(r) : (i = r,
            !Fo.find(Ut(i)) && st.test(t) && (r = yt(e, t))),
            this.setBaseTarget(e, pe(r) ? r.get() : r)),
            pe(r) ? r.get() : r
        }
        setBaseTarget(e, t) {
            this.baseTarget[e] = t
        }
        getBaseTarget(e) {
            var t;
            const {initial: n} = this.props;
            let r;
            if ("string" === typeof n || "object" === typeof n) {
                const i = l(this.props, n, null === (t = this.presenceContext) || void 0 === t ? void 0 : t.custom);
                i && (r = i[e])
            }
            if (n && void 0 !== r)
                return r;
            const i = this.getBaseTargetFromProps(this.props, e);
            return void 0 === i || pe(i) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : i
        }
        on(e, t) {
            return this.events[e] || (this.events[e] = new le),
            this.events[e].add(t)
        }
        notify(e) {
            if (this.events[e]) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                this.events[e].notify(...n)
            }
        }
    }
    class Bo extends jo {
        constructor() {
            super(...arguments),
            this.KeyframeResolver = Ht
        }
        sortInstanceNodePosition(e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
            return e.style ? e.style[t] : void 0
        }
        removeValueFromRenderState(e, t) {
            let {vars: n, style: r} = t;
            delete n[e],
            delete r[e]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(),
            delete this.childSubscription);
            const {children: e} = this.props;
            pe(e) && (this.childSubscription = e.on("change", (e => {
                this.current && (this.current.textContent = `${e}`)
            }
            )))
        }
    }
    class Uo extends Bo {
        constructor() {
            super(...arguments),
            this.type = "html",
            this.renderInstance = Ao
        }
        readValueFromInstance(e, t) {
            if (H.has(t)) {
                const e = vt(t);
                return e && e.default || 0
            }
            {
                const r = (n = e,
                window.getComputedStyle(n))
                  , i = (zt(t) ? r.getPropertyValue(t) : r[t]) || 0;
                return "string" === typeof i ? i.trim() : i
            }
            var n
        }
        measureInstanceViewportBox(e, t) {
            let {transformPagePoint: n} = t;
            return Jr(e, n)
        }
        build(e, t, n) {
            ro(e, t, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t, n) {
            return Eo(e, t, n)
        }
    }
    class $o extends Bo {
        constructor() {
            super(...arguments),
            this.type = "svg",
            this.isSVGTag = !1,
            this.measureInstanceViewportBox = zr,
            this.updateDimensions = () => {
                this.current && !this.renderState.dimensions && To(this.current, this.renderState)
            }
        }
        getBaseTargetFromProps(e, t) {
            return e[t]
        }
        readValueFromInstance(e, t) {
            if (H.has(t)) {
                const e = vt(t);
                return e && e.default || 0
            }
            return t = Mo.has(t) ? t : ge(t),
            e.getAttribute(t)
        }
        scrapeMotionValuesFromProps(e, t, n) {
            return Lo(e, t, n)
        }
        onBindTransform() {
            this.current && !this.renderState.dimensions && J.postRender(this.updateDimensions)
        }
        build(e, t, n) {
            yo(e, t, this.isSVGTag, n.transformTemplate)
        }
        renderInstance(e, t, n, r) {
            Do(e, t, 0, r)
        }
        mount(e) {
            this.isSVGTag = wo(e.tagName),
            super.mount(e)
        }
    }
    const Wo = a(Oo({
        ...fr,
        ...Oa,
        ...Ea,
        ..._a
    }, ( (e, t) => po(e) ? new $o(t) : new Uo(t,{
        allowProjection: e !== r.Fragment
    }))));
    var Ho, qo, Qo = n(47);
    function Yo(e, t) {
        return e + Math.random() * (t - e)
    }
    !function(e) {
        e[e.Circle = 0] = "Circle",
        e[e.Square = 1] = "Square",
        e[e.Strip = 2] = "Strip"
    }(Ho || (Ho = {})),
    function(e) {
        e[e.Positive = 1] = "Positive",
        e[e.Negative = -1] = "Negative"
    }(qo || (qo = {}));
    class Ko {
        constructor(e, t, n, r) {
            this.getOptions = t;
            const {colors: i, initialVelocityX: a, initialVelocityY: o} = this.getOptions();
            var s, l;
            this.context = e,
            this.x = n,
            this.y = r,
            this.w = Yo(5, 20),
            this.h = Yo(5, 20),
            this.radius = Yo(5, 10),
            this.vx = "number" === typeof a ? Yo(-a, a) : Yo(a.min, a.max),
            this.vy = "number" === typeof o ? Yo(-o, 0) : Yo(o.min, o.max),
            this.shape = (s = 0,
            l = 2,
            Math.floor(s + Math.random() * (l - s + 1))),
            this.angle = function(e) {
                return e * Math.PI / 180
            }(Yo(0, 360)),
            this.angularSpin = Yo(-.2, .2),
            this.color = i[Math.floor(Math.random() * i.length)],
            this.rotateY = Yo(0, 1),
            this.rotationDirection = Yo(0, 1) ? qo.Positive : qo.Negative
        }
        update() {
            const {gravity: e, wind: t, friction: n, opacity: r, drawShape: i} = this.getOptions();
            this.x += this.vx,
            this.y += this.vy,
            this.vy += e,
            this.vx += t,
            this.vx *= n,
            this.vy *= n,
            this.rotateY >= 1 && this.rotationDirection === qo.Positive ? this.rotationDirection = qo.Negative : this.rotateY <= -1 && this.rotationDirection === qo.Negative && (this.rotationDirection = qo.Positive);
            const a = .1 * this.rotationDirection;
            if (this.rotateY += a,
            this.angle += this.angularSpin,
            this.context.save(),
            this.context.translate(this.x, this.y),
            this.context.rotate(this.angle),
            this.context.scale(1, this.rotateY),
            this.context.rotate(this.angle),
            this.context.beginPath(),
            this.context.fillStyle = this.color,
            this.context.strokeStyle = this.color,
            this.context.globalAlpha = r,
            this.context.lineCap = "round",
            this.context.lineWidth = 2,
            i && "function" === typeof i)
                i.call(this, this.context);
            else
                switch (this.shape) {
                case Ho.Circle:
                    this.context.beginPath(),
                    this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
                    this.context.fill();
                    break;
                case Ho.Square:
                    this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
                    break;
                case Ho.Strip:
                    this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h)
                }
            this.context.closePath(),
            this.context.restore()
        }
    }
    class Xo {
        constructor(e, t) {
            this.x = 0,
            this.y = 0,
            this.w = 0,
            this.h = 0,
            this.lastNumberOfPieces = 0,
            this.tweenInitTime = Date.now(),
            this.particles = [],
            this.particlesGenerated = 0,
            this.removeParticleAt = e => {
                this.particles.splice(e, 1)
            }
            ,
            this.getParticle = () => {
                const e = Yo(this.x, this.w + this.x)
                  , t = Yo(this.y, this.h + this.y);
                return new Ko(this.context,this.getOptions,e,t)
            }
            ,
            this.animate = () => {
                const {canvas: e, context: t, particlesGenerated: n, lastNumberOfPieces: r} = this
                  , {run: i, recycle: a, numberOfPieces: o, debug: s, tweenFunction: l, tweenDuration: u} = this.getOptions();
                if (!i)
                    return !1;
                const c = this.particles.length
                  , d = a ? c : n
                  , f = Date.now();
                if (d < o) {
                    r !== o && (this.tweenInitTime = f,
                    this.lastNumberOfPieces = o);
                    const {tweenInitTime: e} = this
                      , t = l(f - e > u ? u : Math.max(0, f - e), d, o, u)
                      , n = Math.round(t - d);
                    for (let r = 0; r < n; r++)
                        this.particles.push(this.getParticle());
                    this.particlesGenerated += n
                }
                return s && (t.font = "12px sans-serif",
                t.fillStyle = "#333",
                t.textAlign = "right",
                t.fillText(`Particles: ${c}`, e.width - 10, e.height - 20)),
                this.particles.forEach(( (t, n) => {
                    t.update(),
                    (t.y > e.height || t.y < -100 || t.x > e.width + 100 || t.x < -100) && (a && d <= o ? this.particles[n] = this.getParticle() : this.removeParticleAt(n))
                }
                )),
                c > 0 || d < o
            }
            ,
            this.canvas = e;
            const n = this.canvas.getContext("2d");
            if (!n)
                throw new Error("Could not get canvas context");
            this.context = n,
            this.getOptions = t
        }
    }
    const Go = {
        width: "undefined" !== typeof window ? window.innerWidth : 300,
        height: "undefined" !== typeof window ? window.innerHeight : 200,
        numberOfPieces: 200,
        friction: .99,
        wind: 0,
        gravity: .1,
        initialVelocityX: 4,
        initialVelocityY: 10,
        colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548"],
        opacity: 1,
        debug: !1,
        tweenFunction: Qo.easeInOutQuad,
        tweenDuration: 5e3,
        recycle: !0,
        run: !0
    };
    class Zo {
        constructor(e, t) {
            this.lastFrameTime = Date.now(),
            this.setOptionsWithDefaults = e => {
                const t = {
                    confettiSource: {
                        x: 0,
                        y: 0,
                        w: this.canvas.width,
                        h: 0
                    }
                };
                this._options = {
                    ...t,
                    ...Go,
                    ...e
                },
                Object.assign(this, e.confettiSource)
            }
            ,
            this.update = () => {
                const {options: {run: e, onConfettiComplete: t, frameRate: n}, canvas: r, context: i} = this;
                if (n) {
                    const e = Date.now()
                      , t = e - this.lastFrameTime;
                    if (t < 1e3 / n)
                        return void (this.rafId = requestAnimationFrame(this.update));
                    this.lastFrameTime = e - t % n
                }
                e && (i.fillStyle = "white",
                i.clearRect(0, 0, r.width, r.height)),
                this.generator.animate() ? this.rafId = requestAnimationFrame(this.update) : (t && "function" === typeof t && this.generator.particlesGenerated > 0 && t.call(this, this),
                this._options.run = !1)
            }
            ,
            this.reset = () => {
                this.generator && this.generator.particlesGenerated > 0 && (this.generator.particlesGenerated = 0,
                this.generator.particles = [],
                this.generator.lastNumberOfPieces = 0)
            }
            ,
            this.stop = () => {
                this.options = {
                    run: !1
                },
                this.rafId && (cancelAnimationFrame(this.rafId),
                this.rafId = void 0)
            }
            ,
            this.canvas = e;
            const n = this.canvas.getContext("2d");
            if (!n)
                throw new Error("Could not get canvas context");
            this.context = n,
            this.generator = new Xo(this.canvas,( () => this.options)),
            this.options = t,
            this.update()
        }
        get options() {
            return this._options
        }
        set options(e) {
            const t = this._options?.run
              , n = this._options?.recycle;
            this.setOptionsWithDefaults(e),
            this.generator && (Object.assign(this.generator, this.options.confettiSource),
            "boolean" === typeof e.recycle && e.recycle && !1 === n && (this.generator.lastNumberOfPieces = this.generator.particles.length)),
            "boolean" === typeof e.run && e.run && !1 === t && this.update()
        }
    }
    const Jo = r.createRef();
    class es extends r.Component {
        constructor(e) {
            super(e),
            this.canvas = r.createRef(),
            this.canvas = e.canvasRef || Jo
        }
        componentDidMount() {
            if (this.canvas.current) {
                const e = ts(this.props)[0];
                this.confetti = new Zo(this.canvas.current,e)
            }
        }
        componentDidUpdate() {
            const e = ts(this.props)[0];
            this.confetti && (this.confetti.options = e)
        }
        componentWillUnmount() {
            this.confetti && this.confetti.stop(),
            this.confetti = void 0
        }
        render() {
            const [e,t] = ts(this.props)
              , n = {
                zIndex: 2,
                position: "absolute",
                pointerEvents: "none",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                ...t.style
            };
            return (0,
            ai.jsx)("canvas", {
                width: e.width,
                height: e.height,
                ref: this.canvas,
                ...t,
                style: n
            })
        }
    }
    function ts(e) {
        const t = {}
          , n = {}
          , r = [...Object.keys(Go), "confettiSource", "drawShape", "onConfettiComplete", "frameRate"]
          , i = ["canvasRef"];
        for (const a in e) {
            const o = e[a];
            r.includes(a) ? t[a] = o : i.includes(a) ? i[a] = o : n[a] = o
        }
        return [t, n, {}]
    }
    es.defaultProps = {
        ...Go
    },
    es.displayName = "ReactConfetti";
    const ns = r.forwardRef(( (e, t) => (0,
    ai.jsx)(es, {
        canvasRef: t,
        ...e
    })))
      , rs = () => {
        const [e,t] = (0,
        r.useState)(0)
          , [n,i] = (0,
        r.useState)({
            x: 0,
            y: 0
        })
          , [a,o] = (0,
        r.useState)(!1)
          , [s,l] = (0,
        r.useState)(!1)
          , u = ["You're the most amazing person I've ever met!", "Your smile brightens up my darkest days!", "I can't imagine my life without you!", "Will you be my Valentine? \ud83d\udc96"]
          , [c,d] = (0,
        r.useState)(0);
        (0,
        r.useEffect)(( () => {
            if (2 === e) {
                const e = setInterval(( () => {
                    d((e => (e + 1) % u.length)),
                    c === u.length - 1 && t(3)
                }
                ), 4e3);
                return () => clearInterval(e)
            }
        }
        ), [e, c]);
        const f = e => {
            const t = (Math.random() < .5 ? -1 : 1) * (100 * Math.random() + 40)
              , n = (Math.random() < .5 ? -1 : 1) * (100 * Math.random() + 40);
            i((e => ({
                x: e.x + t,
                y: e.y + n
            })))
        }
        ;
        return (0,
        ai.jsxs)("div", {
            className: "container",
            children: [0 === e && (0,
            ai.jsx)(Wo.div, {
                className: "envelope",
                initial: {
                    scale: 1
                },
                animate: {
                    scale: 1.2
                },
                transition: {
                    repeat: 1 / 0,
                    repeatType: "reverse",
                    duration: 1
                },
                onClick: () => {
                    t(1),
                    setTimeout(( () => t(2)), 2e3)
                }
                ,
                children: "Click to unveil the surprise \u2709\ufe0f"
            }), 1 === e && (0,
            ai.jsx)(Wo.div, {
                className: "envelope open",
                initial: {
                    scale: 1,
                    opacity: 1
                },
                animate: {
                    scale: 1.5,
                    opacity: 0
                },
                transition: {
                    duration: 1
                }
            }), 2 === e && (0,
            ai.jsx)(Wo.div, {
                className: "message",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -20
                },
                transition: {
                    duration: .8
                },
                children: u[c]
            }, c), 3 === e && !s && (0,
            ai.jsxs)("div", {
                className: "final-question",
                children: [(0,
                ai.jsx)("h2", {
                    children: "Will you be my Valentine? \ud83d\udc96"
                }), (0,
                ai.jsxs)("div", {
                    className: "button-container",
                    children: [(0,
                    ai.jsx)("button", {
                        className: "yes-btn",
                        onClick: () => {
                            o(!0),
                            l(!0)
                        }
                        ,
                        children: "Yes"
                    }), (0,
                    ai.jsx)(Wo.button, {
                        className: "no-btn",
                        onMouseEnter: f,
                        onMouseLeave: f,
                        animate: {
                            x: n.x,
                            y: n.y
                        },
                        transition: {
                            type: "spring",
                            stiffness: 60
                        },
                        children: "No"
                    })]
                })]
            }), a && (0,
            ai.jsx)(ns, {}), s && (0,
            ai.jsxs)("div", {
                className: "congrats-message",
                children: [(0,
                ai.jsx)("h1", {
                    className: "congrats-heading",
                    children: "\ud83d\udc96 Congratulations! \ud83d\udc96"
                }), (0,
                ai.jsx)("p", {
                    className: "congrats-text",
                    children: "You have made my day, my Valentine! \ud83c\udf89"
                })]
            })]
        })
    }
    ;
    i.createRoot(document.getElementById("root")).render((0,
    ai.jsx)(r.StrictMode, {
        children: (0,
        ai.jsx)(rs, {})
    }))
}
)();
//# sourceMappingURL=main.6bc81107.js.map
