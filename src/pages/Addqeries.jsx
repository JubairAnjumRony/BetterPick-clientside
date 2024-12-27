import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const Addqeries = () => {
  const axiosSecure = useAxiosSecure();

    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
      productName: "",
      productBrand: "",
      productImageUrl: "",
      queryTitle: "",
      boycottingReason: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const queryData = {
        ...formData,
        email: user?.email || "Anonymous",
        name: user?.displayName || "Anonymous User",
        profileImage: user?.photoURL || "",
        date: new Date().toLocaleString(),
        recommendationCount: 0,
      };


      fetch('https://server-site-rust.vercel.app/queries',{
        method:'POST',
        headers:{
        'Content-Type': 'application/json',
        },

        body:JSON.stringify(queryData)
    })
        .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                   
                }
            })

        
          setFormData({
                productName: "",
                productBrand: "",
                productImageUrl: "",
                queryTitle: "",
                boycottingReason: "",
              });
   

    }
    return (
        <div className="p-4 w-3/4 mx-auto">
             <h2 className="text-2xl font-bold mb-4">Add Query</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Product Brand</label>
          <input
            type="text"
            name="productBrand"
            value={formData.productBrand}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Product Image URL</label>
          <input
            type="url"
            name="productImageUrl"
            value={formData.productImageUrl}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Query Title</label>
          <input
            type="text"
            name="queryTitle"
            value={formData.queryTitle}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="e.g., Is there any better product that gives me the same quality?"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Boycotting Reason</label>
          <textarea
            name="boycottingReason"
            value={formData.boycottingReason}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Add Query
        </button>
      </form>
        </div>
    );
};

export default Addqeries;