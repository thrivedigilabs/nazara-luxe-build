import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6 gold-text">
            Customer Account
          </h1>
          
          <Card className="p-8 mb-8">
            <p className="text-muted-foreground mb-6">
              Customer accounts are managed through Shopify. When you complete your first purchase, 
              you'll receive an email to create your customer account where you can:
            </p>
            
            <div className="grid gap-4 text-left mb-6">
              <div className="flex items-start gap-3">
                <ShoppingBag className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Track Your Orders</h3>
                  <p className="text-sm text-muted-foreground">
                    View order history, tracking information, and delivery status
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Save Your Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Store shipping addresses and payment methods for faster checkout
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/collections">
              <Button size="lg">
                Browse Collections
              </Button>
            </Link>
            
            <Link to="/wishlist">
              <Button size="lg" variant="outline">
                View Wishlist
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Account;
