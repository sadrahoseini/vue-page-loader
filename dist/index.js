/*!
 * sadrix-vue-page-loader v1.0.0
 * (c) sadrix
 * Released under the MIT License.
 */
'use strict';

var vuex = require('vuex');
var vue = require('vue');

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

//
var script = {
  name: 'page-loader',
  props: {
    color: {
      type: String,
      "default": '#2196f3'
    },
    rtl: {
      type: Boolean,
      "default": false
    },
    size: {
      type: Number,
      "default": 3
    }
  },
  computed: Object.assign({
    styles: function styles() {
      return {
        position: 'fixed',
        top: '0',
        right: this.rtl ? '0' : 'inherit',
        left: !this.rtl ? '0' : 'inherit',
        height: this.height + 'px',
        width: this.progress + '%',
        transition: this.transition + 's ease-out',
        backgroundColor: this.color
      };
    }
  }, vuex.mapState({
    active: function active(state) {
      return state.pageLoader.active;
    },
    progress: function progress(state) {
      return state.pageLoader.progress;
    },
    transition: function transition(state) {
      return state.pageLoader.transition;
    }
  })),
  mounted: function mounted() {
    console.log('[sadrix-vue-page-loader]', 'Component loaded!');
  }
};

function render(_ctx, _cache) {
  return vue.withDirectives((vue.openBlock(), vue.createBlock("div", {
    id: "sadrix-page-loader",
    style: _ctx.styles
  }, null, 4 /* STYLE */)), [
    [vue.vShow, _ctx.active]
  ])
}

script.render = render;

var LoaderModule = {
  namespace: true,
  state: {
    active: false,
    progress: 0,
    transition: 3
  },
  getters: {
    page_loader_active: function page_loader_active(state) {
      return state.active;
    },
    page_loader_progress: function page_loader_progress(state) {
      return state.progress;
    },
    page_loader_transition: function page_loader_transition(state) {
      return state.transition;
    }
  },
  actions: {
    'pageLoader/show': function pageLoaderShow(_ref) {
      var state = _ref.state;
      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10000;
      state.active = true;
      state.transition = 0;
      state.progress = 0;
      var interval = setInterval(function () {
        if (state.progress < 20) {
          state.progress += 20;
          state.transition = 3;
        } else if (state.progress < 50) {
          state.progress += 12;
        } else if (state.progress < 70) {
          state.progress += 10;
        } else if (state.progress < 90) {
          state.progress += 7;
        } else if (state.progress < 95) {
          state.progress += 3;
        } else {
          clearInterval(interval);
          return;
        }
      }, timeout / 10);
    },
    'pageLoader/hide': function pageLoaderHide(_ref2) {
      var state = _ref2.state;
      setTimeout(function () {
        state.transition = 0;
        state.progress = 100;
        setTimeout(function () {
          state.active = false;
          state.progress = 0;
        }, 800);
      }, 200);
    }
  }
};

var PageLoader = {
  install: function install(Vue, options) {
    Vue.component('page-loader', script);

    if (!options.hasOwnProperty('customColors')) {
      console.warn('[sadrix-vue-page-loader]', 'For correct registration and kepp useability of this plugin you need to pase app vuex store instance as an option property.');
    } else if (_typeof(options.store) !== 'object') {
      console.warn('[sadrix-vue-page-loader]', 'Option [store] prop should be obeject. You passed [' + _typeof(options.store) + ']');
    } else {
      var store = options.store;
      store.registerModule('pageLoader', LoaderModule);

      Vue.prototype.$showPageLoader = function () {
        var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10000;
        store.dispatch('pageLoader/show', timeout);
      };

      Vue.prototype.$hidePageLoader = function () {
        store.dispatch('pageLoader/hide');
      };

      console.log('[sadrix-vue-page-loader]', 'Installed successfully!');
    }
  }
};

module.exports = PageLoader;
