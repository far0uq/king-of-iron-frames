import "./App.css";
import MainPage from "./pages/MainPage.jsx";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color="0,0,0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        outerStyle={{
          border: "2px solid black",
        }}
      />
      <MainPage />
    </div>
  );
}

export default App;
