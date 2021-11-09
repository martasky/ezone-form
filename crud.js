import { endpoint, headers } from "./settings.js";
import {showThankYou} from "./thankyou.js"

export function post(data, callback) {
  const postData = JSON.stringify(data);
  fetch(endpoint, {
    method: "post",
    headers,
    body: postData,
  })
    .then((res) => res.json())
        .then(() => showThankYou());
}
