import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Navbar = () => {

      const { user, logOut } = useContext(AuthContext);
      const [theme, setTheme] = useState('light');

      useEffect(() => {
            localStorage.setItem('theme', theme)
            const localTheme = localStorage.getItem('theme')

            document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])

      const handleToggleTheme = (e) => {
            if (e.target.checked) {
                  setTheme('dark')
            }
            else {
                  setTheme('light')
            }
      }

      const handleLogOut = () => {
            logOut()
                  .then(() => {
                        toast.success('Successfully logged out!!')
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      return (
            <div className="navbar p-0 flex-col md:flex-row">
                  <div to='/' className="flex-1">
                        <Link className="font-bold text-3xl text-primary">Byte<span className="text-secondary">Baze</span></Link>
                  </div>
                  <div className="flex-none">
                        <ul className="menu flex items-center flex-wrap lg:gap-10 gap-4 menu-horizontal px-1 text-xl font-medium">
                              <NavLink
                                    to='/'
                                    className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}
                              >Home</NavLink>
                              <NavLink
                                    to='/blogs'
                                    className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}
                              >Blogs</NavLink>
                              <NavLink
                                    to='/bookmarks'
                                    className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}
                              >Bookmarks</NavLink>
                              <NavLink
                                    to='/register'
                                    className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}
                              >Register</NavLink>
                              {
                                    user ?
                                          <button
                                                onClick={handleLogOut}
                                                className='font-bold'
                                          >LogOut</button>
                                          :
                                          <NavLink
                                                to='/Login'
                                                className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}
                                          >Login</NavLink>
                              }
                        </ul>

                        <label className="ml-5 cursor-pointer grid place-items-center">
                              <input onChange={handleToggleTheme} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                              <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                              <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>


                        {
                              user && <div className="avatar ml-2">
                                    <div className="w-12 rounded-full">
                                          <img src={user?.photoURL} />
                                    </div>
                              </div>
                        }

                  </div>
            </div>
      );
};

export default Navbar;