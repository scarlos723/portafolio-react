import React from 'react'
import { Grid, Col, Ul, CustomSiReact } from './styles'
import {
  ImHtmlFive2,
  ImCss3
} from 'react-icons/im'
import {
  IoLogoSass
} from 'react-icons/io'
import {
  SiJavascript,
  SiAngularjs,
  SiLaravel,
  SiBootstrap
} from 'react-icons/si'
import { DiMaterializecss } from 'react-icons/di'
export const Skills = () => {
  return (
    <>
      <Grid>
        <Col>

          <h2>Frontend Development</h2>

          <h4>Languages</h4>

          <Ul>
            <li> <ImHtmlFive2 size={40} color='white' /> HTML </li>
            <li> <ImCss3 size={40} color='white' />CSS </li>
            <li> <IoLogoSass size={40} color='white' /> Sass</li>
            <li> <SiJavascript size={40} color='white' />JavaScript </li>
          </Ul>

          <h4>Frameworks</h4>

          <Ul>
            <li> <CustomSiReact size={40} color='white' />React</li>
            <li><SiAngularjs size={40} color='white' />Angular</li>
            <li><SiLaravel size={40} color='white' />Laravel</li>
            <li><DiMaterializecss size={40} color='white' />Materialize</li>
            <li><SiBootstrap size={40} color='white' />Bootstrap</li>

          </Ul>
        </Col>
        <Col>

          <h2>Backend Development</h2>

          <h4>Languages</h4>

          <Ul>
            <li> Python </li>
            <li> PHP </li>
          </Ul>

          <h4>Frameworks</h4>

          <Ul>
            <li>Laravel</li>
            <li>Django</li>
          </Ul>

          <h4>Databases</h4>

          <Ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>SQLite3</li>
          </Ul>
        </Col>
        <Col>

          <h2>Machine Learning and Others</h2>

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
