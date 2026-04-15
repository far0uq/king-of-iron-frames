import { useEffect, useState } from "react";
import CommandDisplay from "@components/MainPage/CommandDisplay.tsx";
import type { Input } from "@constants/inputs.constants";
import OptionBar from "@components/MainPage/OptionBar.tsx";
import Header from "@components/MainPage/Header.tsx";
import CommandHistory from "@components/MainPage/CommandHistory.tsx";
import Footer from "@components/MainPage/Footer.tsx";
import type { Section } from "@constants/ui.constants";
import { SECTIONS } from "@constants/ui.constants";
import ControlBindingsSlider from "@components/MainPage/ControlBindingsSlider.tsx";
import Button from "@components/ui/Button";

export default function MainPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<string>("");
  const [selectedMove, setSelectedMove] = useState<string>("");
  const [inputNotation, setInputNotation] = useState<Input[][]>([]);
  const [inputLength, setInputLength] = useState<number>(0);
  const [selectedSection, setSelectedSection] = useState<Section>(
    SECTIONS.PRACTICE,
  );
  const [activeBinding, setActiveBinding] = useState<Input | null>(null);

  useEffect(() => {
    setSelectedMove("");
    setInputNotation([]);
    setInputLength(0);
  }, [selectedCharacter]);

  return (
    <>
      {activeBinding && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"></div>
      )}
      <div className="h-screen grid grid-flow-row grid-rows-12 gap-6 p-10">
        <Header
          className="row-span-1 grid grid-cols-12 justify-between"
          setSelectedSection={setSelectedSection}
        />

        {selectedSection === SECTIONS.PRACTICE && (
          <div className="row-span-10 grid grid-rows-10 gap-8">
            <OptionBar
              selectedCharacter={selectedCharacter}
              setSelectedCharacter={setSelectedCharacter}
              selectedMove={selectedMove}
              setSelectedMove={setSelectedMove}
              setInputLength={setInputLength}
              setInputNotation={setInputNotation}
              className="row-span-1 grid grid-cols-6 gap-8 bg-gray-50"
            />
            <CommandHistory className="row-span-1 border-b border-t content-center" />
            <CommandDisplay
              inputNotation={inputNotation}
              inputLength={inputLength}
              className="row-span-8"
            />
          </div>
        )}

        {selectedSection === SECTIONS.CONTROLS && (
          <>
            <ControlBindingsSlider
              className="row-span-10 flex flex-col gap-6"
              setActiveBinding={setActiveBinding}
              activeBinding={activeBinding}
            />
          </>
        )}

        {selectedSection === SECTIONS.TIMER && (
          <>
            <div className="row-span-10"></div>
          </>
        )}

        <Footer className="row-span-1 text-center text-sm text-gray-500 content-center" />
      </div>
    </>
  );
}
