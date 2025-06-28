export const categories = [
  {
    id: 'suction-hose',
    name: 'Suction Hose',
    description: 'Pumps and aeration systems for ponds',
    image: 'https://i.postimg.cc/GmWV7kc4/eco-flex.jpg'
  },
  {
    id: 'salt',
    name: 'Premium Salt',
    description: 'Medicines and health supplements for fish',
    image: 'https://i.postimg.cc/DyHrbGrj/IMG-20241006-130127.jpg'
  },
  {
    id: 'fishing-nets',
    name: 'Fishing Nets',
    description: 'High-quality nets for all fishing needs',
    image: 'https://i.postimg.cc/Y2hVD34R/chapa.jpg'
  },
  {
    id: 'containers-basins',
    name: 'Containers & Basins',
    description: 'Plastic containers and basins for fish farming',
    image: 'https://i.postimg.cc/FzpbT0VS/tajbucket.jpg'
  },
  {
    id: 'Water-equipment',
    name: 'Water Washing Equipment',
    description: 'Essential equipment for pond management',
    image: 'https://i.postimg.cc/vH8M3jRK/telfish.jpg'
  },
  {
    id: 'miscellaneous',
    name: 'Miscellaneous',
    description: 'Feeding systems and storage solutions',
    image: 'https://i.postimg.cc/Y2hVD34R/chapa.jpg'
  }
];

export const products = [
  // Fishing Nets
  {
    id: '1',
    name: 'Monofilament Fishing Net (50m x 3m)',
    description: 'High-quality monofilament fishing net, perfect for pond fishing and aquaculture. Durable, lightweight, and resistant to water damage.',
    price: 2500,
    originalPrice: 2800,
    image: 'https://i.postimg.cc/GmWV7kc4/eco-flex.jpg',
    category: 'fishing-nets',
    isPremium: true,
    isOnSale: true,
    stock: 25,
    rating: 4.8,
    reviews: 124,
    tags: ['monofilament', 'durable', 'pond-fishing']
  },
  {
    id: '2',
    name: 'Cast Net (Jhal) - 12 feet diameter',
    description: 'Traditional Bengali cast net for catching fish in ponds and rivers. Made with high-quality nylon material.',
    price: 1800,
    image: 'https://images.pexels.com/photos/1029927/pexels-photo-1029927.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fishing-nets',
    isPremium: false,
    isOnSale: false,
    stock: 40,
    rating: 4.5,
    reviews: 89,
    tags: ['cast-net', 'traditional', 'nylon']
  },
  {
    id: '3',
    name: 'Gill Net for Pond Fishing (100m)',
    description: 'Professional gill net designed for pond fishing operations. Various mesh sizes available.',
    price: 3200,
    image: 'https://i.postimg.cc/DyHrbGrj/IMG-20241006-130127.jpg',
    originalPrice: 3600,
    category: 'fishing-nets',
    isPremium: true,
    isOnSale: true,
    stock: 15,
    rating: 4.7,
    reviews: 67,
    tags: ['gill-net', 'professional', 'pond-fishing']
  },
  
  // Water Pumps & Aerators
  {
    id: '4',
    name: 'Submersible Water Pump - 1HP',
    description: 'Heavy-duty submersible pump for pond water circulation and drainage. Suitable for fish farming operations.',
    price: 8500,
    originalPrice: 9200,
    image:'https://i.postimg.cc/4N2b2yJG/IMG-20241005-095812.jpg',
    
    category: 'water-pumps',
    isPremium: true,
    isOnSale: true,
    stock: 12,
    rating: 4.9,
    reviews: 156,
    tags: ['submersible', '1hp', 'heavy-duty']
  },
  {
    id: '5',
    name: 'Paddle Wheel Aerator - 2HP',
    description: 'High-efficiency paddle wheel aerator for pond oxygenation. Essential for intensive fish farming.',
    price: 25000,
    // image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
    image: 'https://i.postimg.cc/FzpbT0VS/tajbucket.jpg',
    category: 'water-pumps',
    isPremium: true,
    isOnSale: false,
    stock: 8,
    rating: 4.8,
    reviews: 92,
    tags: ['aerator', '2hp', 'oxygenation']
  },
  {
    id: '6',
    name: 'Solar Water Pump System',
    description: 'Eco-friendly solar-powered water pump system for sustainable fish farming operations.',
    price: 35000,
    originalPrice: 38000,
    category: 'water-pumps',
    image: 'https://i.postimg.cc/Hn36Nq9B/chupri.jpg',
    isPremium: true,
    isOnSale: true,
    stock: 5,
    rating: 4.6,
    reviews: 34,
    tags: ['solar', 'eco-friendly', 'sustainable']
  },

  // Fish Medicine & Health
  {
    id: '7',
    name: 'Fish Antibiotics - Oxytetracycline (500g)',
    description: 'Broad-spectrum antibiotic for treating bacterial infections in fish. Veterinary grade quality.',
    price: 1200,
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fish-medicine',
    isPremium: true,
    isOnSale: false,
    stock: 50,
    rating: 4.7,
    reviews: 78,
    tags: ['antibiotic', 'bacterial-infection', 'veterinary-grade']
  },
  {
    id: '8',
    name: 'Pond Water Treatment Powder (5kg)',
    description: 'Complete water treatment solution for maintaining optimal pond water quality and fish health.',
    price: 850,
    originalPrice: 950,
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fish-medicine',
    isPremium: false,
    isOnSale: true,
    stock: 75,
    rating: 4.4,
    reviews: 145,
    tags: ['water-treatment', 'pond-care', 'quality-control']
  },
  {
    id: '9',
    name: 'Fish Vitamin Supplement (1kg)',
    description: 'Essential vitamin and mineral supplement to boost fish immunity and growth rate.',
    price: 650,
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fish-medicine',
    isPremium: false,
    isOnSale: false,
    stock: 60,
    rating: 4.5,
    reviews: 89,
    tags: ['vitamin', 'immunity', 'growth-booster']
  },

  // Containers & Basins
  {
    id: '10',
    name: 'Heavy Duty Plastic Basin - 500L',
    description: 'Large capacity plastic basin for fish sorting, washing, and temporary storage. Food-grade plastic.',
    price: 2200,
    originalPrice: 2500,
    image: 'https://images.pexels.com/photos/1029927/pexels-photo-1029927.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'containers-basins',
    isPremium: false,
    isOnSale: true,
    stock: 30,
    rating: 4.6,
    reviews: 67,
    tags: ['500l', 'food-grade', 'heavy-duty']
  },
  {
    id: '11',
    name: 'Fish Transport Tank - 1000L',
    description: 'Specialized tank for transporting live fish. Includes aeration fittings and drain valve.',
    price: 8500,
    image: 'https://images.pexels.com/photos/1029927/pexels-photo-1029927.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'containers-basins',
    isPremium: true,
    isOnSale: false,
    stock: 15,
    rating: 4.8,
    reviews: 45,
    tags: ['transport', '1000l', 'aeration-ready']
  },
  {
    id: '12',
    name: 'Plastic Storage Drum - 200L',
    description: 'Multi-purpose storage drum for fish feed, chemicals, and other farming supplies.',
    price: 1500,
    originalPrice: 1700,
    image: 'https://images.pexels.com/photos/1029927/pexels-photo-1029927.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'containers-basins',
    isPremium: false,
    isOnSale: true,
    stock: 40,
    rating: 4.3,
    reviews: 78,
    tags: ['storage', '200l', 'multi-purpose']
  },

  // Pond Equipment
  {
    id: '13',
    name: 'Pond Liner HDPE (10m x 8m)',
    description: 'High-density polyethylene pond liner for creating new ponds or repairing existing ones.',
    price: 12000,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'pond-equipment',
    isPremium: true,
    isOnSale: false,
    stock: 20,
    rating: 4.7,
    reviews: 56,
    tags: ['hdpe', 'pond-liner', 'waterproof']
  },
  {
    id: '14',
    name: 'Water Quality Test Kit',
    description: 'Complete test kit for monitoring pH, dissolved oxygen, ammonia, and other water parameters.',
    price: 3500,
    originalPrice: 4000,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'pond-equipment',
    isPremium: true,
    isOnSale: true,
    stock: 25,
    rating: 4.8,
    reviews: 89,
    tags: ['water-testing', 'ph-meter', 'quality-control']
  },
  {
    id: '15',
    name: 'Pond Thermometer (Digital)',
    description: 'Digital thermometer for accurate water temperature monitoring in fish ponds.',
    price: 850,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'pond-equipment',
    isPremium: false,
    isOnSale: false,
    stock: 50,
    rating: 4.4,
    reviews: 67,
    tags: ['digital', 'thermometer', 'temperature-monitoring']
  },

  // Feed Equipment
  {
    id: '16',
    name: 'Automatic Fish Feeder - 50kg Capacity',
    description: 'Programmable automatic feeder for consistent fish feeding. Reduces labor and ensures regular feeding.',
    price: 15000,
    originalPrice: 17000,
    image: 'https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fish-feed-equipment',
    isPremium: true,
    isOnSale: true,
    stock: 10,
    rating: 4.9,
    reviews: 123,
    tags: ['automatic', 'programmable', '50kg-capacity']
  },
  {
    id: '17',
    name: 'Feed Storage Silo - 2 Ton',
    description: 'Large capacity feed storage silo with moisture protection and easy dispensing system.',
    price: 45000,
    image: 'https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fish-feed-equipment',
    isPremium: true,
    isOnSale: false,
    stock: 5,
    rating: 4.6,
    reviews: 34,
    tags: ['storage-silo', '2-ton', 'moisture-protection']
  },
  {
    id: '18',
    name: 'Manual Feed Spreader',
    description: 'Hand-operated feed spreader for even distribution of fish feed across pond surface.',
    price: 2500,
    originalPrice: 2800,
    image: 'https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fish-feed-equipment',
    isPremium: false,
    isOnSale: true,
    stock: 35,
    rating: 4.3,
    reviews: 78,
    tags: ['manual', 'feed-spreader', 'even-distribution']
  },

  // Additional specialized equipment
  {
    id: '19',
    name: 'Suction Hose - 4 inch (50 feet)',
    description: 'Heavy-duty suction hose for pond cleaning and water transfer operations. Flexible and durable.',
    price: 3200,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'pond-equipment',
    isPremium: false,
    isOnSale: false,
    stock: 25,
    rating: 4.5,
    reviews: 56,
    tags: ['suction-hose', '4-inch', 'pond-cleaning']
  },
  {
    id: '20',
    name: 'Fish Grading Net Set (5 sizes)',
    description: 'Complete set of grading nets for sorting fish by size. Essential for commercial fish farming.',
    price: 4500,
    originalPrice: 5000,
    image: 'https://images.pexels.com/photos/1029927/pexels-photo-1029927.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fishing-nets',
    isPremium: true,
    isOnSale: true,
    stock: 18,
    rating: 4.7,
    reviews: 89,
    tags: ['grading-net', '5-sizes', 'commercial']
  }
];