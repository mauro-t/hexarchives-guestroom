import Logo from "./logo";

export default function Header() {
  return (
    <header>
      <Logo className="**:fill-current" />
      <div className="flex justify-between px-3 font-akira-outline text-fluid-md xs:text-fluid-xl md:px-6">
        <span>sound</span>
        <span>design</span>
        <span>studio</span>
      </div>
    </header>
  );
}
