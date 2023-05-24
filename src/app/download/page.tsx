import Header from '../../components/header';
import { MonospaceLabel, MonospaceLink } from '../../components/label';

export default function Download() {
  return (
    <main className="flex flex-col mx-auto max-w-custom h-screen p-10">
      <Header />
      <div className="flex flex-col w-full mt-8">
        <Block title="Downloads">
          <DownloadsBlock />
        </Block>
      </div>
    </main>
  )
}

function Block({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-base font-sans font-bold text-letter-default">{title}</h1>
      {children}
    </div>
  )
}

function AlertRow() {
  return (
    <tr className="text-basesm font-sans font-normal text-letter-default border-b-lines-soft border-b-tiny">
      <td className="col-span-5">
        <div style={{ width: '100%' }}>
          Help us decide what to embed next by voting below!
        </div>
      </td>
    </tr>
  )
}

function DownloadRow({ date, description, documents, size, link }: { date: string, description: string, documents: string, size: string, link: string }) {
  return (
    <tr className="text-basesm font-sans font-normal text-letter-default border-b-lines-soft border-b-tiny">
      <td className="w-28 pl-1 h-[29px]">
        <MonospaceLabel text={date} color="grey" width={98} />
      </td>
      <td className="w-full">{description}</td>
      <td className="w-28">
        <MonospaceLabel text={documents} color="blue" width={98} />
      </td>
      <td className="w-28">
        <MonospaceLabel text={size} color="yellow" width={98} />
      </td>
      <td className="w-28">
        <MonospaceLink text="DOWNLOAD" color="red" width={98} link={link} />
      </td>
    </tr>
  )
}

function DownloadsBlock() {
  return (
    <table className="w-full mt-1 border-tiny border-lines-soft text-left">
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
        <DownloadRow
          date="2021-10-01"
          description="All papers on Arxiv.org embedded by title using the InstructorXL model."
          documents="2.3 M"
          size="6.5 GB"
          link="https://drive.google.com/file/d/1-0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing"
        />
        <DownloadRow
          date="2021-10-01"
          description="All papers on Arxiv.org embedded by title using the InstructorXL model."
          documents="2.3 M"
          size="6.5 GB"
          link="https://drive.google.com/file/d/1-0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing"
        />
        <DownloadRow
          date="2021-10-01"
          description="All papers on Arxiv.org embedded by title using the InstructorXL model."
          documents="2.3 M"
          size="6.5 GB"
          link="https://drive.google.com/file/d/1-0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing"
        />
        <DownloadRow
          date="2021-10-01"
          description="All papers on Arxiv.org embedded by title using the InstructorXL model."
          documents="2.3 M"
          size="6.5 GB"
          link="https://drive.google.com/file/d/1-0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing"
        />
        <AlertRow />
      </tbody>
    </table>
  )
}