import request from "./axios";

export function getGrade() {
  return request({
    method: "get",
    url: "/paper/grade",
  });
}

export function getCourse() {
  return request({
    method: "get",
    url: "/paper/course",
  });
}

export function getChapter() {
  return request({
    method: "get",
    url: "/paper/chapter",
  });
}

export function getKnowledge() {
  return request({
    method: "get",
    url: "/paper/knowledge",
  });
}

export function createQuestion(question) {
  return request({
    method: "post",
    url: "/paper",
    data: question
  });
}

export function getList() {
  return request({
    method: "get",
    url: "/paper",
  });
}

export function remove(number) {
  return request({
    method: "delete",
    url: `/paper/${number}`,
  });
}