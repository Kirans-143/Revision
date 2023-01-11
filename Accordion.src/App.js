import React, { useState } from "react";
import "./App.css";
import data from "./data";
import SingleQuestion from "./components/SingleQuestion/SingleQuestion";

export default function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Topic</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}
