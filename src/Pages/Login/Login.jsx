import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

      const { logInUser } = useContext(AuthContext);
      const location = useLocation();
      const navigate = useNavigate();

      const handleLogIn = (e) => {
            e.preventDefault();

            const email = e.target.email.value;
            const password = e.target.password.value;

            // validation
            if (password.length < 6) {
                  toast.error('Password should have at least 6 character!');
                  return;
            }

            // create user
            logInUser(email, password)
                  .then((result) => {
                        toast.success('User Logged In Successfully');
                        navigate(location?.state ? location.state : '/')

                  })
                  .catch(error => {
                        console.log(error.message);
                        toast.error(error.message)
                  })

            // reset form
            // e.target.email.value = '';
            // e.target.password.value = '';
      }

      return (
            <div className="flex flex-col justify-center items-center">
                  <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" onSubmit={handleLogIn}>
                              <h5 className="text-xl font-medium text-gray-900 dark:text-white">Log in to our platform</h5>

                              <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                              </div>
                              <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                              </div>

                              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered? <Link to='/register' className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default Login;