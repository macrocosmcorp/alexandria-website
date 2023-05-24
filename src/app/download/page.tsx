import clsx from "clsx";
import Header from '../../components/header';
import { MonospaceLabel, MonospaceLink } from '../../components/label';


export default function Download() {
  return (
    <main className="flex flex-col mx-auto max-w-custom h-screen pt-4">
      <Header />
      <div className="flex flex-col w-full mt-8">
        <Block title="Downloads">
          <DownloadsBlock />
        </Block>
        <Block title="Support" margin={8}>
          <AboutBlock />
        </Block>
      </div>
      <Footer />
    </main>
  )
}

function Footer() {
  return (
    <div className="flex flex-col w-full mt-auto mb-2.5">
      <hr className="w-full border-[1px] border-lines-offwhite mb-2" />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1">
          <h3 className="text-sm font-sans font-footer text-[#ccc]">
            THE MACROCOSM CORPORATION
          </h3>
          <h3 className="text-sm font-sans font-footer text-[#ccc]">
            © 2100
          </h3>
        </div>
        <div className="flex flex-row gap-4">
          <h3 className="text-sm font-sans font-footer text-[#ccc]">
            LEGAL
          </h3>
          <h3 className="text-sm font-sans font-footer text-[#ccc]">
            CONTACT
          </h3>
        </div>
      </div>
    </div>
  )
}

function Block({ title, margin, children }: { title: string, margin?: number, children: React.ReactNode }) {
  const marginStyle = margin ? `mt-${margin}` : '';
  return (
    <div className={clsx("flex flex-col w-full", marginStyle)}>
      <h1 className="text-base font-sans font-bold text-letter-default mb-1">{title}</h1>
      {children}
    </div>
  )
}

function AboutBlock() {
  return (
    <div className="w-full px-2 py-1 border-tiny border-lines-soft">
      <p className='text-basesm font-sans font-normal text-letter-default'>
        Help support our initiative by building with our datasets, voting on what you want next, spreading the word about the project, or even donating to help us in our mission to embed the internet. If you’re interested in our work or want to contribute, get in touch!
      </p>
      <p className='text-basesm font-sans font-normal text-letter-soft'>
        PS. Are you a vector database company? Want the future to be built on your platform? We're looking for partners to build Alexandria.
      </p>
    </div>
  )
}

interface DownloadRowProps {
  date: string;
  description: string;
  documents: string;
  size: string;
  link: string;
}

function DownloadRow({ date, description, documents, size, link }: DownloadRowProps) {
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

interface VoteRowProps {
  description: string;
  documents: string;
  size: string;
  link: string;
}

function VoteRow({ description, documents, size, link }: VoteRowProps) {
  return (
    <div className="grid grid-cols-downloadRow text-basesm font-sans font-normal text-letter-default border-b-lines-soft border-b-tiny h-[29px] items-center">
      <div className="pl-1"><MonospaceLabel text="??????" color="grey" width={98} /></div>
      <div className="overflow-hidden overflow-ellipsis whitespace-nowrap pr-1">{description}</div>
      <div><MonospaceLabel text={documents} color="blue" width={98} /></div>
      <div><MonospaceLabel text={size} color="yellow" width={98} /></div>
      <div ><MonospaceLink text="VOTE" color="green" width={98} link={link} /></div>
    </div>
  );
}


function DownloadsBlock() {
  return (
    <div className="w-full border-t-tiny border-x-tiny border-lines-soft">
      <div className="grid grid-cols-downloadRow text-basesm font-sans font-semibold text-letter-dark bg-background-darkgrey border-b-lines-darkest border-b-tiny">
        <div className="pl-2 py-0.5">Timestamp</div>
        <div className="flex-grow py-0.5">Description</div>
        <div className="py-0.5">Documents</div>
        <div className="py-0.5">Size</div>
        <div className="py-0.5">Link</div>
      </div>
      <div className="flex flex-col">
        <DownloadRow
          date="2023-05-04"
          description="All papers on Arxiv.org embedded by title using the InstructorXL model."
          documents="2.3 M"
          size="6.5 GB"
          link="https://drive.google.com/file/d/1-0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing"
        />
        <DownloadRow
          date="2023-05-04"
          description="All papers on Arxiv.org embedded by abstract using the InstructorXL model."
          documents="2.3 M"
          size="7.6 GB"
          link="https://drive.google.com/file/d/1-0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing"
        />
        <div className="flex text-basesm font-sans font-normal text-letter-softest border-b-lines-soft border-b-tiny h-[29px] items-center justify-center pt-0.5">
          ↓ &nbsp; Help us decide what to embed next by voting below! &nbsp; ↓
        </div>
        <VoteRow
          description="All US cases from the Case Law Project using the InstructorXL model."
          documents="36.3 M"
          size="~80 GB"
          link="https://drive.google.com/file/d/1-0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing"
        />
        <VoteRow
          description="All patents on USPTO embedded using the InstructorXL model."
          documents="18.2 M"
          size="~61 GB"
          link="https://drive.google.com/file/d/1-0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing"
        />
        <VoteRow
          description="All of English Wikipedia embedded using the InstructorXL model."
          documents="6.6 M"
          size="~22 GB"
          link="https://drive.google.com/file/d/1-0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing"
        />
        <VoteRow
          description="All repositories on Github using a to-be-determined model."
          documents="3.1 B"
          size="~3.4 TB"
          link="https://drive.google.com/file/d/1-0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing"
        />
        <VoteRow
          description="All major religious texts embedded using the InstructorXL model. "
          documents="50 M"
          size="~20 GB"
          link="https://drive.google.com/file/d/1-0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing"
        />


      </div>
    </div>
  )
}