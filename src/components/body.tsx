import clsx from "clsx";

export default function Block({ title, margin, children }: { title: string, margin?: number, children: React.ReactNode }) {
  const marginStyle = margin ? `mt-${margin}` : '';
  return (
    <div className={clsx("flex flex-col w-full", marginStyle)}>
      <h1 className="text-base font-sans font-bold text-letter-default mb-1">{title}</h1>
      {children}
    </div>
  )
}