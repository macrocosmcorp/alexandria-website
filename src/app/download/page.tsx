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
    <div className="w-full p-2 text-basesm font-sans font-normal text-letter-default border-b-lines-soft border-b-tiny">
      Help us decide what to embed next by voting below!
    </div>
  );
}

function DownloadRow({ date, description, documents, size, link }) {
  return (
    <div className="grid grid-cols-downloadRow text-basesm font-sans font-normal text-letter-default border-b-lines-soft border-b-tiny h-[29px] items-center">
      <div className="pl-1"><MonospaceLabel text={date} color="grey" width={98} /></div>
      <div className="overflow-hidden overflow-ellipsis whitespace-nowrap pr-1">{description}</div>
      <div><MonospaceLabel text={documents} color="blue" width={98} /></div>
      <div><MonospaceLabel text={size} color="yellow" width={98} /></div>
      <div><MonospaceLink text="DOWNLOAD" color="red" width={98} link={link} /></div>
    </div>
  );
}


function DownloadsBlock() {
  return (
    <div className="w-full mt-1 border-t-tiny border-x-tiny border-lines-soft">
      <div className="grid grid-cols-downloadRow text-basesm font-sans font-semibold text-letter-default bg-background-darkgrey border-b-lines-darkest border-b-tiny">
        <div className="pl-2 py-0.5">Timestamp</div>
        <div className="flex-grow py-0.5">Description</div>
        <div className="py-0.5">Documents</div>
        <div className="py-0.5">Size</div>
        <div className="py-0.5">Link</div>
      </div>
      <div className="flex flex-col">
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
        <DownloadRow
          date="2021-10-01"
          description="All papers on Arxiv.org embedded by title using the InstructorXL model."
          documents="2.3 M"
          size="6.5 GB"
          link="https://drive.google.com/file/d/1-0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing"
        />
      </div>
    </div>
  )
}