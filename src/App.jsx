import './styles/main.css'
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import FavoritosDaCasa from "./components/FavoritosDaCasa/FavoritosDaCasa"
import ConhecaMais from "./components/ConhecaMais/ConhecaMais"
import Categorias from "./components/Categorias/Categorias"
import Banner from "./components/Banner/Banner"
import Notificacao from "./components/Outros/Notificacao/Notificacao"
function App() {

  return (
    <div className="app">
      <Navbar />
      <Banner />
      <main>
        <Categorias />
        <FavoritosDaCasa />
        <ConhecaMais />
      </main>
      <Footer />
      <Notificacao />
    </div>
  )
}

export default App
