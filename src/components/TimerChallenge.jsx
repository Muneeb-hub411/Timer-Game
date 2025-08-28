import React, { useRef, useState } from "react";
import ResultModal from "./resultModal.jsx"; // Capitalized

const TimerChallenge = ({ title, targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }
  const handleStartChallenge = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevtimeRemaining) => prevtimeRemaining - 10);
    }, 10);
  };

  const handleStopChallenge = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };
  function resetTimer() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        remainingtime={timeRemaining}
        targetTime={targetTime}
        resetTimer={resetTimer}
      />

      <section className="challenge">
        <h2>{title}</h2>
        {timerIsActive && <p>You Lost!!!!</p>}

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""} remaining
        </p>

        <p>
          <button
            onClick={timerIsActive ? handleStopChallenge : handleStartChallenge}
          >
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running" : "Timer is inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
