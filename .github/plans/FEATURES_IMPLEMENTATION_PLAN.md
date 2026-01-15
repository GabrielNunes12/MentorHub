# Feature Implementation Plan

This file documents how to implement the following features:
1. Add your photo
2. Add more testimonials
3. Integration with Calendly
4. Integration with payment API

---

## 1. Add Your Photo

### Location: About Page
**File**: `src/pages/About.tsx`

### Steps:
1. **Add your photo to assets**:
   ```bash
   # Create images folder if it doesn't exist
   mkdir -p src/assets/images
   
   # Add your photo to:
   # src/assets/images/your-photo.jpg
   ```

2. **Update About.tsx** - Add photo section at the top:
   ```typescript
   import yourPhoto from '../assets/images/your-photo.jpg'
   
   // In the JSX, add a section like:
   <section className="py-20">
     <div className="max-w-4xl mx-auto px-4">
       <div className="flex flex-col md:flex-row gap-12 items-center">
         <div className="flex-shrink-0">
           <img 
             src={yourPhoto} 
             alt="Your Name" 
             className="w-64 h-64 rounded-lg object-cover shadow-lg"
           />
         </div>
         <div>
           <h2 className="text-4xl font-bold mb-4">About Me</h2>
           <p className="text-lg text-gray-600 dark:text-gray-300">...</p>
         </div>
       </div>
     </div>
   </section>
   ```

### Recommended Photo Settings:
- Size: 400x400 to 600x600 pixels
- Format: JPG or PNG
- Aspect ratio: Square (1:1)
- Professional headshot or casual professional photo

---

## 2. Add More Testimonials

### Location: Testimonials Page
**File**: `src/pages/Testimonials.tsx`

### Current Data Structure:
```typescript
interface Testimonial {
  id: number
  name: string
  title: string
  company: string
  content: string
  rating: number
  image: string
}
```

### Steps:

1. **Create testimonials data file** (optional - for cleaner code):
   ```bash
   # Create file:
   src/data/testimonials.ts
   ```

2. **Add new testimonials**:
   ```typescript
   // src/data/testimonials.ts
   export const testimonials = [
     {
       id: 1,
       name: "Student Name",
       title: "Job Title",
       company: "Company Name",
       content: "Their mentorship helped me...",
       rating: 5,
       image: "https://ui-avatars.com/api/?name=Student+Name"
     },
     // Add more...
   ]
   ```

3. **Update Testimonials.tsx** to import and use the data:
   ```typescript
   import { testimonials } from '../data/testimonials'
   
   // Replace the hardcoded testimonials array with:
   {testimonials.map((testimonial) => (...))}
   ```

### Quick Template for New Testimonial:
```typescript
{
  id: 7,  // Increment ID
  name: "John Smith",
  title: "Senior Developer",
  company: "Tech Corp",
  content: "Gabriel's mentorship was transformative. He provided clear guidance and practical advice that accelerated my career growth significantly.",
  rating: 5,
  image: "https://ui-avatars.com/api/?name=John+Smith"
}
```

### Using Real Images (Optional):
- Use `https://ui-avatars.com/api/?name=FirstName+LastName` for auto-generated avatars
- Or upload actual photos to `src/assets/images/testimonials/` and import them

---

## 3. Integration with Calendly

### Location: Services Page & Contact Page
**Files**: `src/pages/Services.tsx`, `src/pages/Contact.tsx`

### Steps:

1. **Get your Calendly link**:
   - Go to [calendly.com](https://calendly.com)
   - Get your Calendly URL (should be like `https://calendly.com/your-username`)
   - Add it to `.env.local`:
     ```dotenv
     VITE_CALENDLY_URL=https://calendly.com/your-username
     ```

2. **Create Calendly hook**:
   ```bash
   # Create file:
   src/hooks/useCalendly.ts
   ```

   ```typescript
   export const useCalendly = () => {
     const calendlyUrl = import.meta.env.VITE_CALENDLY_URL

     const openCalendly = () => {
       if (calendlyUrl) {
         window.open(calendlyUrl, '_blank', 'width=960,height=700')
       }
     }

     return { openCalendly, calendlyUrl }
   }
   ```

3. **Add "Book a Session" button** in Services.tsx:
   ```typescript
   import { useCalendly } from '../hooks/useCalendly'

   const Services = () => {
     const { openCalendly } = useCalendly()

     return (
       // In each service card:
       <button
         onClick={openCalendly}
         className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
       >
         Book a Session
       </button>
     )
   }
   ```

4. **Add CTA in Hero section** (Home.tsx):
   ```typescript
   <button
     onClick={openCalendly}
     className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
   >
     Schedule a Free Consultation
   </button>
   ```

---

## 4. Integration with Payment API

### Recommended Payment Solutions:

#### Option A: **Stripe** (Recommended for flexibility)
- Best for: Courses, subscriptions, one-time payments
- Setup complexity: Medium
- Fees: 2.9% + $0.30 per transaction

#### Option B: **PayPal**
- Best for: Quick setup, widely trusted
- Setup complexity: Easy
- Fees: 2.99% + $0.30 per transaction

#### Option C: **Gumroad**
- Best for: Digital products, simple setup
- Setup complexity: Very Easy
- Fees: 10% + payment processing

### Implementation Example: Stripe

1. **Install Stripe package**:
   ```bash
   npm install @stripe/react-stripe-js @stripe/js
   ```

2. **Get Stripe API key**:
   - Go to [stripe.com](https://stripe.com)
   - Create account
   - Get Publishable Key from Dashboard
   - Add to `.env.local`:
     ```dotenv
     VITE_STRIPE_PUBLIC_KEY=pk_live_YOUR_KEY
     ```

3. **Create Payment Component**:
   ```bash
   # Create file:
   src/components/PaymentForm.tsx
   ```

   ```typescript
   import { loadStripe } from '@stripe/js'
   import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

   const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

   export const PaymentForm = ({ amount, onSuccess }) => {
     const stripe = useStripe()
     const elements = useElements()

     const handleSubmit = async (e) => {
       e.preventDefault()
       
       const { token } = await stripe.createToken(elements.getElement(CardElement))
       
       if (token) {
         // Send to your backend to process payment
         const response = await fetch('/api/charge', {
           method: 'POST',
           body: JSON.stringify({ token: token.id, amount })
         })
         
         if (response.ok) onSuccess()
       }
     }

     return (
       <form onSubmit={handleSubmit}>
         <CardElement />
         <button type="submit" disabled={!stripe}>
           Pay ${(amount / 100).toFixed(2)}
         </button>
       </form>
     )
   }
   ```

4. **Add Payment Option to Services Page**:
   ```typescript
   <button
     onClick={() => setShowPayment(true)}
     className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg"
   >
     Purchase This Service
   </button>
   ```

---

## Implementation Priority

### Phase 1 (Easy - Do First):
- [x] Add your photo
- [x] Add more testimonials
- [x] Calendly integration

### Phase 2 (Medium - Do Second):
- [ ] Payment API integration (choose one)

### Phase 3 (Advanced - Do Later):
- [ ] Payment backend/database
- [ ] Invoice system
- [ ] Payment history/dashboard

---

## File Structure After Implementation

```
src/
├── pages/
│   ├── About.tsx          (Updated with photo)
│   ├── Services.tsx       (Updated with booking button)
│   ├── Testimonials.tsx   (Updated with new testimonials)
│   └── Contact.tsx        (Can add payment option)
├── components/
│   ├── PaymentForm.tsx    (New - if using Stripe)
│   └── [existing]
├── hooks/
│   ├── useCalendly.ts     (New)
│   └── [existing]
├── data/
│   └── testimonials.ts    (New - optional)
├── assets/
│   └── images/
│       ├── your-photo.jpg (New)
│       └── testimonials/   (New - optional)
└── [existing files]
```

---

## Environment Variables to Add

```dotenv
# .env.local

# Calendly
VITE_CALENDLY_URL=https://calendly.com/your-username

# Payment (choose one)
VITE_STRIPE_PUBLIC_KEY=pk_live_YOUR_KEY
# OR
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id

# Existing variables
VITE_EMAILJS_SERVICE_ID=service_j44qy4y
VITE_EMAILJS_TEMPLATE_ID=template_g76y9kb
VITE_EMAILJS_PUBLIC_KEY=6x1H0GBPhn_UKukBa
VITE_CONTACT_EMAIL=gabrieln.dev3@gmail.com
```

---

## Next Steps

1. **Start with Step 1**: Add your photo to About page
2. **Then Step 2**: Add more testimonials
3. **Then Step 3**: Add Calendly booking buttons
4. **Finally Step 4**: Add payment integration when ready

Once you're ready to implement any of these, let me know which feature you want to start with and I can help you code it!
