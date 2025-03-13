import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export function Footer() {
  const navigation = [
    { label: "Our Initiatives", id: "our-initiatives" },
    { label: "Get Involved", id: "our-involved" },
    { label: "Our Mission", id: "our-mission" },
    { label: "Our Vision", id: "our-vision" },
    { label: "Objectives & Activities", id: "activities" },
  ];
  
  const legal = [
    { label: "Governance & Financial Management", id: "governance" },
    { label: "Legal & Operational Framework", id: "legal" }
  ];

  return (
    <footer className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
                aria-label="Go to homepage"
              >
                <Image
                  src="/img/logo.png"
                  alt="The Arise20 Foundation Logo"
                  width={32}
                  height={32}
                  className="w-8"
                />
                <span>The Arise{'\''}20 Foundation</span>
              </Link>
            </div>

            <p className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              The Arise{'\''}20 Foundation is a dedicated non-profit organization committed to uplifting social awareness through education, employment, healthcare, and cultural promotion. By fostering social change, providing essential services, and maintaining transparency, the foundation aspires to create a brighter future for disadvantaged communities.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.id}`}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.id}`}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://www.instagram.com/the_arise20_foundation"
                target="_blank"
                rel="noopener"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:thearise20foundation@gmail.com"
                target="_blank"
                rel="noopener"
                aria-label="Send us an email"
              >
                <EnvelopeIcon style={{marginTop:"-3px"}} className="w-7 h-8 mb-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by The arise{'\''}20 foundation
        </div>
      </Container>
    </footer>
  );
}

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

export default Footer;
