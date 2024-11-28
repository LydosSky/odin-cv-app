import Form from "./Form";

export default function Card({ cardName, children }) {
  return (
    <div className="card">
      <h2>{cardName}</h2>
      <Form>{children}</Form>
    </div>
  );
}
