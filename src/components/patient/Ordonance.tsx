const features = [
    { name: 'vitamine C', description: '1000g / jours', docteur:'Dr Dre' },
    { name: 'Doliprane', description: '1 comprimé avant chaque repas', docteur:'Dr Ny ranto' },
    { name: 'Charbon', description: 'matin et soir', docteur:'Dr Salohy' },
    { name: 'Fervex', description: '1 sachet matin midi et soir', docteur:'Dr Dre' },
    { name: 'Molvit', description: 'te hiteny movlit ftsn ', docteur:'Dr Dre' },
    { name: 'menaka mahagaga', description: 'menaka mahafaka ny fahantrana', docteur:'Dr Dre' },
  ]
  
  export default function Ordonance() {
    return (
      <div className="font-mono bg-gray-800/30 mx-5 my-5 rounded-xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-lime-500 sm:text-4xl">Ordonances</h2>
    
                <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 bg-gray-800/30">
                {features.map((feature) => (
                    <div key={feature.name} className="border-t border-gray-50 pt-4">
                    <dt className="font-medium text-lime-500">{feature.name} : {feature.docteur}</dt>
                    <dd className="mt-2 text-sm text-gray-50">{feature.description}</dd>
                        <div className="grid grid-col-2 mt-5">
                            <button className="text-gray-50 bg-transparent-500 border border-lime-500 rounded-sm hover:bg-lime-500">Partager</button> <br />
                            <button className="text-gray-50 bg-transparent-500 border border-lime-500 rounded-sm hover:bg-lime-500">voir</button>
                        </div>
                    </div>
                ))}
                </dl>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Première image avec son propre texte au survol */}
                <div className="relative group">
                    <img
                    alt="Description 1"
                    src="https://th.bing.com/th/id/OIP.tWlXrSpgLzYpjvwP-uM4bAHaFQ?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    className="rounded-lg bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                    <p className="text-white text-lg">Docteur Giovanni : Maitre</p>
                    </div>
                </div>

                {/* Deuxième image avec son propre texte au survol */}
                <div className="relative group">
                    <img
                    alt="Description 2"
                    src="https://th.bing.com/th/id/OIP.xVsFCIRH4-n2V70XgTOxwgHaEK?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    className="rounded-lg bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                    <p className="text-white text-lg">Docteur Ny Ranto : Ovy be</p>
                    </div>
                </div>

                {/* Troisième image avec son propre texte au survol */}
                <div className="relative group">
                    <img
                    alt="Description 3"
                    src="https://th.bing.com/th/id/OIP.xVsFCIRH4-n2V70XgTOxwgHaEK?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    className="rounded-lg bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                    <p className="text-white text-lg">Docteur Ny Ranto </p>
                    </div>
                </div>

                {/* Quatrième image avec son propre texte au survol */}
                <div className="relative group">
                    <img
                    alt="Description 4"
                    src="https://th.bing.com/th/id/OIP.xVsFCIRH4-n2V70XgTOxwgHaEK?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    className="rounded-lg bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                    <p className="text-white text-lg">Docteur Ny Ranto </p>
                    </div>
                </div>
                <div className="relative group">
                    <img
                    alt="Description 4"
                    src="https://th.bing.com/th/id/OIP.xVsFCIRH4-n2V70XgTOxwgHaEK?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    className="rounded-lg bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                    <p className="text-white text-lg">Docteur Ny Ranto </p>
                    </div>
                </div>
                <div className="relative group">
                    <img
                    alt="Description 4"
                    src="https://th.bing.com/th/id/OIP.xVsFCIRH4-n2V70XgTOxwgHaEK?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    className="rounded-lg bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                    <p className="text-white text-lg">Docteur Ny Ranto </p>
                    </div>
                </div>
            </div>

            
        </div>
      </div>
    )
  }