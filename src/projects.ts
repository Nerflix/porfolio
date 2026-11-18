export const categories = ['All', 'Web', 'Python', 'Game'] as const

export interface Project {
  id: string
  name: string
  category: Exclude<(typeof categories)[number], 'All'> | 'Mobile'
  tags: readonly string[]
  summary: string
  demo?: string
  source?: string
  desktopOnly?: boolean
  preview?: { src: string; alt: string }
  caseStudy?: { problem: string; built: string; decision: string }
}

interface Contact {
  github: string
  portrait?: string
  email?: string
  linkedin?: string
  whatsapp?: string
  cv?: string
}

export const contact: Contact = {
  github: 'https://github.com/Nerflix',
  portrait: '/chris-njoroge.jpeg',
  email: 'wisedeposits@gmail.com',
  linkedin: 'https://linkedin.com/in/chris-njoroge56658b190',
  whatsapp: 'https://wa.me/254745751185',
}

export const projects: readonly Project[] = [
  {
    id: 'netflixo',
    name: 'Netflixo',
    category: 'Web',
    tags: ['JavaScript', 'React', 'React Router', 'Tailwind CSS'],
    summary: 'I built Netflixo with React and Tailwind CSS so visitors can browse movies and open a dedicated watch view.',
    preview: { src: '/projects/netflixo.jpg', alt: 'Netflixo watch view for The Conjuring with a video play control' },
    demo: 'https://netflixoyoutube-github-8cvd96q37-nerflix1.vercel.app/watch/The%20Conjuring',
    source: 'https://github.com/Nerflix/netflixoyoutube.github.io',
    caseStudy: {
      problem: 'Give visitors a direct route from a movie listing to its details and playback preview.',
      built: 'I built Netflixo from the ground up, including the movie catalog, browsing filters, title detail pages, and a dedicated watch view with a sample video player.',
      decision: 'The watch route uses a movie title to look up the catalog entry and opens a bundled sample clip when the visitor presses play.',
    },
  },
  {
    id: 'wavonex',
    name: 'Wavonex',
    category: 'Web',
    tags: ['JavaScript', 'React', 'CSS'],
    summary: 'A client website for a Kenyan HVAC, refrigeration, and solar engineering business.',
    preview: { src: '/projects/wavonex.jpg', alt: 'Wavonex homepage with engineering service categories and quote buttons' },
    demo: 'https://wavonex.co.ke/',
    source: 'https://github.com/Nerflix/Wavyonex',
    caseStudy: {
      problem: 'Help visitors identify the right engineering service and reach the business with a specific request.',
      built: 'I organized the site by service, product, and sector, with quote buttons, phone links, and a persistent WhatsApp shortcut.',
      decision: 'A shared WhatsApp helper generates prefilled messages for HVAC, refrigeration, and solar inquiries so a quote request carries the service context.',
    },
  },
  {
    id: 'gradeedge',
    name: 'GradeEdge',
    category: 'Web',
    tags: ['JavaScript', 'React', 'CSS'],
    summary: 'My academic support site, with service information, an academic work portfolio, and technical project examples.',
    preview: { src: '/projects/gradeedge.jpg', alt: 'GradeEdge homepage with academic portfolio and contact links' },
    demo: 'https://gradeedge-ashen.vercel.app/',
    source: 'https://github.com/Nerflix/gradeedge',
    caseStudy: {
      problem: 'Give international students one place to browse support options, see work samples, and get in touch.',
      built: 'I built a bilingual site with service cards, filterable academic samples, technical project listings, and WeChat and email contact options.',
      decision: 'A React language provider shares English and Chinese translations across sections within a single-page layout.',
    },
  },
  {
    id: 'lucasa',
    name: 'Lucasa POS',
    category: 'Mobile',
    tags: ['Dart', 'Flutter', 'Drift / SQLite', 'Supabase'],
    summary: 'An offline-first point-of-sale project for multi-location businesses, including filling stations and car sales.',
    caseStudy: {
      problem: 'Keep core point-of-sale operations available when an internet connection drops.',
      built: 'I implemented the local schema, authentication, connectivity monitoring, and sync services. The code includes sales, inventory, credits, and reporting screens. End-to-end module completion and validation remain planned work.',
      decision: 'SQLite via Drift handles local operations. Supabase supports cloud backup and incremental sync when connectivity returns.',
    },
  },
  {
    id: 'guruspyers',
    name: 'Guruspyers',
    category: 'Web',
    tags: ['JavaScript', 'React', 'Firebase', 'PayPal SDK'],
    summary: 'I built a storefront where customers can choose software for location tracking, social media monitoring, or remote device access, then pay through an integrated checkout. A support chatbot helps customers with product questions.',
    demo: 'https://guruspyers-com-git-main-nerflix1s-projects.vercel.app/',
  },
  {
    id: 'wise',
    name: 'Wise UI recreation',
    category: 'Web',
    tags: ['JavaScript', 'React'],
    summary: 'I recreated the Wise web experience, including account sign-up, sign-in, and the workflow for creating transactions.',
    preview: { src: '/projects/wise.jpg', alt: 'Wise UI recreation showing the desktop sign-in layout' },
    demo: 'https://wise-com.vercel.app/',
    desktopOnly: true,
  },
  {
    id: 'apuesta',
    name: 'Apuesta React',
    category: 'Web',
    tags: ['TypeScript', 'React'],
    summary: 'In this fork, I added a live fixtures route and navigation link, then contributed multilingual resources and a language selector.',
    source: 'https://github.com/Nerflix/Apuesta-React/tree/master',
  },
  {
    id: 'techtrove',
    name: 'TechTrove Checkout',
    category: 'Web',
    tags: ['JavaScript', 'PayPal'],
    summary: 'A checkout project with a PayPal payment interface.',
    demo: 'https://checkout-a36l.onrender.com/',
  },
  {
    id: 'markov',
    name: 'Markov Chains',
    category: 'Python',
    tags: ['Python', 'NumPy'],
    summary: 'Wildfire-frequency modelling using transition matrices, steady-state analysis, and multi-step forecasts.',
    source: 'https://github.com/Nerflix/Markov_Chains',
  },
  {
    id: 'distance-vector',
    name: 'Distance Vector',
    category: 'Python',
    tags: ['Python', 'Networking'],
    summary: 'A Bellman–Ford routing simulator that updates routes as network links change.',
    source: 'https://github.com/Nerflix/Distance_Vector',
  },
  {
    id: 'split-horizon',
    name: 'Split Horizon',
    category: 'Python',
    tags: ['Python', 'Networking'],
    summary: 'A routing simulation demonstrating Split Horizon with Poison Reverse.',
    source: 'https://github.com/Nerflix/Split_Horizon',
  },
  {
    id: 'maze',
    name: 'Godot Maze Game',
    category: 'Game',
    tags: ['GDScript', 'Godot'],
    summary: 'A simple Godot game where the player navigates a maze.',
    source: 'https://github.com/Nerflix/GAM20001_A2',
  },
  {
    id: 'django-shop',
    name: 'Django E-commerce',
    category: 'Web',
    tags: ['Python', 'Django'],
    summary: 'An online shop with account signup, a cart, and order management through the admin interface.',
    source: 'https://github.com/Nerflix/E-commerces',
  },
  {
    id: 'hub',
    name: 'THE HUB',
    category: 'Web',
    tags: ['E-commerce', 'Payments'],
    summary: 'An e-commerce project with a shopping cart and cryptocurrency payment integration.',
    demo: 'https://client-eight-sepia-64.vercel.app/',
  },
]
