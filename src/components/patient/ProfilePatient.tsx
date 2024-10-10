import { useState } from 'react';
import Aside from './Aside';

function ProfilePatient() {
  const [firstName, setFirstName] = useState('Sofia');
  const [lastName, setLastName] = useState('Rivers');
  const [email, setEmail] = useState('sofia@devias.io');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [chronicDisease, setChronicDisease] = useState('');
  
  const [, setProfilePicture] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('https://via.placeholder.com/150'); // Pour prévisualiser l'image

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePicture(file);

      // Pour afficher un aperçu de l'image téléchargée
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Logique pour gérer la soumission des données
    console.log({ firstName, lastName, email, phoneNumber, city, chronicDisease });
  };

  return (
    <div className='flex'>
      <Aside />
      <div className="flex justify-center py-10 px-4 w-full">
        <div className="w-full max-w-4xl bg-gray-800/30 shadow-md rounded-lg p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
            {/* Profil de l'utilisateur */}
            <div className="lg:w-1/3">
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full"
                  src={imagePreview}
                  alt="Profile"
                />
                <h2 className="mt-4 text-xl font-semibold">{firstName} {lastName}</h2>
                <p className="text-gray-500">Los Angeles, USA</p>
                <p className="text-gray-500">GTM-7</p>

                {/* Bouton pour changer la photo */}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="upload-button"
                  onChange={handleImageUpload}
                />
                <label
                  htmlFor="upload-button"
                  className="cursor-pointer mt-4 bg-lime-600 text-white py-2 px-4 rounded hover:bg-lime-500 transition"
                >
                  Upload Picture
                </label>
              </div>
            </div>

            {/* Formulaire de mise à jour du profil */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-semibold">Profile</h2>
              <p className="text-gray-500">Changez vos infos ici</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">First name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Last name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm text-gray-900"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium">Email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm text-gray-900"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Phone number</label>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm text-gray-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Chronic disease</label>
                    <input
                      type="text"
                      value={chronicDisease}
                      onChange={(e) => setChronicDisease(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm text-gray-900"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-lime-600 text-white font-medium rounded-md shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                  >
                    Save details
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePatient;
