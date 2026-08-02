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
  category: 'Coastal' | 'Estate' | 'European' | 'Intimate' | 'Modern';
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
  businessName: "[BUSINESS NAME]",
  businessTagline: "Weddings, Planned Beautifully",
  businessSubtext: "Editorial luxury wedding planning & design for discerning couples worldwide.",
  plannerName: "[PLANNER NAME]",
  plannerTitle: "Founder & Creative Director",
  location: "[LOCATION]",
  email: "hello@aureliaweddings.com",
  phone: "+1 (555) 234-5678",
  instagram: "@aureliaweddings",
  facebook: "facebook.com/aureliaweddings",
  pinterest: "pinterest.com/aureliaweddings",

  // Set heroVideoSrc to an MP4 video file path (e.g. "/hero-video.mp4") when the client provides one!
  heroVideoSrc: undefined as string | undefined,

  // GIF fallback gallery
  heroGifs: [
    { src: "/weddinggif.gif", durationMs: 3400 },
  ] as HeroGifItem[],

  bio: {
    tagline: "Crafting timeless, soul-stirring celebrations with meticulous artistry and heart.",
    shortBio: "Hi, I'm [PLANNER NAME]. For over a decade, I've had the honor of transforming extraordinary love stories into unforgettable, high-end editorial celebrations. Based in [LOCATION] and available worldwide, my approach combines quiet luxury, intentional design, and seamless execution so you can savor every single moment.",
    extendedBio: [
      "I believe the most unforgettable weddings aren't just visually breathtaking — they evoke a deep sense of intimacy, warmth, and emotion. Every table linen, candle glow, and floral sculpture should feel like an extension of your shared aesthetic.",
      "My team and I limit our annual client intake to a select handful of celebrations each year. This guarantees that your wedding receives our full artistic devotion, strategic precision, and warm personal guidance from day one to your final farewell."
    ],
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
  },

  heroSlides: [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80",
      tagline: "Weddings, Planned Beautifully",
      subtext: "Elegance in every detail. Intimacy in every moment.",
      ctaText: "Explore Our Weddings",
      ctaLink: "/weddings"
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80",
      tagline: "Destination Celebrations",
      subtext: "From historic Italian villas to sun-drenched coastal estates.",
      ctaText: "Discover Destinations",
      ctaLink: "/destinations"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=80",
      tagline: "Bespoke Editorial Design",
      subtext: "Crafted exclusively for discerning, modern couples.",
      ctaText: "View Our Work",
      ctaLink: "/portfolio"
    }
  ],

  services: [
    {
      id: "full-planning",
      title: "Full Planning & Editorial Design",
      subtitle: "Comprehensive end-to-end orchestration from concept to execution",
      priceStarting: "Custom Quote",
      badge: "Most Popular",
      description: "Our signature white-glove service covering every creative detail, financial management, vendor curation, multi-day guest experiences, and day-of command.",
      features: [
        "Complete event design palette, moodboards & custom 3D spatial renders",
        "Curated access to premier international floral artists, caterers & photographers",
        "Contract negotiation & budget tracking software management",
        "Full guest concierge, travel coordination & RSVP tracking",
        "Unlimited planning sessions & site visits",
        "Complete multi-day event management (Rehearsal, Wedding, Farewell Brunch)"
      ]
    },
    {
      id: "partial-planning",
      title: "Design & Partial Orchestration",
      subtitle: "For couples with established venues who require editorial design leadership",
      priceStarting: "Bespoke Package",
      description: "Ideal for couples who have secured key elements but want high-caliber styling, vendor alignment, timeline structuring, and seamless execution.",
      features: [
        "Editorial styling, color scheme & table setting curation",
        "Vendor recommendations and gap analysis",
        "Comprehensive master production timeline & floorplan creation",
        "Final month vendor walk-throughs & logistical alignment",
        "Full day-of coordination team (up to 12 hours on-site)"
      ]
    },
    {
      id: "destination-weddings",
      title: "Destination Weddings & Multi-Day Celebrations",
      subtitle: "Seamless global celebrations tailored for international guests",
      priceStarting: "Global Bespoke",
      description: "Navigating local customs, travel logistics, welcome dinners, guest accommodations, and grand wedding days anywhere in the world.",
      features: [
        "Bilingual site scouting & local vendor procurement",
        "Guest travel logistics, airport transfers & hotel room blocks",
        "Welcome party & farewell brunch curation",
        "On-site team deployment 3 days prior to main event",
        "Custom guest digital guides & itinerary branding"
      ]
    }
  ] as ServiceTier[],

  destinations: [
    {
      id: "lake-como",
      name: "Lake Como & Tuscany",
      region: "Italy",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      description: "Classic Italian romance amidst Renaissance villas, lakeside garden receptions, and candlelit courtyard banquets.",
      highlights: ["Historic Lakeside Estates", "Private Boat Transfers", "Michelin-Starred Culinary Curation"]
    },
    {
      id: "provence",
      name: "Provence & French Riviera",
      region: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      description: "Lavender scent on sun-kissed châteaux grounds, Côte d'Azur elegance, and refined French gastronomy.",
      highlights: ["Historic Châteaux", "Vineyard Receptions", "Artisanal Champagne Pairings"]
    },
    {
      id: "amalfi",
      name: "Amalfi Coast & Capri",
      region: "Italy",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      description: "Dramatic cliffside ocean panoramas, Mediterranean citrus blooms, and intimate terrace dinner celebrations.",
      highlights: ["Cliffside Terraces", "Limoncello Tastings", "Exclusive Beach Club Welcome Parties"]
    },
    {
      id: "california",
      name: "Napa Valley & Big Sur",
      region: "United States",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      description: "Organic wine country luxury under golden California light, redwood groves, and modern architectural estates.",
      highlights: ["Estate Vineyards", "Farm-to-Table Gastronomy", "Sunset Coastal Ceremonies"]
    }
  ] as Destination[],

  portfolio: [
    {
      id: "p1",
      title: "Genevieve & Alexander",
      category: "European",
      location: "Villa Balbiano, Lake Como",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      guestCount: "140 Guests",
      description: "An ethereal 3-day weekend celebration featuring white garden roses, crystal chandeliers under open skies, and a fireworks finale over Lake Como.",
      photographer: "Editorial Fine Art Co.",
      featured: true
    },
    {
      id: "p2",
      title: "Camille & Julian",
      category: "Estate",
      location: "Château de Tourreau, Provence",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      guestCount: "110 Guests",
      description: "Sun-kissed French country elegance with sprawling linen tablescapes, olive branch arches, and vintage champagne towers.",
      photographer: "Lumière Photography",
      featured: true
    },
    {
      id: "p3",
      title: "Sophia & Harrison",
      category: "Coastal",
      location: "Belmond Hotel Caruso, Ravello",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      guestCount: "85 Guests",
      description: "Cliffside intimacy overlooking the Tyrrhenian Sea with terracotta accents, hand-painted ceramic place settings, and acoustic Italian strings.",
      photographer: "Amalfi Fine Art",
      featured: true
    },
    {
      id: "p4",
      title: "Victoria & Marcus",
      category: "Modern",
      location: "Meadowood Estate, Napa Valley",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      guestCount: "160 Guests",
      description: "Warm neutral Minimalism featuring sculptural neutral florals, monolithic stone bar structures, and candlelit vineyard dining.",
      photographer: "Pacific Atelier",
      featured: true
    },
    {
      id: "p5",
      title: "Elena & Matteo",
      category: "Intimate",
      location: "Private Residence, Cotswolds",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      guestCount: "45 Guests",
      description: "An enchanted secret garden dinner party wrapped in warm ambient lighting, velvet linens, and wild English flora.",
      photographer: "Heritage Photo Studio",
      featured: true
    },
    {
      id: "p6",
      title: "Clara & Sebastian",
      category: "European",
      location: "Palacio de Sans Souci, Buenos Aires",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80",
      guestCount: "180 Guests",
      description: "Grand Beaux-Arts architecture paired with dramatic crimson roses, live orchestral performances, and candlelit ballrooms.",
      photographer: "Soler Fine Art",
      featured: true
    }
  ] as PortfolioItem[],

  testimonials: [
    {
      id: "t1",
      pullQuote: "Pure Magic & Calm Confidence",
      quote: "[PLANNER NAME] transformed what could have been an overwhelming process into pure joy. Her calm demeanor, impeccable eye for editorial design, and relentless dedication meant our Lake Como wedding was breathtaking beyond our wildest dreams.",
      coupleName: "Genevieve & Alexander",
      location: "Lake Como, Italy",
      venue: "Villa Balbiano",
      date: "September 2025",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "t2",
      pullQuote: "Flawless Execution Down to Every Candle",
      quote: "Working with [BUSINESS NAME] was the single best decision we made. Every single guest commented that it was the most beautiful, seamless wedding they had ever attended. We were able to fully immerse ourselves in love and celebration.",
      coupleName: "Camille & Julian",
      location: "Provence, France",
      venue: "Château de Tourreau",
      date: "June 2025",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "t3",
      pullQuote: "An Editorial Masterpiece",
      quote: "From our first design consultation, [PLANNER NAME] understood our aesthetic instantly. She elevated our ideas into something that looked straight out of Vogue Weddings while maintaining warmth and intimacy.",
      coupleName: "Victoria & Marcus",
      location: "Napa Valley, CA",
      venue: "Meadowood Estate",
      date: "October 2025",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=400&q=80"
    }
  ] as Testimonial[],

  blogPosts: [
    {
      id: "b1",
      slug: "art-of-editorial-tablescapes",
      title: "The Art of the Editorial Tablescape: Layering Texture, Light & Flora",
      category: "Design Inspiration",
      readTime: "4 min read",
      publishDate: "July 18, 2026",
      excerpt: "Discover how we blend warm organic linens, custom hand-blown glassware, and sculptural floral moments to create dining experiences guests talk about for years.",
      coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      author: "[PLANNER NAME]",
      content: [
        "Creating an editorial tablescape isn't about overcrowding the dining surface; it's about intentional balance, proportion, and texture.",
        "We always start with the tactile base — raw Belgian linen or soft stone-hued velvet. Layering contrasting materials like brushed brass cutlery, ribbed crystal stemware, and hand-torn calligraphy place cards creates immediate visual depth.",
        "When lighting your tables, vary the height of taper candles in brass or ceramic holders. As night falls, the soft flicker against warm neutral linens creates an atmosphere of pure romance."
      ]
    },
    {
      id: "b2",
      slug: "planning-destination-wedding-italy",
      title: "A Planner’s Guide to Hosting a Seamless Multi-Day Wedding in Italy",
      category: "Destination Guide",
      readTime: "6 min read",
      publishDate: "June 30, 2026",
      excerpt: "From navigating villa curfews and boat transfers to curating authentic regional tasting menus, here is how to host your dream Italian celebration effortlessly.",
      coverImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80",
      author: "[PLANNER NAME]",
      content: [
        "Hosting a destination wedding in Italy is an unforgettable experience for both couples and their guests. However, managing logistics across international borders requires strategic foresight.",
        "Start early with hotel room blocks and private group transportation. Lake Como and Amalfi road navigation can be intricate, so arranging private water taxis or dedicated shuttles keeps your weekend running like clockwork.",
        "Immerse your guests in local culture: welcome guests with a sunset spritz party overlooking olive groves, followed by a family-style Tuscan feast on evening one."
      ]
    },
    {
      id: "b3",
      slug: "curating-timeless-wedding-palette",
      title: "Warm Neutrals & Forest Greens: Curating a Palette That Never Dates",
      category: "Styling Advice",
      readTime: "5 min read",
      publishDate: "May 14, 2026",
      excerpt: "Trends come and go, but warm cream tones, forest greenery, and terracotta accents remain timelessly elegant across every season.",
      coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
      author: "[PLANNER NAME]",
      content: [
        "When couples ask how to ensure their wedding photos look as stunning 20 years from now as they do today, our answer is always the same: grounded, warm neutral palettes.",
        "Combining ivory, cream, deep forest sage, and soft terracotta allows natural textures — like stone, wood, and fresh foliage — to shine without overwhelming the eye.",
        "This color story adapts gracefully across all seasons, whether amidst a spring garden blossom or a candlelit autumn château dining room."
      ]
    }
  ] as BlogPost[],

  secondaryEvents: [
    {
      id: "e1",
      title: "Anniversary & Milestone Galas",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
      description: "Grand intimate gatherings celebrating silver & golden anniversaries, milestone birthdays, and family legacies with editorial elegance."
    },
    {
      id: "e2",
      title: "Rehearsal & Welcome Soirées",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80",
      description: "Setting the tone for your wedding weekend with casual luxury welcome cocktails, pizza parties in Italian gardens, or chic seaside dinners."
    },
    {
      id: "e3",
      title: "Farewell Brunches & After-Parties",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
      description: "Late-night speakeasy transitions and relaxed morning-after mimosa brunches to wrap up your celebration weekend in style."
    }
  ]
};
