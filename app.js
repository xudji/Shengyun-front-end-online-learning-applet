"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/initerview-question/initerview-question.js";
  "./pages/initerview-process/initerview-process.js";
  "./pages/my-contract/my-contract.js";
  "./pages/my-card/my-card.js";
  "./pages/show-contract/show-contract.js";
  "./pages/start-school/start-school.js";
  "./pages/enter-school/enter-school.js";
  "./pages/consulting-help/consulting-help.js";
  "./pages/subject/subject.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
