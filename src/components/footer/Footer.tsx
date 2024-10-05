

const sections = [
    {
        title: 'Solutions',
        items: ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud']
    },
    {
        title: 'Support',
        items: ['Pricing', 'Documentation', 'Guides', 'API', 'Status']
    },
    {
        title: 'Company',
        items: ['About', 'Blog', 'Jobs', 'Press', 'Partners']
    },
    {
        title: 'Legal',
        items: ['Claims', 'Privacy', 'Terms', 'Policies', 'Conditions']
    },
]

const Footer = () => {
    return(
        <>
            <div className="w-full px-6  mt-0 bg-gray-900 text-lime-500 px-2">
                <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-200 py-8">
                    {
                        sections.map((section,index) =>(
                            <div key={index}>
                                <h6 className="font-mono uppercase pt-2">
                                    {section.title}
                                </h6>
                                <ul>
                                    {
                                        section.items.map((item,i) => (
                                            <li key={i} className="font-mono py-1 text-gray-500 hover:text-gray-50 cursor-pointer">
                                                {item}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }

                    <div className="col-span-2 pt-8 md:pt-2">
                        <p className="font-mono uppercase">
                        Souscrire
                        </p>
                        <p className="font-mono text-gray-50">
                        Les dernières mises à jour, articles et ressources, envoyés chaque semaine dans votre boîte aux lettres électronique
                        </p>
                        <form action="" className="font-mono border-2 rounded-2xl border-lime-500 mt-2 mb-2 flex flex-col sm:flex-row">
                            <input type="email" placeholder="Entrez votre Email" className="w-full text-gray-50 px-2 mt-4 mb-4 mr-0 bg-transparent focus:outline-none" />
                        </form>
                            <button className="font-mono p-2 mb-4 border-2 border-lime-500 text-gray-50 bg-transparent rounded-md hover:bg-lime-500 hover:border-lime-500 hover:text-gray-900">Envoyer</button>
                    </div>
                </div>

                <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center sm-text-center text-gray-500">
                    <p>
                        <span className="font-mono py-8 text-lime-500">&copy;2024 <span className="text-xl"> HelseCare </span> , LLC. All rights reseved</span>
                    </p>
                    <div className="flex sm:w-[auto] text-2xl text-lime-500 space-x-4">
                        <i className="uil uil-facebook cursor-pointer px-2 hover:text-lime-400"></i>
                        <i className="uil uil-instagram cursor-pointer px-2 hover:text-lime-400"></i>
                        <i className="uil uil-github cursor-pointer px-2 hover:text-lime-400"></i>
                        <i className="uil uil-linkedin cursor-pointer  px-2 hover:text-lime-400"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer