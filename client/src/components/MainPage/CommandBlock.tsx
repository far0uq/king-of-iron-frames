import { directionMapping } from "@constants/directions.constants";
import direction from "@assets/direction.png";
import neutral from "@assets/neutral.png";
import two from "@assets/two.png";
import { INPUTS } from "@constants/inputs.constants";

function CommandBlock({ command }: { command: string }) {
  if (command === INPUTS.NEUTRAL) {
    return (
      <>
        <div>
          <img src={neutral} className="input-block" />
        </div>
      </>
    );
  } else if (command === INPUTS.TWO) {
    return (
      <>
        <div>
          <img src={two} className="input-block" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <img
            src={direction}
            className="input-block"
            style={{ transform: directionMapping[command] }}
          />
        </div>
      </>
    );
  }
}

export default CommandBlock;
