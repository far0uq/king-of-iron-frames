import { useState } from "react";
import "@components/MainPage/MainPage.css";
import direction from "@assets/direction.png";
import neutral from "@assets/neutral.png";
import two from "@assets/two.png";
import { movelist } from "@constants/moves.constants";
import { characters } from "@constants/characters.constants";
import { Dropdown } from "@components/MainPage/Dropdown.tsx";

export default function MainPage() {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [selectedMove, setSelectedMove] = useState("");
  console.log(selectedCharacter);

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
            ₹
            <img src={two} className="input-block" />
          </div>
        </section>

        <section className="iron-frames-settings row justify-content-between mx-auto col-12 mt-5">
          <Dropdown
            value={selectedCharacter}
            onChange={setSelectedCharacter}
            options={characters}
            placeholder="Select a character"
            className="col-4"
          />

          <Dropdown
            value={selectedMove}
            onChange={setSelectedMove}
            options={movelist
              .filter((move) => move.associatedCharacter === selectedCharacter)
              .map((move) => ({ value: move.value, label: move.label }))}
            placeholder="Select a move"
            className="col-4"
          />

          <button disabled>Timer</button>
          <button disabled>Controls</button>
        </section>

        <footer className="iron-frames-footer">Made by Farouq with ⚡</footer>
      </div>
    </div>
  );
}
