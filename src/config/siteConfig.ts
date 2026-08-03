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

export interface HeroGifItem {
  src: string;
  durationMs: number;
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
  instagram: "@unitedstoriesbyarun",
  facebook: "facebook.com/unitedstoriesbyarun",
  pinterest: "pinterest.com/unitedstoriesbyarun",

  // Set heroVideoSrc to an MP4 video file path when provided by client
  heroVideoSrc: undefined as string | undefined,

  // GIF fallback hero background
  heroGifs: [
    { src: "/weddinggif.gif", durationMs: 3400 },
  ] as HeroGifItem[],

  bio: {
    tagline: "Capturing authentic human connection through a cinematic, fine art lens.",
    shortBio: "Hi, I'm Arun. I specialize in cinematic, emotional, and fine art wedding and couple photography based in London. My approach is grounded in quiet authenticity, natural light, and storytelling so every tear, laugh, and glance is preserved forever.",
    extendedBio: [
      "I believe that true photography isn't posed — it's felt. Whether I'm documenting a grand wedding in London, an intimate couple session along the Thames, or celebrating life milestones like maternity and graduation, my goal is to create imagery that evokes deep emotion for generations.",
      "My team and I work closely with every couple and family to ensure a relaxed, natural environment where your genuine story shines through effortlessly."
    ],
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
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
      priceStarting: "From £2,500",
      badge: "Signature Collection",
      description: "Our signature service covering complete wedding day storytelling, prep to late night dancing, full high-res digital gallery, and bespoke fine art album.",
      features: [
        "Full day coverage by Arun & secondary shooter",
        "Pre-wedding consultation & timeline planning",
        "High-resolution edited digital gallery with full printing rights",
        "Handcrafted luxury leather fine art album",
        "Complimentary engagement session in London",
        "Online private gallery for family & guests"
      ]
    },
    {
      id: "couple-sessions",
      title: "Couple & Engagement Stories",
      subtitle: "Intimate, cinematic couple portraiture across London's iconic landscapes",
      priceStarting: "From £550",
      description: "Relaxed, authentic couple portrait sessions designed to capture your unique dynamic in natural light across London or destination spots.",
      features: [
        "2 to 3 hour romantic portrait experience",
        "Multiple location setups & outfit guidance",
        "50+ retouched high-resolution digital images",
        "Sneak peek gallery delivered within 48 hours"
      ]
    },
    {
      id: "destination-weddings",
      title: "Destination Weddings & Elopements",
      subtitle: "Worldwide coverage for couples marrying outside the UK",
      priceStarting: "Custom Global",
      description: "Bringing our London fine art aesthetic to villas in Lake Como, châteaux in France, or cliffside terraces in Amalfi.",
      features: [
        "Multi-day event coverage (Welcome dinner, Wedding & Day-after)",
        "Travel & accommodation logistics managed by our team",
        "Pre-wedding scouting of local light & venue backdrops",
        "Bespoke boxed fine art print collection"
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

  portfolio: [
    {
      id: "p1",
      title: "Genevieve & Alexander",
      category: "Weddings",
      location: "Kensington Palace & Villa Balbiano",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      guestCount: "140 Guests",
      description: "An emotional, fine art wedding story featuring white garden roses, romantic candlelit dining, and a lakeside fireworks finale.",
      photographer: "United Stories by Arun",
      featured: true
    },
    {
      id: "p2",
      title: "Camille & Julian",
      category: "Couples",
      location: "Mayfair & Hyde Park, London",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      guestCount: "Intimate Couple Session",
      description: "A cinematic golden hour couple session wandering through autumn light in Mayfair and Hyde Park.",
      photographer: "United Stories by Arun",
      featured: true
    },
    {
      id: "p3",
      title: "Eleanor's Glow",
      category: "Maternity",
      location: "Richmond Park & Studio, London",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=80",
      guestCount: "Maternity Story",
      description: "An authentic, emotional fine art maternity portrait session celebrating new life in warm natural sunlight.",
      photographer: "United Stories by Arun",
      featured: true
    },
    {
      id: "p4",
      title: "Oxford Honors",
      category: "Graduation",
      location: "Oxford University & London",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
      guestCount: "Graduation Milestone",
      description: "A triumphant, timeless graduation portrait session capturing academic achievement with fine art polish.",
      photographer: "United Stories by Arun",
      featured: true
    },
    {
      id: "p5",
      title: "Sophia & Harrison",
      category: "Weddings",
      location: "Belmond Hotel Caruso, Ravello",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      guestCount: "85 Guests",
      description: "Cliffside intimacy overlooking the Tyrrhenian Sea with organic florals, hand-painted details, and emotional vow exchanges.",
      photographer: "United Stories by Arun",
      featured: true
    },
    {
      id: "p6",
      title: "Victoria & Marcus",
      category: "Fine Art",
      location: "Somerset House, London",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      guestCount: "Fine Art Session",
      description: "Editorial fine art portraiture utilizing classical stone shadows and soft natural light.",
      photographer: "United Stories by Arun",
      featured: true
    }
  ] as PortfolioItem[],

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
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80",
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
