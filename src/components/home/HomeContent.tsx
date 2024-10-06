const HomeContent = () => {
  return (
    <section className="flex flex-col md:flex-row items-center border border-none rounded-2xl bg-gray-600/30 p-10">
      <div className="flex-1 relative">
        <img src="https://cdn.pixabay.com/photo/2021/07/09/02/29/family-6398107_1280.jpg" alt="Main Image" className="w-full rounded-lg"/>
      </div>

      {/* Right side - Text */}
      <div className="flex-1 text-left mt-10 md:mt-0 md:ml-10">
        <h2 className="text-3xl font-bold">Pour les grands et les petits 👨‍👩‍👧‍👦</h2>
        <p className="mt-4 text-lg">
          À chacun·e son traitement ! Créez un profil pour <strong>chaque membre de votre foyer</strong> pour suivre de manière ciblée les traitements en cours.
        </p>
        <p className="mt-4 text-lg">
          Réduisez votre charge mentale en cas d'<strong>enfants malades</strong>, HelseCare vous aide à y voir plus clair et simplifie la routine de soin.
          <span className="text-green-500 text-2xl mr-2">✔</span>
        </p>
        <div className="flex items-center mt-4">
        </div>
        <p className="mt-4 text-lg">
          Vous aidez une personne en dehors de votre foyer ? Nous n'oublions pas <strong>les aidants</strong> et leurs difficultés quotidiennes : nous travaillons actuellement sur la gestion des traitements à distance 🤫.
        </p>
      </div>
    </section>
  );
};

export default HomeContent;
