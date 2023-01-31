"use strict";
const common_vendor = require("../../common/vendor.js");
const servies_question = require("../../servies/question.js");
require("../../servies/request.js");
const MyHeader = () => "../../common/my-header/my-header.js";
const MyTabbar = () => "../../common/tabbar/my-tabbar.js";
const QuestionCommidty = () => "../../compotent/question/question-commidty.js";
const _sfc_main = {
  data() {
    return {
      selected: 1,
      clientHeight: null,
      pageNum: 1,
      pageSize: 10,
      dataList: []
    };
  },
  onLoad() {
    this.__init();
  },
  onReady() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        let info = common_vendor.index.createSelectorQuery().in(this).select(".question-header");
        info.boundingClientRect((data) => {
          console.log(data);
          this.clientHeight = res.windowHeight - data.height - 68 - 60;
        }).exec(function(res2) {
        });
      }
    });
  },
  methods: {
    async __init() {
      const data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      const res = await servies_question.getQuestionTypeList(data);
      this.dataList = res;
    }
  },
  components: {
    MyHeader,
    MyTabbar,
    QuestionCommidty
  }
};
if (!Array) {
  const _component_MyHeader = common_vendor.resolveComponent("MyHeader");
  const _component_QuestionCommidty = common_vendor.resolveComponent("QuestionCommidty");
  const _component_MyTabbar = common_vendor.resolveComponent("MyTabbar");
  (_component_MyHeader + _component_QuestionCommidty + _component_MyTabbar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      isBack: false,
      title: "\u9762\u8BD5\u9898"
    }),
    b: common_vendor.p({
      dataList: $data.dataList
    }),
    c: common_vendor.s("height:" + $data.clientHeight + "px;"),
    d: common_vendor.s("height:" + $data.clientHeight + "px;"),
    e: common_vendor.p({
      selected: $data.selected
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-66252b65"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/pages/initerview-question/initerview-question.vue"]]);
wx.createPage(MiniProgramPage);
