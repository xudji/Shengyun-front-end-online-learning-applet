"use strict";
const common_vendor = require("../../common/vendor.js");
const QuestionItem = () => "./question-item.js";
const _sfc_main = {
  props: {
    dataList: {
      type: Array,
      default: []
    }
  },
  components: {
    QuestionItem
  }
};
if (!Array) {
  const _component_QuestionItem = common_vendor.resolveComponent("QuestionItem");
  _component_QuestionItem();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.dataList, (item, index, i0) => {
      return {
        a: "1c8fdb83-0-" + i0,
        b: common_vendor.p({
          item
        }),
        c: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1c8fdb83"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/compotent/question/question-commidty.vue"]]);
wx.createComponent(Component);
