import "./app.scss";
import Btn from "./components/btn-components/btn";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const onJoinClick = () => {
    navigate("/contact");
  };
  return (
    <div className="App">
      <header className="app-header">
        <h1> Ukrainian women who code {"</>"} </h1>
        <p className="qoute">
          Inspires women not to be afraid to change their career and start their
          journey into tech
        </p>
        <Btn
          btnText={"Join the club"}
          theme="secondary"
          onClick={onJoinClick}
        />
      </header>
    </div>
  );
}

export default App;
