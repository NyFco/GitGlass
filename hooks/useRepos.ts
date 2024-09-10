import axios from "@/libs/axios";
import usePaginationStore from "@/stores/usePaginationStore";

import { useCallback, useState } from "react";

export interface Owner {
  avatar_url: string;
  login: string;
}

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  default_branch: string;
  owner: Owner;
}

const useRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchrepos = useCallback(() => {
    return new Promise((resolve, reject) => {
      setLoading(true);

      const page = usePaginationStore.getState().page;

      const params = {
        page,
        per_page: 5,
        sort: "pushed",
        direction: "desc",
      };

      axios
        .get("/user/repos", {
          params,
        })
        .then(({ data }: { data: Repo[] }) => {
          setRepos(data);
          return resolve(data);
        })
        .catch((err) => {
          return reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, [setRepos]);

  return {
    repos,
    loading,
    fetchrepos,
  };
};

export default useRepos;
