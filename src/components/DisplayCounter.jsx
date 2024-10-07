import { useSelector } from "react-redux";

export default function DisplayCounter() {
  const { counterValue } = useSelector((store) => store.counter); //here counter is slice name of slice i.e counterSlice

  return <p className="lead mb-4">Counter Current Value: {counterValue}</p>;
}
