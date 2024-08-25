import axios from "axios"
import { options, Popular_Movie } from "../utils/constant"
import { useDispatch } from "react-redux"
import { getNowPopularMovie } from "../redux/movieSlice"

const useNowPopularMovies = async () => {
  const dispatch = useDispatch()
  try {
    const res = await axios.get(Popular_Movie, options)
    dispatch(getNowPopularMovie(res.data.results))
  } catch (error) {
    console.error(error)
  }
}

export default useNowPopularMovies