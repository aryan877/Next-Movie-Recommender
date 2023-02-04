const { createSlice } = require('@reduxjs/toolkit');

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    error: '',
    selectedMovie: '',
    currentPage: 1
  },
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSelectedMovie(state, action) {
      state.selectedMovie = action.payload;
    },
    reset(state) {
      state.movies = [];
      state.error = '';
      state.selectedMovie = '';
      state.currentPage = 1;
    }
  },
});

export const { addMovies, setError, setSelectedMovie, setCurrentPage, reset } = movieSlice.actions;
export default movieSlice.reducer;