const PharmacyPage = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-600/20 p-10 mt-20 mb-20 border border-none rounded-2xl">
      {/* Left Side - Text */}
      <div className="flex-1 text-left">
        <h1 className="text-4xl font-bold">Votre armoire à pharmacie dans votre poche.</h1>
        <p className="mt-4 text-lg text-gray-600">
          🔍 Retrouvez en quelques gestes l’intégralité de vos prescriptions.
        </p>
        <p className="mt-4 text-lg font-bold">
          Consultez les détails d’un médicament
        </p>
        <p className="mt-2 text-lg">
          N’importe où et n’importe quand : mode de prise, notice, date de péremption, etc.
        </p>
        <p className="mt-4 text-lg">
          À chaque prise, la quantité restante se met automatiquement à jour : <span className="font-bold">plus de mauvaises surprises</span>, Preskri vous affiche en temps réel de ce que vous possédez vraiment.
        </p>
      </div>

      <div className="flex-1 relative mt-10 md:mt-0">
        <img src="https://cdn.pixabay.com/photo/2020/09/02/15/08/ring-5538528_1280.jpg" alt="Nouvelle image" className="w-full rounded-lg shadow-lg bg-gray-500/30" />
      </div>
    </section>
  );
};

export default PharmacyPage;
