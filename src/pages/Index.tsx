import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Calendar, Star } from "lucide-react";
import heroBridal from "@/assets/hero-bridal.jpg";

const Index = () => {
  const collections = [
    { name: "Bridal", pieces: "15 Pieces", href: "/bridal" },
    { name: "Lehengas", pieces: "8 Pieces", href: "/collections?category=Lehengas" },
    { name: "Sarees", pieces: "6 Pieces", href: "/collections?category=Sarees" },
  ];

  const testimonials = [
    {
      text: "The craftsmanship is unparalleled. My bridal lehenga was a masterpiece that left everyone speechless.",
      name: "Priya Mehta"
    },
    {
      text: "Aisha's attention to detail and understanding of traditional aesthetics made my wedding outfit truly special.",
      name: "Rina Kapoor"
    },
    {
      text: "From design to delivery, the entire experience was exceptional. I felt like royalty!",
      name: "Anjali Shah"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBridal})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 gold-text">
            Nazara by Aisha
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Where Heritage Meets Haute Couture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/collections">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Explore Collections
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur text-white border-white hover:bg-white hover:text-foreground">
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Collections Preview */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Curated Collections</h2>
          <p className="text-lg text-muted-foreground">Each piece tells a story of timeless elegance</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4 luxury-shadow">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1610030469983-98e550d6193c' : 
                        index === 1 ? '1583846283882-3c5bc17419ac' : 
                        '1610030469983-98e550d6193c'
                      }?auto=format&fit=crop&q=80`}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{collection.name}</h3>
                      <p className="text-sm">{collection.pieces}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Designer Vision */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80"
                alt="Designer"
                className="rounded-lg luxury-shadow"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nazara by Aisha reimagines traditional Indian couture through a contemporary lens. 
                Each creation is a masterpiece of hand-embroidery, where skilled artisans dedicate 
                hundreds of hours to bring your dream ensemble to life. Our commitment to sustainable 
                luxury means every piece is made-to-order, ensuring exclusivity and reducing waste.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold gold-text">500+</p>
                  <p className="text-sm text-muted-foreground">Hours of Craftsmanship</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold gold-text">100%</p>
                  <p className="text-sm text-muted-foreground">Handcrafted</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold gold-text">Made-to-Order</p>
                  <p className="text-sm text-muted-foreground">Excellence</p>
                </div>
              </div>

              <Link to="/about">
                <Button size="lg">Our Story</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-secondary/30 rounded-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-4">{testimonial.text}</p>
              <p className="font-semibold">— {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 gold-text">Nazara by Aisha</h2>
          <p className="text-muted-foreground mb-6">Where Heritage Meets Haute Couture</p>
          <div className="flex justify-center gap-6 mb-6">
            <Link to="/collections" className="hover:text-primary transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Nazara by Aisha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
