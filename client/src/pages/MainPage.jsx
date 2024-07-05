import "./MainPage.css";
import direction from "../assets/direction.png";
import neutral from "../assets/neutral.png";
import two from "../assets/two.png";

export default function MainPage() {
  return (
    <div className="main-box d-flex align-items-center">
      <div className="container">
        <header className="iron-frames-header row justify-content-center">
          <h1 className="col-7">
            King of <br /> Iron Frames
          </h1>
          <h3 className="col-7">Practice your TEKKEN Just-Frame Inputs!</h3>
        </header>

        <section className="inputs d-flex row justify-content-between col-8 mx-auto mt-5">
          <div>
            <img src={direction} className="input-block" />
          </div>
          <div>
            <img src={neutral} className="input-block" />
          </div>
          <div>
            <img
              src={direction}
              style={{ transform: "rotate(90deg)" }}
              className="input-block"
            />
          </div>
          <div>
            <img
              src={direction}
              style={{ transform: "rotate(45deg)" }}
              className="input-block"
            />
          </div>
          <div>
            <img src={two} className="input-block" />
          </div>
        </section>

        <section className="iron-frames-settings row justify-content-between mx-auto col-8 mt-5">
          <select>
            <option value="EWGF">Devil Jin ~ EWGF</option>
          </select>
          <button>Timer</button>
          <button>Controls</button>
        </section>

        <footer className="iron-frames-footer">Made by Farouq with ⚡</footer>
      </div>
    </div>
  );
}
