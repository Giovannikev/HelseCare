import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Features from './components/features/Features'
import Membership from './components/membership/Membership'
import Team from './components/team/Team'
import SignIn from './components/Signin/SignIn'
import PatientForm from './components/Signin/PatientForm'
import DoctorForm from './components/Signin/DoctorForm'
import Home from './components/home/Home'
import NewsLetter from './components/home/NewsLetter'

function App() {

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/team" element={<Team />} />
          <Route path="/features" element={<Features />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/patientForm" element={<PatientForm />} />
          <Route path="/doctorForm" element={<DoctorForm />} />
          <Route path="/contact" element={<NewsLetter />} />
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
