import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { addMovies, setError, setSelectedMovie } from '../store/movieSlice';
import axios from 'axios';
import { SimpleGrid, Title, Pagination, Alert } from '@mantine/core';
import MovieCard from '../components/MovieCard';
import { AlertCircle } from 'tabler-icons-react';
import { NOTIFICATION_TYPE } from '../constants/notifications';
import { addNotification, removeNotification } from '../store/notificationSlice';
import { errorNotification, pendingNotification, successNotification } from '../constants/notifications';

function MovieList() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { movies, error, selectedMovie } = useSelector(state => state.movie);
  const { notification } = useSelector(state => state.notification);
  const id = router.query.id
  const p = router.query.p || 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname, router.query]);

  const handleError = useCallback((err) => {
    if (err.code === 'ERR_CANCELED') {
      return;
    }
    if (err.code === 'ERR_NETWORK') {
      dispatch(setError('Network Error'));
      dispatch(addNotification(errorNotification('Network Error')));
      return;
    }
    else if (err?.response?.data?.message) {
      dispatch(setError(err.response.data.message));
      dispatch(addNotification(errorNotification(err.response.data.message)));
    } else {
      dispatch(setError('An unexpected error occurred'));
      dispatch(addNotification(errorNotification('An unexpected error occurred')));
    }
  }, [dispatch]);

  useEffect(() => {
    if (id === undefined) return;
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const { data: { title } } = await axios.get(`${process.env.apiHost}/id?tmdbId=${id}`);
        dispatch(addNotification(pendingNotification(title)))
        const res = await axios.get(`${process.env.apiHost}/recommendations?id=${id}&p=${p}`, { signal: controller.signal });
        dispatch(setError(''));
        dispatch(addNotification(successNotification()))
        dispatch(setSelectedMovie(res.data.searched_movie_title))
        dispatch(addMovies(res.data.movie_list));
      }
      catch (err) {
        handleError(err);
      }
    }
    fetchData();
    return () => {
      controller.abort()
    }
  }, [dispatch, handleError, id, p]);

  useEffect(() => {
    return () => {
      dispatch(removeNotification())
    }
  }, [dispatch]);

  const handlePageChange = async (page) => {
    router.push(`/recommendations/?id=${id}&p=${page}`)
  }

  if (error) {
    return (
      <Alert icon={<AlertCircle
        size={16}
        color={'red'}
      />} title="Bummer!" color="red">
        {error}
      </Alert>
    );
  }

  return (
    <>
      <Title order={3} mb={16}>
        {notification.type === NOTIFICATION_TYPE.PENDING ? `Generating Recommendations (page ${p})` : `Search Results for ${selectedMovie} (page ${p})`}
      </Title>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: 'xl', cols: 3, spacing: 'xl' },
          { maxWidth: 'lg', cols: 3, spacing: 'lg' },
          { maxWidth: 'md', cols: 3, spacing: 'md' },
          { maxWidth: 'sm', cols: 2, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' },
        ]}>
        {movies.map((movie) => { return <MovieCard key={movie.id} movie={movie} status={notification.type} /> })}
      </SimpleGrid>
      <Pagination mt="xl" position="center" color="red"
        page={parseInt(p)}
        onChange={handlePageChange}
        total={3}
      />
    </>
  );
}

export default MovieList;



