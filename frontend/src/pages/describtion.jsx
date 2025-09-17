
import React, { useState } from "react";

export default function Description() {
  const product = {
    title: "Ilana",
    description:
      "A sectional sofa or an L shaped sofa can make a great addition to your living room based on your needs.",
    price: 430.99,
    reviews: [
      { id: 1, user: "Ayaan", text: "Very comfortable and stylish!", rating: 5 },
      { id: 2, user: "Khadar", text: "Delivery took a bit long, but quality is good.", rating: 4 },
    ],
    images: [
      "https://picsum.photos/id/1062/800/600",
      "https://picsum.photos/id/1063/800/600",
      "https://picsum.photos/id/1064/800/600",
      "https://picsum.photos/id/1065/800/600",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-sm rounded-lg p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* left: main image */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <img
            src={selectedImage}
            alt="Product"
            className="w-full h-[420px] object-contain rounded-md shadow transition-all duration-500"
          />

          {/* thumbnails */}
          <div className="mt-6 flex gap-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-all duration-300 ${
                  selectedImage === img ? "border-black scale-105" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* right: details */}
        <div className="lg:col-span-5">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <p className="text-gray-500 mt-2">{product.description}</p>
            </div>

            <button
              onClick={toggleLike}
              className={`p-3 rounded-full border transition-colors ${
                liked ? "bg-pink-100" : "bg-white"
              }`}
            >
              {liked ? "❤" : "🤍"}
            </button>
          </div>

          <div className="mt-6">
            <div className="text-2xl font-semibold">${product.price}</div>

            {/* reviews */}
            <div className="mt-8 border-t pt-6">
              <h3 className="text-lg font-semibold">Customer Reviews</h3>
              <div className="mt-4 space-y-4">
                {product.reviews.map((r) => (
                  <div key={r.id} className="border rounded-md p-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">{r.user}</span>
                      <span>{"⭐".repeat(r.rating)}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


