import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
    const navigate = useNavigate();
   const {signInUser,signInWithGoogle} = useContext(AuthContext)
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const handleGoogleSignIn =() =>{
     signInWithGoogle()
     .then(result =>{
       console.log(result.user);
       toast.success("login sucessful");
       navigate('/');
     })
     .catch(error=>{console.error("ERROR",error.message);
     toast.error("Google sign in Failed");
     });
 
   }
 
     const handleLogin = e =>{
         e.preventDefault();
         const email = e.target.email.value;
         const password = e.target.password.value;
        console.log(email,password);


         signInUser(email,password)
         .then(result=>{
           console.log(result.user)
           toast.success("login sucessful");
           e.target.reset();
           navigate('/');
         })
         .catch(error=>{console.log('ERROR',error.message);
        //  toast.error("wrong credentials");
         if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("No account found with this email.");
        } else {
          toast.error("Login failed. Please try again.");
        }
         });
 
     }
 
 
     
     
     return (
         <div className="hero min-h-screen">
         <div className="hero-content flex-col ">
           <div className="text-center lg:text-left">
             <h1 className="text-2xl font-bold">Login now!</h1>
           
           </div>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
             <form onSubmit={handleLogin} className="card-body ">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input name="email" type="email" placeholder="email" 
                 className="input input-bordered" required />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Password</span>
                 </label>
                 <input name="password" type="password" placeholder="password" 
                 className="input input-bordered" autoComplete='current-password'required />
                 {/* <label className="label">

                   <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                 </label> */}
               </div>
               <div className="form-control mt-6 ">
                 <button type="submit" className="btn btn-primary disabled={false}">Login</button>
                 <hr className="border-2 my-4"></hr>
                 <p>
                 <button onClick={()=>handleGoogleSignIn()} className='btn btn-warning w-full
                  bg-red-600  '><span className="text-black flex gap-2 justify-between">Login With Google <FaGoogle /></span></button>
                 </p>
               </div>
             </form>
             <p className='p-2 text-center mb-2'>New to this Website.Please<Link to ="/register"><span className="text-red-400"> Register</span></Link></p>
           </div>
         </div>
       </div>
     );
 };
 
 export default Login;