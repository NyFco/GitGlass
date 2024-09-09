import axios from "@/libs/axios";

import { useCallback, useState } from "react";

export interface UserData {
  name: string;
  bio: string;
  followers: number;
  following: number;
}

const useUserData = () => {
  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState<boolean>();

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
  }, []);

  return {
    userData,
    loading,
    fetchUserData,
  };
};

export default useUserData;
