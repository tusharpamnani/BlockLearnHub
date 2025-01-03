import { CircleDot } from "lucide-react";

export default function Week2() {
  const intro = [
    { text: "What are Crypto wallets?", url: "https://www.youtube.com/watch?v=4PvA7oYDXu8" },
    { text: "Blockchain Storage: IPFS", url: "https://www.youtube.com/watch?v=5Uj6uR3fp-U" },
    { text: "Basics of Cryptography", url: "https://www.youtube.com/watch?v=6_Cxj5WKpIw" },
    { text: "Blockchain Interoperability", url: "https://101blockchains.com/blockchain-interoperability/" },
  ];

  const blockchain = [
    { text: "What is Ethereum?", url: "https://www.youtube.com/watch?v=1Hu8lzoi0Tw" },
    { text: "What is EVM?", url: "https://www.youtube.com/watch?v=sTOcqS4msoU" },
    { text: "What is Solana?", url: "https://www.youtube.com/watch?v=1jzROE6EhxM" },
  ];

  const oracles = [
    { text: "Hybrid Smart Contracts", url: "https://chain.link/education-hub/hybrid-smart-contracts" },
    { text: "What is Chainlink?", url: "https://blog.chain.link/what-is-chainlink/" },
    { text: "Understanding Blockchain Oracles", url: "https://chain.link/education/blockchain-oracles" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-[#FFA500]">Week 2</div>
        <h2 className="text-2xl font-bold text-white">General Blockchain Knowledge</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold mb-2 text-orange-500">Introduction</h3>
          <ul className="space-y-1">
            {intro.map((step, index) => (
              <li key={index}>
                <a
                  href={step.url}
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
          <h3 className="font-semibold mb-2 text-orange-500">Blockchains</h3>
          <ul className="space-y-1">
            {blockchain.map((step, index) => (
              <li key={index}>
                <a
                  href={step.url}
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
          <h3 className="font-semibold mb-2 text-orange-500">Oracles</h3>
          <ul className="space-y-1">
            {oracles.map((step, index) => (
              <li key={index}>
                <a
                  href={step.url}
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
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <hr className="border-t-2 border-gray-200 my-4" />
      </div>
    </div>
  );
}
