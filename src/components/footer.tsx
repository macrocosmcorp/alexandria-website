import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col w-full mt-auto mb-3">
      <hr className="w-full border-[1px] border-lines-offwhite mb-2" />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1">
          <h3 className="text-sm font-sans font-footer text-[#ccc]">
            THE MACROCOSM CONSORTIUM
          </h3>
          <h3 className="text-sm font-sans font-footer text-[#ccc]">
            © 2100
          </h3>
        </div>
        <div className="flex flex-row gap-4">
          <Link href="/legal">
            <h3 className="text-sm font-sans font-footer text-[#ccc]">
              LEGAL
            </h3>
          </Link>
          <Link href="mailto:contact@macrocosm.so">
            <h3 className="text-sm font-sans font-footer text-[#ccc]">
              CONTACT
            </h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

