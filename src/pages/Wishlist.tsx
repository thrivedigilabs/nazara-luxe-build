import { Navbar } from "@/components/Navbar";
import { Heart } from "lucide-react";

const Wishlist = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Your Wishlist</h1>
        
        <div className="text-center py-24">
          <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-6">
            Save your favorite pieces for later
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
