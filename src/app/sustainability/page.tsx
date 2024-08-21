import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Sustainability Commitment | Shilpura",
  description:
    "Learn about our commitment to ethical sourcing, sustainable practices, and supporting artisan communities around the world.",
};

export default function SustainabilityPage() {
  // Mock data for sustainability badges/certifications
  const sustainabilityBadges = [
    {
      id: "eco-friendly-materials",
      name: "Eco-Friendly Materials",
      description:
        "Products made with materials that have minimal environmental impact, including natural, organic, recycled, or renewable resources.",
      icon: "🌱",
    },
    {
      id: "traditional-craft",
      name: "Traditional Craft",
      description:
        "Artisanal techniques that preserve cultural heritage and traditional knowledge, often using methods passed down through generations.",
      icon: "🧵",
    },
    {
      id: "fair-trade",
      name: "Fair Trade",
      description:
        "Ensures artisans receive fair compensation for their work, with safe working conditions and sustainable livelihoods.",
      icon: "🤝",
    },
    {
      id: "ethical-sourcing",
      name: "Ethical Sourcing",
      description:
        "Materials obtained with respect for human rights, environmental standards, and responsible supply chain practices.",
      icon: "⛏️",
    },
    {
      id: "hand-crafted",
      name: "Hand-Crafted",
      description:
        "Items made primarily by hand rather than machine, supporting skilled artisans and traditional craftsmanship.",
      icon: "👐",
    },
    {
      id: "low-impact-dyes",
      name: "Low-Impact Dyes",
      description:
        "Natural or low-impact dyes that minimize water pollution and reduce the use of harmful chemicals in the coloring process.",
      icon: "🎨",
    },
  ];

  // Mock data for sustainability pillars
  const sustainabilityPillars = [
    {
      title: "Environmental Responsibility",
      description:
        "We prioritize environmentally conscious practices throughout our operations, from sourcing sustainable materials to implementing eco-friendly packaging solutions.",
      points: [
        "Use of natural, renewable, or recycled materials",
        "Minimal waste production and packaging",
        "Support for traditional techniques with low environmental footprints",
        "Natural dyes and treatments that minimize water pollution",
      ],
    },
    {
      title: "Social Impact",
      description:
        "We believe in the power of craft to transform communities. We work directly with artisans to ensure fair compensation and create sustainable livelihoods.",
      points: [
        "Fair compensation that exceeds local market rates",
        "Safe and healthy working conditions",
        "Support for artisan cooperatives and women-led enterprises",
        "Investing in education and skills development in artisan communities",
      ],
    },
    {
      title: "Cultural Preservation",
      description:
        "Handcraft traditions represent centuries of knowledge and cultural heritage. We help preserve these invaluable traditions while supporting their evolution.",
      points: [
        "Documentation of traditional techniques and knowledge",
        "Support for master-apprentice relationships",
        "Storytelling that highlights cultural significance",
        "Connecting contemporary consumers with traditional crafts",
      ],
    },
    {
      title: "Transparency",
      description:
        "We believe in honest communication about our products, processes, and partnerships, providing you with the information needed to make conscious purchasing decisions.",
      points: [
        "Detailed product information including origins and materials",
        "Artisan profiles and stories",
        "Clear sustainability certifications",
        "Regular impact reporting and updates",
      ],
    },
  ];

  return (
    <div className="bg-islandSpice min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-islandSpice mb-6">
            Our Sustainability Commitment
          </h1>
          <p className="text-lg md:text-xl text-islandSpice mb-8 font-montserrat">
            Crafting a better future through ethical sourcing, sustainable
            practices, and supporting artisan communities
          </p>
        </div>
        <div className="absolute inset-0 z-0">
          {/* This will be replaced with an actual image once we have assets */}
          <div className="w-full h-full bg-bordeaux"></div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-8">
              Our Mission
            </h2>
            <p className="text-osloGray text-lg mb-8">
              At Shilpura, sustainability isn't just a feature—it's fundamental
              to our mission. We believe that beautiful handcrafted items should
              not come at the expense of our planet or its people. Our approach
              to sustainability encompasses environmental responsibility, social
              impact, cultural preservation, and transparent practices.
            </p>
            <p className="text-osloGray text-lg">
              We partner with artisans who share our commitment to sustainable
              practices, often utilizing techniques that have been
              environmentally sound for centuries. By supporting these artisans,
              we help preserve cultural heritage while promoting economic
              opportunities in communities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="py-16 bg-islandSpice">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-12 text-center">
            Our Sustainability Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainabilityPillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-playfair text-bordeaux mb-4">
                  {pillar.title}
                </h3>
                <p className="text-osloGray mb-6">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-sage mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-osloGray">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Badges */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-12 text-center">
            Our Sustainability Badges
          </h2>
          <p className="text-center text-osloGray max-w-3xl mx-auto mb-12">
            Our products are marked with these sustainability badges to help you
            make informed choices. Each badge represents a commitment to
            specific sustainable and ethical practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityBadges.map((badge) => (
              <div
                key={badge.id}
                className="bg-islandSpice p-6 shadow-sm border border-osloGray/10"
              >
                <div className="text-4xl mb-4">{badge.icon}</div>
                <h3 className="text-xl font-playfair text-bordeaux mb-3">
                  {badge.name}
                </h3>
                <p className="text-osloGray">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Partnerships */}
      <section className="py-16 bg-islandSpice">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="aspect-video relative bg-osloGray/10">
                {/* This will be replaced with an actual image once we have assets */}
                <div className="w-full h-full bg-osloGray/20"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-6">
                Artisan Partnerships
              </h2>
              <p className="text-osloGray mb-4">
                We work directly with artisans around the world, building
                partnerships based on mutual respect and shared values. By
                eliminating intermediaries, we ensure that artisans receive fair
                compensation for their exceptional craftsmanship.
              </p>
              <p className="text-osloGray mb-6">
                Our partnerships go beyond fair payment—we collaborate with
                artisans to preserve traditional techniques, innovate
                sustainable practices, and create stable livelihoods in their
                communities.
              </p>
              <Link href="/artisans" className="btn-secondary">
                Meet Our Artisans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Materials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="aspect-video relative bg-osloGray/10">
                {/* This will be replaced with an actual image once we have assets */}
                <div className="w-full h-full bg-osloGray/20"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-6">
                Sustainable Materials
              </h2>
              <p className="text-osloGray mb-4">
                We prioritize materials that are natural, renewable, recycled,
                and locally sourced whenever possible. Many of our artisans work
                with materials indigenous to their regions, minimizing
                transportation emissions and supporting local ecosystems.
              </p>
              <p className="text-osloGray mb-6">
                From naturally dyed textiles to reclaimed woods and recycled
                metals, our products embody an ethos of sustainability from raw
                material to finished piece. We believe that beautiful objects
                need not deplete our planet's resources.
              </p>
              <Link href="/collection" className="btn-secondary">
                Explore Sustainable Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Improvement */}
      <section className="py-16 bg-bordeaux text-islandSpice">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-8">
              Our Ongoing Commitment
            </h2>
            <p className="text-lg mb-8">
              We view sustainability as a journey, not a destination. While
              we're proud of our current practices, we continuously seek ways to
              improve our environmental footprint, expand our social impact, and
              increase transparency.
            </p>
            <p className="text-lg mb-8">
              We welcome your feedback and suggestions as we work toward our
              vision of a more sustainable, equitable future for handcraft
              traditions. Together, we can ensure that these precious skills and
              knowledge continue to thrive for generations to come.
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-islandSpice text-bordeaux font-montserrat font-medium transition-all duration-300 hover:bg-opacity-90"
            >
              Share Your Feedback
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
