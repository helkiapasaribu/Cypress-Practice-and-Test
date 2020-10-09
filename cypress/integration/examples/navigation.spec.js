(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("/Users/helkia.pasaribu/Library/Caches/Cypress/3.8.2/Cypress.app/Contents/Resources/app/packages/server/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("/Users/helkia.pasaribu/Library/Caches/Cypress/3.8.2/Cypress.app/Contents/Resources/app/packages/server/node_modules/@babel/runtime/helpers/typeof"));

/// <reference types="Cypress" />
context('Navigation', function () {
  beforeEach(function () {
    cy.visit('https://example.cypress.io');
    cy.get('.navbar-nav').contains('Commands').click();
    cy.get('.dropdown-menu').contains('Navigation').click();
  });
  it('cy.go() - go back or forward in the browser\'s history', function () {
    // https://on.cypress.io/go
    cy.location('pathname').should('include', 'navigation');
    cy.go('back');
    cy.location('pathname').should('not.include', 'navigation');
    cy.go('forward');
    cy.location('pathname').should('include', 'navigation'); // clicking back

    cy.go(-1);
    cy.location('pathname').should('not.include', 'navigation'); // clicking forward

    cy.go(1);
    cy.location('pathname').should('include', 'navigation');
  });
  it('cy.reload() - reload the page', function () {
    // https://on.cypress.io/reload
    cy.reload(); // reload the page without using the cache

    cy.reload(true);
  });
  it('cy.visit() - visit a remote url', function () {
    // https://on.cypress.io/visit
    // Visit any sub-domain of your current domain
    // Pass options to the visit
    cy.visit('https://example.cypress.io/commands/navigation', {
      timeout: 50000,
      // increase total time for the visit to resolve
      onBeforeLoad: function onBeforeLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect((0, _typeof2.default)(contentWindow) === 'object').to.be.true;
      },
      onLoad: function onLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect((0, _typeof2.default)(contentWindow) === 'object').to.be.true;
      }
    });
  });
});

},{"/Users/helkia.pasaribu/Library/Caches/Cypress/3.8.2/Cypress.app/Contents/Resources/app/packages/server/node_modules/@babel/runtime/helpers/interopRequireDefault":2,"/Users/helkia.pasaribu/Library/Caches/Cypress/3.8.2/Cypress.app/Contents/Resources/app/packages/server/node_modules/@babel/runtime/helpers/typeof":3}],2:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;
},{}],3:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}]},{},[1]);
