import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export default function Techno() {
    return (
      <div className="bg-transparent py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
            Techno we used 
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <p className='text-gray-50 font-semibold'>
                <img
                    alt="Vite"
                    src="vite.svg"
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />Vite.js
            </p>

            <p className='text-gray-50 font-semibold'>
                <img
                alt=""
                src="vite.svg"
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />React.js
            </p>

            <p className='text-gray-50 font-semibold'>
                <img
                alt=""
                src="vite.svg"
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />Django
            </p>
          </div>
        </div>
      </div>
    )
  }