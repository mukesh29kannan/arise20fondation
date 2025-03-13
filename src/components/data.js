import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  AcademicCapIcon,
  CurrencyRupeeIcon,
  ShieldCheckIcon,
  HeartIcon,
  HandRaisedIcon,
  GiftIcon,
  LinkIcon,
  BookOpenIcon,
  MusicalNoteIcon,
  UserGroupIcon,
  BanknotesIcon,
  ClockIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";
import benefitThreeImg from "../../public/img/hero.png";

const benefitOne = {
  title: "Our Initiatives",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Education and Skill Development",
      desc: "We provide educational opportunities and skill-building programs to women and girls, enabling them to access quality education and develop critical skills for their personal and professional growth.",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Economic Empowerment",
      desc: "Through entrepreneurship training, financial literacy programs, and access to resources, we empower women to achieve economic independence and reduce gender-based economic disparities.",
      icon: <CurrencyRupeeIcon />,
    },
    {
      title: "Leadership and Advocacy",
      desc: "We organize leadership development workshops and advocacy initiatives to enhance women's capacity to be agents of change in their communities and influence policies that promote gender equality.",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Health and Well-being",
      desc: "Our programs focus on improving women's access to healthcare, promoting mental health awareness, and addressing issues specific to women's well-being.",
      icon: <HeartIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Get Involved",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Volunteer",
      desc: "Join our team of dedicated volunteers and contribute your skills and time to our various projects.",
      icon: <HandRaisedIcon />,
    },
    {
      title: "Donate",
      desc: "Your financial support can help us expand our reach and impact more women's lives.",
      icon: <GiftIcon />,
    },
    {
      title: "Partner",
      desc: "We collaborate with organizations, businesses, and individuals who share our vision for women's empowerment.",
      icon: <LinkIcon />,
    },
  ],
};

const benefitThree = {
  title: "Our Mission",
  desc: "",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Unemployment Eradication",
      desc: "To eradicate unemployment by creating skill development and employment opportunities.",
      icon: <CurrencyRupeeIcon />
    },
    {
      title: "Promote Education",
      desc: "To promote education by providing student literacy through cultural performance, awareness programs and learning resources.",
      icon: <BookOpenIcon />
    },
    {
      title: "Women Empowerment",
      desc: "To empower women through self-help groups, vocational training, and employment programs.",
      icon: <HandRaisedIcon />
    },
    {
      title: "Healthcare Support",
      desc: "To offer healthcare support through medical camps, awareness programs, and health facilities.",
      icon: <HeartIcon />
    },
    {
      title: "Support Vulnerable Groups",
      desc: "To support vulnerable groups, including orphans, senior citizens, and differently-abled individuals.",
      icon: <ShieldCheckIcon />
    },
    {
      title: "Preserve Arts & Culture",
      desc: "To preserve Indian arts and culture by encouraging music, dance, and traditional performances.",
      icon: <MusicalNoteIcon />
    },
    {
      title: "Collaborate for Social Welfare",
      desc: "To collaborate with government agencies, NGOs, and private institutions for social welfare initiatives.",
      icon: <LinkIcon />
    },
  ]
};

const governanceAndFinancialManagement = {
  title: "Governance & Financial Management",
  desc: "",
  image: benefitOneImg,  // Add an image if you want
  bullets: [
    {
      title: "Board of Trustees",
      desc: "The Board of Trustees, led by Founder & Managing Trustee, is responsible for managing the trust’s affairs. The board ensures that the trust operates in alignment with its mission, vision, and objectives.",
      icon: <UserGroupIcon /> // Icon representing the board of trustees or leadership
    },
    {
      title: "Financial Sources",
      desc: "The foundation relies on donations, grants, and voluntary contributions from:\n- Individuals\n- Corporate sponsors\n- Government aid\n- Institutional donors",
      icon: <CurrencyRupeeIcon /> // Icon representing financial sources
    },
    {
      title: "Utilization of Funds",
      desc: "All funds are strictly used for charitable activities. No portion of the income is distributed as profit, dividend, or interest to trustees. Annual financial audits ensure transparency and accountability.",
      icon: <ShieldCheckIcon /> // Icon for transparency, audit, and integrity
    },
    {
      title: "Investment & Compliance",
      desc: "Funds are invested as per Section 11(5) of the Income Tax Act, 1961. Investments focus on long-term sustainability while ensuring funds are utilized for social welfare.",
      icon: <BanknotesIcon /> // Icon representing investment and compliance
    },
  ]

};

const legalAndOperationalFramework = {
  title: "Legal & Operational Framework",
  desc: "",
  image: benefitTwoImg,  // Add an image if needed
  bullets: [
    {
      title: "Non-Profit Status",
      desc: "The Arise'20 Foundation is registered as a public charitable trust, ensuring all operations are non-profit and service-oriented.",
      icon: <ShieldCheckIcon /> // Icon representing trust, non-profit, and integrity
    },
    {
      title: "Banking & Administration",
      desc: "The trust maintains bank accounts in nationalized or scheduled banks. Financial transactions are monitored and recorded for transparency.",
      icon: <BanknotesIcon /> // Icon representing banking and financial transactions
    },
    {
      title: "Duration & Dissolution Policy",
      desc: "The trust is irrevocable and will function in perpetuity. If dissolution is necessary, assets will be transferred to another charitable organization with similar objectives.",
      icon: <ClockIcon /> // Icon representing duration or continuity
    },
    {
      title: "Impact & Future Goals",
      desc: "The Arise'20 Foundation aims to raise awareness for the following activities:\n- Expand educational programs to reach more underprivileged students.\n- Strengthen healthcare initiatives through permanent medical aid centers.\n- Increase women’s empowerment projects for greater financial independence.\n- Collaborate with more government and private entities for large-scale impact.",
      icon: <ChartBarSquareIcon /> // Icon representing impact, growth, and goals
    },
  ]
};


export {benefitOne, benefitTwo,benefitThree,governanceAndFinancialManagement,legalAndOperationalFramework};
