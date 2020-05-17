import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import TeamSection from '../components/team-section'
import PostTitle from '../components/post-title'
import SectionSeparator from '../components/section-separator'

export default function Team() {
  return (
    <>
      <Layout>
        <Head>
          <title>Team</title>
        </Head>
        <Container>
            <PostTitle>Team</PostTitle>
            <TeamSection picture='assets/blog/authors/chisholm.jpg' name='John Chisholm' twitter='https://twitter.com/johndchisholm'>
                <p>
                John Chisholm has three decades of experience as entrepreneur, CEO, and investor. In 1997 he founded and for a decade served as CEO/Chairman of CustomerSat (now part of Confirmit), a leading provider of enterprise feedback management systems. A pioneer in online marketing research, in 1992 he founded and for five years served as CEO/Chairman of Decisive Technology (now part of Google), publisher of the first desktop and client-server software for online surveys. Earlier he worked for or consulted to GE, HP, Xerox, GRiD Systems, Pyramid Technologies, Ventura Software, and Network Appliance.

                He is past president and chairman of the worldwide MIT Alumni Association and a trustee of MIT and of the Santa Fe Institute. He is a member of the Global Partners Council of the Institute for New Economic Thinking (INET) and serves on the advisory board of the Gruter Institute for Law & Behavioral Research.  He advises entrepreneurs through the MIT Venture Mentoring Service, the Thiel Foundation 20under20 Fellowship, and the Plug and Play Tech Center. He has been a regular contributor to Forbes and chaired the Stanford Institute for the Quantitative Study of Society, one of Stanford’s independent laboratories. He has served on the advisory board of the Network for Teaching Entrepreneurship (NFTE), on the visiting committee of the MIT math department, and on the Market Research Council of the Association for Interactive Media. He is author or co-author of two US patents. He won DEMO God at the DEMO 99 technology business conference.

                He is the author of Unleash Your Inner Company: Use Passion and Perseverance to
                Build Your Ideal Business (Greenleaf, October 2015).  He holds BS & MS degrees in Electrical Engineering & Computer Science from MIT and an MBA from Harvard Business School. An avid mountain climber, he has summited Mounts Rainier, Shasta, Whitney, St. Helens and live volcanoes in Chile & Indonesia.
                </p>
            </TeamSection>
            <SectionSeparator />
            <TeamSection picture='assets/blog/authors/singh.jpg' name='Dickey Singh' twitter='twitter.com/johndchisholm'>
                <p>Dickey Singh has over two decades of technology leadership and entrepreneurship in mobile and SaaS/Cloud, with proven success in engineering, design, product, and operations. He is the CEO and founder of Cast.app, the provider of enterprise reports that you can read, listen, and watch. Previously he was the CEO and Founder of analytics and data exploration company Pyze. He also has served as CTO, or senior vice president of engineering and products, for ViVotech, Replay, MarketTools, CustomerSat, Spear, and Infor.  He delivered a mobile wallet and mobile backend-as-a-service for Mobile Payments at ViVotech. He led the software, operations, and product management teams designing, developing, and releasing CustomerSat™10, an industry-leapfrogging SaaS Enterprise suite whose market success contributed to CustomerSat’s acquisition by MarketTools, now Confirmit.

His nine patent applications encompass virtualization, fraud management, and mobile access of hardware from HTML5/CSS3 pages, and audio-visual reports that can be played like video and interacted with like dashboards.

Earlier, Dickey was director of software development at @Road – a SaaS and fastest-growing company in North America 5 years in a row – now Trimble [NASDAQ: TRMB] where he developed solutions for the mobile resource management industry. He also held management or R&D positions with ERP software supplier Baan Research (now Infor), Nortel Networks, SPSS Inc. [NYSE: IBM], and Tata Consultancy Services. He graduated magna cum laude with BS/BE in Computer Engineering from MIT, University of Pune.  He also has a certification in Artificial Intelligence from MIT, CSAIL/Sloan. His interests include computing, sports cars, and photography.</p>
            </TeamSection>
        </Container>
      </Layout>
    </>
  )
}


