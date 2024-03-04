var _ = _ || {};
(function (_) {
    var window = this;
    try {
        var aaa;
        var cb;

        _.ha = function () {
            return function (a) {
                return a
            }
        };

        _.wa = function () {
            return function () {}
        };

        _.xa = function (a) {
            return function (b) {
                this[a] = b
            }
        };

        _.ya = function (a) {
            return function () {
                return this[a]
            }
        };

        _.Aa = function (a) {
            return function () {
                return a
            }
        };

        _.Fa = function (a, b, c) {
            a = a.split(".");
            c = c || _.Ga;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] ? c[d] : c[d] = {} : c[d] = b
        };

        _.La = function (a, b) {
            for (var c = a.split("."), d = b || _.Ga, e; e = c.shift();)
                if (null != d[e]) d = d[e];
                else return null;
            return d
        };

        _.Ma = function () {};

        _.Oa = function (a) {
            a.H = function () {
                return a.JS ? a.JS : a.JS = new a
            }
        };

        _.Pa = function (a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        };

        _.Ra = function (a) {
            return void 0 !== a
        };

        _.Ta = function (a) {
            return "array" == (0, _.Pa)(a)
        };

        _.Ua = function (a) {
            var b = (0, _.Pa)(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        };

        _.Va = function (a) {
            return "string" == typeof a
        };

        _.Ya = function (a) {
            return "number" == typeof a
        };

        _.Za = function (a) {
            return "function" == (0, _.Pa)(a)
        };

        _.ab = function (a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        };

        _.bb = function (a) {
            return a[cb] || (a[cb] = ++aaa)
        };

        var baa = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        };

        // rest of the code

    } catch (error) {
        console.error("An error occurred:", error);
    }
})();
