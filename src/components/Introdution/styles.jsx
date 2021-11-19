import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr 1fr ;
  height: 80%;
  margin: 0 40px;
`
export const Title = styled.div`
  font-size:80px;
  color: white;
`
export const Text = styled.div`
  font-size:30px;
  color: white;
  font-family: 'Genos', sans-serif;
`
export const Video = styled.video`
  grid-column: 2;
  grid-row: 2;
  width: 100%;
 
  filter: opacity(60%);

  box-shadow: 9px 9px 20px 5px black;
`
