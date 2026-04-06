// Product data for the e-commerce website
export const products = [
  {
    id: 1,
    name: "Rose Glow Serum",
    category: "skincare",
    subcategory: "serums",
    price: 45.00,
    originalPrice: 55.00,
    rating: 4.8,
    reviews: 234,
    description: "A luxurious rose-infused serum that delivers intense hydration and a natural, radiant glow. Enriched with organic rose hip oil and vitamin E for visibly smoother, more luminous skin.",
    ingredients: "Rosa Canina Fruit Oil, Vitamin E, Hyaluronic Acid, Jojoba Oil, Rose Extract",
    howToUse: "Apply 3-4 drops to cleansed face and neck. Gently massage in upward motions. Use morning and evening for best results.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600"
    ],
    badge: "bestseller",
    inStock: true
  },
  {
    id: 2,
    name: "Lavender Dreams Night Cream",
    category: "skincare",
    subcategory: "moisturizers",
    price: 38.00,
    originalPrice: null,
    rating: 4.7,
    reviews: 189,
    description: "Wake up to softer, more supple skin with our calming lavender night cream. This rich, nourishing formula works while you sleep to restore and rejuvenate tired skin.",
    ingredients: "Lavender Essential Oil, Shea Butter, Vitamin C, Aloe Vera, Chamomile Extract",
    howToUse: "Apply a small amount to face and neck after cleansing. Massage gently until absorbed. Use every night before bed.",
    images: [
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600",
      "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600"
    ],
    badge: null,
    inStock: true
  },
  {
    id: 3,
    name: "Citrus Burst Body Mist",
    category: "fragrance",
    subcategory: "body-mist",
    price: 28.00,
    originalPrice: 35.00,
    rating: 4.9,
    reviews: 312,
    description: "An invigorating citrus body mist that awakens your senses and leaves you feeling refreshed all day. Perfect for everyday wear.",
    ingredients: "Orange Peel Oil, Lemon Extract, Bergamot, Grapefruit Essential Oil, Aloe Vera",
    howToUse: "Spray generously on pulse points and body. Reapply throughout the day as desired.",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600"
    ],
    badge: "new",
    inStock: true
  },
  {
    id: 4,
    name: "Vanilla Orchid Perfume",
    category: "fragrance",
    subcategory: "perfume",
    price: 65.00,
    originalPrice: null,
    rating: 4.6,
    reviews: 156,
    description: "An enchanting blend of warm vanilla and exotic orchid that creates a sophisticated, long-lasting fragrance. Perfect for special occasions.",
    ingredients: "Vanilla Extract, Orchid Essence, Sandalwood, Musk, Jasmine",
    howToUse: "Apply to pulse points - wrists, neck, behind ears. Allow to dry naturally for best scent development.",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600"
    ],
    badge: null,
    inStock: true
  },
  {
    id: 5,
    name: "Coconut Milk Hair Mask",
    category: "haircare",
    subcategory: "treatments",
    price: 32.00,
    originalPrice: 40.00,
    rating: 4.8,
    reviews: 278,
    description: "Deeply nourishing hair mask infused with coconut milk and argan oil. Transforms dry, damaged hair into silky, manageable locks.",
    ingredients: "Coconut Milk, Argan Oil, Keratin, Vitamin E, Honey Extract",
    howToUse: "Apply to damp hair from mid-length to ends. Leave for 10-15 minutes. Rinse thoroughly. Use weekly for best results.",
    images: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600"
    ],
    badge: "bestseller",
    inStock: true
  },
  {
    id: 6,
    name: "Green Tea Cleansing Gel",
    category: "skincare",
    subcategory: "cleansers",
    price: 24.00,
    originalPrice: null,
    rating: 4.5,
    reviews: 145,
    description: "A gentle yet effective cleansing gel enriched with green tea antioxidants. Removes impurities while maintaining skin's natural moisture balance.",
    ingredients: "Green Tea Extract, Glycerin, Cucumber Extract, Witch Hazel, Vitamin B5",
    howToUse: "Massage onto wet face in circular motions. Rinse thoroughly with lukewarm water. Use morning and evening.",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600"
    ],
    badge: null,
    inStock: true
  },
  {
    id: 7,
    name: "Honey Almond Body Butter",
    category: "bodycare",
    subcategory: "body-butter",
    price: 35.00,
    originalPrice: 42.00,
    rating: 4.9,
    reviews: 423,
    description: "Luxuriously rich body butter with organic honey and sweet almond oil. Provides 24-hour hydration and leaves skin silky smooth.",
    ingredients: "Sweet Almond Oil, Organic Honey, Shea Butter, Cocoa Butter, Vitamin E",
    howToUse: "Apply liberally to body after bathing. Massage until absorbed. Focus on dry areas like elbows, knees, and heels.",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600"
    ],
    badge: "bestseller",
    inStock: true
  },
  {
    id: 8,
    name: "Charcoal Detox Face Mask",
    category: "skincare",
    subcategory: "masks",
    price: 29.00,
    originalPrice: null,
    rating: 4.4,
    reviews: 98,
    description: "A powerful detoxifying face mask with activated charcoal that draws out impurities and unclogs pores for a clearer, refined complexion.",
    ingredients: "Activated Charcoal, Kaolin Clay, Tea Tree Oil, Eucalyptus, Witch Hazel",
    howToUse: "Apply thin layer to clean face avoiding eye area. Leave for 10-15 minutes. Rinse with warm water. Use 1-2 times weekly.",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600"
    ],
    badge: "new",
    inStock: true
  },
  {
    id: 9,
    name: "Jasmine Silk Hair Oil",
    category: "haircare",
    subcategory: "oils",
    price: 42.00,
    originalPrice: 50.00,
    rating: 4.7,
    reviews: 201,
    description: "A lightweight, non-greasy hair oil infused with jasmine and silk proteins. Adds brilliant shine and tames frizz without weighing hair down.",
    ingredients: "Jasmine Extract, Silk Proteins, Argan Oil, Vitamin E, Sweet Almond Oil",
    howToUse: "Apply 2-3 drops to damp or dry hair, focusing on ends. Can be used as a finishing oil or overnight treatment.",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
      "https://images.unsplash.com/photo-1597354984706-fac992d9306f?w=600"
    ],
    badge: null,
    inStock: true
  },
  {
    id: 10,
    name: "Peony Blush Lip Tint",
    category: "makeup",
    subcategory: "lips",
    price: 18.00,
    originalPrice: null,
    rating: 4.6,
    reviews: 167,
    description: "A hydrating lip tint with natural peony extract that delivers a beautiful, buildable wash of color while nourishing lips.",
    ingredients: "Peony Extract, Jojoba Oil, Vitamin E, Shea Butter, Natural Pigments",
    howToUse: "Apply directly to lips. Build color as desired. Reapply throughout the day.",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600",
      "https://images.unsplash.com/photo-1631214499279-4c43e42c7b71?w=600"
    ],
    badge: null,
    inStock: true
  },
  {
    id: 11,
    name: "Ocean Breeze Cologne",
    category: "fragrance",
    subcategory: "cologne",
    price: 55.00,
    originalPrice: 68.00,
    rating: 4.5,
    reviews: 89,
    description: "A fresh, aquatic cologne that captures the essence of ocean air. Light and invigorating, perfect for everyday wear.",
    ingredients: "Sea Salt, Marine Accord, Bergamot, Cedar, White Musk",
    howToUse: "Spray on pulse points. Layer with matching body wash for longer-lasting fragrance.",
    images: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600"
    ],
    badge: null,
    inStock: true
  },
  {
    id: 12,
    name: "Vitamin C Glow Drops",
    category: "skincare",
    subcategory: "serums",
    price: 48.00,
    originalPrice: null,
    rating: 4.9,
    reviews: 356,
    description: "High-potency vitamin C serum that brightens, evens skin tone, and protects against environmental damage. For visibly radiant skin.",
    ingredients: "L-Ascorbic Acid (15%), Ferulic Acid, Vitamin E, Hyaluronic Acid, Niacinamide",
    howToUse: "Apply 4-5 drops to clean face in the morning. Follow with moisturizer and SPF. Store in cool, dark place.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600",
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=600"
    ],
    badge: "bestseller",
    inStock: true
  },
  {
    id: 13,
    name: "Bamboo Charcoal Shampoo",
    category: "haircare",
    subcategory: "shampoo",
    price: 26.00,
    originalPrice: 32.00,
    rating: 4.3,
    reviews: 134,
    description: "A clarifying shampoo with bamboo charcoal that removes buildup and excess oil while refreshing the scalp. Suitable for all hair types.",
    ingredients: "Bamboo Charcoal, Tea Tree Oil, Peppermint, Aloe Vera, Coconut Oil",
    howToUse: "Massage into wet hair and scalp. Lather and rinse. Follow with conditioner. Use 2-3 times weekly.",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600"
    ],
    badge: null,
    inStock: true
  },
  {
    id: 14,
    name: "Rose Petal Bath Salts",
    category: "bodycare",
    subcategory: "bath",
    price: 22.00,
    originalPrice: null,
    rating: 4.8,
    reviews: 245,
    description: "Luxurious bath salts infused with real rose petals and essential oils. Transform your bath into a spa-like retreat.",
    ingredients: "Dead Sea Salt, Rose Petals, Rose Essential Oil, Epsom Salt, Jojoba Oil",
    howToUse: "Add 2-3 tablespoons to warm running bath water. Soak for 20 minutes for full relaxation benefits.",
    images: [
      "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600"
    ],
    badge: "new",
    inStock: true
  },
  {
    id: 15,
    name: "Matte Velvet Foundation",
    category: "makeup",
    subcategory: "face",
    price: 38.00,
    originalPrice: 45.00,
    rating: 4.4,
    reviews: 178,
    description: "A lightweight, buildable foundation with a velvet matte finish. Provides medium to full coverage that lasts all day.",
    ingredients: "Silica, Vitamin E, Hyaluronic Acid, Niacinamide, Natural Minerals",
    howToUse: "Apply with brush, sponge, or fingertips. Build coverage as needed. Set with powder for longer wear.",
    images: [
      "https://images.unsplash.com/photo-1631214499279-4c43e42c7b71?w=600",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"
    ],
    badge: null,
    inStock: true
  },
  {
    id: 16,
    name: "Turmeric Glow Mask",
    category: "skincare",
    subcategory: "masks",
    price: 34.00,
    originalPrice: null,
    rating: 4.7,
    reviews: 223,
    description: "An Ayurvedic-inspired face mask with turmeric and sandalwood. Brightens dull skin and reveals a natural, healthy glow.",
    ingredients: "Turmeric Extract, Sandalwood Powder, Honey, Yogurt Extract, Saffron",
    howToUse: "Apply even layer to clean face. Leave for 15-20 minutes. Rinse with warm water. Use 2-3 times weekly.",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600"
    ],
    badge: null,
    inStock: true
  }
];

export const categories = [
  {
    id: "skincare",
    name: "Skincare",
    description: "Nourish your skin naturally",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=400",
    count: 6
  },
  {
    id: "haircare",
    name: "Hair Care",
    description: "Healthy, lustrous locks",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400",
    count: 4
  },
  {
    id: "fragrance",
    name: "Fragrance",
    description: "Signature scents",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
    count: 3
  },
  {
    id: "bodycare",
    name: "Body Care",
    description: "Pamper your body",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400",
    count: 2
  },
  {
    id: "makeup",
    name: "Makeup",
    description: "Enhance your beauty",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
    count: 2
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "New York, NY",
    rating: 5,
    text: "The Rose Glow Serum has transformed my skin! I've been using it for 3 months and the results are incredible. My skin looks so much more radiant and hydrated.",
    product: "Rose Glow Serum",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
  },
  {
    id: 2,
    name: "Emily R.",
    location: "Los Angeles, CA",
    rating: 5,
    text: "I'm absolutely in love with the Vanilla Orchid Perfume. It's sophisticated yet approachable, and I get compliments everywhere I go. Worth every penny!",
    product: "Vanilla Orchid Perfume",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  },
  {
    id: 3,
    name: "Jessica L.",
    location: "Chicago, IL",
    rating: 5,
    text: "The Coconut Milk Hair Mask saved my damaged hair! After just two uses, my hair feels softer and looks so much healthier. This is now a staple in my routine.",
    product: "Coconut Milk Hair Mask",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
  },
  {
    id: 4,
    name: "Amanda K.",
    location: "Miami, FL",
    rating: 5,
    text: "The quality of these products is exceptional. I switched from high-end brands to Luxe Botanica and haven't looked back. Natural ingredients that actually work!",
    product: "Honey Almond Body Butter",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
  }
];

export const collections = [
  {
    id: "summer-glow",
    name: "Summer Glow Collection",
    description: "Everything you need for that perfect summer radiance",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600",
    products: [1, 3, 7, 12]
  },
  {
    id: "self-care",
    name: "Self-Care Essentials",
    description: "Create your perfect at-home spa experience",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600",
    products: [2, 5, 8, 14]
  },
  {
    id: "gift-sets",
    name: "Gift Sets",
    description: "Perfect presents for your loved ones",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600",
    products: [4, 6, 9, 11]
  }
];

export const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300",
    likes: 1234,
    link: "#"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=300",
    likes: 987,
    link: "#"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300",
    likes: 2341,
    link: "#"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=300",
    likes: 876,
    link: "#"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=300",
    likes: 1543,
    link: "#"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300",
    likes: 2108,
    link: "#"
  }
];

