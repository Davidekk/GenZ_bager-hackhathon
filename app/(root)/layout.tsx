import Navbar from "@/components/shared/navbar/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100  relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="mt-12 min-h-screen flex-1 px-6 sm:px-14">
          {children}
        </section>
      </div>
    </main>
  );
};

export default Layout;
