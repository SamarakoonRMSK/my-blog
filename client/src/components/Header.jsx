import { Button, Navbar, TextInput, Dropdown, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { FaSun } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.userSlice);
  return (
    <Navbar fluid rounded className="border-b-2 bg-slate-50">
      <Link
        to="/"
        className="whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <Navbar.Brand as={"div"}>
          <span className="self-center p-1 whitespace-nowrap text-xl font-semibold text-white bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-lg">
            SKR
          </span>
          Blog
        </Navbar.Brand>
      </Link>
      <form className="hidden sm:inline">
        <TextInput
          id="email4"
          type="email"
          rightIcon={HiOutlineSearch}
          placeholder="Search here..."
        />
      </form>

      <div className="flex gap-2 md:order-2">
        <Button className="w-13 h-10 hidden sm:inline" color="gray" pill>
          <FaSun />
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
              <Dropdown.Item>profile</Dropdown.Item>
              <Dropdown.Item>Log out</Dropdown.Item>
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
