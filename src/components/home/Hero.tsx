import { Link } from "react-router-dom"

function Hero () {
    return(
        <div className="font-mono mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-50 ring-1 ring-lime-700 hover:ring-lime-500">
              De nouvelles Technologies de pointe pour vous aider.{' '}
              <Link to="/features"  className="font-semibold text-lime-500">
                <span aria-hidden="true" className="absolute inset-0" />
                En savoir plus<span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">
              L'Application qui gère vos Traitement du quotidien
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Une approche novatrice pour résoudre les difficultés lié aux suivis médical et de gestion des prescriptions
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <p
                className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
              >
                <Link to="/signin">Commencer !</Link>
              </p>
            </div>
          </div>
        </div>
    )
}
export default Hero