"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      mangaList: {
        imgUrl: "../../static/icons/\u7528\u6237\u534F\u8BAE.png",
        name: "\u6211\u7684\u534F\u8BAE"
      },
      signList: {
        imgUrl: "../../static/icons/\u5355\u636E\u7BA1\u7406.png",
        name: "\u7B7E\u7F72\u534F\u8BAE"
      }
    };
  },
  methods: {
    goHelp() {
      common_vendor.index.navigateTo({
        url: "../../pages/consulting-help/consulting-help"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.mangaList.imgUrl,
    b: common_vendor.t($data.mangaList.name),
    c: $data.signList.imgUrl,
    d: common_vendor.t($data.signList.name),
    e: common_vendor.o((...args) => $options.goHelp && $options.goHelp(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2804a59f"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/compotent/start-school/MangaList.vue"]]);
wx.createComponent(Component);
