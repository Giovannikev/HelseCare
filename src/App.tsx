import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Membership from './components/membership/Membership'
import Team from './components/team/Team'
import Techno from './components/techno/Techno'

function App() {

  return (
    <>
    <Header />
    <div className="main">
      <Hero />
      <Membership />
      <Team />
      <Techno />
    </div>
    <Footer />
    </>
  )
}

export default App
