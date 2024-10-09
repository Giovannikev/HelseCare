import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

const Aside = () => {
  const [isOpen, setIsOpen] = useState(true); // État pour gérer la visibilité de la barre latérale

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Inverser l'état pour masquer ou afficher
  };

  return (
    <div className="relative">
      {/* Bouton pour masquer ou afficher la barre latérale */}
      <button
        onClick={toggleSidebar}
        className="absolute top-2 left-2 z-50 text-white bg-lime-600 p-2 rounded-md focus:outline-none"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />} {/* Affiche l'icône de fermeture ou d'ouverture */}
      </button>

      {/* Affichage conditionnel de la barre latérale */}
      {isOpen && (
        <aside className="w-64 h-auto bg-transparent text-white flex flex-col py-10 px-4 transition-all duration-300 ease-in-out">
          <div className="mb-8 flex flex-wrap">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="https://th.bing.com/th/id/OIP.xVsFCIRH4-n2V70XgTOxwgHaEK?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Profile"
            />
            <p className="mx-auto font-bold mt-4">Ny Ranto <br />
              <a className="font-mono">Patient</a>
            </p>
          </div>
          <Link to="/prescription" className="font-serif text-left bg-transparent border rounded-md border-lime-600 hover:bg-lime-600 py-2 px-4 mb-4">
          📄 Prescriptions
          </Link>

          <Link to="/ordonance" className="font-serif bg-transparent border rounded-md border-lime-600 hover:bg-lime-600 py-2 px-4 mb-4 text-left">
          📋 Mes ordonnances
          </Link>

          <Link to="/medicaments" className="font-serif bg-transparent border rounded-md border-lime-600 hover:bg-lime-600 py-2 px-4 mb-4 text-left">
          💊 Médicaments
          </Link>

          <Link to="/rendez-vous" className="font-serif text-left bg-transparent border rounded-md border-lime-600 hover:bg-lime-600 py-2 px-4 mb-4">
          📅 Rendez-vous
          </Link>

          <Link to="/profile" className="font-serif text-left bg-transparent border rounded-md border-lime-600 hover:bg-lime-600 py-2 px-4 mb-4">
            Profile
          </Link>
        </aside>
      )}
    </div>
  );
};

export default Aside;
