import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from 'next/image';

const reviews = [
    {
      "name": "Aarav Patel",
      "username": "@AaravTheDev",
      "body": "This site is a goldmine for anyone looking to get started with blockchain. The resources are top-notch!",
      "img": "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      "name": "Priya Sharma",
      "username": "@Priya_Designs",
      "body": "Finally, a one-stop destination for all things blockchain. Easy to navigate and super helpful.",
      "img": "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      "name": "Rahul Verma",
      "username": "@RahulTechTalk",
      "body": "The tutorials here are straightforward and practical. Highly recommend for anyone diving into Web3.",
      "img": "https://randomuser.me/api/portraits/men/20.jpg"
    },
    {
      "name": "Sneha Kapoor",
      "username": "@Sneha_Learns",
      "body": "The best collection of blockchain guides I've come across. Thank you for making this available!",
      "img": "https://randomuser.me/api/portraits/women/30.jpg"
    },
    {
      "name": "Vikram Choudhary",
      "username": "@VikramCh92",
      "body": "Great resources for developers and enthusiasts alike. The blockchain glossary was especially useful.",
      "img": "https://randomuser.me/api/portraits/men/25.jpg"
    },
    {
      "name": "Anjali Gupta",
      "username": "@AnjaliWrites",
      "body": "Amazing platform for learning blockchain basics and advanced concepts. Five stars from me!",
      "img": "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      "name": "Karan Malhotra",
      "username": "@KaranTech",
      "body": "I've bookmarked this site. The step-by-step tutorials on smart contracts are brilliant.",
      "img": "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      "name": "Meera Nair",
      "username": "@MeeraTheCoder",
      "body": "The best place for blockchain developers to find curated and updated content. Highly recommend.",
      "img": "https://randomuser.me/api/portraits/women/40.jpg"
    },
    {
      "name": "Rohan Das",
      "username": "@RohanD_Dev",
      "body": "Love the detailed examples and use cases provided. This is exactly what I was looking for!",
      "img": "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
      "name": "Simran Kaur",
      "username": "@SimranTheArtist",
      "body": "The design of the site makes it easy to find what you need. Excellent work on the resources!",
      "img": "https://randomuser.me/api/portraits/women/55.jpg"
    }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-200 bg-white hover:bg-gray-50 shadow-lg transition duration-300",
        "dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-md",
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          className="rounded-full"
          width={40}
          height={40}
          alt={`Avatar of ${name}`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-gray-800 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
            @{username}
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        {body}
      </blockquote>
    </figure>
  );
};


export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] md:shadow-xl">
      {/* First Marquee */}
      <Marquee pauseOnHover className="w-full flex gap-6 [--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      
      {/* Second Marquee (Reverse Direction) */}
      <Marquee reverse pauseOnHover className="w-full flex gap-6 [--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Gradient Mask Effect on Sides */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-transparent"></div> */}
    </div>
  );
}
