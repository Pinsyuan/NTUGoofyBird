import styled from "styled-components";
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';

function FAQ(){
  return(
    <>
      <TitleContainer>
        <Typography variant="h2" component="span" sx={{ textAlign: {xs: 'center', sm: 'left'} }}>常見問題</Typography>
        <Typography variant="h2" component="span" color='secondary.main'>｜FAQ</Typography>
      </TitleContainer>

      <QAContainer>
        <Typography variant="h3" component="span" sx={{ textAlign: {xs: 'center', sm: 'left'} }}>1.</Typography>
        <Typography variant="h3" component="span" color='text.main'>什麼是NFT？</Typography>
        <ContentPaper elevation={0} sx={{ mt: 3, borderRadius: 6 }}>
          <Container sx={{ p: 2, mb: 10 }}>
            <Typography variant="body1" sx={{ p: 3, textAlign: {xs: 'center', sm: 'left'} }}>
              NFT的全名為Non-Fungible Token，中文為「非同質化代幣」。
              <br /><br />
              廣義來說，NFT和比特幣、以太幣一樣，可視為加密貨幣的一種，但不同於比特幣和比特幣之間可以彼此等價交換，每一個NFT都有一個編碼，具有不可替代、獨一無二的特色，也就是非同質化的意思。
              <br /><br />
              而NFT的運作原理就是將圖片的所有權利用區塊鏈的技術代幣化，交易媒介從原本使用的紙鈔、硬幣，轉換成為數位化的公開帳本(Public Ledger)，而當我們購買了NFT，這筆交易紀錄就會被公開播送，讓系統發布到「所有人」的紀錄當中，且同一時間更新。
              <br /><br />
              那你可能會想，那我們可以在網路上下載到這項數位藝術品的jpg.檔案(甚至用截圖就好了)，當然沒錯！
              <br /><br />
              但你在網路上下載的檔案，並不是經區塊鏈認證的那個唯一的版本，也就是說，只有買下的得主擁有這枚NFT，讓這項藝術品獲得了獨一無二的價值。
            </Typography>
          </Container>
        </ContentPaper>
      </QAContainer>

      <QAContainer>
        <Typography variant="h3" component="span" sx={{ textAlign: {xs: 'center', sm: 'left'} }}>2.</Typography>
        <Typography variant="h3" component="span" color='text.main'>如何創建一個小狐狸錢包？</Typography>
        <ContentPaper elevation={0} sx={{ mt: 3, borderRadius: 6 }}>
          <Container sx={{ p: 2, mb: 10 }}>
            <Typography variant="body1" sx={{ p: 3, textAlign: {xs: 'center', sm: 'left'} }}>
              從MetaMask官網下載至瀏覽器擴充功能
              點「加到 Chrome」＞「新增擴充功能」＞ 點「開始使用」
              <br /><br />
              尚未有錢包的話：
              <br />
              1. 點「創建錢包」＞ 設定密碼後 ＞ 點「建立」＞ 看完一個影片（資安相關概念<br />
              2. 點「顯示註記詞」（盡可能採取物理方式備份，例如抄在紙上等，避免用螢幕截圖、打字紀錄或拍照儲存<br />
              3. 記下來後 ＞ 點「下一頁」＞ 把剛剛的註記詞按照順序點擊<br />
              4. 完成後，點「確認」
              <br /><br />
              *助記詞（Backup Phrase）是私鑰的一種表現形式，為了幫助我們記憶、記錄複雜的私鑰。也因為未經加密，只要任何人得到你的註記詞，就可以拿走你的資產。
            </Typography>
          </Container>
        </ContentPaper>
      </QAContainer>
    </>
  )
}

export default FAQ;

const TitleContainer = styled.div`
  width: 85vw;
  display: block;
  margin: auto;
  padding-top: 2%;

  @media only screen and (max-width: 680px) {
		padding-top: 6%;
	}
`

const QAContainer = styled.div`
  width: 85vw;
  display: block;
  margin: auto;
  padding-top: 2%;
`

const ContentPaper = styled(Paper)`
  display: block;
  margin: auto;
`
