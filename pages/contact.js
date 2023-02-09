import React from 'react'
import { Text, Title } from '@mantine/core';

function Contact() {
  return (
    <>
      <Title order={1}>Contact Info</Title>
      <Text my={40} align='justify'
        color='white'
        size='md'>Email: aryankumar877@gmail.com
      </Text>
      <Text align='justify'
        color='white'
        size='md'>
        Feel free to reach out if you want to know more about my project or discuss potential opportunities.
      </Text>
    </>
  )
}

export default Contact