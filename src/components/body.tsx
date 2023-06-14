import clsx from "clsx";

export default function Block({ title, marginBottom, children }: { title: string, marginBottom?: number, children: React.ReactNode }) {
  const marginStyle = marginBottom ? `mb-${marginBottom}` : '';
  return (
    <div className={clsx("flex flex-col w-full", marginStyle)}>
      <h1 className="text-base font-sans font-bold text-letter-default mb-1">{title}</h1>
      {children}
    </div>
  )
}