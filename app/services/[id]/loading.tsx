export default function Loading() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/4 mb-6 mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-12 mx-auto"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-100 p-8 rounded-xl h-64"></div>
            <div className="bg-gray-100 p-8 rounded-xl h-64"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
