import Form from "./Form";
import "../styles/card.css";
import { MdExpand, MdOutlineEdit } from "react-icons/md";
import { useState } from "react";

export default function Card({
  selectedWork,
  setSelectedWork,
  selectedEdu,
  setSelectedEdu,
  state,
  setState,
  cardName,
  children,
}) {
  const [isHidden, setHidden] = useState("false");

  function handleToggle() {
    setHidden(!isHidden);
  }

  function handleEdit(idx) {
    switch (cardName) {
      case "Educational Info":
        setSelectedEdu(idx);
        return
      case "Work Experience":
        setSelectedWork(idx);
        return
    }
  }

  function displayEntered() {
    switch (cardName) {
      case "Educational Info":
        return state.map((ed, idx) => (
          <div
            key={crypto.randomUUID()}
            className="card"
            onClick={() => handleEdit(idx)}
          >
            {ed.degree}
            <MdOutlineEdit size={25} />
          </div>
        ));
      case "Work Experience":
        return state.map((work, idx) => (
          <div
            key={crypto.randomUUID()}
            className="card"
            onClick={() => handleEdit(idx)}
          >
            {work.companyname} <MdOutlineEdit size={25} />
          </div>
        ));
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>{cardName}</h2>
        <button onClick={handleToggle}>
          <MdExpand className="card-icon" />
        </button>
      </div>
      {state.length > 0 && (
        <div className="card-entered">{displayEntered()}</div>
      )}
      <Form
        name={cardName}
        setState={setState}
        visibility={isHidden ? null : "hidden"}
      >
        {children}
      </Form>
    </div>
  );
}
