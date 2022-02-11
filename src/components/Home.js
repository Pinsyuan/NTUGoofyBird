import styled from "styled-components";
import BigPic from '../pic/big-pic.png'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Home(){
  return(
    <>
      <InfoGrid container>
        <Grid item xs={12} sm={6}>
          <InfoImg src={BigPic}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" sx={{ textAlign: {xs: 'center', sm: 'left'} }}>台大笨鳥</Typography>
          <Typography variant="h1" color='text.main' sx={{ textAlign: {xs: 'center', sm: 'left'} }}>NTU Goofy Bird</Typography>
          <Typography variant="body1" sx={{ paddingTop: 5, width: {xs: 1, sm: 4/5}, textAlign: {xs: 'center', sm: 'left'} }}>
            第一款以臺大為主題的 NFT，目前已在 OpenSea 平台發售，地板價 0.001 ETH（ 約90 NTD ）。
          </Typography>
        </Grid>
      </InfoGrid>
      <ExpandMoreIcon sx={{ display: 'block', margin: 'auto', pt: 4, pb: 4 }}/>
      <StoryPaper elevation={0} sx={{ borderRadius: 6 }}>
        <Container sx={{ p: 6, mb: 10 }}>
          <Typography variant="h2" component="span" sx={{ pl: 3, textAlign: {xs: 'center', sm: 'left'} }}>大笨鳥小故事</Typography>
          <Typography variant="h2" component="span" color='secondary.main'>｜About Us</Typography>
          <Typography variant="body1" sx={{ p: 3, textAlign: {xs: 'center', sm: 'left'} }}>
            第一款以臺大為主題的 NFT，內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文！<br /><br />
            內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文！內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文！
          </Typography>
        </Container>
      </StoryPaper>
    </>
  )
}

export default Home;

const InfoGrid = styled(Grid)`
  width: 70vw;
  padding-top: 5vh;
  align-items: center;
`

const InfoImg = styled.img`
  width: 50%;
  display: block;
  margin: auto;
  padding-bottom: 8%;

  @media only screen and (max-width: 680px) {
		width: 30%;
	}
`

const StoryPaper = styled(Paper)`
  width: 85vw;
  display: block;
  margin: auto;
`