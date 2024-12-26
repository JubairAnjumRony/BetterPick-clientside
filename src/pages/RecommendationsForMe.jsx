// import { useContext, useEffect, useState,  } from 'react';
// import { AuthContext } from '../providers/AuthProvider';

// const RecommendationsForMe = () => {
//   const [recommendations, setRecommendations] = useState([]);
//   const {user} = useContext(AuthContext) // Replace with your auth method

//   useEffect(() => {
//     fetch(`http://localhost:5000/recommendationsForMe/${user.email}`)
//       .then(res => res.json())
//       .then(data => setRecommendations(data))
//       .catch(err => console.error(err));
//   }, [user.email]);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Recommendations For Me</h2>
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 px-4 py-2">Query Title</th>
//             <th className="border border-gray-300 px-4 py-2">Recommender</th>
//             <th className="border border-gray-300 px-4 py-2">Recommended Product</th>
//             <th className="border border-gray-300 px-4 py-2">Reason</th>
//           </tr>
//         </thead>
//         <tbody>
//           {recommendations.map(rec => (
//             <tr key={rec._id}>
//               <td className="border border-gray-300 px-4 py-2">{rec.queryTitle}</td>
//               <td className="border border-gray-300 px-4 py-2">{rec.recommenderName}</td>
//               <td className="border border-gray-300 px-4 py-2">{rec.recommendedProductName}</td>
//               <td className="border border-gray-300 px-4 py-2">{rec.recommendationReason}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RecommendationsForMe;
