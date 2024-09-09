import { GithubIcon } from "@/components/icons";

const LoginButton: React.FC = () => {
  const clientID = process.env.GITHUB_CLIENT_ID;

  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${clientID}`}
      className="flex items-center gap-3 rounded-md transition duration-300 bg-white text-black hover:bg-gray-400 px-4 py-2 text-base"
    >
      <GithubIcon width={25} height={25} fill="#000000" />
      Login With Github
    </a>
  );
};

const LoginPage = () => {
  return (
    <div className="h-screen w-100 flex justify-center items-center">
      <div className="flex flex-col gap-7 items-center max-w-[550px] bg-gray-400 rounded-3xl px-6 py-12 backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-500 text-[#ffffff]">
        <GithubIcon width={50} height={50} fill="#ffffff" />
        <h1 className="text-4xl font-bold">GitGlass</h1>
        <p className="text-center">
          Using GitGlass you can Login, View your repositories and Download
          them. GitGlass uses glass morphism and bento grid for a nice and clean
          UI.
        </p>
        <LoginButton />
      </div>
    </div>
  );
};
export default LoginPage;
