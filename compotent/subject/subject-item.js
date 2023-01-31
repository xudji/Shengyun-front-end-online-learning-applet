"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.item.title),
    b: $props.item.answer
  }, $props.item.answer ? {
    c: $props.item.answer
  } : {}, {
    d: $props.item.parsing
  }, $props.item.parsing ? {
    e: $props.item.parsing
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-40880acf"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/compotent/subject/subject-item.vue"]]);
wx.createComponent(Component);
