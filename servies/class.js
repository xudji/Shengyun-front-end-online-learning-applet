"use strict";
const servies_request = require("./request.js");
const getClassList = ({
  pageSize,
  pageNum
}) => {
  return servies_request.$http.request({
    url: "/wechat/class/list",
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
exports.getClassList = getClassList;
