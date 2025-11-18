import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Calendar, Instagram } from "lucide-react";
import heroBridal from "@/assets/hero-bridal.jpg";

const Index = () => {
  const collections = [
    { name: "Bridal\nCouture", count: "28 Pieces", href: "/bridal" },
    { name: "Lehengas", count: "42 Pieces", href: "/collections?category=Lehengas" },
    { name: "Sarees", count: "35 Pieces", href: "/collections?category=Sarees" },
    { name: "Gowns", count: "19 Pieces", href: "/collections?category=Gowns" },
    { name: "Anarkalis\nWear", count: "31 Pieces", href: "/collections?category=Anarkalis" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBridal})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Couture for the Modern Royal
            </h1>
            <p className="text-lg md:text-xl mb-8 text-foreground/90">
              Where artistry meets legacy. Each creation tells the story of intricate craftsmanship, 
              timeless elegance and unparalleled luxury. Step into a world where tradition embraces modernity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/collections">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                  Explore Collections
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Collections */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Premium Collections</h2>
          <p className="text-muted-foreground">A symphony of colors, textures & craftsmanship in every weave</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={collection.href}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-3">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1610030469983-98e550d6193c' : 
                        index === 1 ? '1583846283882-3c5bc17419ac' : 
                        index === 2 ? '1610030469983-98e550d6193c' :
                        index === 3 ? '1595341888016-a392ef81b7de' :
                        '1583846283882-3c5bc17419ac'
                      }?auto=format&fit=crop&q=80`}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-bold mb-1 whitespace-pre-line">{collection.name}</h3>
                      <p className="text-sm text-white/80">{collection.count}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* By Aisha - The Vision */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">By Aisha — The Vision</h2>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            "Every Nazara creation is born from a dream—a vision of a woman who stands at the intersection of heritage and 
            modernity. Our designs celebrate femininity, power, and the timeless beauty of Indian artistry. From the first sketch 
            to the final stitch, every detail is infused with passion, precision, and purpose. This is more than fashion; it's wearable art 
            that tells your unique story."
          </p>
          <p className="text-2xl font-bold text-primary italic">— Aisha</p>
          <p className="text-sm text-muted-foreground mt-2">Creative Director & Founder</p>
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Lookbook</h2>
          <p className="text-muted-foreground">Step into the allure of our couture</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={`https://images.unsplash.com/photo-${
                  i === 0 ? '1610030469983-98e550d6193c' : 
                  i === 1 ? '1583846283882-3c5bc17419ac' : 
                  i === 2 ? '1595341888016-a392ef81b7de' :
                  '1519741497674-611481863552'
                }?auto=format&fit=crop&q=80`}
                alt={`Lookbook ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/lookbook">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Full Lookbook
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Brides Speak */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Brides Speak</h2>
          <p className="text-muted-foreground">Real stories, timeless memories</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 rounded-lg">
            <div className="flex gap-1 mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-xl">★</span>
              ))}
            </div>
            <p className="text-lg text-center mb-6 italic">
              "I felt like royalty on my wedding day. The craftsmanship, the attention to detail, 
              and the way my lehenga made me feel—it was everything I dreamed of and more. 
              Nazara by Aisha didn't just create an outfit; they created a memory I'll cherish forever."
            </p>
            <p className="text-center font-semibold">— Priya Sharma</p>
            <p className="text-center text-sm text-muted-foreground">Bride, December 2024</p>
          </div>
        </div>
      </section>

      {/* Follow Our Journey */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Follow Our Journey</h2>
          <p className="text-muted-foreground">@nazarabyaisha</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg bg-secondary/20">
              <img
                src={`https://images.unsplash.com/photo-${
                  i % 4 === 0 ? '1610030469983-98e550d6193c' : 
                  i % 4 === 1 ? '1583846283882-3c5bc17419ac' : 
                  i % 4 === 2 ? '1595341888016-a392ef81b7de' :
                  '1519741497674-611481863552'
                }?auto=format&fit=crop&q=80`}
                alt={`Instagram ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Instagram className="mr-2" />
            Follow Us on Instagram
          </Button>
        </div>
      </section>

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

export default Index;
