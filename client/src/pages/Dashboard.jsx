import React from "react";
import { DashSlidebar } from "../components/DashSlidebar";
import { useSearchParams } from "react-router-dom";
import DashProfile from "../components/DashProfile";
import DashFavorite from "../components/DashFavorite";
import DashboardComp from "../components/DashboardComp";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currentUser } = useSelector((state) => state.userSlice);

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div>
        <DashSlidebar />
      </div>
      {"profile" === searchParams.get("tab") && <DashProfile />}
      {"favorite" === searchParams.get("tab") && <DashFavorite />}
      {"posts" === searchParams.get("tab") && currentUser.isAdmin ? (
        <DashPosts />
      ) : (
        <div></div>
      )}
      {"users" === searchParams.get("tab") && currentUser.isAdmin ? (
        <DashUsers />
      ) : (
        <div></div>
      )}
      {"comments" === searchParams.get("tab") && currentUser.isAdmin ? (
        <DashComments />
      ) : (
        <div></div>
      )}
      {"dash" === searchParams.get("tab") && currentUser.isAdmin ? (
        <DashboardComp />
      ) : (
        <div></div>
      )}
    </div>
  );
}
