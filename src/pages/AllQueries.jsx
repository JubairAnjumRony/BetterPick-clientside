


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AllQueries = () => {
//   const [queries, setQueries] = useState([]);
//   const [gridColumns, setGridColumns] = useState(3); // Default to a 3-column grid
//   const navigate = useNavigate();
//   const [search,setSerarch] = useState(" ");



// //   const fetchAllServices = async ()=>{
// //     const {data} = await axios.get(http://localhost:5000/queries?filter=${filter}&search=${search},
// //       {
// //         withCredentials: true,  // Include cookies or credentials in the request
// //       }
// //     )
// //   setQueries(data)
// //   }
// //   fetchAllServices()
// // },[filter, search])


// // useEffect(()=>{
// //   fetch(`http://localhost:5000/queries?searchParams=${search}`)
// //   .then((res)=>res.json())
// //   .then((data)=>{
// //     setQueries(data)
// //     console.log(data);
// //   })
// // },[search]);





// useEffect(() => {
//   const fetchQueries = async () => {
//     try {
//       const res = await fetch(`http://localhost:5000/queries?searchParams=${search}`);
//       const data = await res.json();
//       setQueries(data);
//       console.log(data);
//     } catch (error) {
//       console.error("Failed to fetch queries:", error);
//     }
//   };

//   // Debounce search query to reduce the number of requests
//   const timeoutId = setTimeout(() => {
//     fetchQueries();
//   },500); // Adjust debounce delay as needed

//   return () => clearTimeout(timeoutId); // Cleanup timeout
// }, [search]);




   

//   useEffect(() => {
//     fetch("http://localhost:5000/queries")
//       .then((res) => res.json())
//       .then((data) => {
//         // Sort queries in descending order by date
//         const sortedQueries = data.sort((a, b) => new Date(b.date) - new Date(a.date));
//         setQueries(sortedQueries);
//       })
//       .catch((error) => console.error("Error fetching queries:", error));
//   }, []);

//   const handleRecommend = (id) => {
//     navigate(`/queryDetails/${id}`);
//   };

//   return (
//     <div className="p-4 w-3/4 mx-auto">

//       <div className="w-[400px] mx-auto mb-4">
//         <input
//         onChange={(e)=>setSerarch(e.target.value)}
//         type="text"
//         name="search"
//         value={search}
//         placeholder="search"
//         className="input input-bordered w-full" required />
//       </div>
//       <h2 className="text-2xl font-bold mb-4 flex justify-center">All Queries</h2>

//       {/* Layout Toggle Buttons */}
//       <div className="mb-4 flex gap-2 justify-end">
//         <button
//           onClick={() => setGridColumns(1)}
//           className={`btn ${gridColumns === 1 ? "btn-active" : "btn-primary"}`}
//         >
//           1 Column
//         </button>
//         <button
//           onClick={() => setGridColumns(2)}
//           className={`btn ${gridColumns === 2 ? "btn-active" : "btn-primary"}`}
//         >
//           2 Columns
//         </button>
//         <button
//           onClick={() => setGridColumns(3)}
//           className={`btn ${gridColumns === 3 ? "btn-active" : "btn-primary"}`}
//         >
//           3 Columns
//         </button>
//       </div>

//       {/* Dynamic Grid Layout */}
//       <div
//         className={`grid gap-4 ${
//           gridColumns === 1
//             ? "grid-cols-1"
//             : gridColumns === 2
//             ? "grid-cols-2"
//             : "grid-cols-3"
//         }`}
//       >
//         {queries.map((query) => (
//           <div
//             key={query._id}
//             className={`card bg-white shadow-md p-4 border rounded-xl ${
//               gridColumns === 1 ? "flex flex-col md:flex-row gap-4 items-center" : ""
//             }`}
//           >
//             <div className="relative">
//               <img
//                 src={query.productImageUrl}
//                 alt={query.productName}
//                 className={`${
//                   gridColumns === 1 ? "w-32 h-32 object-cover" : "w-full h-48 object-cover"
//                 } rounded-2xl`}
//               />
//             </div>
//             <div className={gridColumns === 1 ? "flex-1" : ""}>
//               <h3 className="text-lg font-bold mb-2">{query.queryTitle}</h3>
//               <p className="text-sm mb-2">
//                 <strong>Product Name:</strong> {query.productName}
//               </p>
//               <p className="text-sm mb-2">
//                 <strong>Brand:</strong> {query.productBrand}
//               </p>
//               <p className="text-sm mb-2">
//                 <strong>Boycotting Reason:</strong> {query.boycottingReason}
//               </p>
//               <p className="text-sm mb-2">
//                 <strong>Recommendations:</strong> {query.recommendationCount}
//               </p>
//               <button
//                 onClick={() => handleRecommend(query._id)}
//                 className="btn btn-primary w-full"
//               >
//                 Recommend
//               </button>
//             </div>
//           </div>
//         ))}

  

//       </div>
//     </div>
//   );
// };

// export default AllQueries;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllQueries = () => {
  const [queries, setQueries] = useState([]);
  const [gridColumns, setGridColumns] = useState(3); // Default to a 3-column grid
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await fetch(`http://localhost:5000/queries?searchParams=${search}`);
        const data = await res.json();
        setQueries(data);
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
      <h2 className="text-2xl font-bold mb-4 flex justify-center">All Queries</h2>

      {/* Layout Toggle Buttons */}
      <div className="mb-4 flex gap-2 justify-center md:justify-end">
        <button
          onClick={() => setGridColumns(1)}
          className={`btn ${gridColumns === 1 ? "btn-active" : "btn-primary"}`}
        >
          1 Column
        </button>
        <button
          onClick={() => setGridColumns(2)}
          className={`btn ${gridColumns === 2 ? "btn-active" : "btn-primary"}`}
        >
          2 Columns
        </button>
        <button
          onClick={() => setGridColumns(3)}
          className={`btn ${gridColumns === 3 ? "btn-active" : "btn-primary"}`}
        >
          3 Columns
        </button>
      </div>

      {/* Responsive Grid Layout */}
      <div
        className={`grid gap-4 ${
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
            className={`card bg-white shadow-md p-4 border rounded-xl ${
              gridColumns === 1 ? "flex flex-col md:flex-row gap-4 items-center" : ""
            }`}
          >
            <div className="relative">
              <img
                src={query.productImageUrl}
                alt={query.productName}
                className={`${
                  gridColumns === 1
                    ? "w-32 h-32 object-cover"
                    : "w-full h-48 sm:h-64 md:h-48 lg:h-48 object-cover"
                } rounded-2xl`}
              />
            </div>
            <div className={gridColumns === 1 ? "flex-1" : ""}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllQueries;
