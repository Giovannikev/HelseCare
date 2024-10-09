import { useState } from 'react';
const doctors = [
    { name: 'Dr Ny Ranto', role: 'Sage femme' },
    { name: 'Dr Ny Saholy', role: 'Sage femme' },
    { name: 'Dr Giovanni', role: 'Maitre' },
    { name: 'Dr ovy', role: 'fritte' },
  ];
  
  const prescriptions = [
    {
      title: 'grippe',
      doctor: 'Dr Dre',
      date: '39 - 02 - 2024',
      details: [
        { name: 'amoxy', dosage: '3 × 6 Jours', qty: '2g', weight: '2kg', time: '5T' },
        { name: 'doliprane XD', dosage: '3 × 6 Jours', qty: '18g', weight: '2kg', time: '5T' },
        { name: 'tsaiko XD', dosage: '3 × 6 Jours', qty: '2g', weight: '2kg', time: '5T' },
      ],
    },
    {
      title: 'Tetanos',
      doctor: 'Dr Kakana',
      date: '39 - 02 - 2024',
      details: [
        { name: 'Carbonate', dosage: '3 × 6 Jours', qty: '2g', weight: '2kg', time: '5T' },
        { name: 'carotte', dosage: '3 × 6 Jours', qty: '20g', weight: 'kg', time: '5T' },
        { name: 'fruit', dosage: '3 × 6 Jours', qty: '2g', weight: '2kg', time: '5T' },
      ],
    },
    {
      title: 'Tetanos',
      doctor: 'Dr Kakana',
      date: '39 - 02 - 2024',
      details: [
        { name: 'Carbonate', dosage: '3 × 6 Jours', qty: '2g', weight: '2kg', time: '5T' },
        { name: 'carotte', dosage: '3 × 6 Jours', qty: '20g', weight: 'kg', time: '5T' },
        { name: 'fruit', dosage: '3 × 6 Jours', qty: '2g', weight: '2kg', time: '5T' },
      ],
    },
  ];

export default function Ordonance() {
    const [sidebarVisible] = useState(true);
  return (
    <div className={`p-8 w-full transition-all duration-300 ease-in-out ${sidebarVisible ? 'ml-64' : ''}`}>
        <h1 className="text-3xl font-bold mb-6">Mes docteurs</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-gray-700/30 p-4 rounded-lg text-center"><img src="vite.svg" alt="" className='border rounded-full'/>
              <h2 className="mt-4 font-semibold">{doctor.name}</h2>
              <p className="text-sm text-gray-500">{doctor.role}</p>
            </div>
          ))}
        </div>

        <h1 className="text-3xl font-bold mb-6">Ordonnances</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prescriptions.map((prescription, index) => (
            <div key={index} className="bg-gray-700/30 p-4 rounded-lg shadow-lg">
              <h2 className="font-semibold text-lg">{prescription.title}</h2>
              <p className="text-sm text-gray-600">Docteur: {prescription.doctor}</p>
              <p className="text-sm text-gray-600">Date: {prescription.date}</p>
              <div className="mt-4">
                {prescription.details.map((detail, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-lime-500 p-2 rounded-lg mb-2">
                    <div className="text-white">{detail.name}</div>
                    <div className="text-white">{detail.dosage}</div>
                    <div className="text-white">{detail.qty}</div>
                    <div className="text-white">{detail.weight}</div>
                    <div className="text-white">{detail.time}</div>
                  </div>
                ))}
                <p className="text-gray-500 mt-4">+ 6 Autres</p>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-lime-500 text-white py-2 rounded-lg">Partager</button>
                <button className="flex-1 bg-lime-500 text-white py-2 rounded-lg">Voir</button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
