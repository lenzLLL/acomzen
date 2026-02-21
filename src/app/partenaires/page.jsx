import { Handshake, Building, Award, Target, Users } from "lucide-react";

export default function PartenairesPage() {
  const partners = [
    {
      name: "Reform Sports",
      logo: "https://ucarecdn.com/e9cdc71a-06a4-463f-8bec-c09bed8ee16f/-/format/auto/",
      category: "Sport & Équipement",
    },
    {
      name: "Ideal Medic Pharma",
      logo: "https://ucarecdn.com/ef2683c9-b728-4051-ad18-ab56de9257c6/-/format/auto/",
      category: "Santé & Médecine",
    },
    {
      name: "Same Éducation",
      logo: "https://ucarecdn.com/e40eb4ed-3382-47dc-b661-e7ac78ec3090/-/format/auto/",
      category: "Éducation",
    },
    {
      name: "Second Harvard Shina",
      logo: "https://ucarecdn.com/b8ea732c-663b-40a9-8293-2ad2696e2d70/-/format/auto/",
      category: "Éducation",
    },
    {
      name: "Bantoucao",
      logo: "https://ucarecdn.com/aadec807-249e-405e-b31b-c0263a244100/-/format/auto/",
      category: "Bien-être",
    },
    {
      name: "PIGA Groupe",
      logo: "https://ucarecdn.com/3a96073d-b7c7-473d-96cf-ee9b7f5021a6/-/format/auto/",
      category: "Groupe",
    },
    {
      name: "Terrific Coffee",
      logo: "https://ucarecdn.com/115502b7-e736-4012-8ae3-6e8c20e47818/-/format/auto/",
      category: "Restauration",
    },
    {
      name: "Asenia",
      logo: "https://ucarecdn.com/3d258937-2306-4e87-8240-501e51664aac/-/format/auto/",
      category: "Services",
    },
    {
      name: "Dollars Bijoux",
      logo: "/n1.jpeg",
      category: "Bijouterie",
    },
    {
      name: "MK Industry",
      logo: "/n2.jpeg",
      category: "Industrie",
    },
    {
      name: "Ecole Bilingue technique Aurum",
      logo: "/n3.jpeg",
      category: "Éducation",
    },
    {
      name: "Mayen",
      logo: "/n4.jpeg",
      category: "Services",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background */}
      <section className="relative bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white py-8 sm:py-12 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Nos Partenaires
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
            Ensemble pour le développement du sport africain
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              Ils nous <span className="text-[#FFA500]">font confiance</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              ACOMZÉN SPORTS MANAGEMENT collabore avec des partenaires
              prestigieux pour offrir les meilleurs services aux sportifs
              africains.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-[#B91C2E]"
              >
                <div className="flex items-center justify-center mb-3 sm:mb-4 h-20 sm:h-24">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 sm:max-h-20 max-w-full object-contain"
                  />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 text-center mb-1 sm:mb-2">
                  {partner.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center">
                  {partner.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              Pourquoi
              <span className="text-[#B91C2E]"> devenir partenaire ?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Handshake size={24} className="text-white" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Visibilité
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                Augmentez votre visibilité auprès des sportifs et du monde
                sportif africain
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#FFA500] to-[#B91C2E] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Building size={24} className="text-white" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Réseau</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                Accédez à notre réseau de sportifs, clubs et institutions
                sportives
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Handshake size={24} className="text-white" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Impact</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                Contribuez au développement du sport africain et à la réussite
                des talents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake size={48} className="mx-auto mb-4 sm:mb-6 opacity-90" />
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Intéressé par un partenariat ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8">
            Contactez-nous pour discuter des opportunités de collaboration
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#B91C2E] text-sm sm:text-base font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
}
