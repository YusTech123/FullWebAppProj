import ModalSearch from "../components/ModalSearch";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";
import { useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const isLoggedIn = useAppSelector((state) => state.account.loggedIn);
  const userRole = useAppSelector((state) => state.account.role);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/admin/signin");
  //   }

  //   // userRole != Roles.SuperAdmin && userRole != Roles.Admin
  //   if (userRole != "") {
  //     navigate("/");
  //   }
  // });
  return (
    <>
      <Navbar />
      <ModalSearch />
      {children}
      <Footer />
      <Copyright />
    </>
  );
};

export default AdminLayout;
