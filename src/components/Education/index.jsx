import React from 'react'
import { Row, Section } from './styles'

export const Education = () => {
  return (
    <Section>
      <Row>
        <div className='img-box' />
        <div className='text-box'>
          <h1>Academy </h1>
          <p>University of Cauca, Colombia</p>
          <p>Electronic Engineering and Telecommunications</p>
          <p>2016 - Now</p>
        </div>
      </Row>
      <Row>
        <div className='text-box'>
          <h1>Online Courses</h1>
          <p>MIT - <a href=''>Machine Learning with Python - From Linear Models to Deep Learning</a> </p>
          <p>Harvard - <a href=''>Web Development with Python and JavaScript</a> </p>
          <p>Harvard - <a href=''>Introduction to Artificial Intelligence whit Python</a> </p>
          <p><small>(Click on course name to see certificate)</small></p>
        </div>
        <div className='img-box' />
      </Row>
    </Section>
  )
}
