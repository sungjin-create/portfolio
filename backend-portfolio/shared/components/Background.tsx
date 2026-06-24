export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0">
      <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-zinc-200/40 blur-[140px]" />
    </div>
  );
}