import { useState } from 'react';
import PatientForm from './PatientForm';
import DoctorForm from './DoctorForm';
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [role, setRole] = useState<string | null>(null);

  const handleRoleSelection = (selectedRole: string) => {
    setRole(selectedRole);
  };

  if (!role) {
    return (
      <div id='signin' className="font-mono py-24 flex flex-col items-center justify-center text-2xl m-20 bg-gray-600/50 border-none rounded-xl">
        <h1 className="text-3xl mb-6">
            <span className="font-bold py-2 text-lime-500 text-3xl ">
                Inscription
            </span>
        </h1>
        <p className="m-5">Vous êtes :</p>
        <div className="flex space-x-4 m-10">
          <button
            onClick={() => handleRoleSelection('patient')}
            className="px-4 py-2 bg-white/60 text-white border-2 border-white/60 rounded-md hover:bg-transparent hover:border-2 hover:border-gray-50"
          >
            <Link to="/patientForm">Patient</Link>
          </button>
          <button
            onClick={() => handleRoleSelection('doctor')}
            className="px-4 py-2 bg-lime-500 text-white rounded-md border-2 border-lime-500 hover:bg-lime-400"
          >
            <Link to="/doctorForm">Docteur</Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {role === 'patient' && <PatientForm />}
      {role === 'doctor' && <DoctorForm />}
    </div>
  );
};

export default SignIn ;
