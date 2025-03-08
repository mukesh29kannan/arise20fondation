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
  LinkIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

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


export {benefitOne, benefitTwo};
