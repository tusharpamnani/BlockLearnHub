import { CircleDot } from "lucide-react";

export default function Week5() {
  const projects = [
    { text: "State and Payment Channels", url: "https://education.district0x.io/general-topics/understanding-ethereum/basics-state-channels/" },
    { text: "What are Rollups? Optimistic vs ZK", url: "https://www.youtube.com/watch?v=7B-dbMuG6hI" },
    { text: "Optimistic Rollups", url: "https://www.alchemy.com/overviews/optimistic-rollups" },
    { text: "zk Snarks", url: "https://www.youtube.com/watch?v=N5Qip04KIfo" },
    { text: "Validium", url: "https://ethereum.org/en/developers/docs/scaling/validium/" },
    { text: "Plasma Chains", url: "https://ethereum.org/en/developers/docs/scaling/plasma/" },
    { text: "Sidechains", url: "https://ethereum.org/en/developers/docs/scaling/sidechains/" },
    { text: "On-Chain Scaling", url: "https://ethereum.org/en/developers/docs/scaling/" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-orange-500 text-[#FFA500]">Week 5</div>
        <h2 className="text-2xl font-bold text-white">Building for Scale</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2 text-orange-500">Basic and Advanced</h3>
          <ul className="space-y-1">
            {projects.map((project, index) => (
              <li key={index}>
                <a
                  href={project.url}
                  className="flex items-center py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">
                    <CircleDot className="w-4 h-4 text-orange-500" />
                  </span>
                  <span className="text-white group-hover:text-gray-900">{project.text}</span>
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
