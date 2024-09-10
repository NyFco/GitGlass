import axios from "axios";

import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const checkAuth = useCallback(() => {
    return new Promise<void>((resolve, reject) => {
      const code = searchParams.get("code");
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        setIsAuthenticated(false);
        if (!code) {
          router.replace("/login");
        } else {
          axios
            .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth`, {
              code,
            })
            .then((response) => {
              localStorage.setItem("access_token", response.data.accessToken);
              setIsAuthenticated(true);
              resolve(response.data.accessToken);
              router.replace("/");
            })
            .catch((err) => {
              return reject(err);
            });
        }
      } else {
        resolve();
      }
    });
  }, [router, searchParams]);

  const logout = useCallback(() => {
    localStorage.clear();
    router.replace("/login");
  }, []);

  return {
    isAuthenticated,
    checkAuth,
    logout,
  };
};

export default useAuth;
