import "./MainPage.css";
import direction from "../assets/direction.png";
import neutral from "../assets/neutral.png";
import two from "../assets/two.png";
import { useState, useEffect } from "react";

let inputNumber = 0;
let keysPressed = {};
const ewgf = [
  {
    input: "ArrowRight",
    delay: -1,
    type: 3,
  },
  {
    input: "ArrowDown",
    delay: 500,
    type: 1,
  },
  {
    input: "ArrowDown",
    delay: 200,
    type: 1,
  },
  {
    input: "ArrowRight",
    delay: 0,
    type: 1,
  },
  {
    input: "2",
    delay: 0,
    type: 2,
  },
];

export default function MainPage() {
  // Conditions for Iron Frames
  const [move, setMove] = useState(ewgf);

  const handleKeyDown = (e) => {
    keysPressed[e.key] = true;

    console.log("Key Pressed: ", e.key);
    if (move[inputNumber].input === e.key) {
      if (move[inputNumber].type === 2) {
        if (
          inputNumber > 0 &&
          keysPressed[move[inputNumber - 1].input] &&
          keysPressed[move[inputNumber].input]
        ) {
          console.log("Correct Input!");
          inputNumber = inputNumber + 1;
        }
      } else {
        console.log("Correct Input!");
        inputNumber = inputNumber + 1;
      }

      if (inputNumber === ewgf.length) {
        console.log("You did it!");
        inputNumber = 0;
      }
    } else {
      inputNumber = 0;
    }
  };

  const handleKeyUp = (e) => {
    delete keysPressed[e.key];
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

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
