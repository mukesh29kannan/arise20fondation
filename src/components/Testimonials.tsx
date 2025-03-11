import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { BookOpenIcon, HandRaisedIcon, HeartIcon, LinkIcon, MusicalNoteIcon, PaintBrushIcon, ShieldCheckIcon, SunIcon } from "@heroicons/react/24/solid";
import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text leading-normal mt-1">
              <Mark>Enhancing productivity</Mark> and wages for rural workers.
            </p>
            <p className="text leading-normal mt-1">
              <Mark>Providing skill training</Mark> for better employment opportunities.
            </p>
            <p className="text leading-normal mt-1">
             Eliminating unemployment and underemployment.
            </p>
            
            <div className="flex">
              <SunIcon className="w-7 h-7 text-indigo-50 mt-8 mr-2"/>
              <Avatar
                image={null}
                name="Rural Development"
                title=""
              />
            </div>
          </div>

        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text leading-normal mt-1">
              Establishing learning centers and libraries for <Mark>enhanced knowledge access</Mark>.
            </p>
            <p className="text leading-normal mt-1">
              Conducting awareness programs on literacy and <Mark>career development</Mark> through dance and learning sources.
            </p>
            <div className="flex">
              <BookOpenIcon className="w-7 h-7 text-indigo-50 mt-8 mr-2"/>
              <Avatar
                image={null}
                name="Educational Support"
                title=""
              />
            </div>
          </div>

        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text leading-normal mt-1">
              <Mark>Supporting self-help groups</Mark> and financial independence projects.
            </p>
            <p className="text leading-normal mt-1">
              Offering vocational training in <Mark>tailoring</Mark>, <Mark>weaving</Mark>, and <Mark>typewriting</Mark>.
            </p>
            <p className="text leading-normal mt-1">
              Establishing women{"'"}s hostels and safe homes.
            </p>
            <div className="flex">
              <HandRaisedIcon className="w-7 h-7 text-indigo-50 mt-8 mr-2"/>
              <Avatar
                image={null}
                name="Women Empowerment"
                title=""
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text leading-normal mt-1">
              Organizing <Mark>medical camps</Mark> for diseases such as cancer, HIV/AIDS, and diabetes.
            </p>
            <p className="text leading-normal mt-1">
              Conducting <Mark>awareness sessions</Mark> on hygiene, sanitation, and preventive healthcare.
            </p>
            <p className="text leading-normal mt-1">
              Implementing government supported <Mark>healthcare programs</Mark>.
            </p>
            <div className="flex">
              <HeartIcon className="w-7 h-7 text-indigo-50 mt-8 mr-2"/>
              <Avatar
                image={null}
                name="Healthcare & Public Awareness"
                title=""
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text leading-normal mt-1">
            <Mark>Raising awareness</Mark> in orphanages, old-age homes, and rehabilitation centers for the needy.
            </p>
            <p className="text leading-normal mt-1">
              Supporting physically and mentally challenged individuals through special programs.
            </p>
            <p className="text leading-normal mt-1">
             Providing <Mark>food</Mark>, <Mark>clothing</Mark>, and <Mark>shelter</Mark> to the homeless and underprivileged.
            </p>
            <div className="flex">
              <ShieldCheckIcon className="w-7 h-7 text-indigo-50 mt-8 mr-2"/>
              <Avatar
                image={null}
                name="Social Welfare & Rehabilitation"
                title=""
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text leading-normal mt-1">
              Encouraging music, dance, drama, and Indian traditional arts.
            </p>
            <p className="text leading-normal mt-1">
              <Mark>Organizing cultural</Mark> events and talent development programs.
            </p>
            <div className="flex">
              <MusicalNoteIcon className="w-7 h-7 text-indigo-50 mt-8 mr-2"/>
              <Avatar
                image={null}
                name="Cultural Promotion"
                title=""
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text leading-normal mt-1">
              <Mark>Partnering</Mark> with NGOs, private organizations, and government bodies for sustainable <Mark>development</Mark> projects.
            </p>
            <p className="text leading-normal mt-1">
              Accepting donations, grants, and voluntary contributions for expanding its impact.
            </p>
            <div className="flex">
              <LinkIcon className="w-7 h-7 text-indigo-50 mt-8 mr-2"/>
              <Avatar
                image={null}
                name="Collaboration & Growth"
                title=""
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text leading-normal mt-1">
            Providing Tamil folk dance <Mark>Gramiya Kalaigal</Mark> training for all age groups, with specialized classes dedicated to students in orphanages.
            </p>
            <p className="text leading-normal mt-1">
              Accepting <Mark>donations</Mark>, <Mark>grants</Mark>, and <Mark>voluntary</Mark> contributions for expanding its impact.
            </p>
            <div className="flex">
              <PaintBrushIcon className="w-7 h-7 text-indigo-50 mt-8 mr-2"/>
              <Avatar
                image={null}
                name="Tamil Folk Art - Gramiya Kalaigal"
                title=""
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text leading-normal mt-1">
              Our programs focus on improving women{"'"}s access to healthcare, promoting mental health awareness, and addressing issues specific to women{"'"}s well-being.
            </p>
            <div className="flex">
              <HeartIcon className="w-7 h-7 text-indigo-50 mt-8 mr-2"/>
              <Avatar
                image={null}
                name="Healthcare Support"
                title=""
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      {props?.image && <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      }
      <div>
        <div className="text-lg font-medium">{props?.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props?.title}</div>
      </div>
    </div>
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
