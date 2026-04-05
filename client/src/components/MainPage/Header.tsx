interface HeaderProps {
  className: string;
}

function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <h1 className=" text-7xl font-bold">King of Iron Frames</h1>
      <h3 className=" text-xl">Practice your TEKKEN Just-Frame Inputs!</h3>
    </header>
  );
}

export default Header;
