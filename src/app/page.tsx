'use client';

import { useState, useEffect } from 'react';
import { Heart, Phone, MapPin, Instagram, Calendar, Star, Award, BookOpen, Video, Users, Clock, CheckCircle, ArrowRight, Sparkles, Stethoscope, Brain, Baby, User } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'neuropediatria' | 'pediatria';
}

interface BlogPost {
  id: string;
  title: string;
  category: string;
  content: string;
  date: string;
  image?: string;
}

interface SiteImages {
  hero: string;
  logo: string;
  about: string;
  humanized: string;
}

interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutSecondParagraph: string;
  humanizedTitle: string;
  humanizedSubtitle: string;
  humanizedDescription1: string;
  humanizedDescription2: string;
  humanizedDescription3: string;
  humanizedHighlight: string;
  missionTitle: string;
  missionDescription: string;
  qualificationTitle: string;
  qualificationDescription: string;
  neuropediatriaTitle: string;
  neuropediatriaDescription: string;
  pediatriaTitle: string;
  pediatriaDescription: string;
  blogTitle: string;
  blogDescription: string;
  formationTitle: string;
  formationDescription: string;
  processTitle: string;
  processDescription: string;
  locationTitle: string;
  locationDescription: string;
  contactTitle: string;
  contactDescription: string;
}

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: '1',
      title: 'Prevenção e cuidados básicos',
      description: 'Orientações importantes para pais e cuidadores',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'neuropediatria'
    },
    {
      id: '2',
      title: 'Dificuldades de sono na infância: o que observar?',
      description: 'Orientações importantes para pais e cuidadores',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'neuropediatria'
    },
    {
      id: '3',
      title: 'A importância do acompanhamento neuropediátrico contínuo',
      description: 'Orientações importantes para pais e cuidadores',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'neuropediatria'
    },
    {
      id: '4',
      title: 'Marcos do desenvolvimento infantil',
      description: 'Conteúdos educativos para o desenvolvimento saudável',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'pediatria'
    },
    {
      id: '5',
      title: 'Alimentação saudável na infância',
      description: 'Conteúdos educativos para o desenvolvimento saudável',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'pediatria'
    }
  ]);

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Sinais precoces do Transtorno do Espectro Autista',
      category: 'Neuropediatria',
      content: 'O diagnóstico precoce do TEA é fundamental para o desenvolvimento da criança. Identificar os primeiros sinais pode fazer toda a diferença no processo de intervenção e acompanhamento. Os sinais podem incluir dificuldades na comunicação social, padrões repetitivos de comportamento e interesses restritos. É importante observar marcos do desenvolvimento e buscar avaliação profissional quando necessário.',
      date: '15/01/2024',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    },
    {
      id: '2',
      title: 'TDAH: Como identificar e acompanhar',
      category: 'Transtornos do Neurodesenvolvimento',
      content: 'O Transtorno de Déficit de Atenção e Hiperatividade afeta milhões de crianças. Compreender os sintomas e as estratégias de manejo é essencial para o desenvolvimento saudável. Os sintomas incluem desatenção, hiperatividade e impulsividade, que podem impactar significativamente o desempenho escolar e social da criança. O diagnóstico adequado e o acompanhamento multidisciplinar são fundamentais.',
      date: '10/01/2024',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop'
    }
  ]);

  const [siteImages, setSiteImages] = useState<SiteImages>({
    hero: 'https://i.imgur.com/MBDOByW.jpg',
    logo: 'https://i.imgur.com/lqWe9C3.png',
    about: 'https://i.imgur.com/K3yeK96.jpg',
    humanized: 'https://i.imgur.com/QgggT6r.jpg'
  });

  const [siteContent, setSiteContent] = useState<SiteContent>({
    heroTitle: 'Cuidando do desenvolvimento neurológico infantil',
    heroSubtitle: 'com ciência, empatia e propósito',
    heroDescription: 'Atendimento capacitado em Neuropediatria e Pediatria com foco no diagnóstico, acompanhamento e cuidado integral de crianças e adolescentes com transtornos do neurodesenvolvimento.',
    aboutTitle: 'Sobre Mim',
    aboutDescription: 'Sou médica, pós-graduada em Neuropediatria e Pediatria. Tenho ampla experiência no diagnóstico e acompanhamento de crianças e adolescentes com condições neurológicas e transtornos do neurodesenvolvimento.',
    aboutSecondParagraph: 'Minha atuação é guiada pela sensibilidade, pela ciência e pelo compromisso com o bem-estar e a inclusão de cada criança e sua família.',
    humanizedTitle: 'Atendimento Humanizado',
    humanizedSubtitle: 'Um cuidado que vai além do diagnóstico',
    humanizedDescription1: 'Meu atendimento é pautado pela escuta ativa, pelo respeito às individualidades e pelo acolhimento da família em todo o processo.',
    humanizedDescription2: 'Acredito que compreender o contexto emocional, social e familiar é essencial para um diagnóstico preciso e um tratamento eficaz.',
    humanizedDescription3: 'Por isso, dedico tempo para conhecer cada pequeno paciente e oferecer um acompanhamento próximo, baseado em empatia, ciência e confiança.',
    humanizedHighlight: 'Mais do que tratar sintomas, meu propósito é promover o bem-estar e o desenvolvimento integral da criança.',
    missionTitle: 'Minha Missão',
    missionDescription: 'Minha missão é promover o pleno desenvolvimento da criança em todas as suas dimensões — cognitivas, emocionais e sociais. Acredito em um cuidado construído em conjunto com famílias, escolas e outros profissionais da saúde, sempre com base em evidências científicas e em uma escuta acolhedora.',
    qualificationTitle: 'Qualificação',
    qualificationDescription: 'Qualificada para zelar por você e por aqueles que você ama.',
    neuropediatriaTitle: 'Neuropediatria',
    neuropediatriaDescription: 'Assista a conteúdos criados com carinho para orientar famílias e profissionais. Aqui você encontra informações e orientações sobre o desenvolvimento infantil, transtornos neurológicos e o papel da família no cuidado da criança.',
    pediatriaTitle: 'Pediatria',
    pediatriaDescription: 'Conteúdos educativos sobre cuidados gerais em pediatria, desenvolvimento infantil saudável e orientações para pais e cuidadores.',
    blogTitle: 'Blog',
    blogDescription: 'Conteúdos educativos sobre desenvolvimento infantil, transtornos neurológicos e orientações práticas para famílias e profissionais.',
    formationTitle: 'Formação Profissional',
    formationDescription: 'Conheça minha trajetória acadêmica e profissional, com cursos, seminários e especializações que me capacitam para oferecer o melhor cuidado às crianças e suas famílias.',
    processTitle: 'Processo de Atendimento',
    processDescription: 'Atendimento pensado para acolher e orientar cada família',
    locationTitle: 'Localização',
    locationDescription: 'Local de Atendimento',
    contactTitle: 'Entre em Contato',
    contactDescription: 'Entre em contato diretamente pelo WhatsApp para agendar sua consulta ou esclarecer dúvidas. Estou aqui para ajudar você e sua família.'
  });

  // Carregar dados do localStorage quando o componente montar
  useEffect(() => {
    const savedData = localStorage.getItem('siteData');
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        if (data.videos) setVideos(data.videos);
        if (data.blogPosts) setBlogPosts(data.blogPosts);
        if (data.siteImages) setSiteImages(data.siteImages);
        if (data.siteContent) setSiteContent(data.siteContent);
      } catch (error) {
        console.error('Erro ao carregar dados salvos:', error);
      }
    }
  }, []);

  const whatsappNumber = "5569992650688";
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta com a Dra. Ana Cláudia Babolim.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const qualifications = [
    {
      title: "1. Transtorno do Espectro Autista (TEA)",
      description: "Alterações na comunicação, na interação social e comportamentos repetitivos ou restritos."
    },
    {
      title: "2. Transtorno de Déficit de Atenção e Hiperatividade (TDAH)",
      description: "Déficits de atenção, impulsividade e/ou hiperatividade."
    },
    {
      title: "3. Transtornos de Aprendizagem Específicos",
      description: "Dislexia (leitura), Discalculia (matemática), Disortografia (escrita)"
    },
    {
      title: "4. Transtornos do Desenvolvimento da Linguagem",
      description: "Atrasos ou dificuldades significativas na aquisição e uso da linguagem (oral, escrita ou gestual)."
    },
    {
      title: "5. Transtorno do Desenvolvimento da Coordenação (Dispraxia)",
      description: "Dificuldades na coordenação motora fina e/ou grossa, impactando atividades do dia a dia."
    },
    {
      title: "6. Transtornos Motores",
      description: "Transtorno de tique (incluindo a Síndrome de Tourette) e outros movimentos involuntários persistentes."
    },
    {
      title: "7. Deficiência Intelectual (Transtorno do Desenvolvimento Intelectual)",
      description: "Funcionamento intelectual abaixo da média, com impacto no comportamento adaptativo."
    },
    {
      title: "8. Transtornos do Espectro da Síndrome Alcoólica Fetal",
      description: "Relacionados à exposição pré-natal ao álcool, afetando cognição, comportamento e desenvolvimento físico."
    },
    {
      title: "9. Transtornos do Neurodesenvolvimento Associados a Condições Genéticas",
      description: "Síndrome de Down, Síndrome do X Frágil, Síndrome de Rett, Síndrome de Angelman, entre outras síndromes neurogenéticas."
    },
    {
      title: "10. Transtornos do Sono e da Regulação Emocional",
      description: "Muitas vezes associados ou comórbidos aos transtornos acima."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Elementos de fundo animados */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#B2AEA5]/10 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[#B2AEA5]/15 to-transparent rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-[#B2AEA5]/8 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-[#B2AEA5]/12 to-transparent rounded-full blur-xl animate-bounce"></div>
      </div>

      {/* Botão Dashboard com ícone */}
      <a
        href="/dashboard"
        className="fixed top-4 right-4 z-50 w-12 h-12 bg-gradient-to-br from-[#B2AEA5] to-[#9A9690] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
      >
        <User className="w-6 h-6 text-white" />
      </a>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#B2AEA5]/5 via-white to-[#B2AEA5]/10">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              {/* Logo centralizada */}
              <div className="flex justify-center lg:justify-center mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B2AEA5]/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img 
                    src={siteImages.logo} 
                    alt="Logo Dra. Ana Cláudia Babolim" 
                    className="relative h-32 w-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Headline em destaque */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-[#B2AEA5] bg-clip-text text-transparent leading-tight">
                  {siteContent.heroTitle}
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 font-medium">
                  {siteContent.heroSubtitle}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {siteContent.heroDescription}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  Agendar Consulta
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#localizacao"
                  className="group bg-white text-[#B2AEA5] px-8 py-4 rounded-full border-2 border-[#B2AEA5] hover:bg-gradient-to-r hover:from-[#B2AEA5] hover:to-[#9A9690] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
                >
                  <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                  Ver Localização
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <img
                  src={siteImages.hero}
                  alt="Dra. Ana Cláudia Babolim - Neuropediatra"
                  className="w-full h-auto rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section className="py-20 bg-gradient-to-br from-white via-[#B2AEA5]/5 to-[#B2AEA5]/10 relative">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B2AEA5]/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-50 p-4 rounded-3xl shadow-2xl border-2 border-[#B2AEA5]/20">
                  <img
                    src={siteImages.about}
                    alt="Dra. Ana Cláudia Babolim"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                {/* Mini card para título */}
                <div className="inline-block bg-[#B2AEA5] text-white px-6 py-3 rounded-full shadow-lg">
                  <h2 className="text-2xl font-bold">{siteContent.aboutTitle}</h2>
                </div>
                
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border-2 border-[#B2AEA5]/20 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#B2AEA5] mb-2">Dra. Ana Cláudia Babolim</h3>
                  <p className="text-gray-600 font-medium mb-4">Médica – CRM 7688/RO</p>
                  <p className="text-gray-600">Pós-graduada em Neuropediatria e Pediatria</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {siteContent.aboutDescription}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {siteContent.aboutSecondParagraph}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Award, title: "Formação sólida e atualizada", desc: "Conhecimento baseado nas mais recentes evidências científicas" },
                  { icon: Users, title: "Comunicação próxima", desc: "Diálogo constante com famílias e escolas" },
                  { icon: Heart, title: "Abordagem centrada na criança", desc: "Cuidado personalizado considerando o contexto familiar" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border-2 border-[#B2AEA5]/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                Conversar no WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Atendimento Humanizado */}
      <section className="py-20 bg-gradient-to-br from-[#B2AEA5]/10 via-white to-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                {/* Mini card para título */}
                <div className="inline-block bg-[#B2AEA5] text-white px-6 py-3 rounded-full shadow-lg">
                  <h2 className="text-2xl font-bold">{siteContent.humanizedTitle}</h2>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-[#B2AEA5]/20 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#B2AEA5] mb-4">{siteContent.humanizedSubtitle}</h3>
                  <p className="text-lg text-gray-700 italic">Cada criança é única e merece ser cuidada dessa forma.</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {siteContent.humanizedDescription1}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {siteContent.humanizedDescription2}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {siteContent.humanizedDescription3}
                </p>
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border-l-4 border-[#B2AEA5] shadow-lg">
                  <p className="text-lg text-gray-800 font-medium">
                    {siteContent.humanizedHighlight}
                  </p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                Conversar no WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B2AEA5]/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-50 p-4 rounded-3xl shadow-2xl border-2 border-[#B2AEA5]/20">
                  <img
                    src={siteImages.humanized}
                    alt="Dra. Ana Cláudia Babolim - Atendimento Humanizado"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minha Missão */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#B2AEA5]/5 relative">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="text-center mb-16">
            {/* Mini card para título */}
            <div className="inline-block bg-[#B2AEA5] text-white px-6 py-3 rounded-full shadow-lg mb-6">
              <h2 className="text-2xl font-bold">{siteContent.missionTitle}</h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border-2 border-[#B2AEA5]/20 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {siteContent.missionDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Heart, title: "Empatia", desc: "Escuta ativa e acolhimento genuíno para cada família" },
              { icon: Brain, title: "Ciência", desc: "Condutas baseadas em evidências científicas atualizadas" },
              { icon: Users, title: "Rede", desc: "Integração entre família, escola e equipe multidisciplinar" },
              { icon: Award, title: "Qualificação", desc: "Capacitada para zelar por você e por aqueles que você ama" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg border-2 border-[#B2AEA5]/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualificação */}
      <section className="py-20 bg-gradient-to-br from-[#B2AEA5]/5 via-gray-50 to-white relative">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="text-center mb-16">
            {/* Mini card para título */}
            <div className="inline-block bg-[#B2AEA5] text-white px-6 py-3 rounded-full shadow-lg mb-6">
              <h2 className="text-2xl font-bold">{siteContent.qualificationTitle}</h2>
            </div>
            <p className="text-xl text-gray-600">{siteContent.qualificationDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {qualifications.map((qualification, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border-2 border-[#B2AEA5]/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{qualification.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{qualification.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neuropediatria - Vídeos */}
      <section className="py-20 bg-gradient-to-br from-white via-[#B2AEA5]/5 to-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="text-center mb-16">
            {/* Mini card para título */}
            <div className="inline-block bg-[#B2AEA5] text-white px-6 py-3 rounded-full shadow-lg mb-6">
              <h2 className="text-2xl font-bold">{siteContent.neuropediatriaTitle}</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça mais sobre o cuidado neuropediátrico
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
              {siteContent.neuropediatriaDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.filter(video => video.category === 'neuropediatria').map((video) => (
              <div key={video.id} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg border-2 border-[#B2AEA5]/20 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-[#B2AEA5]/20 to-[#B2AEA5]/10 relative overflow-hidden">
                    {video.url ? (
                      <iframe
                        src={video.url}
                        title={video.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Video className="w-16 h-16 text-[#B2AEA5] group-hover:scale-110 transition-transform" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#B2AEA5] transition-colors">{video.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pediatria - Vídeos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#B2AEA5]/5 relative">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="text-center mb-16">
            {/* Mini card para título */}
            <div className="inline-block bg-[#B2AEA5] text-white px-6 py-3 rounded-full shadow-lg mb-6">
              <h2 className="text-2xl font-bold">{siteContent.pediatriaTitle}</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cuidados pediátricos essenciais
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
              {siteContent.pediatriaDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.filter(video => video.category === 'pediatria').map((video) => (
              <div key={video.id} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg border-2 border-[#B2AEA5]/20 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-[#B2AEA5]/20 to-[#B2AEA5]/10 relative overflow-hidden">
                    {video.url ? (
                      <iframe
                        src={video.url}
                        title={video.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Video className="w-16 h-16 text-[#B2AEA5] group-hover:scale-110 transition-transform" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#B2AEA5] transition-colors">{video.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog - Seção Normal */}
      <section className="py-20 bg-gradient-to-br from-[#B2AEA5]/5 via-gray-50 to-white relative">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="text-center mb-16">
            {/* Mini card para título */}
            <div className="inline-block bg-[#B2AEA5] text-white px-6 py-3 rounded-full shadow-lg mb-6">
              <h2 className="text-2xl font-bold">{siteContent.blogTitle}</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Artigos e Orientações Especializadas
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
              {siteContent.blogDescription}
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="group">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {post.image && (
                    <div className="lg:col-span-1">
                      <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#B2AEA5]/20 to-transparent z-10"></div>
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className={`${post.image ? 'lg:col-span-2' : 'lg:col-span-3'} space-y-6`}>
                    <div className="flex items-center gap-4">
                      <span className="inline-block bg-[#B2AEA5] text-white px-4 py-2 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-[#B2AEA5] transition-colors">
                      {post.title}
                    </h3>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {post.content}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <BookOpen className="w-4 h-4" />
                        <span>Leitura de {Math.ceil(post.content.length / 200)} min</span>
                      </div>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                      >
                        <Phone className="w-4 h-4 group-hover:animate-pulse" />
                        Conversar sobre o tema
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {index < blogPosts.length - 1 && (
                  <div className="mt-16 pt-16 border-b border-gray-200"></div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Formação Profissional */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-[#B2AEA5]/5 relative">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="text-center mb-16">
            {/* Mini card para título */}
            <div className="inline-block bg-[#B2AEA5] text-white px-6 py-3 rounded-full shadow-lg mb-6">
              <h2 className="text-2xl font-bold">{siteContent.formationTitle}</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Minha Profissionalização
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
              {siteContent.formationDescription}
            </p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {/* Pós-Graduações */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg border-2 border-[#B2AEA5]/20 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Pós-Graduações</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-[#B2AEA5]/20">
                  <h4 className="text-xl font-bold text-[#B2AEA5] mb-2">Neuropediatria</h4>
                  <p className="text-gray-600">Especialização em transtornos neurológicos infantis</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-[#B2AEA5]/20">
                  <h4 className="text-xl font-bold text-[#B2AEA5] mb-2">Pediatria</h4>
                  <p className="text-gray-600">Cuidados gerais da saúde infantil</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-[#B2AEA5]/20">
                  <h4 className="text-xl font-bold text-[#B2AEA5] mb-2">Psiquiatria</h4>
                  <p className="text-gray-600">Especialização em saúde mental</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-[#B2AEA5]/20">
                  <h4 className="text-xl font-bold text-[#B2AEA5] mb-2">Autismo e TDAH</h4>
                  <p className="text-gray-600">Especialização em transtornos do neurodesenvolvimento</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-[#B2AEA5]/20">
                  <h4 className="text-xl font-bold text-[#B2AEA5] mb-2">Urgência e Emergência</h4>
                  <p className="text-gray-600">Atendimento em situações críticas</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-[#B2AEA5]/20">
                  <h4 className="text-xl font-bold text-[#B2AEA5] mb-2">UTI</h4>
                  <p className="text-gray-600">Cuidados intensivos especializados</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-[#B2AEA5]/20">
                  <h4 className="text-xl font-bold text-[#B2AEA5] mb-2">Nefrologia</h4>
                  <p className="text-gray-600">Especialização em doenças renais</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-[#B2AEA5]/20">
                  <h4 className="text-xl font-bold text-[#B2AEA5] mb-2">Dermatologia</h4>
                  <p className="text-gray-600">Cuidados especializados da pele</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-[#B2AEA5]/20">
                  <h4 className="text-xl font-bold text-[#B2AEA5] mb-2">Ultrassonografia</h4>
                  <p className="text-gray-600">Diagnóstico por imagem especializado</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-[#B2AEA5]/20">
                  <h4 className="text-xl font-bold text-[#B2AEA5] mb-2">Medicina Legal</h4>
                  <p className="text-gray-600">Perícia médica e medicina forense</p>
                </div>
              </div>
            </div>

            {/* Cursos e Seminários */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg border-2 border-[#B2AEA5]/20 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Cursos e Seminários</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Transtorno do Espectro Autista", desc: "Atualização em diagnóstico e intervenção precoce" },
                  { title: "TDAH e Transtornos de Aprendizagem", desc: "Manejo clínico e orientação familiar" },
                  { title: "Desenvolvimento Neuromotor", desc: "Avaliação e acompanhamento do desenvolvimento" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-[#B2AEA5]/20">
                    <h4 className="text-lg font-bold text-[#B2AEA5] mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Educação Continuada */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg border-2 border-[#B2AEA5]/20 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Educação Continuada</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Mantenho-me sempre atualizada através de congressos, workshops e cursos de educação continuada, garantindo que meus pacientes recebam o cuidado baseado nas mais recentes evidências científicas.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Users, title: "Congressos Nacionais" },
                  { icon: BookOpen, title: "Workshops Especializados" },
                  { icon: Video, title: "Cursos Online" },
                  { icon: Award, title: "Seminários Científicos" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-[#B2AEA5]/20 hover:scale-105 transition-transform">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Atendimento */}
      <section className="py-20 bg-gradient-to-br from-[#B2AEA5]/5 via-gray-50 to-white relative">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="text-center mb-16">
            {/* Mini card para título */}
            <div className="inline-block bg-[#B2AEA5] text-white px-6 py-3 rounded-full shadow-lg mb-6">
              <h2 className="text-2xl font-bold">{siteContent.processTitle}</h2>
            </div>
            <p className="text-xl text-gray-600">{siteContent.processDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Agendamento",
                description: "Entre em contato e reserve seu horário de forma simples e acolhedora",
                icon: Phone
              },
              {
                step: "2",
                title: "Avaliação completa",
                description: "Entrevista detalhada, exame clínico cuidadoso e uso de escalas específicas",
                icon: Stethoscope
              },
              {
                step: "3",
                title: "Plano de acompanhamento",
                description: "Orientações práticas personalizadas e reavaliações periódicas",
                icon: Heart
              }
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg border-2 border-[#B2AEA5]/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#B2AEA5]/20 to-[#B2AEA5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#B2AEA5]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização com Mapa Correto */}
      <section id="localizacao" className="py-20 bg-gradient-to-br from-white via-[#B2AEA5]/5 to-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="text-center mb-16">
            {/* Mini card para título */}
            <div className="inline-block bg-[#B2AEA5] text-white px-6 py-3 rounded-full shadow-lg mb-6">
              <h2 className="text-2xl font-bold">{siteContent.locationTitle}</h2>
            </div>
            <p className="text-xl text-gray-600">{siteContent.locationDescription}</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg border-2 border-[#B2AEA5]/20 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-[#B2AEA5] mb-6">Hospital São Camilo – Jaru</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Endereço:</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Rua Rio de Janeiro, nº 3122 – Setor 01<br />
                        Esquina com Avenida Rio Branco, Centro<br />
                        Jaru – RO
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Telefone:</h4>
                      <p className="text-gray-600">(69) 9 9265-0688</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                      href="https://maps.app.goo.gl/wwfJFR2dAAnaerie6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                      Ver no Google Maps
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white text-[#B2AEA5] px-6 py-3 rounded-full border-2 border-[#B2AEA5] hover:bg-gradient-to-r hover:from-[#B2AEA5] hover:to-[#9A9690] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5 group-hover:animate-pulse" />
                      Agendar Consulta
                    </a>
                  </div>
                </div>

                {/* Mapa Integrado */}
                <div className="relative h-64 lg:h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.123456789!2d-62.466667!3d-10.433333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI2JzAwLjAiUyA2MsKwMjgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-r-3xl"
                    title="Localização Hospital São Camilo - Jaru"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-medium text-gray-800">Hospital São Camilo</p>
                    <p className="text-xs text-gray-600">Jaru - RO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-[#B2AEA5]/10 to-white relative">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="text-center mb-16">
            {/* Mini card para título */}
            <div className="inline-block bg-[#B2AEA5] text-white px-6 py-3 rounded-full shadow-lg mb-6">
              <h2 className="text-2xl font-bold">{siteContent.contactTitle}</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronto para cuidar do seu filho?
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
              {siteContent.contactDescription}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg border-2 border-[#B2AEA5]/20 p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">WhatsApp Direto</h3>
              <p className="text-xl text-[#B2AEA5] font-semibold mb-8">(69) 9 9265-0688</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  Agendar Consulta
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-[#B2AEA5] px-8 py-4 rounded-full border-2 border-[#B2AEA5] hover:bg-gradient-to-r hover:from-[#B2AEA5] hover:to-[#9A9690] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Mais Informações
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#B2AEA5] to-[#9A9690] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B2AEA5]/20 to-transparent"></div>
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="text-center lg:text-left">
              <div className="relative group mb-6">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img 
                  src={siteImages.logo} 
                  alt="Logo Dra. Ana Cláudia Babolim" 
                  className="relative h-24 w-auto mx-auto lg:mx-0 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Dra. Ana Cláudia Babolim</h3>
              <p className="text-white/80 mb-2">Médica – CRM 7688/RO</p>
              <p className="text-white/80 mb-6">Pós-graduada em Neuropediatria e Pediatria</p>
              
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Phone className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/dra.anaclaudiababolim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-white/80" />
                  <span>(69) 9 9265-0688</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-white/80" />
                  <span>Hospital São Camilo – Jaru</span>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <p className="text-lg font-medium italic mb-2">
                  "Cuidando com sensibilidade e ciência do desenvolvimento de cada criança."
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/60">
              © 2024 Dra. Ana Cláudia Babolim. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}