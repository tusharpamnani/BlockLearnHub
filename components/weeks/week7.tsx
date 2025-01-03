import { CircleDot } from "lucide-react";

interface Project {
  text: string;
  url: string;
}

interface ProjectListProps {
  title: string;
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ title, projects }) => (
  <div>
    <h3 className="font-semibold mb-2 text-orange-500">{title}</h3>
    {projects.length > 0 ? (
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
    ) : (
      <p className="text-white">No projects available.</p>
    )}
  </div>
);

const Week7: React.FC = () => {
  const ethProjects: Project[] = [
    { text: "Project 1", url: "https://youtu.be/M-KRLlHG_zs?si=-CIFAUZ04VggUvH8" },
    { text: "Project 2", url: "https://youtu.be/GxFXHXxd83E?si=w0-BHkHmP072Ww1v" },
  ];

  const solanaProjects: Project[] = [
    { text: "Project 1", url: "https://youtu.be/XQCmAzVINRA?si=QbV8snRgPyfh7YZT" },
    { text: "Project 2-5", url: "https://youtu.be/HOdYZSe1uhE?si=A07P5VfSEqIvxo_S" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-[#FFA500]">Week 7</div>
        <h2 className="text-2xl font-bold text-white">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectList title="Ethereum-based Projects" projects={ethProjects} />
        <ProjectList title="Solana-based Projects" projects={solanaProjects} />
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <hr className="border-t-2 border-gray-200 my-4" />
      </div>
    </div>
  );
}

export default Week7;
