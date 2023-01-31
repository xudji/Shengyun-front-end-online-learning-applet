"use strict";
const common_vendor = require("../vendor.js");
const _sfc_main = {
  props: ["selected"],
  data() {
    return {
      tabBar: {
        list: [
          {
            pagePath: "/pages/index/index",
            iconPath: "../../static/icons/\u4ED3\u50A8\u4ED3\u5E93.png",
            selectedIconPath: "../../static/icons/\u4ED3\u50A8\u4ED3\u5E93 (1).png",
            text: "\u9996\u9875"
          },
          {
            pagePath: "/pages/initerview-question/initerview-question",
            iconPath: "../../static/icons/\u6587\u6863.png",
            selectedIconPath: "../../static/icons/\u6587\u6863 (1).png",
            text: "\u5237\u9762\u8BD5\u9898"
          },
          {
            pagePath: "/pages/initerview-process/initerview-process",
            iconPath: "../../static/icons/\u5206\u652F.png",
            selectedIconPath: "../../static/icons/\u5206\u652F (1).png",
            text: "\u9762\u8BD5\u6D41\u7A0B"
          },
          {
            pagePath: "/pages/my-contract/my-contract",
            iconPath: "../../static/icons/\u667A\u80FD\u5408\u7EA6.png",
            selectedIconPath: "../../static/icons/\u667A\u80FD\u5408\u7EA6 (1).png",
            text: "\u6211\u7684\u534F\u8BAE"
          },
          {
            pagePath: "/pages/my-card/my-card",
            iconPath: "../../static/icons/\u7528\u6237.png",
            selectedIconPath: "../../static/icons/\u7528\u6237 (1).png",
            text: "\u6211\u7684\u540D\u7247"
          }
        ]
      }
    };
  },
  methods: {
    setSelected(index) {
      common_vendor.index.switchTab({
        url: this.tabBar.list[index].pagePath
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabBar.list, (item, index, i0) => {
      return {
        a: $props.selected == index ? item.selectedIconPath : item.iconPath,
        b: common_vendor.t(item.text),
        c: common_vendor.n($props.selected == index ? "tabbar-list-li-name active" : "tabbar-list-li-name"),
        d: index,
        e: common_vendor.o(($event) => $options.setSelected(index), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ca3cc054"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/common/tabbar/my-tabbar.vue"]]);
wx.createComponent(Component);
