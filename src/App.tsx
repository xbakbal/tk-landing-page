import crowbarLogo from './assets/tk-logo.png'
import instagramLogo from './assets/instagram.svg'
import facebookLogo from './assets/facebook.svg'
import youtubeLogo from './assets/youtube.svg'
import tiktokLogo from './assets/tiktok.svg'
import twitterLogo from './assets/twitter.svg'
import './App.css'

// function App() {
//   // const twitterAccount = "https://twitter.com/TeknolojikLevye/status/";
//   // const latestTweet = "1844054497414496740";

//   // const tweetLink = twitterAccount + latestTweet;

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       {/* <XEmbed url={tweetLink} width={325}/> */}
//       <InstagramEmbed url="https://www.instagram.com/p/DA6VNryNzrn/" width={328} captioned />
//     </div>
//   )
// }

function App() {
  return (
    <>
      <a href="https://teknolojiklevye.com" target="_blank">
        <img src={crowbarLogo} className="mainlogo crowbar" alt="Crowbar logo" />
      </a>
      <h1>Arka planda bol bol levye sallıyoruz...</h1>
      <h1>Sosyal medyada gözünüz üzerimizde olsun! </h1>
      <div>
        <a href="https://www.facebook.com/teknolojiklevye" target="_blank">
          <img src={facebookLogo} className="logo" alt="Facebook logo" />
        </a>
        <a href="https://www.instagram.com/teknolojiklevye" target="_blank">
          <img src={instagramLogo} className="logo" alt="Instagram logo" />
        </a>
        <a href="https://www.youtube.com/teknolojiklevye" target="_blank">
          <img src={youtubeLogo} className="logo" alt="Youtube logo" />
        </a>
        <a href="https://x.com/TeknolojikLevye" target="_blank">
          <img src={twitterLogo} className="logo" alt="X logo" />
        </a>
        <a href="https://www.tiktok.com/@teknolojiklevye" target="_blank">
          <img src={tiktokLogo} className="logo" alt="Tiktok logo" />
        </a>
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <XEmbed url="https://x.com/TeknolojikLevye/status/1843415762234413153" width={325} />
      </div> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hello!
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
