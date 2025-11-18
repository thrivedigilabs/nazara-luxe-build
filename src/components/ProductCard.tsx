import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;
  
  const price = parseFloat(node.priceRange.minVariantPrice.amount);
  const currency = node.priceRange.minVariantPrice.currencyCode;
  const image = node.images.edges[0]?.node.url;
  const defaultVariant = node.variants.edges[0]?.node;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!defaultVariant) return;

    const cartItem = {
      product,
      variantId: defaultVariant.id,
      variantTitle: defaultVariant.title,
      price: defaultVariant.price,
      quantity: 1,
      selectedOptions: defaultVariant.selectedOptions || []
    };

    addItem(cartItem);
  };

  return (
    <Link to={`/product/${node.handle}`}>
      <div className="group cursor-pointer">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4 luxury-shadow">
          {image && (
            <img
              src={image}
              alt={node.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          
          <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-background transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-1">
          <h3 className="font-medium text-lg line-clamp-1">{node.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{node.description}</p>
          <div className="flex items-center justify-between pt-2">
            <p className="text-xl font-bold gold-text">
              {currency} ${price.toFixed(2)}
            </p>
            <Button
              size="sm"
              onClick={handleQuickAdd}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
