import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [toggleLogout, setToggleLogout] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const username = user?.displayName
    ? user?.displayName
    : user?.email.split("@")[0];
  const userPicture = user?.photoURL ? user?.photoURL : "/profile_image.png";
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { text: "Home", link: "/" },
    { text: "Movies", link: "/movies" },
    { text: "Series", link: "/tvseries" },
    { text: "New & Popular", link: "/newpopular" },
    { text: "mylist", link: "/mylist" },
  ];

  const onLogout = async () => {
    try {
      await signOut(auth);
      setToggleLogout(false);
      navigate("/login");
    } catch {
      <p>{error.message}</p>;
    }
  };

  const handleInputSearch = async (e) => {
    e.key == "Enter" && navigate(`/search/${searchQuery}/1`);
  };

  const handleSearch = async () => {
    navigate(`/search/${searchQuery}/1`);
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-zinc-900 z-50 py-4 flex items-center justify-between">
      <div className="container flex justify-between items-center">
        <section className="header-left flex gap-8 items-center">
          <Link>
            <img
              src="/logo.png"
              alt="Website Logo"
              className="w-10 rounded-sm"
            />
          </Link>
          <div className="navigation flex gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.text}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "nav-active" : "text-zinc-400"
                }
              >
                {item.text}
              </NavLink>
            ))}
          </div>
        </section>

        <section className="header-right flex gap-4">
          <div className="flex items-center relative">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={(e) => handleInputSearch(e)}
              type="text"
              placeholder="Search Movie"
              className="p-2 bg-zinc-900 border border-zinc-500 rounded-sm"
            />
            <button
              onClick={handleSearch}
              className="absolute right-1 p-2 bg-zinc-900"
            >
              <img src="/icon_search.svg" alt="Search Icon" />
            </button>
          </div>

          {user ? (
            <button className="relative">
              <div
                onClick={() => setToggleLogout(!toggleLogout)}
                className="cursor-pointer flex items-center gap-2"
              >
                <p>{username}</p>
                <img
                  src={userPicture}
                  alt="Profile"
                  className="w-7 rounded-sm"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="/icon_arrow_down.svg"
                  alt="Arrow Down Icon"
                  className="scale-90"
                />
              </div>

              <div
                onClick={onLogout}
                className={
                  toggleLogout
                    ? "absolute right-0 top-10 bg-zinc-800 py-2 px-4"
                    : "hidden"
                }
              >
                Logout
              </div>
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-red-700 hover:bg-red-800 py-2 px-4 rounded-sm"
            >
              Login
            </Link>
          )}
        </section>
      </div>
    </div>
  );
};

export default Header;
