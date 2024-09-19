import {
  __commonJS
} from "./chunk-X6JV76XL.js";

// node_modules/countrycitystatejson/lib/compiledCities.json
var require_compiledCities = __commonJS({
  "node_modules/countrycitystatejson/lib/compiledCities.json"(exports, module) {
  }
});

// node_modules/jclass/index.js
var require_jclass = __commonJS({
  "node_modules/jclass/index.js"(exports, module) {
    (function(factory) {
      if (typeof define == "function" && define.amd) {
        define([], factory);
      } else if (typeof exports == "object") {
        exports = factory();
        if (typeof module == "object") {
          module.exports = exports;
        }
      } else if (window) {
        window.JClass = factory();
      } else if (typeof console == "object" && console.error instanceof Function) {
        console.error("cannot determine environment");
      }
    })(function() {
      var isFn = function(obj) {
        return obj instanceof Function;
      };
      var extend = function(target) {
        var sources = Array.prototype.slice.call(arguments, 1);
        for (var i in sources) {
          var source = sources[i];
          if (typeof source != "object") {
            continue;
          }
          for (var key in source) {
            target[key] = source[key];
          }
        }
        return target;
      };
      var defaultOptions = {
        // internal object for indicating that class objects don't have a class object themselves,
        // may not be used by users
        _isClassObject: false
      };
      var initializing = false;
      var BaseClass = function() {
      };
      BaseClass._subClasses = [];
      BaseClass.prototype.init = function() {
      };
      BaseClass._extend = function(instanceMembers, classMembers, options) {
        if (instanceMembers === void 0) {
          instanceMembers = {};
        }
        if (classMembers === void 0) {
          classMembers = {};
        }
        if (options === void 0) {
          options = {};
        }
        options = extend({}, defaultOptions, options);
        var JClass = function() {
          if (initializing) {
            return;
          }
          this._class = JClass;
          if (this.init instanceof Function) {
            this.init.apply(this, arguments);
          }
        };
        var SuperClass = this;
        initializing = true;
        var prototype = new SuperClass();
        initializing = false;
        var superPrototype = SuperClass.prototype;
        JClass.prototype = prototype;
        JClass.prototype.constructor = JClass;
        JClass._superClass = SuperClass;
        JClass._subClasses = [];
        SuperClass._subClasses.push(JClass);
        JClass._extend = SuperClass._extend;
        JClass._extends = function(target) {
          if (this._superClass == BaseClass) {
            return false;
          }
          if (target == this._superClass || target == BaseClass) {
            return true;
          }
          return this._superClass._extends(target);
        };
        for (var key in instanceMembers) {
          var property = Object.getOwnPropertyDescriptor(instanceMembers, key);
          var member = property.value;
          if (member !== null && typeof member == "object" && member.descriptor) {
            Object.defineProperty(prototype, key, member);
          } else if (!("value" in property) && ("set" in property || "get" in property)) {
            Object.defineProperty(prototype, key, property);
          } else {
            prototype[key] = member;
            var superMember = superPrototype[key];
            if (isFn(member) && isFn(superMember) && member !== superMember) {
              member._super = superMember;
            }
          }
        }
        if (!options._isClassObject) {
          var ClassMembersSuperClass = SuperClass._members === void 0 ? BaseClass : SuperClass._members._class;
          var opts = extend({}, options, { _isClassObject: true });
          var ClassMembersClass = ClassMembersSuperClass._extend(classMembers, {}, opts);
          ClassMembersClass._instanceClass = JClass;
          JClass._members = new ClassMembersClass();
        }
        return JClass;
      };
      BaseClass._convert = function(cls, options) {
        var instanceMembers = cls.prototype;
        instanceMembers.init = function() {
          var origin = this._origin = BaseClass._construct(cls, arguments);
          Object.keys(origin).forEach(function(key) {
            if (!origin.hasOwnProperty(key)) {
              return;
            }
            Object.defineProperty(this, key, {
              get: function() {
                return origin[key];
              }
            });
          }, this);
        };
        return BaseClass._extend(instanceMembers, {}, options);
      };
      BaseClass._construct = function(cls, args) {
        if (args === void 0) {
          args = [];
        }
        var Class = function() {
          return cls.apply(this, args);
        };
        Class.prototype = cls.prototype;
        return new Class();
      };
      BaseClass._superDescriptor = function(cls, prop) {
        if ("_class" in cls && cls instanceof cls._class) {
          cls = cls._class;
        }
        if ("_extends" in cls && cls._extends instanceof Function && cls._extends(this)) {
          return Object.getOwnPropertyDescriptor(cls._superClass.prototype, prop);
        } else {
          return void 0;
        }
      };
      return BaseClass;
    });
  }
});

// node_modules/hasharray/src/HashArray.js
var require_HashArray = __commonJS({
  "node_modules/hasharray/src/HashArray.js"(exports, module) {
    var JClass = require_jclass();
    var HashArray = JClass._extend({
      //-----------------------------------
      // Constructor
      //-----------------------------------
      init: function(keyFields, callback, options) {
        keyFields = keyFields instanceof Array ? keyFields : [keyFields];
        this._map = {};
        this._list = [];
        this.callback = callback;
        this.keyFields = keyFields;
        this.isHashArray = true;
        this.options = options || {
          ignoreDuplicates: false
        };
        if (callback) {
          callback("construct");
        }
      },
      //-----------------------------------
      // add()
      //-----------------------------------
      addOne: function(obj) {
        var needsDupCheck = false;
        for (var key in this.keyFields) {
          key = this.keyFields[key];
          var inst = this.objectAt(obj, key);
          if (inst) {
            if (this.has(inst)) {
              if (this.options.ignoreDuplicates)
                return;
              if (this._map[inst].indexOf(obj) != -1) {
                needsDupCheck = true;
                continue;
              }
              this._map[inst].push(obj);
            } else
              this._map[inst] = [obj];
          }
        }
        if (!needsDupCheck || this._list.indexOf(obj) == -1)
          this._list.push(obj);
      },
      add: function() {
        for (var i = 0; i < arguments.length; i++) {
          this.addOne(arguments[i]);
        }
        if (this.callback) {
          this.callback("add", Array.prototype.slice.call(arguments, 0));
        }
        return this;
      },
      addAll: function(arr) {
        if (arr.length < 100)
          this.add.apply(this, arr);
        else {
          for (var i = 0; i < arr.length; i++)
            this.add(arr[i]);
        }
        return this;
      },
      addMap: function(key, obj) {
        this._map[key] = obj;
        if (this.callback) {
          this.callback("addMap", {
            key,
            obj
          });
        }
        return this;
      },
      //-----------------------------------
      // Intersection, union, etc.
      //-----------------------------------
      /**
       * Returns a new HashArray that contains the intersection between this (A) and the hasharray passed in (B). Returns A ^ B.
       */
      intersection: function(other) {
        var self = this;
        if (!other || !other.isHashArray)
          throw Error("Cannot HashArray.intersection() on a non-hasharray object. You passed in: ", other);
        var ret = this.clone(null, true), allItems = this.clone(null, true).addAll(this.all.concat(other.all));
        allItems.all.forEach(function(item) {
          if (self.collides(item) && other.collides(item))
            ret.add(item);
        });
        return ret;
      },
      /**
       * Returns a new HashArray that contains the complement (difference) between this hash array (A) and the hasharray passed in (B). Returns A - B.
       */
      complement: function(other) {
        var self = this;
        if (!other || !other.isHashArray)
          throw Error("Cannot HashArray.complement() on a non-hasharray object. You passed in: ", other);
        var ret = this.clone(null, true);
        this.all.forEach(function(item) {
          if (!other.collides(item))
            ret.add(item);
        });
        return ret;
      },
      //-----------------------------------
      // Retrieval
      //-----------------------------------
      get: function(key) {
        if (!this.has(key))
          return;
        return !(this._map[key] instanceof Array) || this._map[key].length != 1 ? this._map[key] : this._map[key][0];
      },
      getAll: function(keys) {
        keys = keys instanceof Array ? keys : [keys];
        if (keys[0] == "*")
          return this.all;
        var res = new HashArray(this.keyFields);
        for (var key in keys)
          res.add.apply(res, this.getAsArray(keys[key]));
        return res.all;
      },
      getAsArray: function(key) {
        return this._map[key] || [];
      },
      getUniqueRandomIntegers: function(count, min, max) {
        var res = [], map = {};
        count = Math.min(Math.max(max - min, 1), count);
        while (res.length < count) {
          var r = Math.floor(min + Math.random() * (max + 1));
          if (map[r])
            continue;
          map[r] = true;
          res.push(r);
        }
        return res;
      },
      sample: function(count, keys) {
        var image = this.all, ixs = {}, res = [];
        if (keys)
          image = this.getAll(keys);
        var rand = this.getUniqueRandomIntegers(count, 0, image.length - 1);
        for (var i = 0; i < rand.length; i++)
          res.push(image[rand[i]]);
        return res;
      },
      //-----------------------------------
      // Peeking
      //-----------------------------------
      has: function(key) {
        return this._map.hasOwnProperty(key);
      },
      collides: function(item) {
        for (var k in this.keyFields)
          if (this.has(this.objectAt(item, this.keyFields[k])))
            return true;
        return false;
      },
      hasMultiple: function(key) {
        return this._map[key] instanceof Array;
      },
      //-----------------------------------
      // Removal
      //-----------------------------------
      removeByKey: function() {
        var removed = [];
        for (var i = 0; i < arguments.length; i++) {
          var key = arguments[i];
          var items = this._map[key].concat();
          if (items) {
            removed = removed.concat(items);
            for (var j in items) {
              var item = items[j];
              for (var ix in this.keyFields) {
                var key2 = this.objectAt(item, this.keyFields[ix]);
                if (key2 && this.has(key2)) {
                  var ix = this._map[key2].indexOf(item);
                  if (ix != -1) {
                    this._map[key2].splice(ix, 1);
                  }
                  if (this._map[key2].length == 0)
                    delete this._map[key2];
                }
              }
              this._list.splice(this._list.indexOf(item), 1);
            }
          }
          delete this._map[key];
        }
        if (this.callback) {
          this.callback("removeByKey", removed);
        }
        return this;
      },
      remove: function() {
        for (var i = 0; i < arguments.length; i++) {
          var item = arguments[i];
          for (var ix in this.keyFields) {
            var key = this.objectAt(item, this.keyFields[ix]);
            if (key) {
              var ix = this._map[key].indexOf(item);
              if (ix != -1)
                this._map[key].splice(ix, 1);
              else
                throw new Error("HashArray: attempting to remove an object that was never added!" + key);
              if (this._map[key].length == 0)
                delete this._map[key];
            }
          }
          var ix = this._list.indexOf(item);
          if (ix != -1)
            this._list.splice(ix, 1);
          else
            throw new Error("HashArray: attempting to remove an object that was never added!" + key);
        }
        if (this.callback) {
          this.callback("remove", arguments);
        }
        return this;
      },
      removeAll: function() {
        var old = this._list.concat();
        this._map = {};
        this._list = [];
        if (this.callback) {
          this.callback("remove", old);
        }
        return this;
      },
      //-----------------------------------
      // Utility
      //-----------------------------------
      objectAt: function(obj, path) {
        if (typeof path === "string") {
          return obj[path];
        }
        var dup = path.concat();
        while (dup.length && obj) {
          obj = obj[dup.shift()];
        }
        return obj;
      },
      //-----------------------------------
      // Iteration
      //-----------------------------------
      forEach: function(keys, callback) {
        keys = keys instanceof Array ? keys : [keys];
        var objs = this.getAll(keys);
        objs.forEach(callback);
        return this;
      },
      forEachDeep: function(keys, key, callback) {
        keys = keys instanceof Array ? keys : [keys];
        var self = this, objs = this.getAll(keys);
        objs.forEach(function(item) {
          callback(self.objectAt(item, key), item);
        });
        return this;
      },
      //-----------------------------------
      // Cloning
      //-----------------------------------
      clone: function(callback, ignoreItems) {
        var n = new HashArray(this.keyFields.concat(), callback ? callback : this.callback);
        if (!ignoreItems)
          n.add.apply(n, this.all.concat());
        return n;
      },
      //-----------------------------------
      // Mathematical
      //-----------------------------------
      sum: function(keys, key, weightKey) {
        var self = this, ret = 0;
        this.forEachDeep(keys, key, function(value, item) {
          if (weightKey !== void 0)
            value *= self.objectAt(item, weightKey);
          ret += value;
        });
        return ret;
      },
      average: function(keys, key, weightKey) {
        var ret = 0, tot = 0, weightsTotal = 0, self = this;
        if (weightKey !== void 0)
          this.forEachDeep(keys, weightKey, function(value) {
            weightsTotal += value;
          });
        this.forEachDeep(keys, key, function(value, item) {
          if (weightKey !== void 0)
            value *= self.objectAt(item, weightKey) / weightsTotal;
          ret += value;
          tot++;
        });
        return weightKey !== void 0 ? ret : ret / tot;
      },
      //-----------------------------------
      // Filtering
      //-----------------------------------
      filter: function(keys, callbackOrKey) {
        var self = this;
        var callback = typeof callbackOrKey == "function" ? callbackOrKey : defaultCallback;
        var ha = new HashArray(this.keyFields);
        ha.addAll(this.getAll(keys).filter(callback));
        return ha;
        function defaultCallback(item) {
          var val = self.objectAt(item, callbackOrKey);
          return val !== void 0 && val !== false;
        }
      }
    });
    Object.defineProperty(HashArray.prototype, "all", {
      get: function() {
        return this._list;
      }
    });
    Object.defineProperty(HashArray.prototype, "map", {
      get: function() {
        return this._map;
      }
    });
    module.exports = HashArray;
    if (typeof window !== "undefined")
      window.HashArray = HashArray;
  }
});

// node_modules/hasharray/index.js
var require_hasharray = __commonJS({
  "node_modules/hasharray/index.js"(exports, module) {
    module.exports = require_HashArray();
  }
});

// node_modules/trie-search/src/TrieSearch.js
var require_TrieSearch = __commonJS({
  "node_modules/trie-search/src/TrieSearch.js"(exports, module) {
    var HashArray = require_hasharray();
    var MAX_CACHE_SIZE = 64;
    var IS_WHITESPACE = /^[\s]*$/;
    var DEFAULT_INTERNATIONALIZE_EXPAND_REGEXES = [
      {
        regex: /[åäàáâãæ]/ig,
        alternate: "a"
      },
      {
        regex: /[èéêë]/ig,
        alternate: "e"
      },
      {
        regex: /[ìíîï]/ig,
        alternate: "i"
      },
      {
        regex: /[òóôõö]/ig,
        alternate: "o"
      },
      {
        regex: /[ùúûü]/ig,
        alternate: "u"
      },
      {
        regex: /[æ]/ig,
        alternate: "ae"
      }
    ];
    String.prototype.replaceCharAt = function(index, replacement) {
      return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    };
    var TrieSearch = function(keyFields, options) {
      this.options = options || {};
      this.options.ignoreCase = this.options.ignoreCase === void 0 ? true : this.options.ignoreCase;
      this.options.maxCacheSize = this.options.maxCacheSize || MAX_CACHE_SIZE;
      this.options.cache = this.options.hasOwnProperty("cache") ? this.options.cache : true;
      this.options.splitOnRegEx = this.options.hasOwnProperty("splitOnRegEx") ? this.options.splitOnRegEx : /\s/g;
      this.options.splitOnGetRegEx = this.options.hasOwnProperty("splitOnGetRegEx") ? this.options.splitOnGetRegEx : this.options.splitOnRegEx;
      this.options.min = this.options.min || 1;
      this.options.keepAll = this.options.hasOwnProperty("keepAll") ? this.options.keepAll : false;
      this.options.keepAllKey = this.options.hasOwnProperty("keepAllKey") ? this.options.keepAllKey : "id";
      this.options.idFieldOrFunction = this.options.hasOwnProperty("idFieldOrFunction") ? this.options.idFieldOrFunction : void 0;
      this.options.expandRegexes = this.options.expandRegexes || DEFAULT_INTERNATIONALIZE_EXPAND_REGEXES;
      this.options.insertFullUnsplitKey = this.options.hasOwnProperty("insertFullUnsplitKey") ? this.options.insertFullUnsplitKey : false;
      this.keyFields = keyFields ? keyFields instanceof Array ? keyFields : [keyFields] : [];
      this.root = {};
      this.size = 0;
      if (this.options.cache) {
        this.getCache = new HashArray("key");
      }
    };
    function deepLookup(obj, keys) {
      return keys.length === 1 ? obj[keys[0]] : deepLookup(obj[keys[0]], keys.slice(1, keys.length));
    }
    TrieSearch.prototype = {
      add: function(obj, customKeys) {
        if (this.options.cache)
          this.clearCache();
        if (typeof customKeys === "number") {
          customKeys = void 0;
        }
        var keyFields = customKeys || this.keyFields;
        for (var k in keyFields) {
          var key = keyFields[k], isKeyArr = key instanceof Array, val = isKeyArr ? deepLookup(obj, key) : obj[key];
          if (!val)
            continue;
          val = val.toString();
          var expandedValues = this.expandString(val);
          for (var v = 0; v < expandedValues.length; v++) {
            var expandedValue = expandedValues[v];
            this.map(expandedValue, obj);
          }
        }
      },
      /**
       * By default using the options.expandRegexes, given a string like 'ö är bra', this will expand it to:
       *
       * ['ö är bra', 'o är bra', 'ö ar bra', 'o ar bra']
       *
       * By default this was built to allow for internationalization, but it could be also be expanded to
       * allow for word alternates, etc. like spelling alternates ('teh' and 'the').
       *
       * This is used for insertion! This should not be used for lookup since if a person explicitly types
       * 'ä' they probably do not want to see all results for 'a'.
       *
       * @param value The string to find alternates for.
       * @returns {Array} Always returns an array even if no matches.
       */
      expandString: function(value) {
        var values = [value];
        if (this.options.expandRegexes && this.options.expandRegexes.length) {
          for (var i = 0; i < this.options.expandRegexes.length; i++) {
            var er = this.options.expandRegexes[i];
            var match;
            while ((match = er.regex.exec(value)) !== null) {
              var alternateValue = value.replaceCharAt(match.index, er.alternate);
              values.push(alternateValue);
            }
          }
        }
        return values;
      },
      addAll: function(arr, customKeys) {
        for (var i = 0; i < arr.length; i++)
          this.add(arr[i], customKeys);
      },
      reset: function() {
        this.root = {};
        this.size = 0;
      },
      clearCache: function() {
        this.getCache = new HashArray("key");
      },
      cleanCache: function() {
        while (this.getCache.all.length > this.options.maxCacheSize)
          this.getCache.remove(this.getCache.all[0]);
      },
      addFromObject: function(obj, valueField) {
        if (this.options.cache)
          this.clearCache();
        valueField = valueField || "value";
        if (this.keyFields.indexOf("_key_") == -1)
          this.keyFields.push("_key_");
        for (var key in obj) {
          var o = { _key_: key };
          o[valueField] = obj[key];
          this.add(o);
        }
      },
      map: function(key, value) {
        if (this.options.splitOnRegEx && this.options.splitOnRegEx.test(key)) {
          var phrases = key.split(this.options.splitOnRegEx);
          var emptySplitMatch = phrases.filter(function(p) {
            return IS_WHITESPACE.test(p);
          });
          var selfMatch = phrases.filter(function(p) {
            return p === key;
          });
          var selfIsOnlyMatch = selfMatch.length + emptySplitMatch.length === phrases.length;
          if (!selfIsOnlyMatch) {
            for (var i = 0, l = phrases.length; i < l; i++) {
              if (!IS_WHITESPACE.test(phrases[i])) {
                this.map(phrases[i], value);
              }
            }
            if (!this.options.insertFullUnsplitKey) {
              return;
            }
          }
        }
        if (this.options.cache)
          this.clearCache();
        if (this.options.keepAll) {
          this.indexed = this.indexed || new HashArray([this.options.keepAllKey]);
          this.indexed.add(value);
        }
        if (this.options.ignoreCase) {
          key = key.toLowerCase();
        }
        var keyArr = this.keyToArr(key), self = this;
        insert(keyArr, value, this.root);
        function insert(keyArr2, value2, node) {
          if (keyArr2.length == 0) {
            node["value"] = node["value"] || [];
            node["value"].push(value2);
            return;
          }
          var k = keyArr2.shift();
          if (!node[k])
            self.size++;
          node[k] = node[k] || {};
          insert(keyArr2, value2, node[k]);
        }
      },
      keyToArr: function(key) {
        var keyArr;
        if (this.options.min && this.options.min > 1) {
          if (key.length < this.options.min)
            return [];
          keyArr = [key.substr(0, this.options.min)];
          keyArr = keyArr.concat(key.substr(this.options.min).split(""));
        } else
          keyArr = key.split("");
        return keyArr;
      },
      findNode: function(key) {
        return f(this.keyToArr(key), this.root);
        function f(keyArr, node) {
          if (!node)
            return void 0;
          if (keyArr.length == 0)
            return node;
          var k = keyArr.shift();
          return f(keyArr, node[k]);
        }
      },
      _getCacheKey: function(phrase, limit) {
        var cacheKey = phrase;
        if (limit) {
          cacheKey = phrase + "_" + limit;
        }
        return cacheKey;
      },
      _get: function(phrase, limit) {
        phrase = this.options.ignoreCase ? phrase.toLowerCase() : phrase;
        var c, node;
        if (this.options.cache && (c = this.getCache.get(this._getCacheKey(phrase, limit))))
          return c.value;
        var ret = void 0, haKeyFields = this.options.indexField ? [this.options.indexField] : this.keyFields, words = this.options.splitOnGetRegEx ? phrase.split(this.options.splitOnGetRegEx) : [phrase];
        for (var w = 0, l = words.length; w < l; w++) {
          if (this.options.min && words[w].length < this.options.min)
            continue;
          var temp = new HashArray(haKeyFields);
          if (node = this.findNode(words[w]))
            aggregate(node, temp);
          ret = ret ? ret.intersection(temp) : temp;
        }
        var v = ret ? ret.all : [];
        if (this.options.cache) {
          var cacheKey = this._getCacheKey(phrase, limit);
          this.getCache.add({ key: cacheKey, value: v });
          this.cleanCache();
        }
        return v;
        function aggregate(node2, ha) {
          if (limit && ha.all.length === limit) {
            return;
          }
          if (node2.value && node2.value.length) {
            if (!limit || ha.all.length + node2.value.length < limit) {
              ha.addAll(node2.value);
            } else {
              ha.addAll(node2.value.slice(0, limit - ha.all.length));
              return;
            }
          }
          for (var k in node2) {
            if (limit && ha.all.length === limit) {
              return;
            }
            if (k != "value") {
              aggregate(node2[k], ha);
            }
          }
        }
      },
      get: function(phrases, reducer, limit) {
        var haKeyFields = this.options.indexField ? [this.options.indexField] : this.keyFields, ret = void 0, accumulator = void 0;
        if (reducer && !this.options.idFieldOrFunction) {
          throw new Error("To use the accumulator, you must specify and idFieldOrFunction");
        }
        phrases = phrases instanceof Array ? phrases : [phrases];
        for (var i = 0, l = phrases.length; i < l; i++) {
          var matches = this._get(phrases[i], limit);
          if (reducer) {
            accumulator = reducer(accumulator, phrases[i], matches, this);
          } else {
            ret = ret ? ret.addAll(matches) : new HashArray(haKeyFields).addAll(matches);
          }
        }
        return !reducer ? ret.all : accumulator;
      },
      search: function(phrases, reducer, limit) {
        return this.get(phrases, reducer, limit);
      },
      getId: function(item) {
        return typeof this.options.idFieldOrFunction === "function" ? this.options.idFieldOrFunction(item) : item[this.options.idFieldOrFunction];
      }
    };
    TrieSearch.UNION_REDUCER = function(accumulator, phrase, matches, trie) {
      if (accumulator === void 0) {
        return matches;
      }
      var map = {}, i, id;
      var maxLength = Math.max(accumulator.length, matches.length);
      var results = [];
      var l = 0;
      for (i = 0; i < maxLength; i++) {
        if (i < accumulator.length) {
          id = trie.getId(accumulator[i]);
          map[id] = map[id] ? map[id] : 0;
          map[id]++;
          if (map[id] === 2) {
            results[l++] = accumulator[i];
          }
        }
        if (i < matches.length) {
          id = trie.getId(matches[i]);
          map[id] = map[id] ? map[id] : 0;
          map[id]++;
          if (map[id] === 2) {
            results[l++] = matches[i];
          }
        }
      }
      return results;
    };
    module.exports = TrieSearch;
    module.exports.default = TrieSearch;
  }
});

// node_modules/trie-search/index.js
var require_trie_search = __commonJS({
  "node_modules/trie-search/index.js"(exports, module) {
    module.exports = require_TrieSearch();
  }
});

// node_modules/countrycitystatejson/index.js
var require_countrycitystatejson = __commonJS({
  "node_modules/countrycitystatejson/index.js"(exports, module) {
    var db = require_compiledCities();
    var TrieSearch = require_trie_search();
    var trie = new TrieSearch(
      [],
      {
        min: 2,
        splitOnRegEx: false
      }
    );
    for (let countryName in db) {
      for (let state in db[countryName].states) {
        for (let idx in db[countryName].states[state]) {
          const toSave = {
            city: db[countryName].states[state][idx],
            state,
            country: db[countryName]
          };
          const key = db[countryName].states[state][idx].name;
          trie.map(key, toSave);
        }
      }
    }
    var compCities = {
      getAll: () => {
        return db;
      },
      getCountriesShort: () => {
        let res = [];
        for (var key in db) {
          res.push(key);
        }
        return res;
      },
      getCountryByShort: (shortName) => {
        if (typeof db[shortName] !== "undefined") {
          return db[shortName];
        } else {
          return null;
        }
      },
      getCountryInfoByShort: (shortName) => {
        if (typeof db[shortName] !== "undefined") {
          let res = {};
          for (var key in db[shortName]) {
            if (key !== "states") {
              res[key] = db[shortName][key];
            }
          }
          return res;
        } else {
          return null;
        }
      },
      getStatesByShort: (shortName) => {
        if (typeof db[shortName] !== "undefined") {
          let res = [];
          if (typeof db[shortName].states !== "undefined") {
            res = Object.keys(db[shortName].states);
            return res;
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
      getCities: (shortName, state) => {
        if (typeof db[shortName] !== "undefined") {
          if (typeof db[shortName].states != "undefined") {
            let res = [];
            for (let idx in db[shortName].states[state]) {
              res.push(db[shortName].states[state][idx].name);
            }
            return res;
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
      getCountries: () => {
        let res = [];
        for (var shortName in db) {
          let obj = {};
          for (var key in db[shortName]) {
            if (key !== "states") {
              obj.shortName = shortName;
              obj[key] = db[shortName][key];
            }
          }
          res.push(obj);
        }
        return res;
      },
      getCitiesByName: (name) => {
        const res = trie.search(name);
        return res;
      }
    };
    module.exports = compCities;
  }
});
export default require_countrycitystatejson();
//# sourceMappingURL=countrycitystatejson.js.map