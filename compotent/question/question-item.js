"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  methods: {
    goDetial(typeId) {
      common_vendor.index.navigateTo({
        url: "../../pages/subject/subject?typeId=" + typeId
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.item.imgUrl,
    b: common_vendor.t($props.item.title),
    c: common_vendor.t($props.item.source),
    d: common_vendor.o(($event) => $options.goDetial($props.item.id))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ed6c5080"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/compotent/question/question-item.vue"]]);
wx.createComponent(Component);
