import React, { useCallback, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useSessionStorage from "../hooks/useSessionStorage";
import useEffectOnce from "../hooks/useEffectOnce";
import {
  user_currentUser,
  user_logoutUser,
} from "../services/api/user/user.service";
import { addUser } from "../redux-toolkit/reducers/user/user.reducer";
import { useDispatch, useSelector } from "react-redux";
import { Utils } from "../services/utils/utils.service";
import { Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { profile, token } = useSelector((state) => state.user);
  const [userData, setUserData] = useState(null);
  const [tokenIsValid, setTokenIsValid] = useState(false);
  const keepLoggedIn = useLocalStorage("keepLoggedIn", "get");
  const pageReload = useSessionStorage("pageReload", "get");
  const [deleteStorageUsername] = useLocalStorage("username", "delete");
  const [setLoggedIn] = useLocalStorage("keepLoggedIn", "set");
  const [deleteSessionPageReload] = useSessionStorage("pageReload", "delete");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkUser = useCallback(async () => {
    try {
      const response = await user_currentUser();
      // dispatch(getConversationList());
      setUserData(response.data.user);
      console.log(response.data.user);
      setTokenIsValid(true);
      dispatch(
        addUser({ token: response.data.token, profile: response.data.user })
      );
    } catch (error) {
      setTokenIsValid(false);
      setTimeout(async () => {
        Utils.clearStore({
          dispatch,
          deleteStorageUsername,
          deleteSessionPageReload,
          setLoggedIn,
        });
        await user_logoutUser();
        navigate("/");
      }, 1000);
    }
  }, [
    dispatch,
    navigate,
    deleteStorageUsername,
    deleteSessionPageReload,
    setLoggedIn,
  ]);

  useEffectOnce(() => {
    checkUser();
  });

  if (
    keepLoggedIn ||
    (!keepLoggedIn && userData) ||
    (profile && token) ||
    pageReload
  ) {
    if (!tokenIsValid) {
      return <></>;
    } else {
      return <>{children}</>;
    }
  } else {
    return <>{<Navigate to="/" />}</>;
  }
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
