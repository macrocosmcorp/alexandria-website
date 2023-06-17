import Block from '@/components/body';
import Footer from '@/components/footer';
import Header from '../../components/header';
import { MonospaceLabel, MonospaceLink } from '../../components/label';

export default function Download() {
  return (
    <main className="flex flex-col mx-auto max-w-custom min-h-screen flex-grow pt-4 px-2">
      <Header />
      <div className="flex flex-col w-full mt-8 mb-10 gap-y-8">
        <Block title="Live Demo" >
          <div className="w-full px-2 py-1 border-tiny border-lines-soft">
            <p className='text-basesm font-sans font-normal text-letter-default'>
              We just launched a live demo where you can talk, ask questions to, and search all religious texts! Check it out: <a className='underline text-blue-600' href="https://tensor.church">tensor.church</a>.
            </p>
          </div>
        </Block>
        <Block title="Interactive Maps by Nomic.ai" >
          <div className="w-full px-2 py-1 border-tiny border-lines-soft" >
            <div className='flex gap-x-2 flex-wrap'>
              <MonospaceLink text="All Islam projected" color="grey" width={180} link="https://atlas.nomic.ai/map/f2e49a6d-94ce-4acd-b7c6-cccc79ea4e87/8fc3111a-8e9e-443f-bee3-2f50275ce0f4" />
              <MonospaceLink text="All Christianity projected" color="grey" width={240} link="https://atlas.nomic.ai/map/4ea87eb9-284c-4260-af1c-2cabdff3ae3a/ae5c19ab-156e-46ad-a731-3f6c45d9b334" />
              <MonospaceLink text="All Mormonism projected" color="grey" width={210} link="https://atlas.nomic.ai/map/fcc613a1-c1a6-4d97-9c4a-5ad704d9b1bb/65a9d60c-91fa-482a-9339-6fcab580056c" />
              <MonospaceLink text="All Hinduism projected" color="grey" width={210} link="https://atlas.nomic.ai/map/4c30a04a-2da9-4729-8c0a-fdf63205a5ae/45926592-e6c1-49f1-83f8-8cc4af7a6ffe" />
              <MonospaceLink text="All Bahai projected" color="grey" width={210} link="https://atlas.nomic.ai/map/22f6f9f5-511d-4f7d-a101-5affb3977b12/107dfa9a-8908-4979-a3b7-f97a5f445c9f" />
              <MonospaceLink text="All Confucianism projected" color="grey" width={240} link="https://atlas.nomic.ai/map/ea1aeae9-1ac6-4c01-9f54-29731dde208d/58b846eb-39b6-43df-bd55-50dbde2a9423" />
              <MonospaceLink text="All religions projected" color="grey" width={210} link="https://atlas.nomic.ai/map/143fd480-7efd-419b-becf-a28a5e0c796d/27a7375f-5e55-4165-af41-0b0db13587b1" />
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
          size="859 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/christianity/christianity_kjv_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/christianity/CLEAN_kjv.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/king_james_bible_embeddings"
        />
        <DownloadRow
          religion="CHRISTIAN"
          description="Apocrypha"
          model="Ada-002"
          size="21 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/christianity/christianity_apodat_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/christianity/CLEAN_apodat.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/christianity_apodat_embeddings"
        />
        <DownloadRow
          religion="CHRISTIAN"
          description="Deutorocanonical Books"
          model="Ada-002"
          size="15 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/christianity/christianity_deut_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/christianity/CLEAN_deut.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/christianity_deut_embeddings"
        />
        <DownloadRow
          religion="MORMONISM"
          description="The Book Of Mormon"
          model="Ada-002"
          size="289 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/mormon_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/mormon/CLEAN_book_of_mormon.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/book_of_mormon_embeddings"
        />
        <DownloadRow
          religion="ISLAM"
          description="Quran"
          model="Ada-002"
          size="174 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/islam/quran_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/islam/CLEAN_quran.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/quran_embeddings"
        />
        <DownloadRow
          religion="ISLAM"
          description="Hadith"
          model="Ada-002"
          size="71 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/islam/hadith.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/islam/CLEAN_The-Complete-Hadith.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/hadith_embeddings"
        />
        <DownloadRow
          religion="ISLAM"
          description="Tafsir"
          model="Ada-002"
          size="??? K"
          csvLink=""
          txtLink=""
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="JUDAISM"
          description="Torah"
          model="Ada-002"
          size="79 K"
          csvLink=""
          txtLink=""
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="JUDAISM"
          description="Nevi'im"
          model="Ada-002"
          size="141 K"
          csvLink=""
          txtLink=""
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="JUDAISM"
          description="Ketuvim"
          model="Ada-002"
          size="83 K"
          csvLink=""
          txtLink=""
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="BUDDHISM"
          description="Pali Canon"
          model="Ada-002"
          size="2.7 M"
          csvLink=""
          txtLink=""
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="BUDDHISM"
          description="Lankavatara Sutra"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/buddhism/lankavatara_paragraphs.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/buddhism/CLEAN_Lankavatara_Sutra.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/buddhism_embeddings"
        />
        <DownloadRow
          religion="BUDDHISM"
          description="Lotus Sutra"
          model="Ada-002"
          size="??? K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/buddhism/lotus_pages.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/buddhism/CLEAN_Lotus_Sutra.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/buddhism_embeddings"
        />
        <DownloadRow
          religion="BUDDHISM"
          description="Mahayana Sutras"
          model="Ada-002"
          size="??? K"
          csvLink=""
          txtLink=""
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="BUDDHISM"
          description="Tibetan Book of the Dead"
          model="Ada-002"
          size="29 K"
          csvLink=""
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/buddhism/CLEAN_book-of-the-dead.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='PARSING'
        />
        <DownloadRow
          religion="HINDUISM"
          description="Vedas"
          model="Ada-002"
          size="??? K"
          csvLink=""
          txtLink=""
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'  // sourcing until it's in the repos
        />
        <DownloadRow
          religion="HINDUISM"
          description="Upanishads"
          model="Ada-002"
          size="113 K"
          csvLink="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/hinduism/upanishads"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/hinduism/CLEAN_Bhagavad_Gita.txt" // <--- this is actually where I parsed the upanishads from --brent
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='EMBEDDING'
        />
        <DownloadRow
          religion="HINDUISM"
          description="Bhagavad Gita"
          model="Ada-002"
          size="19 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/hinduism/bhagavad_gita_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/hinduism/CLEAN_JustBhagavadGita.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/gita_embeddings"
        />
        <DownloadRow
          religion="RUISM"
          description="Analects of Confucius"
          model="Ada-002"
          size="27 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/confuscianism/analects_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/confuscianism/CLEAN_analects_confuscious.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/analects_embeddings"
        />
        <DownloadRow
          religion="RUISM"
          description="Mencius"
          model="Ada-002"
          size="??? K"
          csvLink=""
          txtLink=""
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="RUISM"
          description="Doctrine of the Mean"
          model="Ada-002"
          size="7 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/confuscianism/confucianism_doctrine_of_the_mean_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/confuscianism/CLEAN_doctmean_confucius.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/doctrine_of_the_mean_embeddings"
        />
        <DownloadRow
          religion="RUISM"
          description="Great Learning"
          model="Ada-002"
          size="3 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/confuscianism/confucianism_great_learning_verses.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/confuscianism/CLEAN_learning_confucius.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/confucianism_great_learning_embeddings"
        />
        <DownloadRow
          religion="BAHA'I"
          description="Kitab-i-Aqdas"
          model="Ada-002"
          size="19 K"
          csvLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/bahai/kitab_bahaullah_paragraphs.csv"
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/bahai/CLEAN_kitab_bahaullah.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/embeddings/kitab_embeddings"
        />
        <DownloadRow
          religion="BAHA'I"
          description="Kitab-i-Iqan"
          model="Ada-002"
          size="50 K"
          csvLink=""
          txtLink=""
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <DownloadRow
          religion="BAHA'I"
          description="The Seven Valleys of Baha'u'llah"
          model="Ada-002"
          size="11 K"
          csvLink=""
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/bahai/CLEAN_seven_valleys_bahullah.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='PARSING'
        />
        <DownloadRow
          religion="TAOISM"
          description="Tao Te Ching"
          model="Ada-002"
          size="10 K"
          csvLink=""
          txtLink="https://raw.githubusercontent.com/macrocosmcorp/tenet/main/religious-texts/taoism/CLEAN_taote_laotzu.txt"
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='PARSING'
        />
        <DownloadRow
          religion="TAOISM"
          description="Chuang Tzu"
          model="Ada-002"
          size="??? K"
          csvLink=""
          txtLink=""
          link="https://github.com/macrocosmcorp/tenet/tree/main/religious-texts/mormon"
          status='SOURCING'
        />
        <div className="flex text-basesm font-sans font-normal text-letter-softest border-b-lines-soft border-b-tiny h-[29px] items-center justify-center pt-0.5">
          ↓ &nbsp; Help us add more texts by contributing on Github below! We want all religions represented. &nbsp; ↓
        </div>
      </div>
    </div>
  )
}