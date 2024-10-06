import React, { useState } from 'react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    age: '',
    email: '',
    numero: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Patient data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="font-mono text-xl bg-gray-600/30 p-6 mt-6 shadow-md rounded-md">
        <h2 className="text-2xl text mb-4">
            <span className="font-bold py-2 text-transparent text-4xl bg-clip-text bg-gradient-to-r from-lime-400 to-lime-500">
                Formulaire Patient
            </span>
        </h2>
        <div className="mb-4">
            <label htmlFor="nom" className="block font-medium text-gray-50">Nom :</label>
                <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none"
                required
                />
        </div>

        <div className="mb-4">
            <label htmlFor="prenom" className="block font-medium text-gray-50">Prénom :</label>
                <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none"
                required
                />
        </div>

        <div className="mb-4">
            <label htmlFor="age" className="block font-medium text-gray-50">Âge :</label>
                <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none"
                required
                />
        </div>

        <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-50">Email :</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none"
                required
                />
        </div>

        <div className="mb-4">
            <label htmlFor="numero" className="block font-medium text-gray-50">Numéro de téléphone :</label>
                <input
                type="tel"
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none"
                required
                />
        </div>

        <button type="submit" className="bg-lime-500 hover:bg-lime-400 text-white px-4 py-2 rounded-md focus:outline-none uppercase">S'inscrire</button>
    </form>
  );
};

export default PatientForm;
