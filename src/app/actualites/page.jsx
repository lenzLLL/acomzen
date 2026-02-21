"use client";

import { useState, useEffect } from "react";
import { Calendar, Tag } from "lucide-react";

export default function ActualitesPage() {
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActualites();
  }, []);

  const fetchActualites = async () => {
    try {
      const response = await fetch("/api/actualites");
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des actualités");
      }
      const data = await response.json();
      setActualites(data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white py-8 sm:py-12 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Actualités & Événements
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
            Restez informé de toute l'actualité sportive d'ACOMZÉN
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-8 sm:py-12">
              <div className="inline-block animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-[#B91C2E]"></div>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">Chargement des actualités...</p>
            </div>
          ) : actualites.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Aucune actualité pour le moment
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {actualites.map((actualite) => (
                <article
                  key={actualite.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden border-t-4 border-[#B91C2E]"
                >
                  {actualite.image_url && (
                    <img
                      src={actualite.image_url}
                      alt={actualite.titre}
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                  )}
                  <div className="p-3 sm:p-4 lg:p-6">
                    {actualite.categorie && (
                      <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                        <Tag size={14} className="text-[#FFA500]" />
                        <span className="text-xs sm:text-sm font-semibold text-[#FFA500]">
                          {actualite.categorie}
                        </span>
                      </div>
                    )}
                    <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {actualite.titre}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                      {actualite.contenu}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={14} className="mr-2" />
                      {formatDate(actualite.date_publication)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
            Ne manquez aucune actualité
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
            Suivez-nous sur nos réseaux sociaux pour rester informé de toutes
            nos nouveautés
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/inscription"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#B91C2E] text-white text-sm sm:text-base font-bold rounded-full hover:bg-[#9a1726] transition-all hover:shadow-xl"
            >
              S'inscrire
            </a>
            <a
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-200 text-gray-700 text-sm sm:text-base font-bold rounded-full hover:bg-gray-300 transition-all"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
