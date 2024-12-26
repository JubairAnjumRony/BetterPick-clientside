// import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
// import { AuthContext } from "../providers/AuthProvider";



const UpdateEquipments = () => {

    const loadUser = useLoaderData();
    console.log(loadUser);
    // const {user} = useContext(AuthContext);

        // const [formData, setFormData] = useState({
        //   productName: "",
        //   productBrand: "",
        //   productImageUrl: "",
        //   queryTitle: "",
        //   boycottingReason: "",
        // });
      
        // const handleChange = (e) => {
        //   const { name, value } = e.target;
        //   setFormData((prevData) => ({
        //     ...prevData,
        //     [name]: value,
        //   }));
        
        // };
      
        // const handleSubmit = async (e) => {
        //   e.preventDefault();
      
        //   const queryData = {
        //     ...formData,
        //     email: user?.email || "Anonymous",
        //     name: user?.displayName || "Anonymous User",
        //     profileImage: user?.photoURL || "",
        //     date: new Date().toLocaleString(),
        //     recommendationCount: 0,
        //   };

        //     queryTitle: "",
        //     boycottingReason: "",
        //   });
             //   setFormData({
        //     productName: "",
        //     productBrand: "",
        //     productImageUrl: "",
   

    
    // const { id } = useParams();
    // const [equipment, setEquipment] = useState(null);
    const navigate = useNavigate();
  
    // useEffect(() => {
    //   fetch(`https://server-side-alpha-rust.vercel.app/details/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => setEquipment(data));
    // }, [id]);
  
    const handleUpdate = (e) => {
      e.preventDefault();

         const formData = new FormData(e.target);
      const updatedData = Object.fromEntries(formData.entries());
      console.log(updatedData);
    
  
      fetch(`http://localhost:5000/queries-update/${loadUser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      })
        .then((res) => res.json())
        .then(() => {
        //   toast.success("Equipment updated successfully!");
        Swal.fire({
            title: "Updated successfully!",
            icon: "success",
            draggable: true
          });
          navigate("/myqueries");
        })
        .catch((error) => toast.error("Failed to update equipment.",error.message));
    };
  
      return (
        <form onSubmit={handleUpdate} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
        <div>
          <label className="block font-medium">Product Name</label>
          <input
            type="text"
            name="productName"
         
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Product Brand</label>
          <input
            type="text"
            name="productBrand"
         
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Product Image URL</label>
          <input
            type="url"
            name="productImageUrl"
          
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Query Title</label>
          <input
            type="text"
            name="queryTitle"
      
            className="input input-bordered w-full"
            placeholder="e.g., Is there any better product that gives me the same quality?"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Boycotting Reason</label>
          <textarea
            name="boycottingReason"
         
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>
  
        <button data-tooltip-id="my-tooltip" data-tooltip-content="Update for better shopping!" type="submit" className="btn btn-primary w-full">Update</button>
        <Tooltip id="my-tooltip" />
      </form>
      );
  };
  
  export default UpdateEquipments;