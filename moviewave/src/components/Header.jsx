import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { setToggle } from "../redux/movieSlice";
import { setSearchMovieDetails } from "../redux/searchSlice";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      dispatch(setSearchMovieDetails({ movieName: null, searchedMovie: null }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <div className="flex flex-wrap justify-between items-center px-3 py-2 bg-gradient-to-b from-black to-transparent absolute z-10 w-full">
      <div className="text-red-700 font-bold text-3xl">
        {/* logo */}
        <h1 className="md:text-3xl text-sm">MovieWave</h1>
      </div>

      {user && (
        <div className="flex flex-wrap items-center gap-5 md:gap-20">
          <div className="flex items-center gap-2 text-white">
            <IoIosArrowDropdown className="text-2xl" />
            <h1 className="text-sm md:text-2xl font-semibold">
              {user.username}
            </h1>
          </div>
          <div className="flex gap-3 text-white">
            <button
              onClick={logoutHandler}
              className="bg-red-700 p-1 rounded-md text-sm md:text-lg"
            >
              Logout
            </button>
            <button
              onClick={toggleHandler}
              className="bg-red-700 p-1 rounded-md text-sm md:text-lg"
            >
              {toggle ? "Home" : "Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
