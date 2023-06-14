import Block from '@/components/body';
import Footer from '@/components/footer';
import Header from '../../components/header';
import { MonospaceLabel, MonospaceLink } from '../../components/label';

export default function Download() {
  return (
    <main className="flex flex-col mx-auto max-w-custom min-h-screen flex-grow pt-4 px-2">
      <Header />
      <div className="flex flex-col w-full mt-8 mb-10 gap-y-8">
        <Block title="Interactive Projections" >
          <div className="w-full px-2 py-1 border-tiny border-lines-soft" >
            <div className='flex gap-x-2 flex-wrap'>
              <MonospaceLink text="All Islam projected" color="black" width={180} link="https://atlas.nomic.ai/map/13e4a9f6-dbc4-414c-beb0-d42ed3289958/c4f7d21c-15df-4927-8e34-ff86d821001d" />
              <MonospaceLink text="All Christianity projected" color="black" width={240} link="https://atlas.nomic.ai/map/707d769b-f72b-401b-be3b-0a56650cdf49/62eb43e5-cddd-45c7-b661-53c5b2316f79" />
              <MonospaceLink text="All Mormonism projected" color="black" width={210} link="https://atlas.nomic.ai/map/8992e6d2-2ff7-4a53-bcc9-7c8ba962b5c9/79eab75f-11f5-423e-80b9-da3f682bd337" />
            </div>
          </div>
        </Block>
        <Block title="Religious Texts" >
          <DownloadsBlock />
        </Block>
        <Block title="Support" marginBottom={12}>
          <AboutBlock />
        </Block>
      </div>
      <Footer />
    </main>
  )
}

function AboutBlock() {
  return (
    <div className="w-full px-2 py-1 border-tiny border-lines-soft">
      <p className='text-basesm font-sans font-normal text-letter-default'>
        We need your help to embed all religious texts! The biggest bottleneck is the time it takes to properly find the texts, clean them, and format them properly in preparation for embedding. If you&apos;re interested in seeing a specific text, please contribute on Github by helping us find the text, cleaning the document, and formatting it. We&apos;ll take care of the rest. <a className='underline text-blue-600' href="https://github.com/macrocosmcorp/tenet">Visit the Github repository</a>.
      </p>
    </div>
  )
}

interface DownloadRowProps {
  religion: string;
  description: string;
  model: string;
  size: string;
  csvLink: string;
  txtLink: string;
  link: string;
  status?: string;
}

function DownloadRow({ religion, description, model, size, csvLink, txtLink, link, status }: DownloadRowProps) {
  return (
    <div className="grid grid-cols-religionRow text-basesm font-sans font-normal text-letter-default border-b-lines-soft border-b-tiny h-[29px] items-center">
      <div className="pl-1"><MonospaceLabel text={religion} color="grey" width={110} /></div>
      <div className="overflow-hidden overflow-ellipsis whitespace-nowrap pr-1">{description}</div>
      <div><MonospaceLabel text={model} color="blue" width={98} /></div>
      <div><MonospaceLabel text={size} color="yellow" width={98} /></div>
      {status ? (
        <>
          <div className='flex gap-1.5'><MonospaceLink text='CSV' color={status == 'EMBEDDING' ? 'red' : 'lightblack'} width={58} link={status == 'EMBEDDING' ? csvLink : 'https://github.com/macrocosmcorp/tenet'} />
            <MonospaceLink text='TXT' color={status == 'PARSING' || status == 'EMBEDDING' ? 'red' : 'lightblack'} width={58} link={status == 'PARSING' || status == 'EMBEDDING' ? txtLink : 'https://github.com/macrocosmcorp/tenet'} /></div>
          <div>
            <MonospaceLabel text={status} color="grey" width={98} />
          </div>
        </>
      ) : (
        <>
          <div className='flex gap-1.5'><MonospaceLink text='CSV' color="red" width={58} link={csvLink} />
            <MonospaceLink text='TXT' color="red" width={58} link={txtLink} /></div>
          <div>
            <MonospaceLink text="DOWNLOAD" color="green" width={98} link={link} />
          </div>
        </>
      )}
    </div>
  );
}

function DownloadsBlock() {
  return (
    <div className="w-full border-t-tiny border-x-tiny border-lines-soft">
      <div className="grid grid-cols-religionRow text-basesm font-sans font-semibold text-letter-dark bg-background-darkgrey border-b-lines-darkest border-b-tiny">
        <div className="pl-2 py-0.5">Religion</div>
        <div className="flex-grow py-0.5">Description</div>
        <div className="py-0.5">Model</div>
        <div className="py-0.5">Words</div>
        <div className="py-0.5">Full Text</div>
        <div className="py-0.5">Embeddings</div>
      </div>
      <div className="flex flex-col">

        <DownloadRow
          religion="CHRISTIAN"
          description="King James Bible"
          model="Ada-002"
          size="931 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/christianity"
        />
        <DownloadRow
          religion="CHRISTIAN"
          description="Apocrypha"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/christianity"
          status='PARSING'
        />
        <DownloadRow
          religion="CHRISTIAN"
          description="Deutorocanonical Books"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/christianity"
          status='PARSING'
        />
        <DownloadRow
          religion="MORMONISM"
          description="The Book Of Mormon"
          model="Ada-002"
          size="291 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
        />
        <DownloadRow
          religion="ISLAM"
          description="Quran"
          model="Ada-002"
          size="77 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
        />
        <DownloadRow
          religion="ISLAM"
          description="Hadith"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="ISLAM"
          description="Tafsir"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="JUDAISM"
          description="Torah"
          model="Ada-002"
          size="79 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="JUDAISM"
          description="Nevi'im"
          model="Ada-002"
          size="141 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="JUDAISM"
          description="Ketuvim"
          model="Ada-002"
          size="83 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="BUDDHISM"
          description="Pali Canon"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="BUDDHISM"
          description="Mahayana Sutras"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="BUDDHISM"
          description="Tibetan Book of the Dead"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='PARSING'
        />
        <DownloadRow
          religion="HINDUISM"
          description="Vedas"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='PARSING'
        />
        <DownloadRow
          religion="HINDUISM"
          description="Upanishads"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='EMBEDDING'
        />
        <DownloadRow
          religion="HINDUISM"
          description="Bhagavad Gita"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
        />
        <DownloadRow
          religion="RUISM"
          description="Analects of Confucius"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
        />
        <DownloadRow
          religion="RUISM"
          description="Mencius"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="RUISM"
          description="Doctrine of the Mean"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='PARSING'
        />
        <DownloadRow
          religion="RUISM"
          description="Great Learning"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='PARSING'
        />
        <DownloadRow
          religion="BAHA'I"
          description="Kitab-i-Aqdas"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
        />
        <DownloadRow
          religion="BAHA'I"
          description="Kitab-i-Iqan"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="BAHA'I"
          description="The Seven Valleys of Baha'u'llah"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='PARSING'
        />
        <DownloadRow
          religion="TAOISM"
          description="Tao Te Ching"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='CLEANING'
        />
        <DownloadRow
          religion="TAOISM"
          description="Chuang Tzu"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='CLEANING'
        />
        <div className="flex text-basesm font-sans font-normal text-letter-softest border-b-lines-soft border-b-tiny h-[29px] items-center justify-center pt-0.5">
          ↓ &nbsp; Help us add more texts by contributing on Github below! We want all religions represented. &nbsp; ↓
        </div>
      </div>
    </div>
  )
}