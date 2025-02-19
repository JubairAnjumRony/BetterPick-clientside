import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllQueries = () => {
  const [queries, setQueries] = useState([]);
  const [gridColumns, setGridColumns] = useState(3); // Default to a 3-column grid
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [loading,setLoading]= useState([true]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await fetch(`https://server-site-rust.vercel.app/queries?searchParams=${search}`);
        const data = await res.json();
        setQueries(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch queries:", error);
      }
    };

    // Debounce search query to reduce the number of requests
    const timeoutId = setTimeout(() => {
      fetchQueries();
    }, 500); // Adjust debounce delay as needed

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [search]);

  const handleRecommend = (id) => {
    navigate(`/queryDetails/${id}`);
  };

  const handleSort = (sortBy) =>{
    if(sortBy =='count'){
      const sorted =  [...queries].sort((a,b)=>a.recommendationCount- b.recommendationCount);
      setQueries([...sorted]);
    }
  }

  return (
    <div className="p-4 w-11/12 lg:w-3/4 mx-auto">
      {/* Search Input */}
      <div className="w-full md:w-[400px] mx-auto mb-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          value={search}
          placeholder="Search"
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4 text-blue-300 flex justify-center">All Queries</h2>

      {/* Layout Toggle Buttons */}
     <div className="flex px-2 justify-between items-center">

      <div>
        <button className="btn btn-primary bg-[#578FCA] mb-4"  onClick ={()=>handleSort('count')}>Sort By Recomend</button>
      </div>

     <div className="mb-4 flex gap-2 justify-center md:justify-end">
        <button
          onClick={() => setGridColumns(1)}
          className={`btn ${gridColumns === 1 ? "btn-active" : "btn-primary bg-[#578FCA]"}`}
        >
          1 Column
        </button>
        <button
          onClick={() => setGridColumns(2)}
          className={`btn ${gridColumns === 2 ? "btn-active" : "btn-primary bg-[#578FCA]"}`}
        >
          2 Columns
        </button>
        <button
          onClick={() => setGridColumns(3)}
          className={`btn ${gridColumns === 3 ? "btn-active" : "btn-primary bg-[#578FCA]"}`}
        >
          3 Columns
        </button>
      </div>

      </div>

      {/* Responsive Grid Layout */}

   {loading?
          (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 bg-teal-500"></div>
            </div>
          ):

  

      (<div
        className={`grid gap-4  ${
          gridColumns === 1
            ? "grid-cols-1"
            : gridColumns === 2
            ? "sm:grid-cols-1 md:grid-cols-2"
            : "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}

      >
        {queries.map((query) => (
          <div
            key={query._id}
            className={`card bg-white  shadow-md p-4 border rounded-xl ${
              gridColumns === 1 ? "flex flex-col md:flex-row gap-4 items-center" :  "flex flex-col"
            }`}
          >
            <div className="relative">
              <img
                src={query.productImageUrl}
                alt={query.productName}
                className={`${
                  gridColumns === 1
                    ? "w-32 h-32 object-cover"
                    : "w-full object-contain sm:h-64 md:h-48 lg:h-48 "
                } rounded-2xl`}
              />
            </div>
            {/*  */}
            <div className={gridColumns === 1 ? "flex-1" : "w-full"} 
            >
              <h3 className="text-lg font-bold mb-2">{query.queryTitle}</h3>
              <p className="text-sm mb-2">
                <strong>Product Name:</strong> {query.productName}
              </p>
              <p className="text-sm mb-2">
                <strong>Brand:</strong> {query.productBrand}
              </p>
              <p className="text-sm mb-2 ">
                <strong>Boycotting Reason:</strong> {query.boycottingReason}
              </p>
              <p className="text-sm mb-2 flex-grow">
                <strong>Recommendations:</strong> {query.recommendationCount}
              </p>

            
              <button
                onClick={() => handleRecommend(query._id)}
                className="btn btn-primary bg-[#578FCA] w-full"
              >
                Recommend
              </button>
              </div>
          </div>
        ))}
  
      </div>
      )}
      
    </div>

  );
};

export default AllQueries;
