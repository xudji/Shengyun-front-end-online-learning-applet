"use strict";
const servies_request = require("./request.js");
const excellentList = ({
  pageNum,
  pageSize
}) => {
  return servies_request.$http.request({
    url: "/wechat/excellent/list",
    method: "POST",
    header: {
      "Content-Type": "application/json"
    },
    data: {
      pageNum,
      pageSize
    }
  });
};
const noticeList = ({
  pageNum,
  pageSize
}) => {
  return servies_request.$http.request({
    url: "/wechat/notice/list",
    method: "POST",
    header: {
      "Content-Type": "application/json"
    },
    data: {
      pageNum,
      pageSize
    }
  });
};
exports.excellentList = excellentList;
exports.noticeList = noticeList;
