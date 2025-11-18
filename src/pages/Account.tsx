import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center py-24">
          <User className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-3xl font-bold mb-4">Welcome to Your Account</h1>
          <p className="text-muted-foreground mb-8">
            Sign in to manage your orders, wishlist, and profile
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline">Create Account</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
