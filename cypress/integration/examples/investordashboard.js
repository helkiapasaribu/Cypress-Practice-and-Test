/*(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";*/

//require("cypress-file-upload");

//var path = require('path');

//const path = require('path')
describe("Login Akun", function () {
  it("Login ke Investor dashboard", function () {
    cy.on('uncaught:exception', function (err, runnable) {
      return false;
    });
    var datalogin = {
      "username": "moneyfriend-ardi@yopmail.com",
      "Password": "testing"
    };
    var otp = {
      "otp": "930823 "
    };
    cy.wait(1000);
    cy.visit('https://mvp.uangteman.com/lender/login');
    cy.get('input[id="username"]').click().type(datalogin.username);
    cy.get('input[id="Password"]').type(datalogin.Password);
    cy.get('button').contains("Sign in").click({
      force: true
    });
    cy.get(datalogin);
    cy.on('uncaught:exception', function (err, runnable) {
      return false;
    }); //AVAILABLE LOAN

    /*cy.get('.css-1jazjbw').click({force:true})
    cy.get('#root > div.css-1pf0tsu > div.css-gnm95i > table > tbody > tr:nth-child(3) > td:nth-child(1) > div > div > div.css-1axjumr').should("contain","P0ID200305000008").click({})
     //cy.get(':nth-child(1) > :nth-child(1) > .css-oflxif > .css-1o1z075 > .css-1axjumr').should("contain","P0ID200303000010").click({})
     cy.wait(2000)
     cy.get('.css-1o1z075 > .css-1dbr7i3 > .css-1jazjbw').click()
     cy.wait(2000)
     cy.get('button').contains("Ready To Fund (1)").click({force:true}) */
    //LOAN PROCESS

    cy.get('[href="/lender/loan-process"] > .css-1hp1qqi > .css-1xxe9l9').contains("Loan Process").click();
    cy.wait(3000);
    cy.get('#root > div.css-1pf0tsu > div.css-gnm95i > table > tbody > tr:nth-child(1) > td:nth-child(1) > div.css-oflxif > div > div').should("contain", "P0ID200108000010").click({});
    cy.get('document.querySelector("#root > div.css-1pf0tsu > div.css-gnm95i > table > tbody > tr:nth-child(1) > td:nth-child(1) > div.css-oflxif > div > label > span")').click({
      force: true
    });
    cy.get('.css-1jazjbw').click({
      multiple: true
    });
    cy.wait(2000);
    /* cy.get('.css-1r4s1ig').click().clear().type('2{enter}')
     cy.get('.css-1axjumr').contains("P0ID200303000011").click()
     cy.get('.css-1o1z075 > .css-1dbr7i3 > .css-1jazjbw').click()
     cy.wait(2000)
     cy.get('.css-1epi2e9').contains("Sign My Status (1)").click()
     cy.wait(20000)
     cy.get('.css-8jf62r').contains("Submit").click()
     cy.get('.css-1i6cgrz').contains("OK").click()
     cy.wait(2000)
     cy.get('button').contains('Fund (1)').click() */

    /*
    //FUNDING
    cy.get('.css-1hp1qqi').contains("Funding").click()
    cy.wait(2000)
    cy.get('b').contains("TIID200303000008").click({force:true})
    cy.wait(3000)
    /* cy.get('.css-60je32').contains('permata').click({force:true})
    cy.wait(2000)
    cy.get('button').contains('Funding').click() */

    /* cy.get('.css-1h893u0').contains("Upload Proof").click()
     cy.wait(2000)
     cy.get('.css-tj57q').contains('File').click()
            const fileName='oke.jpg';
     cy.fixture('oke.jpg').then(fileContent =>{
       cy.get('input[type=file]').upload({fileContent, fileName, mimeType: 'image/jpg'})
     }) 
     cy.wait(2000)
     cy.get('button').contains('Confirm').click() 
     cy.get('.css-1ad7bzz').click({force:true}) 
     cy.get('button').contains("Sign Agreement").click()
     cy.wait(20000)
     cy.get('.css-8jf62r').contains("Submit").click()
     cy.get('.css-1i6cgrz').contains("OK").click() */
    //Agreement

    /*cy.get('.css-1xxe9l9').contains("Agreement").click()
    cy.get('.css-1r4s1ig').click().clear().type('14{enter}') */
  });
});

},{"cypress-file-upload":4,"path":2}],2:[function(require,module,exports){
(function (process){
// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
var e,t,n=Object.freeze({INPUT:"input",DRAG_N_DROP:"drag-n-drop"}),r=Object.freeze({DOM:"dom",SHADOW:"shadow"}),o=Object.freeze({JSON:"json",JS:"js",COFFEE:"coffee",HTML:"html",TXT:"txt",CSV:"csv",PNG:"png",JPG:"jpg",JPEG:"jpeg",GIF:"gif",TIF:"tif",TIFF:"tiff",ZIP:"zip",PDF:"pdf",VCF:"vcf"}),i=Object.freeze({ASCII:"ascii",BASE64:"base64",BINARY:"binary",HEX:"hex",LATIN1:"latin1",UTF8:"utf8",UTF_8:"utf-8",UCS2:"ucs2",UCS_2:"ucs-2",UTF16LE:"utf16le",UTF_16LE:"utf-16le"}),s={};s[n.INPUT]=((e={})[r.DOM]=function(e,t){var n=e.window,r=e.subject,o=e.force,i=t.files,s=new n.DataTransfer;return i.forEach(function(e){return s.items.add(e)}),r[0].files=s.files,function(e){if(e.force)return!0;var t=e.window.navigator.userAgent.match(/(chrome\/)(\d+)/i);return!!t&&Number.parseInt(t[2],10)>=73}({window:n,force:o})?cy.wrap(r).trigger("change",{force:!0}):null},e[r.SHADOW]=function(e,t){var n=e.window,r=e.subject,o=t.files,i=new n.DataTransfer;return o.forEach(function(e){return i.items.add(e)}),r[0].files=i.files,r[0].dispatchEvent(new n.CustomEvent("change"))},e),s[n.DRAG_N_DROP]=((t={})[r.DOM]=function(e,t){var n=e.subject,r=e.force,o=e.events,i=t.files,s=new e.window.DataTransfer;i.forEach(function(e){s.items.add(e)});var a={force:r,dataTransfer:s},u=cy.wrap(n,{log:!1});return o.forEach(function(e){u.trigger(e,a)}),u},t[r.SHADOW]=function(e,t){var n=e.window,r=e.subject,o=t.files,i=new n.DataTransfer;return o.forEach(function(e){return i.items.add(e)}),r[0].dispatchEvent(new n.CustomEvent("change",{detail:{files:i.files}}))},t);var a,u,c={message:"passed subject element is not valid",tip:'If "subjectType" is "input", subject should be a valid HTML <input /> element'},f={message:'"subjectType" is not valid',tip:'Please look into docs to find supported "subjectType" values'},l={message:'"subjectNature" is not valid',tip:'Please look into docs to find supported "subjectNature" values'},p={message:'"force" is not valid',tip:'Please look into docs to find supported "force" values'},d={message:'"allowEmpty" is not valid',tip:'Please look into docs to find supported "allowEmpty" values'},v={message:"One or more field is invalid within given file(s)",tip:'Please look into docs to find supported "fileOrArray" values'},m={message:'"encoding" is not valid',tip:'Please look into docs to find supported "encoding" values'},b={message:'"events" is not valid',tip:'Please look into docs to find supported "events" values'},T=function(e){function t(n){for(var r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];e.apply(this,r),e.captureStackTrace&&e.captureStackTrace(this,t),this.name="[cypress-file-upload error]",this.message=n.message+".\n"+n.tip}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t}(Error),y=/input|button/i,w={};w[n.INPUT]=((a={})[r.DOM]=function(e){return y.test(e.tagName)},a[r.SHADOW]=function(){return!0},a),w[n.DRAG_N_DROP]=((u={})[r.DOM]=function(){return!0},u[r.SHADOW]=function(){return!0},u);var j={subjectType:"input",subjectNature:"dom",force:!1,allowEmpty:!1,events:["dragenter","drop","dragleave"]};Cypress.Commands.add("upload",{prevSubject:!0},function(e,t,a){return cy.window({log:!1}).then(function(u){try{var y=(void 0===(F=a)&&(F={}),void 0===(A=j)&&(A={}),Object.assign({},A,F)),g=y.subjectType,h=y.subjectNature,E=y.force,O=y.allowEmpty,P=y.events;return function(e){var t=e.subjectType,o=e.subjectNature,i=e.force,s=e.allowEmpty,a=e.events;if(-1===Object.values(n).indexOf(t))throw new T(f);if(-1===Object.values(r).indexOf(o))throw new T(l);if("boolean"!=typeof i)throw new T(p);if("boolean"!=typeof s)throw new T(d);if(!Array.isArray(a)||!a.every(function(e){return"string"==typeof e}))throw new T(b)}({subjectType:g,subjectNature:h,force:E,allowEmpty:O,events:P}),function(e){var t=e.subject;if(!t||!t[0]||!w[e.subjectType][e.subjectNature](t[0]))throw new T(c)}({subject:e,subjectNature:h,subjectType:g}),function(e,t){(Array.isArray(e)?e:[e]).forEach(function(e){var n=e.fileContent;if(!(t?!n:n)||!e.fileName||!e.mimeType)throw new T(v)})}(t,O),Promise.resolve(function(e){var t=e.validator,n=e.constructor;return Cypress.Promise.all(e.files.map(function(e){var r=e.fileContent,s=e.fileName,a=e.mimeType,u=e.encoding;void 0===u&&(u=function(e){var t={};return t[o.JSON]=i.UTF8,t[o.JS]=i.UTF8,t[o.COFFEE]=i.UTF8,t[o.HTML]=i.UTF8,t[o.TXT]=i.UTF8,t[o.CSV]=i.UTF8,t[o.PNG]=i.BASE64,t[o.JPG]=i.BASE64,t[o.JPEG]=i.BASE64,t[o.GIF]=i.BASE64,t[o.TIF]=i.BASE64,t[o.TIFF]=i.BASE64,t[o.ZIP]=i.BASE64,t[o.PDF]=i.UTF8,t[o.VCF]=i.UTF8,t[e.slice(e.lastIndexOf(".")+1)]}(s));try{return t({fileContent:r,fileName:s,mimeType:a,encoding:u}),Promise.resolve(function(e){var t=e.fileContent,n=e.mimeType,r=e.encoding,o={};return o[i.ASCII]=function(){return Promise.resolve(t)},o[i.UTF8]=function(){return Promise.resolve(t)},o[i.UTF_8]=function(){return Promise.resolve(t)},o[i.BASE64]=function(){return Cypress.Blob.base64StringToBlob(t,n)},o.default=function(){return Cypress.Blob.base64StringToBlob(t,n)},(o[r]||o.default)()}({fileContent:r,mimeType:a,encoding:u})).then(function(e){return n([e],s,{type:a})})}catch(e){return Promise.reject(e)}}))}({files:Array.isArray(t)?t:[t],validator:function(e){return function(e){if(!e||-1===Object.values(i).indexOf(e))throw new T(m)}(e.encoding)},constructor:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(u.File,[null].concat(e)))}})).then(function(t){var n;Cypress.log({name:"upload",displayName:"UPLOAD",message:t.map(function(e){return e.name}).join(", "),consoleProps:function(){return{subjectType:g,subjectNature:h,files:t,force:E,allowEmpty:O,events:P}}}),(0,s[(n={subjectType:g,subjectNature:h}).subjectType][n.subjectNature])({window:u,subject:e,force:E,events:P},{files:t})})}catch(e){return Promise.reject(e)}var F,A})});


},{}]},{},[1]);
