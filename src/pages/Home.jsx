import { useLoaderData, useNavigate } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import { useState } from "react";
import FeaturedCategories from "../components/FeaturedCategories";
import Testimonials from "../components/Testimonial";
import Loading from "../components/Loading";


const Home = () => {
     const navigate = useNavigate();
    const loader = useLoaderData();
    console.log(loader);
    const [queries,setQueries] = useState(loader);

    const handleRecomend =(_id) =>{
        navigate(`/queryDetails/${_id}`);
    }
    
    
    return (

 

      
      
   <div className="w-full mx-auto  mt-4">

   <div className="w-full mb-9 pb-4 mt-6">
      <HeroSlider></HeroSlider>
    </div>
    {Loading
    
    }
    <div className="text-center mb-12 px-5">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                    <span className="text-[#578FCA]">Recently</span> <span className="text-[#578FCA]">Added Queries</span>
                </h2>
                <p className="text-lg">
                    Explore the recent product-related queries, including detailed descriptions, reasons, and recommendations.
                </p>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-3/4 mx-auto">
        {queries.slice(0,6).map((query) => (
      
     

            
          <div key={query._id} className="card bg-white shadow-md p-4 border rounded-xl">
                <div className = "relative p-2">
                <img src={query.productImageUrl} alt={query.productName} className = "w-full h-48 object-contain rounded-2xl"/>
             
            </div>
            <h3 className="text-lg font-semibold mb-2"><span className="font-bold">Query: </span>{query.queryTitle}</h3>
            <p className="text-sm mb-2">
              <strong>Product Name:</strong> {query.productName}
            </p>
            <p className="text-sm mb-2">
              <strong>Brand:</strong> {query.productBrand}
            </p>
            <p className="text-sm mb-2">
              <strong>Boycotting Reason:</strong> {query.boycottingReason}
            </p>
            <p className="text-sm mb-2 flex-grow">
              <strong>Recommendations:</strong> {query.recommendationCount}
            </p>
            <hr className="w-full mb-2"></hr>
            <button
              onClick={() =>handleRecomend(query._id) }
              className="btn btn-primary bg-[#578FCA] w-2/4 mx-auto"
            >
              Recommend
            </button>
          </div>
        
        ))}
      </div>
         <div className="my-8">
            <FeaturedCategories/>
            
            </div>

            <div>
                <Testimonials/>
            </div>
</div>
    );
};

export default Home;