import "./MainPage.css";

export default function MainPage() {
  return (
    <div>
      <header className="iron-frames-header">
        <h1>
          King of <br /> Iron Frames
        </h1>
        <h3>Practice your TEKKEN Just-Frame Inputs!</h3>
      </header>

      <section className="iron-frames-body">
        <select>
          <option value="EWGF">Devil Jin ~ EWGF</option>
        </select>
        <button>Timer</button>
        <button>Controls</button>
      </section>

      <footer>Made by Farouq with ⚡</footer>
    </div>
  );
}
