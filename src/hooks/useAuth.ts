import { API_BASE_URL, API_ENDPOINTS } from "../constants/api";
import { FormikValues } from "formik";
import { USER_TOKEN_NAMESPACE } from "../constants/token";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/Routes";
import axios from "axios";
import { LocalStorage } from "../services/LocalStorage";
import { toast } from "react-toastify";
import { Http } from "../services/http";
import { useDispatch } from "react-redux";
import { actionGetUserInfo } from "../store/action/actionGetUserInfo";
import { actionSetLoaderStatus } from "../store/action/actionLoading";

function useAuth() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const getToken = async (formData: FormikValues) => {
    try {
      const url = `${API_BASE_URL}${API_ENDPOINTS.LOGIN}`;
      const res = await axios.post(url, formData);
      const { data } = res;
      LocalStorage.set(USER_TOKEN_NAMESPACE, data.access);
      if (data.access !== "") {
        toast.success("Welcome to our site!");
        navigation(ROUTES.MOVIES);
      } else {
        toast.error("Wrong username or password");
        navigation(ROUTES.LOGIN);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const register = async (data: FormikValues) => {
    try {
      const url = `${API_BASE_URL}${API_ENDPOINTS.REGISTRATION}`;
      await axios.post(url, data);
      toast.success("Your account was create");
    } catch (e) {
      toast.error("Account don't create, try again");
      console.log(e);
    }
  };

  const loadUser = async () => {
    try {
      const url = `${API_BASE_URL}${API_ENDPOINTS.USER}`;
      dispatch(actionSetLoaderStatus(true));
      const res = await Http.get(url);
      dispatch(actionGetUserInfo(res));
      dispatch(actionSetLoaderStatus(false));
    } catch (e) {
      throw e;
    }
  };

  return { getToken, register, loadUser };
}
export default useAuth;
