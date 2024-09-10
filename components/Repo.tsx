import { Repo as RepoType } from "@/hooks/useRepos";

export type Repository = {
  repo: RepoType;
};

const Repo: React.FC<Repository> = ({ repo }) => {
  return (
    <div
      className="
        flex
        justify-between
        items-center
      bg-gray-400 
        rounded-2xl 
        py-2
        px-4  
        backdrop-filter 
        backdrop-blur-sm 
        bg-opacity-10 
        border 
      border-gray-500 
      text-[#ffffff]
        w-full
    "
    >
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold">{repo.name}</h2>
        <div className="flex items-center gap-2">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            width={25}
            height={25}
            className="rounded-full"
          />
          <h4 className="text-xs">{repo.owner.login}</h4>
        </div>
      </div>
      <a
        href={`${repo.html_url}/archive/refs/heads/${repo.default_branch}.zip`}
        download
        className="cursor-pointer"
      >
        Download
      </a>
    </div>
  );
};
export default Repo;
