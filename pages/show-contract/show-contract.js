"use strict";
const common_vendor = require("../../common/vendor.js");
const servies_class = require("../../servies/class.js");
require("../../servies/request.js");
const _sfc_main = {
  data() {
    return {
      clientHeight: null,
      classInfo: null
    };
  },
  onReady() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        let info = common_vendor.index.createSelectorQuery().in(this).select(".contract-header");
        info.boundingClientRect((data) => {
          this.clientHeight = res.windowHeight - data.height;
        }).exec(function(res2) {
        });
        let know = common_vendor.index.createSelectorQuery().in(this).select(".know");
        know.boundingClientRect((data) => {
          this.clientHeight = this.clientHeight - data.height;
        }).exec(function(res2) {
        });
      }
    });
  },
  onLoad() {
    this.__init();
  },
  methods: {
    async __init() {
      const data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      const res = await servies_class.getClassList(data);
      this.classInfo = res;
    },
    goBack() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.classInfo, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.className),
        b: item.classDesc,
        c: item.id
      };
    }),
    b: common_vendor.s("height:" + $data.clientHeight + "px;"),
    c: common_vendor.s("height:" + $data.clientHeight + "px;"),
    d: common_vendor.o((...args) => $options.goBack && $options.goBack(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9f965a7b"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/pages/show-contract/show-contract.vue"]]);
wx.createPage(MiniProgramPage);
