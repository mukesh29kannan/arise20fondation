import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Events from "@/components/Events";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
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
        <SectionTitle
          preTitle=""
          title="Moments from Our Events"
          id="moments"
        ></SectionTitle>
        <Events/>
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
        <SectionTitle preTitle="Contact" title="For Donation" id="donation">
        <p className="text leading-normal mt-1">
          Isravel M <Mark>{"(Founder)"}</Mark>
        </p>
        <p className="text leading-normal mt-1">
          2nd Floor, V.V Shopping Plaza, Opp. Alagapuram Police Station, Salem 636004
        </p>

        <div className="flex flex-col sm:flex-row sm:gap-6 mt-3">
          <a
            href="tel:+919025720321"
            className="flex items-center gap-2 text-indigo-500 mb-3 sm:mb-0"
          >
            <PhoneIcon className="w-5 h-5 text-indigo-500" />
            9025720321
          </a>
          <a
            href="mailto:thearise20foundation@gmail.com"
            className="flex items-center gap-2 text-indigo-500 mb-3 sm:mb-0"
          >
            <EnvelopeIcon className="w-5 h-5 text-indigo-500" />
            thearise20foundation@gmail.com
          </a>
          <a
            href="https://www.google.com/maps/dir//VV+Shopping+Plaza,+Police+Station,+V.V+Shopping+Plaza,+near+2nd,+opp.+Alagapuram,+Salem,+Tamil+Nadu+636005/@11.6765643,78.0595924,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3babf15c48464e1d:0x1553fbc4e8c60492!2m2!1d78.1419943!2d11.676576?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoASAFQAw%3D%3D"
            className="flex items-center gap-2 text-indigo-500"
          >
            <MapPinIcon className="w-5 h-5 text-indigo-500" />
            location
          </a>
        </div>
      </SectionTitle>

      </Container>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}