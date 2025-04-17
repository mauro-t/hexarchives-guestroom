export default function Divider({ children }: { children?: React.ReactNode }) {
  return (
    <div className="my-12 flex items-center justify-stretch gap-3 px-3 md:my-32 md:gap-6 md:px-6 lg:my-48">
      <div className="h-px grow bg-current" />
      {children}
      <div className="h-px grow bg-current" />
    </div>
  );
}
