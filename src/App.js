import SetupForm from "./Form/SetupForm";
import Modal from "./Modal/Modal";
import Loading from "./Loading/LoadingScreen";

function App() {
  return (
   <main>
    <section className="quiz">
      <p className="correct-answers"> correct answers: 3</p>
      <article className="container">
        <h2>Text</h2>
        <div className="btn-container"></div>
      </article>
      <button className="next-question">next question</button>
    </section>
   </main>
  );
}

export default App;
