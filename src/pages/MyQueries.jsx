// import { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../providers/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Swal from 'sweetalert2';

// const MyQueries = () => {
   

//         const {user} = useContext(AuthContext);
//        const [equipments, setEquipments] = useState([]);
//        // const user = 
//        const navigate = useNavigate();
     
//        useEffect(() => {
//         console.log("userEMailis:",user?.email)
//          fetch(`http://localhost:5000/queries/${user.email}`)
//            .then((res) => res.json())
//            .then((data) => {
//             console.log("data is:",data);
//             setEquipments(data)})
//            .catch((error) => toast.error("Failed to fetch your queries list.",error.message));
//        }, [user.email]);
     
//    //     const handleDelete = (id) => {
//    //       if (confirm("Are you sure you want to delete this equipment?")) {
//    //         fetch(`https://server-side-alpha-rust.vercel.app/deleteequipment/${id}`, {
//    //           method: "DELETE",
//    //         })
//    //           .then((res) => res.json())
//    //           .then(data => {
//    //             if(data.deletedCount>0){
//    //             Swal.fire({
//    //                 title: "Deleted!",
//    //                 text: "Equipment deleted successfully",
//    //                 icon: "success",
//    //             });
//    //             setEquipments(equipments.filter((item) => item._id !== id));
//    //         }
//    //           })
             
//    //     };
//    //  }
   
//    const handleDelete = (id) => {
//        Swal.fire({
//            title: "Are you sure?",
//            text: "You won't be able to revert this!",
//            icon: "warning",
//            showCancelButton: true,
//            confirmButtonColor: "#3085d6",
//            cancelButtonColor: "#d33",
//            confirmButtonText: "Yes, delete it!"
//        }).then((result) => {
//            if (result.isConfirmed) {
//        // if (confirm("Are you sure you want to delete this equipment?")) 
//          fetch(`http://localhost:5000/queries/${id}`, {
//            method: "DELETE",
//          })
//            .then((res) => res.json())
//            .then((data) => {
//              if (data.deletedCount > 0) { // Correct spelling of "deletedCount"
//                Swal.fire({
//                  title: "Deleted!",
//                  text: "Equipment deleted successfully",
//                  icon: "success",
//                });
//                setEquipments(equipments.filter((item) => item._id !== id));
//              } 
//            })
//        }
//    })
       
//      };
     
     
//        const handleUpdate = (id) => {
//          navigate(`/updatequeries/${id}`);
//        };
     
//        return (
//          <div className=" bg-gray-100 py-8 ">
//            <div className="container  w-3/4 mx-auto">
//              <h1 className="text-3xl font-bold text-center mb-6">My Query List</h1>
//              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                {equipments.map((item) => (
//                  <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
//                    <img src={item.productImageUrl} alt={item.itemName} className="w-full h-40 object-cover rounded-md mb-4" />
//                    <h2 className="text-xl font-bold">{item.queryTitle}</h2>
//                    <p className="text-gray-600">Price: ${item.productName}</p>
//                    <p className="text-gray-600">Stock: {item.boycottingReason}</p>
//                    <div className="flex justify-between mt-4">
//                      <button
//                        onClick={() => handleUpdate(item._id)}
//                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                      >
//                        Update
//                      </button>
//                      <button
//                        onClick={() => handleDelete(item._id)}
//                        className="bg-red-500 text-white px-4 py-2 rounded-md"
//                      >
//                        Delete
//                      </button>
//                    </div>
//                  </div>
//                ))}
//              </div>
//            </div>
//          </div>
//        );
//      };
     
  

// export default MyQueries;


import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
// import UpdateQueries from './UpdateQueries';


const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();



//   const [selectedQuery, setSelectedQuery] = useState(null);
// const [isModalOpen, setIsModalOpen] = useState(false);

// const handleUpdate2 = (query) => {
//   setSelectedQuery(query);
//   setIsModalOpen(true);
// };

// const closeModal = () => {
//   setIsModalOpen(false);
//   setSelectedQuery(null);
// };

// const handleQueryUpdate = () => {
//   // Refetch the queries or update the local state to reflect changes
//   fetchQueries(); // Assuming you have a function to refetch the queries
// };
  
  
  

  useEffect(() => {

    if (user?.email) {
      fetch(`http://localhost:5000/queries/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setEquipments(data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))); // Sort by timestamp descending
          setLoading(false);
        })
        .catch((error) => toast.error(`Failed to fetch your queries: ${error.message}`));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete-queries/${id}`, { method: 'DELETE' })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your query has been deleted.', 'success');
              setEquipments(equipments.filter((item) => item._id !== id));
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/updatequeries/${id}`);
  };

  const handleViewDetails = (id) => {
    navigate(`/querydetails/${id}`);
  };

  const handleAddQuery = () => {
    navigate('/addqueries');
  };

  return (

 
<>
    {/* // Render in MyQueries.jsx */}
    
  {/* {equipments.map((item) => (
    <div key={item._id}>
      <button
        onClick={() => handleUpdate2(item)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Update
      </button>
    </div>
  ))}
  <UpdateQueries
    query={selectedQuery}
    isOpen={isModalOpen}
    onClose={closeModal}
    onUpdate={handleQueryUpdate}
  /> */}

    
    
    
    
    <div className="bg-gray-100">
      {/* Banner Section */}
      <div className="bg-blue-500 text-white py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">My Queries</h1>
        <button
          onClick={handleAddQuery}
          className="bg-white text-blue-500 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition"
        >
          Add Query
        </button>
      </div>

      {/* Query List Section */}
      <div className="container mx-auto py-8">
        {loading ? (
          <p className="text-center text-gray-500">Loading your queries...</p>
        ) : equipments.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 mb-4">No queries found. Add your first query!</p>
            <button
              onClick={handleAddQuery}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Query
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipments.map((item) => (
              <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={item.productImageUrl}
                  alt={item.itemName}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{item.queryTitle}</h2>
                <p className="text-gray-600">Product: {item.productName}</p>
                <p className="text-gray-600">Reason: {item.boycottingReason}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleViewDetails(item._id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default MyQueries;
