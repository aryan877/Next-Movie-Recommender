import React from 'react'
import { Text, Title } from '@mantine/core';
import { ExternalLink } from 'tabler-icons-react';
import { Anchor } from '@mantine/core';


function Working() {
  return (
    <>
      <Title order={1}>How It Works</Title>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Anchor my={20} href='https://github.com/aryan877/Next-Movie-Recommender' target="_blank">
          <span style={{ display: 'inline-block', marginRight: '8px' }}>
            <ExternalLink />
          </span>
          <span style={{ display: 'inline-block' }}>
            <Text align='justify' color='blue' size='lg'>Project Github Repo (Frontend)</Text>
          </span>
        </Anchor>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Anchor mb={20} href='https://github.com/aryan877/recommender-script' target="_blank">
          <span style={{ display: 'inline-block', marginRight: '8px' }}>
            <ExternalLink />
          </span>
          <span style={{ display: 'inline-block' }}>
            <Text align='justify' color='blue' size='lg'>Project Github Repo (Backend)</Text>
          </span>
        </Anchor>
      </div>
      <Text my={20} align='justify'
        color='white'
        size='lg'>The app is designed to help movie lovers discover new films that match their tastes. It uses a machine learning algorithm that combines content-based and collaborative filtering to generate a list of similar movie recommendations. When a user searches for a movie, the app sends a request to the backend, which uses the MovieLens 25 million movie ratings dataset to generate recommendations. The backend sends back TMDB IDs, which are then used to fetch additional data such as ratings, descriptions, and movie posters. This data is then sent back to the Next.js frontend, where users can also access pagination features, allowing them to view the most similar recommendations on the first page and the least similar on the third page. With this feature, users can easily find new films that are similar to the ones they already love.
      </Text>
      <Text my={40} align='justify'
        color='white'
        size='lg'>
        I had the opportunity to work on this algorithm during my internship under the guidance of Shrit Kanike Pratap, a scientist at DRDO. He mentored me and taught me the intricacies of machine learning and helped me understand how to design a recommendation algorithm using collaborative and content-based filtering. It was an incredible experience to work with such a talented and experienced scientist and I am grateful for the knowledge and experience I gained during my time there.
      </Text>


    </>
  )
}

export default Working