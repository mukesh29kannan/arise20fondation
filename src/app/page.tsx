import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitThree, benefitTwo,governanceAndFinancialManagement,legalAndOperationalFramework } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      
      <Benefits data={benefitOne} id="our-initiatives" />
      <Benefits imgPos="right" data={benefitTwo} id="our-invloved" />
      <Benefits data={benefitThree} id="our-mission"/>

      <SectionTitle
        preTitle=""
        title="Our Vision"
        id="our-vision"
      >
       To build an inclusive and self-sufficient social awareness, where education, healthcare, and employment opportunities empower the underprivileged and improve their quality of life.
      </SectionTitle>

      <SectionTitle
        preTitle=""
        title="Objectives & Activities"
        id="activities"
      ></SectionTitle>
      <Testimonials />
      <Benefits data={governanceAndFinancialManagement} id="governance"/>
      <Benefits imgPos="right" data={legalAndOperationalFramework} id="legal" />

      {/* <SectionTitle
        preTitle="Success Stories"
        title=""
      >
        Read inspiring stories of women who have transformed their lives through our programs. From entrepreneurs launching successful businesses to community leaders driving social change, these stories showcase the power of women{'\''}s empowerment.
      </SectionTitle> */}

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}

      
      

      {/* <SectionTitle preTitle="Resources" title="">
          Access our curated collection of articles, guides, and tools designed to support women in various aspects of their lives, including career development, financial management, and personal growth
          <br></br>
          Join us in our mission to empower women and create a more equitable world. Together, we can arise and shine, making a lasting impact on the lives of women and communities worldwide.
      </SectionTitle> */}

      {/* <Faq /> */}
      {/* <Cta /> */}
    </Container>
  );
}
