import clsx from "clsx";
import Image from 'next/image';
import Logo from "../../public/AlexandriaLogo.svg";


export default function Header() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center mt-12 p-0">
        <Image src={Logo} alt="Alexandria Logo" width={234} height={19} />
      </div>
      <hr className="w-full border-[1px] border-lines-softest mt-2.5 mb-3" />
      <div className="flex flex-row gap-2">
        <PageSelectorButton state={PageSelectorState.Disabled} text="Research" />
        <PageSelectorButton state={PageSelectorState.Disabled} text="Case Law" />
        <PageSelectorButton state={PageSelectorState.Disabled} text="SEC Filings" />
        <PageSelectorButton state={PageSelectorState.Disabled} text="Patents" />
        <PageSelectorButton state={PageSelectorState.Active} text="Download" />
        <PageSelectorButton state={PageSelectorState.Available} text="About Us" />
      </div>
    </div>
  )
}

enum PageSelectorState {
  Disabled,
  Available,
  Active
}

function PageSelectorButton({ state, text }: { state: PageSelectorState, text: string }) {
  const buttonBaseStyle = clsx("flex justify-center items-center w-1/6 h-7 font-sans font-medium gap-1.5")
  const buttonDisabledStyle = clsx("bg-white border-tiny border-lines-soft text-letter-soft cursor-not-allowed")
  const buttonAvailableStyle = clsx("bg-white border-tiny border-lines-dark text-letter-default cursor-pointer")
  const buttonActiveStyle = clsx("bg-white border-tiny border-lines-black text-letter-default cursor-pointer")
  const buttonHoverStyle = clsx("hover:bg-black hover:text-white hover:fill-white hover:border-lines-black")
  let styles = null;
  switch (state) {
    case PageSelectorState.Disabled:
      styles = [buttonDisabledStyle];
      break;
    case PageSelectorState.Available:
      styles = [buttonAvailableStyle, buttonHoverStyle];
      break;
    case PageSelectorState.Active:
      styles = [buttonActiveStyle, buttonHoverStyle];
      break;
  }
  return (
    <div className={clsx(buttonBaseStyle, ...styles)}>
      {text}
      {state === PageSelectorState.Active && <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={8}
      >
        <circle cx={4.1} cy={3.984} r={3.551} />
      </svg>}
    </div>
  )
}
