
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-[#F5E6D3] p-6 rounded-full">
              <FileQuestion className="h-12 w-12 text-[#2D5D2E]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button asChild size="lg" className="gap-2 bg-[#2D5D2E] hover:bg-[#234823] text-white">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
