import React from 'react'
import { Group, Button, Card, Spoiler, Text, Skeleton, Title } from '@mantine/core';
import ReactStars from 'react-stars'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { NOTIFICATION_TYPE } from '../constants/notifications';

function MovieCard({ movie, status }) {
  const router = useRouter()
  const { id } = router.query

  const displayMovieRecommendations = async (movieID, movieName) => {
    router.push(`/recommendations/?id=${movieID}`)
  }

  return (
    <Skeleton key={movie.id} visible={status === NOTIFICATION_TYPE.PENDING}>

      <Card key={movie.id} style={{ cursor: "pointer" }} shadow="sm" p="lg" radius="sm">

        {/* movie poster */}
        <div style={{ position: "relative", width: "100%", height: "320px" }}>
          <Image alt={""} layout="fill" objectFit="cover" src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} />
        </div>
        {/* movie poster */}

        {/* movie title, movie votes, movie rating, movie genres */}
        <Group position="apart" direction="column" my={8} mt={16}>
          <Title order={4}>{movie.original_title} ( {movie.release_date?.slice(0, 4)} )</Title>
          <Group>
            <ReactStars half count={5} value={movie.vote_average / 2} size={18} color2={'#F00'} />
            <Text lineClamp={5}>
              ({movie.vote_count})
            </Text>
          </Group>
          {/* </Badge> */}
          <Text lineClamp={5}>
            Genre: {movie.genres && movie.genres.map(({ name }) => name).join(', ')}
          </Text>
        </Group>
        {/* movie votes, movie rating */}

        {/* movie description */}
        <Spoiler maxHeight={120} my={8}
          showLabel="Show more" hideLabel="Hide">
          Plot: {movie.overview}
        </Spoiler>
        {/* movie description */}

        <Button onClick={() => { displayMovieRecommendations(movie.id, movie.original_title) }} disabled={movie.id == id} variant="light" color="red" fullWidth>
          {movie.id == id ? 'Selected Film' : 'View Similar Movies'}
        </Button>

      </Card>
    </Skeleton >
  )
}

export default MovieCard