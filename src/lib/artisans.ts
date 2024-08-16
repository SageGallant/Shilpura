export type Artisan = {
  id: string;
  name: string;
  slug: string;
  origin: string;
  location: string;
  craft: string;
  bio: string;
  story: string;
  techniques: string[];
  materials: string[];
  featuredImage: string;
  gallery: string[];
  sustainabilityPractices: string[];
  videos?: string[];
  social?: {
    instagram?: string;
    facebook?: string;
    website?: string;
  };
};

export const artisans: Artisan[] = [
  {
    id: "artisan-001",
    name: "Amina Mansouri",
    slug: "amina-mansouri",
    origin: "Morocco",
    location: "Fes, Morocco",
    craft: "Ceramic Art",
    bio: "Amina Mansouri is a third-generation ceramic artist from Fes, Morocco, known for her exceptional hand-painted terracotta works that blend traditional Moroccan patterns with contemporary design sensibilities.",
    story: `Amina Mansouri was born into a family of artisans in the ancient city of Fes, where pottery traditions date back more than a thousand years. As a young girl, she spent hours watching her grandfather skillfully shape clay on his wheel, and her grandmother meticulously hand-paint intricate designs with natural pigments.

By the age of twelve, Amina was already showing extraordinary talent for painting traditional Moroccan patterns. After completing formal art education in Casablanca, she returned to Fes to revitalize her family's workshop, infusing traditional techniques with contemporary artistic vision.

Today, Amina leads a workshop that employs five local artisans, mostly women from her neighborhood. Her pieces are created using clay from the Rif Mountains, formed on traditional wheels, sun-dried, and fired in wood-burning kilns that have been used by her family for generations. She makes her own pigments from minerals and plants found in the local environment, ensuring that each piece carries the authentic essence of Moroccan terroir.

What makes Amina's work special is her commitment to preserving traditional Moroccan ceramic arts while introducing subtle innovations that make these ancient crafts relevant in contemporary spaces. Each piece tells a story of cultural heritage, skillful craftsmanship, and artistic evolution.`,
    techniques: [
      "Traditional wheel throwing",
      "Hand-painting with natural pigments",
      "Wood-fired kiln techniques",
      "Moroccan glazing methods",
    ],
    materials: [
      "Locally-sourced terracotta clay",
      "Natural mineral and plant-based pigments",
      "Traditional glazes",
    ],
    featuredImage: "/images/Artisan/Amina1.png",
    gallery: [
      "/images/Artisan/Amina2.png",
      "/images/Artisan/Amina3.png",
      "/images/Artisan/Amina4.png",
      "/images/Artisan/Amina5.png",
    ],
    sustainabilityPractices: [
      "Uses locally-sourced natural materials",
      "Traditional firing methods that minimize energy consumption",
      "Water recycling system in workshop",
      "Employs and trains local women artisans",
    ],
    videos: ["https://www.youtube.com/embed/exampleVideo1"],
    social: {
      instagram: "@amina_ceramics",
      facebook: "AminaMansouriCeramics",
    },
  },
  {
    id: "artisan-002",
    name: "Isabella Rodriguez",
    slug: "isabella-rodriguez",
    origin: "Peru",
    location: "Chinchero, Sacred Valley, Peru",
    craft: "Traditional Weaving",
    bio: "Isabella Rodriguez is a master weaver from the Chinchero region of Peru who creates intricate textiles using pre-Columbian techniques and natural dyes derived from local plants and minerals.",
    story: `Isabella Rodriguez was born in the small Andean community of Chinchero, a region renowned for its exceptional textile traditions that date back to the Inca Empire. As a child, Isabella was immersed in weaving culture – her earliest memories are of watching her mother and grandmother working at their backstrap looms, creating brilliantly colored textiles filled with symbols and stories.

At age six, Isabella began learning to spin wool, and by eight, she was weaving simple designs. What distinguished her from other young weavers was her exceptional color sense and ability to memorize complex patterns. By the time she was fifteen, Isabella had mastered the most intricate traditional designs of her region and began developing her own patterns that honored ancient motifs while introducing subtle innovations.

After studying textile conservation at a special program in Cusco, Isabella returned to Chinchero with a mission to preserve and revitalize traditional Andean weaving techniques. She founded a weaving cooperative that now supports over twenty women from surrounding communities, teaching younger generations and creating sustainable livelihoods through textile arts.

Isabella's weaving process begins with raw alpaca or sheep wool, which is hand-spun using a traditional drop spindle called a puchka. She creates all dyes from natural sources – cochineal insects for rich reds, indigo for blues, various plants, minerals, and even fungi for other hues. Her signature pieces feature intricate geometric patterns and zoomorphic figures that represent Andean cosmology and natural elements, telling stories of cultural heritage through textile language.`,
    techniques: [
      "Backstrap loom weaving",
      "Traditional Andean drop spindle spinning",
      "Natural dyeing with plants, minerals, and insects",
      "Andean pattern design",
    ],
    materials: [
      "Locally-sourced alpaca wool",
      "Sheep wool from community flocks",
      "Natural dyes from plants and minerals",
    ],
    featuredImage: "/images/Artisan/Isabella1.png",
    gallery: [
      "/images/Artisan/Isabella2.png",
      "/images/Artisan/Isabella3.png",
      "/images/Artisan/Isabella4.png",
      "/images/Artisan/Isabella5.png",
    ],
    sustainabilityPractices: [
      "Supports ethical alpaca and sheep herding",
      "Uses only natural, biodegradable dyes",
      "Maintains ancient sustainable practices",
      "Preserves cultural heritage through education",
    ],
    videos: ["https://www.youtube.com/embed/exampleVideo2"],
    social: {
      instagram: "@isabella_weaves",
      facebook: "ChincheroWeavers",
      website: "www.chincheroweaving.com",
    },
  },
  {
    id: "artisan-003",
    name: "Carlos Mendez",
    slug: "carlos-mendez",
    origin: "Mexico",
    location: "Taxco, Mexico",
    craft: "Silversmithing",
    bio: "Carlos Mendez is a master silversmith from the historic silver mining town of Taxco, Mexico, whose family has practiced traditional Mexican silverwork for four generations.",
    story: `Carlos Mendez was born in Taxco de Alarcón, a city built on silver mining and renowned worldwide for its exceptional silversmithing tradition. His family's workshop was established in 1942 by his grandfather, who learned the craft from William Spratling, the American who helped revive Taxco's silver industry in the 1930s.

Carlos first entered the workshop at age seven, sweeping floors and observing the silversmiths. By twelve, he was apprenticing formally, learning to melt, cast, forge, and shape silver. He showed particular talent for intricate filigree work and stone setting. After studying industrial design in Mexico City, Carlos returned to Taxco with fresh perspectives that would influence his approach to traditional silversmithing.

What distinguishes Carlos's work is his ability to honor traditional Mexican silver techniques while introducing contemporary design elements. His pieces feature pre-Hispanic motifs alongside modernist forms, creating jewelry that bridges cultural heritage and contemporary aesthetics. He is particularly known for his innovative settings for Mexican turquoise and other native gemstones.

Carlos's process begins with ethically sourced silver, often recycled from older pieces. Each design starts as a detailed sketch before being transformed through various traditional techniques – lost wax casting, forging, repoussé, and filigree work. He personally selects every stone, working with miners from Sonora for turquoise and other regions for additional minerals found in Mexican territory.

Today, Carlos leads a workshop of eight silversmiths, most trained personally by him over the years. He is dedicated to preserving traditional Mexican silversmithing while ensuring its evolution as a living craft.`,
    techniques: [
      "Traditional Taxco silversmithing",
      "Lost wax casting",
      "Silver filigree",
      "Stone setting",
      "Repoussé and chasing",
    ],
    materials: [
      "Ethically sourced sterling silver",
      "Mexican turquoise and other native gemstones",
      "Recycled precious metals",
    ],
    featuredImage: "/images/Artisan/Carlos1.png",
    gallery: [
      "/images/Artisan/Carlos2.png",
      "/images/Artisan/Carlos3.png",
      "/images/Artisan/Carlos4.png",
      "/images/Artisan/Carlos15.png",
    ],
    sustainabilityPractices: [
      "Uses recycled silver and ethically sourced materials",
      "Works directly with responsible mines for gemstones",
      "Employs water recycling in workshop",
      "Trains new generations to preserve cultural techniques",
    ],
    social: {
      instagram: "@mendez_silver",
      facebook: "MendezSilverTaxco",
      website: "www.mendezsilver.com",
    },
  },
  {
    id: "artisan-004",
    name: "Kwame Osei",
    slug: "kwame-osei",
    origin: "Ghana",
    location: "Kumasi, Ghana",
    craft: "Basket Weaving",
    bio: "Kwame Osei is a renowned basket weaver from Ghana who has revolutionized traditional Bolga basket weaving by introducing innovative sustainable materials while preserving ancestral techniques.",
    story: `Kwame Osei grew up in a small village near Kumasi, where basket weaving has been a community practice for centuries. His grandmother, a master weaver, first placed straw in his hands when he was just five years old, teaching him the foundations of a craft that would become his life's work.

At sixteen, Kwame moved to Kumasi to pursue formal education but continued weaving in his spare time. After completing studies in environmental science, he returned to his village with a vision: to revitalize traditional basket weaving while introducing sustainable innovations. He began experimenting with previously unused plant fibers like banana leaves, combining them with traditional straw and grasses to create sturdier, more versatile baskets.

What makes Kwame's work distinctive is his unique integration of traditional Ghanaian symbolism with contemporary functional design. Each basket incorporates patterns that tell stories from Ashanti culture, with colors and motifs representing proverbs, historical events, and natural elements. His signature innovation has been developing natural weatherproofing treatments using local plant oils, making his baskets both beautiful and highly functional.

Kwame now leads a cooperative of twenty-five weavers from surrounding villages. His process involves harvesting sustainable plant materials, drying them in the sun, dyeing them with plant-based colors, and weaving them using techniques that have been used in Ghana for generations. Each basket takes between three days and two weeks to complete, depending on the complexity of the design.

Through his work, Kwame is not only preserving an ancient craft but adapting it to contemporary needs while creating sustainable livelihoods for his community.`,
    techniques: [
      "Traditional Bolga weaving techniques",
      "Coil weaving methods",
      "Natural dyeing",
      "Innovative waterproofing using plant oils",
    ],
    materials: [
      "Elephant grass",
      "Banana leaf fibers",
      "Sustainable straw",
      "Natural plant-based dyes",
    ],
    featuredImage: "/images/Artisan/Kwame1.png",
    gallery: [
      "/images/Artisan/Kwame2.png",
      "/images/Artisan/Kwame3.png",
      "/images/Artisan/Kwame4.png",
      "/images/Artisan/Kwame5.png",
    ],
    sustainabilityPractices: [
      "Uses only renewable, fast-growing plant materials",
      "Sustainable harvesting methods",
      "Zero-waste production process",
      "Community-based cooperative supporting local families",
    ],
    videos: ["https://www.youtube.com/embed/exampleVideo3"],
    social: {
      instagram: "@kwame_baskets",
      facebook: "OseiBaskets",
    },
  },
  {
    id: "artisan-005",
    name: "Yuki Tanaka",
    slug: "yuki-tanaka",
    origin: "Japan",
    location: "Mashiko, Japan",
    craft: "Pottery",
    bio: "Yuki Tanaka is a master potter from Mashiko, Japan, whose work embraces the mingei folk-art tradition while introducing subtle contemporary elements through her unique glazing techniques.",
    story: `Yuki Tanaka was born into a pottery family in Mashiko, a town renowned for its ceramic traditions since the late 19th century. Though her family expected her to continue their style of work, Yuki felt drawn to explore beyond tradition. After training under her father for ten years, she left to study ceramic arts formally at Kyoto City University of Arts, where she began experimenting with unconventional glazes and firing techniques.

After completing her studies, Yuki apprenticed with Living National Treasure Tatsuzo Shimaoka, learning traditional rope-impression techniques. This experience reconnected her with the beauty of Japanese folk pottery traditions, while her formal education gave her the vocabulary to expand these traditions thoughtfully.

Returning to Mashiko in her early thirties, Yuki established her own studio where she began developing what would become her signature style: pottery that honors the mingei (folk art) tradition's focus on functional beauty while incorporating subtle innovations in texture and color. Her work is characterized by the Japanese aesthetic concept of wabi-sabi, finding beauty in imperfection and transience.

Yuki's process begins with locally-sourced clay that she often digs herself from specific locations around Mashiko. She throws each piece on a traditional kick wheel, allowing the natural characteristics of the clay to influence the final form. Her glazes are created from scratch using natural materials – ash from specific trees, local minerals, and crushed stone – combined through recipes she has developed over decades of experimentation.

What truly distinguishes Yuki's work is her firing technique. She uses an anagama wood-fired kiln that she fires only twice a year, each firing lasting four days and nights of continuous feeding with specific woods chosen for the ash they create. This labor-intensive process results in unpredictable and unique surface effects on each piece, with no two ever exactly alike.`,
    techniques: [
      "Traditional Japanese wheel throwing",
      "Rope-impression decoration",
      "Wood-fired anagama kiln",
      "Natural ash glazing",
      "Mingei-inspired design",
    ],
    materials: [
      "Local Mashiko clay",
      "Natural ash and mineral glazes",
      "Specific woods for kiln firing",
    ],
    featuredImage: "/images/Artisan/Yuki1.png",
    gallery: [
      "/images/Artisan/Yuki2.png",
      "/images/Artisan/Yuki3.png",
      "/images/Artisan/Yuki4.png",
      "/images/Artisan/Yuki5.png",
    ],
    sustainabilityPractices: [
      "Uses only local, natural materials",
      "Sustainable wood sourcing for kiln firing",
      "Solar power for studio operations",
      "Clay recycling system",
    ],
    videos: ["https://www.youtube.com/embed/exampleVideo4"],
    social: {
      instagram: "@yuki_pottery",
      website: "www.yukitanaka-pottery.jp",
    },
  },
];

export const getArtisanById = (id: string): Artisan | undefined => {
  return artisans.find((artisan) => artisan.id === id);
};

export const getArtisanBySlug = (slug: string): Artisan | undefined => {
  return artisans.find((artisan) => artisan.slug === slug);
};

export const getArtisans = (): Artisan[] => {
  return artisans;
};
