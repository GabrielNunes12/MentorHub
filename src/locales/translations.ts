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
      mentors: 'Mentors',
      contact: 'Contact',
    },
    mentors: [
      {
        id: 'gabriel',
        name: 'Gabriel Nunes',
        role: 'Senior Developer & Tech Lead',
        bio: 'With over 5 years of experience in the tech industry, I built a career that spans from individual contributor to team leadership.',
        skills: ['Java', 'Spring Boot', 'GCP', 'Leadership', 'Mentoring', 'Agile', 'SQL'],
        social: {
          linkedin: 'https://www.linkedin.com/in/gabriel-nunes1/',
          github: 'https://github.com/GabrielN12',
          email: 'gabrieln.dev3@gmail.com'
        }
      },
      {
        id: 'romulo',
        name: 'Romulo Semião',
        role: 'Frontend Engineer',
        bio: 'Frontend Engineer with experience at Capgemini Engineering, working on complex interfaces and agile methodologies.',
        skills: ['React.js', 'TypeScript', 'SASS', 'HTML', 'NoSQL'],
        social: {
          linkedin: 'https://www.linkedin.com/in/romulosemiao',
          github: 'https://github.com/RomuloSemiao',
          email: 'r.semiao.a@gmail.com'
        }
      }
    ],
    mentorsPage: {
      subtitle: 'Meet our experienced mentors ready to guide you.',
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
        title: 'Transform Your',
        titleHighlight: 'Career',
        subtitle: 'Today',
        description: 'Get personalized mentorship from an experienced industry professional. Accelerate your growth, achieve your goals, and unlock your full potential.',
        cta1: 'Schedule Free Consultation',
        cta2: 'Explore Services',
        trustIndicator: 'students transformed',
      },
      stats: [
        { label: 'Students Mentored', value: '20+' },
        { label: 'Success Rate', value: '95%' },
        { label: 'Years Experience', value: '5+' },
        { label: 'Companies Helped', value: '1+' },
      ],
      features: {
        title: 'Why Choose MentorHubTech?',
        subtitle: 'Get the guidance you need to succeed in your career and personal growth.',
        items: [
          {
            title: 'Personalized Guidance',
            description: 'Customized mentoring tailored to your specific goals and learning style.',
            icon: '🎯',
          },
          {
            title: 'Industry Expertise',
            description: 'Learn from someone with years of real-world experience in the field.',
            icon: '💼',
          },
          {
            title: 'Career Growth',
            description: 'Accelerate your career with strategic advice and insider knowledge.',
            icon: '📈',
          },
          {
            title: 'Network Building',
            description: 'Get connected with professionals and expand your professional network.',
            icon: '🤝',
          },
        ],
      },
      cta: {
        title: 'Ready to Transform Your Career?',
        subtitle: 'Join 20 professionals who have achieved their goals with personalized mentorship.',
        button: 'Schedule Your Free Consultation',
      },
    },
    about: {
      hero: {
        title: 'About',
        titleHighlight: 'Me',
        description: 'A passionate mentor dedicated to helping professionals achieve their goals and unlock their potential.',
      },
      profile: {
        name: 'Hi I\'m Gabriel Nunes!',
        bio1: 'With over 5 years of experience in the tech industry, I\'ve built a career that spans from individual contributor to team leadership. My journey has been filled with challenges, victories, and invaluable lessons that I\'m passionate about sharing.',
        bio2: 'I believe that everyone has the potential to excel in their career. Through personalized guidance, honest feedback, and strategic planning, I help professionals navigate their career path and achieve their ambitions.',
        bio3: 'My mentorship philosophy is centered on understanding your unique needs, building on your strengths, and addressing your challenges with practical, actionable advice.',
      },
      timeline: {
        title: 'My Journey',
        events: [
          { year: '2019', event: 'Started my professional career in tech' },
          { year: '2024', event: 'Became a team lead at a Mutant' },
          { year: '2024-2025', event: 'Went to a biggest bank in Brazil (Intermedium bank)' },
          { year: '2025-present', event: 'Senior developer in Europe' },
        ],
      },
      expertise: {
        title: 'Areas of Expertise',
        items: ['Career Development', 'Personal Branding', 'Management Skills', 'Work-Life Balance'],
      },
      certifications: {
        title: 'Certifications & Achievements',
        items: [
          { title: 'AWS Certified Developer', issuer: 'Amazon Web Services' },
          { title: 'Agile Coach Certification', issuer: 'Scrum Alliance' },
          { title: '20+ Mentees Successfully Placed', issuer: 'Career Development' },
          { title: 'Tech Speaker & Educator', issuer: 'Various Conferences' },
        ],
      },
    },
    services: {
      hero: {
        title: 'My Services',
        titleHighlight: 'Services',
        description: 'Choose the perfect mentorship package tailored to your needs and goals.',
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
          name: 'Backend Mentorship',
          duration: '1 hour',
          description: 'Master backend development with AI, architectures, and best practices.',
          features: [
            'AI & Complex Problem Solving',
            'Design Patterns & Architectures',
            'Data Structures & Algorithms',
            'Clean Code & SOLID Principles',
          ],
          popular: true,
        },
        {
          name: 'Frontend Mentorship',
          duration: '1 hour',
          description: 'Build modern user interfaces with React, AI, and best practices.',
          features: [
            'Components & React.js',
            'AI Integration',
            'Separation of Concerns',
            'Modern UI/UX Patterns',
          ],
        },
      ],
      comparison: {
        title: 'Service Comparison',
        features: 'Features',
        careerCoaching: 'Career Coaching',
        resumeReview: 'Profile Optimization',
        interviewPrep: 'Tech Interview Prep',
        monthlyRetainer: 'Speed Mentorship',
        items: [],
      },
      buttons: {
        scheduleNow: 'Schedule Now',
      },
      cta: {
        title: 'Still not sure? Schedule a free consultation.',
        subtitle: 'Let\'s discuss your goals and find the perfect mentorship package for you.',
        button: 'Get Free Consultation',
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
    refundPolicy: {
      title: 'Refund Policy',
      content: {
        intro: 'We want you to be completely satisfied with your mentorship experience. If you are not satisfied with the service provided, you may request a refund according to the following terms:',
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
        title: 'Success Stories',
        titleHighlight: 'Stories',
        description: 'Real transformations from people I\'ve had the privilege to mentor.',
      },
      cta: {
        title: 'Your Success Story Starts Here',
        button: 'Start Your Journey Today',
      },
      items: [
        {
          name: 'Clara Gabrielle',
          title: 'Mid level developer',
          company: ' at Mutant',
          content: 'Gabriel\'s mentorship has been of great value. I\'ve been learning a lot from him. He has deep programming knowledge and it shows on the way he teaches and gives support in his sessions. I believe he is a great professional and it feels easy to explain the programming problems I\'ve been facing recently.',
          rating: 5,
        },
        {
          name: 'Michael Chen',
          title: 'Senior Developer',
          company: ' at StartUp Inc',
          content: 'The best investment I made for my career. Gabriel\'s insights helped me navigate a major career transition smoothly.',
          rating: 5,
        },
        {
          name: 'Emma Rodriguez',
          title: 'Site Reliability Engineer (SRE)',
          company: ' at CloudScale',
          content: 'Working with Gabriel was incredible. He helped me build confidence and leadership skills that changed my professional life.',
          rating: 5,
        },
        {
          name: 'James Wilson',
          title: 'DevOps Engineer',
          company: ' at Pipeline Ops',
          content: 'Gabriel\'s practical approach and deep expertise made all the difference. Highly recommended!',
          rating: 5,
        },
        {
          name: 'Lisa Martinez',
          title: 'Software Architect',
          company: ' at NextGen Tech',
          content: 'The guidance I received was exactly what I needed to take my career to the next level.',
          rating: 5,
        },
        {
          name: 'David Brown',
          title: 'Full Stack Developer',
          company: ' at FinTech Core',
          content: 'Gabriel helped me negotiate a 40% salary increase and advance to a lead position. Exceptional mentor!',
          rating: 5,
        },
      ],
    },
    contact: {
      hero: {
        title: 'Get in',
        titleHighlight: 'Touch',
        description: 'Ready to start your mentorship journey? Let\'s connect and discuss how I can help you achieve your goals.',
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
          subject: 'I\'m interested in career coaching',
          message: 'Tell me about your goals and what you\'re looking for...',
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
            question: 'How long does a typical mentoring session last?',
            answer: 'Sessions vary from 30 minutes to 1.5 hours depending on the service package you choose.',
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
            question: 'What if I\'m not satisfied with the mentorship?',
            answer: 'Your satisfaction is my priority. We can discuss concerns and adjust the mentoring approach as needed.',
          },
        ],
      },
    },
    footer: {
      brand: 'MentorHubTech',
      tagline: 'Empowering the next generation of professionals through personalized mentorship.',
      quickLinks: {
        title: 'Quick Links',
        home: 'Home',
        about: 'About',
        services: 'Services',
        testimonials: 'Testimonials',
      },
      services: {
        title: 'Services',
        careerCoaching: 'Backend Mentorship',
        techMentoring: 'Frontend Mentorship',
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
      mentors: 'Mentores',
      contact: 'Contato',
    },
    mentors: [
      {
        id: 'gabriel',
        name: 'Gabriel Nunes',
        role: 'Desenvolvedor Sênior & Tech Lead',
        bio: 'Com mais de 5 anos de experiência na indústria de tecnologia, construí uma carreira que vai desde colaborador individual até liderança de equipe.',
        skills: ['Java', 'Spring Boot', 'GCP', 'Leadership', 'Mentoring', 'Agile', 'SQL'],
        social: {
          linkedin: 'https://www.linkedin.com/in/gabriel-nunes1/',
          github: 'https://github.com/GabrielN12',
          email: 'gabrieln.dev3@gmail.com'
        }
      },
      {
        id: 'romulo',
        name: 'Romulo Semião',
        role: 'Engenheiro Frontend',
        bio: 'Engenheiro Frontend com experiência na Capgemini Engineering, trabalhando em interfaces complexas e metodologias ágeis.',
        skills: ['React.js', 'TypeScript', 'SASS', 'HTML', 'NoSQL'],
        social: {
          linkedin: 'https://www.linkedin.com/in/romulosemiao',
          github: 'https://github.com/RomuloSemiao',
          email: 'r.semiao.a@gmail.com'
        }
      }
    ],
    mentorsPage: {
      subtitle: 'Conheça nossos mentores experientes prontos para guiá-lo.',
    },
    successPage: {
      title: 'Pagamento Concluído!',
      loading: 'Verificando seu pagamento...',
      confirmationPrefix: 'Sua sessão de mentoria para',
      confirmationSuffix: 'foi confirmada.',
      emailSent: 'Enviamos um convite de calendário para o seu e-mail.',
      returnHome: 'Voltar ao Início',
      errorTitle: 'Algo deu errado',
      errorMessagePrefix: 'Não conseguimos verificar os detalhes do seu pagamento usando a sessão:',
      contactSupport: 'Contatar Suporte'
    },
    home: {
      hero: {
        title: 'Transforme sua',
        titleHighlight: 'Carreira',
        subtitle: 'Hoje',
        description: 'Obtenha mentoria personalizada de um profissional experiente da indústria. Acelere seu crescimento, alcance seus objetivos e desbloqueie seu potencial total.',
        cta1: 'Agendar Consulta Gratuita',
        cta2: 'Explorar Serviços',
        trustIndicator: 'alunos transformados',
      },
      stats: [
        { label: 'Alunos Mentorados', value: '20+' },
        { label: 'Taxa de Sucesso', value: '95%' },
        { label: 'Anos de Experiência', value: '5+' },
        { label: 'Empresas Ajudadas', value: '1+' },
      ],
      features: {
        title: 'Por que escolher MentorHubTech?',
        subtitle: 'Obtenha a orientação que você precisa para ter sucesso em sua carreira e crescimento pessoal.',
        items: [
          {
            title: 'Orientação Personalizada',
            description: 'Mentoria customizada adaptada aos seus objetivos e estilo de aprendizado específicos.',
            icon: '🎯',
          },
          {
            title: 'Expertise da Indústria',
            description: 'Aprenda com alguém que possui anos de experiência real no campo.',
            icon: '💼',
          },
          {
            title: 'Crescimento de Carreira',
            description: 'Acelere sua carreira com conselhos estratégicos e conhecimento de insider.',
            icon: '📈',
          },
          {
            title: 'Construção de Rede',
            description: 'Conecte-se com profissionais e expanda sua rede profissional.',
            icon: '🤝',
          },
        ],
      },
      cta: {
        title: 'Pronto para Transformar sua Carreira?',
        subtitle: 'Junte-se a 20 profissionais que alcançaram seus objetivos com mentoria personalizada.',
        button: 'Agendar sua Consulta Gratuita',
      },
    },
    about: {
      hero: {
        title: 'Sobre',
        titleHighlight: 'Mim',
        description: 'Um mentor apaixonado dedicado a ajudar profissionais a alcançar seus objetivos e desbloquear seu potencial.',
      },
      profile: {
        name: 'Olá sou o Gabriel Nunes!',
        bio1: 'Com mais de 5 anos de experiência na indústria de tecnologia, construí uma carreira que vai desde colaborador individual até liderança de equipe. Minha jornada foi repleta de desafios, vitórias e lições inestimáveis que sou apaixonado em compartilhar.',
        bio2: 'Acredito que todos têm potencial para se destacar em suas carreiras. Através de orientação personalizada, feedback honesto e planejamento estratégico, ajudo profissionais a navegar em seus caminhos profissionais e alcançar suas ambições.',
        bio3: 'Minha filosofia de mentoria é centrada em entender suas necessidades únicas, construir sobre seus pontos fortes e abordar desafios com conselhos práticos e viáveis.',
      },
      timeline: {
        title: 'Minha Jornada',
        events: [
          { year: '2019', event: 'Comecei minha carreira profissional em tecnologia' },
          { year: '2024', event: 'Virei líder de equipe em Mutant' },
          { year: '2024-2025', event: 'Fui para o maior banco do Brasil (Intermedium bank)' },
          { year: '2025-presente', event: 'Desenvolvedor sênior na Europa' },
        ],
      },
      expertise: {
        title: 'Áreas de Expertise',
        items: ['Desenvolvimento de Carreira', 'Marca Pessoal', 'Habilidades de Gestão', 'Equilíbrio Trabalho-Vida'],
      },
      certifications: {
        title: 'Certificações e Realizações',
        items: [
          { title: 'AWS Certified Developer', issuer: 'Amazon Web Services' },
          { title: 'Agile Coach Certification', issuer: 'Scrum Alliance' },
          { title: '20+ Mentorados Colocados com Sucesso', issuer: 'Desenvolvimento de Carreira' },
          { title: 'Palestrante e Educador em Tech', issuer: 'Várias Conferências' },
        ],
      },
    },
    services: {
      hero: {
        title: 'Meus Serviços',
        titleHighlight: 'Serviços',
        description: 'Escolha o pacote de mentoria perfeito adaptado às suas necessidades e objetivos.',
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
          name: 'Mentoria Backend',
          duration: '1 hora',
          description: 'Domine o desenvolvimento backend com IA, arquiteturas e melhores práticas.',
          features: [
            'IA e Resolução de Problemas Complexos',
            'Padrões de Projeto e Arquiteturas',
            'Estruturas de Dados e Algoritmos',
            'Código Limpo e Princípios SOLID',
          ],
          popular: true,
        },
        {
          name: 'Mentoria Frontend',
          duration: '1 hora',
          description: 'Construa interfaces modernas com React, IA e melhores práticas.',
          features: [
            'Componentes e React.js',
            'Integração de IA',
            'Separação de Preocupações (SoC)',
            'Padrões Modernos de UI/UX',
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
            question: 'Quanto tempo dura uma sessão típica de mentoria?',
            answer: 'As sessões variam de 30 minutos a 1,5 horas dependendo do pacote de serviço escolhido.',
          },
          {
            question: 'Qual é seu tempo de resposta?',
            answer: 'Normalmente respondo a consultas dentro de 24 horas durante os dias úteis.',
          },
          {
            question: 'Você oferece horários flexíveis?',
            answer: 'Sim! Trabalho com mentorados em diferentes fusos horários e ofereço opções de agendamento flexível.',
          },
          {
            question: 'E se não estiver satisfeito com a mentoria?',
            answer: 'Sua satisfação é minha prioridade. Podemos discutir preocupações e ajustar a abordagem de mentoria conforme necessário.',
          },
        ],
      },
    },
    footer: {
      brand: 'MentorHubTech',
      tagline: 'Capacitando a próxima geração de profissionais através de mentoria personalizada.',
      quickLinks: {
        title: 'Links Rápidos',
        home: 'Início',
        about: 'Sobre',
        services: 'Serviços',
        testimonials: 'Depoimentos',
      },
      services: {
        title: 'Serviços',
        careerCoaching: 'Mentoria Backend',
        techMentoring: 'Mentoria Frontend',
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
      mentors: 'Mentores',
      contact: 'Contacto',
    },
    mentors: [
      {
        id: 'gabriel',
        name: 'Gabriel Nunes',
        role: 'Desarrollador Senior & Tech Lead',
        bio: 'Con más de 5 años de experiencia en la industria tecnológica, he construido una carrera que abarca desde colaborador individual hasta liderazgo de equipo.',
        skills: ['Java', 'Spring Boot', 'GCP', 'Liderazgo', 'Mentoría', 'Agile', 'SQL'],
        social: {
          linkedin: 'https://www.linkedin.com/in/gabriel-nunes1/',
          github: 'https://github.com/GabrielN12',
          email: 'gabrieln.dev3@gmail.com'
        }
      },
      {
        id: 'romulo',
        name: 'Romulo Semião',
        role: 'Ingeniero Frontend',
        bio: 'Ingeniero Frontend con experiencia en Capgemini Engineering, trabajando en interfaces complejas y metodologias ágiles.',
        skills: ['React.js', 'TypeScript', 'SASS', 'HTML', 'NoSQL'],
        social: {
          linkedin: 'https://www.linkedin.com/in/romulosemiao',
          github: 'https://github.com/RomuloSemiao',
          email: 'r.semiao.a@gmail.com'
        }
      }
    ],
    mentorsPage: {
      subtitle: 'Conozca a nuestros mentores experimentados listos para guiarlo.',
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
        title: 'Transforma tu',
        titleHighlight: 'Carrera',
        subtitle: 'Hoy',
        description: 'Obtén mentoría personalizada de un profesional experimentado de la industria. Acelera tu crecimiento, logra tus objetivos y desbloquea tu potencial completo.',
        cta1: 'Programar Consulta Gratuita',
        cta2: 'Explorar Servicios',
        trustIndicator: 'estudiantes transformados',
      },
      stats: [
        { label: 'Estudiantes Mentorados', value: '20+' },
        { label: 'Tasa de Éxito', value: '95%' },
        { label: 'Años de Experiencia', value: '5+' },
        { label: 'Empresas Ayudadas', value: '1+' },
      ],
      features: {
        title: '¿Por qué elegir MentorHubTech?',
        subtitle: 'Obtén la orientación que necesitas para tener éxito en tu carrera y crecimiento personal.',
        items: [
          {
            title: 'Orientación Personalizada',
            description: 'Mentoría personalizada adaptada a tus objetivos y estilo de aprendizaje específicos.',
            icon: '🎯',
          },
          {
            title: 'Experiencia de la Industria',
            description: 'Aprende de alguien con años de experiencia real en el campo.',
            icon: '💼',
          },
          {
            title: 'Crecimiento de Carrera',
            description: 'Acelera tu carrera con consejos estratégicos y conocimiento de insider.',
            icon: '📈',
          },
          {
            title: 'Construcción de Redes',
            description: 'Conéctate con profesionales y expande tu red profesional.',
            icon: '🤝',
          },
        ],
      },
      cta: {
        title: '¿Listo para Transformar tu Carrera?',
        subtitle: 'Únete a 20 profesionales que han logrado sus objetivos con mentoría personalizada.',
        button: 'Programar tu Consulta Gratuita',
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
        titleHighlight: 'de Mí',
        description: 'Un mentor apasionado dedicado a ayudar a los profesionales a lograr sus objetivos y desbloquear su potencial.',
      },
      profile: {
        name: '¡Hola soy Gabriel Nunes!',
        bio1: 'Con más de 5 años de experiencia en la industria tecnológica, he construido una carrera que abarca desde colaborador individual hasta liderazgo de equipo. Mi viaje ha estado lleno de desafíos, victorias y lecciones invaluables que me apasiona compartir.',
        bio2: 'Creo que todos tienen el potencial de sobresalir en sus carreras. A través de orientación personalizada, retroalimentación honesta y planificación estratégica, ayudo a los profesionales a navegar su camino profesional y lograr sus ambiciones.',
        bio3: 'Mi filosofía de mentoría se centra en comprender tus necesidades únicas, construir sobre tus fortalezas y abordar desafíos con consejos prácticos y viables.',
      },
      timeline: {
        title: 'Mi Viaje',
        events: [
          { year: '2019', event: 'Comencé mi carrera profesional en tecnología' },
          { year: '2024', event: 'Me convertí en líder de equipo en Mutant' },
          { year: '2024-2025', event: 'Fui al banco más grande de Brasil (Intermedium bank)' },
          { year: '2025-presente', event: 'Desarrollador sénior en Europa' },
        ],
      },
      expertise: {
        title: 'Áreas de Experiencia',
        items: ['Desarrollo de Carrera', 'Marca Personal', 'Habilidades de Gestión', 'Equilibrio Trabajo-Vida'],
      },
      certifications: {
        title: 'Certificaciones y Logros',
        items: [
          { title: 'AWS Certified Developer', issuer: 'Amazon Web Services' },
          { title: 'Agile Coach Certification', issuer: 'Scrum Alliance' },
          { title: '20+ Mentorados Colocados Exitosamente', issuer: 'Desarrollo de Carrera' },
          { title: 'Orador y Educador en Tech', issuer: 'Varias Conferencias' },
        ],
      },
    },
    services: {
      hero: {
        title: 'Mis Servicios',
        titleHighlight: 'Servicios',
        description: 'Elige el paquete de mentoría perfecto adaptado a tus necesidades y objetivos.',
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
          name: 'Mentoría Backend',
          duration: '1 hora',
          description: 'Domina el desarrollo backend con IA, arquitecturas y mejores prácticas.',
          features: [
            'IA y Resolución de Problemas Complejos',
            'Patrones de Diseño y Arquitecturas',
            'Estructuras de Datos y Algoritmos',
            'Código Limpio y Principios SOLID',
          ],
          popular: true,
        },
        {
          name: 'Mentoría Frontend',
          duration: '1 hora',
          description: 'Construye interfaces modernas con React, IA y mejores prácticas.',
          features: [
            'Componentes y React.js',
            'Integración de IA',
            'Separación de Responsabilidades',
            'Patrones Modernos de UI/UX',
          ],
        },
      ],
      comparison: {
        title: 'Comparación de Servicios',
        features: 'Características',
        careerCoaching: 'Coaching de Carrera',
        resumeReview: 'Optimización de Perfil',
        interviewPrep: 'Prep Entrevista Técnica',
        monthlyRetainer: 'Mentoría Rápida',
        items: [],
      },
      buttons: {
        scheduleNow: 'Agendar Ahora',
      },
      cta: {
        title: '¿Aún no estás seguro? Agenda una consulta gratuita.',
        subtitle: 'Discutamos tus objetivos y encontremos el paquete de mentoría perfecto para ti.',
        button: 'Obtener Consulta Gratuita',
      },
      mostPopular: '⭐ MÁS POPULAR',
    },
    refundPolicy: {
      title: 'Política de Reembolso',
      content: {
        intro: 'Queremos que esté completamente satisfecho con su experiencia de mentoría. Si no está satisfecho con el servicio proporcionado, puede solicitar un reembolso de acuerdo con los siguientes términos:',
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
        titleHighlight: 'Éxito',
        description: 'Transformaciones reales de personas que he tenido el privilegio de mentorear.',
      },
      cta: {
        title: 'Tu Historia de Éxito Comienza Aquí',
        button: 'Comienza Tu Viaje Hoy',
      },
      items: [
        {
          name: 'Clara Gabrielle',
          title: 'Desarrolladora Mid',
          company: ' en Mutant',
          content: 'La mentoría de Gabriel ha sido de gran valor. He aprendido mucho con él. Tiene un profundo conocimiento de programación y se nota en la forma en que enseña y brinda apoyo en sus sesiones. Creo que es un gran profesional y es fácil explicar los problemas de programación que he enfrentado recientemente.',
          rating: 5,
        },
        {
          name: 'Michael Chen',
          title: 'Desarrollador Sénior',
          company: ' en StartUp Inc',
          content: 'La mejor inversión que hice para mi carrera. Los insights de Gabriel me ayudaron a navegar una importante transición de carrera sin problemas.',
          rating: 5,
        },
        {
          name: 'Emma Rodriguez',
          title: 'Ingeniera SRE',
          company: ' en CloudScale',
          content: 'Trabajar con Gabriel fue increíble. Me ayudó a construir confianza y habilidades de liderazgo que transformaron mi vida profesional.',
          rating: 5,
        },
        {
          name: 'James Wilson',
          title: 'Ingeniero DevOps',
          company: ' en Pipeline Ops',
          content: '¡El enfoque práctico y la experiencia profunda de Gabriel hicieron toda la diferencia. ¡Altamente recomendado!',
          rating: 5,
        },
        {
          name: 'Lisa Martinez',
          title: 'Arquitecta de Software',
          company: ' en NextGen Tech',
          content: 'La orientación que recibí fue exactamente lo que necesitaba para llevar mi carrera al siguiente nivel.',
          rating: 5,
        },
        {
          name: 'David Brown',
          title: 'Desarrollador Full Stack',
          company: ' en FinTech Core',
          content: '¡Gabriel me ayudó a negociar un aumento del 40% y avanzar a una posición de liderazgo. ¡Mentor excepcional!',
          rating: 5,
        },
      ],
    },
    contact: {
      hero: {
        title: 'Ponte en',
        titleHighlight: 'Contacto',
        description: '¿Listo para comenzar tu viaje de mentoría? Vamos a conectar y discutir cómo puedo ayudarte a lograr tus objetivos.',
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
          subject: 'Estoy interesado en coaching de carrera',
          message: 'Cuéntame sobre tus objetivos y qué estás buscando...',
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
            question: '¿Cuánto tiempo dura una sesión típica de mentoría?',
            answer: 'Las sesiones varían de 30 minutos a 1,5 horas dependiendo del paquete de servicio que elijas.',
          },
          {
            question: '¿Cuál es tu tiempo de respuesta?',
            answer: 'Normalmente respondo a consultas dentro de 24 horas durante los días laborales.',
          },
          {
            question: '¿Ofreces horarios flexibles?',
            answer: 'Sí, trabajo con mentorados en diferentes zonas horarias y ofrezco opciones de programación flexibles.',
          },
          {
            question: '¿Qué pasa si no estoy satisfecho con la mentoría?',
            answer: 'Tu satisfacción es mi prioridad. Podemos discutir preocupaciones y ajustar el enfoque de mentoría según sea necesario.',
          },
        ],
      },
    },
    footer: {
      brand: 'MentorHubTech',
      tagline: 'Empoderando a la próxima generación de profesionales a través de mentoría personalizada.',
      quickLinks: {
        title: 'Enlaces Rápidos',
        home: 'Inicio',
        about: 'Acerca de',
        services: 'Servicios',
        testimonials: 'Testimonios',
      },
      services: {
        title: 'Servicios',
        careerCoaching: 'Mentoría Backend',
        techMentoring: 'Mentoría Frontend',
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
  },
}
