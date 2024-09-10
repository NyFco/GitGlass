import axios from "@/libs/axios";
import usePaginationStore from "@/stores/usePaginationStore";
import useUserStore from "@/stores/useUserStore";

import { useCallback, useState } from "react";

export interface UserData {
  name: string;
  bio: string;
  followers: number;
  following: number;
  avatar_url: string;
  public_repos: number;
}

const useUserData = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const { setUserData } = useUserStore();
  const { setMax } = usePaginationStore();

  const fetchUserData = useCallback(() => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .get("/user")
        .then(({ data }: { data: UserData }) => {
          setUserData(data);
          setMax(Math.ceil(data.public_repos / 5));
          return resolve(data);
        })
        .catch((err) => {
          return reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, [setUserData]);

  return {
    loading,
    fetchUserData,
  };
};

export default useUserData;
