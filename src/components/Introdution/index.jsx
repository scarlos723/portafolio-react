import React from 'react'
import { Grid } from './styles'
import VideoCod from '../../assets/components/Navbar/videoCoding.mp4'

export const Introduction = () => {
  return (
    <Grid>
      <div style={{ width: '70%' }}>
        <h1>
          Hey, you. <br />
          I'm Carlos Sánchez.
        </h1>
      </div>
      <div style={{ width: '60%' }}>
        <h4>
          I am a self motivated engineer student who likes to create web
          development projects for the community interested in exposing their
          services or content.
          <br />
          Currently I am studying the last semester of Electronic Engineering
          and Telecommunications at the University of Cauca, Colombia. Thanks to
          my curiosity to learn new things, I have knowledge in different areas
          such as web development (Frontend and Backend), machine learning and
          artificial intelligence.
        </h4>
      </div>
      <video autoplay muted loop>
        <source src={VideoCod} type='video/mp4' />
      </video>
    </Grid>
  )
}
