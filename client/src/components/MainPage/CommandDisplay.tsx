import CommandBlock from "./CommandBlock";

function CommandDisplay() {
  return (
    <section className="inputs d-flex row justify-content-between col-8 mx-auto mt-5">
      <CommandBlock command="up" />
      <CommandBlock command="neutral" />
      <CommandBlock command="right" />
      <CommandBlock command="down-right" />
      <CommandBlock command="two" />
    </section>
  );
}

export default CommandDisplay;
