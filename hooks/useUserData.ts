import axios from "@/libs/axios";
import useUserStore from "@/stores/useUserStore";

import { useCallback, useState } from "react";

export interface UserData {
  name: string;
  bio: string;
  followers: number;
  following: number;
}

const useUserData = () => {
  const [loading, setLoading] = useState<boolean>();

  const { setUserData } = useUserStore();

  const fetchUserData = useCallback(() => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .get("/user")
        .then(({ data }: { data: UserData }) => {
          setUserData(data);
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
