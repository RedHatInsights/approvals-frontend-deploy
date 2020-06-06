(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-detail~requests"],{

/***/ "./src/forms/request-comment-form.schema.js":
/*!**************************************************!*\
  !*** ./src/forms/request-comment-form.schema.js ***!
  \**************************************************/
/*! exports provided: createRequestCommentSchema */
/*! exports used: createRequestCommentSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRequestCommentSchema; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var createRequestCommentSchema = function createRequestCommentSchema() {
  var isDeny = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return {
    fields: [_objectSpread({
      component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_1___default.a.TEXTAREA,
      name: 'comments',
      isRequired: isDeny,
      label: isDeny ? 'Reason' : 'Comment'
    }, isDeny && {
      validate: [{
        type: _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_2___default.a.REQUIRED
      }]
    })]
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
    'request-id': 'id',
    opened: 'created_at',
    requester: 'requester_name',
    status: 'state'
  }[property] || property;
};

var filterQuery = function filterQuery(filterValue) {
  var query = [];

  if (filterValue.name) {
    query.push("filter[name][contains_i]=".concat(filterValue.name));
  }

  if (filterValue.requester) {
    query.push("filter[requester_name][contains_i]=".concat(filterValue.requester));
  }

  if (filterValue.status) {
    filterValue.status.forEach(function (state) {
      query.push("filter[state][eq][]=".concat(state));
    });
  }

  if (filterValue.decision) {
    filterValue.decision.forEach(function (dec) {
      query.push("filter[decision][eq][]=".concat(dec));
    });
  }

  return query.join('&');
};

function fetchRequests() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var pagination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _shared_pagination__WEBPACK_IMPORTED_MODULE_5__[/* defaultSettings */ "a"];
  var persona = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var sortBy = arguments.length > 3 ? arguments[3] : undefined;
  var paginationQuery = "&limit=".concat(Math.max(pagination.limit, 10), "&offset=").concat(pagination.offset);
  var sortQuery = "&sort_by=".concat(sortPropertiesMapper(sortBy.property), ":").concat(sortBy.direction);
  var fetchUrl = "".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_4__[/* APPROVAL_API_BASE */ "a"], "/requests/?").concat(filterQuery(filter)).concat(paginationQuery).concat(sortQuery);
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
  var fetchHeaders = persona && persona !== _shared_helpers__WEBPACK_IMPORTED_MODULE_6__[/* APPROVAL_APPROVER_PERSONA */ "b"] ? {
    'x-rh-persona': persona
  } : {
    'x-rh-persona': _shared_helpers__WEBPACK_IMPORTED_MODULE_6__[/* APPROVAL_REQUESTER_PERSONA */ "c"]
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
    'x-rh-persona': _shared_helpers__WEBPACK_IMPORTED_MODULE_6__[/* APPROVAL_REQUESTER_PERSONA */ "c"]
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
    'x-rh-persona': _shared_helpers__WEBPACK_IMPORTED_MODULE_6__[/* APPROVAL_REQUESTER_PERSONA */ "c"]
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
            if (!(persona === _shared_helpers__WEBPACK_IMPORTED_MODULE_6__[/* APPROVAL_APPROVER_PERSONA */ "b"])) {
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
            return _context.abrupt("return", requestData[0]);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchRequestWithSubrequests.apply(this, arguments);
}

var createRequestAction = function createRequestAction(requestId, actionIn) {
  return actionApi.createAction(requestId, actionIn);
};

/***/ }),

/***/ "./src/redux/actions/request-actions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/request-actions.js ***!
  \**********************************************/
/*! exports provided: fetchRequests, fetchRequest, fetchRequestContent, createRequestAction, expandRequest, sortRequests, setFilterValueRequests, clearFilterValueRequests, resetRequestList */
/*! exports used: clearFilterValueRequests, createRequestAction, expandRequest, fetchRequest, fetchRequestContent, fetchRequests, resetRequestList, setFilterValueRequests, sortRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fetchRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchRequestContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return expandRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sortRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setFilterValueRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearFilterValueRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return resetRequestList; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_request_request_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/request/request-helper */ "./src/helpers/request/request-helper.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");



var fetchRequests = function fetchRequests(persona, pagination) {
  return function (dispatch, getState) {
    var _getState$requestRedu = getState().requestReducer,
        sortBy = _getState$requestRedu.sortBy,
        requests = _getState$requestRedu.requests,
        filterValue = _getState$requestRedu.filterValue;
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
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_REQUESTS */ "i"],
      payload: _helpers_request_request_helper__WEBPACK_IMPORTED_MODULE_1__[/* fetchRequests */ "d"](filterValue, finalPagination, persona, sortBy)
    });
  };
};
var fetchRequest = function fetchRequest(apiProps, persona) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_REQUEST */ "h"],
    payload: _helpers_request_request_helper__WEBPACK_IMPORTED_MODULE_1__[/* fetchRequestWithSubrequests */ "c"](apiProps, persona)
  };
};
var fetchRequestContent = function fetchRequestContent(apiProps, persona) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_REQUEST_CONTENT */ "j"],
    payload: _helpers_request_request_helper__WEBPACK_IMPORTED_MODULE_1__[/* fetchRequestContent */ "b"](apiProps, persona)
  };
};
var createRequestAction = function createRequestAction(actionName, requestId, actionIn) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* CREATE_REQUEST_ACTION */ "c"],
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
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* EXPAND_REQUEST */ "d"],
    payload: id
  };
};
var sortRequests = function sortRequests(sortBy) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* SORT_REQUESTS */ "r"],
    payload: sortBy
  };
};
var setFilterValueRequests = function setFilterValueRequests(filterValue, type) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* SET_FILTER_REQUESTS */ "p"],
    payload: {
      filterValue: filterValue,
      type: type
    }
  };
};
var clearFilterValueRequests = function clearFilterValueRequests() {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* CLEAR_FILTER_REQUESTS */ "b"]
  };
};
var resetRequestList = function resetRequestList() {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* RESET_REQUEST_LIST */ "o"]
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
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_form_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/form-renderer.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_form_renderer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_form_renderer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/component-mapper */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/component-mapper.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/form-template.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _workflow_add_groups_summary_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../workflow/add-groups/summary-content */ "./src/smart-components/workflow/add-groups/summary-content.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var buttonPositioning = {
  "default": {},
  modal: {
    buttonOrder: ['cancel', 'reset', 'save'],
    buttonClassName: 'modal-form-right-align'
  }
};

var componentMapperExtended = _objectSpread({}, _data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_6___default.a, {
  summary: _workflow_add_groups_summary_content__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]
});

var FormRenderer = function FormRenderer(_ref) {
  var formContainer = _ref.formContainer,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["formContainer"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: buttonPositioning[formContainer].buttonClassName
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_data_driven_forms_react_form_renderer_dist_cjs_form_renderer__WEBPACK_IMPORTED_MODULE_5___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    componentMapper: componentMapperExtended,
    FormTemplate: function FormTemplate(props) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, buttonPositioning[formContainer]));
    }
  }, rest)));
};

FormRenderer.propTypes = {
  formContainer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['default', 'modal'])
};
FormRenderer.defaultProps = {
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
  actionType: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  closeUrl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    patname: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    search: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
  })])
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__[/* bindActionCreators */ "a"])({
    addNotification: _redhat_cloud_services_frontend_components_notifications__WEBPACK_IMPORTED_MODULE_9__["addNotification"],
    createRequestAction: _redux_actions_request_actions__WEBPACK_IMPORTED_MODULE_10__[/* createRequestAction */ "b"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, mapDispatchToProps)(ActionModal));

/***/ }),

/***/ "./src/smart-components/workflow/add-groups/summary-content.js":
/*!*********************************************************************!*\
  !*** ./src/smart-components/workflow/add-groups/summary-content.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/Stack.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/Stack.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/StackItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/StackItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title.js */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-form-api.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8__);











var SummaryContent = function SummaryContent() {
  var _useFormApi = _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8___default()(),
      getState = _useFormApi.getState;

  var _getState$values = getState().values,
      name = _getState$values.name,
      description = _getState$values.description,
      wfGroups = _getState$values.wfGroups;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_4__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_7__["Title"], {
    size: "xl"
  }, " Review ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_4__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_4__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_6__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "data-table-detail heading",
    component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h5
  }, "Review and confirm your inputs. If there is anything incorrect, click Back and revise."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_4__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    span: 2
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "data-table-detail heading",
    component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h5
  }, "Name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    span: 10
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "data-table-detail content",
    component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].p
  }, name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    span: 2
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "data-table-detail heading",
    component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h5
  }, "Description")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    span: 10
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "data-table-detail content",
    component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].p
  }, description))), wfGroups && wfGroups.length > 0 && wfGroups.map(function (group, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: group.value
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      gutter: "md"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
      span: 2
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["Text"], {
      className: "data-table-detail heading",
      component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h5
    }, idx === 0 ? 'Groups' : '')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
      span: 10
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["Text"], {
      className: "data-table-detail content",
      component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].p
    }, group.label))));
  }))))));
};

/* harmony default export */ __webpack_exports__["a"] = (SummaryContent);

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