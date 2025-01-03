import { Check } from "lucide-react";

export function FeaturesSection() {
    return (
        <div className="bg-black text-white py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* Grid layout for larger screens, stack on smaller */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Features Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 sm:mb-12">Features</h2>
                        <ul className="space-y-4">
                            <FeatureItem>100% Free Resources</FeatureItem>
                            <FeatureItem>Curated content from various YouTube creators</FeatureItem>
                            <FeatureItem>Structured learning path for beginners</FeatureItem>
                            <FeatureItem>Focus on practical, industry-relevant skills</FeatureItem>
                            <FeatureItem>No CS degree is required</FeatureItem>
                        </ul>
                    </div>

                    {/* Why These Resources Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 sm:mb-12">Why These Resources?</h2>
                        <ul className="space-y-4">
                            <FeatureItem>Learn the basics for free before investing in expensive courses</FeatureItem>
                            <FeatureItem>Structured approach to web development learning</FeatureItem>
                            <FeatureItem>Aims to help learners earn their first tech salary</FeatureItem>
                            <FeatureItem>Provides a foundation for further specialized learning</FeatureItem>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-center space-x-3 justify-center">
            <Check className="h-5 w-5 flex-shrink-0 text-orange-500" />
            <span>{children}</span>
        </li>
    );
}
