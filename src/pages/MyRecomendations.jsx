import  { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
// import { FaHouseFloodWaterCircleArrowRight } from 'react-icons/fa6';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MyRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const {user} = useContext(AuthContext) // Replace with your auth method
  console.log(user);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // fetch(`https://server-site-rust.vercel.app/myRecommendations/${user.email}`)
    //   .then(res => res.json())
    //   .then(data => setRecommendations(data))
    //   .catch(err => console.error(err));

    fetchAllReco();
  }, [user.email]);

  const fetchAllReco =async () =>{
    const {data} = await axiosSecure.get(`https://server-site-rust.vercel.app/myRecommendations/${user.email}`,{withCredentials:true})
    setRecommendations(data);
  }

  // const handleDelete = (id, queryId) => {
  //   if (window.confirm('Are you sure you want to delete this recommendation?')) {
  //     fetch(`https://server-site-rust.vercel.app/recommendations/${id}`, { method: 'DELETE' })
  //       .then(res => res.json())  email=irony6329@gamil.com
  //       .then(() => {
  //         toast.success('Recommendation deleted successfully!');
  //         setRecommendations(prev => prev.filter(rec => rec._id !== id));
  //       })
  //       .catch(err => toast.error('Failed to delete recommendation'));
  //   }
  // };




  const handleDelete = (id, queryId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this recommendation?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-site-rust.vercel.app/recommendations/${id}`, { method: 'DELETE' })
          .then((res) => res.json())
          .then(() => {
            Swal.fire('Deleted!', 'Your recommendation has been deleted.', 'success');
            setRecommendations((prev) => prev.filter((rec) => rec._id !== id));
          })
          .catch((err) => Swal.fire('Error!', 'Failed to delete recommendation.', 'error'));
      }
    });
  };
  
  
  
  
  
  
  return (
    <div className='w-3/4 mx-auto mb-6 mt-4'>
      <h2 className="text-2xl font-bold mb-4">My Recommendations</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Recommended Product</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map(rec => (
            <tr key={rec._id}>
              <td className="border border-gray-300 px-4 py-2">{rec.title}</td>
              <td className="border border-gray-300 px-4 py-2">{rec.productName}</td>
              <td className="border border-gray-300 px-4 py-2">{rec.date}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(rec._id, rec.queryId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyRecommendations;
