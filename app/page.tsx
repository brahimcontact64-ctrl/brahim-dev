'use client';

import { useState } from 'react';
import {
  Globe2,
  ChevronDown,
  ChevronUp,
  Code,
  Palette,
  Zap,
  Shield,
  Heart,
  MessageCircle,
  Mail,
  Phone,
  Sparkles,
  Rocket,
  Target,
  Monitor,
  Smartphone,
  ShoppingCart,
  Briefcase
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const themeCategories = [
  {
    id: 'business',
    titleFr: '🏢 Business & Corporate',
    titleAr: '🏢 أعمال وشركات',
    themes: [
      {
        id: 'business-1',
        url: 'https://brahim-tech-2.vercel.app/',
        titleFr: 'Tech Business Pro',
        titleAr: 'شركة تقنية احترافية'
      },
      {
        id: 'business-2',
        url: 'https://brahim-tech1.vercel.app/',
        titleFr: 'Modern Tech Agency',
        titleAr: 'وكالة تقنية عصرية'
      },
      {
        id: 'business-3',
        url: 'https://brahim-tech-3.vercel.app/',
        titleFr: 'Corporate Solution',
        titleAr: 'حلول الشركات'
      },
      {
        id: 'business-4',
        url: 'https://brahim-theme2.vercel.app/',
        titleFr: 'Business Theme Classic',
        titleAr: 'ثيم أعمال كلاسيكي'
      },
      {
        id: 'business-5',
        url: 'https://brahim-theme1.vercel.app/',
        titleFr: 'Professional Services',
        titleAr: 'خدمات احترافية'
      },
      {
        id: 'business-6',
        url: 'https://brahim-theme-3.vercel.app/',
        titleFr: 'Enterprise Platform',
        titleAr: 'منصة مؤسسية'
      }
    ]
  },
  {
    id: 'kids',
    titleFr: '🎈 Kids Themes',
    titleAr: '🎈 ثيمات الأطفال',
    themes: [
      {
        id: 'kids-1',
        url: 'https://brahim-theme-kids3.vercel.app/fr/home',
        titleFr: 'Kids Paradise',
        titleAr: 'جنة الأطفال'
      },
      {
        id: 'kids-2',
        url: 'https://brahim-kids-2.vercel.app/',
        titleFr: 'Children Center',
        titleAr: 'مركز الأطفال'
      },
      {
        id: 'kids-3',
        url: 'https://brahim-kids-3.vercel.app/',
        titleFr: 'Kids Zone',
        titleAr: 'منطقة الأطفال'
      }
    ]
  },
  {
    id: 'decoration',
    titleFr: '🏠 Decoration & Home',
    titleAr: '🏠 ديكور ومنزل',
    themes: [
      {
        id: 'deco-1',
        url: 'https://decor-theme-1-taupe.vercel.app/',
        titleFr: 'Elegant Decor',
        titleAr: 'ديكور أنيق'
      },
      {
        id: 'deco-2',
        url: 'https://brahim-deco1.vercel.app/',
        titleFr: 'Home Interior',
        titleAr: 'تصميم داخلي'
      },
      {
        id: 'deco-3',
        url: 'https://brahim-deco-3.vercel.app/',
        titleFr: 'Modern Living',
        titleAr: 'معيشة عصرية'
      }
    ]
  }
];

export default function Home() {
  const [lang, setLang] = useState<'fr' | 'ar'>('fr');
  const [openCategory, setOpenCategory] = useState<string | null>('business');

  const isRTL = lang === 'ar';

  const toggleLanguage = () => {
    setLang(lang === 'fr' ? 'ar' : 'fr');
  };

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const getScreenshotUrl = (url: string) => {
    return `https://api.microlink.io/?url=${encodeURIComponent(
      url
    )}&screenshot=true&meta=false&embed=screenshot.url&viewport.isMobile=true&waitUntil=networkidle0`;
  };

  const content = {
    nav: {
      services: { fr: 'Services', ar: 'الخدمات' },
      themes: { fr: 'Thèmes', ar: 'الثيمات' },
      contact: { fr: 'Contact', ar: 'اتصل' }
    },
    hero: {
      title: {
        fr: 'Créez Votre Présence Digitale',
        ar: 'أنشئ حضورك الرقمي'
      },
      subtitle: {
        fr: 'Web & App Development FR/AR',
        ar: 'تطوير ويب وتطبيقات FR/AR'
      },
      description: {
        fr: 'Solutions professionnelles sur mesure pour votre présence en ligne. Design moderne, performance optimale et support bilingue complet.',
        ar: 'حلول احترافية مخصصة لحضورك على الإنترنت. تصميم عصري، أداء مثالي ودعم ثنائي اللغة كامل.'
      },
      cta: { fr: 'Commencer Maintenant', ar: 'ابدأ الآن' },
      cta2: { fr: 'Voir les Thèmes', ar: 'شاهد الثيمات' }
    },
    why: {
      title: { fr: 'Pourquoi Choisir Brahim.dev ?', ar: 'لماذا تختار Brahim.dev؟' },
      subtitle: { fr: 'Excellence et Innovation à Votre Service', ar: 'التميز والابتكار في خدمتك' },
      items: [
        {
          icon: Zap,
          title: { fr: 'Performance', ar: 'أداء' },
          desc: { fr: 'Sites ultra-rapides optimisés pour une expérience utilisateur exceptionnelle', ar: 'مواقع سريعة للغاية محسنة لتجربة مستخدم استثنائية' }
        },
        {
          icon: Palette,
          title: { fr: 'Design Premium', ar: 'تصميم متميز' },
          desc: { fr: 'Interface moderne et élégante qui captive vos visiteurs', ar: 'واجهة عصرية وأنيقة تجذب زوارك' }
        },
        {
          icon: Shield,
          title: { fr: 'Sécurité', ar: 'أمان' },
          desc: { fr: 'Protection complète de vos données et de vos clients', ar: 'حماية كاملة لبياناتك وعملائك' }
        },
        {
          icon: Heart,
          title: { fr: 'Support Dédié', ar: 'دعم مخصص' },
          desc: { fr: 'Accompagnement personnalisé en français et en arabe', ar: 'مرافقة شخصية بالفرنسية والعربية' }
        }
      ]
    },
    themes: {
      title: { fr: 'Nos Thèmes Professionnels', ar: 'ثيماتنا الاحترافية' },
      subtitle: { fr: 'Découvrez notre collection de thèmes prêts à l\'emploi', ar: 'اكتشف مجموعتنا من الثيمات الجاهزة للاستخدام' },
      preview: { fr: 'Voir le Thème', ar: 'معاينة الثيم' },
      themesCount: { fr: 'thèmes', ar: 'ثيم' }
    },
    services: {
      title: { fr: 'Nos Services', ar: 'خدماتنا' },
      subtitle: { fr: 'Solutions Complètes pour Votre Succès Digital', ar: 'حلول شاملة لنجاحك الرقمي' },
      items: [
        {
          icon: Monitor,
          title: { fr: 'Développement Web', ar: 'تطوير ويب' },
          desc: { fr: 'Sites web professionnels, landing pages et applications web sur mesure avec design responsive et performance optimale', ar: 'مواقع ويب احترافية، صفحات هبوط وتطبيقات ويب مخصصة مع تصميم متجاوب وأداء مثالي' }
        },
        {
          icon: Smartphone,
          title: { fr: 'Applications Mobile', ar: 'تطبيقات موبايل' },
          desc: { fr: 'Applications iOS et Android natives ou cross-platform pour une expérience mobile exceptionnelle', ar: 'تطبيقات iOS وAndroid أصلية أو متعددة المنصات لتجربة موبايل استثنائية' }
        },
        {
          icon: ShoppingCart,
          title: { fr: 'E-commerce', ar: 'متاجر إلكترونية' },
          desc: { fr: 'Boutiques en ligne complètes avec paiement sécurisé, gestion de stock et intégration logistique', ar: 'متاجر إلكترونية كاملة مع دفع آمن، إدارة مخزون وتكامل لوجستي' }
        },
        {
          icon: Briefcase,
          title: { fr: 'Systèmes Business', ar: 'أنظمة الأعمال' },
          desc: { fr: 'Solutions de gestion personnalisées, CRM, ERP et systèmes d\'automatisation pour votre entreprise', ar: 'حلول إدارة مخصصة، CRM، ERP وأنظمة أتمتة لأعمالك' }
        }
      ]
    },
    whatsapp: {
      title: { fr: 'Prêt à Démarrer Votre Projet ?', ar: 'مستعد لبدء مشروعك؟' },
      subtitle: { fr: 'Discutons de votre projet dès maintenant', ar: 'لنتحدث عن مشروعك الآن' },
      cta: { fr: 'Chat sur WhatsApp', ar: 'تواصل عبر واتساب' }
    },
    footer: {
      tagline: { fr: 'Votre partenaire digital', ar: 'شريكك الرقمي' },
      copyright: { fr: '© 2024 Brahim.dev — Tous droits réservés', ar: '© 2024 Brahim.dev — جميع الحقوق محفوظة' }
    }
  };

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen bg-white ${isRTL ? 'font-semibold' : ''}`}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F15A24] to-[#ff7e50] rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Brahim.dev</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-[#F15A24] transition">
                {content.nav.services[lang]}
              </a>
              <a href="#themes" className="text-sm font-medium text-gray-700 hover:text-[#F15A24] transition">
                {content.nav.themes[lang]}
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-[#F15A24] transition">
                {content.nav.contact[lang]}
              </a>
            </div>

            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-semibold transition"
            >
              {lang === 'fr' ? 'AR' : 'FR'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFF1EB] text-[#F15A24] text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              {lang === 'fr' ? 'Solutions Web Professionnelles' : 'حلول ويب احترافية'}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {content.hero.title[lang]}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-4 font-semibold">
              {content.hero.subtitle[lang]}
            </p>

            <p className="text-base text-gray-500 mb-10 max-w-2xl mx-auto">
              {content.hero.description[lang]}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-[#F15A24] text-white font-semibold hover:bg-[#d94e1f] transition shadow-lg shadow-orange-200"
              >
                <Rocket className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {content.hero.cta[lang]}
              </a>

              <a
                href="#themes"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-50 transition border-2 border-gray-200"
              >
                <Globe2 className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {content.hero.cta2[lang]}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { number: '50+', label: { fr: 'Projets Réalisés', ar: 'مشروع منجز' } },
              { number: '98%', label: { fr: 'Clients Satisfaits', ar: 'عملاء راضون' } },
              { number: '24/7', label: { fr: 'Support Disponible', ar: 'دعم متاح' } },
              { number: '2', label: { fr: 'Langues (FR/AR)', ar: 'لغتين (FR/AR)' } }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F15A24] mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.why.title[lang]}
            </h2>
            <p className="text-lg text-gray-600">
              {content.why.subtitle[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.why.items.map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition border-2 border-transparent hover:border-[#F15A24]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F15A24] to-[#ff7e50] rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title[lang]}</h3>
                <p className="text-gray-600">{item.desc[lang]}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.themes.title[lang]}
            </h2>
            <p className="text-lg text-gray-600">
              {content.themes.subtitle[lang]}
            </p>
          </div>

          <div className="space-y-6">
            {themeCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F15A24] to-[#ff7e50] rounded-xl flex items-center justify-center">
                      <Globe2 className="w-6 h-6 text-white" />
                    </div>
                    <div className={`${isRTL ? 'mr-4 text-right' : 'ml-4 text-left'}`}>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {lang === 'ar' ? category.titleAr : category.titleFr}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {category.themes.length} {content.themes.themesCount[lang]}
                      </p>
                    </div>
                  </div>

                  {openCategory === category.id ? (
                    <ChevronUp className="w-6 h-6 text-[#F15A24]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#F15A24]" />
                  )}
                </button>

                {openCategory === category.id && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.themes.map((theme) => (
                        <div
                          key={theme.id}
                          className="rounded-2xl border-2 border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-[#F15A24] transition-all duration-300 flex flex-col overflow-hidden group"
                        >
                          <div className="h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                            <img
                              src={getScreenshotUrl(theme.url)}
                              alt={lang === 'ar' ? theme.titleAr : theme.titleFr}
                              loading="lazy"
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>

                          <div className="p-5 flex-1 flex flex-col justify-between">
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-2">
                                {lang === 'ar' ? theme.titleAr : theme.titleFr}
                              </h4>
                              <p className="text-sm text-gray-600 mb-4">
                                {lang === 'ar'
                                  ? 'ثيم احترافي جاهز للاستعمال بدعم ثنائي اللغة FR/AR'
                                  : 'Thème professionnel prêt à l\'emploi avec support bilingue FR/AR'}
                              </p>
                            </div>

                            <a
                              href={theme.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#F15A24] text-white text-sm font-semibold hover:bg-[#d94e1f] transition shadow-md hover:shadow-lg"
                            >
                              <Target className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                              {content.themes.preview[lang]}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.services.title[lang]}
            </h2>
            <p className="text-lg text-gray-600">
              {content.services.subtitle[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.services.items.map((service, idx) => (
              <Card key={idx} className="p-8 hover:shadow-2xl transition border-2 border-transparent hover:border-[#F15A24]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F15A24] to-[#ff7e50] rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title[lang]}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc[lang]}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {content.whatsapp.title[lang]}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {content.whatsapp.subtitle[lang]}
          </p>

          <a
            href="https://wa.me/436602313221"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition shadow-lg shadow-green-200"
          >
            <MessageCircle className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {content.whatsapp.cta[lang]}
          </a>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center">
              <Phone className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              +43 660 2313 221
            </div>
            <div className="flex items-center">
              <Mail className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              contact@brahim.dev
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] text-[#bbb] py-12 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F15A24] to-[#ff7e50] rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Brahim.dev</span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-[#999]">
            {content.footer.tagline[lang]}
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className="flex items-center">
              <Phone className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span>+43 660 2313 221</span>
            </div>
            <div className="flex items-center">
              <Mail className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span>contact@brahim.dev</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#666] pt-4">
            {content.footer.copyright[lang]}
          </p>
        </div>
      </footer>
    </div>
  );
}
