import react, {useState} from "react";
//import FetchCard from "./FetchCard";
//import RisizeApp from "./RisizeApp";
import Lifecycle from "./Lifecycle";

function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h1>App Lista</h1>
      <button onClick={() => setShow(!show)} > Show/Hide </button>
      {show && <Lifecycle />}
      {/*<FetchCard />*/}
      {/*show && <RisizeApp />*/}
    </div>
  );
}

export default App;
