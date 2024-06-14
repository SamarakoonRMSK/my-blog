import { Button, Navbar, TextInput, Dropdown, Avatar } from "flowbite-react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaSun } from "react-icons/fa";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/theme/themeSlice";
import { useEffect, useState } from "react";
import { signoutSuccess } from "../store/user/userSlice";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.userSlice);
  const { theme } = useSelector((state) => state.themeSlice);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar fluid rounded className="border-b-2 bg-slate-50">
      <Link
        to="/"
        className="whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <Navbar.Brand as={"div"}>
          <span className="self-center p-1 whitespace-nowrap text-xl font-semibold text-white bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-lg">
            SKS
          </span>
          Blog
        </Navbar.Brand>
      </Link>
      <form className="hidden sm:inline" onSubmit={handleSubmit}>
        <TextInput
          type="text"
          rightIcon={HiOutlineSearch}
          placeholder="Search..."
        />
      </form>

      <div className="flex gap-2 md:order-2">
        <Button
          className="w-13 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaSun />}
        </Button>

        {currentUser ? (
          <>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img={currentUser.profilePicture}
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{currentUser.username}</span>
                <span className="block truncate text-sm font-medium">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to="/dashboard?tab=profile">
                <Dropdown.Item>profile</Dropdown.Item>
              </Link>
              {currentUser && currentUser.isAdmin && (
                <Link to="/create-post">
                  <Dropdown.Item>Create Post</Dropdown.Item>
                </Link>
              )}

              <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
            </Dropdown>
          </>
        ) : (
          <>
            <Link to="/signup">
              <Button gradientDuoTone="purpleToBlue">Sign up</Button>
            </Link>
            <Link to="/signin">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign in
              </Button>
            </Link>
          </>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/">
          <Navbar.Link active={location.pathname == "/"} as={"div"}>
            Home
          </Navbar.Link>
        </Link>
        <Link to="/projects">
          <Navbar.Link active={location.pathname == "/projects"} as={"div"}>
            Project
          </Navbar.Link>
        </Link>
        <Link to="mailto:yourmail@domain.com">
          <Navbar.Link as={"div"}>Contact</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
