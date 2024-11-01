/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/escape-html/build-module/escape-greater.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/escape-html/build-module/escape-greater.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ __unstableEscapeGreaterThan)
/* harmony export */ });
/**
 * Returns a string with greater-than sign replaced.
 *
 * Note that if a resolution for Trac#45387 comes to fruition, it is no longer
 * necessary for `__unstableEscapeGreaterThan` to exist.
 *
 * See: https://core.trac.wordpress.org/ticket/45387
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */
function __unstableEscapeGreaterThan(value) {
  return value.replace(/>/g, '&gt;');
}

/***/ }),

/***/ "./node_modules/@wordpress/escape-html/build-module/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/escape-html/build-module/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeAmpersand: () => (/* binding */ escapeAmpersand),
/* harmony export */   escapeAttribute: () => (/* binding */ escapeAttribute),
/* harmony export */   escapeEditableHTML: () => (/* binding */ escapeEditableHTML),
/* harmony export */   escapeHTML: () => (/* binding */ escapeHTML),
/* harmony export */   escapeLessThan: () => (/* binding */ escapeLessThan),
/* harmony export */   escapeQuotationMark: () => (/* binding */ escapeQuotationMark),
/* harmony export */   isValidAttributeName: () => (/* binding */ isValidAttributeName)
/* harmony export */ });
/* harmony import */ var _escape_greater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-greater */ "./node_modules/@wordpress/escape-html/build-module/escape-greater.js");
/**
 * Internal dependencies
 */


/**
 * Regular expression matching invalid attribute names.
 *
 * "Attribute names must consist of one or more characters other than controls,
 * U+0020 SPACE, U+0022 ("), U+0027 ('), U+003E (>), U+002F (/), U+003D (=),
 * and noncharacters."
 *
 * @see https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
 *
 * @type {RegExp}
 */
const REGEXP_INVALID_ATTRIBUTE_NAME = /[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/;

/**
 * Returns a string with ampersands escaped. Note that this is an imperfect
 * implementation, where only ampersands which do not appear as a pattern of
 * named, decimal, or hexadecimal character references are escaped. Invalid
 * named references (i.e. ambiguous ampersand) are still permitted.
 *
 * @see https://w3c.github.io/html/syntax.html#character-references
 * @see https://w3c.github.io/html/syntax.html#ambiguous-ampersand
 * @see https://w3c.github.io/html/syntax.html#named-character-references
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */
function escapeAmpersand(value) {
  return value.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi, '&amp;');
}

/**
 * Returns a string with quotation marks replaced.
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */
function escapeQuotationMark(value) {
  return value.replace(/"/g, '&quot;');
}

/**
 * Returns a string with less-than sign replaced.
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */
function escapeLessThan(value) {
  return value.replace(/</g, '&lt;');
}

/**
 * Returns an escaped attribute value.
 *
 * @see https://w3c.github.io/html/syntax.html#elements-attributes
 *
 * "[...] the text cannot contain an ambiguous ampersand [...] must not contain
 * any literal U+0022 QUOTATION MARK characters (")"
 *
 * Note we also escape the greater than symbol, as this is used by wptexturize to
 * split HTML strings. This is a WordPress specific fix
 *
 * Note that if a resolution for Trac#45387 comes to fruition, it is no longer
 * necessary for `__unstableEscapeGreaterThan` to be used.
 *
 * See: https://core.trac.wordpress.org/ticket/45387
 *
 * @param {string} value Attribute value.
 *
 * @return {string} Escaped attribute value.
 */
function escapeAttribute(value) {
  return (0,_escape_greater__WEBPACK_IMPORTED_MODULE_0__["default"])(escapeQuotationMark(escapeAmpersand(value)));
}

/**
 * Returns an escaped HTML element value.
 *
 * @see https://w3c.github.io/html/syntax.html#writing-html-documents-elements
 *
 * "the text must not contain the character U+003C LESS-THAN SIGN (<) or an
 * ambiguous ampersand."
 *
 * @param {string} value Element value.
 *
 * @return {string} Escaped HTML element value.
 */
function escapeHTML(value) {
  return escapeLessThan(escapeAmpersand(value));
}

/**
 * Returns an escaped Editable HTML element value. This is different from
 * `escapeHTML`, because for editable HTML, ALL ampersands must be escaped in
 * order to render the content correctly on the page.
 *
 * @param {string} value Element value.
 *
 * @return {string} Escaped HTML element value.
 */
function escapeEditableHTML(value) {
  return escapeLessThan(value.replace(/&/g, '&amp;'));
}

/**
 * Returns true if the given attribute name is valid, or false otherwise.
 *
 * @param {string} name Attribute name to test.
 *
 * @return {boolean} Whether attribute is valid.
 */
function isValidAttributeName(name) {
  return !REGEXP_INVALID_ATTRIBUTE_NAME.test(name);
}

/***/ }),

/***/ "./src/js/tournamatch.js":
/*!*******************************!*\
  !*** ./src/js/tournamatch.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trn: () => (/* binding */ trn)
/* harmony export */ });


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Tournamatch = /*#__PURE__*/function () {
  function Tournamatch() {
    _classCallCheck(this, Tournamatch);
    this.events = {};
  }
  return _createClass(Tournamatch, [{
    key: "param",
    value: function param(object, prefix) {
      var str = [];
      for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
          var k = prefix ? prefix + "[" + prop + "]" : prop;
          var v = object[prop];
          str.push(v !== null && _typeof(v) === "object" ? this.param(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
      }
      return str.join("&");
    }
  }, {
    key: "event",
    value: function event(eventName) {
      if (!(eventName in this.events)) {
        this.events[eventName] = new EventTarget(eventName);
      }
      return this.events[eventName];
    }
  }, {
    key: "autocomplete",
    value: function autocomplete(input, dataCallback) {
      new Tournamatch_Autocomplete(input, dataCallback);
    }
  }, {
    key: "ucfirst",
    value: function ucfirst(s) {
      if (typeof s !== 'string') return '';
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  }, {
    key: "ordinal_suffix",
    value: function ordinal_suffix(number) {
      var remainder = number % 100;
      if (remainder < 11 || remainder > 13) {
        switch (remainder % 10) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
        }
      }
      return 'th';
    }
  }, {
    key: "tabs",
    value: function tabs(element) {
      var tabs = element.getElementsByClassName('trn-nav-link');
      var panes = document.getElementsByClassName('trn-tab-pane');
      var clearActive = function clearActive() {
        Array.prototype.forEach.call(tabs, function (tab) {
          tab.classList.remove('trn-nav-active');
          tab.ariaSelected = false;
        });
        Array.prototype.forEach.call(panes, function (pane) {
          return pane.classList.remove('trn-tab-active');
        });
      };
      var setActive = function setActive(targetId) {
        var targetTab = document.querySelector('a[href="#' + targetId + '"].trn-nav-link');
        var targetPaneId = targetTab && targetTab.dataset && targetTab.dataset.target || false;
        if (targetPaneId) {
          clearActive();
          targetTab.classList.add('trn-nav-active');
          targetTab.ariaSelected = true;
          document.getElementById(targetPaneId).classList.add('trn-tab-active');
        }
      };
      var tabClick = function tabClick(event) {
        var targetTab = event.currentTarget;
        var targetPaneId = targetTab && targetTab.dataset && targetTab.dataset.target || false;
        if (targetPaneId) {
          setActive(targetPaneId);
          event.preventDefault();
        }
      };
      Array.prototype.forEach.call(tabs, function (tab) {
        tab.addEventListener('click', tabClick);
      });
      if (location.hash) {
        setActive(location.hash.substr(1));
      } else if (tabs.length > 0) {
        setActive(tabs[0].dataset.target);
      }
    }
  }]);
}(); //trn.initialize();
if (!window.trn_obj_instance) {
  window.trn_obj_instance = new Tournamatch();
  window.addEventListener('load', function () {
    var tabViews = document.getElementsByClassName('trn-nav');
    Array.from(tabViews).forEach(function (tab) {
      trn.tabs(tab);
    });
    var dropdowns = document.getElementsByClassName('trn-dropdown-toggle');
    var handleDropdownClose = function handleDropdownClose() {
      Array.from(dropdowns).forEach(function (dropdown) {
        dropdown.nextElementSibling.classList.remove('trn-show');
      });
      document.removeEventListener("click", handleDropdownClose, false);
    };
    Array.from(dropdowns).forEach(function (dropdown) {
      dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        this.nextElementSibling.classList.add('trn-show');
        document.addEventListener("click", handleDropdownClose, false);
      }, false);
    });
  }, false);
}
var trn = window.trn_obj_instance;
var Tournamatch_Autocomplete = /*#__PURE__*/function () {
  // currentFocus;
  //
  // nameInput;
  //
  // self;

  function Tournamatch_Autocomplete(input, dataCallback) {
    var _this = this;
    _classCallCheck(this, Tournamatch_Autocomplete);
    // this.self = this;
    this.nameInput = input;
    this.nameInput.addEventListener("input", function () {
      var a,
        b,
        i,
        val = _this.nameInput.value; //this.value;
      var parent = _this.nameInput.parentNode; //this.parentNode;

      // let p = new Promise((resolve, reject) => {
      //     /* need to query server for names here. */
      //     let xhr = new XMLHttpRequest();
      //     xhr.open('GET', options.api_url + 'players/?search=' + val + '&per_page=5');
      //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      //     xhr.setRequestHeader('X-WP-Nonce', options.rest_nonce);
      //     xhr.onload = function () {
      //         if (xhr.status === 200) {
      //             // resolve(JSON.parse(xhr.response).map((player) => {return { 'value': player.id, 'text': player.name };}));
      //             resolve(JSON.parse(xhr.response).map((player) => {return player.name;}));
      //         } else {
      //             reject();
      //         }
      //     };
      //     xhr.send();
      // });
      dataCallback(val).then(function (data) {
        //p.then((data) => {
        console.log(data);

        /*close any already open lists of auto-completed values*/
        _this.closeAllLists();
        if (!val) {
          return false;
        }
        _this.currentFocus = -1;

        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", _this.nameInput.id + "-auto-complete-list");
        a.setAttribute("class", "trn-auto-complete-items");

        /*append the DIV element as a child of the auto-complete container:*/
        parent.appendChild(a);

        /*for each item in the array...*/
        for (i = 0; i < data.length; i++) {
          var text = void 0,
            value = void 0;

          /* Which format did they give us. */
          if (_typeof(data[i]) === 'object') {
            text = data[i]['text'];
            value = data[i]['value'];
          } else {
            text = data[i];
            value = data[i];
          }

          /*check if the item starts with the same letters as the text field value:*/
          if (text.substr(0, val.length).toUpperCase() === val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + text.substr(0, val.length) + "</strong>";
            b.innerHTML += text.substr(val.length);

            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + value + "'>";
            b.dataset.value = value;
            b.dataset.text = text;

            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function (e) {
              console.log("item clicked with value ".concat(e.currentTarget.dataset.value));

              /* insert the value for the autocomplete text field: */
              _this.nameInput.value = e.currentTarget.dataset.text;
              _this.nameInput.dataset.selectedId = e.currentTarget.dataset.value;

              /* close the list of autocompleted values, (or any other open lists of autocompleted values:*/
              _this.closeAllLists();
              _this.nameInput.dispatchEvent(new Event('change'));
            });
            a.appendChild(b);
          }
        }
      });
    });

    /*execute a function presses a key on the keyboard:*/
    this.nameInput.addEventListener("keydown", function (e) {
      var x = document.getElementById(_this.nameInput.id + "-auto-complete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode === 40) {
        /*If the arrow DOWN key is pressed,
         increase the currentFocus variable:*/
        _this.currentFocus++;
        /*and and make the current item more visible:*/
        _this.addActive(x);
      } else if (e.keyCode === 38) {
        //up
        /*If the arrow UP key is pressed,
         decrease the currentFocus variable:*/
        _this.currentFocus--;
        /*and and make the current item more visible:*/
        _this.addActive(x);
      } else if (e.keyCode === 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (_this.currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[_this.currentFocus].click();
        }
      }
    });

    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
      _this.closeAllLists(e.target);
    });
  }
  return _createClass(Tournamatch_Autocomplete, [{
    key: "addActive",
    value: function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      this.removeActive(x);
      if (this.currentFocus >= x.length) this.currentFocus = 0;
      if (this.currentFocus < 0) this.currentFocus = x.length - 1;
      /*add class "autocomplete-active":*/
      x[this.currentFocus].classList.add("trn-auto-complete-active");
    }
  }, {
    key: "removeActive",
    value: function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("trn-auto-complete-active");
      }
    }
  }, {
    key: "closeAllLists",
    value: function closeAllLists(element) {
      console.log("close all lists");
      /*close all autocomplete lists in the document,
       except the one passed as an argument:*/
      var x = document.getElementsByClassName("trn-auto-complete-items");
      for (var i = 0; i < x.length; i++) {
        if (element !== x[i] && element !== this.nameInput) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
  }]);
}(); // First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] !== 'undefined' ? args[number] : match;
    });
  };
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************************!*\
  !*** ./src/js/admin/tournament-registration.js ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tournamatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../tournamatch.js */ "./src/js/tournamatch.js");
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/escape-html */ "./node_modules/@wordpress/escape-html/build-module/index.js");
/**
 * Admin manage tournament bulk registration page.
 *
 * @link       https://www.tournamatch.com
 * @since      3.17.0
 *
 * @package    Tournamatch
 *
 */


(function ($) {
  'use strict';

  window.addEventListener('load', function () {
    var options = trn_tournament_registration_options;

    // Initialize auto complete
    $.autocomplete(document.getElementById('competitor_id'), function (val) {
      return new Promise(function (resolve, reject) {
        /* need to query server for names here. */
        var xhr = new XMLHttpRequest();
        xhr.open('GET', options.api_url + 'players/?search=' + val + '&per_page=5');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('X-WP-Nonce', options.rest_nonce);
        xhr.onload = function () {
          if (xhr.status === 200) {
            // resolve(JSON.parse(xhr.response).map((player) => {return { 'value': player.id, 'text': player.name };}));
            resolve(JSON.parse(xhr.response).map(function (player) {
              return (0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_1__.escapeHTML)(player.name);
            }));
          } else {
            reject();
          }
        };
        xhr.send();
      });
    });

    // toggle new or select
    function toggleTeams() {
      var teamSelection = document.getElementById('new_or_existing');
      var selectedValue = teamSelection.options[teamSelection.selectedIndex].value;
      if (selectedValue === 'new') {
        document.getElementById('tag_row').style.display = 'table-row';
        document.getElementById('team_tag').required = true;
        document.getElementById('name_row').style.display = 'table-row';
        document.getElementById('team_name').required = true;
        document.getElementById('existing_row').style.display = 'none';
        document.getElementById('existing_team').required = false;
      } else {
        document.getElementById('tag_row').style.display = 'none';
        document.getElementById('team_tag').required = false;
        document.getElementById('name_row').style.display = 'none';
        document.getElementById('team_name').required = false;
        document.getElementById('existing_row').style.display = 'table-row';
        document.getElementById('existing_team').required = true;
      }
    }

    // new or existing drop down
    if (options.competition === 'teams') {
      var teamSelection = document.getElementById('new_or_existing');
      teamSelection.addEventListener('change', function (event) {
        event.preventDefault();
        toggleTeams();
      }, false);
      toggleTeams();
      document.getElementById('competitor_id').addEventListener('change', function (e) {
        var _this = this;
        console.log("value changed to ".concat(this.value));
        var p = new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', options.api_url + 'players/?search=' + _this.value);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.setRequestHeader('X-WP-Nonce', options.rest_nonce);
          xhr.onload = function () {
            console.log(xhr.response);
            if (xhr.status === 200) {
              var players = JSON.parse(xhr.response);
              if (players.length > 0) {
                resolve(players[0]['user_id']);
                document.getElementById('trn-tournament-register-response').innerHTML = "";
              } else {
                document.getElementById('trn-tournament-register-response').innerHTML = "<p class=\"notice notice-error\"><strong>".concat(options.language.failure, ":</strong> ").concat(options.language.no_competitor, "</p>");
              }
            } else {
              reject();
            }
          };
          xhr.send();
        });
        p.then(function (user_id) {
          getTeams(user_id);
        });
      }, false);
    }

    // get teams for single player
    function getTeams(user_id) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', options.api_url + "players/".concat(user_id, "/teams"));
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.setRequestHeader('X-WP-Nonce', options.rest_nonce);
      xhr.onload = function () {
        console.log(xhr);
        var content = "";
        if (xhr.status === 200) {
          var teams = JSON.parse(xhr.response);
          if (teams !== null && teams.length > 0) {
            for (var i = 0; i < teams.length; i++) {
              var team = teams[i];
              content += "<option value=\"".concat(team.team_id, "\">").concat((0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_1__.escapeHTML)(team.name), "</option>");
            }
          } else {
            content += "<option value=\"-1\">(".concat(options.language.zero_teams, ")</option>");
          }
        } else {
          content += "<option value=\"-1\">(".concat(options.language.zero_teams, ")</option>");
        }
        document.getElementById('existing_team').innerHTML = content;
      };
      xhr.send();
    }
    function registerCompetitor(competitionId, competitorId, competitorType) {
      console.log("registering ".concat(competitorType, " with id ").concat(competitorId, " to competition with id ").concat(competitionId));
      var xhr = new XMLHttpRequest();
      xhr.open('POST', options.api_url + 'tournament-registrations');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.setRequestHeader('X-WP-Nonce', options.rest_nonce);
      xhr.onload = function () {
        console.log(xhr);
        if (xhr.status === 201) {
          document.getElementById('trn-tournament-register-response').innerHTML = "<p class=\"notice notice-success\"><strong>".concat(options.language.success, ":</strong> ").concat(options.language.success_message, "</p>");
          document.getElementById('trn-tournament-register-form').reset();
        } else {
          document.getElementById('trn-tournament-register-response').innerHTML = "<p class=\"notice notice-error\"><strong>".concat(options.language.failure, ":</strong> ").concat((0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_1__.escapeHTML)(JSON.parse(xhr.response).message), "</p>");
        }
      };
      xhr.send($.param({
        tournament_id: competitionId,
        competitor_id: competitorId,
        competitor_type: competitorType
      }));
    }
    document.getElementById('trn-tournament-register-form').addEventListener('submit', function (event) {
      event.preventDefault();
      var p = new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', options.api_url + 'players/?search=' + document.getElementById('competitor_id').value);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('X-WP-Nonce', options.rest_nonce);
        xhr.onload = function () {
          console.log(xhr.response);
          if (xhr.status === 200) {
            var players = JSON.parse(xhr.response);
            if (players.length > 0) {
              resolve(players[0]['user_id']);
              document.getElementById('trn-tournament-register-response').innerHTML = "";
            } else {
              document.getElementById('trn-tournament-register-response').innerHTML = "<p class=\"notice notice-error\"><strong>".concat(options.language.failure, ":</strong> ").concat(options.language.no_competitor, "</p>");
            }
          } else {
            reject();
          }
        };
        xhr.send();
      });
      p.then(function (userId) {
        if (options.competition === 'teams') {
          var _teamSelection = document.getElementById('new_or_existing');
          if (_teamSelection.value === 'new') {
            var q = new Promise(function (resolve, reject) {
              var xhr = new XMLHttpRequest();
              xhr.open('POST', options.api_url + 'teams');
              xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
              xhr.setRequestHeader('X-WP-Nonce', options.rest_nonce);
              xhr.onload = function () {
                if (xhr.status === 200) {
                  resolve(JSON.parse(xhr.response).data.team_id);
                } else {
                  reject(xhr);
                }
              };
              xhr.send($.param({
                user_id: userId,
                name: document.getElementById('team_name').value,
                tag: document.getElementById('team_tag').value
              }));
            });
            q.then(function (teamId) {
              registerCompetitor(options.tournament_id, teamId, 'teams');
            });
          } else {
            registerCompetitor(options.tournament_id, document.getElementById('existing_team').value, 'teams');
          }
        } else {
          registerCompetitor(options.tournament_id, userId, 'players');
        }
      });
      console.log('submitted');
    }, false);
  }, false);
})(_tournamatch_js__WEBPACK_IMPORTED_MODULE_0__.trn);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBa0IsQ0FBQ3ZDLE9BQU8sQ0FBQytDLGFBQWEsRUFBRXJILFFBQVEsQ0FBQ2lCLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQzFGLEtBQUssRUFBRSxPQUFPLENBQUM7VUFDdEc7UUFDSixDQUFDLE1BQU07VUFDSHNMLGtCQUFrQixDQUFDdkMsT0FBTyxDQUFDK0MsYUFBYSxFQUFFRyxNQUFNLEVBQUUsU0FBUyxDQUFDO1FBQ2hFO01BQ0osQ0FBQyxDQUFDO01BRUY1RSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQyxFQUFFLEtBQUssQ0FBQztFQUViLENBQUMsRUFBRSxLQUFLLENBQUM7QUFDYixDQUFDLEVBQUVoQixnREFBRyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3VybmFtYXRjaC9Ad29yZHByZXNzL2VzY2FwZS1odG1sL3NyYy9lc2NhcGUtZ3JlYXRlci5qcyIsIndlYnBhY2s6Ly90b3VybmFtYXRjaC9Ad29yZHByZXNzL2VzY2FwZS1odG1sL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3VybmFtYXRjaC8uL3NyYy9qcy90b3VybmFtYXRjaC5qcyIsIndlYnBhY2s6Ly90b3VybmFtYXRjaC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3VybmFtYXRjaC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG91cm5hbWF0Y2gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3VybmFtYXRjaC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvdXJuYW1hdGNoLy4vc3JjL2pzL2FkbWluL3RvdXJuYW1lbnQtcmVnaXN0cmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB3aXRoIGdyZWF0ZXItdGhhbiBzaWduIHJlcGxhY2VkLlxuICpcbiAqIE5vdGUgdGhhdCBpZiBhIHJlc29sdXRpb24gZm9yIFRyYWMjNDUzODcgY29tZXMgdG8gZnJ1aXRpb24sIGl0IGlzIG5vIGxvbmdlclxuICogbmVjZXNzYXJ5IGZvciBgX191bnN0YWJsZUVzY2FwZUdyZWF0ZXJUaGFuYCB0byBleGlzdC5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vY29yZS50cmFjLndvcmRwcmVzcy5vcmcvdGlja2V0LzQ1Mzg3XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIE9yaWdpbmFsIHN0cmluZy5cbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEVzY2FwZWQgc3RyaW5nLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfX3Vuc3RhYmxlRXNjYXBlR3JlYXRlclRoYW4oIHZhbHVlICkge1xuXHRyZXR1cm4gdmFsdWUucmVwbGFjZSggLz4vZywgJyZndDsnICk7XG59XG4iLCIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgX191bnN0YWJsZUVzY2FwZUdyZWF0ZXJUaGFuIGZyb20gJy4vZXNjYXBlLWdyZWF0ZXInO1xuXG4vKipcbiAqIFJlZ3VsYXIgZXhwcmVzc2lvbiBtYXRjaGluZyBpbnZhbGlkIGF0dHJpYnV0ZSBuYW1lcy5cbiAqXG4gKiBcIkF0dHJpYnV0ZSBuYW1lcyBtdXN0IGNvbnNpc3Qgb2Ygb25lIG9yIG1vcmUgY2hhcmFjdGVycyBvdGhlciB0aGFuIGNvbnRyb2xzLFxuICogVSswMDIwIFNQQUNFLCBVKzAwMjIgKFwiKSwgVSswMDI3ICgnKSwgVSswMDNFICg+KSwgVSswMDJGICgvKSwgVSswMDNEICg9KSxcbiAqIGFuZCBub25jaGFyYWN0ZXJzLlwiXG4gKlxuICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbiAqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG5jb25zdCBSRUdFWFBfSU5WQUxJRF9BVFRSSUJVVEVfTkFNRSA9IC9bXFx1MDA3Ri1cXHUwMDlGIFwiJz4vPVwiXFx1RkREMC1cXHVGREVGXS87XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB3aXRoIGFtcGVyc2FuZHMgZXNjYXBlZC4gTm90ZSB0aGF0IHRoaXMgaXMgYW4gaW1wZXJmZWN0XG4gKiBpbXBsZW1lbnRhdGlvbiwgd2hlcmUgb25seSBhbXBlcnNhbmRzIHdoaWNoIGRvIG5vdCBhcHBlYXIgYXMgYSBwYXR0ZXJuIG9mXG4gKiBuYW1lZCwgZGVjaW1hbCwgb3IgaGV4YWRlY2ltYWwgY2hhcmFjdGVyIHJlZmVyZW5jZXMgYXJlIGVzY2FwZWQuIEludmFsaWRcbiAqIG5hbWVkIHJlZmVyZW5jZXMgKGkuZS4gYW1iaWd1b3VzIGFtcGVyc2FuZCkgYXJlIHN0aWxsIHBlcm1pdHRlZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9odG1sL3N5bnRheC5odG1sI2NoYXJhY3Rlci1yZWZlcmVuY2VzXG4gKiBAc2VlIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9odG1sL3N5bnRheC5odG1sI2FtYmlndW91cy1hbXBlcnNhbmRcbiAqIEBzZWUgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL2h0bWwvc3ludGF4Lmh0bWwjbmFtZWQtY2hhcmFjdGVyLXJlZmVyZW5jZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgT3JpZ2luYWwgc3RyaW5nLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVBbXBlcnNhbmQoIHZhbHVlICkge1xuXHRyZXR1cm4gdmFsdWUucmVwbGFjZSggLyYoPyEoW2EtejAtOV0rfCNbMC05XSt8I3hbYS1mMC05XSspOykvZ2ksICcmYW1wOycgKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHdpdGggcXVvdGF0aW9uIG1hcmtzIHJlcGxhY2VkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBPcmlnaW5hbCBzdHJpbmcuXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBFc2NhcGVkIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVF1b3RhdGlvbk1hcmsoIHZhbHVlICkge1xuXHRyZXR1cm4gdmFsdWUucmVwbGFjZSggL1wiL2csICcmcXVvdDsnICk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB3aXRoIGxlc3MtdGhhbiBzaWduIHJlcGxhY2VkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBPcmlnaW5hbCBzdHJpbmcuXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBFc2NhcGVkIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZUxlc3NUaGFuKCB2YWx1ZSApIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoIC88L2csICcmbHQ7JyApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXNjYXBlZCBhdHRyaWJ1dGUgdmFsdWUuXG4gKlxuICogQHNlZSBodHRwczovL3czYy5naXRodWIuaW8vaHRtbC9zeW50YXguaHRtbCNlbGVtZW50cy1hdHRyaWJ1dGVzXG4gKlxuICogXCJbLi4uXSB0aGUgdGV4dCBjYW5ub3QgY29udGFpbiBhbiBhbWJpZ3VvdXMgYW1wZXJzYW5kIFsuLi5dIG11c3Qgbm90IGNvbnRhaW5cbiAqIGFueSBsaXRlcmFsIFUrMDAyMiBRVU9UQVRJT04gTUFSSyBjaGFyYWN0ZXJzIChcIilcIlxuICpcbiAqIE5vdGUgd2UgYWxzbyBlc2NhcGUgdGhlIGdyZWF0ZXIgdGhhbiBzeW1ib2wsIGFzIHRoaXMgaXMgdXNlZCBieSB3cHRleHR1cml6ZSB0b1xuICogc3BsaXQgSFRNTCBzdHJpbmdzLiBUaGlzIGlzIGEgV29yZFByZXNzIHNwZWNpZmljIGZpeFxuICpcbiAqIE5vdGUgdGhhdCBpZiBhIHJlc29sdXRpb24gZm9yIFRyYWMjNDUzODcgY29tZXMgdG8gZnJ1aXRpb24sIGl0IGlzIG5vIGxvbmdlclxuICogbmVjZXNzYXJ5IGZvciBgX191bnN0YWJsZUVzY2FwZUdyZWF0ZXJUaGFuYCB0byBiZSB1c2VkLlxuICpcbiAqIFNlZTogaHR0cHM6Ly9jb3JlLnRyYWMud29yZHByZXNzLm9yZy90aWNrZXQvNDUzODdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCBhdHRyaWJ1dGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVBdHRyaWJ1dGUoIHZhbHVlICkge1xuXHRyZXR1cm4gX191bnN0YWJsZUVzY2FwZUdyZWF0ZXJUaGFuKFxuXHRcdGVzY2FwZVF1b3RhdGlvbk1hcmsoIGVzY2FwZUFtcGVyc2FuZCggdmFsdWUgKSApXG5cdCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBlc2NhcGVkIEhUTUwgZWxlbWVudCB2YWx1ZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9odG1sL3N5bnRheC5odG1sI3dyaXRpbmctaHRtbC1kb2N1bWVudHMtZWxlbWVudHNcbiAqXG4gKiBcInRoZSB0ZXh0IG11c3Qgbm90IGNvbnRhaW4gdGhlIGNoYXJhY3RlciBVKzAwM0MgTEVTUy1USEFOIFNJR04gKDwpIG9yIGFuXG4gKiBhbWJpZ3VvdXMgYW1wZXJzYW5kLlwiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIEVsZW1lbnQgdmFsdWUuXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBFc2NhcGVkIEhUTUwgZWxlbWVudCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZUhUTUwoIHZhbHVlICkge1xuXHRyZXR1cm4gZXNjYXBlTGVzc1RoYW4oIGVzY2FwZUFtcGVyc2FuZCggdmFsdWUgKSApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXNjYXBlZCBFZGl0YWJsZSBIVE1MIGVsZW1lbnQgdmFsdWUuIFRoaXMgaXMgZGlmZmVyZW50IGZyb21cbiAqIGBlc2NhcGVIVE1MYCwgYmVjYXVzZSBmb3IgZWRpdGFibGUgSFRNTCwgQUxMIGFtcGVyc2FuZHMgbXVzdCBiZSBlc2NhcGVkIGluXG4gKiBvcmRlciB0byByZW5kZXIgdGhlIGNvbnRlbnQgY29ycmVjdGx5IG9uIHRoZSBwYWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBFbGVtZW50IHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCBIVE1MIGVsZW1lbnQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVFZGl0YWJsZUhUTUwoIHZhbHVlICkge1xuXHRyZXR1cm4gZXNjYXBlTGVzc1RoYW4oIHZhbHVlLnJlcGxhY2UoIC8mL2csICcmYW1wOycgKSApO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gYXR0cmlidXRlIG5hbWUgaXMgdmFsaWQsIG9yIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBBdHRyaWJ1dGUgbmFtZSB0byB0ZXN0LlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgYXR0cmlidXRlIGlzIHZhbGlkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEF0dHJpYnV0ZU5hbWUoIG5hbWUgKSB7XG5cdHJldHVybiAhIFJFR0VYUF9JTlZBTElEX0FUVFJJQlVURV9OQU1FLnRlc3QoIG5hbWUgKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcclxuY2xhc3MgVG91cm5hbWF0Y2gge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcGFyYW0ob2JqZWN0LCBwcmVmaXgpIHtcclxuICAgICAgICBsZXQgc3RyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBvYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGsgPSBwcmVmaXggPyBwcmVmaXggKyBcIltcIiArIHByb3AgKyBcIl1cIiA6IHByb3A7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IG9iamVjdFtwcm9wXTtcclxuICAgICAgICAgICAgICAgIHN0ci5wdXNoKCh2ICE9PSBudWxsICYmIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiKSA/IHRoaXMucGFyYW0odiwgaykgOiBlbmNvZGVVUklDb21wb25lbnQoaykgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0ci5qb2luKFwiJlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudChldmVudE5hbWUpIHtcclxuICAgICAgICBpZiAoIShldmVudE5hbWUgaW4gdGhpcy5ldmVudHMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBuZXcgRXZlbnRUYXJnZXQoZXZlbnROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgYXV0b2NvbXBsZXRlKGlucHV0LCBkYXRhQ2FsbGJhY2spIHtcclxuICAgICAgICBuZXcgVG91cm5hbWF0Y2hfQXV0b2NvbXBsZXRlKGlucHV0LCBkYXRhQ2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHVjZmlyc3Qocykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAnJztcclxuICAgICAgICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3JkaW5hbF9zdWZmaXgobnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgcmVtYWluZGVyID0gbnVtYmVyICUgMTAwO1xyXG5cclxuICAgICAgICBpZiAoKHJlbWFpbmRlciA8IDExKSB8fCAocmVtYWluZGVyID4gMTMpKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVtYWluZGVyICUgMTApIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuICdzdCc7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiAnbmQnO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gJ3JkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ3RoJztcclxuICAgIH1cclxuXHJcbiAgICB0YWJzKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCB0YWJzID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0cm4tbmF2LWxpbmsnKTtcclxuICAgICAgICBjb25zdCBwYW5lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rybi10YWItcGFuZScpO1xyXG4gICAgICAgIGNvbnN0IGNsZWFyQWN0aXZlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRhYnMsICh0YWIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCd0cm4tbmF2LWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGFiLmFyaWFTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChwYW5lcywgcGFuZSA9PiBwYW5lLmNsYXNzTGlzdC5yZW1vdmUoJ3Rybi10YWItYWN0aXZlJykpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgc2V0QWN0aXZlID0gKHRhcmdldElkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FbaHJlZj1cIiMnICsgdGFyZ2V0SWQgKyAnXCJdLnRybi1uYXYtbGluaycpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQYW5lSWQgPSB0YXJnZXRUYWIgJiYgdGFyZ2V0VGFiLmRhdGFzZXQgJiYgdGFyZ2V0VGFiLmRhdGFzZXQudGFyZ2V0IHx8IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldFBhbmVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldFRhYi5jbGFzc0xpc3QuYWRkKCd0cm4tbmF2LWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0VGFiLmFyaWFTZWxlY3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0UGFuZUlkKS5jbGFzc0xpc3QuYWRkKCd0cm4tdGFiLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB0YWJDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRUYWIgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQYW5lSWQgPSB0YXJnZXRUYWIgJiYgdGFyZ2V0VGFiLmRhdGFzZXQgJiYgdGFyZ2V0VGFiLmRhdGFzZXQudGFyZ2V0IHx8IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldFBhbmVJZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlKHRhcmdldFBhbmVJZCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0YWJzLCAodGFiKSA9PiB7XHJcbiAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhYkNsaWNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlKGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhYnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXRBY3RpdmUodGFic1swXS5kYXRhc2V0LnRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy90cm4uaW5pdGlhbGl6ZSgpO1xyXG5pZiAoIXdpbmRvdy50cm5fb2JqX2luc3RhbmNlKSB7XHJcbiAgICB3aW5kb3cudHJuX29ial9pbnN0YW5jZSA9IG5ldyBUb3VybmFtYXRjaCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB0YWJWaWV3cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rybi1uYXYnKTtcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbSh0YWJWaWV3cykuZm9yRWFjaCgodGFiKSA9PiB7XHJcbiAgICAgICAgICAgIHRybi50YWJzKHRhYik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rybi1kcm9wZG93bi10b2dnbGUnKTtcclxuICAgICAgICBjb25zdCBoYW5kbGVEcm9wZG93bkNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGRyb3Bkb3ducykuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCd0cm4tc2hvdycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURyb3Bkb3duQ2xvc2UsIGZhbHNlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBBcnJheS5mcm9tKGRyb3Bkb3ducykuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcclxuICAgICAgICAgICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgndHJuLXNob3cnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEcm9wZG93bkNsb3NlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LCBmYWxzZSk7XHJcbn1cclxuZXhwb3J0IGxldCB0cm4gPSB3aW5kb3cudHJuX29ial9pbnN0YW5jZTtcclxuXHJcbmNsYXNzIFRvdXJuYW1hdGNoX0F1dG9jb21wbGV0ZSB7XHJcblxyXG4gICAgLy8gY3VycmVudEZvY3VzO1xyXG4gICAgLy9cclxuICAgIC8vIG5hbWVJbnB1dDtcclxuICAgIC8vXHJcbiAgICAvLyBzZWxmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlucHV0LCBkYXRhQ2FsbGJhY2spIHtcclxuICAgICAgICAvLyB0aGlzLnNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubmFtZUlucHV0ID0gaW5wdXQ7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhLCBiLCBpLCB2YWwgPSB0aGlzLm5hbWVJbnB1dC52YWx1ZTsvL3RoaXMudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLm5hbWVJbnB1dC5wYXJlbnROb2RlOy8vdGhpcy5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvKiBuZWVkIHRvIHF1ZXJ5IHNlcnZlciBmb3IgbmFtZXMgaGVyZS4gKi9cclxuICAgICAgICAgICAgLy8gICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgLy8gICAgIHhoci5vcGVuKCdHRVQnLCBvcHRpb25zLmFwaV91cmwgKyAncGxheWVycy8/c2VhcmNoPScgKyB2YWwgKyAnJnBlcl9wYWdlPTUnKTtcclxuICAgICAgICAgICAgLy8gICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgIC8vICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1XUC1Ob25jZScsIG9wdGlvbnMucmVzdF9ub25jZSk7XHJcbiAgICAgICAgICAgIC8vICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gcmVzb2x2ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZSkubWFwKChwbGF5ZXIpID0+IHtyZXR1cm4geyAndmFsdWUnOiBwbGF5ZXIuaWQsICd0ZXh0JzogcGxheWVyLm5hbWUgfTt9KSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpLm1hcCgocGxheWVyKSA9PiB7cmV0dXJuIHBsYXllci5uYW1lO30pKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgICAgICAvLyAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIGRhdGFDYWxsYmFjayh2YWwpLnRoZW4oKGRhdGEpID0+IHsvL3AudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLypjbG9zZSBhbnkgYWxyZWFkeSBvcGVuIGxpc3RzIG9mIGF1dG8tY29tcGxldGVkIHZhbHVlcyovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQWxsTGlzdHMoKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsKSB7IHJldHVybiBmYWxzZTt9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGb2N1cyA9IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qY3JlYXRlIGEgRElWIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGl0ZW1zICh2YWx1ZXMpOiovXHJcbiAgICAgICAgICAgICAgICBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgICAgICAgICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGhpcy5uYW1lSW5wdXQuaWQgKyBcIi1hdXRvLWNvbXBsZXRlLWxpc3RcIik7XHJcbiAgICAgICAgICAgICAgICBhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidHJuLWF1dG8tY29tcGxldGUtaXRlbXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLyphcHBlbmQgdGhlIERJViBlbGVtZW50IGFzIGEgY2hpbGQgb2YgdGhlIGF1dG8tY29tcGxldGUgY29udGFpbmVyOiovXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLypmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheS4uLiovXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0LCB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogV2hpY2ggZm9ybWF0IGRpZCB0aGV5IGdpdmUgdXMuICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2ldID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gZGF0YVtpXVsndGV4dCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGFbaV1bJ3ZhbHVlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZGF0YVtpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qY2hlY2sgaWYgdGhlIGl0ZW0gc3RhcnRzIHdpdGggdGhlIHNhbWUgbGV0dGVycyBhcyB0aGUgdGV4dCBmaWVsZCB2YWx1ZToqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0LnN1YnN0cigwLCB2YWwubGVuZ3RoKS50b1VwcGVyQ2FzZSgpID09PSB2YWwudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKmNyZWF0ZSBhIERJViBlbGVtZW50IGZvciBlYWNoIG1hdGNoaW5nIGVsZW1lbnQ6Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qbWFrZSB0aGUgbWF0Y2hpbmcgbGV0dGVycyBib2xkOiovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuaW5uZXJIVE1MID0gXCI8c3Ryb25nPlwiICsgdGV4dC5zdWJzdHIoMCwgdmFsLmxlbmd0aCkgKyBcIjwvc3Ryb25nPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLmlubmVySFRNTCArPSB0ZXh0LnN1YnN0cih2YWwubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qaW5zZXJ0IGEgaW5wdXQgZmllbGQgdGhhdCB3aWxsIGhvbGQgdGhlIGN1cnJlbnQgYXJyYXkgaXRlbSdzIHZhbHVlOiovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuaW5uZXJIVE1MICs9IFwiPGlucHV0IHR5cGU9J2hpZGRlbicgdmFsdWU9J1wiICsgdmFsdWUgKyBcIic+XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLmRhdGFzZXQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5kYXRhc2V0LnRleHQgPSB0ZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypleGVjdXRlIGEgZnVuY3Rpb24gd2hlbiBzb21lb25lIGNsaWNrcyBvbiB0aGUgaXRlbSB2YWx1ZSAoRElWIGVsZW1lbnQpOiovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaXRlbSBjbGlja2VkIHdpdGggdmFsdWUgJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC52YWx1ZX1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBpbnNlcnQgdGhlIHZhbHVlIGZvciB0aGUgYXV0b2NvbXBsZXRlIHRleHQgZmllbGQ6ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWVJbnB1dC52YWx1ZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWVJbnB1dC5kYXRhc2V0LnNlbGVjdGVkSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBjbG9zZSB0aGUgbGlzdCBvZiBhdXRvY29tcGxldGVkIHZhbHVlcywgKG9yIGFueSBvdGhlciBvcGVuIGxpc3RzIG9mIGF1dG9jb21wbGV0ZWQgdmFsdWVzOiovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQWxsTGlzdHMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWVJbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKmV4ZWN1dGUgYSBmdW5jdGlvbiBwcmVzc2VzIGEga2V5IG9uIHRoZSBrZXlib2FyZDoqL1xyXG4gICAgICAgIHRoaXMubmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5uYW1lSW5wdXQuaWQgKyBcIi1hdXRvLWNvbXBsZXRlLWxpc3RcIik7XHJcbiAgICAgICAgICAgIGlmICh4KSB4ID0geC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKTtcclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgICAgICAgICAgIC8qSWYgdGhlIGFycm93IERPV04ga2V5IGlzIHByZXNzZWQsXHJcbiAgICAgICAgICAgICAgICAgaW5jcmVhc2UgdGhlIGN1cnJlbnRGb2N1cyB2YXJpYWJsZToqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Rm9jdXMrKztcclxuICAgICAgICAgICAgICAgIC8qYW5kIGFuZCBtYWtlIHRoZSBjdXJyZW50IGl0ZW0gbW9yZSB2aXNpYmxlOiovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEFjdGl2ZSh4KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM4KSB7IC8vdXBcclxuICAgICAgICAgICAgICAgIC8qSWYgdGhlIGFycm93IFVQIGtleSBpcyBwcmVzc2VkLFxyXG4gICAgICAgICAgICAgICAgIGRlY3JlYXNlIHRoZSBjdXJyZW50Rm9jdXMgdmFyaWFibGU6Ki9cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZvY3VzLS07XHJcbiAgICAgICAgICAgICAgICAvKmFuZCBhbmQgbWFrZSB0aGUgY3VycmVudCBpdGVtIG1vcmUgdmlzaWJsZToqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBY3RpdmUoeCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgLypJZiB0aGUgRU5URVIga2V5IGlzIHByZXNzZWQsIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBiZWluZyBzdWJtaXR0ZWQsKi9cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRGb2N1cyA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyphbmQgc2ltdWxhdGUgYSBjbGljayBvbiB0aGUgXCJhY3RpdmVcIiBpdGVtOiovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHgpIHhbdGhpcy5jdXJyZW50Rm9jdXNdLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLypleGVjdXRlIGEgZnVuY3Rpb24gd2hlbiBzb21lb25lIGNsaWNrcyBpbiB0aGUgZG9jdW1lbnQ6Ki9cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUFsbExpc3RzKGUudGFyZ2V0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY3RpdmUoeCkge1xyXG4gICAgICAgIC8qYSBmdW5jdGlvbiB0byBjbGFzc2lmeSBhbiBpdGVtIGFzIFwiYWN0aXZlXCI6Ki9cclxuICAgICAgICBpZiAoIXgpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvKnN0YXJ0IGJ5IHJlbW92aW5nIHRoZSBcImFjdGl2ZVwiIGNsYXNzIG9uIGFsbCBpdGVtczoqL1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWN0aXZlKHgpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRGb2N1cyA+PSB4Lmxlbmd0aCkgdGhpcy5jdXJyZW50Rm9jdXMgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRGb2N1cyA8IDApIHRoaXMuY3VycmVudEZvY3VzID0gKHgubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgLyphZGQgY2xhc3MgXCJhdXRvY29tcGxldGUtYWN0aXZlXCI6Ki9cclxuICAgICAgICB4W3RoaXMuY3VycmVudEZvY3VzXS5jbGFzc0xpc3QuYWRkKFwidHJuLWF1dG8tY29tcGxldGUtYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFjdGl2ZSh4KSB7XHJcbiAgICAgICAgLyphIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgXCJhY3RpdmVcIiBjbGFzcyBmcm9tIGFsbCBhdXRvY29tcGxldGUgaXRlbXM6Ki9cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgeFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwidHJuLWF1dG8tY29tcGxldGUtYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUFsbExpc3RzKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsb3NlIGFsbCBsaXN0c1wiKTtcclxuICAgICAgICAvKmNsb3NlIGFsbCBhdXRvY29tcGxldGUgbGlzdHMgaW4gdGhlIGRvY3VtZW50LFxyXG4gICAgICAgICBleGNlcHQgdGhlIG9uZSBwYXNzZWQgYXMgYW4gYXJndW1lbnQ6Ki9cclxuICAgICAgICBsZXQgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0cm4tYXV0by1jb21wbGV0ZS1pdGVtc1wiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHhbaV0gJiYgZWxlbWVudCAhPT0gdGhpcy5uYW1lSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gRmlyc3QsIGNoZWNrcyBpZiBpdCBpc24ndCBpbXBsZW1lbnRlZCB5ZXQuXHJcbmlmICghU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQpIHtcclxuICAgIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC97KFxcZCspfS9nLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXJnc1tudW1iZXJdICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgPyBhcmdzW251bWJlcl1cclxuICAgICAgICAgICAgICAgIDogbWF0Y2hcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBBZG1pbiBtYW5hZ2UgdG91cm5hbWVudCBidWxrIHJlZ2lzdHJhdGlvbiBwYWdlLlxyXG4gKlxyXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy50b3VybmFtYXRjaC5jb21cclxuICogQHNpbmNlICAgICAgMy4xNy4wXHJcbiAqXHJcbiAqIEBwYWNrYWdlICAgIFRvdXJuYW1hdGNoXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgeyB0cm4gfSBmcm9tICcuLy4uL3RvdXJuYW1hdGNoLmpzJztcclxuaW1wb3J0IHsgZXNjYXBlSFRNTCB9IGZyb20gJ0B3b3JkcHJlc3MvZXNjYXBlLWh0bWwnO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0cm5fdG91cm5hbWVudF9yZWdpc3RyYXRpb25fb3B0aW9ucztcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhdXRvIGNvbXBsZXRlXHJcbiAgICAgICAgJC5hdXRvY29tcGxldGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBldGl0b3JfaWQnKSwgZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvKiBuZWVkIHRvIHF1ZXJ5IHNlcnZlciBmb3IgbmFtZXMgaGVyZS4gKi9cclxuICAgICAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBvcHRpb25zLmFwaV91cmwgKyAncGxheWVycy8/c2VhcmNoPScgKyB2YWwgKyAnJnBlcl9wYWdlPTUnKTtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1XUC1Ob25jZScsIG9wdGlvbnMucmVzdF9ub25jZSk7XHJcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZSkubWFwKChwbGF5ZXIpID0+IHtyZXR1cm4geyAndmFsdWUnOiBwbGF5ZXIuaWQsICd0ZXh0JzogcGxheWVyLm5hbWUgfTt9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpLm1hcCgocGxheWVyKSA9PiB7cmV0dXJuIGVzY2FwZUhUTUwocGxheWVyLm5hbWUpO30pKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRvZ2dsZSBuZXcgb3Igc2VsZWN0XHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlVGVhbXMoKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZWFtU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld19vcl9leGlzdGluZycpO1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRWYWx1ZSA9IHRlYW1TZWxlY3Rpb24ub3B0aW9uc1t0ZWFtU2VsZWN0aW9uLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICduZXcnKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnX3JvdycpLnN0eWxlLmRpc3BsYXkgPSAndGFibGUtcm93JztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtX3RhZycpLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lX3JvdycpLnN0eWxlLmRpc3BsYXkgPSAndGFibGUtcm93JztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtX25hbWUnKS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpc3Rpbmdfcm93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGlzdGluZ190ZWFtJykucmVxdWlyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWdfcm93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtX3RhZycpLnJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZV9yb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlYW1fbmFtZScpLnJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpc3Rpbmdfcm93Jykuc3R5bGUuZGlzcGxheSA9ICd0YWJsZS1yb3cnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4aXN0aW5nX3RlYW0nKS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG5ldyBvciBleGlzdGluZyBkcm9wIGRvd25cclxuICAgICAgICBpZiAob3B0aW9ucy5jb21wZXRpdGlvbiA9PT0gJ3RlYW1zJykge1xyXG4gICAgICAgICAgICBsZXQgdGVhbVNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdfb3JfZXhpc3RpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIHRlYW1TZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlVGVhbXMoKTtcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdG9nZ2xlVGVhbXMoKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wZXRpdG9yX2lkJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHZhbHVlIGNoYW5nZWQgdG8gJHt0aGlzLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBvcHRpb25zLmFwaV91cmwgKyAncGxheWVycy8/c2VhcmNoPScgKyB0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVdQLU5vbmNlJywgb3B0aW9ucy5yZXN0X25vbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJzID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBsYXllcnNbMF1bJ3VzZXJfaWQnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rybi10b3VybmFtZW50LXJlZ2lzdGVyLXJlc3BvbnNlJykuaW5uZXJIVE1MID0gYGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cm4tdG91cm5hbWVudC1yZWdpc3Rlci1yZXNwb25zZScpLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cIm5vdGljZSBub3RpY2UtZXJyb3JcIj48c3Ryb25nPiR7b3B0aW9ucy5sYW5ndWFnZS5mYWlsdXJlfTo8L3N0cm9uZz4gJHtvcHRpb25zLmxhbmd1YWdlLm5vX2NvbXBldGl0b3J9PC9wPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcC50aGVuKCh1c2VyX2lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGVhbXModXNlcl9pZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IHRlYW1zIGZvciBzaW5nbGUgcGxheWVyXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VGVhbXModXNlcl9pZCkge1xyXG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBvcHRpb25zLmFwaV91cmwgKyBgcGxheWVycy8ke3VzZXJfaWR9L3RlYW1zYCk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVdQLU5vbmNlJywgb3B0aW9ucy5yZXN0X25vbmNlKTtcclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhocik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGBgO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZWFtcyA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlYW1zICE9PSBudWxsICYmIHRlYW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWFtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlYW0gPSB0ZWFtc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ICs9IGA8b3B0aW9uIHZhbHVlPVwiJHt0ZWFtLnRlYW1faWR9XCI+JHtlc2NhcGVIVE1MKHRlYW0ubmFtZSl9PC9vcHRpb24+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gYDxvcHRpb24gdmFsdWU9XCItMVwiPigke29wdGlvbnMubGFuZ3VhZ2UuemVyb190ZWFtc30pPC9vcHRpb24+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gYDxvcHRpb24gdmFsdWU9XCItMVwiPigke29wdGlvbnMubGFuZ3VhZ2UuemVyb190ZWFtc30pPC9vcHRpb24+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpc3RpbmdfdGVhbScpLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVnaXN0ZXJDb21wZXRpdG9yKGNvbXBldGl0aW9uSWQsIGNvbXBldGl0b3JJZCwgY29tcGV0aXRvclR5cGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHJlZ2lzdGVyaW5nICR7Y29tcGV0aXRvclR5cGV9IHdpdGggaWQgJHtjb21wZXRpdG9ySWR9IHRvIGNvbXBldGl0aW9uIHdpdGggaWQgJHtjb21wZXRpdGlvbklkfWApO1xyXG5cclxuICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbignUE9TVCcsIG9wdGlvbnMuYXBpX3VybCArICd0b3VybmFtZW50LXJlZ2lzdHJhdGlvbnMnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtV1AtTm9uY2UnLCBvcHRpb25zLnJlc3Rfbm9uY2UpO1xyXG4gICAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGhyKTtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJuLXRvdXJuYW1lbnQtcmVnaXN0ZXItcmVzcG9uc2UnKS5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJub3RpY2Ugbm90aWNlLXN1Y2Nlc3NcIj48c3Ryb25nPiR7b3B0aW9ucy5sYW5ndWFnZS5zdWNjZXNzfTo8L3N0cm9uZz4gJHtvcHRpb25zLmxhbmd1YWdlLnN1Y2Nlc3NfbWVzc2FnZX08L3A+YDtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJuLXRvdXJuYW1lbnQtcmVnaXN0ZXItZm9ybScpLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cm4tdG91cm5hbWVudC1yZWdpc3Rlci1yZXNwb25zZScpLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cIm5vdGljZSBub3RpY2UtZXJyb3JcIj48c3Ryb25nPiR7b3B0aW9ucy5sYW5ndWFnZS5mYWlsdXJlfTo8L3N0cm9uZz4gJHtlc2NhcGVIVE1MKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKS5tZXNzYWdlKX08L3A+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHhoci5zZW5kKCQucGFyYW0oe1xyXG4gICAgICAgICAgICAgICAgdG91cm5hbWVudF9pZDogY29tcGV0aXRpb25JZCxcclxuICAgICAgICAgICAgICAgIGNvbXBldGl0b3JfaWQ6IGNvbXBldGl0b3JJZCxcclxuICAgICAgICAgICAgICAgIGNvbXBldGl0b3JfdHlwZTogY29tcGV0aXRvclR5cGUsXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cm4tdG91cm5hbWVudC1yZWdpc3Rlci1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIG9wdGlvbnMuYXBpX3VybCArICdwbGF5ZXJzLz9zZWFyY2g9JyArIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wZXRpdG9yX2lkJykudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVdQLU5vbmNlJywgb3B0aW9ucy5yZXN0X25vbmNlKTtcclxuICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcnMgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBsYXllcnNbMF1bJ3VzZXJfaWQnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJuLXRvdXJuYW1lbnQtcmVnaXN0ZXItcmVzcG9uc2UnKS5pbm5lckhUTUwgPSBgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cm4tdG91cm5hbWVudC1yZWdpc3Rlci1yZXNwb25zZScpLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cIm5vdGljZSBub3RpY2UtZXJyb3JcIj48c3Ryb25nPiR7b3B0aW9ucy5sYW5ndWFnZS5mYWlsdXJlfTo8L3N0cm9uZz4gJHtvcHRpb25zLmxhbmd1YWdlLm5vX2NvbXBldGl0b3J9PC9wPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHAudGhlbigodXNlcklkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jb21wZXRpdGlvbiA9PT0gJ3RlYW1zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZWFtU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld19vcl9leGlzdGluZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRlYW1TZWxlY3Rpb24udmFsdWUgPT09ICduZXcnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgb3B0aW9ucy5hcGlfdXJsICsgJ3RlYW1zJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtV1AtTm9uY2UnLCBvcHRpb25zLnJlc3Rfbm9uY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpLmRhdGEudGVhbV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHhocik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZCgkLnBhcmFtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlYW1fbmFtZScpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlYW1fdGFnJykudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHEudGhlbigodGVhbUlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckNvbXBldGl0b3Iob3B0aW9ucy50b3VybmFtZW50X2lkLCB0ZWFtSWQsICd0ZWFtcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckNvbXBldGl0b3Iob3B0aW9ucy50b3VybmFtZW50X2lkLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpc3RpbmdfdGVhbScpLnZhbHVlLCAndGVhbXMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyQ29tcGV0aXRvcihvcHRpb25zLnRvdXJuYW1lbnRfaWQsIHVzZXJJZCwgJ3BsYXllcnMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0dGVkJyk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIH0sIGZhbHNlKTtcclxufSkodHJuKTsiXSwibmFtZXMiOlsiX191bnN0YWJsZUVzY2FwZUdyZWF0ZXJUaGFuIiwidmFsdWUiLCJyZXBsYWNlIiwiUkVHRVhQX0lOVkFMSURfQVRUUklCVVRFX05BTUUiLCJlc2NhcGVBbXBlcnNhbmQiLCJlc2NhcGVRdW90YXRpb25NYXJrIiwiZXNjYXBlTGVzc1RoYW4iLCJlc2NhcGVBdHRyaWJ1dGUiLCJlc2NhcGVIVE1MIiwiZXNjYXBlRWRpdGFibGVIVE1MIiwiaXNWYWxpZEF0dHJpYnV0ZU5hbWUiLCJuYW1lIiwidGVzdCIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJlIiwiciIsInQiLCJsZW5ndGgiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiaSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlN0cmluZyIsIk51bWJlciIsIlRvdXJuYW1hdGNoIiwiZXZlbnRzIiwicGFyYW0iLCJvYmplY3QiLCJwcmVmaXgiLCJzdHIiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJrIiwidiIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwiZXZlbnQiLCJldmVudE5hbWUiLCJFdmVudFRhcmdldCIsImF1dG9jb21wbGV0ZSIsImlucHV0IiwiZGF0YUNhbGxiYWNrIiwiVG91cm5hbWF0Y2hfQXV0b2NvbXBsZXRlIiwidWNmaXJzdCIsInMiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwib3JkaW5hbF9zdWZmaXgiLCJudW1iZXIiLCJyZW1haW5kZXIiLCJ0YWJzIiwiZWxlbWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwYW5lcyIsImRvY3VtZW50IiwiY2xlYXJBY3RpdmUiLCJBcnJheSIsImZvckVhY2giLCJ0YWIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhcmlhU2VsZWN0ZWQiLCJwYW5lIiwic2V0QWN0aXZlIiwidGFyZ2V0SWQiLCJ0YXJnZXRUYWIiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0UGFuZUlkIiwiZGF0YXNldCIsInRhcmdldCIsImFkZCIsImdldEVsZW1lbnRCeUlkIiwidGFiQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyIiwid2luZG93IiwidHJuX29ial9pbnN0YW5jZSIsInRhYlZpZXdzIiwiZnJvbSIsInRybiIsImRyb3Bkb3ducyIsImhhbmRsZURyb3Bkb3duQ2xvc2UiLCJkcm9wZG93biIsIm5leHRFbGVtZW50U2libGluZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJfdGhpcyIsIm5hbWVJbnB1dCIsImIiLCJ2YWwiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2xvc2VBbGxMaXN0cyIsImN1cnJlbnRGb2N1cyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImFwcGVuZENoaWxkIiwidGV4dCIsImlubmVySFRNTCIsImNvbmNhdCIsInNlbGVjdGVkSWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJ4IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJrZXlDb2RlIiwiYWRkQWN0aXZlIiwiY2xpY2siLCJyZW1vdmVBY3RpdmUiLCJyZW1vdmVDaGlsZCIsImZvcm1hdCIsImFyZ3MiLCJhcmd1bWVudHMiLCJtYXRjaCIsIiQiLCJvcHRpb25zIiwidHJuX3RvdXJuYW1lbnRfcmVnaXN0cmF0aW9uX29wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsImFwaV91cmwiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVzdF9ub25jZSIsIm9ubG9hZCIsInN0YXR1cyIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlIiwibWFwIiwicGxheWVyIiwic2VuZCIsInRvZ2dsZVRlYW1zIiwidGVhbVNlbGVjdGlvbiIsInNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZEluZGV4Iiwic3R5bGUiLCJkaXNwbGF5IiwicmVxdWlyZWQiLCJjb21wZXRpdGlvbiIsInAiLCJwbGF5ZXJzIiwibGFuZ3VhZ2UiLCJmYWlsdXJlIiwibm9fY29tcGV0aXRvciIsInVzZXJfaWQiLCJnZXRUZWFtcyIsImNvbnRlbnQiLCJ0ZWFtcyIsInRlYW0iLCJ0ZWFtX2lkIiwiemVyb190ZWFtcyIsInJlZ2lzdGVyQ29tcGV0aXRvciIsImNvbXBldGl0aW9uSWQiLCJjb21wZXRpdG9ySWQiLCJjb21wZXRpdG9yVHlwZSIsInN1Y2Nlc3MiLCJzdWNjZXNzX21lc3NhZ2UiLCJyZXNldCIsIm1lc3NhZ2UiLCJ0b3VybmFtZW50X2lkIiwiY29tcGV0aXRvcl9pZCIsImNvbXBldGl0b3JfdHlwZSIsInVzZXJJZCIsInEiLCJ0YWciLCJ0ZWFtSWQiXSwic291cmNlUm9vdCI6IiJ9