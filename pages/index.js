import { Text, Center, Grid, Container, MediaQuery } from '@mantine/core';
import { useRouter } from 'next/router';
export default function App() {

  return (
    <>
      <Container styles={{
        root: {
          maxWidth: '100%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundImage: `url(./hero_compressed.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      }}>
        <Grid styles={{ root: { margin: '0' } }} grow>
          <MediaQuery
            query="(max-width: 800px)" styles={{ display: 'none' }}>

            <Grid.Col span={1}>

            </Grid.Col>
          </MediaQuery>

          <Grid.Col span={1}>
            <MediaQuery
              query="(max-width: 800px)" styles={{ marginTop: '110px', padding: '0px', width: '100%' }}>
              <Container styles={{ root: { width: '80%' } }} p={16} mt={210}>
                <Text align='justify'
                  color='white'
                  size='lg'>Search your favorite movie and receive a dynamically generated list of similar films. This search is powered by a sophisticated machine learning algorithm written in Python, providing accurate and relevant movie recommendations.
                </Text>

                <Text align='justify'
                  color='white'
                  mt={16}
                  size='md'> Want to discover similar movies? Start by searching for &apos;Annabelle&apos; for a spine-chilling horror experience. Delve into mystery and suspense with &apos;Get Out&apos; or &apos;The Babadook&apos;. Take a trip through the cosmos with &apos;Interstellar&apos;. And for fans of Leo DiCaprio, &apos;Inception&apos; is a must-search for discovering similar mind-bending movies.
                </Text>
              </Container>
            </MediaQuery>


          </Grid.Col>
        </Grid>
      </Container >
    </>
  );
}