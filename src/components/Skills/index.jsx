import React from 'react'
import { Grid, Col, Ul } from './styles'

export const Skills = () => {
  return (
    <>
      <Grid>
        <Col>
          <p>
            <h2>Frontend Development</h2>
          </p>
          <p>
            <h4>Languages</h4>
          </p>
          <Ul>
            <li> HTML </li>
            <li> CSS </li>
            <li> Sass</li>
            <li> JavaScript </li>
          </Ul>
          <p>
            <h4>Frameworks</h4>
          </p>
          <Ul>
            <li>Materialize</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>AngUlar</li>
            <li>Laravel</li>
            <li>Django</li>
          </Ul>
        </Col>
        <Col>
          <p>
            <h2>Backend Development</h2>
          </p>
          <p>
            <h4>Languages</h4>
          </p>
          <Ul>
            <li> Python </li>
            <li> PHP </li>
            <li> JavaScript </li>
          </Ul>
          <p>
            <h4>Frameworks</h4>
          </p>
          <Ul>
            <li>Laravel</li>
            <li>Django</li>
          </Ul>
          <p>
            <h4>Databases</h4>
          </p>
          <Ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>SQLite3</li>
          </Ul>
        </Col>
        <Col>
          <p>
            <h2>Machine Learning and Others</h2>
          </p>
          <h4>Languages</h4>
          <Ul>
            <li>Python</li>
            <li>Matlab</li>
            <li>Octave</li>
          </Ul>
        </Col>
      </Grid>
    </>
  )
}
