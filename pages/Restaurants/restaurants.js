import { jsx } from "@emotion/react";
import axios from "axios";
import { apiUrl } from "../../utils/constant";

export const verifyToken = () => {
  const token = localStorage.getItem("tokenDetails");

  return axios.get(`${apiUrl}/vendor-service/vendor/vendors`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
