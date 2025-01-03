import Week1 from "@/components/weeks/week1";
import Week2 from "@/components/weeks/week2";
import Week3 from "@/components/weeks/week3";
import Week4 from "@/components/weeks/week4";
import Week5 from "@/components/weeks/week5";
import Week6 from "@/components/weeks/week6";
import Week7 from "@/components/weeks/week7";
import { SessionProvider } from "next-auth/react"


export default function home() {
  return (
    <div className="bg-[#1F1F1F]">
    
    <Week1 />
    <Week2 />
    <Week3 />
    <Week4 />
    <Week5 />
    <Week6 />
    <Week7 />
    </div>

  );
}
