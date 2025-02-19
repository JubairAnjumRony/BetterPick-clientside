

import { forwardRef } from "react";

const FeaturedCategories = forwardRef((props,ref) => {
    const categories = [
      { id: 1, name: "Techonlogy Product", image: "https://i.ibb.co.com/cwZYkvM/technology.png" },
      { id: 2, name: "Travelling Product", image: "https://i.ibb.co.com/TW4wvdv/travelling.jpg" },
      { id: 3, name: "Fitness Accessories", image: "https://i.ibb.co.com/JmDsL4q/istockphoto-1362266787-1024x1024.jpg" },
    ];

    return (
      <div ref={ref} className="py-8 mb-8">
        <h2 className="text-3xl font-bold text-[#578FCA] text-center mb-6">Most Asked Queries </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-center text-[#578FCA]">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );

  });

  FeaturedCategories.displayName = 'FeaturedCategories';
  export default FeaturedCategories;

