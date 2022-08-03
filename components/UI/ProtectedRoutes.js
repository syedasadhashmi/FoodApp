import axios from "axios";
import React, { useEffect, useState } from "react";
import { verifyToken } from "../../Redux/Login/loginActions";
import { post } from "../../utils/lib";
const ProtectedRoutes = ({ children, router }) => {
  const [viewPage, setViewPage] = useState(false);
  useEffect(() => {
    verifyToken()
      .then(() => {
        if (router.pathname !== "/login") {
          setViewPage(true);
          return;
        }
        router.push("/");
      })
      .catch(() => {
        if (router.pathname === "/login") {
          setViewPage(true);
          return;
        }
        router.push("/login");
      });

    return () => null;
  }, [viewPage, router.pathname]);
  return <>{viewPage && children}</>;
};

export default ProtectedRoutes;
