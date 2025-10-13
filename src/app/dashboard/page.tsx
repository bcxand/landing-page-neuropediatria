'use client';

import { useState, useEffect } from 'react';
import { Heart, Phone, MapPin, Instagram, Calendar, Star, Award, BookOpen, Video, Users, Clock, CheckCircle, ArrowRight, Sparkles, Stethoscope, Brain, Baby, User, Edit3, Save, Plus, Trash2, Eye, Settings, Layout, Image as ImageIcon, Type, Palette, Upload, X } from 'lucide-react';

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

export default function Dashboard() {
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

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [activeSection, setActiveSection] = useState('hero');
  const [saveEffect, setSaveEffect] = useState(false);

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

  // Salvar automaticamente no localStorage sempre que houver mudanças
  useEffect(() => {
    const dataToSave = {
      videos,
      blogPosts,
      siteImages,
      siteContent
    };
    localStorage.setItem('siteData', JSON.stringify(dataToSave));
  }, [videos, blogPosts, siteImages, siteContent]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsAuthenticated(true);
      setSaveEffect(true);
      setTimeout(() => setSaveEffect(false), 1000);
    } else {
      alert('Credenciais inválidas');
    }
  };

  const handleSave = () => {
    setSaveEffect(true);
    setTimeout(() => setSaveEffect(false), 1000);
  };

  const handlePublish = () => {
    localStorage.setItem('siteData', JSON.stringify({
      videos,
      blogPosts,
      siteImages,
      siteContent
    }));
    setSaveEffect(true);
    setTimeout(() => setSaveEffect(false), 1000);
  };

  const addVideo = (category: 'neuropediatria' | 'pediatria') => {
    const newVideo: Video = {
      id: Date.now().toString(),
      title: 'Novo Vídeo',
      description: 'Descrição do vídeo...',
      url: '',
      category
    };
    setVideos([...videos, newVideo]);
    handleSave();
  };

  const updateVideo = (id: string, field: keyof Video, value: string) => {
    setVideos(videos.map(video => 
      video.id === id ? { ...video, [field]: value } : video
    ));
  };

  const removeVideo = (id: string) => {
    setVideos(videos.filter(video => video.id !== id));
    handleSave();
  };

  const addBlogPost = () => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: 'Novo Post',
      category: 'Categoria',
      content: 'Conteúdo do post...',
      date: new Date().toLocaleDateString('pt-BR'),
      image: ''
    };
    setBlogPosts([...blogPosts, newPost]);
    handleSave();
  };

  const updateBlogPost = (id: string, field: keyof BlogPost, value: string) => {
    setBlogPosts(blogPosts.map(post => 
      post.id === id ? { ...post, [field]: value } : post
    ));
  };

  const removeBlogPost = (id: string) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
    handleSave();
  };

  const updateSiteImage = (key: keyof SiteImages, value: string) => {
    setSiteImages({...siteImages, [key]: value});
    handleSave();
  };

  const updateSiteContent = (key: keyof SiteContent, value: string) => {
    setSiteContent({...siteContent, [key]: value});
    handleSave();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#B2AEA5] mb-2">Dashboard Administrativo</h1>
            <p className="text-gray-600">Faça login para acessar o painel de controle</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Usuário</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent transition-colors"
                placeholder="Digite seu usuário"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent transition-colors"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <User className="w-5 h-5" />
              Entrar no Dashboard
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-[#B2AEA5] hover:text-[#9A9690] transition-colors flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Voltar ao site
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Efeito de salvamento */}
      {saveEffect && (
        <div className="fixed inset-0 bg-green-500/20 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-bounce">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">Alterações salvas e sincronizadas com o site!</span>
          </div>
        </div>
      )}

      {/* Header do Dashboard */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Site Builder</h1>
                <p className="text-gray-600">Painel de Controle - Dra. Ana Cláudia Babolim</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/"
                target="_blank"
                className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Eye className="w-4 h-4" />
                Visualizar Site
              </a>
              <button
                onClick={handlePublish}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Publicar Alterações
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Menu de Seções */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-lg font-bold text-gray-800 mb-6">Seções do Site</h2>
              <nav className="space-y-2">
                {[
                  { id: 'hero', label: 'Hero (Principal)', icon: Layout },
                  { id: 'about', label: 'Sobre Mim', icon: User },
                  { id: 'humanized', label: 'Atendimento Humanizado', icon: Heart },
                  { id: 'mission', label: 'Minha Missão', icon: Award },
                  { id: 'qualification', label: 'Qualificação', icon: Star },
                  { id: 'neuropediatria', label: 'Neuropediatria', icon: Brain },
                  { id: 'pediatria', label: 'Pediatria', icon: Baby },
                  { id: 'blog', label: 'Blog', icon: BookOpen },
                  { id: 'formation', label: 'Formação Profissional', icon: Award },
                  { id: 'process', label: 'Processo de Atendimento', icon: Stethoscope },
                  { id: 'location', label: 'Localização', icon: MapPin },
                  { id: 'contact', label: 'Contato', icon: Phone },
                  { id: 'images', label: 'Imagens', icon: ImageIcon }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveSection(id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${
                      activeSection === id
                        ? 'bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Área Principal de Edição */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              
              {/* Seção Hero */}
              {activeSection === 'hero' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">Seção Principal (Hero)</h2>
                    <div className="flex items-center gap-2">
                      <Layout className="w-5 h-5 text-[#B2AEA5]" />
                      <span className="text-sm text-gray-600">Primeira impressão do site</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título Principal</label>
                      <input
                        type="text"
                        value={siteContent.heroTitle}
                        onChange={(e) => updateSiteContent('heroTitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subtítulo</label>
                      <input
                        type="text"
                        value={siteContent.heroSubtitle}
                        onChange={(e) => updateSiteContent('heroSubtitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
                      <textarea
                        value={siteContent.heroDescription}
                        onChange={(e) => updateSiteContent('heroDescription', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Seção Sobre Mim */}
              {activeSection === 'about' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">Sobre Mim</h2>
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-[#B2AEA5]" />
                      <span className="text-sm text-gray-600">Apresentação profissional</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título da Seção</label>
                      <input
                        type="text"
                        value={siteContent.aboutTitle}
                        onChange={(e) => updateSiteContent('aboutTitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Primeiro Parágrafo</label>
                      <textarea
                        value={siteContent.aboutDescription}
                        onChange={(e) => updateSiteContent('aboutDescription', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                        rows={4}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Segundo Parágrafo</label>
                      <textarea
                        value={siteContent.aboutSecondParagraph}
                        onChange={(e) => updateSiteContent('aboutSecondParagraph', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Seção Atendimento Humanizado */}
              {activeSection === 'humanized' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">Atendimento Humanizado</h2>
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-[#B2AEA5]" />
                      <span className="text-sm text-gray-600">Diferencial do atendimento</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título da Seção</label>
                      <input
                        type="text"
                        value={siteContent.humanizedTitle}
                        onChange={(e) => updateSiteContent('humanizedTitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subtítulo</label>
                      <input
                        type="text"
                        value={siteContent.humanizedSubtitle}
                        onChange={(e) => updateSiteContent('humanizedSubtitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Primeiro Parágrafo</label>
                      <textarea
                        value={siteContent.humanizedDescription1}
                        onChange={(e) => updateSiteContent('humanizedDescription1', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Segundo Parágrafo</label>
                      <textarea
                        value={siteContent.humanizedDescription2}
                        onChange={(e) => updateSiteContent('humanizedDescription2', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Terceiro Parágrafo</label>
                      <textarea
                        value={siteContent.humanizedDescription3}
                        onChange={(e) => updateSiteContent('humanizedDescription3', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Frase de Destaque</label>
                      <textarea
                        value={siteContent.humanizedHighlight}
                        onChange={(e) => updateSiteContent('humanizedHighlight', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                        rows={2}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Seção Minha Missão */}
              {activeSection === 'mission' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">Minha Missão</h2>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#B2AEA5]" />
                      <span className="text-sm text-gray-600">Propósito e valores</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título da Seção</label>
                      <input
                        type="text"
                        value={siteContent.missionTitle}
                        onChange={(e) => updateSiteContent('missionTitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descrição da Missão</label>
                      <textarea
                        value={siteContent.missionDescription}
                        onChange={(e) => updateSiteContent('missionDescription', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                        rows={5}
                      />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#B2AEA5]">
                    <h4 className="font-semibold text-gray-800 mb-2">Pilares da Missão:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>• Empatia</div>
                      <div>• Ciência</div>
                      <div>• Rede de cuidados</div>
                      <div>• Qualificação</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Seção Qualificação */}
              {activeSection === 'qualification' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">Qualificação</h2>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-[#B2AEA5]" />
                      <span className="text-sm text-gray-600">Competências e especialidades</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título da Seção</label>
                      <input
                        type="text"
                        value={siteContent.qualificationTitle}
                        onChange={(e) => updateSiteContent('qualificationTitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
                      <input
                        type="text"
                        value={siteContent.qualificationDescription}
                        onChange={(e) => updateSiteContent('qualificationDescription', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#B2AEA5]">
                    <p className="text-gray-700">
                      Esta seção apresenta as 10 principais qualificações e especialidades da Dra. Ana Cláudia, 
                      incluindo TEA, TDAH, Transtornos de Aprendizagem, e outras condições neurológicas infantis.
                    </p>
                  </div>
                </div>
              )}

              {/* Seção Neuropediatria */}
              {activeSection === 'neuropediatria' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">Neuropediatria - Vídeos</h2>
                    <div className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-[#B2AEA5]" />
                      <span className="text-sm text-gray-600">Conteúdos educativos</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título da Seção</label>
                      <input
                        type="text"
                        value={siteContent.neuropediatriaTitle}
                        onChange={(e) => updateSiteContent('neuropediatriaTitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descrição da Seção</label>
                      <textarea
                        value={siteContent.neuropediatriaDescription}
                        onChange={(e) => updateSiteContent('neuropediatriaDescription', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">Vídeos de Neuropediatria</h3>
                    <button
                      onClick={() => addVideo('neuropediatria')}
                      className="bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Adicionar Vídeo
                    </button>
                  </div>

                  <div className="space-y-4">
                    {videos.filter(video => video.category === 'neuropediatria').map((video) => (
                      <div key={video.id} className="border border-gray-200 rounded-xl p-6 hover:border-[#B2AEA5] transition-colors">
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Título do Vídeo</label>
                              <input
                                type="text"
                                value={video.title}
                                onChange={(e) => updateVideo(video.id, 'title', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">URL do Vídeo (YouTube Embed)</label>
                              <input
                                type="url"
                                value={video.url}
                                onChange={(e) => updateVideo(video.id, 'url', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                                placeholder="https://www.youtube.com/embed/..."
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                            <textarea
                              value={video.description}
                              onChange={(e) => updateVideo(video.id, 'description', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                              rows={3}
                            />
                          </div>
                          <div className="flex justify-end">
                            <button
                              onClick={() => removeVideo(video.id)}
                              className="text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
                            >
                              <Trash2 className="w-4 h-4" />
                              Remover Vídeo
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Seção Pediatria */}
              {activeSection === 'pediatria' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">Pediatria - Vídeos</h2>
                    <div className="flex items-center gap-2">
                      <Baby className="w-5 h-5 text-[#B2AEA5]" />
                      <span className="text-sm text-gray-600">Cuidados pediátricos</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título da Seção</label>
                      <input
                        type="text"
                        value={siteContent.pediatriaTitle}
                        onChange={(e) => updateSiteContent('pediatriaTitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descrição da Seção</label>
                      <textarea
                        value={siteContent.pediatriaDescription}
                        onChange={(e) => updateSiteContent('pediatriaDescription', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">Vídeos de Pediatria</h3>
                    <button
                      onClick={() => addVideo('pediatria')}
                      className="bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Adicionar Vídeo
                    </button>
                  </div>

                  <div className="space-y-4">
                    {videos.filter(video => video.category === 'pediatria').map((video) => (
                      <div key={video.id} className="border border-gray-200 rounded-xl p-6 hover:border-[#B2AEA5] transition-colors">
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Título do Vídeo</label>
                              <input
                                type="text"
                                value={video.title}
                                onChange={(e) => updateVideo(video.id, 'title', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">URL do Vídeo (YouTube Embed)</label>
                              <input
                                type="url"
                                value={video.url}
                                onChange={(e) => updateVideo(video.id, 'url', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                                placeholder="https://www.youtube.com/embed/..."
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                            <textarea
                              value={video.description}
                              onChange={(e) => updateVideo(video.id, 'description', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                              rows={3}
                            />
                          </div>
                          <div className="flex justify-end">
                            <button
                              onClick={() => removeVideo(video.id)}
                              className="text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
                            >
                              <Trash2 className="w-4 h-4" />
                              Remover Vídeo
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gerenciamento de Blog */}
              {activeSection === 'blog' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-[#B2AEA5]" />
                      Editor de Blog
                    </h2>
                    <button
                      onClick={addBlogPost}
                      className="bg-gradient-to-r from-[#B2AEA5] to-[#9A9690] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Novo Post
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título da Seção</label>
                      <input
                        type="text"
                        value={siteContent.blogTitle}
                        onChange={(e) => updateSiteContent('blogTitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descrição da Seção</label>
                      <textarea
                        value={siteContent.blogDescription}
                        onChange={(e) => updateSiteContent('blogDescription', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                        rows={3}
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-6">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="border border-gray-200 rounded-xl p-6 hover:border-[#B2AEA5] transition-colors">
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                              <input
                                type="text"
                                value={post.title}
                                onChange={(e) => updateBlogPost(post.id, 'title', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                              <input
                                type="text"
                                value={post.category}
                                onChange={(e) => updateBlogPost(post.id, 'category', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Imagem (URL)</label>
                            <input
                              type="url"
                              value={post.image || ''}
                              onChange={(e) => updateBlogPost(post.id, 'image', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                              placeholder="URL da imagem do post"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Conteúdo</label>
                            <textarea
                              value={post.content}
                              onChange={(e) => updateBlogPost(post.id, 'content', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                              rows={6}
                            />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Data: {post.date}</span>
                            <button
                              onClick={() => removeBlogPost(post.id)}
                              className="text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
                            >
                              <Trash2 className="w-4 h-4" />
                              Remover Post
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gerenciamento de Imagens */}
              {activeSection === 'images' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <ImageIcon className="w-6 h-6 text-[#B2AEA5]" />
                    Gerenciar Imagens
                  </h2>
                  
                  <div className="grid gap-6">
                    {Object.entries(siteImages).map(([key, url]) => (
                      <div key={key} className="border border-gray-200 rounded-xl p-6 hover:border-[#B2AEA5] transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#B2AEA5]/20 to-[#B2AEA5]/10 rounded-lg flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-[#B2AEA5]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                              {key === 'hero' ? 'Imagem Principal' : 
                               key === 'logo' ? 'Logo' :
                               key === 'about' ? 'Sobre Mim' :
                               'Atendimento Humanizado'}
                            </h3>
                            <p className="text-sm text-gray-600">Cole a URL da imagem</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <input
                            type="url"
                            value={url}
                            onChange={(e) => updateSiteImage(key as keyof SiteImages, e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                            placeholder="URL da imagem"
                          />
                          {url && (
                            <div className="relative">
                              <img src={url} alt="Preview" className="w-full h-48 object-cover rounded-lg border" />
                              <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                                Preview
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Outras seções com conteúdo básico */}
              {['formation', 'process', 'location', 'contact'].includes(activeSection) && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {activeSection === 'formation' && 'Formação Profissional'}
                      {activeSection === 'process' && 'Processo de Atendimento'}
                      {activeSection === 'location' && 'Localização'}
                      {activeSection === 'contact' && 'Contato'}
                    </h2>
                    <div className="flex items-center gap-2">
                      {activeSection === 'formation' && <Award className="w-5 h-5 text-[#B2AEA5]" />}
                      {activeSection === 'process' && <Stethoscope className="w-5 h-5 text-[#B2AEA5]" />}
                      {activeSection === 'location' && <MapPin className="w-5 h-5 text-[#B2AEA5]" />}
                      {activeSection === 'contact' && <Phone className="w-5 h-5 text-[#B2AEA5]" />}
                      <span className="text-sm text-gray-600">Editar conteúdo</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título da Seção</label>
                      <input
                        type="text"
                        value={
                          activeSection === 'formation' ? siteContent.formationTitle :
                          activeSection === 'process' ? siteContent.processTitle :
                          activeSection === 'location' ? siteContent.locationTitle :
                          siteContent.contactTitle
                        }
                        onChange={(e) => {
                          if (activeSection === 'formation') updateSiteContent('formationTitle', e.target.value);
                          if (activeSection === 'process') updateSiteContent('processTitle', e.target.value);
                          if (activeSection === 'location') updateSiteContent('locationTitle', e.target.value);
                          if (activeSection === 'contact') updateSiteContent('contactTitle', e.target.value);
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
                      <textarea
                        value={
                          activeSection === 'formation' ? siteContent.formationDescription :
                          activeSection === 'process' ? siteContent.processDescription :
                          activeSection === 'location' ? siteContent.locationDescription :
                          siteContent.contactDescription
                        }
                        onChange={(e) => {
                          if (activeSection === 'formation') updateSiteContent('formationDescription', e.target.value);
                          if (activeSection === 'process') updateSiteContent('processDescription', e.target.value);
                          if (activeSection === 'location') updateSiteContent('locationDescription', e.target.value);
                          if (activeSection === 'contact') updateSiteContent('contactDescription', e.target.value);
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B2AEA5] focus:border-transparent resize-none"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}