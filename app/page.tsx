"use client";

import { useEffect } from "react";
import Pagination from "@/components/Pagination";
import LoadingSpinner from "@/components/LoadingSpinner";
import Repo from "@/components/Repo";
import { useUserStore } from "@/stores";
import { useAuth, useRepos, useUserData } from "@/hooks";

const glassStyleClassNames = `
    bg-gray-400 
    rounded-3xl 
    p-6 
    backdrop-filter 
    backdrop-blur-sm 
    bg-opacity-10 
    border 
    border-gray-500 
    text-[#ffffff]
    w-full
  `;

export default function Home() {
  const { checkAuth, logout } = useAuth();

  const { fetchUserData, loading: userDataIsLoading } = useUserData();
  const { userData } = useUserStore();

  const { fetchrepos, repos, loading: reposAreLoading } = useRepos();

  useEffect(() => {
    checkAuth().then(() => {
      fetchUserData().then(() => {
        fetchrepos();
      });
    });
  }, [checkAuth, fetchUserData]);

  const handleChangePage = () => {
    fetchrepos();
  };

  return (
    <main className="h-screen w-100 flex justify-center items-center">
      <div className="flex flex-col gap-5 items-center max-w-[550px] min-w-[350px]">
        <div
          className={glassStyleClassNames + " flex flex-col gap-6 items-center"}
        >
          {userDataIsLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <img
                src={userData?.avatar_url}
                alt={userData?.name}
                className="rounded-full"
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-1 items-center text-center">
                <h1 className="text-xl">{userData?.name}</h1>
                <p className="text-gray-300">{userData?.bio}</p>
              </div>
              <button
                onClick={logout}
                className={
                  glassStyleClassNames + " p-2 bg-[#000000] text-[#E55345]"
                }
              >
                Log Out
              </button>
            </>
          )}
        </div>
        <div
          className={glassStyleClassNames + " flex flex-col gap-6 items-center"}
        >
          {reposAreLoading ? (
            <LoadingSpinner />
          ) : (
            repos.map((repo) => <Repo repo={repo} />)
          )}
        </div>
        <Pagination onChange={handleChangePage} />
      </div>
    </main>
  );
}
