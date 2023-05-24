import Header from '../../components/header';
import { MonospaceLabel, MonospaceLink } from '../../components/label';

export default function Download() {
  return (
    <main className="flex flex-col mx-auto max-w-custom h-screen p-10">
      <Header />
      <div className="flex flex-col w-full mt-8">
        <div>
          <h1 className="text-base font-sans font-bold text-letter-default">Downloads</h1>
          <table className="w-full mt-2 border-tiny border-lines-soft table-fixed text-left">
            <thead>
              <tr className="text-basesm font-sans font-semibold text-letter-default bg-background-darkgrey border-b-lines-darkest border-b-tiny">
                <th className="w-28 pl-2 py-0.5">Timestamp</th>
                <th className="w-full">Description</th>
                <th className="w-28">Documents</th>
                <th className="w-28">Size</th>
                <th className="w-28">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-basesm font-sans font-normal text-letter-default border-b-lines-soft border-b-tiny">
                <td className="w-28 pl-1 h-[29px]">
                  <MonospaceLabel text="2021-10-01" color="grey" width={98} />
                </td>
                <td className="w-full">All papers on Arxiv.org embedded by title using the InstructorXL model.</td>
                <td className="w-28">
                  <MonospaceLabel text="2.3 M" color="blue" width={98} />
                </td>
                <td className="w-28">
                  <MonospaceLabel text="6.5 GB" color="yellow" width={98} />
                </td>
                <td className="w-28">
                  <MonospaceLink text="DOWNLOAD" color="red" width={98} />
                </td>
              </tr>
              <tr className="text-basesm font-sans font-normal text-letter-default border-b-lines-soft border-b-tiny">
                <td className="w-28 pl-1 h-[29px]">
                  <MonospaceLabel text="2021-10-01" color="grey" width={98} />
                </td>
                <td className="w-full">All papers on Arxiv.org embedded by title using the InstructorXL model.</td>
                <td className="w-28">
                  <MonospaceLabel text="2.3 M" color="blue" width={98} />
                </td>
                <td className="w-28">
                  <MonospaceLabel text="6.5 GB" color="yellow" width={98} />
                </td>
                <td className="w-28">
                  <MonospaceLink text="DOWNLOAD" color="red" width={98} />
                </td>
              </tr>
              <tr className="text-basesm font-sans font-normal text-letter-default border-b-lines-soft border-b-tiny">
                <td className="w-28 pl-1 h-[29px]">
                  <MonospaceLabel text="2021-10-01" color="grey" width={98} />
                </td>
                <td className="w-full">All papers on Arxiv.org embedded by title using the InstructorXL model.</td>
                <td className="w-28">
                  <MonospaceLabel text="2.3 M" color="blue" width={98} />
                </td>
                <td className="w-28">
                  <MonospaceLabel text="6.5 GB" color="yellow" width={98} />
                </td>
                <td className="w-28">
                  <MonospaceLink text="DOWNLOAD" color="red" width={98} />
                </td>
              </tr>
              <tr className="text-basesm font-sans font-normal text-letter-default border-b-lines-soft border-b-tiny">
                <td className="w-28 pl-1 h-[29px]">
                  <MonospaceLabel text="2021-10-01" color="grey" width={98} />
                </td>
                <td className="w-full">All papers on Arxiv.org embedded by title using the InstructorXL model.</td>
                <td className="w-28">
                  <MonospaceLabel text="2.3 M" color="blue" width={98} />
                </td>
                <td className="w-28">
                  <MonospaceLabel text="6.5 GB" color="yellow" width={98} />
                </td>
                <td className="w-28">
                  <MonospaceLink text="DOWNLOAD" color="red" width={98} />
                </td>
              </tr>
              <tr className="text-basesm font-sans font-normal text-letter-default border-b-lines-soft border-b-tiny">
                <td className="w-28 pl-1 h-[29px]">
                  <MonospaceLabel text="2021-10-01" color="grey" width={98} />
                </td>
                <td className="w-full">All papers on Arxiv.org embedded by title using the InstructorXL model.</td>
                <td className="w-28">
                  <MonospaceLabel text="2.3 M" color="blue" width={98} />
                </td>
                <td className="w-28">
                  <MonospaceLabel text="6.5 GB" color="yellow" width={98} />
                </td>
                <td className="w-28">
                  <MonospaceLink text="DOWNLOAD" color="red" width={98} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}