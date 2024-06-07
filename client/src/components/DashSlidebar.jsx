import { Sidebar } from "flowbite-react";
import { useEffect } from "react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

export function DashSlidebar() {
  const { currentUser } = useSelector((state) => state.userSlice);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Sidebar className="w-full sm:w-60" aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {currentUser && currentUser.isAdmin && (
            <Sidebar.Item icon={HiChartPie} as="div">
              Dashboard
            </Sidebar.Item>
          )}
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              icon={HiUser}
              active={"profile" === searchParams.get("tab")}
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item
            icon={HiViewBoards}
            label="Pro"
            labelColor="dark"
            as="div"
          >
            Kanban
          </Sidebar.Item>
          <Sidebar.Item icon={HiInbox} label="3" as="div">
            Inbox
          </Sidebar.Item>

          <Sidebar.Item icon={HiShoppingBag} as="div">
            Products
          </Sidebar.Item>
          <Sidebar.Item icon={HiArrowSmRight} as="div">
            Sign In
          </Sidebar.Item>
          <Link to="/dashboard?tab=comments">
            <Sidebar.Item
              icon={HiTable}
              active={"comments" === searchParams.get("tab")}
              as="div"
            >
              Sign Out
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
