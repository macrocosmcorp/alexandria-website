import Block from '@/components/body';
import Footer from '@/components/footer';
import Header from '../../components/header';


export default function Legal() {
  return (
    <main className="flex flex-col mx-auto max-w-custom h-auto pt-4 px-2">
      <Header />
      <div className="flex flex-col w-full mt-8 mb-16">
        <Block title="Legal" >
          <LegalBlock />
        </Block>
      </div>
      <Footer />
    </main>
  )
}


function LegalBlock() {
  return (
    <div className="w-full px-2 py-1 border-tiny border-lines-soft">
      <p className='text-basesm font-sans font-normal text-letter-default'>
        Website Legal Notice
        <br />        Last updated: May 24, 2023
        <br />
        <br />        PLEASE READ THIS WEBSITE LEGAL NOTICE (&quot;LEGAL NOTICE&quot;) CAREFULLY BEFORE USING THIS WEBSITE.
        <br />
        <br />        1. Agreement
        <br />        By using this website (the &quot;Site&quot;), you are agreeing to be bound by the terms and conditions contained in this Legal Notice. If you do not agree with any of these terms, please do not use our Site.
        <br />
        <br />        2. Intellectual Property Rights
        <br />        The Site and its original content, features, and functionality are owned by [Your Company Name] (&quot;Company,&quot; &quot;we,&quot; &quot;us&quot;) and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        <br />
        <br />        The Company does not claim ownership of the research papers that are made available through the Site. All papers and their contents are the property of their respective owners. The Site is simply a search engine that provides access to research papers hosted on Arxiv.org, and does not host any content itself.
        <br />
        <br />        3. Disclaimers and Limitations
        <br />        We make no representations or warranties about the accuracy, reliability, completeness, or timeliness of any content provided through the Site. Your use of the Site and the content is at your own risk.
        <br />
        <br />        The Site provides links to download files of the research papers embedded into vectors for similarity search. These files are generated automatically and may not always represent the contents of the papers accurately. The Company disclaims all liability for any damages resulting from the use of these files.
        <br />
        <br />        4. User Conduct
        <br />        You agree not to use the Site in any manner that could damage, disable, overburden, or impair the Site or interfere with any other party&apos;s use and enjoyment of the Site.
        <br />
        <br />        5. Links to Other Websites
        <br />        The Site may contain links to third-party websites that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
        <br />
        <br />        6. Changes to This Legal Notice
        <br />        We reserve the right, at our sole discretion, to modify or replace this Legal Notice at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        <br />
        <br />        7. Contact Us
        <br />        If you have any questions about this Legal Notice, please contact us at [Your Contact Information].
        <br />
        <br />        This document was last updated on May 24, 2023.
        <br />      </p>
    </div>
  )
}


