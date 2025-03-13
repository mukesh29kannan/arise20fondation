import { FocusCards } from "@/components/ui/focus-cards";

export default function Events(){
    const cards = [
        {
            title: "Women's Day",
            src: "/img/womensDay.jpeg",
          },
          {
            title: "Nobel World Records",
            src: "/img/nobel.jpeg",
          },
          {
            title: "Celebration",
            src: "/img/goalbing.jpeg",
          },
          {
            title: "Awards",
            src: "/img/award.jpeg",
          },
          {
            title: "Team",
            src: "/img/group.jpeg",
          }
    ]
    return <FocusCards cards={cards} />;
}