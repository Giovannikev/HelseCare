import Calendar from 'react-calendar';
import './calendar.css';

export default function Prescription() {

  const features = [
    { name: 'vitamine C', type: "comprimé", description: '1000g / jours', docteur: 'Dr Dre', src: "https://th.bing.com/th/id/OIP.W7NNdONWEXM2_wQ8QvEhYwHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: 'Doliprane', type: "comprimé", description: '1 comprimé avant chaque repas', docteur: 'Dr Ny ranto', src: "https://th.bing.com/th/id/OIP.7044tgzBMlQEep3kFRGouQHaHa?w=217&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: 'Charbon', type: "comprimé", description: 'matin et soir', docteur: 'Dr Salohy', src: "https://th.bing.com/th/id/OIP.FgqKSJ-X4jKrKa8md8r9VAHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: 'Fervex', type: "poudre", description: '1 sachet matin midi et soir', docteur: 'Dr Dre', src: "https://th.bing.com/th/id/OIP.b_G3He1n4ev6-x5JnDe1OwHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: 'Molvit', type: "sirop", description: 'te hiteny movlit ftsn ', docteur: 'Dr Dre', src: "https://th.bing.com/th/id/OIP.DG3JVJx7hBL0nhg72tcu8QHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: 'menaka mahagaga', type: "fahagagana", description: 'menaka mahafaka ny fahantrana', docteur: 'Dr Dre', src: "https://th.bing.com/th/id/OIP.ngR7hKvLP_Nf68VZc2GwwgHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  ];

  return (
    <main className="font-mono flex-1 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Section Prescription */}
        <section className="lg:col-span-2 bg-gray-800/30 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-50">Prescription</h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center bg-gray-600/30 p-4 rounded-md"
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-gray-300 rounded-full w-12 h-12 mr-4">
                    <img src={feature.src} alt={feature.name} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-md font-semibold">{feature.name}</h3>
                    <p className="text-sm text-gray-500">{feature.type}</p>
                  </div>
                </div>
                <div className="text-center mb-4 md:mb-0">
                  <p className="text-gray-50">à 17 h 15</p>
                </div>
                <div className="text-center mb-4 md:mb-0">
                  <p className="text-gray-50">x 3</p>
                </div>
                <button className="bg-lime-500 text-white px-4 py-2 rounded-lg">
                  Prendre
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section Calendrier et Stocks faibles */}
        <section className="flex flex-col space-y-4">
          {/* Calendrier */}
          <div className="bg-gray-800/30 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Calendrier</h2>
            <Calendar
              className="custom-calendar"
            />
          </div>

          {/* Stocks faibles */}
          <div className="bg-gray-800/30 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Stocks faibles</h2>
            <div className="space-y-2">
              {[
                { name: "NUVAN XD", remaining: 6 },
                { name: "Aspirine", remaining: 4 },
                { name: "Ibuprofène", remaining: 2 },
                { name: "Paracétamol", remaining: 1 }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-700 p-2 rounded-md"
                >
                  <p className="text-gray-50">{item.name}</p>
                  <p className="text-gray-50">restant: {item.remaining}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
