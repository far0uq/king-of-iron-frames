import CommandBlock from "./CommandBlock";
import type { Input } from "@constants/inputs.constants";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

interface CommandDisplayProps {
  inputNotation: Input[][];
  inputLength: number;
  className?: string;
}

function CommandDisplay({
  inputNotation,
  inputLength,
  className,
}: CommandDisplayProps) {
  const moveContainer = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const children = gsap.utils.toArray(".animate-child");

        gsap.set(children, { opacity: 0, y: 10 });

        gsap.to(children, {
          opacity: 1,
          y: 10,
          duration: 0.5,
          ease: "elastic.out(2,0.1)",
          stagger: 0.06,
          overwrite: "auto",
        });
      }, moveContainer);
      return () => ctx.revert();
    },
    { dependencies: [inputNotation], scope: moveContainer },
  );

  const isBorderVisible = inputNotation.length === 0;
  return (
    <section
      ref={moveContainer}
      className={` flex gap-4 border-2 ${isBorderVisible ? "border-black border-dashed" : "border-transparent"} items-center justify-center rounded ${className}`}
    >
      {inputNotation.length === 0 ? (
        <div>Please Select a Move</div>
      ) : (
        inputNotation.map((inputSet, index) => (
          <CommandBlock
            key={index}
            inputSet={inputSet}
            inputLength={inputLength}
            className="animate-child"
          />
        ))
      )}
    </section>
  );
}

export default CommandDisplay;
