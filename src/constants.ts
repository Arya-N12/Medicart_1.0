export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  category: string;
  altText: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Dr. Trust Professional Finger Pulse Oximeter',
    price: 1299,
    rating: 4.5,
    description: 'Accurately measure your blood oxygen saturation levels (SpO2), pulse rate, and pulse strength in seconds. Features a high-resolution, multi-directional OLED display for easy reading.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400',
    category: 'Diagnostic Devices',
    altText: 'A black digital finger pulse oximeter showing a pulse rate of 75 and SpO2 of 98 percent on a bright OLED screen.'
  },
  {
    id: '2',
    name: 'Complete First-Aid Responder Kit',
    price: 850,
    rating: 4.8,
    description: 'A comprehensive first aid kit containing bandages, antiseptics, scissors, and emergency supplies for home or professional use.',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446f91?auto=format&fit=crop&q=80&w=400',
    category: 'First Aid & Wound Care',
    altText: 'An open red hard-shell first aid case packed with organized medical supplies including bandages, gauze, and antiseptic wipes.'
  },
  {
    id: '3',
    name: 'Accu-Chek Active Blood Glucometer',
    price: 999,
    rating: 4.6,
    description: 'Easy-to-use blood glucose monitoring system with accurate results in just 5 seconds. Requires only a tiny blood sample.',
    image: 'https://images.unsplash.com/photo-1615461066841-6116ecaaba7f?auto=format&fit=crop&q=80&w=400',
    category: 'Diagnostic Devices',
    altText: 'A black Accu-Chek Active glucometer displaying a blood sugar reading of 104 mg/dL next to a container of test strips.'
  },
  {
    id: '4',
    name: 'Omron Digital Blood Pressure Monitor',
    price: 2450,
    rating: 4.7,
    description: 'Fully automatic blood pressure monitor with Intellisense technology for controlled inflation and accurate readings.',
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=400',
    category: 'Diagnostic Devices',
    altText: 'A white Omron digital blood pressure monitor with a large LCD screen and a gray arm cuff attached by a tube.'
  }
];
