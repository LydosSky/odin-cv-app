import Form from "./Form";
import "../styles/card.css";
import { MdExpand } from "react-icons/md";
import { useState } from "react";

export default function Card({ cardName, children }) {
  const [isHidden, sethidden] = useState("false");
  function handleToggle() {
    sethidden(!isHidden);
  }
  return (
    <div className="card">
      <div className="card-header">
        <h2>{cardName}</h2>
        <button onClick={handleToggle}>
          <MdExpand className="card-icon" />
        </button>
      </div>

      <Form visibility={isHidden ? null : "hidden"}>{children}</Form>
    </div>
  );
}
