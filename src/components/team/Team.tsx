const people = [
    {
      name: 'Giovanni Kevin',
      role: 'Front-end Developer',
      imageUrl:
        'https://th.bing.com/th/id/OIP.tWlXrSpgLzYpjvwP-uM4bAHaFQ?w=255&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
      name: 'Ny Ranto',
      role: 'Full-stack Developer',
      imageUrl:
        'https://th.bing.com/th/id/OIP.yrttlKeGNsnLV9CkwhXz1wHaEj?w=264&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
      name: 'ChatGpt',
      role: 'Copywriter',
      imageUrl:
        'https://th.bing.com/th?q=Chat+GPT+Logo.png+Transparent&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=MG&setlang=fr&adlt=moderate&t=1&mw=247',
    },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-white/60 border-2 rounded-xl mb-6 border-transparent py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-50">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-lime-300">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }