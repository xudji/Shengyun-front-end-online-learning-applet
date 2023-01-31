"use strict";
const common_vendor = require("../common/vendor.js");
const $http = {
  common: {
    baseUrl: "https://fawnuat.xuexiluxian.cn/",
    data: {},
    header: {
      "Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "GET",
    dataType: "json"
  },
  request(options = {}) {
    options.url = this.common.baseUrl + options.url;
    options.data = options.data || this.common.data;
    options.header = options.header || this.common.header;
    options.method = options.method || this.common.method;
    options.dataType = options.dataType || this.common.dataType;
    return new Promise((res, rej) => {
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D"
      });
      common_vendor.index.request({
        ...options,
        success: (result) => {
          if (result.data.resultCode != 200) {
            setTimeout(function() {
              common_vendor.index.hideLoading();
            }, 300);
          }
          setTimeout(function() {
            common_vendor.index.hideLoading();
          }, 300);
          let data = result.data.data;
          if (data) {
            res(data);
          } else {
            res(result.data);
          }
        }
      });
    });
  }
};
exports.$http = $http;
