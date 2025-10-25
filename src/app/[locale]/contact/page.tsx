'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, Building } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-purple-600 via-purple-700 to-yellow-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              INSCRIPTIONS & CONTACTS
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Nous sommes à votre écoute pour toute question ou collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Header Card */}
              <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white shadow-xl">
                <h2 className="text-2xl font-bold mb-2">Contactez-nous</h2>
                <p className="text-purple-100 text-sm">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Adresse */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-purple-300 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-12 h-12 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">Adresse</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Sicap Liberté 3<br />
                        Dakar, Sénégal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-purple-300 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <a 
                        href="mailto:contact@africlinks.com" 
                        className="text-purple-600 hover:text-purple-700 font-medium text-sm inline-flex items-center group-hover:underline"
                      >
                        contact@africlinks.com
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-purple-300 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                      <a 
                        href="tel:+221 78 475 00 00" 
                        className="text-purple-600 hover:text-purple-700 font-medium text-sm inline-flex items-center group-hover:underline"
                      >
                        +221 78 475 00 00
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horaires */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-purple-300 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-12 h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">Horaires d'ouverture</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Lundi - Vendredi</span>
                          <span className="font-semibold text-gray-900">09h00 - 18h00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Samedi</span>
                          <span className="font-semibold text-gray-900">09h00 - 13h00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Dimanche</span>
                          <span className="font-semibold text-red-600">Fermé</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Suivez-nous sur les réseaux
                </h3>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-purple-500 hover:bg-purple-50 hover:scale-110 transition-all duration-300 shadow-sm" 
                    aria-label="Suivez-nous sur Facebook"
                  >
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 hover:scale-110 transition-all duration-300 shadow-sm" 
                    aria-label="Suivez-nous sur Twitter"
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-700 hover:bg-blue-50 hover:scale-110 transition-all duration-300 shadow-sm" 
                    aria-label="Suivez-nous sur LinkedIn"
                  >
                    <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Inscription au Forum</h2>
                  <p className="text-gray-600">Inscrivez-vous dès maintenant pour participer au Forum sur la Diplomatie Économique Interafricaine</p>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="mb-8 p-5 bg-green-50 border-2 border-green-200 rounded-xl text-green-800">
                    <p className="font-bold text-lg mb-1"> Message envoyé avec succès !</p>
                    <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                )}

                {/* Animated Google Forms Link */}
                <div className="space-y-8">
                  {/* Animated Card with Pulsing Effect */}
                  <div className="relative">
                    {/* Pulsing Background Animation */}
                    <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-blue-400 rounded-2xl opacity-20 animate-pulse"></div>
                    
                    {/* Main Content Card */}
                    <div className="relative bg-white border-2 border-purple-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Icon with Bounce Animation */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          {/* Animated Ring */}
                          <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-30"></div>
                          
                          {/* Icon Container */}
                          <div className="relative bg-linear-to-br from-purple-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                        Formulaire d'inscription
                      </h3>

                      {/* Description */}
                      <p className="text-center text-gray-600 mb-8 text-lg">
                        Merci de cliquer sur ce lien pour vous inscrire
                      </p>

                      {/* Animated Button */}
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScnJaLsOWLqQ5w-yl0D_9iJFuwK2Fd4Ju-YJZ7FOSd_oJq2dA/viewform?pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block w-full"
                      >
                        {/* Button Glow Effect */}
                        <div className="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 rounded-xl opacity-70 group-hover:opacity-100 blur transition duration-300 group-hover:duration-200 animate-pulse"></div>
                        
                        {/* Button Content */}
                        <div className="relative bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold text-lg py-6 px-8 rounded-xl flex items-center justify-center space-x-3 transform group-hover:scale-105 transition-all duration-300 shadow-xl">
                          <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                          <span className="group-hover:tracking-wide transition-all duration-300">
                            Accéder au formulaire d'inscription
                          </span>
                          <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </a>

                      {/* Additional Info */}
                      <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Le formulaire s'ouvrira dans un nouvel onglet</span>
                      </div>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-purple-50 rounded-xl p-4 text-center hover:bg-purple-100 transition-colors duration-300">
                      <div className="text-3xl mb-2">⏱️</div>
                      <p className="text-sm font-semibold text-gray-700">Rapide</p>
                      <p className="text-xs text-gray-500">Moins de 5 minutes</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 text-center hover:bg-blue-100 transition-colors duration-300">
                      <div className="text-3xl mb-2">🔒</div>
                      <p className="text-sm font-semibold text-gray-700">Sécurisé</p>
                      <p className="text-xs text-gray-500">Données protégées</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 text-center hover:bg-green-100 transition-colors duration-300">
                      <div className="text-3xl mb-2">✅</div>
                      <p className="text-sm font-semibold text-gray-700">Simple</p>
                      <p className="text-xs text-gray-500">Formulaire intuitif</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}