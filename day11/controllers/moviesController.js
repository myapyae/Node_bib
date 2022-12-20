import Movie from "../models/movie.model.js"


export const createMovie = async (req, res) => {
  const newMovie = new Movie(req.body)
  try {

    const result = await newMovie.save();
    res.status(200).json({
      message: "Movie Created",
      data: result,

    })

  }
  catch (error) {
    res.status(201).json({
      message: "Internal Server Error!",
      error: error
    })
  }
}


export const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json({
      message: "Movie Updated",
      data: updatedMovie
    })
  } catch (error) {
    res.status(201).json({
      message: "Internal Server Error!",
      error: error
    })
  }
}


export const getMovie = async (req, res) => {
  try {
    const getmovie = await Movie.find();
    res.status(200).json({
      message: "Success",
      data: getmovie
    })
  } catch (error) {
    res.status(201).json({
      message: "Internal Server Error!",
      error: error
    })
  }
}
