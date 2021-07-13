(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_backend_auth_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var simple_vue_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-vue-validator */ "./node_modules/simple-vue-validator/src/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Validator = simple_vue_validator__WEBPACK_IMPORTED_MODULE_0__.Validator;
vue__WEBPACK_IMPORTED_MODULE_1__.default.use(simple_vue_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Login",
  data: function data() {
    return {
      info: false,
      loading: false,
      message: '',
      data: {},
      errors: {}
    };
  },
  methods: {
    loginSubmit: function loginSubmit() {
      var _this = this;

      this.$validate().then(function (res) {
        if (res) {
          _this.loading = true;
          axios.post('/login', _this.data).then(function (res) {
            setTimeout(function () {
              _this.loading = false;
            }, 1000);

            if (res.status === 200) {
              _this.message = 'Login Success!';
              _this.info = true;
              setTimeout(function () {
                _this.$router.push({
                  name: 'dashboard'
                });
              }, 2000);
            }
          })["catch"](function (error) {
            if (error) {
              _this.message = 'Creadential not match';
              _this.info = true;
            }
          });
        }
      });
    }
  },
  validators: {
    'data.email': function dataEmail() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required('Email is required!').email();
    },
    'data.password': function dataPassword() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required('Password is required!').minLength(6);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/auth/Login.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/auth/Login.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-loader {\n    -webkit-animation: loader 1s infinite;\n            animation: loader 1s infinite;\n    display: flex;\n}\n@-webkit-keyframes loader {\nfrom {\n        transform: rotate(0);\n}\nto {\n        transform: rotate(360deg);\n}\n}\n@keyframes loader {\nfrom {\n        transform: rotate(0);\n}\nto {\n        transform: rotate(360deg);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.0.5
 */

(function (global, factory) {
     true ? module.exports = factory() :
    0;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = undefined;
    var vertx = __webpack_require__(/*! vertx */ "?3c4a");
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof __webpack_require__.g !== 'undefined') {
        local = __webpack_require__.g;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));
//# sourceMappingURL=es6-promise.map

/***/ }),

/***/ "./node_modules/simple-vue-validator/node_modules/deep-equal/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/simple-vue-validator/node_modules/deep-equal/index.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(/*! ./lib/keys.js */ "./node_modules/simple-vue-validator/node_modules/deep-equal/lib/keys.js");
var isArguments = __webpack_require__(/*! ./lib/is_arguments.js */ "./node_modules/simple-vue-validator/node_modules/deep-equal/lib/is_arguments.js");

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),

/***/ "./node_modules/simple-vue-validator/node_modules/deep-equal/lib/is_arguments.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/simple-vue-validator/node_modules/deep-equal/lib/is_arguments.js ***!
  \***************************************************************************************/
/***/ ((module, exports) => {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),

/***/ "./node_modules/simple-vue-validator/node_modules/deep-equal/lib/keys.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/simple-vue-validator/node_modules/deep-equal/lib/keys.js ***!
  \*******************************************************************************/
/***/ ((module, exports) => {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),

/***/ "./node_modules/simple-vue-validator/src/index.js":
/*!********************************************************!*\
  !*** ./node_modules/simple-vue-validator/src/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ValidationBag = __webpack_require__(/*! ./validation-bag */ "./node_modules/simple-vue-validator/src/validation-bag.js");
var Rule = __webpack_require__(/*! ./rule */ "./node_modules/simple-vue-validator/src/rule.js");
var Validator = __webpack_require__(/*! ./validator */ "./node_modules/simple-vue-validator/src/validator.js");
var mixin = __webpack_require__(/*! ./mixin */ "./node_modules/simple-vue-validator/src/mixin.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/simple-vue-validator/src/utils.js");

/* plugin install
 ----------------------------------- */

function install(Vue, options) {
  Vue.mixin(mixin);
  if (options && options.templates) {
    extendTemplates(options.templates);
  }
  if (options && options.mode) {
    setMode(options.mode);
  }
  if (options && options.Promise) {
    mixin.Promise = options.Promise;
  }
}

function extendTemplates(newTemplates) {
  Object.keys(newTemplates).forEach(function (key) {
    utils.templates[key] = newTemplates[key];
  });
}

function setMode(mode) {
  if (mode !== 'interactive' && mode !== 'conservative' && mode !== 'manual') {
    throw new Error('Invalid mode: ' + mode);
  }
  utils.mode = mode;
}

/* exports
 ----------------------------------- */

module.exports.name = 'SimpleVueValidator';
module.exports.ValidationBag = ValidationBag;
module.exports.Rule = Rule;
module.exports.Validator = Validator;
module.exports.mixin = mixin;
module.exports.install = install;
module.exports.extendTemplates = extendTemplates;
module.exports.setMode = setMode;


/***/ }),

/***/ "./node_modules/simple-vue-validator/src/mixin.js":
/*!********************************************************!*\
  !*** ./node_modules/simple-vue-validator/src/mixin.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/simple-vue-validator/src/utils.js");
var ValidationBag = __webpack_require__(/*! ./validation-bag */ "./node_modules/simple-vue-validator/src/validation-bag.js");

var mixin = {

  Promise: null,

  beforeMount: function () {
    this.$setValidators(this.$options.validators);

    if (this.validation) {
      // set vm to validation
      this.validation._setVM(this);
    }
  },

  beforeDestroy: function () {
    unwatch(this.$options.validatorsUnwatchCallbacks);
  },

  data: function () {
    if (this.$options.validators) {
      return {
        validation: new ValidationBag()
      };
    }
    return {};
  },

  methods: {
    $setValidators: function (validators) {
      unwatch(this.$options.validatorsUnwatchCallbacks);
      // validate methods contains all application validate codes
      var validateMethods = {};
      this.$options.validateMethods = validateMethods;
      var unwatchCallbacks = [];
      this.$options.validatorsUnwatchCallbacks = unwatchCallbacks;
      // generate validate methods and watch properties change for validators
      if (validators) {
        Object.keys(validators).forEach(function (key) {
          var properties = key.split(',');
          properties = properties.map(function (property) {
            return property.trim();
          });
          var getters = properties.map(function (property) {
            return generateGetter(this, property);
          }, this);
          var validator = validators[key];
          var options = {};
          if (!utils.isFunction(validator)) {
            options = utils.omit(validator, 'validator');
            validator = validator.validator;
          }
          if (options.cache) {
            // cache the validation result, so that async validator can be fast when submitting the form
            var option = options.cache === 'last' ? 'last' : 'all';
            validator = cache(validator, option);
          }
          var validation = this.validation;
          var validateMethod = function () {
            if (utils.mode === 'conservative' && !validation.activated) { // do nothing if in conservative mode and $validate() method is not called before
              return getPromise().resolve(false);
            }
            var args = getters.map(function (getter) {
              return getter();
            });
            var rule = validator.apply(this, args);
            if (rule) {
              if (!rule._field) {
                // field defaults to the first property
                rule.field(properties[0]);
              }
              return this.validation.checkRule(rule);
            } else {
              return getPromise().resolve(false);
            }
          }.bind(this);

          // add to validate method list
          validateMethods[properties[0]] = validateMethod;

          // watch change and invoke validate method
          var validateMethodForWatch = validateMethod;
          if (options.debounce) {
            // TODO what if custom field name is used?
            var decoratedValidateMethod = function () {
              if (decoratedValidateMethod.sessionId !== this.validation.sessionId) {
                // skip validation if it's reset before
                return getPromise().resolve(false);
              }
              return validateMethod.apply(this, arguments);
            }.bind(this);
            var debouncedValidateMethod = utils.debounce(decoratedValidateMethod, parseInt(options.debounce));
            var field = properties[0];
            validateMethodForWatch = function () {
              // eagerly resetting passed flag if debouncing is used.
              this.validation.resetPassed(field);
              // store sessionId
              decoratedValidateMethod.sessionId = this.validation.sessionId;
              debouncedValidateMethod.apply(this, arguments);
            }.bind(this);
          }
          if (utils.mode !== 'manual') { // have to call $validate() to trigger validation in manual mode, so don't watch,
            watchProperties(this, properties, validateMethodForWatch).forEach(function (unwatch) {
              unwatchCallbacks.push(unwatch);
            });
          }
        }, this);
      }
    },
    $validate: function (fields) {
      if (this.validation._validate) {
        return this.validation._validate;
      }
      this.validation.activated = true;
      var validateMethods = this.$options.validateMethods;
      if (utils.isUndefined(fields)) {
        validateMethods = Object.keys(validateMethods).map(function (key) {
          return validateMethods[key];
        });
      } else {
        fields = utils.isArray(fields) ? fields : [fields];
        validateMethods = fields.map(function (field) {
          return validateMethods[field];
        });
      }
      if (utils.isEmpty(validateMethods)) {
        return getPromise().resolve(true);
      } else {
        var always = function() {
          this.validation._validate = null;
        }.bind(this);
        this.validation._validate = getPromise()
          .all(validateMethods.map(function (validateMethod) {
            return validateMethod();
          }))
          .then(function (results) {
            always();
            return results.filter(function (result) {
                return !!result;
              }).length <= 0;
          }.bind(this))
          .catch(function(e) {
            always();
            throw e;
          });
        return this.validation._validate;
      }
    }
  }
};

function unwatch(list) {
  if (list) {
    list.forEach(function (unwatch) {
      unwatch();
    });
  }
}

function generateGetter(vm, property) {
  var names = property.split('.');
  return function () {
    var value = vm;
    for (var i = 0; i < names.length; i++) {
      if (utils.isNull(value) || utils.isUndefined(value)) {
        break;
      }
      value = value[names[i]];
    }
    return value;
  };
}

function watchProperties(vm, properties, callback) {
  return properties.map(function (property) {
    return vm.$watch(property, function () {
      vm.validation.setTouched(property);
      callback.call();
    });
  });
}

function cache(validator, option) {
  return function () {
    var cache = validator.cache;
    if (!cache) {
      cache = [];
      validator.cache = cache;
    }
    var args = Array.prototype.slice.call(arguments);
    var cachedResult = findInCache(cache, args);
    if (!utils.isUndefined(cachedResult)) {
      return cachedResult;
    }
    var result = validator.apply(this, args);
    if (!utils.isUndefined(result)) {
      if (result.then) {
        return result.tab(function (promiseResult) {
          if (!utils.isUndefined(promiseResult)) {
            if (option !== 'all') {
              cache.splice(0, cache.length);
            }
            cache.push({args: args, result: promiseResult});
          }
        });
      } else {
        if (option !== 'all') {
          cache.splice(0, cache.length);
        }
        cache.push({args: args, result: result});
        return result;
      }
    }
  };
}

function getPromise() {
  if (mixin.Promise) {
    return mixin.Promise;
  }
  return __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").Promise;
}

function findInCache(cache, args) {
  var items = cache.filter(function (item) {
    return utils.isEqual(args, item.args);
  });
  if (!utils.isEmpty(items)) {
    return items[0].result;
  }
}

module.exports = mixin;


/***/ }),

/***/ "./node_modules/simple-vue-validator/src/rule.js":
/*!*******************************************************!*\
  !*** ./node_modules/simple-vue-validator/src/rule.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/simple-vue-validator/src/utils.js");

function Rule(templates) {
  this._field  = '';
  this._value = undefined;
  this._messages = [];
  if (templates) {
    // merge given template and utils.template
    this.templates = {};
    Object.keys(utils.templates).forEach(function (key) {
      this.templates[key] = utils.templates[key];
    }.bind(this));
    Object.keys(templates).forEach(function (key) {
      this.templates[key] = templates[key];
    }.bind(this));
  } else {
    this.templates = utils.templates;
  }
}

Rule.prototype.field = function (field) {
  this._field  = field;
  return this;
};

Rule.prototype.value = function (value) {
  this._value = value;
  return this;
};

Rule.prototype.custom = function (callback, context) {
  var message = context ? callback.call(context) : callback();
  if (message) {
    if (message.then) {
      var that = this;
      message = Promise.resolve(message)
        .then(function (result) {
          return result;
        })
        .catch(function (e) {
          console.error(e.toString());
          return that.templates.error;
        });
    }
    this._messages.push(message);
  }
  return this;
};

Rule.prototype._checkValue = function() {
  if (this._value === undefined) {
    throw new Error('Validator.value not set');
  }
  return this._value;
};

Rule.prototype.required = function (message) {
  var value = this._checkValue();
  if (utils.isEmpty(value)) {
    this._messages.push(message || this.templates.required);
  }
  return this;
};

Rule.prototype.float = function (message) {
    var value = this._checkValue();
    var regex = /^([-+])?([0-9]+(\.[0-9]+)?|Infinity)$/;
    if (!utils.isEmpty(value) && !regex.test(value)) {
        this._messages.push(message || this.templates.float);
    }
    return this;
};

Rule.prototype.integer = function (message) {
    var value = this._checkValue();
    var regex = /^([-+])?([0-9]+|Infinity)$/;
    if (!utils.isEmpty(value) && !regex.test(value)) {
        this._messages.push(message || this.templates.integer);
    }
    return this;
};

Rule.prototype.lessThan = function (bound, message) {
  var value = this._checkValue();
  if (!utils.isEmpty(value)) {
    var number = parseFloat(value);
    if (utils.isNaN(number)) {
      this._messages.push(message || this.templates.number);
    } else if (number >= bound) {
      this._messages.push(message || utils.format(this.templates.lessThan, bound));
    }
  }
  return this;
};

Rule.prototype.lessThanOrEqualTo = function (bound, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value)) {
        var number = parseFloat(value);
        if (utils.isNaN(number)) {
            this._messages.push(message || this.templates.number);
        } else if (number > bound) {
            this._messages.push(message || utils.format(this.templates.lessThanOrEqualTo, bound));
        }
    }
    return this;
};

Rule.prototype.greaterThan = function (bound, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value)) {
        var number = parseFloat(value);
        if (utils.isNaN(number)) {
            this._messages.push(message || this.templates.number);
        } else if (number <= bound) {
            this._messages.push(message || utils.format(this.templates.greaterThan, bound));
        }
    }
    return this;
};

Rule.prototype.greaterThanOrEqualTo = function (bound, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value)) {
        var number = parseFloat(value);
        if (utils.isNaN(number)) {
            this._messages.push(message || this.templates.number);
        } else if (number < bound) {
            this._messages.push(message || utils.format(this.templates.greaterThanOrEqualTo, bound));
        }
    }
    return this;
};

Rule.prototype.between = function (lowBound, highBound, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value)) {
        var number = parseFloat(value);
        if (utils.isNaN(number)) {
            this._messages.push(message || this.templates.number);
        } else if (number < lowBound || number > highBound) {
            this._messages.push(message || utils.format(this.templates.between, lowBound, highBound));
        }
    }
    return this;
};

Rule.prototype.size = function (size, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value) && utils.isArray(value) && value.length !== size) {
        this._messages.push(message || utils.format(this.templates.size, size));
    }
    return this;
};

Rule.prototype.length = function (length, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value) && String(value).length !== length) {
        this._messages.push(message || utils.format(this.templates.length, length));
    }
    return this;
};

Rule.prototype.minLength = function (length, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value) && String(value).length < length) {
        this._messages.push(message || utils.format(this.templates.minLength, length));
    }
    return this;
};

Rule.prototype.maxLength = function (length, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value) && String(value).length > length) {
        this._messages.push(message || utils.format(this.templates.maxLength, length));

    }
    return this;
};

Rule.prototype.lengthBetween = function (minLength, maxLength, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value)) {
        var string = String(value);
        if (string.length < minLength || string.length > maxLength) {
            this._messages.push(message || utils.format(this.templates.lengthBetween, minLength, maxLength));
        }
    }
    return this;
};

Rule.prototype.in = function (options, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value) && options.indexOf(value) < 0) {
        this._messages.push(message || utils.format(this.templates.in, this.templates.optionCombiner(options)));
    }
    return this;
};

Rule.prototype.notIn = function (options, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value) && options.indexOf(value) >= 0) {
        this._messages.push(message || utils.format(this.templates.notIn, this.templates.optionCombiner(options)));
    }
    return this;
};

Rule.prototype.match = function (valueToCompare, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value) && value !== valueToCompare) {
        this._messages.push(message || this.templates.match);
    }
    return this;
};

Rule.prototype.regex = function (regex, message) {
    var value = this._checkValue();
    if (!utils.isEmpty(value)) {
        if (utils.isString(regex)) {
            regex = new RegExp(regex);
        }
        if (!regex.test(value)) {
            this._messages.push(message || this.templates.regex);
        }
    }
    return this;
};

Rule.prototype.digit = function (message) {
    return this.regex(/^\d*$/, message || this.templates.digit);
};

Rule.prototype.email = function (message) {
    return this.regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message || this.templates.email);
};

Rule.prototype.url = function (message) {
    return this.regex(/(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/, message || this.templates.url);
};

Rule.prototype.hasImmediateError = function () {
  for (var i = 0; i < this._messages.length; i++) {
    if (this._messages[i] && !this._messages[i].then) {
      return true;
    }
  }
  return false;
};

module.exports = Rule;



/***/ }),

/***/ "./node_modules/simple-vue-validator/src/templates.js":
/*!************************************************************!*\
  !*** ./node_modules/simple-vue-validator/src/templates.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
  error: 'Error.',
  required: 'Required.',
  float: 'Must be a number.',
  integer: 'Must be an integer.',
  number: 'Must be a number.',
  lessThan: 'Must be less than {0}.',
  lessThanOrEqualTo: 'Must be less than or equal to {0}.',
  greaterThan: 'Must be greater than {0}.',
  greaterThanOrEqualTo: 'Must greater than or equal to {0}.',
  between: 'Must be between {0} and {1}.',
  size: 'Size must be {0}.',
  length: 'Length must be {0}.',
  minLength: 'Must have at least {0} characters.',
  maxLength: 'Must have up to {0} characters.',
  lengthBetween: 'Length must between {0} and {1}.',
  in: 'Must be {0}.',
  notIn: 'Must not be {0}.',
  match: 'Not matched.',
  regex: 'Invalid format.',
  digit: 'Must be a digit.',
  email: 'Invalid email.',
  url: 'Invalid url.',
  optionCombiner: function (options) {
    if (options.length > 2) {
      options = [options.slice(0, options.length - 1).join(', '), options[options.length - 1]];
    }
    return options.join(' or ');
  }
};


/***/ }),

/***/ "./node_modules/simple-vue-validator/src/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/simple-vue-validator/src/utils.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deepEqual = __webpack_require__(/*! deep-equal */ "./node_modules/simple-vue-validator/node_modules/deep-equal/index.js");

// This implementation of debounce was taken from the blog of David Walsh.
// See here: https://davidwalsh.name/javascript-debounce-function
module.exports.debounce = function (func, wait, immediate) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

module.exports.format = function (template) {
  var args = Array.prototype.slice.call(arguments, 1);
  return template.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
};

module.exports.isArray = function (arg) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(arg);
  }

  return Object.prototype.toString.call(arg) === '[object Array]';
};

module.exports.isEmpty = function (value) {
  if (module.exports.isArray(value)) {
    return !value.length;
  } else if (value === undefined || value === null) {
    return true;
  } else {
    return !String(value).trim().length;
  }
};

module.exports.isEqual = function (o1, o2) {
  return deepEqual(o1, o2);
};

module.exports.isFunction = function (arg) {
  return typeof arg === 'function';
};

module.exports.isNaN = function (arg) {
  return /^\s*$/.test(arg) || isNaN(arg);
};

module.exports.isNull = function (arg) {
  return arg === null;
};

module.exports.isString = function (arg) {
  return typeof arg === 'string' || arg instanceof String;
};

module.exports.isUndefined = function (arg) {
  return typeof arg === 'undefined';
};

module.exports.omit = function omit(obj, key) {
  var result = {};

  for (var name in obj) {
    if (name !== key) {
      result[name] = obj[name];
    }
  }

  return result;
};

module.exports.templates = __webpack_require__(/*! ./templates */ "./node_modules/simple-vue-validator/src/templates.js");

module.exports.mode = 'interactive'; // other values: conservative and manual



/***/ }),

/***/ "./node_modules/simple-vue-validator/src/validation-bag.js":
/*!*****************************************************************!*\
  !*** ./node_modules/simple-vue-validator/src/validation-bag.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Promise = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").Promise;

var utils = __webpack_require__(/*! ./utils */ "./node_modules/simple-vue-validator/src/utils.js");

function ValidationBag() {
  this.sessionId = 0; // async validator will check this before adding error
  this.resetting = 0; // do not allow to add error while reset is in progress
  this.errors = [];
  this.validatingRecords = [];
  this.passedRecords = [];
  this.touchedRecords = [];
  this.activated = false; // set when $validate() is call, this flag works with the conservative mode
}

ValidationBag.prototype._setVM = function(vm) {
  this._vm = vm;
};

ValidationBag.prototype.addError = function (field, message) {
  if (this.resetting) {
    return;
  }
  this.errors.push({field: field, message: message});
};

ValidationBag.prototype.removeErrors = function (field) {
  if (utils.isUndefined(field)) {
    this.errors = [];
  } else {
    this.errors = this.errors.filter(function (e) {
      return e.field !== field;
    });
  }
};

ValidationBag.prototype.hasError = function (field) {
  return utils.isUndefined(field) ? !!this.errors.length : !!this.firstError(field);
};

ValidationBag.prototype.firstError = function (field) {
  for (var i = 0; i < this.errors.length; i++) {
    if (utils.isUndefined(field) || this.errors[i].field === field) {
      return this.errors[i].message;
    }
  }
  return null;
};

ValidationBag.prototype.allErrors = function (field) {
  return this.errors
    .filter(function (e) {
      return utils.isUndefined(field) || e.field === field;
    })
    .map(function (e) {
      return e.message;
    });
};

ValidationBag.prototype.countErrors = function (field) {
  return utils.isUndefined(field) ? this.errors.length : this.errors.filter(function (e) {
    return field === e.field;
  }).length;
};

ValidationBag.prototype.setValidating = function (field, id) {
  if (this.resetting) {
    return;
  }
  id = id || ValidationBag.newValidatingId();
  var existingValidatingRecords = this.validatingRecords.filter(function (validating) {
    return validating.field === field && validating.id === id;
  });
  if (!utils.isEmpty(existingValidatingRecords)) {
    throw new Error('Validating id already set: ' + id);
  }
  this.validatingRecords.push({field: field, id: id});
  return id;
};

ValidationBag.prototype.resetValidating = function (field, id) {
  if (!field) {
    this.validatingRecords = [];
    return;
  }

  function idMatched(validating) {
    return utils.isUndefined(id) ? true : (validating.id === id);
  }

  var hasMore = true;
  while (hasMore) {
    var index = -1;
    for (var i = 0; i < this.validatingRecords.length; i++) {
      if (this.validatingRecords[i].field === field && idMatched(this.validatingRecords[i])) {
        index = i;
        break;
      }
    }
    if (index >= 0) {
      this.validatingRecords.splice(index, 1);
    } else {
      hasMore = false;
    }
  }
};

ValidationBag.prototype.isValidating = function (field, id) {
  function idMatched(validating) {
    return utils.isUndefined(id) ? true : (validating.id === id);
  }

  var existingValidatingRecords = this.validatingRecords.filter(function (validating) {
    return (utils.isUndefined(field) || validating.field === field) && idMatched(validating);
  });
  return !utils.isEmpty(existingValidatingRecords);
};

ValidationBag.prototype.setPassed = function (field) {
  if (this.resetting) {
    return;
  }
  setValue(this.passedRecords, field);
};

ValidationBag.prototype.resetPassed = function (field) {
  resetValue(this.passedRecords, field);
};

ValidationBag.prototype.isPassed = function (field) {
  return isValueSet(this.passedRecords, field);
};

ValidationBag.prototype.setTouched = function (field) {
  if (this.resetting) {
    return;
  }
  setValue(this.touchedRecords, field);
};

ValidationBag.prototype.resetTouched = function (field) {
  resetValue(this.touchedRecords, field);
};

ValidationBag.prototype.isTouched = function (field) {
  return isValueSet(this.touchedRecords, field);
};

function setValue(records, field) {
  var existingRecords = records.filter(function (record) {
    return record.field === field;
  });
  if (!utils.isEmpty(existingRecords)) {
    existingRecords[0].value = true;
  } else {
    records.push({field: field, value: true});
  }
}

function resetValue(records, field) {
  if (!field) {
    records.splice(0, records.length);
    return;
  }
  var existingRecords = records.filter(function (record) {
    return record.field === field;
  });
  if (!utils.isEmpty(existingRecords)) {
    existingRecords[0].value = false;
  }
}

function isValueSet(records, field) {
  var existingRecords = records.filter(function (record) {
    return record.field === field;
  });
  return !utils.isEmpty(existingRecords) && existingRecords[0].value;
}

ValidationBag.prototype.reset = function () {
  this.sessionId++;
  this.errors = [];
  this.validatingRecords = [];
  this.passedRecords = [];
  this.touchedRecords = [];
  if (this._vm) {
    // prevent field updates at the same tick to change validation status
    this.resetting++;
    this._vm.$nextTick(function() {
      this.resetting--;
    }.bind(this));
  }
  this.activated = false;
};

// returns true if any error is added
ValidationBag.prototype.setError = function (field, message) {
  if (this.resetting) {
    return;
  }
  this.removeErrors(field);
  this.resetPassed(field);

  var messages = utils.isArray(message) ? message : [message];
  var addMessages = function (messages) {
    var hasError = false;
    messages.forEach(function (message) {
      if (message) {
        this.addError(field, message);
        hasError = true;
      }
    }, this);
    if (!hasError) {
      this.setPassed(field);
    }
    return hasError;
  }.bind(this);

  var hasPromise = messages.filter(function (message) {
      return message && message.then;
    }).length > 0;
  if (!hasPromise) {
    return Promise.resolve(addMessages(messages));
  } else {
    // if message is promise, we are encountering async validation, set validating flag and wait for message to resolve
    // reset previous validating status for this field
    this.resetValidating(field);
    var validatingId = this.setValidating(field);
    var always = function() {
      //console.log(validatingId + ' | ' + 'end');
      this.resetValidating(field, validatingId);
    }.bind(this);
    //console.log(validatingId + ' | ' + 'start');
    return Promise.all(messages)
      .then(function (messages) {
        // check if the validating id is is still valid
        if (this.isValidating(field, validatingId)) {
          //console.log(validatingId + ' | ' + 'processed');
          return addMessages(messages);
        }
        return false;
      }.bind(this))
      .then(function(result) {
        always();
        return result;
      })
      .catch(function (e) {
        always();
        return Promise.reject(e);
      }.bind(this));
  }
};

ValidationBag.prototype.checkRule = function (rule) {
  if (this.resetting) {
    return;
  }
  return this.setError(rule._field, rule._messages);
};

var validatingId = 0;

ValidationBag.newValidatingId = function () {
  return (++validatingId).toString();
};

module.exports = ValidationBag;


/***/ }),

/***/ "./node_modules/simple-vue-validator/src/validator.js":
/*!************************************************************!*\
  !*** ./node_modules/simple-vue-validator/src/validator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/simple-vue-validator/src/utils.js");
var Rule = __webpack_require__(/*! ./rule */ "./node_modules/simple-vue-validator/src/rule.js");

var Validator = newValidator();

Validator.create = function(options) {
  return newValidator(options);
};

function newValidator(options) {
  options = options || {};
  var validator = {};

  // clone methods from Rule to validator
  Object.keys(Rule.prototype).forEach(function (methodName) {
    validator[methodName] = function () {
      var rule = new Rule(options.templates);
      return rule[methodName].apply(rule, arguments);
    };
  });

  validator.isEmpty = utils.isEmpty;

  validator.format = utils.format;

  return validator;
}

module.exports = Validator;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/auth/Login.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/auth/Login.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/auth/Login.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/backend/auth/Login.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/backend/auth/Login.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_0b7d8188___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=0b7d8188& */ "./resources/js/views/backend/auth/Login.vue?vue&type=template&id=0b7d8188&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/backend/auth/Login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_0b7d8188___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_0b7d8188___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/auth/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/auth/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/backend/auth/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/backend/auth/Login.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/backend/auth/Login.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/auth/Login.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/backend/auth/Login.vue?vue&type=template&id=0b7d8188&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/backend/auth/Login.vue?vue&type=template&id=0b7d8188& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0b7d8188___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0b7d8188___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0b7d8188___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=0b7d8188& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/auth/Login.vue?vue&type=template&id=0b7d8188&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/auth/Login.vue?vue&type=template&id=0b7d8188&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/auth/Login.vue?vue&type=template&id=0b7d8188& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-col",
        { staticClass: "mx-auto", attrs: { cols: "12", md: "5" } },
        [
          _c(
            "v-card",
            { staticClass: "pa-3", staticStyle: { "margin-top": "8em" } },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.loginSubmit.apply(null, arguments)
                    }
                  }
                },
                [
                  _c(
                    "v-card-title",
                    {
                      staticClass:
                        "text-h6 font-weight-regular justify-space-between"
                    },
                    [_c("span", [_vm._v("Login your account")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-text-field", {
                        attrs: { label: "Email", type: "email" },
                        model: {
                          value: _vm.data.email,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "email", $$v)
                          },
                          expression: "data.email"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "message red--text" }, [
                        _vm._v(_vm._s(_vm.validation.firstError("data.email")))
                      ]),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: { label: "Password", type: "password" },
                        model: {
                          value: _vm.data.password,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "password", $$v)
                          },
                          expression: "data.password"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "message red--text" }, [
                        _vm._v(
                          _vm._s(_vm.validation.firstError("data.password"))
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            type: "submit",
                            loading: _vm.loading,
                            disabled: _vm.loading,
                            color: "error"
                          },
                          on: {
                            click: function($event) {
                              _vm.loader = "loading"
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "loader",
                              fn: function() {
                                return [
                                  _c(
                                    "span",
                                    { staticClass: "custom-loader" },
                                    [
                                      _c("v-icon", { attrs: { light: "" } }, [
                                        _vm._v("mdi-cached")
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(
                            "\n                        Login\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("router-link", { attrs: { to: { name: "signup" } } }, [
                        _vm._v("Create an account")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          scopedSlots: _vm._u([
            {
              key: "action",
              fn: function(ref) {
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._b(
                      {
                        attrs: { color: "pink", text: "" },
                        on: {
                          click: function($event) {
                            _vm.info = false
                          }
                        }
                      },
                      "v-btn",
                      attrs,
                      false
                    ),
                    [_vm._v("\n                Close\n            ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.info,
            callback: function($$v) {
              _vm.info = $$v
            },
            expression: "info"
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.message) + "\n\n        ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "?3c4a":
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);