import crowbarLogo from './assets/crowbar.png'
import instagramLogo from './assets/instagram.svg'
import facebookLogo from './assets/facebook.svg'
import youtubeLogo from './assets/youtube.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <a href="https://teknolojiklevye.com" target="_blank">
        <img src={crowbarLogo} className="mainlogo crowbar" alt="Crowbar logo" />
      </a>
      <h1>Arka planda bol bol levye sallıyoruz...</h1>
      <h1>Sosyal medyada gözünüz üzerimizde olsun! </h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={instagramLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={facebookLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={youtubeLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
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
