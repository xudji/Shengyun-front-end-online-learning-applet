"use strict";
const common_vendor = require("../../common/vendor.js");
const MyHeader = () => "../../common/my-header/my-header.js";
const _sfc_main = {
  components: {
    MyHeader
  }
};
if (!Array) {
  const _component_MyHeader = common_vendor.resolveComponent("MyHeader");
  const _component_Kregion = common_vendor.resolveComponent("Kregion");
  (_component_MyHeader + _component_Kregion)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "\u586B\u5199\u5165\u5B66\u4FE1\u606F"
    }),
    b: common_vendor.p({
      width: "400",
      height: "40"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-37f8617c"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/pages/enter-school/enter-school.vue"]]);
wx.createPage(MiniProgramPage);
