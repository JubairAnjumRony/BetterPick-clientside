import { useLoaderData, useNavigate } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import { useEffect, useRef, useState } from "react";
import FeaturedCategories from "../components/FeaturedCategories";
import Testimonials from "../components/Testimonial";
import Faq from "../components/Faq";



const Home = () => {
  const featuredRef = useRef(null);
     const navigate = useNavigate();
    const loader = useLoaderData();
    // console.log(loader);
    const [queries,setQueries] = useState([]);
    const [loading,setLoading] = useState(true);

    const handleRecomend =(_id) =>{
        navigate(`/queryDetails/${_id}`);
    }
    



    useEffect(()=>{
      if(loader) {
        setQueries(loader);
        setLoading(false)
      }
    },[loader])
    
    const scrollToFeatured = ()=>{
      featuredRef.current?.scrollIntoView({behavior:"smooth"});
    };
    
    return (

   


      
      
   <div className="w-full mx-auto  mt-4">

   <div className="w-full mb-9 pb-4 mt-6">
      <HeroSlider scrollToFeatured={scrollToFeatured}></HeroSlider>
    </div>
       
       
    <div className="text-center mb-12 px-5">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                    <span className="text-[#578FCA]">Recently</span> <span className="text-[#578FCA]">Added Queries</span>
                </h2>
                <p className="text-lg text-[#578FCA]">
                    Explore the recent product-related queries, including detailed descriptions, reasons, and recommendations.
                </p>
            </div>






            {loading?
      (  <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-teal-500"></div>
        </div>)

        :(



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 w-3/4 mx-auto">
        {queries.slice(0,6).map((query) => (
           
          <div key={query._id} className="card bg-white dark:bg-gray-800 shadow-md p-4 border rounded-xl">
                <div className = "relative p-2">
                <img src={query.productImageUrl} alt={query.productName} className = "w-56 h-48 object-cover rounded-2xl"/>
             
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
      )}


         <div className="my-8">
            <FeaturedCategories ref={featuredRef}/>
            
            </div>

            <div>
                <Testimonials/>
            </div>
            <div>
              <Faq/>
            </div>
</div>
    );
};

export default Home;