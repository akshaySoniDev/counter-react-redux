import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import Message from "./components/Message";

function App() {
  const toggle = useSelector((store) => store.toggle);

  return (
    <Container>
      <div className="px-4 py-5 my-5 text-center">
        <Header />
        <div className="col-lg-6 mx-auto">
          {toggle ? <DisplayCounter /> : <Message />}
          <Controls />
        </div>
      </div>
    </Container>
  );
}

export default App;
