import React from "react";
import { getRequest, postRequest } from "../utils/request";

export default function HomePage(props) {
  const callApi = async () => {
    const data = {
      code: (new Date().getTime() + "").substr(5),
      host: new Date().toUTCString(),
      guest_can_pause: false,
      votes_to_skip: 1,
    };
    console.log(data);
    const response = await postRequest("http://127.0.0.1:8000/api/room", data);
    console.log(response);
  };
  function handleClick(e) {
    e.preventDefault();
    console.log("The button was clicked.");
    callApi();
  }
  return (
    <>
      <h3>Home Page</h3>
      <button onClick={handleClick}>click me ...</button>
    </>
  );
}
