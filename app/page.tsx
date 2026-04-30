'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Star, Calendar, Video, Clock, 
  Stethoscope, MessageCircleHeart, Brain,
  CheckCircle2, Building2, MapPin, MessageCircle
} from 'lucide-react';

export default function DrFarhanWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const WHATSAPP_NUMBER = '923480403153';

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#f8faff] font-inter text-slate-800 selection:bg-[#f5a623] selection:text-[#0a2342] flex flex-col">
      {/* STICKY NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 h-20 bg-[#0a2342]/95 backdrop-blur-md text-white flex items-center shadow-lg border-b border-white/10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={() => scrollTo('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-[#f5a623] to-amber-500 rounded-lg flex items-center justify-center font-bold text-[#0a2342] text-xl shadow-md">F</div>
            <h1 className="font-poppins font-bold text-xl tracking-tight">
              Dr. Farhan <span className="font-normal opacity-80 hidden sm:inline-block">| General Physician</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-[#f5a623] transition-colors text-base"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="bg-[#f5a623] text-[#0a2342] font-bold px-6 py-2.5 rounded-full hover:brightness-110 hover:scale-105 transition-all shadow-sm text-base"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:text-[#f5a623] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0a2342] border-t border-white/10 overflow-hidden shadow-2xl absolute top-20 left-0 w-full"
            >
              <div className="px-6 pt-4 pb-8 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="block w-full text-left px-4 py-3 text-white font-medium hover:bg-white/10 rounded-lg text-lg"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-6">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="w-full bg-[#f5a623] text-[#0a2342] font-bold px-4 py-4 rounded-xl shadow-sm text-center text-lg"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-1 w-full pt-20 flex flex-col">
        {/* HERO SECTION */}
        <section id="home" className="bg-gradient-to-br from-[#0a2342] via-[#102f54] to-[#1a3a5f] text-white py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
          </div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <motion.div 
              className="text-[#f5a623] text-sm sm:text-base font-bold uppercase tracking-widest mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block"
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            >
              Certified Professional
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-poppins text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.15] mb-6 tracking-tight max-w-4xl"
            >
              Your Health, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5a623] to-amber-300">Our Priority</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-blue-100 mb-10 opacity-90 max-w-2xl leading-relaxed"
            >
              Trusted General Physician in Pakistan. Providing comprehensive in-clinic, online, and premium hospital consultations.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full max-w-4xl"
            >
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Dr. Farhan, I would like to book an In-Clinic Appointment.")}`}
                target="_blank" rel="noopener noreferrer"
                className="bg-[#f5a623] text-[#0a2342] py-4 px-8 rounded-xl font-bold text-lg text-center hover:bg-amber-400 hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book In-Clinic Focus
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Dr. Farhan, I would like to book a Video Consultation.")}`}
                target="_blank" rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm py-4 px-8 rounded-xl font-bold text-lg text-center transition-all text-white hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Video className="w-5 h-5" />
                Video Consultation
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Dr. Farhan, I would like to book an appointment at Farooq Hospital DHA.")}`}
                target="_blank" rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 py-4 px-8 rounded-xl font-bold text-lg text-center transition-all text-white hover:scale-105 shadow-lg flex items-center justify-center gap-2 sm:w-auto w-full"
              >
                <Building2 className="w-5 h-5" />
                Farooq Hospital DHA
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 sm:gap-16 text-base sm:text-lg"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1 text-[#f5a623]">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="font-semibold text-white">4.9/5 Rating</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl font-bold text-white tracking-tight">46+</span>
                <span className="opacity-80 text-blue-100">Happy Patients</span>
              </div>
              <div className="flex flex-col items-center gap-2 hidden sm:flex">
                <Stethoscope className="w-8 h-8 text-[#f5a623]" />
                <span className="opacity-80 text-blue-100">Certified Care</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT DR. FARHAN */}
        <section id="about" className="py-20 lg:py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <div>
                <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-[#f5a623] rounded-full"></div>
                  <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0a2342]">Meet Dr. Farhan</h2>
                </motion.div>
                
                <motion.p variants={fadeIn} className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
                  Dr. Farhan is a certified General Physician known for his thorough checkups, warm bedside manner, and patient-first approach. He provides comprehensive consultations covering medication, diet planning, exercise guidance, and mental health support.
                </motion.p>

                <motion.div variants={staggerContainer} className="flex flex-col gap-6">
                  <motion.div variants={fadeIn} className="flex items-start gap-4">
                    <div className="bg-sky-50 text-sky-600 p-3 rounded-xl"><Stethoscope className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-lg text-[#0a2342]">Proper & Accurate Diagnosis</h4>
                      <p className="text-slate-600">No stone left unturned for correct treatment.</p>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeIn} className="flex items-start gap-4">
                    <div className="bg-amber-50 text-[#f5a623] p-3 rounded-xl"><MessageCircleHeart className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-lg text-[#0a2342]">Patient Listener</h4>
                      <p className="text-slate-600">Ample time dedicated to hearing your concerns.</p>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeIn} className="flex items-start gap-4">
                    <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl"><Brain className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-lg text-[#0a2342]">Holistic Treatment</h4>
                      <p className="text-slate-600">Integrating full body and mental well-being for complete care.</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              <motion.div variants={fadeIn} className="relative">
                <div className="aspect-[4/5] bg-gradient-to-tr from-slate-200 to-slate-100 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white">
                  {/* Decorative element since no image is provided */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0a2342] text-white">
                    <div className="text-center p-8">
                      <Stethoscope className="w-24 h-24 mx-auto mb-6 text-[#f5a623] opacity-50" />
                      <h3 className="text-2xl font-poppins font-bold">Dr. Farhan</h3>
                      <p className="text-slate-400">General Physician</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                  <div className="flex gap-2 text-[#f5a623] mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <div className="font-bold text-slate-800">Top Rated Doctor</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 lg:py-32 bg-slate-50 relative">
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-[#f5a623] font-bold tracking-widest uppercase mb-3">Our Services</motion.div>
              <motion.h2 variants={fadeIn} className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2342] mb-6">
                Consultation Methods
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-slate-600">
                Choose the mode of consultation that best fits your lifestyle and needs. Quality care guaranteed.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Card 1: Medical Consultation */}
              <motion.div variants={fadeIn} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8" />
                </div>
                <div className="bg-slate-100 text-slate-600 text-xs font-bold uppercase py-1 px-3 rounded-md self-start mb-4">
                  Appointment Required
                </div>
                <h3 className="font-poppins text-2xl font-bold text-[#0a2342] mb-2">Medical Consultation</h3>
                <div className="text-3xl font-extrabold text-[#f5a623] mb-6">PKR 2,000</div>
                <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                  Thorough checkup including medicines, diet, physical exercise and mental health plan. Patient and family centered approach.
                </p>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Dr. Farhan, I would like to book a Medical Consultation (PKR 2,000).")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-4 rounded-xl text-center text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book on WhatsApp
                </a>
              </motion.div>

              {/* Card 2: Video Consultation */}
              <motion.div variants={fadeIn} className="bg-gradient-to-b from-[#0a2342] to-[#16365c] rounded-3xl p-8 shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden group translate-y-0 md:-translate-y-4">
                <div className="absolute top-0 inset-x-0 h-2 bg-[#f5a623]"></div>
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                
                <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <Video className="w-8 h-8" />
                </div>
                <h3 className="font-poppins text-2xl font-bold text-white mb-2 relative z-10">Video Consultation</h3>
                <div className="text-3xl font-extrabold text-[#f5a623] mb-6 relative z-10">PKR 1,000</div>
                <p className="text-blue-100 leading-relaxed mb-8 flex-1 relative z-10 opacity-90">
                  Virtual clinic for patients especially in rural areas of Pakistan. Eradicating distance between patient and doctor.
                </p>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Dr. Farhan, I would like to book a Video Consultation (PKR 1,000).")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-4 rounded-xl text-center text-lg transition-all shadow-md hover:shadow-lg relative z-10 flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book on WhatsApp
                </a>
              </motion.div>

              {/* Card 3: Farooq Hospital DHA */}
              <motion.div variants={fadeIn} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8" />
                </div>
                <div className="bg-slate-100 text-slate-600 text-xs font-bold uppercase py-1 px-3 rounded-md self-start mb-4">
                  Appointment Required
                </div>
                <h3 className="font-poppins text-2xl font-bold text-[#0a2342] mb-2">Farooq Hospital DHA</h3>
                <div className="text-3xl font-extrabold text-[#f5a623] mb-6">PKR 3,000</div>
                <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                  Luxury hospital with modern medical equipment, labs, radiology and pharmacy on site. Premium consultation experience.
                </p>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Dr. Farhan, I would like to book a consultation at Farooq Hospital DHA (PKR 3,000).")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-4 rounded-xl text-center text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section id="reviews" className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
            >
              <div>
                <motion.h2 variants={fadeIn} className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2342] mb-4">
                  Patient Reviews
                </motion.h2>
                <motion.div variants={fadeIn} className="flex items-center gap-3 text-lg font-medium text-slate-600">
                  <div className="flex gap-1 text-[#f5a623]">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
                  </div>
                  <span className="text-xl">4.9 / 5 <span className="text-slate-400 font-normal ml-2">(46+ Reviews)</span></span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="flex overflow-x-auto pb-12 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x snap-mandatory rounded-xl"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Hide webkit scrollbar via class in real app, but injecting style for quick fix */}
              <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />

              {[
                { name: "Hamza Dilnawaz", text: "I had a truly exceptional experience with Dr. Farhan. He exuded professionalism, warmth, and meticulous attention to detail. He took ample time to understand my concerns and offered comprehensive explanations at every step." },
                { name: "Ali Raza", text: "The doctor was kind, patient, and listened carefully to my concerns. The consultation was thorough and helpful. Highly recommended!" },
                { name: "Shahnaz Akhter", text: "Dr. Farhan is extremely cooperative and kind-hearted. His way of talking is very friendly and comforting. He always gives proper time and attention. (via Ali Abbas)" },
                { name: "My Bestie", text: "I want to express heartfelt gratitude to Dr. Farhan for exceptional support and care. His competence, humility, and encouragement have been instrumental in my healing journey." }
              ].map((review, i) => (
                <motion.div 
                  key={i} variants={fadeIn}
                  className="bg-slate-50 p-8 rounded-3xl border border-slate-100 min-w-[320px] w-[85vw] sm:w-[400px] snap-center shrink-0 flex flex-col hover:bg-slate-100 transition-colors shadow-sm"
                >
                  <div className="flex text-[#f5a623] mb-6 gap-1">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-700 text-lg italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-[#0a2342] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div className="font-bold text-[#0a2342] text-lg font-poppins">{review.name}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* BOTTOM CTA / CONTACT */}
        <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-[#f5a623] to-amber-500 text-[#0a2342]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeIn} className="font-poppins text-4xl md:text-5xl font-extrabold mb-6">
                Ready to Take Control of Your Health?
              </motion.h2>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl mb-10 font-medium opacity-90 max-w-2xl mx-auto">
                Reach out instantly via WhatsApp. Appointments available 7 days a week.
              </motion.p>
              <motion.a 
                variants={fadeIn}
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#0a2342] text-white font-bold text-xl px-10 py-5 rounded-full hover:bg-slate-800 hover:scale-[1.05] shadow-2xl transition-all w-full sm:w-auto"
              >
                <MessageCircle className="w-7 h-7 text-[#10b981]" />
                Contact on WhatsApp
              </motion.a>
              <motion.div variants={fadeIn} className="mt-10 flex items-center justify-center gap-2 font-medium bg-white/20 inline-flex px-6 py-3 rounded-full mx-auto">
                <MapPin className="w-5 h-5" />
                <span>Available at <strong>Farooq Hospital, DHA Lahore</strong></span>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#051426] text-slate-300 py-16 border-t border-white/10 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 border-b border-white/10 pb-12">
            <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f5a623] rounded-lg flex items-center justify-center font-bold text-[#0a2342] text-xl">F</div>
                <div>
                  <h2 className="font-poppins font-bold text-2xl text-white">Dr. Farhan</h2>
                  <p className="text-slate-400">General Physician</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 font-medium text-lg">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="hover:text-[#f5a623] transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
            <div>© {new Date().getFullYear()} Dr. Farhan Medical Consultations. All rights reserved.</div>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-[#f5a623]"/>
              📍 Also available at Farooq Hospital, DHA Lahore
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-16 h-16 bg-[#10b981] text-white rounded-full flex justify-center items-center shadow-2xl hover:bg-[#059669] hover:scale-110 transition-transform z-50 animate-bounce cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-40 group-hover:animate-ping"></span>
        <MessageCircle className="w-9 h-9 relative z-10" />
      </a>
    </div>
  );
}

