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
  category: 'Weddings' | 'Couples' | 'Maternity' | 'Graduation' | 'Fine Art';
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
  businessSubtext: "Cinematic wedding, couple, and milestone portraiture based in London and available worldwide.",
  plannerName: "Arun",
  plannerTitle: "Founder & Lead Photographer",
  location: "London, UK",
  email: "hello@unitedstoriesbyarun.com",
  phone: "+44 (0) 20 7946 0912",
  instagram: "https://www.instagram.com/united_stories_by__arun/",
  facebook: "facebook.com/unitedstoriesbyarun",
  pinterest: "pinterest.com/unitedstoriesbyarun",

  // Using Video-87580.mp4 exclusively for the hero background
  heroVideoSrc: "/Video-87580.mp4",

  bio: {
    tagline: "Capturing authentic human connection through a cinematic, fine art lens.",
    shortBio: "Hi, I'm Arun. I specialize in cinematic, emotional, and fine art wedding and couple photography based in London. My approach is grounded in quiet authenticity, natural light, and storytelling so every tear, laugh, and glance is preserved forever.",
    extendedBio: [
      "I believe that true photography isn't posed — it's felt. Whether I'm documenting a grand wedding in London, an intimate couple session along the Thames, or celebrating life milestones like maternity and graduation, my goal is to create imagery that evokes deep emotion for generations.",
      "My team and I work closely with every couple and family to ensure a relaxed, natural environment where your genuine story shines through effortlessly."
    ],
    photo: "/arun.webp"
  },

  heroSlides: [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80",
      tagline: "Authentic, Emotional & Fine Art",
      subtext: "Cinematic wedding & couple photography in London & worldwide.",
      ctaText: "Explore Weddings",
      ctaLink: "/weddings"
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80",
      tagline: "Destination Celebrations",
      subtext: "From London historic venues to European coastal estates.",
      ctaText: "Discover Destinations",
      ctaLink: "/destinations"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=80",
      tagline: "Milestone Portraiture",
      subtext: "Couples, maternity, and graduation sessions in London.",
      ctaText: "View Our Work",
      ctaLink: "/portfolio"
    }
  ],

  services: [
    {
      id: "wedding-photography",
      title: "Cinematic Wedding Photography",
      subtitle: "Full-day wedding documentation with fine art editorial curation",
      priceStarting: "Inquire for Pricing",
      badge: "Signature Collection",
      description: "Bespoke full-day wedding documentation tailored to your vision.",
      features: [
        "To be filled",
        "Custom photography quote on request"
      ]
    },
    {
      id: "couple-sessions",
      title: "Couple & Engagement Stories",
      subtitle: "Intimate, cinematic couple portraiture across London",
      priceStarting: "Inquire for Pricing",
      description: "Intimate couple and engagement portraiture across London.",
      features: [
        "To be filled",
        "Custom photography quote on request"
      ]
    },
    {
      id: "maternity-graduation",
      title: "Maternity & Graduation Milestones",
      subtitle: "Authentic portrait sessions capturing personal & family milestones",
      priceStarting: "Inquire for Pricing",
      description: "Fine-art maternity and graduation milestone portraiture.",
      features: [
        "To be filled",
        "Custom photography quote on request"
      ]
    }
  ] as ServiceTier[],

  destinations: [
    {
      id: "london",
      name: "London & Home Counties",
      region: "United Kingdom",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      description: "Historic grand venues, regal cityscapes, candlelit conservatories, and intimate London garden receptions.",
      highlights: ["Historic Manor Estates", "Regal City Architecture", "Iconic Thames & Park Sessions"]
    },
    {
      id: "lake-como",
      name: "Lake Como & Tuscany",
      region: "Italy",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      description: "Classic Italian romance amidst Renaissance villas, lakeside garden ceremonies, and golden hour light.",
      highlights: ["Historic Lakeside Villas", "Sunset Boat Shoots", "Vineyard Receptions"]
    },
    {
      id: "provence",
      name: "Provence & French Riviera",
      region: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      description: "Lavender blooms on sun-kissed châteaux grounds, Mediterranean warmth, and fine art golden hour portraiture.",
      highlights: ["Château Gardens", "Lavender Fields", "Côte d'Azur Terraces"]
    },
    {
      id: "amalfi",
      name: "Amalfi Coast & Capri",
      region: "Italy",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      description: "Dramatic cliffside ocean panoramas, Mediterranean citrus blooms, and intimate seaside portraiture.",
      highlights: ["Cliffside Ocean Views", "Limoncello Groves", "Terrace Ceremonies"]
    }
  ] as Destination[],

  portfolio: generatedPortfolio as PortfolioItem[],

  testimonials: [
    {
      id: "t1",
      pullQuote: "Pure Emotion & Cinematic Magic",
      quote: "Arun transformed our wedding day into a work of art. Looking through our gallery felt like watching a fine art movie of our love. He made us feel completely relaxed, present, and comfortable.",
      coupleName: "Genevieve & Alexander",
      location: "London & Lake Como",
      venue: "Villa Balbiano",
      date: "September 2025",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "t2",
      pullQuote: "Breathtaking & Authentic Storytelling",
      quote: "Working with United Stories by Arun was the best choice for our wedding. Every picture captures true raw emotion without looking forced or staged. Our families were moved to tears.",
      coupleName: "Camille & Julian",
      location: "London, UK",
      venue: "Mayfair Townhouse",
      date: "June 2025",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "t3",
      pullQuote: "A True Artist of Light and Heart",
      quote: "Arun did both our engagement couple session and our maternity portraits. His eye for light, tone, and genuine human connection is extraordinary. We will treasure these forever.",
      coupleName: "Eleanor & James",
      location: "London, UK",
      venue: "Richmond Park",
      date: "October 2025",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=400&q=80"
    }
  ] as Testimonial[],

  blogPosts: [
    {
      id: "b1",
      slug: "cinematic-wedding-photography-london",
      title: "Mastering Natural Light: The Secrets of Cinematic Fine Art Photography",
      category: "Photography Insights",
      readTime: "4 min read",
      publishDate: "July 28, 2026",
      excerpt: "Discover how we harness London's atmospheric light to create soft, romantic, and emotional imagery that stands the test of time.",
      coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      author: "Arun",
      content: [
        "Cinematic photography is rooted in real human emotion. Rather than forcing rigid poses, we focus on quiet moments — a subtle hand touch, a shared laugh, or soft morning light through cathedral glass.",
        "In London, our unique weather offers some of the softest, most romantic natural lighting in the world. Learning to compose with shadows and natural reflections brings out a deep fine art painterly quality."
      ]
    },
    {
      id: "b2",
      slug: "preparing-for-your-couple-session",
      title: "How to Feel Completely Relaxed & Natural During Your Couple Session",
      category: "Client Guide",
      readTime: "5 min read",
      publishDate: "June 15, 2026",
      excerpt: "Nervous in front of the camera? Here are our top tips for enjoying a authentic, romantic couple shoot across London.",
      coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
      author: "Arun",
      content: [
        "Most couples tell us 'we're not camera confident' before their session! That's completely normal. Our goal is never to have you pose stiffly, but to create a date-night experience where you focus on each other.",
        "We choose serene, picturesque London locations at golden hour so you have room to breathe, walk, and share genuine laughter."
      ]
    },
    {
      id: "b3",
      slug: "celebrating-life-milestones-maternity-graduation",
      title: "Beyond Weddings: Preserving Life’s Great Milestones in Fine Art Style",
      category: "Milestones",
      readTime: "4 min read",
      publishDate: "May 20, 2026",
      excerpt: "From glowing maternity portraits to graduation honors, why milestone photography deserves the same cinematic care as your wedding day.",
      coverImage: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1000&q=80",
      author: "Arun",
      content: [
        "Life is a tapestry of milestone chapters. A glowing maternity portrait or a proud graduation portrait is a testament to growth, legacy, and joy.",
        "We bring the exact same fine art lens, color palette, and emotional sensitivity to milestone portraiture as we do to grand international weddings."
      ]
    }
  ] as BlogPost[],

  secondaryEvents: [
    {
      id: "e1",
      title: "Maternity & Family Stories",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1000&q=80",
      description: "Intimate fine art maternity and early family portraiture captured in natural light in London or outdoor estate settings."
    },
    {
      id: "e2",
      title: "Graduation & Academic Honors",
      image: "/portfolio/graduation/07.webp",
      description: "Timeless, dignified graduation portraits for students and families celebrating major academic achievements."
    },
    {
      id: "e3",
      title: "Anniversary & Private Celebrations",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
      description: "Cinematic documentation for silver & golden anniversaries, milestone birthday galas, and private family reunions."
    }
  ]
};
