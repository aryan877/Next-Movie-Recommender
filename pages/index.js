import { Text, Center, Grid } from '@mantine/core';
import { useRouter } from 'next/router';
export default function App() {
  const router = useRouter()

  return (
    <>
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0, backgroundImage: `url(./hero_compressed.png)`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <Grid columns={2} mx={0}>
          <Grid.Col span={1}></Grid.Col>
          <Grid.Col span={1}>
            <Center>
              <div style={{
                position: 'absolute', left: '50%', top: '30%', padding: '40px', fontWeight: '700', maxWidth: '60%'
              }}>
                <Text align='justify'
                  color='white'
                  size='lg'>Discover your favorite movie and receive a dynamically generated list of related films, with the top 3 pages of results presented. This search is powered by a sophisticated machine learning algorithm written in Python, providing accurate and relevant movie recommendations.
                </Text>
                <Text align='justify'
                  color='white'
                  mt={16}
                  size='xs'> Want to discover similar movies? Start by searching for &apos;Annabelle&apos; for a spine-chilling horror experience. Delve into mystery and suspense with &apos;Get Out&apos; or &apos;The Babadook&apos;. Take a trip through the cosmos with &apos;Interstellar&apos;. And for fans of Leo DiCaprio, &apos;Inception&apos; is a must-search for discovering similar mind-bending movies.
                </Text>
              </div>
            </Center>
          </Grid.Col>
        </Grid>
      </div >
    </>
  );
}