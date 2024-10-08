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
import Contact from './components/home/Contact'
import Legal from './components/legal/Legal'
import PrescriptionPage from './components/patient/PrescriptionPage'
import OrdonancePage from './components/patient/OrdonancePage'
import ProfilePatient from './components/patient/ProfilePatient'



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
          <Route path="/contact" element={<Contact />} />
          <Route path="/Legal" element={<Legal />} />
          <Route path="/prescription" element={<PrescriptionPage />} />
          <Route path="/ordonance" element={<OrdonancePage />} />
          <Route path="/profile" element={<ProfilePatient />} />
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
