export default function Spinner() {
  return (
    <div className="block-ui flex items-center justify-center">
      <div className="relative inline-flex">
        <div className="w-10 h-10 bg-[var(--first-color)] rounded-full"></div>
        <div className="w-10 h-10 bg-[var(--first-color-alt)] rounded-full absolute top-0 left-0 animate-ping"></div>
      </div>
    </div>
  );
}
