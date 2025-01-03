import { CircleDot } from "lucide-react";

export default function Week3() {
  const intermediateSteps = [
    { text: "Remix IDE", url: "https://remix.ethereum.org/" },
    { text: "Unit Testing", url: "https://ethereum.org/en/developers/docs/smart-contracts/testing/#unit-testing" },
    { text: "Integration Testing", url: "https://blog.logrocket.com/complete-guide-blockchain-testing/" },
    { text: "Code Coverage in Hardhat", url: "https://medium.com/coinmonks/smart-contract-code-coverage-in-hardhat-d4a5ff6c9ba6" },
    { text: "Deploying Smart Contracts", url: "https://ethereum.org/en/developers/docs/smart-contracts/deploying/" },
    { text: "What are ERC?", url: "https://dev.to/envoy_/ks-what-are-ethereum-request-for-comments-erc-standards-5f80" },
    { text: "ERC-20 Standard", url: "https://ethereum.org/en/developers/docs/standards/tokens/erc-20/" },
    { text: "ERC-721 Standard (NFTs)", url: "https://decrypt.co/resources/erc-721-ethereum-nft-token-standard" },
  ];

  const ethProjects = [
    { text: "Introduction to Solidity", url: "https://www.youtube.com/watch?v=ipwxYa-F1uY" },
    { text: "Solidity + JS: Full Stack Web3 Course", url: "https://www.youtube.com/watch?v=gyMwXuJrbJQ" },
    { text: "Project", url: "https://youtu.be/X1ahXNYkpL8?si=FGn-b8flgrXJL67s" },
  ];

  const solProjects = [
    { text: "Solana Development - Rust", url: "https://youtube.com/playlist?list=PL53JxaGwWUqCr3xm4qvqbgpJ4Xbs4lCs7&si=wA7oy-jvETlOh159" },
    { text: "9 Projects on Solana", url: "https://youtu.be/amAq-WHAFs8?si=gEjtK-Vo2y9J7H7l" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-[#FFA500]">Week 3</div>
        <h2 className="text-2xl font-bold text-white">Development and Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold mb-2 text-orange-500">Intermediate Steps</h3>
          <ul className="space-y-1">
            {intermediateSteps.map((step, index) => (
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
          <h3 className="font-semibold mb-2 text-orange-500">Solidity</h3>
          <ul className="space-y-1">
            {ethProjects.map((step, index) => (
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
          <h3 className="font-semibold mb-2 text-orange-500">Rust (Solana)</h3>
          <ul className="space-y-1">
            {solProjects.map((step, index) => (
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
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <hr className="border-t-2 border-gray-200 my-4" />
      </div>
    </div>
  );
}
