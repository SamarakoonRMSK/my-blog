import React from "react";
import { DashSlidebar } from "../components/DashSlidebar";
import { useSearchParams } from "react-router-dom";
import DashProfile from "../components/DashProfile";
import DashFavorite from "../components/DashFavorite";
import DashboardComp from "../components/DashboardComp";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div>
        <DashSlidebar />
      </div>
      {"profile" === searchParams.get("tab") && <DashProfile />}
      {"favorite" === searchParams.get("tab") && <DashFavorite />}
      {"posts" === searchParams.get("tab") && <DashPosts />}
      {"users" === searchParams.get("tab") && <DashUsers />}
      {"comments" === searchParams.get("tab") && <DashComments />}
      {"dash" === searchParams.get("tab") && <DashboardComp />}
    </div>
  );
}
