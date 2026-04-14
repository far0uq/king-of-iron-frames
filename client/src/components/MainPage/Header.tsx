import Button from "@components/ui/Button";
import { SECTIONS } from "@constants/ui.constants";
import type { Section } from "@constants/ui.constants";

interface HeaderProps {
  className: string;
  setSelectedSection: (section: Section) => void;
}

function Header({ className, setSelectedSection }: HeaderProps) {
  return (
    <header className={className}>
      <div className="grid grid-flow-row col-span-4">
        <h1 className=" text-4xl font-bold">King of Iron Frames</h1>
        {/* <h3 className=" text-md">Practice your TEKKEN Just-Frame Inputs!</h3> */}
      </div>

      <div className="grid grid-cols-3 gap-8 col-start-10 col-span-3">
        <Button
          onClick={() => setSelectedSection(SECTIONS.PRACTICE)}
          additionalClasses="col-span-1"
        >
          Practice
        </Button>
        <Button
          onClick={() => setSelectedSection(SECTIONS.CONTROLS)}
          additionalClasses="col-span-1"
        >
          Controls
        </Button>
        <Button
          onClick={() => setSelectedSection(SECTIONS.TIMER)}
          additionalClasses="col-span-1"
        >
          Timer
        </Button>
      </div>
    </header>
  );
}

export default Header;
