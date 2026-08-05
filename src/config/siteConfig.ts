import generatedPortfolio from './generated_portfolio.json';

export interface Testimonial {
  id: string;
  pullQuote: string;
  quote: string;
  coupleName: string;
  location: string;
  venue: string;
  date: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Couples' | 'Maternity' | 'Graduation' | 'Preschool' | 'Fine Art';
  location: string;
  image: string;
  guestCount: string;
  description: string;
  photographer: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  author: string;
}

export interface ServiceTier {
  id: string;
  title: string;
  subtitle: string;
  priceStarting: string;
  badge?: string;
  description: string;
  features: string[];
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  image: string;
  description: string;
  highlights: string[];
}

export const siteConfig = {
  businessName: "United Stories by Arun",
  businessTagline: "Authentic, Emotional & Fine Art Imagery",
  businessSubtext: "Capturing timeless memories through storytelling photography for over 12 years in London & the UK.",
  plannerName: "Arun Meluha",
  plannerTitle: "Founder & Lead Photographer",
  location: "London, UK",
  email: "info@unitedstoriesbyarun.co.uk",
  phone: "+44 7769 500815",
  turnaroundGuarantee: "Edited images delivered within 5 working days.",
  experienceYears: "12+ Years",
  instagram: "https://www.instagram.com/united_stories_by__arun/",
  whatsapp: "https://wa.me/c/26882435186779",

  // Using Video-87580.mp4 exclusively for the hero background
  heroVideoSrc: "/Video-87580.mp4",

  bio: {
    tagline: "Capturing timeless memories through storytelling photography for over 12 years.",
    shortBio: "Capturing timeless memories through storytelling photography for over 12 years. Based in the UK, I blend passion, emotion, and culture to create meaningful visuals. Let’s tell your story—beautifully and authentically.",
    extendedBio: [
      "Capturing timeless memories through storytelling photography for over 12 years. Based in the UK, I blend passion, emotion, and culture to create meaningful visuals. Let’s tell your story—beautifully and authentically.",
      "Whether documenting a romantic central London couple shoot, a glowing maternity portrait, or a joyous preschool milestone, every session is approached with artistic dedication, patience, and fine-art color grading.",
      "Guarantee: All high-resolution edited images are delivered in your private online gallery within 5 working days."
    ],
    photo: "/arun.webp"
  },

  heroSlides: [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80",
      tagline: "Authentic, Emotional & Fine Art",
      subtext: "Storytelling photography based in London & across the UK for over 12 years.",
      ctaText: "Explore Collections",
      ctaLink: "/weddings"
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80",
      tagline: "Love in London Sessions",
      subtext: "Romantic couple & engagement portraiture in iconic London locations.",
      ctaText: "Book Couple Session",
      ctaLink: "/contact"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=80",
      tagline: "Motherhood & Milestone Portraiture",
      subtext: "Maternity, early childhood, and graduation stories.",
      ctaText: "View Portfolio",
      ctaLink: "/portfolio"
    }
  ],

  services: [
    {
      id: "motherhood-london",
      title: "Motherhood in London – Maternity Photoshoot ✨",
      subtitle: "Professional maternity photoshoot in Central London celebrating the beauty of motherhood.",
      priceStarting: "£200.00",
      badge: "Popular Milestone",
      description: "Celebrate the beauty of motherhood with a professional maternity photoshoot in Central London.",
      features: [
        "1 Hour Photoshoot",
        "Central London Location (Westminster, Big Ben, Tower Bridge, London Eye & more)",
        "20 Professionally Edited Images",
        "All Raw Images Included",
        "Online Gallery Delivery",
        "Suitable for Solo, Couple & Family Photos",
        "Fast 5 working days delivery guarantee"
      ]
    },
    {
      id: "love-in-london",
      title: "Love in London – Couple Photoshoot",
      subtitle: "2-Hour Photoshoot in 2 iconic Central London locations",
      priceStarting: "£200.00",
      badge: "Signature Session",
      description: "Celebrate your love with a romantic couple photoshoot in the heart of Central London. Perfect for anniversaries, engagements, or simply capturing memories together.",
      features: [
        "📸 2-Hour Photoshoot | 2 Locations of your choice",
        "Professional guidance and posing help throughout the shoot",
        "High-quality edited photo gallery to remember your day",
        "Perfect for anniversaries, engagements, or memories together",
        "Edited images delivered within 5 working days"
      ]
    },
    {
      id: "preschool-portrait",
      title: "Preschool Portrait Session (Age 2–5)",
      subtitle: "Magical early childhood photoshoot capturing unique expressions & personality",
      priceStarting: "£150.00",
      badge: "Childhood Milestones",
      description: "Celebrate the joy and innocence of early childhood with a magical preschool photoshoot. Perfect for ages 2 to 5, this session captures your little one’s unique expressions, personality, and milestones in a natural and artistic style.",
      features: [
        "📸 1-Hour outdoor shoot",
        "15 High-resolution edited images",
        "Online gallery for easy download",
        "Outfit guidance and styling tips",
        "Captures unique expressions & personality in a natural, artistic style",
        "Edited images delivered within 5 working days"
      ]
    }
  ] as ServiceTier[],

  destinations: [
    {
      id: "london",
      name: "London & Home Counties",
      region: "United Kingdom",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      description: "Historic grand venues, regal cityscapes, candlelit conservatories, and iconic London locations like Westminster, Big Ben & Tower Bridge.",
      highlights: ["Iconic London Landmarks", "Historic Manor Estates", "Regal City Architecture"]
    }
  ] as Destination[],

  portfolio: generatedPortfolio as PortfolioItem[],

  testimonials: [
    {
      id: "t1",
      pullQuote: "Pure Emotion & Storytelling Magic",
      quote: "Arun has over 12 years of experience and it truly shows. He captured our London couple session so authentically. We received our fully edited gallery in just 5 working days!",
      coupleName: "Genevieve & Alexander",
      location: "London, UK",
      venue: "Tower Bridge & Westminster",
      date: "2026",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "t2",
      pullQuote: "Breathtaking Maternity Story",
      quote: "Our Motherhood in London maternity session was incredible. Arun guided us effortlessly at Big Ben and the London Eye. Having all raw images plus 20 gorgeous edits delivered so fast was amazing.",
      coupleName: "Camille & Julian",
      location: "London, UK",
      venue: "Central London Landmark Shoot",
      date: "2026",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "t3",
      pullQuote: "Magical Preschool Portrait Session",
      quote: "Arun was so patient and wonderful with our 3-year-old daughter. The outdoor shoot felt natural and playful, and the 15 edited photos capture her true personality beautifully.",
      coupleName: "Eleanor & Family",
      location: "London, UK",
      venue: "London Park Outdoor Shoot",
      date: "2026",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=400&q=80"
    }
  ] as Testimonial[],

  blogPosts: [
    {
      id: "b1",
      slug: "motherhood-in-london-maternity-photoshoot",
      title: "Motherhood in London: Planning Your Iconic Central London Maternity Shoot",
      category: "Maternity Guide",
      readTime: "4 min read",
      publishDate: "August 2026",
      excerpt: "Tips for celebrating the beauty of motherhood at iconic London locations like Westminster, Big Ben, and Tower Bridge.",
      coverImage: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1000&q=80",
      author: "Arun",
      content: [
        "Motherhood is one of life's most profound chapters. Celebrating this journey against the backdrop of iconic Central London locations like Westminster, Big Ben, Tower Bridge, and the London Eye creates timeless art.",
        "With 20 professionally edited images, all raw files included, and a fast 5 working day gallery turnaround, your maternity story is preserved with care."
      ]
    },
    {
      id: "b2",
      slug: "love-in-london-couple-photoshoot-guide",
      title: "Love in London: Making the Most of Your 2-Hour Central London Couple Session",
      category: "Couple Guide",
      readTime: "5 min read",
      publishDate: "August 2026",
      excerpt: "How to choose 2 complimentary London locations and feel natural in front of the lens with professional posing guidance.",
      coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
      author: "Arun",
      content: [
        "A 2-hour couple photoshoot allows you to explore two distinct London settings — from romantic cobbled alleys to sweeping river views along the Thames.",
        "With over 12 years of storytelling photography experience, Arun provides comfortable, natural posing help so you can simply focus on each other."
      ]
    },
    {
      id: "b3",
      slug: "preschool-portrait-session-tips",
      title: "Preschool Portraits (Age 2–5): Capturing Genuine Early Childhood Joy",
      category: "Childhood Milestones",
      readTime: "4 min read",
      publishDate: "August 2026",
      excerpt: "Why outdoor, relaxed portraiture brings out your toddler's genuine expressions and personality.",
      coverImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80",
      author: "Arun",
      content: [
        "Early childhood passes in a blink. Our 1-hour outdoor preschool sessions for ages 2 to 5 give little ones the freedom to play, laugh, and express themselves naturally.",
        "We provide complete outfit guidance and deliver 15 high-resolution edited images in your private online gallery within 5 working days."
      ]
    }
  ] as BlogPost[],

  secondaryEvents: [
    {
      id: "e1",
      title: "Motherhood in London – Maternity Photoshoot ✨",
      image: "/portfolio/maternity/01.webp",
      description: "Celebrate the beauty of motherhood with a professional maternity photoshoot in Central London (£200.00)."
    },
    {
      id: "e2",
      title: "Love in London – Couple Photoshoot",
      image: "/portfolio/pre-wedding/01_1.webp",
      description: "2-Hour photoshoot across 2 Central London locations capturing your authentic love story (£200.00)."
    },
    {
      id: "e3",
      title: "Graduation & Academic Honors",
      image: "/portfolio/graduation/07.webp",
      description: "Timeless, dignified graduation portraits for students and families celebrating major academic achievements."
    },
    {
      id: "e4",
      title: "Preschool Portrait Session (Age 2–5)",
      image: "/portfolio/preschool/preschool_01.webp",
      description: "Magical 1-hour outdoor shoot capturing your little one's expressions and early childhood joy (£150.00)."
    }
  ]
};
