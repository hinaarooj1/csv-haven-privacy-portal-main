
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, FileText, PiggyBank, Star, MapPin, Leaf, Droplet, Brush, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import QuoteRequestForm from './QuoteRequestForm';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/lovable-uploads/7cc4ad4a-957b-4043-b2cb-2ced3927deb6.png" alt="Cameleon Renov" className="h-12 w-12" />
          <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent drop-shadow-sm">Cameleon Renov</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent">
            Accueil
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <Link to="/isolation-rampants" className="w-full">Isolation des Rampants</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/isolation-exterieure" className="w-full">Isolation Extérieure</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/isolation-interieure" className="w-full">Isolation Intérieure</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/peinture" className="w-full">Peinture</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/isolation-toiture" className="w-full">Isolation Toiture</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/notre-solution" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent">
            Notre Solution
          </Link>
          <Link to="/aides-financieres" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent">
            Aides Financières
          </Link>
          <Link to="/avis-clients" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent">
            Témoignages
          </Link>
          
          <Link to="/contact" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent">
            Contact
          </Link>
          <QuoteRequestForm />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("fixed inset-x-0 top-[65px] bg-white border-b border-gray-200 shadow-lg md:hidden transition-all duration-300 ease-in-out", mobileMenuOpen ? "max-h-[600px] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 pointer-events-none")}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <Home className="h-4 w-4" />
            Accueil
          </Link>
          
          <div className="border-t border-gray-200 pt-2">
            <p className="text-sm font-semibold text-gray-500 mb-2">Nos Services</p>
            <div className="flex flex-col space-y-2 pl-2">
              <Link to="/isolation-rampants" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Droplet className="h-4 w-4" />
                Isolation des Rampants
              </Link>
              <Link to="/isolation-exterieure" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Droplet className="h-4 w-4" />
                Isolation Extérieure
              </Link>
              <Link to="/isolation-interieure" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Droplet className="h-4 w-4" />
                Isolation Intérieure
              </Link>
              <Link to="/peinture" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Brush className="h-4 w-4" />
                Peinture
              </Link>
              <Link to="/isolation-toiture" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Droplet className="h-4 w-4" />
                Isolation Toiture
              </Link>
            </div>
          </div>
          
          <Link to="/notre-solution" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <Leaf className="h-4 w-4" />
            Notre Solution
          </Link>
          <Link to="/aides-financieres" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <PiggyBank className="h-4 w-4" />
            Aides Financières
          </Link>
          <Link to="/avis-clients" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <Star className="h-4 w-4" />
            Témoignages
          </Link>
          <Link to="/fichiers-csv" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <FileText className="h-4 w-4" />
            Fichiers CSV
          </Link>
          <Link to="/contact" className="text-base font-medium hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <MapPin className="h-4 w-4" />
            Contact
          </Link>
          <QuoteRequestForm triggerButton={<Button variant="outline" className="flex items-center justify-center gap-2 w-full bg-[#2D5D2E] text-white hover:bg-[#234823] border-none" onClick={() => setMobileMenuOpen(false)}>
              <FileText className="h-4 w-4" />
              Devis Gratuit
            </Button>} />
        </div>
      </div>
    </header>;
};

export default Header;
