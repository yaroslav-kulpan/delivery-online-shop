import { useSelector } from "react-redux";

const useAuth = () => {
  return useSelector((state) => Boolean(state.auth.accessToken));
};

export default useAuth;