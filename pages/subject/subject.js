"use strict";
const common_vendor = require("../../common/vendor.js");
const servies_question = require("../../servies/question.js");
require("../../servies/request.js");
const MyHeader = () => "../../common/my-header/my-header.js";
const SubjectItem = () => "../../compotent/subject/subject-item.js";
const _sfc_main = {
  data() {
    return {
      clientHeight: 0,
      typeId: 0,
      toSwiper: []
    };
  },
  onLoad(options) {
    this.typeId = options.typeId;
    this.__init();
    this.getTotal();
  },
  methods: {
    async getTotal() {
      const data = {
        typeId: this.typeId
      };
      const res = await servies_question.getQuestionNum(data);
      console.log("\u603B\u6761\u6570", res);
    },
    async __init() {
      const data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        typeId: this.typeId
      };
      const res = await servies_question.getQuestionList(data);
      this.toSwiper = res;
    },
    getClientHeight() {
      const res = common_vendor.index.getSystemInfo();
      return res.statusBarHeight;
    }
  },
  onReady() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        this.clientHeight = res.windowHeight - this.getClientHeight();
        let dots = common_vendor.index.createSelectorQuery().in(this).select(".dots");
        dots.boundingClientRect((data) => {
          this.clientHeight = this.clientHeight - data.height;
        }).exec(function(res2) {
        });
        let info = common_vendor.index.createSelectorQuery().in(this).select(".subject-check");
        info.boundingClientRect((data) => {
          this.clientHeight = this.clientHeight - data.height;
        }).exec(function(res2) {
        });
      }
    });
  },
  components: {
    MyHeader,
    SubjectItem
  }
};
if (!Array) {
  const _component_MyHeader = common_vendor.resolveComponent("MyHeader");
  const _component_SubjectItem = common_vendor.resolveComponent("SubjectItem");
  (_component_MyHeader + _component_SubjectItem)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "\u5237\u9898",
      isBack: "true"
    }),
    b: common_vendor.f($data.toSwiper, (item, index, i0) => {
      return {
        a: "6db47ac1-1-" + i0,
        b: common_vendor.p({
          item
        }),
        c: index
      };
    }),
    c: common_vendor.s("height:" + $data.clientHeight + "px;"),
    d: common_vendor.s("height:" + 1e3 + "px;")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6db47ac1"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/pages/subject/subject.vue"]]);
wx.createPage(MiniProgramPage);
