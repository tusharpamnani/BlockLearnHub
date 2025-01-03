import { CircleDot } from "lucide-react";

export default function Week4() {
  const introductionSteps = [
    { text: "Hardhat", url: "https://www.youtube.com/watch?v=GBc3lBrXEBo" },
    { text: "Truffle", url: "https://www.youtube.com/watch?v=62f757RVEvU" },
    { text: "Foundry", url: "https://www.youtube.com/watch?v=fNMfMxGxeag" },
  ];

  const clientLib = [
    { text: "Ethers.js", url: "https://www.youtube.com/watch?v=yk7nVp5HTCk" },
    { text: "Web3.js", url: "https://youtube.com/playlist?list=PLS5SEs8ZftgXlCGXNfzKdq7nGBcIaVOdN&si=Z-Sp3A2IoeRLQ1mC" },
  ];

  const applicability = [
    { text: "DeFi", url: "https://www.youtube.com/watch?v=17QRFlml4pA" },
    { text: "What are DAOs and how do they work?", url: "https://consensys.io/blog/what-is-a-dao-and-how-do-they-work" },
    { text: "NFTs", url: "https://www.youtube.com/watch?v=NNQLJcJEzv0&feature=youtu.be" },
    { text: "Payments", url: "https://blog.chain.link/smart-contract-use-cases/#external-payments" },
    { text: "Insurance", url: "https://blog.chain.link/smart-contract-use-cases/#insurance" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-[#FFA500]">Week 4</div>
        <h2 className="text-2xl font-bold text-white">Intermediate Knowledge</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold mb-2 text-orange-500">Smart Contract Frameworks</h3>
          <ul className="space-y-1">
            {introductionSteps.map((step, index) => (
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
          <h3 className="font-semibold mb-2 text-orange-500">Client Libraries (JS)</h3>
          <ul className="space-y-1">
            {clientLib.map((step, index) => (
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
          <h3 className="font-semibold mb-2 text-orange-500">Applicability</h3>
          <ul className="space-y-1">
            {applicability.map((step, index) => (
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
