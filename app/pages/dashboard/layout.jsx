import Nav from "@/components/Nav";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="mt-5 mb-20">{children}</div>
    </>
  );
};

export default DashboardLayout;
