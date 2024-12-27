
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiosSecure';
// import UpdateQueries from './UpdateQueries';


const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const axioSecure = useAxiosSecure();

  useEffect(() => {

      if (user?.email) {
    fetchMyQueries();
  }

   
  },[user?.email]);






  const fetchMyQueries = async () => {
    try {
      const response = await axioSecure.get(`https://server-site-rust.vercel.app/queries/${user?.email}`,{withCredentials: true});
      setEquipments(response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
      setLoading(false);
    } catch (error) {
      toast.error(`Failed to fetch your queries: ${error.message}`);
      setLoading(false);
    }
  };
  
  

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
        fetch(`https://server-site-rust.vercel.app/delete-queries/${id}`, { method: 'DELETE' })
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
    <div className='w-3/4 mx-auto'>
    
    <div className="bg-gray-100 ">
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
   </div>
  );
};

export default MyQueries;
