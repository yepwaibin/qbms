import request from "./axios";

export function getTask(value) {
  return request({
    method: "post",
    url: "/task",
    data: value,
  });
}
