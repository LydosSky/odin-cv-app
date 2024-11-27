import Form from "./Form";

export default function Card({ cardName, children }) {
  return (
    <div className="card">
      <h1>{cardName}</h1>
      <Form>{children}</Form>
    </div>
  );
}
