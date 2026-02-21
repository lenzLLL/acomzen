import {
  Zap,
  Heart,
  Video,
  Gamepad2,
  Smartphone,
  Brain,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";

export default function TechnologiePage() {
  const domains = [
    {
      title: "Performance des Athlètes",
      icon: TrendingUp,
      features: [
        "Capteurs biométriques (mesure du rythme cardiaque, vitesse, fatigue)",
        "Logiciels d'analyse vidéo pour corriger les gestes techniques",
      ],
    },
    {
      title: "Prévention des Blessures",
      icon: Shield,
      features: [
        "Outils de suivi en temps réel pour détecter les surcharges",
        "Matériaux innovants (chaussures absorbant mieux les chocs)",
      ],
    },
    {
      title: "Expérience des Spectateurs",
      icon: Video,
      features: [
        "Diffusion en réalité augmentée ou réalité virtuelle",
        "Applications mobiles pour suivre les statistiques en direct",
      ],
    },
    {
      title: "Gestion et Organisation",
      icon: Users,
      features: [
        "Plateformes de billetterie numérique",
        "Outils de gestion des clubs et académies sportives",
      ],
    },
    {
      title: "E-sport et Sport Virtuel",
      icon: Gamepad2,
      features: [
        "Jeux vidéo compétitifs intégrés dans l'écosystème sportif",
        "Compétitions en ligne pour tous les niveaux",
      ],
    },
  ];

  const applications = [
    {
      title: "Suivi des Joueurs",
      description:
        "Suivi des joueurs amateurs et professionnels via applications mobiles adaptées aux réalités locales",
      icon: Smartphone,
    },
    {
      title: "E-learning Sportif",
      description:
        "Plateformes e-learning sportives pour former entraîneurs et athlètes à distance",
      icon: Brain,
    },
    {
      title: "Infrastructures Intelligentes",
      description:
        "Développement d'infrastructures intelligentes (terrains avec capteurs, salles de fitness connectées)",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white py-8 sm:py-12 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Technologie du Sport
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
            Innovons ensemble pour transformer la pratique sportive en Afrique
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center w-full max-w-sm">
                <div className="text-5xl mb-3">🏟️</div>
                <h3 className="text-xl font-bold mb-1">Technologie du Sport</h3>
                <p className="text-sm text-gray-600">Outils & innovations pour performance, sécurité, spectateurs et gestion</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Qu'est-ce que la Technologie du Sport ?</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La technologie du sport désigne l’ensemble des outils, équipements et innovations numériques qui améliorent la pratique sportive — qu’il s’agisse de la performance des athlètes, de la sécurité, de l’expérience des spectateurs ou de la gestion des clubs. Elle englobe les capteurs connectés, les applications d’analyse de données, les infrastructures modernes et l’e‑sport.
              </p>

              <p className="text-gray-700 mb-4">
                <strong>Elle inclut :</strong> les équipements physiques (<em>chaussures, vêtements, terrains intelligents</em>) et les solutions numériques (<em>logiciels, IA, réalité augmentée, big data</em>).
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center gap-2 bg-[#FFF7ED] text-[#C2410C] px-3 py-1 rounded-full text-sm">Chaussures</span>
                <span className="inline-flex items-center gap-2 bg-[#FFF7ED] text-[#C2410C] px-3 py-1 rounded-full text-sm">Vêtements</span>
                <span className="inline-flex items-center gap-2 bg-[#FFF7ED] text-[#C2410C] px-3 py-1 rounded-full text-sm">Terrains intelligents</span>
                <span className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1E40AF] px-3 py-1 rounded-full text-sm">Logiciels</span>
                <span className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1E40AF] px-3 py-1 rounded-full text-sm">IA</span>
                <span className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1E40AF] px-3 py-1 rounded-full text-sm">Réalité augmentée</span>
                <span className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1E40AF] px-3 py-1 rounded-full text-sm">Big data</span>
              </div>

              <h4 className="text-lg font-semibold mb-3">🏋️‍♂️ Domaines principaux</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                <div className="p-4 border rounded-lg bg-gray-50">
                  <strong>Performance des athlètes</strong>
                  <p className="text-sm mt-2">Capteurs biométriques (mesure du rythme cardiaque, vitesse, fatigue) et logiciels d’analyse vidéo pour corriger les gestes techniques.</p>
                </div>

                <div className="p-4 border rounded-lg bg-gray-50">
                  <strong>Prévention des blessures</strong>
                  <p className="text-sm mt-2">Outils de suivi en temps réel pour détecter les surcharges; matériaux innovants (chaussures absorbant mieux les chocs).</p>
                </div>

                <div className="p-4 border rounded-lg bg-gray-50">
                  <strong>Expérience des spectateurs</strong>
                  <p className="text-sm mt-2">Diffusion en réalité augmentée/virtuelle et applications mobiles pour suivre les statistiques en direct.</p>
                </div>

                <div className="p-4 border rounded-lg bg-gray-50">
                  <strong>Gestion et organisation</strong>
                  <p className="text-sm mt-2">Plateformes de billetterie numérique et outils de gestion des clubs et académies sportives.</p>
                </div>

                <div className="p-4 border rounded-lg bg-gray-50 col-span-full">
                  <strong>E-sport et sport virtuel</strong>
                  <p className="text-sm mt-2">Jeux vidéo compétitifs intégrés dans l’écosystème sportif; compétitions en ligne pour tous les niveaux.</p>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="font-semibold mb-2">La technologie du sport peut être appliquée à :</h5>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>Suivi des joueurs amateurs et professionnels via applications mobiles adaptées aux réalités locales.</li>
                  <li>Plateformes e-learning sportives pour former entraîneurs et athlètes à distance.</li>
                  <li>Développement d’infrastructures intelligentes (terrains avec capteurs, salles de fitness connectées).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines Principaux */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              Domaines Principaux
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
              Explorez les différents domaines d'application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {domains.map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4 sm:p-6 border-t-4 border-[#FFA500]"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                      <IconComponent className="text-white" size={18} />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900">
                      {domain.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {domain.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm lg:text-base text-gray-700">
                        <span className="text-[#FFA500] font-bold mr-2 flex-shrink-0">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications Concrètes */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              Applications <span className="text-[#FFA500]">Concrètes</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
              Comment ACOMZÉN intègre la technologie du sport
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {applications.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-full p-3 sm:p-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 text-center">
                    {app.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 text-center">{app.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation & Avenir */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              L'Avenir du Sport en Afrique
            </h2>
            <p className="text-xs sm:text-sm lg:text-lg mb-6 sm:mb-8 leading-relaxed">
              ACOMZÉN SPORTS MANAGEMENT s'engage à intégrer les innovations
              technologiques pour offrir aux athlètes africains les mêmes
              opportunités et ressources que leurs homologues mondiaux. Notre
              vision est de créer un écosystème sportif africain performant,
              transparent et professionnalisé.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-3">Nos Engagements</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>✓ Investir dans les infrastructures modernes</li>
                  <li>✓ Former les entraîneurs aux outils technologiques</li>
                  <li>✓ Rendre la technologie accessible à tous les niveaux</li>
                  <li>✓ Créer des opportunités d'emploi numériques</li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-20 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-3">Nos Objectifs</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>✓ Développer l'e-sport en Afrique</li>
                  <li>✓ Améliorer la performance des athlètes</li>
                  <li>✓ Prévenir les blessures sportives</li>
                  <li>✓ Professionnaliser la gestion des clubs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
            Prêt à Transformer Votre Performance ?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contactez-nous pour découvrir comment la technologie du sport peut
            révolutionner votre pratique.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white text-sm sm:text-base font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
          >
            Nous Contacter
          </a>
        </div>
      </section>
    </div>
  );
}
