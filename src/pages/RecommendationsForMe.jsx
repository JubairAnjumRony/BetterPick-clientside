import { useContext, useEffect, useState,  } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const RecommendationsForMe = () => {
  const [recommendations, setRecommendations] = useState([]);
  const {user} = useContext(AuthContext) 
  const axioSecure = useAxiosSecure();

  // const [queryDetails, setQueryDetails] = useState();

  //   // Fetch the query details
  // useEffect(() => {
  //   fetch(`https://server-site-rust.vercel.app/queries/${id}`)
  //     .then((res) => res.json())
  //     .then((data) =>
  //        setQueryDetails(data))
  //     .catch((error) => toast.error('Failed to fetch query details.'));
  // }, [id]);

  useEffect(() => {
    // fetch(`https://server-site-rust.vercel.app/recommendationsForMe/${user.email}`)
    //   .then(res => res.json())
    //   .then(data => setRecommendations(data))
    //   .catch(err => console.error(err));
    fetchAllForMe();
  }, [user.email]);

  const fetchAllForMe = async ()=>{
    const {data} = await axioSecure.get(`https://server-site-rust.vercel.app/recommendationsForMe/${user.email}`,{withCredentials: true})
    setRecommendations(data);
  }

  return (
    <div className='w-3/4 mx-auto'>
      <h2 className="text-2xl font-bold mb-4">Recommendations For Me</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Recomendation Title</th>
            <th className="border border-gray-300 px-4 py-2">Recommender</th>
            <th className="border border-gray-300 px-4 py-2">Recommended Product</th>
            <th className="border border-gray-300 px-4 py-2">Reason</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map(rec => (
            <tr key={rec._id}>
              <td className="border border-gray-300 px-4 py-2">{rec.title}</td>
              <td className="border border-gray-300 px-4 py-2">{rec.recommenderName}</td>
              <td className="border border-gray-300 px-4 py-2">{rec.productName}</td>
              <td className="border border-gray-300 px-4 py-2">{rec.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecommendationsForMe;
