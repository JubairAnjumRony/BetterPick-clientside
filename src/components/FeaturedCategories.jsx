// import React from 'react';

// const FeaturedCategories = () => {
//   const categories = [
//     { id: 1, title: 'Tech Gadgets', image: '/images/tech-gadgets.jpg' },
//     { id: 2, title: 'Home Appliances', image: '/images/home-appliances.jpg' },
//     { id: 3, title: 'Fashion Trends', image: '/images/fashion-trends.jpg' },
//     { id: 4, title: 'Fitness Gear', image: '/images/fitness-gear.jpg' },
//   ];

//   return (
//     <section className="featured-categories py-12 bg-gray-50">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">Featured Categories</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {categories.map((category) => (
//             <div
//               key={category.id}
//               className="category-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//             >
//               <img
//                 src={category.image}
//                 alt={category.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
//                 <button className="text-blue-500 font-medium hover:underline">
//                   Explore Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCategories;


const FeaturedCategories = () => {
    const categories = [
      { id: 1, name: "Techonlogy Product", image: "https://i.ibb.co.com/cwZYkvM/technology.png" },
      { id: 2, name: "Travelling Product", image: "https://i.ibb.co.com/TW4wvdv/travelling.jpg" },
      { id: 3, name: "Fitness Accessories", image: "https://i.ibb.co.com/JmDsL4q/istockphoto-1362266787-1024x1024.jpg" },
    ];
  
    return (
      <div className="py-8 mb-8">
        <h2 className="text-3xl font-bold text-[#578FCA] text-center mb-6">Most Asked Queries </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-center">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeaturedCategories;