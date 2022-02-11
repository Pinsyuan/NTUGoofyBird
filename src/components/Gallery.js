import styled from "styled-components";
import img_14 from '../pic/14.png'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

function Gallery(){
  const openNewTab = () => {
		const newWindow = window.open('https://www.youtube.com/', '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	}

  return(
    <>
      <TitleContainer>
        <Typography variant="h2" component="span" sx={{ textAlign: {xs: 'center', sm: 'left'} }}>大笨鳥圖庫</Typography>
        <Typography variant="h2" component="span" color='secondary.main'>｜Gallery</Typography>
        <Button variant="contained" color="secondary" sx={{ height: 35, ml: 4, mb: 1.5 }} disableElevation onClick={openNewTab}>查看所有笨鳥</Button>
      </TitleContainer>

      <CharGrid container>
        <Grid item xs={12} sm={4}>
          <CharImg src={img_14} />
        </Grid>
        <Grid item xs={12} sm={8} sx={{ pl: { xs:0, sm:3 } }}>
          <Typography variant="h2" sx={{ pb: { xs:0, sm:2 }, textAlign: { xs:'center', sm:'left' } }}>#14</Typography>
          <FigureContainer>
            <Typography variant="h2" component="span" color='secondary.main'>發光眼鏡</Typography>
            <Typography variant="body1" component="span">&ensp;&ensp;&ensp;稀有度</Typography>
            <StarIcon sx={{ pl: 1, fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
          </FigureContainer>
          <FigureContainer>
            <Typography variant="h2" component="span" color='secondary.main'>棒棒糖</Typography>
            <Typography variant="body1" component="span">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;稀有度</Typography>
            <StarIcon sx={{ pl: 1, fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
          </FigureContainer>
          <FigureContainer>
            <Typography variant="h2" component="span" color='secondary.main'>醫師袍</Typography>
            <Typography variant="body1" component="span">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;稀有度</Typography>
            <StarIcon sx={{ pl: 1, fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
          </FigureContainer>
          <FigureContainer>
            <Typography variant="h2" component="span" color='secondary.main'>圖書館</Typography>
            <Typography variant="body1" component="span">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;稀有度</Typography>
            <StarIcon sx={{ pl: 1, fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
          </FigureContainer>
        </Grid>
      </CharGrid>

      <CharGrid container>
        <Grid item xs={12} sm={4}>
          <CharImg src={img_14} />
        </Grid>
        <Grid item xs={12} sm={8} sx={{ pl: { xs:0, sm:3 } }}>
          <Typography variant="h2" sx={{ pb: { xs:0, sm:2 }, textAlign: { xs:'center', sm:'left' } }}>#14</Typography>
          <FigureContainer>
            <Typography variant="h2" component="span" color='secondary.main'>發光眼鏡</Typography>
            <Typography variant="body1" component="span">&ensp;&ensp;&ensp;稀有度</Typography>
            <StarIcon sx={{ pl: 1, fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
          </FigureContainer>
          <FigureContainer>
            <Typography variant="h2" component="span" color='secondary.main'>棒棒糖</Typography>
            <Typography variant="body1" component="span">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;稀有度</Typography>
            <StarIcon sx={{ pl: 1, fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
          </FigureContainer>
          <FigureContainer>
            <Typography variant="h2" component="span" color='secondary.main'>醫師袍</Typography>
            <Typography variant="body1" component="span">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;稀有度</Typography>
            <StarIcon sx={{ pl: 1, fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
          </FigureContainer>
          <FigureContainer>
            <Typography variant="h2" component="span" color='secondary.main'>圖書館</Typography>
            <Typography variant="body1" component="span">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;稀有度</Typography>
            <StarIcon sx={{ pl: 1, fontSize: 15 }} />
            <StarIcon sx={{ fontSize: 15 }} />
          </FigureContainer>
        </Grid>
      </CharGrid>
    </>
  )
}

export default Gallery;


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

const CharGrid = styled(Grid)`
  width: 85vw;
  display: inline-flex;
  margin: auto;
  padding-top: 2%;
  padding-left: 2%;
`

const CharImg = styled.img`
  width: 20vw;
  border-radius: 10%;
  display: block;
  margin: auto;
`

const FigureContainer = styled.div`
  padding-bottom: 1.2%;

  @media only screen and (max-width: 680px) {
		text-align: center;
	}
`