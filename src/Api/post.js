import axios from "axios";

export const PostData = data => {
  console.log(data);
  axios.post("http://testinigignite.com/login ", data).then(res => {
    console.log(res);
  });
};
