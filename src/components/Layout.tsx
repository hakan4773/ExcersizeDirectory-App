import React from "react";
import Header from "./Header";

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
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white text-center py-4 mt-auto">
        <p>© 2025 Egzersiz Rehberi - Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default Layout;
