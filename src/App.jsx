import Favorites from "./components/Favorites/Favorites"
import Footer from "./components/Footer/Footer"
import HeroSlider from "./components/HeroSlider/HeroSlider"
import InfoSection from "./components/InfoSection/InfoSection"
import Navbar from "./components/Navbar/Navbar"
import NotificationBox from "./components/NotificationBox/NotificationBox"
import OptionsSlider from "./components/OptionsSlider/OptionsSlider"
import './styles/main.css'
function App() {

  return (
    <div className="app">
      <Navbar />
      <HeroSlider />
      <main>
        <OptionsSlider />
        <Favorites />
        <InfoSection />
      </main>
      <Footer />
      <NotificationBox />
    </div>
  )
}

export default App
