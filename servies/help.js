"use strict";
const servies_request = require("./request.js");
const getHelpList = ({
  pageNum,
  pageSize
}) => {
  return servies_request.$http.request({
    url: "/wechat/help/list",
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
exports.getHelpList = getHelpList;
