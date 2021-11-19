import React from 'react'
import { Grid, Video, Title, Text } from './styles'
import VideoCod from '../../assets/components/Navbar/videoCoding.mp4'
// import ReactPlayer from 'react-player'

export const Introduction = () => {
  return (
    <Grid>
      <div style={{ gridColumn: 1, gridRow: 1 }}>
        <Title>
          Hey, you. <br />
          I'm Carlos Sánchez.
        </Title>
      </div>
      <div style={{ gridColumn: 1, gridRow: 2 }}>
        <Text>
          I am a self motivated engineer student who likes to create web
          development projects for the community interested in exposing their
          services or content.
          <br />
          Currently I am studying the last semester of Electronic Engineering
          and Telecommunications at the University of Cauca, Colombia. Thanks to
          my curiosity to learn new things, I have knowledge in different areas
          such as web development (Frontend and Backend), machine learning and
          artificial intelligence.
        </Text>
      </div>
      <Video className='videoTag' autoPlay loop muted>
        <source src={VideoCod} type='video/mp4' />
      </Video>
    </Grid>
  )
}
