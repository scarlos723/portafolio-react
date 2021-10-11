import React from 'react'
import { Grid, Grid2 } from './styles'

export const Education = () => {
  return (
    <section>
      <Grid>
        <div>
          <img src='https://picsum.photos/500/500' alt='' />
        </div>
        <div>
          <p> <h1>Academy </h1></p>
          <p>University of Cauca, Colombia</p>
          <p>Electronic Engineering and Telecommunications</p>
          <p>2016 - Now</p>
        </div>
      </Grid>
      <Grid2>
        <div>
          <p><h1>Online Courses</h1></p>
          <p>MIT - <a href=''>Machine Learning with Python - From Linear Models to Deep Learning</a> </p>
          <p>Harvard - <a href=''>Web Development with Python and JavaScript</a> </p>
          <p>Harvard - <a href=''>Introduction to Artificial Intelligence whit Python</a> </p>
          <p><small>(Click on course name to see certificate)</small></p>
        </div>
        <div>
          <img src='https://picsum.photos/500/500' alt='' />
        </div>
      </Grid2>
    </section>
  )
}
