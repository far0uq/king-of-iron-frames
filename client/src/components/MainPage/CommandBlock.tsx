import { directionMapping } from "@constants/directions.constants";
import direction from "@assets/direction.png";
import neutral from "@assets/neutral.png";
import two from "@assets/two.png";
import one from "@assets/one.png";
import three from "@assets/three.png";
import four from "@assets/four.png";
import { INPUTS } from "@constants/inputs.constants";

const imageMap = {
  [INPUTS.NEUTRAL]: neutral,
  [INPUTS.ONE]: one,
  [INPUTS.TWO]: two,
  [INPUTS.THREE]: three,
  [INPUTS.FOUR]: four,
};

type Props = {
  command: keyof typeof imageMap | string;
};

function CommandBlock({ command }: Props) {
  const isButton = command in imageMap;
  const src = isButton ? imageMap[command as keyof typeof imageMap] : direction;
  const style = isButton ? undefined : { transform: directionMapping[command] };

  return (
    <div>
      <img src={src} className="input-block" style={style} />
    </div>
  );
}

export default CommandBlock;
