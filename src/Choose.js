import React from "react";
import Shopping from "./Shopping";
import Cleaning from "./Cleaning";
import Morning from "./Morning";
import Night from "./Night";

export default function Choose(props) {
  if (props.value) {
    if (props.value === "shopping") {
      return (
        <div>
          <Shopping />
        </div>
      );
    } else if (props.value === "cleaning") {
      return (
        <div>
          <Cleaning />
        </div>
      );
    } else if (props.value === "morning") {
      return (
        <div>
          <Morning />
        </div>
      );
    } else if (props.value === "night") {
      return (
        <div>
          <Night />
        </div>
      );
    }
  } else {
    return null;
  }
}
