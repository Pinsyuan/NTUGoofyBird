import styled from "styled-components";
import Leo from '../pic/Leo.png'
import Austin from '../pic/Austin.png'
import Penny from '../pic/Penny.png'
import Enei from '../pic/Enei.png'
import Alison from '../pic/Alison.png'
import Percy from '../pic/Percy.png'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';

function Team(){
  return(
    <>
      <TitleContainer>
        <Typography variant="h2" component="span" sx={{ textAlign: {xs: 'center', sm: 'left'} }}>製作團隊</Typography>
        <Typography variant="h2" component="span" color='secondary.main'>｜Our Team</Typography>
      </TitleContainer>

      <ContentContainer>
        <Typography variant="h3" color='text.gray' sx={{ fontWeight: 400, textAlign: {xs: 'center', sm: 'left'} }}>。製作理念</Typography>
        <ContentPaper elevation={0} sx={{ mt: 3, borderRadius: 6 }}>
          <Container sx={{ p: 2, mb: 10 }}>
            <Typography variant="body1" sx={{ p: 3, textAlign: {xs: 'center', sm: 'left'} }}>
              ＃我愛臺大<br />
              記得2021年末時，教授在最後一堂課說道，以後要做什麼酷酷的事情時，可以想起你們身邊有的這一群同學....
              <br /><br />
              我們是六個因為臺大而相逢相識相知的朋友，在 2022 這波NFT熱潮下，希望藉由NFT表示對臺大的認同感，讓上鏈後的作品，向世界宣告『我愛臺大直到永遠』，留下不朽的時間戳記。
              <br />
              於是我們設計出了「臺大笨鳥 NTU Goofy Bird」NFT，以臺大特色為主軸，融合了大家最熟悉的大笨鳥、校園生活、各學院特色等....。
              <br /><br />
              STOP FOMO（Stop Fear of Missing out）是我們的初衷，我們希望回歸藝術本質，沒有設立白名單與社群來抬高價值，讓台大的特色藉由藝術形態在鏈上可以永流傳。
            </Typography>
          </Container>
        </ContentPaper>
      </ContentContainer>

      <ContentContainer>
        <Typography variant="h3" color='text.gray' sx={{ fontWeight: 400, textAlign: {xs: 'center', sm: 'left'} }}>。團隊成員</Typography>
        <MemberGrid container spacing={8}>
          <Grid item xs={6} sm={4} sx={{ justifyContent:'center' }}>
            <MemberImg src={Leo} />
            <Typography variant="h3" color='primary.main' sx={{ mt:1, textAlign: 'center' }}>Leo Wu</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <MemberImg src={Austin} />
            <Typography variant="h3" color='primary.main' sx={{ mt:1, textAlign: 'center' }}>Austin Huang</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <MemberImg src={Penny} />
            <Typography variant="h3" color='primary.main' sx={{ mt:1, textAlign: 'center' }}>Penny Peng</Typography>
          </Grid>
          <Grid item xs={6} sm={4} sx={{ justifyContent:'center' }}>
            <MemberImg src={Enei} />
            <Typography variant="h3" color='primary.main' sx={{ mt:1, textAlign: 'center' }}>Enei Tsai</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <MemberImg src={Alison} />
            <Typography variant="h3" color='primary.main' sx={{ mt:1, textAlign: 'center' }}>Alison Yuan</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <MemberImg src={Percy} />
            <Typography variant="h3" color='primary.main' sx={{ mt:1, textAlign: 'center' }}>Percy Li</Typography>
          </Grid>
        </MemberGrid>
      </ContentContainer>
    </>
  )
}

export default Team;

const TitleContainer = styled.div`
  width: 85vw;
  display: block;
  margin: auto;
  padding-top: 2%;
  padding-bottom: 2%;

  @media only screen and (max-width: 680px) {
		padding-top: 6%;
	}
`

const ContentContainer = styled.div`
  width: 85vw;
  display: block;
  margin: auto;
`

const ContentPaper = styled(Paper)`
  display: block;
  margin: auto;
`

const MemberGrid = styled(Grid)`
  width: 85vw;
  padding-top: 4vh;
  padding-bottom: 10vh;
  align-items: center;
`

const MemberImg = styled.img`
  width: 20vw;
  border-radius: 10%;
  display: block;
  margin: auto;

  @media only screen and (max-width: 680px) {
		width: 30vw;
	}
`
