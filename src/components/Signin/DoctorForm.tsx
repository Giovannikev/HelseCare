import React, { useState } from 'react';

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    specialisation: '',
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
    console.log('Doctor data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-600/30 text-xl font-mono p-6 mt-6 shadow-md rounded-md">
        <h2 className="text-2xl mb-4">
            <span className="font-bold py-2 text-transparent text-4xl bg-clip-text bg-gradient-to-r from-lime-400 to-lime-500">
                Formulaire Docteur
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
            <label htmlFor="specialisation" className="block font-medium text-gray-50">Spécialisation :</label>
                <input
                type="text"
                id="specialisation"
                name="specialisation"
                value={formData.specialisation}
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

        <button type="submit" className="text-2xl bg-lime-600 hover:bg-lime-500 text-white px-4 py-2 rounded-md uppercase">S'inscrire</button>
    </form>
  );
};

export default DoctorForm;
