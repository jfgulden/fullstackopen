import { useState } from "react";

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}
function Statistics({ good, neutral, bad, feedbackSubmitted }) {
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="neutral" value={neutral} />

          <tr>
            <td>average</td>
            <td>{(good - bad) / (good + bad + neutral)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{(good / (good + bad + neutral)) * 100} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleGood = () => {
    setGood(good + 1);
    setFeedbackSubmitted(true);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setFeedbackSubmitted(true);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setFeedbackSubmitted(true);
  };
  const feedback = { good, neutral, bad, feedbackSubmitted };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      {feedbackSubmitted && <Statistics {...feedback} />}
    </div>
  );
}

export default App;
