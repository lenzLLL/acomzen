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
      <section className="relative bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technologie du Sport
          </h1>
          <p className="text-xl max-w-3xl">
            Innovons ensemble pour transformer la pratique sportive en Afrique
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Qu'est-ce que la Technologie du Sport ?
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              La technologie du sport désigne l'ensemble des outils, équipements
              et innovations numériques qui améliorent la pratique sportive,
              qu'il s'agisse de la performance des athlètes, de la sécurité, de
              l'expérience des spectateurs ou de la gestion des clubs. Elle
              englobe aussi bien les capteurs connectés, les applications
              d'analyse de données, que les infrastructures modernes et
              l'e-sport.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#FFA500]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Équipements & Solutions
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#B91C2E] font-bold mr-3">•</span>
                <span>
                  <strong>Équipements physiques :</strong> chaussures, vêtements,
                  terrains intelligents
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#B91C2E] font-bold mr-3">•</span>
                <span>
                  <strong>Solutions numériques :</strong> logiciels, IA, réalité
                  augmentée, big data
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Domaines Principaux */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Domaines Principaux
            </h2>
            <p className="text-lg text-gray-600">
              Explorez les différents domaines d'application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border-t-4 border-[#FFA500]"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-full p-3 mr-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {domain.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {domain.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-[#FFA500] font-bold mr-2">→</span>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Applications <span className="text-[#FFA500]">Concrètes</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comment ACOMZÉN intègre la technologie du sport
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {app.title}
                  </h3>
                  <p className="text-gray-700 text-center">{app.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation & Avenir */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6">
              L'Avenir du Sport en Afrique
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              ACOMZÉN SPORTS MANAGEMENT s'engage à intégrer les innovations
              technologiques pour offrir aux athlètes africains les mêmes
              opportunités et ressources que leurs homologues mondiaux. Notre
              vision est de créer un écosystème sportif africain performant,
              transparent et professionnalisé.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Nos Engagements</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Investir dans les infrastructures modernes</li>
                  <li>✓ Former les entraîneurs aux outils technologiques</li>
                  <li>✓ Rendre la technologie accessible à tous les niveaux</li>
                  <li>✓ Créer des opportunités d'emploi numériques</li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Nos Objectifs</h3>
                <ul className="space-y-2 text-sm">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à Transformer Votre Performance ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour découvrir comment la technologie du sport peut
            révolutionner votre pratique.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
          >
            Nous Contacter
          </a>
        </div>
      </section>
    </div>
  );
}
