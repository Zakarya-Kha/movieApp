import axios from "axios";
import { options, Upcoming_Movie } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getUpComingMovie } from "../redux/movieSlice";

const useUpComingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Upcoming_Movie, options);
    dispatch(getUpComingMovie(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default useUpComingMovies;
