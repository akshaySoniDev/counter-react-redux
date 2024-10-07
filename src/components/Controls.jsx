import { useRef } from "react";
import { counterActions } from "../store/counter";
import { useDispatch } from "react-redux";
import { toggleActions } from "../store/messageToggle";

export default function Controls() {
  const inputNumber = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdding = () => {
    dispatch(counterActions.add({ number: Number(inputNumber.current.value) }));
    inputNumber.current.value = "";
  };
  const handleSubtracting = () => {
    dispatch(
      counterActions.subtract({ number: Number(inputNumber.current.value) })
    );
    inputNumber.current.value = "";
  };

  const handleToggle = () => {
    dispatch(toggleActions.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4"
          onClick={handleToggle}
        >
          Show/Hide
        </button>
      </div>
      <div
        className="d-grid gap-2 d-sm-flex justify-content-sm-center"
        style={{ marginTop: 10 }}
      >
        <input
          type="number"
          className="form-control"
          placeholder="Enter Number"
          ref={inputNumber}
        />
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleAdding}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtracting}
        >
          Subtract
        </button>
      </div>
    </>
  );
}
