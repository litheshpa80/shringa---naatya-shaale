
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  Award, 
  Users, 
  Zap, 
  Music, 
  Sparkles,
  ChevronRight,
  Instagram,
  Facebook,
  Youtube,
  ArrowUp,
  CheckCircle2
} from 'lucide-react';

// --- Global Utilities ---

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Account for fixed navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// --- Sub-components ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Why Bharatanatyam', id: 'why' },
    { name: 'Holistic Approach', id: 'approach' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="./images/logo.png" 
              alt="Shringa Logo" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <div className="flex flex-col items-start">
              <span className={`text-2xl md:text-3xl font-black tracking-tighter transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}>
                SHRINGA
              </span>
              <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] -mt-1 transition-colors ${scrolled ? 'text-stone-500' : 'text-amber-400'}`}>
                Naatya Shaale
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-bold transition-colors hover:text-amber-500 bg-transparent border-none cursor-pointer ${scrolled ? 'text-navy' : 'text-white'}`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${scrolled ? 'bg-navy text-white hover:bg-black' : 'bg-white text-navy hover:bg-stone-100 shadow-lg'}`}
              >
                Join Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-navy' : 'text-white'} aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full p-4 border-t">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-stone-800 text-left text-lg font-bold hover:text-navy border-b border-stone-100 pb-2 bg-transparent"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="bg-navy text-white text-center py-3 rounded-lg font-bold w-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="./images/img.jpg" 
          alt="Bharatanatyam Dancer" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-white text-center sm:text-left">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm md:text-base text-amber-400 font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">Vibhashree Presents</p>
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold mb-6 leading-tight drop-shadow-lg">
            Shringa <br />
            <span className="text-amber-400">Naatya Shaale</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl text-stone-300 mb-8 sm:mb-10 font-light leading-relaxed">
            Divine BHARATANATYAM Classes. <br />
            Embrace the art of expressions, spirituality, and holistic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-amber-500 text-navy font-bold rounded-sm hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              Book a Trial Class <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-sm hover:bg-white/10 transition-all"
            >
              Explore Our Journey
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block cursor-pointer" onClick={() => scrollToSection('why')}>
        <div className="w-1 h-12 rounded-full border border-white/30 flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { label: 'Years of Teaching', value: '5+', icon: <Award className="text-amber-500" size={32} /> },
    { label: 'Students Trained', value: '200+', icon: <Users className="text-amber-500" size={32} /> },
    { label: 'Live Performances', value: '50+', icon: <Music className="text-amber-500" size={32} /> },
    { label: 'Regional Reach', value: 'KTK & KL', icon: <MapPin className="text-amber-500" size={32} /> },
  ];

  return (
    <section className="py-20 bg-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm border border-stone-100 group hover:shadow-md transition-all">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <div className="text-4xl font-bold text-navy mb-1">{stat.value}</div>
            <div className="text-stone-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyBharatanatyam: React.FC = () => {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">Why Bharatanatyam?</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Cultural */}
          <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl border-b-4 border-navy hover:-translate-y-2 transition-transform shadow-sm">
            <div className="w-14 sm:w-16 h-14 sm:h-16 bg-navy rounded-full flex items-center justify-center text-amber-500 mb-4 sm:mb-6 shadow-lg flex-shrink-0 overflow-hidden">
              <img src="./images/Cultural Significance.png" alt="Cultural Significance" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-stone-900 mb-3 sm:mb-4">Cultural Significance</h3>
            <p className="text-stone-600 leading-relaxed">
              In the era of modernity, Bharatanatyam is a way to pass down cultural heritage. It showcases India's rich mythology, folklore, and profound spiritual concepts, connecting you back to your roots.
            </p>
          </div>

          {/* Spiritual */}
          <div className="bg-stone-50 p-8 rounded-2xl border-b-4 border-navy hover:-translate-y-2 transition-transform shadow-sm">
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-amber-500 mb-6 shadow-lg text-3xl font-bold">
              ॐ
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Spiritual Connection</h3>
            <p className="text-stone-600 leading-relaxed">
              It is a divine form of prayer. For dancers, embodying the divine through movement can be a deeply spiritual journey, serving as a direct connection to the Godhead in dance form.
            </p>
          </div>

          {/* Health */}
          <div className="bg-stone-50 p-8 rounded-2xl border-b-4 border-navy hover:-translate-y-2 transition-transform shadow-sm">
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-amber-500 mb-6 shadow-lg">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Health Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs sm:text-sm text-stone-700 font-medium">
              <span className="flex items-center gap-2"><Zap size={14} className="text-amber-500" /> Flexibility</span>
              <span className="flex items-center gap-2"><Zap size={14} className="text-amber-500" /> Aerobic Fitness</span>
              <span className="flex items-center gap-2"><Zap size={14} className="text-amber-500" /> Concentration</span>
              <span className="flex items-center gap-2"><Zap size={14} className="text-amber-500" /> Heart Health</span>
              <span className="flex items-center gap-2"><Zap size={14} className="text-amber-500" /> Endurance</span>
              <span className="flex items-center gap-2"><Zap size={14} className="text-amber-500" /> Weight Control</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PhilosophySection: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-temple">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="./images/Holistic Approach Background image.png" 
                alt="Dance Practice" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-amber-500 rounded-2xl z-0"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 sm:mb-6">Our Holistic & Friendly Approach</h2>
            <p className="text-sm sm:text-base md:text-lg text-stone-900 mb-4 sm:mb-6 leading-relaxed">
              Bharatanatyam is an art of expressions and postures. Just like Bharatanatyam being unique from other dance forms, everyone is unique in their talents too. Many lack the courage to showcase their potential.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Everyone is Equal</h4>
                  <p className="text-stone-800">In our shaale, no one is superior to the other. We ensure that despite age, every student is taught with equal dedication.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Building Confidence</h4>
                  <p className="text-stone-800">We nurture self-belief in our students, encouraging them to showcase their skills in our grand Bharatanatyam shows.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Holistic Learning</h4>
                  <p className="text-stone-800">Our teaching isn't just about steps; it's about the emotional, physical, and spiritual growth of the dancer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutVidushi: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <span className="text-amber-500 font-bold uppercase tracking-widest mb-2 block text-xs sm:text-sm">The Visionary Teacher</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Vibhashree</h2>
            <p className="text-stone-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
              A proud disciple of the renowned <span className="text-white font-semibold">Vidushi Vidyahsree Radhakrishna</span>, Vibhashree has dedicated her life to the preservation and propagation of Bharatanatyam.
            </p>
            <p className="text-stone-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed italic">
              "We were, are, and will spread this beautiful divine dance form irrespective of age. It's not just a dance; it's a way of life."
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-amber-500 pl-4">
                <h4 className="text-2xl font-bold">200+</h4>
                <p className="text-stone-400 text-sm">Disciples Trained</p>
              </div>
              <div className="border-l-2 border-amber-500 pl-4">
                <h4 className="text-2xl font-bold">50+</h4>
                <p className="text-stone-400 text-sm">Grand Shows</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <img 
                src="./images/MyImg.png" 
                alt="Vibhashree" 
                className="w-full h-full object-cover rounded-full border-8 border-white/10 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full border-4 border-amber-500 scale-110 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Join Our Naatya Shaale</h2>
          <p className="text-stone-500">Take your first step towards a divine journey in dance.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Reach Out To Us</h3>
            <div className="space-y-8">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=%2311+Gubbalala+main+road+Bengaluru+560061" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex gap-6 items-start hover:bg-stone-50 p-3 rounded-xl transition-colors group"
              >
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-navy shrink-0 group-hover:bg-navy group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Address</h4>
                  <p className="text-stone-600">#11, Gubbalala main road, Bengaluru, 560061</p>
                </div>
              </a>
              <a 
                href="tel:+918762540598" 
                className="flex gap-6 items-start hover:bg-stone-50 p-3 rounded-xl transition-colors group"
              >
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-navy shrink-0 group-hover:bg-navy group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                  <p className="text-stone-600">+91 87625 40598</p>
                </div>
              </a>
              <a 
                href="mailto:vibhashayana@gmail.com" 
                className="flex gap-6 items-start hover:bg-stone-50 p-3 rounded-xl transition-colors group"
              >
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-navy shrink-0 group-hover:bg-navy group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Address</h4>
                  <p className="text-stone-600">vibhashayana@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-stone-100 relative overflow-hidden">
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Inquiry Received!</h3>
                <p className="text-stone-600">Thank you for your interest. Vibhashree will reach out to you shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-navy font-bold hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Student Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy transition-all" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Age</label>
                    <input required type="number" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy transition-all" placeholder="Years" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Contact Number</label>
                  <input required type="tel" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy transition-all" placeholder="+91 00000 00000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Message (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy transition-all" placeholder="Tell us about any previous dance experience..."></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className={`w-full py-4 bg-navy text-white font-bold rounded-lg transition-all shadow-lg shadow-navy/20 flex items-center justify-center gap-2 ${formState === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-black'}`}
                >
                  {formState === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6 flex items-center gap-3">
              <img 
                src="./images/logo.png" 
                alt="Shringa Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col items-start">
                <span className="text-3xl font-black tracking-tighter text-white">
                  SHRINGA
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500 -mt-1">
                  Naatya Shaale
                </span>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed mb-6 text-center md:text-left">
              Established with the vision to preserve Indian heritage and provide holistic Bharatanatyam training for all ages.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-amber-500 hover:text-navy transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-amber-500 hover:text-navy transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-amber-500 hover:text-navy transition-all"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-500">Quick Links</h4>
            <ul className="space-y-4 text-stone-400">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">About Vibhashree</button></li>
              <li><button onClick={() => scrollToSection('why')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">Why Bharatanatyam</button></li>
              <li><button onClick={() => scrollToSection('approach')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">Our Approach</button></li>
              <li><button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">Gallery</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-500">Locate Us</h4>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=%2311+Gubbalala+main+road+Bengaluru+560061" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block aspect-video w-full bg-stone-800 rounded-lg overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer border border-white/5 group"
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center text-xs group-hover:bg-stone-700/50 transition-colors">
                <MapPin className="text-amber-500 mb-2 group-hover:scale-125 transition-transform" size={32} />
                <span className="font-bold text-stone-300">Gubbalala Main Road, Bengaluru</span>
                <span className="text-stone-500 mt-1">Click to open Google Maps</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} Shringa Naatya Shaale. All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  );
};

const Gallery: React.FC = () => {
  const screenshots = [
    { src: './images/Screenshot 2026-01-22 152251.png', alt: 'Bharatanatyam Performance - Classical Dance Form' },
    { src: './images/Screenshot 2026-01-22 152314.png', alt: 'Dance Posture & Movement Study' },
    { src: './images/Image Gallery 1.png', alt: 'Gallery Image 1' },
    { src: './images/Image Gallery 2.png', alt: 'Gallery Image 2' },
  ];

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-stone-600 text-lg">Moments from our performances and practice sessions</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {screenshots.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                style={index > 0 ? { objectPosition: 'center 20%' } : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                <p className="text-white font-semibold text-sm sm:text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-black ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-white text-stone-900 selection:bg-navy selection:text-white">
      <Navbar />
      <Hero />
      <StatsSection />
      <WhyBharatanatyam />
      <PhilosophySection />
      <AboutVidushi />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
