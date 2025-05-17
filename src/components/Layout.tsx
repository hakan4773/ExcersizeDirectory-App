import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
function Layout({ children, setSearchTerm }: LayoutProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen ">
      <Header
        setSearchTerm={setSearchTerm}
        toggleMenu={toggleMenu}
        isOpen={isOpen}
      />
      <main>{children}</main>
          <Footer />

    </div>
  );
}

export default Layout;
