import React from "react";

import { forwardRef, useImperativeHandle } from "react";

const resultModal = forwardRef(
  ({ resetTimer, targetTime, remainingtime }, ref) => {
    const dialogRef = React.useRef();
    const loss = remainingtime > 0;
    const formatedTime = (remainingtime / 1000).toFixed(2);
    useImperativeHandle(ref, () => ({
      open: () => {
        dialogRef.current.showModal();
      },
    }));
    const score = Math.round(1 - (remainingtime / (targetTime * 1000)) * 100);
    return (
      <>
        <dialog ref={dialogRef} className="result-modal" onClose={resetTimer}>
          {loss ? <h2>You Lost</h2> : <h2>You Won</h2>}
          <p>your score is {score}</p>

          <p>the targeted time is {targetTime}</p>
          <p>
            you stopped the timer <strong>{formatedTime}</strong>
          </p>
          <form method="dialog" onSubmit={resetTimer}>
            <button>Close</button>
          </form>
        </dialog>
      </>
    );
  }
);

export default resultModal;
