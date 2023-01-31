"use strict";
const servies_request = require("./request.js");
const getQuestionTypeList = ({
  pageNum,
  pageSize
}) => {
  return servies_request.$http.request({
    url: "/wechat/questions/typeList",
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
const getQuestionList = ({
  pageNum,
  pageSize,
  typeId
}) => {
  return servies_request.$http.request({
    url: "/wechat/questions/list",
    method: "POST",
    header: {
      "Content-Type": "application/json"
    },
    data: {
      pageNum,
      pageSize,
      typeId
    }
  });
};
const getQuestionNum = ({
  typeId
}) => {
  return servies_request.$http.request({
    url: "/wechat/questions/selQuestionNum/" + typeId,
    method: "GET"
  });
};
exports.getQuestionList = getQuestionList;
exports.getQuestionNum = getQuestionNum;
exports.getQuestionTypeList = getQuestionTypeList;
