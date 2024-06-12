import React from "react";
import { DashSlidebar } from "../components/DashSlidebar";
import { useSearchParams } from "react-router-dom";
import DashProfile from "../components/DashProfile";
import DashFavorite from "../components/DashFavorite";

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div>
        <DashSlidebar />
      </div>
      {"profile" === searchParams.get("tab") && <DashProfile />}
      {"favorite" === searchParams.get("tab") && <DashFavorite />}
    </div>
  );
}
