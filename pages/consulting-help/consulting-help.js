"use strict";
const servies_help = require("../../servies/help.js");
const common_vendor = require("../../common/vendor.js");
require("../../servies/request.js");
const MyHeader = () => "../../common/my-header/my-header.js";
const _sfc_main = {
  data() {
    return {
      dataList: [],
      pageNum: 1,
      pageSize: 10
    };
  },
  components: {
    MyHeader
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
      const res = await servies_help.getHelpList(data);
      this.dataList = res;
    }
  }
};
if (!Array) {
  const _component_MyHeader = common_vendor.resolveComponent("MyHeader");
  _component_MyHeader();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: "\u54A8\u8BE2\u5E2E\u52A9"
    }),
    b: $data.dataList
  }, $data.dataList ? {
    c: common_vendor.f($data.dataList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.phone),
        c: item.id
      };
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-016d14f0"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/pages/consulting-help/consulting-help.vue"]]);
wx.createPage(MiniProgramPage);
