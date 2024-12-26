import  { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../providers/AuthProvider';

const MyRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const {user} = useContext(AuthContext) // Replace with your auth method
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/myRecommendations/${user.email}`)
      .then(res => res.json())
      .then(data => setRecommendations(data))
      .catch(err => console.error(err));
  }, [user.email]);

  const handleDelete = (id, queryId) => {
    if (window.confirm('Are you sure you want to delete this recommendation?')) {
      fetch(`http://localhost:5000/recommendations/${id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(() => {
          toast.success('Recommendation deleted successfully!');
          setRecommendations(prev => prev.filter(rec => rec._id !== id));
        })
        .catch(err => toast.error('Failed to delete recommendation'));
    }
  };

  return (
    <div className='w-3/4 mx-auto'>
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
