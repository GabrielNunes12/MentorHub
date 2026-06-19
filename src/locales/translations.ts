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
      testimonials: 'Testimonials',
      contact: 'Contact',
    },

    successPage: {
      title: 'Payment Successful!',
      loading: 'Verifying your payment...',
      confirmationPrefix: 'Your mentorship session for',
      confirmationSuffix: 'has been confirmed.',
      emailSent: 'We have sent a calendar invitation to your email.',
      returnHome: 'Return Home',
      errorTitle: 'Something went wrong',
      errorMessagePrefix: "We couldn't verify your payment details using session:",
      contactSupport: 'Contact Support'
    },
    home: {
      hero: {
        title: 'Secure Your',
        titleHighlight: 'Digital Assets',
        subtitle: 'Today',
        description: 'Comprehensive vulnerability assessments and code auditing. Identify weaknesses before attackers do.',
        cta1: 'Start Security Audit',
        cta2: 'Explore Services',
        trustIndicator: 'systems secured',
      },
      stats: [
        { label: 'Vulnerabilities Found', value: '500+' },
        { label: 'Systems Secured', value: '50+' },
        { label: 'Years Experience', value: '5+' },
        { label: 'Critical Bugs Fixed', value: '100+' },
      ],
      features: {
        title: 'Why Choose Our Security Services?',
        subtitle: 'Protect your business with proactive security measures and expert analysis.',
        items: [
          {
            title: 'Vulnerability Assessment',
            description: 'Systematic review of security weaknesses in an information system.',
            icon: '🛡️',
          },
          {
            title: 'Code Auditing',
            description: 'Deep dive into your codebase to find logic flaws and security holes.',
            icon: '🔍',
          },
          {
            title: 'Breach Detection',
            description: 'Identify signs of compromise and secure your infrastructure.',
            icon: '🚨',
          },
          {
            title: 'Security Consultation',
            description: 'Expert advice on securing your architecture and development pipeline.',
            icon: '🤝',
          },
        ],
      },
      cta: {
        title: 'Ready to Secure Your System?',
        subtitle: 'Join over 50 companies that have secured their assets with our help.',
        button: 'Schedule Your Security Audit',
      },
    },
    about: {
      hero: {
        title: 'About',
        titleHighlight: 'Us',
        description: 'Passionate security researchers dedicated to making the web safer.',
      },
      profile: {
        name: 'We are Security Experts',
        bio1: 'With years of experience in cybersecurity and ethical hacking, we specialize in finding vulnerabilities before malicious actors do.',
        bio2: 'Our mission is to help businesses secure their data and infrastructure through rigorous testing and analysis.',
        bio3: 'We believe in a proactive approach to security, identifying weak points and providing actionable remediation steps.',
      },
      timeline: {
        title: 'Our Journey',
        events: [
          { year: '2019', event: 'Started in tech field' },
          { year: '2022', event: 'Found a minor bug on Tinder' },
          { year: '2023', event: 'Led a squad in technology field in a Telecom sector' },
          { year: '2025', event: 'Worked in a major bank in Brazil' },
          { year: '2026-present', event: 'Work as full-time independent security consulting and in Portugal' },
        ],
      },
      expertise: {
        title: 'Areas of Expertise',
        items: ['Security Architecture', 'Code Review', 'Vulnerability Assessment'],
      },
    },
    services: {
      hero: {
        title: 'Our Services',
        titleHighlight: 'Services',
        description: 'Choose the perfect security package to protect your assets.',
      },
      regionIndicator: {
        currency: 'Currency',
        localPricing: 'Locally adjusted pricing for',
        changeRegion: 'Change region:',
        br: '🇧🇷 Prices in Brazilian Real with affordable pricing',
        eu: '🇪🇺 Prices in Euro (Eurozone)',
        uk: '🇬🇧 Prices in British Pound',
        us: '🇺🇸 Prices in US Dollar',
      },

      cards: [
        {
          name: 'Security Audit',
          duration: 'Per Session',
          description: 'Comprehensive analysis of your system architecture and code.',
          features: [
            'Architecture Review',
            'Code Analysis',
            'Vulnerability Scanning',
            'Report & Recommendations',
          ],
          popular: true,
        },
        {
          name: 'Code Auditing',
          duration: 'Per Session',
          description: 'Deep dive into your codebase to find logic flaws and security holes.',
          features: [
            'Static Code Analysis',
            'Logic Flaw Detection',
            'Dependency Auditing',
            'Best Practices Review',
          ],
        },
      ],
      comparison: {
        title: 'Service Comparison',
        features: 'Features',
        careerCoaching: 'Vulnerability Scan',
        resumeReview: 'Code Review',
        interviewPrep: 'Exploitation',
        monthlyRetainer: 'Detailed Report',
        items: [],
      },
      buttons: {
        scheduleNow: 'Schedule Now',
      },
      cta: {
        title: 'Concerned about security? Schedule a consultation.',
        subtitle: 'Let\'s identify your risks and secure your infrastructure.',
        button: 'Get Free Security Consultation',
      },
      booking: {
        selectDate: 'Select Date',
        selectTime: 'Select Time',
        confirmBooking: 'Confirm Booking',
        service: 'Service',
        date: 'Date',
        time: 'Time',
        total: 'Total',
        confirmPay: 'Confirm & Pay',
        back: 'Back',
      },
      mostPopular: '⭐ MOST POPULAR',
    },
    mentorhubtech: {
      studios: {
        title: 'MentorHubTech Studios',
        subtitle: 'Game dev: studio and teams',
        description: 'Specialized game development, production studio and team hiring services.',
        back: 'Back to home',
      },
      it: {
        title: 'MentorHubTech IT',
        subtitle: 'Outsourcing and IT solutions',
        description: 'Remote teams, on-demand projects and specialized technical support.',
        back: 'Back to home',
      },
      section: {
        title: 'MentorHubTech — Our Solutions',
        subtitle: 'We are a hub of specialized services. Choose the unit that fits your needs.'
      }
    },
    
    refundPolicy: {
      title: 'Refund Policy',
      content: {
        intro: 'We want you to be confident in our findings. If you are not satisfied with the report provided, you may request a refund according to the following terms:',
        conditions: [
          'Refund requests must be made within 7 days of the session date.',
          'Cancellations made less than 24 hours before a scheduled session are not eligible for a refund.',
          'If the mentor cancels a session, a full refund or rescheduling will be offered.',
          'Refunds will be processed to the original payment method within 5-10 business days.',
        ],
        contact: 'To request a refund, please contact us at',
      },
    },
    testimonials: {
      hero: {
        title: 'Client Stories',
        titleHighlight: 'Stories',
        description: 'Real feedback from companies we helped secure.',
      },
      cta: {
        title: 'Your Success Story Starts Here',
        button: 'Start Your Journey Today',
      },
      items: [
        {
          name: 'Tech Corp',
          title: 'CTO',
          company: ' at Major Tech',
          content: 'Found critical vulnerabilities that could have cost us millions. Professional and thorough.',
          rating: 5,
        },
        {
          name: 'FinBank',
          title: 'CISO',
          company: ' at FinBank',
          content: 'The penetration test was eye-opening. We are now much more secure thanks to their work.',
          rating: 5,
        },
      ],
    },
    contact: {
      hero: {
        title: 'Get in',
        titleHighlight: 'Touch',
        description: 'Ready to secure your business? Let\'s connect and discuss how we can help.',
      },
      info: {
        title: 'Contact Information',
        subtitle: 'Feel free to reach out to me through any of these channels.',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Available for virtual mentoring worldwide',
        responseTime: 'Response Time',
        responseTimeValue: 'Usually within 24 hours',
        social: 'Connect on Social',
      },
      form: {
        title: 'Send me a message',
        labels: {
          fullName: 'Full Name',
          email: 'Email Address',
          phone: 'Phone (Optional)',
          subject: 'Subject',
          message: 'Message',
        },
        placeholders: {
          fullName: 'John Doe',
          email: 'john@example.com',
          phone: '+1 (234) 567-890',
          subject: 'I\'m interested in a Security Audit',
          message: 'Tell me about your system and what you need tested...',
        },
        button: 'Send Message',
        sending: 'Sending...',
        errors: {
          nameRequired: 'Name is required',
          emailRequired: 'Email is required',
          emailInvalid: 'Please enter a valid email',
          subjectRequired: 'Subject is required',
          messageRequired: 'Message is required',
        },
        success: 'Message sent successfully! I\'ll get back to you soon.',
        error: 'Error sending message',
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How long does a security audit take?',
            answer: 'It depends on the scope, but typically 1-2 weeks for a thorough assessment.',
          },
          {
            question: 'What is your response time?',
            answer: 'I typically respond to inquiries within 24 hours during business days.',
          },
          {
            question: 'Do you offer flexible scheduling?',
            answer: 'Yes! I work with mentees across different time zones and offer flexible scheduling options.',
          },
          {
            question: 'What if you find no bugs?',
            answer: 'While rare, if we find nothing, you get peace of mind and a clean bill of health report.',
          },
        ],
      },
    },
    footer: {
      brand: 'MentorHubTech',
      tagline: 'Securing the digital world one audit at a time.',
      quickLinks: {
        title: 'Quick Links',
        home: 'Home',
        about: 'About',
        services: 'Services',
        testimonials: 'Testimonials',
      },
      services: {
        title: 'Services',
        careerCoaching: 'Security Audit',
        techMentoring: 'Code Auditing',
      },
      connect: {
        title: 'Connect',
        email: 'Email',
        linkedin: 'LinkedIn',
        twitter: 'Twitter',
        contactForm: 'Contact Form',
      },
      legal: {
        copyright: '© {year} MentorHubTech. All rights reserved.',
        privacy: 'Privacy Policy',
        refundPolicy: 'Refund Policy',
        terms: 'Terms of Service',
        sitemap: 'Sitemap',
      },
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      content: {
        intro: 'At MentorHubTech, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.',
        sections: [
          {
            heading: 'Information We Collect',
            body: 'We collect information you provide directly to us, such as your name, email address, and payment information when you schedule a service.',
          },
          {
            heading: 'How We Use Your Information',
            body: 'We use your information to provide security services, process payments, and communicate with you about your projects.',
          },
          {
            heading: 'Data Protection',
            body: 'We implement rigorous security measures to protect your data. As a security firm, we treat client confidentiality with the utmost priority.',
          },
        ],
        lastUpdated: 'Last Updated: February 2026',
      },
    },
    termsOfService: {
      title: 'Terms of Service',
      content: {
        intro: 'By accessing or using our services, you agree to be bound by these Terms of Service.',
        sections: [
          {
            heading: 'Services',
            body: 'We provide security auditing and vulnerability assessment services. While we strive to identify as many issues as possible, we cannot guarantee that a system is 100% secure.',
          },
          {
            heading: 'Confidentiality',
            body: 'We agree to keep all findings confidential. You agree to provide necessary access for us to perform the agreed-upon services.',
          },
          {
            heading: 'Liability',
            body: 'MentorHubTech is not liable for any damages arising from the use of our services, except in cases of gross negligence.',
          },
        ],
        lastUpdated: 'Last Updated: February 2026',
      },
    },
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
      testimonials: 'Depoimentos',
      contact: 'Contato',
    },

    home: {
      hero: {
        title: 'Proteja seus',
        titleHighlight: 'Ativos Digitais',
        subtitle: 'Hoje',
        description: 'Avaliações de vulnerabilidade e auditoria de código abrangentes. Identifique fraquezas antes que os atacantes o façam.',
        cta1: 'Iniciar Auditoria de Segurança',
        cta2: 'Explorar Serviços',
        trustIndicator: 'sistemas protegidos',
      },
      stats: [
        { label: 'Vulnerabilidades Encontradas', value: '500+' },
        { label: 'Sistemas Protegidos', value: '50+' },
        { label: 'Anos de Experiência', value: '5+' },
        { label: 'Bugs Críticos Corrigidos', value: '100+' },
      ],
      features: {
        title: 'Por que escolher Nossos Serviços de Segurança?',
        subtitle: 'Proteja seu negócio com medidas de segurança proativas e análise especializada.',
        items: [
          {
            title: 'Avaliação de Vulnerabilidade',
            description: 'Revisão sistemática de fraquezas de segurança em um sistema de informação.',
            icon: '🛡️',
          },
          {
            title: 'Auditoria de Código',
            description: 'Mergulho profundo em sua base de código para encontrar falhas lógicas e brechas de segurança.',
            icon: '🔍',
          },
          {
            title: 'Detecção de Violações',
            description: 'Identifique sinais de comprometimento e proteja sua infraestrutura.',
            icon: '🚨',
          },
          {
            title: 'Consultoria de Segurança',
            description: 'Conselhos de especialistas sobre como proteger sua arquitetura e pipeline de desenvolvimento.',
            icon: '🤝',
          },
        ],
      },
      cta: {
        title: 'Pronto para Proteger seu Sistema?',
        subtitle: 'Junte-se a mais de 50 empresas que protegeram seus ativos com nossa ajuda.',
        button: 'Agendar sua Auditoria de Segurança',
      },
    },
    about: {
      hero: {
        title: 'Sobre',
        titleHighlight: 'Nós',
        description: 'Pesquisadores de segurança apaixonados dedicados a tornar a web mais segura.',
      },
      profile: {
        name: 'Somos Especialistas em Segurança',
        bio1: 'Com anos de experiência em cibersegurança e hacking ético, nos especializamos em encontrar vulnerabilidades antes que atores maliciosos o façam.',
        bio2: 'Nossa missão é ajudar empresas a proteger seus dados e infraestrutura através de testes e análises rigorosos.',
        bio3: 'Acreditamos em uma abordagem proativa para a segurança, identificando pontos fracos e fornecendo passos de remediação acionáveis.',
      },
      timeline: {
        title: 'Nossa Jornada',
        events: [
          { year: '2019', event: 'Iniciei na área de tecnologia' },
          { year: '2022', event: 'Encontrei um bug menor no Tinder' },
          { year: '2023', event: 'Liderei uma squad na área de tecnologia no setor de Telecom' },
          { year: '2025', event: 'Trabalhei em um grande banco no Brasil' },
          { year: '2026-presente', event: 'Trabalho como consultor de segurança independente em tempo integral e em Portugal' },
        ],
      },
      expertise: {
        title: 'Áreas de Expertise',
        items: ['Arquitetura de Segurança', 'Revisão de Código', 'Avaliação de Vulnerabilidade'],
      },
    },
    services: {
      hero: {
        title: 'Nossos Serviços',
        titleHighlight: 'Serviços',
        description: 'Escolha o pacote de segurança perfeito para proteger seus ativos.',
      },
      regionIndicator: {
        currency: 'Moeda',
        localPricing: 'Preços ajustados localmente para',
        changeRegion: 'Mudar região:',
        br: '🇧🇷 Preços em Real Brasileiro com preços acessíveis',
        eu: '🇪🇺 Preços em Euro (Zona do Euro)',
        uk: '🇬🇧 Preços em Libra Esterlina',
        us: '🇺🇸 Preços em Dólar Americano',
      },

      cards: [
        {
          name: 'Auditoria de Segurança',
          duration: 'Por Sessão',
          description: 'Análise abrangente da arquitetura e código do seu sistema.',
          features: [
            'Revisão de Arquitetura',
            'Análise de Código',
            'Varredura de Vulnerabilidade',
            'Relatório e Recomendações',
          ],
          popular: true,
        },
        {
          name: 'Auditoria de Código',
          duration: 'Por Sessão',
          description: 'Mergulho profundo em sua base de código para encontrar falhas lógicas e brechas de segurança.',
          features: [
            'Análise Estática de Código',
            'Detecção de Falhas Lógicas',
            'Auditoria de Dependências',
            'Revisão de Melhores Práticas',
          ],
        },
      ],
      comparison: {
        title: 'Comparação de Serviços',
        features: 'Funcionalidades',
        careerCoaching: 'Coaching de Carreira',
        resumeReview: 'Otimização de Perfil',
        interviewPrep: 'Prep Entrevista Técnica',
        monthlyRetainer: 'Mentoria Rápida',
        items: [],
      },
      buttons: {
        scheduleNow: 'Agendar Agora',
      },
      cta: {
        title: 'Ainda com dúvidas? Agende uma consulta gratuita.',
        subtitle: 'Vamos discutir seus objetivos e encontrar o pacote de mentoria perfeito para você.',
        button: 'Obter Consulta Gratuita',
      },
      booking: {
        selectDate: 'Selecionar Data',
        selectTime: 'Selecionar Horário',
        confirmBooking: 'Confirmar Agendamento',
        service: 'Serviço',
        date: 'Data',
        time: 'Horário',
        total: 'Total',
        confirmPay: 'Confirmar e Pagar',
        back: 'Voltar',
      },
      mostPopular: '⭐ MAIS POPULAR',
    },
    mentorhubtech: {
      studios: {
        title: 'MentorHubTech Studios',
        subtitle: 'Game dev: estúdio e equipes',
        description: 'Mentoria especializada em desenvolvimento de jogos, produção e contratação de equipes.',
        back: 'Voltar para a home',
      },
      it: {
        title: 'MentorHubTech IT',
        subtitle: 'Outsourcing e soluções de TI',
        description: 'Equipes remotas, projetos sob demanda e suporte técnico especializado.',
        back: 'Voltar para a home',
      },
      section: {
        title: 'MentorHubTech — Nossas soluções',
        subtitle: 'Agora somos uma matriz que reúne serviços especializados. Escolha a unidade que melhor atende sua necessidade.'
      },
    },
    refundPolicy: {
      title: 'Política de Reembolso',
      content: {
        intro: 'Queremos que você esteja completamente satisfeito com sua experiência de mentoria. Se não estiver satisfeito com o serviço prestado, você pode solicitar um reembolso de acordo com os seguintes termos:',
        conditions: [
          'Os pedidos de reembolso devem ser feitos dentro de 7 dias da data da sessão.',
          'Cancelamentos feitos com menos de 24 horas antes de uma sessão agendada não são elegíveis para reembolso.',
          'Se o mentor cancelar uma sessão, será oferecido um reembolso total ou reagendamento.',
          'Os reembolsos serão processados para o método de pagamento original dentro de 5 a 10 dias úteis.',
        ],
        contact: 'Para solicitar um reembolso, entre em contato conosco em',
      },
    },
    testimonials: {
      hero: {
        title: 'Histórias de',
        titleHighlight: 'Sucesso',
        description: 'Transformações reais de pessoas que tive o privilégio de mentorear.',
      },
      cta: {
        title: 'Sua História de Sucesso Começa Aqui',
        button: 'Comece Sua Jornada Hoje',
      },
      items: [
        {
          name: 'Clara Gabrielle',
          title: 'Desenvolvedora Pleno',
          company: ' na Mutant',
          content: 'A mentoria do Gabriel foi de grande valor. Tenho aprendido muito com ele. Ele possui um conhecimento profundo em programação e isso se reflete na forma como ensina e oferece suporte em suas sessões. Acredito que ele é um ótimo profissional e sinto facilidade em explicar os problemas de programação que venho enfrentando recentemente.',
          rating: 5,
        },
        {
          name: 'Michael Chen',
          title: 'Desenvolvedor Sênior',
          company: ' na StartUp Inc',
          content: 'O melhor investimento que fiz para minha carreira. Os insights do Gabriel me ajudaram a navegar uma grande transição de carreira suavemente.',
          rating: 5,
        },
        {
          name: 'Emma Rodriguez',
          title: 'Engenheira SRE',
          company: ' na CloudScale',
          content: 'Trabalhar com Gabriel foi incrível. Ele me ajudou a construir confiança e habilidades de liderança que transformaram minha vida profissional.',
          rating: 5,
        },
        {
          name: 'James Wilson',
          title: 'Engenheiro DevOps',
          company: ' na Pipeline Ops',
          content: 'A abordagem prática e a expertise profunda do Gabriel fizeram toda a diferença. Altamente recomendado!',
          rating: 5,
        },
        {
          name: 'Lisa Martinez',
          title: 'Arquiteta de Software',
          company: ' na NextGen Tech',
          content: 'A orientação que recebi foi exatamente o que eu precisava para levar minha carreira para o próximo nível.',
          rating: 5,
        },
        {
          name: 'David Brown',
          title: 'Desenvolvedor Full Stack',
          company: ' na FinTech Core',
          content: 'Gabriel me ajudou a negociar um aumento de 40% e avançar para uma posição de liderança. Mentor excepcional!',
          rating: 5,
        },
      ],
    },
    contact: {
      hero: {
        title: 'Entre em',
        titleHighlight: 'Contato',
        description: 'Pronto para começar sua jornada de mentoria? Vamos nos conectar e discutir como posso ajudá-lo a alcançar seus objetivos.',
      },
      info: {
        title: 'Informações de Contato',
        subtitle: 'Sinta-se livre para entrar em contato comigo através de qualquer um desses canais.',
        email: 'Email',
        phone: 'Telefone',
        location: 'Localização',
        locationValue: 'Disponível para mentoria virtual em todo o mundo',
        responseTime: 'Tempo de Resposta',
        responseTimeValue: 'Geralmente dentro de 24 horas',
        social: 'Conecte-se nas Redes Sociais',
      },
      form: {
        title: 'Envie uma mensagem',
        labels: {
          fullName: 'Nome Completo',
          email: 'Endereço de Email',
          phone: 'Telefone (Opcional)',
          subject: 'Assunto',
          message: 'Mensagem',
        },
        placeholders: {
          fullName: 'João Silva',
          email: 'joao@exemplo.com',
          phone: '+55 (11) 98765-4321',
          subject: 'Estou interessado em coaching de carreira',
          message: 'Conte-me sobre seus objetivos e o que você está procurando...',
        },
        button: 'Enviar Mensagem',
        sending: 'Enviando...',
        errors: {
          nameRequired: 'O nome é obrigatório',
          emailRequired: 'O email é obrigatório',
          emailInvalid: 'Por favor, insira um email válido',
          subjectRequired: 'O assunto é obrigatório',
          messageRequired: 'A mensagem é obrigatória',
        },
        success: 'Mensagem enviada com sucesso! Voltarei em breve.',
        error: 'Erro ao enviar mensagem',
      },
      faq: {
        title: 'Perguntas Frequentes',
        items: [
          {
            question: 'Quanto tempo leva uma auditoria de segurança?',
            answer: 'Depende do escopo, mas tipicamente 1-2 semanas para uma avaliação completa.',
          },
          {
            question: 'Qual é seu tempo de resposta?',
            answer: 'Normalmente respondo a consultas dentro de 24 horas durante os dias úteis.',
          },
          {
            question: 'Você oferece horários flexíveis?',
            answer: 'Sim! Trabalho com clientes em diferentes fusos horários e ofereço opções de agendamento flexível.',
          },
          {
            question: 'E se vocês não encontrarem bugs?',
            answer: 'Embora raro, se não encontrarmos nada, você recebe tranquilidade e um relatório de aprovação limpo.',
          },
        ],
      },
    },
    footer: {
      brand: 'MentorHubTech',
      tagline: 'Protegendo o mundo digital, uma auditoria de cada vez.',
      quickLinks: {
        title: 'Links Rápidos',
        home: 'Início',
        about: 'Sobre',
        services: 'Serviços',
        testimonials: 'Depoimentos',
      },
      services: {
        title: 'Serviços',
        careerCoaching: 'Auditoria de Segurança',
        techMentoring: 'Auditoria de Código',
      },
      connect: {
        title: 'Conectar',
        email: 'Email',
        linkedin: 'LinkedIn',
        twitter: 'Twitter',
        contactForm: 'Formulário de Contato',
      },
      legal: {
        copyright: '© {year} MentorHubTech. Todos os direitos reservados.',
        privacy: 'Política de Privacidade',
        refundPolicy: 'Política de Reembolso',
        terms: 'Termos de Serviço',
        sitemap: 'Mapa do Site',
      },
    },
    privacyPolicy: {
      title: 'Política de Privacidade',
      content: {
        intro: 'Na MentorHubTech, levamos sua privacidade a sério. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações pessoais.',
        sections: [
          {
            heading: 'Informações que Coletamos',
            body: 'Coletamos informações que você nos fornece diretamente, como seu nome, endereço de email e informações de pagamento ao agendar um serviço.',
          },
          {
            heading: 'Como Usamos Suas Informações',
            body: 'Usamos suas informações para fornecer serviços de segurança, processar pagamentos e nos comunicar com você sobre seus projetos.',
          },
          {
            heading: 'Proteção de Dados',
            body: 'Implementamos medidas de segurança rigorosas para proteger seus dados. Como uma empresa de segurança, tratamos a confidencialidade do cliente com a máxima prioridade.',
          },
        ],
        lastUpdated: 'Última Atualização: Fevereiro 2026',
      },
    },
    termsOfService: {
      title: 'Termos de Serviço',
      content: {
        intro: 'Ao acessar ou usar nossos serviços, você concorda em ficar vinculado a estes Termos de Serviço.',
        sections: [
          {
            heading: 'Serviços',
            body: 'Fornecemos serviços de auditoria de segurança e avaliação de vulnerabilidade. Embora nos esforcemos para identificar o máximo possível de problemas, não podemos garantir que um sistema esteja 100% seguro.',
          },
          {
            heading: 'Confidencialidade',
            body: 'Concordamos em manter todas as descobertas confidenciais. Você concorda em fornecer o acesso necessário para realizarmos os serviços acordados.',
          },
          {
            heading: 'Responsabilidade',
            body: 'A MentorHubTech não se responsabiliza por quaisquer danos decorrentes do uso de nossos serviços, exceto em casos de negligência grave.',
          },
        ],
        lastUpdated: 'Última Atualização: Fevereiro 2026',
      },
    },
  },
  es: {
    common: {
      language: 'Idioma',
      english: 'English',
      portuguese: 'Português',
      spanish: 'Español',
      contactEmail: 'gabrieln.dev3@gmail.com',
      phone: '+351 928 460 134',
    },
    navbar: {
      home: 'Inicio',
      about: 'Acerca',
      services: 'Servicios',
      testimonials: 'Testimonios',
      contact: 'Contacto',
    },

    successPage: {
      title: '¡Pago Exitoso!',
      loading: 'Verificando su pago...',
      confirmationPrefix: 'Tu sesión de mentoría para',
      confirmationSuffix: 'ha sido confirmada.',
      emailSent: 'Hemos enviado una invitación de calendario a tu correo electrónico.',
      returnHome: 'Volver al Inicio',
      errorTitle: 'Algo salió mal',
      errorMessagePrefix: 'No pudimos verificar los detalles de su pago usando la sesión:',
      contactSupport: 'Contactar Soporte'
    },
    home: {
      hero: {
        title: 'Protege tus',
        titleHighlight: 'Activos Digitales',
        subtitle: 'Hoy',
        description: 'Evaluaciones integrales de vulnerabilidad y auditoría de código. Identifica debilidades antes que los atacantes.',
        cta1: 'Iniciar Auditoría de Seguridad',
        cta2: 'Explorar Servicios',
        trustIndicator: 'sistemas asegurados',
      },
      stats: [
        { label: 'Vulnerabilidades Encontradas', value: '500+' },
        { label: 'Sistemas Asegurados', value: '50+' },
        { label: 'Años de Experiencia', value: '5+' },
        { label: 'Bugs Críticos Corregidos', value: '100+' },
      ],
      features: {
        title: '¿Por qué elegir Nuestros Servicios de Seguridad?',
        subtitle: 'Protege tu negocio con medidas de seguridad proactivas y análisis experto.',
        items: [
          {
            title: 'Evaluación de Vulnerabilidad',
            description: 'Revisión sistemática de debilidades de seguridad en un sistema de información.',
            icon: '🛡️',
          },
          {
            title: 'Auditoría de Código',
            description: 'Inmersión profunda en tu código base para encontrar fallos lógicos y agujeros de seguridad.',
            icon: '🔍',
          },
          {
            title: 'Detección de Brechas',
            description: 'Identifica signos de compromiso y asegura tu infraestructura.',
            icon: '🚨',
          },
          {
            title: 'Consultoría de Seguridad',
            description: 'Asesoramiento experto sobre cómo asegurar tu arquitectura y pipeline de desarrollo.',
            icon: '🤝',
          },
        ],
      },
      cta: {
        title: '¿Listo para Asegurar tu Sistema?',
        subtitle: 'Únete a más de 50 empresas que han asegurado sus activos con nuestra ayuda.',
        button: 'Programar tu Auditoría de Seguridad',
      },
      booking: {
        selectDate: 'Seleccionar Fecha',
        selectTime: 'Seleccionar Hora',
        confirmBooking: 'Confirmar Reserva',
        service: 'Servicio',
        date: 'Fecha',
        time: 'Hora',
        total: 'Total',
        confirmPay: 'Confirmar y Pagar',
        back: 'Atrás',
      },
      mostPopular: '⭐ MÁS POPULAR',
    },
    about: {
      hero: {
        title: 'Acerca',
        titleHighlight: 'de Nosotros',
        description: 'Investigadores de seguridad apasionados dedicados a hacer la web más segura.',
      },
      profile: {
        name: 'Somos Expertos en Seguridad',
        bio1: 'Con años de experiencia en ciberseguridad y hacking ético, nos especializamos en encontrar vulnerabilidades antes que los actores maliciosos lo hagan.',
        bio2: 'Nuestra misión es ayudar a las empresas a asegurar sus datos e infraestructura a través de pruebas y análisis rigurosos.',
        bio3: 'Creemos en un enfoque proactivo de la seguridad, identificando puntos débiles y proporcionando pasos de remediación accionables.',
      },
      timeline: {
        title: 'Nuestro Viaje',
        events: [
          { year: '2019', event: 'Comencé en el campo tecnológico' },
          { year: '2022', event: 'Encontré un error menor en Tinder' },
          { year: '2023', event: 'Lideré un equipo en el campo tecnológico en el sector de Telecomunicaciones' },
          { year: '2025', event: 'Trabajé en un banco importante en Brasil' },
          { year: '2026-presente', event: 'Trabajo como consultor de seguridad independiente a tiempo completo y en Portugal' },
        ],
      },
      expertise: {
        title: 'Áreas de Experiencia',
        items: ['Arquitectura de Seguridad', 'Revisión de Código', 'Evaluación de Vulnerabilidad'],
      },
    },
    services: {
      hero: {
        title: 'Nuestros Servicios',
        titleHighlight: 'Servicios',
        description: 'Elige el paquete de seguridad perfecto para proteger tus activos.',
      },
      regionIndicator: {
        currency: 'Moneda',
        localPricing: 'Precios ajustados localmente para',
        changeRegion: 'Cambiar región:',
        br: '🇧🇷 Precios en Real Brasileño con precios asequibles',
        eu: '🇪🇺 Precios en Euro (Zona Euro)',
        uk: '🇬🇧 Precios en Libra Esterlina',
        us: '🇺🇸 Precios en Dólar Estadounidense',
      },

      cards: [
        {
          name: 'Auditoría de Seguridad',
          duration: 'Por Sesión',
          description: 'Análisis integral de la arquitectura y código de tu sistema.',
          features: [
            'Revisión de Arquitectura',
            'Análisis de Código',
            'Escaneo de Vulnerabilidades',
            'Informe y Recomendaciones',
          ],
          popular: true,
        },
        {
          name: 'Auditoría de Código',
          duration: 'Por Sesión',
          description: 'Inmersión profunda en tu código base para encontrar fallos lógicos y agujeros de seguridad.',
          features: [
            'Análisis de Código Estático',
            'Detección de Fallos Lógicos',
            'Auditoría de Dependencias',
            'Revisión de Mejores Prácticas',
          ],
        },
      ],
      comparison: {
        title: 'Comparación de Servicios',
        features: 'Características',
        careerCoaching: 'Escaneo de Vulnerabilidad',
        resumeReview: 'Revisión de Código',
        interviewPrep: 'Explotación',
        monthlyRetainer: 'Informe Detallado',
        items: [],
      },
      buttons: {
        scheduleNow: 'Agendar Ahora',
      },
      cta: {
        title: '¿Preocupado por la seguridad? Agenda una consulta.',
        subtitle: 'Identifiquemos tus riesgos y aseguremos tu infraestructura.',
        button: 'Obtener Consulta de Seguridad Gratuita',
      },
      mostPopular: '⭐ MÁS POPULAR',
    },
    mentorhubtech: {
      studios: {
        title: 'MentorHubTech Studios',
        subtitle: 'Game dev: estudio y equipos',
        description: 'Mentoría especializada en desarrollo de juegos, estudio de producción y contratación de equipos.',
        back: 'Volver al inicio',
      },
      it: {
        title: 'MentorHubTech IT',
        subtitle: 'Outsourcing y soluciones TI',
        description: 'Equipos remotos, proyectos a demanda y soporte técnico especializado.',
        back: 'Volver al inicio',
      },
      section: {
        title: 'MentorHubTech — Nuestras soluciones',
        subtitle: 'Somos una matriz que reúne servicios especializados. Elige la unidad que mejor se ajuste a tus necesidades.'
      },
    },
    refundPolicy: {
      title: 'Política de Reembolso',
      content: {
        intro: 'Queremos que confíes en nuestros hallazgos. Si no estás satisfecho con el informe proporcionado, puedes solicitar un reembolso de acuerdo con los siguientes términos:',
        conditions: [
          'Las solicitudes de reembolso deben realizarse dentro de los 7 días posteriores a la fecha de la sesión.',
          'Las cancelaciones realizadas con menos de 24 horas antes de una sesión programada no son elegibles para reembolso.',
          'Si el mentor cancela una sesión, se ofrecerá un reembolso completo o una reprogramación.',
          'Los reembolsos se procesarán al método de pago original dentro de 5 a 10 días hábiles.',
        ],
        contact: 'Para solicitar un reembolso, contáctenos en',
      },
    },
    testimonials: {
      hero: {
        title: 'Historias de',
        titleHighlight: 'Clientes',
        description: 'Comentarios reales de empresas que ayudamos a asegurar.',
      },
      cta: {
        title: 'Tu Historia de Éxito Comienza Aquí',
        button: 'Comienza Tu Viaje Hoy',
      },
      items: [
        {
          name: 'Tech Corp',
          title: 'CTO',
          company: ' en Major Tech',
          content: 'Encontraron vulnerabilidades críticas que podrían habernos costado millones. Profesional y minucioso.',
          rating: 5,
        },
        {
          name: 'FinBank',
          title: 'CISO',
          company: ' en FinBank',
          content: 'La prueba de penetración fue reveladora. Ahora estamos mucho más seguros gracias a su trabajo.',
          rating: 5,
        },
      ],
    },
    contact: {
      hero: {
        title: 'Ponte en',
        titleHighlight: 'Contacto',
        description: '¿Listo para asegurar tu negocio? Vamos a conectar y discutir cómo podemos ayudar.',
      },
      info: {
        title: 'Información de Contacto',
        subtitle: 'Siéntete libre de contactarme a través de cualquiera de estos canales.',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        location: 'Ubicación',
        locationValue: 'Disponible para mentoría virtual en todo el mundo',
        responseTime: 'Tiempo de Respuesta',
        responseTimeValue: 'Generalmente dentro de 24 horas',
        social: 'Conectar en Redes Sociales',
      },
      form: {
        title: 'Envíame un mensaje',
        labels: {
          fullName: 'Nombre Completo',
          email: 'Dirección de Correo',
          phone: 'Teléfono (Opcional)',
          subject: 'Asunto',
          message: 'Mensaje',
        },
        placeholders: {
          fullName: 'Juan Pérez',
          email: 'juan@ejemplo.com',
          phone: '+34 (123) 456-7890',
          subject: 'Estoy interesado en una Auditoría de Seguridad',
          message: 'Cuéntame sobre tu sistema y qué necesitas probar...',
        },
        button: 'Enviar Mensaje',
        sending: 'Enviando...',
        errors: {
          nameRequired: 'El nombre es obligatorio',
          emailRequired: 'El correo es obligatorio',
          emailInvalid: 'Por favor, introduce un correo válido',
          subjectRequired: 'El asunto es obligatorio',
          messageRequired: 'El mensaje es obligatorio',
        },
        success: '¡Mensaje enviado con éxito! Me pondré en contacto pronto.',
        error: 'Error al enviar el mensaje',
      },
      faq: {
        title: 'Preguntas Frecuentes',
        items: [
          {
            question: '¿Cuánto tiempo lleva una auditoría de seguridad?',
            answer: 'Depende del alcance, pero típicamente 1-2 semanas para una evaluación completa.',
          },
          {
            question: '¿Cuál es tu tiempo de respuesta?',
            answer: 'Normalmente respondo a consultas dentro de 24 horas durante los días laborales.',
          },
          {
            question: '¿Ofreces horarios flexibles?',
            answer: 'Sí, trabajo con clientes en diferentes zonas horarias y ofrezco opciones de programación flexibles.',
          },
          {
            question: '¿Qué pasa si no encuentran bugs?',
            answer: 'Aunque es raro, si no encontramos nada, obtienes tranquilidad y un informe de aprobación limpio.',
          },
        ],
      },
    },
    footer: {
      brand: 'MentorHubTech',
      tagline: 'Protegiendo el mundo digital, una auditoría a la vez.',
      quickLinks: {
        title: 'Enlaces Rápidos',
        home: 'Inicio',
        about: 'Acerca de',
        services: 'Servicios',
        testimonials: 'Testimonios',
      },
      services: {
        title: 'Servicios',
        careerCoaching: 'Auditoría de Seguridad',
        techMentoring: 'Auditoría de Código',
      },
      connect: {
        title: 'Conectar',
        email: 'Correo',
        linkedin: 'LinkedIn',
        twitter: 'Twitter',
        contactForm: 'Formulario de Contacto',
      },
      legal: {
        copyright: '© {year} MentorHubTech. Todos los derechos reservados.',
        privacy: 'Política de Privacidad',
        refundPolicy: 'Política de Reembolso',
        terms: 'Términos de Servicio',
        sitemap: 'Mapa del Sitio',
      },
    },
    privacyPolicy: {
      title: 'Política de Privacidad',
      content: {
        intro: 'En MentorHubTech, tomamos su privacidad muy en serio. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos su información personal.',
        sections: [
          {
            heading: 'Información que Recopilamos',
            body: 'Recopilamos información que usted nos proporciona directamente, como su nombre, dirección de correo electrónico e información de pago al programar un servicio.',
          },
          {
            heading: 'Cómo Usamos Su Información',
            body: 'Utilizamos su información para proporcionar servicios de seguridad, procesar pagos y comunicarnos con usted sobre sus proyectos.',
          },
          {
            heading: 'Protección de Datos',
            body: 'Implementamos rigurosas medidas de seguridad para proteger sus datos. Como empresa de seguridad, tratamos la confidencialidad del cliente con la máxima prioridad.',
          },
        ],
        lastUpdated: 'Última Actualización: Febrero 2026',
      },
    },
    termsOfService: {
      title: 'Términos de Servicio',
      content: {
        intro: 'Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos Términos de Servicio.',
        sections: [
          {
            heading: 'Servicios',
            body: 'Proporcionamos servicios de auditoría de seguridad y evaluación de vulnerabilidades. Aunque nos esforzamos por identificar tantos problemas como sea posible, no podemos garantizar que un sistema sea 100% seguro.',
          },
          {
            heading: 'Confidencialidade',
            body: 'Acordamos mantener todos los hallazgos confidenciales. Usted acepta proporcionar el acceso necesario para que realicemos los servicios acordados.',
          },
          {
            heading: 'Responsabilidad',
            body: 'MentorHubTech no es responsable de ningún daño derivado del uso de nuestros servicios, excepto en casos de negligencia grave.',
          },
        ],
        lastUpdated: 'Última Actualización: Febrero 2026',
      },
    },
  },
}
