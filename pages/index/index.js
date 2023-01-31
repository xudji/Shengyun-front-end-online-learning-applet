"use strict";
const common_vendor = require("../../common/vendor.js");
const servies_class = require("../../servies/class.js");
require("../../servies/request.js");
const MyTabbar = () => "../../common/tabbar/my-tabbar.js";
const HomeCommodity = () => "../../compotent/index/HomeCommodity.js";
const _sfc_main = {
  data() {
    return {
      selected: 0,
      clientHeight: null,
      homeDate: []
    };
  },
  onLoad() {
    this.__init();
  },
  onReady() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        let info = common_vendor.index.createSelectorQuery().in(this).select(".home-header");
        info.boundingClientRect((data) => {
          console.log(data);
          this.clientHeight = res.windowHeight - data.height - 68;
        }).exec(function(res2) {
        });
      }
    });
  },
  methods: {
    async __init() {
      const data = {
        pageNum: 1,
        pageSize: 10
      };
      const res = await servies_class.getClassList(data);
      console.log(res);
      this.homeDate = res;
    },
    goShowContract() {
      common_vendor.index.navigateTo({
        url: "../show-contract/show-contract"
      });
    }
  },
  components: {
    MyTabbar,
    HomeCommodity
  }
};
if (!Array) {
  const _component_HomeCommodity = common_vendor.resolveComponent("HomeCommodity");
  const _component_MyTabbar = common_vendor.resolveComponent("MyTabbar");
  (_component_HomeCommodity + _component_MyTabbar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goShowContract && $options.goShowContract(...args)),
    b: common_vendor.p({
      homeDate: $data.homeDate
    }),
    c: common_vendor.s("height:" + $data.clientHeight + "px;"),
    d: common_vendor.s("height:" + $data.clientHeight + "px;"),
    e: common_vendor.p({
      selected: $data.selected
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
