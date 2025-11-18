import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  // Wishlist stored in localStorage
  const [wishlistItems, setWishlistItems] = useState<string[]>(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const removeFromWishlist = (handle: string) => {
    const updated = wishlistItems.filter(item => item !== handle);
    setWishlistItems(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4 gold-text">
            Your Wishlist
          </h1>
          <p className="text-muted-foreground">
            Save your favorite pieces for later
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-serif mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">
              Start adding items you love to your wishlist
            </p>
            <Link to="/collections">
              <Button>
                <ShoppingBag className="mr-2 h-4 w-4" />
                Browse Collections
              </Button>
            </Link>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              You have {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} saved
            </p>
            <Link to="/collections">
              <Button variant="outline">
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Wishlist;
