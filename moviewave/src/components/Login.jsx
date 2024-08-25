import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "./Header";
import { API_END_POINT } from "../utils/constant";
import { setLoading, setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const user = { email, password, ...(isLogin ? {} : { username }) };

    try {
      const url = `${API_END_POINT}/${isLogin ? "login" : "register"}`;
      const res = await axios.post(url, user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data && res.data.success) {
        toast.success(res.data.message);
        if (isLogin) {
          dispatch(setUser(res.data.user));
          navigate("/browse");
        } else {
          setIsLogin(true);
        }
      } else {
        toast.error(res.data ? res.data.message : "Unexpected error occurred");
      }
    } catch (error) {
      toast.error(error.response && error.response.data ? error.response.data.message : "An error occurred");
    } finally {
      dispatch(setLoading(false));
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full absolute">
        <img
          className="w-full h-screen object-cover"
          src="https://wallpapers.com/images/hd/american-horror-movie-posters-9pvmdtvz4cb0xl37.jpg"
          alt="Background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-70"></div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div className="p-8 shadow-md max-w-md w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {isLogin ? "Login" : "Register"}
          </h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Enter Your Username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLoading ? "Loading..." : isLogin ? "Login" : "Register"}
              </button>
            </div>
            <p
              onClick={toggleAuthMode}
              className="text-white hover:text-blue-500 cursor-pointer text-center mt-5"
            >
              {isLogin
                ? "Don't have an account? Register"
                : "Already have an account? Login"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
