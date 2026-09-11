import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Menu,
  MessageCircle,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react';

const whatsappLink = (service?: string) => {
  const message = service
    ? `Olá, Antônio! Gostaria de solicitar um orçamento para: ${service}.`
    : 'Olá, Antônio! Gostaria de conhecer melhor seus serviços de infraestrutura de redes.';
  return `https://wa.me/558681207527?text=${encodeURIComponent(message)}`;
};

const services = [
  {
    icon: Network,
    number: '01',
    title: 'Redes & Wi-Fi',
    description: 'Uma conexão mais rápida, estável e segura para sua casa ou empresa.',
    items: ['Roteadores, repetidores e Mesh', 'Cabeamento e organização de racks', 'Diagnóstico de falhas e cobertura'],
  },
  {
    icon: Server,
    number: '02',
    title: 'Servidores',
    description: 'Ambientes robustos para sua operação funcionar sem interrupções.',
    items: ['Virtualização Proxmox, Hyper-V e KVM', 'Clusters, armazenamento e backups', 'Monitoramento e plano de recuperação'],
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Segurança de rede',
    description: 'Proteção inteligente para seus dados, acessos e infraestrutura.',
    items: ['Firewall, VPN e certificados SSL', 'Hardening e regras personalizadas', 'Monitoramento de ameaças'],
  },
];

const pricing = [
  ['Instalação de roteador Wi-Fi', 'R$ 200 a 250'],
  ['Instalação de repetidor ou Mesh Wi-Fi', 'R$ 150 a 200 / un.'],
  ['Cabeamento de rede (até 10m)', 'R$ 300 a 350'],
  ['Organização de rack pequeno / patch panel', 'R$ 250 a 500'],
  ['Consultoria para melhoria de rede', 'R$ 150 a 250'],
  ['Diagnóstico e solução de problemas', 'R$ 150 a 250'],
  ['Infraestrutura de servidores', 'R$ 1.300 a 2.600'],
  ['Instalação e configuração de firewall', 'R$ 1.000 a 3.500'],
];

const steps = [
  ['01', 'Você explica o desafio', 'Conte o que está acontecendo ou o que você precisa construir.'],
  ['02', 'Eu analiso o cenário', 'Avalio sua estrutura e apresento o caminho mais eficiente.'],
  ['03', 'Sua rede evolui', 'Executo tudo com cuidado, documentação e orientação clara.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#inicio" className="brand" onClick={closeMenu} aria-label="Actech&CIA início">
            <img src="/images/image.png" alt="Actech&CIA Infra de Redes e Informática" />
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#sobre" onClick={closeMenu}>Como funciona</a>
            <a href="#precos" onClick={closeMenu}>Preços</a>
            <a className="nav-cta" href={whatsappLink()} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Falar no WhatsApp <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Infraestrutura que conecta</div>
              <h1>Sua tecnologia,<br /><em>sem complicação.</em></h1>
              <p className="hero-text">Redes mais rápidas, ambientes mais seguros e servidores preparados para acompanhar o seu crescimento.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={whatsappLink()} target="_blank" rel="noreferrer">
                  Solicitar orçamento <ArrowRight size={18} />
                </a>
                <a className="text-link" href="#servicos">Conhecer serviços <ChevronDown size={16} /></a>
              </div>
              <div className="hero-proof"><CircleCheck size={17} /> Atendimento personalizado para cada projeto</div>
            </div>
            <div className="hero-visual">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="visual-card">
                <div className="visual-card-top"><span>ACTECH / STATUS</span><span className="status"><i /> ONLINE</span></div>
                <div className="visual-network">
                  <div className="network-node node-main"><Network size={28} /><span>CORE</span></div>
                  <div className="network-line line-one" /><div className="network-line line-two" /><div className="network-line line-three" />
                  <div className="network-node node-small one"><Server size={18} /><span>SERVER</span></div>
                  <div className="network-node node-small two"><ShieldCheck size={18} /><span>FIREWALL</span></div>
                  <div className="network-node node-small three"><Wrench size={18} /><span>ACCESS</span></div>
                </div>
                <div className="visual-metrics"><div><strong>99.9%</strong><span>Disponibilidade</span></div><div><strong>24/7</strong><span>Monitoramento</span></div></div>
              </div>
              <div className="floating-badge"><Sparkles size={17} /><span><strong>Conexão inteligente</strong><small>Feita para você</small></span></div>
            </div>
          </div>
          <div className="container scroll-cue"><span>Role para explorar</span><div className="scroll-line" /></div>
        </section>

        <section id="servicos" className="section services-section">
          <div className="container">
            <div className="section-heading"><div><span className="section-kicker">O que eu faço</span><h2>Soluções que fazem<br /><em>sua operação fluir.</em></h2></div><p>Do primeiro cabo à infraestrutura completa: tecnologia bem configurada para você trabalhar com tranquilidade.</p></div>
            <div className="service-grid">
              {services.map(({ icon: Icon, number, title, description, items }) => (
                <article className="service-card" key={title}>
                  <div className="card-head"><div className="icon-box"><Icon size={21} /></div><span>{number}</span></div>
                  <h3>{title}</h3><p>{description}</p>
                  <ul>{items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
                  <a href={whatsappLink(title)} target="_blank" rel="noreferrer" className="card-link">Quero este serviço <ArrowRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section process-section">
          <div className="container process-layout">
            <div className="process-intro"><span className="section-kicker">Do início ao fim</span><h2>Clareza em cada<br /><em>etapa do projeto.</em></h2><p>Você não precisa entender de termos técnicos. Eu traduzo a tecnologia para decisões simples e resultados que você percebe.</p><a className="button button-dark" href={whatsappLink()} target="_blank" rel="noreferrer">Vamos conversar <MessageCircle size={18} /></a></div>
            <div className="steps-list">{steps.map(([number, title, description]) => <div className="step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight className="step-arrow" size={18} /></div>)}</div>
          </div>
        </section>

        <section id="precos" className="section pricing-section">
          <div className="container">
            <div className="section-heading pricing-heading"><div><span className="section-kicker">Investimento</span><h2>Preços claros.<br /><em>Sem surpresas.</em></h2></div><p>Valores de referência para você planejar seu próximo passo. Cada projeto recebe uma avaliação personalizada.</p></div>
            <div className="pricing-table">{pricing.map(([name, price]) => <div className="price-row" key={name}><span>{name}</span><strong>{price}</strong><a href={whatsappLink(name)} target="_blank" rel="noreferrer" aria-label={`Solicitar orçamento para ${name}`}><ArrowRight size={17} /></a></div>)}</div>
            <div className="pricing-note"><Clock3 size={18} /><span>Metro adicional de cabeamento: <strong>R$ 10 a 15 por metro</strong> após os 10 metros inclusos.</span></div>
          </div>
        </section>

        <section className="cta-section"><div className="container cta-inner"><div><span className="section-kicker light">Pronto para melhorar?</span><h2>Vamos colocar sua<br /><em>infraestrutura em ordem.</em></h2></div><a className="button button-light" href={whatsappLink()} target="_blank" rel="noreferrer">Falar com Antônio <ArrowRight size={18} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><img src="/images/image.png" alt="Actech&CIA" /><p>Infraestrutura de redes e informática<br />com confiança e precisão.</p></div><div className="footer-contact"><span>Atendimento direto</span><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Chamar no WhatsApp</a></div><div className="footer-copy">© {new Date().getFullYear()} Antônio Carlos</div></div></footer>
    </div>
  );
}

export default App;
