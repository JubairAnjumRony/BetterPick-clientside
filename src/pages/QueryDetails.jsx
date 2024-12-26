import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';

const QueryDetails = () => {
    const loader = useLoaderData();
    console.log(loader);
  const { id } = useParams(); 
  console.log(id);
  const { user } = useContext(AuthContext);
  console.log(user)
  const [queryDetails, setQueryDetails] = useState(loader);
 
  const [recommendations, setRecommendations] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    productName: '',
    productImage: '',
    reason: '',
  });

    //  const 


  // Fetch the query details
  // useEffect(() => {
  //   fetch(`https://server-site-rust.vercel.app/queries/${id}`)
  //     .then((res) => res.json())
  //     .then((data) =>
  //        setQueryDetails(data))
  //     .catch((error) => toast.error('Failed to fetch query details.'));
  // }, [id]);

  // Fetch all recommendations for this query
  useEffect(() => {
    fetch(`https://server-site-rust.vercel.app/recommendations/${id}`)
      .then((res) => res.json())
      .then((data) => setRecommendations(data))
      .catch((error) => toast.error('Failed to fetch recommendations.'));
  }, [id]);


  console.log(queryDetails.productName);
  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const recommendationData = {
      ...formData,
      queryId: id,
      queryTitle: queryDetails.queryTitle,
      productName: queryDetails.productBrand,
      userEmail: queryDetails.email,
      userName: queryDetails. name,
      recommenderEmail: user.email,
      recommenderName: user.displayName,
      date: new Date().toLocaleString(),
     
    };
    
   
    
    fetch(`https://server-site-rust.vercel.app/recommendations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recommendationData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('Recommendation added successfully!');
        setRecommendations([...recommendations, recommendationData]);
 


       // Add the new recommendation to the state
       setRecommendations([...recommendations, recommendationData]);

       // Increment the recommendation count locally
       setQueryDetails((prevDetails) => ({
         ...prevDetails,
         recommendationCount: (prevDetails.recommendationCount || 0) + 1,
       }));
 
       // Update recommendation count on the server
       fetch(`https://server-site-rust.vercel.app/queries/increment/${id}`, {
         method: 'PATCH',
       }).catch((error) => console.error('Failed to increment recommendation count:', error));
     })
     .catch((error) => toast.error('Failed to add recommendation.'));
 };


  return (
    <div className="container w-3/4 mx-auto p-6">
    {queryDetails ? (
      <div>
        <h2 className="text-2xl font-bold">{queryDetails.queryTitle}</h2>
        <p>Created by: {user.displayName}</p>
        <img
          src={user.photoURL}
          alt="User profile"
          className="w-12 h-12 rounded-full"
        />
        <p>Product: {queryDetails.productName}</p>
        <p>Brand: {queryDetails.productBrand}</p>
        <p>Reason: {queryDetails.boycottingReason}</p>
        <p>Recommendations: {queryDetails.recommendationCount}</p>
      </div>
    ) : (
      <p>Loading query details...</p>
    )}

          {/* Add Recommendation Section */}
          <div className="bg-gray-100 p-4 rounded mb-6">
            <h3 className="text-xl font-bold mb-4">Add a Recommendation</h3>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Recommendation Title"
                value={formData.title}
                onChange={handleInputChange}
                className="block w-full mb-3 p-2 border rounded"
                required
              />
              <input
                type="text"
                name="productName"
                placeholder="Recommended Product Name"
                value={formData.productName}
                onChange={handleInputChange}
                className="block w-full mb-3 p-2 border rounded"
                required
              />
              <input
                type="url"
                name="productImage"
                placeholder="Recommended Product Image URL"
                value={formData.productImage}
                onChange={handleInputChange}
                className="block w-full mb-3 p-2 border rounded"
                required
              />
              <textarea
                name="reason"
                placeholder="Recommendation Reason"
                value={formData.reason}
                onChange={handleInputChange}
                className="block w-full mb-3 p-2 border rounded"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Recommendation
              </button>
            </form>
          </div>

          {/* All Recommendations */}
          <div className="bg-white shadow-md rounded p-4">
            <h3 className="text-xl font-bold mb-4">All Recommendations</h3>
            {recommendations.length === 0 ? (
              <p>No recommendations yet.</p>
            ) : (
              recommendations.map((rec) => (
                <div key={rec._id} className="border-b pb-4 mb-4">
                  <p>Title: {rec.title}</p>
                  <p>Recommended Product: {rec.productName}</p>
                  <p>Reason: {rec.reason}</p>
                  <img src={rec.productImage} alt={rec.title} className="w-16 h-16" />
                  <p>By: {rec.recommenderName} ({rec.recommenderEmail})</p>
                  <p>Date: {rec.date}</p>
                </div>
              ))
            )}
          </div>
       
 
    </div>
  );
};

export default QueryDetails;
