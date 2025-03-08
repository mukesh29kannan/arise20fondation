import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle=""
        title="Our Vision"
      >
        At Arise 20 Foundation, we envision a future where gender equality is the norm, and women are active participants in all spheres of life. We strive to break down barriers, challenge stereotypes, and create pathways for women to thrive personally and professionally.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Success Stories"
        title=""
      >
        Read inspiring stories of women who have transformed their lives through our programs. From entrepreneurs launching successful businesses to community leaders driving social change, these stories showcase the power of women's empowerment.
      </SectionTitle>

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}

      <SectionTitle
        preTitle=""
        title="Our Programs"
      ></SectionTitle>
      <Testimonials />

      <SectionTitle preTitle="Resources" title="">
          Access our curated collection of articles, guides, and tools designed to support women in various aspects of their lives, including career development, financial management, and personal growth
          <br></br>
          Join us in our mission to empower women and create a more equitable world. Together, we can arise and shine, making a lasting impact on the lives of women and communities worldwide.
      </SectionTitle>

      {/* <Faq /> */}
      {/* <Cta /> */}
    </Container>
  );
}
