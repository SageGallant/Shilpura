export type Product = {
  id: string;
  title: string;
  slug: string;
  price: number;
  origin: string;
  artisan: string;
  artisanId: string;
  description: string;
  details: string[];
  category: string;
  subcategory?: string;
  materials: string[];
  dimensions?: string;
  weight?: string;
  featured: boolean;
  new: boolean;
  sustainabilityBadges: string[];
  images: string[];
  related: string[];
};

export const products: Product[] = [
  {
    id: "ceramic-vase-01",
    title: "Terracotta Hand-Painted Vase",
    slug: "terracotta-hand-painted-vase",
    price: 425,
    origin: "Morocco",
    artisan: "Amina Mansouri",
    artisanId: "artisan-001",
    description:
      "This exquisite hand-painted vase is crafted using traditional Moroccan techniques passed down through generations. Each piece is individually formed from locally-sourced terracotta clay, dried in the sun, and then fired in a traditional kiln. The intricate patterns are hand-painted using natural pigments, making each vase a unique work of art that tells a story of cultural heritage and craftsmanship.",
    details: [
      "Handcrafted from natural terracotta clay",
      "Hand-painted with natural pigments",
      "Traditional firing techniques",
      "Water-resistant interior",
      "Each piece is unique with slight variations in pattern and color",
    ],
    category: "ceramics",
    subcategory: "vases",
    materials: ["terracotta", "natural pigments"],
    dimensions: '8" x 8" x 12"',
    weight: "2.5 lbs",
    featured: true,
    new: true,
    sustainabilityBadges: ["eco-friendly-materials", "traditional-craft"],
    images: [
      "/images/Products/Terracotta1.png",
      "/images/Products/Terracotta2.png",
      "/images/Products/Terracotta3.png",
    ],
    related: ["ceramic-bowl-01", "ceramic-plate-set-01", "ceramic-vase-02"],
  },
  {
    id: "textile-tapestry-01",
    title: "Hand-Woven Wall Tapestry",
    slug: "hand-woven-wall-tapestry",
    price: 1250,
    origin: "Peru",
    artisan: "Isabella Rodriguez",
    artisanId: "artisan-002",
    description:
      "This magnificent wall tapestry is meticulously handwoven by master weaver Isabella Rodriguez, who draws inspiration from ancient Andean textile traditions. Using a traditional backstrap loom, she weaves locally-sourced alpaca wool that has been naturally dyed using plants, minerals, and insects from the surrounding mountains. The geometric patterns and symbols embedded in the design tell stories of Peruvian culture and history, creating a piece that serves as both beautiful decor and cultural preservation.",
    details: [
      "Handwoven on a traditional backstrap loom",
      "Made with 100% alpaca wool",
      "Natural dyes from plants and minerals",
      "Takes approximately 3 weeks to complete",
      "Includes hanging hardware and care instructions",
    ],
    category: "textiles",
    subcategory: "wall-hangings",
    materials: ["alpaca wool", "natural dyes"],
    dimensions: '36" x 48"',
    weight: "3 lbs",
    featured: true,
    new: false,
    sustainabilityBadges: [
      "eco-friendly-materials",
      "traditional-craft",
      "fair-trade",
    ],
    images: [
      "/images/Products/Woven_Tapestry1.png",
      "/images/Products/Woven_Tapestry2.png",
      "/images/Products/Woven_Tapestry3.png",
    ],
    related: ["textile-pillow-01", "textile-rug-01", "textile-tapestry-02"],
  },
  {
    id: "jewelry-necklace-01",
    title: "Sterling Silver & Turquoise Necklace",
    slug: "sterling-silver-turquoise-necklace",
    price: 695,
    origin: "Mexico",
    artisan: "Carlos Mendez",
    artisanId: "artisan-003",
    description:
      "This stunning necklace features ethically sourced turquoise set in hand-forged sterling silver. Master silversmith Carlos Mendez combines traditional Taxco silversmithing techniques with contemporary design elements to create a piece that honors Mexican jewelry heritage while appealing to modern aesthetics. Each stone is carefully selected for its unique color patterns and expertly cut and polished before being set by hand.",
    details: [
      "Handcrafted sterling silver (.925)",
      "Ethically sourced natural turquoise",
      "Traditional Taxco silversmithing techniques",
      "Adjustable chain length",
      "Comes in a handmade wooden gift box",
    ],
    category: "jewelry",
    subcategory: "necklaces",
    materials: ["sterling silver", "turquoise"],
    dimensions: '18" chain with 1.25" pendant',
    weight: "0.8 oz",
    featured: true,
    new: true,
    sustainabilityBadges: [
      "eco-friendly-materials",
      "traditional-craft",
      "ethical-sourcing",
    ],
    images: [
      "/images/Products/Silver_Turquoise1.png",
      "/images/Products/Silver_Turquoise2.png",
      "/images/Products/Silver_Turquoise3.png",
    ],
    related: [
      "jewelry-bracelet-01",
      "jewelry-earrings-01",
      "jewelry-necklace-02",
    ],
  },
  {
    id: "home-decor-basket-01",
    title: "Handwoven Banana Leaf Basket",
    slug: "handwoven-banana-leaf-basket",
    price: 315,
    origin: "Ghana",
    artisan: "Kwame Osei",
    artisanId: "artisan-004",
    description:
      "This beautiful basket is handwoven by Kwame Osei using sustainable banana leaf fibers. Drawing on generations of Ghanaian weaving traditions, Kwame creates baskets that blend functionality with artistic expression. The natural fibers are carefully harvested, dried, and dyed using plant-based colors before being meticulously woven into this sturdy and decorative basket. The distinctive patterns represent symbols of prosperity and harmony in Ghanaian culture.",
    details: [
      "Handwoven from sustainable banana leaf fibers",
      "Natural plant-based dyes",
      "Water-resistant treatment",
      "Sturdy construction for everyday use",
      "Each piece has unique variations in pattern and color",
    ],
    category: "home-decor",
    subcategory: "baskets",
    materials: ["banana leaf", "natural dyes"],
    dimensions: '12" diameter x 10" height',
    weight: "1.2 lbs",
    featured: false,
    new: true,
    sustainabilityBadges: [
      "eco-friendly-materials",
      "traditional-craft",
      "fair-trade",
    ],
    images: [
      "/images/Products/Banana_Basket1.png",
      "/images/Products/Banana_Basket2.png",
      "/images/Products/Banana_Basket3.png",
    ],
    related: [
      "home-decor-basket-02",
      "home-decor-tray-01",
      "textile-pillow-01",
    ],
  },
  {
    id: "ceramic-bowl-01",
    title: "Hand-Thrown Ceramic Bowl Set",
    slug: "hand-thrown-ceramic-bowl-set",
    price: 345,
    origin: "Japan",
    artisan: "Yuki Tanaka",
    artisanId: "artisan-005",
    description:
      "This set of four ceramic bowls is hand-thrown by master potter Yuki Tanaka, who works in the traditional Japanese wabi-sabi aesthetic that finds beauty in imperfection. Each bowl is crafted from local clay and glazed with a distinctive blue celadon finish that highlights the subtle variations in texture. The glazing technique involves multiple firings in a wood-fired kiln, creating unique patterns that cannot be replicated.",
    details: [
      "Set of four hand-thrown ceramic bowls",
      "Made from locally-sourced clay",
      "Traditional Japanese glazing techniques",
      "Microwave and dishwasher safe",
      "Each bowl is unique with subtle variations",
    ],
    category: "ceramics",
    subcategory: "bowls",
    materials: ["stoneware clay", "celadon glaze"],
    dimensions: '6" diameter x 3" height (each)',
    weight: "0.8 lbs (each)",
    featured: false,
    new: false,
    sustainabilityBadges: ["eco-friendly-materials", "traditional-craft"],
    images: [
      "/images/Products/Ceramic_Bowl1.png",
      "/images/Products/Ceramic_Bowl2.png",
      "/images/Products/Ceramic_Bowl3.png",
    ],
    related: ["ceramic-vase-01", "ceramic-plate-set-01", "ceramic-mug-01"],
  },
  {
    id: "textile-pillow-01",
    title: "Block-Printed Cotton Pillow Cover",
    slug: "block-printed-cotton-pillow-cover",
    price: 225,
    origin: "India",
    artisan: "Priya Sharma",
    artisanId: "artisan-006",
    description:
      "This exquisite pillow cover showcases the ancient Indian art of block printing. Artisan Priya Sharma carves intricate wooden blocks by hand and uses them to stamp patterns onto organic cotton fabric with natural indigo dye. The traditional motifs are inspired by Rajasthani architecture and nature, creating a piece that brings cultural heritage into contemporary home decor. Each print is slightly different, making every pillow cover a unique work of art.",
    details: [
      "Hand block-printed using traditional techniques",
      "100% GOTS-certified organic cotton",
      "Natural indigo dye from plants",
      "Hidden zipper closure",
      "Insert not included",
    ],
    category: "textiles",
    subcategory: "cushions",
    materials: ["organic cotton", "natural indigo dye"],
    dimensions: '18" x 18"',
    weight: "0.5 lbs",
    featured: false,
    new: true,
    sustainabilityBadges: [
      "eco-friendly-materials",
      "traditional-craft",
      "fair-trade",
    ],
    images: [
      "/images/Products/Pillow_Cover1.png",
      "/images/Products/Pillow_Cover2.png",
      "/images/Products/Pillow_Cover3.png",
    ],
    related: [
      "textile-tapestry-01",
      "textile-bedcover-01",
      "textile-pillow-02",
    ],
  },
  {
    id: "jewelry-bracelet-01",
    title: "Handcrafted Brass Cuff Bracelet",
    slug: "handcrafted-brass-cuff-bracelet",
    price: 275,
    origin: "Kenya",
    artisan: "Amara Okafor",
    artisanId: "artisan-007",
    description:
      "This striking cuff bracelet is handcrafted by Amara Okafor, who uses traditional metalworking techniques passed down through generations of Kenyan artisans. Each piece begins as recycled brass that is melted, hammered, and carefully shaped by hand. The distinctive textured finish is created through patient hammering that produces a unique pattern on each bracelet. The design combines traditional Kenyan motifs with contemporary styling for a piece that bridges cultures and eras.",
    details: [
      "Handcrafted from recycled brass",
      "Traditional hammering techniques",
      "Adjustable size fits most wrists",
      "Naturally develops a beautiful patina over time",
      "Comes in a handwoven sisal gift pouch",
    ],
    category: "jewelry",
    subcategory: "bracelets",
    materials: ["recycled brass"],
    dimensions: '2.5" diameter, 1" width',
    weight: "1.2 oz",
    featured: false,
    new: false,
    sustainabilityBadges: [
      "eco-friendly-materials",
      "traditional-craft",
      "fair-trade",
    ],
    images: [
      "/images/Products/Brass_Bracelet1.png",
      "/images/Products/Brass_Bracelet2.png",
      "/images/Products/Brass_Bracelet3.png",
    ],
    related: [
      "jewelry-necklace-01",
      "jewelry-earrings-01",
      "jewelry-bracelet-02",
    ],
  },
  {
    id: "textile-rug-01",
    title: "Hand-Knotted Wool Rug",
    slug: "hand-knotted-wool-rug",
    price: 580,
    origin: "Turkey",
    artisan: "Mehmet Yilmaz",
    artisanId: "artisan-008",
    description:
      "This stunning rug is hand-knotted by master weaver Mehmet Yilmaz using techniques that have been preserved in his family for five generations. Each rug takes several months to complete, with thousands of individual knots tied by hand using naturally dyed wool from local sheep. The design features traditional Anatolian motifs that tell stories of rural Turkish life, with symbols representing fertility, protection, and good fortune. The color palette of deep indigos, rich reds, and warm neutrals is achieved using plant-based dyes.",
    details: [
      "Hand-knotted using traditional techniques",
      "100% locally-sourced wool",
      "Natural plant-based dyes",
      "Approximately 100 knots per square inch",
      "Takes 3-4 months to complete",
    ],
    category: "textiles",
    subcategory: "rugs",
    materials: ["wool", "natural dyes"],
    dimensions: "4' x 6'",
    weight: "18 lbs",
    featured: true,
    new: false,
    sustainabilityBadges: [
      "eco-friendly-materials",
      "traditional-craft",
      "fair-trade",
    ],
    images: [
      "/images/Products/Wool_Rug1.png",
      "/images/Products/Wool_Rug2.png",
      "/images/Products/Wool_Rug3.png",
    ],
    related: ["textile-pillow-01", "textile-tapestry-01", "textile-rug-02"],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.new);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getProducts = (): Product[] => {
  return products;
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];

  return product.related
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);
};
