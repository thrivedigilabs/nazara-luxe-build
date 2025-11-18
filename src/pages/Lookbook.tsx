import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Lookbook = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "Gowns", "Sarees", "Lehengas"];

  const lookbookImages = [
    { category: "Gowns", url: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80" },
    { category: "Lehengas", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80" },
    { category: "Sarees", url: "https://images.unsplash.com/photo-1583846283882-3c5bc17419ac?auto=format&fit=crop&q=80" },
    { category: "Gowns", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" },
    { category: "Lehengas", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80" },
    { category: "Sarees", url: "https://images.unsplash.com/photo-1583846283882-3c5bc17419ac?auto=format&fit=crop&q=80" },
    { category: "Lehengas", url: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80" },
    { category: "Gowns", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" },
  ];

  const filteredImages = selectedFilter === "All" 
    ? lookbookImages 
    : lookbookImages.filter(img => img.category === selectedFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">Lookbook</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our exquisite collection of bridal wear through our editorial shoots
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-8 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`text-lg font-medium pb-2 transition-colors ${
                  selectedFilter === filter
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="aspect-[3/4] overflow-hidden rounded-lg bg-secondary/20 cursor-pointer group"
            >
              <img
                src={image.url}
                alt={`${image.category} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Nazara by Aisha</h3>
              <p className="text-sm text-muted-foreground">
                Handcrafted luxury couture. Every piece tells a story of artisan dedication and 24k gold craftsmanship.
              </p>
              <div className="flex gap-4 mt-4">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <svg className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/collections" className="text-muted-foreground hover:text-primary">Collections</Link></li>
                <li><Link to="/bridal" className="text-muted-foreground hover:text-primary">Bridal</Link></li>
                <li><Link to="/lookbook" className="text-muted-foreground hover:text-primary">Lookbook</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-primary">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Shipping Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Returns & Exchange</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-primary">Contact Us</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📧 hello@nazarabyaisha.com</li>
                <li>📞 +91 123 456 7890</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2025 Nazara by Aisha. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Lookbook;
