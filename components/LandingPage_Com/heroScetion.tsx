import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { AnimatedShinyText } from "./AnimatedShinyText";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="bg-black text-white bg-gradient-to-b from-black via-[#200D42] to-[#A46EDB] py-[72px] sm:py-24 relative overflow-hidden max-w-screen mx-auto px-4 pt-20 md:pt-28 text-center h-screen">
            {/* Background Gradient Removed Radial and Added Linear Gradient */}
            <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

            <AnimatedShinyText />
            
            {/* Heading Section */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-6 sm:mb-8 mt-8 max-w-2xl mx-auto">
                From Zero to Hero: <br />
                Learn Blockchain Dev for Free
            </h1>
            
            {/* Content Section */}
            <div className="space-y-6 max-w-2xl mx-auto px-4 sm:px-6">
                <p className="text-center text-sm md:text-xl">
                    Begin your blockchain journey with no upfront cost. No prior experience needed—just a desire to learn!
                </p>
                <div className="flex justify-center">
                    <div className="max-w-3xl">
                        <div className="mb-4">
                            <h2 className="font-semibold text-lg md:text-xl text-center mb-2 mt-8">Why is this free?</h2>
                            <p className="text-sm md:text-lg text-gray-200">
                                We believe learning blockchain should be accessible to everyone. Our mission is to break down barriers and make foundational knowledge available to all, regardless of background or experience.
                            </p>
                        </div>
                        <p className="font-semibold text-lg md:text-xl text-gray-200 text-center mt-8">
                            Start your blockchain education today—no strings attached.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-10 relative z-10">
                <Link href="/resources">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white group z-10 relative">
                        Start Learning Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
