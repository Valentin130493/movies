import React, { useEffect } from "react";
import "./UserDetails.scss";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { User } from "../../types/User";
import LoaderCommon from "../../components/_common/Loader/Loader";
import { LoaderState } from "../../store/reducers/loaderReducer";

const UserDetails = () => {
  const { loadUser } = useAuth();
  useEffect(() => {
    loadUser();
  }, []);
  const { isDataLoading } = useSelector<ApplicationState, LoaderState>(
    (state) => state.loader
  );
  const user = useSelector<ApplicationState, User>((state) => state.user);
  const { email, first_name, username, last_name } = user;
  return isDataLoading ? (
    <LoaderCommon />
  ) : (
    <div className={"userDetails__wrapper"}>
      <h1 className={"userDetails__title"}>User Details</h1>
      <div className={"userDetails__info"}>
        <p>
          Name: {first_name} {last_name}
        </p>
        <p>User name: {username}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default UserDetails;
