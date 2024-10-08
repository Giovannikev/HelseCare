import { Link } from 'react-router-dom'

const Aside = () => {
    return(
        <aside className="w-64 h-auto bg-gray-700/30 text-white flex flex-col py-10 px-4">
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
        <Link to="/prescription" className="font-serif text-left bg-transparent border rounded-md border-lime-600 hover:bg-lime-600 py-2 px-4 rounded mb-4">
        Prescription
        </Link>

        <Link to="/ordonance" className="font-serif bg-transparent border rounded-md border-lime-600 hover:bg-lime-600 py-2 px-4 rounded mb-4 text-left">
          Mes Ordonances
        </Link>

        <Link to="/prescription" className="font-serif bg-transparent border rounded-md border-lime-600 hover:bg-lime-600 py-2 px-4 rounded mb-4 text-left">
          Prescriptions à prendre
        </Link>

        <Link to="/team" className="font-serif text-left bg-transparent border rounded-md border-lime-600 hover:bg-lime-600 py-2 px-4 rounded mb-4">
        Prendre un rendez-vous
        </Link>
      </aside>
    )
}
export default Aside