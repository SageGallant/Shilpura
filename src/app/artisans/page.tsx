import Link from "next/link";
import AppImage from "../../components/AppImage";
import { getArtisans } from "../../lib/artisans";

export const metadata = {
  title: "Meet Our Artisans | Shilpura",
  description:
    "Discover the master craftspeople behind our handcrafted products, their stories, techniques, and commitment to preserving cultural heritage.",
};

export default function ArtisansPage() {
  const artisans = getArtisans();

  return (
    <div className="bg-islandSpice min-h-screen pt-8 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair text-bordeaux mb-4">
            Meet Our Artisans
          </h1>
          <p className="text-osloGray max-w-2xl mx-auto">
            Behind each Shilpura product is a master artisan with years of
            training and dedication to their craft. Discover the stories,
            techniques, and passion that make our handcrafted pieces truly
            exceptional.
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="space-y-24">
          {artisans.map((artisan, index) => (
            <div
              key={artisan.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-16`}
            >
              {/* Artisan Image */}
              <div className="w-full md:w-2/5">
                <div className="aspect-[3/4] overflow-hidden bg-osloGray/10 relative">
                  {artisan.featuredImage ? (
                    <AppImage
                      src={artisan.featuredImage}
                      alt={artisan.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-osloGray/20">
                      {/* Placeholder for artisan image */}
                    </div>
                  )}
                </div>
              </div>

              {/* Artisan Info */}
              <div className="w-full md:w-3/5 flex flex-col justify-center">
                <p className="text-bordeaux font-cormorant text-lg mb-2">
                  {artisan.craft}
                </p>
                <h2 className="text-3xl md:text-4xl font-playfair text-bordeaux mb-4">
                  {artisan.name}
                </h2>
                <p className="text-osloGray mb-2">
                  <span className="font-medium">Origin:</span>{" "}
                  {artisan.location}
                </p>
                <p className="text-osloGray mb-6">{artisan.bio}</p>

                {/* Techniques */}
                <div className="mb-6">
                  <h3 className="font-playfair text-lg text-bordeaux mb-3">
                    Techniques
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {artisan.techniques.map((technique) => (
                      <span
                        key={technique}
                        className="px-3 py-1 bg-bordeaux/5 text-bordeaux border border-bordeaux/20 rounded-full text-sm"
                      >
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sustainability */}
                <div className="mb-8">
                  <h3 className="font-playfair text-lg text-bordeaux mb-3">
                    Sustainability Practices
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {artisan.sustainabilityPractices.map((practice) => (
                      <span
                        key={practice}
                        className="px-3 py-1 bg-sage/5 text-sage border border-sage/20 rounded-full text-sm"
                      >
                        {practice}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/artisan/${artisan.slug}`}
                  className="btn-secondary self-start"
                >
                  View Full Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-white p-10 shadow-sm text-center">
          <h2 className="text-3xl font-playfair text-bordeaux mb-4">
            Explore Our Collection
          </h2>
          <p className="text-osloGray mb-6 max-w-2xl mx-auto">
            Discover exceptional handcrafted products created by these skilled
            artisans. Each piece tells a story of cultural heritage, traditional
            techniques, and artistic expression.
          </p>
          <Link href="/collection" className="btn-primary">
            Shop Artisan Crafts
          </Link>
        </div>
      </div>
    </div>
  );
}
