import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function NewsLetter() {
  return (
    <div className="relative isolate border-0 rounded-2xl m-20 overflow-hidden bg-gray-600/30 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Souscrivez à la Newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Rejoignez-nous !
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Entrez votre mail"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-lime-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
              >
                Souscrire
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-lime-500" />
              </div>
              <dt className="mt-4 font-semibold text-white">24/7 <i className="uil uil-headphones"></i> </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Tsaiko
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-lime-500" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Toutes communication est sollicité
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}