'use client'

import { useState } from 'react'
import { Heart, Brain, Users, Award, Phone, MapPin, Clock, CheckCircle, Play, Instagram, Linkedin, Star, Shield, Stethoscope, BookOpen, User, Lock, Edit, FileText, Image, Video, Settings, Save, Plus, Trash2, Eye, EyeOff, Move, Copy } from 'lucide-react'

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false)
  const [loginData, setLoginData] = useState({ username: '', password: '' })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Sinais precoces do Transtorno do Espectro Autista',
      content: 'O diagnóstico precoce do TEA é fundamental para o desenvolvimento da criança. Identificar os primeiros sinais pode fazer toda a diferença no processo de intervenção e acompanhamento.',
      date: '2024-01-15',
      category: 'Neuropediatria',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'TDAH: Como identificar e acompanhar',
      content: 'O Transtorno de Déficit de Atenção e Hiperatividade afeta milhões de crianças. Compreender os sintomas e as estratégias de manejo é essencial para o desenvolvimento saudável.',
      date: '2024-01-10',
      category: 'Transtornos do Neurodesenvolvimento',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop'
    }
  ])
  const [newPost, setNewPost] = useState({ title: '', content: '', category: '', image: '' })
  const [videos, setVideos] = useState({
    neuropediatria: [
      { id: 1, title: 'Prevenção e cuidados básicos', url: '', thumbnail: '' },
      { id: 2, title: 'Dificuldades de sono na infância: o que observar?', url: '', thumbnail: '' },
      { id: 3, title: 'A importância do acompanhamento neuropediátrico contínuo', url: '', thumbnail: '' }
    ],
    pediatria: [
      { id: 1, title: 'Marcos do desenvolvimento infantil', url: '', thumbnail: '' },
      { id: 2, title: 'Alimentação saudável na infância', url: '', thumbnail: '' },
      { id: 3, title: 'Prevenção e cuidados básicos', url: '', thumbnail: '' }
    ]
  })

  // Dados das seções para edição
  const [sectionData, setSectionData] = useState({
    hero: {
      title: 'Cuidando do desenvolvimento neurológico infantil com ciência, empatia e propósito',
      subtitle: 'Atendimento capacitado em Neuropediatria e Pediatria com foco no diagnóstico, acompanhamento e cuidado integral de crianças e adolescentes com transtornos do neurodesenvolvimento.',
      image: 'https://i.imgur.com/K3yeK96.jpg',
      crm: 'CRM 7688/RO'
    },
    about: {
      title: 'Dra. Ana Cláudia Babolim',
      subtitle: 'Médica – CRM 7688/RO\nPós-graduada em Neuropediatria e Pediatria',
      content: 'Sou médica, pós-graduada em Neuropediatria e Pediatria. Tenho ampla experiência no diagnóstico e acompanhamento de crianças e adolescentes com condições neurológicas e transtornos do neurodesenvolvimento.\n\nMinha atuação é guiada pela sensibilidade, pela ciência e pelo compromisso com o bem-estar e a inclusão de cada criança e sua família.',
      image: 'https://i.imgur.com/K3yeK96.jpg'
    },
    humanized: {
      title: 'Um cuidado que vai além do diagnóstico',
      content: 'Cada criança é única e merece ser cuidada dessa forma.\n\nMeu atendimento é pautado pela escuta ativa, pelo respeito às individualidades e pelo acolhimento da família em todo o processo.\n\nAcredito que compreender o contexto emocional, social e familiar é essencial para um diagnóstico preciso e um tratamento eficaz.\n\nPor isso, dedico tempo para conhecer cada pequeno paciente e oferecer um acompanhamento próximo, baseado em empatia, ciência e confiança.\n\nMais do que tratar sintomas, meu propósito é promover o bem-estar e o desenvolvimento integral da criança.',
      image: 'https://i.imgur.com/QgggT6r.jpg'
    },
    mission: {
      title: 'Cuidar com excelência, empatia e trabalho em rede',
      content: 'Minha missão é promover o pleno desenvolvimento da criança em todas as suas dimensões — cognitivas, emocionais e sociais. Acredito em um cuidado construído em conjunto com famílias, escolas e outros profissionais da saúde, sempre com base em evidências científicas e em uma escuta acolhedora.'
    },
    qualifications: {
      title: 'Capacitada',
      subtitle: 'Qualificada para zelar por você e por aqueles que você ama.'
    },
    neuropediatria: {
      title: 'Conheça mais sobre o cuidado neuropediátrico',
      content: 'Assista a conteúdos criados com carinho para orientar famílias e profissionais. Aqui você encontra informações e orientações sobre o desenvolvimento infantil, transtornos neurológicos e o papel da família no cuidado da criança.'
    },
    pediatria: {
      title: 'Cuidados pediátricos essenciais',
      content: 'Conteúdos educativos sobre cuidados gerais em pediatria, desenvolvimento infantil saudável e orientações para pais e cuidadores.'
    },
    professionalization: {
      title: 'Minha Profissionalização',
      content: 'Conheça minha trajetória acadêmica e profissional, com cursos, seminários e especializações que me capacitam para oferecer o melhor cuidado às crianças e suas famílias.'
    },
    process: {
      title: 'Atendimento pensado para acolher e orientar cada família'
    },
    location: {
      title: 'Local de Atendimento',
      address: 'Rua Rio de Janeiro, nº 3122 – Setor 01\nEsquina com Avenida Rio Branco, Centro\nJaru – RO',
      phone: '(69) 9 9265-0688'
    },
    contact: {
      title: 'Pronto para cuidar do seu filho?',
      content: 'Entre em contato diretamente pelo WhatsApp para agendar sua consulta ou esclarecer dúvidas. Estou aqui para ajudar você e sua família.'
    }
  })

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Credenciais simples para demonstração
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsLoggedIn(true)
    } else {
      alert('Credenciais inválidas')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setShowDashboard(false)
    setLoginData({ username: '', password: '' })
    setActiveSection('hero')
  }

  const addBlogPost = () => {
    if (newPost.title && newPost.content && newPost.category) {
      // Usar um ID sequencial baseado no comprimento atual + 1
      const nextId = blogPosts.length + 1
      // Usar data fixa para evitar problemas de hidratação
      const currentDate = '2024-01-20'
      
      const post = {
        id: nextId,
        ...newPost,
        date: currentDate
      }
      setBlogPosts([post, ...blogPosts])
      setNewPost({ title: '', content: '', category: '', image: '' })
    }
  }

  const deleteBlogPost = (id: number) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id))
  }

  const addVideo = (section: 'neuropediatria' | 'pediatria') => {
    const newVideo = {
      id: videos[section].length + 1,
      title: '',
      url: '',
      thumbnail: ''
    }
    setVideos(prev => ({
      ...prev,
      [section]: [...prev[section], newVideo]
    }))
  }

  const updateVideo = (section: 'neuropediatria' | 'pediatria', id: number, field: string, value: string) => {
    setVideos(prev => ({
      ...prev,
      [section]: prev[section].map(video => 
        video.id === id ? { ...video, [field]: value } : video
      )
    }))
  }

  const deleteVideo = (section: 'neuropediatria' | 'pediatria', id: number) => {
    setVideos(prev => ({
      ...prev,
      [section]: prev[section].filter(video => video.id !== id)
    }))
  }

  const updateSectionData = (section: string, field: string, value: string) => {
    setSectionData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const getCurrentSectionData = (section: string) => {
    return sectionData[section] || {}
  }

  if (showDashboard) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#B2AEA5' }}>
        {!isLoggedIn ? (
          // Tela de Login
          <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md w-full">
              <div className="bg-white rounded-2xl shadow-2xl p-8" style={{ borderColor: '#B2AEA5', borderWidth: '2px' }}>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#B2AEA5' }}>
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Dashboard - Login</h2>
                  <p className="text-gray-600 mt-2">Acesse o painel administrativo</p>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Usuário</label>
                    <input
                      type="text"
                      value={loginData.username}
                      onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50"
                      style={{ focusRingColor: '#B2AEA5' }}
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50"
                      style={{ focusRingColor: '#B2AEA5' }}
                      placeholder="Digite sua senha"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: '#B2AEA5' }}
                  >
                    Entrar
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowDashboard(false)}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    ← Voltar ao site
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Dashboard Administrativo Visual
          <div className="min-h-screen">
            <header className="bg-white shadow-lg border-b-4" style={{ borderColor: '#B2AEA5' }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://i.imgur.com/CVF7NCY.jpg" 
                      alt="Logo Dra. Ana Cláudia" 
                      className="h-12 w-auto"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard Visual Builder</h1>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setShowDashboard(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      Ver Site
                    </button>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Sair
                    </button>
                  </div>
                </div>
              </div>
            </header>
            
            <div className="flex">
              {/* Sidebar Visual */}
              <div className="w-80 bg-white shadow-lg min-h-screen">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Seções do Site
                  </h3>
                  <nav className="space-y-2">
                    {[
                      { id: 'hero', name: 'Página Inicial', icon: Star, preview: sectionData.hero.title.substring(0, 30) + '...' },
                      { id: 'about', name: 'Sobre a Doutora', icon: User, preview: sectionData.about.title },
                      { id: 'humanized', name: 'Atendimento Humanizado', icon: Heart, preview: sectionData.humanized.title.substring(0, 30) + '...' },
                      { id: 'mission', name: 'Missão e Abordagem', icon: Shield, preview: sectionData.mission.title.substring(0, 30) + '...' },
                      { id: 'qualifications', name: 'Qualificações', icon: Award, preview: sectionData.qualifications.title },
                      { id: 'neuropediatria', name: 'Neuropediatria', icon: Brain, preview: `${videos.neuropediatria.length} vídeos` },
                      { id: 'pediatria', name: 'Pediatria', icon: Stethoscope, preview: `${videos.pediatria.length} vídeos` },
                      { id: 'blog', name: 'Blog', icon: FileText, preview: `${blogPosts.length} posts publicados` },
                      { id: 'professionalization', name: 'Profissionalização', icon: BookOpen, preview: sectionData.professionalization.title.substring(0, 30) + '...' },
                      { id: 'process', name: 'Processo de Atendimento', icon: CheckCircle, preview: sectionData.process.title.substring(0, 30) + '...' },
                      { id: 'location', name: 'Localização', icon: MapPin, preview: 'Hospital São Camilo – Jaru' },
                      { id: 'contact', name: 'Contato', icon: Phone, preview: sectionData.contact.title.substring(0, 30) + '...' }
                    ].map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                          activeSection === section.id 
                            ? 'text-white shadow-lg border-transparent' 
                            : 'text-gray-700 hover:bg-gray-50 border-gray-200'
                        }`}
                        style={{ 
                          backgroundColor: activeSection === section.id ? '#B2AEA5' : 'transparent'
                        }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <section.icon className="w-5 h-5" />
                          <span className="font-semibold">{section.name}</span>
                        </div>
                        <p className={`text-xs ${activeSection === section.id ? 'text-white/80' : 'text-gray-500'}`}>
                          {section.preview}
                        </p>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Main Content - Visual Builder */}
              <div className="flex-1 p-8">
                {activeSection === 'blog' ? (
                  // Blog Builder Visual
                  <div className="max-w-6xl">
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <FileText className="w-8 h-8" style={{ color: '#B2AEA5' }} />
                        Blog Builder
                      </h2>
                      
                      {/* Formulário Visual para novo post */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 mb-8 border-2 border-dashed border-gray-300">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                          <Plus className="w-5 h-5" />
                          Criar Novo Post
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2">Título do Post</label>
                              <input
                                type="text"
                                value={newPost.title}
                                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                                placeholder="Digite um título atrativo..."
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2">Categoria</label>
                              <select
                                value={newPost.category}
                                onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                              >
                                <option value="">Selecione uma categoria</option>
                                <option value="Neuropediatria">Neuropediatria</option>
                                <option value="Pediatria">Pediatria</option>
                                <option value="Transtornos do Neurodesenvolvimento">Transtornos do Neurodesenvolvimento</option>
                                <option value="Dicas para Pais">Dicas para Pais</option>
                                <option value="Desenvolvimento Infantil">Desenvolvimento Infantil</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2">Imagem do Post</label>
                              <input
                                type="url"
                                value={newPost.image}
                                onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                                placeholder="URL da imagem (ex: Unsplash)"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Conteúdo do Post</label>
                            <textarea
                              value={newPost.content}
                              onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                              rows={8}
                              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                              placeholder="Escreva o conteúdo completo do post..."
                            />
                          </div>
                        </div>
                        <button
                          onClick={addBlogPost}
                          className="mt-6 flex items-center gap-2 px-8 py-4 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                          style={{ backgroundColor: '#B2AEA5' }}
                        >
                          <Plus className="w-5 h-5" />
                          Publicar Post
                        </button>
                      </div>

                      {/* Preview dos Posts */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                          <Eye className="w-5 h-5" />
                          Posts Publicados ({blogPosts.length})
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {blogPosts.map((post) => (
                            <div key={post.id} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                              {post.image && (
                                <img 
                                  src={post.image} 
                                  alt={post.title}
                                  className="w-full h-48 object-cover"
                                />
                              )}
                              <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-bold">
                                    {post.category}
                                  </span>
                                  <button
                                    onClick={() => deleteBlogPost(post.id)}
                                    className="text-red-500 hover:text-red-700 transition-colors p-1"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2 text-lg">{post.title}</h4>
                                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{post.content.substring(0, 120)}...</p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                  <span>{post.date.split('-').reverse().join('/')}</span>
                                  <span className="flex items-center gap-1">
                                    <Eye className="w-3 h-3" />
                                    Preview
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (activeSection === 'neuropediatria' || activeSection === 'pediatria') ? (
                  // Video Builder Visual
                  <div className="max-w-6xl">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <Video className="w-8 h-8" style={{ color: '#B2AEA5' }} />
                        {activeSection === 'neuropediatria' ? 'Neuropediatria' : 'Pediatria'} - Video Builder
                      </h2>
                      
                      {/* Seção Info */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border-2 border-blue-200">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Título da Seção</label>
                            <input
                              type="text"
                              value={getCurrentSectionData(activeSection).title || ''}
                              onChange={(e) => updateSectionData(activeSection, 'title', e.target.value)}
                              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                              placeholder="Título da seção de vídeos"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Descrição da Seção</label>
                            <textarea
                              rows={3}
                              value={getCurrentSectionData(activeSection).content || ''}
                              onChange={(e) => updateSectionData(activeSection, 'content', e.target.value)}
                              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                              placeholder="Descrição sobre os vídeos desta seção"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Gerenciador de Vídeos */}
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <Play className="w-5 h-5" />
                            Vídeos ({videos[activeSection as 'neuropediatria' | 'pediatria'].length})
                          </h3>
                          <button
                            onClick={() => addVideo(activeSection as 'neuropediatria' | 'pediatria')}
                            className="flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            style={{ backgroundColor: '#B2AEA5' }}
                          >
                            <Plus className="w-4 h-4" />
                            Adicionar Vídeo
                          </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {videos[activeSection as 'neuropediatria' | 'pediatria'].map((video) => (
                            <div key={video.id} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-200">
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="font-bold text-gray-800 flex items-center gap-2">
                                  <Video className="w-4 h-4" />
                                  Vídeo #{video.id}
                                </h4>
                                <button
                                  onClick={() => deleteVideo(activeSection as 'neuropediatria' | 'pediatria', video.id)}
                                  className="text-red-500 hover:text-red-700 transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-bold text-gray-700 mb-2">Título do Vídeo</label>
                                  <input
                                    type="text"
                                    value={video.title}
                                    onChange={(e) => updateVideo(activeSection as 'neuropediatria' | 'pediatria', video.id, 'title', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg font-medium"
                                    placeholder="Digite o título do vídeo"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-bold text-gray-700 mb-2">URL do Vídeo</label>
                                  <input
                                    type="url"
                                    value={video.url}
                                    onChange={(e) => updateVideo(activeSection as 'neuropediatria' | 'pediatria', video.id, 'url', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg font-medium"
                                    placeholder="https://youtube.com/watch?v=..."
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-bold text-gray-700 mb-2">Thumbnail (opcional)</label>
                                  <input
                                    type="url"
                                    value={video.thumbnail}
                                    onChange={(e) => updateVideo(activeSection as 'neuropediatria' | 'pediatria', video.id, 'thumbnail', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg font-medium"
                                    placeholder="URL da imagem de capa"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4 pt-8 border-t-2 border-gray-200 mt-8">
                        <button className="flex items-center gap-2 px-8 py-4 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg" style={{ backgroundColor: '#B2AEA5' }}>
                          <Save className="w-5 h-5" />
                          Salvar Alterações
                        </button>
                        <button className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Outras seções - Builder Visual Melhorado
                  <div className="max-w-6xl">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <Edit className="w-8 h-8" style={{ color: '#B2AEA5' }} />
                        Editar: {activeSection === 'hero' ? 'Página Inicial' : 
                                activeSection === 'about' ? 'Sobre a Doutora' :
                                activeSection === 'humanized' ? 'Atendimento Humanizado' :
                                activeSection === 'mission' ? 'Missão e Abordagem' :
                                activeSection === 'qualifications' ? 'Qualificações' :
                                activeSection === 'professionalization' ? 'Profissionalização' :
                                activeSection === 'process' ? 'Processo de Atendimento' :
                                activeSection === 'location' ? 'Localização' :
                                activeSection === 'contact' ? 'Contato' : activeSection}
                      </h2>
                      
                      {/* Preview Visual */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border-2 border-blue-200">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Eye className="w-5 h-5" />
                          Preview Atual
                        </h3>
                        <div className="bg-white rounded-lg p-4 border">
                          <h4 className="font-bold text-lg text-gray-800 mb-2">{getCurrentSectionData(activeSection).title}</h4>
                          {getCurrentSectionData(activeSection).subtitle && (
                            <p className="text-gray-600 mb-2">{getCurrentSectionData(activeSection).subtitle}</p>
                          )}
                          {getCurrentSectionData(activeSection).content && (
                            <p className="text-gray-600 text-sm">{getCurrentSectionData(activeSection).content?.substring(0, 150)}...</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Coluna Esquerda - Textos */}
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                              <FileText className="w-4 h-4" />
                              Título Principal
                            </label>
                            <input
                              type="text"
                              value={getCurrentSectionData(activeSection).title || ''}
                              onChange={(e) => updateSectionData(activeSection, 'title', e.target.value)}
                              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                              placeholder="Digite o título da seção"
                            />
                          </div>
                          
                          {(activeSection === 'hero' || activeSection === 'about' || activeSection === 'qualifications') && (
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Subtítulo
                              </label>
                              <textarea
                                rows={3}
                                value={getCurrentSectionData(activeSection).subtitle || ''}
                                onChange={(e) => updateSectionData(activeSection, 'subtitle', e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                                placeholder="Digite o subtítulo"
                              />
                            </div>
                          )}

                          {activeSection === 'hero' && (
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                <Shield className="w-4 h-4" />
                                CRM
                              </label>
                              <input
                                type="text"
                                value={getCurrentSectionData(activeSection).crm || ''}
                                onChange={(e) => updateSectionData(activeSection, 'crm', e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                                placeholder="Digite o CRM"
                              />
                            </div>
                          )}

                          {(activeSection !== 'qualifications' && activeSection !== 'process' && activeSection !== 'location') && (
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Conteúdo
                              </label>
                              <textarea
                                rows={8}
                                value={getCurrentSectionData(activeSection).content || ''}
                                onChange={(e) => updateSectionData(activeSection, 'content', e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                                placeholder="Digite o conteúdo da seção..."
                              />
                            </div>
                          )}
                        </div>

                        {/* Coluna Direita - Mídia e Extras */}
                        <div className="space-y-6">
                          {(activeSection === 'hero' || activeSection === 'about' || activeSection === 'humanized') && (
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                <Image className="w-4 h-4" />
                                Imagem Principal
                              </label>
                              <div className="space-y-3">
                                <input
                                  type="url"
                                  value={getCurrentSectionData(activeSection).image || ''}
                                  onChange={(e) => updateSectionData(activeSection, 'image', e.target.value)}
                                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                                  placeholder="URL da imagem"
                                />
                                {getCurrentSectionData(activeSection).image && (
                                  <div className="border-2 border-gray-200 rounded-lg p-2">
                                    <img 
                                      src={getCurrentSectionData(activeSection).image} 
                                      alt="Preview" 
                                      className="w-full h-32 object-cover rounded"
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {activeSection === 'location' && (
                            <>
                              <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  Endereço
                                </label>
                                <textarea
                                  rows={3}
                                  value={getCurrentSectionData(activeSection).address || ''}
                                  onChange={(e) => updateSectionData(activeSection, 'address', e.target.value)}
                                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                                  placeholder="Digite o endereço completo"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                  <Phone className="w-4 h-4" />
                                  Telefone
                                </label>
                                <input
                                  type="text"
                                  value={getCurrentSectionData(activeSection).phone || ''}
                                  onChange={(e) => updateSectionData(activeSection, 'phone', e.target.value)}
                                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 font-medium"
                                  placeholder="Digite o telefone"
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-4 pt-8 border-t-2 border-gray-200 mt-8">
                        <button className="flex items-center gap-2 px-8 py-4 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg" style={{ backgroundColor: '#B2AEA5' }}>
                          <Save className="w-5 h-5" />
                          Salvar Alterações
                        </button>
                        <button className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Botão Dashboard */}
      <button
        onClick={() => setShowDashboard(true)}
        className="fixed top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: '#B2AEA5' }}
      >
        <User className="w-6 h-6 text-white" />
      </button>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #B2AEA5 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(178, 174, 165, 0.3) 0%, rgba(178, 174, 165, 0.1) 100%)' }}></div>
          <div className="absolute top-10 left-10 w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: '#B2AEA5', opacity: 0.4 }}></div>
          <div className="absolute top-32 right-20 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#8A8680', opacity: 0.3 }}></div>
          <div className="absolute bottom-20 left-32 w-5 h-5 rounded-full animate-pulse" style={{ backgroundColor: '#B2AEA5', opacity: 0.5 }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border mb-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(8px)', borderColor: '#B2AEA5', boxShadow: '0 8px 32px rgba(178, 174, 165, 0.2)' }}>
              <Shield className="w-5 h-5" style={{ color: '#333333' }} />
              <span className="font-semibold" style={{ color: '#333333' }}>{sectionData.hero.crm}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 leading-tight font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              {sectionData.hero.title}
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-4xl mx-auto leading-relaxed font-medium" style={{ color: '#666666' }}>
              {sectionData.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5569992650688?text=Olá%20Dra.%20Ana%20Cláudia,%20gostaria%20de%20agendar%20uma%20consulta"
                className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #B2AEA5 0%, #8A8680 50%, #666666 100%)', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.3)' }}
              >
                <Heart className="w-5 h-5" />
                Agendar Consulta
              </a>
              <button 
                onClick={() => scrollToSection('localizacao')}
                className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #8A8680 0%, #B2AEA5 50%, #CCCCCC 100%)', boxShadow: '0 10px 30px rgba(138, 134, 128, 0.3)' }}
              >
                <MapPin className="w-5 h-5" />
                Ver Localização
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Dra. Ana Cláudia */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 50%, #F0F0F0 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle, #B2AEA5 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle, #8A8680 0%, transparent 70%)' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#F0F0F0', boxShadow: '0 4px 12px rgba(178, 174, 165, 0.2)' }}>
                <Star className="w-4 h-4" style={{ color: '#333333' }} />
                <span className="font-semibold text-sm" style={{ color: '#333333' }}>Sobre a Doutora</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-serif mb-6 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                {sectionData.about.title}
              </h2>
              <p className="mb-4 text-lg leading-relaxed font-medium" style={{ color: '#666666' }}>
                <strong style={{ color: '#333333' }}>{sectionData.about.subtitle.split('\n')[0]}</strong><br />
                {sectionData.about.subtitle.split('\n')[1]}
              </p>
              <div className="mb-8 text-lg leading-relaxed font-medium" style={{ color: '#666666' }}>
                {sectionData.about.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">{paragraph}</p>
                ))}
              </div>
              
              <a 
                href="https://wa.me/5569992650688?text=Olá%20Dra.%20Ana%20Cláudia,%20gostaria%20de%20conhecer%20mais%20sobre%20seu%20trabalho"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #B2AEA5 0%, #8A8680 50%, #666666 100%)', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.3)' }}
              >
                <Phone className="w-4 h-4" />
                Conversar no WhatsApp
              </a>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #CCCCCC 100%)', boxShadow: '0 20px 40px rgba(178, 174, 165, 0.3)' }}></div>
                <div className="relative p-2 rounded-3xl shadow-2xl" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
                  <img 
                    src={sectionData.about.image} 
                    alt="Dra. Ana Cláudia Babolim - Neuropediatra"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 rounded-2xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.1)' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                  <Award className="w-7 h-7" style={{ color: '#333333' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#333333' }}>Formação sólida e atualizada</h3>
              </div>
              <p className="font-medium" style={{ color: '#666666' }}>Conhecimento baseado nas mais recentes evidências científicas</p>
            </div>
            <div className="p-8 rounded-2xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.1)' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                  <Users className="w-7 h-7" style={{ color: '#333333' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#333333' }}>Comunicação próxima</h3>
              </div>
              <p className="font-medium" style={{ color: '#666666' }}>Diálogo constante com famílias e escolas</p>
            </div>
            <div className="p-8 rounded-2xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.1)' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                  <Heart className="w-7 h-7" style={{ color: '#333333' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#333333' }}>Abordagem centrada na criança</h3>
              </div>
              <p className="font-medium" style={{ color: '#666666' }}>Cuidado personalizado considerando o contexto familiar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Atendimento Humanizado */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 50%, #FFFFFF 100%)' }}>
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-20 w-20 h-20 rounded-full" style={{ background: 'radial-gradient(circle, #8A8680 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-10 right-20 w-16 h-16 rounded-full" style={{ background: 'radial-gradient(circle, #B2AEA5 0%, transparent 70%)' }}></div>
          <div className="absolute top-1/2 left-10 w-12 h-12 rounded-full" style={{ background: 'radial-gradient(circle, #CCCCCC 0%, transparent 70%)' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px rgba(178, 174, 165, 0.2)', border: '2px solid #B2AEA5' }}>
                <Heart className="w-4 h-4" style={{ color: '#333333' }} />
                <span className="font-semibold text-sm" style={{ color: '#333333' }}>Atendimento Humanizado</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-serif mb-6 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                {sectionData.humanized.title}
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed font-medium" style={{ color: '#666666' }}>
                {sectionData.humanized.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={paragraph.includes('Mais do que tratar sintomas') ? 'font-bold text-xl' : ''} style={{ color: paragraph.includes('Mais do que tratar sintomas') ? '#333333' : '#666666' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <a 
                href="https://wa.me/5569992650688?text=Olá%20Dra.%20Ana%20Cláudia,%20gostaria%20de%20conhecer%20mais%20sobre%20seu%20atendimento%20humanizado"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl mt-8"
                style={{ background: 'linear-gradient(135deg, #B2AEA5 0%, #8A8680 50%, #666666 100%)', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.3)' }}
              >
                <Phone className="w-4 h-4" />
                Conversar no WhatsApp
              </a>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ background: 'linear-gradient(135deg, #B2AEA5 0%, #8A8680 100%)', boxShadow: '0 20px 40px rgba(178, 174, 165, 0.3)' }}></div>
                <div className="relative p-2 rounded-3xl shadow-2xl" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
                  <img 
                    src={sectionData.humanized.image} 
                    alt="Dra. Ana Cláudia Babolim - Atendimento Humanizado"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Abordagem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5F5F5 0%, #F0F0F0 50%, #FFFFFF 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full" style={{ background: 'radial-gradient(circle, #8A8680 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-28 h-28 rounded-full" style={{ background: 'radial-gradient(circle, #B2AEA5 0%, transparent 70%)' }}></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border mb-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.2)' }}>
            <Heart className="w-5 h-5" style={{ color: '#333333' }} />
            <span className="font-semibold" style={{ color: '#333333' }}>Nossa Missão</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif mb-8 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            {sectionData.mission.title}
          </h2>
          <p className="text-lg mb-16 max-w-4xl mx-auto leading-relaxed font-medium" style={{ color: '#666666' }}>
            {sectionData.mission.content}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl shadow-2xl border hover:shadow-3xl transition-all duration-300 hover:-translate-y-3" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 15px 40px rgba(178, 174, 165, 0.2)' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Heart className="w-10 h-10" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333' }}>Empatia</h3>
              <p className="text-lg font-medium" style={{ color: '#666666' }}>Escuta ativa e acolhimento genuíno para cada família</p>
            </div>
            <div className="p-10 rounded-3xl shadow-2xl border hover:shadow-3xl transition-all duration-300 hover:-translate-y-3" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 15px 40px rgba(178, 174, 165, 0.2)' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Brain className="w-10 h-10" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333' }}>Ciência</h3>
              <p className="text-lg font-medium" style={{ color: '#666666' }}>Condutas baseadas em evidências científicas atualizadas</p>
            </div>
            <div className="p-10 rounded-3xl shadow-2xl border hover:shadow-3xl transition-all duration-300 hover:-translate-y-3" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 15px 40px rgba(178, 174, 165, 0.2)' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Users className="w-10 h-10" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333' }}>Rede</h3>
              <p className="text-lg font-medium" style={{ color: '#666666' }}>Integração entre família, escola e equipe multidisciplinar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualificações */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #F0F0F0 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle, #8A8680 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle, #B2AEA5 0%, transparent 70%)' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border mb-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.2)' }}>
              <Brain className="w-5 h-5" style={{ color: '#333333' }} />
              <span className="font-semibold" style={{ color: '#333333' }}>Qualificação</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              {sectionData.qualifications.title}
            </h2>
            <p className="text-lg max-w-3xl mx-auto font-medium" style={{ color: '#666666' }}>
              {sectionData.qualifications.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Brain className="w-8 h-8" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#333333' }}>1. Transtorno do Espectro Autista (TEA)</h3>
              <p className="leading-relaxed font-medium" style={{ color: '#666666' }}>Alterações na comunicação, na interação social e comportamentos repetitivos ou restritos.</p>
            </div>
            
            <div className="p-8 rounded-3xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <CheckCircle className="w-8 h-8" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#333333' }}>2. Transtorno de Déficit de Atenção e Hiperatividade (TDAH)</h3>
              <p className="leading-relaxed font-medium" style={{ color: '#666666' }}>Déficits de atenção, impulsividade e/ou hiperatividade.</p>
            </div>
            
            <div className="p-8 rounded-3xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <BookOpen className="w-8 h-8" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#333333' }}>3. Transtornos de Aprendizagem Específicos</h3>
              <p className="leading-relaxed font-medium" style={{ color: '#666666' }}>Dislexia (leitura), Discalculia (matemática), Disortografia (escrita)</p>
            </div>
            
            <div className="p-8 rounded-3xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Users className="w-8 h-8" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#333333' }}>4. Transtornos do Desenvolvimento da Linguagem</h3>
              <p className="leading-relaxed font-medium" style={{ color: '#666666' }}>Atrasos ou dificuldades significativas na aquisição e uso da linguagem (oral, escrita ou gestual).</p>
            </div>
            
            <div className="p-8 rounded-3xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Heart className="w-8 h-8" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#333333' }}>5. Transtorno do Desenvolvimento da Coordenação (Dispraxia)</h3>
              <p className="leading-relaxed font-medium" style={{ color: '#666666' }}>Dificuldades na coordenação motora fina e/ou grossa, impactando atividades do dia a dia.</p>
            </div>
            
            <div className="p-8 rounded-3xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Clock className="w-8 h-8" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#333333' }}>6. Transtornos Motores</h3>
              <p className="leading-relaxed font-medium" style={{ color: '#666666' }}>Transtorno de tique (incluindo a Síndrome de Tourette) e outros movimentos involuntários persistentes.</p>
            </div>
            
            <div className="p-8 rounded-3xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Brain className="w-8 h-8" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#333333' }}>7. Deficiência Intelectual (Transtorno do Desenvolvimento Intelectual)</h3>
              <p className="leading-relaxed font-medium" style={{ color: '#666666' }}>Funcionamento intelectual abaixo da média, com impacto no comportamento adaptativo.</p>
            </div>
            
            <div className="p-8 rounded-3xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Shield className="w-8 h-8" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#333333' }}>8. Transtornos do Espectro da Síndrome Alcoólica Fetal</h3>
              <p className="leading-relaxed font-medium" style={{ color: '#666666' }}>Relacionados à exposição pré-natal ao álcool, afetando cognição, comportamento e desenvolvimento físico.</p>
            </div>
            
            <div className="p-8 rounded-3xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Users className="w-8 h-8" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#333333' }}>9. Transtornos do Neurodesenvolvimento Associados a Condições Genéticas</h3>
              <p className="leading-relaxed font-medium" style={{ color: '#666666' }}>Síndrome de Down, Síndrome do X Frágil, Síndrome de Rett, Síndrome de Angelman, entre outras síndromes neurogenéticas.</p>
            </div>
            
            <div className="p-8 rounded-3xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 10px 30px rgba(178, 174, 165, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Heart className="w-8 h-8" style={{ color: '#333333' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#333333' }}>10. Transtornos do Sono e da Regulação Emocional</h3>
              <p className="leading-relaxed font-medium" style={{ color: '#666666' }}>Muitas vezes associados ou comórbidos aos transtornos acima.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Vídeos - Neuropediatria */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 50%, #FFFFFF 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/5 w-20 h-20 rounded-full" style={{ background: 'radial-gradient(circle, #8A8680 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-1/3 right-1/5 w-16 h-16 rounded-full" style={{ background: 'radial-gradient(circle, #B2AEA5 0%, transparent 70%)' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8" style={{ backgroundColor: '#FFFFFF', border: '2px solid #B2AEA5', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.2)' }}>
              <Play className="w-5 h-5" style={{ color: '#333333' }} />
              <span className="font-semibold" style={{ color: '#333333' }}>Neuropediatria</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              {sectionData.neuropediatria.title}
            </h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed font-medium" style={{ color: '#666666' }}>
              {sectionData.neuropediatria.content}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.neuropediatria.map((video) => (
              <div key={video.id} className="rounded-3xl shadow-2xl overflow-hidden border hover:shadow-3xl transition-all duration-300 hover:-translate-y-2" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)', borderColor: '#B2AEA5', borderWidth: '2px' }}>
                <div className="relative h-48 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                    <Play className="w-10 h-10 ml-1" style={{ color: '#333333' }} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#333333' }}>{video.title}</h3>
                  <p className="font-medium" style={{ color: '#666666' }}>Orientações importantes para pais e cuidadores</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Vídeos - Pediatria */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #F0F0F0 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/5 w-20 h-20 rounded-full" style={{ background: 'radial-gradient(circle, #8A8680 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-16 h-16 rounded-full" style={{ background: 'radial-gradient(circle, #B2AEA5 0%, transparent 70%)' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8" style={{ backgroundColor: '#FFFFFF', border: '2px solid #B2AEA5', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.2)' }}>
              <Stethoscope className="w-5 h-5" style={{ color: '#333333' }} />
              <span className="font-semibold" style={{ color: '#333333' }}>Pediatria</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              {sectionData.pediatria.title}
            </h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed font-medium" style={{ color: '#666666' }}>
              {sectionData.pediatria.content}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.pediatria.map((video) => (
              <div key={video.id} className="rounded-3xl shadow-2xl overflow-hidden border hover:shadow-3xl transition-all duration-300 hover:-translate-y-2" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)', borderColor: '#B2AEA5', borderWidth: '2px' }}>
                <div className="relative h-48 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                    <Play className="w-10 h-10 ml-1" style={{ color: '#333333' }} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#333333' }}>{video.title}</h3>
                  <p className="font-medium" style={{ color: '#666666' }}>Conteúdos educativos para o desenvolvimento saudável</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção do Blog - Layout Completo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 50%, #FFFFFF 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-28 h-28 rounded-full" style={{ background: 'radial-gradient(circle, #8A8680 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle, #B2AEA5 0%, transparent 70%)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border mb-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.2)' }}>
              <FileText className="w-5 h-5" style={{ color: '#333333' }} />
              <span className="font-semibold" style={{ color: '#333333' }}>Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              Artigos e Orientações
            </h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed font-medium" style={{ color: '#666666' }}>
              Conteúdos educativos sobre desenvolvimento infantil, transtornos neurológicos e orientações para famílias.
            </p>
          </div>
          
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <article key={post.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Imagem */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 rounded-3xl transform rotate-2" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #CCCCCC 100%)', boxShadow: '0 20px 40px rgba(178, 174, 165, 0.3)' }}></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
                      <img 
                        src={post.image || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'} 
                        alt={post.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#F0F0F0', boxShadow: '0 4px 12px rgba(178, 174, 165, 0.2)' }}>
                    <FileText className="w-4 h-4" style={{ color: '#333333' }} />
                    <span className="font-semibold text-sm" style={{ color: '#333333' }}>{post.category}</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-serif mb-6 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    {post.title}
                  </h3>
                  
                  <p className="text-lg leading-relaxed font-medium mb-8" style={{ color: '#666666' }}>
                    {post.content}
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#666666' }}>
                      <Clock className="w-4 h-4" />
                      <span>{post.date.split('-').reverse().join('/')}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#F0F0F0', color: '#333333' }}>
                      {post.category}
                    </span>
                  </div>
                  

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Profissionalização */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5F5F5 0%, #F0F0F0 50%, #FFFFFF 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-28 h-28 rounded-full" style={{ background: 'radial-gradient(circle, #8A8680 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle, #B2AEA5 0%, transparent 70%)' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border mb-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.2)' }}>
              <BookOpen className="w-5 h-5" style={{ color: '#333333' }} />
              <span className="font-semibold" style={{ color: '#333333' }}>Formação Profissional</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              {sectionData.professionalization.title}
            </h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed font-medium" style={{ color: '#666666' }}>
              {sectionData.professionalization.content}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl shadow-2xl border hover:shadow-3xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 15px 40px rgba(178, 174, 165, 0.2)' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                  <Award className="w-8 h-8" style={{ color: '#333333' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#333333' }}>Pós-Graduações</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F5F5F5' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#333333' }}>Neuropediatria</h4>
                  <p className="text-sm font-medium" style={{ color: '#666666' }}>Especialização em transtornos neurológicos infantis</p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F5F5F5' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#333333' }}>Pediatria</h4>
                  <p className="text-sm font-medium" style={{ color: '#666666' }}>Cuidados gerais da saúde infantil</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl shadow-2xl border hover:shadow-3xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 15px 40px rgba(178, 174, 165, 0.2)' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                  <BookOpen className="w-8 h-8" style={{ color: '#333333' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#333333' }}>Cursos e Seminários</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F5F5F5' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#333333' }}>Transtorno do Espectro Autista</h4>
                  <p className="text-sm font-medium" style={{ color: '#666666' }}>Atualização em diagnóstico e intervenção precoce</p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F5F5F5' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#333333' }}>TDAH e Transtornos de Aprendizagem</h4>
                  <p className="text-sm font-medium" style={{ color: '#666666' }}>Manejo clínico e orientação familiar</p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F5F5F5' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#333333' }}>Desenvolvimento Neuromotor</h4>
                  <p className="text-sm font-medium" style={{ color: '#666666' }}>Avaliação e acompanhamento do desenvolvimento</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="p-8 rounded-3xl shadow-2xl border max-w-4xl mx-auto" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 20px 50px rgba(178, 174, 165, 0.25)' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333' }}>Educação Continuada</h3>
              <p className="text-lg leading-relaxed font-medium mb-6" style={{ color: '#666666' }}>
                Mantenho-me sempre atualizada através de congressos, workshops e cursos de educação continuada, 
                garantindo que meus pacientes recebam o cuidado baseado nas mais recentes evidências científicas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#F0F0F0', color: '#333333' }}>Congressos Nacionais</span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#F0F0F0', color: '#333333' }}>Workshops Especializados</span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#F0F0F0', color: '#333333' }}>Cursos Online</span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#F0F0F0', color: '#333333' }}>Seminários Científicos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona o Atendimento */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5F5F5 0%, #F0F0F0 50%, #FFFFFF 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-28 h-28 rounded-full" style={{ background: 'radial-gradient(circle, #8A8680 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle, #B2AEA5 0%, transparent 70%)' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border mb-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.2)' }}>
              <Stethoscope className="w-5 h-5" style={{ color: '#333333' }} />
              <span className="font-semibold" style={{ color: '#333333' }}>Processo de Atendimento</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              {sectionData.process.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)', border: '3px solid #B2AEA5' }}>
                  <span className="text-3xl font-bold" style={{ color: '#333333' }}>1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-30" style={{ backgroundColor: '#B2AEA5' }}></div>
              </div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333' }}>Agendamento</h3>
              <p className="text-lg leading-relaxed font-medium" style={{ color: '#666666' }}>Entre em contato e reserve seu horário de forma simples e acolhedora</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)', border: '3px solid #B2AEA5' }}>
                  <span className="text-3xl font-bold" style={{ color: '#333333' }}>2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-30" style={{ backgroundColor: '#B2AEA5' }}></div>
              </div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333' }}>Avaliação completa</h3>
              <p className="text-lg leading-relaxed font-medium" style={{ color: '#666666' }}>Entrevista detalhada, exame clínico cuidadoso e uso de escalas específicas</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)', border: '3px solid #B2AEA5' }}>
                  <span className="text-3xl font-bold" style={{ color: '#333333' }}>3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-30" style={{ backgroundColor: '#B2AEA5' }}></div>
              </div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333' }}>Plano de acompanhamento</h3>
              <p className="text-lg leading-relaxed font-medium" style={{ color: '#666666' }}>Orientações práticas personalizadas e reavaliações periódicas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local de Atendimento */}
      <section id="localizacao" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #F0F0F0 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle, #8A8680 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 rounded-full" style={{ background: 'radial-gradient(circle, #B2AEA5 0%, transparent 70%)' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8" style={{ backgroundColor: '#FFFFFF', border: '2px solid #B2AEA5', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.2)' }}>
              <MapPin className="w-5 h-5" style={{ color: '#333333' }} />
              <span className="font-semibold" style={{ color: '#333333' }}>Localização</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              {sectionData.location.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-10 rounded-3xl shadow-2xl border" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 20px 50px rgba(178, 174, 165, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-8" style={{ color: '#333333' }}>Hospital São Camilo – Jaru</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                      <MapPin className="w-6 h-6" style={{ color: '#333333' }} />
                    </div>
                    <div>
                      <p className="font-bold mb-2" style={{ color: '#333333' }}>Endereço:</p>
                      <div className="font-medium" style={{ color: '#666666' }}>
                        {sectionData.location.address.split('\n').map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                      <Phone className="w-6 h-6" style={{ color: '#333333' }} />
                    </div>
                    <div>
                      <p className="font-bold mb-2" style={{ color: '#333333' }}>Telefone:</p>
                      <p className="text-lg font-semibold" style={{ color: '#666666' }}>{sectionData.location.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a 
                    href="https://maps.app.goo.gl/wwfJFR2dAAnaerie6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #B2AEA5 0%, #8A8680 50%, #666666 100%)', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.3)' }}
                  >
                    <MapPin className="w-4 h-4" />
                    Ver no Google Maps
                  </a>
                  <a 
                    href="https://wa.me/5569992650688?text=Olá%20Dra.%20Ana%20Cláudia,%20gostaria%20de%20agendar%20uma%20consulta"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    <Phone className="w-4 h-4" />
                    Agendar Consulta
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-3xl shadow-2xl border overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)', borderColor: '#B2AEA5', borderWidth: '2px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.123456789!2d-62.4666667!3d-10.4333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Rio%20de%20Janeiro%2C%203122%20-%20Setor%2001%2C%20Jaru%20-%20RO!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Rápido - Apenas WhatsApp */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 50%, #FFFFFF 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full" style={{ background: 'radial-gradient(circle, #8A8680 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle, #B2AEA5 0%, transparent 70%)' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border mb-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.2)' }}>
            <Phone className="w-5 h-5" style={{ color: '#333333' }} />
            <span className="font-semibold" style={{ color: '#333333' }}>Entre em Contato</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif mb-8 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            {sectionData.contact.title}
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto font-medium" style={{ color: '#666666' }}>
            {sectionData.contact.content}
          </p>
          
          <div className="p-10 rounded-3xl shadow-3xl border max-w-2xl mx-auto" style={{ backgroundColor: '#FFFFFF', borderColor: '#B2AEA5', borderWidth: '2px', boxShadow: '0 25px 60px rgba(178, 174, 165, 0.25)' }}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Phone className="w-8 h-8" style={{ color: '#333333' }} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold" style={{ color: '#333333' }}>WhatsApp Direto</h3>
                <p className="font-semibold" style={{ color: '#666666' }}>{sectionData.location.phone}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://wa.me/5569992650688?text=Olá%20Dra.%20Ana%20Cláudia,%20gostaria%20de%20agendar%20uma%20consulta"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Agendar Consulta
              </a>
              <a 
                href="https://wa.me/5569992650688?text=Olá%20Dra.%20Ana%20Cláudia,%20gostaria%20de%20mais%20informações%20sobre%20os%20atendimentos"
                className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #B2AEA5 0%, #8A8680 50%, #666666 100%)', boxShadow: '0 8px 25px rgba(178, 174, 165, 0.3)' }}
              >
                <Heart className="w-5 h-5" />
                Mais Informações
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5F5F5 0%, #F0F0F0 50%, #FFFFFF 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle, #8A8680 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full" style={{ background: 'radial-gradient(circle, #B2AEA5 0%, transparent 70%)' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center">
            <div className="mb-8 flex items-center justify-center gap-4">
              <img 
                src="https://i.imgur.com/CVF7NCY.jpg" 
                alt="Logo Dra. Ana Cláudia Babolim" 
                className="h-16 w-auto"
              />
              <div className="text-left">
                <h3 className="text-3xl font-serif mb-1 font-bold" style={{ color: '#333333', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Dra. Ana Cláudia Babolim</h3>
                <p className="text-lg mb-1 font-semibold" style={{ color: '#666666' }}>Médica – CRM 7688/RO</p>
                <p className="font-medium" style={{ color: '#666666' }}>Pós-graduada em Neuropediatria e Pediatria</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                  <Phone className="w-5 h-5" style={{ color: '#333333' }} />
                </div>
                <span className="font-semibold" style={{ color: '#666666' }}>{sectionData.location.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                  <MapPin className="w-5 h-5" style={{ color: '#333333' }} />
                </div>
                <span className="font-semibold" style={{ color: '#666666' }}>Hospital São Camilo – Jaru</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-6 mb-10">
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Instagram className="w-6 h-6" style={{ color: '#333333' }} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl" style={{ background: 'linear-gradient(135deg, #F0F0F0 0%, #F5F5F5 100%)' }}>
                <Linkedin className="w-6 h-6" style={{ color: '#333333' }} />
              </a>
            </div>
            
            <div className="border-t pt-8" style={{ borderColor: '#B2AEA5', borderWidth: '2px' }}>
              <p className="italic text-lg leading-relaxed max-w-2xl mx-auto font-medium" style={{ color: '#666666' }}>
                "Cuidando com sensibilidade e ciência do desenvolvimento de cada criança."
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <a 
        href="https://wa.me/5569992650688?text=Olá%20Dra.%20Ana%20Cláudia,%20gostaria%20de%20agendar%20uma%20consulta"
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50 animate-pulse"
      >
        <Phone className="w-7 h-7" />
      </a>
    </div>
  )
}