"use strict";
const common_vendor = require("../vendor.js");
const _sfc_main = {
  props: {
    title: {
      type: String,
      default: ""
    },
    isBack: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goTo() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.isBack
  }, $props.isBack ? {
    b: common_vendor.o((...args) => $options.goTo && $options.goTo(...args))
  } : {}, {
    c: common_vendor.t($props.title)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ccab0be8"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/common/my-header/my-header.vue"]]);
wx.createComponent(Component);
