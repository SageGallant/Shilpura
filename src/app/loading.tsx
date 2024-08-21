export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-islandSpice">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-bordeaux"></div>
        <div className="absolute top-0 left-0 h-16 w-16 flex items-center justify-center">
          <div className="h-8 w-8 bg-islandSpice rounded-full"></div>
        </div>
      </div>
      <p className="mt-4 font-montserrat text-sm text-osloGray">
        Crafting your experience...
      </p>
    </div>
  );
}
