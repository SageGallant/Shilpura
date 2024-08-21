import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Shilpura | Our Story & Mission",
  description:
    "Learn about Shilpura's mission to connect global artisans with conscious consumers, preserving traditional crafts and creating sustainable livelihoods.",
};

export default function AboutPage() {
  // Mock data for team members
  const teamMembers = [
    {
      name: "Maya Patel",
      role: "Founder & Creative Director",
      bio: "With a background in anthropology and design, Maya founded Shilpura after years of working with artisan communities across Asia and Africa. Her vision combines traditional craftsmanship with contemporary design sensibilities.",
      image: "/placeholder.jpg", // Will be replaced with actual images
    },
    {
      name: "James Chen",
      role: "Head of Artisan Partnerships",
      bio: "James brings over 15 years of experience in fair trade and ethical sourcing. He has worked with artisan communities in over 20 countries, focusing on sustainable materials and preserving traditional techniques.",
      image: "/placeholder.jpg",
    },
    {
      name: "Amara Okonkwo",
      role: "Sustainability Lead",
      bio: "With a Masters in Sustainable Development, Amara ensures that all Shilpura products meet our rigorous ethical and environmental standards. She develops training programs for artisans focused on eco-friendly practices.",
      image: "/placeholder.jpg",
    },
    {
      name: "Rafael Mendoza",
      role: "Design Director",
      bio: "Rafael collaborates with artisans to create products that honor traditional techniques while appealing to contemporary aesthetics. His background in industrial design and cultural studies informs his thoughtful approach.",
      image: "/placeholder.jpg",
    },
  ];

  // Mock data for values
  const values = [
    {
      title: "Authenticity",
      description:
        "We celebrate the unique character of handcrafted goods, embracing the subtle variations that make each piece special. We truthfully represent the origins, materials, and makers of every product.",
    },
    {
      title: "Craftsmanship",
      description:
        "We honor the skilled hands that create our products, recognizing that true craftsmanship requires years of practice, cultural knowledge, and dedication. We value the human touch in an increasingly automated world.",
    },
    {
      title: "Sustainability",
      description:
        "We choose practices that respect our planet and its resources, from sourcing renewable materials to minimizing waste. We believe that traditional craft often holds wisdom about living in harmony with nature.",
    },
    {
      title: "Cultural Heritage",
      description:
        "We respect the cultural context of craft traditions, recognizing that handcraft techniques represent centuries of knowledge, identity, and community. We help preserve these traditions while supporting their evolution.",
    },
    {
      title: "Ethical Relationships",
      description:
        "We build partnerships based on respect, transparency, and mutual benefit. We ensure fair compensation and safe working conditions for all artisans, while fostering their creative agency and independence.",
    },
    {
      title: "Conscious Consumption",
      description:
        "We encourage mindful purchasing decisions, offering products with meaning and longevity. We believe in buying less but better, valuing the story and impact behind each object we bring into our lives.",
    },
  ];

  return (
    <div className="bg-islandSpice min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-islandSpice mb-6">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-islandSpice mb-8 font-montserrat">
            Connecting artisans and conscious consumers through exceptional
            handcrafted goods
          </p>
        </div>
        <div className="absolute inset-0 z-0">
          {/* This will be replaced with an actual image once we have assets */}
          <div className="w-full h-full bg-bordeaux"></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="aspect-square relative bg-osloGray/10">
                {/* This will be replaced with an actual image once we have assets */}
                <div className="w-full h-full bg-osloGray/20"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-6">
                The Shilpura Journey
              </h2>
              <p className="text-osloGray mb-6">
                Shilpura was born from a deep appreciation for the beauty and
                significance of handcraft traditions around the world. Our
                founder, Maya Patel, spent years traveling to remote villages
                and urban workshops, witnessing firsthand the incredible skill
                of artisans and the challenges they face in a rapidly changing
                global market.
              </p>
              <p className="text-osloGray mb-6">
                The name "Shilpura" combines "shilp" (craft in Sanskrit) with
                "pura" (city or community), reflecting our vision of creating a
                global community centered around craft. We believe that
                handcrafted objects carry stories, cultural significance, and
                human connection that mass-produced items simply cannot match.
              </p>
              <p className="text-osloGray">
                Founded in 2024, Shilpura bridges the gap between skilled
                artisans and conscious consumers who value authenticity,
                quality, and ethical production. We're more than a
                marketplace—we're a platform for preserving cultural heritage,
                supporting sustainable livelihoods, and celebrating the beauty
                of handmade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-islandSpice">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-8">
              Our Mission
            </h2>
            <p className="text-osloGray text-lg mb-8">
              Shilpura exists to preserve and celebrate global craft traditions
              by connecting skilled artisans with conscious consumers who value
              authenticity, quality, and ethical production.
            </p>
            <p className="text-osloGray text-lg">
              We curate exceptional handcrafted products that honor cultural
              heritage while meeting contemporary needs and aesthetics. Through
              direct partnerships with artisans, we ensure fair compensation,
              promote sustainable practices, and help traditional crafts thrive
              in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-islandSpice p-8 shadow-sm">
                <h3 className="text-2xl font-playfair text-bordeaux mb-4">
                  {value.title}
                </h3>
                <p className="text-osloGray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-islandSpice">
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
                Our Impact
              </h2>
              <p className="text-osloGray mb-4">
                We measure our success not just in sales, but in the tangible
                positive impact we create for artisan communities and the
                environment. Through fair partnerships and sustainable
                practices, we're helping to preserve craft traditions that might
                otherwise be lost.
              </p>
              <p className="text-osloGray mb-4">
                Our partnerships currently support artisans in 12 countries
                across 4 continents, with a focus on regions where traditional
                crafts are at risk. Many of our partner artisans report
                increased income and improved working conditions, allowing them
                to support their families while continuing their craft
                traditions.
              </p>
              <p className="text-osloGray mb-6">
                By prioritizing sustainable materials and practices, we're also
                reducing the environmental footprint of our products compared to
                mass-produced alternatives. We believe that traditional craft
                often inherently embraces sustainability, using local, natural
                materials and time-tested techniques that minimize waste.
              </p>
              <Link href="/sustainability" className="btn-secondary">
                Learn About Our Sustainability Commitment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-full sm:w-1/3 aspect-square relative bg-osloGray/10">
                  {/* This will be replaced with actual team member photos */}
                  <div className="w-full h-full bg-osloGray/20"></div>
                </div>
                <div className="w-full sm:w-2/3">
                  <h3 className="text-xl font-playfair text-bordeaux mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sage font-medium mb-3">{member.role}</p>
                  <p className="text-osloGray">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Journey */}
      <section className="py-16 bg-bordeaux text-islandSpice">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-8">
              Join Our Journey
            </h2>
            <p className="text-lg mb-8">
              We invite you to be part of our mission to preserve craft
              traditions and support artisan communities around the world. Every
              purchase from Shilpura contributes to this vision, creating a more
              beautiful and equitable world through the power of handcraft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/collection"
                className="px-6 py-3 bg-islandSpice text-bordeaux font-montserrat font-medium transition-all duration-300 hover:bg-opacity-90"
              >
                Explore Our Collection
              </Link>
              <Link
                href="/artisans"
                className="px-6 py-3 border border-islandSpice text-islandSpice font-montserrat font-medium transition-all duration-300 hover:bg-islandSpice hover:bg-opacity-10"
              >
                Meet Our Artisans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
