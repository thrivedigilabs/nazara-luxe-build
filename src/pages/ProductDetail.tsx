import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { getProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Heart, ShoppingBag, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!handle) return;
      
      try {
        setLoading(true);
        const data = await getProductByHandle(handle);
        setProduct(data);
        setSelectedVariant(data.variants.edges[0]?.node || null);
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    };

    addItem(cartItem);
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <Skeleton className="aspect-[3/4] w-full" />
            <div className="space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-lg">Product not found</p>
        </div>
      </div>
    );
  }

  const price = selectedVariant ? parseFloat(selectedVariant.price.amount) : 0;
  const currency = selectedVariant?.price.currencyCode || 'USD';

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 luxury-shadow">
              <img
                src={product.images.edges[selectedImage]?.node.url || ''}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.edges.slice(0, 4).map((image: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg ${
                    selectedImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <img
                    src={image.node.url}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">SKU: {product.id.split('/').pop()}</p>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <p className="text-3xl font-bold gold-text mb-4">
                {currency} ${price.toFixed(2)}
              </p>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Variant Selection */}
            {product.options.length > 0 && (
              <div className="space-y-4">
                {product.options.map((option: any) => (
                  <div key={option.name}>
                    <label className="block text-sm font-medium mb-2">{option.name}</label>
                    <div className="flex gap-2">
                      {option.values.map((value: string) => {
                        const variant = product.variants.edges.find((v: any) =>
                          v.node.selectedOptions.some((o: any) => o.value === value)
                        )?.node;

                        return (
                          <Button
                            key={value}
                            variant={selectedVariant?.id === variant?.id ? "default" : "outline"}
                            onClick={() => setSelectedVariant(variant)}
                            disabled={!variant?.availableForSale}
                          >
                            {value}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full" 
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingBag className="mr-2" />
                {selectedVariant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              <Button size="lg" variant="outline" className="w-full">
                <Heart className="mr-2" />
                Add to Wishlist
              </Button>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Craftsmanship</h3>
                <p className="text-sm text-muted-foreground">
                  Each piece is handcrafted by skilled artisans, taking hundreds of hours to complete. 
                  Made with premium fabrics and intricate embroidery work.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Shipping & Returns</h3>
                <p className="text-sm text-muted-foreground">
                  Free shipping on orders over $500. Made-to-order: 4-6 weeks delivery. 
                  30-day return policy applies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
