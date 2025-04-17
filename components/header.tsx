import Logo from "./logo";

export default function Header() {
  return (
    <header>
      <Logo className="**:fill-current" />
      <div className="flex justify-between font-akira-outline text-fluid-md xs:text-fluid-xl">
        <span>sound</span>
        <span>design</span>
        <span>studio</span>
      </div>
    </header>
  );
}
