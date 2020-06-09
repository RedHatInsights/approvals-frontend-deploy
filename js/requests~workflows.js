(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["requests~workflows"],{

/***/ "./src/presentational-components/shared/table-empty-state.js":
/*!*******************************************************************!*\
  !*** ./src/presentational-components/shared/table-empty-state.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyState.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyState_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_8__);











var TableEmptyState = function TableEmptyState(_ref) {
  var title = _ref.title,
      Icon = _ref.Icon,
      description = _ref.description,
      PrimaryAction = _ref.PrimaryAction,
      renderDescription = _ref.renderDescription;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_8__["EmptyTable"], {
    centered: true,
    "aria-label": "No records"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyState_js__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], {
    className: "pf-u-ml-auto pf-u-mr-auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon_js__WEBPACK_IMPORTED_MODULE_3__["EmptyStateIcon"], {
    icon: Icon
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_7__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_6__["TextVariants"].h1
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody_js__WEBPACK_IMPORTED_MODULE_4__["EmptyStateBody"], null, description, renderDescription && renderDescription()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions_js__WEBPACK_IMPORTED_MODULE_5__["EmptyStateSecondaryActions"], null, PrimaryAction && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrimaryAction, null))));
};

TableEmptyState.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  Icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  PrimaryAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  renderDescription: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["a"] = (TableEmptyState);

/***/ }),

/***/ "./src/presentational-components/shared/table-toolbar-view.js":
/*!********************************************************************!*\
  !*** ./src/presentational-components/shared/table-toolbar-view.js ***!
  \********************************************************************/
/*! exports provided: TableToolbarView */
/*! exports used: TableToolbarView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableToolbarView; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");
/* harmony import */ var _loader_placeholders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_Section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/components/Section */ "./node_modules/@redhat-cloud-services/frontend-components/components/Section.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_Section__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_components_Section__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redhat_cloud_services_frontend_components_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/components/PrimaryToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/components/PrimaryToolbar.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_11__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









/**
 * Need to optimize this component
 * There is 7 renders before first table render
 * Should be just 2 - Loader -> Table
 */

var TableToolbarView = function TableToolbarView(_ref) {
  var isSelectable = _ref.isSelectable,
      createRows = _ref.createRows,
      columns = _ref.columns,
      fetchData = _ref.fetchData,
      toolbarButtons = _ref.toolbarButtons,
      data = _ref.data,
      actionResolver = _ref.actionResolver,
      routes = _ref.routes,
      titlePlural = _ref.titlePlural,
      titleSingular = _ref.titleSingular,
      pagination = _ref.pagination,
      setCheckedItems = _ref.setCheckedItems,
      filterValue = _ref.filterValue,
      onFilterChange = _ref.onFilterChange,
      isLoading = _ref.isLoading,
      onCollapse = _ref.onCollapse,
      renderEmptyState = _ref.renderEmptyState,
      sortBy = _ref.sortBy,
      onSort = _ref.onSort,
      activeFiltersConfig = _ref.activeFiltersConfig,
      filterConfig = _ref.filterConfig;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_9__[/* useIntl */ "c"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      rows = _useState2[0],
      setRows = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setRows(createRows(data));
  }, [data]);

  var setOpen = function setOpen(data, id) {
    return data.map(function (row) {
      return row.id === id ? _objectSpread({}, row, {
        isOpen: !row.isOpen
      }) : _objectSpread({}, row);
    });
  };

  var setSelected = function setSelected(_event, selected, index) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        id = _ref2.id;

    var newData = rows.map(function (row) {
      return row.id === id || index === -1 ? _objectSpread({}, row, {
        selected: index === -1 ? selected : !row.selected
      }) : _objectSpread({}, row);
    });
    var checkedItems = newData.filter(function (item) {
      return item.id && item.selected;
    });
    setCheckedItems(checkedItems);
    return setRows(newData);
  };

  var onCollapseInternal = function onCollapseInternal(_event, _index, _isOpen, _ref3) {
    var id = _ref3.id;
    return onCollapse ? onCollapse(id, setRows, setOpen) : setRows(setOpen(rows, id));
  };

  var paginationConfig = {
    itemCount: pagination.count,
    page: Object(_helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_7__[/* getCurrentPage */ "b"])(pagination.limit, pagination.offset),
    perPage: pagination.limit,
    onSetPage: function onSetPage(_e, page) {
      return fetchData(_objectSpread({}, pagination, {
        offset: Object(_helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_7__[/* getNewPage */ "c"])(page, pagination.limit)
      }));
    },
    onPerPageSelect: function onPerPageSelect(_e, size) {
      return fetchData(_objectSpread({}, pagination, {
        limit: size
      }));
    },
    isDisabled: isLoading
  };

  var renderToolbar = function renderToolbar() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_redhat_cloud_services_frontend_components_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_11__["PrimaryToolbar"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: "pf-u-p-lg ins__approval__primary_toolbar",
      pagination: paginationConfig
    }, toolbarButtons && {
      actionsConfig: {
        actions: [toolbarButtons()]
      }
    }, {
      filterConfig: {
        items: [{
          label: intl.formatMessage({
            id: 'name',
            defaultMessage: 'Name'
          }),
          filterValues: {
            id: 'filter-by-name',
            placeholder: intl.formatMessage({
              id: 'filter-by-name',
              defaultMessage: 'Filter by {title}'
            }, {
              title: titleSingular
            }),
            'aria-label': intl.formatMessage({
              id: 'filter-by-name',
              defaultMessage: 'Filter by {title}'
            }, {
              title: titleSingular
            }),
            onChange: function onChange(_event, value) {
              return onFilterChange(value);
            },
            value: filterValue
          }
        }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(filterConfig))
      },
      activeFiltersConfig: activeFiltersConfig
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_redhat_cloud_services_frontend_components_components_Section__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    type: "content",
    "page-type": "tab-".concat(titlePlural),
    id: "tab-".concat(titlePlural)
  }, routes(), renderToolbar(isLoading), isLoading && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_loader_placeholders__WEBPACK_IMPORTED_MODULE_8__[/* DataListLoader */ "b"], null), !isLoading && rows.length === 0 ? renderEmptyState() : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, !isLoading && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["Table"], {
    "aria-label": "".concat(titlePlural, " table"),
    onCollapse: onCollapseInternal,
    rows: rows,
    cells: columns,
    onSelect: isSelectable && setSelected,
    actionResolver: actionResolver,
    className: "table-fix",
    sortBy: sortBy,
    onSort: onSort
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["TableHeader"], null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["TableBody"], null)), pagination.count > 0 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_redhat_cloud_services_frontend_components_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_11__["PrimaryToolbar"], {
    className: "pf-u-pl-lg pf-u-pr-lg ins__approval__primary_toolbar",
    pagination: _objectSpread({}, paginationConfig, {
      dropDirection: 'up',
      variant: 'bottom',
      isCompact: false
    })
  })));
};
TableToolbarView.propTypes = {
  isSelectable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  createRows: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  toolbarButtons: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  fetchData: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    offset: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    count: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
  }),
  titlePlural: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  titleSingular: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  routes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  actionResolver: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  setCheckedItems: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  filterValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onCollapse: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  renderEmptyState: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  sortBy: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  onSort: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  activeFiltersConfig: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  filterConfig: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array
};
TableToolbarView.defaultProps = {
  requests: [],
  isLoading: false,
  pagination: _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_7__[/* defaultSettings */ "a"],
  isSelectable: null,
  routes: function routes() {
    return null;
  },
  renderEmptyState: function renderEmptyState() {
    return null;
  },
  filterConfig: []
};

/***/ }),

/***/ "./src/smart-components/app-tabs/app-tabs.js":
/*!***************************************************!*\
  !*** ./src/smart-components/app-tabs/app-tabs.js ***!
  \***************************************************/
/*! exports provided: AppTabs */
/*! exports used: AppTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Tabs_Tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Tabs/Tabs.js */ "./node_modules/@patternfly/react-core/dist/js/components/Tabs/Tabs.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Tabs_Tabs_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Tabs_Tabs_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Tabs_Tab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Tabs/Tab.js */ "./node_modules/@patternfly/react-core/dist/js/components/Tabs/Tab.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Tabs_Tab_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Tabs_Tab_js__WEBPACK_IMPORTED_MODULE_4__);





var approvalTabItems = [{
  eventKey: 0,
  title: 'Request queue',
  name: '/requests'
}, {
  eventKey: 1,
  title: 'All requests',
  name: '/allrequests'
}, {
  eventKey: 2,
  title: 'Approval processes',
  name: '/workflows'
}];
var AppTabs = function AppTabs(_ref) {
  var _ref$tabItems = _ref.tabItems,
      tabItems = _ref$tabItems === void 0 ? approvalTabItems : _ref$tabItems;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])(),
      pathname = _useLocation.pathname,
      search = _useLocation.search;

  var activeTab = tabItems.find(function (_ref2) {
    var name = _ref2.name;
    return pathname.includes(name);
  });

  var handleTabClick = function handleTabClick(_event, tabIndex) {
    return history.push({
      pathname: tabItems[tabIndex].name,
      search: search
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Tabs_Tabs_js__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    className: "pf-u-mt-sm",
    activeKey: activeTab ? activeTab.eventKey : 0,
    onSelect: handleTabClick
  }, tabItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Tabs_Tab_js__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
      title: item.title,
      key: item.eventKey,
      eventKey: item.eventKey,
      name: item.name
    });
  }));
};
AppTabs.propTypes = {
  tabItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./src/utilities/async-debounce.js":
/*!*****************************************!*\
  !*** ./src/utilities/async-debounce.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/dist/index.es.js");

/* harmony default export */ __webpack_exports__["a"] = (function (asyncFunction) {
  var debounceTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    onlyResolvesLast: false
  };
  return Object(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(asyncFunction, debounceTime, options);
});

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/requests~workflows.js.map