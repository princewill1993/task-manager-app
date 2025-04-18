import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { setUser } from "../../features/user/userSlice";
import { UserPen } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleUserLogout() {
    dispatch(setUser(null));
    navigate("/");
  }

  return (
    <section className="w-full bg-blue-900 p-5">
      <nav>
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-white  text-3xl pl-10">Task Manager App</h1>
          </div>

          <div className="flex items-center gap-3 p-2 ">
            {user === null ? (
              <NavLink>
                <h2 className="bg-red-500 p-2 px-6 text-lg">Log in</h2>
              </NavLink>
            ) : (
              <button
                className="bg-white p-2 rounded-sm cursor-pointer"
                onClick={handleUserLogout}
              >
                Log out
              </button>
            )}

            {user !== null && (
              <div className="flex gap-2 rounded-sm bg-blue-950 text-white p-2 uppercase">
                <UserPen />
                <p>{user.name}</p>
              </div>
            )}
          </div>
        </header>
      </nav>
    </section>
  );
};

export default Navbar;
