import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../components/AccessibleUI';
import { ChevronLeft, CreditCard, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * Checkout Screen with accessible form validation.
 * Redesign Feature: Cognitive Error Prevention & Keyboard Focus States.
 */
export const CheckoutScreen = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate validation
    const newErrors: Record<string, string> = {};
    const form = e.target as HTMLFormElement;
    const cardNumber = (form.elements.namedItem('cardNumber') as HTMLInputElement).value;
    
    if (cardNumber.length < 16) {
      newErrors.cardNumber = "Card number must be 16 digits. Please check and re-enter.";
    }

    setErrors(newErrors);
    setIsSubmitting(false);

    if (Object.keys(newErrors).length === 0) {
      // Success
      alert("Order placed successfully!");
      navigate('/');
    }
  };

  return (
    <main className="pb-24 animate-in slide-in-from-bottom duration-400">
      <header className="px-4 py-6 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} aria-label="Back to cart">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-xl font-bold text-gray-900">Checkout</h1>
      </header>

      <form onSubmit={handleSubmit} className="px-6 space-y-8">
        {/* Shipping Address */}
        <section aria-labelledby="shipping-heading">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <h2 id="shipping-heading" className="text-lg font-bold text-gray-900">Shipping Address</h2>
          </div>
          <div className="space-y-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <Input label="Full Name" defaultValue="Pankaj Patel" required />
            <Input label="Address" defaultValue="Jubilee Hills, Hyderabad, India" required />
            <Input label="Pincode" defaultValue="500019" required pattern="[0-9]{6}" helperText="Enter 6-digit postal code" />
          </div>
        </section>

        {/* Payment Method */}
        <section aria-labelledby="payment-heading">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-5 h-5 text-primary" />
            <h2 id="payment-heading" className="text-lg font-bold text-gray-900">Payment Method</h2>
          </div>
          
          <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar" role="tablist" aria-label="Payment options">
            {['Debit Card', 'Credit Card', 'UPI', 'Net Banking'].map((method, i) => (
              <Button 
                key={method} 
                type="button"
                variant={i === 0 ? 'primary' : 'secondary'}
                className="whitespace-nowrap rounded-full px-6"
                role="tab"
                aria-selected={i === 0}
              >
                {method}
              </Button>
            ))}
          </div>

          <div className="space-y-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <Input label="Name on Card" placeholder="John Doe" required />
            <Input 
              label="Card Number" 
              name="cardNumber"
              placeholder="0000 0000 0000 0000" 
              error={errors.cardNumber}
              required 
              maxLength={16}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Expiry Date" placeholder="MM/YY" required />
              <Input label="CVV" placeholder="123" type="password" required maxLength={3} />
            </div>
          </div>
        </section>

        {/* Summary */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Total Amount</p>
              <p className="text-2xl font-extrabold text-gray-900">₹6,448.00</p>
            </div>
            <Button 
              type="submit" 
              className="h-14 px-8 rounded-full text-lg shadow-lg shadow-primary/20"
              disabled={isSubmitting}
            >
              PLACE ORDER <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
};
