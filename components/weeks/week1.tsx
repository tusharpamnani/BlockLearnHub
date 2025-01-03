import { CircleDot } from "lucide-react";

export default function Week1() {
  const introductionSteps = [
    { text: "What is Blockchain?", url: "https://www.youtube.com/watch?v=yubzJw0uiE4" },
    { text: "What is Decentralization?", url: "https://www.youtube.com/watch?v=5iesIki27zw" },
    { text: "Blockchain Structure", url: "https://www.coursera.org/lecture/blockchain-basics/blockchain-structure-5rj9Z" },
    { text: "Basic Blockchain Operations", url: "https://www.coursera.org/lecture/blockchain-basics/basic-operations-OxILB" },
    { text: "How Does Bitcoin Actually Work?", url: "https://www.youtube.com/watch?v=bBC-nXj3Ng4" },
    { text: "Use Cases of Blockchain in Industry", url: "https://www.blockchain-council.org/blockchain/top-10-real-world-applications-of-blockchain-technology/" },
  ];

  const intermediateTopics = [
    { text: "Ethereum Consensus Mechanism", url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/" },
    { text: "The Superiority of Cryptographic Truth", url: "https://www.youtube.com/watch?v=AEtBPbmIRKQ" },
    { text: "Blockchain Forking", url: "https://www.youtube.com/watch?v=Bu1GcyyFZ7w" },
    { text: "How Cryptocurrencies Work?", url: "https://www.youtube.com/watch?v=rYQgy8QDEBI" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-[#FFA500]">Week 1</div>
        <h2 className="text-2xl font-bold text-white">Basic Blockchain Knowledge</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2 text-orange-500">Theory</h3>
          <ul className="space-y-1">
            {introductionSteps.map((step, index) => (
              <li key={index}>
                <a
                  href={step.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 group"
                >
                  <span className="mr-2">
                    <CircleDot className="w-4 h-4 text-orange-500" />
                  </span>
                  <span className="text-white group-hover:text-gray-900">{step.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-orange-500">Intermediate Topics</h3>
          <ul className="space-y-1">
            {intermediateTopics.map((topic, index) => (
              <li key={index}>
                <a
                  href={topic.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 group"
                >
                  <span className="mr-2">
                    <CircleDot className="w-4 h-4 text-orange-500" />
                  </span>
                  <span className="text-white group-hover:text-gray-900">{topic.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <hr className="border-t-2 border-gray-200 my-4" />
      </div>
    </div>
  );
}
