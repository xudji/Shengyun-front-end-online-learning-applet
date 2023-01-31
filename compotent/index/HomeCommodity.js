"use strict";
const common_vendor = require("../../common/vendor.js");
const HomeItem = () => "./HomeItem.js";
const _sfc_main = {
  props: {
    homeDate: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  components: {
    HomeItem
  }
};
if (!Array) {
  const _component_HomeItem = common_vendor.resolveComponent("HomeItem");
  _component_HomeItem();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.homeDate, (item, index, i0) => {
      return {
        a: "0948ae03-0-" + i0,
        b: common_vendor.p({
          item
        }),
        c: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0948ae03"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/compotent/index/HomeCommodity.vue"]]);
wx.createComponent(Component);
