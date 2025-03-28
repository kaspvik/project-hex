import { ReactNode } from "react";
import Header from "./layout/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
