import { Trophy, Dumbbell } from "lucide-react";

export default function DisciplinesPage() {
  const disciplines = [
    {
      name: "Football",
      description:
        "Le sport roi en Afrique. Accompagnement des joueurs, entraîneurs et clubs dans leur développement professionnel.",
      emoji: "⚽",
    },
    {
      name: "Basketball",
      description:
        "Gestion de carrière et développement des talents dans cette discipline en pleine croissance sur le continent.",
      emoji: "🏀",
    },
    {
      name: "Volleyball",
      description:
        "Services dédiés aux volleyeurs et clubs pour optimiser performances et opportunités professionnelles.",
      emoji: "🏐",
    },
    {
      name: "Handball",
      description:
        "Accompagnement spécialisé pour les handballeurs camerounais et africains.",
      emoji: "🤾",
    },
    {
      name: "Athlétisme",
      description:
        "Soutien complet des athlètes : entraînement, compétitions, sponsoring et gestion de carrière.",
      emoji: "🏃",
    },
    {
      name: "Tennis",
      description:
        "Services personnalisés pour les joueurs de tennis : coaching, tournois et développement professionnel.",
      emoji: "🎾",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Disciplines Sportives
          </h1>
          <p className="text-xl max-w-3xl">
            ACOMZÉN accompagne les sportifs dans diverses disciplines pratiquées
            au Cameroun
          </p>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sports{" "}
              <span className="text-[#FFA500]">Collectifs & Individuels</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous offrons nos services dans les principales disciplines
              sportives pratiquées au Cameroun, avec une expertise adaptée aux
              spécificités de chaque sport.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {disciplines.map((discipline, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-[#B91C2E]"
              >
                <div className="text-6xl mb-4 text-center">
                  {discipline.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  {discipline.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {discipline.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-full flex items-center justify-center mb-6">
                <Dumbbell size={40} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#FFA500]">Fitness</span> & Préparation
                Physique
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Au-delà des disciplines sportives traditionnelles, ACOMZÉN
                propose également des services dédiés au{" "}
                <strong>fitness et à la préparation physique</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nos programmes incluent :
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#B91C2E] mr-2">•</span>
                  <span>Salles de fitness équipées et modernes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B91C2E] mr-2">•</span>
                  <span>Programmes d'entraînement personnalisés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B91C2E] mr-2">•</span>
                  <span>Coaching professionnel et suivi nutritionnel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B91C2E] mr-2">•</span>
                  <span>Préparation physique pour sportifs de haut niveau</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#FFA500] to-[#B91C2E] rounded-2xl shadow-2xl flex items-center justify-center">
                <Dumbbell size={120} className="text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy size={64} className="mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Votre discipline n'est pas listée ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous ! Nous sommes ouverts à accompagner des sportifs dans
            d'autres disciplines sportives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-[#B91C2E] font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl"
            >
              Nous contacter
            </a>
            <a
              href="/inscription"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#B91C2E] transition-all"
            >
              S'inscrire
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
