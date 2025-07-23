var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
(function(global, factory) {
    "use strict";
    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") { // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
        };
    } else {
        factory(global);
    } // Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function(window, noGlobal) { // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";
    var arr = [];
    var document = window.document;
    var getProto = Object.getPrototypeOf;
    var _slice = arr.slice;
    var concat = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    var isFunction = function isFunction(obj) { // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    };
    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
    };
    var preservedScriptAttributes = {
        type: true,
        src: true,
        noModule: true
    };

    function DOMEval(code, doc, node) {
        doc = doc || document;
        var i, script = doc.createElement("script");
        script.text = code;
        if (node) {
            for (i in preservedScriptAttributes) {
                if (node[i]) {
                    script[i] = node[i];
                }
            }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }

    function toType(obj) {
        if (obj == null) {
            return obj + "";
        } // Support: Android <=2.3 only (functionish RegExp)
        return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
    } /* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module
    var version = "3.3.1", // Define a local copy of jQuery
        jQuery = function jQuery(selector, context) { // The jQuery object is actually just the init constructor 'enhanced'
            // Need init if jQuery is called (just allow error to be thrown if not included)
            return new jQuery.fn.init(selector, context);
        }, // Support: Android <=4.0 only
        // Make sure we trim BOM and NBSP
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    jQuery.fn = jQuery.prototype = { // The current version of jQuery being used
        jquery: version,
        constructor: jQuery, // The default length of a jQuery object is 0
        length: 0,
        toArray: function toArray() {
            return _slice.call(this);
        }, // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function get(num) { // Return all the elements in a clean array
            if (num == null) {
                return _slice.call(this);
            } // Return just the one element from the set
            return num < 0 ? this[num + this.length] : this[num];
        }, // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function pushStack(elems) { // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)
            ret.prevObject = this; // Return the newly-formed element set
            return ret;
        }, // Execute a callback for every element in the matched set.
        each: function each(callback) {
            return jQuery.each(this, callback);
        },
        map: function map(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function slice() {
            return this.pushStack(_slice.apply(this, arguments));
        },
        first: function first() {
            return this.eq(0);
        },
        last: function last() {
            return this.eq(-1);
        },
        eq: function eq(i) {
            var len = this.length,
                j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function end() {
            return this.prevObject || this.constructor();
        }, // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false; // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target; // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        } // Handle case when target is a string or something (possible in deep copy)
        if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !isFunction(target)) {
            target = {};
        } // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }
        for (; i < length; i++) { // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) { // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name]; // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    } // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        } // Never move original objects, clone them
                        target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        } // Return the modified object
        return target;
    };
    jQuery.extend({ // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""), // Assume jQuery is ready without the ready module
        isReady: true,
        error: function error(msg) {
            throw new Error(msg);
        },
        noop: function noop() {},
        isPlainObject: function isPlainObject(obj) {
            var proto, Ctor; // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if (!obj || toString.call(obj) !== "[object Object]") {
                return false;
            }
            proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if (!proto) {
                return true;
            } // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function isEmptyObject(obj) {
            /* eslint-disable no-unused-vars */ // See https://github.com/eslint/eslint/issues/6125
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        }, // Evaluates a script in a global context
        globalEval: function globalEval(code) {
            DOMEval(code);
        },
        each: function each(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for (; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            }
            return obj;
        }, // Support: Android <=4.0 only
        trim: function trim(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        }, // results is for internal usage only
        makeArray: function makeArray(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
                } else {
                    push.call(ret, arr);
                }
            }
            return ret;
        },
        inArray: function inArray(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        }, // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function merge(first, second) {
            var len = +second.length,
                j = 0,
                i = first.length;
            for (; j < len; j++) {
                first[i++] = second[j];
            }
            first.length = i;
            return first;
        },
        grep: function grep(elems, callback, invert) {
            var callbackInverse, matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert; // Go through the array, only saving the items
            // that pass the validator function
            for (; i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }
            return matches;
        }, // arg is for internal usage only
        map: function map(elems, callback, arg) {
            var length, value, i = 0,
                ret = []; // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                } // Go through every key on the object,
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                }
            } // Flatten any nested arrays
            return concat.apply([], ret);
        }, // A global GUID counter for objects
        guid: 1, // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });
    if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    } // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });

    function isArrayLike(obj) { // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length,
            type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
            return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var Sizzle =
        /*!
         * Sizzle CSS Selector Engine v2.3.3
         * https://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-08-08
         */
        function(window) {
            var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, // Local document vars
                setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, // Instance-specific data
                expando = "sizzle" + 1 * new Date(),
                preferredDoc = window.document,
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                sortOrder = function sortOrder(a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                    }
                    return 0;
                }, // Instance methods
                hasOwn = {}.hasOwnProperty,
                arr = [],
                pop = arr.pop,
                push_native = arr.push,
                push = arr.push,
                slice = arr.slice, // Use a stripped-down indexOf as it's faster than native
                // https://jsperf.com/thor-indexof-vs-for/5
                indexOf = function indexOf(list, elem) {
                    var i = 0,
                        len = list.length;
                    for (; i < len; i++) {
                        if (list[i] === elem) {
                            return i;
                        }
                    }
                    return -1;
                },
                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
                // http://www.w3.org/TR/css3-selectors/#whitespace
                whitespace = "[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
                identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
                "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
                pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                // 1. quoted (capture 3; capture 4 or capture 5)
                "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
                "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
                ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                rwhitespace = new RegExp(whitespace + "+", "g"),
                rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
                rpseudo = new RegExp(pseudos),
                ridentifier = new RegExp("^" + identifier + "$"),
                matchExpr = {
                    "ID": new RegExp("^#(" + identifier + ")"),
                    "CLASS": new RegExp("^\\.(" + identifier + ")"),
                    "TAG": new RegExp("^(" + identifier + "|[*])"),
                    "ATTR": new RegExp("^" + attributes),
                    "PSEUDO": new RegExp("^" + pseudos),
                    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    "bool": new RegExp("^(?:" + booleans + ")$", "i"), // For use in libraries implementing .is()
                    // We use this for POS matching in `select`
                    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                },
                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,
                rnative = /^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                rsibling = /[+~]/, // CSS escapes
                // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                funescape = function funescape(_, escaped, escapedWhitespace) {
                    var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
                    // Support: Firefox<24
                    // Workaround erroneous numeric interpretation of +"0x"
                    return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
                        String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
                        String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
                }, // CSS string/identifier serialization
                // https://drafts.csswg.org/cssom/#common-serializing-idioms
                rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                fcssescape = function fcssescape(ch, asCodePoint) {
                    if (asCodePoint) { // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                        if (ch === "\0") {
                            return "\uFFFD";
                        } // Control characters and (dependent upon position) numbers get escaped as code points
                        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                    } // Other potentially-special ASCII characters get backslash-escaped
                    return "\\" + ch;
                }, // Used for iframes
                // See setDocument()
                // Removing the function wrapper causes a "Permission Denied"
                // error in IE
                unloadHandler = function unloadHandler() {
                    setDocument();
                },
                disabledAncestor = addCombinator(function(elem) {
                    return elem.disabled === true && ("form" in elem || "label" in elem);
                }, {
                    dir: "parentNode",
                    next: "legend"
                }); // Optimize for push.apply( _, NodeList )
            try {
                push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
                // Detect silently failing push.apply
                arr[preferredDoc.childNodes.length].nodeType;
            } catch (e) {
                push = {
                    apply: arr.length ? // Leverage slice if possible
                        function(target, els) {
                            push_native.apply(target, slice.call(els));
                        } : // Support: IE<9
                        // Otherwise append directly
                        function(target, els) {
                            var j = target.length,
                                i = 0; // Can't trust NodeList.length
                            while (target[j++] = els[i++]) {}
                            target.length = j - 1;
                        }
                };
            }

            function Sizzle(selector, context, results, seed) {
                var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
                    nodeType = context ? context.nodeType : 9;
                results = results || []; // Return early from calls with invalid selector or context
                if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                    return results;
                } // Try to shortcut find operations (as opposed to filters) in HTML documents
                if (!seed) {
                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context);
                    }
                    context = context || document;
                    if (documentIsHTML) { // If the selector is sufficiently simple, try using a "get*By*" DOM method
                        // (excepting DocumentFragment context, where the methods don't exist)
                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) { // ID selector
                            if (m = match[1]) { // Document context
                                if (nodeType === 9) {
                                    if (elem = context.getElementById(m)) { // Support: IE, Opera, Webkit
                                        // TODO: identify versions
                                        // getElementById can match elements by name instead of ID
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else {
                                        return results;
                                    } // Element context
                                } else { // Support: IE, Opera, Webkit
                                    // TODO: identify versions
                                    // getElementById can match elements by name instead of ID
                                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                } // Type selector
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results; // Class selector
                            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                        } // Take advantage of querySelectorAll
                        if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            if (nodeType !== 1) {
                                newContext = context;
                                newSelector = selector; // qSA looks outside Element context, which is not what we want
                                // Thanks to Andrew Dupont for this workaround technique
                                // Support: IE <=8
                                // Exclude object elements
                            } else if (context.nodeName.toLowerCase() !== "object") { // Capture the context ID, setting it first if necessary
                                if (nid = context.getAttribute("id")) {
                                    nid = nid.replace(rcssescape, fcssescape);
                                } else {
                                    context.setAttribute("id", nid = expando);
                                } // Prefix every selector in the list
                                groups = tokenize(selector);
                                i = groups.length;
                                while (i--) {
                                    groups[i] = "#" + nid + " " + toSelector(groups[i]);
                                }
                                newSelector = groups.join(","); // Expand context for sibling selectors
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            }
                            if (newSelector) {
                                try {
                                    push.apply(results, newContext.querySelectorAll(newSelector));
                                    return results;
                                } catch (qsaError) {} finally {
                                    if (nid === expando) {
                                        context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }
                } // All others
                return select(selector.replace(rtrim, "$1"), context, results, seed);
            }
            /**
             * Create key-value caches of limited size
             * @returns {function(string, object)} Returns the Object data after storing it on itself with
             *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
             *	deleting the oldest entry
             */
            function createCache() {
                var keys = [];

                function cache(key, value) { // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                    if (keys.push(key + " ") > Expr.cacheLength) { // Only keep the most recent entries
                        delete cache[keys.shift()];
                    }
                    return cache[key + " "] = value;
                }
                return cache;
            }
            /**
             * Mark a function for special use by Sizzle
             * @param {Function} fn The function to mark
             */
            function markFunction(fn) {
                fn[expando] = true;
                return fn;
            }
            /**
             * Support testing using an element
             * @param {Function} fn Passed the created element and returns a boolean result
             */
            function assert(fn) {
                var el = document.createElement("fieldset");
                try {
                    return !!fn(el);
                } catch (e) {
                    return false;
                } finally { // Remove from its parent by default
                    if (el.parentNode) {
                        el.parentNode.removeChild(el);
                    } // release memory in IE
                    el = null;
                }
            }
            /**
             * Adds the same handler for all of the specified attrs
             * @param {String} attrs Pipe-separated list of attributes
             * @param {Function} handler The method that will be applied
             */
            function addHandle(attrs, handler) {
                var arr = attrs.split("|"),
                    i = arr.length;
                while (i--) {
                    Expr.attrHandle[arr[i]] = handler;
                }
            }
            /**
             * Checks document order of two siblings
             * @param {Element} a
             * @param {Element} b
             * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
             */
            function siblingCheck(a, b) {
                var cur = b && a,
                    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes
                if (diff) {
                    return diff;
                } // Check if b follows a
                if (cur) {
                    while (cur = cur.nextSibling) {
                        if (cur === b) {
                            return -1;
                        }
                    }
                }
                return a ? 1 : -1;
            }
            /**
             * Returns a function to use in pseudos for input types
             * @param {String} type
             */
            function createInputPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                };
            }
            /**
             * Returns a function to use in pseudos for buttons
             * @param {String} type
             */
            function createButtonPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type;
                };
            }
            /**
             * Returns a function to use in pseudos for :enabled/:disabled
             * @param {Boolean} disabled true for :disabled; false for :enabled
             */
            function createDisabledPseudo(disabled) { // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
                return function(elem) { // Only certain elements can match :enabled or :disabled
                    // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                    // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                    if ("form" in elem) { // Check for inherited disabledness on relevant non-disabled elements:
                        // * listed form-associated elements in a disabled fieldset
                        //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                        //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                        // * option elements in a disabled optgroup
                        //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                        // All such elements have a "form" property.
                        if (elem.parentNode && elem.disabled === false) { // Option elements defer to a parent optgroup if present
                            if ("label" in elem) {
                                if ("label" in elem.parentNode) {
                                    return elem.parentNode.disabled === disabled;
                                } else {
                                    return elem.disabled === disabled;
                                }
                            } // Support: IE 6 - 11
                            // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                                /* jshint -W018 */
                                elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
                        }
                        return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
                        // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                        // even exist on them, let alone have a boolean value.
                    } else if ("label" in elem) {
                        return elem.disabled === disabled;
                    } // Remaining elements are neither :enabled nor :disabled
                    return false;
                };
            }
            /**
             * Returns a function to use in pseudos for positionals
             * @param {Function} fn
             */
            function createPositionalPseudo(fn) {
                return markFunction(function(argument) {
                    argument = +argument;
                    return markFunction(function(seed, matches) {
                        var j, matchIndexes = fn([], seed.length, argument),
                            i = matchIndexes.length; // Match elements found at the specified indexes
                        while (i--) {
                            if (seed[j = matchIndexes[i]]) {
                                seed[j] = !(matches[j] = seed[j]);
                            }
                        }
                    });
                });
            }
            /**
             * Checks a node for validity as a Sizzle context
             * @param {Element|Object=} context
             * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
             */
            function testContext(context) {
                return context && typeof context.getElementsByTagName !== "undefined" && context;
            } // Expose support vars for convenience
            support = Sizzle.support = {};
            /**
             * Detects XML nodes
             * @param {Element|Object} elem An element or a document
             * @returns {Boolean} True iff elem is a non-HTML XML node
             */
            isXML = Sizzle.isXML = function(elem) { // documentElement is verified for cases where it doesn't yet exist
                // (such as loading iframes in IE - #4833)
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            };
            /**
             * Sets document-related variables once based on the current document
             * @param {Element|Object} [doc] An element or document object to use to set the document
             * @returns {Object} Returns the current document
             */
            setDocument = Sizzle.setDocument = function(node) {
                var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document;
                } // Update global variables
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
                // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
                if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) { // Support: IE 11, Edge
                    if (subWindow.addEventListener) {
                        subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
                    } else if (subWindow.attachEvent) {
                        subWindow.attachEvent("onunload", unloadHandler);
                    }
                }
                /* Attributes
                	---------------------------------------------------------------------- */ // Support: IE<8
                // Verify that getAttribute really returns attributes and not properties
                // (excepting IE8 booleans)
                support.attributes = assert(function(el) {
                    el.className = "i";
                    return !el.getAttribute("className");
                });
                /* getElement(s)By*
                	---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
                support.getElementsByTagName = assert(function(el) {
                    el.appendChild(document.createComment(""));
                    return !el.getElementsByTagName("*").length;
                }); // Support: IE<9
                support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
                // Check if getElementById returns elements by name
                // The broken getElementById methods don't pick up programmatically-set names,
                // so use a roundabout getElementsByName test
                support.getById = assert(function(el) {
                    docElem.appendChild(el).id = expando;
                    return !document.getElementsByName || !document.getElementsByName(expando).length;
                }); // ID filter and find
                if (support.getById) {
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId;
                        };
                    };
                    Expr.find["ID"] = function(id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var elem = context.getElementById(id);
                            return elem ? [elem] : [];
                        }
                    };
                } else {
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                            return node && node.value === attrId;
                        };
                    }; // Support: IE 6 - 7 only
                    // getElementById is not reliable as a find shortcut
                    Expr.find["ID"] = function(id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var node, i, elems, elem = context.getElementById(id);
                            if (elem) { // Verify the id attribute
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) {
                                    return [elem];
                                } // Fall back on getElementsByName
                                elems = context.getElementsByName(id);
                                i = 0;
                                while (elem = elems[i++]) {
                                    node = elem.getAttributeNode("id");
                                    if (node && node.value === id) {
                                        return [elem];
                                    }
                                }
                            }
                            return [];
                        }
                    };
                } // Tag
                Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                    if (typeof context.getElementsByTagName !== "undefined") {
                        return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
                    } else if (support.qsa) {
                        return context.querySelectorAll(tag);
                    }
                } : function(tag, context) {
                    var elem, tmp = [],
                        i = 0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                        results = context.getElementsByTagName(tag); // Filter out possible comments
                    if (tag === "*") {
                        while (elem = results[i++]) {
                            if (elem.nodeType === 1) {
                                tmp.push(elem);
                            }
                        }
                        return tmp;
                    }
                    return results;
                }; // Class
                Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                        return context.getElementsByClassName(className);
                    }
                };
                /* QSA/matchesSelector
                	---------------------------------------------------------------------- */ // QSA and matchesSelector support
                // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
                // We allow this because of a bug in IE8/9 that throws an error
                // whenever `document.activeElement` is accessed on an iframe
                // So, we allow :focus to pass through QSA all the time to avoid the IE error
                // See https://bugs.jquery.com/ticket/13378
                rbuggyQSA = [];
                if (support.qsa = rnative.test(document.querySelectorAll)) { // Build QSA regex
                    // Regex strategy adopted from Diego Perini
                    assert(function(el) { // Select is set to empty string on purpose
                        // This is to test IE's treatment of not explicitly
                        // setting a boolean content attribute,
                        // since its presence should be enough
                        // https://bugs.jquery.com/ticket/12359
                        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
                        // Nothing should be selected when empty strings follow ^= or $= or *=
                        // The test attribute must be unknown in Opera but "safe" for WinRT
                        // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                        if (el.querySelectorAll("[msallowcapture^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                        } // Support: IE8
                        // Boolean attributes and "value" are not treated correctly
                        if (!el.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                        } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                            rbuggyQSA.push("~=");
                        } // Webkit/Opera - :checked should return selected option elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        // IE8 throws error here and will not see later tests
                        if (!el.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked");
                        } // Support: Safari 8+, iOS 8+
                        // https://bugs.webkit.org/show_bug.cgi?id=136851
                        // In-page `selector#id sibling-combinator selector` fails
                        if (!el.querySelectorAll("a#" + expando + "+*").length) {
                            rbuggyQSA.push(".#.+[+~]");
                        }
                    });
                    assert(function(el) {
                        el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
                        // The type and name attributes are restricted during .innerHTML assignment
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        el.appendChild(input).setAttribute("name", "D"); // Support: IE8
                        // Enforce case-sensitivity of name attribute
                        if (el.querySelectorAll("[name=d]").length) {
                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                        } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                        // IE8 throws error here and will not see later tests
                        if (el.querySelectorAll(":enabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        } // Support: IE9-11+
                        // IE's :disabled selector does not pick up the children of disabled fieldsets
                        docElem.appendChild(el).disabled = true;
                        if (el.querySelectorAll(":disabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        } // Opera 10-11 does not throw on post-comma invalid pseudos
                        el.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:");
                    });
                }
                if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                    assert(function(el) { // Check to see if it's possible to do matchesSelector
                        // on a disconnected node (IE 9)
                        support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
                        // Gecko does not error, returns false instead
                        matches.call(el, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos);
                    });
                }
                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                /* Contains
                	---------------------------------------------------------------------- */
                hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
                // Purposefully self-exclusive
                // As in, an element does not contain itself
                contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                    var adown = a.nodeType === 9 ? a.documentElement : a,
                        bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                } : function(a, b) {
                    if (b) {
                        while (b = b.parentNode) {
                            if (b === a) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                /* Sorting
                	---------------------------------------------------------------------- */ // Document order sorting
                sortOrder = hasCompare ? function(a, b) { // Flag for duplicate removal
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    } // Sort on method existence if only one input has compareDocumentPosition
                    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    if (compare) {
                        return compare;
                    } // Calculate position if both inputs belong to the same document
                    compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                        1; // Disconnected nodes
                    if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) { // Choose the first element that is related to our preferred document
                        if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                            return -1;
                        }
                        if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                            return 1;
                        } // Maintain original order
                        return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                    }
                    return compare & 4 ? -1 : 1;
                } : function(a, b) { // Exit early if the nodes are identical
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    }
                    var cur, i = 0,
                        aup = a.parentNode,
                        bup = b.parentNode,
                        ap = [a],
                        bp = [b]; // Parentless nodes are either documents or disconnected
                    if (!aup || !bup) {
                        return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
                    } else if (aup === bup) {
                        return siblingCheck(a, b);
                    } // Otherwise we need full lists of their ancestors for comparison
                    cur = a;
                    while (cur = cur.parentNode) {
                        ap.unshift(cur);
                    }
                    cur = b;
                    while (cur = cur.parentNode) {
                        bp.unshift(cur);
                    } // Walk down the tree looking for a discrepancy
                    while (ap[i] === bp[i]) {
                        i++;
                    }
                    return i ? // Do a sibling check if the nodes have a common ancestor
                        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
                        ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
                };
                return document;
            };
            Sizzle.matches = function(expr, elements) {
                return Sizzle(expr, null, null, elements);
            };
            Sizzle.matchesSelector = function(elem, expr) { // Set document vars if needed
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                } // Make sure that attribute selectors are quoted
                expr = expr.replace(rattributeQuotes, "='$1']");
                if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                    try {
                        var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes
                        if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                            // fragment in IE 9
                            elem.document && elem.document.nodeType !== 11) {
                            return ret;
                        }
                    } catch (e) {}
                }
                return Sizzle(expr, document, null, [elem]).length > 0;
            };
            Sizzle.contains = function(context, elem) { // Set document vars if needed
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context);
                }
                return contains(context, elem);
            };
            Sizzle.attr = function(elem, name) { // Set document vars if needed
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }
                var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
                    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            };
            Sizzle.escape = function(sel) {
                return (sel + "").replace(rcssescape, fcssescape);
            };
            Sizzle.error = function(msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg);
            };
            /**
             * Document sorting and removing duplicates
             * @param {ArrayLike} results
             */
            Sizzle.uniqueSort = function(results) {
                var elem, duplicates = [],
                    j = 0,
                    i = 0; // Unless we *know* we can detect duplicates, assume their presence
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);
                if (hasDuplicate) {
                    while (elem = results[i++]) {
                        if (elem === results[i]) {
                            j = duplicates.push(i);
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1);
                    }
                } // Clear input after sorting to release objects
                // See https://github.com/jquery/sizzle/pull/225
                sortInput = null;
                return results;
            };
            /**
             * Utility function for retrieving the text value of an array of DOM nodes
             * @param {Array|Element} elem
             */
            getText = Sizzle.getText = function(elem) {
                var node, ret = "",
                    i = 0,
                    nodeType = elem.nodeType;
                if (!nodeType) { // If no nodeType, this is expected to be an array
                    while (node = elem[i++]) { // Do not traverse comment nodes
                        ret += getText(node);
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) { // Use textContent for elements
                    // innerText usage removed for consistency of new lines (jQuery #11153)
                    if (typeof elem.textContent === "string") {
                        return elem.textContent;
                    } else { // Traverse its children
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem);
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue;
                } // Do not include comment or processing instruction nodes
                return ret;
            };
            Expr = Sizzle.selectors = { // Can be adjusted by the user
                cacheLength: 50,
                createPseudo: markFunction,
                match: matchExpr,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    "ATTR": function ATTR(match) {
                        match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted
                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " ";
                        }
                        return match.slice(0, 4);
                    },
                    "CHILD": function CHILD(match) {
                        /* matches from matchExpr["CHILD"]
                        				1 type (only|nth|...)
                        				2 what (child|of-type)
                        				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                        				4 xn-component of xn+y argument ([+-]?\d*n|)
                        				5 sign of xn-component
                        				6 x of xn-component
                        				7 sign of y-component
                        				8 y of y-component
                        			*/
                        match[1] = match[1].toLowerCase();
                        if (match[1].slice(0, 3) === "nth") { // nth-* requires argument
                            if (!match[3]) {
                                Sizzle.error(match[0]);
                            } // numeric x and y parameters for Expr.filter.CHILD
                            // remember that false/true cast respectively to 0/1
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
                        } else if (match[3]) {
                            Sizzle.error(match[0]);
                        }
                        return match;
                    },
                    "PSEUDO": function PSEUDO(match) {
                        var excess, unquoted = !match[6] && match[2];
                        if (matchExpr["CHILD"].test(match[0])) {
                            return null;
                        } // Accept quoted arguments as-is
                        if (match[3]) {
                            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
                        } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
                                excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
                                excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) { // excess is a negative index
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess);
                        } // Return only captures needed by the pseudo filter method (type and argument)
                        return match.slice(0, 3);
                    }
                },
                filter: {
                    "TAG": function TAG(nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ? function() {
                            return true;
                        } : function(elem) {
                            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                        };
                    },
                    "CLASS": function CLASS(className) {
                        var pattern = classCache[className + " "];
                        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                        });
                    },
                    "ATTR": function ATTR(name, operator, check) {
                        return function(elem) {
                            var result = Sizzle.attr(elem, name);
                            if (result == null) {
                                return operator === "!=";
                            }
                            if (!operator) {
                                return true;
                            }
                            result += "";
                            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                        };
                    },
                    "CHILD": function CHILD(type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth",
                            forward = type.slice(-4) !== "last",
                            ofType = what === "of-type";
                        return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                            function(elem) {
                                return !!elem.parentNode;
                            } : function(elem, context, xml) {
                                var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType,
                                    diff = false;
                                if (parent) { // :(first|last|only)-(child|of-type)
                                    if (simple) {
                                        while (dir) {
                                            node = elem;
                                            while (node = node[dir]) {
                                                if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                    return false;
                                                }
                                            } // Reverse direction for :only-* (if we haven't yet done so)
                                            start = dir = type === "only" && !start && "nextSibling";
                                        }
                                        return true;
                                    }
                                    start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`
                                    if (forward && useCache) { // Seek `elem` from a previously-cached index
                                        // ...in a gzip-friendly way
                                        node = parent;
                                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                                        // Defend against cloned attroperties (jQuery gh-1709)
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex && cache[2];
                                        node = nodeIndex && parent.childNodes[nodeIndex];
                                        while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                                                diff = nodeIndex = 0) || start.pop()) { // When found, cache indexes on `parent` and break
                                            if (node.nodeType === 1 && ++diff && node === elem) {
                                                uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                break;
                                            }
                                        }
                                    } else { // Use previously-cached element index if available
                                        if (useCache) { // ...in a gzip-friendly way
                                            node = elem;
                                            outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                            cache = uniqueCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex;
                                        } // xml :nth-child(...)
                                        // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                        if (diff === false) { // Use the same loop as above to seek `elem` from the start
                                            while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                                if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) { // Cache the index of each encountered element
                                                    if (useCache) {
                                                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                                                        // Defend against cloned attroperties (jQuery gh-1709)
                                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                        uniqueCache[type] = [dirruns, diff];
                                                    }
                                                    if (node === elem) {
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    } // Incorporate the offset, then check against cycle size
                                    diff -= last;
                                    return diff === first || diff % first === 0 && diff / first >= 0;
                                }
                            };
                    },
                    "PSEUDO": function PSEUDO(pseudo, argument) { // pseudo-class names are case-insensitive
                        // http://www.w3.org/TR/selectors/#pseudo-classes
                        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                        // Remember that setFilters inherits from pseudos
                        var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
                        // arguments are needed to create the filter function
                        // just as Sizzle does
                        if (fn[expando]) {
                            return fn(argument);
                        } // But maintain support for old signatures
                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                var idx, matched = fn(seed, argument),
                                    i = matched.length;
                                while (i--) {
                                    idx = indexOf(seed, matched[i]);
                                    seed[idx] = !(matches[idx] = matched[i]);
                                }
                            }) : function(elem) {
                                return fn(elem, 0, args);
                            };
                        }
                        return fn;
                    }
                },
                pseudos: { // Potentially complex pseudos
                    "not": markFunction(function(selector) { // Trim the selector passed to compile
                        // to avoid treating leading and trailing
                        // spaces as combinators
                        var input = [],
                            results = [],
                            matcher = compile(selector.replace(rtrim, "$1"));
                        return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                            var elem, unmatched = matcher(seed, null, xml, []),
                                i = seed.length; // Match elements unmatched by `matcher`
                            while (i--) {
                                if (elem = unmatched[i]) {
                                    seed[i] = !(matches[i] = elem);
                                }
                            }
                        }) : function(elem, context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results); // Don't keep the element (issue #299)
                            input[0] = null;
                            return !results.pop();
                        };
                    }),
                    "has": markFunction(function(selector) {
                        return function(elem) {
                            return Sizzle(selector, elem).length > 0;
                        };
                    }),
                    "contains": markFunction(function(text) {
                        text = text.replace(runescape, funescape);
                        return function(elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                        };
                    }), // "Whether an element is represented by a :lang() selector
                    // is based solely on the element's language value
                    // being equal to the identifier C,
                    // or beginning with the identifier C immediately followed by "-".
                    // The matching of C against the element's language value is performed case-insensitively.
                    // The identifier C does not have to be a valid language name."
                    // http://www.w3.org/TR/selectors/#lang-pseudo
                    "lang": markFunction(function(lang) { // lang value must be a valid identifier
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang);
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function(elem) {
                            var elemLang;
                            do {
                                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return false;
                        };
                    }), // Miscellaneous
                    "target": function target(elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id;
                    },
                    "root": function root(elem) {
                        return elem === docElem;
                    },
                    "focus": function focus(elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                    }, // Boolean properties
                    "enabled": createDisabledPseudo(false),
                    "disabled": createDisabledPseudo(true),
                    "checked": function checked(elem) { // In CSS3, :checked should return both checked and selected elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        var nodeName = elem.nodeName.toLowerCase();
                        return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                    },
                    "selected": function selected(elem) { // Accessing this property makes selected-by-default
                        // options in Safari work properly
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex;
                        }
                        return elem.selected === true;
                    }, // Contents
                    "empty": function empty(elem) { // http://www.w3.org/TR/selectors/#empty-pseudo
                        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                        //   but not by others (comment: 8; processing instruction: 7; etc.)
                        // nodeType < 6 works because attributes (2) do not appear as children
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return false;
                            }
                        }
                        return true;
                    },
                    "parent": function parent(elem) {
                        return !Expr.pseudos["empty"](elem);
                    }, // Element/input types
                    "header": function header(elem) {
                        return rheader.test(elem.nodeName);
                    },
                    "input": function input(elem) {
                        return rinputs.test(elem.nodeName);
                    },
                    "button": function button(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },
                    "text": function text(elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
                            // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                            (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                    }, // Position-in-collection
                    "first": createPositionalPseudo(function() {
                        return [0];
                    }),
                    "last": createPositionalPseudo(function(matchIndexes, length) {
                        return [length - 1];
                    }),
                    "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument];
                    }),
                    "even": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "odd": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; --i >= 0;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    })
                }
            };
            Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos
            for (i in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                Expr.pseudos[i] = createInputPseudo(i);
            }
            for (i in {
                    submit: true,
                    reset: true
                }) {
                Expr.pseudos[i] = createButtonPseudo(i);
            } // Easy API for creating new setFilters
            function setFilters() {}
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();
            tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                }
                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;
                while (soFar) { // Comma and first run
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) { // Don't consume trailing commas as valid
                            soFar = soFar.slice(match[0].length) || soFar;
                        }
                        groups.push(tokens = []);
                    }
                    matched = false; // Combinators
                    if (match = rcombinators.exec(soFar)) {
                        matched = match.shift();
                        tokens.push({
                            value: matched, // Cast descendant combinators to space
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length);
                    } // Filters
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length);
                        }
                    }
                    if (!matched) {
                        break;
                    }
                } // Return the length of the invalid excess
                // if we're just parsing
                // Otherwise, throw an error or return tokens
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
                    tokenCache(selector, groups).slice(0);
            };

            function toSelector(tokens) {
                var i = 0,
                    len = tokens.length,
                    selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value;
                }
                return selector;
            }

            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir,
                    skip = combinator.next,
                    key = skip || dir,
                    checkNonElements = base && key === "parentNode",
                    doneName = done++;
                return combinator.first ? // Check against closest ancestor/preceding element
                    function(elem, context, xml) {
                        while (elem = elem[dir]) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                return matcher(elem, context, xml);
                            }
                        }
                        return false;
                    } : // Check against all ancestor/preceding elements
                    function(elem, context, xml) {
                        var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                        if (xml) {
                            while (elem = elem[dir]) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    if (matcher(elem, context, xml)) {
                                        return true;
                                    }
                                }
                            }
                        } else {
                            while (elem = elem[dir]) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                    if (skip && skip === elem.nodeName.toLowerCase()) {
                                        elem = elem[dir] || elem;
                                    } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) { // Assign to newCache so results back-propagate to previous elements
                                        return newCache[2] = oldCache[2];
                                    } else { // Reuse newcache so results back-propagate to previous elements
                                        uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking
                                        if (newCache[2] = matcher(elem, context, xml)) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                        return false;
                    };
            }

            function elementMatcher(matchers) {
                return matchers.length > 1 ? function(elem, context, xml) {
                    var i = matchers.length;
                    while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                            return false;
                        }
                    }
                    return true;
                } : matchers[0];
            }

            function multipleContexts(selector, contexts, results) {
                var i = 0,
                    len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                }
                return results;
            }

            function condense(unmatched, map, filter, context, xml) {
                var elem, newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;
                for (; i < len; i++) {
                    if (elem = unmatched[i]) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i);
                            }
                        }
                    }
                }
                return newUnmatched;
            }

            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                }
                return markFunction(function(seed, results, context, xml) {
                    var temp, i, elem, preMap = [],
                        postMap = [],
                        preexisting = results.length, // Get initial elements from seed or context
                        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                        matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                        [] : // ...otherwise use results directly
                        results : matcherIn; // Find primary matches
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml);
                    } // Apply postFilter
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn
                        i = temp.length;
                        while (i--) {
                            if (elem = temp[i]) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                        }
                    }
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) { // Get the final matcherOut by condensing this intermediate into postFinder contexts
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if (elem = matcherOut[i]) { // Restore matcherIn since elem is not yet a final match
                                        temp.push(matcherIn[i] = elem);
                                    }
                                }
                                postFinder(null, matcherOut = [], temp, xml);
                            } // Move matched elements from seed to results to keep them synchronized
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                    seed[temp] = !(results[temp] = elem);
                                }
                            }
                        } // Add elements to results, through postFinder if defined
                    } else {
                        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml);
                        } else {
                            push.apply(results, matcherOut);
                        }
                    }
                });
            }

            function matcherFromTokens(tokens) {
                var checkContext, matcher, j, len = tokens.length,
                    leadingRelative = Expr.relative[tokens[0].type],
                    implicitRelative = leadingRelative || Expr.relative[" "],
                    i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
                    matchContext = addCombinator(function(elem) {
                        return elem === checkContext;
                    }, implicitRelative, true),
                    matchAnyContext = addCombinator(function(elem) {
                        return indexOf(checkContext, elem) > -1;
                    }, implicitRelative, true),
                    matchers = [function(elem, context, xml) {
                        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)
                        checkContext = null;
                        return ret;
                    }];
                for (; i < len; i++) {
                    if (matcher = Expr.relative[tokens[i].type]) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)];
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher
                        if (matcher[expando]) { // Find the next relative operator (if any) for proper handling
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break;
                                }
                            }
                            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                tokens.slice(0, i - 1).concat({
                                    value: tokens[i - 2].type === " " ? "*" : ""
                                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                        }
                        matchers.push(matcher);
                    }
                }
                return elementMatcher(matchers);
            }

            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
                        var elem, j, matcher, matchedCount = 0,
                            i = "0",
                            unmatched = seed && [],
                            setMatched = [],
                            contextBackup = outermostContext, // We must always have either seed elements or outermost context
                            elems = seed || byElement && Expr.find["TAG"]("*", outermost), // Use integer dirruns iff this is the outermost matcher
                            dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
                            len = elems.length;
                        if (outermost) {
                            outermostContext = context === document || context || outermost;
                        } // Add elements passing elementMatchers directly to results
                        // Support: IE<9, Safari
                        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                        for (; i !== len && (elem = elems[i]) != null; i++) {
                            if (byElement && elem) {
                                j = 0;
                                if (!context && elem.ownerDocument !== document) {
                                    setDocument(elem);
                                    xml = !documentIsHTML;
                                }
                                while (matcher = elementMatchers[j++]) {
                                    if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                }
                                if (outermost) {
                                    dirruns = dirrunsUnique;
                                }
                            } // Track unmatched elements for set filters
                            if (bySet) { // They will have gone through all possible matchers
                                if (elem = !matcher && elem) {
                                    matchedCount--;
                                } // Lengthen the array for every element, matched or not
                                if (seed) {
                                    unmatched.push(elem);
                                }
                            }
                        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
                        // makes the latter nonnegative.
                        matchedCount += i; // Apply set filters to unmatched elements
                        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                        // no element matchers and no seed.
                        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                        // numerically zero.
                        if (bySet && i !== matchedCount) {
                            j = 0;
                            while (matcher = setMatchers[j++]) {
                                matcher(unmatched, setMatched, context, xml);
                            }
                            if (seed) { // Reintegrate element matches to eliminate the need for sorting
                                if (matchedCount > 0) {
                                    while (i--) {
                                        if (!(unmatched[i] || setMatched[i])) {
                                            setMatched[i] = pop.call(results);
                                        }
                                    }
                                } // Discard index placeholder values to get only actual matches
                                setMatched = condense(setMatched);
                            } // Add matches to results
                            push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting
                            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                                Sizzle.uniqueSort(results);
                            }
                        } // Override manipulation of globals by nested matchers
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup;
                        }
                        return unmatched;
                    };
                return bySet ? markFunction(superMatcher) : superMatcher;
            }
            compile = Sizzle.compile = function(selector, match /* Internal Use Only */ ) {
                var i, setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[selector + " "];
                if (!cached) { // Generate a function of recursive functions that can be used to check each element
                    if (!match) {
                        match = tokenize(selector);
                    }
                    i = match.length;
                    while (i--) {
                        cached = matcherFromTokens(match[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached);
                        } else {
                            elementMatchers.push(cached);
                        }
                    } // Cache the compiled function
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization
                    cached.selector = selector;
                }
                return cached;
            };
            /**
             * A low-level selection function that works with Sizzle's compiled
             *  selector functions
             * @param {String|Function} selector A selector or a pre-compiled
             *  selector function built with Sizzle.compile
             * @param {Element} context
             * @param {Array} [results]
             * @param {Array} [seed] A set of elements to match against
             */
            select = Sizzle.select = function(selector, context, results, seed) {
                var i, tokens, token, type, find, compiled = typeof selector === "function" && selector,
                    match = !seed && tokenize(selector = compiled.selector || selector);
                results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
                // (the latter of which guarantees us context)
                if (match.length === 1) { // Reduce context if the leading compound selector is an ID
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results; // Precompiled matchers will still verify ancestry, so step up a level
                        } else if (compiled) {
                            context = context.parentNode;
                        }
                        selector = selector.slice(tokens.shift().value.length);
                    } // Fetch a seed set for right-to-left matching
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i]; // Abort if we hit a combinator
                        if (Expr.relative[type = token.type]) {
                            break;
                        }
                        if (find = Expr.find[type]) { // Search, expanding context for leading sibling combinators
                            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) { // If seed is empty or no tokens remain, we can return early
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results;
                                }
                                break;
                            }
                        }
                    }
                } // Compile and execute a filtering function if one is not provided
                // Provide `match` to avoid retokenization if we modified the selector above
                (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                return results;
            }; // One-time assignments
            // Sort stability
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
            // Always assume duplicates if they aren't passed to the comparison function
            support.detectDuplicates = !!hasDuplicate; // Initialize against the default document
            setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
            // Detached nodes confoundingly follow *each other*
            support.sortDetached = assert(function(el) { // Should return 1, but returns 4 (following)
                return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
            }); // Support: IE<8
            // Prevent attribute/property "interpolation"
            // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
            if (!assert(function(el) {
                    el.innerHTML = "<a href='#'></a>";
                    return el.firstChild.getAttribute("href") === "#";
                })) {
                addHandle("type|href|height|width", function(elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                    }
                });
            } // Support: IE<9
            // Use defaultValue in place of getAttribute("value")
            if (!support.attributes || !assert(function(el) {
                    el.innerHTML = "<input/>";
                    el.firstChild.setAttribute("value", "");
                    return el.firstChild.getAttribute("value") === "";
                })) {
                addHandle("value", function(elem, name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue;
                    }
                });
            } // Support: IE<9
            // Use getAttributeNode to fetch booleans when getAttribute lies
            if (!assert(function(el) {
                    return el.getAttribute("disabled") == null;
                })) {
                addHandle(booleans, function(elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    }
                });
            }
            return Sizzle;
        }(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors; // Deprecated
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;
    var dir = function dir(elem, _dir, until) {
        var matched = [],
            truncate = until !== undefined;
        while ((elem = elem[_dir]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) {
                    break;
                }
                matched.push(elem);
            }
        }
        return matched;
    };
    var _siblings = function _siblings(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
                matched.push(n);
            }
        }
        return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;

    function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    };
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                return !!qualifier.call(elem, i, elem) !== not;
            });
        } // Single element
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return elem === qualifier !== not;
            });
        } // Arraylike of elements (jQuery, arguments, Array)
        if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function(elem) {
                return indexOf.call(qualifier, elem) > -1 !== not;
            });
        } // Filtered directly for both simple and complex selectors
        return jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
            expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function find(selector) {
            var i, ret, len = this.length,
                self = this;
            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function filter(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function not(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function is(selector) {
            return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    }); // Initialize a jQuery object
    // A central reference to the root jQuery(document)
    var rootjQuery, // A simple way to check for HTML strings
        // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
        // Strict HTML recognition (#11290: must start with <)
        // Shortcut simple #id case for speed
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        init = jQuery.fn.init = function(selector, context, root) {
            var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)
            if (!selector) {
                return this;
            } // Method init() accepts an alternate rootjQuery
            // so migrate can support jQuery.sub (gh-2101)
            root = root || rootjQuery; // Handle HTML strings
            if (typeof selector === "string") {
                if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) { // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [null, selector, null];
                } else {
                    match = rquickExpr.exec(selector);
                } // Match html or make sure no context is specified for #id
                if (match && (match[1] || !context)) { // HANDLE: $(html) -> $(array)
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
                        // Intentionally let the error be thrown if parseHTML is not present
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) { // Properties of context are called as methods if possible
                                if (isFunction(this[match])) {
                                    this[match](context[match]); // ...and otherwise set as attributes
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }
                        return this; // HANDLE: $(#id)
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem) { // Inject the element directly into the jQuery object
                            this[0] = elem;
                            this.length = 1;
                        }
                        return this;
                    } // HANDLE: $(expr, $(...))
                } else if (!context || context.jquery) {
                    return (context || root).find(selector); // HANDLE: $(expr, context)
                    // (which is just equivalent to: $(context).find(expr)
                } else {
                    return this.constructor(context).find(selector);
                } // HANDLE: $(DOMElement)
            } else if (selector.nodeType) {
                this[0] = selector;
                this.length = 1;
                return this; // HANDLE: $(function)
                // Shortcut for document ready
            } else if (isFunction(selector)) {
                return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
                    selector(jQuery);
            }
            return jQuery.makeArray(selector, this);
        }; // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn; // Initialize central reference
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    jQuery.fn.extend({
        has: function has(target) {
            var targets = jQuery(target, this),
                l = targets.length;
            return this.filter(function() {
                var i = 0;
                for (; i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },
        closest: function closest(selectors, context) {
            var cur, i = 0,
                l = this.length,
                matched = [],
                targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context
            if (!rneedsContext.test(selectors)) {
                for (; i < l; i++) {
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) { // Always skip document fragments
                        if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
                                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break;
                        }
                    }
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        }, // Determine the position of an element within the set
        index: function index(elem) { // No argument, return index in parent
            if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            } // Index in selector
            if (typeof elem === "string") {
                return indexOf.call(jQuery(elem), this[0]);
            } // Locate the position of the desired element
            return indexOf.call(this, // If it receives a jQuery object, the first element is used
                elem.jquery ? elem[0] : elem);
        },
        add: function add(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function addBack(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });

    function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
        return cur;
    }
    jQuery.each({
        parent: function parent(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function parents(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function parentsUntil(elem, i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function next(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function prev(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function nextAll(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function prevAll(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function nextUntil(elem, i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function prevUntil(elem, i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function siblings(elem) {
            return _siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function children(elem) {
            return _siblings(elem.firstChild);
        },
        contents: function contents(elem) {
            if (nodeName(elem, "iframe")) {
                return elem.contentDocument;
            } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if (nodeName(elem, "template")) {
                elem = elem.content || elem;
            }
            return jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                selector = until;
            }
            if (selector && typeof selector === "string") {
                matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) { // Remove duplicates
                if (!guaranteedUnique[name]) {
                    jQuery.uniqueSort(matched);
                } // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) {
                    matched.reverse();
                }
            }
            return this.pushStack(matched);
        };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    /*
     * Create a callback list using the following parameters:
     *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */
    jQuery.Callbacks = function(options) { // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var // Flag to know if list is currently firing
            firing, // Last fire value for non-forgettable lists
            memory, // Flag to know if list was already fired
            _fired, // Flag to prevent firing
            _locked, // Actual callback list
            list = [], // Queue of execution data for repeatable lists
            queue = [], // Index of currently firing callback (modified by add/remove as needed)
            firingIndex = -1, // Fire callbacks
            fire = function fire() { // Enforce single-firing
                _locked = _locked || options.once; // Execute callbacks for all pending executions,
                // respecting firingIndex overrides and runtime changes
                _fired = firing = true;
                for (; queue.length; firingIndex = -1) {
                    memory = queue.shift();
                    while (++firingIndex < list.length) { // Run callback and check for early termination
                        if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) { // Jump to end and forget the data so .add doesn't re-fire
                            firingIndex = list.length;
                            memory = false;
                        }
                    }
                } // Forget the data if we're done with it
                if (!options.memory) {
                    memory = false;
                }
                firing = false; // Clean up if we're done firing for good
                if (_locked) { // Keep an empty list if we have data for future add calls
                    if (memory) {
                        list = []; // Otherwise, this object is spent
                    } else {
                        list = "";
                    }
                }
            }, // Actual Callbacks object
            self = { // Add a callback or a collection of callbacks to the list
                add: function add() {
                    if (list) { // If we have memory from a past run, we should fire after adding
                        if (memory && !firing) {
                            firingIndex = list.length - 1;
                            queue.push(memory);
                        }(function add(args) {
                            jQuery.each(args, function(_, arg) {
                                if (isFunction(arg)) {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg);
                                    }
                                } else if (arg && arg.length && toType(arg) !== "string") { // Inspect recursively
                                    add(arg);
                                }
                            });
                        })(arguments);
                        if (memory && !firing) {
                            fire();
                        }
                    }
                    return this;
                }, // Remove a callback from the list
                remove: function remove() {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1); // Handle firing indexes
                            if (index <= firingIndex) {
                                firingIndex--;
                            }
                        }
                    });
                    return this;
                }, // Check if a given callback is in the list.
                // If no argument is given, return whether or not list has callbacks attached.
                has: function has(fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                }, // Remove all callbacks from the list
                empty: function empty() {
                    if (list) {
                        list = [];
                    }
                    return this;
                }, // Disable .fire and .add
                // Abort any current/pending executions
                // Clear all callbacks and values
                disable: function disable() {
                    _locked = queue = [];
                    list = memory = "";
                    return this;
                },
                disabled: function disabled() {
                    return !list;
                }, // Disable .fire
                // Also disable .add unless we have memory (since it would have no effect)
                // Abort any pending executions
                lock: function lock() {
                    _locked = queue = [];
                    if (!memory && !firing) {
                        list = memory = "";
                    }
                    return this;
                },
                locked: function locked() {
                    return !!_locked;
                }, // Call all callbacks with the given context and arguments
                fireWith: function fireWith(context, args) {
                    if (!_locked) {
                        args = args || [];
                        args = [context, args.slice ? args.slice() : args];
                        queue.push(args);
                        if (!firing) {
                            fire();
                        }
                    }
                    return this;
                }, // Call all the callbacks with the given arguments
                fire: function fire() {
                    self.fireWith(this, arguments);
                    return this;
                }, // To know if the callbacks have already been called at least once
                fired: function fired() {
                    return !!_fired;
                }
            };
        return self;
    };

    function Identity(v) {
        return v;
    }

    function Thrower(ex) {
        throw ex;
    }

    function adoptValue(value, resolve, reject, noValue) {
        var method;
        try { // Check for promise aspect first to privilege synchronous behavior
            if (value && isFunction(method = value.promise)) {
                method.call(value).done(resolve).fail(reject); // Other thenables
            } else if (value && isFunction(method = value.then)) {
                method.call(value, resolve, reject); // Other non-thenables
            } else { // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
                // * false: [ value ].slice( 0 ) => resolve( value )
                // * true: [ value ].slice( 1 ) => resolve()
                resolve.apply(undefined, [value].slice(noValue));
            } // For Promises/A+, convert exceptions into rejections
            // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
            // Deferred#then to conditionally suppress rejection.
        } catch (value) { // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.apply(undefined, [value]);
        }
    }
    jQuery.extend({
        Deferred: function Deferred(func) {
            var tuples = [ // action, add listener, callbacks,
                    // ... .then handlers, argument index, [final state]
                    ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2],
                    ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]
                ],
                _state = "pending",
                _promise = {
                    state: function state() {
                        return _state;
                    },
                    always: function always() {
                        deferred.done(arguments).fail(arguments);
                        return this;
                    },
                    "catch": function _catch(fn) {
                        return _promise.then(null, fn);
                    }, // Keep pipe for back-compat
                    pipe: function pipe() /* fnDone, fnFail, fnProgress */ {
                        var fns = arguments;
                        return jQuery.Deferred(function(newDefer) {
                            jQuery.each(tuples, function(i, tuple) { // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                                var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
                                // deferred.done(function() { bind to newDefer or newDefer.resolve })
                                // deferred.fail(function() { bind to newDefer or newDefer.reject })
                                deferred[tuple[1]](function() {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && isFunction(returned.promise)) {
                                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                    } else {
                                        newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                                    }
                                });
                            });
                            fns = null;
                        }).promise();
                    },
                    then: function then(onFulfilled, onRejected, onProgress) {
                        var maxDepth = 0;

                        function resolve(depth, deferred, handler, special) {
                            return function() {
                                var that = this,
                                    args = arguments,
                                    mightThrow = function mightThrow() {
                                        var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                                        // https://promisesaplus.com/#point-59
                                        // Ignore double-resolution attempts
                                        if (depth < maxDepth) {
                                            return;
                                        }
                                        returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                                        // https://promisesaplus.com/#point-48
                                        if (returned === deferred.promise()) {
                                            throw new TypeError("Thenable self-resolution");
                                        } // Support: Promises/A+ sections 2.3.3.1, 3.5
                                        // https://promisesaplus.com/#point-54
                                        // https://promisesaplus.com/#point-75
                                        // Retrieve `then` only once
                                        then = returned && ( // Support: Promises/A+ section 2.3.4
                                            // https://promisesaplus.com/#point-64
                                            // Only check objects and functions for thenability
                                            (typeof returned === "undefined" ? "undefined" : _typeof(returned)) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable
                                        if (isFunction(then)) { // Special processors (notify) just wait for resolution
                                            if (special) {
                                                then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                                            } else { // ...and disregard older resolution values
                                                maxDepth++;
                                                then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                            } // Handle all other returned values
                                        } else { // Only substitute handlers pass on context
                                            // and multiple values (non-spec behavior)
                                            if (handler !== Identity) {
                                                that = undefined;
                                                args = [returned];
                                            } // Process the value(s)
                                            // Default process is resolve
                                            (special || deferred.resolveWith)(that, args);
                                        }
                                    }, // Only normal processors (resolve) catch and reject exceptions
                                    process = special ? mightThrow : function() {
                                        try {
                                            mightThrow();
                                        } catch (e) {
                                            if (jQuery.Deferred.exceptionHook) {
                                                jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                            } // Support: Promises/A+ section 2.3.3.3.4.1
                                            // https://promisesaplus.com/#point-61
                                            // Ignore post-resolution exceptions
                                            if (depth + 1 >= maxDepth) { // Only substitute handlers pass on context
                                                // and multiple values (non-spec behavior)
                                                if (handler !== Thrower) {
                                                    that = undefined;
                                                    args = [e];
                                                }
                                                deferred.rejectWith(that, args);
                                            }
                                        }
                                    }; // Support: Promises/A+ section 2.3.3.3.1
                                // https://promisesaplus.com/#point-57
                                // Re-resolve promises immediately to dodge false rejection from
                                // subsequent errors
                                if (depth) {
                                    process();
                                } else { // Call an optional hook to record the stack, in case of exception
                                    // since it's otherwise lost when execution goes async
                                    if (jQuery.Deferred.getStackHook) {
                                        process.stackTrace = jQuery.Deferred.getStackHook();
                                    }
                                    window.setTimeout(process);
                                }
                            };
                        }
                        return jQuery.Deferred(function(newDefer) { // progress_handlers.add( ... )
                            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )
                            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )
                            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                        }).promise();
                    }, // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function promise(obj) {
                        return obj != null ? jQuery.extend(obj, _promise) : _promise;
                    }
                },
                deferred = {}; // Add list-specific methods
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2],
                    stateString = tuple[5]; // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                _promise[tuple[1]] = list.add; // Handle state
                if (stateString) {
                    list.add(function() { // state = "resolved" (i.e., fulfilled)
                            // state = "rejected"
                            _state = stateString;
                        }, // rejected_callbacks.disable
                        // fulfilled_callbacks.disable
                        tuples[3 - i][2].disable, // rejected_handlers.disable
                        // fulfilled_handlers.disable
                        tuples[3 - i][3].disable, // progress_callbacks.lock
                        tuples[0][2].lock, // progress_handlers.lock
                        tuples[0][3].lock);
                } // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                    return this;
                }; // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[tuple[0] + "With"] = list.fireWith;
            }); // Make the deferred a promise
            _promise.promise(deferred); // Call given func if any
            if (func) {
                func.call(deferred, deferred);
            } // All done!
            return deferred;
        }, // Deferred helper
        when: function when(singleValue) {
            var // count of uncompleted subordinates
                remaining = arguments.length, // count of unprocessed arguments
                i = remaining, // subordinate fulfillment data
                resolveContexts = Array(i),
                resolveValues = _slice.call(arguments), // the master Deferred
                master = jQuery.Deferred(), // subordinate callback factory
                updateFunc = function updateFunc(i) {
                    return function(value) {
                        resolveContexts[i] = this;
                        resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
                        if (!--remaining) {
                            master.resolveWith(resolveContexts, resolveValues);
                        }
                    };
                }; // Single- and empty arguments are adopted like Promise.resolve
            if (remaining <= 1) {
                adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                    return master.then();
                }
            } // Multiple arguments are aggregated like Promise.all array elements
            while (i--) {
                adoptValue(resolveValues[i], updateFunc(i), master.reject);
            }
            return master.promise();
        }
    }); // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(error, stack) { // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
            window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
    };
    jQuery.readyException = function(error) {
        window.setTimeout(function() {
            throw error;
        });
    }; // The deferred used on DOM ready
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn) {
        readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
            // happens at the time of error handling instead of callback
            // registration.
            .catch(function(error) {
                jQuery.readyException(error);
            });
        return this;
    };
    jQuery.extend({ // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false, // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1, // Handle when the DOM is ready
        ready: function ready(wait) { // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            } // Remember that the DOM is ready
            jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            } // If there are functions bound, to execute
            readyList.resolveWith(document, [jQuery]);
        }
    });
    jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready();
    } // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) { // Handle it asynchronously to allow scripts the opportunity to delay ready
        window.setTimeout(jQuery.ready);
    } else { // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work
        window.addEventListener("load", completed);
    } // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
            len = elems.length,
            bulk = key == null; // Sets many values
        if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
                access(elems, fn, i, key[i], true, emptyGet, raw);
            } // Sets one value
        } else if (value !== undefined) {
            chainable = true;
            if (!isFunction(value)) {
                raw = true;
            }
            if (bulk) { // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null; // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function fn(elem, key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) {
                for (; i < len; i++) {
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                }
            }
        }
        if (chainable) {
            return elems;
        } // Gets
        if (bulk) {
            return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
    }; // Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()
    function fcamelCase(all, letter) {
        return letter.toUpperCase();
    } // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (#9572)
    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function acceptData(owner) { // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };

    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
        cache: function cache(owner) { // Check if the owner object already has a cache
            var value = owner[this.expando]; // If not, create one
            if (!value) {
                value = {}; // We can accept data for non-element nodes in modern browsers,
                // but we should not, see #8335.
                // Always return an empty object.
                if (acceptData(owner)) { // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) {
                        owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
                        // configurable must be true to allow the property to be
                        // deleted when data is removed
                    } else {
                        Object.defineProperty(owner, this.expando, {
                            value: value,
                            configurable: true
                        });
                    }
                }
            }
            return value;
        },
        set: function set(owner, data, value) {
            var prop, cache = this.cache(owner); // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if (typeof data === "string") {
                cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
            } else { // Copy the properties one-by-one to the cache object
                for (prop in data) {
                    cache[camelCase(prop)] = data[prop];
                }
            }
            return cache;
        },
        get: function get(owner, key) {
            return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
                owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function access(owner, key, value) { // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined || key && typeof key === "string" && value === undefined) {
                return this.get(owner, key);
            } // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value); // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function remove(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === undefined) {
                return;
            }
            if (key !== undefined) { // Support array or space separated string of keys
                if (Array.isArray(key)) { // If key is an array of keys...
                    // We always set camelCase keys, so remove that.
                    key = key.map(camelCase);
                } else {
                    key = camelCase(key); // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
                }
                i = key.length;
                while (i--) {
                    delete cache[key[i]];
                }
            } // Remove the expando if there's no more data
            if (key === undefined || jQuery.isEmptyObject(cache)) { // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if (owner.nodeType) {
                    owner[this.expando] = undefined;
                } else {
                    delete owner[this.expando];
                }
            }
        },
        hasData: function hasData(owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();
    var dataUser = new Data(); //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /[A-Z]/g;

    function getData(data) {
        if (data === "true") {
            return true;
        }
        if (data === "false") {
            return false;
        }
        if (data === "null") {
            return null;
        } // Only convert to a number if it doesn't change the string
        if (data === +data + "") {
            return +data;
        }
        if (rbrace.test(data)) {
            return JSON.parse(data);
        }
        return data;
    }

    function dataAttr(elem, key, data) {
        var name; // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = getData(data);
                } catch (e) {} // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }
    jQuery.extend({
        hasData: function hasData(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function data(elem, name, _data) {
            return dataUser.access(elem, name, _data);
        },
        removeData: function removeData(elem, name) {
            dataUser.remove(elem, name);
        }, // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function _data(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function _removeData(elem, name) {
            dataPriv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function data(key, value) {
            var i, name, data, elem = this[0],
                attrs = elem && elem.attributes; // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while (i--) { // Support: IE 11 only
                            // The attrs elements can be null (#14894)
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            } // Sets multiple values
            if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
                return this.each(function() {
                    dataUser.set(this, key);
                });
            }
            return access(this, function(value) {
                var data; // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value === undefined) { // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get(elem, key);
                    if (data !== undefined) {
                        return data;
                    } // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, key);
                    if (data !== undefined) {
                        return data;
                    } // We tried really hard, but the data doesn't exist.
                    return;
                } // Set the data...
                this.each(function() { // We always store the camelCased key
                    dataUser.set(this, key, value);
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function removeData(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function queue(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || Array.isArray(data)) {
                        queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },
        dequeue: function dequeue(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks(elem, type),
                next = function next() {
                    jQuery.dequeue(elem, type);
                }; // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) { // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") {
                    queue.unshift("inprogress");
                } // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        }, // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function _queueHooks(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [type + "queue", key]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function queue(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function dequeue(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function clearQueue(type) {
            return this.queue(type || "fx", []);
        }, // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function promise(type, obj) {
            var tmp, count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function resolve() {
                    if (!--count) {
                        defer.resolveWith(elements, [elements]);
                    }
                };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while (i--) {
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var isHiddenWithinTree = function isHiddenWithinTree(elem, el) { // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem; // Inline style trumps all
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
            // Support: Firefox <=43 - 45
            // Disconnected elements can have computed display: none, so first confirm that elem is
            // in the document.
            jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
    };
    var swap = function swap(elem, options, callback, args) {
        var ret, name, old = {}; // Remember the old values, and insert the new ones
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.apply(elem, args || []); // Revert the old values
        for (name in options) {
            elem.style[name] = old[name];
        }
        return ret;
    };

    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20,
            currentValue = tween ? function() {
                return tween.cur();
            } : function() {
                return jQuery.css(elem, prop, "");
            },
            initial = currentValue(),
            unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
            initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) { // Support: Firefox <=54
            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
            initial = initial / 2; // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;
            while (maxIterations--) { // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                    maxIterations = 0;
                }
                initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on
            valueParts = valueParts || [];
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    var defaultDisplayMap = {};

    function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument,
            nodeName = elem.nodeName,
            display = defaultDisplayMap[nodeName];
        if (display) {
            return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
            display = "block";
        }
        defaultDisplayMap[nodeName] = display;
        return display;
    }

    function showHide(elements, show) {
        var display, elem, values = [],
            index = 0,
            length = elements.length; // Determine new display value for elements that need to change
        for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            display = elem.style.display;
            if (show) { // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) {
                        elem.style.display = "";
                    }
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                    values[index] = getDefaultDisplay(elem);
                }
            } else {
                if (display !== "none") {
                    values[index] = "none"; // Remember what we're overwriting
                    dataPriv.set(elem, "display", display);
                }
            }
        } // Set the display of the elements in a second loop to avoid constant reflow
        for (index = 0; index < length; index++) {
            if (values[index] != null) {
                elements[index].style.display = values[index];
            }
        }
        return elements;
    }
    jQuery.fn.extend({
        show: function show() {
            return showHide(this, true);
        },
        hide: function hide() {
            return showHide(this);
        },
        toggle: function toggle(state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
            }
            return this.each(function() {
                if (isHiddenWithinTree(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)
    var wrapMap = { // Support: IE <=9 only
        option: [1, "<select multiple='multiple'>", "</select>"], // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    }; // Support: IE <=9 only
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;

    function getAll(context, tag) { // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
        } else {
            ret = [];
        }
        if (tag === undefined || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
        }
        return ret;
    } // Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var i = 0,
            l = elems.length;
        for (; i < l; i++) {
            dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
        }
    }
    var rhtml = /<|&#?\w+;/;

    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(),
            nodes = [],
            i = 0,
            l = elems.length;
        for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) { // Add nodes directly
                if (toType(elem) === "object") { // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
                } else if (!rhtml.test(elem)) {
                    nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
                } else {
                    tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content
                    j = wrap[0];
                    while (j--) {
                        tmp = tmp.lastChild;
                    } // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container
                    tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)
                    tmp.textContent = "";
                }
            }
        } // Remove wrapper from fragment
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) { // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) {
                    ignored.push(elem);
                }
                continue;
            }
            contains = jQuery.contains(elem.ownerDocument, elem); // Append to fragment
            tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history
            if (contains) {
                setGlobalEval(tmp);
            } // Capture executables
            if (scripts) {
                j = 0;
                while (elem = tmp[j++]) {
                    if (rscriptType.test(elem.type || "")) {
                        scripts.push(elem);
                    }
                }
            }
        }
        return fragment;
    }(function() {
        var fragment = document.createDocumentFragment(),
            div = fragment.appendChild(document.createElement("div")),
            input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (#11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input); // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    })();
    var documentElement = document.documentElement;
    var rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

    function returnTrue() {
        return true;
    }

    function returnFalse() {
        return false;
    } // Support: IE <=9 only
    // See #13393 for more info
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }

    function _on2(elem, types, selector, data, fn, one) {
        var origFn, type; // Types can be a map of types/handlers
        if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") { // ( types-Object, selector, data )
            if (typeof selector !== "string") { // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for (type in types) {
                _on2(elem, type, selector, data, types[type], one);
            }
            return elem;
        }
        if (data == null && fn == null) { // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") { // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else { // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) {
            fn = returnFalse;
        } else if (!fn) {
            return elem;
        }
        if (one === 1) {
            origFn = fn;
            fn = function fn(event) { // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            }; // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    /*
     * Helper functions for managing events -- not part of the public interface.
     * Props to Dean Edwards' addEvent library for many of the ideas.
     */
    jQuery.event = {
        global: {},
        add: function add(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)
            if (!elemData) {
                return;
            } // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            } // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if (selector) {
                jQuery.find.matchesSelector(documentElement, selector);
            } // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            } // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e) { // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
                };
            } // Handle multiple events separated by a space
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers
                if (!type) {
                    continue;
                } // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type
                special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn); // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle);
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                } // Add to the element's handler list, delegates in front
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                } // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }
        }, // Detach an event or set of events from an element
        remove: function remove(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
                return;
            } // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                } // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                }
            } // Remove data and the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) {
                dataPriv.remove(elem, "handle events");
            }
        },
        dispatch: function dispatch(nativeEvent) { // Make a writable jQuery.Event from the native event object
            var event = jQuery.event.fix(nativeEvent);
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length),
                handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
                special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
                args[i] = arguments[i];
            }
            event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            } // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) { // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                    // a subset or equal to those in the bound event (both can have no namespace).
                    if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            } // Call the postDispatch hook for the mapped type
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }
            return event.result;
        },
        handlers: function handlers(event, _handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [],
                delegateCount = _handlers.delegateCount,
                cur = event.target; // Find delegate handlers
            if (delegateCount && // Support: IE <=9
                // Black-hole SVG <use> instance trees (trac-13180)
                cur.nodeType && // Support: Firefox <=42
                // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
                // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
                // Support: IE 11 only
                // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
                !(event.type === "click" && event.button >= 1)) {
                for (; cur !== this; cur = cur.parentNode || this) { // Don't check non-elements (#13208)
                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                        matchedHandlers = [];
                        matchedSelectors = {};
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)
                            sel = handleObj.selector + " ";
                            if (matchedSelectors[sel] === undefined) {
                                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                            }
                            if (matchedSelectors[sel]) {
                                matchedHandlers.push(handleObj);
                            }
                        }
                        if (matchedHandlers.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matchedHandlers
                            });
                        }
                    }
                }
            } // Add the remaining (directly-bound) handlers
            cur = this;
            if (delegateCount < _handlers.length) {
                handlerQueue.push({
                    elem: cur,
                    handlers: _handlers.slice(delegateCount)
                });
            }
            return handlerQueue;
        },
        addProp: function addProp(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,
                get: isFunction(hook) ? function() {
                    if (this.originalEvent) {
                        return hook(this.originalEvent);
                    }
                } : function() {
                    if (this.originalEvent) {
                        return this.originalEvent[name];
                    }
                },
                set: function set(value) {
                    Object.defineProperty(this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    });
                }
            });
        },
        fix: function fix(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
            load: { // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            focus: { // Fire native event if possible so blur/focus sequence is correct
                trigger: function trigger() {
                    if (this !== safeActiveElement() && this.focus) {
                        this.focus();
                        return false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function trigger() {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: { // For checkbox, fire native event so checked state will be right
                trigger: function trigger() {
                    if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
                        this.click();
                        return false;
                    }
                }, // For cross-browser consistency, don't fire native .click() on links
                _default: function _default(event) {
                    return nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function postDispatch(event) { // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        }
    };
    jQuery.removeEvent = function(elem, type, handle) { // This "if" is needed for plain objects
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
        }
    };
    jQuery.Event = function(src, props) { // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        } // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type; // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
                src.returnValue === false ? returnTrue : returnFalse; // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (#504, #13143)
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget; // Event type
        } else {
            this.type = src;
        } // Put explicitly provided properties onto the event object
        if (props) {
            jQuery.extend(this, props);
        } // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed
        this[jQuery.expando] = true;
    }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function preventDefault() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
                e.preventDefault();
            }
        },
        stopPropagation: function stopPropagation() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
                e.stopImmediatePropagation();
            }
            this.stopPropagation();
        }
    }; // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function which(event) {
            var button = event.button; // Add which for key events
            if (event.which == null && rkeyEvent.test(event.type)) {
                return event.charCode != null ? event.charCode : event.keyCode;
            } // Add which for click: 1 === left; 2 === middle; 3 === right
            if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
                if (button & 1) {
                    return 1;
                }
                if (button & 2) {
                    return 3;
                }
                if (button & 4) {
                    return 2;
                }
                return 0;
            }
            return event.which;
        }
    }, jQuery.event.addProp); // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function handle(event) {
                var ret, target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    jQuery.fn.extend({
        on: function on(types, selector, data, fn) {
            return _on2(this, types, selector, data, fn);
        },
        one: function one(types, selector, data, fn) {
            return _on2(this, types, selector, data, fn, 1);
        },
        off: function off(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) { // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") { // ( types-object [, selector] )
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") { // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    var /* eslint-disable max-len */ // See https://github.com/eslint/eslint/issues/3229
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        /* eslint-enable */ // Support: IE <=10 - 11, Edge 12 - 13 only
        // In IE/Edge using regex groups here causes severe slowdowns.
        // See https://connect.microsoft.com/IE/feedback/details/1736512/
        rnoInnerhtml = /<script|<style|<link/i, // checked="checked" or checked
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows
    function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem;
        }
        return elem;
    } // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }

    function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }

    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
            return;
        } // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.access(src);
            pdataCur = dataPriv.set(dest, pdataOld);
            events = pdataOld.events;
            if (events) {
                delete pdataCur.handle;
                pdataCur.events = {};
                for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i]);
                    }
                }
            }
        } // 2. Copy user data
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
        }
    } // Fix IE bugs, see support tests
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }

    function domManip(collection, args, callback, ignored) { // Flatten any nested arrays
        args = concat.apply([], args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[0],
            valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
                var self = collection.eq(index);
                if (valueIsFunction) {
                    args[0] = value.call(this, index, self.html());
                }
                domManip(self, args, callback, ignored);
            });
        }
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
                fragment = first;
            } // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length; // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (#8070).
                for (; i < l; i++) {
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration
                        if (hasScripts) { // Support: Android <=4.0 only, PhantomJS 1 only
                            // push.apply(_, arraylike) throws on ancient WebKit
                            jQuery.merge(scripts, getAll(node, "script"));
                        }
                    }
                    callback.call(collection[i], node, i);
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts
                    jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion
                    for (i = 0; i < hasScripts; i++) {
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src && (node.type || "").toLowerCase() !== "module") { // Optional AJAX dependency, but won't run scripts if not present
                                if (jQuery._evalUrl) {
                                    jQuery._evalUrl(node.src);
                                }
                            } else {
                                DOMEval(node.textContent.replace(rcleanScript, ""), doc, node);
                            }
                        }
                    }
                }
            }
        }
        return collection;
    }

    function _remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem,
            i = 0;
        for (;
            (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
                jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
                if (keepData && jQuery.contains(node.ownerDocument, node)) {
                    setGlobalEval(getAll(node, "script"));
                }
                node.parentNode.removeChild(node);
            }
        }
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function htmlPrefilter(html) {
            return html.replace(rxhtmlTag, "<$1></$2>");
        },
        clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true),
                inPage = jQuery.contains(elem.ownerDocument, elem); // Fix IE cloning issues
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) { // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0, l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i]);
                }
            } // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0, l = srcElements.length; i < l; i++) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            } // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            } // Return the cloned set
            return clone;
        },
        cleanData: function cleanData(elems) {
            var data, elem, type, special = jQuery.event.special,
                i = 0;
            for (;
                (elem = elems[i]) !== undefined; i++) {
                if (acceptData(elem)) {
                    if (data = elem[dataPriv.expando]) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        } // Support: Chrome <=35 - 45+
                        // Assign undefined instead of using delete, see Data#remove
                        elem[dataPriv.expando] = undefined;
                    }
                    if (elem[dataUser.expando]) { // Support: Chrome <=35 - 45+
                        // Assign undefined instead of using delete, see Data#remove
                        elem[dataUser.expando] = undefined;
                    }
                }
            }
        }
    });
    jQuery.fn.extend({
        detach: function detach(selector) {
            return _remove(this, selector, true);
        },
        remove: function remove(selector) {
            return _remove(this, selector);
        },
        text: function text(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = value;
                    }
                });
            }, null, value, arguments.length);
        },
        append: function append() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function prepend() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function before() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        after: function after() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        empty: function empty() {
            var elem, i = 0;
            for (;
                (elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) { // Prevent memory leaks
                    jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes
                    elem.textContent = "";
                }
            }
            return this;
        },
        clone: function clone(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function html(value) {
            return access(this, function(value) {
                var elem = this[0] || {},
                    i = 0,
                    l = this.length;
                if (value === undefined && elem.nodeType === 1) {
                    return elem.innerHTML;
                } // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for (; i < l; i++) {
                            elem = this[i] || {}; // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0; // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        replaceWith: function replaceWith() {
            var ignored = []; // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) {
                        parent.replaceChild(elem, this);
                    }
                } // Force callback invocation
            }, ignored);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [],
                insert = jQuery(selector),
                last = insert.length - 1,
                i = 0;
            for (; i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var getStyles = function getStyles(elem) { // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = window;
        }
        return view.getComputedStyle(elem);
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function() { // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() { // This is a singleton, we need to execute it only once
            if (!div) {
                return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
            // Some styles come back with percentage values, even though they shouldn't
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
            // Detect misreporting of content dimensions for box-sizing:border-box elements
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
            // Detect overflow:scroll screwiness (gh-3699)
            div.style.position = "absolute";
            scrollboxSizeVal = div.offsetWidth === 36 || "absolute";
            documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }

        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableMarginLeftVal, container = document.createElement("div"),
            div = document.createElement("div"); // Finish early in limited (non-browser) environments
        if (!div.style) {
            return;
        } // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (#8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
            boxSizingReliable: function boxSizingReliable() {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelBoxStyles: function pixelBoxStyles() {
                computeStyleTests();
                return pixelBoxStylesVal;
            },
            pixelPosition: function pixelPosition() {
                computeStyleTests();
                return pixelPositionVal;
            },
            reliableMarginLeft: function reliableMarginLeft() {
                computeStyleTests();
                return reliableMarginLeftVal;
            },
            scrollboxSize: function scrollboxSize() {
                computeStyleTests();
                return scrollboxSizeVal;
            }
        });
    })();

    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, // Support: Firefox 51+
            // Retrieving style before computed somehow
            // fixes an issue with getting wrong values
            // on detached elements
            style = elem.style;
        computed = computed || getStyles(elem); // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, #12537)
        //   .css('--customProperty) (#3144)
        if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                ret = jQuery.style(elem, name);
            } // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) { // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth; // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width; // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + "" : ret;
    }

    function addGetHookIf(conditionFn, hookFn) { // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function get() {
                if (conditionFn()) { // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                } // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    var // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rcustomProp = /^--/,
        cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        cssPrefixes = ["Webkit", "Moz", "ms"],
        emptyStyle = document.createElement("div").style; // Return a css property mapped to a potentially vendor prefixed property
    function vendorPropName(name) { // Shortcut for names that are not vendor prefixed
        if (name in emptyStyle) {
            return name;
        } // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1),
            i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
                return name;
            }
        }
    } // Return a property mapped along what jQuery.cssProps suggests or to
    // a vendor prefixed property.
    function finalPropName(name) {
        var ret = jQuery.cssProps[name];
        if (!ret) {
            ret = jQuery.cssProps[name] = vendorPropName(name) || name;
        }
        return ret;
    }

    function setPositiveNumber(elem, value, subtract) { // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }

    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0,
            extra = 0,
            delta = 0; // Adjustment may not be necessary
        if (box === (isBorderBox ? "border" : "content")) {
            return 0;
        }
        for (; i < 4; i += 2) { // Both box models exclude margin
            if (box === "margin") {
                delta += jQuery.css(elem, box + cssExpand[i], true, styles);
            } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
            if (!isBorderBox) { // Add padding
                delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border
                if (box !== "padding") {
                    delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
                } else {
                    extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                } // If we get here with a border-box (content + padding + border), we're seeking "content" or
                // "padding" or "margin"
            } else { // For "content", subtract padding
                if (box === "content") {
                    delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                } // For "content" or "padding", subtract border
                if (box !== "margin") {
                    delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        } // Account for positive content-box scroll gutter when requested by providing computedVal
        if (!isBorderBox && computedVal >= 0) { // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
            // Assuming integer scroll gutter, subtract the rest and round down
            delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5));
        }
        return delta;
    }

    function getWidthOrHeight(elem, dimension, extra) { // Start with computed style
        var styles = getStyles(elem),
            val = curCSS(elem, dimension, styles),
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            valueIsBorderBox = isBorderBox; // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.
        if (rnumnonpx.test(val)) {
            if (!extra) {
                return val;
            }
            val = "auto";
        } // Check for style in case a browser which returns unreliable values
        // for getComputedStyle silently falls back to the reliable elem.style
        valueIsBorderBox = valueIsBorderBox && (support.boxSizingReliable() || val === elem.style[dimension]); // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        if (val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") {
            val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)]; // offsetWidth/offsetHeight provide border-box values
            valueIsBorderBox = true;
        } // Normalize "" and auto
        val = parseFloat(val) || 0; // Adjust for the element's box model
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val) + "px";
    }
    jQuery.extend({ // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function get(elem, computed) {
                    if (computed) { // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        }, // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        }, // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {}, // Get and set the style property on a DOM Node
        style: function style(elem, name, value, extra) { // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            } // Make sure that we're working with the right name
            var ret, type, hooks, origName = camelCase(name),
                isCustomProp = rcustomProp.test(name),
                style = elem.style; // Make sure that we're working with the right name. We don't
            // want to query the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) {
                name = finalPropName(origName);
            } // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value === "undefined" ? "undefined" : _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret); // Fixes bug #9237
                    type = "number";
                } // Make sure that null and NaN values aren't set (#7116)
                if (value == null || value !== value) {
                    return;
                } // If a number was passed in, add the unit (except for certain CSS properties)
                if (type === "number") {
                    value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                } // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                } // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    if (isCustomProp) {
                        style.setProperty(name, value);
                    } else {
                        style[name] = value;
                    }
                }
            } else { // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                } // Otherwise just get the value from the style object
                return style[name];
            }
        },
        css: function css(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name),
                isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
            // want to modify the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) {
                name = finalPropName(origName);
            } // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            } // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            } // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            } // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each(["height", "width"], function(i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function get(elem, computed, extra) {
                if (computed) { // Certain elements can have dimension info if we invisibly show them
                    // but it must have a current display style that would benefit
                    return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
                        // Table columns in Safari have non-zero offsetWidth & zero
                        // getBoundingClientRect().width unless display is changed.
                        // Support: IE <=11 only
                        // Running getBoundingClientRect on a disconnected node
                        // in IE throws an error.
                        !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, dimension, extra);
                    }) : getWidthOrHeight(elem, dimension, extra);
                }
            },
            set: function set(elem, value, extra) {
                var matches, styles = getStyles(elem),
                    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                    subtract = extra && boxModelAdjustment(elem, dimension, extra, isBorderBox, styles); // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if (isBorderBox && support.scrollboxSize() === styles.position) {
                    subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
                } // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension);
                }
                return setPositiveNumber(elem, value, subtract);
            }
        };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                marginLeft: 0
            }, function() {
                return elem.getBoundingClientRect().left;
            })) + "px";
        }
    }); // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function expand(value) {
                var i = 0,
                    expanded = {}, // Assumes a single number if not a string
                    parts = typeof value === "string" ? value.split(" ") : [value];
                for (; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
            }
        };
        if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    jQuery.fn.extend({
        css: function css(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {},
                    i = 0;
                if (Array.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (; i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        }
    });

    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function init(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function cur() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function run(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function get(tween) {
                var result; // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                    return tween.elem[tween.prop];
                } // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function set(tween) { // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    }; // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function set(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.easing = {
        linear: function linear(p) {
            return p;
        },
        swing: function swing(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point
    jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;

    function schedule() {
        if (inProgress) {
            if (document.hidden === false && window.requestAnimationFrame) {
                window.requestAnimationFrame(schedule);
            } else {
                window.setTimeout(schedule, jQuery.fx.interval);
            }
            jQuery.fx.tick();
        }
    } // Animations created synchronously will run synchronously
    function createFxNow() {
        window.setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = Date.now();
    } // Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which, i = 0,
            attrs = {
                height: type
            }; // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }
        return attrs;
    }

    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
            index = 0,
            length = collection.length;
        for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) { // We're done with this property
                return tween;
            }
        }
    }

    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHiddenWithinTree(elem),
            dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() { // Ensure the complete handler is called before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        } // Detect show/hide animations
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) { // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = true; // Ignore all other no-op show/hide data
                    } else {
                        continue;
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        } // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
        } // Restrict "overflow" and "display" styles during box animations
        if (isBox && elem.nodeType === 1) { // Support: IE <=9 - 11, Edge 12 - 15
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY and Edge just mirrors
            // the overflowX value there.
            opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
                restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
                if (restoreDisplay) {
                    display = restoreDisplay;
                } else { // Get nonempty value(s) by temporarily forcing visibility
                    showHide([elem], true);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([elem]);
                }
            } // Animate inline elements as inline-block
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") { // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                        anim.done(function() {
                            style.display = restoreDisplay;
                        });
                        if (restoreDisplay == null) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        } // Implement show/hide animations
        propTween = false;
        for (prop in orig) { // General show/hide setup for this element animation
            if (!propTween) {
                if (dataShow) {
                    if ("hidden" in dataShow) {
                        hidden = dataShow.hidden;
                    }
                } else {
                    dataShow = dataPriv.access(elem, "fxshow", {
                        display: restoreDisplay
                    });
                } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if (toggle) {
                    dataShow.hidden = !hidden;
                } // Show elements before animating them
                if (hidden) {
                    showHide([elem], true);
                } /* eslint-disable no-loop-func */
                anim.done(function() {
                    /* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) {
                        showHide([elem]);
                    }
                    dataPriv.remove(elem, "fxshow");
                    for (prop in orig) {
                        jQuery.style(elem, prop, orig[prop]);
                    }
                });
            } // Per-property setup
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }

    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass
        for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }

    function Animation(elem, properties, options) {
        var result, stopped, index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function() { // Don't match elem in the :animated selector
                delete tick.elem;
            }),
            tick = function tick() {
                if (stopped) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // Support: Android 2.3 only
                    // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;
                for (; index < length; index++) {
                    animation.tweens[index].run(percent);
                }
                deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield
                if (percent < 1 && length) {
                    return remaining;
                } // If this was an empty animation, synthesize a final progress notification
                if (!length) {
                    deferred.notifyWith(elem, [animation, 1, 0]);
                } // Resolve the animation and report its conclusion
                deferred.resolveWith(elem, [animation]);
                return false;
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(true, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function createTween(prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween;
                },
                stop: function stop(gotoEnd) {
                    var index = 0, // If we are going to the end, we want to run all the tweens
                        // otherwise we skip this part
                        length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this;
                    }
                    stopped = true;
                    for (; index < length; index++) {
                        animation.tweens[index].run(1);
                    } // Resolve when we played the last frame; otherwise, reject
                    if (gotoEnd) {
                        deferred.notifyWith(elem, [animation, 1, 0]);
                        deferred.resolveWith(elem, [animation, gotoEnd]);
                    } else {
                        deferred.rejectWith(elem, [animation, gotoEnd]);
                    }
                    return this;
                }
            }),
            props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (isFunction(result.stop)) {
                    jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                }
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        } // Attach callbacks from options
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation;
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [function(prop, value) {
                var tween = this.createTween(prop, value);
                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                return tween;
            }]
        },
        tweener: function tweener(props, callback) {
            if (isFunction(props)) {
                callback = props;
                props = ["*"];
            } else {
                props = props.match(rnothtmlwhite);
            }
            var prop, index = 0,
                length = props.length;
            for (; index < length; index++) {
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },
        prefilters: [defaultPrefilter],
        prefilter: function prefilter(callback, prepend) {
            if (prepend) {
                Animation.prefilters.unshift(callback);
            } else {
                Animation.prefilters.push(callback);
            }
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        }; // Go to the end state if fx are off
        if (jQuery.fx.off) {
            opt.duration = 0;
        } else {
            if (typeof opt.duration !== "number") {
                if (opt.duration in jQuery.fx.speeds) {
                    opt.duration = jQuery.fx.speeds[opt.duration];
                } else {
                    opt.duration = jQuery.fx.speeds._default;
                }
            }
        } // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        } // Queueing
        opt.old = opt.complete;
        opt.complete = function() {
            if (isFunction(opt.old)) {
                opt.old.call(this);
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function fadeTo(speed, to, easing, callback) { // Show any hidden elements after setting opacity to 0
            return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
                .end().animate({
                    opacity: to
                }, speed, easing, callback);
        },
        animate: function animate(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop),
                optall = jQuery.speed(speed, easing, callback),
                doAnimation = function doAnimation() { // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately
                    if (empty || dataPriv.get(this, "finish")) {
                        anim.stop(true);
                    }
                };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function stop(type, clearQueue, gotoEnd) {
            var stopQueue = function stopQueue(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }
            return this.each(function() {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                } // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function finish(type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function() {
                var index, data = dataPriv.get(this),
                    queue = data[type + "queue"],
                    hooks = data[type + "queueHooks"],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0; // Enable finishing flag on private data
                data.finish = true; // Empty the queue first
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                } // Look for any active animations, and finish them
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                } // Look for any animations in the old queue and finish them
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                } // Turn off finishing flag
                delete data.finish;
            });
        }
    });
    jQuery.each(["toggle", "show", "hide"], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    }); // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0,
            timers = jQuery.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
            timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }
        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (inProgress) {
            return;
        }
        inProgress = true;
        schedule();
    };
    jQuery.fx.stop = function() {
        inProgress = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200, // Default speed
        _default: 400
    }; // Based off of the plugin by Clint Helfers, with permission.
    // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function() {
                window.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"),
            select = document.createElement("select"),
            opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox"; // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== ""; // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected; // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function attr(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function removeAttr(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function attr(elem, name, value) {
            var ret, hooks, nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            } // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") {
                return jQuery.prop(elem, name, value);
            } // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }
                elem.setAttribute(name, value + "");
                return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }
            ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },
        attrHooks: {
            type: {
                set: function set(elem, value) {
                    if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },
        removeAttr: function removeAttr(elem, value) {
            var name, i = 0, // Attribute names can contain non-HTML whitespace characters
                // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
                attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
                while (name = attrNames[i++]) {
                    elem.removeAttribute(name);
                }
            }
        }
    }); // Hooks for boolean attributes
    boolHook = {
        set: function set(elem, value, name) {
            if (value === false) { // Remove boolean attributes when set to false
                jQuery.removeAttr(elem, name);
            } else {
                elem.setAttribute(name, name);
            }
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle, lowercaseName = name.toLowerCase();
            if (!isXML) { // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i,
        rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function prop(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function removeProp(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        prop: function prop(elem, name, value) {
            var ret, hooks, nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) { // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }
                return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }
            return elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function get(elem) { // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    if (tabindex) {
                        return parseInt(tabindex, 10);
                    }
                    if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                        return 0;
                    }
                    return -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }); // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function get(elem) {
                /* eslint no-unused-expressions: "off" */
                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex;
                }
                return null;
            },
            set: function set(elem) {
                /* eslint no-unused-expressions: "off" */
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
            }
        };
    }
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    }); // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
    }

    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }

    function classesToArray(value) {
        if (Array.isArray(value)) {
            return value;
        }
        if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
        }
        return [];
    }
    jQuery.fn.extend({
        addClass: function addClass(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, getClass(this)));
                });
            }
            classes = classesToArray(value);
            if (classes.length) {
                while (elem = this[i++]) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        } // Only assign if different to avoid unneeded rendering.
                        finalValue = stripAndCollapse(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue);
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function removeClass(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, getClass(this)));
                });
            }
            if (!arguments.length) {
                return this.attr("class", "");
            }
            classes = classesToArray(value);
            if (classes.length) {
                while (elem = this[i++]) {
                    curValue = getClass(elem); // This expression is here for better compressibility (see addClass)
                    cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) { // Remove *all* instances
                            while (cur.indexOf(" " + clazz + " ") > -1) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        } // Only assign if different to avoid unneeded rendering.
                        finalValue = stripAndCollapse(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue);
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function toggleClass(value, stateVal) {
            var type = typeof value === "undefined" ? "undefined" : _typeof(value),
                isValidValue = type === "string" || Array.isArray(value);
            if (typeof stateVal === "boolean" && isValidValue) {
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                });
            }
            return this.each(function() {
                var className, i, self, classNames;
                if (isValidValue) { // Toggle individual class names
                    i = 0;
                    self = jQuery(this);
                    classNames = classesToArray(value);
                    while (className = classNames[i++]) { // Check each className given, space separated list
                        if (self.hasClass(className)) {
                            self.removeClass(className);
                        } else {
                            self.addClass(className);
                        }
                    } // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) { // Store className if set
                        dataPriv.set(this, "__className__", className);
                    } // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) {
                        this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                    }
                }
            });
        },
        hasClass: function hasClass(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
                if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                    return true;
                }
            }
            return false;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function val(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }
                    ret = elem.value; // Handle most common string cases
                    if (typeof ret === "string") {
                        return ret.replace(rreturn, "");
                    } // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                }
                return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) {
                    return;
                }
                if (valueIsFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                } // Treat null/undefined as ""; convert numbers to string
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (Array.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + "";
                    });
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function get(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : // Support: IE <=10 - 11 only
                        // option.text throws exceptions (#14686, #14858)
                        // Strip and collapse whitespace
                        // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                        stripAndCollapse(jQuery.text(elem));
                }
            },
            select: {
                get: function get(elem) {
                    var value, option, i, options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === "select-one",
                        values = one ? null : [],
                        max = one ? index + 1 : options.length;
                    if (index < 0) {
                        i = max;
                    } else {
                        i = one ? index : 0;
                    } // Loop through all the selected options
                    for (; i < max; i++) {
                        option = options[i]; // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (#2551)
                        if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) { // Get the specific value for the option
                            value = jQuery(option).val(); // We don't need an array for one selects
                            if (one) {
                                return value;
                            } // Multi-Selects return an array
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function set(elem, value) {
                    var optionSet, option, options = elem.options,
                        values = jQuery.makeArray(value),
                        i = options.length;
                    while (i--) {
                        option = options[i]; /* eslint-disable no-cond-assign */
                        if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                            optionSet = true;
                        } /* eslint-enable no-cond-assign */
                    } // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        }
    }); // Radios and checkboxes getter/setter
    jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
            set: function set(elem, value) {
                if (Array.isArray(value)) {
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    }); // Return jQuery for attributes-only inclusion
    support.focusin = "onfocusin" in window;
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        stopPropagationCallback = function stopPropagationCallback(e) {
            e.stopPropagation();
        };
    jQuery.extend(jQuery.event, {
        trigger: function trigger(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document],
                type = hasOwn.call(event, "type") ? event.type : event,
                namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            } // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }
            if (type.indexOf(".") > -1) { // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            } // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            } // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (; cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                } // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            } // Fire handlers on the event path
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                lastElement = cur;
                event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler
                handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                } // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type; // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) { // Call a native DOM method on the target with the same name as the event.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) { // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null;
                        } // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        if (event.isPropagationStopped()) {
                            lastElement.addEventListener(type, stopPropagationCallback);
                        }
                        elem[type]();
                        if (event.isPropagationStopped()) {
                            lastElement.removeEventListener(type, stopPropagationCallback);
                        }
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }
            return event.result;
        }, // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function simulate(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
        }
    });
    jQuery.fn.extend({
        trigger: function trigger(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function triggerHandler(type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    }); // Support: Firefox <=44
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
    if (!support.focusin) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) { // Attach a single capturing handler on the document while someone wants focusin/focusout
            var handler = function handler(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
            };
            jQuery.event.special[fix] = {
                setup: function setup() {
                    var doc = this.ownerDocument || this,
                        attaches = dataPriv.access(doc, fix);
                    if (!attaches) {
                        doc.addEventListener(orig, handler, true);
                    }
                    dataPriv.access(doc, fix, (attaches || 0) + 1);
                },
                teardown: function teardown() {
                    var doc = this.ownerDocument || this,
                        attaches = dataPriv.access(doc, fix) - 1;
                    if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        dataPriv.remove(doc, fix);
                    } else {
                        dataPriv.access(doc, fix, attaches);
                    }
                }
            };
        });
    }
    var location = window.location;
    var nonce = Date.now();
    var rquery = /\?/; // Cross-browser xml parsing
    jQuery.parseXML = function(data) {
        var xml;
        if (!data || typeof data !== "string") {
            return null;
        } // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = new window.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
            xml = undefined;
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data);
        }
        return xml;
    };
    var rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) { // Serialize array item.
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) { // Treat each array item as a scalar.
                    add(prefix, v);
                } else { // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
                }
            });
        } else if (!traditional && toType(obj) === "object") { // Serialize object item.
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
        } else { // Serialize scalar item.
            add(prefix, obj);
        }
    } // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function(a, traditional) {
        var prefix, s = [],
            add = function add(key, valueOrFunction) { // If value is a function, invoke it and use its return value
                var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
            }; // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) { // Serialize the form elements
            jQuery.each(a, function() {
                add(this.name, this.value);
            });
        } else { // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        } // Return the resulting serialization
        return s.join("&");
    };
    jQuery.fn.extend({
        serialize: function serialize() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function serializeArray() {
            return this.map(function() { // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                if (val == null) {
                    return null;
                }
                if (Array.isArray(val)) {
                    return jQuery.map(val, function(val) {
                        return {
                            name: elem.name,
                            value: val.replace(rCRLF, "\r\n")
                        };
                    });
                }
                return {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    var r20 = /%20/g,
        rhash = /#.*$/,
        rantiCache = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, // #7653, #8125, #8152: local protocol detection
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        /* Prefilters
         * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
         * 2) These are called:
         *    - BEFORE asking for a transport
         *    - AFTER param serialization (s.data is a string if s.processData is true)
         * 3) key is the dataType
         * 4) the catchall symbol "*" can be used
         * 5) execution will start with transport dataType and THEN continue down to "*" if needed
         */
        prefilters = {},
        /* Transports bindings
         * 1) key is the dataType
         * 2) the catchall symbol "*" can be used
         * 3) selection will start with transport dataType and THEN go to "*" if needed
         */
        transports = {}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        allTypes = "*/".concat("*"), // Anchor tag for parsing the document origin
        originAnchor = document.createElement("a");
    originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) { // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) { // For each dataType in the dataTypeExpression
                while (dataType = dataTypes[i++]) { // Prepend if requested
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    } // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {},
            seekingTransport = structure === transports;

        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    } // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }
        return target;
    }
    /* Handles responses to an ajax request:
     * - finds the right dataType (mediates between content-type and expected dataType)
     * - returns the corresponding response
     */
    function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents,
            dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        } // Check if we're dealing with a known content-type
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        } // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else { // Try convertible dataTypes
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            } // Or just use first one
            finalDataType = finalDataType || firstDataType;
        } // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }
    /* Chain conversions given the request and the original response
     * Also sets the responseXXX fields on the jqXHR instance
     */
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
            dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        current = dataTypes.shift(); // Convert to each sequential dataType
        while (current) {
            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            } // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) { // There's only work to do if current dataType is non-auto
                if (current === "*") {
                    current = prev; // Convert response if prev dataType is non-auto and differs from current
                } else if (prev !== "*" && prev !== current) { // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair
                    if (!conv) {
                        for (conv2 in converters) { // If conv2 outputs current
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) { // If prev can be converted to accepted input
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) { // Condense equivalence converters
                                    if (conv === true) {
                                        conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    } // Apply converter (if not an equivalence)
                    if (conv !== true) { // Unless errors are allowed to bubble, catch and return them
                        if (conv && s.throws) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({ // Counter for holding the number of active queries
        active: 0, // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            		timeout: 0,
            		data: null,
            		dataType: null,
            		username: null,
            		password: null,
            		cache: null,
            		throws: false,
            		traditional: false,
            		headers: {},
            		*/
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            }, // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: { // Convert anything to text
                "* text": String, // Text to html (true = no transformation)
                "text html": true, // Evaluate text as a json expression
                "text json": JSON.parse, // Parse text as xml
                "text xml": jQuery.parseXML
            }, // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        }, // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function ajaxSetup(target, settings) {
            return settings ? // Building a settings object
                ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
                ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports), // Main method
        ajax: function ajax(url, options) { // If url is an object, simulate pre-1.5 signature
            if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
                options = url;
                url = undefined;
            } // Force options to be an object
            options = options || {};
            var transport, // URL without anti-cache param
                cacheURL, // Response headers
                responseHeadersString, responseHeaders, // timeout handle
                timeoutTimer, // Url cleanup var
                urlAnchor, // Request state (becomes false upon send and true upon completion)
                completed, // To know if global events are to be dispatched
                fireGlobals, // Loop variable
                i, // uncached part of the url
                uncached, // Create the final options object
                s = jQuery.ajaxSetup({}, options), // Callbacks context
                callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
                globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
                _statusCode = s.statusCode || {}, // Headers (they are sent all at once)
                requestHeaders = {},
                requestHeadersNames = {}, // Default abort message
                strAbort = "canceled", // Fake xhr
                jqXHR = {
                    readyState: 0, // Builds headers hashtable if needed
                    getResponseHeader: function getResponseHeader(key) {
                        var match;
                        if (completed) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while (match = rheaders.exec(responseHeadersString)) {
                                    responseHeaders[match[1].toLowerCase()] = match[2];
                                }
                            }
                            match = responseHeaders[key.toLowerCase()];
                        }
                        return match == null ? null : match;
                    }, // Raw string
                    getAllResponseHeaders: function getAllResponseHeaders() {
                        return completed ? responseHeadersString : null;
                    }, // Caches the header
                    setRequestHeader: function setRequestHeader(name, value) {
                        if (completed == null) {
                            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                            requestHeaders[name] = value;
                        }
                        return this;
                    }, // Overrides response content-type header
                    overrideMimeType: function overrideMimeType(type) {
                        if (completed == null) {
                            s.mimeType = type;
                        }
                        return this;
                    }, // Status-dependent callbacks
                    statusCode: function statusCode(map) {
                        var code;
                        if (map) {
                            if (completed) { // Execute the appropriate callbacks
                                jqXHR.always(map[jqXHR.status]);
                            } else { // Lazy-add the new callbacks in a way that preserves old ones
                                for (code in map) {
                                    _statusCode[code] = [_statusCode[code], map[code]];
                                }
                            }
                        }
                        return this;
                    }, // Cancel the request
                    abort: function abort(statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText);
                        }
                        done(0, finalText);
                        return this;
                    }
                }; // Attach deferreds
            deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url; // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) { // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            } // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            } // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there
            if (completed) {
                return jqXHR;
            } // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
            fireGlobals = jQuery.event && s.global; // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            } // Uppercase the type
            s.type = s.type.toUpperCase(); // Determine if request has content
            s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content
            if (!s.hasContent) { // Remember the hash so we can put it back
                uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url
                if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                } // Add or update anti-cache param if needed
                if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
                } // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                s.data = s.data.replace(r20, "+");
            } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            } // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            } // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            } // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) { // Abort if not done already and return
                return jqXHR.abort();
            } // Aborting is no longer a cancellation
            strAbort = "abort"; // Install callbacks on deferreds
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error); // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1; // Send global event
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                } // If request was aborted inside ajaxSend, stop there
                if (completed) {
                    return jqXHR;
                } // Timeout
                if (s.async && s.timeout > 0) {
                    timeoutTimer = window.setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }
                try {
                    completed = false;
                    transport.send(requestHeaders, done);
                } catch (e) { // Rethrow post-completion exceptions
                    if (completed) {
                        throw e;
                    } // Propagate others as results
                    done(-1, e);
                }
            } // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText; // Ignore repeat invocations
                if (completed) {
                    return;
                }
                completed = true; // Clear timeout if it exists
                if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer);
                } // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined; // Cache response headers
                responseHeadersString = headers || ""; // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304; // Get response data
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                } // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining
                if (isSuccess) { // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    } // if no content
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent"; // if not modified
                    } else if (status === 304) {
                        statusText = "notmodified"; // If we have data, let's convert it
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else { // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                } // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                } else {
                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                } // Status-dependent callbacks
                jqXHR.statusCode(_statusCode);
                _statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
                } // Complete
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            return jqXHR;
        },
        getJSON: function getJSON(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function getScript(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each(["get", "post"], function(i, method) {
        jQuery[method] = function(url, data, callback, type) { // Shift arguments if data argument was omitted
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            } // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });
    jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url, // Make this explicit, since user can override this through ajaxSetup (#11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            "throws": true
        });
    };
    jQuery.fn.extend({
        wrapAll: function wrapAll(html) {
            var wrap;
            if (this[0]) {
                if (isFunction(html)) {
                    html = html.call(this[0]);
                } // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstElementChild) {
                        elem = elem.firstElementChild;
                    }
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function wrapInner(html) {
            if (isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            return this.each(function() {
                var self = jQuery(this),
                    contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html);
                } else {
                    self.append(html);
                }
            });
        },
        wrap: function wrap(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function unwrap(selector) {
            this.parent(selector).not("body").each(function() {
                jQuery(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });
    jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {}
    };
    var xhrSuccessStatus = { // File protocol always yields status code 0, assume 200
            0: 200, // Support: IE <=9 only
            // #1450: sometimes IE returns 1223 when it should be 204
            1223: 204
        },
        xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                send: function send(headers, complete) {
                    var i, xhr = options.xhr();
                    xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided
                    if (options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i];
                        }
                    } // Override mime type if needed
                    if (options.mimeType && xhr.overrideMimeType) {
                        xhr.overrideMimeType(options.mimeType);
                    } // X-Requested-With header
                    // For cross-domain requests, seeing as conditions for a preflight are
                    // akin to a jigsaw puzzle, we simply never set it to be sure.
                    // (it can always be set on a per-request basis or even using ajaxSetup)
                    // For same-domain requests, won't change header if already provided.
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                        headers["X-Requested-With"] = "XMLHttpRequest";
                    } // Set headers
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i]);
                    } // Callback
                    _callback = function callback(type) {
                        return function() {
                            if (_callback) {
                                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                                if (type === "abort") {
                                    xhr.abort();
                                } else if (type === "error") { // Support: IE <=9 only
                                    // On a manual native abort, IE9 throws
                                    // errors on any property access that is not readyState
                                    if (typeof xhr.status !== "number") {
                                        complete(0, "error");
                                    } else {
                                        complete( // File: protocol always yields status 0; see #8605, #14207
                                            xhr.status, xhr.statusText);
                                    }
                                } else {
                                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                                        // IE9 has no XHR2 but throws on binary (trac-11426)
                                        // For XHR2 non-text, let the caller handle it (gh-2498)
                                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders());
                                }
                            }
                        };
                    }; // Listen to events
                    xhr.onload = _callback();
                    errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
                    // Use onreadystatechange to replace onabort
                    // to handle uncaught aborts
                    if (xhr.onabort !== undefined) {
                        xhr.onabort = errorCallback;
                    } else {
                        xhr.onreadystatechange = function() { // Check readyState before timeout as it changes
                            if (xhr.readyState === 4) { // Allow onerror to be called first,
                                // but that will not handle a native abort
                                // Also, save errorCallback to a variable
                                // as xhr.onerror cannot be accessed
                                window.setTimeout(function() {
                                    if (_callback) {
                                        errorCallback();
                                    }
                                });
                            }
                        };
                    } // Create the abort callback
                    _callback = _callback("abort");
                    try { // Do send the request (this may raise an exception)
                        xhr.send(options.hasContent && options.data || null);
                    } catch (e) { // #14683: Only rethrow if this hasn't been notified as an error yet
                        if (_callback) {
                            throw e;
                        }
                    }
                },
                abort: function abort() {
                    if (_callback) {
                        _callback();
                    }
                }
            };
        }
    }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
            s.contents.script = false;
        }
    }); // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function textScript(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    }); // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
        }
    }); // Bind script tag hack transport
    jQuery.ajaxTransport("script", function(s) { // This transport only deals with cross domain requests
        if (s.crossDomain) {
            var script, _callback2;
            return {
                send: function send(_, complete) {
                    script = jQuery("<script>").prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", _callback2 = function callback(evt) {
                        script.remove();
                        _callback2 = null;
                        if (evt) {
                            complete(evt.type === "error" ? 404 : 200, evt.type);
                        }
                    }); // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0]);
                },
                abort: function abort() {
                    if (_callback2) {
                        _callback2();
                    }
                }
            };
        }
    });
    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function jsonpCallback() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            this[callback] = true;
            return callback;
        }
    }); // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") { // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            } // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            }; // Force json dataType
            s.dataTypes[0] = "json"; // Install callback
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments;
            }; // Clean-up function (fires after converters)
            jqXHR.always(function() { // If previous value didn't exist - remove it
                if (overwritten === undefined) {
                    jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
                } else {
                    window[callbackName] = overwritten;
                } // Save back as free
                if (s[callbackName]) { // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use
                    oldCallbacks.push(callbackName);
                } // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = undefined;
            }); // Delegate to script
            return "script";
        }
    }); // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = function() {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    }(); // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
            return [];
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        var base, parsed, scripts;
        if (!context) { // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement("base");
                base.href = document.location.href;
                context.head.appendChild(base);
            } else {
                context = document;
            }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && []; // Single tag
        if (parsed) {
            return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
            jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
    };
    /**
     * Load a url into a page
     */
    jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this,
            off = url.indexOf(" ");
        if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
        } // If it's a function
        if (isFunction(params)) { // We assume that it's the callback
            callback = params;
            params = undefined; // Otherwise, build a param string
        } else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
            type = "POST";
        } // If we have elements to modify, make the request
        if (self.length > 0) {
            jQuery.ajax({
                url: url, // If "type" variable is undefined, then "GET" method will be used.
                // Make value of this field explicit since
                // user can override it through ajaxSetup method
                type: type || "GET",
                dataType: "html",
                data: params
            }).done(function(responseText) { // Save response for use in complete callback
                response = arguments;
                self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
                    // Exclude scripts to avoid IE 'Permission Denied' errors
                    jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
                    responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
                // but they are ignored because response was set above.
                // If it fails, this function gets "jqXHR", "status", "error"
            }).always(callback && function(jqXHR, status) {
                self.each(function() {
                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                });
            });
        }
        return this;
    }; // Attach a bunch of functions for handling common AJAX events
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    jQuery.offset = {
        setOffset: function setOffset(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
                curElem = jQuery(elem),
                props = {}; // Set position first, in-case top/left are set even on static elem
            if (position === "static") {
                elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) { // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
                props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };
    jQuery.fn.extend({ // offset() relates an element's border box to the document origin
        offset: function offset(options) { // Preserve chaining for setter
            if (arguments.length) {
                return options === undefined ? this : this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }
            var rect, win, elem = this[0];
            if (!elem) {
                return;
            } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!elem.getClientRects().length) {
                return {
                    top: 0,
                    left: 0
                };
            } // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        }, // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function position() {
            if (!this[0]) {
                return;
            }
            var offsetParent, offset, doc, elem = this[0],
                parentOffset = {
                    top: 0,
                    left: 0
                }; // position:fixed elements are offset from the viewport, which itself always has zero offset
            if (jQuery.css(elem, "position") === "fixed") { // Assume position:fixed implies availability of getBoundingClientRect
                offset = elem.getBoundingClientRect();
            } else {
                offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                    offsetParent = offsetParent.parentNode;
                }
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) { // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                }
            } // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        }, // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function offsetParent() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || documentElement;
            });
        }
    }); // Create scrollLeft and scrollTop methods
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) { // Coalesce documents and windows
                var win;
                if (isWindow(elem)) {
                    win = elem;
                } else if (elem.nodeType === 9) {
                    win = elem.defaultView;
                }
                if (val === undefined) {
                    return win ? win[prop] : elem[method];
                }
                if (win) {
                    win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length);
        };
    }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each(["top", "left"], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) { // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (isWindow(elem)) { // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                        return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                    } // Get document width or height
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                        jQuery.css(elem, type, extra) : // Set width or height on the element
                        jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable);
            };
        });
    });
    jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(i, name) { // Handle event binding
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    jQuery.fn.extend({
        hover: function hover(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });
    jQuery.fn.extend({
        bind: function bind(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function unbind(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function delegate(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function undelegate(selector, types, fn) { // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    }); // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon
    jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
        } // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if (!isFunction(fn)) {
            return undefined;
        } // Simulated bind
        args = _slice.call(arguments, 2);
        proxy = function proxy() {
            return fn.apply(context || this, args.concat(_slice.call(arguments)));
        }; // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
    };
    jQuery.holdReady = function(hold) {
        if (hold) {
            jQuery.readyWait++;
        } else {
            jQuery.ready(true);
        }
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(obj) { // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
            // subtraction forces infinities to NaN
            !isNaN(obj - parseFloat(obj));
    }; // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return jQuery;
        });
    }
    var // Map over jQuery in case of overwrite
        _jQuery = window.jQuery, // Map over the $ in case of overwrite
        _$ = window.$;
    jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }
        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }
        return jQuery;
    }; // Expose jQuery and $ identifiers, even in AMD
    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
    }
    return jQuery;
});
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], function($) {
            return factory($);
        });
    } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
        exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(function($) {
    $.easing.jswing = $.easing.swing;
    var pow = Math.pow,
        sqrt = Math.sqrt,
        sin = Math.sin,
        cos = Math.cos,
        PI = Math.PI,
        c1 = 1.70158,
        c2 = c1 * 1.525,
        c3 = c1 + 1,
        c4 = 2 * PI / 3,
        c5 = 2 * PI / 4.5;

    function bounceOut(x) {
        var n1 = 7.5625,
            d1 = 2.75;
        if (x < 1 / d1) {
            return n1 * x * x;
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + .75;
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + .9375;
        } else {
            return n1 * (x -= 2.625 / d1) * x + .984375;
        }
    }
    $.extend($.easing, {
        def: "easeOutQuad",
        swing: function swing(x) {
            return $.easing[$.easing.def](x);
        },
        easeInQuad: function easeInQuad(x) {
            return x * x;
        },
        easeOutQuad: function easeOutQuad(x) {
            return 1 - (1 - x) * (1 - x);
        },
        easeInOutQuad: function easeInOutQuad(x) {
            return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
        },
        easeInCubic: function easeInCubic(x) {
            return x * x * x;
        },
        easeOutCubic: function easeOutCubic(x) {
            return 1 - pow(1 - x, 3);
        },
        easeInOutCubic: function easeInOutCubic(x) {
            return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
        },
        easeInQuart: function easeInQuart(x) {
            return x * x * x * x;
        },
        easeOutQuart: function easeOutQuart(x) {
            return 1 - pow(1 - x, 4);
        },
        easeInOutQuart: function easeInOutQuart(x) {
            return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
        },
        easeInQuint: function easeInQuint(x) {
            return x * x * x * x * x;
        },
        easeOutQuint: function easeOutQuint(x) {
            return 1 - pow(1 - x, 5);
        },
        easeInOutQuint: function easeInOutQuint(x) {
            return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
        },
        easeInSine: function easeInSine(x) {
            return 1 - cos(x * PI / 2);
        },
        easeOutSine: function easeOutSine(x) {
            return sin(x * PI / 2);
        },
        easeInOutSine: function easeInOutSine(x) {
            return -(cos(PI * x) - 1) / 2;
        },
        easeInExpo: function easeInExpo(x) {
            return x === 0 ? 0 : pow(2, 10 * x - 10);
        },
        easeOutExpo: function easeOutExpo(x) {
            return x === 1 ? 1 : 1 - pow(2, -10 * x);
        },
        easeInOutExpo: function easeInOutExpo(x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
        },
        easeInCirc: function easeInCirc(x) {
            return 1 - sqrt(1 - pow(x, 2));
        },
        easeOutCirc: function easeOutCirc(x) {
            return sqrt(1 - pow(x - 1, 2));
        },
        easeInOutCirc: function easeInOutCirc(x) {
            return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
        },
        easeInElastic: function easeInElastic(x) {
            return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
        },
        easeOutElastic: function easeOutElastic(x) {
            return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1;
        },
        easeInOutElastic: function easeInOutElastic(x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
        },
        easeInBack: function easeInBack(x) {
            return c3 * x * x * x - c1 * x * x;
        },
        easeOutBack: function easeOutBack(x) {
            return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
        },
        easeInOutBack: function easeInOutBack(x) {
            return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
        },
        easeInBounce: function easeInBounce(x) {
            return 1 - bounceOut(1 - x);
        },
        easeOutBounce: bounceOut,
        easeInOutBounce: function easeInOutBounce(x) {
            return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
        }
    });
});
/*!
imgLiquid v0.9.944 / 03-05-2013
jQuery plugin to resize images to fit in a container.
Copyright (c) 2012 Alejandro Emparan (karacas) @krc_ale
Dual licensed under the MIT and GPL licenses
https://github.com/karacas/imgLiquid
**/
/*
ex:
	$('.imgLiquid').imgLiquid({fill:true});

	// OPTIONS:

	> js:
			fill: true,
			verticalAlign:		// 'center' //	'top'	//	'bottom' // '50%'  // '10%'
			horizontalAlign:	// 'center' //	'left'	//	'right'  // '50%'  // '10%'

	> CallBacks:
			onStart:		function(){},
			onFinish:		function(){},
			onItemStart:	function(index, container, img){},
			onItemFinish:	function(index, container, img){}

	> hml5 data attr (overwrite all)
			data-imgLiquid-fill='true'
			data-imgLiquid-horizontalAlign='center'
			data-imgLiquid-verticalAlign='center'
*/ //
var _imgLiquid = _imgLiquid || {
    VER: '0.9.944'
};
_imgLiquid.bgs_Available = false;
_imgLiquid.bgs_CheckRunned = false;
_imgLiquid.injectCss = '.imgLiquid img {visibility:hidden}';
(function($) { // ___________________________________________________________________
    function checkBgsIsavailable() {
        if (_imgLiquid.bgs_CheckRunned) return;
        else _imgLiquid.bgs_CheckRunned = true;
        var spanBgs = $('<span style="background-size:cover" />');
        $('body').append(spanBgs);
        ! function() {
            var bgs_Check = spanBgs[0];
            if (!bgs_Check || !window.getComputedStyle) return;
            var compStyle = window.getComputedStyle(bgs_Check, null);
            if (!compStyle || !compStyle.backgroundSize) return;
            _imgLiquid.bgs_Available = compStyle.backgroundSize === 'cover';
        }();
        spanBgs.remove();
    } // ___________________________________________________________________
    $.fn.extend({
        imgLiquid: function imgLiquid(options) {
            this.defaults = {
                fill: true,
                verticalAlign: 'center', //	'top'	//	'bottom' // '50%'  // '10%'
                horizontalAlign: 'center', //	'left'	//	'right'  // '50%'  // '10%'
                useBackgroundSize: true,
                useDataHtmlAttr: true,
                responsive: true,
                /* Only for use with BackgroundSize false (or old browsers) */
                delay: 0,
                /* Only for use with BackgroundSize false (or old browsers) */
                fadeInTime: 0,
                /* Only for use with BackgroundSize false (or old browsers) */
                removeBoxBackground: true,
                /* Only for use with BackgroundSize false (or old browsers) */
                hardPixels: true,
                /* Only for use with BackgroundSize false (or old browsers) */
                responsiveCheckTime: 500,
                /* Only for use with BackgroundSize false (or old browsers) */
                /* time to check div resize */
                timecheckvisibility: 500,
                /* Only for use with BackgroundSize false (or old browsers) */
                /* time to recheck if visible/loaded */ // CALLBACKS
                onStart: null, // no-params
                onFinish: null, // no-params
                onItemStart: null, // params: (index, container, img )
                onItemFinish: null, // params: (index, container, img )
                onItemError: null // params: (index, container, img )
            };
            checkBgsIsavailable();
            var imgLiquidRoot = this; // Extend global settings
            this.options = options;
            this.settings = $.extend({}, this.defaults, this.options); // CallBack
            if (this.settings.onStart) this.settings.onStart(); // ___________________________________________________________________
            return this.each(function($i) { // MAIN >> each for image
                var settings = imgLiquidRoot.settings,
                    $imgBoxCont = $(this),
                    $img = $('img:first', $imgBoxCont);
                if (!$img.length) {
                    onError();
                    return;
                } // Extend settings
                if (!$img.data('imgLiquid_settings')) { // First time
                    settings = $.extend({}, imgLiquidRoot.settings, getSettingsOverwrite());
                } else { // Recall
                    // Remove Classes
                    $imgBoxCont.removeClass('imgLiquid_error').removeClass('imgLiquid_ready');
                    settings = $.extend({}, $img.data('imgLiquid_settings'), imgLiquidRoot.options);
                }
                $img.data('imgLiquid_settings', settings); // Start CallBack
                if (settings.onItemStart) settings.onItemStart($i, $imgBoxCont, $img); /* << CallBack */ // Process
                if (_imgLiquid.bgs_Available && settings.useBackgroundSize) processBgSize();
                else processOldMethod(); // END MAIN <<
                // ___________________________________________________________________
                function processBgSize() { // Check change img src
                    if ($imgBoxCont.css('background-image').indexOf(encodeURI($img.attr('src'))) === -1) { // Change
                        $imgBoxCont.css({
                            'background-image': 'url("' + encodeURI($img.attr('src')) + '")'
                        });
                    }
                    $imgBoxCont.css({
                        'background-size': !settings.fill && $img[0].width <= $imgBoxCont.width() && $img[0].height <= $imgBoxCont.height() ? 'auto' : settings.fill ? 'cover' : 'contain',
                        'background-position': (settings.horizontalAlign + ' ' + settings.verticalAlign).toLowerCase(),
                        'background-repeat': 'no-repeat'
                    });
                    $('a:first', $imgBoxCont).css({
                        'display': 'block',
                        'width': '100%',
                        'height': '100%'
                    });
                    $('img', $imgBoxCont).css({
                        'display': 'none'
                    });
                    if (settings.onItemFinish) settings.onItemFinish($i, $imgBoxCont, $img); /* << CallBack */
                    $imgBoxCont.addClass('imgLiquid_bgSize');
                    $imgBoxCont.addClass('imgLiquid_ready');
                    checkFinish();
                } // ___________________________________________________________________
                function processOldMethod() { // Check change img src
                    if ($img.data('oldSrc') && $img.data('oldSrc') !== $img.attr('src')) {
                        /* Clone & Reset img */
                        var $imgCopy = $img.clone().removeAttr('style');
                        $imgCopy.data('imgLiquid_settings', $img.data('imgLiquid_settings'));
                        $img.parent().prepend($imgCopy);
                        $img.remove();
                        $img = $imgCopy;
                        $img[0].width = 0; // Bug ie with > if (!$img[0].complete && $img[0].width) onError();
                        setTimeout(processOldMethod, 10);
                        return;
                    } // Reproceess?
                    if ($img.data('imgLiquid_oldProcessed')) {
                        makeOldProcess();
                        return;
                    } // Set data
                    $img.data('imgLiquid_oldProcessed', false);
                    $img.data('oldSrc', $img.attr('src')); // Hide others images
                    $('img:not(:first)', $imgBoxCont).css('display', 'none'); // CSSs
                    $imgBoxCont.css({
                        'overflow': 'hidden'
                    });
                    $img.fadeTo(0, 0).removeAttr('width').removeAttr('height').css({
                        'visibility': 'visible',
                        'max-width': 'none',
                        'max-height': 'none',
                        'width': 'auto',
                        'height': 'auto',
                        'display': 'block'
                    }); // CheckErrors
                    $img.on('error', onError);
                    $img[0].onerror = onError; // loop until load
                    function onLoad() {
                        if ($img.data('imgLiquid_error') || $img.data('imgLiquid_loaded') || $img.data('imgLiquid_oldProcessed')) return;
                        if ($imgBoxCont.is(':visible') && $img[0].complete && $img[0].width > 0 && $img[0].height > 0) {
                            $img.data('imgLiquid_loaded', true);
                            setTimeout(makeOldProcess, $i * settings.delay);
                        } else {
                            setTimeout(onLoad, settings.timecheckvisibility);
                        }
                    }
                    onLoad();
                    checkResponsive();
                } // ___________________________________________________________________
                function checkResponsive() {
                    /* Only for oldProcessed method (background-size dont need) */
                    if (!settings.responsive && !$img.data('imgLiquid_oldProcessed')) return;
                    if (!$img.data('imgLiquid_settings')) return;
                    settings = $img.data('imgLiquid_settings');
                    $imgBoxCont.actualSize = $imgBoxCont.get(0).offsetWidth + $imgBoxCont.get(0).offsetHeight / 10000;
                    if ($imgBoxCont.sizeOld && $imgBoxCont.actualSize !== $imgBoxCont.sizeOld) makeOldProcess();
                    $imgBoxCont.sizeOld = $imgBoxCont.actualSize;
                    setTimeout(checkResponsive, settings.responsiveCheckTime);
                } // ___________________________________________________________________
                function onError() {
                    $img.data('imgLiquid_error', true);
                    $imgBoxCont.addClass('imgLiquid_error');
                    if (settings.onItemError) settings.onItemError($i, $imgBoxCont, $img); /* << CallBack */
                    checkFinish();
                } // ___________________________________________________________________
                function getSettingsOverwrite() {
                    var SettingsOverwrite = {};
                    if (imgLiquidRoot.settings.useDataHtmlAttr) {
                        var dif = $imgBoxCont.attr('data-imgLiquid-fill'),
                            ha = $imgBoxCont.attr('data-imgLiquid-horizontalAlign'),
                            va = $imgBoxCont.attr('data-imgLiquid-verticalAlign');
                        if (dif === 'true' || dif === 'false') SettingsOverwrite.fill = Boolean(dif === 'true');
                        if (ha !== undefined && (ha === 'left' || ha === 'center' || ha === 'right' || ha.indexOf('%') !== -1)) SettingsOverwrite.horizontalAlign = ha;
                        if (va !== undefined && (va === 'top' || va === 'bottom' || va === 'center' || va.indexOf('%') !== -1)) SettingsOverwrite.verticalAlign = va;
                    }
                    if (_imgLiquid.isIE && imgLiquidRoot.settings.ieFadeInDisabled) SettingsOverwrite.fadeInTime = 0; //ie no anims
                    return SettingsOverwrite;
                } // ___________________________________________________________________
                function makeOldProcess() {
                    /* Only for old browsers, or useBackgroundSize seted false */ // Calculate size
                    var w, h, wn, hn, ha, va, hdif, vdif, margT = 0,
                        margL = 0,
                        $imgCW = $imgBoxCont.width(),
                        $imgCH = $imgBoxCont.height(); // Save original sizes
                    if ($img.data('owidth') === undefined) $img.data('owidth', $img[0].width);
                    if ($img.data('oheight') === undefined) $img.data('oheight', $img[0].height); // Compare ratio
                    if (!settings.fill && $img.data('owidth') <= $imgCW && $img.data('oheight') <= $imgCH) {
                        w = 'auto';
                        h = 'auto';
                        wn = $img.data('owidth');
                        hn = $img.data('oheight');
                    } else {
                        if (settings.fill === $imgCW / $imgCH >= $img.data('owidth') / $img.data('oheight')) {
                            w = '100%';
                            h = 'auto';
                            wn = Math.floor($imgCW);
                            hn = Math.floor($imgCW * ($img.data('oheight') / $img.data('owidth')));
                        } else {
                            w = 'auto';
                            h = '100%';
                            wn = Math.floor($imgCH * ($img.data('owidth') / $img.data('oheight')));
                            hn = Math.floor($imgCH);
                        }
                    } // Align X
                    ha = settings.horizontalAlign.toLowerCase();
                    hdif = $imgCW - wn;
                    if (ha === 'left') margL = 0;
                    if (ha === 'center') margL = hdif * 0.5;
                    if (ha === 'right') margL = hdif;
                    if (ha.indexOf('%') !== -1) {
                        ha = parseInt(ha.replace('%', ''), 10);
                        if (ha > 0) margL = hdif * ha * 0.01;
                    } // Align Y
                    va = settings.verticalAlign.toLowerCase();
                    vdif = $imgCH - hn;
                    if (va === 'top') margT = 0;
                    if (va === 'center') margT = vdif * 0.5;
                    if (va === 'bottom') margT = vdif;
                    if (va.indexOf('%') !== -1) {
                        va = parseInt(va.replace('%', ''), 10);
                        if (va > 0) margT = vdif * va * 0.01;
                    } // Add Css
                    if (settings.hardPixels) {
                        w = wn;
                        h = hn;
                    }
                    $img.css({
                        'width': w,
                        'height': h,
                        'margin-left': Math.floor(margL),
                        'margin-top': Math.floor(margT)
                    }); // FadeIn > Only first time
                    if (!$img.data('imgLiquid_oldProcessed')) {
                        $img.fadeTo(settings.fadeInTime, 1);
                        $img.data('imgLiquid_oldProcessed', true);
                        if (settings.removeBoxBackground) $imgBoxCont.css('background-image', 'none');
                        $imgBoxCont.addClass('imgLiquid_nobgSize');
                        $imgBoxCont.addClass('imgLiquid_ready');
                    }
                    if (settings.onItemFinish) settings.onItemFinish($i, $imgBoxCont, $img); /* << CallBack */
                    checkFinish();
                } // ___________________________________________________________________
                function checkFinish() {
                    /* Check callBack */
                    if ($i === imgLiquidRoot.length - 1)
                        if (imgLiquidRoot.settings.onFinish) imgLiquidRoot.settings.onFinish();
                }
            });
        }
    });
})(jQuery); // Inject css styles ______________________________________________________
! function() {
    var css = _imgLiquid.injectCss,
        head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}();
! function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function customPaging(e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
        };
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        });
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e);
        }), s.$slidesCache = s.$slides, s.reinit();
    }, e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed);
        }
    }, e.prototype.animateSlide = function(e, t) {
        var o = {},
            s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function step(i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
            },
            complete: function complete() {
                t && t.call();
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
            s.disableTransition(), t.call();
        }, s.options.speed));
    }, e.prototype.getNavTarget = function() {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t;
    }, e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0);
        });
    }, e.prototype.applyTransition = function(i) {
        var e = this,
            t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }, e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
    }, e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }, e.prototype.autoPlayIterator = function() {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
    }, e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }));
    }, e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
                t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            }
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
    }, e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c));
                    }
                    d.appendChild(a);
                }
                o.appendChild(d);
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            });
        }
    }, e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) {
                r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            }
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
        }
    }, e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return;
        }
    }, e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break;
                }
                t = e[o];
            }
        return i;
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }, e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
    }, e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }, e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"));
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
    }, e.prototype.disableTransition = function(i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }, e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function() {
            t.disableTransition(i), e.call();
        }, t.options.speed));
    }, e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }));
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
            }, 0);
        });
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
    }, e.prototype.getDotCount = function() {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (!0 === i.options.infinite) {
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) {
                    ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                }
        } else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) {
                ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1;
    }, e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this,
            r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
    }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i];
    }, e.prototype.getNavigableIndexes = function() {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) {
            s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        }
        return s;
    }, e.prototype.getSlick = function() {
        return this;
    }, e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
    }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e);
    }, e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
    }, e.prototype.initADA = function() {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function(i) {
                return i >= 0 && i < e.slideCount;
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            });
        }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            });
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
            e.$slides.eq(s).attr("tabindex", 0);
        }
        e.activateADA();
    }, e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }, e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
    }, e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
    }, e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }));
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                        }), n.$slider.trigger("lazyLoaded", [n, e, t]);
                    });
                }, r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
                }, r.src = t;
            });
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) {
                r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
            }
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
    }, e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }, e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        });
    }, e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(), i.setPosition();
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(), i.paused = !0;
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
    }, e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        });
    }, e.prototype.preventDefault = function(i) {
        i.preventDefault();
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this,
            d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1);
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
    }, e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
            currentSlide: t
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1);
    }, e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n) {
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) {
                        s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    }
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
                }
            }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i;
            });
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
    }, e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
        }, 50));
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
    }, e.prototype.setCSS = function(i) {
        var e, t, o = this,
            s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
    }, e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }, e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            });
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        });
    }, e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e);
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function(i, e) {
            r.options[i] = e;
        });
        else if ("responsive" === n)
            for (t in s) {
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) {
                        r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    }
                    r.options.responsive.push(s[t]);
                }
            }
        l && (r.unload(), r.reinit());
    }, e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
    }, e.prototype.setProps = function() {
        var i = this,
            e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
    }, e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
    }, e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
                t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            }
            for (e = 0; e < o + s.slideCount; e += 1) {
                t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            }
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "");
            });
        }
    }, e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i;
    }, e.prototype.selectHandler = function(e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
    }, e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
                a.postSlide(o);
            }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
            a.postSlide(o);
        }) : a.postSlide(o));
        else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
                a.postSlide(s);
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function() {
                a.postSlide(s);
            }) : a.postSlide(s);
        }
    }, e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
    }, e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
    }, e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
    }, e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i);
        }
    }, e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
    }, e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
    }, e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy();
    }, e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
    }, e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
    }, i.fn.slick = function() {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; i < r; i++) {
            if ("object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        }
        return o;
    };
});
/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
;
(function(window, document, undefined) {
    'use strict';
    /*
     * Global api.
     */
    var skrollr = {
        get: function get() {
            return _instance;
        }, //Main entry point.
        init: function init(options) {
            return _instance || new Skrollr(options);
        },
        VERSION: '0.6.31'
    }; //Minify optimization.
    var hasProp = Object.prototype.hasOwnProperty;
    var Math = window.Math;
    var getStyle = window.getComputedStyle; //They will be filled when skrollr gets initialized.
    var documentElement;
    var body;
    var EVENT_TOUCHSTART = 'touchstart';
    var EVENT_TOUCHMOVE = 'touchmove';
    var EVENT_TOUCHCANCEL = 'touchcancel';
    var EVENT_TOUCHEND = 'touchend';
    var SKROLLABLE_CLASS = 'skrollable';
    var SKROLLABLE_BEFORE_CLASS = SKROLLABLE_CLASS + '-before';
    var SKROLLABLE_BETWEEN_CLASS = SKROLLABLE_CLASS + '-between';
    var SKROLLABLE_AFTER_CLASS = SKROLLABLE_CLASS + '-after';
    var SKROLLR_CLASS = 'skrollr';
    var NO_SKROLLR_CLASS = 'no-' + SKROLLR_CLASS;
    var SKROLLR_DESKTOP_CLASS = SKROLLR_CLASS + '-desktop';
    var SKROLLR_MOBILE_CLASS = SKROLLR_CLASS + '-mobile';
    var DEFAULT_EASING = 'linear';
    var DEFAULT_DURATION = 1000; //ms
    var DEFAULT_MOBILE_DECELERATION = 0.004; //pixel/ms²
    var DEFAULT_SKROLLRBODY = 'skrollr-body';
    var DEFAULT_SMOOTH_SCROLLING_DURATION = 200; //ms
    var ANCHOR_START = 'start';
    var ANCHOR_END = 'end';
    var ANCHOR_CENTER = 'center';
    var ANCHOR_BOTTOM = 'bottom'; //The property which will be added to the DOM element to hold the ID of the skrollable.
    var SKROLLABLE_ID_DOM_PROPERTY = '___skrollable_id';
    var rxTouchIgnoreTags = /^(?:input|textarea|button|select)$/i;
    var rxTrim = /^\s+|\s+$/g; //Find all data-attributes. data-[_constant]-[offset]-[anchor]-[anchor].
    var rxKeyframeAttribute = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;
    var rxPropValue = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi; //Easing function names follow the property in square brackets.
    var rxPropEasing = /^(@?[a-z\-]+)\[(\w+)\]$/;
    var rxCamelCase = /-([a-z0-9_])/g;
    var rxCamelCaseFn = function rxCamelCaseFn(str, letter) {
        return letter.toUpperCase();
    }; //Numeric values with optional sign.
    var rxNumericValue = /[\-+]?[\d]*\.?[\d]+/g; //Used to replace occurences of {?} with a number.
    var rxInterpolateString = /\{\?\}/g; //Finds rgb(a) colors, which don't use the percentage notation.
    var rxRGBAIntegerColor = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g; //Finds all gradients.
    var rxGradient = /[a-z\-]+-gradient/g; //Vendor prefix. Will be set once skrollr gets initialized.
    var theCSSPrefix = '';
    var theDashedCSSPrefix = ''; //Will be called once (when skrollr gets initialized).
    var detectCSSPrefix = function detectCSSPrefix() { //Only relevant prefixes. May be extended.
        //Could be dangerous if there will ever be a CSS property which actually starts with "ms". Don't hope so.
        var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/; //Detect prefix for current browser by finding the first property using a prefix.
        if (!getStyle) {
            return;
        }
        var style = getStyle(body, null);
        for (var k in style) { //We check the key and if the key is a number, we check the value as well, because safari's getComputedStyle returns some weird array-like thingy.
            theCSSPrefix = k.match(rxPrefixes) || +k == k && style[k].match(rxPrefixes);
            if (theCSSPrefix) {
                break;
            }
        } //Did we even detect a prefix?
        if (!theCSSPrefix) {
            theCSSPrefix = theDashedCSSPrefix = '';
            return;
        }
        theCSSPrefix = theCSSPrefix[0]; //We could have detected either a dashed prefix or this camelCaseish-inconsistent stuff.
        if (theCSSPrefix.slice(0, 1) === '-') {
            theDashedCSSPrefix = theCSSPrefix; //There's no logic behind these. Need a look up.
            theCSSPrefix = {
                '-webkit-': 'webkit',
                '-moz-': 'Moz',
                '-ms-': 'ms',
                '-o-': 'O'
            }[theCSSPrefix];
        } else {
            theDashedCSSPrefix = '-' + theCSSPrefix.toLowerCase() + '-';
        }
    };
    var polyfillRAF = function polyfillRAF() {
        var requestAnimFrame = window.requestAnimationFrame || window[theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'];
        var lastTime = _now();
        if (_isMobile || !requestAnimFrame) {
            requestAnimFrame = function requestAnimFrame(callback) { //How long did it take to render?
                var deltaTime = _now() - lastTime;
                var delay = Math.max(0, 1000 / 60 - deltaTime);
                return window.setTimeout(function() {
                    lastTime = _now();
                    callback();
                }, delay);
            };
        }
        return requestAnimFrame;
    };
    var polyfillCAF = function polyfillCAF() {
        var cancelAnimFrame = window.cancelAnimationFrame || window[theCSSPrefix.toLowerCase() + 'CancelAnimationFrame'];
        if (_isMobile || !cancelAnimFrame) {
            cancelAnimFrame = function cancelAnimFrame(timeout) {
                return window.clearTimeout(timeout);
            };
        }
        return cancelAnimFrame;
    }; //Built-in easing functions.
    var easings = {
        begin: function begin() {
            return 0;
        },
        end: function end() {
            return 1;
        },
        linear: function linear(p) {
            return p;
        },
        quadratic: function quadratic(p) {
            return p * p;
        },
        cubic: function cubic(p) {
            return p * p * p;
        },
        swing: function swing(p) {
            return -Math.cos(p * Math.PI) / 2 + 0.5;
        },
        sqrt: function sqrt(p) {
            return Math.sqrt(p);
        },
        outCubic: function outCubic(p) {
            return Math.pow(p - 1, 3) + 1;
        }, //see https://www.desmos.com/calculator/tbr20s8vd2 for how I did this
        bounce: function bounce(p) {
            var a;
            if (p <= 0.5083) {
                a = 3;
            } else if (p <= 0.8489) {
                a = 9;
            } else if (p <= 0.96208) {
                a = 27;
            } else if (p <= 0.99981) {
                a = 91;
            } else {
                return 1;
            }
            return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
        }
    };
    /**
     * Constructor.
     */
    function Skrollr(options) {
        documentElement = document.documentElement;
        body = document.body;
        detectCSSPrefix();
        _instance = this;
        options = options || {};
        _constants = options.constants || {}; //We allow defining custom easings or overwrite existing.
        if (options.easing) {
            for (var e in options.easing) {
                easings[e] = options.easing[e];
            }
        }
        _edgeStrategy = options.edgeStrategy || 'set';
        _listeners = { //Function to be called right before rendering.
            beforerender: options.beforerender, //Function to be called right after finishing rendering.
            render: options.render, //Function to be called whenever an element with the `data-emit-events` attribute passes a keyframe.
            keyframe: options.keyframe
        }; //forceHeight is true by default
        _forceHeight = options.forceHeight !== false;
        if (_forceHeight) {
            _scale = options.scale || 1;
        }
        _mobileDeceleration = options.mobileDeceleration || DEFAULT_MOBILE_DECELERATION;
        _smoothScrollingEnabled = options.smoothScrolling !== false;
        _smoothScrollingDuration = options.smoothScrollingDuration || DEFAULT_SMOOTH_SCROLLING_DURATION; //Dummy object. Will be overwritten in the _render method when smooth scrolling is calculated.
        _smoothScrolling = {
            targetTop: _instance.getScrollTop()
        }; //A custom check function may be passed.
        _isMobile = (options.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera);
        })();
        if (_isMobile) {
            _skrollrBody = document.getElementById(options.skrollrBody || DEFAULT_SKROLLRBODY); //Detect 3d transform if there's a skrollr-body (only needed for #skrollr-body).
            if (_skrollrBody) {
                _detect3DTransforms();
            }
            _initMobile();
            _updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_MOBILE_CLASS], [NO_SKROLLR_CLASS]);
        } else {
            _updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS], [NO_SKROLLR_CLASS]);
        } //Triggers parsing of elements and a first reflow.
        _instance.refresh();
        _addEvent(window, 'resize orientationchange', function() {
            var width = documentElement.clientWidth;
            var height = documentElement.clientHeight; //Only reflow if the size actually changed (#271).
            if (height !== _lastViewportHeight || width !== _lastViewportWidth) {
                _lastViewportHeight = height;
                _lastViewportWidth = width;
                _requestReflow = true;
            }
        });
        var requestAnimFrame = polyfillRAF(); //Let's go.
        (function animloop() {
            _render();
            _animFrame = requestAnimFrame(animloop);
        })();
        return _instance;
    }
    /**
     * (Re)parses some or all elements.
     */
    Skrollr.prototype.refresh = function(elements) {
        var elementIndex;
        var elementsLength;
        var ignoreID = false; //Completely reparse anything without argument.
        if (elements === undefined) { //Ignore that some elements may already have a skrollable ID.
            ignoreID = true;
            _skrollables = [];
            _skrollableIdCounter = 0;
            elements = document.getElementsByTagName('*');
        } else if (elements.length === undefined) { //We also accept a single element as parameter.
            elements = [elements];
        }
        elementIndex = 0;
        elementsLength = elements.length;
        for (; elementIndex < elementsLength; elementIndex++) {
            var el = elements[elementIndex];
            var anchorTarget = el;
            var keyFrames = []; //If this particular element should be smooth scrolled.
            var smoothScrollThis = _smoothScrollingEnabled; //The edge strategy for this particular element.
            var edgeStrategy = _edgeStrategy; //If this particular element should emit keyframe events.
            var emitEvents = false; //If we're reseting the counter, remove any old element ids that may be hanging around.
            if (ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
                delete el[SKROLLABLE_ID_DOM_PROPERTY];
            }
            if (!el.attributes) {
                continue;
            } //Iterate over all attributes and search for key frame attributes.
            var attributeIndex = 0;
            var attributesLength = el.attributes.length;
            for (; attributeIndex < attributesLength; attributeIndex++) {
                var attr = el.attributes[attributeIndex];
                if (attr.name === 'data-anchor-target') {
                    anchorTarget = document.querySelector(attr.value);
                    if (anchorTarget === null) {
                        throw 'Unable to find anchor target "' + attr.value + '"';
                    }
                    continue;
                } //Global smooth scrolling can be overridden by the element attribute.
                if (attr.name === 'data-smooth-scrolling') {
                    smoothScrollThis = attr.value !== 'off';
                    continue;
                } //Global edge strategy can be overridden by the element attribute.
                if (attr.name === 'data-edge-strategy') {
                    edgeStrategy = attr.value;
                    continue;
                } //Is this element tagged with the `data-emit-events` attribute?
                if (attr.name === 'data-emit-events') {
                    emitEvents = true;
                    continue;
                }
                var match = attr.name.match(rxKeyframeAttribute);
                if (match === null) {
                    continue;
                }
                var kf = {
                    props: attr.value, //Point back to the element as well.
                    element: el, //The name of the event which this keyframe will fire, if emitEvents is
                    eventType: attr.name.replace(rxCamelCase, rxCamelCaseFn)
                };
                keyFrames.push(kf);
                var constant = match[1];
                if (constant) { //Strip the underscore prefix.
                    kf.constant = constant.substr(1);
                } //Get the key frame offset.
                var offset = match[2]; //Is it a percentage offset?
                if (/p$/.test(offset)) {
                    kf.isPercentage = true;
                    kf.offset = (offset.slice(0, -1) | 0) / 100;
                } else {
                    kf.offset = offset | 0;
                }
                var anchor1 = match[3]; //If second anchor is not set, the first will be taken for both.
                var anchor2 = match[4] || anchor1; //"absolute" (or "classic") mode, where numbers mean absolute scroll offset.
                if (!anchor1 || anchor1 === ANCHOR_START || anchor1 === ANCHOR_END) {
                    kf.mode = 'absolute'; //data-end needs to be calculated after all key frames are known.
                    if (anchor1 === ANCHOR_END) {
                        kf.isEnd = true;
                    } else if (!kf.isPercentage) { //For data-start we can already set the key frame w/o calculations.
                        //#59: "scale" options should only affect absolute mode.
                        kf.offset = kf.offset * _scale;
                    }
                } //"relative" mode, where numbers are relative to anchors.
                else {
                    kf.mode = 'relative';
                    kf.anchors = [anchor1, anchor2];
                }
            } //Does this element have key frames?
            if (!keyFrames.length) {
                continue;
            } //Will hold the original style and class attributes before we controlled the element (see #80).
            var styleAttr, classAttr;
            var id;
            if (!ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) { //We already have this element under control. Grab the corresponding skrollable id.
                id = el[SKROLLABLE_ID_DOM_PROPERTY];
                styleAttr = _skrollables[id].styleAttr;
                classAttr = _skrollables[id].classAttr;
            } else { //It's an unknown element. Asign it a new skrollable id.
                id = el[SKROLLABLE_ID_DOM_PROPERTY] = _skrollableIdCounter++;
                styleAttr = el.style.cssText;
                classAttr = _getClass(el);
            }
            _skrollables[id] = {
                element: el,
                styleAttr: styleAttr,
                classAttr: classAttr,
                anchorTarget: anchorTarget,
                keyFrames: keyFrames,
                smoothScrolling: smoothScrollThis,
                edgeStrategy: edgeStrategy,
                emitEvents: emitEvents,
                lastFrameIndex: -1
            };
            _updateClass(el, [SKROLLABLE_CLASS], []);
        } //Reflow for the first time.
        _reflow(); //Now that we got all key frame numbers right, actually parse the properties.
        elementIndex = 0;
        elementsLength = elements.length;
        for (; elementIndex < elementsLength; elementIndex++) {
            var sk = _skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];
            if (sk === undefined) {
                continue;
            } //Parse the property string to objects
            _parseProps(sk); //Fill key frames with missing properties from left and right
            _fillProps(sk);
        }
        return _instance;
    };
    /**
     * Transform "relative" mode to "absolute" mode.
     * That is, calculate anchor position and offset of element.
     */
    Skrollr.prototype.relativeToAbsolute = function(element, viewportAnchor, elementAnchor) {
        var viewportHeight = documentElement.clientHeight;
        var box = element.getBoundingClientRect();
        var absolute = box.top; //#100: IE doesn't supply "height" with getBoundingClientRect.
        var boxHeight = box.bottom - box.top;
        if (viewportAnchor === ANCHOR_BOTTOM) {
            absolute -= viewportHeight;
        } else if (viewportAnchor === ANCHOR_CENTER) {
            absolute -= viewportHeight / 2;
        }
        if (elementAnchor === ANCHOR_BOTTOM) {
            absolute += boxHeight;
        } else if (elementAnchor === ANCHOR_CENTER) {
            absolute += boxHeight / 2;
        } //Compensate scrolling since getBoundingClientRect is relative to viewport.
        absolute += _instance.getScrollTop();
        return absolute + 0.5 | 0;
    };
    /**
     * Animates scroll top to new position.
     */
    Skrollr.prototype.animateTo = function(top, options) {
        options = options || {};
        var now = _now();
        var scrollTop = _instance.getScrollTop();
        var duration = options.duration === undefined ? DEFAULT_DURATION : options.duration; //Setting this to a new value will automatically cause the current animation to stop, if any.
        _scrollAnimation = {
            startTop: scrollTop,
            topDiff: top - scrollTop,
            targetTop: top,
            duration: duration,
            startTime: now,
            endTime: now + duration,
            easing: easings[options.easing || DEFAULT_EASING],
            done: options.done
        }; //Don't queue the animation if there's nothing to animate.
        if (!_scrollAnimation.topDiff) {
            if (_scrollAnimation.done) {
                _scrollAnimation.done.call(_instance, false);
            }
            _scrollAnimation = undefined;
        }
        return _instance;
    };
    /**
     * Stops animateTo animation.
     */
    Skrollr.prototype.stopAnimateTo = function() {
        if (_scrollAnimation && _scrollAnimation.done) {
            _scrollAnimation.done.call(_instance, true);
        }
        _scrollAnimation = undefined;
    };
    /**
     * Returns if an animation caused by animateTo is currently running.
     */
    Skrollr.prototype.isAnimatingTo = function() {
        return !!_scrollAnimation;
    };
    Skrollr.prototype.isMobile = function() {
        return _isMobile;
    };
    Skrollr.prototype.setScrollTop = function(top, force) {
        _forceRender = force === true;
        if (_isMobile) {
            _mobileOffset = Math.min(Math.max(top, 0), _maxKeyFrame);
        } else {
            window.scrollTo(0, top);
        }
        return _instance;
    };
    Skrollr.prototype.getScrollTop = function() {
        if (_isMobile) {
            return _mobileOffset;
        } else {
            return window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
        }
    };
    Skrollr.prototype.getMaxScrollTop = function() {
        return _maxKeyFrame;
    };
    Skrollr.prototype.on = function(name, fn) {
        _listeners[name] = fn;
        return _instance;
    };
    Skrollr.prototype.off = function(name) {
        delete _listeners[name];
        return _instance;
    };
    Skrollr.prototype.destroy = function() {
        var cancelAnimFrame = polyfillCAF();
        cancelAnimFrame(_animFrame);
        _removeAllEvents();
        _updateClass(documentElement, [NO_SKROLLR_CLASS], [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS, SKROLLR_MOBILE_CLASS]);
        var skrollableIndex = 0;
        var skrollablesLength = _skrollables.length;
        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            _reset(_skrollables[skrollableIndex].element);
        }
        documentElement.style.overflow = body.style.overflow = '';
        documentElement.style.height = body.style.height = '';
        if (_skrollrBody) {
            skrollr.setStyle(_skrollrBody, 'transform', 'none');
        }
        _instance = undefined;
        _skrollrBody = undefined;
        _listeners = undefined;
        _forceHeight = undefined;
        _maxKeyFrame = 0;
        _scale = 1;
        _constants = undefined;
        _mobileDeceleration = undefined;
        _direction = 'down';
        _lastTop = -1;
        _lastViewportWidth = 0;
        _lastViewportHeight = 0;
        _requestReflow = false;
        _scrollAnimation = undefined;
        _smoothScrollingEnabled = undefined;
        _smoothScrollingDuration = undefined;
        _smoothScrolling = undefined;
        _forceRender = undefined;
        _skrollableIdCounter = 0;
        _edgeStrategy = undefined;
        _isMobile = false;
        _mobileOffset = 0;
        _translateZ = undefined;
    };
    /*
    		Private methods.
    	*/
    var _initMobile = function _initMobile() {
        var initialElement;
        var initialTouchY;
        var initialTouchX;
        var currentElement;
        var currentTouchY;
        var currentTouchX;
        var lastTouchY;
        var deltaY;
        var initialTouchTime;
        var currentTouchTime;
        var lastTouchTime;
        var deltaTime;
        _addEvent(documentElement, [EVENT_TOUCHSTART, EVENT_TOUCHMOVE, EVENT_TOUCHCANCEL, EVENT_TOUCHEND].join(' '), function(e) {
            var touch = e.changedTouches[0];
            currentElement = e.target; //We don't want text nodes.
            while (currentElement.nodeType === 3) {
                currentElement = currentElement.parentNode;
            }
            currentTouchY = touch.clientY;
            currentTouchX = touch.clientX;
            currentTouchTime = e.timeStamp;
            if (!rxTouchIgnoreTags.test(currentElement.tagName)) {
                e.preventDefault();
            }
            switch (e.type) {
                case EVENT_TOUCHSTART: //The last element we tapped on.
                    if (initialElement) {
                        initialElement.blur();
                    }
                    _instance.stopAnimateTo();
                    initialElement = currentElement;
                    initialTouchY = lastTouchY = currentTouchY;
                    initialTouchX = currentTouchX;
                    initialTouchTime = currentTouchTime;
                    break;
                case EVENT_TOUCHMOVE: //Prevent default event on touchIgnore elements in case they don't have focus yet.
                    if (rxTouchIgnoreTags.test(currentElement.tagName) && document.activeElement !== currentElement) {
                        e.preventDefault();
                    }
                    deltaY = currentTouchY - lastTouchY;
                    deltaTime = currentTouchTime - lastTouchTime;
                    _instance.setScrollTop(_mobileOffset - deltaY, true);
                    lastTouchY = currentTouchY;
                    lastTouchTime = currentTouchTime;
                    break;
                default:
                case EVENT_TOUCHCANCEL:
                case EVENT_TOUCHEND:
                    var distanceY = initialTouchY - currentTouchY;
                    var distanceX = initialTouchX - currentTouchX;
                    var distance2 = distanceX * distanceX + distanceY * distanceY; //Check if it was more like a tap (moved less than 7px).
                    if (distance2 < 49) {
                        if (!rxTouchIgnoreTags.test(initialElement.tagName)) {
                            initialElement.focus(); //It was a tap, click the element.
                            var clickEvent = document.createEvent('MouseEvents');
                            clickEvent.initMouseEvent('click', true, true, e.view, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
                            initialElement.dispatchEvent(clickEvent);
                        }
                        return;
                    }
                    initialElement = undefined;
                    var speed = deltaY / deltaTime; //Cap speed at 3 pixel/ms.
                    speed = Math.max(Math.min(speed, 3), -3);
                    var duration = Math.abs(speed / _mobileDeceleration);
                    var targetOffset = speed * duration + 0.5 * _mobileDeceleration * duration * duration;
                    var targetTop = _instance.getScrollTop() - targetOffset; //Relative duration change for when scrolling above bounds.
                    var targetRatio = 0; //Change duration proportionally when scrolling would leave bounds.
                    if (targetTop > _maxKeyFrame) {
                        targetRatio = (_maxKeyFrame - targetTop) / targetOffset;
                        targetTop = _maxKeyFrame;
                    } else if (targetTop < 0) {
                        targetRatio = -targetTop / targetOffset;
                        targetTop = 0;
                    }
                    duration = duration * (1 - targetRatio);
                    _instance.animateTo(targetTop + 0.5 | 0, {
                        easing: 'outCubic',
                        duration: duration
                    });
                    break;
            }
        }); //Just in case there has already been some native scrolling, reset it.
        window.scrollTo(0, 0);
        documentElement.style.overflow = body.style.overflow = 'hidden';
    };
    /**
     * Updates key frames which depend on others / need to be updated on resize.
     * That is "end" in "absolute" mode and all key frames in "relative" mode.
     * Also handles constants, because they may change on resize.
     */
    var _updateDependentKeyFrames = function _updateDependentKeyFrames() {
        var viewportHeight = documentElement.clientHeight;
        var processedConstants = _processConstants();
        var skrollable;
        var element;
        var anchorTarget;
        var keyFrames;
        var keyFrameIndex;
        var keyFramesLength;
        var kf;
        var skrollableIndex;
        var skrollablesLength;
        var offset;
        var constantValue; //First process all relative-mode elements and find the max key frame.
        skrollableIndex = 0;
        skrollablesLength = _skrollables.length;
        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            skrollable = _skrollables[skrollableIndex];
            element = skrollable.element;
            anchorTarget = skrollable.anchorTarget;
            keyFrames = skrollable.keyFrames;
            keyFrameIndex = 0;
            keyFramesLength = keyFrames.length;
            for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
                kf = keyFrames[keyFrameIndex];
                offset = kf.offset;
                constantValue = processedConstants[kf.constant] || 0;
                kf.frame = offset;
                if (kf.isPercentage) { //Convert the offset to percentage of the viewport height.
                    offset = offset * viewportHeight; //Absolute + percentage mode.
                    kf.frame = offset;
                }
                if (kf.mode === 'relative') {
                    _reset(element);
                    kf.frame = _instance.relativeToAbsolute(anchorTarget, kf.anchors[0], kf.anchors[1]) - offset;
                    _reset(element, true);
                }
                kf.frame += constantValue; //Only search for max key frame when forceHeight is enabled.
                if (_forceHeight) { //Find the max key frame, but don't use one of the data-end ones for comparison.
                    if (!kf.isEnd && kf.frame > _maxKeyFrame) {
                        _maxKeyFrame = kf.frame;
                    }
                }
            }
        } //#133: The document can be larger than the maxKeyFrame we found.
        _maxKeyFrame = Math.max(_maxKeyFrame, _getDocumentHeight()); //Now process all data-end keyframes.
        skrollableIndex = 0;
        skrollablesLength = _skrollables.length;
        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            skrollable = _skrollables[skrollableIndex];
            keyFrames = skrollable.keyFrames;
            keyFrameIndex = 0;
            keyFramesLength = keyFrames.length;
            for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
                kf = keyFrames[keyFrameIndex];
                constantValue = processedConstants[kf.constant] || 0;
                if (kf.isEnd) {
                    kf.frame = _maxKeyFrame - kf.offset + constantValue;
                }
            }
            skrollable.keyFrames.sort(_keyFrameComparator);
        }
    };
    /**
     * Calculates and sets the style properties for the element at the given frame.
     * @param fakeFrame The frame to render at when smooth scrolling is enabled.
     * @param actualFrame The actual frame we are at.
     */
    var _calcSteps = function _calcSteps(fakeFrame, actualFrame) { //Iterate over all skrollables.
        var skrollableIndex = 0;
        var skrollablesLength = _skrollables.length;
        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            var skrollable = _skrollables[skrollableIndex];
            var element = skrollable.element;
            var frame = skrollable.smoothScrolling ? fakeFrame : actualFrame;
            var frames = skrollable.keyFrames;
            var framesLength = frames.length;
            var firstFrame = frames[0];
            var lastFrame = frames[frames.length - 1];
            var beforeFirst = frame < firstFrame.frame;
            var afterLast = frame > lastFrame.frame;
            var firstOrLastFrame = beforeFirst ? firstFrame : lastFrame;
            var emitEvents = skrollable.emitEvents;
            var lastFrameIndex = skrollable.lastFrameIndex;
            var key;
            var value; //If we are before/after the first/last frame, set the styles according to the given edge strategy.
            if (beforeFirst || afterLast) { //Check if we already handled this edge case last time.
                //Note: using setScrollTop it's possible that we jumped from one edge to the other.
                if (beforeFirst && skrollable.edge === -1 || afterLast && skrollable.edge === 1) {
                    continue;
                } //Add the skrollr-before or -after class.
                if (beforeFirst) {
                    _updateClass(element, [SKROLLABLE_BEFORE_CLASS], [SKROLLABLE_AFTER_CLASS, SKROLLABLE_BETWEEN_CLASS]); //This handles the special case where we exit the first keyframe.
                    if (emitEvents && lastFrameIndex > -1) {
                        _emitEvent(element, firstFrame.eventType, _direction);
                        skrollable.lastFrameIndex = -1;
                    }
                } else {
                    _updateClass(element, [SKROLLABLE_AFTER_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_BETWEEN_CLASS]); //This handles the special case where we exit the last keyframe.
                    if (emitEvents && lastFrameIndex < framesLength) {
                        _emitEvent(element, lastFrame.eventType, _direction);
                        skrollable.lastFrameIndex = framesLength;
                    }
                } //Remember that we handled the edge case (before/after the first/last keyframe).
                skrollable.edge = beforeFirst ? -1 : 1;
                switch (skrollable.edgeStrategy) {
                    case 'reset':
                        _reset(element);
                        continue;
                    case 'ease': //Handle this case like it would be exactly at first/last keyframe and just pass it on.
                        frame = firstOrLastFrame.frame;
                        break;
                    default:
                    case 'set':
                        var props = firstOrLastFrame.props;
                        for (key in props) {
                            if (hasProp.call(props, key)) {
                                value = _interpolateString(props[key].value); //Set style or attribute.
                                if (key.indexOf('@') === 0) {
                                    element.setAttribute(key.substr(1), value);
                                } else {
                                    skrollr.setStyle(element, key, value);
                                }
                            }
                        }
                        continue;
                }
            } else { //Did we handle an edge last time?
                if (skrollable.edge !== 0) {
                    _updateClass(element, [SKROLLABLE_CLASS, SKROLLABLE_BETWEEN_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_AFTER_CLASS]);
                    skrollable.edge = 0;
                }
            } //Find out between which two key frames we are right now.
            var keyFrameIndex = 0;
            for (; keyFrameIndex < framesLength - 1; keyFrameIndex++) {
                if (frame >= frames[keyFrameIndex].frame && frame <= frames[keyFrameIndex + 1].frame) {
                    var left = frames[keyFrameIndex];
                    var right = frames[keyFrameIndex + 1];
                    for (key in left.props) {
                        if (hasProp.call(left.props, key)) {
                            var progress = (frame - left.frame) / (right.frame - left.frame); //Transform the current progress using the given easing function.
                            progress = left.props[key].easing(progress); //Interpolate between the two values
                            value = _calcInterpolation(left.props[key].value, right.props[key].value, progress);
                            value = _interpolateString(value); //Set style or attribute.
                            if (key.indexOf('@') === 0) {
                                element.setAttribute(key.substr(1), value);
                            } else {
                                skrollr.setStyle(element, key, value);
                            }
                        }
                    } //Are events enabled on this element?
                    //This code handles the usual cases of scrolling through different keyframes.
                    //The special cases of before first and after last keyframe are handled above.
                    if (emitEvents) { //Did we pass a new keyframe?
                        if (lastFrameIndex !== keyFrameIndex) {
                            if (_direction === 'down') {
                                _emitEvent(element, left.eventType, _direction);
                            } else {
                                _emitEvent(element, right.eventType, _direction);
                            }
                            skrollable.lastFrameIndex = keyFrameIndex;
                        }
                    }
                    break;
                }
            }
        }
    };
    /**
     * Renders all elements.
     */
    var _render = function _render() {
        if (_requestReflow) {
            _requestReflow = false;
            _reflow();
        } //We may render something else than the actual scrollbar position.
        var renderTop = _instance.getScrollTop(); //If there's an animation, which ends in current render call, call the callback after rendering.
        var afterAnimationCallback;
        var now = _now();
        var progress; //Before actually rendering handle the scroll animation, if any.
        if (_scrollAnimation) { //It's over
            if (now >= _scrollAnimation.endTime) {
                renderTop = _scrollAnimation.targetTop;
                afterAnimationCallback = _scrollAnimation.done;
                _scrollAnimation = undefined;
            } else { //Map the current progress to the new progress using given easing function.
                progress = _scrollAnimation.easing((now - _scrollAnimation.startTime) / _scrollAnimation.duration);
                renderTop = _scrollAnimation.startTop + progress * _scrollAnimation.topDiff | 0;
            }
            _instance.setScrollTop(renderTop, true);
        } //Smooth scrolling only if there's no animation running and if we're not forcing the rendering.
        else if (!_forceRender) {
            var smoothScrollingDiff = _smoothScrolling.targetTop - renderTop; //The user scrolled, start new smooth scrolling.
            if (smoothScrollingDiff) {
                _smoothScrolling = {
                    startTop: _lastTop,
                    topDiff: renderTop - _lastTop,
                    targetTop: renderTop,
                    startTime: _lastRenderCall,
                    endTime: _lastRenderCall + _smoothScrollingDuration
                };
            } //Interpolate the internal scroll position (not the actual scrollbar).
            if (now <= _smoothScrolling.endTime) { //Map the current progress to the new progress using easing function.
                progress = easings.sqrt((now - _smoothScrolling.startTime) / _smoothScrollingDuration);
                renderTop = _smoothScrolling.startTop + progress * _smoothScrolling.topDiff | 0;
            }
        } //Did the scroll position even change?
        if (_forceRender || _lastTop !== renderTop) { //Remember in which direction are we scrolling?
            _direction = renderTop > _lastTop ? 'down' : renderTop < _lastTop ? 'up' : _direction;
            _forceRender = false;
            var listenerParams = {
                curTop: renderTop,
                lastTop: _lastTop,
                maxTop: _maxKeyFrame,
                direction: _direction
            }; //Tell the listener we are about to render.
            var continueRendering = _listeners.beforerender && _listeners.beforerender.call(_instance, listenerParams); //The beforerender listener function is able the cancel rendering.
            if (continueRendering !== false) { //Now actually interpolate all the styles.
                _calcSteps(renderTop, _instance.getScrollTop()); //That's were we actually "scroll" on mobile.
                if (_isMobile && _skrollrBody) { //Set the transform ("scroll it").
                    skrollr.setStyle(_skrollrBody, 'transform', 'translate(0, ' + -_mobileOffset + 'px) ' + _translateZ);
                } //Remember when we last rendered.
                _lastTop = renderTop;
                if (_listeners.render) {
                    _listeners.render.call(_instance, listenerParams);
                }
            }
            if (afterAnimationCallback) {
                afterAnimationCallback.call(_instance, false);
            }
        }
        _lastRenderCall = now;
    };
    /**
     * Parses the properties for each key frame of the given skrollable.
     */
    var _parseProps = function _parseProps(skrollable) { //Iterate over all key frames
        var keyFrameIndex = 0;
        var keyFramesLength = skrollable.keyFrames.length;
        for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
            var frame = skrollable.keyFrames[keyFrameIndex];
            var easing;
            var value;
            var prop;
            var props = {};
            var match;
            while ((match = rxPropValue.exec(frame.props)) !== null) {
                prop = match[1];
                value = match[2];
                easing = prop.match(rxPropEasing); //Is there an easing specified for this prop?
                if (easing !== null) {
                    prop = easing[1];
                    easing = easing[2];
                } else {
                    easing = DEFAULT_EASING;
                } //Exclamation point at first position forces the value to be taken literal.
                value = value.indexOf('!') ? _parseProp(value) : [value.slice(1)]; //Save the prop for this key frame with his value and easing function
                props[prop] = {
                    value: value,
                    easing: easings[easing]
                };
            }
            frame.props = props;
        }
    };
    /**
     * Parses a value extracting numeric values and generating a format string
     * for later interpolation of the new values in old string.
     *
     * @param val The CSS value to be parsed.
     * @return Something like ["rgba(?%,?%, ?%,?)", 100, 50, 0, .7]
     * where the first element is the format string later used
     * and all following elements are the numeric value.
     */
    var _parseProp = function _parseProp(val) {
        var numbers = []; //One special case, where floats don't work.
        //We replace all occurences of rgba colors
        //which don't use percentage notation with the percentage notation.
        rxRGBAIntegerColor.lastIndex = 0;
        val = val.replace(rxRGBAIntegerColor, function(rgba) {
            return rgba.replace(rxNumericValue, function(n) {
                return n / 255 * 100 + '%';
            });
        }); //Handle prefixing of "gradient" values.
        //For now only the prefixed value will be set. Unprefixed isn't supported anyway.
        if (theDashedCSSPrefix) {
            rxGradient.lastIndex = 0;
            val = val.replace(rxGradient, function(s) {
                return theDashedCSSPrefix + s;
            });
        } //Now parse ANY number inside this string and create a format string.
        val = val.replace(rxNumericValue, function(n) {
            numbers.push(+n);
            return '{?}';
        }); //Add the formatstring as first value.
        numbers.unshift(val);
        return numbers;
    };
    /**
     * Fills the key frames with missing left and right hand properties.
     * If key frame 1 has property X and key frame 2 is missing X,
     * but key frame 3 has X again, then we need to assign X to key frame 2 too.
     *
     * @param sk A skrollable.
     */
    var _fillProps = function _fillProps(sk) { //Will collect the properties key frame by key frame
        var propList = {};
        var keyFrameIndex;
        var keyFramesLength; //Iterate over all key frames from left to right
        keyFrameIndex = 0;
        keyFramesLength = sk.keyFrames.length;
        for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
            _fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
        } //Now do the same from right to fill the last gaps
        propList = {}; //Iterate over all key frames from right to left
        keyFrameIndex = sk.keyFrames.length - 1;
        for (; keyFrameIndex >= 0; keyFrameIndex--) {
            _fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
        }
    };
    var _fillPropForFrame = function _fillPropForFrame(frame, propList) {
        var key; //For each key frame iterate over all right hand properties and assign them,
        //but only if the current key frame doesn't have the property by itself
        for (key in propList) { //The current frame misses this property, so assign it.
            if (!hasProp.call(frame.props, key)) {
                frame.props[key] = propList[key];
            }
        } //Iterate over all props of the current frame and collect them
        for (key in frame.props) {
            propList[key] = frame.props[key];
        }
    };
    /**
     * Calculates the new values for two given values array.
     */
    var _calcInterpolation = function _calcInterpolation(val1, val2, progress) {
        var valueIndex;
        var val1Length = val1.length; //They both need to have the same length
        if (val1Length !== val2.length) {
            throw 'Can\'t interpolate between "' + val1[0] + '" and "' + val2[0] + '"';
        } //Add the format string as first element.
        var interpolated = [val1[0]];
        valueIndex = 1;
        for (; valueIndex < val1Length; valueIndex++) { //That's the line where the two numbers are actually interpolated.
            interpolated[valueIndex] = val1[valueIndex] + (val2[valueIndex] - val1[valueIndex]) * progress;
        }
        return interpolated;
    };
    /**
     * Interpolates the numeric values into the format string.
     */
    var _interpolateString = function _interpolateString(val) {
        var valueIndex = 1;
        rxInterpolateString.lastIndex = 0;
        return val[0].replace(rxInterpolateString, function() {
            return val[valueIndex++];
        });
    };
    /**
     * Resets the class and style attribute to what it was before skrollr manipulated the element.
     * Also remembers the values it had before reseting, in order to undo the reset.
     */
    var _reset = function _reset(elements, undo) { //We accept a single element or an array of elements.
        elements = [].concat(elements);
        var skrollable;
        var element;
        var elementsIndex = 0;
        var elementsLength = elements.length;
        for (; elementsIndex < elementsLength; elementsIndex++) {
            element = elements[elementsIndex];
            skrollable = _skrollables[element[SKROLLABLE_ID_DOM_PROPERTY]]; //Couldn't find the skrollable for this DOM element.
            if (!skrollable) {
                continue;
            }
            if (undo) { //Reset class and style to the "dirty" (set by skrollr) values.
                element.style.cssText = skrollable.dirtyStyleAttr;
                _updateClass(element, skrollable.dirtyClassAttr);
            } else { //Remember the "dirty" (set by skrollr) class and style.
                skrollable.dirtyStyleAttr = element.style.cssText;
                skrollable.dirtyClassAttr = _getClass(element); //Reset class and style to what it originally was.
                element.style.cssText = skrollable.styleAttr;
                _updateClass(element, skrollable.classAttr);
            }
        }
    };
    /**
     * Detects support for 3d transforms by applying it to the skrollr-body.
     */
    var _detect3DTransforms = function _detect3DTransforms() {
        _translateZ = 'translateZ(0)';
        skrollr.setStyle(_skrollrBody, 'transform', _translateZ);
        var computedStyle = getStyle(_skrollrBody);
        var computedTransform = computedStyle.getPropertyValue('transform');
        var computedTransformWithPrefix = computedStyle.getPropertyValue(theDashedCSSPrefix + 'transform');
        var has3D = computedTransform && computedTransform !== 'none' || computedTransformWithPrefix && computedTransformWithPrefix !== 'none';
        if (!has3D) {
            _translateZ = '';
        }
    };
    /**
     * Set the CSS property on the given element. Sets prefixed properties as well.
     */
    skrollr.setStyle = function(el, prop, val) {
        var style = el.style; //Camel case.
        prop = prop.replace(rxCamelCase, rxCamelCaseFn).replace('-', ''); //Make sure z-index gets a <integer>.
        //This is the only <integer> case we need to handle.
        if (prop === 'zIndex') {
            if (isNaN(val)) { //If it's not a number, don't touch it.
                //It could for example be "auto" (#351).
                style[prop] = val;
            } else { //Floor the number.
                style[prop] = '' + (val | 0);
            }
        } //#64: "float" can't be set across browsers. Needs to use "cssFloat" for all except IE.
        else if (prop === 'float') {
            style.styleFloat = style.cssFloat = val;
        } else { //Need try-catch for old IE.
            try { //Set prefixed property if there's a prefix.
                if (theCSSPrefix) {
                    style[theCSSPrefix + prop.slice(0, 1).toUpperCase() + prop.slice(1)] = val;
                } //Set unprefixed.
                style[prop] = val;
            } catch (ignore) {}
        }
    };
    /**
     * Cross browser event handling.
     */
    var _addEvent = skrollr.addEvent = function(element, names, callback) {
        var intermediate = function intermediate(e) { //Normalize IE event stuff.
            e = e || window.event;
            if (!e.target) {
                e.target = e.srcElement;
            }
            if (!e.preventDefault) {
                e.preventDefault = function() {
                    e.returnValue = false;
                    e.defaultPrevented = true;
                };
            }
            return callback.call(this, e);
        };
        names = names.split(' ');
        var name;
        var nameCounter = 0;
        var namesLength = names.length;
        for (; nameCounter < namesLength; nameCounter++) {
            name = names[nameCounter];
            if (element.addEventListener) {
                element.addEventListener(name, callback, false);
            } else {
                element.attachEvent('on' + name, intermediate);
            } //Remember the events to be able to flush them later.
            _registeredEvents.push({
                element: element,
                name: name,
                listener: callback
            });
        }
    };
    var _removeEvent = skrollr.removeEvent = function(element, names, callback) {
        names = names.split(' ');
        var nameCounter = 0;
        var namesLength = names.length;
        for (; nameCounter < namesLength; nameCounter++) {
            if (element.removeEventListener) {
                element.removeEventListener(names[nameCounter], callback, false);
            } else {
                element.detachEvent('on' + names[nameCounter], callback);
            }
        }
    };
    var _removeAllEvents = function _removeAllEvents() {
        var eventData;
        var eventCounter = 0;
        var eventsLength = _registeredEvents.length;
        for (; eventCounter < eventsLength; eventCounter++) {
            eventData = _registeredEvents[eventCounter];
            _removeEvent(eventData.element, eventData.name, eventData.listener);
        }
        _registeredEvents = [];
    };
    var _emitEvent = function _emitEvent(element, name, direction) {
        if (_listeners.keyframe) {
            _listeners.keyframe.call(_instance, element, name, direction);
        }
    };
    var _reflow = function _reflow() {
        var pos = _instance.getScrollTop(); //Will be recalculated by _updateDependentKeyFrames.
        _maxKeyFrame = 0;
        if (_forceHeight && !_isMobile) { //un-"force" the height to not mess with the calculations in _updateDependentKeyFrames (#216).
            body.style.height = '';
        }
        _updateDependentKeyFrames();
        if (_forceHeight && !_isMobile) { //"force" the height.
            body.style.height = _maxKeyFrame + documentElement.clientHeight + 'px';
        } //The scroll offset may now be larger than needed (on desktop the browser/os prevents scrolling farther than the bottom).
        if (_isMobile) {
            _instance.setScrollTop(Math.min(_instance.getScrollTop(), _maxKeyFrame));
        } else { //Remember and reset the scroll pos (#217).
            _instance.setScrollTop(pos, true);
        }
        _forceRender = true;
    };
    /*
     * Returns a copy of the constants object where all functions and strings have been evaluated.
     */
    var _processConstants = function _processConstants() {
        var viewportHeight = documentElement.clientHeight;
        var copy = {};
        var prop;
        var value;
        for (prop in _constants) {
            value = _constants[prop];
            if (typeof value === 'function') {
                value = value.call(_instance);
            } //Percentage offset.
            else if (/p$/.test(value)) {
                value = value.slice(0, -1) / 100 * viewportHeight;
            }
            copy[prop] = value;
        }
        return copy;
    };
    /*
     * Returns the height of the document.
     */
    var _getDocumentHeight = function _getDocumentHeight() {
        var skrollrBodyHeight = 0;
        var bodyHeight;
        if (_skrollrBody) {
            skrollrBodyHeight = Math.max(_skrollrBody.offsetHeight, _skrollrBody.scrollHeight);
        }
        bodyHeight = Math.max(skrollrBodyHeight, body.scrollHeight, body.offsetHeight, documentElement.scrollHeight, documentElement.offsetHeight, documentElement.clientHeight);
        return bodyHeight - documentElement.clientHeight;
    };
    /**
     * Returns a string of space separated classnames for the current element.
     * Works with SVG as well.
     */
    var _getClass = function _getClass(element) {
        var prop = 'className'; //SVG support by using className.baseVal instead of just className.
        if (window.SVGElement && element instanceof window.SVGElement) {
            element = element[prop];
            prop = 'baseVal';
        }
        return element[prop];
    };
    /**
     * Adds and removes a CSS classes.
     * Works with SVG as well.
     * add and remove are arrays of strings,
     * or if remove is ommited add is a string and overwrites all classes.
     */
    var _updateClass = function _updateClass(element, add, remove) {
        var prop = 'className'; //SVG support by using className.baseVal instead of just className.
        if (window.SVGElement && element instanceof window.SVGElement) {
            element = element[prop];
            prop = 'baseVal';
        } //When remove is ommited, we want to overwrite/set the classes.
        if (remove === undefined) {
            element[prop] = add;
            return;
        } //Cache current classes. We will work on a string before passing back to DOM.
        var val = element[prop]; //All classes to be removed.
        var classRemoveIndex = 0;
        var removeLength = remove.length;
        for (; classRemoveIndex < removeLength; classRemoveIndex++) {
            val = _untrim(val).replace(_untrim(remove[classRemoveIndex]), ' ');
        }
        val = _trim(val); //All classes to be added.
        var classAddIndex = 0;
        var addLength = add.length;
        for (; classAddIndex < addLength; classAddIndex++) { //Only add if el not already has class.
            if (_untrim(val).indexOf(_untrim(add[classAddIndex])) === -1) {
                val += ' ' + add[classAddIndex];
            }
        }
        element[prop] = _trim(val);
    };
    var _trim = function _trim(a) {
        return a.replace(rxTrim, '');
    };
    /**
     * Adds a space before and after the string.
     */
    var _untrim = function _untrim(a) {
        return ' ' + a + ' ';
    };
    var _now = Date.now || function() {
        return +new Date();
    };
    var _keyFrameComparator = function _keyFrameComparator(a, b) {
        return a.frame - b.frame;
    };
    /*
     * Private variables.
     */ //Singleton
    var _instance;
    /*
    		A list of all elements which should be animated associated with their the metadata.
    		Exmaple skrollable with two key frames animating from 100px width to 20px:

    		skrollable = {
    			element: <the DOM element>,
    			styleAttr: <style attribute of the element before skrollr>,
    			classAttr: <class attribute of the element before skrollr>,
    			keyFrames: [
    				{
    					frame: 100,
    					props: {
    						width: {
    							value: ['{?}px', 100],
    							easing: <reference to easing function>
    						}
    					},
    					mode: "absolute"
    				},
    				{
    					frame: 200,
    					props: {
    						width: {
    							value: ['{?}px', 20],
    							easing: <reference to easing function>
    						}
    					},
    					mode: "absolute"
    				}
    			]
    		};
    	*/
    var _skrollables;
    var _skrollrBody;
    var _listeners;
    var _forceHeight;
    var _maxKeyFrame = 0;
    var _scale = 1;
    var _constants;
    var _mobileDeceleration; //Current direction (up/down).
    var _direction = 'down'; //The last top offset value. Needed to determine direction.
    var _lastTop = -1; //The last time we called the render method (doesn't mean we rendered!).
    var _lastRenderCall = _now(); //For detecting if it actually resized (#271).
    var _lastViewportWidth = 0;
    var _lastViewportHeight = 0;
    var _requestReflow = false; //Will contain data about a running scrollbar animation, if any.
    var _scrollAnimation;
    var _smoothScrollingEnabled;
    var _smoothScrollingDuration; //Will contain settins for smooth scrolling if enabled.
    var _smoothScrolling; //Can be set by any operation/event to force rendering even if the scrollbar didn't move.
    var _forceRender; //Each skrollable gets an unique ID incremented for each skrollable.
    //The ID is the index in the _skrollables array.
    var _skrollableIdCounter = 0;
    var _edgeStrategy; //Mobile specific vars. Will be stripped by UglifyJS when not in use.
    var _isMobile = false; //The virtual scroll offset when using mobile scrolling.
    var _mobileOffset = 0; //If the browser supports 3d transforms, this will be filled with 'translateZ(0)' (empty string otherwise).
    var _translateZ; //Will contain data about registered events by skrollr.
    var _registeredEvents = []; //Animation frame id returned by RequestAnimationFrame (or timeout when RAF is not supported).
    var _animFrame; //Expose skrollr as either a global variable or a require.js module.
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return skrollr;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = skrollr;
    } else {
        window.skrollr = skrollr;
    }
})(window, document);
/*
== malihu jquery custom scrollbar plugin ==
Version: 3.1.5
Plugin URI: http://manos.malihu.gr/jquery-custom-content-scroller
Author: malihu
Author URI: http://manos.malihu.gr
License: MIT License (MIT)
*/
/*
Copyright Manos Malihutsakis (email: manos@malihu.gr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
/*
The code below is fairly long, fully commented and should be normally used in development.
For production, use either the minified jquery.mCustomScrollbar.min.js script or
the production-ready jquery.mCustomScrollbar.concat.min.js which contains the plugin
and dependencies (minified).
*/
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = factory;
    } else {
        factory(jQuery, window, document);
    }
})(function($) {
    (function(init) {
        var _rjs = typeof define === "function" && define.amd,
            /* RequireJS */
            _njs = typeof module !== "undefined" && module.exports,
            /* NodeJS */
            _dlp = "https:" == document.location.protocol ? "https:" : "http:",
            /* location protocol */
            _url = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        if (!_rjs) {
            if (_njs) {
                require("jquery-mousewheel")($);
            } else {
                /* load jquery-mousewheel plugin (via CDN) if it's not present or not loaded via RequireJS
                			(works when mCustomScrollbar fn is called on window load) */
                $.event.special.mousewheel || $("head").append(decodeURI("%3Cscript src=" + _dlp + "//" + _url + "%3E%3C/script%3E"));
            }
        }
        init();
    })(function() {
        /*
        	----------------------------------------
        	PLUGIN NAMESPACE, PREFIX, DEFAULT SELECTOR(S)
        	----------------------------------------
        	*/
        var pluginNS = "mCustomScrollbar",
            pluginPfx = "mCS",
            defaultSelector = ".mCustomScrollbar",
            /*
            	----------------------------------------
            	DEFAULT OPTIONS
            	----------------------------------------
            	*/
            defaults = {
                /*
                			set element/content width/height programmatically
                			values: boolean, pixels, percentage
                				option						default
                				-------------------------------------
                				setWidth					false
                				setHeight					false
                			*/
                /*
                			set the initial css top property of content
                			values: string (e.g. "-100px", "10%" etc.)
                			*/
                setTop: 0,
                /*
                			set the initial css left property of content
                			values: string (e.g. "-100px", "10%" etc.)
                			*/
                setLeft: 0,
                /*
                			scrollbar axis (vertical and/or horizontal scrollbars)
                			values (string): "y", "x", "yx"
                			*/
                axis: "y",
                /*
                			position of scrollbar relative to content
                			values (string): "inside", "outside" ("outside" requires elements with position:relative)
                			*/
                scrollbarPosition: "inside",
                /*
                			scrolling inertia
                			values: integer (milliseconds)
                			*/
                scrollInertia: 950,
                /*
                			auto-adjust scrollbar dragger length
                			values: boolean
                			*/
                autoDraggerLength: true,
                /*
                			auto-hide scrollbar when idle
                			values: boolean
                				option						default
                				-------------------------------------
                				autoHideScrollbar			false
                			*/
                /*
                			auto-expands scrollbar on mouse-over and dragging
                			values: boolean
                				option						default
                				-------------------------------------
                				autoExpandScrollbar			false
                			*/
                /*
                			always show scrollbar, even when there's nothing to scroll
                			values: integer (0=disable, 1=always show dragger rail and buttons, 2=always show dragger rail, dragger and buttons), boolean
                			*/
                alwaysShowScrollbar: 0,
                /*
                			scrolling always snaps to a multiple of this number in pixels
                			values: integer, array ([y,x])
                				option						default
                				-------------------------------------
                				snapAmount					null
                			*/
                /*
                			when snapping, snap with this number in pixels as an offset
                			values: integer
                			*/
                snapOffset: 0,
                /*
                			mouse-wheel scrolling
                			*/
                mouseWheel: {
                    /*
                    				enable mouse-wheel scrolling
                    				values: boolean
                    				*/
                    enable: true,
                    /*
                    				scrolling amount in pixels
                    				values: "auto", integer
                    				*/
                    scrollAmount: "auto",
                    /*
                    				mouse-wheel scrolling axis
                    				the default scrolling direction when both vertical and horizontal scrollbars are present
                    				values (string): "y", "x"
                    				*/
                    axis: "y",
                    /*
                    				prevent the default behaviour which automatically scrolls the parent element(s) when end of scrolling is reached
                    				values: boolean
                    					option						default
                    					-------------------------------------
                    					preventDefault				null
                    				*/
                    /*
                    				the reported mouse-wheel delta value. The number of lines (translated to pixels) one wheel notch scrolls.
                    				values: "auto", integer
                    				"auto" uses the default OS/browser value
                    				*/
                    deltaFactor: "auto",
                    /*
                    				normalize mouse-wheel delta to -1 or 1 (disables mouse-wheel acceleration)
                    				values: boolean
                    					option						default
                    					-------------------------------------
                    					normalizeDelta				null
                    				*/
                    /*
                    				invert mouse-wheel scrolling direction
                    				values: boolean
                    					option						default
                    					-------------------------------------
                    					invert						null
                    				*/
                    /*
                    				the tags that disable mouse-wheel when cursor is over them
                    				*/
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                /*
                			scrollbar buttons
                			*/
                scrollButtons: {
                    /*
                    				enable scrollbar buttons
                    				values: boolean
                    					option						default
                    					-------------------------------------
                    					enable						null
                    				*/
                    /*
                    				scrollbar buttons scrolling type
                    				values (string): "stepless", "stepped"
                    				*/
                    scrollType: "stepless",
                    /*
                    				scrolling amount in pixels
                    				values: "auto", integer
                    				*/
                    scrollAmount: "auto"
                        /*
                        				tabindex of the scrollbar buttons
                        				values: false, integer
                        					option						default
                        					-------------------------------------
                        					tabindex					null
                        				*/
                },
                /*
                			keyboard scrolling
                			*/
                keyboard: {
                    /*
                    				enable scrolling via keyboard
                    				values: boolean
                    				*/
                    enable: true,
                    /*
                    				keyboard scrolling type
                    				values (string): "stepless", "stepped"
                    				*/
                    scrollType: "stepless",
                    /*
                    				scrolling amount in pixels
                    				values: "auto", integer
                    				*/
                    scrollAmount: "auto"
                },
                /*
                			enable content touch-swipe scrolling
                			values: boolean, integer, string (number)
                			integer values define the axis-specific minimum amount required for scrolling momentum
                			*/
                contentTouchScroll: 25,
                /*
                			enable/disable document (default) touch-swipe scrolling
                			*/
                documentTouchScroll: true,
                /*
                			advanced option parameters
                			*/
                advanced: {
                    /*
                    				auto-expand content horizontally (for "x" or "yx" axis)
                    				values: boolean, integer (the value 2 forces the non scrollHeight/scrollWidth method, the value 3 forces the scrollHeight/scrollWidth method)
                    					option						default
                    					-------------------------------------
                    					autoExpandHorizontalScroll	null
                    				*/
                    /*
                    				auto-scroll to elements with focus
                    				*/
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    /*
                    				auto-update scrollbars on content, element or viewport resize
                    				should be true for fluid layouts/elements, adding/removing content dynamically, hiding/showing elements, content with images etc.
                    				values: boolean
                    				*/
                    updateOnContentResize: true,
                    /*
                    				auto-update scrollbars each time each image inside the element is fully loaded
                    				values: "auto", boolean
                    				*/
                    updateOnImageLoad: "auto",
                    /*
                    				auto-update scrollbars based on the amount and size changes of specific selectors
                    				useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size
                    				values: boolean, string (e.g. "ul li" will auto-update scrollbars each time list-items inside the element are changed)
                    				a value of true (boolean) will auto-update scrollbars each time any element is changed
                    					option						default
                    					-------------------------------------
                    					updateOnSelectorChange		null
                    				*/
                    /*
                    				extra selectors that'll allow scrollbar dragging upon mousemove/up, pointermove/up, touchend etc. (e.g. "selector-1, selector-2")
                    					option						default
                    					-------------------------------------
                    					extraDraggableSelectors		null
                    				*/
                    /*
                    				extra selectors that'll release scrollbar dragging upon mouseup, pointerup, touchend etc. (e.g. "selector-1, selector-2")
                    					option						default
                    					-------------------------------------
                    					releaseDraggableSelectors	null
                    				*/
                    /*
                    				auto-update timeout
                    				values: integer (milliseconds)
                    				*/
                    autoUpdateTimeout: 60
                },
                /*
                			scrollbar theme
                			values: string (see CSS/plugin URI for a list of ready-to-use themes)
                			*/
                theme: "light",
                /*
                			user defined callback functions
                			*/
                callbacks: {
                    /*
                    				Available callbacks:
                    					callback					default
                    					-------------------------------------
                    					onCreate					null
                    					onInit						null
                    					onScrollStart				null
                    					onScroll					null
                    					onTotalScroll				null
                    					onTotalScrollBack			null
                    					whileScrolling				null
                    					onOverflowY					null
                    					onOverflowX					null
                    					onOverflowYNone				null
                    					onOverflowXNone				null
                    					onImageLoad					null
                    					onSelectorChange			null
                    					onBeforeUpdate				null
                    					onUpdate					null
                    				*/
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: true
                        /*
                        			add scrollbar(s) on all elements matching the current selector, now and in the future
                        			values: boolean, string
                        			string values: "on" (enable), "once" (disable after first invocation), "off" (disable)
                        			liveSelector values: string (selector)
                        				option						default
                        				-------------------------------------
                        				live						false
                        				liveSelector				null
                        			*/
                }
            },
            /*
            	----------------------------------------
            	VARS, CONSTANTS
            	----------------------------------------
            	*/
            totalInstances = 0,
            /* plugin instances amount */
            liveTimers = {},
            /* live option timers */
            oldIE = window.attachEvent && !window.addEventListener ? 1 : 0,
            /* detect IE < 9 */
            touchActive = false,
            touchable, /* global touch vars (for touch and pointer events) */ /* general plugin classes */ classes = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            /*
            	----------------------------------------
            	METHODS
            	----------------------------------------
            	*/
            methods = {
                /*
                			plugin initialization method
                			creates the scrollbar(s), plugin data object and options
                			----------------------------------------
                			*/
                init: function init(options) {
                    var options = $.extend(true, {}, defaults, options),
                        selector = _selector.call(this); /* validate selector */
                    /*
                    				if live option is enabled, monitor for elements matching the current selector and
                    				apply scrollbar(s) when found (now and in the future)
                    				*/
                    if (options.live) {
                        var liveSelector = options.liveSelector || this.selector || defaultSelector,
                            /* live selector(s) */
                            $liveSelector = $(liveSelector); /* live selector(s) as jquery object */
                        if (options.live === "off") {
                            /*
                            						disable live if requested
                            						usage: $(selector).mCustomScrollbar({live:"off"});
                            						*/
                            removeLiveTimers(liveSelector);
                            return;
                        }
                        liveTimers[liveSelector] = setTimeout(function() {
                            /* call mCustomScrollbar fn on live selector(s) every half-second */
                            $liveSelector.mCustomScrollbar(options);
                            if (options.live === "once" && $liveSelector.length) {
                                /* disable live after first invocation */
                                removeLiveTimers(liveSelector);
                            }
                        }, 500);
                    } else {
                        removeLiveTimers(liveSelector);
                    } /* options backward compatibility (for versions < 3.0.0) and normalization */
                    options.setWidth = options.set_width ? options.set_width : options.setWidth;
                    options.setHeight = options.set_height ? options.set_height : options.setHeight;
                    options.axis = options.horizontalScroll ? "x" : _findAxis(options.axis);
                    options.scrollInertia = options.scrollInertia > 0 && options.scrollInertia < 17 ? 17 : options.scrollInertia;
                    if (_typeof(options.mouseWheel) !== "object" && options.mouseWheel == true) {
                        /* old school mouseWheel option (non-object) */
                        options.mouseWheel = {
                            enable: true,
                            scrollAmount: "auto",
                            axis: "y",
                            preventDefault: false,
                            deltaFactor: "auto",
                            normalizeDelta: false,
                            invert: false
                        };
                    }
                    options.mouseWheel.scrollAmount = !options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;
                    options.mouseWheel.normalizeDelta = !options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;
                    options.scrollButtons.scrollType = _findScrollButtonsType(options.scrollButtons.scrollType);
                    _theme(options); /* theme-specific options */ /* plugin constructor */
                    return $(selector).each(function() {
                        var $this = $(this);
                        if (!$this.data(pluginPfx)) {
                            /* prevent multiple instantiations */
                            /* store options and create objects in jquery data */
                            $this.data(pluginPfx, {
                                idx: ++totalInstances,
                                /* instance index */
                                opt: options,
                                /* options */
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                /* scrollbar to content ratio */
                                overflowed: null,
                                /* overflowed axis */
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                /* object to check when content resets */
                                bindEvents: false,
                                /* object to check if events are bound */
                                tweenRunning: false,
                                /* object to check if tween is running */
                                sequential: {},
                                /* sequential scrolling object */
                                langDir: $this.css("direction"),
                                /* detect/store direction (ltr or rtl) */
                                cbOffsets: null,
                                /* object to check whether callback offsets always trigger */
                                /*
                                							object to check how scrolling events where last triggered
                                							"internal" (default - triggered by this script), "external" (triggered by other scripts, e.g. via scrollTo method)
                                							usage: object.data("mCS").trigger
                                							*/
                                trigger: null,
                                /*
                                							object to check for changes in elements in order to call the update method automatically
                                							*/
                                poll: {
                                    size: {
                                        o: 0,
                                        n: 0
                                    },
                                    img: {
                                        o: 0,
                                        n: 0
                                    },
                                    change: {
                                        o: 0,
                                        n: 0
                                    }
                                }
                            });
                            var d = $this.data(pluginPfx),
                                o = d.opt,
                                /* HTML data attributes */
                                htmlDataAxis = $this.data("mcs-axis"),
                                htmlDataSbPos = $this.data("mcs-scrollbar-position"),
                                htmlDataTheme = $this.data("mcs-theme");
                            if (htmlDataAxis) {
                                o.axis = htmlDataAxis;
                            } /* usage example: data-mcs-axis="y" */
                            if (htmlDataSbPos) {
                                o.scrollbarPosition = htmlDataSbPos;
                            } /* usage example: data-mcs-scrollbar-position="outside" */
                            if (htmlDataTheme) {
                                /* usage example: data-mcs-theme="minimal" */
                                o.theme = htmlDataTheme;
                                _theme(o); /* theme-specific options */
                            }
                            _pluginMarkup.call(this); /* add plugin markup */
                            if (d && o.callbacks.onCreate && typeof o.callbacks.onCreate === "function") {
                                o.callbacks.onCreate.call(this);
                            } /* callbacks: onCreate */
                            $("#mCSB_" + d.idx + "_container img:not(." + classes[2] + ")").addClass(classes[2]); /* flag loaded images */
                            methods.update.call(null, $this); /* call the update method */
                        }
                    });
                },
                /* ---------------------------------------- */
                /*
                			plugin update method
                			updates content and scrollbar(s) values, events and status
                			----------------------------------------
                			usage: $(selector).mCustomScrollbar("update");
                			*/
                update: function update(el, cb) {
                    var selector = el || _selector.call(this); /* validate selector */
                    return $(selector).each(function() {
                        var $this = $(this);
                        if ($this.data(pluginPfx)) {
                            /* check if plugin has initialized */
                            var d = $this.data(pluginPfx),
                                o = d.opt,
                                mCSB_container = $("#mCSB_" + d.idx + "_container"),
                                mCustomScrollBox = $("#mCSB_" + d.idx),
                                mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];
                            if (!mCSB_container.length) {
                                return;
                            }
                            if (d.tweenRunning) {
                                _stop($this);
                            } /* stop any running tweens while updating */
                            if (cb && d && o.callbacks.onBeforeUpdate && typeof o.callbacks.onBeforeUpdate === "function") {
                                o.callbacks.onBeforeUpdate.call(this);
                            } /* callbacks: onBeforeUpdate */ /* if element was disabled or destroyed, remove class(es) */
                            if ($this.hasClass(classes[3])) {
                                $this.removeClass(classes[3]);
                            }
                            if ($this.hasClass(classes[4])) {
                                $this.removeClass(classes[4]);
                            } /* css flexbox fix, detect/set max-height */
                            mCustomScrollBox.css("max-height", "none");
                            if (mCustomScrollBox.height() !== $this.height()) {
                                mCustomScrollBox.css("max-height", $this.height());
                            }
                            _expandContentHorizontally.call(this); /* expand content horizontally */
                            if (o.axis !== "y" && !o.advanced.autoExpandHorizontalScroll) {
                                mCSB_container.css("width", _contentWidth(mCSB_container));
                            }
                            d.overflowed = _overflowed.call(this); /* determine if scrolling is required */
                            _scrollbarVisibility.call(this); /* show/hide scrollbar(s) */ /* auto-adjust scrollbar dragger length analogous to content */
                            if (o.autoDraggerLength) {
                                _setDraggerLength.call(this);
                            }
                            _scrollRatio.call(this); /* calculate and store scrollbar to content ratio */
                            _bindEvents.call(this); /* bind scrollbar events */ /* reset scrolling position and/or events */
                            var to = [Math.abs(mCSB_container[0].offsetTop), Math.abs(mCSB_container[0].offsetLeft)];
                            if (o.axis !== "x") {
                                /* y/yx axis */
                                if (!d.overflowed[0]) {
                                    /* y scrolling is not required */
                                    _resetContentPosition.call(this); /* reset content position */
                                    if (o.axis === "y") {
                                        _unbindEvents.call(this);
                                    } else if (o.axis === "yx" && d.overflowed[1]) {
                                        _scrollTo($this, to[1].toString(), {
                                            dir: "x",
                                            dur: 0,
                                            overwrite: "none"
                                        });
                                    }
                                } else if (mCSB_dragger[0].height() > mCSB_dragger[0].parent().height()) {
                                    _resetContentPosition.call(this); /* reset content position */
                                } else {
                                    /* y scrolling is required */
                                    _scrollTo($this, to[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    });
                                    d.contentReset.y = null;
                                }
                            }
                            if (o.axis !== "y") {
                                /* x/yx axis */
                                if (!d.overflowed[1]) {
                                    /* x scrolling is not required */
                                    _resetContentPosition.call(this); /* reset content position */
                                    if (o.axis === "x") {
                                        _unbindEvents.call(this);
                                    } else if (o.axis === "yx" && d.overflowed[0]) {
                                        _scrollTo($this, to[0].toString(), {
                                            dir: "y",
                                            dur: 0,
                                            overwrite: "none"
                                        });
                                    }
                                } else if (mCSB_dragger[1].width() > mCSB_dragger[1].parent().width()) {
                                    _resetContentPosition.call(this); /* reset content position */
                                } else {
                                    /* x scrolling is required */
                                    _scrollTo($this, to[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    });
                                    d.contentReset.x = null;
                                }
                            } /* callbacks: onImageLoad, onSelectorChange, onUpdate */
                            if (cb && d) {
                                if (cb === 2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad === "function") {
                                    o.callbacks.onImageLoad.call(this);
                                } else if (cb === 3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange === "function") {
                                    o.callbacks.onSelectorChange.call(this);
                                } else if (o.callbacks.onUpdate && typeof o.callbacks.onUpdate === "function") {
                                    o.callbacks.onUpdate.call(this);
                                }
                            }
                            _autoUpdate.call(this); /* initialize automatic updating (for dynamic content, fluid layouts etc.) */
                        }
                    });
                },
                /* ---------------------------------------- */
                /*
                			plugin scrollTo method
                			triggers a scrolling event to a specific value
                			----------------------------------------
                			usage: $(selector).mCustomScrollbar("scrollTo",value,options);
                			*/
                scrollTo: function scrollTo(val, options) {
                    /* prevent silly things like $(selector).mCustomScrollbar("scrollTo",undefined); */
                    if (typeof val == "undefined" || val == null) {
                        return;
                    }
                    var selector = _selector.call(this); /* validate selector */
                    return $(selector).each(function() {
                        var $this = $(this);
                        if ($this.data(pluginPfx)) {
                            /* check if plugin has initialized */
                            var d = $this.data(pluginPfx),
                                o = d.opt,
                                /* method default options */
                                methodDefaults = {
                                    trigger: "external",
                                    /* method is by default triggered externally (e.g. from other scripts) */
                                    scrollInertia: o.scrollInertia,
                                    /* scrolling inertia (animation duration) */
                                    scrollEasing: "mcsEaseInOut",
                                    /* animation easing */
                                    moveDragger: false,
                                    /* move dragger instead of content */
                                    timeout: 60,
                                    /* scroll-to delay */
                                    callbacks: true,
                                    /* enable/disable callbacks */
                                    onStart: true,
                                    onUpdate: true,
                                    onComplete: true
                                },
                                methodOptions = $.extend(true, {}, methodDefaults, options),
                                to = _arr.call(this, val),
                                dur = methodOptions.scrollInertia > 0 && methodOptions.scrollInertia < 17 ? 17 : methodOptions.scrollInertia; /* translate yx values to actual scroll-to positions */
                            to[0] = _to.call(this, to[0], "y");
                            to[1] = _to.call(this, to[1], "x");
                            /*
                            						check if scroll-to value moves the dragger instead of content.
                            						Only pixel values apply on dragger (e.g. 100, "100px", "-=100" etc.)
                            						*/
                            if (methodOptions.moveDragger) {
                                to[0] *= d.scrollRatio.y;
                                to[1] *= d.scrollRatio.x;
                            }
                            methodOptions.dur = _isTabHidden() ? 0 : dur; //skip animations if browser tab is hidden
                            setTimeout(function() {
                                /* do the scrolling */
                                if (to[0] !== null && typeof to[0] !== "undefined" && o.axis !== "x" && d.overflowed[0]) {
                                    /* scroll y */
                                    methodOptions.dir = "y";
                                    methodOptions.overwrite = "all";
                                    _scrollTo($this, to[0].toString(), methodOptions);
                                }
                                if (to[1] !== null && typeof to[1] !== "undefined" && o.axis !== "y" && d.overflowed[1]) {
                                    /* scroll x */
                                    methodOptions.dir = "x";
                                    methodOptions.overwrite = "none";
                                    _scrollTo($this, to[1].toString(), methodOptions);
                                }
                            }, methodOptions.timeout);
                        }
                    });
                },
                /* ---------------------------------------- */
                /*
                			plugin stop method
                			stops scrolling animation
                			----------------------------------------
                			usage: $(selector).mCustomScrollbar("stop");
                			*/
                stop: function stop() {
                    var selector = _selector.call(this); /* validate selector */
                    return $(selector).each(function() {
                        var $this = $(this);
                        if ($this.data(pluginPfx)) {
                            /* check if plugin has initialized */
                            _stop($this);
                        }
                    });
                },
                /* ---------------------------------------- */
                /*
                			plugin disable method
                			temporarily disables the scrollbar(s)
                			----------------------------------------
                			usage: $(selector).mCustomScrollbar("disable",reset);
                			reset (boolean): resets content position to 0
                			*/
                disable: function disable(r) {
                    var selector = _selector.call(this); /* validate selector */
                    return $(selector).each(function() {
                        var $this = $(this);
                        if ($this.data(pluginPfx)) {
                            /* check if plugin has initialized */
                            var d = $this.data(pluginPfx);
                            _autoUpdate.call(this, "remove"); /* remove automatic updating */
                            _unbindEvents.call(this); /* unbind events */
                            if (r) {
                                _resetContentPosition.call(this);
                            } /* reset content position */
                            _scrollbarVisibility.call(this, true); /* show/hide scrollbar(s) */
                            $this.addClass(classes[3]); /* add disable class */
                        }
                    });
                },
                /* ---------------------------------------- */
                /*
                			plugin destroy method
                			completely removes the scrollbar(s) and returns the element to its original state
                			----------------------------------------
                			usage: $(selector).mCustomScrollbar("destroy");
                			*/
                destroy: function destroy() {
                    var selector = _selector.call(this); /* validate selector */
                    return $(selector).each(function() {
                        var $this = $(this);
                        if ($this.data(pluginPfx)) {
                            /* check if plugin has initialized */
                            var d = $this.data(pluginPfx),
                                o = d.opt,
                                mCustomScrollBox = $("#mCSB_" + d.idx),
                                mCSB_container = $("#mCSB_" + d.idx + "_container"),
                                scrollbar = $(".mCSB_" + d.idx + "_scrollbar");
                            if (o.live) {
                                removeLiveTimers(o.liveSelector || $(selector).selector);
                            } /* remove live timers */
                            _autoUpdate.call(this, "remove"); /* remove automatic updating */
                            _unbindEvents.call(this); /* unbind events */
                            _resetContentPosition.call(this); /* reset content position */
                            $this.removeData(pluginPfx); /* remove plugin data object */
                            _delete(this, "mcs"); /* delete callbacks object */ /* remove plugin markup */
                            scrollbar.remove(); /* remove scrollbar(s) first (those can be either inside or outside plugin's inner wrapper) */
                            mCSB_container.find("img." + classes[2]).removeClass(classes[2]); /* remove loaded images flag */
                            mCustomScrollBox.replaceWith(mCSB_container.contents()); /* replace plugin's inner wrapper with the original content */ /* remove plugin classes from the element and add destroy class */
                            $this.removeClass(pluginNS + " _" + pluginPfx + "_" + d.idx + " " + classes[6] + " " + classes[7] + " " + classes[5] + " " + classes[3]).addClass(classes[4]);
                        }
                    });
                } /* ---------------------------------------- */
            },
            /*
            	----------------------------------------
            	FUNCTIONS
            	----------------------------------------
            	*/
            /* validates selector (if selector is invalid or undefined uses the default one) */
            _selector = function _selector() {
                return _typeof($(this)) !== "object" || $(this).length < 1 ? defaultSelector : this;
            },
            /* -------------------- */
            /* changes options according to theme */
            _theme = function _theme(obj) {
                var fixedSizeScrollbarThemes = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    nonExpandedScrollbarThemes = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    disabledScrollButtonsThemes = ["minimal", "minimal-dark"],
                    enabledAutoHideScrollbarThemes = ["minimal", "minimal-dark"],
                    scrollbarPositionOutsideThemes = ["minimal", "minimal-dark"];
                obj.autoDraggerLength = $.inArray(obj.theme, fixedSizeScrollbarThemes) > -1 ? false : obj.autoDraggerLength;
                obj.autoExpandScrollbar = $.inArray(obj.theme, nonExpandedScrollbarThemes) > -1 ? false : obj.autoExpandScrollbar;
                obj.scrollButtons.enable = $.inArray(obj.theme, disabledScrollButtonsThemes) > -1 ? false : obj.scrollButtons.enable;
                obj.autoHideScrollbar = $.inArray(obj.theme, enabledAutoHideScrollbarThemes) > -1 ? true : obj.autoHideScrollbar;
                obj.scrollbarPosition = $.inArray(obj.theme, scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition;
            },
            /* -------------------- */
            /* live option timers removal */
            removeLiveTimers = function removeLiveTimers(selector) {
                if (liveTimers[selector]) {
                    clearTimeout(liveTimers[selector]);
                    _delete(liveTimers, selector);
                }
            },
            /* -------------------- */
            /* normalizes axis option to valid values: "y", "x", "yx" */
            _findAxis = function _findAxis(val) {
                return val === "yx" || val === "xy" || val === "auto" ? "yx" : val === "x" || val === "horizontal" ? "x" : "y";
            },
            /* -------------------- */
            /* normalizes scrollButtons.scrollType option to valid values: "stepless", "stepped" */
            _findScrollButtonsType = function _findScrollButtonsType(val) {
                return val === "stepped" || val === "pixels" || val === "step" || val === "click" ? "stepped" : "stepless";
            },
            /* -------------------- */
            /* generates plugin markup */
            _pluginMarkup = function _pluginMarkup() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    expandClass = o.autoExpandScrollbar ? " " + classes[1] + "_expand" : "",
                    scrollbar = ["<div id='mCSB_" + d.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + d.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + expandClass + "'><div class='" + classes[12] + "'><div id='mCSB_" + d.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + d.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + d.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + expandClass + "'><div class='" + classes[12] + "'><div id='mCSB_" + d.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    wrapperClass = o.axis === "yx" ? "mCSB_vertical_horizontal" : o.axis === "x" ? "mCSB_horizontal" : "mCSB_vertical",
                    scrollbars = o.axis === "yx" ? scrollbar[0] + scrollbar[1] : o.axis === "x" ? scrollbar[1] : scrollbar[0],
                    contentWrapper = o.axis === "yx" ? "<div id='mCSB_" + d.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    autoHideClass = o.autoHideScrollbar ? " " + classes[6] : "",
                    scrollbarDirClass = o.axis !== "x" && d.langDir === "rtl" ? " " + classes[7] : "";
                if (o.setWidth) {
                    $this.css("width", o.setWidth);
                } /* set element width */
                if (o.setHeight) {
                    $this.css("height", o.setHeight);
                } /* set element height */
                o.setLeft = o.axis !== "y" && d.langDir === "rtl" ? "989999px" : o.setLeft; /* adjust left position for rtl direction */
                $this.addClass(pluginNS + " _" + pluginPfx + "_" + d.idx + autoHideClass + scrollbarDirClass).wrapInner("<div id='mCSB_" + d.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + wrapperClass + "'><div id='mCSB_" + d.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + d.langDir + "' /></div>");
                var mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container");
                if (o.axis !== "y" && !o.advanced.autoExpandHorizontalScroll) {
                    mCSB_container.css("width", _contentWidth(mCSB_container));
                }
                if (o.scrollbarPosition === "outside") {
                    if ($this.css("position") === "static") {
                        /* requires elements with non-static position */
                        $this.css("position", "relative");
                    }
                    $this.css("overflow", "visible");
                    mCustomScrollBox.addClass("mCSB_outside").after(scrollbars);
                } else {
                    mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);
                    mCSB_container.wrap(contentWrapper);
                }
                _scrollButtons.call(this); /* add scrollbar buttons */ /* minimum dragger length */
                var mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];
                mCSB_dragger[0].css("min-height", mCSB_dragger[0].height());
                mCSB_dragger[1].css("min-width", mCSB_dragger[1].width());
            },
            /* -------------------- */
            /* calculates content width */
            _contentWidth = function _contentWidth(el) {
                var val = [el[0].scrollWidth, Math.max.apply(Math, el.children().map(function() {
                        return $(this).outerWidth(true);
                    }).get())],
                    w = el.parent().width();
                return val[0] > w ? val[0] : val[1] > w ? val[1] : "100%";
            },
            /* -------------------- */
            /* expands content horizontally */
            _expandContentHorizontally = function _expandContentHorizontally() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCSB_container = $("#mCSB_" + d.idx + "_container");
                if (o.advanced.autoExpandHorizontalScroll && o.axis !== "y") {
                    /* calculate scrollWidth */
                    mCSB_container.css({
                        "width": "auto",
                        "min-width": 0,
                        "overflow-x": "scroll"
                    });
                    var w = Math.ceil(mCSB_container[0].scrollWidth);
                    if (o.advanced.autoExpandHorizontalScroll === 3 || o.advanced.autoExpandHorizontalScroll !== 2 && w > mCSB_container.parent().width()) {
                        mCSB_container.css({
                            "width": w,
                            "min-width": "100%",
                            "overflow-x": "inherit"
                        });
                    } else {
                        /*
                        					wrap content with an infinite width div and set its position to absolute and width to auto.
                        					Setting width to auto before calculating the actual width is important!
                        					We must let the browser set the width as browser zoom values are impossible to calculate.
                        					*/
                        mCSB_container.css({
                            "overflow-x": "inherit",
                            "position": "absolute"
                        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                            /* set actual width, original position and un-wrap */
                            /*
                            							get the exact width (with decimals) and then round-up.
                            							Using jquery outerWidth() will round the width value which will mess up with inner elements that have non-integer width
                            							*/
                            "width": Math.ceil(mCSB_container[0].getBoundingClientRect().right + 0.4) - Math.floor(mCSB_container[0].getBoundingClientRect().left),
                            "min-width": "100%",
                            "position": "relative"
                        }).unwrap();
                    }
                }
            },
            /* -------------------- */
            /* adds scrollbar buttons */
            _scrollButtons = function _scrollButtons() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCSB_scrollTools = $(".mCSB_" + d.idx + "_scrollbar:first"),
                    tabindex = !_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex='" + o.scrollButtons.tabindex + "'",
                    btnHTML = ["<a href='#' class='" + classes[13] + "' " + tabindex + " />", "<a href='#' class='" + classes[14] + "' " + tabindex + " />", "<a href='#' class='" + classes[15] + "' " + tabindex + " />", "<a href='#' class='" + classes[16] + "' " + tabindex + " />"],
                    btn = [o.axis === "x" ? btnHTML[2] : btnHTML[0], o.axis === "x" ? btnHTML[3] : btnHTML[1], btnHTML[2], btnHTML[3]];
                if (o.scrollButtons.enable) {
                    mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3]);
                }
            },
            /* -------------------- */
            /* auto-adjusts scrollbar dragger length */
            _setDraggerLength = function _setDraggerLength() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
                    ratio = [mCustomScrollBox.height() / mCSB_container.outerHeight(false), mCustomScrollBox.width() / mCSB_container.outerWidth(false)],
                    l = [parseInt(mCSB_dragger[0].css("min-height")), Math.round(ratio[0] * mCSB_dragger[0].parent().height()), parseInt(mCSB_dragger[1].css("min-width")), Math.round(ratio[1] * mCSB_dragger[1].parent().width())],
                    h = oldIE && l[1] < l[0] ? l[0] : l[1],
                    w = oldIE && l[3] < l[2] ? l[2] : l[3];
                mCSB_dragger[0].css({
                    "height": h,
                    "max-height": mCSB_dragger[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({
                    "line-height": l[0] + "px"
                });
                mCSB_dragger[1].css({
                    "width": w,
                    "max-width": mCSB_dragger[1].parent().width() - 10
                });
            },
            /* -------------------- */
            /* calculates scrollbar to content ratio */
            _scrollRatio = function _scrollRatio() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
                    scrollAmount = [mCSB_container.outerHeight(false) - mCustomScrollBox.height(), mCSB_container.outerWidth(false) - mCustomScrollBox.width()],
                    ratio = [scrollAmount[0] / (mCSB_dragger[0].parent().height() - mCSB_dragger[0].height()), scrollAmount[1] / (mCSB_dragger[1].parent().width() - mCSB_dragger[1].width())];
                d.scrollRatio = {
                    y: ratio[0],
                    x: ratio[1]
                };
            },
            /* -------------------- */
            /* toggles scrolling classes */
            _onDragClasses = function _onDragClasses(el, action, xpnd) {
                var expandClass = xpnd ? classes[0] + "_expanded" : "",
                    scrollbar = el.closest(".mCSB_scrollTools");
                if (action === "active") {
                    el.toggleClass(classes[0] + " " + expandClass);
                    scrollbar.toggleClass(classes[1]);
                    el[0]._draggable = el[0]._draggable ? 0 : 1;
                } else {
                    if (!el[0]._draggable) {
                        if (action === "hide") {
                            el.removeClass(classes[0]);
                            scrollbar.removeClass(classes[1]);
                        } else {
                            el.addClass(classes[0]);
                            scrollbar.addClass(classes[1]);
                        }
                    }
                }
            },
            /* -------------------- */
            /* checks if content overflows its container to determine if scrolling is required */
            _overflowed = function _overflowed() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    contentHeight = d.overflowed == null ? mCSB_container.height() : mCSB_container.outerHeight(false),
                    contentWidth = d.overflowed == null ? mCSB_container.width() : mCSB_container.outerWidth(false),
                    h = mCSB_container[0].scrollHeight,
                    w = mCSB_container[0].scrollWidth;
                if (h > contentHeight) {
                    contentHeight = h;
                }
                if (w > contentWidth) {
                    contentWidth = w;
                }
                return [contentHeight > mCustomScrollBox.height(), contentWidth > mCustomScrollBox.width()];
            },
            /* -------------------- */
            /* resets content position to 0 */
            _resetContentPosition = function _resetContentPosition() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];
                _stop($this); /* stop any current scrolling before resetting */
                if (o.axis !== "x" && !d.overflowed[0] || o.axis === "y" && d.overflowed[0]) {
                    /* reset y */
                    mCSB_dragger[0].add(mCSB_container).css("top", 0);
                    _scrollTo($this, "_resetY");
                }
                if (o.axis !== "y" && !d.overflowed[1] || o.axis === "x" && d.overflowed[1]) {
                    /* reset x */
                    var cx = dx = 0;
                    if (d.langDir === "rtl") {
                        /* adjust left position for rtl direction */
                        cx = mCustomScrollBox.width() - mCSB_container.outerWidth(false);
                        dx = Math.abs(cx / d.scrollRatio.x);
                    }
                    mCSB_container.css("left", cx);
                    mCSB_dragger[1].css("left", dx);
                    _scrollTo($this, "_resetX");
                }
            },
            /* -------------------- */
            /* binds scrollbar events */
            _bindEvents = function _bindEvents() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt;
                if (!d.bindEvents) {
                    /* check if events are already bound */
                    _draggable.call(this);
                    if (o.contentTouchScroll) {
                        _contentDraggable.call(this);
                    }
                    _selectable.call(this);
                    if (o.mouseWheel.enable) {
                        /* bind mousewheel fn when plugin is available */
                        var _mwt = function _mwt() {
                            mousewheelTimeout = setTimeout(function() {
                                if (!$.event.special.mousewheel) {
                                    _mwt();
                                } else {
                                    clearTimeout(mousewheelTimeout);
                                    _mousewheel.call($this[0]);
                                }
                            }, 100);
                        };
                        var mousewheelTimeout;
                        _mwt();
                    }
                    _draggerRail.call(this);
                    _wrapperScroll.call(this);
                    if (o.advanced.autoScrollOnFocus) {
                        _focus.call(this);
                    }
                    if (o.scrollButtons.enable) {
                        _buttons.call(this);
                    }
                    if (o.keyboard.enable) {
                        _keyboard.call(this);
                    }
                    d.bindEvents = true;
                }
            },
            /* -------------------- */
            /* unbinds scrollbar events */
            _unbindEvents = function _unbindEvents() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    sb = ".mCSB_" + d.idx + "_scrollbar",
                    sel = $("#mCSB_" + d.idx + ",#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper," + sb + " ." + classes[12] + ",#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal," + sb + ">a"),
                    mCSB_container = $("#mCSB_" + d.idx + "_container");
                if (o.advanced.releaseDraggableSelectors) {
                    sel.add($(o.advanced.releaseDraggableSelectors));
                }
                if (o.advanced.extraDraggableSelectors) {
                    sel.add($(o.advanced.extraDraggableSelectors));
                }
                if (d.bindEvents) {
                    /* check if events are bound */
                    /* unbind namespaced events from document/selectors */
                    $(document).add($(!_canAccessIFrame() || top.document)).unbind("." + namespace);
                    sel.each(function() {
                        $(this).unbind("." + namespace);
                    }); /* clear and delete timeouts/objects */
                    clearTimeout($this[0]._focusTimeout);
                    _delete($this[0], "_focusTimeout");
                    clearTimeout(d.sequential.step);
                    _delete(d.sequential, "step");
                    clearTimeout(mCSB_container[0].onCompleteTimeout);
                    _delete(mCSB_container[0], "onCompleteTimeout");
                    d.bindEvents = false;
                }
            },
            /* -------------------- */
            /* toggles scrollbar visibility */
            _scrollbarVisibility = function _scrollbarVisibility(disabled) {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    contentWrapper = $("#mCSB_" + d.idx + "_container_wrapper"),
                    content = contentWrapper.length ? contentWrapper : $("#mCSB_" + d.idx + "_container"),
                    scrollbar = [$("#mCSB_" + d.idx + "_scrollbar_vertical"), $("#mCSB_" + d.idx + "_scrollbar_horizontal")],
                    mCSB_dragger = [scrollbar[0].find(".mCSB_dragger"), scrollbar[1].find(".mCSB_dragger")];
                if (o.axis !== "x") {
                    if (d.overflowed[0] && !disabled) {
                        scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display", "block");
                        content.removeClass(classes[8] + " " + classes[10]);
                    } else {
                        if (o.alwaysShowScrollbar) {
                            if (o.alwaysShowScrollbar !== 2) {
                                mCSB_dragger[0].css("display", "none");
                            }
                            content.removeClass(classes[10]);
                        } else {
                            scrollbar[0].css("display", "none");
                            content.addClass(classes[10]);
                        }
                        content.addClass(classes[8]);
                    }
                }
                if (o.axis !== "y") {
                    if (d.overflowed[1] && !disabled) {
                        scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display", "block");
                        content.removeClass(classes[9] + " " + classes[11]);
                    } else {
                        if (o.alwaysShowScrollbar) {
                            if (o.alwaysShowScrollbar !== 2) {
                                mCSB_dragger[1].css("display", "none");
                            }
                            content.removeClass(classes[11]);
                        } else {
                            scrollbar[1].css("display", "none");
                            content.addClass(classes[11]);
                        }
                        content.addClass(classes[9]);
                    }
                }
                if (!d.overflowed[0] && !d.overflowed[1]) {
                    $this.addClass(classes[5]);
                } else {
                    $this.removeClass(classes[5]);
                }
            },
            /* -------------------- */
            /* returns input coordinates of pointer, touch and mouse events (relative to document) */
            _coordinates = function _coordinates(e) {
                var t = e.type,
                    o = e.target.ownerDocument !== document && frameElement !== null ? [$(frameElement).offset().top, $(frameElement).offset().left] : null,
                    io = _canAccessIFrame() && e.target.ownerDocument !== top.document && frameElement !== null ? [$(e.view.frameElement).offset().top, $(e.view.frameElement).offset().left] : [0, 0];
                switch (t) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return o ? [e.originalEvent.pageY - o[0] + io[0], e.originalEvent.pageX - o[1] + io[1], false] : [e.originalEvent.pageY, e.originalEvent.pageX, false];
                        break;
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                            touches = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                        return e.target.ownerDocument !== document ? [touch.screenY, touch.screenX, touches > 1] : [touch.pageY, touch.pageX, touches > 1];
                        break;
                    default:
                        return o ? [e.pageY - o[0] + io[0], e.pageX - o[1] + io[1], false] : [e.pageY, e.pageX, false];
                }
            },
            /* -------------------- */
            /*
            		SCROLLBAR DRAG EVENTS
            		scrolls content via scrollbar dragging
            		*/
            _draggable = function _draggable() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    draggerId = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = $("#" + draggerId[0] + ",#" + draggerId[1]),
                    draggable, dragY, dragX, rds = o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger,
                    eds = o.advanced.extraDraggableSelectors ? $(!_canAccessIFrame() || top.document).add($(o.advanced.extraDraggableSelectors)) : $(!_canAccessIFrame() || top.document);
                mCSB_dragger.bind("contextmenu." + namespace, function(e) {
                    e.preventDefault(); //prevent right click
                }).bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, function(e) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    if (!_mouseBtnLeft(e)) {
                        return;
                    } /* left mouse button only */
                    touchActive = true;
                    if (oldIE) {
                        document.onselectstart = function() {
                            return false;
                        };
                    } /* disable text selection for IE < 9 */
                    _iframe.call(mCSB_container, false); /* enable scrollbar dragging over iframes by disabling their events */
                    _stop($this);
                    draggable = $(this);
                    var offset = draggable.offset(),
                        y = _coordinates(e)[0] - offset.top,
                        x = _coordinates(e)[1] - offset.left,
                        h = draggable.height() + offset.top,
                        w = draggable.width() + offset.left;
                    if (y < h && y > 0 && x < w && x > 0) {
                        dragY = y;
                        dragX = x;
                    }
                    _onDragClasses(draggable, "active", o.autoExpandScrollbar);
                }).bind("touchmove." + namespace, function(e) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    var offset = draggable.offset(),
                        y = _coordinates(e)[0] - offset.top,
                        x = _coordinates(e)[1] - offset.left;
                    _drag(dragY, dragX, y, x);
                });
                $(document).add(eds).bind("mousemove." + namespace + " pointermove." + namespace + " MSPointerMove." + namespace, function(e) {
                    if (draggable) {
                        var offset = draggable.offset(),
                            y = _coordinates(e)[0] - offset.top,
                            x = _coordinates(e)[1] - offset.left;
                        if (dragY === y && dragX === x) {
                            return;
                        } /* has it really moved? */
                        _drag(dragY, dragX, y, x);
                    }
                }).add(rds).bind("mouseup." + namespace + " touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace, function(e) {
                    if (draggable) {
                        _onDragClasses(draggable, "active", o.autoExpandScrollbar);
                        draggable = null;
                    }
                    touchActive = false;
                    if (oldIE) {
                        document.onselectstart = null;
                    } /* enable text selection for IE < 9 */
                    _iframe.call(mCSB_container, true); /* enable iframes events */
                });

                function _drag(dragY, dragX, y, x) {
                    mCSB_container[0].idleTimer = o.scrollInertia < 233 ? 250 : 0;
                    if (draggable.attr("id") === draggerId[1]) {
                        var dir = "x",
                            to = (draggable[0].offsetLeft - dragX + x) * d.scrollRatio.x;
                    } else {
                        var dir = "y",
                            to = (draggable[0].offsetTop - dragY + y) * d.scrollRatio.y;
                    }
                    _scrollTo($this, to.toString(), {
                        dir: dir,
                        drag: true
                    });
                }
            },
            /* -------------------- */
            /*
            		TOUCH SWIPE EVENTS
            		scrolls content via touch swipe
            		Emulates the native touch-swipe scrolling with momentum found in iOS, Android and WP devices
            		*/
            _contentDraggable = function _contentDraggable() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
                    draggable, dragY, dragX, touchStartY, touchStartX, touchMoveY = [],
                    touchMoveX = [],
                    startTime, runningTime, endTime, distance, speed, amount, durA = 0,
                    durB, overwrite = o.axis === "yx" ? "none" : "all",
                    touchIntent = [],
                    touchDrag, docDrag, iframe = mCSB_container.find("iframe"),
                    events = ["touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, //start
                        "touchmove." + namespace + " pointermove." + namespace + " MSPointerMove." + namespace, //move
                        "touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace //end
                    ],
                    touchAction = document.body.style.touchAction !== undefined && document.body.style.touchAction !== "";
                mCSB_container.bind(events[0], function(e) {
                    _onTouchstart(e);
                }).bind(events[1], function(e) {
                    _onTouchmove(e);
                });
                mCustomScrollBox.bind(events[0], function(e) {
                    _onTouchstart2(e);
                }).bind(events[2], function(e) {
                    _onTouchend(e);
                });
                if (iframe.length) {
                    iframe.each(function() {
                        $(this).bind("load", function() {
                            /* bind events on accessible iframes */
                            if (_canAccessIFrame(this)) {
                                $(this.contentDocument || this.contentWindow.document).bind(events[0], function(e) {
                                    _onTouchstart(e);
                                    _onTouchstart2(e);
                                }).bind(events[1], function(e) {
                                    _onTouchmove(e);
                                }).bind(events[2], function(e) {
                                    _onTouchend(e);
                                });
                            }
                        });
                    });
                }

                function _onTouchstart(e) {
                    if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
                        touchable = 0;
                        return;
                    }
                    touchable = 1;
                    touchDrag = 0;
                    docDrag = 0;
                    draggable = 1;
                    $this.removeClass("mCS_touch_action");
                    var offset = mCSB_container.offset();
                    dragY = _coordinates(e)[0] - offset.top;
                    dragX = _coordinates(e)[1] - offset.left;
                    touchIntent = [_coordinates(e)[0], _coordinates(e)[1]];
                }

                function _onTouchmove(e) {
                    if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
                        return;
                    }
                    if (!o.documentTouchScroll) {
                        e.preventDefault();
                    }
                    e.stopImmediatePropagation();
                    if (docDrag && !touchDrag) {
                        return;
                    }
                    if (draggable) {
                        runningTime = _getTime();
                        var offset = mCustomScrollBox.offset(),
                            y = _coordinates(e)[0] - offset.top,
                            x = _coordinates(e)[1] - offset.left,
                            easing = "mcsLinearOut";
                        touchMoveY.push(y);
                        touchMoveX.push(x);
                        touchIntent[2] = Math.abs(_coordinates(e)[0] - touchIntent[0]);
                        touchIntent[3] = Math.abs(_coordinates(e)[1] - touchIntent[1]);
                        if (d.overflowed[0]) {
                            var limit = mCSB_dragger[0].parent().height() - mCSB_dragger[0].height(),
                                prevent = dragY - y > 0 && y - dragY > -(limit * d.scrollRatio.y) && (touchIntent[3] * 2 < touchIntent[2] || o.axis === "yx");
                        }
                        if (d.overflowed[1]) {
                            var limitX = mCSB_dragger[1].parent().width() - mCSB_dragger[1].width(),
                                preventX = dragX - x > 0 && x - dragX > -(limitX * d.scrollRatio.x) && (touchIntent[2] * 2 < touchIntent[3] || o.axis === "yx");
                        }
                        if (prevent || preventX) {
                            /* prevent native document scrolling */
                            if (!touchAction) {
                                e.preventDefault();
                            }
                            touchDrag = 1;
                        } else {
                            docDrag = 1;
                            $this.addClass("mCS_touch_action");
                        }
                        if (touchAction) {
                            e.preventDefault();
                        }
                        amount = o.axis === "yx" ? [dragY - y, dragX - x] : o.axis === "x" ? [null, dragX - x] : [dragY - y, null];
                        mCSB_container[0].idleTimer = 250;
                        if (d.overflowed[0]) {
                            _drag(amount[0], durA, easing, "y", "all", true);
                        }
                        if (d.overflowed[1]) {
                            _drag(amount[1], durA, easing, "x", overwrite, true);
                        }
                    }
                }

                function _onTouchstart2(e) {
                    if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
                        touchable = 0;
                        return;
                    }
                    touchable = 1;
                    e.stopImmediatePropagation();
                    _stop($this);
                    startTime = _getTime();
                    var offset = mCustomScrollBox.offset();
                    touchStartY = _coordinates(e)[0] - offset.top;
                    touchStartX = _coordinates(e)[1] - offset.left;
                    touchMoveY = [];
                    touchMoveX = [];
                }

                function _onTouchend(e) {
                    if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
                        return;
                    }
                    draggable = 0;
                    e.stopImmediatePropagation();
                    touchDrag = 0;
                    docDrag = 0;
                    endTime = _getTime();
                    var offset = mCustomScrollBox.offset(),
                        y = _coordinates(e)[0] - offset.top,
                        x = _coordinates(e)[1] - offset.left;
                    if (endTime - runningTime > 30) {
                        return;
                    }
                    speed = 1000 / (endTime - startTime);
                    var easing = "mcsEaseOut",
                        slow = speed < 2.5,
                        diff = slow ? [touchMoveY[touchMoveY.length - 2], touchMoveX[touchMoveX.length - 2]] : [0, 0];
                    distance = slow ? [y - diff[0], x - diff[1]] : [y - touchStartY, x - touchStartX];
                    var absDistance = [Math.abs(distance[0]), Math.abs(distance[1])];
                    speed = slow ? [Math.abs(distance[0] / 4), Math.abs(distance[1] / 4)] : [speed, speed];
                    var a = [Math.abs(mCSB_container[0].offsetTop) - distance[0] * _m(absDistance[0] / speed[0], speed[0]), Math.abs(mCSB_container[0].offsetLeft) - distance[1] * _m(absDistance[1] / speed[1], speed[1])];
                    amount = o.axis === "yx" ? [a[0], a[1]] : o.axis === "x" ? [null, a[1]] : [a[0], null];
                    durB = [absDistance[0] * 4 + o.scrollInertia, absDistance[1] * 4 + o.scrollInertia];
                    var md = parseInt(o.contentTouchScroll) || 0; /* absolute minimum distance required */
                    amount[0] = absDistance[0] > md ? amount[0] : 0;
                    amount[1] = absDistance[1] > md ? amount[1] : 0;
                    if (d.overflowed[0]) {
                        _drag(amount[0], durB[0], easing, "y", overwrite, false);
                    }
                    if (d.overflowed[1]) {
                        _drag(amount[1], durB[1], easing, "x", overwrite, false);
                    }
                }

                function _m(ds, s) {
                    var r = [s * 1.5, s * 2, s / 1.5, s / 2];
                    if (ds > 90) {
                        return s > 4 ? r[0] : r[3];
                    } else if (ds > 60) {
                        return s > 3 ? r[3] : r[2];
                    } else if (ds > 30) {
                        return s > 8 ? r[1] : s > 6 ? r[0] : s > 4 ? s : r[2];
                    } else {
                        return s > 8 ? s : r[3];
                    }
                }

                function _drag(amount, dur, easing, dir, overwrite, drag) {
                    if (!amount) {
                        return;
                    }
                    _scrollTo($this, amount.toString(), {
                        dur: dur,
                        scrollEasing: easing,
                        dir: dir,
                        overwrite: overwrite,
                        drag: drag
                    });
                }
            },
            /* -------------------- */
            /*
            		SELECT TEXT EVENTS
            		scrolls content when text is selected
            		*/
            _selectable = function _selectable() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    seq = d.sequential,
                    namespace = pluginPfx + "_" + d.idx,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    action;
                mCSB_container.bind("mousedown." + namespace, function(e) {
                    if (touchable) {
                        return;
                    }
                    if (!action) {
                        action = 1;
                        touchActive = true;
                    }
                }).add(document).bind("mousemove." + namespace, function(e) {
                    if (!touchable && action && _sel()) {
                        var offset = mCSB_container.offset(),
                            y = _coordinates(e)[0] - offset.top + mCSB_container[0].offsetTop,
                            x = _coordinates(e)[1] - offset.left + mCSB_container[0].offsetLeft;
                        if (y > 0 && y < wrapper.height() && x > 0 && x < wrapper.width()) {
                            if (seq.step) {
                                _seq("off", null, "stepped");
                            }
                        } else {
                            if (o.axis !== "x" && d.overflowed[0]) {
                                if (y < 0) {
                                    _seq("on", 38);
                                } else if (y > wrapper.height()) {
                                    _seq("on", 40);
                                }
                            }
                            if (o.axis !== "y" && d.overflowed[1]) {
                                if (x < 0) {
                                    _seq("on", 37);
                                } else if (x > wrapper.width()) {
                                    _seq("on", 39);
                                }
                            }
                        }
                    }
                }).bind("mouseup." + namespace + " dragend." + namespace, function(e) {
                    if (touchable) {
                        return;
                    }
                    if (action) {
                        action = 0;
                        _seq("off", null);
                    }
                    touchActive = false;
                });

                function _sel() {
                    return window.getSelection ? window.getSelection().toString() : document.selection && document.selection.type != "Control" ? document.selection.createRange().text : 0;
                }

                function _seq(a, c, s) {
                    seq.type = s && action ? "stepped" : "stepless";
                    seq.scrollAmount = 10;
                    _sequentialScroll($this, a, c, "mcsLinearOut", s ? 60 : null);
                }
            },
            /* -------------------- */
            /*
            		MOUSE WHEEL EVENT
            		scrolls content via mouse-wheel
            		via mouse-wheel plugin (https://github.com/brandonaaron/jquery-mousewheel)
            		*/
            _mousewheel = function _mousewheel() {
                if (!$(this).data(pluginPfx)) {
                    return;
                } /* Check if the scrollbar is ready to use mousewheel events (issue: #185) */
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
                    iframe = $("#mCSB_" + d.idx + "_container").find("iframe");
                if (iframe.length) {
                    iframe.each(function() {
                        $(this).bind("load", function() {
                            /* bind events on accessible iframes */
                            if (_canAccessIFrame(this)) {
                                $(this.contentDocument || this.contentWindow.document).bind("mousewheel." + namespace, function(e, delta) {
                                    _onMousewheel(e, delta);
                                });
                            }
                        });
                    });
                }
                mCustomScrollBox.bind("mousewheel." + namespace, function(e, delta) {
                    _onMousewheel(e, delta);
                });

                function _onMousewheel(e, delta) {
                    _stop($this);
                    if (_disableMousewheel($this, e.target)) {
                        return;
                    } /* disables mouse-wheel when hovering specific elements */
                    var deltaFactor = o.mouseWheel.deltaFactor !== "auto" ? parseInt(o.mouseWheel.deltaFactor) : oldIE && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100,
                        dur = o.scrollInertia;
                    if (o.axis === "x" || o.mouseWheel.axis === "x") {
                        var dir = "x",
                            px = [Math.round(deltaFactor * d.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
                            amount = o.mouseWheel.scrollAmount !== "auto" ? px[1] : px[0] >= mCustomScrollBox.width() ? mCustomScrollBox.width() * 0.9 : px[0],
                            contentPos = Math.abs($("#mCSB_" + d.idx + "_container")[0].offsetLeft),
                            draggerPos = mCSB_dragger[1][0].offsetLeft,
                            limit = mCSB_dragger[1].parent().width() - mCSB_dragger[1].width(),
                            dlt = o.mouseWheel.axis === "y" ? e.deltaY || delta : e.deltaX;
                    } else {
                        var dir = "y",
                            px = [Math.round(deltaFactor * d.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)],
                            amount = o.mouseWheel.scrollAmount !== "auto" ? px[1] : px[0] >= mCustomScrollBox.height() ? mCustomScrollBox.height() * 0.9 : px[0],
                            contentPos = Math.abs($("#mCSB_" + d.idx + "_container")[0].offsetTop),
                            draggerPos = mCSB_dragger[0][0].offsetTop,
                            limit = mCSB_dragger[0].parent().height() - mCSB_dragger[0].height(),
                            dlt = e.deltaY || delta;
                    }
                    if (dir === "y" && !d.overflowed[0] || dir === "x" && !d.overflowed[1]) {
                        return;
                    }
                    if (o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) {
                        dlt = -dlt;
                    }
                    if (o.mouseWheel.normalizeDelta) {
                        dlt = dlt < 0 ? -1 : 1;
                    }
                    if (dlt > 0 && draggerPos !== 0 || dlt < 0 && draggerPos !== limit || o.mouseWheel.preventDefault) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                    if (e.deltaFactor < 5 && !o.mouseWheel.normalizeDelta) { //very low deltaFactor values mean some kind of delta acceleration (e.g. osx trackpad), so adjusting scrolling accordingly
                        amount = e.deltaFactor;
                        dur = 17;
                    }
                    _scrollTo($this, (contentPos - dlt * amount).toString(), {
                        dir: dir,
                        dur: dur
                    });
                }
            },
            /* -------------------- */
            /* checks if iframe can be accessed */
            _canAccessIFrameCache = new Object(),
            _canAccessIFrame = function _canAccessIFrame(iframe) {
                var result = false,
                    cacheKey = false,
                    html = null;
                if (iframe === undefined) {
                    cacheKey = "#empty";
                } else if ($(iframe).attr("id") !== undefined) {
                    cacheKey = $(iframe).attr("id");
                }
                if (cacheKey !== false && _canAccessIFrameCache[cacheKey] !== undefined) {
                    return _canAccessIFrameCache[cacheKey];
                }
                if (!iframe) {
                    try {
                        var doc = top.document;
                        html = doc.body.innerHTML;
                    } catch (err) {
                        /* do nothing */
                    }
                    result = html !== null;
                } else {
                    try {
                        var doc = iframe.contentDocument || iframe.contentWindow.document;
                        html = doc.body.innerHTML;
                    } catch (err) {
                        /* do nothing */
                    }
                    result = html !== null;
                }
                if (cacheKey !== false) {
                    _canAccessIFrameCache[cacheKey] = result;
                }
                return result;
            },
            /* -------------------- */
            /* switches iframe's pointer-events property (drag, mousewheel etc. over cross-domain iframes) */
            _iframe = function _iframe(evt) {
                var el = this.find("iframe");
                if (!el.length) {
                    return;
                } /* check if content contains iframes */
                var val = !evt ? "none" : "auto";
                el.css("pointer-events", val); /* for IE11, iframe's display property should not be "block" */
            },
            /* -------------------- */
            /* disables mouse-wheel when hovering specific elements like select, datalist etc. */
            _disableMousewheel = function _disableMousewheel(el, target) {
                var tag = target.nodeName.toLowerCase(),
                    tags = el.data(pluginPfx).opt.mouseWheel.disableOver,
                    /* elements that require focus */
                    focusTags = ["select", "textarea"];
                return $.inArray(tag, tags) > -1 && !($.inArray(tag, focusTags) > -1 && !$(target).is(":focus"));
            },
            /* -------------------- */
            /*
            		DRAGGER RAIL CLICK EVENT
            		scrolls content via dragger rail
            		*/
            _draggerRail = function _draggerRail() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    namespace = pluginPfx + "_" + d.idx,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    mCSB_draggerContainer = $(".mCSB_" + d.idx + "_scrollbar ." + classes[12]),
                    clickable;
                mCSB_draggerContainer.bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, function(e) {
                    touchActive = true;
                    if (!$(e.target).hasClass("mCSB_dragger")) {
                        clickable = 1;
                    }
                }).bind("touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace, function(e) {
                    touchActive = false;
                }).bind("click." + namespace, function(e) {
                    if (!clickable) {
                        return;
                    }
                    clickable = 0;
                    if ($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")) {
                        _stop($this);
                        var el = $(this),
                            mCSB_dragger = el.find(".mCSB_dragger");
                        if (el.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!d.overflowed[1]) {
                                return;
                            }
                            var dir = "x",
                                clickDir = e.pageX > mCSB_dragger.offset().left ? -1 : 1,
                                to = Math.abs(mCSB_container[0].offsetLeft) - clickDir * (wrapper.width() * 0.9);
                        } else {
                            if (!d.overflowed[0]) {
                                return;
                            }
                            var dir = "y",
                                clickDir = e.pageY > mCSB_dragger.offset().top ? -1 : 1,
                                to = Math.abs(mCSB_container[0].offsetTop) - clickDir * (wrapper.height() * 0.9);
                        }
                        _scrollTo($this, to.toString(), {
                            dir: dir,
                            scrollEasing: "mcsEaseInOut"
                        });
                    }
                });
            },
            /* -------------------- */
            /*
            		FOCUS EVENT
            		scrolls content via element focus (e.g. clicking an input, pressing TAB key etc.)
            		*/
            _focus = function _focus() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent();
                mCSB_container.bind("focusin." + namespace, function(e) {
                    var el = $(document.activeElement),
                        nested = mCSB_container.find(".mCustomScrollBox").length,
                        dur = 0;
                    if (!el.is(o.advanced.autoScrollOnFocus)) {
                        return;
                    }
                    _stop($this);
                    clearTimeout($this[0]._focusTimeout);
                    $this[0]._focusTimer = nested ? (dur + 17) * nested : 0;
                    $this[0]._focusTimeout = setTimeout(function() {
                        var to = [_childPos(el)[0], _childPos(el)[1]],
                            contentPos = [mCSB_container[0].offsetTop, mCSB_container[0].offsetLeft],
                            isVisible = [contentPos[0] + to[0] >= 0 && contentPos[0] + to[0] < wrapper.height() - el.outerHeight(false), contentPos[1] + to[1] >= 0 && contentPos[0] + to[1] < wrapper.width() - el.outerWidth(false)],
                            overwrite = o.axis === "yx" && !isVisible[0] && !isVisible[1] ? "none" : "all";
                        if (o.axis !== "x" && !isVisible[0]) {
                            _scrollTo($this, to[0].toString(), {
                                dir: "y",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: overwrite,
                                dur: dur
                            });
                        }
                        if (o.axis !== "y" && !isVisible[1]) {
                            _scrollTo($this, to[1].toString(), {
                                dir: "x",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: overwrite,
                                dur: dur
                            });
                        }
                    }, $this[0]._focusTimer);
                });
            },
            /* -------------------- */
            /* sets content wrapper scrollTop/scrollLeft always to 0 */
            _wrapperScroll = function _wrapperScroll() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    namespace = pluginPfx + "_" + d.idx,
                    wrapper = $("#mCSB_" + d.idx + "_container").parent();
                wrapper.bind("scroll." + namespace, function(e) {
                    if (wrapper.scrollTop() !== 0 || wrapper.scrollLeft() !== 0) {
                        $(".mCSB_" + d.idx + "_scrollbar").css("visibility", "hidden"); /* hide scrollbar(s) */
                    }
                });
            },
            /* -------------------- */
            /*
            		BUTTONS EVENTS
            		scrolls content via up, down, left and right buttons
            		*/
            _buttons = function _buttons() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    seq = d.sequential,
                    namespace = pluginPfx + "_" + d.idx,
                    sel = ".mCSB_" + d.idx + "_scrollbar",
                    btn = $(sel + ">a");
                btn.bind("contextmenu." + namespace, function(e) {
                    e.preventDefault(); //prevent right click
                }).bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace + " mouseup." + namespace + " touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace + " mouseout." + namespace + " pointerout." + namespace + " MSPointerOut." + namespace + " click." + namespace, function(e) {
                    e.preventDefault();
                    if (!_mouseBtnLeft(e)) {
                        return;
                    } /* left mouse button only */
                    var btnClass = $(this).attr("class");
                    seq.type = o.scrollButtons.scrollType;
                    switch (e.type) {
                        case "mousedown":
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                            if (seq.type === "stepped") {
                                return;
                            }
                            touchActive = true;
                            d.tweenRunning = false;
                            _seq("on", btnClass);
                            break;
                        case "mouseup":
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseout":
                        case "pointerout":
                        case "MSPointerOut":
                            if (seq.type === "stepped") {
                                return;
                            }
                            touchActive = false;
                            if (seq.dir) {
                                _seq("off", btnClass);
                            }
                            break;
                        case "click":
                            if (seq.type !== "stepped" || d.tweenRunning) {
                                return;
                            }
                            _seq("on", btnClass);
                            break;
                    }

                    function _seq(a, c) {
                        seq.scrollAmount = o.scrollButtons.scrollAmount;
                        _sequentialScroll($this, a, c);
                    }
                });
            },
            /* -------------------- */
            /*
            		KEYBOARD EVENTS
            		scrolls content via keyboard
            		Keys: up arrow, down arrow, left arrow, right arrow, PgUp, PgDn, Home, End
            		*/
            _keyboard = function _keyboard() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    seq = d.sequential,
                    namespace = pluginPfx + "_" + d.idx,
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    editables = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    iframe = mCSB_container.find("iframe"),
                    events = ["blur." + namespace + " keydown." + namespace + " keyup." + namespace];
                if (iframe.length) {
                    iframe.each(function() {
                        $(this).bind("load", function() {
                            /* bind events on accessible iframes */
                            if (_canAccessIFrame(this)) {
                                $(this.contentDocument || this.contentWindow.document).bind(events[0], function(e) {
                                    _onKeyboard(e);
                                });
                            }
                        });
                    });
                }
                mCustomScrollBox.attr("tabindex", "0").bind(events[0], function(e) {
                    _onKeyboard(e);
                });

                function _onKeyboard(e) {
                    switch (e.type) {
                        case "blur":
                            if (d.tweenRunning && seq.dir) {
                                _seq("off", null);
                            }
                            break;
                        case "keydown":
                        case "keyup":
                            var code = e.keyCode ? e.keyCode : e.which,
                                action = "on";
                            if (o.axis !== "x" && (code === 38 || code === 40) || o.axis !== "y" && (code === 37 || code === 39)) {
                                /* up (38), down (40), left (37), right (39) arrows */
                                if ((code === 38 || code === 40) && !d.overflowed[0] || (code === 37 || code === 39) && !d.overflowed[1]) {
                                    return;
                                }
                                if (e.type === "keyup") {
                                    action = "off";
                                }
                                if (!$(document.activeElement).is(editables)) {
                                    e.preventDefault();
                                    e.stopImmediatePropagation();
                                    _seq(action, code);
                                }
                            } else if (code === 33 || code === 34) {
                                /* PgUp (33), PgDn (34) */
                                if (d.overflowed[0] || d.overflowed[1]) {
                                    e.preventDefault();
                                    e.stopImmediatePropagation();
                                }
                                if (e.type === "keyup") {
                                    _stop($this);
                                    var keyboardDir = code === 34 ? -1 : 1;
                                    if (o.axis === "x" || o.axis === "yx" && d.overflowed[1] && !d.overflowed[0]) {
                                        var dir = "x",
                                            to = Math.abs(mCSB_container[0].offsetLeft) - keyboardDir * (wrapper.width() * 0.9);
                                    } else {
                                        var dir = "y",
                                            to = Math.abs(mCSB_container[0].offsetTop) - keyboardDir * (wrapper.height() * 0.9);
                                    }
                                    _scrollTo($this, to.toString(), {
                                        dir: dir,
                                        scrollEasing: "mcsEaseInOut"
                                    });
                                }
                            } else if (code === 35 || code === 36) {
                                /* End (35), Home (36) */
                                if (!$(document.activeElement).is(editables)) {
                                    if (d.overflowed[0] || d.overflowed[1]) {
                                        e.preventDefault();
                                        e.stopImmediatePropagation();
                                    }
                                    if (e.type === "keyup") {
                                        if (o.axis === "x" || o.axis === "yx" && d.overflowed[1] && !d.overflowed[0]) {
                                            var dir = "x",
                                                to = code === 35 ? Math.abs(wrapper.width() - mCSB_container.outerWidth(false)) : 0;
                                        } else {
                                            var dir = "y",
                                                to = code === 35 ? Math.abs(wrapper.height() - mCSB_container.outerHeight(false)) : 0;
                                        }
                                        _scrollTo($this, to.toString(), {
                                            dir: dir,
                                            scrollEasing: "mcsEaseInOut"
                                        });
                                    }
                                }
                            }
                            break;
                    }

                    function _seq(a, c) {
                        seq.type = o.keyboard.scrollType;
                        seq.scrollAmount = o.keyboard.scrollAmount;
                        if (seq.type === "stepped" && d.tweenRunning) {
                            return;
                        }
                        _sequentialScroll($this, a, c);
                    }
                }
            },
            /* -------------------- */
            /* scrolls content sequentially (used when scrolling via buttons, keyboard arrows etc.) */
            _sequentialScroll = function _sequentialScroll(el, action, trigger, e, s) {
                var d = el.data(pluginPfx),
                    o = d.opt,
                    seq = d.sequential,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    once = seq.type === "stepped" ? true : false,
                    steplessSpeed = o.scrollInertia < 26 ? 26 : o.scrollInertia,
                    /* 26/1.5=17 */
                    steppedSpeed = o.scrollInertia < 1 ? 17 : o.scrollInertia;
                switch (action) {
                    case "on":
                        seq.dir = [trigger === classes[16] || trigger === classes[15] || trigger === 39 || trigger === 37 ? "x" : "y", trigger === classes[13] || trigger === classes[15] || trigger === 38 || trigger === 37 ? -1 : 1];
                        _stop(el);
                        if (_isNumeric(trigger) && seq.type === "stepped") {
                            return;
                        }
                        _on(once);
                        break;
                    case "off":
                        _off();
                        if (once || d.tweenRunning && seq.dir) {
                            _on(true);
                        }
                        break;
                } /* starts sequence */
                function _on(once) {
                    if (o.snapAmount) {
                        seq.scrollAmount = !(o.snapAmount instanceof Array) ? o.snapAmount : seq.dir[0] === "x" ? o.snapAmount[1] : o.snapAmount[0];
                    } /* scrolling snapping */
                    var c = seq.type !== "stepped",
                        /* continuous scrolling */
                        t = s ? s : !once ? 1000 / 60 : c ? steplessSpeed / 1.5 : steppedSpeed,
                        /* timer */
                        m = !once ? 2.5 : c ? 7.5 : 40,
                        /* multiplier */
                        contentPos = [Math.abs(mCSB_container[0].offsetTop), Math.abs(mCSB_container[0].offsetLeft)],
                        ratio = [d.scrollRatio.y > 10 ? 10 : d.scrollRatio.y, d.scrollRatio.x > 10 ? 10 : d.scrollRatio.x],
                        amount = seq.dir[0] === "x" ? contentPos[1] + seq.dir[1] * (ratio[1] * m) : contentPos[0] + seq.dir[1] * (ratio[0] * m),
                        px = seq.dir[0] === "x" ? contentPos[1] + seq.dir[1] * parseInt(seq.scrollAmount) : contentPos[0] + seq.dir[1] * parseInt(seq.scrollAmount),
                        to = seq.scrollAmount !== "auto" ? px : amount,
                        easing = e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",
                        onComplete = !once ? false : true;
                    if (once && t < 17) {
                        to = seq.dir[0] === "x" ? contentPos[1] : contentPos[0];
                    }
                    _scrollTo(el, to.toString(), {
                        dir: seq.dir[0],
                        scrollEasing: easing,
                        dur: t,
                        onComplete: onComplete
                    });
                    if (once) {
                        seq.dir = false;
                        return;
                    }
                    clearTimeout(seq.step);
                    seq.step = setTimeout(function() {
                        _on();
                    }, t);
                } /* stops sequence */
                function _off() {
                    clearTimeout(seq.step);
                    _delete(seq, "step");
                    _stop(el);
                }
            },
            /* -------------------- */
            /* returns a yx array from value */
            _arr = function _arr(val) {
                var o = $(this).data(pluginPfx).opt,
                    vals = [];
                if (typeof val === "function") {
                    val = val();
                } /* check if the value is a single anonymous function */ /* check if value is object or array, its length and create an array with yx values */
                if (!(val instanceof Array)) {
                    /* object value (e.g. {y:"100",x:"100"}, 100 etc.) */
                    vals[0] = val.y ? val.y : val.x || o.axis === "x" ? null : val;
                    vals[1] = val.x ? val.x : val.y || o.axis === "y" ? null : val;
                } else {
                    /* array value (e.g. [100,100]) */
                    vals = val.length > 1 ? [val[0], val[1]] : o.axis === "x" ? [null, val[0]] : [val[0], null];
                } /* check if array values are anonymous functions */
                if (typeof vals[0] === "function") {
                    vals[0] = vals[0]();
                }
                if (typeof vals[1] === "function") {
                    vals[1] = vals[1]();
                }
                return vals;
            },
            /* -------------------- */
            /* translates values (e.g. "top", 100, "100px", "#id") to actual scroll-to positions */
            _to = function _to(val, dir) {
                if (val == null || typeof val == "undefined") {
                    return;
                }
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    t = typeof val === "undefined" ? "undefined" : _typeof(val);
                if (!dir) {
                    dir = o.axis === "x" ? "x" : "y";
                }
                var contentLength = dir === "x" ? mCSB_container.outerWidth(false) - wrapper.width() : mCSB_container.outerHeight(false) - wrapper.height(),
                    contentPos = dir === "x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,
                    cssProp = dir === "x" ? "left" : "top";
                switch (t) {
                    case "function":
                        /* this currently is not used. Consider removing it */
                        return val();
                        break;
                    case "object":
                        /* js/jquery object */
                        var obj = val.jquery ? val : $(val);
                        if (!obj.length) {
                            return;
                        }
                        return dir === "x" ? _childPos(obj)[1] : _childPos(obj)[0];
                        break;
                    case "string":
                    case "number":
                        if (_isNumeric(val)) {
                            /* numeric value */
                            return Math.abs(val);
                        } else if (val.indexOf("%") !== -1) {
                            /* percentage value */
                            return Math.abs(contentLength * parseInt(val) / 100);
                        } else if (val.indexOf("-=") !== -1) {
                            /* decrease value */
                            return Math.abs(contentPos - parseInt(val.split("-=")[1]));
                        } else if (val.indexOf("+=") !== -1) {
                            /* inrease value */
                            var p = contentPos + parseInt(val.split("+=")[1]);
                            return p >= 0 ? 0 : Math.abs(p);
                        } else if (val.indexOf("px") !== -1 && _isNumeric(val.split("px")[0])) {
                            /* pixels string value (e.g. "100px") */
                            return Math.abs(val.split("px")[0]);
                        } else {
                            if (val === "top" || val === "left") {
                                /* special strings */
                                return 0;
                            } else if (val === "bottom") {
                                return Math.abs(wrapper.height() - mCSB_container.outerHeight(false));
                            } else if (val === "right") {
                                return Math.abs(wrapper.width() - mCSB_container.outerWidth(false));
                            } else if (val === "first" || val === "last") {
                                var obj = mCSB_container.find(":" + val);
                                return dir === "x" ? _childPos(obj)[1] : _childPos(obj)[0];
                            } else {
                                if ($(val).length) {
                                    /* jquery selector */
                                    return dir === "x" ? _childPos($(val))[1] : _childPos($(val))[0];
                                } else {
                                    /* other values (e.g. "100em") */
                                    mCSB_container.css(cssProp, val);
                                    methods.update.call(null, $this[0]);
                                    return;
                                }
                            }
                        }
                        break;
                }
            },
            /* -------------------- */
            /* calls the update method automatically */
            _autoUpdate = function _autoUpdate(rem) {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCSB_container = $("#mCSB_" + d.idx + "_container");
                if (rem) {
                    /*
                    				removes autoUpdate timer
                    				usage: _autoUpdate.call(this,"remove");
                    				*/
                    clearTimeout(mCSB_container[0].autoUpdate);
                    _delete(mCSB_container[0], "autoUpdate");
                    return;
                }
                upd();

                function upd() {
                    clearTimeout(mCSB_container[0].autoUpdate);
                    if ($this.parents("html").length === 0) {
                        /* check element in dom tree */
                        $this = null;
                        return;
                    }
                    mCSB_container[0].autoUpdate = setTimeout(function() {
                        /* update on specific selector(s) length and size change */
                        if (o.advanced.updateOnSelectorChange) {
                            d.poll.change.n = sizesSum();
                            if (d.poll.change.n !== d.poll.change.o) {
                                d.poll.change.o = d.poll.change.n;
                                doUpd(3);
                                return;
                            }
                        } /* update on main element and scrollbar size changes */
                        if (o.advanced.updateOnContentResize) {
                            d.poll.size.n = $this[0].scrollHeight + $this[0].scrollWidth + mCSB_container[0].offsetHeight + $this[0].offsetHeight + $this[0].offsetWidth;
                            if (d.poll.size.n !== d.poll.size.o) {
                                d.poll.size.o = d.poll.size.n;
                                doUpd(1);
                                return;
                            }
                        } /* update on image load */
                        if (o.advanced.updateOnImageLoad) {
                            if (!(o.advanced.updateOnImageLoad === "auto" && o.axis === "y")) { //by default, it doesn't run on vertical content
                                d.poll.img.n = mCSB_container.find("img").length;
                                if (d.poll.img.n !== d.poll.img.o) {
                                    d.poll.img.o = d.poll.img.n;
                                    mCSB_container.find("img").each(function() {
                                        imgLoader(this);
                                    });
                                    return;
                                }
                            }
                        }
                        if (o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad) {
                            upd();
                        }
                    }, o.advanced.autoUpdateTimeout);
                } /* a tiny image loader */
                function imgLoader(el) {
                    if ($(el).hasClass(classes[2])) {
                        doUpd();
                        return;
                    }
                    var img = new Image();

                    function createDelegate(contextObject, delegateMethod) {
                        return function() {
                            return delegateMethod.apply(contextObject, arguments);
                        };
                    }

                    function imgOnLoad() {
                        this.onload = null;
                        $(el).addClass(classes[2]);
                        doUpd(2);
                    }
                    img.onload = createDelegate(img, imgOnLoad);
                    img.src = el.src;
                } /* returns the total height and width sum of all elements matching the selector */
                function sizesSum() {
                    if (o.advanced.updateOnSelectorChange === true) {
                        o.advanced.updateOnSelectorChange = "*";
                    }
                    var total = 0,
                        sel = mCSB_container.find(o.advanced.updateOnSelectorChange);
                    if (o.advanced.updateOnSelectorChange && sel.length > 0) {
                        sel.each(function() {
                            total += this.offsetHeight + this.offsetWidth;
                        });
                    }
                    return total;
                } /* calls the update method */
                function doUpd(cb) {
                    clearTimeout(mCSB_container[0].autoUpdate);
                    methods.update.call(null, $this[0], cb);
                }
            },
            /* -------------------- */
            /* snaps scrolling to a multiple of a pixels number */
            _snapAmount = function _snapAmount(to, amount, offset) {
                return Math.round(to / amount) * amount - offset;
            },
            /* -------------------- */
            /* stops content and scrollbar animations */
            _stop = function _stop(el) {
                var d = el.data(pluginPfx),
                    sel = $("#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper,#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal");
                sel.each(function() {
                    _stopTween.call(this);
                });
            },
            /* -------------------- */
            /*
            		ANIMATES CONTENT
            		This is where the actual scrolling happens
            		*/
            _scrollTo = function _scrollTo(el, to, options) {
                var d = el.data(pluginPfx),
                    o = d.opt,
                    defaults = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: false,
                        dur: o.scrollInertia,
                        overwrite: "all",
                        callbacks: true,
                        onStart: true,
                        onUpdate: true,
                        onComplete: true
                    },
                    options = $.extend(defaults, options),
                    dur = [options.dur, options.drag ? 0 : options.dur],
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    totalScrollOffsets = o.callbacks.onTotalScrollOffset ? _arr.call(el, o.callbacks.onTotalScrollOffset) : [0, 0],
                    totalScrollBackOffsets = o.callbacks.onTotalScrollBackOffset ? _arr.call(el, o.callbacks.onTotalScrollBackOffset) : [0, 0];
                d.trigger = options.trigger;
                if (wrapper.scrollTop() !== 0 || wrapper.scrollLeft() !== 0) {
                    /* always reset scrollTop/Left */
                    $(".mCSB_" + d.idx + "_scrollbar").css("visibility", "visible");
                    wrapper.scrollTop(0).scrollLeft(0);
                }
                if (to === "_resetY" && !d.contentReset.y) {
                    /* callbacks: onOverflowYNone */
                    if (_cb("onOverflowYNone")) {
                        o.callbacks.onOverflowYNone.call(el[0]);
                    }
                    d.contentReset.y = 1;
                }
                if (to === "_resetX" && !d.contentReset.x) {
                    /* callbacks: onOverflowXNone */
                    if (_cb("onOverflowXNone")) {
                        o.callbacks.onOverflowXNone.call(el[0]);
                    }
                    d.contentReset.x = 1;
                }
                if (to === "_resetY" || to === "_resetX") {
                    return;
                }
                if ((d.contentReset.y || !el[0].mcs) && d.overflowed[0]) {
                    /* callbacks: onOverflowY */
                    if (_cb("onOverflowY")) {
                        o.callbacks.onOverflowY.call(el[0]);
                    }
                    d.contentReset.x = null;
                }
                if ((d.contentReset.x || !el[0].mcs) && d.overflowed[1]) {
                    /* callbacks: onOverflowX */
                    if (_cb("onOverflowX")) {
                        o.callbacks.onOverflowX.call(el[0]);
                    }
                    d.contentReset.x = null;
                }
                if (o.snapAmount) {
                    /* scrolling snapping */
                    var snapAmount = !(o.snapAmount instanceof Array) ? o.snapAmount : options.dir === "x" ? o.snapAmount[1] : o.snapAmount[0];
                    to = _snapAmount(to, snapAmount, o.snapOffset);
                }
                switch (options.dir) {
                    case "x":
                        var mCSB_dragger = $("#mCSB_" + d.idx + "_dragger_horizontal"),
                            property = "left",
                            contentPos = mCSB_container[0].offsetLeft,
                            limit = [mCustomScrollBox.width() - mCSB_container.outerWidth(false), mCSB_dragger.parent().width() - mCSB_dragger.width()],
                            scrollTo = [to, to === 0 ? 0 : to / d.scrollRatio.x],
                            tso = totalScrollOffsets[1],
                            tsbo = totalScrollBackOffsets[1],
                            totalScrollOffset = tso > 0 ? tso / d.scrollRatio.x : 0,
                            totalScrollBackOffset = tsbo > 0 ? tsbo / d.scrollRatio.x : 0;
                        break;
                    case "y":
                        var mCSB_dragger = $("#mCSB_" + d.idx + "_dragger_vertical"),
                            property = "top",
                            contentPos = mCSB_container[0].offsetTop,
                            limit = [mCustomScrollBox.height() - mCSB_container.outerHeight(false), mCSB_dragger.parent().height() - mCSB_dragger.height()],
                            scrollTo = [to, to === 0 ? 0 : to / d.scrollRatio.y],
                            tso = totalScrollOffsets[0],
                            tsbo = totalScrollBackOffsets[0],
                            totalScrollOffset = tso > 0 ? tso / d.scrollRatio.y : 0,
                            totalScrollBackOffset = tsbo > 0 ? tsbo / d.scrollRatio.y : 0;
                        break;
                }
                if (scrollTo[1] < 0 || scrollTo[0] === 0 && scrollTo[1] === 0) {
                    scrollTo = [0, 0];
                } else if (scrollTo[1] >= limit[1]) {
                    scrollTo = [limit[0], limit[1]];
                } else {
                    scrollTo[0] = -scrollTo[0];
                }
                if (!el[0].mcs) {
                    _mcs(); /* init mcs object (once) to make it available before callbacks */
                    if (_cb("onInit")) {
                        o.callbacks.onInit.call(el[0]);
                    } /* callbacks: onInit */
                }
                clearTimeout(mCSB_container[0].onCompleteTimeout);
                _tweenTo(mCSB_dragger[0], property, Math.round(scrollTo[1]), dur[1], options.scrollEasing);
                if (!d.tweenRunning && (contentPos === 0 && scrollTo[0] >= 0 || contentPos === limit[0] && scrollTo[0] <= limit[0])) {
                    return;
                }
                _tweenTo(mCSB_container[0], property, Math.round(scrollTo[0]), dur[0], options.scrollEasing, options.overwrite, {
                    onStart: function onStart() {
                        if (options.callbacks && options.onStart && !d.tweenRunning) {
                            /* callbacks: onScrollStart */
                            if (_cb("onScrollStart")) {
                                _mcs();
                                o.callbacks.onScrollStart.call(el[0]);
                            }
                            d.tweenRunning = true;
                            _onDragClasses(mCSB_dragger);
                            d.cbOffsets = _cbOffsets();
                        }
                    },
                    onUpdate: function onUpdate() {
                        if (options.callbacks && options.onUpdate) {
                            /* callbacks: whileScrolling */
                            if (_cb("whileScrolling")) {
                                _mcs();
                                o.callbacks.whileScrolling.call(el[0]);
                            }
                        }
                    },
                    onComplete: function onComplete() {
                        if (options.callbacks && options.onComplete) {
                            if (o.axis === "yx") {
                                clearTimeout(mCSB_container[0].onCompleteTimeout);
                            }
                            var t = mCSB_container[0].idleTimer || 0;
                            mCSB_container[0].onCompleteTimeout = setTimeout(function() {
                                /* callbacks: onScroll, onTotalScroll, onTotalScrollBack */
                                if (_cb("onScroll")) {
                                    _mcs();
                                    o.callbacks.onScroll.call(el[0]);
                                }
                                if (_cb("onTotalScroll") && scrollTo[1] >= limit[1] - totalScrollOffset && d.cbOffsets[0]) {
                                    _mcs();
                                    o.callbacks.onTotalScroll.call(el[0]);
                                }
                                if (_cb("onTotalScrollBack") && scrollTo[1] <= totalScrollBackOffset && d.cbOffsets[1]) {
                                    _mcs();
                                    o.callbacks.onTotalScrollBack.call(el[0]);
                                }
                                d.tweenRunning = false;
                                mCSB_container[0].idleTimer = 0;
                                _onDragClasses(mCSB_dragger, "hide");
                            }, t);
                        }
                    }
                }); /* checks if callback function exists */
                function _cb(cb) {
                    return d && o.callbacks[cb] && typeof o.callbacks[cb] === "function";
                } /* checks whether callback offsets always trigger */
                function _cbOffsets() {
                    return [o.callbacks.alwaysTriggerOffsets || contentPos >= limit[0] + tso, o.callbacks.alwaysTriggerOffsets || contentPos <= -tsbo];
                }
                /*
                			populates object with useful values for the user
                			values:
                				content: this.mcs.content
                				content top position: this.mcs.top
                				content left position: this.mcs.left
                				dragger top position: this.mcs.draggerTop
                				dragger left position: this.mcs.draggerLeft
                				scrolling y percentage: this.mcs.topPct
                				scrolling x percentage: this.mcs.leftPct
                				scrolling direction: this.mcs.direction
                			*/
                function _mcs() {
                    var cp = [mCSB_container[0].offsetTop, mCSB_container[0].offsetLeft],
                        /* content position */
                        dp = [mCSB_dragger[0].offsetTop, mCSB_dragger[0].offsetLeft],
                        /* dragger position */
                        cl = [mCSB_container.outerHeight(false), mCSB_container.outerWidth(false)],
                        /* content length */
                        pl = [mCustomScrollBox.height(), mCustomScrollBox.width()]; /* content parent length */
                    el[0].mcs = {
                        content: mCSB_container,
                        /* original content wrapper as jquery object */
                        top: cp[0],
                        left: cp[1],
                        draggerTop: dp[0],
                        draggerLeft: dp[1],
                        topPct: Math.round(100 * Math.abs(cp[0]) / (Math.abs(cl[0]) - pl[0])),
                        leftPct: Math.round(100 * Math.abs(cp[1]) / (Math.abs(cl[1]) - pl[1])),
                        direction: options.dir
                    };
                    /*
                    				this refers to the original element containing the scrollbar(s)
                    				usage: this.mcs.top, this.mcs.leftPct etc.
                    				*/
                }
            },
            /* -------------------- */
            /*
            		CUSTOM JAVASCRIPT ANIMATION TWEEN
            		Lighter and faster than jquery animate() and css transitions
            		Animates top/left properties and includes easings
            		*/
            _tweenTo = function _tweenTo(el, prop, to, duration, easing, overwrite, callbacks) {
                if (!el._mTween) {
                    el._mTween = {
                        top: {},
                        left: {}
                    };
                }
                var callbacks = callbacks || {},
                    onStart = callbacks.onStart || function() {},
                    onUpdate = callbacks.onUpdate || function() {},
                    onComplete = callbacks.onComplete || function() {},
                    startTime = _getTime(),
                    _delay, progress = 0,
                    from = el.offsetTop,
                    elStyle = el.style,
                    _request, tobj = el._mTween[prop];
                if (prop === "left") {
                    from = el.offsetLeft;
                }
                var diff = to - from;
                tobj.stop = 0;
                if (overwrite !== "none") {
                    _cancelTween();
                }
                _startTween();

                function _step() {
                    if (tobj.stop) {
                        return;
                    }
                    if (!progress) {
                        onStart.call();
                    }
                    progress = _getTime() - startTime;
                    _tween();
                    if (progress >= tobj.time) {
                        tobj.time = progress > tobj.time ? progress + _delay - (progress - tobj.time) : progress + _delay - 1;
                        if (tobj.time < progress + 1) {
                            tobj.time = progress + 1;
                        }
                    }
                    if (tobj.time < duration) {
                        tobj.id = _request(_step);
                    } else {
                        onComplete.call();
                    }
                }

                function _tween() {
                    if (duration > 0) {
                        tobj.currVal = _ease(tobj.time, from, diff, duration, easing);
                        elStyle[prop] = Math.round(tobj.currVal) + "px";
                    } else {
                        elStyle[prop] = to + "px";
                    }
                    onUpdate.call();
                }

                function _startTween() {
                    _delay = 1000 / 60;
                    tobj.time = progress + _delay;
                    _request = !window.requestAnimationFrame ? function(f) {
                        _tween();
                        return setTimeout(f, 0.01);
                    } : window.requestAnimationFrame;
                    tobj.id = _request(_step);
                }

                function _cancelTween() {
                    if (tobj.id == null) {
                        return;
                    }
                    if (!window.requestAnimationFrame) {
                        clearTimeout(tobj.id);
                    } else {
                        window.cancelAnimationFrame(tobj.id);
                    }
                    tobj.id = null;
                }

                function _ease(t, b, c, d, type) {
                    switch (type) {
                        case "linear":
                        case "mcsLinear":
                            return c * t / d + b;
                            break;
                        case "mcsLinearOut":
                            t /= d;
                            t--;
                            return c * Math.sqrt(1 - t * t) + b;
                            break;
                        case "easeInOutSmooth":
                            t /= d / 2;
                            if (t < 1) return c / 2 * t * t + b;
                            t--;
                            return -c / 2 * (t * (t - 2) - 1) + b;
                            break;
                        case "easeInOutStrong":
                            t /= d / 2;
                            if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                            t--;
                            return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
                            break;
                        case "easeInOut":
                        case "mcsEaseInOut":
                            t /= d / 2;
                            if (t < 1) return c / 2 * t * t * t + b;
                            t -= 2;
                            return c / 2 * (t * t * t + 2) + b;
                            break;
                        case "easeOutSmooth":
                            t /= d;
                            t--;
                            return -c * (t * t * t * t - 1) + b;
                            break;
                        case "easeOutStrong":
                            return c * (-Math.pow(2, -10 * t / d) + 1) + b;
                            break;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var ts = (t /= d) * t,
                                tc = ts * t;
                            return b + c * (0.499999999999997 * tc * ts + -2.5 * ts * ts + 5.5 * tc + -6.5 * ts + 4 * t);
                    }
                }
            },
            /* -------------------- */
            /* returns current time */
            _getTime = function _getTime() {
                if (window.performance && window.performance.now) {
                    return window.performance.now();
                } else {
                    if (window.performance && window.performance.webkitNow) {
                        return window.performance.webkitNow();
                    } else {
                        if (Date.now) {
                            return Date.now();
                        } else {
                            return new Date().getTime();
                        }
                    }
                }
            },
            /* -------------------- */
            /* stops a tween */
            _stopTween = function _stopTween() {
                var el = this;
                if (!el._mTween) {
                    el._mTween = {
                        top: {},
                        left: {}
                    };
                }
                var props = ["top", "left"];
                for (var i = 0; i < props.length; i++) {
                    var prop = props[i];
                    if (el._mTween[prop].id) {
                        if (!window.requestAnimationFrame) {
                            clearTimeout(el._mTween[prop].id);
                        } else {
                            window.cancelAnimationFrame(el._mTween[prop].id);
                        }
                        el._mTween[prop].id = null;
                        el._mTween[prop].stop = 1;
                    }
                }
            },
            /* -------------------- */
            /* deletes a property (avoiding the exception thrown by IE) */
            _delete = function _delete(c, m) {
                try {
                    delete c[m];
                } catch (e) {
                    c[m] = null;
                }
            },
            /* -------------------- */
            /* detects left mouse button */
            _mouseBtnLeft = function _mouseBtnLeft(e) {
                return !(e.which && e.which !== 1);
            },
            /* -------------------- */
            /* detects if pointer type event is touch */
            _pointerTouch = function _pointerTouch(e) {
                var t = e.originalEvent.pointerType;
                return !(t && t !== "touch" && t !== 2);
            },
            /* -------------------- */
            /* checks if value is numeric */
            _isNumeric = function _isNumeric(val) {
                return !isNaN(parseFloat(val)) && isFinite(val);
            },
            /* -------------------- */
            /* returns element position according to content */
            _childPos = function _childPos(el) {
                var p = el.parents(".mCSB_container");
                return [el.offset().top - p.offset().top, el.offset().left - p.offset().left];
            },
            /* -------------------- */
            /* checks if browser tab is hidden/inactive via Page Visibility API */
            _isTabHidden = function _isTabHidden() {
                var prop = _getHiddenProp();
                if (!prop) return false;
                return document[prop];

                function _getHiddenProp() {
                    var pfx = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden"; //natively supported
                    for (var i = 0; i < pfx.length; i++) { //prefixed
                        if (pfx[i] + "Hidden" in document) return pfx[i] + "Hidden";
                    }
                    return null; //not supported
                }
            }; /* -------------------- */
        /*
        	----------------------------------------
        	PLUGIN SETUP
        	----------------------------------------
        	*/
        /* plugin constructor functions */
        $.fn[pluginNS] = function(method) {
            /* usage: $(selector).mCustomScrollbar(); */
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if ((typeof method === "undefined" ? "undefined" : _typeof(method)) === "object" || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error("Method " + method + " does not exist");
            }
        };
        $[pluginNS] = function(method) {
            /* usage: $.mCustomScrollbar(); */
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if ((typeof method === "undefined" ? "undefined" : _typeof(method)) === "object" || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error("Method " + method + " does not exist");
            }
        };
        /*
        	allow setting plugin default options.
        	usage: $.mCustomScrollbar.defaults.scrollInertia=500;
        	to apply any changed default options on default selectors (below), use inside document ready fn
        	e.g.: $(document).ready(function(){ $.mCustomScrollbar.defaults.scrollInertia=500; });
        	*/
        $[pluginNS].defaults = defaults;
        /*
        	add window object (window.mCustomScrollbar)
        	usage: if(window.mCustomScrollbar){console.log("custom scrollbar plugin loaded");}
        	*/
        window[pluginNS] = true;
        $(window).bind("load", function() {
            $(defaultSelector)[pluginNS](); /* add scrollbars automatically on default selector */ /* extend jQuery expressions */
            $.extend($.expr[":"], {
                /* checks if element is within scrollable viewport */
                mcsInView: $.expr[":"].mcsInView || function(el) {
                    var $el = $(el),
                        content = $el.parents(".mCSB_container"),
                        wrapper, cPos;
                    if (!content.length) {
                        return;
                    }
                    wrapper = content.parent();
                    cPos = [content[0].offsetTop, content[0].offsetLeft];
                    return cPos[0] + _childPos($el)[0] >= 0 && cPos[0] + _childPos($el)[0] < wrapper.height() - $el.outerHeight(false) && cPos[1] + _childPos($el)[1] >= 0 && cPos[1] + _childPos($el)[1] < wrapper.width() - $el.outerWidth(false);
                },
                /* checks if element or part of element is in view of scrollable viewport */
                mcsInSight: $.expr[":"].mcsInSight || function(el, i, m) {
                    var $el = $(el),
                        elD, content = $el.parents(".mCSB_container"),
                        wrapperView, pos, wrapperViewPct, pctVals = m[3] === "exact" ? [
                            [1, 0],
                            [1, 0]
                        ] : [
                            [0.9, 0.1],
                            [0.6, 0.4]
                        ];
                    if (!content.length) {
                        return;
                    }
                    elD = [$el.outerHeight(false), $el.outerWidth(false)];
                    pos = [content[0].offsetTop + _childPos($el)[0], content[0].offsetLeft + _childPos($el)[1]];
                    wrapperView = [content.parent()[0].offsetHeight, content.parent()[0].offsetWidth];
                    wrapperViewPct = [elD[0] < wrapperView[0] ? pctVals[0] : pctVals[1], elD[1] < wrapperView[1] ? pctVals[0] : pctVals[1]];
                    return pos[0] - wrapperView[0] * wrapperViewPct[0][0] < 0 && pos[0] + elD[0] - wrapperView[0] * wrapperViewPct[0][1] >= 0 && pos[1] - wrapperView[1] * wrapperViewPct[1][0] < 0 && pos[1] + elD[1] - wrapperView[1] * wrapperViewPct[1][1] >= 0;
                },
                /* checks if element is overflowed having visible scrollbar(s) */
                mcsOverflow: $.expr[":"].mcsOverflow || function(el) {
                    var d = $(el).data(pluginPfx);
                    if (!d) {
                        return;
                    }
                    return d.overflowed[0] || d.overflowed[1];
                }
            });
        });
    });
}); /*global jQuery */
/*!
 * FitText.js 1.1
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */
(function($) {
    $.fn.fitText = function(kompressor, options) { // Setup options
        var compressor = kompressor || 1,
            settings = $.extend({
                'minFontSize': Number.NEGATIVE_INFINITY,
                'maxFontSize': Number.POSITIVE_INFINITY
            }, options);
        return this.each(function() { // Store the object
            var $this = $(this); // Resizer() resizes items based on the object width divided by the compressor * 10
            var resizer = function resizer() {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
            }; // Call once to set.
            resizer(); // Call on resize. Opera debounces their resize by default.
            $(window).on('resize', resizer);
        });
    };
})(jQuery); /*global jQuery */
/*!
 * Lettering.JS 0.6.1
 *
 * Copyright 2010, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Thanks to Paul Irish - http://paulirish.com - for the feedback.
 *
 * Date: Mon Sep 20 17:14:00 2010 -0600
 */
(function($) {
    function injector(t, splitter, klass, after) {
        var a = t.text().split(splitter),
            inject = '';
        if (a.length) {
            $(a).each(function(i, item) {
                inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after;
            });
            t.empty().append(inject);
        }
    }
    var methods = {
        init: function init() {
            return this.each(function() {
                injector($(this), '', 'char', '');
            });
        },
        words: function words() {
            return this.each(function() {
                injector($(this), ' ', 'word', ' ');
            });
        },
        lines: function lines() {
            return this.each(function() {
                var r = "eefec303079ad17405c889e092e105b0"; // Because it's hard to split a <br/> tag consistently across browsers,
                // (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash
                // (of the word "split").  If you're trying to use this plugin on that
                // md5 hash string, it will fail because you're being ridiculous.
                injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
            });
        }
    };
    $.fn.lettering = function(method) { // Method calling logic
        if (method && methods[method]) {
            return methods[method].apply(this, [].slice.call(arguments, 1));
        } else if (method === 'letters' || !method) {
            return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
        }
        $.error('Method ' + method + ' does not exist on jQuery.lettering');
        return this;
    };
})(jQuery);
/*
 * textillate.js
 * http://jschr.github.com/textillate
 * MIT licensed
 *
 * Copyright (C) 2012-2013 Jordan Schroter
 */
(function($) {
    "use strict";

    function isInEffect(effect) {
        return /In/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.inEffects) >= 0;
    };

    function isOutEffect(effect) {
        return /Out/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.outEffects) >= 0;
    };

    function stringToBoolean(str) {
        if (str !== "true" && str !== "false") return str;
        return str === "true";
    }; // custom get data api method
    function getData(node) {
        var attrs = node.attributes || [],
            data = {};
        if (!attrs.length) return data;
        $.each(attrs, function(i, attr) {
            var nodeName = attr.nodeName.replace(/delayscale/, 'delayScale');
            if (/^data-in-*/.test(nodeName)) {
                data.in = data.in || {};
                data.in[nodeName.replace(/data-in-/, '')] = stringToBoolean(attr.nodeValue);
            } else if (/^data-out-*/.test(nodeName)) {
                data.out = data.out || {};
                data.out[nodeName.replace(/data-out-/, '')] = stringToBoolean(attr.nodeValue);
            } else if (/^data-*/.test(nodeName)) {
                data[nodeName.replace(/data-/, '')] = stringToBoolean(attr.nodeValue);
            }
        });
        return data;
    }

    function shuffle(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {}
        return o;
    }

    function animate($t, effect, cb) {
        $t.addClass('animated ' + effect).css('visibility', 'visible').show();
        $t.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $t.removeClass('animated ' + effect);
            cb && cb();
        });
    }

    function animateTokens($tokens, options, cb) {
        var that = this,
            count = $tokens.length;
        if (!count) {
            cb && cb();
            return;
        }
        if (options.shuffle) $tokens = shuffle($tokens);
        if (options.reverse) $tokens = $tokens.toArray().reverse();
        $.each($tokens, function(i, t) {
            var $token = $(t);

            function complete() {
                if (isInEffect(options.effect)) {
                    $token.css('visibility', 'visible');
                } else if (isOutEffect(options.effect)) {
                    $token.css('visibility', 'hidden');
                }
                count -= 1;
                if (!count && cb) cb();
            }
            var delay = options.sync ? options.delay : options.delay * i * options.delayScale;
            $token.text() ? setTimeout(function() {
                animate($token, options.effect, complete);
            }, delay) : complete();
        });
    };
    var Textillate = function Textillate(element, options) {
        var base = this,
            $element = $(element);
        base.init = function() {
            base.$texts = $element.find(options.selector);
            if (!base.$texts.length) {
                base.$texts = $('<ul class="texts"><li>' + $element.html() + '</li></ul>');
                $element.html(base.$texts);
            }
            base.$texts.hide();
            base.$current = $('<span>').html(base.$texts.find(':first-child').html()).prependTo($element);
            if (isInEffect(options.in.effect)) {
                base.$current.css('visibility', 'hidden');
            } else if (isOutEffect(options.out.effect)) {
                base.$current.css('visibility', 'visible');
            }
            base.setOptions(options);
            base.timeoutRun = null;
            setTimeout(function() {
                base.options.autoStart && base.start();
            }, base.options.initialDelay);
        };
        base.setOptions = function(options) {
            base.options = options;
        };
        base.triggerEvent = function(name) {
            var e = $.Event(name + '.tlt');
            $element.trigger(e, base);
            return e;
        };
        base.in = function(index, cb) {
            index = index || 0;
            var $elem = base.$texts.find(':nth-child(' + ((index || 0) + 1) + ')'),
                options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {}),
                $tokens;
            $elem.addClass('current');
            base.triggerEvent('inAnimationBegin');
            $element.attr('data-active', $elem.data('id'));
            base.$current.html($elem.html()).lettering('words'); // split words to individual characters if token type is set to 'char'
            if (base.options.type == "char") {
                base.$current.find('[class^="word"]').css({
                    'display': 'inline-block', // fix for poor ios performance
                    '-webkit-transform': 'translate3d(0,0,0)',
                    '-moz-transform': 'translate3d(0,0,0)',
                    '-o-transform': 'translate3d(0,0,0)',
                    'transform': 'translate3d(0,0,0)'
                }).each(function() {
                    $(this).lettering();
                });
            }
            $tokens = base.$current.find('[class^="' + base.options.type + '"]').css('display', 'inline-block');
            if (isInEffect(options.in.effect)) {
                $tokens.css('visibility', 'hidden');
            } else if (isOutEffect(options.in.effect)) {
                $tokens.css('visibility', 'visible');
            }
            base.currentIndex = index;
            animateTokens($tokens, options.in, function() {
                base.triggerEvent('inAnimationEnd');
                if (options.in.callback) options.in.callback();
                if (cb) cb(base);
            });
        };
        base.out = function(cb) {
            var $elem = base.$texts.find(':nth-child(' + ((base.currentIndex || 0) + 1) + ')'),
                $tokens = base.$current.find('[class^="' + base.options.type + '"]'),
                options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {});
            base.triggerEvent('outAnimationBegin');
            animateTokens($tokens, options.out, function() {
                $elem.removeClass('current');
                base.triggerEvent('outAnimationEnd');
                $element.removeAttr('data-active');
                if (options.out.callback) options.out.callback();
                if (cb) cb(base);
            });
        };
        base.start = function(index) {
            setTimeout(function() {
                base.triggerEvent('start');
                (function run(index) {
                    base.in(index, function() {
                        var length = base.$texts.children().length;
                        index += 1;
                        if (!base.options.loop && index >= length) {
                            if (base.options.callback) base.options.callback();
                            base.triggerEvent('end');
                        } else {
                            index = index % length;
                            base.timeoutRun = setTimeout(function() {
                                base.out(function() {
                                    run(index);
                                });
                            }, base.options.minDisplayTime);
                        }
                    });
                })(index || 0);
            }, base.options.initialDelay);
        };
        base.stop = function() {
            if (base.timeoutRun) {
                clearInterval(base.timeoutRun);
                base.timeoutRun = null;
            }
        };
        base.init();
    };
    $.fn.textillate = function(settings, args) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('textillate'),
                options = $.extend(true, {}, $.fn.textillate.defaults, getData(this), (typeof settings === "undefined" ? "undefined" : _typeof(settings)) == 'object' && settings);
            if (!data) {
                $this.data('textillate', data = new Textillate(this, options));
            } else if (typeof settings == 'string') {
                data[settings].apply(data, [].concat(args));
            } else {
                data.setOptions.call(data, options);
            }
        });
    };
    $.fn.textillate.defaults = {
        selector: '.texts',
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 0,
        in: {
            effect: 'fadeInLeftBig',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            reverse: false,
            shuffle: false,
            callback: function callback() {}
        },
        out: {
            effect: 'hinge',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            reverse: false,
            shuffle: false,
            callback: function callback() {}
        },
        autoStart: true,
        inEffects: [],
        outEffects: ['hinge'],
        callback: function callback() {},
        type: 'char'
    };
})(jQuery);
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) { // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') { // Node/CommonJS style for Browserify
        module.exports = factory;
    } else { // Browser globals
        factory(jQuery);
    }
})(function($) {
    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;
    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }
    var special = $.event.special.mousewheel = {
        version: '3.1.12',
        setup: function setup() {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            } // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },
        teardown: function teardown() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            } // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },
        getLineHeight: function getLineHeight(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },
        getPageHeight: function getPageHeight(elem) {
            return $(elem).height();
        },
        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true // calls getBoundingClientRect for each event
        }
    };
    $.fn.extend({
        mousewheel: function mousewheel(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },
        unmousewheel: function unmousewheel(fn) {
            return this.unbind('mousewheel', fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            offsetX = 0,
            offsetY = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel'; // Old school scrollwheel delta
        if ('detail' in orgEvent) {
            deltaY = orgEvent.detail * -1;
        }
        if ('wheelDelta' in orgEvent) {
            deltaY = orgEvent.wheelDelta;
        }
        if ('wheelDeltaY' in orgEvent) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if ('wheelDeltaX' in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1;
        } // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        } // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY; // New school wheel delta (wheel event)
        if ('deltaY' in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ('deltaX' in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1;
            }
        } // No change actually happened, no reason to go any further
        if (deltaY === 0 && deltaX === 0) {
            return;
        } // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        } // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta; // Adjust older deltas if necessary
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40;
            }
        } // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) { // Divide all the things by 40!
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        } // Get a whole, normalized value for the deltas
        delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta); // Normalise offsetX and offsetY properties
        if (special.settings.normalizeOffset && this.getBoundingClientRect) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        } // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY; // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0; // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY); // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout);
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) { // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }
});
/** @preserve jQuery animateNumber plugin v0.0.14
 * (c) 2013, Alexandr Borisov.
 * https://github.com/aishek/jquery-animateNumber
 */ // ['...'] notation using to avoid names minification by Google Closure Compiler
(function($) {
    var reverse = function reverse(value) {
        return value.split('').reverse().join('');
    };
    var defaults = {
        numberStep: function numberStep(now, tween) {
            var floored_number = Math.floor(now),
                target = $(tween.elem);
            target.text(floored_number);
        }
    };
    var handle = function handle(tween) {
        var elem = tween.elem;
        if (elem.nodeType && elem.parentNode) {
            var handler = elem._animateNumberSetter;
            if (!handler) {
                handler = defaults.numberStep;
            }
            handler(tween.now, tween);
        }
    };
    if (!$.Tween || !$.Tween.propHooks) {
        $.fx.step.number = handle;
    } else {
        $.Tween.propHooks.number = {
            set: handle
        };
    }
    var extract_number_parts = function extract_number_parts(separated_number, group_length) {
        var numbers = separated_number.split('').reverse(),
            number_parts = [],
            current_number_part, current_index, q;
        for (var i = 0, l = Math.ceil(separated_number.length / group_length); i < l; i++) {
            current_number_part = '';
            for (q = 0; q < group_length; q++) {
                current_index = i * group_length + q;
                if (current_index === separated_number.length) {
                    break;
                }
                current_number_part = current_number_part + numbers[current_index];
            }
            number_parts.push(current_number_part);
        }
        return number_parts;
    };
    var remove_precending_zeros = function remove_precending_zeros(number_parts) {
        var last_index = number_parts.length - 1,
            last = reverse(number_parts[last_index]);
        number_parts[last_index] = reverse(parseInt(last, 10).toString());
        return number_parts;
    };
    $.animateNumber = {
        numberStepFactories: {
            /**
             * Creates numberStep handler, which appends string to floored animated number on each step.
             *
             * @example
             * // will animate to 100 with "1 %", "2 %", "3 %", ...
             * $('#someid').animateNumber({
             *   number: 100,
             *   numberStep: $.animateNumber.numberStepFactories.append(' %')
             * });
             *
             * @params {String} suffix string to append to animated number
             * @returns {Function} numberStep-compatible function for use in animateNumber's parameters
             */
            append: function append(suffix) {
                return function(now, tween) {
                    var floored_number = Math.floor(now),
                        target = $(tween.elem);
                    target.prop('number', now).text(floored_number + suffix);
                };
            },
            /**
             * Creates numberStep handler, which format floored numbers by separating them to groups.
             *
             * @example
             * // will animate with 1 ... 217,980 ... 95,217,980 ... 7,095,217,980
             * $('#world-population').animateNumber({
             *    number: 7095217980,
             *    numberStep: $.animateNumber.numberStepFactories.separator(',')
             * });
             * @example
             * // will animate with 1% ... 217,980% ... 95,217,980% ... 7,095,217,980%
             * $('#salesIncrease').animateNumber({
             *   number: 7095217980,
             *   numberStep: $.animateNumber.numberStepFactories.separator(',', 3, '%')
             * });
             *
             * @params {String} [separator=' '] string to separate number groups
             * @params {String} [group_length=3] number group length
             * @params {String} [suffix=''] suffix to append to number
             * @returns {Function} numberStep-compatible function for use in animateNumber's parameters
             */
            separator: function separator(_separator, group_length, suffix) {
                _separator = _separator || ' ';
                group_length = group_length || 3;
                suffix = suffix || '';
                return function(now, tween) {
                    var negative = now < 0,
                        floored_number = Math.floor((negative ? -1 : 1) * now),
                        separated_number = floored_number.toString(),
                        target = $(tween.elem);
                    if (separated_number.length > group_length) {
                        var number_parts = extract_number_parts(separated_number, group_length);
                        separated_number = remove_precending_zeros(number_parts).join(_separator);
                        separated_number = reverse(separated_number);
                    }
                    target.prop('number', now).text((negative ? '-' : '') + separated_number + suffix);
                };
            }
        }
    };
    $.fn.animateNumber = function() {
        var options = arguments[0],
            settings = $.extend({}, defaults, options),
            target = $(this),
            args = [settings];
        for (var i = 1, l = arguments.length; i < l; i++) {
            args.push(arguments[i]);
        } // needs of custom step function usage
        if (options.numberStep) { // assigns custom step functions
            var items = this.each(function() {
                this._animateNumberSetter = options.numberStep;
            }); // cleanup of custom step functions after animation
            var generic_complete = settings.complete;
            settings.complete = function() {
                items.each(function() {
                    delete this._animateNumberSetter;
                });
                if (generic_complete) {
                    generic_complete.apply(this, arguments);
                }
            };
        }
        return target.animate.apply(target, args);
    };
})(jQuery);
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 jquery.mb.components

 file: jquery.mb.YTPlayer.src.js
 last modified: 16/03/18 20.01
 Version:  3.2.2
 Build:  7122

 Open Lab s.r.l., Florence - Italy
 email:  matteo@open-lab.com
 blog: 	http://pupunzi.open-lab.com
 site: 	http://pupunzi.com
 	http://open-lab.com

 Licences: MIT, GPL
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html

 Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi)
 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
var ytp = ytp || {};

function onYouTubeIframeAPIReady() {
    if (ytp.YTAPIReady) return;
    ytp.YTAPIReady = true;
    jQuery(document).trigger("YTAPIReady");
}
var getYTPVideoID = function getYTPVideoID(url) {
    var videoID, playlistID;
    if (url.indexOf("youtu.be") > 0) {
        videoID = url.substr(url.lastIndexOf("/") + 1, url.length);
        playlistID = videoID.indexOf("?list=") > 0 ? videoID.substr(videoID.lastIndexOf("="), videoID.length) : null;
        videoID = playlistID ? videoID.substr(0, videoID.lastIndexOf("?")) : videoID;
    } else if (url.indexOf("http") > -1) { //videoID = url.match( /([\/&]v\/([^&#]*))|([\\?&]v=([^&#]*))/ )[ 1 ];
        videoID = url.match(/[\\?&]v=([^&#]*)/)[1];
        playlistID = url.indexOf("list=") > 0 ? url.match(/[\\?&]list=([^&#]*)/)[1] : null;
    } else {
        videoID = url.length > 15 ? null : url;
        playlistID = videoID ? null : url;
    }
    return {
        videoID: videoID,
        playlistID: playlistID
    };
};
(function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.2.2",
        build: "7122",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        /*
         * Default options for the player
         */
        defaults: {
            /**
                   videoURL (string)
                   the complete Youtube video URL or the short url or the videoID
                   */
            videoURL: null,
            /**
                   containment (string)
                   default containment for the player
                   */
            containment: "body",
            /**
                   ratio (string or number)
                   "auto", "16/9", "4/3" or number: 4/3, 16/9
                   */
            ratio: "auto",
            /**
                   fadeOnStartTime (int)
                   fade in timing at video start
                   */
            fadeOnStartTime: 1500,
            /**
                   startAt (int)
                   start second
                   */
            startAt: 0,
            /**
                   stopAt (int)
                   stop second
                   */
            stopAt: 0,
            /**
                   autoPlay (bool)
                   on page load video should start or pause
                   */
            autoPlay: true,
            /**
                   coverImage (string)
                   The path to the image to be used as cover if the autoPlay option is set to false
                   */
            coverImage: false,
            /**
                   loop (bool or int)
                   video should loop or not; if number it will loop for the specified times
                   */
            loop: true,
            /**
                   addRaster (bool)
                   shows a raster image over the video (added via CSS)
                   You can change the raster image via CSS:
                   .YTPOverlay.raster { background: url(images/raster.png)}
                   */
            addRaster: false,
            /**
                   mask (bool or object) the key is the second and the value is the path to the image
                   Ex: mask:{ 0:'assets/mask-1.png', 5:'assets/mask-2.png', 30: false, 50:'assets/mask-3.png'}
                   */
            mask: false,
            /**
                   opacity (int)
                   0 to 1
                   */
            opacity: 1,
            /**
                   quality (string)
                   “small”, “medium”, “large”, “hd720”, “hd1080”, “highres”, "default"
                   */
            quality: "default",
            /**
                   vol (int)
                   0 to 100
                   */
            vol: 50,
            /**
                   mute (bool)
                   mute the video at start
                   */
            mute: false,
            /**
                   showControls (bool)
                   shows the control bar at the bottom of the containment
                   */
            showControls: true,
            /**
                   showControls (string)
                   center,top,bottom,left,right combined in pair
                   */
            anchor: "center,center",
            /**
                   showAnnotations (bool)
                   display the annotations on video
                   */
            showAnnotations: false,
            /**
                   cc_load_policy (bool)
                   display the subtitles
                   */
            cc_load_policy: false,
            /**
                   showYTLogo (bool)
                   display the Youtube logotype inside the button bar
                   */
            showYTLogo: true,
            /**
                   useOnMobile (bool)
                   activate the player also on mobile
                   */
            useOnMobile: true,
            /**
                   mobileFallbackImage (bool)
                   mobile fallback image if useOnMobile is set to false
                   */
            mobileFallbackImage: null,
            /**
                   playOnlyIfVisible (bool)
                   play the video only if the containment is on screen
                   */
            playOnlyIfVisible: false,
            /**
                   stopMovieOnBlur (bool)
                   stop the video if the window loose the focus
                   */
            stopMovieOnBlur: true,
            /**
                   realfullscreen (bool)
                   the video when in full screen covers all the display
                   */
            realfullscreen: true,
            /**
                   optimizeDisplay (bool)
                   The video always fit the containment without displaying the black strips
                   */
            optimizeDisplay: true,
            /**
                   abundance (bool)
                   the abudance of the video size
                   */
            abundance: 0.2,
            /**
                   gaTrack (bool)
                   track the video plays on GA
                   */
            gaTrack: true,
            /**
                   remember_last_time (bool)
                   when the page is reloaded the video will start from the last position
                   */
            remember_last_time: false,
            /**
                   addFilters (bool or string)
                   add one or more CSS filters as object to the video
                   Ex: {sepia: 50, hue_rotate : 220}
                   */
            addFilters: false,
            /**
                   onReady (function)
                   a callback function fired once the player is ready
                   */
            onReady: function onReady(player) {},
            /**
                   onReady (function)
                   a callback function fired if there's an error
                   */
            onError: function onError(player, err) {}
        },
        /**
         *  @fontface icons
         *  */
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        controlBar: null,
        locationProtocol: "https:",
        /**
         * Applicable filters
         */
        defaultFilters: {
            grayscale: {
                value: 0,
                unit: "%"
            },
            hue_rotate: {
                value: 0,
                unit: "deg"
            },
            invert: {
                value: 0,
                unit: "%"
            },
            opacity: {
                value: 0,
                unit: "%"
            },
            saturate: {
                value: 0,
                unit: "%"
            },
            sepia: {
                value: 0,
                unit: "%"
            },
            brightness: {
                value: 0,
                unit: "%"
            },
            contrast: {
                value: 0,
                unit: "%"
            },
            blur: {
                value: 0,
                unit: "px"
            }
        },
        /**
         * build the player
         * @param options
         * @returns [players]
         */
        buildPlayer: function buildPlayer(options) {
            if (!ytp.YTAPIReady && typeof window.YT === 'undefined') {
                jQuery("#YTAPI").remove();
                var tag = jQuery("<script></script>").attr({
                    "src": jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                    "id": "YTAPI"
                });
                jQuery("head").prepend(tag);
            } else {
                setTimeout(function() {
                    jQuery(document).trigger("YTAPIReady");
                    ytp.YTAPIReady = true;
                }, 100);
            }

            function isIframe() {
                var isIfr = false;
                try {
                    if (self.location.href != top.location.href) isIfr = true;
                } catch (e) {
                    isIfr = true;
                }
                return isIfr;
            }; //console.time( "YTPlayerInit" );
            return this.each(function() {
                var YTPlayer = this;
                var $YTPlayer = jQuery(YTPlayer);
                $YTPlayer.hide();
                YTPlayer.loop = 0;
                YTPlayer.state = 0;
                YTPlayer.filters = jQuery.extend(true, {}, jQuery.mbYTPlayer.defaultFilters);
                YTPlayer.filtersEnabled = true;
                YTPlayer.id = YTPlayer.id || "YTP_" + new Date().getTime();
                $YTPlayer.addClass("mb_YTPlayer");
                /**
                         Set properties
                         */
                var property = $YTPlayer.data("property") && typeof $YTPlayer.data("property") == "string" ? eval('(' + $YTPlayer.data("property") + ')') : $YTPlayer.data("property");
                if ((typeof property === "undefined" ? "undefined" : _typeof(property)) !== "object") property = {};
                YTPlayer.opt = jQuery.extend(true, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property);
                YTPlayer.opt.elementId = YTPlayer.id;
                if (YTPlayer.opt.vol === 0) {
                    YTPlayer.opt.vol = 1;
                    YTPlayer.opt.mute = true;
                }
                /**
                 * If autoPlay is set to true the mute must be true
                 */
                if (YTPlayer.opt.autoPlay) YTPlayer.opt.mute = true;
                if (YTPlayer.opt.loop && typeof YTPlayer.opt.loop === "boolean") {
                    YTPlayer.opt.loop = 9999;
                }
                /**
                         Disable fullScreen if is in an iframe or on mobile
                         */
                YTPlayer.opt.realfullscreen = isIframe() || YTPlayer.opt.useOnMobile ? false : YTPlayer.opt.realfullscreen;
                /**
                         Manage annotations
                         */
                YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? '1' : '3';
                /**
                         Manage show subtitle and caption
                         */
                YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? '1' : '0';
                /**
                         Manage cover image
                         */
                YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage;
                /**
                         Manage Opacity for IE < 10
                         */
                if (jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9) YTPlayer.opt.opacity = 1;
                YTPlayer.opt.containment = YTPlayer.opt.containment === "self" ? $YTPlayer : jQuery(YTPlayer.opt.containment);
                YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                YTPlayer.opt.ratio = YTPlayer.opt.ratio === "auto" ? 16 / 9 : YTPlayer.opt.ratio;
                YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio);
                if (!$YTPlayer.attr("id")) $YTPlayer.attr("id", "ytp_" + new Date().getTime());
                YTPlayer.playerID = "iframe_" + YTPlayer.id;
                YTPlayer.isAlone = false;
                YTPlayer.hasFocus = true;
                YTPlayer.videoID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : false;
                /**
                         Check if it is a video list
                         */
                YTPlayer.playlistID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : false;
                var start_from_last = 0;
                if (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID)) start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID));
                if (YTPlayer.opt.remember_last_time && start_from_last) {
                    YTPlayer.start_from_last = start_from_last;
                    jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID);
                }
                YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment);
                YTPlayer.isBackground = YTPlayer.opt.containment.is("body");
                if (YTPlayer.isBackground && ytp.backgroundIsInited) return;
                /**
                         Hide the placeholder if it's not the target of the player
                         */
                if (YTPlayer.isPlayer) $YTPlayer.show();
                /**
                         create the overlay
                         */
                YTPlayer.overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay");
                /**
                         If is an inline player toggle play if the overlay is clicked
                         */
                if (YTPlayer.isPlayer) {
                    YTPlayer.overlay.on("click", function() {
                        $YTPlayer.YTPTogglePlay();
                    });
                }
                /**
                         create the wrapper
                         */
                YTPlayer.wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + YTPlayer.id);
                YTPlayer.wrapper.css({
                    position: "absolute",
                    zIndex: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    opacity: 0
                });
                /**
                         create the playerBox where the YT iframe will be placed
                         */
                var playerBox = jQuery("<div/>").attr("id", YTPlayer.playerID).addClass("playerBox");
                playerBox.css({
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    opacity: 1
                });
                YTPlayer.wrapper.append(playerBox);
                playerBox.after(YTPlayer.overlay);
                if (YTPlayer.isPlayer) {
                    YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer");
                    YTPlayer.inlineWrapper.css({
                        position: "relative",
                        maxWidth: YTPlayer.opt.containment.css("width")
                    });
                    YTPlayer.opt.containment.css({
                        position: "relative",
                        paddingBottom: "56.25%",
                        overflow: "hidden",
                        height: 0
                    });
                    YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper);
                }
                /**
                         Loop all the elements inside the container and check if their position is not "static"
                         */
                YTPlayer.opt.containment.children().not("script, style").each(function() {
                    if (jQuery(this).css("position") == "static") jQuery(this).css("position", "relative");
                });
                if (YTPlayer.isBackground) {
                    jQuery("body").css({
                        boxSizing: "border-box"
                    });
                    YTPlayer.wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0
                    });
                } else if (YTPlayer.opt.containment.css("position") == "static") {
                    YTPlayer.opt.containment.css({
                        position: "relative"
                    });
                    $YTPlayer.show();
                }
                YTPlayer.opt.containment.prepend(YTPlayer.wrapper);
                if (!YTPlayer.isBackground) {
                    YTPlayer.overlay.on("mouseenter", function() {
                        if (YTPlayer.controlBar && YTPlayer.controlBar.length) YTPlayer.controlBar.addClass("visible");
                    }).on("mouseleave", function() {
                        if (YTPlayer.controlBar && YTPlayer.controlBar.length) YTPlayer.controlBar.removeClass("visible");
                    });
                }
                if (jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile) {
                    if (YTPlayer.opt.mobileFallbackImage) {
                        YTPlayer.wrapper.css({
                            backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            opacity: 1
                        });
                        YTPlayer.wrapper.css({
                            opacity: 1
                        });
                    }
                    return $YTPlayer;
                }
                /**
                         If is on device start playing on first touch
                         */
                if (jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile) jQuery("body").one("touchstart", function() {
                    YTPlayer.player.playVideo();
                });
                jQuery(document).one("YTAPIReady", function() {
                    $YTPlayer.trigger("YTAPIReady_" + YTPlayer.id);
                    ytp.YTAPIReady = true;
                });
                YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer);
                $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function() {
                    var YTPlayer = this;
                    var $YTPlayer = jQuery(YTPlayer);
                    if (YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit) return;
                    if (YTPlayer.isBackground) ytp.backgroundIsInited = true;
                    YTPlayer.opt.autoPlay = typeof YTPlayer.opt.autoPlay == "undefined" ? YTPlayer.isBackground ? true : false : YTPlayer.opt.autoPlay;
                    YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;
                    jQuery.mbYTPlayer.getDataFromAPI(YTPlayer);
                    jQuery(YTPlayer).on("YTPChanged", function(e) {
                        if (YTPlayer.isInit) return;
                        YTPlayer.isInit = true;
                        /** Initialize the YT player ------------------------------------
                         * Youtube player variables
                         * @type {{modestbranding: number, autoplay: number, controls: number, showinfo: number, rel: number, enablejsapi: number, version: number, playerapiid: string, origin: string, allowfullscreen: boolean, iv_load_policy: (string|*|jQuery.mbYTPlayer.opt.showAnnotations), playsinline: number}}
                         */
                        var playerVars = {
                            'modestbranding': 1,
                            'autoplay': 1,
                            'controls': 0,
                            'showinfo': 0,
                            'rel': 0,
                            'enablejsapi': 1,
                            'version': 3,
                            'playerapiid': YTPlayer.playerID,
                            'origin': '*',
                            'allowfullscreen': true,
                            'wmode': 'transparent',
                            'iv_load_policy': YTPlayer.opt.showAnnotations,
                            'cc_load_policy': YTPlayer.opt.cc_load_policy,
                            'playsinline': jQuery.browser.mobile ? 1 : 0,
                            /**
                                           Check if the browser can play HTML5 videos
                                           */
                            'html5': document.createElement('video').canPlayType ? 1 : 0
                        };
                        new YT.Player(YTPlayer.playerID, { //videoId: YTPlayer.videoID.toString(),
                            playerVars: playerVars,
                            events: {
                                'onReady': function onReady(event) {
                                    YTPlayer.player = event.target; //todo: make playlist works
                                    /* if (YTPlayer.playlistID && YTPlayer.apiKey) {
                                                          YTPlayer.isList = true;
                                                          YTPlayer.videos = [];
                                                          YTPlayer.player.cuePlaylist({
                                                            listType: 'playlist',
                                                            list: YTPlayer.playlistID.toString(),
                                                            startSeconds: YTPlayer.opt.startAt,
                                                            endSeconds: YTPlayer.opt.stopAt,
                                                            suggestedQuality: YTPlayer.opt.quality
                                                          });
                                                        }
                                                         else { */
                                    YTPlayer.player.loadVideoById({
                                        videoId: YTPlayer.videoID.toString(), // startSeconds: YTPlayer.start_from_last || YTPlayer.opt.startAt,
                                        // endSeconds: YTPlayer.opt.stopAt,
                                        suggestedQuality: YTPlayer.opt.quality
                                    }); /*}*/
                                    $YTPlayer.trigger("YTPlayerIsReady_" + YTPlayer.id);
                                },
                                /**
                                 * on State Change
                                 * @param event
                                 *
                                 * -1 (unstarted)
                                 * 0 (ended)
                                 * 1 (playing)
                                 * 2 (paused)
                                 * 3 (buffering)
                                 * 5 (video cued)
                                 */
                                'onStateChange': function onStateChange(event) {
                                    if (typeof event.target.getPlayerState != "function") return;
                                    var state = event.target.getPlayerState();
                                    if (YTPlayer.preventTrigger) {
                                        YTPlayer.preventTrigger = false;
                                        return;
                                    }
                                    YTPlayer.state = state;
                                    var eventType;
                                    switch (state) {
                                        /** unstarted */
                                        case -1:
                                            eventType = "YTPUnstarted";
                                            break; /** unstarted */
                                        case 0:
                                            eventType = "YTPRealEnd";
                                            break; /** play */
                                        case 1:
                                            eventType = "YTPPlay";
                                            if (YTPlayer.controlBar.length) YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause);
                                            break; /** pause */
                                        case 2:
                                            eventType = "YTPPause";
                                            if (YTPlayer.controlBar.length) YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                            break; /** buffer */
                                        case 3:
                                            YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
                                            eventType = "YTPBuffering";
                                            if (YTPlayer.controlBar.length) YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                            break; /** cued */
                                        case 5:
                                            eventType = "YTPCued"; /* If it is a playlist */
                                            /* todo: make the playlist works
                                                                  if(YTPlayer.playlistID){
                                                                    var playListIDs = YTPlayer.player.getPlaylist();

                                                                    if(playListIDs && playListIDs.length) {
                                                                      YTPlayer.isList = true;
                                                                      playListIDs = playListIDs.reverse();

                                                                      for (var i = 0; i < playListIDs.length; i++ ) {
                                                                        var videoObj = jQuery.extend(true, {}, YTPlayer.opt);
                                                                        videoObj.videoURL = playListIDs[i];
                                                                        YTPlayer.videos.push(videoObj);
                                                                      }
                                                                    }
                                                                  }
                                                                */
                                            break;
                                        default:
                                            break;
                                    }
                                    /**
                                                       Trigger state events
                                                       */
                                    var YTPEvent = jQuery.Event(eventType);
                                    YTPEvent.time = YTPlayer.currentTime;
                                    if (!YTPlayer.preventTrigger) jQuery(YTPlayer).trigger(YTPEvent);
                                },
                                /**
                                 * onPlaybackQualityChange
                                 * @param e
                                 */
                                'onPlaybackQualityChange': function onPlaybackQualityChange(e) {
                                    var quality = e.target.getPlaybackQuality();
                                    var YTPQualityChange = jQuery.Event("YTPQualityChange");
                                    YTPQualityChange.quality = quality;
                                    jQuery(YTPlayer).trigger(YTPQualityChange);
                                },
                                /**
                                                 * onError
                                                 * @param err
                                                 *
                                                 2 – The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.
                                                 5 – The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.
                                                 100 – The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.
                                                 101 – The owner of the requested video does not allow it to be played in embedded players.
                                                 150 – This error is the same as 101. It's just a 101 error in disguise!
                                                 */
                                'onError': function onError(err) {
                                    if (typeof YTPlayer.opt.onError == "function") YTPlayer.opt.onError($YTPlayer, err);
                                    switch (err.data) {
                                        case 2:
                                            console.error("video ID:: " + YTPlayer.videoID + ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");
                                            break;
                                        case 5:
                                            console.error("video ID:: " + YTPlayer.videoID + ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");
                                            break;
                                        case 100:
                                            console.error("video ID:: " + YTPlayer.videoID + ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");
                                            break;
                                        case 101:
                                        case 150:
                                            console.error("video ID:: " + YTPlayer.videoID + ": The owner of the requested video does not allow it to be played in embedded players.");
                                            break;
                                    }
                                    if (YTPlayer.isList) jQuery(YTPlayer).YTPPlayNext();
                                }
                            }
                        });
                        $YTPlayer.on("YTPlayerIsReady_" + YTPlayer.id, function() {
                            if (YTPlayer.isReady) return this;
                            YTPlayer.playerEl = YTPlayer.player.getIframe();
                            jQuery(YTPlayer.playerEl).unselectable();
                            $YTPlayer.optimizeDisplay();
                            /**
                             * Optimize display on resize
                             */
                            jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function() {
                                $YTPlayer.optimizeDisplay();
                            });
                            /**
                             * Set the time of the last visit progress
                             */
                            if (YTPlayer.opt.remember_last_time) {
                                jQuery(window).on("unload.YTP_" + YTPlayer.id, function() {
                                    var current_time = YTPlayer.player.getCurrentTime();
                                    jQuery.mbCookie.set("YTPlayer_start_from" + YTPlayer.videoID, current_time, 0);
                                });
                            }
                            $YTPlayer.YTPCheckForState();
                        });
                    });
                });
                $YTPlayer.off("YTPTime.mask");
                jQuery.mbYTPlayer.applyMask(YTPlayer); // console.timeEnd( "YTPlayerInit" );
            });
        },
        /**
         * isOnScreen
         * Check if the YTPlayer is on screen
         * @param YTPlayer
         * @returns {boolean}
         */
        isOnScreen: function isOnScreen(YTPlayer) {
            var playerBox = YTPlayer.wrapper;
            var winTop = jQuery(window).scrollTop();
            var winBottom = winTop + jQuery(window).height();
            var elTop = playerBox.offset().top + playerBox.height() / 1.2;
            var elBottom = playerBox.offset().top + playerBox.height() / 2.8;
            /*
                        console.debug("-----------------------------", YTPlayer.id);
                        console.debug("EL:: bottom:: ", elBottom, "top:: ",  elTop);
                        console.debug("WIN:: bottom:: ", winBottom, "top:: ", winTop);
                  */
            return elBottom <= winBottom && elTop >= winTop;
        },
        /**
         * getDataFromAPI
         * @param YTPlayer
         */
        getDataFromAPI: function getDataFromAPI(YTPlayer) { //console.debug("getDataFromAPI", YTPlayer.id, YTPlayer.videoID)
            YTPlayer.videoData = jQuery.mbStorage.get("YTPlayer_data_" + YTPlayer.videoID);
            jQuery(YTPlayer).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                if (YTPlayer.hasData) {
                    if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay) {
                        var bgndURL = YTPlayer.opt.coverImage != "false" ? YTPlayer.opt.coverImage : YTPlayer.videoData.thumb_max || YTPlayer.videoData.thumb_high || YTPlayer.videoData.thumb_medium;
                        YTPlayer.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
                            backgroundSize: "cover"
                        });
                    }
                }
            });
            if (YTPlayer.videoData) {
                setTimeout(function() {
                    YTPlayer.dataReceived = true;
                    var YTPChanged = jQuery.Event("YTPChanged");
                    YTPChanged.time = YTPlayer.currentTime;
                    YTPChanged.videoId = YTPlayer.videoID;
                    YTPChanged.opt = YTPlayer.opt;
                    jQuery(YTPlayer).trigger(YTPChanged);
                    var YTPData = jQuery.Event("YTPData");
                    YTPData.prop = {};
                    for (var x in YTPlayer.videoData) {
                        YTPData.prop[x] = YTPlayer.videoData[x];
                    }
                    jQuery(YTPlayer).trigger(YTPData);
                }, YTPlayer.opt.fadeOnStartTime);
                YTPlayer.hasData = true;
            } else if (jQuery.mbYTPlayer.apiKey) {
                /**
                 * Get video info from API3 (needs api key)
                 * snippet,player,contentDetails,statistics,status
                 */
                jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + YTPlayer.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(data) {
                    YTPlayer.dataReceived = true;
                    var YTPChanged = jQuery.Event("YTPChanged");
                    YTPChanged.time = YTPlayer.currentTime;
                    YTPChanged.videoId = YTPlayer.videoID;
                    jQuery(YTPlayer).trigger(YTPChanged);

                    function parseYTPlayer_data(data) {
                        YTPlayer.videoData = {};
                        YTPlayer.videoData.id = YTPlayer.videoID;
                        YTPlayer.videoData.channelTitle = data.channelTitle;
                        YTPlayer.videoData.title = data.title;
                        YTPlayer.videoData.description = data.description.length < 400 ? data.description : data.description.substring(0, 400) + " ...";
                        YTPlayer.videoData.thumb_max = data.thumbnails.maxres ? data.thumbnails.maxres.url : null;
                        YTPlayer.videoData.thumb_high = data.thumbnails.high ? data.thumbnails.high.url : null;
                        YTPlayer.videoData.thumb_medium = data.thumbnails.medium ? data.thumbnails.medium.url : null;
                        jQuery.mbStorage.set("YTPlayer_data_" + YTPlayer.videoID, YTPlayer.videoData);
                    }
                    if (!data.items[0]) {
                        YTPlayer.videoData = {};
                        YTPlayer.hasData = false;
                    } else {
                        parseYTPlayer_data(data.items[0].snippet);
                        YTPlayer.hasData = true;
                    }
                    var YTPData = jQuery.Event("YTPData");
                    YTPData.prop = {};
                    for (var x in YTPlayer.videoData) {
                        YTPData.prop[x] = YTPlayer.videoData[x];
                    }
                    jQuery(YTPlayer).trigger(YTPData);
                });
            } else {
                setTimeout(function() {
                    var YTPChanged = jQuery.Event("YTPChanged");
                    YTPChanged.time = YTPlayer.currentTime;
                    YTPChanged.videoId = YTPlayer.videoID;
                    jQuery(YTPlayer).trigger(YTPChanged);
                }, 50);
                if (!YTPlayer.opt.autoPlay) { // if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay) {
                    var bgndURL = YTPlayer.opt.coverImage != "false" ? YTPlayer.opt.coverImage : jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + YTPlayer.videoID + "/maxresdefault.jpg";
                    if (bgndURL) YTPlayer.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
                        backgroundSize: "cover"
                    });
                }
                YTPlayer.videoData = null;
            }
            YTPlayer.opt.ratio = YTPlayer.opt.ratio == "auto" ? "16/9" : YTPlayer.opt.ratio;
            if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay) { //&& ( !jQuery.mbBrowser.mobile && !jQuery.isTablet )
                YTPlayer.loading = jQuery("<div/>").addClass("loading").html("Loading").hide();
                jQuery(YTPlayer).append(YTPlayer.loading);
                YTPlayer.loading.fadeIn();
            }
        },
        /**
         * removeStoredData
         */
        removeStoredData: function removeStoredData() {
            jQuery.mbStorage.remove();
        },
        /**
         * getVideoData
         * @returns {*|YTPlayer.videoData}
         */
        getVideoData: function getVideoData() {
            var YTPlayer = this.get(0);
            return YTPlayer.videoData;
        },
        /**
         * getVideoID
         * @returns {*|YTPlayer.videoID|boolean}
         */
        getVideoID: function getVideoID() {
            var YTPlayer = this.get(0);
            return YTPlayer.videoID || false;
        },
        /**
         * getPlaylistID
         * @returns {*|YTPlayer.videoID|boolean}
         */
        getPlaylistID: function getPlaylistID() {
            var YTPlayer = this.get(0);
            return YTPlayer.playlistID || false;
        },
        /**
         * setVideoQuality
         * @param quality
         * @returns {jQuery.mbYTPlayer}
         */
        setVideoQuality: function setVideoQuality(quality) {
            var YTPlayer = this.get(0);
            YTPlayer.player.setPlaybackQuality(quality);
            return this;
        },
        /**
         * playlist
         * @param videos -> Array or String (videoList ID)
         * @param shuffle
         * @param callback
         * @returns {jQuery.mbYTPlayer}
         *
         * To retrieve a Youtube playlist the Youtube API key is required:
         * https://console.developers.google.com/
         * jQuery.mbYTPlayer.apiKey
         */
        playlist: function playlist(videos, shuffle, callback) {
            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            /**
                   get the video list from the Youtube playlist passing the ID
                   */
            if (typeof videos == "String" && jQuery.mbYTPlayer.apiKey != "") {
                /**
                 * getVideoListFromYoutube
                 * @param playListID
                 * @param page
                 */
                var getVideoListFromYoutube = function getVideoListFromYoutube(playListID, page) {
                    page = page || '';
                    var youtubeAPI = "https://www.googleapis.com/youtube/v3/playlistItems";
                    jQuery.getJSON(youtubeAPI, {
                        part: "snippet,contentDetails",
                        playlistId: playListID, //You have to enter the PlaylistID
                        maxResults: 50,
                        pageToken: page,
                        key: jQuery.mbYTPlayer.apiKey //You have to enter your own YoutubeAPIKey
                    }).done(function(response) {
                        CreateVideosArray(response);
                        if (response.nextPageToken) {
                            page = response.nextPageToken;
                            getVideoListFromYoutube(plID, page, videos);
                        } else {
                            $YTPlayer.YTPlaylist(YTPlayer.videos, shuffle, callback);
                        };
                    });
                };
                /**
                 * CreateVideosArray
                 * @param response
                 * @constructor
                 */
                var CreateVideosArray = function CreateVideosArray(response) {
                    var k = response.items.length;
                    for (var i = 0; i < k; i++) {
                        YTPlayer.videos.push({
                            "videoURL": response.items[i].contentDetails.videoId
                        });
                    };
                };;;
                getVideoListFromYoutube(videos);
                return this;
            }
            YTPlayer.isList = true;
            if (shuffle) videos = jQuery.shuffle(videos);
            if (!YTPlayer.videoID) {
                YTPlayer.videos = videos;
                YTPlayer.videoCounter = 1;
                YTPlayer.videoLength = videos.length;
                jQuery(YTPlayer).data("property", videos[0]);
                jQuery(YTPlayer).YTPlayer();
            }
            if (typeof callback == "function") jQuery(YTPlayer).one("YTPChanged", function() {
                callback(YTPlayer);
            });
            jQuery(YTPlayer).on("YTPEnd", function() {
                jQuery(YTPlayer).YTPPlayNext();
            });
            return this;
        },
        /**
         * playNext
         * @returns {jQuery.mbYTPlayer}
         */
        playNext: function playNext() {
            var YTPlayer = this.get(0);
            YTPlayer.videoCounter++;
            if (YTPlayer.videoCounter > YTPlayer.videoLength) YTPlayer.videoCounter = 1;
            jQuery(YTPlayer).YTPPlayIndex(YTPlayer.videoCounter);
            return this;
        },
        /**
         * playPrev
         * @returns {jQuery.mbYTPlayer}
         */
        playPrev: function playPrev() {
            var YTPlayer = this.get(0);
            YTPlayer.videoCounter--;
            if (YTPlayer.videoCounter <= 0) YTPlayer.videoCounter = YTPlayer.videoLength;
            jQuery(YTPlayer).YTPPlayIndex(YTPlayer.videoCounter);
            return this;
        },
        /**
         * playIndex
         * @param idx
         * @returns {jQuery.mbYTPlayer}
         */
        playIndex: function playIndex(idx) {
            var YTPlayer = this.get(0);
            if (YTPlayer.checkForStartAt) {
                clearInterval(YTPlayer.checkForStartAt);
                clearInterval(YTPlayer.getState);
            }
            YTPlayer.videoCounter = idx;
            if (YTPlayer.videoCounter >= YTPlayer.videoLength) YTPlayer.videoCounter = YTPlayer.videoLength;
            var video = YTPlayer.videos[YTPlayer.videoCounter - 1];
            jQuery(YTPlayer).YTPChangeVideo(video);
            return this;
        },
        /**
         * changeVideo
         * @param opt
         * @returns {jQuery.mbYTPlayer}
         */
        changeVideo: function changeVideo(opt) {
            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            YTPlayer.opt.startAt = 0;
            YTPlayer.opt.stopAt = 0;
            YTPlayer.opt.mask = false;
            YTPlayer.opt.mute = true;
            YTPlayer.opt.autoPlay = true;
            YTPlayer.opt.addFilters = false;
            YTPlayer.opt.coverImage = false;
            YTPlayer.hasData = false;
            YTPlayer.hasChanged = true;
            YTPlayer.player.loopTime = undefined;
            if (opt) jQuery.extend(YTPlayer.opt, opt);
            YTPlayer.videoID = getYTPVideoID(YTPlayer.opt.videoURL).videoID;
            if (YTPlayer.opt.loop && typeof YTPlayer.opt.loop == "boolean") YTPlayer.opt.loop = 9999;
            YTPlayer.wrapper.css({
                background: "none"
            });
            jQuery(YTPlayer.playerEl).CSSAnimate({
                opacity: 0
            }, YTPlayer.opt.fadeOnStartTime, function() {
                jQuery.mbYTPlayer.getDataFromAPI(YTPlayer);
                $YTPlayer.YTPGetPlayer().loadVideoById({
                    videoId: YTPlayer.videoID, // startSeconds: YTPlayer.opt.startAt,
                    // endSeconds: YTPlayer.opt.stopAt,
                    suggestedQuality: YTPlayer.opt.quality
                });
                $YTPlayer.YTPPause();
                $YTPlayer.optimizeDisplay();
                $YTPlayer.YTPCheckForState();
            });
            var YTPChangeVideo = jQuery.Event("YTPChangeVideo");
            YTPChangeVideo.time = YTPlayer.currentTime;
            jQuery(YTPlayer).trigger(YTPChangeVideo);
            jQuery.mbYTPlayer.applyMask(YTPlayer);
            return this;
        },
        /**
         * getPlayer
         * @returns {player}
         */
        getPlayer: function getPlayer() {
            return jQuery(this).get(0).player;
        },
        /**
         * playerDestroy
         * @returns {jQuery.mbYTPlayer}
         */
        playerDestroy: function playerDestroy() {
            var YTPlayer = this.get(0);
            ytp.YTAPIReady = true;
            ytp.backgroundIsInited = false;
            YTPlayer.isInit = false;
            YTPlayer.videoID = null;
            YTPlayer.isReady = false;
            YTPlayer.wrapper.remove();
            jQuery("#controlBar_" + YTPlayer.id).remove();
            clearInterval(YTPlayer.checkForStartAt);
            clearInterval(YTPlayer.getState);
            return this;
        },
        /**
         * fullscreen
         * @param real
         * @returns {jQuery.mbYTPlayer}
         */
        fullscreen: function fullscreen(real) {
            var YTPlayer = this.get(0);
            if (typeof real == "undefined") real = YTPlayer.opt.realfullscreen;
            real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var fullScreenBtn = controls.find(".mb_OnlyYT");
            var videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    var isFullScreen = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    if (!isFullScreen) {
                        YTPlayer.isAlone = false;
                        fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                        jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality);
                        videoWrapper.removeClass("YTPFullscreen");
                        videoWrapper.CSSAnimate({
                            opacity: YTPlayer.opt.opacity
                        }, YTPlayer.opt.fadeOnStartTime);
                        videoWrapper.css({
                            zIndex: 0
                        });
                        if (YTPlayer.isBackground) {
                            jQuery("body").after(controls);
                        } else {
                            YTPlayer.wrapper.before(controls);
                        }
                        jQuery(window).resize();
                        jQuery(YTPlayer).trigger("YTPFullScreenEnd");
                    } else {
                        jQuery(YTPlayer).YTPSetVideoQuality("default");
                        jQuery(YTPlayer).trigger("YTPFullScreenStart");
                    }
                });
            }
            if (!YTPlayer.isAlone) {
                var hideMouse = function hideMouse() {
                    YTPlayer.overlay.css({
                        cursor: "none"
                    });
                };
                jQuery(document).on("mousemove.YTPlayer", function(e) {
                    YTPlayer.overlay.css({
                        cursor: "auto"
                    });
                    clearTimeout(YTPlayer.hideCursor);
                    if (!jQuery(e.target).parents().is(".mb_YTPBar")) YTPlayer.hideCursor = setTimeout(hideMouse, 3000);
                });
                hideMouse();
                if (real) {
                    videoWrapper.css({
                        opacity: 0
                    });
                    videoWrapper.addClass("YTPFullscreen");
                    launchFullscreen(videoWrapper.get(0));
                    setTimeout(function() {
                        videoWrapper.CSSAnimate({
                            opacity: 1
                        }, YTPlayer.opt.fadeOnStartTime * 2);
                        videoWrapper.append(controls);
                        jQuery(YTPlayer).optimizeDisplay();
                        YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, true);
                    }, YTPlayer.opt.fadeOnStartTime);
                } else videoWrapper.css({
                    zIndex: 10000
                }).CSSAnimate({
                    opacity: 1
                }, YTPlayer.opt.fadeOnStartTime * 2);
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite);
                YTPlayer.isAlone = true;
            } else {
                jQuery(document).off("mousemove.YTPlayer");
                clearTimeout(YTPlayer.hideCursor);
                YTPlayer.overlay.css({
                    cursor: "auto"
                });
                if (real) {
                    cancelFullscreen();
                } else {
                    videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, YTPlayer.opt.fadeOnStartTime);
                    videoWrapper.css({
                        zIndex: 0
                    });
                }
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                YTPlayer.isAlone = false;
            }

            function RunPrefixMethod(obj, method) {
                var pfx = ["webkit", "moz", "ms", "o", ""];
                var p = 0,
                    m, t;
                while (p < pfx.length && !obj[m]) {
                    m = method;
                    if (pfx[p] == "") {
                        m = m.substr(0, 1).toLowerCase() + m.substr(1);
                    }
                    m = pfx[p] + m;
                    t = _typeof(obj[m]);
                    if (t != "undefined") {
                        pfx = [pfx[p]];
                        return t == "function" ? obj[m]() : obj[m];
                    }
                    p++;
                }
            }

            function launchFullscreen(element) {
                RunPrefixMethod(element, "RequestFullScreen");
            }

            function cancelFullscreen() {
                if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
                    RunPrefixMethod(document, "CancelFullScreen");
                }
            }
            return this;
        },
        /**
         * toggleLoops
         * @returns {jQuery.mbYTPlayer}
         */
        toggleLoops: function toggleLoops() {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            if (data.loop == 1) {
                data.loop = 0;
            } else {
                if (data.startAt) {
                    YTPlayer.player.seekTo(data.startAt);
                } else {
                    YTPlayer.player.playVideo();
                }
                data.loop = 1;
            }
            return this;
        },
        /**
         * play
         * @returns {jQuery.mbYTPlayer}
         */
        play: function play() {
            var YTPlayer = this.get(0);
            if (!YTPlayer.isReady) return this;
            YTPlayer.player.playVideo();
            jQuery(YTPlayer.playerEl).css({
                opacity: 1
            });
            YTPlayer.wrapper.css({
                backgroundImage: "none"
            });
            YTPlayer.wrapper.CSSAnimate({
                opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
            }, YTPlayer.opt.fadeOnStartTime);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.pause);
            YTPlayer.state = 1;
            YTPlayer.orig_background = jQuery(YTPlayer).css("background-image");
            return this;
        },
        /**
         * togglePlay
         * @param callback
         * @returns {jQuery.mbYTPlayer}
         */
        togglePlay: function togglePlay(callback) {
            var YTPlayer = this.get(0);
            if (YTPlayer.state == 1) this.YTPPause();
            else this.YTPPlay();
            if (typeof callback == "function") callback(YTPlayer.state);
            return this;
        },
        /**
         * stop
         * @returns {jQuery.mbYTPlayer}
         */
        stop: function stop() {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.play);
            YTPlayer.player.stopVideo();
            return this;
        },
        /**
         * pause
         * @returns {jQuery.mbYTPlayer}
         */
        pause: function pause() {
            var YTPlayer = this.get(0);
            YTPlayer.player.pauseVideo();
            YTPlayer.state = 2;
            return this;
        },
        /**
         * seekTo
         * @param sec
         * @returns {jQuery.mbYTPlayer}
         */
        seekTo: function seekTo(sec) {
            var YTPlayer = this.get(0);
            YTPlayer.player.seekTo(sec, true);
            return this;
        },
        /**
         * setVolume
         * @param val
         * @returns {jQuery.mbYTPlayer}
         */
        setVolume: function setVolume(val) {
            var YTPlayer = this.get(0);
            YTPlayer.opt.vol = val;
            YTPlayer.player.setVolume(YTPlayer.opt.vol);
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.updateSliderVal(val);
            return this;
        },
        /**
         * getVolume
         * @returns {*}
         */
        getVolume: function getVolume() {
            var YTPlayer = this.get(0);
            return YTPlayer.player.getVolume();
        },
        /**
         * toggleVolume
         * @returns {jQuery.mbYTPlayer}
         */
        toggleVolume: function toggleVolume() {
            var YTPlayer = this.get(0);
            if (!YTPlayer) return this;
            if (YTPlayer.isMute) {
                this.YTPSetVolume(YTPlayer.opt.vol);
                this.YTPUnmute();
            } else {
                this.YTPMute();
            }
            return this;
        },
        /**
         * mute
         * @returns {jQuery.mbYTPlayer}
         */
        mute: function mute() {
            var YTPlayer = this.get(0);
            if (YTPlayer.isMute) return this;
            YTPlayer.player.mute();
            YTPlayer.isMute = true;
            YTPlayer.player.setVolume(0);
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length && YTPlayer.volumeBar.width() > 10) {
                YTPlayer.volumeBar.updateSliderVal(0);
            }
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var muteBtn = controls.find(".mb_YTPMuteUnmute");
            muteBtn.html(jQuery.mbYTPlayer.controls.unmute);
            jQuery(YTPlayer).addClass("isMuted");
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.addClass("muted");
            var YTPEvent = jQuery.Event("YTPMuted");
            YTPEvent.time = YTPlayer.currentTime;
            if (!YTPlayer.preventTrigger) jQuery(YTPlayer).trigger(YTPEvent);
            return this;
        },
        /**
         * unmute
         * @returns {jQuery.mbYTPlayer}
         */
        unmute: function unmute() {
            var YTPlayer = this.get(0);
            if (!YTPlayer.isMute) return this;
            YTPlayer.player.unMute();
            YTPlayer.isMute = false;
            jQuery(YTPlayer).YTPSetVolume(YTPlayer.opt.vol);
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol > 10 ? YTPlayer.opt.vol : 10);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var muteBtn = controls.find(".mb_YTPMuteUnmute");
            muteBtn.html(jQuery.mbYTPlayer.controls.mute);
            jQuery(YTPlayer).removeClass("isMuted");
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.removeClass("muted");
            var YTPEvent = jQuery.Event("YTPUnmuted");
            YTPEvent.time = YTPlayer.currentTime;
            if (!YTPlayer.preventTrigger) jQuery(YTPlayer).trigger(YTPEvent);
            return this;
        },
        /* FILTERS ---------------------------------------------------------------------------------------------------------*/
        /**
         * applyFilter
         * @param filter
         * @param value
         * @returns {jQuery.mbYTPlayer}
         */
        applyFilter: function applyFilter(filter, value) {
            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            YTPlayer.filters[filter].value = value;
            if (YTPlayer.filtersEnabled) $YTPlayer.YTPEnableFilters();
        },
        /**
         * applyFilters
         * @param filters
         * @returns {jQuery.mbYTPlayer}
         */
        applyFilters: function applyFilters(filters) {
            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            if (!YTPlayer.isReady) {
                jQuery(YTPlayer).on("YTPReady", function() {
                    $YTPlayer.YTPApplyFilters(filters);
                });
                return this;
            }
            for (var key in filters) {
                $YTPlayer.YTPApplyFilter(key, filters[key]);
            }
            $YTPlayer.trigger("YTPFiltersApplied");
        },
        /**
         * toggleFilter
         * @param filter
         * @param value
         * @returns {jQuery.mbYTPlayer}
         */
        toggleFilter: function toggleFilter(filter, value) {
            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            if (!YTPlayer.filters[filter].value) YTPlayer.filters[filter].value = value;
            else YTPlayer.filters[filter].value = 0;
            if (YTPlayer.filtersEnabled) jQuery(YTPlayer).YTPEnableFilters();
            return this;
        },
        /**
         * toggleFilters
         * @param callback
         * @returns {jQuery.mbYTPlayer}
         */
        toggleFilters: function toggleFilters(callback) {
            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            if (YTPlayer.filtersEnabled) {
                jQuery(YTPlayer).trigger("YTPDisableFilters");
                jQuery(YTPlayer).YTPDisableFilters();
            } else {
                jQuery(YTPlayer).YTPEnableFilters();
                jQuery(YTPlayer).trigger("YTPEnableFilters");
            }
            if (typeof callback == "function") callback(YTPlayer.filtersEnabled);
            return this;
        },
        /**
         * disableFilters
         * @returns {jQuery.mbYTPlayer}
         */
        disableFilters: function disableFilters() {
            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            var iframe = jQuery(YTPlayer.playerEl);
            iframe.css("-webkit-filter", "");
            iframe.css("filter", "");
            YTPlayer.filtersEnabled = false;
            return this;
        },
        /**
         * enableFilters
         * @returns {jQuery.mbYTPlayer}
         */
        enableFilters: function enableFilters() {
            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            var iframe = jQuery(YTPlayer.playerEl);
            var filterStyle = "";
            for (var key in YTPlayer.filters) {
                if (YTPlayer.filters[key].value) filterStyle += key.replace("_", "-") + "(" + YTPlayer.filters[key].value + YTPlayer.filters[key].unit + ") ";
            }
            iframe.css("-webkit-filter", filterStyle);
            iframe.css("filter", filterStyle);
            YTPlayer.filtersEnabled = true;
            return this;
        },
        /**
         * removeFilter
         * @param filter
         * @param callback
         * @returns {jQuery.mbYTPlayer}
         */
        removeFilter: function removeFilter(filter, callback) {
            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            if (typeof filter == "function") {
                callback = filter;
                filter = null;
            }
            if (!filter) {
                for (var key in YTPlayer.filters) {
                    $YTPlayer.YTPApplyFilter(key, 0);
                }
                if (typeof callback == "function") callback(key);
                YTPlayer.filters = jQuery.extend(true, {}, jQuery.mbYTPlayer.defaultFilters);
            } else {
                $YTPlayer.YTPApplyFilter(filter, 0);
                if (typeof callback == "function") callback(filter);
            }
            var YTPEvent = jQuery.Event("YTPFiltersApplied");
            $YTPlayer.trigger(YTPEvent);
            return this;
        },
        /**
         * getFilters
         * @returns {filters}
         */
        getFilters: function getFilters() {
            var YTPlayer = this.get(0);
            return YTPlayer.filters;
        },
        /* MASK ---------------------------------------------------------------------------------------------------------*/
        /**
         * addMask
         * @param mask
         * @returns {jQuery.mbYTPlayer}
         */
        addMask: function addMask(mask) {
            var YTPlayer = this.get(0);
            if (!mask) mask = YTPlayer.actualMask;
            var tempImg = jQuery("<img/>").attr("src", mask).on("load", function() {
                YTPlayer.overlay.CSSAnimate({
                    opacity: 0
                }, YTPlayer.opt.fadeOnStartTime, function() {
                    YTPlayer.hasMask = true;
                    tempImg.remove();
                    YTPlayer.overlay.css({
                        backgroundImage: "url(" + mask + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    });
                    YTPlayer.overlay.CSSAnimate({
                        opacity: 1
                    }, YTPlayer.opt.fadeOnStartTime);
                });
            });
            return this;
        },
        /**
         * removeMask
         * @returns {jQuery.mbYTPlayer}
         */
        removeMask: function removeMask() {
            var YTPlayer = this.get(0);
            YTPlayer.overlay.CSSAnimate({
                opacity: 0
            }, YTPlayer.opt.fadeOnStartTime, function() {
                YTPlayer.hasMask = false;
                YTPlayer.overlay.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                });
                YTPlayer.overlay.CSSAnimate({
                    opacity: 1
                }, YTPlayer.opt.fadeOnStartTime);
            });
            return this;
        },
        /**
         * Apply mask
         * @param YTPlayer
         */
        applyMask: function applyMask(YTPlayer) {
            var $YTPlayer = jQuery(YTPlayer);
            $YTPlayer.off("YTPTime.mask");
            if (YTPlayer.opt.mask) {
                if (typeof YTPlayer.opt.mask == "string") {
                    $YTPlayer.YTPAddMask(YTPlayer.opt.mask);
                    YTPlayer.actualMask = YTPlayer.opt.mask;
                } else if (_typeof(YTPlayer.opt.mask) == "object") {
                    for (var time in YTPlayer.opt.mask) {
                        if (YTPlayer.opt.mask[time]) var img = jQuery("<img/>").attr("src", YTPlayer.opt.mask[time]);
                    }
                    if (YTPlayer.opt.mask[0]) $YTPlayer.YTPAddMask(YTPlayer.opt.mask[0]);
                    $YTPlayer.on("YTPTime.mask", function(e) {
                        for (var time in YTPlayer.opt.mask) {
                            if (e.time == time)
                                if (!YTPlayer.opt.mask[time]) {
                                    $YTPlayer.YTPRemoveMask();
                                } else {
                                    $YTPlayer.YTPAddMask(YTPlayer.opt.mask[time]);
                                    YTPlayer.actualMask = YTPlayer.opt.mask[time];
                                }
                        }
                    });
                }
            }
        },
        /**
         * toggleMask
         * @returns {jQuery.mbYTPlayer}
         */
        toggleMask: function toggleMask() {
            var YTPlayer = this.get(0);
            var $YTPlayer = jQuery(YTPlayer);
            if (YTPlayer.hasMask) $YTPlayer.YTPRemoveMask();
            else $YTPlayer.YTPAddMask();
            return this;
        },
        /* CONTROLS --------------------------------------------------------------------------------------------------------*/
        /**
         * manageProgress
         * @returns {{totalTime: number, currentTime: number}}
         */
        manageProgress: function manageProgress() {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var progressBar = controls.find(".mb_YTPProgress");
            var loadedBar = controls.find(".mb_YTPLoaded");
            var timeBar = controls.find(".mb_YTPseekbar");
            var totW = progressBar.outerWidth();
            var currentTime = Math.floor(YTPlayer.player.getCurrentTime());
            var totalTime = Math.floor(YTPlayer.player.getDuration());
            var timeW = currentTime * totW / totalTime;
            var startLeft = 0;
            var loadedW = YTPlayer.player.getVideoLoadedFraction() * 100;
            loadedBar.css({
                left: startLeft,
                width: loadedW + "%"
            });
            timeBar.css({
                left: 0,
                width: timeW
            });
            return {
                totalTime: totalTime,
                currentTime: currentTime
            };
        },
        /**
         * buildControls
         * @param YTPlayer
         */
        buildControls: function buildControls(YTPlayer) {
            jQuery("#controlBar_" + YTPlayer.id).remove();
            if (!YTPlayer.opt.showControls) {
                YTPlayer.controlBar = false;
                return;
            } // @YTPlayer.opt.printUrl: is deprecated; use YTPlayer.opt.showYTLogo
            YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl;
            if (jQuery("#controlBar_" + YTPlayer.id).length) return;
            YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                whiteSpace: "noWrap",
                position: YTPlayer.isBackground ? "fixed" : "absolute",
                zIndex: YTPlayer.isBackground ? 10000 : 1000
            }).hide();
            var buttonBar = jQuery("<div/>").addClass("buttonBar"); /* play/pause button*/
            var playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                if (YTPlayer.player.getPlayerState() == 1) jQuery(YTPlayer).YTPPause();
                else jQuery(YTPlayer).YTPPlay();
            }); /* mute/unmute button*/
            var MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                if (YTPlayer.player.getVolume() == 0) {
                    jQuery(YTPlayer).YTPUnmute();
                } else {
                    jQuery(YTPlayer).YTPMute();
                }
            }); /* volume bar*/
            var volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                display: "inline-block"
            });
            YTPlayer.volumeBar = volumeBar; /* time elapsed */
            var idx = jQuery("<span/>").addClass("mb_YTPTime");
            var vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
            if (vURL.indexOf("http") < 0) vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + YTPlayer.opt.videoURL;
            var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                window.open(vURL, "viewOnYT");
            });
            var onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realfullscreen);
            });
            var progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
                timeBar.css({
                    width: e.clientX - timeBar.offset().left
                });
                YTPlayer.timeW = e.clientX - timeBar.offset().left;
                YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                    width: 0
                });
                var totalTime = Math.floor(YTPlayer.player.getDuration());
                YTPlayer.goto = timeBar.outerWidth() * totalTime / progressBar.outerWidth();
                YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), true);
                YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                    width: 0
                });
            });
            var loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute");
            var timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
            progressBar.append(loadedBar).append(timeBar);
            buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx);
            if (YTPlayer.opt.showYTLogo) {
                buttonBar.append(movieUrl);
            }
            /**
             * Full screen button
             */
            if (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) buttonBar.append(onlyVideo);
            YTPlayer.controlBar.append(buttonBar).append(progressBar);
            if (!YTPlayer.isBackground) {
                YTPlayer.controlBar.addClass("inlinePlayer");
                YTPlayer.wrapper.before(YTPlayer.controlBar);
            } else {
                jQuery("body").after(YTPlayer.controlBar);
            }
            /**
             * Volume slider
             */
            volumeBar.simpleSlider({
                initialval: YTPlayer.opt.vol,
                scale: 100,
                orientation: "h",
                callback: function callback(el) {
                    if (el.value == 0) {
                        jQuery(YTPlayer).YTPMute();
                    } else {
                        jQuery(YTPlayer).YTPUnmute();
                    }
                    YTPlayer.player.setVolume(el.value);
                    if (!YTPlayer.isMute) YTPlayer.opt.vol = el.value;
                }
            });
        },
        /* MANAGE PLAYER STATE ------------------------------------------------------------------------------------------*/
        /**
         * checkForState
         */
        checkForState: function checkForState() {
            var YTPlayer = this.get(0);
            var $YTPlayer = jQuery(YTPlayer);
            clearInterval(YTPlayer.getState);
            var interval = 100; //Checking if player has been removed from the scene
            if (!jQuery.contains(document, YTPlayer)) {
                $YTPlayer.YTPPlayerDestroy();
                clearInterval(YTPlayer.getState);
                clearInterval(YTPlayer.checkForStartAt);
                return;
            }
            jQuery.mbYTPlayer.checkForStart(YTPlayer);
            YTPlayer.getState = setInterval(function() {
                var $YTPlayer = jQuery(YTPlayer);
                if (!YTPlayer.isReady) return;
                var prog = jQuery(YTPlayer).YTPManageProgress();
                var stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0;
                if (YTPlayer.currentTime != prog.currentTime) {
                    var YTPEvent = jQuery.Event("YTPTime");
                    YTPEvent.time = YTPlayer.currentTime;
                    jQuery(YTPlayer).trigger(YTPEvent);
                }
                YTPlayer.currentTime = prog.currentTime;
                YTPlayer.totalTime = YTPlayer.player.getDuration();
                if (YTPlayer.player.getVolume() == 0) $YTPlayer.addClass("isMuted");
                else $YTPlayer.removeClass("isMuted");
                if (YTPlayer.opt.showControls)
                    if (prog.totalTime) {
                        YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime));
                    } else {
                        YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --");
                    }
                    /**
                     * Manage video pause on window blur
                     */
                if (eval(YTPlayer.opt.stopMovieOnBlur)) {
                    if (!document.hasFocus()) {
                        if (YTPlayer.state == 1) {
                            YTPlayer.hasFocus = false;
                            $YTPlayer.YTPPause();
                        }
                    } else if (document.hasFocus() && !YTPlayer.hasFocus && !(YTPlayer.state == -1 || YTPlayer.state == 0)) {
                        YTPlayer.hasFocus = true;
                        YTPlayer.player.playVideo();
                    }
                }
                /**
                 * Manage video pause if not on screen
                 */
                if (YTPlayer.opt.playOnlyIfVisible) {
                    var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer);
                    if (!isOnScreen && YTPlayer.state == 1) {
                        YTPlayer.isOnScreen = false;
                        $YTPlayer.YTPPause();
                    } else if (isOnScreen && !YTPlayer.isOnScreen) {
                        YTPlayer.isOnScreen = true;
                        YTPlayer.player.playVideo();
                    }
                }
                if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact) {
                    YTPlayer.controlBar.addClass("compact");
                    YTPlayer.isCompact = true;
                    if (!YTPlayer.isMute && YTPlayer.volumeBar) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol);
                } else if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact) {
                    YTPlayer.controlBar.removeClass("compact");
                    YTPlayer.isCompact = false;
                    if (!YTPlayer.isMute && YTPlayer.volumeBar) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol);
                } // the video is ended
                if (YTPlayer.player.getPlayerState() > 0 && (parseFloat(YTPlayer.player.getDuration() - .5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                    if (YTPlayer.isEnded) return;
                    YTPlayer.isEnded = true;
                    setTimeout(function() {
                        YTPlayer.isEnded = false;
                    }, 1000);
                    if (YTPlayer.isList) {
                        if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                            YTPlayer.player.loopTime = undefined;
                            clearInterval(YTPlayer.getState);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            YTPEnd.time = YTPlayer.currentTime;
                            jQuery(YTPlayer).trigger(YTPEnd);
                            return;
                        }
                    } else if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                        YTPlayer.player.loopTime = undefined;
                        YTPlayer.preventTrigger = true;
                        YTPlayer.state = 2;
                        jQuery(YTPlayer).YTPPause();
                        YTPlayer.wrapper.CSSAnimate({
                            opacity: 0
                        }, YTPlayer.opt.fadeOnStartTime, function() {
                            if (YTPlayer.controlBar.length) YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            YTPEnd.time = YTPlayer.currentTime;
                            jQuery(YTPlayer).trigger(YTPEnd);
                            YTPlayer.player.seekTo(YTPlayer.opt.startAt, true);
                            if (!YTPlayer.isBackground) {
                                if (YTPlayer.opt.coverImage && YTPlayer.isPlayer) {
                                    YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.orig_background;
                                    YTPlayer.opt.containment.css({
                                        background: "url(" + YTPlayer.opt.coverImage + ") center center",
                                        backgroundSize: "cover"
                                    });
                                }
                            } else if (YTPlayer.orig_background) {
                                jQuery(YTPlayer).css("background-image", YTPlayer.orig_background);
                            }
                        });
                        return;
                    }
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1;
                    YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1;
                    YTPlayer.preventTrigger = true;
                    YTPlayer.state = 2;
                    YTPlayer.player.pauseVideo();
                    YTPlayer.player.seekTo(YTPlayer.opt.startAt, true);
                    YTPlayer.player.playVideo();
                }
            }, interval);
        },
        /**
         * checkForStart
         * @param YTPlayer
         */
        checkForStart: function checkForStart(YTPlayer) {
            var $YTPlayer = jQuery(YTPlayer); /* If the player has been removed from scene destroy it */
            if (!jQuery.contains(document, YTPlayer)) {
                $YTPlayer.YTPPlayerDestroy();
                return;
            } /* CREATE CONTROL BAR */
            jQuery.mbYTPlayer.buildControls(YTPlayer);
            if (YTPlayer.overlay)
                if (YTPlayer.opt.addRaster) {
                    var classN = YTPlayer.opt.addRaster == "dot" ? "raster-dot" : "raster";
                    YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + " retina" : classN);
                } else {
                    YTPlayer.overlay.removeClass(function(index, classNames) { // change the list into an array
                        var current_classes = classNames.split(" "), // array of classes which are to be removed
                            classes_to_remove = [];
                        jQuery.each(current_classes, function(index, class_name) { // if the classname begins with bg add it to the classes_to_remove array
                            if (/raster.*/.test(class_name)) {
                                classes_to_remove.push(class_name);
                            }
                        });
                        classes_to_remove.push("retina"); // turn the array back into a string
                        return classes_to_remove.join(" ");
                    });
                }
            YTPlayer.preventTrigger = true;
            YTPlayer.state = 2;
            $YTPlayer.YTPPause();
            $YTPlayer.YTPMute();
            var startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
            YTPlayer.player.playVideo();
            $YTPlayer.YTPMute(); //if (YTPlayer.start_from_last)
            YTPlayer.player.seekTo(startAt, true);
            YTPlayer.checkForStartAt = setInterval(function() {
                var canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
                if (YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
                    YTPlayer.start_from_last = null;
                    clearInterval(YTPlayer.checkForStartAt);
                    if (typeof YTPlayer.opt.onReady == "function") YTPlayer.opt.onReady(YTPlayer);
                    YTPlayer.isReady = true;
                    $YTPlayer.YTPRemoveFilter();
                    if (YTPlayer.opt.addFilters) {
                        $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters);
                    } else {
                        $YTPlayer.YTPApplyFilters({});
                    }
                    $YTPlayer.YTPEnableFilters();
                    var YTPready = jQuery.Event("YTPReady");
                    YTPready.time = YTPlayer.currentTime;
                    jQuery(YTPlayer).trigger(YTPready);
                    YTPlayer.preventTrigger = true;
                    YTPlayer.state = 2;
                    jQuery(YTPlayer).YTPPause();
                    if (!YTPlayer.opt.mute) jQuery(YTPlayer).YTPUnmute();
                    YTPlayer.preventTrigger = false;
                    if (typeof _gaq != "undefined" && eval(YTPlayer.opt.gaTrack)) _gaq.push(['_trackEvent', 'YTPlayer', 'Play', YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]);
                    else if (typeof ga != "undefined" && eval(YTPlayer.opt.gaTrack)) ga('send', 'event', 'YTPlayer', 'play', YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                    if (YTPlayer.opt.autoPlay) {
                        var YTPStart = jQuery.Event("YTPStart");
                        YTPStart.time = YTPlayer.currentTime;
                        jQuery(YTPlayer).trigger(YTPStart); /* Fix for Safari freeze */
                        if (jQuery.mbBrowser.os.name == "mac" && jQuery.mbBrowser.safari) {
                            setTimeout(function() {
                                $YTPlayer.YTPPlay();
                            }, 10);
                        } else $YTPlayer.YTPPlay();
                    } else {
                        YTPlayer.player.pauseVideo();
                        setTimeout(function() {
                            if (YTPlayer.start_from_last) YTPlayer.player.seekTo(startAt, true);
                            if (!YTPlayer.isPlayer) {
                                if (!YTPlayer.opt.coverImage) {
                                    jQuery(YTPlayer.playerEl).CSSAnimate({
                                        opacity: 1
                                    }, YTPlayer.opt.fadeOnStartTime);
                                    YTPlayer.wrapper.CSSAnimate({
                                        opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                    }, YTPlayer.opt.fadeOnStartTime);
                                } else {
                                    YTPlayer.wrapper.css({
                                        opacity: 0
                                    });
                                    setTimeout(function() {
                                        YTPlayer.wrapper.css({
                                            background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.coverImage + ") center center",
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat"
                                        });
                                        /*
                                                                                    .CSSAnimate({
                                                                                  opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                                                                }, YTPlayer.opt.fadeOnStartTime);
                                                            */
                                    }, YTPlayer.opt.fadeOnStartTime);
                                }
                            }
                        }, 150);
                        if (YTPlayer.controlBar.length) YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                    }
                    if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && YTPlayer.loading && YTPlayer.loading.length) {
                        YTPlayer.loading.html("Ready");
                        setTimeout(function() {
                            YTPlayer.loading.fadeOut();
                        }, 100);
                    }
                    if (YTPlayer.controlBar && YTPlayer.controlBar.length) YTPlayer.controlBar.slideDown(1000);
                } else if (jQuery.mbBrowser.os.name == "mac" && jQuery.mbBrowser.safari) {
                    YTPlayer.player.playVideo();
                    if (startAt >= 0) YTPlayer.player.seekTo(startAt, true);
                }
            }, 500);
            return $YTPlayer;
        },
        /* TIME METHODS -------------------------------------------------------------------------------------------*/
        /**
         * getTime
         * @returns {string} time
         */
        getTime: function getTime() {
            var YTPlayer = this.get(0);
            return jQuery.mbYTPlayer.formatTime(YTPlayer.currentTime);
        },
        /**
         * getTotalTime
         * @returns {string} total time
         */
        getTotalTime: function getTotalTime(format) {
            var YTPlayer = this.get(0);
            return jQuery.mbYTPlayer.formatTime(YTPlayer.totalTime);
        },
        /**
         * formatTime
         * @param s
         * @returns {string}
         */
        formatTime: function formatTime(s) {
            var min = Math.floor(s / 60);
            var sec = Math.floor(s - 60 * min);
            return (min <= 9 ? "0" + min : min) + " : " + (sec <= 9 ? "0" + sec : sec);
        },
        /* PLAYER POSITION AND SIZE OPTIMIZATION-------------------------------------------------------------------------------------------*/
        /**
         * setAnchor
         * @param anchor
         */
        setAnchor: function setAnchor(anchor) {
            var $YTplayer = this;
            $YTplayer.optimizeDisplay(anchor);
        },
        /**
         * getAnchor
         * @param anchor
         */
        getAnchor: function getAnchor() {
            var YTPlayer = this.get(0);
            return YTPlayer.opt.anchor;
        }
    };
    /**
     * optimizeDisplay
     * @param anchor
     * can be center, top, bottom, right, left; (default is center,center)
     */
    jQuery.fn.optimizeDisplay = function(anchor) {
        var YTPlayer = this.get(0);
        var vid = {};
        YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor;
        YTPlayer.opt.anchor = typeof YTPlayer.opt.anchor != "undefined " ? YTPlayer.opt.anchor : "center,center";
        var YTPAlign = YTPlayer.opt.anchor.split(",");
        var el = YTPlayer.wrapper;
        var iframe = jQuery(YTPlayer.playerEl);
        if (YTPlayer.opt.optimizeDisplay) {
            var abundance = iframe.height() * YTPlayer.opt.abundance;
            var win = {};
            win.width = el.outerWidth();
            win.height = el.outerHeight() + abundance; // TODO why do we need to check for ratio == auto in every method, shouldn't this be handled in buildPlayer()?
            // The buildPlayer is called once while the ratio could be set each time the changeVideo is called
            YTPlayer.opt.ratio = YTPlayer.opt.ratio === "auto" ? 16 / 9 : YTPlayer.opt.ratio;
            YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio);
            vid.width = win.width;
            vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio);
            vid.marginTop = Math.ceil(-((vid.height - win.height) / 2));
            vid.marginLeft = 0;
            var lowest = vid.height < win.height;
            if (lowest) {
                vid.height = win.height;
                vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio);
                vid.marginTop = 0;
                vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2));
            }
            for (var a in YTPAlign) {
                if (YTPAlign.hasOwnProperty(a)) {
                    var al = YTPAlign[a].replace(/ /g, "");
                    switch (al) {
                        case "top":
                            vid.marginTop = lowest ? -((vid.height - win.height) / 2) : 0;
                            break;
                        case "bottom":
                            vid.marginTop = lowest ? 0 : -(vid.height - win.height);
                            break;
                        case "left":
                            vid.marginLeft = 0;
                            break;
                        case "right":
                            vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
                            break;
                        default:
                            if (vid.width > win.width) vid.marginLeft = -((vid.width - win.width) / 2);
                            break;
                    }
                }
            }
        } else {
            vid.width = "100%";
            vid.height = "100%";
            vid.marginTop = 0;
            vid.marginLeft = 0;
        }
        iframe.css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft,
            maxWidth: "initial"
        });
    }; /* UTILITIES -----------------------------------------------------------------------------------------------------------------------*/
    /**
     * shuffle
     * @param arr
     * @returns {Array|string|Blob|*}
     *
     */
    jQuery.shuffle = function(arr) {
        var newArray = arr.slice();
        var len = newArray.length;
        var i = len;
        while (i--) {
            var p = parseInt(Math.random() * len);
            var t = newArray[i];
            newArray[i] = newArray[p];
            newArray[p] = t;
        }
        return newArray;
    };
    /**
     * Unselectable
     * @returns {*}
     */
    jQuery.fn.unselectable = function() {
        return this.each(function() {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on");
        });
    }; /* EXTERNAL METHODS -----------------------------------------------------------------------------------------------------------------------*/
    jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer;
    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer;
    jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState;
    jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer;
    jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID;
    jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID;
    jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo;
    jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy;
    jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play;
    jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay;
    jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop;
    jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause;
    jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo;
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist;
    jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext;
    jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev;
    jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex;
    jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute;
    jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute;
    jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume;
    jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume;
    jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume;
    jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData;
    jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen;
    jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops;
    jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
    jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress;
    jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter;
    jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters;
    jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter;
    jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters;
    jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter;
    jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters;
    jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters;
    jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters;
    jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime;
    jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime;
    jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask;
    jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask;
    jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask;
    jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor;
    jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor;
})(jQuery, ytp);;
/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.CSSAnimate.min.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 26/03/14 21.40
 *  *****************************************************************************
 */
jQuery.support.CSStransition = function() {
    var d = (document.body || document.documentElement).style;
    return void 0 !== d.transition || void 0 !== d.WebkitTransition || void 0 !== d.MozTransition || void 0 !== d.MsTransition || void 0 !== d.OTransition;
}();

function uncamel(d) {
    return d.replace(/([A-Z])/g, function(a) {
        return "-" + a.toLowerCase();
    });
}

function setUnit(d, a) {
    return "string" !== typeof d || d.match(/^[\-0-9\.]+jQuery/) ? "" + d + a : d;
}

function setFilter(d, a, b) {
    var c = uncamel(a),
        g = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    d[g + "filter"] = d[g + "filter"] || "";
    b = setUnit(b > jQuery.CSS.filters[a].max ? jQuery.CSS.filters[a].max : b, jQuery.CSS.filters[a].unit);
    d[g + "filter"] += c + "(" + b + ") ";
    delete d[a];
}
jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        },
        brightness: {
            min: 0,
            max: 400,
            unit: "%"
        },
        contrast: {
            min: 0,
            max: 400,
            unit: "%"
        },
        grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        },
        hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        },
        invert: {
            min: 0,
            max: 100,
            unit: "%"
        },
        saturate: {
            min: 0,
            max: 400,
            unit: "%"
        },
        sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    normalizeCss: function normalizeCss(d) {
        var a = jQuery.extend(!0, {}, d);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
        jQuery.CSS.sfx = "";
        for (var b in a) {
            "transform" === b && (a[jQuery.CSS.sfx + "transform"] = a[b], delete a[b]);
            "transform-origin" === b && (a[jQuery.CSS.sfx + "transform-origin"] = d[b], delete a[b]);
            "filter" !== b || jQuery.browser.mozilla || (a[jQuery.CSS.sfx + "filter"] = d[b], delete a[b]);
            "blur" === b && setFilter(a, "blur", d[b]);
            "brightness" === b && setFilter(a, "brightness", d[b]);
            "contrast" === b && setFilter(a, "contrast", d[b]);
            "grayscale" === b && setFilter(a, "grayscale", d[b]);
            "hueRotate" === b && setFilter(a, "hueRotate", d[b]);
            "invert" === b && setFilter(a, "invert", d[b]);
            "saturate" === b && setFilter(a, "saturate", d[b]);
            "sepia" === b && setFilter(a, "sepia", d[b]);
            if ("x" === b) {
                var c = jQuery.CSS.sfx + "transform";
                a[c] = a[c] || "";
                a[c] += " translateX(" + setUnit(d[b], "px") + ")";
                delete a[b];
            }
            "y" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " translateY(" + setUnit(d[b], "px") + ")", delete a[b]);
            "z" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " translateZ(" + setUnit(d[b], "px") + ")", delete a[b]);
            "rotate" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " rotate(" + setUnit(d[b], "deg") + ")", delete a[b]);
            "rotateX" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " rotateX(" + setUnit(d[b], "deg") + ")", delete a[b]);
            "rotateY" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " rotateY(" + setUnit(d[b], "deg") + ")", delete a[b]);
            "rotateZ" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " rotateZ(" + setUnit(d[b], "deg") + ")", delete a[b]);
            "scale" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " scale(" + setUnit(d[b], "") + ")", delete a[b]);
            "scaleX" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " scaleX(" + setUnit(d[b], "") + ")", delete a[b]);
            "scaleY" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " scaleY(" + setUnit(d[b], "") + ")", delete a[b]);
            "scaleZ" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " scaleZ(" + setUnit(d[b], "") + ")", delete a[b]);
            "skew" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " skew(" + setUnit(d[b], "deg") + ")", delete a[b]);
            "skewX" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " skewX(" + setUnit(d[b], "deg") + ")", delete a[b]);
            "skewY" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " skewY(" + setUnit(d[b], "deg") + ")", delete a[b]);
            "perspective" === b && (c = jQuery.CSS.sfx + "transform", a[c] = a[c] || "", a[c] += " perspective(" + setUnit(d[b], "px") + ")", delete a[b]);
        }
        return a;
    },
    getProp: function getProp(d) {
        var a = [],
            b;
        for (b in d) {
            0 > a.indexOf(b) && a.push(uncamel(b));
        }
        return a.join(",");
    },
    animate: function animate(d, a, b, c, g) {
        return this.each(function() {
            function n() {
                e.called = !0;
                e.CSSAIsRunning = !1;
                h.off(jQuery.CSS.transitionEnd + "." + e.id);
                clearTimeout(e.timeout);
                h.css(jQuery.CSS.sfx + "transition", "");
                "function" == typeof g && g.apply(e);
                "function" == typeof e.CSSqueue && (e.CSSqueue(), e.CSSqueue = null);
            }
            var e = this,
                h = jQuery(this);
            e.id = e.id || "CSSA_" + new Date().getTime();
            var k = k || {
                type: "noEvent"
            };
            if (e.CSSAIsRunning && e.eventType == k.type && !jQuery.browser.msie && 9 >= jQuery.browser.version) e.CSSqueue = function() {
                h.CSSAnimate(d, a, b, c, g);
            };
            else if (e.CSSqueue = null, e.eventType = k.type, 0 !== h.length && d) {
                d = jQuery.normalizeCss(d);
                e.CSSAIsRunning = !0;
                "function" == typeof a && (g = a, a = jQuery.fx.speeds._default);
                "function" == typeof b && (c = b, b = 0);
                "string" == typeof b && (g = b, b = 0);
                "function" == typeof c && (g = c, c = "cubic-bezier(0.65,0.03,0.36,0.72)");
                if ("string" == typeof a)
                    for (var l in jQuery.fx.speeds) {
                        if (a == l) {
                            a = jQuery.fx.speeds[l];
                            break;
                        } else a = jQuery.fx.speeds._default;
                    }
                a || (a = jQuery.fx.speeds._default);
                "string" === typeof g && (c = g, g = null);
                if (jQuery.support.CSStransition) {
                    var f = {
                        "default": "ease",
                        "in": "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    f[c] && (c = f[c]);
                    h.off(jQuery.CSS.transitionEnd + "." + e.id);
                    f = jQuery.CSS.getProp(d);
                    var m = {};
                    jQuery.extend(m, d);
                    m[jQuery.CSS.sfx + "transition-property"] = f;
                    m[jQuery.CSS.sfx + "transition-duration"] = a + "ms";
                    m[jQuery.CSS.sfx + "transition-delay"] = b + "ms";
                    m[jQuery.CSS.sfx + "transition-timing-function"] = c;
                    setTimeout(function() {
                        h.one(jQuery.CSS.transitionEnd + "." + e.id, n);
                        h.css(m);
                    }, 1);
                    e.timeout = setTimeout(function() {
                        e.called || !g ? (e.called = !1, e.CSSAIsRunning = !1) : (h.css(jQuery.CSS.sfx + "transition", ""), g.apply(e), e.CSSAIsRunning = !1, "function" == typeof e.CSSqueue && (e.CSSqueue(), e.CSSqueue = null));
                    }, a + b + 10);
                } else {
                    for (f in d) {
                        "transform" === f && delete d[f], "filter" === f && delete d[f], "transform-origin" === f && delete d[f], "auto" === d[f] && delete d[f], "x" === f && (k = d[f], l = "left", d[l] = k, delete d[f]), "y" === f && (k = d[f], l = "top", d[l] = k, delete d[f]), "-ms-transform" !== f && "-ms-filter" !== f || delete d[f];
                    }
                    h.delay(b).animate(d, a, g);
                }
            }
        });
    }
};
jQuery.fn.CSSAnimate = jQuery.CSS.animate;
jQuery.normalizeCss = jQuery.CSS.normalizeCss;
jQuery.fn.css3 = function(d) {
    return this.each(function() {
        var a = jQuery(this),
            b = jQuery.normalizeCss(d);
        a.css(b);
    });
};;
/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.browser.min.js                                                                                                                   _
 _ last modified: 24/05/17 19.56                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2017. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {};
jQuery.browser.mozilla = !1;
jQuery.browser.webkit = !1;
jQuery.browser.opera = !1;
jQuery.browser.safari = !1;
jQuery.browser.chrome = !1;
jQuery.browser.androidStock = !1;
jQuery.browser.msie = !1;
jQuery.browser.edge = !1;
jQuery.browser.ua = nAgt;

function isTouchSupported() {
    var a = nAgt.msMaxTouchPoints,
        e = "ontouchstart" in document.createElement("div");
    return a || e ? !0 : !1;
}
var getOS = function getOS() {
    var a = {
        version: "Unknown version",
        name: "Unknown OS"
    }; - 1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"); - 1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"); - 1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux");
    /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X ([\.\_\d]+)/.exec(nAgt)[1], a.version = a.version.replace(/_/g, ".").substring(0, 5));
    /Windows/.test(nAgt) && (a.version = "Unknown.Unknown");
    /Windows NT 5.1/.test(nAgt) && (a.version = "5.1");
    /Windows NT 6.0/.test(nAgt) && (a.version = "6.0");
    /Windows NT 6.1/.test(nAgt) && (a.version = "6.1");
    /Windows NT 6.2/.test(nAgt) && (a.version = "6.2");
    /Windows NT 10.0/.test(nAgt) && (a.version = "10.0");
    /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown");
    a.name = a.name.toLowerCase();
    a.major_version = "Unknown";
    a.minor_version = "Unknown";
    "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]), a.minor_version = parseFloat(a.version.split(".")[1]));
    return a;
};
jQuery.browser.os = getOS();
jQuery.browser.hasTouch = isTouchSupported();
jQuery.browser.name = navigator.appName;
jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0;
    jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end);
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
jQuery.browser.version = jQuery.browser.majorVersion;
jQuery.browser.android = /Android/i.test(nAgt);
jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt);
jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt);
jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt);
jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt);
jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt);
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle;
jQuery.isMobile = jQuery.browser.mobile;
jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width();
jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt);
jQuery.mbBrowser = jQuery.browser;
jQuery.browser.versionCompare = function(a, e) {
    if ("stringstring" != (typeof a === "undefined" ? "undefined" : _typeof(a)) + (typeof e === "undefined" ? "undefined" : _typeof(e))) return !1;
    for (var c = a.split("."), d = e.split("."), b = 0, f = Math.max(c.length, d.length); b < f; b++) {
        if (c[b] && !d[b] && 0 < parseInt(c[b]) || parseInt(c[b]) > parseInt(d[b])) return 1;
        if (d[b] && !c[b] && 0 < parseInt(d[b]) || parseInt(c[b]) < parseInt(d[b])) return -1;
    }
    return 0;
};;
/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.simpleSlider.min.js                                                                                                              _
 _ last modified: 09/05/17 19.31                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2017. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {};
jQuery.browser.mozilla = !1;
jQuery.browser.webkit = !1;
jQuery.browser.opera = !1;
jQuery.browser.safari = !1;
jQuery.browser.chrome = !1;
jQuery.browser.androidStock = !1;
jQuery.browser.msie = !1;
jQuery.browser.edge = !1;
jQuery.browser.ua = nAgt;

function isTouchSupported() {
    var a = nAgt.msMaxTouchPoints,
        e = "ontouchstart" in document.createElement("div");
    return a || e ? !0 : !1;
}
var getOS = function getOS() {
    var a = {
        version: "Unknown version",
        name: "Unknown OS"
    }; - 1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"); - 1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"); - 1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux");
    /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X ([\.\_\d]+)/.exec(nAgt)[1], a.version = a.version.replace(/_/g, ".").substring(0, 5));
    /Windows/.test(nAgt) && (a.version = "Unknown.Unknown");
    /Windows NT 5.1/.test(nAgt) && (a.version = "5.1");
    /Windows NT 6.0/.test(nAgt) && (a.version = "6.0");
    /Windows NT 6.1/.test(nAgt) && (a.version = "6.1");
    /Windows NT 6.2/.test(nAgt) && (a.version = "6.2");
    /Windows NT 10.0/.test(nAgt) && (a.version = "10.0");
    /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown");
    a.name = a.name.toLowerCase();
    a.major_version = "Unknown";
    a.minor_version = "Unknown";
    "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]), a.minor_version = parseFloat(a.version.split(".")[1]));
    return a;
};
jQuery.browser.os = getOS();
jQuery.browser.hasTouch = isTouchSupported();
jQuery.browser.name = navigator.appName;
jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0;
    jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end);
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
jQuery.browser.version = jQuery.browser.majorVersion;
jQuery.browser.android = /Android/i.test(nAgt);
jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt);
jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt);
jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt);
jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt);
jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt);
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle;
jQuery.isMobile = jQuery.browser.mobile;
jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width();
jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt);
jQuery.mbBrowser = jQuery.browser;
jQuery.browser.versionCompare = function(a, e) {
    if ("stringstring" != (typeof a === "undefined" ? "undefined" : _typeof(a)) + (typeof e === "undefined" ? "undefined" : _typeof(e))) return !1;
    for (var c = a.split("."), d = e.split("."), b = 0, f = Math.max(c.length, d.length); b < f; b++) {
        if (c[b] && !d[b] && 0 < parseInt(c[b]) || parseInt(c[b]) > parseInt(d[b])) return 1;
        if (d[b] && !c[b] && 0 < parseInt(d[b]) || parseInt(c[b]) < parseInt(d[b])) return -1;
    }
    return 0;
};
(function(b) {
    b.simpleSlider = {
        defaults: {
            initialval: 0,
            scale: 100,
            orientation: "h",
            readonly: !1,
            callback: !1
        },
        events: {
            start: b.browser.mobile ? "touchstart" : "mousedown",
            end: b.browser.mobile ? "touchend" : "mouseup",
            move: b.browser.mobile ? "touchmove" : "mousemove"
        },
        init: function init(c) {
            return this.each(function() {
                var a = this,
                    d = b(a);
                d.addClass("simpleSlider");
                a.opt = {};
                b.extend(a.opt, b.simpleSlider.defaults, c);
                b.extend(a.opt, d.data());
                var e = "h" == a.opt.orientation ? "horizontal" : "vertical";
                e = b("<div/>").addClass("level").addClass(e);
                d.prepend(e);
                a.level = e;
                d.css({
                    cursor: "default"
                });
                "auto" == a.opt.scale && (a.opt.scale = b(a).outerWidth());
                d.updateSliderVal();
                a.opt.readonly || (d.on(b.simpleSlider.events.start, function(c) {
                    b.browser.mobile && (c = c.changedTouches[0]);
                    a.canSlide = !0;
                    d.updateSliderVal(c);
                    "h" == a.opt.orientation ? d.css({
                        cursor: "col-resize"
                    }) : d.css({
                        cursor: "row-resize"
                    });
                    b.browser.mobile || (c.preventDefault(), c.stopPropagation());
                }), b(document).on(b.simpleSlider.events.move, function(c) {
                    b.browser.mobile && (c = c.changedTouches[0]);
                    a.canSlide && (b(document).css({
                        cursor: "default"
                    }), d.updateSliderVal(c), b.browser.mobile || (c.preventDefault(), c.stopPropagation()));
                }).on(b.simpleSlider.events.end, function() {
                    b(document).css({
                        cursor: "auto"
                    });
                    a.canSlide = !1;
                    d.css({
                        cursor: "auto"
                    });
                }));
            });
        },
        updateSliderVal: function updateSliderVal(c) {
            var a = this.get(0);
            if (a.opt) {
                a.opt.initialval = "number" == typeof a.opt.initialval ? a.opt.initialval : a.opt.initialval(a);
                var d = b(a).outerWidth(),
                    e = b(a).outerHeight();
                a.x = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) ? c.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof c ? c * d / a.opt.scale : a.opt.initialval * d / a.opt.scale;
                a.y = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) ? c.clientY + document.body.scrollTop - this.offset().top : "number" == typeof c ? (a.opt.scale - a.opt.initialval - c) * e / a.opt.scale : a.opt.initialval * e / a.opt.scale;
                a.y = this.outerHeight() - a.y;
                a.scaleX = a.x * a.opt.scale / d;
                a.scaleY = a.y * a.opt.scale / e;
                a.outOfRangeX = a.scaleX > a.opt.scale ? a.scaleX - a.opt.scale : 0 > a.scaleX ? a.scaleX : 0;
                a.outOfRangeY = a.scaleY > a.opt.scale ? a.scaleY - a.opt.scale : 0 > a.scaleY ? a.scaleY : 0;
                a.outOfRange = "h" == a.opt.orientation ? a.outOfRangeX : a.outOfRangeY;
                a.value = "undefined" != typeof c ? "h" == a.opt.orientation ? a.x >= this.outerWidth() ? a.opt.scale : 0 >= a.x ? 0 : a.scaleX : a.y >= this.outerHeight() ? a.opt.scale : 0 >= a.y ? 0 : a.scaleY : "h" == a.opt.orientation ? a.scaleX : a.scaleY;
                "h" == a.opt.orientation ? a.level.width(Math.floor(100 * a.x / d) + "%") : a.level.height(Math.floor(100 * a.y / e));
                "function" == typeof a.opt.callback && a.opt.callback(a);
            }
        }
    };
    b.fn.simpleSlider = b.simpleSlider.init;
    b.fn.updateSliderVal = b.simpleSlider.updateSliderVal;
})(jQuery);;
/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.storage.min.js                                                                                                                   _
 _ last modified: 24/05/15 16.08                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/
(function(d) {
    d.mbCookie = {
        set: function set(a, c, f, b) {
            "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && (c = JSON.stringify(c));
            b = b ? "; domain=" + b : "";
            var e = new Date(),
                d = "";
            0 < f && (e.setTime(e.getTime() + 864E5 * f), d = "; expires=" + e.toGMTString());
            document.cookie = a + "=" + c + d + "; path=/" + b;
        },
        get: function get(a) {
            a += "=";
            for (var c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                for (var b = c[d];
                    " " == b.charAt(0);) {
                    b = b.substring(1, b.length);
                }
                if (0 == b.indexOf(a)) try {
                    return JSON.parse(b.substring(a.length, b.length));
                } catch (e) {
                    return b.substring(a.length, b.length);
                }
            }
            return null;
        },
        remove: function remove(a) {
            d.mbCookie.set(a, "", -1);
        }
    };
    d.mbStorage = {
        set: function set(a, c) {
            "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && (c = JSON.stringify(c));
            localStorage.setItem(a, c);
        },
        get: function get(a) {
            if (localStorage[a]) try {
                return JSON.parse(localStorage[a]);
            } catch (c) {
                return localStorage[a];
            } else return null;
        },
        remove: function remove(a) {
            a ? localStorage.removeItem(a) : localStorage.clear();
        }
    };
})(jQuery); /*globals $,google,MarkerClusterer,MarkerWithLabel */
/**
 * jQuery tinyMap plugin
 * https://code.essoduke.org/tinyMap/
 * Copyright 2018 essoduke.org, Licensed MIT.
 *
 * @author Essoduke Chang<essoduke@gmail.com>
 * @license MIT License
 */
/**
 * Call while google maps api loaded
 * @callback
 */
window.gMapsCallback = function() {
    $(window).trigger('gMapsCallback');
};
/**
 * Plugin statements
 */
;
(function($, window, document, undefined) {
    'use strict'; // API Configure
    var apiLoaded = false,
        apiClusterLoaded = false,
        apiMarkerWithLabelLoaded = false,
        apiOMSLoaded = false,
        tinyMapConfigure = {
            'language': 'zh-TW',
            'callback': 'gMapsCallback',
            'api': 'https://maps.googleapis.com/maps/api/js',
            'clusterer': 'https://cdn.essoduke.org/js/tinyMap/markerclusterer.js',
            'withLabel': 'https://cdn.essoduke.org/js/tinyMap/markerwithlabel.js',
            'OMS': 'https://cdn.essoduke.org/js/tinyMap/oms.min.js'
        }, // Default plugin settings
        defaults = {
            'autoLocation': false,
            'center': [24, 121],
            'infoWindowAutoClose': true,
            'interval': 200,
            'loading': '讀取中&hellip;',
            'notFound': '找不到查詢的地點',
            'zoom': 8,
            'markerOffset': false // 3.4.11 位置偏移
        },
        styles = {},
        timeout; //#!#START STYLES
    styles = { // Grey Scale
        'greyscale': [{
            'featureType': 'all',
            'stylers': [{
                'saturation': -100
            }, {
                'gamma': 0.5
            }]
        }]
    }; //#!#END
    /**
     * Recursively iterate for replace google.maps constants
     * @param {Mixed} obj Object
     * @since 3.3.16
     */
    function scan(obj) {
        var i = 0,
            prop, m;
        if (obj instanceof Array) {
            for (i = 0; i < obj.length; i += 1) {
                scan(obj[i]);
            }
        } else if ('object' === (typeof obj === "undefined" ? "undefined" : _typeof(obj))) {
            for (prop in obj) {
                if (!('string' === typeof obj[prop])) {
                    scan(obj[prop]);
                } else if (/^google\.map/gi.test(obj[prop])) {
                    m = obj[prop].split('.');
                    if (4 === m.length) {
                        obj[prop] = google.maps[m[2]][m[3]];
                    }
                }
            }
        }
    }
    /**
     * Parsing the location
     * @param {(string|string[]|number[]|Object)} loc Location
     * @param {boolean} formatting Format to Google Maps LatLng object
     * @private
     */
    function parseLatLng(loc, formatting, offset) {
        var result = {
                'lat': '',
                'lng': ''
            },
            array = [],
            re = /^[+-]?\d+(\.\d+)?$/;
        if ('string' === typeof loc || Array.isArray(loc)) {
            array = Array.isArray(loc) ? loc : loc.toString().replace(/\s+/, '').split(',');
            if (2 === array.length) {
                if (re.test(array[0]) && re.test(array[1])) {
                    result.lat = array[0];
                    result.lng = array[1];
                }
            } else {
                return loc;
            }
        } else if ('object' === (typeof loc === "undefined" ? "undefined" : _typeof(loc))) { // Google LatLng Class
            if ('function' === typeof loc.lat) {
                return loc;
            } else if (loc.hasOwnProperty('x') && loc.hasOwnProperty('y')) {
                result.lat = loc.x;
                result.lng = loc.y;
            } else if (loc.hasOwnProperty('lat') && loc.hasOwnProperty('lng')) {
                result.lat = loc.lat;
                result.lng = loc.lng;
            }
        } // Location offset
        // @since v3.4.4
        if ('undefined' === typeof offset || true === offset) {
            result.lat = parseFloat(result.lat, 10) + (Math.random() - 0.5) / 5000;
            result.lng = parseFloat(result.lng, 10) + (Math.random() - 0.5) / 5000;
        }
        if (true === formatting) {
            return new google.maps.LatLng(result.lat, result.lng);
        }
        return result;
    } //#!#START LABEL
    /**
     * Label in Maps
     * @param {Object} options Label options
     * @protected
     */
    function Label(options) {
        var self = this,
            css = options.hasOwnProperty('css') ? options.css.toString() : '';
        self.setValues(options);
        self.span = $('<span/>').css({
            'position': 'relative',
            'left': '-50%',
            'top': '0',
            'white-space': 'nowrap'
        }).addClass(css);
        self.div = $('<div/>').css({
            'position': 'absolute',
            'display': 'none'
        });
        self.span.appendTo(self.div);
    } //#!#END
    /**
     * jQuery tinyMap Constructor
     * @param {Object} container HTML element
     * @param {(Object|string)} options User settings
     */
    function TinyMap(container, options) {
        var self = this,
            opt = $.extend({}, defaults, options);
        /**
         * Overlay loading control
         * @type {bool}
         */
        self.idleOnceCount = false;
        /**
         * Map instance
         * @type {Object}
         */
        self.map = null;
        /**
         * Map markers
         * @type {Object}
         */
        self._markers = [];
        /**
         * Markers
         * @type {Object[]}
         */
        self._markersCluster = [];
        /**
         * Marker clusters
         * @type {Object[]}
         */
        self._clusters = {};
        /**
         * Bounds object
         * @type {Object[]}
         */
        self._bounds = {};
        /**
         * Labels
         * @type {Object[]}
         */
        self._labels = [];
        /**
         * Polyline layers
         * @type {Object[]}
         */
        self._polylines = [];
        /**
         * Polygon layers
         * @type {Object[]}
         */
        self._polygons = [];
        /**
         * Circles layer
         * @type {Object[]}
         */
        self._circles = [];
        /**
         * KML layers
         * @type {Object[]}
         */
        self._kmls = [];
        /**
         * Direction Display layers
         * @type {Objects[]}
         */
        self._directions = [];
        /**
         * Direction icons
         * @type {Object[]}
         */
        self._directionsMarkers = [];
        /**
         * Places objects
         * @type {Object[]}
         */
        self._places = [];
        /**
         * DOM of selector
         * @type {Object}
         */
        self.container = container;
        /**
         * User setting
         * @type {Object}
         */
        self.options = opt;
        /**
         * Google Map options
         * @type {Object}
         */
        self.googleMapOptions = {};
        /**
         * Interval for geocoder's query interval
         * @type {number}
         */
        self.interval = parseInt(self.options.interval, 10) || 200;
        /**
         * Binding callback event for API async
         */
        $(window).on('gMapsCallback', function() {
            self.init();
        }); // Append loading string
        $(this.container).html(opt.loading); // Call initialize
        return self.init();
    }
    /**
     * TinyMap prototype
     */
    TinyMap.prototype = {
        /**
         * Current version
         * @type {string}
         * @constant
         */
        'VERSION': '3.4.11',
        /**
         * Format to google.maps.Size
         * @param {number[]} size Size array [x, y]
         * @return {(Object|Array)}
         */
        formatSize: function formatSize(size) {
            if (Array.isArray(size) && 2 === size.length) {
                return new google.maps.Size(size[0], size[1]);
            }
            return size;
        },
        /**
         * Format to google.maps.Point
         * @param {number[]} point Point array [x, y]
         * @return {(Object|Array)}
         */
        formatPoint: function formatPoint(point) {
            if (Array.isArray(point) && 2 === point.length) {
                return new google.maps.Point(point[0], point[1]);
            }
            return point;
        },
        /**
         * Overlay processes
         * @private
         */
        overlay: function overlay(callback) {
            var map = this.map,
                opt = this.options;
            try {
                if (!this.idleOnceCount) { //#!#START KML
                    // kml overlay
                    this.kml(map, opt); //#!#END
                    //#!#START DIRECTION
                    // direction overlay
                    this.directionService(map, opt); //#!#END
                    //#!#START MARKER
                    // markers overlay
                    this.placeMarkers(map, opt); //#!#END
                    //#!#START POLYLINE
                    // polyline overlay
                    this.drawPolyline(map, opt); //#!#END
                    //#!#START POLYGON
                    // polygon overlay
                    this.drawPolygon(map, opt); //#!#END
                    //#!#START CIRCLE
                    // circle overlay
                    this.drawCircle(map, opt); //#!#END
                    //#!#START STREETVIEW
                    // StreetView service
                    this.streetView(map, opt); //#!#END
                    //#!#START PLACES
                    // PlaceService
                    this.places(map, opt); //#!#END
                    // GeoLocation
                    this.geoLocation(map, opt);
                    this.idleOnceCount = true;
                }
            } catch (ignore) {
                console.error(ignore);
            } finally {
                google.maps.event.trigger(map, 'resize');
            }
        },
        /**
         * Events binding
         * @param {Object} marker Marker objects
         * @param {(function|Object)} event Events
         */
        bindEvents: function bindEvents(target, event) {
            var self = this,
                e = {};
            switch (typeof event === "undefined" ? "undefined" : _typeof(event)) {
                case 'function':
                    google.maps.event.clearListeners(target, 'click');
                    google.maps.event.addListener(target, 'click', event);
                    break;
                case 'object':
                    for (e in event) {
                        if ('function' === typeof event[e]) {
                            if ('created' === e) {
                                event[e].call(target);
                            } else {
                                google.maps.event.clearListeners(target, e);
                                google.maps.event.addListener(target, e, event[e]);
                            }
                        } else {
                            if (event[e].hasOwnProperty('func') && 'function' === typeof event[e].func) {
                                if (event[e].hasOwnProperty('once') && true === event[e].once) {
                                    google.maps.event.addListenerOnce(target, e, event[e].func);
                                } else {
                                    google.maps.event.clearListeners(target, e);
                                    google.maps.event.addListener(target, e, event[e].func);
                                }
                            } else if ('function' === typeof event[e]) {
                                google.maps.event.clearListeners(target, e);
                                google.maps.event.addListener(target, e, event[e]);
                            }
                        }
                    }
                    break;
            } // Click for infoWindow
            if (target.hasOwnProperty('defaultInfoWindow')) {
                google.maps.event.clearListeners(target, 'click');
                google.maps.event.addListener(target, 'click', function() {
                    var i = 0,
                        m = {}; // Close all infoWindows if `infoWindowAutoClose` was true.
                    if (self.options.hasOwnProperty('infoWindowAutoClose') && true === self.options.infoWindowAutoClose) {
                        for (i = 0; i < self._markers.length; i += 1) {
                            m = self._markers[i];
                            if (m.hasOwnProperty('infoWindow') && 'function' === typeof m.infoWindow.close) {
                                m.infoWindow.close();
                            }
                        }
                    }
                    target.infoWindow.open(self.map, target);
                });
            }
        }, //#!#END
        //#!#START KML
        /**
         * KML overlay
         * @param {Object} map Map instance
         * @param {Object} opt KML options
         */
        kml: function kml(map, opt) {
            var self = this,
                kmlOpt = {
                    'url': '',
                    'map': map,
                    'preserveViewport': false,
                    'suppressInfoWindows': false
                },
                kml = {},
                i = 0;
            if (opt.hasOwnProperty('kml')) {
                if ('string' === typeof opt.kml) {
                    kmlOpt.url = opt.kml;
                    kml = new google.maps.KmlLayer(kmlOpt);
                    this._kmls.push(kml);
                } else if (Array.isArray(opt.kml)) {
                    for (i = 0; i < opt.kml.length; i += 1) {
                        if ('string' === typeof opt.kml[i]) {
                            kmlOpt.url = opt.kml[i];
                            kml = new google.maps.KmlLayer(kmlOpt);
                        } else if ('object' === _typeof(opt.kml[i])) {
                            kmlOpt = $.extend({}, kmlOpt, opt.kml[i]);
                            kml = new google.maps.KmlLayer(kmlOpt);
                            if (kmlOpt.hasOwnProperty('event')) {
                                self.bindEvents(kml, kmlOpt.event);
                            }
                        }
                        this._kmls.push(kml);
                    }
                }
            }
        }, //#!#END
        //#!#START POLYLINE
        //begin add Multiple POLYLINE by Karry
        /**
         * Polyline overlay
         * @param {Object} map Map instance
         * @param {Object} opt Polyline options
         */
        drawPolyline: function drawPolyline(map, opt) {
            var self = this,
                polylineX = {},
                waypoints = [],
                polyline = {},
                distance = {},
                service = {},
                defOpt = {},
                coords = [],
                path = [],
                c1 = 0,
                c = {},
                p = {},
                i = 0, // Route callback
                routeCallback = function routeCallback(result, status) {
                    if (status === google.maps.DirectionsStatus.OK) {
                        for (i = 0; i < result.routes[0].overview_path.length; i += 1) {
                            path.push(result.routes[0].overview_path[i]);
                        }
                        polyline.setPath(path);
                        if ('function' === typeof polylineX.getDistance) {
                            distance = result.routes[0].legs[0].distance;
                            polylineX.getDistance.call(this, distance);
                        }
                    }
                };
            if (opt.hasOwnProperty('polyline') && Array.isArray(opt.polyline)) {
                for (c1 = 0; c1 < opt.polyline.length; c1 += 1) {
                    polylineX = opt.polyline[c1];
                    if (polylineX.hasOwnProperty('coords') && Array.isArray(polylineX.coords)) {
                        coords = new google.maps.MVCArray();
                        for (i = 0; i < polylineX.coords.length; i += 1) {
                            p = polylineX.coords[i];
                            c = parseLatLng(p, true, false);
                            if ('function' === typeof c.lat) {
                                coords.push(c);
                            }
                        } // Options merge
                        defOpt = $.extend({}, {
                            'strokeColor': polylineX.color || '#FF0000',
                            'strokeOpacity': polylineX.opacity || 1.0,
                            'strokeWeight': polylineX.width || 2
                        }, polylineX);
                        polyline = new google.maps.Polyline(defOpt);
                        self._polylines.push(polyline);
                        if (2 < coords.getLength()) {
                            for (i = 0; i < coords.length; i += 1) {
                                if (0 < i && coords.length - 1 > i) {
                                    waypoints.push({
                                        'location': coords.getAt(i),
                                        'stopover': false
                                    });
                                }
                            }
                        } // Events binding
                        if (polylineX.hasOwnProperty('event')) {
                            self.bindEvents(polyline, polylineX.event);
                        }
                        if (polylineX.hasOwnProperty('snap') && true === polylineX.snap) {
                            service = new google.maps.DirectionsService();
                            service.route({
                                'origin': coords.getAt(0),
                                'waypoints': waypoints,
                                'destination': coords.getAt(coords.length - 1),
                                'travelMode': google.maps.DirectionsTravelMode.DRIVING
                            }, routeCallback);
                        } else {
                            polyline.setPath(coords);
                            if (google.maps.hasOwnProperty('geometry') && google.maps.geometry.hasOwnProperty('spherical')) {
                                if ('function' === typeof google.maps.geometry.spherical.computeDistanceBetween) {
                                    distance = google.maps.geometry.spherical.computeDistanceBetween(coords.getAt(0), coords.getAt(coords.length - 1));
                                    if ('function' === typeof polylineX.getDistance) {
                                        polylineX.getDistance.call(self, distance);
                                    }
                                }
                            }
                        }
                        polyline.setMap(map);
                    }
                }
            }
        }, //add Multiple POLYLINE by karry
        //#!#END
        //#!#START POLYGON
        /**
         * Polygon overlay
         * @param {Object} map Map instance
         * @param {Object} opt Polygon options
         */
        drawPolygon: function drawPolygon(map, opt) {
            var self = this,
                polygon = {},
                defOpt = {},
                coords = [],
                i = 0,
                j = 0,
                p = {},
                c = {};
            if (opt.hasOwnProperty('polygon') && Array.isArray(opt.polygon)) {
                for (i = 0; i < opt.polygon.length; i += 1) {
                    coords = [];
                    if (opt.polygon[i].hasOwnProperty('coords')) {
                        for (j = 0; j < opt.polygon[i].coords.length; j += 1) {
                            p = opt.polygon[i].coords[j];
                            c = parseLatLng(p, true, false);
                            if ('function' === typeof c.lat) {
                                coords.push(c);
                            }
                        }
                        defOpt = $.extend({}, {
                            'path': coords,
                            'strokeColor': opt.polygon[i].color || '#FF0000',
                            'strokeOpacity': 1.0,
                            'strokeWeight': opt.polygon[i].width || 2,
                            'fillColor': opt.polygon[i].fillcolor || '#CC0000',
                            'fillOpacity': 0.35
                        }, opt.polygon[i]);
                        polygon = new google.maps.Polygon(defOpt);
                        self._polygons.push(polygon);
                        polygon.setMap(map); // Created event for circle is created.
                        if (defOpt.hasOwnProperty('event')) {
                            self.bindEvents(polygon, defOpt.event);
                        }
                    }
                }
            }
        }, //#!#END
        //#!#START CIRCLE
        /**
         * Circle overlay
         * @param {Object} map Map instance
         * @param {Object} opt Circle options
         */
        drawCircle: function drawCircle(map, opt) {
            var self = this,
                circles = {},
                circle = {},
                defOpt = {},
                loc = {},
                c = 0;
            if (opt.hasOwnProperty('circle') && Array.isArray(opt.circle)) {
                for (c = 0; c < opt.circle.length; c += 1) {
                    circle = opt.circle[c];
                    defOpt = $.extend({
                        'map': map,
                        'strokeColor': circle.color || '#FF0000',
                        'strokeOpacity': circle.opacity || 0.8,
                        'strokeWeight': circle.width || 2,
                        'fillColor': circle.fillcolor || '#FF0000',
                        'fillOpacity': circle.fillopacity || 0.35,
                        'radius': circle.radius || 10,
                        'zIndex': 100,
                        'id': circle.hasOwnProperty('id') ? circle.id : ''
                    }, circle);
                    if (circle.hasOwnProperty('center')) {
                        loc = parseLatLng(circle.center, true, false);
                        defOpt.center = loc;
                    }
                    if ('function' === typeof loc.lat) {
                        circles = new google.maps.Circle(defOpt);
                        self._circles.push(circles);
                        if (circle.hasOwnProperty('event')) {
                            self.bindEvents(circles, circle.event);
                        }
                    }
                }
            }
        }, //#!#END
        //#!#START MARKER
        /**
         * Build the icon options of marker
         * @param {Object} opt Marker option
         */
        markerIcon: function markerIcon(marker) {
            var icons = {};
            if (marker.hasOwnProperty('icon')) {
                icons = marker.icon;
                if ('string' === typeof marker.icon) {
                    return marker.icon;
                }
                if (marker.icon.hasOwnProperty('url')) {
                    icons.url = marker.icon.url;
                }
                if (marker.icon.hasOwnProperty('size')) {
                    if (Array.isArray(marker.icon.size) && 2 === marker.icon.size.length) {
                        icons.size = this.formatSize(marker.icon.size);
                    }
                }
                if (marker.icon.hasOwnProperty('scaledSize')) {
                    if (Array.isArray(marker.icon.scaledSize) && 2 === marker.icon.scaledSize.length) {
                        icons.scaledSize = this.formatSize(marker.icon.scaledSize);
                    }
                }
                if (marker.icon.hasOwnProperty('anchor')) {
                    if (Array.isArray(marker.icon.anchor) && 2 === marker.icon.anchor.length) {
                        icons.anchor = this.formatPoint(marker.icon.anchor);
                    }
                }
            }
            return icons;
        },
        /**
         * Post process of Marker
         * @since v3.3.0
         * @param {Object} map Map instance
         * @param {Object} opt jQ tinyMap Options
         * @param {Object} marker Marker object
         * @param {Object} m Marker option
         */
        processMarker: function processMarker(mc, map, opt, marker, source) {
            var self = this,
                exists = self.get('marker'),
                label = {},
                labelOpt = {},
                infoOpt = {},
                oms = {}; // Apply marker fitbounds
            if (marker.hasOwnProperty('position')) {
                if ('function' === typeof marker.getPosition) {
                    self._bounds.extend(marker.position);
                }
                if (opt.hasOwnProperty('markerFitBounds') && true === opt.markerFitBounds) { // Make sure fitBounds call after the last marker created.
                    if (exists.length === opt.marker.length) {
                        map.fitBounds(self._bounds);
                    }
                }
            } // InfoWindow
            if ('undefined' === typeof marker.infoWindow) {
                marker.infoWindow = new google.maps.InfoWindow({
                    'content': marker.text
                });
            }
            if (marker.hasOwnProperty('text')) {
                marker.infoWindow.setContent(marker.text);
                if (!marker.hasOwnProperty('event') || !marker.event.hasOwnProperty('click')) {
                    marker.defaultInfoWindow = true;
                }
                self.bindEvents(marker, marker.event); // @since 3.3.16
                if (marker.hasOwnProperty('infoWindowOptions')) {
                    infoOpt = $.extend({}, {
                        'content': marker.infoWindowOptions.hasOwnProperty('content') ? marker.infoWindowOptions.content : marker.text
                    }, marker.infoWindowOptions);
                    marker.infoWindow.setOptions(infoOpt); // infoWindow events binding.
                    if (infoOpt.hasOwnProperty('event') && 'undefined' !== typeof infoOpt.event) {
                        self.bindEvents(marker.infoWindow, infoOpt.event);
                    }
                }
            }
            /**
             * Apply marker cluster.
             * Require markerclusterer.js
             *
             * @see {@link http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/src/}
             * @since 2015-10-01 18:20:00
             * @fix 2017-11-21
             */ // Markers cluster
            if (!marker.hasOwnProperty('cluster') || marker.hasOwnProperty('cluster') && true === marker.cluster) {
                if ('function' === typeof self._clusters.addMarker) {
                    self._clusters.addMarker(marker);
                }
            } // Create Label
            if (opt.hasOwnProperty('markerWithLabel') && true === opt.markerWithLabel || marker.hasOwnProperty('newLabel') && marker.newLabel) {
                labelOpt = {
                    'id': marker.id,
                    'text': marker.newLabel,
                    'map': map,
                    'css': marker.hasOwnProperty('newLabelCSS') ? marker.newLabelCSS.toString() : ''
                };
                self.get({
                    'label': [marker.id]
                }, function(ms) { // Modify existed label if exists.
                    var i = 0,
                        len = ms.label.length,
                        lb = {};
                    if (len) {
                        /*
                                                for (i = 0; i < len; i += 1) {
                                                    lb = ms.label[i];
                                                    lb.text = marker.newLabel;
                                                    $(lb.span).addClass(marker.newLabelCSS);
                                                    lb.bindTo('position', marker);
                                                    lb.draw();
                                                }
                                                */
                        ms.label.forEach(function(lb) {
                            lb.text = marker.newLabel;
                            $(lb.span).addClass(marker.newLabelCSS);
                            lb.bindTo('position', marker);
                            lb.draw();
                        }); // Or create the new one.
                        // @since v3.3.6
                    } else {
                        label = new Label(labelOpt);
                        label.bindTo('position', marker);
                        self._labels.push(label); // @since 3.3.15
                        label.set('visible', marker.showLabel); // Hide or show labels when clustering end.
                        // @since v3.3.11
                        if ('object' === (typeof label === "undefined" ? "undefined" : _typeof(label)) && true === opt.markerCluster) {
                            google.maps.event.addListener(marker, 'map_changed', function() {
                                if ('function' === typeof label.setMap) {
                                    label.set('visible', null !== marker.getMap());
                                }
                            });
                        }
                    }
                });
            } // Binding events
            self.bindEvents(marker, marker.event);
        },
        /**
         * Markers HTML Control
         * @since v3.3.8
         */
        markerControl: function markerControl() {
            var self = this,
                opt = self.options,
                mOpt = {
                    'css': '',
                    'label': '請選擇&hellip;',
                    'infoWindow': true,
                    'panTo': true,
                    'onChange': ''
                },
                controls;
            if (opt.hasOwnProperty('markerControl')) { // Get container of control list.
                if ('string' === typeof opt.markerControl) {
                    controls = $(opt.markerControl.toString());
                } else {
                    if (opt.markerControl.hasOwnProperty('container')) {
                        controls = $(opt.markerControl.container);
                    } else {
                        controls = $(opt.markerControl);
                    }
                    mOpt = $.extend({}, mOpt, opt.markerControl);
                }
                if (controls.length) {
                    self.get('marker', function(ms) { // Select list template
                        var html = ['<select class="marker-list-control">', '<option>' + mOpt.label + '</option>']; // Build the html
                        ms.forEach(function(m) {
                            if ('undefined' !== typeof m.infoWindow) {
                                m.infoWindow.close();
                            }
                            html.push('<option value="' + m.id + '" data-marker-id="' + m.id + '">' + (m.title ? m.title : m.id) + '</option>');
                        });
                        html.push('</select>'); // onChange binding
                        controls.on('change.tinyMap', 'select', function() {
                            var option = $(this);
                            self.close('marker');
                            if (this.value.length) { // Get the marker that has selected.
                                self.get({
                                    'marker': [this.value]
                                }, function(g) {
                                    var mk = {};
                                    if (g.marker.length && 'undefined' !== g.marker[0]) {
                                        mk = g.marker[0];
                                        if (true === mOpt.infoWindow) {
                                            if ('undefined' !== typeof mk.infoWindow && 'function' === typeof mk.infoWindow.open) {
                                                mk.infoWindow.open(self.map, mk);
                                            }
                                        }
                                        if (true === mOpt.panTo) {
                                            self.map.panTo(mk.getPosition());
                                        }
                                        if ('function' === typeof mOpt.onChange) {
                                            mOpt.onChange.call(option, mk);
                                        }
                                    }
                                });
                            }
                        }).html(html.join('')); // Add Custom CSS Class
                        if ('string' === typeof mOpt.css) {
                            controls.find('select').addClass(mOpt.css);
                        }
                    });
                }
            }
        },
        /**
         * Place markers layer.
         * @param {Object} map Map instance
         * @param {Object} opt Markers options
         * @param {string} source Mode
         */
        placeMarkers: function placeMarkers(map, opt, source, mks) {
            var self = this,
                geocoder = {},
                clusterOptions = {
                    'maxZoom': null,
                    'gridSize': 60
                },
                markers = Array.isArray(opt.marker) ? opt.marker : [],
                tmks = [],
                oms = {},
                hasOMS = false,
                tOut, iconWithColor = function iconWithColor(color) {
                    return 'https://chart.googleapis.com/chart?chst=d_map_xpin_letter&chld=pin|+|' + color + '|000000|ffff00';
                };
            if ('undefined' !== typeof mks && Array.isArray(mks) && mks.length) {
                markers = mks;
            }
            /**
             * Apply marker cluster.
             * Require markerclustererplus.js
             * @see {@link http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html}
             * @since 2015-04-30 10:18:33
             */
            if (self.options.hasOwnProperty('markerCluster')) {
                if ('function' === typeof MarkerClusterer) {
                    clusterOptions = $.extend({}, clusterOptions, opt.markerCluster);
                    self._clusters = new MarkerClusterer(map, [], clusterOptions);
                    if (clusterOptions.hasOwnProperty('event')) {
                        self.bindEvents(self._clusters, clusterOptions.event);
                    }
                }
            }
            if (self.options.hasOwnProperty('enableOMS') && 'function' === typeof OverlappingMarkerSpiderfier) {
                hasOMS = true;
            }
            if (hasOMS) {
                oms = new OverlappingMarkerSpiderfier(map, {
                    'markersWontHide': true
                });
                oms.addListener('click', function(marker) {
                    if (marker.hasOwnProperty('oms')) {
                        marker.infoWindow.setContent(marker.oms);
                    }
                    marker.infoWindow.open(map, marker);
                });
                oms.addListener('spiderfy', function(markers) {
                    var i = 0; //for (; i < markers.length; i += 1) {
                    //markers[i].infoWindow.close();
                    //}
                });
                oms.addListener('unspiderfy', function(markers) {
                    var i = 0; //for (i; i < markers.length; i += 1) {
                    //markers[i].infoWindow.close();
                    //}
                });
            }
            var mc = markers.length; // Markers loop
            markers.forEach(function(m, index) {
                var offset = Boolean(opt.markerOffset),
                    addr = parseLatLng(m.addr, true, offset),
                    icons = self.markerIcon(m),
                    insertFlag = true,
                    markerExisted = false,
                    marker = {},
                    mk = {},
                    id = 'undefined' !== typeof m.id ? m.id : m.addr.toString().replace(/\s/g, ''),
                    markerOptions = {
                        'id': id,
                        'map': map,
                        'animation': null,
                        'showLabel': true
                    };
                markerOptions = $.extend({}, markerOptions, m); // For Modify mode.
                if ('modify' === source && id) {
                    self.get({
                        'marker': [id]
                    }, function(ms) { // Has found the marker
                        if (Array.isArray(ms.marker) && ms.marker.length) {
                            if (!(m.hasOwnProperty('forceInsert') && true === m.forceInsert)) {
                                m = $.extend(ms.marker[0], m);
                                if ('function' === typeof self._clusters.removeMarker) {
                                    self._clusters.removeMarker(ms.marker[0]);
                                }
                                insertFlag = false;
                                markerExisted = true;
                            }
                        }
                    });
                }
                if (m.hasOwnProperty('title')) {
                    markerOptions.title = m.title.toString().replace(/<([^>]+)>/g, '');
                }
                if (!$.isEmptyObject(icons)) {
                    markerOptions.icon = icons;
                }
                if (m.hasOwnProperty('animation') && 'string' === typeof m.animation) {
                    markerOptions.animation = google.maps.Animation[m.animation.toUpperCase()];
                }
                if ('string' === typeof addr) { // For string address
                    geocoder = new google.maps.Geocoder();
                    geocoder.geocode({
                        'address': addr
                    }, function(results, status) { // If exceeded, create later.
                        if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) { // OVER_QUERY_LIMIT redo.
                            // @since 3.4.5
                            setTimeout(function() { //console.info(['Marker[', index, '] query failed at (', addr, ').'].join(''));
                                self.placeMarkers(mc, map, opt, source, [m]);
                            }, self.interval * (index + 1));
                        } else if (status === google.maps.GeocoderStatus.OK) {
                            if (!insertFlag && markerExisted) {
                                if ('function' === typeof m.setPosition) {
                                    m.setPosition(results[0].geometry.location);
                                    if (markerOptions.hasOwnProperty('title')) {
                                        m.setTitle(markerOptions.title);
                                    }
                                    if (markerOptions.hasOwnProperty('icon')) {
                                        m.setIcon(markerOptions.icon);
                                    }
                                }
                                mk = m;
                            } else {
                                markerOptions.position = results[0].geometry.location;
                                if (opt.hasOwnProperty('markerWithLabel') && true === opt.markerWithLabel) {
                                    marker = 'function' === typeof MarkerWithLabel ? new MarkerWithLabel(markerOptions) : new google.maps.Marker(markerOptions);
                                } else {
                                    marker = new google.maps.Marker(markerOptions);
                                }
                                self._markers.push(marker);
                                mk = marker;
                            }
                            if (hasOMS) {
                                oms.addMarker(mk);
                            } // Post process of marker
                            // @since v3.3.0
                            self.processMarker(mc, map, opt, mk, source);
                        }
                    });
                } else { // For LatLng type
                    // When Marker was existed.                    );
                    if (!insertFlag && markerExisted) {
                        if ('function' === typeof m.setPosition) {
                            if (addr.lat() && addr.lng()) {
                                m.setPosition(addr);
                            }
                        }
                        if (markerOptions.hasOwnProperty('title')) {
                            m.setTitle(markerOptions.title);
                        }
                        if (markerOptions.hasOwnProperty('icon')) {
                            m.setIcon(markerOptions.icon);
                        }
                        mk = m;
                    } else {
                        markerOptions.position = addr;
                        if (opt.hasOwnProperty('markerWithLabel') && true === opt.markerWithLabel) {
                            marker = 'function' === typeof MarkerWithLabel ? new MarkerWithLabel(markerOptions) : new google.maps.Marker(markerOptions);
                        } else {
                            marker = new google.maps.Marker(markerOptions);
                        }
                        self._markers.push(marker);
                        mk = marker;
                        if (hasOMS) {
                            oms.addMarker(mk);
                        }
                    } // Post process of marker
                    // @since v3.3.0
                    self.processMarker(mc, map, opt, mk, source);
                }
            });
            /**
             * markerWithLabel radius
             * @since v3.4.6
             */
            if (opt.hasOwnProperty('markerWithLabel') && $.isNumeric(opt.markerWithLabel)) {
                var rebuildLabelsOnIdle = {
                    'idle': {
                        'func': function func() {
                            self.clear('label');
                            var loc = map.getCenter(),
                                pool = [];
                            self.get('marker', function(ms) {
                                ms.forEach(function(marker) {
                                    var meters = google.maps.geometry.spherical.computeDistanceBetween(marker.getPosition(), loc);
                                    if (meters < 1000) {
                                        pool.push(marker);
                                    }
                                });
                                if (pool) {
                                    pool.forEach(function(marker) {
                                        var lblOpt = {
                                                'id': marker.id,
                                                'text': marker.newLabel,
                                                'map': map,
                                                'css': marker.hasOwnProperty('newLabelCSS') ? marker.newLabelCSS.toString() : ''
                                            },
                                            label = new Label(lblOpt);
                                        label.bindTo('position', marker);
                                        label.set('visible', marker.showLabel);
                                        self._labels.push(label);
                                    });
                                }
                            });
                        },
                        'once': false
                    }
                }; //console.dir('qwe');
                rebuildLabelsOnIdle.idle.func.apply(self, arguments); //self.mapIdleEvent(rebuildLabelsOnIdle);
            }
            self.markerControl();
        }, //#!#END
        //#!#START DIRECTION
        /**
         * Direction overlay
         * @param {Object} map Map instance
         * @param {Object} opt Direction options
         */
        directionService: function directionService(map, opt) {
            var self = this,
                offset = Boolean(opt.markerOffset),
                directionsService = new google.maps.DirectionsService();
            if (Array.isArray(opt.direction)) {
                opt.direction.forEach(function(opts) {
                    if ('undefined' === typeof opts.from || 'undefined' === typeof opts.to) {
                        return;
                    }
                    var request = {},
                        directionsDisplay = new google.maps.DirectionsRenderer(),
                        renderOpts = $.extend({}, {
                            'infoWindow': new google.maps.InfoWindow(),
                            'map': self.map
                        }, opts),
                        waypointsOpts = [],
                        waypointsText = [],
                        waypointsIcon = [];
                    request.origin = parseLatLng(opts.from, true, false);
                    request.destination = parseLatLng(opts.to, true, false); // request.origin = new google.maps.LatLng(opts.from[0], opts.from[1]);
                    // request.destination = new google.maps.LatLng(opts.to[0], opts.to[1]);
                    // TravelMode
                    request.travelMode = opts.hasOwnProperty('travel') && google.maps.TravelMode[opts.travel.toString().toUpperCase()] ? google.maps.TravelMode[opts.travel.toString().toUpperCase()] : google.maps.TravelMode.DRIVING; // Info Panel
                    if (opts.hasOwnProperty('panel') && $(opts.panel).length) {
                        renderOpts.panel = $(opts.panel).get(0);
                    }
                    if (opts.hasOwnProperty('requestExtra') && opts.requestExtra) {
                        request = $.extend({}, request, opts.requestExtra);
                    }
                    if (opts.hasOwnProperty('optimize')) {
                        request.optimizeWaypoints = opts.optimize;
                    } // console.dir(request);
                    // Waypoints
                    if (opts.hasOwnProperty('waypoint') && Array.isArray(opts.waypoint)) {
                        opts.waypoint.forEach(function(waypoint) {
                            var waypointOpt = {
                                'stopover': true
                            };
                            if ('string' === typeof waypoint || Array.isArray(waypoint)) {
                                waypointOpt.location = parseLatLng(waypoint, true, offset);
                            } else if (waypoint.hasOwnProperty('location')) {
                                waypointOpt.location = parseLatLng(waypoint.location, true, offset);
                                waypointOpt.stopover = waypoint.hasOwnProperty('stopover') ? waypoint.stopover : true;
                            }
                            waypointsText.push(waypoint.text || waypoint.toString());
                            if (waypoint.hasOwnProperty('icon')) {
                                waypointsIcon.push(waypoint.icon.toString());
                            }
                            waypointsOpts.push(waypointOpt);
                        });
                        request.waypoints = waypointsOpts;
                    } // DirectionService
                    directionsService.route(request, function(response, status) { // console.dir(status);
                        if (status === google.maps.DirectionsStatus.OK) {
                            response.routes.forEach(function(route, index) { // console.info(route.legs[0].start_location.lat(), route.legs[0].start_location.lng());
                                // console.info(route.legs[0].end_location.lat(), route.legs[0].end_location.lng());
                                // @since 3.3.2 Multiple routes render.
                                if (opts.hasOwnProperty('renderAll') && true === opts.renderAll && true === request.provideRouteAlternatives) {
                                    var dr = new google.maps.DirectionsRenderer({
                                        'map': map,
                                        'directions': response,
                                        'routeIndex': index
                                    });
                                }
                                var legs = route.legs,
                                    startText = '',
                                    endText = '',
                                    wp = {},
                                    i = 0;
                                if (opts.hasOwnProperty('fromText')) {
                                    legs[0].start_address = opts.fromText;
                                    startText = opts.fromText;
                                }
                                if (opts.hasOwnProperty('toText')) {
                                    if (1 === legs.length) {
                                        legs[0].end_address = opts.toText;
                                    } else {
                                        legs[legs.length - 1].end_address = opts.toText;
                                    }
                                    endText = opts.toText;
                                }
                                if (opts.hasOwnProperty('icon')) {
                                    renderOpts.suppressMarkers = true;
                                    if (opts.icon.hasOwnProperty('from') && 'string' === typeof opts.icon.from) {
                                        self.directionServiceMarker(legs[0].start_location, {
                                            'icon': opts.icon.from,
                                            'text': startText
                                        }, renderOpts.infoWindow, opts);
                                    }
                                    if (opts.icon.hasOwnProperty('to') && 'string' === typeof opts.icon.to) {
                                        self.directionServiceMarker(legs[legs.length - 1].end_location, {
                                            'icon': opts.icon.to,
                                            'text': endText
                                        }, renderOpts.infoWindow, opts);
                                    }
                                }
                                for (i = 1; i < legs.length; i += 1) {
                                    if (opts.hasOwnProperty('icon')) {
                                        if (opts.icon.hasOwnProperty('waypoint') && 'string' === typeof opts.icon.waypoint) {
                                            wp.icon = opts.icon.waypoint;
                                        } else if ('string' === typeof waypointsIcon[i - 1]) {
                                            wp.icon = waypointsIcon[i - 1];
                                        }
                                        wp.text = waypointsText[i - 1];
                                        self.directionServiceMarker(legs[i].start_location, wp, renderOpts.infoWindow, opts);
                                    }
                                }
                            });
                            console.log(renderOpts);
                            self.bindEvents(directionsDisplay, opts.event);
                            directionsDisplay.setOptions(renderOpts);
                            directionsDisplay.setDirections(response);
                            self._directions.push(directionsDisplay);
                        }
                    });
                });
            }
        },
        /**
         * Create the marker for directions
         * @param {Object} loc LatLng Location
         * @param {Object} opt MarkerOptions
         * @param {Object} info Global infoWindow object
         * @param {Object} d Direction marker options
         */
        directionServiceMarker: function directionServiceMarker(loc, opt, info, d) {
            var self = this,
                evt = {},
                setting = $.extend({}, {
                    'position': loc,
                    'map': self.map,
                    'id': d.hasOwnProperty('id') ? d.id : ''
                }, opt),
                marker = new google.maps.Marker(setting);
            if (setting.hasOwnProperty('text')) {
                evt = function evt() {
                    info.setPosition(loc);
                    info.setContent(setting.text);
                    info.open(self.map, marker);
                };
            }
            self._directionsMarkers.push(marker);
            self.bindEvents(marker, evt);
        },
        /**
         * Get directions info
         * @return {Array} All directions info includes distance and duration.
         */
        getDirectionsInfo: function getDirectionsInfo() {
            var result = [];
            this.get('direction', function(dr) {
                dr.forEach(function(dc, i) {
                    var d = dc.getDirections();
                    if (d.hasOwnProperty('routes') && 'undefined' !== typeof d.routes[0] && 'undefined' !== typeof d.routes[0].legs) {
                        result[i] = [];
                        d.routes[0].legs.forEach(function(leg, j) {
                            result[i].push({
                                'from': leg.start_address,
                                'to': leg.end_address,
                                'distance': leg.distance,
                                'duration': leg.duration
                            });
                        });
                    }
                });
            });
            return result;
        }, //#!#END
        //#!#START STREETVIEW
        /**
         * Switch StreetView
         * @param {Object} map Map instance
         * @param {Object} opt Options
         */
        streetView: function streetView(map, opt) {
            var self = this,
                opts = opt.hasOwnProperty('streetViewObj') ? opt.streetViewObj : {},
                pano = {},
                loc = {};
            if ('function' === typeof map.getStreetView) { // Default position of streetView
                if (opts.hasOwnProperty('position')) {
                    loc = parseLatLng(opts.position, true, false);
                    opts.position = 'object' === (typeof loc === "undefined" ? "undefined" : _typeof(loc)) ? map.getCenter() : loc;
                } else {
                    opts.position = map.getCenter();
                } // Pov configure
                if (opts.hasOwnProperty('pov')) {
                    opts.pov = $.extend({}, {
                        'heading': 0,
                        'pitch': 0,
                        'zoom': 1
                    }, opts.pov);
                }
                pano = map.getStreetView(); // Apply options
                pano.setOptions(opts); // Events Binding
                if (opts.hasOwnProperty('event')) {
                    self.bindEvents(pano, opts.event);
                }
                if (opts.hasOwnProperty('visible')) {
                    pano.setVisible(opts.visible);
                }
            }
        }, //#!#END
        //#!#START PLACES
        /**
         * Places API
         * @param {Object} map Map instance
         * @param {Object} opt Options
         */
        places: function places(map, opt) {
            var self = this,
                placesService = {},
                reqOpt = opt.hasOwnProperty('places') ? opt.places : {},
                request = $.extend({
                    'location': map.getCenter(),
                    'radius': 100
                }, reqOpt);
            request.location = parseLatLng(request.location, true, false);
            if ('undefined' !== typeof google.maps.places) {
                placesService = new google.maps.places.PlacesService(map);
                placesService.nearbySearch(request, function(results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        self._places.push(results);
                        if (request.hasOwnProperty('createMarker') && true === request.createMarker) {
                            results.forEach(function(r) {
                                if (r.hasOwnProperty('geometry')) {
                                    self._markers.push(new google.maps.Marker({
                                        'map': map,
                                        'position': r.geometry.location
                                    }));
                                }
                            });
                        }
                        if (request.hasOwnProperty('callback') && 'function' === typeof request.callback) {
                            request.callback.call(results, placesService);
                        }
                    }
                });
            }
        }, //#!#END
        /**
         * Use HTML5 Geolocation API to detect the client's location.
         * @param {Object} map Map intance
         * @param {Object} opt Plugin options
         */
        geoLocation: function geoLocation(map, opt) {
            try {
                var self = this,
                    geoOpt = {},
                    geolocation = navigator.geolocation;
                if (!geolocation) {
                    return;
                }
                if (opt.hasOwnProperty('geolocation')) {
                    geoOpt = $.extend({}, {
                        'maximumAge': 600000,
                        'timeout': 3000,
                        'enableHighAccuracy': false
                    }, opt.geolocation);
                }
                if (true === opt.autoLocation || 'function' === typeof opt.autoLocation) {
                    this.watchid = geolocation.watchPosition(function(loc) {
                        if ('undefined' !== typeof loc && 'coords' in loc && 'latitude' in loc.coords && 'longitude' in loc.coords) {
                            map.panTo(new google.maps.LatLng(loc.coords.latitude, loc.coords.longitude));
                            if ('function' === typeof opt.autoLocation) {
                                opt.autoLocation.call(self, loc);
                            }
                        }
                    }, function(error) {
                        console.error(error);
                    }, geoOpt);
                } else {
                    geolocation.clearWatch(this.watchid);
                }
            } catch (ignore) {}
        }, //#!#START PANTO
        /**
         * Method: Google Maps PanTo
         * @param {(string|string[]|number[]|Object)} addr Location
         */
        panTo: function panTo(addr, error) {
            var self = this,
                m = this.map,
                loc = {},
                geocoder = {};
            if (null !== m && 'undefined' !== typeof m) {
                loc = parseLatLng(addr, true, false);
                if ('string' === typeof loc) {
                    geocoder = new google.maps.Geocoder();
                    geocoder.geocode({
                        'address': loc
                    }, function(results, status) {
                        if (status === google.maps.GeocoderStatus.OK && 'function' === typeof m.panTo && Array.isArray(results) && results.length) {
                            if (results[0].hasOwnProperty('geometry')) {
                                m.panTo(results[0].geometry.location);
                            }
                        } else {
                            if ('function' === typeof error) {
                                error.call(this, status);
                            } else {
                                console.error(status);
                            }
                        }
                    });
                } else {
                    if ('function' === typeof m.panTo) {
                        m.panTo(loc);
                    }
                }
            }
            return $(this.container);
        }, //#!#END
        //#!#START CLOSE
        /**
         * Method: Close all of infoWindows on map
         * @param {string} type Layer type
         */
        close: function close(layer, callback) {
            var self = this,
                layers = self.get(layer),
                loop = {},
                obj = '';
            if (layers.hasOwnProperty('map')) {
                delete layers.map;
            }
            if (Array.isArray(layers)) {
                loop[layer] = layers;
            } else {
                loop = layers;
            }
            try {
                for (obj in loop) {
                    if (Array.isArray(loop[obj])) {
                        loop[obj].forEach(function(item) {
                            if (item.hasOwnProperty('infoWindow') && 'function' === typeof item.infoWindow.close) {
                                item.infoWindow.close();
                            }
                        });
                    }
                }
                if ('function' === typeof callback) {
                    callback.call(this);
                }
            } catch (ignore) {
                console.warn(ignore);
            } finally {
                return $(self.container);
            }
        }, //#!#END
        //#!#START CLEAR
        /**
         * Method: Google Maps clear the specificed layer
         * @param {string} type Layer's type
         */
        clear: function clear(layer, callback) {
            var self = this,
                dMarkers = self._directionsMarkers,
                layers = self.get(layer),
                loop = {},
                key = '',
                obj = '';
            if ('undefined' !== typeof layers && 'undefined' !== typeof layers.map) {
                delete layers.map;
            }
            if (Array.isArray(layers)) {
                loop[layer] = layers;
            } else {
                loop = layers;
            }

            function dMarkersLoopCallback(dm, j) {
                if ('function' === typeof dm.setMap) {
                    self._directionsMarkers[j].setMap(null);
                }
            }

            function loopObjCallback(item) { // Remove the direction icons.
                if ('direction' === obj) {
                    dMarkers.forEach(dMarkersLoopCallback);
                    self._directionsMarkers.filter(function(n) {
                        return 'undefined' !== typeof n;
                    });
                } // Remove from Map
                if ('function' === typeof item.set) {
                    item.set('visible', false);
                }
                if ('function' === typeof item.setMap) {
                    item.setMap(null);
                } // Remove from Array
                if (-1 !== self[key].indexOf(item)) {
                    delete self[key][self[key].indexOf(item)];
                }
            }

            function keyFilter(n) {
                return 'undefined' !== typeof n;
            }
            try {
                for (obj in loop) {
                    if (Array.isArray(loop[obj])) {
                        key = '_' + obj.toString().toLowerCase() + 's';
                        loop[obj].forEach(loopObjCallback); // Filter undefined elements
                        self[key] = self[key].filter(keyFilter);
                    }
                }
                if ('function' === typeof callback) {
                    callback.call(this);
                }
            } catch (ignore) {
                console.warn(ignore);
            } finally {
                return $(self.container);
            }
        }, //#!#END
        //#!#START GET
        /**
         * Method: Google Maps get the specificed layer
         * @param {string} type Layer type
         */
        get: function get(layer, callback) {
            var self = this,
                layers = [],
                target = {},
                obj = {},
                key = '',
                lb = '',
                i = 0;
            if ('undefined' === typeof layer) {
                layer = {
                    'marker': [],
                    'label': [],
                    'polygon': [],
                    'polyline': [],
                    'circle': [],
                    'direction': [],
                    'kml': [],
                    'cluster': [], // @since 3.2.10
                    'bound': [] // @since 3.2.10
                };
            }

            function keyLoopCallback(item) {
                var index = self[key].indexOf(item);
                if (0 === layer[obj].length || -1 !== layer[obj].indexOf(index) || 'undefined' !== typeof item.id && 0 < item.id.length && -1 !== item.id.indexOf(layer[obj])) {
                    target[obj].push(item);
                }
            }
            try {
                if ('string' === typeof layer) {
                    if (-1 !== layer.indexOf(',')) {
                        layers = layer.replace(/\s/gi, '').split(',');
                        for (i = 0; i < layers.length; i += 1) {
                            lb = layers[i].toString().toLowerCase();
                            if ('map' === lb) {
                                target[lb] = self.map;
                            } else {
                                console.log(lb);
                                key = '_' + lb + 's';
                                target[lb] = self[key];
                            }
                        }
                    } else {
                        if ('map' === layer.toString().toLowerCase()) {
                            target = self.map;
                        } else {
                            key = '_' + layer.toString().toLowerCase() + 's';
                            target = self[key];
                        }
                    }
                } else {
                    for (obj in layer) {
                        if (Array.isArray(layer[obj])) {
                            key = '_' + obj.toString().toLowerCase() + 's';
                            if (Array.isArray(self[key])) {
                                target[obj] = [];
                                self[key].forEach(keyLoopCallback);
                            }
                        }
                    }
                    target.map = self.map;
                }
                if ('function' === typeof callback) {
                    callback.call(this, target);
                }
                return target;
            } catch (ignore) {
                console.error(ignore);
            } finally {
                return target;
            }
        }, //#!#END
        //#!#START MODIFY
        /**
         * Method:  Google Maps dynamic add layers
         * @param {Object} options Refernce by tinyMap options
         */
        modify: function modify(options) {
            var self = this,
                func = [],
                label = [
                    ['kml', 'kml'],
                    ['marker', 'placeMarkers'],
                    ['direction', 'directionService'],
                    ['polyline', 'drawPolyline'],
                    ['polygon', 'drawPolygon'],
                    ['circle', 'drawCircle'],
                    ['streetView', 'streetView'],
                    ['markerFitBounds', 'markerFitBounds'],
                    ['places', 'places'],
                    ['autoLocation', 'geoLocation']
                ],
                i = 0,
                m = self.map;
            if ('undefined' !== typeof options) {
                for (i = 0; i < label.length; i += 1) {
                    if (options.hasOwnProperty(label[i][0])) {
                        func.push(label[i][1]);
                    }
                }
                if (null !== m) {
                    if (func.length) {
                        for (i = 0; i < func.length; i += 1) {
                            if ('function' === typeof self[func[i]]) {
                                if ('streetView' === func[i]) {
                                    options.streetViewObj = options.streetView;
                                    delete options.streetView;
                                }
                                self[func[i]](m, options, 'modify');
                            }
                        }
                    } else {
                        m.setOptions(options);
                    }
                    if (options.hasOwnProperty('event')) {
                        self.bindEvents(m, options.event);
                    }
                    google.maps.event.trigger(m, 'resize');
                }
            }
            return $(this.container);
        }, //#!#END
        //#!#QUERY
        /**
         * Method: Query address or latlng
         * @param {(string|Array|Object)} addr Address or latlng
         * @param {Function} callback Function callback
         */
        query: function query(addr, callback) {
            var self = this,
                geocoder = new google.maps.Geocoder(),
                address = parseLatLng(addr, false, false),
                opt = {};
            if ('string' === typeof address) {
                opt.address = address;
            } else {
                opt = {
                    'location': {
                        'lat': parseFloat(address.lat, 10),
                        'lng': parseFloat(address.lng, 10)
                    }
                };
            }
            geocoder.geocode(opt, function(results, status) {
                try {
                    if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                        setTimeout(function() {
                            self.query(addr, callback);
                        }, self.interval);
                    } else if (status === google.maps.GeocoderStatus.OK && Array.isArray(results)) {
                        if (0 < results.length && results[0].hasOwnProperty('geometry')) {
                            if ('function' === typeof callback) {
                                callback.call(self, results[0]);
                            } else {
                                return results[0];
                            }
                        }
                    } else {
                        console.error('Geocoder Error Code: ' + status);
                    }
                } catch (ignore) {
                    console.error(ignore);
                }
            });
        }, //#!#END
        //#!#START DESTROY
        destroy: function destroy() {
            var obj = $(this.container);
            if (obj.length) {
                $.removeData(this.container, 'tinyMap');
            }
            return obj.empty();
        }, //#!#END
        //#!#START GETKML
        getKML: function getKML(opt) {
            var self = this, // Options
                opts = $.extend({}, {
                    'marker': true,
                    'polyline': true,
                    'polygon': true,
                    'circle': true,
                    'direction': true,
                    'download': false
                }, opt), // MIME TYPE of KML
                mime = 'data:application/vnd.google-earth.kml+xml;charset=utf-8;base64,', // KML template
                templates = {
                    'xml': ['<?xml version="1.0" encoding="UTF-8"?>', '<kml xmlns="http://earth.google.com/kml/2.2">', '<Document>', '<name><![CDATA[jQuery tinyMap Plugin]]></name>', '<description><![CDATA[]]></description>', '<Style id="style1">', '<PolyStyle>', '<color>50F05A14</color>', '<colorMode>normal</colorMode>', '<fill>1</fill>', '<outline>1</outline>', '</PolyStyle>', '<IconStyle>', '<Icon>', '<href>https://maps.google.com/mapfiles/kml/paddle/grn-circle_maps.png</href>', '</Icon>', '</IconStyle>', '</Style>', '#PLACEMARKS#', '</Document>', '</kml>'],
                    'placemark': ['<Placemark>', '<name><![CDATA[#NAME#]]></name>', '<Snippet></Snippet>', '<description><![CDATA[]]></description>', '<styleUrl>#style1</styleUrl>', '<ExtendedData></ExtendedData>', '#DATA#', '</Placemark>'],
                    'polygon': ['<Placemark>', '<styleUrl>#style1</styleUrl>', '<name><![CDATA[#NAME#]]></name>', '<Polygon>', '<tessellate>1</tessellate>', '<extrude>1</extrude>', '<altitudeMode>clampedToGround</altitudeMode>', '<outerBoundaryIs>', '<LinearRing>', '<coordinates>#LATLNG#</coordinates>', '</LinearRing>', '</outerBoundaryIs>', '</Polygon>', '</Placemark>'],
                    'linestring': '<LineString><tessellate>1</tessellate><coordinates>#LATLNG#</coordinates></LineString>',
                    'point': '<Point><coordinates>#LATLNG#,0.000000</coordinates></Point>'
                },
                strMarker = '',
                strPolyline = '',
                strPolygon = '',
                strCircle = '',
                strDirection = '',
                output = ''; // Refactoring
            // @since v3.3
            self.get('marker,polyline,polygon,circle,direction', function(ms) {
                var latlng = ''; // Marker
                if (true === opts.marker && 'undefined' !== typeof ms.marker) {
                    ms.marker.forEach(function(marker) {
                        latlng = [marker.getPosition().lng(), marker.getPosition().lat()].join(',');
                        strMarker += templates.placemark.join('').replace(/#NAME#/gi, 'Markers').replace(/#DATA#/gi, templates.point.replace(/#LATLNG#/gi, latlng));
                    });
                } // Polyline
                if (true === opts.polyline && 'undefined' !== typeof ms.polyline) {
                    ms.polyline.forEach(function(polyline) {
                        latlng = '';
                        polyline.getPath().getArray().forEach(function(k) {
                            latlng += [k.lng(), k.lat(), '0.000000\n'].join(',');
                        });
                        strPolyline += templates.placemark.join('').replace(/#NAME#/gi, 'Polylines').replace(/#DATA#/gi, templates.linestring.replace(/#LATLNG#/gi, latlng));
                    });
                } // Polygon
                if (true === opts.polygon && 'undefined' !== typeof ms.polygon) {
                    ms.polygon.forEach(function(polygon) {
                        latlng = '';
                        polygon.getPath().getArray().forEach(function(k) {
                            latlng += [k.lng(), k.lat(), '0.000000\n'].join(',');
                        });
                        strPolygon += templates.polygon.join('').replace(/#NAME#/gi, 'Polygons').replace(/#LATLNG#/gi, latlng);
                    });
                } // Circle
                if (true === opts.circle && 'undefined' !== typeof ms.circle) {
                    ms.circle.forEach(function(circle) {
                        latlng = '';
                        var d2r = Math.PI / 180,
                            r2d = 180 / Math.PI,
                            earthsradius = 6378137,
                            points = 64,
                            rlat = circle.getRadius() / earthsradius * r2d,
                            rlng = rlat / Math.cos(circle.getCenter().lat() * d2r),
                            theta = 0,
                            ey = 0,
                            ex = 0,
                            j = 0;
                        for (j = 0; j < 65; j += 1) {
                            theta = Math.PI * (j / (points / 2));
                            ey = circle.getCenter().lng() + rlng * Math.cos(theta);
                            ex = circle.getCenter().lat() + rlat * Math.sin(theta);
                            latlng += [ey, ex, '0.000000\n'].join(',');
                        }
                        strCircle += templates.polygon.join('').replace(/#NAME#/gi, 'Circles').replace(/#LATLNG#/gi, latlng);
                    });
                } // Direction
                if (true === opts.direction && 'undefined' !== typeof ms.direction) {
                    ms.direction.forEach(function(direction) {
                        var d = direction.getDirections();
                        if (d.hasOwnProperty('routes') && Array.isArray(d.routes) && 'undefined' !== typeof d.routes[0] && 'undefined' !== typeof d.routes[0].legs && Array.isArray(d.routes[0].legs)) {
                            d.routes[0].legs.forEach(function(leg) {
                                if (Array.isArray(leg.steps)) {
                                    leg.steps.forEach(function(step) {
                                        latlng = '';
                                        if (Array.isArray(step.path)) {
                                            step.path.forEach(function(path) {
                                                latlng += [path.lng(), path.lat(), '0.000000\n'].join(',');
                                            });
                                        }
                                        strDirection += templates.placemark.join('').replace(/#NAME#/gi, 'Directions').replace(/#DATA#/gi, templates.linestring.replace(/#LATLNG#/gi, latlng));
                                    });
                                }
                            });
                        }
                    });
                }
            }); // Output KML
            output = templates.xml.join('').replace(/#NAME#/gi, '').replace(/#PLACEMARKS#/gi, strMarker + strPolyline + strPolygon + strCircle + strDirection);
            if (true === opts.download) {
                window.open(mime + window.btoa(window.decodeURIComponent(window.encodeURIComponent(output))));
            } else {
                return output;
            }
        }, //#!#END
        /**
         * tinyMap initialize
         */
        init: function Initialize() {
            var self = this,
                script = {},
                geocoder = {},
                param = $.extend({}, tinyMapConfigure),
                api = param.api.split('?')[0],
                msg = '',
                vo = {},
                o = {},
                defIdle = true,
                se;
            try {
                delete param.api;
                delete param.clusterer;
                delete param.withLabel;
                param = $.param(param);
            } catch (ignore) {} // Asynchronous loading Google Maps API
            if (!apiLoaded && 'undefined' === typeof window.google) {
                script = document.createElement('script');
                script.setAttribute('src', [api, param].join('?'));
                (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
                apiLoaded = true;
                script = null;
            } // Make sure Google maps API is loaded.
            if ('object' === _typeof(window.google)) {
                scan(self.options); // Load MarkerClusterer library
                if (!apiClusterLoaded && self.options.hasOwnProperty('markerCluster') && false !== self.options.markerCluster && 'undefined' === typeof MarkerClusterer) {
                    script = document.createElement('script');
                    script.setAttribute('src', tinyMapConfigure.clusterer);
                    (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
                    apiClusterLoaded = true;
                    script = null;
                } // Load MarkerWithLabel library
                if (!apiMarkerWithLabelLoaded && self.options.hasOwnProperty('markerWithLabel') && true === self.options.markerWithLabel && 'undefined' === typeof MarkerWithLabel) {
                    script = document.createElement('script');
                    script.setAttribute('src', tinyMapConfigure.withLabel);
                    (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
                    apiMarkerWithLabelLoaded = true;
                    script = null;
                } // Load OMS library
                if (!apiOMSLoaded && self.options.hasOwnProperty('enableOMS') && 'undefined' === typeof OverlappingMarkerSpiderfier) {
                    script = document.createElement('script');
                    script.setAttribute('src', tinyMapConfigure.OMS);
                    (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
                    apiOMSLoaded = true;
                    script = null;
                }
                self._bounds = new google.maps.LatLngBounds(); //#!#START LABEL
                Label.prototype = new google.maps.OverlayView();
                Label.prototype.onAdd = function() {
                    var self = this;
                    if (null !== self.div) {
                        self.div.appendTo($(self.getPanes().overlayLayer));
                        self.listeners = [google.maps.event.addListener(self, 'visible_changed', function() {
                            self.draw();
                        }), google.maps.event.addListener(self, 'position_changed', function() {
                            self.draw();
                        }), google.maps.event.addListener(self, 'visible_changed', function() {
                            self.draw();
                        }), google.maps.event.addListener(self, 'clickable_changed', function() {
                            self.draw();
                        }), google.maps.event.addListener(self, 'text_changed', function() {
                            self.draw();
                        }), google.maps.event.addListener(self, 'zindex_changed', function() {
                            self.draw();
                        })];
                    }
                };
                Label.prototype.draw = function() {
                    var self = this,
                        projection = self.getProjection(),
                        position = {};
                    try {
                        if (null !== self.div) {
                            if (projection) {
                                position = projection.fromLatLngToDivPixel(self.get('position'));
                                if (position) {
                                    self.div.css({
                                        'left': position.x + 'px',
                                        'top': position.y + 'px',
                                        'display': self.get('visible') ? 'block' : 'none'
                                    });
                                }
                                if (self.text) {
                                    self.span.html(self.text.toString());
                                }
                            }
                        }
                    } catch (ignore) {
                        console.error(ignore);
                    }
                };
                Label.prototype.onRemove = function() {
                    $(this.div).remove();
                    this.div = null;
                }; //#!#END
                // Parsing ControlOptions
                for (o in self.options) {
                    if (self.options.hasOwnProperty(o)) {
                        vo = self.options[o];
                        if (/ControlOptions/g.test(o) && vo.hasOwnProperty('position') && 'string' === typeof vo.position) {
                            self.options[o].position = google.maps.ControlPosition[vo.position.toUpperCase()];
                        }
                    }
                } // Merge options
                self.googleMapOptions = self.options; // Process streetView conflict
                if (self.options.hasOwnProperty('streetView')) {
                    self.googleMapOptions.streetViewObj = self.options.streetView;
                    delete self.googleMapOptions.streetView;
                } // Center location parse
                self.googleMapOptions.center = parseLatLng(self.options.center, true, false); //#!#START STYLES
                // Map styles apply
                if (self.options.hasOwnProperty('styles')) {
                    if ('string' === typeof self.options.styles && styles.hasOwnProperty(self.options.styles)) {
                        self.googleMapOptions.styles = styles[self.options.styles];
                    } else if (Array.isArray(self.options.styles)) {
                        self.googleMapOptions.styles = self.options.styles;
                    }
                } //#!#END
                if ('string' === typeof self.options.center) {
                    geocoder = new google.maps.Geocoder();
                    geocoder.geocode({
                        'address': self.options.center
                    }, function(results, status) {
                        try {
                            if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                                setTimeout(function() {
                                    self.init();
                                }, self.interval);
                            } else if (status === google.maps.GeocoderStatus.OK && Array.isArray(results)) {
                                if (0 < results.length && results[0].hasOwnProperty('geometry')) {
                                    self.googleMapOptions.center = results[0].geometry.location;
                                    self.map = new google.maps.Map(self.container, self.googleMapOptions); // Function injection for IDLE event.
                                    // @since 3.4.0
                                    se = 'undefined' !== typeof self.options.event ? self.options.event : {};
                                    self.mapIdleEvent(se);
                                }
                            } else {
                                msg = (self.options.notFound || status).toString();
                                self.container.innerHTML = $('<div/>').text(msg).html();
                                console.error('Geocoder Error Code: ' + status);
                            }
                        } catch (ignore) {
                            console.error(ignore);
                        }
                    });
                } else {
                    self.map = new google.maps.Map(self.container, self.googleMapOptions); // Function injection for IDLE event.
                    // @since 3.4.0
                    se = 'undefined' !== typeof self.options.event ? self.options.event : {};
                    self.mapIdleEvent(se);
                }
            }
        },
        /**
         * Process custom events of Map to prevent conflict.
         *
         * @param {Object} se Options
         * @since 3.4.0
         */
        mapIdleEvent: function mapIdleEvent(se) {
            var self = this;
            if (se.hasOwnProperty('idle')) {
                if ('undefined' !== se.idle.func && 'function' === typeof se.idle.func && 'undefined' !== typeof se.idle.once) {
                    if (true === se.idle.once) {
                        google.maps.event.addListenerOnce(self.map, 'idle', function() {
                            self.overlay();
                            se.idle.func.apply(this, arguments);
                            delete se.idle;
                        });
                    } else {
                        google.maps.event.addListener(self.map, 'idle', function() {
                            self.overlay();
                            se.idle.func.apply(this, arguments);
                        });
                    }
                    self.bindEvents(self.map, se);
                } else {
                    if ('function' === typeof se.idle) {
                        google.maps.event.addListener(self.map, 'idle', function() {
                            self.overlay();
                            se.idle.apply(this, arguments);
                        });
                    }
                    self.bindEvents(self.map, se);
                }
            } else {
                google.maps.event.addListenerOnce(self.map, 'idle', function() {
                    self.overlay();
                });
                self.bindEvents(self.map, se);
            }
        }
    };
    /**
     * jQuery tinyMap API configure
     * @param {Object} options Plugin configure
     * @global
     */
    $.fn.tinyMapConfigure = function(options) {
        tinyMapConfigure = $.extend(tinyMapConfigure, options);
    };
    /**
     * jQuery tinyMap instance
     * @param {Object} options Plugin settings
     * @public
     */
    $.fn.tinyMap = function(options) {
        var instance = {},
            result = [],
            args = arguments,
            id = 'tinyMap';
        if ('string' === typeof options) {
            this.each(function() {
                instance = $.data(this, id);
                if (instance instanceof TinyMap && 'function' === typeof instance[options]) {
                    result = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
            });
            return 'undefined' !== typeof result ? result : this;
        } else {
            return this.each(function() {
                if (!$.data(this, id)) {
                    $.data(this, id, new TinyMap(this, options));
                }
            });
        }
    };
})(window.jQuery || {}, window, document); //#EOF
/*
 *  Vide - v0.5.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : a.jQuery);
}(this, function(a) {
    "use strict";

    function b(a) {
        var b, c, d, e, f, g, h, i = {};
        for (f = a.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), h = 0, g = f.length; h < g && (c = f[h], c.search(/^(http|https|ftp):\/\//) === -1 && c.search(":") !== -1); h++) {
            b = c.indexOf(":"), d = c.substring(0, b), e = c.substring(b + 1), e || (e = void 0), "string" == typeof e && (e = "true" === e || "false" !== e && e), "string" == typeof e && (e = isNaN(e) ? e : +e), i[d] = e;
        }
        return null == d && null == e ? a : i;
    }

    function c(a) {
        a = "" + a;
        var b, c, d, e = a.split(/\s+/),
            f = "50%",
            g = "50%";
        for (d = 0, b = e.length; d < b; d++) {
            c = e[d], "left" === c ? f = "0%" : "right" === c ? f = "100%" : "top" === c ? g = "0%" : "bottom" === c ? g = "100%" : "center" === c ? 0 === d ? f = "50%" : g = "50%" : 0 === d ? f = c : g = c;
        }
        return {
            x: f,
            y: g
        };
    }

    function d(b, c) {
        var d = function d() {
            c(this.src);
        };
        a('<img src="' + b + '.gif">').on("load", d), a('<img src="' + b + '.jpg">').on("load", d), a('<img src="' + b + '.jpeg">').on("load", d), a('<img src="' + b + '.png">').on("load", d);
    }

    function e(c, d, e) {
        if (this.$element = a(c), "string" == typeof d && (d = b(d)), e ? "string" == typeof e && (e = b(e)) : e = {}, "string" == typeof d) d = d.replace(/\.\w*$/, "");
        else if ("object" == (typeof d === "undefined" ? "undefined" : _typeof(d)))
            for (var f in d) {
                d.hasOwnProperty(f) && (d[f] = d[f].replace(/\.\w*$/, ""));
            }
        this.settings = a.extend({}, g, e), this.path = d;
        try {
            this.init();
        } catch (i) {
            if (i.message !== h) throw i;
        }
    }
    var f = "vide",
        g = {
            volume: 1,
            playbackRate: 1,
            muted: !0,
            loop: !0,
            autoplay: !0,
            position: "50% 50%",
            posterType: "detect",
            resizing: !0,
            bgColor: "transparent",
            className: ""
        },
        h = "Not implemented";
    e.prototype.init = function() {
        var b, e, f = this,
            g = f.path,
            i = g,
            j = "",
            k = f.$element,
            l = f.settings,
            m = c(l.position),
            n = l.posterType;
        e = f.$wrapper = a("<div>").addClass(l.className).css({
            position: "absolute",
            "z-index": -1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "hidden",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "background-color": l.bgColor,
            "background-repeat": "no-repeat",
            "background-position": m.x + " " + m.y
        }), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) && (g.poster ? i = g.poster : g.mp4 ? i = g.mp4 : g.webm ? i = g.webm : g.ogv && (i = g.ogv)), "detect" === n ? d(i, function(a) {
            e.css("background-image", "url(" + a + ")");
        }) : "none" !== n && e.css("background-image", "url(" + i + "." + n + ")"), "static" === k.css("position") && k.css("position", "relative"), k.prepend(e), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) ? (g.mp4 && (j += '<source src="' + g.mp4 + '.mp4" type="video/mp4">'), g.webm && (j += '<source src="' + g.webm + '.webm" type="video/webm">'), g.ogv && (j += '<source src="' + g.ogv + '.ogv" type="video/ogg">'), b = f.$video = a("<video>" + j + "</video>")) : b = f.$video = a('<video><source src="' + g + '.mp4" type="video/mp4"><source src="' + g + '.webm" type="video/webm"><source src="' + g + '.ogv" type="video/ogg"></video>');
        try {
            b.prop({
                autoplay: l.autoplay,
                loop: l.loop,
                volume: l.volume,
                muted: l.muted,
                defaultMuted: l.muted,
                playbackRate: l.playbackRate,
                defaultPlaybackRate: l.playbackRate
            });
        } catch (o) {
            throw new Error(h);
        }
        b.css({
            margin: "auto",
            position: "absolute",
            "z-index": -1,
            top: m.y,
            left: m.x,
            "-webkit-transform": "translate(-" + m.x + ", -" + m.y + ")",
            "-ms-transform": "translate(-" + m.x + ", -" + m.y + ")",
            "-moz-transform": "translate(-" + m.x + ", -" + m.y + ")",
            transform: "translate(-" + m.x + ", -" + m.y + ")",
            visibility: "hidden",
            opacity: 0
        }).one("canplaythrough.vide", function() {
            f.resize();
        }).one("playing.vide", function() {
            b.css({
                visibility: "visible",
                opacity: 1
            }), e.css("background-image", "none");
        }), k.on("resize.vide", function() {
            l.resizing && f.resize();
        }), e.append(b);
    }, e.prototype.getVideoObject = function() {
        return this.$video[0];
    }, e.prototype.resize = function() {
        if (this.$video) {
            var a = this.$wrapper,
                b = this.$video,
                c = b[0],
                d = c.videoHeight,
                e = c.videoWidth,
                f = a.height(),
                g = a.width();
            g / e > f / d ? b.css({
                width: g + 2,
                height: "auto"
            }) : b.css({
                width: "auto",
                height: f + 2
            });
        }
    }, e.prototype.destroy = function() {
        delete a[f].lookup[this.index], this.$video && this.$video.off(f), this.$element.off(f).removeData(f), this.$wrapper.remove();
    }, a[f] = {
        lookup: []
    }, a.fn[f] = function(b, c) {
        var d;
        return this.each(function() {
            d = a.data(this, f), d && d.destroy(), d = new e(this, b, c), d.index = a[f].lookup.push(d) - 1, a.data(this, f, d);
        }), this;
    }, a(document).ready(function() {
        var b = a(window);
        b.on("resize.vide", function() {
            for (var b, c = a[f].lookup.length, d = 0; d < c; d++) {
                b = a[f].lookup[d], b && b.settings.resizing && b.resize();
            }
        }), b.on("unload.vide", function() {
            return !1;
        }), a(document).find("[data-vide-bg]").each(function(b, c) {
            var d = a(c),
                e = d.data("vide-options"),
                g = d.data("vide-bg");
            d[f](g, e);
        });
    });
});
(function() {
    var env = function() {
        var ua = navigator.userAgent.toLowerCase(),
            regex = {
                windows: /windows|win(ce|16|32|64)|pocket pc/,
                macintosh: /macintosh|powerpc/,
                linux: /linux/,
                freebsd: /freebsd/,
                openbsd: /openbsd/,
                symbos: /symbos/,
                ios: /ios|iphone|ipad|ipod/,
                android: /android/,
                blackBerry: /blackBerry/,
                iphone: /iphone/,
                ipad: /ipad/,
                ipod: /ipod/,
                desktop: /windows|win32|linux|macintosh|powerpc|freebsd|openbsd/,
                mobile: /ios|iphone|ipad|ipod|android|iemobile|blackberry/
            },
            os = {
                windows: regex.windows.test(ua),
                macintosh: regex.macintosh.test(ua),
                linux: regex.linux.test(ua),
                freebsd: regex.freebsd.test(ua),
                openbsd: regex.openbsd.test(ua),
                symbos: regex.symbos.test(ua),
                ios: regex.ios.test(ua),
                android: regex.android.test(ua),
                blackBerry: regex.blackBerry.test(ua)
            },
            device = {
                iphone: regex.iphone.test(ua),
                ipad: regex.ipad.test(ua),
                ipod: regex.ipod.test(ua),
                desktop: regex.desktop.test(ua),
                tablet: regex.mobile.test(ua),
                mobile: regex.mobile.test(ua)
            },
            browser = function() {
                var NO_MATCHED, KUNOW_VERSION = -1,
                    toVersion = function toVersion(version) {
                        return parseFloat(String(version || '').replace(/(\.)/g, function(matched) {
                            matched = !arguments.callee.replaced ? matched : '';
                            arguments.callee.replaced = true;
                            return matched;
                        }));
                    },
                    map = function() {
                        var info = {
                            mozilla: /mozilla/.test(ua),
                            webkit: /webkit/.test(ua),
                            gecko: /gecko/.test(ua),
                            safari: /safari/.test(ua),
                            chrome: /chrome/.test(ua),
                            crios: /crios/.test(ua),
                            firefox: /firefox/.test(ua),
                            opera: /opera|opr\//.test(ua),
                            konqueror: /konqueror/.test(ua),
                            edge: /edge/.test(ua),
                            msie: function() {
                                var matches, version = NO_MATCHED;
                                if (/msie/.test(ua)) {
                                    version = KUNOW_VERSION;
                                    if (matches = ua.match(/msie ([\w.]+)/)) {
                                        version = matches[1];
                                    }
                                }
                                if (matches = ua.match(/trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/)) {
                                    if (/netscape/.test(navigator.appName.toLowerCase())) {
                                        version = matches[1];
                                    }
                                }
                                if (version !== NO_MATCHED) {
                                    version = toVersion(version);
                                }
                                return version;
                            }(),
                            android: function() {
                                var matches, version = NO_MATCHED,
                                    parse = function parse() {
                                        version = KUNOW_VERSION;
                                        if (matches = ua.match(/(?:android)[ \/]([\w.]+)/)) {
                                            version = matches[1];
                                        }
                                    };
                                if (/android/.test(ua)) {
                                    if (/android .+ version[ \/][\w\.]+/.test(ua)) {
                                        parse();
                                    } else if (matches = ua.match(/\(khtml, like gecko\) (\w+)[ \/][\w\.]+ chrome[ \/]/)) {
                                        parse();
                                    }
                                }
                                if (version !== NO_MATCHED) {
                                    version = toVersion(version);
                                }
                                return version;
                            }()
                        }; // Some exceptions
                        info.webkit = info.webkit && !info.edge;
                        info.safari = info.safari && !info.chrome && !info.crios && !info.android && !info.opera && !info.edge;
                        info.chrome = (info.chrome || info.crios) && !info.android && !info.opera && !info.edge;
                        info.chromium = !!info.android;
                        info.ms = info.edge || info.msie;
                        return info;
                    }(); // Version
                for (var name in map) {
                    var browser = map[name];
                    map[name] = typeof browser === 'number' ? browser : NO_MATCHED;
                    if (browser === true) {
                        var matches, patterns = {
                            mozilla: /mozilla[ \/]([\w.]+)/,
                            webkit: /webkit[ \/]([\w.]+)/,
                            gecko: /gecko[ \/]([\w.]+)/,
                            safari: /version[ \/]([\w.]+).*safari/,
                            chrome: /(?:chrome|crios)[ \/]([\w.]+)/,
                            chromium: /(?:chrome|crios)[ \/]([\w.]+)/,
                            crios: /crios[ \/]([\w.]+)/,
                            firefox: /firefox[ \/]([\w.]+)/,
                            opera: /(?:opera|opr)(?:.*version)?[ \/]([\w.]+)/,
                            android: /(?:android)[ \/]([\w.]+)/,
                            konqueror: /konqueror[ \/]([\w.]+)/,
                            edge: /edge[ \/]([\w.]+)/
                        };
                        map[name] = KUNOW_VERSION;
                        if (patterns[name] && (matches = ua.match(patterns[name]))) {
                            map[name] = matches[1];
                        }
                    }
                    if (map[name] !== NO_MATCHED) {
                        map[name] = toVersion(map[name]);
                    }
                }
                return map;
            }();
        return {
            ua: ua,
            os: os,
            device: device,
            browser: browser
        };
    }();
    $(function() {
        $(window).resize(function() {
            var root = $('html'),
                msie = 'msie',
                clientWidth = $(window).outerWidth(),
                clientHeight = $(window).height();
            forcePcVersion = true;
            $.each($.extend({}, env.os, env.device, env.browser), function(name, value) {
                value && root.addClass(name);
                if (value === msie) {
                    root.addClass(msie + env.browser.version);
                }
            });
            if (env.device.mobile || forcePcVersion) {
                root.toggleClass('min-xs-size', clientWidth >= 481);
                root.toggleClass('min-sm-size', clientWidth >= 768);
                root.toggleClass('min-md-size', clientWidth >= 992);
                root.toggleClass('min-lg-size', clientWidth >= 1200);
                root.toggleClass('min-bg-size', clientWidth >= 1408);
                root.toggleClass('max-ss-size', clientWidth <= 360);
                root.toggleClass('max-xs-size', clientWidth <= 480);
                root.toggleClass('max-sm-size', clientWidth <= 767);
                root.toggleClass('max-md-size', clientWidth <= 991);
                root.toggleClass('max-lg-size', clientWidth <= 1199);
                root.toggleClass('max-bg-size', clientWidth <= 1407);
                root.toggleClass('max-bl-size', clientWidth <= 1600);
            }
            return arguments.callee;
        }());
    });
})();
$(document).ready(function() {
    if (!/iPhone|iPad|iPod|ios/i.test(window.navigator.userAgent)) {
        $(".wp").on('mousewheel', function(event, delta) {
            $('html,body').stop();
            if (!$("html").hasClass("macintosh")) {
                var that = this,
                    duration = 800,
                    easing = 'easeOutCirc',
                    step = 80,
                    target = $('html, body'),
                    scrollHeight = $(document).height(),
                    scrollTop = that.last !== undefined ? that.last : $(window).scrollTop(),
                    viewportHeight = $(window).height(),
                    multiply = event.deltaMode === 1 ? step : 1;
                scrollTop -= delta * multiply * step;
                scrollTop = Math.min(scrollHeight - viewportHeight, Math.max(0, scrollTop));
                that.last = scrollTop;
                target.stop().animate({
                    scrollTop: scrollTop
                }, {
                    easing: easing,
                    duration: duration,
                    complete: function complete() {
                        delete that.last;
                    }
                });
                event.preventDefault();
            }
        });
    } else {
        $(".wp").on('mousewheel', function() {
            $('html,body').stop();
        });
    }
    if (!/Android/i.test(window.navigator.userAgent)) {
        $('.scrollbarX').mCustomScrollbar({
            axis: "x",
            mouseWheel: {
                enable: false
            }
        });
    }
    $('.scrollbarY').mCustomScrollbar({
        axis: "y",
        //autoHideScrollbar: true,
    });
    $('.jqimgFill').imgLiquid();
    $('.jqimgFill, .wp').css("opacity", "1");
    $(document).on('click', 'input[type=text]', function() {
        this.select();
    });
    if ($("html").hasClass('min-lg-size')) {
        var skrollr_obj = skrollr.init();
    }
    $(".goTop").each(function() {
        $(this).click(function() {
            $("html,body").animate({
                scrollTop: 0
            }, 1500, 'easeInOutCubic');
            return false;
        });
    });
    $(".goDown").each(function() {
        $(this).click(function() {
            $("html,body").animate({
                scrollTop: $(".scroll-here").offset().top
            }, 1300, 'easeInOutCubic');
            return false;
        });
    });
    /* ==========================================================================
           open-box
          ==========================================================================*/
    $(".open-box").each(function() {
        var fixedBox = $(this).attr("data-box");
        $(this).on("click tap", function() {
            $("#" + fixedBox).addClass("show");
            $(".fixed-box .scollbar").mCustomScrollbar("scrollTo", "top", {
                scrollInertia: 1
            });
            $("body").addClass("disable");
        });
        $(".closeBox").on("click tap", function() {
            $(".fixed-box").removeClass("show");
            $("body").removeClass("disable");
        });
        $(".changeImg").on("click tap", function() {
            var imgSrc = $(this).children("img").attr("src");
            $("#zoom-pic img").attr("src", imgSrc); // console.log(imgSrc)
        });
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var $docEl = $('html, body'),
                $wrap = $('.wp'),
                scrollTop;
            $('.open-box').click(function(e) {
                overlayOpen();
                e.preventDefault();
            });
            $('.closeBox').click(function(e) {
                overlayClose();
                e.preventDefault();
            });
            var overlayClose = function overlayClose() {
                $.unlockBody();
            };
            var overlayOpen = function overlayOpen() {
                $.lockBody();
            };
            $.lockBody = function() {
                if (window.pageYOffset) {
                    scrollTop = window.pageYOffset;
                    $wrap.css({
                        top: -scrollTop
                    });
                }
                $docEl.css({
                    height: "100%",
                    overflow: "hidden"
                });
            };
            $.unlockBody = function() {
                $docEl.css({
                    height: "",
                    overflow: ""
                });
                $wrap.css({
                    top: ''
                });
                window.scrollTo(0, scrollTop);
                window.setTimeout(function() {
                    scrollTop = null;
                }, 0);
            };
        }
    });
    /* ==========================================================================
            [header]
         ==========================================================================*/
    $('#header').each(function() {
        $(this).css("visibility", "visible");
        $(".menu-toggle").click(function() {
            $("#header").toggleClass('active');
        });
        $(this).find('.slider-pic').slick({
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            cssEase: 'ease',
            easing: 'easeInOutCirc',
            autoplaySpeed: 3000,
            pauseOnHover: false
        });
        var page = $(".wp").attr("id");
        $("#" + page).find('.menu li[data-nav="' + page + '"]').addClass('active');
        $(window).scroll(function() {
            var winTop = $(window).scrollTop();
            if ($(this).scrollTop() > 200) {
                $('#header').addClass("pack-up");
            } else {
                $('#header').removeClass("pack-up");
            };
        });
    });
    $(document).mouseup(function(e) {
        var _con = $("#header");
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            $("#header").removeClass("active");
        }
    });
    $(document).ready(function() {
        var $menu = $('#header');
        $menu.length && $(window).scroll(function() {
            var scrollTop = $menu.offset().top;
            $('.light, .dark').each(function() {
                var me = $(this),
                    top = me.offset().top - $("#header").outerHeight(),
                    bottom = top + me.outerHeight(true);
                if (scrollTop > top && scrollTop < bottom) {
                    $(".wp").toggleClass('header-light', me.hasClass('dark'));
                    return false;
                }
            });
        }).scroll();
    });
    /* ==========================================================================
                文字特效
        ==========================================================================*/
    $('.tlt-run').textillate({
        loop: false,
        in: {
            effect: 'flipInY',
            delayScale: 0.5,
            delay: 15,
            sync: false,
            shuffle: true,
            reverse: false
        }
    });
    $('.tlt').each(function() {
        var check = true;
        var tlt_item = $(this);
        $(window).scroll(function() {
            var winTop = $(window).scrollTop() + $(window).height() - $(window).height() / 4;
            var pageTop = tlt_item.offset().top;
            if (winTop > pageTop && check) {
                tlt_item.css('opacity', 1).textillate({
                    loop: false,
                    in: {
                        effect: 'flipInY'
                    }
                });
                check = false;
            }
        });
    });
    $('.tlt-loop').each(function() {
        var check = true;
        var tlt_item = $(this);
        $(window).scroll(function() {
            var winTop = $(window).scrollTop() + $(window).height() - $(window).height() / 4;
            var pageTop = tlt_item.offset().top;
            if (winTop > pageTop && check) {
                tlt_item.css('opacity', 1).textillate({
                    loop: true,
                    in: {
                        effect: 'flipInY',
                        delay: 25
                    },
                    out: {
                        effect: 'fadeOutBlur',
                        delay: 25,
                        shuffle: true
                    }
                });
                check = false;
            }
        });
    });
    /* ==========================================================================
          * 頁面區塊
        ==========================================================================*/
    $('.run-number').each(function() {
        var check = true;
        var number_value = $(this).attr("data-number");
        var number_item = $(this);
        $(window).scroll(function() {
            var winTop = $(window).scrollTop() + $(window).height() - $(window).height() / 4;
            var pageTop = number_item.offset().top;
            if (winTop > pageTop && check) {
                number_item.animateNumber({
                    number: number_value
                }, 1000);
                check = false;
            }
        });
    });
    $("#bg-video").each(function() {
        var $this = $("#bg-video");
        $this.YTPlayer({
            mute: true,
            autoPlay: true,
            videoURL: 'https://www.youtube.com/watch?v=b8-3_Etyc1o',
            useOnMobile: false,
            showYTLogo: false,
            showControls: false,
            startAt: 0 // events: {
                //'onReady': onPlayerReady
                //}
        });
        $this.show();

        function onPlayerReady(event) {
            event.target.playVideo();
        } // if ( $("html").hasClass("no-touch") ) {
        //     setTimeout(function () {
        //         $this.fadeOut(1000);
        //     }, 1500);
        // }
    });
    $(".has-animation li, .go").each(function() {
        var item = $(this);
        $(window).scroll(function() {
            var winTop = $(window).scrollTop() + $(window).height() - $(window).height() / 5;
            var pageTop = item.offset().top;
            if (winTop >= pageTop) {
                item.addClass("show");
            } else {
                item.removeClass("show");
            }
        });
    });
    //$("ul.types > li").each(function() {
    //    var type = $(this);
    //    var _clickTab = type.attr('data-type');
    //    type.click(function() {
    //        $(this).addClass('active').siblings('.active').removeClass('active');
    //        $(".work li").hide();
    //        $(".work li." + _clickTab).fadeIn(); //$(".project li." + _clickTab).fadeIn().siblings().hide();
            // var node = $(".work li." + _clickTab);
            // node.insertBefore($(".work ul li:first-of-type") );
            //document.getElementById("por-list").appendChild(node);
    //    });
    //});
    /*== footer  =========================== */
    $("#footer").each(function() {
        $(".fixed-tools .toggle").click(function() {
            $(this).next("ul").toggleClass("show");
        });
        /*$(window).scroll(function(){var pageTop=$('.main').offset().top;var pageBottom=$(document).height()-$(window).height()-$("#footer").height();var winTop=$(window).scrollTop();if(winTop>=pageTop&&winTop<=pageBottom){$('.fixed-tools').removeClass("active");}else{$('.fixed-tools').addClass("active");}if($(this).scrollTop()>200){$('#footer .fixed-tools').fadeIn();}else{$('#footer .fixed-tools').fadeOut();};});*/
        if ($("html").hasClass('min-sm-size')) {
            $(window).on("mousewheel", function() {
                $('#footer .fixed-tools ul').removeClass("show");
            });
        }
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 200) {
            $(".pagefooter").fadeIn();
        } else {
            $(".pagefooter").fadeOut();
        }
    }); /*== main  =========================== */
    $(".home-banner").each(function() {
        $(this).find('.slider').slick({
            dots: false,
            arrows: true,
            autoplay: true,
            speed: 1500,
            cssEase: 'ease',
            easing: 'easeInOutCirc',
            autoplaySpeed: 3000,
            appendArrows: $(".banner .arrows"),
            pauseOnHover: false //adaptiveHeight: true
        });
    });
    $(".client").each(function() {
        $(this).find('.slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            rows: 2,
            autoplay: true,
            speed: 1000,
            cssEase: 'ease',
            easing: 'easeInOutCirc',
            autoplaySpeed: 1500,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }]
        });
    });
    // $(".our-team").each(function() {
    //     var item = $(this).find('ul.photos li');
    //     $(window).scroll(function() {
    //         var winTop = $(window).scrollTop() + $(window).height() - $(window).height() / 4;
    //         var pageTop = item.offset().top;
    //         if (winTop >= pageTop) {
    //             item.each(function(i) {
    //                 var $this = $(this);
    //                 setTimeout(function() {
    //                     $this.addClass("show");
    //                 }, (i + 1) * 100 + 300);
    //             });
    //         } else {
    //             item.removeClass("show");
    //         }
    //     });
    // });
    $(".project-mac").each(function() {
        $(this).find('.slider').slick({
            dots: false,
            arrows: false,
            autoplay: true,
            speed: 1500,
            fade: true,
            autoplaySpeed: 2000,
            appendArrows: $(".project-mac .block"),
            pauseOnHover: false,
            responsive: [{
                breakpoint: 1600,
                settings: {
                    appendArrows: $(".project-mac .mac")
                }
            }, {
                breakpoint: 480,
                settings: {
                    appendArrows: $(".project-mac .mac"),
                    arrows: false
                }
            }]
        });
    });
    $(".project-page").each(function() {
        $(".project-page .pic:first-of-type").addClass("active");
        $(".project-page .pic").hover(function() {
            $(this).addClass("active").siblings().removeClass("active");
        });
    });
    $("#projects").each(function() {
        $(window).scroll(function() {
            var pageTop = $('.project-mac').length > 0 ? $('.project-mac').offset().top : 0;
            var pageBottom = $(document).height() - $(window).height() - $(".project").height();
            var winTop = $(window).scrollTop();
            if (winTop >= pageTop && winTop <= pageBottom) {
                $('.prevNext').fadeIn();
            } else {
                $('.prevNext').fadeOut();
            }
        });
    }); // $(".map").each(function () {
    //     $(this).tinyMap({
    //         'center': [24.1717572, 120.7060358],
    //         'zoom': 15,
    //         'marker': [
    //             {
    //                 'addr': [24.1717572, 120.7060358],
    //                 'text': '<strong>406 台中市北屯區東山路一段 147 巷 49 號</strong>',
    //                 //'newLabel': '雲端數位科技有限公司',
    //                 //'newLabelCSS': 'labels',
    //                 'icon': {
    //                     'url': '/images/map-icon.png',
    //                 },
    //                 'animation': 'DROP'
    //             },
    //         ],
    //         'styles': [{ "featureType": "administrative", "elementType": "geometry", "stylers": [{ "saturation": "2" }, { "visibility": "simplified" }] }, { "featureType": "administrative", "elementType": "labels", "stylers": [{ "saturation": "-28" }, { "lightness": "-10" }, { "visibility": "on" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "saturation": "-1" }, { "lightness": "-12" }] }, { "featureType": "landscape.natural", "elementType": "labels.text", "stylers": [{ "lightness": "-31" }] }, { "featureType": "landscape.natural", "elementType": "labels.text.fill", "stylers": [{ "lightness": "-74" }] }, { "featureType": "landscape.natural", "elementType": "labels.text.stroke", "stylers": [{ "lightness": "65" }] }, { "featureType": "landscape.natural.landcover", "elementType": "geometry", "stylers": [{ "lightness": "-15" }] }, { "featureType": "landscape.natural.landcover", "elementType": "geometry.fill", "stylers": [{ "lightness": "0" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "saturation": "0" }, { "lightness": "-9" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "lightness": "-14" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "lightness": "-35" }, { "gamma": "1" }, { "weight": "1.39" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "lightness": "-19" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "lightness": "46" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "labels.icon", "stylers": [{ "lightness": "-13" }, { "weight": "1.23" }, { "invert_lightness": true }, { "visibility": "simplified" }, { "hue": "#ff0000" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#adadad" }, { "visibility": "on" }] }]
    //     });
    // });
    /* ==========================================================================
                IE 9 不支援 placeholder
        ==========================================================================*/
    (function($) {
        $.support.placeholder = 'placeholder' in document.createElement('input');
    })(jQuery); //fix for IE7 and IE8
    $(function() {
        if (!$.support.placeholder) {
            $("[placeholder]").focus(function() {
                if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
            }).blur(function() {
                if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
            }).blur();
            $("[placeholder]").parents("form").submit(function() {
                $(this).find('[placeholder]').each(function() {
                    if ($(this).val() == $(this).attr("placeholder")) {
                        $(this).val("");
                    }
                });
            });
        }
    });
    /* ==========================================================================
          * 螢幕縮放動作
        ==========================================================================*/
    $(window).resize(function() {
        resizeCss();
    });

    function resizeCss() {
        uniformHeight($("#projects .project .list li .name"));
        uniformHeight($("#projects .project .list li .summary"));
        uniformHeight($("#projects .work .list .text"));
    }

    function uniformHeight($el) {
        if ($el.length !== 0) {
            var $h_array = [];
            $el.each(function(index) {
                $(this).height("auto");
                $h_array[index] = $(this).height();
            });
            $max = Math.max.apply(null, $h_array);
            $el.each(function() {
                $(this).height($max);
            });
        }
    }
    resizeCss(); /*document END*/
});


function active_lbox() {
    var lbox_switch = $('.js-ajax-open');
    lbox_switch.on('click', function() {
        var a = $(this).attr('data-page');
        var b = $(this).attr('data-id');
        var c = $(this).attr('video-id');
        lbox(a, b, c);
    });
};

function lbox(lbox_page, lbox_id, video_id) {
    $.ajax({
        url: lbox_page
    }).done(function(data) {
        $("body").append("<article class='lbox " + lbox_id + "' data-id=" + lbox_id + "></article>").addClass('is-lboxOpen');

        lockScroll();

        var injectTarget = '.lbox.' + lbox_id;
        $(injectTarget).html(data);
        lbox_function(lbox_id, video_id);
        /*給燈箱一個 open 讓動畫作動*/
        if ($(injectTarget).length > 0) {
            setTimeout(function() {
                $(injectTarget).addClass('js-open');

            }, 500);
        }
    });
};

function lbox_function(id, video_id) {
    switch (id) {
        case 'lbox-video':
            $('.lbox-video iframe').attr({
                'src': 'https://www.youtube.com/embed/' + video_id + '?rel=0&autoplay=1'
            })
            lbox_close(id, 500);
            break;

        case 'csr-lb':
            //csr-lb 燈箱
            console.log('13579');
            setTimeout(function() {
                    $('.map-list').addClass('in')
                }, 800)
                // features.csr_page()
            lbox_close(id, 1000);
            break;

        default:
            lbox_close(id, 500);
            break;
    }
};

function lbox_close(id, time) {
    var closeBtn = '.lbox.' + id;
    var ajaxCloseBtn = $(closeBtn).find('.ajax_close');
    ajaxCloseBtn.on('click', function() {
        var _this = $(this),
            targetPage = _this.closest('.lbox');
        targetPage.removeClass('is-open').addClass('is-close');
        $('body').removeClass('is-lboxOpen');
        unlockScroll();

        setTimeout(function() {
            targetPage.remove();
        }, time);
    });
}
$(function() {
    $('m-lb--open').click(function() {
        console.log('test');
    });
});






$(".leaf").each(function() {
    var check22 = true;
    var it2 = $(".leaf");
    $(window).scroll(function() {
        let wT2 = $(window).scrollTop() + $(window).height() - $(window).height() / 4;
        let pT2 = it2.offset().top;
        if (wT2 > pT2 && check22) {
            $(".leaf1").addClass("leaffade");
            $(".leaf2").addClass("leaffade2");
            check22 = false;
        }
    });
});


$('.checkboxs .checkbox .checkdot').click(function() {
    if ($(this).prop('checked')) {
        $('.checkboxs .checkbox .checkdot:checkbox').prop('checked', false);
        $(this).prop('checked', true);
    }
});

function categoryTab(url) {
    location.href = url;
}
$(function() {
    $('.pomake-mask,#popmake-close').click(function() {
        $('.popmake-block').hide();

    })
})