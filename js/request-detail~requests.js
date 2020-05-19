(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-detail~requests"],{

/***/ "./src/constants/routes.js":
/*!*********************************!*\
  !*** ./src/constants/routes.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var routes = {
  requests: {
    index: '/requests',
    addComment: '/requests/add-comment',
    approve: '/requests/approve',
    deny: '/requests/deny'
  },
  request: {
    index: '/request',
    addComment: '/request/add-comment',
    approve: '/request/approve',
    deny: '/request/deny'
  },
  workflows: {
    index: '/workflows',
    add: '/workflows/add-workflow',
    remove: '/workflows/remove',
    editInfo: '/workflows/edit-info',
    editGroups: '/workflows/edit-groups',
    editSequence: '/workflows/edit-sequence'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "./src/forms/request-comment-form.schema.js":
/*!**************************************************!*\
  !*** ./src/forms/request-comment-form.schema.js ***!
  \**************************************************/
/*! exports provided: createRequestCommentSchema */
/*! exports used: createRequestCommentSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRequestCommentSchema; });
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__);


var schemaFields = function schemaFields(isDeny) {
  return {
    component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["componentTypes"].TEXTAREA_FIELD,
    name: 'comments',
    type: 'text',
    isRequired: isDeny,
    label: isDeny ? 'Reason' : 'Comment'
  };
};

var createRequestCommentSchema = function createRequestCommentSchema() {
  var isDeny = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var schema = schemaFields(isDeny);

  if (isDeny) {
    schema.validate = [{
      type: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["validatorTypes"].REQUIRED
    }];
  }

  return {
    fields: [schema]
  };
};

/***/ }),

/***/ "./src/helpers/request/request-helper.js":
/*!***********************************************!*\
  !*** ./src/helpers/request/request-helper.js ***!
  \***********************************************/
/*! exports provided: fetchRequests, fetchRequestTranscript, fetchRequestContent, fetchRequestCapabilities, fetchRequestWithSubrequests, createRequestAction */
/*! exports used: createRequestAction, fetchRequestContent, fetchRequestWithSubrequests, fetchRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchRequests; });
/* unused harmony export fetchRequestTranscript */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchRequestContent; });
/* unused harmony export fetchRequestCapabilities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchRequestWithSubrequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRequestAction; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");
/* harmony import */ var _shared_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/pagination */ "./src/helpers/shared/pagination.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/helpers */ "./src/helpers/shared/helpers.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var actionApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_3__[/* getActionApi */ "a"])();
var graphqlInstance = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_3__[/* getGraphqlInstance */ "c"])();

var sortPropertiesMapper = function sortPropertiesMapper(property) {
  return {
    opened: 'created_at',
    requester: 'requester_name',
    status: 'state'
  }[property] || property;
};

function fetchRequests() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var pagination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _shared_pagination__WEBPACK_IMPORTED_MODULE_5__[/* defaultSettings */ "a"];
  var persona = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var sortBy = arguments.length > 3 ? arguments[3] : undefined;
  var filterQuery = "filter[name][contains_i]=".concat(filter);
  var paginationQuery = "&limit=".concat(pagination.limit, "&offset=").concat(pagination.offset);
  var sortQuery = "&sort_by=".concat(sortPropertiesMapper(sortBy.property), ":").concat(sortBy.direction);
  var fetchUrl = "".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_4__[/* APPROVAL_API_BASE */ "a"], "/requests/?").concat(filterQuery).concat(paginationQuery).concat(sortQuery);
  var fetchHeaders = persona ? {
    'x-rh-persona': persona
  } : undefined;
  return Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_3__[/* getAxiosInstance */ "b"])()({
    method: 'get',
    url: fetchUrl,
    headers: fetchHeaders
  });
}

var requestTranscriptQuery = function requestTranscriptQuery(parent_id) {
  return "query {\n  requests(id: \"".concat(parent_id, "\") {\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    state\n    actions {\n      id\n      operation\n      comments\n      created_at\n      processed_by\n    }\n    requests {\n      id\n      name\n      number_of_children\n      decision\n      description\n      group_name\n      number_of_finished_children\n      state\n      workflow_id\n      parent_id\n      actions {\n        id\n        operation\n        comments\n        created_at\n        processed_by\n      }\n    }\n  }\n}");
};

var fetchRequestTranscript = function fetchRequestTranscript(requestId, persona) {
  var fetchHeaders = persona && persona !== _shared_helpers__WEBPACK_IMPORTED_MODULE_6__[/* APPROVAL_APPROVER_PERSONA */ "a"] ? {
    'x-rh-persona': persona
  } : {
    'x-rh-persona': _shared_helpers__WEBPACK_IMPORTED_MODULE_6__[/* APPROVAL_REQUESTER_PERSONA */ "b"]
  };
  return graphqlInstance({
    method: 'post',
    url: "".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_4__[/* APPROVAL_API_BASE */ "a"], "/graphql"),
    headers: fetchHeaders,
    data: {
      query: requestTranscriptQuery(requestId)
    }
  }).then(function (_ref) {
    var requests = _ref.data.requests;
    return requests;
  });
};
var fetchRequestContent = function fetchRequestContent(id) {
  var fetchUrl = "".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_4__[/* APPROVAL_API_BASE */ "a"], "/requests/").concat(id, "/content");
  var fetchHeaders = {
    'x-rh-persona': _shared_helpers__WEBPACK_IMPORTED_MODULE_6__[/* APPROVAL_REQUESTER_PERSONA */ "b"]
  };
  return Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_3__[/* getAxiosInstance */ "b"])()({
    method: 'get',
    url: fetchUrl,
    headers: fetchHeaders
  });
};
var fetchRequestCapabilities = function fetchRequestCapabilities(id, isParent) {
  var fetchUrl = "".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_4__[/* APPROVAL_API_BASE */ "a"], "/requests/").concat(id).concat(isParent ? '/requests' : '');
  var fetchHeaders = {
    'x-rh-persona': _shared_helpers__WEBPACK_IMPORTED_MODULE_6__[/* APPROVAL_REQUESTER_PERSONA */ "b"]
  };
  return Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_3__[/* getAxiosInstance */ "b"])()({
    method: 'get',
    url: fetchUrl,
    headers: fetchHeaders
  });
};
function fetchRequestWithSubrequests(_x, _x2) {
  return _fetchRequestWithSubrequests.apply(this, arguments);
}

function _fetchRequestWithSubrequests() {
  _fetchRequestWithSubrequests = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id, persona) {
    var requestData, result, request;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchRequestTranscript(id, persona);

          case 2:
            requestData = _context.sent;

            if (!(!requestData || requestData.length === 0)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", {});

          case 5:
            if (!(persona === _shared_helpers__WEBPACK_IMPORTED_MODULE_6__[/* APPROVAL_APPROVER_PERSONA */ "a"])) {
              _context.next = 17;
              break;
            }

            if (!(requestData && requestData.length > 0 && requestData[0].number_of_children > 0)) {
              _context.next = 13;
              break;
            }

            _context.next = 9;
            return fetchRequestCapabilities(id, true);

          case 9:
            result = _context.sent;

            if (result && result.data) {
              requestData[0].requests = requestData[0].requests.map(function (request) {
                return _objectSpread({}, result.data.find(function (item) {
                  return item.id === request.id && item.metadata;
                }), {}, request);
              });
            }

            _context.next = 17;
            break;

          case 13:
            _context.next = 15;
            return fetchRequestCapabilities(id, false);

          case 15:
            request = _context.sent;

            if (request) {
              requestData[0] = _objectSpread({}, requestData[0], {
                metadata: request.metadata
              });
            }

          case 17:
            return _context.abrupt("return", _objectSpread({}, requestData[0]));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchRequestWithSubrequests.apply(this, arguments);
}

function createRequestAction(_x3, _x4) {
  return _createRequestAction.apply(this, arguments);
}

function _createRequestAction() {
  _createRequestAction = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(requestId, actionIn) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return actionApi.createAction(requestId, actionIn);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createRequestAction.apply(this, arguments);
}

/***/ }),

/***/ "./src/presentational-components/shared/pf4-select-wrapper.js":
/*!********************************************************************!*\
  !*** ./src/presentational-components/shared/pf4-select-wrapper.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_FormSelect_FormSelect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/FormSelect/FormSelect.js */ "./node_modules/@patternfly/react-core/dist/js/components/FormSelect/FormSelect.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_FormSelect_FormSelect_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_FormSelect_FormSelect_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_FormSelect_FormSelectOption_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/FormSelect/FormSelectOption.js */ "./node_modules/@patternfly/react-core/dist/js/components/FormSelect/FormSelectOption.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_FormSelect_FormSelectOption_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_FormSelect_FormSelectOption_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_FormGroup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Form/FormGroup.js */ "./node_modules/@patternfly/react-core/dist/js/components/Form/FormGroup.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_FormGroup_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Form_FormGroup_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_9__);












var createOptions = function createOptions(options, inputValue, isRequired) {
  if (inputValue && isRequired) {
    return options;
  }

  var selectOptions = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(options);

  return selectOptions.find(function (_ref) {
    var value = _ref.value;
    return value === undefined;
  }) ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(selectOptions) : [{
    label: isRequired ? 'Please choose' : 'None'
  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(selectOptions));
};

var Select = function Select(_ref2) {
  var input = _ref2.input,
      options = _ref2.options,
      isReadOnly = _ref2.isReadOnly,
      isDisabled = _ref2.isDisabled,
      FieldProvider = _ref2.FieldProvider,
      isRequired = _ref2.isRequired,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["input", "options", "isReadOnly", "isDisabled", "FieldProvider", "isRequired"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_components_FormSelect_FormSelect_js__WEBPACK_IMPORTED_MODULE_5__["FormSelect"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, input, rest, {
    isDisabled: isDisabled || isReadOnly
  }), createOptions(options, input.value, isRequired).map(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_components_FormSelect_FormSelectOption_js__WEBPACK_IMPORTED_MODULE_6__["FormSelectOption"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: props.value || props.label
    }, props, {
      label: props.label.toString()
    })) // eslint-disable-line react/prop-types
    ;
  }));
};

Select.propTypes = {
  input: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
    label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
  })).isRequired,
  isReadOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  FieldProvider: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};

var Pf4SelectWrapper = function Pf4SelectWrapper(_ref3) {
  var componentType = _ref3.componentType,
      label = _ref3.label,
      isRequired = _ref3.isRequired,
      helperText = _ref3.helperText,
      meta = _ref3.meta,
      description = _ref3.description,
      hideLabel = _ref3.hideLabel,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, ["componentType", "label", "isRequired", "helperText", "meta", "description", "hideLabel"]);

  var error = meta.error,
      touched = meta.touched;
  var showError = touched && error;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_components_Form_FormGroup_js__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
    isRequired: isRequired,
    label: !hideLabel && label,
    fieldId: rest.id,
    isValid: !showError,
    helperText: helperText,
    helperTextInvalid: meta.error
  }, description && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_8__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_9__["TextVariants"].small
  }, description)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: label,
    isValid: !showError,
    isRequired: isRequired
  }, rest)));
};

Pf4SelectWrapper.propTypes = {
  componentType: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  hideLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (Pf4SelectWrapper);

/***/ }),

/***/ "./src/redux/actions/request-actions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/request-actions.js ***!
  \**********************************************/
/*! exports provided: fetchRequests, fetchRequest, fetchRequestContent, createRequestAction, expandRequest, sortRequests */
/*! exports used: createRequestAction, expandRequest, fetchRequest, fetchRequestContent, fetchRequests, sortRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchRequestContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return expandRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return sortRequests; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_request_request_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/request/request-helper */ "./src/helpers/request/request-helper.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");



var fetchRequests = function fetchRequests(filter, persona, pagination) {
  return function (dispatch, getState) {
    var _getState$requestRedu = getState().requestReducer,
        sortBy = _getState$requestRedu.sortBy,
        requests = _getState$requestRedu.requests;
    var finalPagination = pagination || _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_2__[/* defaultSettings */ "a"];

    if (!pagination && requests) {
      var _requests$meta = requests.meta,
          limit = _requests$meta.limit,
          offset = _requests$meta.offset;
      finalPagination = {
        limit: limit,
        offset: offset
      };
    }

    return dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_REQUESTS */ "h"],
      payload: _helpers_request_request_helper__WEBPACK_IMPORTED_MODULE_1__[/* fetchRequests */ "d"](filter, finalPagination, persona, sortBy)
    });
  };
};
var fetchRequest = function fetchRequest(apiProps, persona) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_REQUEST */ "g"],
    payload: _helpers_request_request_helper__WEBPACK_IMPORTED_MODULE_1__[/* fetchRequestWithSubrequests */ "c"](apiProps, persona)
  };
};
var fetchRequestContent = function fetchRequestContent(apiProps, persona) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_REQUEST_CONTENT */ "i"],
    payload: _helpers_request_request_helper__WEBPACK_IMPORTED_MODULE_1__[/* fetchRequestContent */ "b"](apiProps, persona)
  };
};
var createRequestAction = function createRequestAction(actionName, requestId, actionIn) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* CREATE_REQUEST_ACTION */ "b"],
    payload: _helpers_request_request_helper__WEBPACK_IMPORTED_MODULE_1__[/* createRequestAction */ "a"](requestId, actionIn),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success',
          description: "The ".concat(actionName, " was successful.")
        },
        rejected: {
          variant: 'danger',
          title: "".concat(actionName, " error"),
          description: "The ".concat(actionName, " action failed.")
        }
      }
    }
  };
};
var expandRequest = function expandRequest(id) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* EXPAND_REQUEST */ "c"],
    payload: id
  };
};
var sortRequests = function sortRequests(sortBy) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* SORT_REQUESTS */ "n"],
    payload: sortBy
  };
};

/***/ }),

/***/ "./src/smart-components/common/form-renderer.js":
/*!******************************************************!*\
  !*** ./src/smart-components/common/form-renderer.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/index.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _presentational_components_shared_pf4_select_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../presentational-components/shared/pf4-select-wrapper */ "./src/presentational-components/shared/pf4-select-wrapper.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var buttonPositioning = {
  "default": {},
  modal: {
    buttonOrder: ['cancel', 'reset', 'save'],
    buttonClassName: 'modal-form-right-align'
  }
};

var FormRenderer = function FormRenderer(_ref) {
  var componentMapper = _ref.componentMapper,
      formContainer = _ref.formContainer,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["componentMapper", "formContainer"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: buttonPositioning[formContainer].buttonClassName
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_5___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    formFieldsMapper: _objectSpread({}, _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_6__["formFieldsMapper"], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
      componentMapper: componentMapper
    }, _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_5__["componentTypes"].SELECT, _presentational_components_shared_pf4_select_wrapper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])),
    layoutMapper: _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_6__["layoutMapper"]
  }, buttonPositioning[formContainer], rest)));
};

FormRenderer.propTypes = {
  componentMapper: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  formContainer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['default', 'modal'])
};
FormRenderer.defaultProps = {
  componentMapper: {},
  formContainer: 'default'
};
/* harmony default export */ __webpack_exports__["a"] = (FormRenderer);

/***/ }),

/***/ "./src/smart-components/request/action-modal.js":
/*!******************************************************!*\
  !*** ./src/smart-components/request/action-modal.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_form_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/form-renderer */ "./src/smart-components/common/form-renderer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Modal/Modal.js */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Modal_Modal_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_request_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/request-actions */ "./src/redux/actions/request-actions.js");
/* harmony import */ var _forms_request_comment_form_schema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../forms/request-comment-form.schema */ "./src/forms/request-comment-form.schema.js");
/* harmony import */ var _utilities_use_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/use-query */ "./src/utilities/use-query.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var ActionModal = function ActionModal(_ref) {
  var actionType = _ref.actionType,
      addNotification = _ref.addNotification,
      createRequestAction = _ref.createRequestAction,
      closeUrl = _ref.closeUrl,
      postMethod = _ref.postMethod;

  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])(),
      push = _useHistory.push;

  var _useQuery = Object(_utilities_use_query__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(['request']),
      _useQuery2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useQuery, 1),
      id = _useQuery2[0].request;

  var onSubmit = function onSubmit(data) {
    var operationType = {
      'Add Comment': 'memo',
      Approve: 'approve',
      Deny: 'deny'
    };
    var actionName = actionType === 'Add Comment' ? actionType : "".concat(actionType, " Request");
    return postMethod ? createRequestAction(actionName, id, _objectSpread({
      operation: operationType[actionType]
    }, data)).then(function () {
      return postMethod();
    }).then(function () {
      return push(closeUrl);
    }) : createRequestAction(actionName, id, _objectSpread({
      operation: operationType[actionType]
    }, data)).then(function () {
      return push(closeUrl);
    });
  };

  var onCancel = function onCancel() {
    var actionName = actionType === 'Add Comment' ? actionType : "".concat(actionType, " Request");
    addNotification({
      variant: 'warning',
      title: actionName,
      dismissable: true,
      description: "".concat(actionName, " was cancelled by the user.")
    });
    push(closeUrl);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Modal_Modal_js__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    isLarge: true,
    title: actionType === 'Add Comment' ? "Request #".concat(id) : "".concat(actionType, " Request #").concat(id),
    isOpen: true,
    onClose: onCancel
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_form_renderer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    schema: Object(_forms_request_comment_form_schema__WEBPACK_IMPORTED_MODULE_11__[/* createRequestCommentSchema */ "a"])(actionType === 'Deny'),
    schemaType: "default",
    onSubmit: onSubmit,
    onCancel: onCancel,
    formContainer: "modal"
  }));
};

ActionModal.defaultProps = {
  closeUrl: _constants_routes__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].requests.index
};
ActionModal.propTypes = {
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  createRequestAction: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  postMethod: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  actionType: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  closeUrl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  match: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__[/* bindActionCreators */ "a"])({
    addNotification: _redhat_cloud_services_frontend_components_notifications__WEBPACK_IMPORTED_MODULE_9__["addNotification"],
    createRequestAction: _redux_actions_request_actions__WEBPACK_IMPORTED_MODULE_10__[/* createRequestAction */ "a"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, mapDispatchToProps)(ActionModal));

/***/ }),

/***/ "./src/utilities/use-query.js":
/*!************************************!*\
  !*** ./src/utilities/use-query.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var useQuery = function useQuery() {
  var requiredParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(),
      search = _useLocation.search;

  var query = new URLSearchParams(search);
  return [requiredParams.reduce(function (acc, curr) {
    return _objectSpread({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, curr, query.get(curr)));
  }, {}), search, query];
};

/* harmony default export */ __webpack_exports__["a"] = (useQuery);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/request-detail~requests.js.map