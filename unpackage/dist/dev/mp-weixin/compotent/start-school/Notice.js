"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    noticeList: {
      type: Array,
      default: []
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.noticeList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.noticeTitle),
        b: item.noticeId
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1b5f6bdc"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/compotent/start-school/Notice.vue"]]);
wx.createComponent(Component);
