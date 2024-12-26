import { useLoaderData } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import { useState } from "react";
import FeaturedCategories from "../components/FeaturedCategories";
import Testimonials from "../components/Testimonial";


const Home = () => {

    const loader = useLoaderData();
    console.log(loader);
    const [queries,setQueries] = useState(loader);
    
    
    return (
 <div className="w-3/4 mx-auto mb-4 mt-4">
        <div className="mb-6 mt-6">
          <HeroSlider></HeroSlider>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {queries.slice(0,6).map((query) => (
      
     

            
          <div key={query._id} className="card bg-white shadow-md p-4 border rounded-xl">
                <div className = "relative p-2">
                <img src={query.productImageUrl} alt={query.productName} className = "w-full h-48 object-cover rounded-2xl"/>
             
            </div>
            <h3 className="text-lg font-bold mb-2">{query.queryTitle}</h3>
            <p className="text-sm mb-2">
              <strong>Product Name:</strong> {query.productName}
            </p>
            <p className="text-sm mb-2">
              <strong>Brand:</strong> {query.productBrand}
            </p>
            <p className="text-sm mb-2">
              <strong>Boycotting Reason:</strong> {query.boycottingReason}
            </p>
            <p className="text-sm mb-2">
              <strong>Recommendations:</strong> {query.recommendationCount}
            </p>
            <button
            //   onClick={() => }
              className="btn btn-primary w-full"
            >
              Recommend
            </button>
          </div>
        
        ))}
      </div>
         <div>
            <FeaturedCategories/>
            
            </div>

            <div>
                <Testimonials/>
            </div>
</div>
    );
};

export default Home;