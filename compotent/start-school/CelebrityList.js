"use strict";
const common_vendor = require("../../common/vendor.js");
const Celebrity = () => "./Celebrity.js";
const _sfc_main = {
  props: {
    excellentList: {
      type: Array,
      default: {}
    }
  },
  components: {
    Celebrity
  }
};
if (!Array) {
  const _component_Celebrity = common_vendor.resolveComponent("Celebrity");
  _component_Celebrity();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      datalist: $props.excellentList
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/compotent/start-school/CelebrityList.vue"]]);
wx.createComponent(Component);
