import { useState } from 'react'
import { HashRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import logo from './assets/MoviFacil_logo.png'

type Page = 'inicio' | 'sobre' | 'solucao' | 'integrantes' | 'faq' | 'contato'

type NavItem = {
  name: string
  route: Page
  link: string
}

const navItems: NavItem[] = [
  { name: 'Início', route: 'inicio', link: '/inicio' },
  { name: 'Sobre', route: 'sobre', link: '/sobre' },
  { name: 'Solução', route: 'solucao', link: '/solucao' },
  { name: 'Equipe', route: 'integrantes', link: '/integrantes' },
  { name: 'FAQ', route: 'faq', link: '/faq' },
  { name: 'Contato', route: 'contato', link: '/contato' },
]

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" replace />} />
            <Route path="/inicio" element={<InicioPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/solucao" element={<SolucaoPage />} />
            <Route path="/integrantes" element={<IntegrantesPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

function Header() {
  return (
    <header className="page-header">
      <div className="container header">
        <NavLink className="logo" to="/inicio">
          <div className="logo-title">
            <span>
              <span className="brand-purple">Movi</span>
              <span className="brand-blue"> Fácil</span>
            </span>
            <small>Facilitação de transporte</small>
          </div>
        </NavLink>

        <nav className="site-nav" aria-label="Menu principal">
          <ul>
            {navItems.map((item) => (
              <li key={item.route}>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to={item.link}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

function InicioPage() {
  return (
    <>
      <section className="hero hero-simple home-hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="home-title">Movi Fácil transforma<br />o transporte público<br />em uma jornada mais<br />acessível</h1>
            <div className="hero-actions">
              <a className="btn-primary" href="#solucao">Conheça o projeto</a>
              <a className="btn-secondary" href="#integrantes">Fale com o time</a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-visual">
              <div className="logo-bus">
                <img className="movifacil-logo" src={logo} alt="Movi Fácil" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overview inicio-overview">
        <div className="feature-card feature-card-wide">
          <h2 className="section-title">Por que o Movi Fácil?</h2>
          <p className="section-intro">A cada dia mais pessoas precisam de transporte urbano eficiente e transparente. Nosso projeto reúne benefícios reais para quem usa ônibus, metrô ou sistemas de bilhetegem digital.</p>
        </div>

        <div className="feature-list">
          <article className="feature-card">
            <span className="feature-icon">✦</span>
            <h3>Economia e recompensa</h3>
            <p>Usuários acumulam pontos ao usar o transporte público e podem resgatar descontos ou passagens gratuitas.</p>
          </article>
          <article className="feature-card">
            <span className="feature-icon">✎</span>
            <h3>Acesso simplificado</h3>
            <p>Interface clara para registrar bilhetes, acompanhar missões e verificar saldo de créditos.</p>
          </article>
          <article className="feature-card">
            <span className="feature-icon">☏</span>
            <h3>Mobilidade inteligente</h3>
            <p>Fluxos pensados para reduzir o tempo de uso e incentivar a adesão ao transporte coletivo.</p>
          </article>
        </div>
      </section>
    </>
  )
}

function SobrePage() {
  return (
    <section className="overview sobre-overview">
      <section className="hero hero-simple page-heading">
        <div className="hero-grid">
          <div className="hero-content">
            <h1><span className="icon brand-blue">📚</span>Sobre o <span className="brand-purple">Movi</span><span className="brand-blue"> Fácil</span></h1>
            <p>O Movi Fácil é uma plataforma criada para tornar o transporte coletivo mais acessível, com mais conveniência e incentivo ao uso de ônibus e metrô.</p>
          </div>
        </div>
      </section>

      <div className="feature-card">
        <h2 className="section-title">Motivação</h2>
        <p>Segundo reportagens recentes, o uso do transporte público no Brasil tem caído e muitos passageiros relatam desconforto, limitação de horários e custos altos. O cidadão médio pode gastar mais de R$ 212,00 por mês com deslocamentos.</p>
      </div>

      <div className="feature-card">
        <h2 className="section-title">Nossa solução</h2>
        <p>A nossa solução para esse problema foi a criação de uma aplicação que permite que o usuário ganhe pontos por utilizar o transporte público, seja ônibus ou metrô, ou por completar missões propostas pelo aplicativo.</p>
        <a className="btn-primary" href="#solucao">Veja a solução completa</a>
      </div>

      <div className="section-split">
        <article className="feature-card">
          <h2 className="section-title">Objetivo</h2>
          <p>O objetivo do projeto é tornar o transporte público financeiramente mais viável para os usuários, reduzindo o trânsito e a emissão de poluentes.</p>
        </article>

        <article className="feature-card">
          <h2 className="section-title">Benefícios ao usuário</h2>
          <p>O Movi Fácil recompensa quem utiliza transporte público no dia a dia. Ao completar missões e registrar viagens, o usuário acumula pontos para descontos ou passagens gratuitas.</p>
        </article>
      </div>
    </section>
  )
}

function SolucaoPage() {
  return (
    <section className="overview solucao-overview">
      <section className="hero hero-simple page-heading">
        <div className="hero-grid">
          <div className="hero-content">
            <h1><span className="icon brand-purple">⚙️</span>Uma solução real para o transporte público<span className="icon brand-blue">🚌</span></h1>
            <p>Movi Fácil transforma viagens em benefícios claros com pontos, trilhas de uso e um sistema de recompensas pensado para ônibus e metrô.</p>
          </div>
        </div>
      </section>

      <section className="overview">
        <div className="feature-card">
          <h2 className="section-title">Como funciona?</h2>
          <p className="section-intro">O aplicativo permite que o usuário registre viagens, acumule pontos por cada uso do transporte público e complete missões que geram créditos extras.</p>
        </div>

        <div className="feature-list">
          <article className="feature-card">
            <h3><span className="icon">📱</span>Carteira digital de pontos</h3>
            <p>Os usuários acompanham saldo de pontos, resgates e histórico de uso de forma transparente e clara.</p>
          </article>
          <article className="feature-card">
            <h3><span className="icon">📄</span>Missões de mobilidade</h3>
            <p>Desafios e metas incentivam viagens regulares, ajudando a reduzir o uso de carros particulares.</p>
          </article>
          <article className="feature-card">
            <h3><span className="icon">🎁</span>Benefícios instantâneos</h3>
            <p>Os pontos podem ser convertidos em descontos ou passagens gratuitas, tornando a experiência mais vantajosa.</p>
          </article>
        </div>
      </section>
    </section>
  )
}

function IntegrantesPage() {
  const members = [
    ['Cauã Trevisanuto', 'RM 570312', 'https://github.com/CauaTr', 'https://www.linkedin.com/in/cauã-trevisanuto-997405411/'],
    ['Pedro de Paiva Basilio', 'RM 572370', 'https://github.com/P3druuh', 'https://www.linkedin.com/in/pedro-basilio-770108411'],
    ['Thiago Ferreira Rocha', 'RM 572492', 'https://github.com/thiago2908', 'https://www.linkedin.com/in/thiago-f-rocha-325904290/'],
    ['Eduardo de França Carvalho', 'RM 569172', 'https://github.com/eduardodefrancacarvalho98-boop', 'https://www.linkedin.com/in/eduardo-de-frança-carvalho-80453237a'],
    ['João Luiz Silva Matias de Oliveira', 'RM 568747', 'https://github.com/Ja1Gizz', 'https://www.linkedin.com/in/joão-luiz-silva-matias-de-oliveira-34599b408/'],
  ]

  return (
    <section className="overview">
      <section className="hero hero-simple page-heading">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Conheça o time por trás do <span className="brand-purple">Movi</span><span className="brand-blue"> Fácil</span></h1>
          </div>
        </div>
      </section>

      <div className="team-grid">
        {members.map((member) => (
          <article className="team-card" key={member[0]}>
            <h3>{member[0]}</h3>
            <p>{member[1]}</p>
            <div className="team-links">
              <a href={member[2]} target="_blank" rel="noreferrer">GitHub</a>
              <a href={member[3]} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems = [
    ['O que é o Movifácil?', 'O Movifácil é um aplicativo que incentiva o uso do transporte público por meio de um sistema de pontos e recompensas.'],
    ['Como ganhar pontos no aplicativo?', 'O usuário ganha pontos ao pagar passagens utilizando o aplicativo ou ao completar missões propostas pela plataforma.'],
    ['Para que servem os pontos acumulados?', 'Os pontos podem ser trocados por descontos em passagens ou até mesmo por passagens gratuitas.'],
    ['Quantos pontos são recebidos por pagamento?', 'Cada pagamento realizado pelo aplicativo gera 10 pontos para o usuário.'],
    ['Existe limite de pontos que posso acumular?', 'Não. O usuário pode acumular pontos livremente ao utilizar o aplicativo e concluir missões.'],
  ]

  return (
    <section className="overview">
      <section className="hero hero-simple page-heading">
        <div className="hero-grid">
          <div className="hero-content">
            <h1><span className="brand-purple">FAQ</span><span className="icon brand-blue">💬</span></h1>
            <p>Respostas rápidas sobre o funcionamento, a navegação e as regras do Movi Fácil.</p>
          </div>
        </div>
      </section>

      <div className="faq-list">
        {faqItems.map((faq, index) => (
          <article className="faq-card" key={faq[0]}>
            <button className="faq-toggle" type="button" aria-expanded={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>{faq[0]}</button>
            <div className="faq-answer" hidden={openIndex !== index}>
              <p>{faq[1]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContatoPage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: Record<string, unknown>) => {
    const name = String(data.name ?? '')
    const message = String(data.message ?? '')
    window.location.href = `mailto:movifacil@gmail.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`
  }

  return (
    <section className="overview">
      <section className="hero hero-simple page-heading">
        <div className="hero-grid">
          <div className="hero-content">
            <h1><span className="brand-purple">Contato</span><span className="icon brand-blue">✉️</span></h1>
            <h2>Use o formulário para enviar sua mensagem ou confirme um atendimento direto com nossos canais de email e telefone.</h2>
          </div>
        </div>
      </section>

      <section className="contact-grid">
        <article className="contact-card">
          <h1><strong>Informações de contato</strong></h1>
          <h3>Estamos aqui para esclarecer dúvidas e receber sugestões sobre o Movi Fácil.</h3>
          <h3><strong><span className="icon">✉️</span>Email:</strong> movifacil@gmail.com</h3>
          <h3><strong><span className="icon">☎️</span>Telefone:</strong> (11) 93278-4516</h3>
          <h3><strong><span className="icon">📍</span>Local:</strong> FIAP Paulista, São Paulo - SP</h3>
        </article>

        <article className="form-card">
          <h3>Formulário de mensagem</h3>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nome completo</label>
            <input id="name" required {...register('name')} />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" required {...register('email')} />

            <label htmlFor="message">Mensagem</label>
            <textarea id="message" rows={6} required {...register('message')}></textarea>

            <button type="submit">Enviar mensagem</button>
          </form>
        </article>
      </section>
    </section>
  )
}

export default App
