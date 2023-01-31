"use strict";
const common_vendor = require("../../common/vendor.js");
const MyTabbar = () => "../../common/tabbar/my-tabbar.js";
const _sfc_main = {
  data() {
    return {
      selected: 3
    };
  },
  components: {
    MyTabbar
  }
};
if (!Array) {
  const _component_MyTabbar = common_vendor.resolveComponent("MyTabbar");
  _component_MyTabbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      selected: $data.selected
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/pages/my-contract/my-contract.vue"]]);
wx.createPage(MiniProgramPage);
