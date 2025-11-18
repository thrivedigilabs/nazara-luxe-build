import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Story</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="aspect-video overflow-hidden rounded-lg luxury-shadow mb-8">
              <img
                src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80"
                alt="Designer at work"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Nazara by Aisha was born from a passion for preserving the rich heritage of Indian 
                textile arts while embracing contemporary design sensibilities. Founded by designer 
                Aisha, each creation tells a story of dedication, artistry, and timeless elegance.
              </p>

              <p>
                Our atelier is home to a team of master craftsmen who have honed their skills over 
                generations. From intricate hand-embroidery to delicate beadwork, every piece is a 
                labor of love that can take hundreds of hours to complete.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Our Philosophy</h2>
              
              <p>
                We believe in the beauty of slow fashion—each garment is made-to-order, ensuring 
                perfect fit and reducing waste. Our commitment to sustainability extends to our 
                choice of materials, working with organic fabrics and supporting local artisan 
                communities.
              </p>

              <p>
                Whether you're looking for a breathtaking bridal lehenga or an elegant festive 
                saree, Nazara by Aisha offers bespoke pieces that celebrate your individual style 
                while honoring tradition.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Craftsmanship</h2>
              
              <p>
                Our artisans use traditional techniques passed down through generations, including 
                zardozi embroidery, gota patti work, and hand-block printing. Each technique 
                requires years of training and a keen eye for detail.
              </p>

              <p>
                From the first sketch to the final stitch, we oversee every step of the creation 
                process to ensure that each piece meets our exacting standards of quality and beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
