import Logo from '../pic/logo.png'
import styled from "styled-components";
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';

function Header(props){
	const openNewTab = () => {
		const newWindow = window.open('https://www.youtube.com/', '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	}

	return(
		<HeaderContainer>
			<LogoContainer>
				<LogoImg src={Logo} onClick={() => props.navigate('*')}/>
			</LogoContainer>
			<MenuGrid container spacing={1}>
				<Grid item xs={12} sm={3} sx={{ justifyContent:'center' }} onClick={() => props.navigate('./gallery')}>
					<Typography variant="h4">大笨鳥圖庫</Typography>
				</Grid>
				<Grid item xs={12} sm={3} onClick={() => props.navigate('./FAQ')}>
					<Typography variant="h4">常見問題</Typography>
				</Grid>
				<Grid item xs={12} sm={3} onClick={() => props.navigate('./ourTeam')}>
					<Typography variant="h4">製作團隊</Typography>
				</Grid>
				<Grid item xs={12} sm={3}>
					<MoreButton variant='contained' elevation={0} onClick={openNewTab}>擁有第一隻鳥</MoreButton>
				</Grid>
			</MenuGrid>
		</HeaderContainer>
	)
}

export default Header;

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	@media only screen and (max-width: 680px) {
		flex-direction: column;
	}
`

const LogoContainer = styled(Container)`
	width: 20vw;
	display: flex;
`

const LogoImg = styled.img`
	width: 8vw;
	padding-right: 6%;
	padding-left: 5%;
	cursor: pointer;
	
	@media only screen and (max-width: 680px) {
		display: block;
		margin: auto;
		width: 20vw;
	}
`

const MenuGrid = styled(Grid)`
	width: 50vw;
	padding-right: 5vw;
	text-align: center;
	align-items: center;
	cursor: pointer;

	@media only screen and (max-width: 680px) {
		padding-right: 0%;
	}
`

const MoreButton = styled(Button)`
	height: 6vh;

	@media only screen and (max-width: 680px) {
		height: 5vh;
	}
`