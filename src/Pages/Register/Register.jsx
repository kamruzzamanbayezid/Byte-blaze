import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Register = () => {

      const { createUser, updateUserProfile } = useContext(AuthContext);

      const handleRegister = (e) => {
            e.preventDefault();

            const name = e.target.name.value;
            const email = e.target.email.value;
            const photoUrl = e.target.photoUrl.value;
            const password = e.target.password.value;
            const checked = e.target.checkbox.checked;

            // validation
            if (password.length < 6) {
                  toast.error('Password should have at least 6 character!');
                  return;
            }
            if (!checked) {
                  return toast.error('Please accept our terms and condition!')
            }

            // create user
            createUser(email, password)
                  .then((result) => {

                        // update profile
                        updateUserProfile(name, photoUrl)
                              .then(() => {
                                    toast.success('User Created Successfully');
                                    console.log(result.user);
                              })
                              .catch(error => {
                                    toast.error(error.message)
                                    console.log(error.message)
                              })

                  })
                  .catch(error => {
                        console.log(error.message);
                        toast.error(error.message)
                  })

            // reset form
            // e.target.name.value = '';
            // e.target.email.value = '';
            // e.target.password.value = '';
            // e.target.photoUrl.value = '';
            // e.target.checkbox.checked = '';
      }

      return (
            <div className="flex flex-col justify-center items-center">
                  <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-7">
                        <form className="space-y-6" onSubmit={handleRegister}>
                              <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register to our platform</h5>
                              <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="your name" required />
                              </div>
                              <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                              </div>
                              <div>
                                    <label htmlFor="photoUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                    <input type="url" name="photoUrl" id="photoUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="photo url" />
                              </div>
                              <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                              </div>
                              <div className="flex items-start">
                                    <div className="flex items-start">
                                          <div className="flex items-center h-5">
                                                <input id="remember" type="checkbox" value="" name="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                          </div>
                                          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept our <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">terms and condition</a></label>
                                    </div>

                              </div>
                              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Already have an account? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Log In</Link>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default Register;