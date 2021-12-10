import React, { useState } from 'react'
import { Introduction } from './components/Introdution'
import { GlobalStyles } from './GlobalStyles'
import {
  SectionCont, SectionEd, SectionInt, SectionSk, Main, IntBase,
  Head, Icon, Ul, Menu, LogoText, FilterArea
} from './Styles'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

export const App = () => {
  const [show, setShow] = useState({
    Int: false,
    Sk: false,
    Ed: false,
    Cont: false
  })
  const imagesCity = {
    city1: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7cf6f771357587.5bc2c0e91e305.png',
    city2: 'https://p4.wallpaperbetter.com/wallpaper/664/221/183/digital-art-cyber-city-cyberpunk-cats-hd-wallpaper-preview.jpg',
    city3: 'https://img.wallpapersafari.com/desktop/1680/1050/81/2/ftXPBl.jpg',
    city4: 'https://mocah.org/uploads/posts/4502432-blade-rrunner-dark-cyberpunk-cyber-movies-cyberpunk.jpg',
    city5: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/50239bdf-bf68-4795-9efc-9d03917120d0/de2anuv-66a0e40e-d3c1-4443-ad49-2e075ee12767.jpg',
    city6: 'https://i.pinimg.com/originals/29/3f/4a/293f4a4edd57a58dd4159e687e3e5e98.jpg',
    city7: 'https://sisenoragencia.com/wp-content/uploads/2018/09/717s2dsv6ri21.jpg',
    city8: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e44555a3-1892-42cc-a3b2-ed59359062b0/dcri4wj-4df8c9e3-2c19-42ac-aae7-d3a65371650e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U0NDU1NWEzLTE4OTItNDJjYy1hM2IyLWVkNTkzNTkwNjJiMFwvZGNyaTR3ai00ZGY4YzllMy0yYzE5LTQyYWMtYWFlNy1kM2E2NTM3MTY1MGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Bcirp2gp3B8mWRfnEbQDCYnaM85stdbdjeHDPAT6AWU',
    cityGif1: 'https://i.pinimg.com/originals/62/18/b5/6218b53ba4e293424664be79c7341390.gif',
    cityGif2: 'https://steamuserimages-a.akamaihd.net/ugc/1005937373242556119/DCA091F0E5821D0833EF7D8F157381A74E05EE4D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    cityGif3: 'https://i.pinimg.com/originals/1d/1a/4d/1d1a4d12a523ae4b35205f18f1a3535e.gif'

  }

  return (
    <>
      <GlobalStyles />
      <FilterArea />
      <Head>
        <Icon>
          <LogoText> <a href='/'> CARLOS SANCHEZ MENESES </a> </LogoText>
        </Icon>
        <Menu>

          <Ul>
            <li> <a href='Works'>Works</a></li>
            <li> <a href='/skills'> Skills </a> </li>
            <li> <a href='/education'> Education </a>  </li>
            <li> <a href='/contact'> Contact</a></li>
          </Ul>

        </Menu>
      </Head>
      <Main bgImg={imagesCity.cityGif1}>

        <section>
          <IntBase />
          <SectionInt
            dep={show.Int} onClick={() => setShow({
              Sk: false,
              Ed: false,
              Cont: false,
              Int: !show.Int
            })}
          >
            <Introduction />
          </SectionInt>
          <SectionSk
            dep={show.Sk} onClick={() => setShow({
              Int: false,
              Ed: false,
              Cont: false,
              Sk: !show.Sk
            })}
          >
            <Skills />
          </SectionSk>
          <SectionEd
            dep={show.Ed} onClick={() => setShow({
              Int: false,
              Cont: false,
              Sk: false,
              Ed: !show.Ed

            })}
          >
            <Education />
          </SectionEd>
          <SectionCont
            dep={show.Cont} onClick={() => setShow({
              Int: false,
              Ed: false,
              Sk: false,
              Cont: !show.Cont
            })}
          >
            <Contact />
          </SectionCont>

        </section>

      </Main>
    </>
  )
}
