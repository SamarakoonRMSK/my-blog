import { Sidebar } from "flowbite-react";

import {
  HiArrowSmRight,
  HiChartPie,
  HiUser,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
} from "react-icons/hi";
import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { signoutSuccess } from "../store/user/userSlice";
import { useDispatch } from "react-redux";

export function DashSlidebar() {
  const { currentUser } = useSelector((state) => state.userSlice);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

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

  return (
    <Sidebar className="w-full sm:w-60" aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {currentUser && currentUser.isAdmin && (
            <Link to="/dashboard?tab=dash">
              <Sidebar.Item
                icon={HiChartPie}
                as="div"
                active={"dash" === searchParams.get("tab")}
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              icon={HiUser}
              active={"profile" === searchParams.get("tab")}
              label={currentUser.isAdmin ? "Admin" : "User"}
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Link to="/dashboard?tab=favorite">
            <Sidebar.Item
              icon={MdFavorite}
              active={"favorite" === searchParams.get("tab")}
              as="div"
            >
              Favorite Posts
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <>
              <Link to="/dashboard?tab=posts">
                <Sidebar.Item
                  active={"posts" === searchParams.get("tab")}
                  icon={HiDocumentText}
                  as="div"
                >
                  Posts
                </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=users">
                <Sidebar.Item
                  active={"users" === searchParams.get("tab")}
                  icon={HiOutlineUserGroup}
                  as="div"
                >
                  Users
                </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=comments">
                <Sidebar.Item
                  active={"comments" === searchParams.get("tab")}
                  icon={HiAnnotation}
                  as="div"
                >
                  Comments
                </Sidebar.Item>
              </Link>
            </>
          )}

          <Sidebar.Item
            icon={HiArrowSmRight}
            as="div"
            className="cursor-pointer"
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
