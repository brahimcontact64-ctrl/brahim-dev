'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
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
  Briefcase,
  ExternalLink,
  Star,
} from 'lucide-react';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Card } from '@/components/ui/card';
import type { Locale } from '@/i18n/routing';

const themeCategories = [
  {
    id: 'business',
    themes: [
      { id: 'business-1', url: 'https://brahim-tech-2.vercel.app/' },
      { id: 'business-2', url: 'https://brahim-tech1.vercel.app/' },
      { id: 'business-3', url: 'https://brahim-tech-3.vercel.app/' },
      { id: 'business-4', url: 'https://brahim-theme2.vercel.app/' },
      { id: 'business-5', url: 'https://brahim-theme1.vercel.app/' },
      { id: 'business-6', url: 'https://brahim-theme-3.vercel.app/' },
    ],
  },
  {
    id: 'kids',
    themes: [
      { id: 'kids-1', url: 'https://brahim-theme-kids3.vercel.app/' },
      { id: 'kids-2', url: 'https://brahim-kids-2.vercel.app/' },
      { id: 'kids-3', url: 'https://brahim-kids-3.vercel.app/' },
    ],
  },
  {
    id: 'decoration',
    themes: [
      { id: 'deco-1', url: 'https://decor-theme-1-taupe.vercel.app/' },
      { id: 'deco-2', url: 'https://brahim-deco1.vercel.app/' },
      { id: 'deco-3', url: 'https://brahim-deco-3.vercel.app/' },
    ],
  },
] as const;

const whyItems = [
  { id: 'performance', icon: Zap },
  { id: 'design', icon: Palette },
  { id: 'security', icon: Shield },
  { id: 'support', icon: Heart },
] as const;

const projectItems = [
  {
    id: 'saheat',
    tags: ['Marketplace', 'Mobile App', 'Vendor App', 'Admin Dashboard'],
    highlight: 'Google Play',
    link: 'https://play.google.com/store/apps/details?id=com.brahimbeldjilali.matermihachbuyers',
    btnKey: 'saheat.btn',
  },
  {
    id: 'evizza',
    tags: ['SaaS', 'AI-Powered', 'Admin Panel', 'Automation'],
    highlight: 'Production Ready',
    link: 'https://www.e-vizza.com/',
    btnKey: 'evizza.btn',
  },
  {
    id: 'eleman',
    tags: ['E-commerce', 'Business System', 'Admin Dashboard'],
    highlight: 'Real Client',
    link: 'https://www.eleman-shoes.com/',
    btnKey: 'eleman.btn',
  },
  {
    id: 'dzenix',
    tags: ['Agency Website', 'Branding'],
    highlight: 'Live',
    link: 'https://www.dzenix.net/',
    btnKey: 'dzenix.btn',
  },
] as const;

const differentiatorItems = [
  { id: 'fullstack', icon: Monitor },
  { id: 'multilingual', icon: Globe2 },
  { id: 'production', icon: Shield },
  { id: 'ai', icon: Sparkles },
] as const;

const testimonialItems = [
  { id: 't1', rating: 5 },
  { id: 't2', rating: 5 },
  { id: 't3', rating: 5 },
] as const;

const serviceItems = [
  { id: 'web', icon: Monitor },
  { id: 'mobile', icon: Smartphone },
  { id: 'ecommerce', icon: ShoppingCart },
  { id: 'business', icon: Briefcase },
] as const;

const ratingStars = [0, 1, 2, 3, 4] as const;

function getScreenshotUrl(url: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url&viewport.isMobile=true&waitUntil=networkidle0`;
}

export function HomePage() {
  const locale = useLocale() as Locale;
  const t = useTranslations('HomePage');
  const [openCategory, setOpenCategory] = useState<string | null>('business');

  const isRTL = locale === 'ar';

  const toggleCategory = useCallback((categoryId: string) => {
    setOpenCategory((previous) => (previous === categoryId ? null : categoryId));
  }, []);

  const stats = useMemo(
    () => [
      { number: '50+', label: t('stats.projectsCompleted') },
      { number: '98%', label: t('stats.satisfiedClients') },
      { number: '24/7', label: t('stats.availableSupport') },
      { number: '4', label: t('stats.supportedLanguages') },
    ],
    [t]
  );

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen bg-white overflow-x-hidden ${isRTL ? 'font-semibold' : ''}`}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F15A24] to-[#ff7e50] rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Brahim.dev</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-[#F15A24] transition">
                {t('nav.services')}
              </a>
              <a href="#themes" className="text-sm font-medium text-gray-700 hover:text-[#F15A24] transition">
                {t('nav.themes')}
              </a>
              <a href="#projects" className="text-sm font-medium text-gray-700 hover:text-[#F15A24] transition">
                {t('nav.projects')}
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-[#F15A24] transition">
                {t('nav.contact')}
              </a>
            </div>

            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFF1EB] text-[#F15A24] text-sm font-semibold mb-6">
              <Sparkles className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('hero.badge')}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-4 font-semibold">
              {t('hero.subtitle')}
            </p>

            <p className="text-base text-gray-500 mb-10 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-xl bg-[#F15A24] text-white font-semibold hover:bg-[#d94e1f] transition shadow-lg shadow-orange-200"
              >
                <Rocket className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('hero.ctaPrimary')}
              </a>

              <a
                href="#themes"
                className="inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-50 transition border-2 border-gray-200"
              >
                <Globe2 className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>

          {/* Featured Projects — inline within hero background */}
          <div id="projects" className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('projects.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('projects.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectItems.map((project) => (
                <div key={project.id} className="bg-white rounded-3xl border-2 border-gray-200 hover:border-[#F15A24] shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFF1EB] text-[#F15A24] text-xs font-bold">
                      {t(`projects.${project.id}.category`)}
                    </span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{project.highlight}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t(`projects.${project.id}.title`)}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">{t(`projects.${project.id}.description`)}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">{tag}</span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-[#F15A24] text-white font-semibold hover:bg-[#d94e1f] transition shadow-md hover:shadow-lg"
                  >
                    <ExternalLink className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t(`projects.${project.btnKey}`)}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.number} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F15A24] mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="themes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('themes.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('themes.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            {themeCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-5 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F15A24] to-[#ff7e50] rounded-xl flex items-center justify-center">
                      <Globe2 className="w-6 h-6 text-white" />
                    </div>
                    <div className={`${isRTL ? 'mr-4 text-right' : 'ml-4 text-left'}`}>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {t(`themes.categories.${category.id}.title`)}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {category.themes.length} {t('themes.themesCount')}
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
                  <div className="px-4 sm:px-6 pb-6 pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.themes.map((theme) => (
                        <div
                          key={theme.id}
                          className="rounded-2xl border-2 border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-[#F15A24] transition-all duration-300 flex flex-col overflow-hidden group"
                        >
                          <div className="h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                            <Image
                              src={getScreenshotUrl(theme.url)}
                              alt={t(`themes.categories.${category.id}.items.${theme.id}`)}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              unoptimized
                              loading="lazy"
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                              onError={(event) => {
                                const target = event.currentTarget;
                                target.style.opacity = '0';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>

                          <div className="p-5 flex-1 flex flex-col justify-between">
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-2">
                                {t(`themes.categories.${category.id}.items.${theme.id}`)}
                              </h4>
                              <p className="text-sm text-gray-600 mb-4">
                                {t('themes.readyMadeDescription')}
                              </p>
                            </div>

                            <a
                              href={theme.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#F15A24] text-white text-sm font-semibold hover:bg-[#d94e1f] transition shadow-md hover:shadow-lg"
                            >
                              <Target className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                              {t('themes.preview')}
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('why.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItems.map((item) => (
              <Card key={item.id} className="p-6 hover:shadow-xl transition border-2 border-transparent hover:border-[#F15A24]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F15A24] to-[#ff7e50] rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`why.items.${item.id}.title`)}</h3>
                <p className="text-gray-600">{t(`why.items.${item.id}.description`)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-[#1a0a00]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t('differentiators.title')}
            </h2>
            <p className="text-lg text-gray-400">
              {t('differentiators.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiatorItems.map((item) => (
              <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#F15A24]/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F15A24] to-[#ff7e50] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t(`differentiators.items.${item.id}.title`)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t(`differentiators.items.${item.id}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceItems.map((service) => (
              <Card key={service.id} className="p-8 hover:shadow-2xl transition border-2 border-transparent hover:border-[#F15A24]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F15A24] to-[#ff7e50] rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t(`services.items.${service.id}.title`)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(`services.items.${service.id}.description`)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('testimonials.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialItems.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-[#F15A24] hover:shadow-xl transition-all">
                <div className="flex mb-4">
                  {ratingStars.slice(0, testimonial.rating).map((value) => (
                    <Star key={value} className="w-5 h-5 text-[#F15A24] fill-[#F15A24]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t(`testimonials.items.${testimonial.id}.text`)}&rdquo;</p>
                <div>
                  <div className="font-bold text-gray-900">{t(`testimonials.items.${testimonial.id}.name`)}</div>
                  <div className="text-sm text-gray-500">{t(`testimonials.items.${testimonial.id}.role`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('whatsapp.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('whatsapp.subtitle')}
          </p>

          <a
            href="https://wa.me/436602313221"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition shadow-lg shadow-green-200"
          >
            <MessageCircle className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('whatsapp.cta')}
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

      <footer className="bg-[#0f0f0f] text-[#bbb] py-12 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F15A24] to-[#ff7e50] rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Brahim.dev</span>
          </div>

          <p className="text-sm text-[#999]">{t('footer.tagline')}</p>

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

          <p className="text-xs text-[#666] pt-4">{t('footer.copyright')}</p>
        </div>
      </footer>

      <a
        href="https://wa.me/436602313221"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
        title="Chat with me"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
      >
        <span className="pointer-events-none absolute -top-10 right-0 whitespace-nowrap rounded-lg bg-[#0f0f0f] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 hidden sm:block">
          Chat with me
        </span>
        <span className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-300/40 transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-xl hover:shadow-green-300/50">
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        </span>
      </a>
    </div>
  );
}