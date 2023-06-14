import clsx from "clsx";
import Link from 'next/link';

const colorStyles = {
  blue: {
    background: "bg-background-blue",
    border: "border-lines-blue",
    text: "text-letter-white",
  },
  yellow: {
    background: "bg-background-yellow",
    border: "border-lines-black",
    text: "text-letter-default",
  },
  grey: {
    background: "bg-background-grey",
    border: "border-lines-black",
    text: "text-letter-default",
  },
  darkgrey: {
    background: "bg-background-darkergrey",
    border: "border-lines-darkest",
    text: "text-letter-default",
  },
  white: {
    background: "bg-background-white",
    border: "border-lines-black",
    text: "text-letter-default",
  },
  red: {
    background: "bg-background-red",
    border: "border-lines-red",
    text: "text-letter-white",
  },
  green: {
    background: "bg-background-green",
    border: "border-lines-green",
    text: "text-letter-white",
  },
  black: {
    background: "bg-background-black",
    border: "border-lines-black",
    text: "text-letter-white",
  },
  lightblack: {
    background: "bg-background-lightblack",
    border: "border-lines-black",
    text: "text-letter-white",
  },
};

interface MonospaceProps {
  text: string;
  color: keyof typeof colorStyles;
  width: number;
}

export const MonospaceLabel = ({ text, color, width }: MonospaceProps) => {
  const { background, border, text: textColor } = colorStyles[color];
  const boxStyle = clsx('inline-flex flex-row items-center leading-4 pb-[1px] justify-center gap-1 border-micro', background, border);
  let textStyle = clsx("text-[14px] font-mono mono-medium", textColor);
  if (textColor === "text-letter-white") {
    textStyle = clsx("text-[14px] font-mono mono-light", textColor);
  }

  return (
    <div className={boxStyle} style={{ width }}>
      <h1 className={textStyle}>{text}</h1>
    </div>
  );
};

export const MonospaceLink = ({ text, color, width, link }: MonospaceProps & { link: string }) => {
  const { background, border, text: textColor } = colorStyles[color];
  const boxStyle = clsx('inline-flex flex-row items-center leading-4 pb-[1px] justify-center gap-1 border-micro mb-[3px]', background, border);
  const textStyle = clsx("text-[13px] font-mono mono-bold", textColor);
  const arrowStyle = clsx("text-[14px] font-sans font-medium", textColor);
  const hoverStyle = clsx("hover:bg-black hover:text-white hover:fill-white hover:border-lines-black")

  return (
    <Link href={link} >
      <div className={clsx(boxStyle, hoverStyle)} style={{ width }}>
        <h1 className={textStyle}>{text}</h1>
        <h1 className={arrowStyle}>{' -> '}</h1>
      </div>
    </Link>
  );
};

