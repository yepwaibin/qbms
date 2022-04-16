import request from "./axios";

export function createCourse(course) {
  return request({
    method: "post",
    url: "/course",
    data: course,
  });
}

export function getCourseList() {
  return request({
    method: "get",
    url: "/course/list",
  });
}

export function removeCourse(Cid) {
  return request({
    method: "delete",
    url: `/course/${Cid}`,
  });
}

export function searchCourse(value) {
  return request({
    method: "post",
    url: `/course/search`,
    data: value,
  });
}
