import axios from "axios";
import { apiUrl } from "../../utils/constant";
export const verifyToken = () =>
  axios.get(`${apiUrl}/vendor-service/vendor/vendors`);
