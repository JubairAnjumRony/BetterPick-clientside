import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllQueries = () => {
  const [queries, setQueries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/queries")
      .then((res) => res.json())
      .then((data) => {
        // Sort queries in descending order by date
        const sortedQueries = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setQueries(sortedQueries);
      })
      .catch((error) => console.error("Error fetching queries:", error));
  }, []);

  const handleRecommend = (id) => {
    navigate(`/queryDetails/${id}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Queries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {queries.map((query) => (
      
     

            
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
              onClick={() => handleRecommend(query._id)}
              className="btn btn-primary w-full"
            >
              Recommend
            </button>
          </div>
        
        ))}
      </div>
    </div>
  
  );
};

export default AllQueries;
