interface LegalSection {
  heading: string
  body: string
}

const legalPage = (title: string, intro: string, sections: LegalSection[], lastUpdated: string) => ({
  title,
  content: { intro, sections, lastUpdated },
})

export const translations = {
  en: {
    common: {
      language: 'Language',
      english: 'English',
      portuguese: 'Português',
      spanish: 'Español',
      contactEmail: 'gabrieln.dev3@gmail.com',
      phone: '+351 928 460 134',
    },
    navbar: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
    },
    home: {
      hero: {
        titleGames: 'games.build()',
        titleOutsourcing: 'systems.deliver()',
        description: 'MentorHub ships original games under gaming.mentor-hub.space and takes full ownership of outsourced software projects — architecture through maintenance.',
        cta1: 'Explore Our Games',
        cta2: 'Discuss a Project',
      },
      stats: [
        { label: 'games_shipped', value: '2' },
        { label: 'projects_delivered', value: '5' },
        { label: 'years_operating', value: '5+' },
      ],
      features: {
        title: 'Two disciplines, one studio',
        subtitle: 'What we bring to each line of business.',
        items: [
          {
            title: 'Original Game Design',
            description: 'We design, build, and publish our own titles — no work-for-hire, full creative ownership.',
            icon: '🎮',
          },
          {
            title: 'Full-Stack Delivery',
            description: 'Outsourced projects are owned end to end — architecture, build, and long-term maintenance.',
            icon: '💻',
          },
          {
            title: 'Live Operations',
            description: 'Games and client systems both get post-launch support — updates, monitoring, and fixes.',
            icon: '📡',
          },
          {
            title: 'Direct Communication',
            description: 'One team, no account-manager layers — you talk directly to the people building your project.',
            icon: '💬',
          },
        ],
      },
      cta: {
        title: 'Building a game or shipping a system?',
        subtitle: 'Either way, we can help — reach out and let\'s talk scope.',
        button: 'See Our Games',
        secondaryButton: 'View Services',
      },
    },
    about: {
      hero: {
        title: 'About',
        titleHighlight: 'MentorHub',
        description: 'A small studio with two disciplines under one roof — games we make, and software we deliver.',
      },
      disciplines: {
        items: [
          {
            title: 'Original Games',
            description: 'We design, build, and publish our own titles at gaming.mentor-hub.space. No client work — every game is ours end to end, from first prototype to launch and beyond.',
          },
          {
            title: 'Outsourced Delivery',
            description: 'When a client hands us a project, we own it fully — architecture, implementation, and ongoing maintenance. Not staff augmentation: full delivery, start to finish.',
          },
        ],
      },
      timeline: {
        title: 'Our Journey',
        events: [
          { year: '2019', event: 'Started building software for outside clients' },
          { year: '2021', event: 'Shipped our first original game prototype' },
          { year: '2023', event: 'Delivered our first full outsourced platform build' },
          { year: '2025', event: 'Published multiple titles under gaming.mentor-hub.space' },
          { year: '2026-present', event: 'Operating as a two-line studio: games and outsourcing' },
        ],
      },
      expertise: {
        title: 'How We Work',
        items: ['Game Design & Production', 'Systems Architecture', 'Full-Stack Engineering', 'Live Operations', 'Direct Client Communication'],
      },
    },
    services: {
      hero: {
        title: 'What We Build',
        description: 'Two lines of business, one studio: original games we publish ourselves, and outsourced software projects we own end to end.',
      },
      platforms: {
        games: {
          name: 'MentorHub Games',
          subtitle: 'Original titles, self-published',
          description: 'No work-for-hire — everything at gaming.mentor-hub.space is designed, built, and launched by us.',
          cta: 'Explore Our Games',
        },
        outsourcing: {
          name: 'MentorHub Outsourcing',
          subtitle: 'Full-project delivery',
          description: 'Hand us the whole system. We own architecture, build, and maintenance — not staff augmentation.',
          cta: 'Discuss a Project',
        },
        blog: {
          name: 'SynDevs',
          subtitle: 'A terminal-styled tech blog',
          description: 'Dev posts, tutorials, and behind-the-scenes writeups from the MentorHub team.',
          cta: 'Read the Blog',
        },
      },
    },
    refundPolicy: {
      title: 'Refund Policy',
      content: {
        intro: 'We want you to be confident when working with us. For outsourced project engagements, refunds and cancellations are handled according to the following terms:',
        conditions: [
          'Deposit refund requests must be made within 7 days of the deposit date, before work has begun.',
          'Once development work has started on a milestone, payment for that milestone is non-refundable.',
          'If we cancel an engagement before a milestone is delivered, a full refund for that milestone will be offered.',
          'Approved refunds are processed to the original payment method within 5-10 business days.',
        ],
        contact: 'To request a refund, please contact us at',
      },
    },
    contact: {
      hero: {
        title: 'Get in',
        titleHighlight: 'Touch',
        description: 'Want to talk about a game, or an outsourced project? Reach out and let\'s discuss scope.',
      },
      info: {
        title: 'Contact Information',
        subtitle: 'Feel free to reach out through any of these channels.',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Available for remote engagements worldwide',
        responseTime: 'Response Time',
        responseTimeValue: 'Usually within 24 hours',
        social: 'Connect on Social',
      },
      form: {
        title: 'Send us a message',
        inquiryType: {
          label: 'What\'s this about?',
          outsourcing: 'Outsourcing Project',
          games: 'Games & Partnerships',
        },
        labels: {
          fullName: 'Full Name',
          email: 'Email Address',
          phone: 'Phone (Optional)',
          budget: 'Estimated Budget',
          timeline: 'Timeline',
          subject: 'Subject',
          message: 'Message',
        },
        placeholders: {
          fullName: 'John Doe',
          email: 'john@example.com',
          phone: '+1 (234) 567-890',
          budget: 'Select a range',
          timeline: 'Select a timeline',
          subjectOutsourcing: 'I\'d like to discuss an outsourced project',
          subjectGames: 'Question about a game, or a partnership inquiry',
          messageOutsourcing: 'Tell us about your project — scope, goals, and rough timeline...',
          messageGames: 'Tell us which game you\'re asking about, or what kind of partnership you have in mind...',
        },
        budgetOptions: ['Not sure yet', 'Under $10k', '$10k – $50k', '$50k+'],
        timelineOptions: ['ASAP', '1–3 months', '3–6 months', 'Flexible'],
        button: 'Send Message',
        sending: 'Sending...',
        errors: {
          nameRequired: 'Name is required',
          emailRequired: 'Email is required',
          emailInvalid: 'Please enter a valid email',
          subjectRequired: 'Subject is required',
          messageRequired: 'Message is required',
        },
        success: 'Message sent successfully! We\'ll get back to you soon.',
        error: 'Error sending message',
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How does an outsourcing engagement start?',
            answer: 'We start with a discovery call to scope the project, then move to a proposal covering timeline and delivery milestones.',
          },
          {
            question: 'What is your response time?',
            answer: 'We typically respond to inquiries within 24 hours during business days.',
          },
          {
            question: 'Do you work with clients in different time zones?',
            answer: 'Yes — we work with clients and partners across time zones and adapt scheduling to fit.',
          },
          {
            question: 'Can I get in touch about your games instead of outsourcing?',
            answer: 'Of course — use the form for press, partnership, or player inquiries about any title at gaming.mentor-hub.space.',
          },
        ],
      },
    },
    chatbot: {
      openLabel: 'Open chat',
      closeLabel: 'Close chat',
      title: 'MentorHub Assistant',
      subtitle: "We're happy to help",
      greeting: "Hi! 👋 Pick a question below and I'll answer right away.",
      quickRepliesLabel: 'Choose a question',
      restart: 'Start over',
      contactRedirect: "Taking you to our contact page...",
      goToContact: 'Go to Contact Page',
      questions: [
        {
          question: 'What does MentorHub do?',
          answer: 'We\'re two lines of business under one studio: we publish our own original games, and we take on full outsourced software projects — architecture through maintenance.',
        },
        {
          question: 'Can I see your games?',
          answer: 'All our titles live at gaming.mentor-hub.space — original games we design, build, and launch ourselves.',
        },
        {
          question: 'How does outsourcing work?',
          answer: 'You hand us the whole project. We own it end to end — not staff augmentation, full delivery.',
        },
        {
          question: 'Do you work with teams in different time zones?',
          answer: 'Yes — we work with clients and partners across time zones and adapt scheduling to fit.',
        },
        {
          question: 'I want to get in touch',
          answer: "Great! Let's connect.",
          action: 'contact',
        },
      ],
    },
    footer: {
      brand: 'MentorHub',
      tagline: 'Games we make. Software we deliver.',
      quickLinks: {
        title: 'Quick Links',
        home: 'Home',
        about: 'About',
        services: 'Services',
        contact: 'Contact',
      },
      platforms: {
        title: 'Platforms',
        games: 'Games',
        outsourcing: 'Outsourcing',
        blog: 'Blog',
      },
      legal: {
        title: 'Legal',
        copyright: '© {year} MentorHub. All rights reserved.',
        privacy: 'Privacy Policy',
        refundPolicy: 'Refund Policy',
        terms: 'Terms of Service',
        sitemap: 'Sitemap',
      },
    },
    privacyPolicy: legalPage(
      'Privacy Policy',
      'At MentorHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.',
      [
        {
          heading: 'Information We Collect',
          body: 'We collect information you provide directly to us, such as your name, email address, and payment information when you schedule a service.',
        },
        {
          heading: 'How We Use Your Information',
          body: 'We use your information to deliver our games and outsourced services, process payments, and communicate with you about your projects.',
        },
        {
          heading: 'Data Protection',
          body: 'We implement rigorous security measures to protect your data. We treat client confidentiality with the utmost priority.',
        },
      ],
      'Last Updated: February 2026',
    ),
    termsOfService: legalPage(
      'Terms of Service',
      'By accessing or using our services, you agree to be bound by these Terms of Service.',
      [
        {
          heading: 'Services',
          body: 'We provide game publishing and outsourced software development services. While we strive to deliver quality work, results for outsourced projects depend on the scope and requirements agreed with each client.',
        },
        {
          heading: 'Confidentiality',
          body: 'We agree to keep all findings confidential. You agree to provide necessary access for us to perform the agreed-upon services.',
        },
        {
          heading: 'Liability',
          body: 'MentorHub is not liable for any damages arising from the use of our services, except in cases of gross negligence.',
        },
      ],
      'Last Updated: February 2026',
    ),
  },
  pt: {
    common: {
      language: 'Idioma',
      english: 'English',
      portuguese: 'Português',
      spanish: 'Español',
      contactEmail: 'gabrieln.dev3@gmail.com',
      phone: '+351 928 460 134',
    },
    navbar: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      contact: 'Contato',
    },

    home: {
      hero: {
        titleGames: 'games.build()',
        titleOutsourcing: 'systems.deliver()',
        description: 'A MentorHub lança jogos originais em gaming.mentor-hub.space e assume a entrega completa de projetos de software terceirizados — da arquitetura à manutenção.',
        cta1: 'Explorar Nossos Jogos',
        cta2: 'Discutir um Projeto',
      },
      stats: [
        { label: 'jogos_lançados', value: '2' },
        { label: 'projetos_entregues', value: '5' },
        { label: 'anos_de_atuação', value: '5+' },
      ],
      features: {
        title: 'Duas disciplinas, um estúdio',
        subtitle: 'O que entregamos em cada linha de negócio.',
        items: [
          {
            title: 'Design de Jogos Originais',
            description: 'Projetamos, construímos e publicamos nossos próprios jogos — sem trabalho por encomenda, propriedade criativa total.',
            icon: '🎮',
          },
          {
            title: 'Entrega Full-Stack',
            description: 'Projetos terceirizados são conduzidos do início ao fim — arquitetura, construção e manutenção contínua.',
            icon: '💻',
          },
          {
            title: 'Operação Contínua',
            description: 'Jogos e sistemas de clientes recebem suporte pós-lançamento — atualizações, monitoramento e correções.',
            icon: '📡',
          },
          {
            title: 'Comunicação Direta',
            description: 'Um único time, sem camadas de gerentes de conta — você fala direto com quem constrói seu projeto.',
            icon: '💬',
          },
        ],
      },
      cta: {
        title: 'Construindo um jogo ou lançando um sistema?',
        subtitle: 'De qualquer forma, podemos ajudar — entre em contato e vamos falar sobre o escopo.',
        button: 'Ver Nossos Jogos',
        secondaryButton: 'Ver Serviços',
      },
    },
    about: {
      hero: {
        title: 'Sobre a',
        titleHighlight: 'MentorHub',
        description: 'Um estúdio pequeno com duas disciplinas sob o mesmo teto — jogos que criamos e software que entregamos.',
      },
      disciplines: {
        items: [
          {
            title: 'Jogos Originais',
            description: 'Projetamos, construímos e publicamos nossos próprios títulos em gaming.mentor-hub.space. Sem trabalho para clientes — cada jogo é nosso do início ao fim.',
          },
          {
            title: 'Entrega Terceirizada',
            description: 'Quando um cliente nos entrega um projeto, assumimos totalmente — arquitetura, implementação e manutenção contínua. Não é aumento de equipe: é entrega completa, do início ao fim.',
          },
        ],
      },
      timeline: {
        title: 'Nossa Jornada',
        events: [
          { year: '2019', event: 'Começamos a construir software para clientes externos' },
          { year: '2021', event: 'Lançamos nosso primeiro protótipo de jogo original' },
          { year: '2023', event: 'Entregamos nossa primeira plataforma terceirizada completa' },
          { year: '2025', event: 'Publicamos vários títulos em gaming.mentor-hub.space' },
          { year: '2026-presente', event: 'Operando como um estúdio de duas linhas: jogos e outsourcing' },
        ],
      },
      expertise: {
        title: 'Como Trabalhamos',
        items: ['Design e Produção de Jogos', 'Arquitetura de Sistemas', 'Engenharia Full-Stack', 'Operação Contínua', 'Comunicação Direta com Clientes'],
      },
    },
    services: {
      hero: {
        title: 'O Que Construímos',
        description: 'Duas linhas de negócio, um estúdio: jogos originais que publicamos nós mesmos, e projetos de software terceirizados que conduzimos do início ao fim.'
      },
      platforms: {
        games: {
          name: 'MentorHub Games',
          subtitle: 'Títulos originais, autopublicados',
          description: 'Sem trabalho por encomenda — tudo em gaming.mentor-hub.space é projetado, construído e lançado por nós.',
          cta: 'Explorar Nossos Jogos',
        },
        outsourcing: {
          name: 'MentorHub Outsourcing',
          subtitle: 'Entrega completa de projetos',
          description: 'Entregue o sistema inteiro a nós. Cuidamos da arquitetura, construção e manutenção — não é aumento de equipe.',
          cta: 'Discutir um Projeto',
        },
        blog: {
          name: 'SynDevs',
          subtitle: 'Um blog de tecnologia estilo terminal',
          description: 'Posts, tutoriais e bastidores escritos pela equipe do MentorHub.',
          cta: 'Ler o Blog',
        },
      },
    },
    refundPolicy: {
      title: 'Política de Reembolso',
      content: {
        intro: 'Queremos que você tenha confiança ao trabalhar conosco. Para projetos terceirizados, reembolsos e cancelamentos seguem os seguintes termos:',
        conditions: [
          'Pedidos de reembolso de depósito devem ser feitos dentro de 7 dias da data do depósito, antes do início do trabalho.',
          'Uma vez iniciado o trabalho em um marco, o pagamento referente a esse marco não é reembolsável.',
          'Se cancelarmos um projeto antes da entrega de um marco, será oferecido reembolso total referente a esse marco.',
          'Reembolsos aprovados serão processados para o método de pagamento original dentro de 5 a 10 dias úteis.'
        ],
        contact: 'Para solicitar um reembolso, entre em contato conosco em'
      }
    },
    contact: {
      hero: {
        title: 'Entre em',
        titleHighlight: 'Contato',
        description: 'Quer falar sobre um jogo ou um projeto terceirizado? Entre em contato e vamos discutir o escopo.'
      },
      info: {
        title: 'Informações de Contato',
        subtitle: 'Sinta-se livre para entrar em contato através de qualquer um desses canais.',
        email: 'Email',
        phone: 'Telefone',
        location: 'Localização',
        locationValue: 'Disponível para projetos remotos em todo o mundo',
        responseTime: 'Tempo de Resposta',
        responseTimeValue: 'Geralmente dentro de 24 horas',
        social: 'Conecte-se nas Redes Sociais'
      },
      form: {
        title: 'Envie uma mensagem',
        inquiryType: {
          label: 'Sobre o que é isso?',
          outsourcing: 'Projeto Terceirizado',
          games: 'Jogos & Parcerias',
        },
        labels: {
          fullName: 'Nome Completo',
          email: 'Endereço de Email',
          phone: 'Telefone (Opcional)',
          budget: 'Orçamento Estimado',
          timeline: 'Prazo',
          subject: 'Assunto',
          message: 'Mensagem'
        },
        placeholders: {
          fullName: 'João Silva',
          email: 'joao@exemplo.com',
          phone: '+55 (11) 98765-4321',
          budget: 'Selecione uma faixa',
          timeline: 'Selecione um prazo',
          subjectOutsourcing: 'Gostaria de discutir um projeto terceirizado',
          subjectGames: 'Pergunta sobre um jogo, ou uma proposta de parceria',
          messageOutsourcing: 'Conte-nos sobre seu projeto — escopo, objetivos e prazo aproximado...',
          messageGames: 'Conte-nos sobre qual jogo você está falando, ou que tipo de parceria você tem em mente...'
        },
        budgetOptions: ['Ainda não sei', 'Abaixo de $10k', '$10k – $50k', '$50k+'],
        timelineOptions: ['O mais rápido possível', '1–3 meses', '3–6 meses', 'Flexível'],
        button: 'Enviar Mensagem',
        sending: 'Enviando...',
        errors: {
          nameRequired: 'O nome é obrigatório',
          emailRequired: 'O email é obrigatório',
          emailInvalid: 'Por favor, insira um email válido',
          subjectRequired: 'O assunto é obrigatório',
          messageRequired: 'A mensagem é obrigatória'
        },
        success: 'Mensagem enviada com sucesso! Retornaremos em breve.',
        error: 'Erro ao enviar mensagem'
      },
      faq: {
        title: 'Perguntas Frequentes',
        items: [
          {
            question: 'Como começa um projeto de outsourcing?',
            answer: 'Começamos com uma chamada de descoberta para definir o escopo do projeto, seguida de uma proposta com prazos e marcos de entrega.'
          },
          {
            question: 'Qual é seu tempo de resposta?',
            answer: 'Normalmente respondemos a consultas dentro de 24 horas durante os dias úteis.'
          },
          {
            question: 'Vocês trabalham com clientes em fusos horários diferentes?',
            answer: 'Sim — trabalhamos com clientes e parceiros em diferentes fusos horários e adaptamos os horários conforme necessário.'
          },
          {
            question: 'Posso entrar em contato sobre os jogos em vez de outsourcing?',
            answer: 'Claro — use o formulário para imprensa, parcerias ou dúvidas de jogadores sobre qualquer título em gaming.mentor-hub.space.'
          }
        ]
      }
    },
    chatbot: {
      openLabel: 'Abrir chat',
      closeLabel: 'Fechar chat',
      title: 'Assistente MentorHub',
      subtitle: 'Estamos aqui para ajudar',
      greeting: 'Olá! 👋 Escolha uma pergunta abaixo e eu respondo na hora.',
      quickRepliesLabel: 'Escolha uma pergunta',
      restart: 'Recomeçar',
      contactRedirect: 'Levando você para a página de contato...',
      goToContact: 'Ir para a Página de Contato',
      questions: [
        {
          question: 'O que a MentorHub faz?',
          answer: 'Somos duas linhas de negócio sob um mesmo estúdio: publicamos nossos próprios jogos e assumimos projetos de software terceirizados completos — da arquitetura à manutenção.',
        },
        {
          question: 'Posso ver seus jogos?',
          answer: 'Todos os nossos títulos estão em gaming.mentor-hub.space — jogos originais que projetamos, construímos e lançamos nós mesmos.',
        },
        {
          question: 'Como funciona o outsourcing?',
          answer: 'Você nos entrega o projeto inteiro. Cuidamos de tudo do início ao fim — não é aumento de equipe, é entrega completa.',
        },
        {
          question: 'Vocês trabalham com equipes em fusos horários diferentes?',
          answer: 'Sim — trabalhamos com clientes e parceiros em diferentes fusos horários e adaptamos os horários conforme necessário.',
        },
        {
          question: 'Quero entrar em contato',
          answer: 'Ótimo! Vamos nos conectar.',
          action: 'contact',
        },
      ],
    },
    footer: {
      brand: 'MentorHub',
      tagline: 'Jogos que criamos. Software que entregamos.',
      quickLinks: {
        title: 'Links Rápidos',
        home: 'Início',
        about: 'Sobre',
        services: 'Serviços',
        contact: 'Contato'
      },
      platforms: {
        title: 'Plataformas',
        games: 'Jogos',
        outsourcing: 'Outsourcing',
        blog: 'Blog'
      },
      legal: {
        title: 'Legal',
        copyright: '© {year} MentorHub. Todos os direitos reservados.',
        privacy: 'Política de Privacidade',
        refundPolicy: 'Política de Reembolso',
        terms: 'Termos de Serviço',
        sitemap: 'Mapa do Site'
      }
    },
    privacyPolicy: legalPage(
      'Política de Privacidade',
      'Na MentorHub, levamos sua privacidade a sério. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações pessoais.',
      [
        {
          heading: 'Informações que Coletamos',
          body: 'Coletamos informações que você nos fornece diretamente, como seu nome, endereço de email e informações de pagamento ao agendar um serviço.'
        },
        {
          heading: 'Como Usamos Suas Informações',
          body: 'Usamos suas informações para entregar nossos jogos e serviços terceirizados, processar pagamentos e nos comunicar com você sobre seus projetos.'
        },
        {
          heading: 'Proteção de Dados',
          body: 'Implementamos medidas de segurança rigorosas para proteger seus dados. Como empresa de software e jogos, tratamos a confidencialidade do cliente com a máxima prioridade.'
        }
      ],
      'Última Atualização: Fevereiro 2026',
    ),
    termsOfService: legalPage(
      'Termos de Serviço',
      'Ao acessar ou usar nossos serviços, você concorda em ficar vinculado a estes Termos de Serviço.',
      [
        {
          heading: 'Serviços',
          body: 'Fornecemos serviços de publicação de jogos e desenvolvimento de software terceirizado. Embora nos esforcemos para entregar um trabalho de qualidade, os resultados de projetos terceirizados dependem do escopo e dos requisitos acordados com cada cliente.'
        },
        {
          heading: 'Confidencialidade',
          body: 'Concordamos em manter todas as descobertas confidenciais. Você concorda em fornecer o acesso necessário para que realizemos os serviços acordados.'
        },
        {
          heading: 'Responsabilidade',
          body: 'A MentorHub não se responsabiliza por quaisquer danos decorrentes do uso de nossos serviços, exceto em casos de negligência grave.'
        }
      ],
      'Última Atualização: Fevereiro 2026',
    ),
  },
  es: {
    common: {
      language: 'Idioma',
      english: 'English',
      portuguese: 'Português',
      spanish: 'Español',
      contactEmail: 'gabrieln.dev3@gmail.com',
      phone: '+351 928 460 134'
    },
    navbar: {
      home: 'Inicio',
      about: 'Acerca',
      services: 'Servicios',
      contact: 'Contacto'
    },

    home: {
      hero: {
        titleGames: 'games.build()',
        titleOutsourcing: 'systems.deliver()',
        description: 'MentorHub lanza juegos originales en gaming.mentor-hub.space y asume la entrega completa de proyectos de software subcontratados — desde la arquitectura hasta el mantenimiento.',
        cta1: 'Explorar Nuestros Juegos',
        cta2: 'Discutir un Proyecto'
      },
      stats: [
        { label: 'juegos_lanzados', value: '2' },
        { label: 'proyectos_entregados', value: '5' },
        { label: 'años_operando', value: '5+' }
      ],
      features: {
        title: 'Dos disciplinas, un estudio',
        subtitle: 'Lo que aportamos a cada línea de negocio.',
        items: [
          {
            title: 'Diseño de Juegos Originales',
            description: 'Diseñamos, construimos y publicamos nuestros propios títulos — sin trabajo por encargo, propiedad creativa total.',
            icon: '🎮'
          },
          {
            title: 'Entrega Full-Stack',
            description: 'Los proyectos subcontratados se gestionan de principio a fin — arquitectura, construcción y mantenimiento continuo.',
            icon: '💻'
          },
          {
            title: 'Operación Continua',
            description: 'Juegos y sistemas de clientes reciben soporte post-lanzamiento — actualizaciones, monitoreo y correcciones.',
            icon: '📡'
          },
          {
            title: 'Comunicación Directa',
            description: 'Un solo equipo, sin capas de gerentes de cuenta — hablas directamente con quienes construyen tu proyecto.',
            icon: '💬'
          }
        ]
      },
      cta: {
        title: '¿Construyendo un juego o lanzando un sistema?',
        subtitle: 'En cualquier caso, podemos ayudar — contáctanos y hablemos del alcance.',
        button: 'Ver Nuestros Juegos',
        secondaryButton: 'Ver Servicios'
      }
    },
    about: {
      hero: {
        title: 'Sobre',
        titleHighlight: 'MentorHub',
        description: 'Un estudio pequeño con dos disciplinas bajo un mismo techo — juegos que creamos y software que entregamos.'
      },
      disciplines: {
        items: [
          {
            title: 'Juegos Originales',
            description: 'Diseñamos, construimos y publicamos nuestros propios títulos en gaming.mentor-hub.space. Sin trabajo para clientes — cada juego es nuestro de principio a fin.',
          },
          {
            title: 'Entrega Subcontratada',
            description: 'Cuando un cliente nos entrega un proyecto, lo asumimos por completo — arquitectura, implementación y mantenimiento continuo. No es aumento de personal: es entrega completa, de principio a fin.',
          },
        ],
      },
      timeline: {
        title: 'Nuestro Camino',
        events: [
          { year: '2019', event: 'Comenzamos a construir software para clientes externos' },
          { year: '2021', event: 'Lanzamos nuestro primer prototipo de juego original' },
          { year: '2023', event: 'Entregamos nuestra primera plataforma subcontratada completa' },
          { year: '2025', event: 'Publicamos varios títulos en gaming.mentor-hub.space' },
          { year: '2026-presente', event: 'Operando como un estudio de dos líneas: juegos y outsourcing' }
        ]
      },
      expertise: {
        title: 'Cómo Trabajamos',
        items: ['Diseño y Producción de Juegos', 'Arquitectura de Sistemas', 'Ingeniería Full-Stack', 'Operación Continua', 'Comunicación Directa con Clientes']
      }
    },
    services: {
      hero: {
        title: 'Lo Que Construimos',
        description: 'Dos líneas de negocio, un estudio: juegos originales que publicamos nosotros mismos, y proyectos de software subcontratados que gestionamos de principio a fin.'
      },
      platforms: {
        games: {
          name: 'MentorHub Games',
          subtitle: 'Títulos originales, autopublicados',
          description: 'Sin trabajo por encargo — todo en gaming.mentor-hub.space es diseñado, construido y lanzado por nosotros.',
          cta: 'Explorar Nuestros Juegos',
        },
        outsourcing: {
          name: 'MentorHub Outsourcing',
          subtitle: 'Entrega completa de proyectos',
          description: 'Entréganos el sistema completo. Nos encargamos de la arquitectura, construcción y mantenimiento — no es aumento de personal.',
          cta: 'Discutir un Proyecto',
        },
        blog: {
          name: 'SynDevs',
          subtitle: 'Un blog tecnológico con estilo terminal',
          description: 'Publicaciones, tutoriales y contenido detrás de escena del equipo de MentorHub.',
          cta: 'Leer el Blog',
        },
      },
    },
    refundPolicy: {
      title: 'Política de Reembolso',
      content: {
        intro: 'Queremos que tengas confianza al trabajar con nosotros. Para proyectos subcontratados, los reembolsos y cancelaciones siguen los siguientes términos:',
        conditions: [
          'Las solicitudes de reembolso de depósito deben realizarse dentro de los 7 días posteriores a la fecha del depósito, antes de comenzar el trabajo.',
          'Una vez iniciado el trabajo en un hito, el pago correspondiente a ese hito no es reembolsable.',
          'Si cancelamos un proyecto antes de la entrega de un hito, se ofrecerá un reembolso completo correspondiente a ese hito.',
          'Los reembolsos aprobados se procesarán al método de pago original dentro de 5 a 10 días hábiles.'
        ],
        contact: 'Para solicitar un reembolso, contáctenos en'
      }
    },
    contact: {
      hero: {
        title: 'Ponte en',
        titleHighlight: 'Contacto',
        description: '¿Quieres hablar sobre un juego o un proyecto subcontratado? Contáctanos y discutamos el alcance.'
      },
      info: {
        title: 'Información de Contacto',
        subtitle: 'Siéntete libre de contactarnos a través de cualquiera de estos canales.',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        location: 'Ubicación',
        locationValue: 'Disponible para proyectos remotos en todo el mundo',
        responseTime: 'Tiempo de Respuesta',
        responseTimeValue: 'Generalmente dentro de 24 horas',
        social: 'Conectar en Redes Sociales'
      },
      form: {
        title: 'Envíame un mensaje',
        inquiryType: {
          label: '¿De qué se trata esto?',
          outsourcing: 'Proyecto Subcontratado',
          games: 'Juegos y Alianzas',
        },
        labels: {
          fullName: 'Nombre Completo',
          email: 'Dirección de Correo',
          phone: 'Teléfono (Opcional)',
          budget: 'Presupuesto Estimado',
          timeline: 'Plazo',
          subject: 'Asunto',
          message: 'Mensaje'
        },
        placeholders: {
          fullName: 'Juan Pérez',
          email: 'juan@ejemplo.com',
          phone: '+34 (123) 456-7890',
          budget: 'Selecciona un rango',
          timeline: 'Selecciona un plazo',
          subjectOutsourcing: 'Me gustaría discutir un proyecto subcontratado',
          subjectGames: 'Pregunta sobre un juego, o una propuesta de alianza',
          messageOutsourcing: 'Cuéntanos sobre tu proyecto — alcance, objetivos y plazo aproximado...',
          messageGames: 'Cuéntanos sobre cuál juego preguntas, o qué tipo de alianza tienes en mente...'
        },
        budgetOptions: ['Aún no lo sé', 'Menos de $10k', '$10k – $50k', '$50k+'],
        timelineOptions: ['Lo antes posible', '1–3 meses', '3–6 meses', 'Flexible'],
        button: 'Enviar Mensaje',
        sending: 'Enviando...',
        errors: {
          nameRequired: 'El nombre es obligatorio',
          emailRequired: 'El correo es obligatorio',
          emailInvalid: 'Por favor, introduce un correo válido',
          subjectRequired: 'El asunto es obligatorio',
          messageRequired: 'El mensaje es obligatorio'
        },
        success: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
        error: 'Error al enviar el mensaje'
      },
      faq: {
        title: 'Preguntas Frecuentes',
        items: [
          {
            question: '¿Cómo empieza un proyecto de outsourcing?',
            answer: 'Empezamos con una llamada de descubrimiento para definir el alcance del proyecto, seguida de una propuesta con plazos y entregables.'
          },
          {
            question: '¿Cuál es su tiempo de respuesta?',
            answer: 'Normalmente respondemos a consultas dentro de 24 horas durante los días laborables.'
          },
          {
            question: '¿Trabajan con clientes en diferentes zonas horarias?',
            answer: 'Sí — trabajamos con clientes y socios en diferentes zonas horarias y adaptamos los horarios según sea necesario.'
          },
          {
            question: '¿Puedo contactar sobre los juegos en lugar de outsourcing?',
            answer: 'Claro — usa el formulario para prensa, alianzas o consultas de jugadores sobre cualquier título en gaming.mentor-hub.space.'
          }
        ]
      }
    },
    chatbot: {
      openLabel: 'Abrir chat',
      closeLabel: 'Cerrar chat',
      title: 'Asistente MentorHub',
      subtitle: 'Estamos aquí para ayudar',
      greeting: '¡Hola! 👋 Elige una pregunta abajo y te respondo enseguida.',
      quickRepliesLabel: 'Elige una pregunta',
      restart: 'Comenzar de nuevo',
      contactRedirect: 'Te llevamos a la página de contacto...',
      goToContact: 'Ir a la Página de Contacto',
      questions: [
        {
          question: '¿Qué hace MentorHub?',
          answer: 'Somos dos líneas de negocio bajo un mismo estudio: publicamos nuestros propios juegos y asumimos proyectos de software subcontratados completos — desde la arquitectura hasta el mantenimiento.',
        },
        {
          question: '¿Puedo ver sus juegos?',
          answer: 'Todos nuestros títulos están en gaming.mentor-hub.space — juegos originales que diseñamos, construimos y lanzamos nosotros mismos.',
        },
        {
          question: '¿Cómo funciona el outsourcing?',
          answer: 'Nos entregas el proyecto completo. Nos encargamos de todo de principio a fin — no es aumento de personal, es entrega completa.',
        },
        {
          question: '¿Trabajan con equipos en diferentes zonas horarias?',
          answer: 'Sí — trabajamos con clientes y socios en diferentes zonas horarias y adaptamos los horarios según sea necesario.',
        },
        {
          question: 'Quiero ponerme en contacto',
          answer: '¡Genial! Vamos a conectar.',
          action: 'contact',
        },
      ],
    },
    footer: {
      brand: 'MentorHub',
      tagline: 'Juegos que creamos. Software que entregamos.',
      quickLinks: {
        title: 'Enlaces Rápidos',
        home: 'Inicio',
        about: 'Acerca de',
        services: 'Servicios',
        contact: 'Contacto'
      },
      platforms: {
        title: 'Plataformas',
        games: 'Juegos',
        outsourcing: 'Outsourcing',
        blog: 'Blog'
      },
      legal: {
        title: 'Legal',
        copyright: '© {year} MentorHub. Todos los derechos reservados.',
        privacy: 'Política de Privacidad',
        refundPolicy: 'Política de Reembolso',
        terms: 'Términos de Servicio',
        sitemap: 'Mapa del Sitio'
      }
    },
    privacyPolicy: legalPage(
      'Política de Privacida',
      'En MentorHub, tomamos su privacidad muy en serio. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos su información personal.',
      [
        {
          heading: 'Información que Recopilamos',
          body: 'Recopilamos información que usted nos proporciona directamente, como su nombre, dirección de correo electrónico e información de pago al programar un servicio.'
        },
        {
          heading: 'Cómo Usamos Su Información',
          body: 'Utilizamos su información para entregar nuestros juegos y servicios subcontratados, procesar pagos y comunicarnos con usted sobre sus proyectos.'
        },
        {
          heading: 'Protección de Datos',
          body: 'Implementamos rigurosas medidas de seguridad para proteger sus datos. Como empresa de software y juegos, tratamos la confidencialidad del cliente con la máxima prioridad.'
        }
      ],
      'Última Actualización: Febrero 2026',
    ),
    termsOfService: legalPage(
      'Términos de Servicio',
      'Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos Términos de Servicio.',
      [
        {
          heading: 'Servicios',
          body: 'Proporcionamos servicios de publicación de juegos y desarrollo de software subcontratado. Aunque nos esforzamos por entregar un trabajo de calidad, los resultados de proyectos subcontratados dependen del alcance y los requisitos acordados con cada cliente.'
        },
        {
          heading: 'Confidencialidad',
          body: 'Acordamos mantener todos los hallazgos confidenciales. Usted acepta proporcionar el acceso necesario para que realicemos los servicios acordados.'
        },
        {
          heading: 'Responsabilidad',
          body: 'MentorHub no es responsable de ningún daño derivado del uso de nuestros servicios, excepto en casos de negligencia grave.'
        }
      ],
      'Última Atualização: Febrero 2026',
    ),
  }
}
