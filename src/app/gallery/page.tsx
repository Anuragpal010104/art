export default function GalleryPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Art Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[1,2,3,4,5,6,7,8].map((i) => (
          <div key={i} className="aspect-square bg-gray-200 rounded flex items-center justify-center text-gray-400">
            Artwork {i}
          </div>
        ))}
      </div>
    </div>
  );
}
