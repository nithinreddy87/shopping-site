let products = []; // Initialize as empty, will be populated by generateRandomProducts

        const categories = ['Electronics', 'Clothing', 'Mobiles', 'Home & Kitchen', 'Groceries', 'Footwear'];
        const productDetails = {
            'Electronics': {
                adjectives: ['Smart', 'Wireless', 'Portable', 'High-Definition', 'Compact', 'Noise-Cancelling'],
                nouns: ['TV', 'Headphones', 'Laptop', 'Speaker', 'Camera', 'Smartwatch'],
                descriptions: [
                    'Experience stunning visuals and smart features.',
                    'Immersive audio experience with deep bass.',
                    'Powerful performance for work and gaming.',
                    'Crystal clear sound for any occasion.',
                    'Capture breathtaking moments with precision.',
                    'Track your health and fitness with advanced sensors.'
                ],
                minPrice: 500,
                maxPrice: 80000,
                imageColors: { bg: '007bff', text: 'ffffff' }, // Blue
                imageUrls: [
                    'https://images.unsplash.com/photo-1546435770-a3e426bf4727?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Headphones
                    'https://images.unsplash.com/photo-1510125594112-f002ddfce7c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Camera
                    'https://images.unsplash.com/photo-1593340059345-21953257e849?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Smartwatch
                    'https://images.unsplash.com/photo-1629235940989-91544a4923f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Laptop
                    'https://images.unsplash.com/photo-1601931885404-03c0515152a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Speaker
                    'https://images.unsplash.com/photo-1611756540608-89f53e390231?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // TV
                ]
            },
            'Clothing': {
                adjectives: ['Comfortable', 'Stylish', 'Organic Cotton', 'Durable', 'Trendy', 'Classic'],
                nouns: ['T-Shirt', 'Jeans', 'Dress', 'Jacket', 'Sweater', 'Shirt'],
                descriptions: [
                    'Soft and breathable fabric for all-day comfort.',
                    'A timeless classic for your everyday wardrobe.',
                    'Elegant design perfect for any special occasion.',
                    'Warm and cozy, ideal for cooler weather.',
                    'Fashion-forward piece to elevate your style.',
                    'Versatile and easy to pair with anything.'
                ],
                minPrice: 300,
                maxPrice: 5000,
                imageColors: { bg: '28a745', text: 'ffffff' }, // Green
                imageUrls: [
                    'https://images.unsplash.com/photo-1521572178477-f58c5192d160?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // T-Shirt
                    'https://images.unsplash.com/photo-154109964-42a8b3017f8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Jeans
                    'https://images.unsplash.com/photo-1582552938357-30e75207905a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Dress
                    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Jacket
                    'https://images.unsplash.com/photo-1603252109315-b04022067756?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Sweater
                    'https://images.unsplash.com/photo-1596755094468-b7470f1a1d9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Shirt
                ]
            },
            'Mobiles': {
                adjectives: ['Flagship', 'Budget-Friendly', 'Gaming', 'Compact', 'High-Performance', 'Camera-Focused'],
                nouns: ['Smartphone', 'Feature Phone', 'Tablet'],
                descriptions: [
                    'Lightning-fast processor and stunning display.',
                    'Long-lasting battery life for all your needs.',
                    'Capture professional-grade photos and videos.',
                    'Sleek design and comfortable grip.',
                    'Smooth multi-tasking and seamless app experience.',
                    'Stay connected with advanced network capabilities.'
                ],
                minPrice: 8000,
                maxPrice: 120000,
                imageColors: { bg: '6f42c1', text: 'ffffff' }, // Purple
                imageUrls: [
                    'https://images.unsplash.com/photo-1567581907310-a29285743b12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Smartphone 1
                    'https://images.unsplash.com/photo-1601784551446-20c9e07cd5d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Smartphone 2
                    'https://images.unsplash.com/photo-1585060544812-6b4579736921?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Tablet
                    'https://images.unsplash.com/photo-1592892864693-014c405951d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Feature Phone (generic)
                ]
            },
            'Home & Kitchen': {
                adjectives: ['Efficient', 'Modern', 'Smart', 'Compact', 'Durable', 'Eco-Friendly'],
                nouns: ['Blender', 'Coffee Maker', 'Toaster', 'Air Fryer', 'Vacuum Cleaner', 'Cookware Set'],
                descriptions: [
                    'Prepare delicious meals with ease and speed.',
                    'Wake up to the perfect cup of coffee every morning.',
                    'Achieve crispy results with less oil.',
                    'Keep your home spotless with powerful suction.',
                    'Designed for longevity and consistent performance.',
                    'Save energy and reduce your carbon footprint.'
                ],
                minPrice: 1000,
                maxPrice: 25000,
                imageColors: { bg: 'fd7e14', text: 'ffffff' } // Orange
            },
            'Groceries': {
                adjectives: ['Fresh', 'Organic', 'Premium', 'Wholesome', 'Delicious', 'Nutritious'],
                nouns: ['Apples', 'Milk', 'Bread', 'Cereal', 'Coffee Beans', 'Olive Oil'],
                descriptions: [
                    'Farm-fresh and bursting with natural flavor.',
                    'Sourced from sustainable and ethical farms.',
                    'Start your day right with a healthy breakfast.',
                    'Perfect for baking or enjoying on its own.',
                    'Rich aroma and smooth taste for coffee lovers.',
                    'Enhance your cooking with high-quality ingredients.'
                ],
                minPrice: 50,
                maxPrice: 1500,
                imageColors: { bg: 'ffc107', text: '000000' } // Yellow
            },
            'Footwear': {
                adjectives: ['Comfortable', 'Stylish', 'Athletic', 'Casual', 'Durable', 'Waterproof'],
                nouns: ['Sneakers', 'Sandals', 'Boots', 'Dress Shoes', 'Running Shoes', 'Slippers'],
                descriptions: [
                    'Perfect for long walks and everyday wear.',
                    'Elevate your look with these elegant shoes.',
                    'Designed for peak performance and support.',
                    'Relax and unwind in ultimate comfort.',
                    'Built to withstand the elements and last longer.',
                    'Versatile footwear for any occasion.'
                ],
                minPrice: 700,
                maxPrice: 10000,
                imageColors: { bg: 'dc3545', text: 'ffffff' }, // Red
                imageUrls: [
                    'https://images.unsplash.com/photo-1542291026-7eec264c6508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Sneakers
                    'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Running Shoes
                    'https://images.unsplash.com/photo-1584208112316-09253457199c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Boots
                    'https://images.unsplash.com/photo-1600269452121-4f2416e55c1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Dress Shoes
                ]
            }
        };

        function getRandomElement(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        function getRandomPrice(min, max) {
            // Ensure prices are somewhat realistic within categories
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomRating() {
            return (Math.random() * (5 - 3) + 3).toFixed(1); // Ratings between 3.0 and 5.0
        }

        function generateRandomReviews() {
            const users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];
            const comments = [
                'Absolutely love it!', 'Highly recommended.', 'Great value for money.', 'Exceeded my expectations.',
                'Good quality, fast delivery.', 'Works perfectly.', 'Very satisfied with this purchase.',
                'A must-have!', 'Could not be happier.', 'Fantastic product.'
            ];
            // Ensure at least 2 reviews, up to 3
            const numReviews = Math.floor(Math.random() * 2) + 2;
            const reviews = [];
            for (let i = 0; i < numReviews; i++) {
                reviews.push({
                    user: getRandomElement(users),
                    rating: Math.floor(Math.random() * 3) + 3, // Rating between 3 and 5
                    comment: getRandomElement(comments)
                });
            }
            return reviews;
        }

        /**
         * Generates a placeholder image URL with category-specific colors and product title.
         * Used as a fallback or for generic categories.
         * @param {string} title - The product title.
         * @param {string} category - The product category.
         * @returns {string} The URL for the placeholder image.
         */
        function getImagePlaceholderUrl(title, category) {
            const colors = productDetails[category]?.imageColors || { bg: 'cccccc', text: '333333' }; // Default gray
            const encodedTitle = encodeURIComponent(title.replace(/ /g, '+').substring(0, 20)); // Max 20 chars for readability
            return `https://placehold.co/300x200/${colors.bg}/${colors.text}?text=${encodedTitle}`;
        }

        function generateRandomProduct(id) {
            const category = getRandomElement(categories);
            const categoryDetails = productDetails[category];

            const title = `${getRandomElement(categoryDetails.adjectives)} ${getRandomElement(categoryDetails.nouns)}`;
            const description = getRandomElement(categoryDetails.descriptions);
            const price = getRandomPrice(categoryDetails.minPrice, categoryDetails.maxPrice);
            const rating = parseFloat(getRandomRating());
            const reviews = generateRandomReviews();
            const hasDiscount = Math.random() < 0.3; // 30% chance of discount
            const discount = hasDiscount ? Math.floor(Math.random() * 30) + 5 : 0; // 5-35% discount

            // Select a random image URL from the category's specific list, or use placeholder
            const imageUrl = categoryDetails.imageUrls ? getRandomElement(categoryDetails.imageUrls) : getImagePlaceholderUrl(title, category);

            let additionalImages = [];
            // Add multiple images for certain product IDs (e.g., for mobiles and electronics)
            if (category === 'Mobiles' && id % 5 === 0) { // Every 5th mobile product
                additionalImages = [
                    'https://images.unsplash.com/photo-1601784551446-20c9e07cd5d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1569032640-5a3d3c8c7f56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1592892864693-014c405951d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                ];
            } else if (category === 'Electronics' && id % 7 === 0) { // Every 7th electronics product
                additionalImages = [
                    'https://images.unsplash.com/photo-1546435770-a3e426bf4727?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1510125594112-f002ddfce7c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1629235940989-91544a4923f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                ];
            }


            return {
                id: id,
                title: title,
                description: description,
                price: price,
                rating: rating,
                image: imageUrl,
                category: category,
                reviews: reviews,
                discount: discount,
                additionalImages: additionalImages // New field for multiple images
            };
        }

        // Generate 120 random products
        for (let i = 1; i <= 120; i++) {
            products.push(generateRandomProduct(i));
        }
        console.log('Total products generated:', products.length); // Debug log

        // --- Global Variables ---
        let cart = JSON.parse(localStorage.getItem('shoppingCart')) || []; // Load cart from local storage
        let wishlist = JSON.parse(localStorage.getItem('shoppingWishlist')) || []; // Load wishlist from local storage

        // User Data (Mock for now, would come from backend in real app)
        let userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
            name: 'John Doe',
            mobile: '9876543210', // Pre-filled mobile number
            email: 'john.doe@example.com',
            gender: 'Male',
            dob: '1990-01-01',
            // Removed occupation
        };

        let savedAddresses = JSON.parse(localStorage.getItem('savedAddresses')) || [
            { id: 1, fullName: 'John Doe', addressLine1: '123 Main St', addressLine2: '', city: 'Anytown', state: 'Anystate', zipCode: '12345', country: 'USA', type: 'Home' },
            { id: 2, fullName: 'John Doe', addressLine1: '456 Oak Ave', addressLine2: 'Apt 101', city: 'Otherville', state: 'Otherstate', zipCode: '67890', country: 'USA', type: 'Work' }
        ];

        let myOrders = JSON.parse(localStorage.getItem('myOrders')) || [];
        let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
        let selectedCheckoutAddress = null; // Stores the address selected for the current checkout

        // DOM elements
        const productsContainer = document.getElementById('productsContainer');
        const cartCount = document.getElementById('cartCount');
        const cartButton = document.getElementById('cartButton');
        const cartModal = document.getElementById('cartModal');
        const closeCartButton = document.getElementById('closeCartButton');
        const cartItemsContainer = document.getElementById('cartItemsContainer');
        const cartTotal = document.getElementById('cartTotal');
        const emptyCartMessage = document.getElementById('emptyCartMessage');
        const checkoutButton = document.getElementById('checkoutButton'); // This is the button in the cart modal
        const toastNotification = document.getElementById('toastNotification');
        const toastText = document.getElementById('toastText');
        const closeToastButton = document.getElementById('closeToastButton'); // New: Close toast button
        const loadingOverlay = document.getElementById('loadingOverlay');

        // Page elements
        const productsPage = document.getElementById('productsPage');
        const addressPage = document.getElementById('addressPage'); // Checkout address page
        const paymentPage = document.getElementById('paymentPage');
        const orderConfirmationPage = document.getElementById('orderConfirmationPage');
        const profilePage = document.getElementById('profilePage'); // New profile page
        const addressesPage = document.getElementById('addressesPage'); // New addresses management page
        const myOrdersPage = document.getElementById('myOrdersPage'); // New my orders page
        const myWishlistPage = document.getElementById('myWishlistPage'); // New wishlist page
        const wishlistContainer = document.getElementById('wishlistContainer');
        const emptyWishlistMessage = document.getElementById('emptyWishlistMessage');

        // Form elements
        const paymentForm = document.getElementById('paymentForm');
        const addEditAddressForm = document.getElementById('addEditAddressForm');

        // Navigation elements
        const homeLink = document.getElementById('homeLink');
        const homeButton = document.getElementById('homeButton'); // New: Home button
        const searchInput = document.getElementById('searchInput');
        const accountButton = document.getElementById('accountButton');
        const accountDropdown = document.getElementById('accountDropdown');
        const profileLink = document.getElementById('profileLink');
        const addressesLink = document.getElementById('addressesLink');
        const myOrdersLink = document.getElementById('myOrdersLink');
        const myWishlistLink = document.getElementById('myWishlistLink');
        const logoutLink = document.getElementById('logoutLink');

        // Back buttons
        const backToCartButton = document.getElementById('backToCartButton');
        const backToAddressButton = document = document.getElementById('backToAddressButton');
        const continueShoppingButton = document.getElementById('continueShoppingButton');
        const backToHomeFromProfile = document.getElementById('backToHomeFromProfile');
        const backToHomeFromAddresses = document.getElementById('backToHomeFromAddresses');
        const backToHomeFromOrders = document.getElementById('backToHomeFromOrders');
        const backToHomeFromWishlist = document.getElementById('backToHomeFromWishlist');

        // Profile section elements
        const profileDisplayDiv = document.getElementById('profileDisplay');
        const profileEditForm = document.getElementById('profileForm'); // The form for editing profile
        const editProfileButton = document.getElementById('editProfileButton');
        const cancelEditProfileButton = document.getElementById('cancelEditProfile');
        const manageAddressesLink = document.getElementById('manageAddressesLink');

        const displayName = document.getElementById('displayName');
        const displayMobile = document.getElementById('displayMobile');
        const displayEmail = document.getElementById('displayEmail');
        const displayGender = document.getElementById('displayGender');
        const displayDob = document.getElementById('displayDob');
        // Removed occupation

        // Profile form fields
        const profileNameInput = document.getElementById('profileName');
        const profileMobileInput = document.getElementById('profileMobile');
        const profileEmailInput = document.getElementById('profileEmail');
        const profileGenderInput = document.getElementById('profileGender');
        const profileDobInput = document.getElementById('profileDob');
        // Removed profileOccupationInput


        // Addresses page elements
        const addressListContainer = document.getElementById('addressListContainer');
        const noAddressesMessage = document.getElementById('noAddressesMessage');
        const addNewAddressButton = document.getElementById('addNewAddressButton');
        const cancelAddEditAddress = document.getElementById('cancelAddEditAddress');
        const editAddressId = document.getElementById('editAddressId');

        // Add/Edit Address form fields
        const addrFullNameInput = document.getElementById('addrFullName');
        const addrLine1Input = document.getElementById('addrLine1');
        const addrLine2Input = document.getElementById('addrLine2');
        const addrCityInput = document.getElementById('addrCity');
        const addrStateInput = document.getElementById('addrState');
        const addrZipCodeInput = document.getElementById('addrZipCode');
        const addrCountryInput = document.getElementById('addrCountry');
        const addrTypeInput = document.getElementById('addrType'); // New: Address Type input

        // My Orders page elements
        const orderListContainer = document.getElementById('orderListContainer');
        const noOrdersMessage = document.getElementById('noOrdersMessage');

        // Payment page elements
        const paymentTotalAmount = document.getElementById('paymentTotalAmount');
        const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
        const cardDetailsDiv = document.getElementById('cardDetails');

        // Checkout Address Page specific elements
        const checkoutMobileInput = document.getElementById('checkoutMobile');
        const existingAddressesSection = document.getElementById('existingAddressesSection');
        const checkoutAddressListContainer = document.getElementById('checkoutAddressListContainer');
        const noSavedAddressesMessage = document = document.getElementById('noSavedAddressesMessage');
        const addNewAddressForCheckoutButton = document = document.getElementById('addNewAddressForCheckoutButton');
        const newCheckoutAddressForm = document.getElementById('newCheckoutAddressForm');
        const cancelNewAddressForCheckoutButton = document.getElementById('cancelNewAddressForCheckout');
        const saveNewAddressForCheckoutButton = document.getElementById('saveNewAddressForCheckout');
        const proceedToPaymentButton = document.getElementById('proceedToPaymentButton');

        // New Address Form fields (for checkout page)
        const newAddrFullNameInput = document.getElementById('newAddrFullName');
        const newAddrLine1Input = document.getElementById('newAddrLine1');
        const newAddrLine2Input = document.getElementById('newAddrLine2');
        const newAddrCityInput = document.getElementById('newAddrCity');
        const newAddrStateInput = document.getElementById('newAddrState');
        const newAddrZipCodeInput = document = document.getElementById('newAddrZipCode');
        const newAddrCountryInput = document.getElementById('newAddrCountry');
        const newAddrTypeInput = document.getElementById('newAddrType'); // New: Address Type input for checkout form


        // Product Detail Modal elements
        const productDetailModal = document.getElementById('productDetailModal');
        const closeProductDetailButton = document.getElementById('closeProductDetailButton');
        const detailModalTitle = document.getElementById('detailModalTitle');
        const productDetailContent = document.getElementById('productDetailContent');
        const detailModalAddToCartButton = document.getElementById('detailModalAddToCartButton');
        const detailModalWishlistButton = document.getElementById('detailModalWishlistButton'); // New: Wishlist button in modal

        // Filters and Sort elements
        const categoryFilter = document.getElementById('categoryFilter');
        const sortOrder = document.getElementById('sortOrder');

        // Recently Viewed elements
        const recentlyViewedSection = document.getElementById('recentlyViewedSection');
        const recentlyViewedContainer = document.getElementById('recentlyViewedContainer');
        const clearRecentlyViewedBtn = document.getElementById('clearRecentlyViewedBtn'); // New: Clear Recently Viewed button

        // Confirmation Modal elements (repurposed from logoutConfirmationModal)
        const confirmationModal = document.getElementById('confirmationModal');
        const confirmationModalTitle = document.getElementById('confirmationModalTitle');
        const confirmationModalMessage = document.getElementById('confirmationModalMessage');
        const cancelConfirmationButton = document.getElementById('cancelConfirmationButton');
        const confirmActionButton = document.getElementById('confirmActionButton');

        // Offer Gallery Elements
        const offerGallery = document.getElementById('offerGallery');
        const offerImage = document.getElementById('offerImage');
        const offerMessage = document.getElementById('offerMessage');
        const prevOfferBtn = document.getElementById('prevOfferBtn');
        const nextOfferBtn = document.getElementById('nextOfferBtn');


        let currentActivePage = 'productsPage'; // Track the currently active page
        let currentFilterCategory = 'all';
        let currentSortOrder = 'default';
        let currentPriceRange = null; // New variable for price range filtering

        // --- Offer Gallery Data ---
        // Using generic placeholder images for offers as product images are now dynamically generated
        const offers = [
            { image: 'https://t4.ftcdn.net/jpg/06/91/17/95/360_F_691179587_QSctAaNAIbYMjexjEV3w8clmvzcXmJuU.jpg', filter: { category: 'Electronics', priceRange: { min: 0, max: 15000 } } },
            {  image: 'https://images.freekaamaal.com/post_images/1726658982.webp', filter: { category: 'Mobiles', priceRange: { min: 0, max: 20000 } } },
            { image: 'https://www.shutterstock.com/image-vector/commercial-template-shoe-store-pair-260nw-2329453679.jpg', filter: { category: 'Footwear', priceRange: { min: 500, max: 1000 } } },
            {  image: 'https://www.bsshomestore.com/wp-content/uploads/2022/01/Best-Kitchen-Appliance-Brands-in-India-1-1200x565.jpg', filter: { category: 'Home & Kitchen' } }
        ];
        let currentOfferIndex = 0;
        let offerInterval;
        const OFFER_INTERVAL_TIME = 5000; // 5 seconds


        // --- Utility Functions ---

        /**
         * Shows/hides the loading overlay.
         * @param {boolean} show - true to show, false to hide.
         */
        function toggleLoadingOverlay(show) {
            if (show) {
                loadingOverlay.classList.remove('hidden');
                setTimeout(() => loadingOverlay.classList.add('active'), 10); // Small delay for transition
            } else {
                loadingOverlay.classList.remove('active');
                setTimeout(() => loadingOverlay.classList.add('hidden'), 300); // Hide after transition
            }
        }

        /**
         * Displays a temporary toast notification.
         * @param {string} message - The message to display.
         * @param {string} type - 'success', 'info', 'error' (determines color).
         * @param {number} duration - Duration in milliseconds (default: 3000).
         */
        function showToast(message, type = 'info', duration = 3000) {
            // Reset classes
            toastNotification.className = 'fixed top-16 right-4 px-4 py-2 rounded-lg shadow-xl hidden opacity-0 transform translate-y-full transition-all duration-300 ease-out z-50 text-white text-sm flex items-center justify-between';

            // Apply type-specific background color
            switch (type) {
                case 'success':
                    toastNotification.classList.add('bg-green-600');
                    break;
                case 'error':
                    toastNotification.classList.add('bg-red-600');
                    break;
                case 'info':
                default:
                    toastNotification.classList.add('bg-blue-600');
                    break;
            }

            toastText.textContent = message;
            toastNotification.classList.remove('hidden');

            // Animate in
            setTimeout(() => {
                toastNotification.classList.remove('opacity-0', 'translate-y-full');
                toastNotification.classList.add('opacity-100', 'translate-y-0');
            }, 10); // Small delay to ensure transition applies

            // Set a timeout to hide the toast if not manually dismissed
            if (duration > 0) {
                setTimeout(() => {
                    hideToast();
                }, duration);
            }
        }

        /**
         * Hides the toast notification.
         */
        function hideToast() {
            toastNotification.classList.remove('opacity-100', 'translate-y-0');
            toastNotification.classList.add('opacity-0', 'translate-y-full');
            setTimeout(() => {
                toastNotification.classList.add('hidden');
            }, 300); // Wait for transition to complete before hiding
        }


        /**
         * Shows a generic confirmation modal.
         * @param {string} title - The title of the modal.
         * @param {string} message - The message to display.
         * @param {function} onConfirmCallback - Callback function to execute if confirmed.
         * @param {string} confirmButtonText - Text for the confirm button.
         * @param {string} confirmButtonColorClass - Tailwind class for confirm button color (e.g., 'bg-red-500').
         */
        function showConfirmationModal(title, message, onConfirmCallback, confirmButtonText = 'Confirm', confirmButtonColorClass = 'bg-red-500') {
            confirmationModalTitle.textContent = title;
            confirmationModalMessage.textContent = message;
            confirmActionButton.textContent = confirmButtonText;

            // Reset button classes and apply new color
            confirmActionButton.className = 'text-white font-semibold py-1.5 px-3 rounded-lg transition duration-300 text-sm';
            confirmActionButton.classList.add(confirmButtonColorClass, confirmButtonColorClass.replace('-500', '-600') + ':hover');

            // Clear previous event listeners
            confirmActionButton.onclick = null;
            cancelConfirmationButton.onclick = null;

            // Attach new event listeners
            confirmActionButton.onclick = () => {
                confirmationModal.classList.remove('active');
                onConfirmCallback();
            };
            cancelConfirmationButton.onclick = () => {
                confirmationModal.classList.remove('active');
            };

            confirmationModal.classList.add('active');
        }

        /**
         * Saves the current cart state to local storage.
         */
        function saveCart() {
            localStorage.setItem('shoppingCart', JSON.stringify(cart));
        }

        /**
         * Saves the current wishlist state to local storage.
         */
        function saveWishlist() {
            localStorage.setItem('shoppingWishlist', JSON.stringify(wishlist));
        }

        /**
         * Saves user profile data to local storage.
         */
        function saveUserProfile() {
            localStorage.setItem('userProfile', JSON.stringify(userProfile));
        }

        /**
         * Saves addresses to local storage.
         */
        function saveAddresses() {
            localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
        }

        /**
         * Saves orders to local storage.
         */
        function saveOrders() {
            localStorage.setItem('myOrders', JSON.stringify(myOrders));
        }

        /**
         * Saves recently viewed products to local storage.
         */
        function saveRecentlyViewed() {
            // Keep only the last 8 unique items
            recentlyViewed = recentlyViewed.slice(0, 8);
            localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
        }

        /**
         * Updates the cart count displayed in the header.
         */
        function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        /**
         * Hides all page sections.
         */
        function hideAllPages() {
            document.querySelectorAll('.page-section').forEach(page => {
                page.classList.remove('active');
            });
        }

        /**
         * Shows a specific page section.
         * @param {HTMLElement} pageElement - The DOM element of the page to show.
         */
        function showPage(pageElement) {
            hideAllPages();
            pageElement.classList.add('active');
            currentActivePage = pageElement.id; // Update current active page ID
            window.scrollTo(0, 0); // Scroll to top of the page
            accountDropdown.classList.remove('active'); // Close dropdown when navigating

            // Specific logic for payment page to update total
            if (pageElement.id === 'paymentPage') {
                const currentCartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
                paymentTotalAmount.textContent = `₹${currentCartTotal.toFixed(0)}`;
                // Ensure card details are shown/hidden based on default selection
                const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
                if (selectedMethod === 'Credit / Debit Card') {
                    cardDetailsDiv.classList.remove('hidden');
                    // Make card inputs required
                    document.getElementById('cardNumber').setAttribute('required', 'true');
                    document.getElementById('expiryDate').setAttribute('required', 'true');
                    document.getElementById('cvv').setAttribute('required', 'true');
                    document.getElementById('cardName').setAttribute('required', 'true');
                } else {
                    cardDetailsDiv.classList.add('hidden');
                    // Remove required attribute for other payment methods
                    document.getElementById('cardNumber').removeAttribute('required');
                    document.getElementById('expiryDate').removeAttribute('required');
                    document.getElementById('cvv').removeAttribute('required');
                    document.getElementById('cardName').removeAttribute('required');
                }
            } else if (pageElement.id === 'productsPage') {
                renderRecentlyViewed(); // Show recently viewed on home page
            }
        }

        /**
         * Populates category filter dropdown.
         */
        function populateCategoryFilter() {
            // Get unique categories from the products array
            const uniqueCategories = [...new Set(products.map(p => p.category))].sort(); // Sort alphabetically
            categoryFilter.innerHTML = '<option value="all">All Categories</option>';
            // Add the "Discounted Products" option first
            const discountedOption = document.createElement('option');
            discountedOption.value = 'Discounted Products';
            discountedOption.textContent = 'Discounted Products';
            categoryFilter.appendChild(discountedOption);

            uniqueCategories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categoryFilter.appendChild(option);
            });
        }

        /**
         * Renders products based on current filters and sort order.
         * @param {string} query - The search query.
         * @param {object} offerFilter - Optional filter from an offer (e.g., { category: 'Electronics', priceRange: { min: 0, max: 15000 } })
         */
        function renderProducts(query = '', offerFilter = null) {
            toggleLoadingOverlay(true); // Show loading overlay

            // Reset filters if an offer filter is applied
            if (offerFilter) {
                currentFilterCategory = offerFilter.category || 'all';
                currentPriceRange = offerFilter.priceRange || null;
                searchInput.value = ''; // Clear search input
                categoryFilter.value = currentFilterCategory; // Update dropdown
                sortOrder.value = 'default'; // Reset sort
                currentSortOrder = 'default';
            } else {
                // If not an offer filter, ensure currentPriceRange is reset if not coming from an offer
                currentPriceRange = null;
            }


            setTimeout(() => { // Simulate loading delay
                let filteredAndSortedProducts = [...products]; // Create a mutable copy

                console.log('Initial products count in renderProducts:', products.length); // Debug log
                console.log('Current filter category:', currentFilterCategory); // Debug log
                console.log('Current sort order:', currentSortOrder); // Debug log
                console.log('Current price range:', currentPriceRange); // Debug log


                // 1. Apply Search Query
                if (query) {
                    filteredAndSortedProducts = filteredAndSortedProducts.filter(product =>
                        product.title.toLowerCase().includes(query.toLowerCase()) ||
                        product.description.toLowerCase().includes(query.toLowerCase())
                    );
                }

                // 2. Apply Category Filter or Discounted Products Filter
                if (currentFilterCategory === 'Discounted Products') {
                    filteredAndSortedProducts = filteredAndSortedProducts.filter(product => product.discount > 0);
                } else if (currentFilterCategory !== 'all') {
                    filteredAndSortedProducts = filteredAndSortedProducts.filter(product =>
                        product.category === currentFilterCategory
                    );
                }

                // 3. Apply Price Range Filter (from offers)
                if (currentPriceRange) {
                    filteredAndSortedProducts = filteredAndSortedProducts.filter(product =>
                        product.price >= currentPriceRange.min && product.price <= currentPriceRange.max
                    );
                }

                // 4. Apply Sorting
                if (currentSortOrder === 'price-asc') {
                    filteredAndSortedProducts.sort((a, b) => a.price - b.price);
                } else if (currentSortOrder === 'price-desc') {
                    filteredAndSortedProducts.sort((a, b) => b.price - a.price);
                } else if (currentSortOrder === 'rating-desc') {
                    filteredAndSortedProducts.sort((a, b) => b.rating - a.rating);
                }
                // 'default' doesn't require specific sorting

                console.log('Filtered and sorted products count:', filteredAndSortedProducts.length); // Debug log

                productsContainer.innerHTML = ''; // Clear existing products
                if (filteredAndSortedProducts.length === 0) {
                    productsContainer.innerHTML = '<p class="text-center text-lg text-gray-600 col-span-full">No products found matching your criteria.</p>';
                    toggleLoadingOverlay(false);
                    return;
                }

                filteredAndSortedProducts.forEach(product => {
                    const productCard = document.createElement('div');
                    // Adjusted classes for responsive design
                    // grid-cols-3 for mobile, md:grid-cols-4 for tablets, lg/xl:grid-cols-5 for desktop
                    productCard.className = 'bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer';
                    productCard.dataset.productId = product.id; // Store product ID for click handler

                    const averageRating = product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length;
                    const starRating = averageRating ? averageRating.toFixed(1) : 'N/A';
                    const reviewCount = product.reviews.length;

                    // Calculate discounted price if applicable
                    const isDiscounted = product.discount && product.discount > 0;
                    const discountedPrice = isDiscounted ? product.price * (1 - product.discount / 100) : product.price;

                    // Use the product's image URL
                    const imageUrl = product.image;


                    productCard.innerHTML = `
                        <div class="relative">
                            <img src="${imageUrl}" alt="${product.title}" loading="lazy" onerror="this.onerror=null;this.src='${getImagePlaceholderUrl(product.title, product.category)}';" class="w-full h-24 sm:h-40 object-cover">
                            ${isDiscounted ? `<span class="absolute top-1 right-1 bg-red-500 text-white text-xxs font-bold px-1 py-0.5 rounded-full">- ${product.discount}%</span>` : ''}
                            ${product.additionalImages && product.additionalImages.length > 0 ? `
                                <div class="absolute bottom-1 left-1 bg-gray-800 bg-opacity-75 text-white rounded-full p-1 text-xxs flex items-center space-x-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>+${product.additionalImages.length}</span>
                                </div>
                            ` : ''}
                        </div>
                        <div class="p-1 sm:p-3">
                            <h3 class="text-xs sm:text-base font-semibold text-gray-900 mb-0.5">${product.title}</h3>
                            <p class="text-xxs sm:text-xs text-gray-600 mb-0.5 truncate">${product.description}</p>
                            <div class="flex items-center mb-1">
                                <span class="text-yellow-500 mr-0.5 text-xs">★</span>
                                <span class="text-gray-600 text-xxs">${starRating} (${reviewCount} reviews)</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm sm:text-lg font-bold text-blue-600">
                                    ${isDiscounted ? `<span class="line-through text-gray-500 text-xs mr-1">₹${product.price.toFixed(0)}</span>` : ''}
                                    ₹${discountedPrice.toFixed(0)}
                                </span>
                                <div class="flex space-x-0.5">
                                    <button data-product-id="${product.id}" class="add-to-cart-btn bg-blue-500 hover:bg-blue-600 text-white font-medium py-0.5 px-1 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-xxs">
                                        + Cart
                                    </button>
                                    <button data-product-id="${product.id}" class="add-to-wishlist-btn bg-gray-200 text-gray-700 hover:bg-gray-300 p-0.5 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="${wishlist.some(item => item.id === product.id) ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    productsContainer.appendChild(productCard);
                });

                // Add event listeners to all "Add to Cart" buttons
                document.querySelectorAll('.add-to-cart-btn').forEach(button => {
                    button.addEventListener('click', (event) => {
                        event.stopPropagation(); // Prevent opening product detail modal
                        const productId = parseInt(event.target.dataset.productId);
                        addToCart(productId);
                    });
                });

                // Add event listeners to "Add to Wishlist" buttons
                document.querySelectorAll('.add-to-wishlist-btn').forEach(button => {
                    button.addEventListener('click', (event) => {
                        event.stopPropagation(); // Prevent opening product detail modal
                        const productId = parseInt(event.target.closest('button').dataset.productId);
                        toggleWishlist(productId);
                    });
                });

                // Add event listeners to product cards to open detail modal
                document.querySelectorAll('#productsContainer .cursor-pointer').forEach(card => {
                    card.addEventListener('click', (event) => {
                        const productId = parseInt(event.currentTarget.dataset.productId);
                        openProductDetailModal(productId);
                        addRecentlyViewed(productId); // Add to recently viewed when clicked
                    });
                });

                toggleLoadingOverlay(false); // Hide loading overlay
            }, 300); // Simulate network delay
        }

        /**
         * Adds a product to the cart or increments its quantity if already present.
         * @param {number} productId - The ID of the product to add.
         */
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                const existingCartItem = cart.find(item => item.id === productId);
                if (existingCartItem) {
                    existingCartItem.quantity++;
                    showToast(`Increased quantity of ${product.title} in cart!`, 'info');
                } else {
                    cart.push({ ...product, quantity: 1 });
                    showToast(`Added ${product.title} to cart!`, 'success');
                }
                saveCart();
                updateCartCount();
                renderCartItems(); // Re-render cart when an item is added
            }
        }

        /**
         * Adds or removes a product from the wishlist.
         * @param {number} productId - The ID of the product to toggle.
         */
        function toggleWishlist(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                const existingWishlistItemIndex = wishlist.findIndex(item => item.id === productId);
                if (existingWishlistItemIndex !== -1) {
                    wishlist.splice(existingWishlistItemIndex, 1);
                    showToast(`Removed ${product.title} from wishlist.`, 'info');
                } else {
                    wishlist.push({ ...product }); // Add full product object to wishlist
                    showToast(`Added ${product.title} to wishlist!`, 'success');
                }
                saveWishlist();
                renderProducts(searchInput.value); // Re-render products to update wishlist icon state
                if (currentActivePage === 'myWishlistPage') {
                    renderWishlist(); // Re-render wishlist if on that page
                }
            }
        }

        /**
         * Adds a product to the recently viewed list.
         * @param {number} productId - The ID of the product viewed.
         */
        function addRecentlyViewed(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                // Remove if already exists to move it to the front
                recentlyViewed = recentlyViewed.filter(item => item.id !== productId);
                recentlyViewed.unshift(product); // Add to the beginning
                saveRecentlyViewed();
                if (currentActivePage === 'productsPage') {
                    renderRecentlyViewed();
                }
            }
        }

        /**
         * Clears all products from the recently viewed list.
         */
        function clearRecentlyViewed() {
            showConfirmationModal(
                "Clear Recently Viewed",
                "Are you sure you want to clear all recently viewed products?",
                () => {
                    recentlyViewed = [];
                    saveRecentlyViewed();
                    renderRecentlyViewed();
                    showToast("Recently viewed products cleared.", 'info');
                },
                "Clear All",
                "bg-red-500"
            );
        }

        /**
         * Renders the items currently in the shopping cart.
         */
        function renderCartItems() {
            cartItemsContainer.innerHTML = ''; // Clear existing cart items
            let total = 0;

            if (cart.length === 0) {
                emptyCartMessage.classList.remove('hidden');
                checkoutButton.disabled = true; // Disable checkout if cart is empty
                checkoutButton.classList.add('opacity-50', 'cursor-not-allowed');
            }
            else {
                emptyCartMessage.classList.add('hidden');
                checkoutButton.disabled = false;
                checkoutButton.classList.remove('opacity-50', 'cursor-not-allowed');

                cart.forEach(item => {
                    // Calculate discounted price for cart display
                    const itemPrice = item.discount ? item.price * (1 - item.discount / 100) : item.price;
                    const itemTotal = itemPrice * item.quantity;
                    total += itemTotal;

                    const cartItemDiv = document.createElement('div');
                    cartItemDiv.className = 'flex items-center justify-between py-2 sm:py-3 border-b border-gray-100 last:border-b-0';
                    cartItemDiv.innerHTML = `
                        <div class="flex items-center space-x-2 sm:space-x-4">
                            <img src="${item.image}" alt="${item.title}" onerror="this.onerror=null;this.src='${getImagePlaceholderUrl(item.title, item.category)}';" class="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md">
                            <div>
                                <h4 class="text-base sm:text-lg font-medium text-gray-900">${item.title}</h4>
                                <p class="text-xs sm:text-sm text-gray-600">₹${itemPrice.toFixed(0)} x ${item.quantity}</p> </div>
                        </div>
                        <div class="flex items-center space-x-2 sm:space-x-4">
                            <span class="text-base sm:text-lg font-semibold text-gray-800">₹${itemTotal.toFixed(0)}</span> <button data-product-id="${item.id}" class="remove-from-cart-btn text-red-500 hover:text-red-700 transition duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(cartItemDiv);
                });
            }

            cartTotal.textContent = total.toFixed(0);

            // Add event listeners to all "Remove from Cart" buttons
            document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = parseInt(event.target.closest('button').dataset.productId);
                    removeFromCart(productId);
                });
            });
        }

        /**
         * Removes a product from the cart.
         * @param {number} productId - The ID of the product to remove.
         */
        function removeFromCart(productId) {
            const itemIndex = cart.findIndex(item => item.id === productId);
            if (itemIndex !== -1) {
                const removedItem = cart[itemIndex];
                if (removedItem.quantity > 1) {
                    removedItem.quantity--;
                    showToast(`Decreased quantity of ${removedItem.title}.`, 'info');
                } else {
                    cart.splice(itemIndex, 1);
                    showToast(`Removed ${removedItem.title} from cart.`, 'info');
                }
                saveCart();
                updateCartCount();
                renderCartItems();
            }
        }

        /**
         * Opens the product detail modal with data for the given product ID.
         * @param {number} productId - The ID of the product to display.
         */
        function openProductDetailModal(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            // Calculate discounted price if applicable
            const isDiscounted = product.discount && product.discount > 0;
            const discountedPrice = isDiscounted ? product.price * (1 - product.discount / 100) : product.price;

            // Use the product's main image URL
            const mainImageUrl = product.image;

            // Generate thumbnail images if additional images exist
            const thumbnailsHtml = product.additionalImages && product.additionalImages.length > 0
                ? product.additionalImages.map(imgUrl => `
                    <img src="${imgUrl}" alt="Thumbnail" class="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-80 thumbnail-image" data-full-image="${imgUrl}">
                `).join('')
                : '';

            detailModalTitle.textContent = product.title;
            productDetailContent.innerHTML = `
                <div class="md:col-span-1">
                    <img id="mainProductImage" src="${mainImageUrl}" alt="${product.title}" onerror="this.onerror=null;this.src='${getImagePlaceholderUrl(product.title, product.category)}';" class="w-full h-auto object-cover rounded-lg shadow-md mb-2 sm:mb-4">
                    ${thumbnailsHtml ? `<div class="grid grid-cols-3 gap-2">${thumbnailsHtml}</div>` : ''}
                </div>
                <div class="md:col-span-1 flex flex-col justify-between">
                    <div>
                        <p class="text-sm sm:text-md text-gray-700 mb-2 sm:mb-4">${product.description}</p>
                        <div class="flex items-center mb-2 sm:mb-4 text-base sm:text-lg">
                            <span class="text-yellow-500 mr-1 sm:mr-2 text-lg sm:text-xl">★</span>
                            <span class="text-gray-800 font-semibold">${product.rating.toFixed(1)}</span>
                            <span class="text-gray-600 ml-1 sm:ml-2 text-sm">(${product.reviews.length} reviews)</span>
                        </div>
                        <p class="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">
                            ${isDiscounted ? `<span class="line-through text-gray-500 text-lg sm:text-xl mr-2 sm:mr-3">₹${product.price.toFixed(0)}</span>` : ''}
                            ₹${discountedPrice.toFixed(0)}
                            ${isDiscounted ? `<span class="text-green-600 text-lg sm:text-xl font-semibold ml-1 sm:ml-2">(${product.discount}% OFF)</span>` : ''}
                        </p>
                        <div class="mb-4 sm:mb-6">
                            <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Customer Reviews</h4>
                            ${product.reviews.length > 0 ? `
                                <div class="space-y-2 sm:space-y-3 max-h-40 sm:max-h-48 overflow-y-auto pr-1 sm:pr-2">
                                    ${product.reviews.map(review => `
                                        <div class="bg-gray-50 p-2 sm:p-3 rounded-lg border border-gray-100">
                                            <div class="flex justify-between items-center mb-1">
                                                <span class="font-semibold text-gray-800 text-sm">${review.user}</span>
                                                <div class="flex items-center text-yellow-500 text-sm">
                                                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                                                </div>
                                            </div>
                                            <p class="text-gray-700 text-xs sm:text-sm">${review.comment}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : '<p class="text-gray-500 text-xs sm:text-sm">No reviews yet. Be the first!</p>'}
                        </div>
                    </div>
                </div>
            `;
            detailModalAddToCartButton.dataset.productId = product.id; // Set ID for main button
            detailModalWishlistButton.dataset.productId = product.id; // Set ID for wishlist button
            productDetailModal.classList.remove('hidden');

            // Add event listener for thumbnail clicks
            document.querySelectorAll('.thumbnail-image').forEach(thumbnail => {
                thumbnail.addEventListener('click', (e) => {
                    document.getElementById('mainProductImage').src = e.target.dataset.fullImage;
                });
            });

            // Set up image zoom (very basic, for demonstration)
            const detailImage = document.getElementById('mainProductImage');
            if (detailImage) { // Only add listener if there's an actual image element
                detailImage.style.cursor = 'zoom-in';
                detailImage.addEventListener('click', () => {
                    detailImage.classList.toggle('scale-[1.5]');
                    detailImage.style.transformOrigin = 'center center';
                    detailImage.style.transition = 'transform 0.3s ease';
                    detailImage.style.cursor = detailImage.classList.contains('scale-[1.5]') ? 'zoom-out' : 'zoom-in';
                });
            }
        }


        /**
         * Navigates to the address page from the cart.
         */
        function navigateToAddressPage() {
            if (cart.length === 0) {
                showToast("Your cart is empty. Please add items before checking out.", 'error');
                return;
            }
            cartModal.classList.add('hidden'); // Close cart modal
            renderCheckoutAddresses(); // Render addresses on the checkout page
            checkoutMobileInput.value = userProfile.mobile; // Pre-fill mobile from profile
            newCheckoutAddressForm.classList.add('hidden'); // Ensure new address form is hidden by default
            showPage(addressPage);
        }

        /**
         * Renders the saved addresses for selection during checkout.
         */
        function renderCheckoutAddresses() {
            checkoutAddressListContainer.innerHTML = ''; // Clear existing addresses
            selectedCheckoutAddress = null; // Reset selected address

            if (savedAddresses.length === 0) {
                noSavedAddressesMessage.classList.remove('hidden');
                proceedToPaymentButton.disabled = true; // Disable if no addresses to select
                proceedToPaymentButton.classList.add('opacity-50', 'cursor-not-allowed');
            } else {
                noSavedAddressesMessage.classList.add('hidden');
                proceedToPaymentButton.disabled = false;
                proceedToPaymentButton.classList.remove('opacity-50', 'cursor-not-allowed');

                savedAddresses.forEach(addr => {
                    const addressDiv = document.createElement('div');
                    addressDiv.className = 'bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200 flex items-start space-x-2 sm:space-x-3';
                    addressDiv.innerHTML = `
                        <input type="radio" name="selectedCheckoutAddress" id="addr-${addr.id}" value="${addr.id}" class="mt-0.5 sm:mt-1 form-radio text-blue-600 h-4 w-4 sm:h-5 sm:w-5">
                        <label for="addr-${addr.id}" class="flex-grow cursor-pointer text-sm">
                            <p class="font-semibold text-gray-900">${addr.fullName} ${addr.type ? `<span class="ml-1 sm:ml-2 bg-blue-100 text-blue-800 text-xxs sm:text-xs font-medium px-1.5 py-0.5 rounded-full">${addr.type}</span>` : ''}</p>
                            <p class="text-gray-700 text-xs sm:text-sm">${addr.addressLine1}${addr.addressLine2 ? ', ' + addr.addressLine2 : ''}</p>
                            <p class="text-gray-700 text-xs sm:text-sm">${addr.city}, ${addr.state} ${addr.zipCode}</p>
                            <p class="text-gray-700 text-xs sm:text-sm">${addr.country}</p>
                        </label>
                    `;
                    checkoutAddressListContainer.appendChild(addressDiv);
                });

                // Add event listener for radio button changes
                document.querySelectorAll('input[name="selectedCheckoutAddress"]').forEach(radio => {
                    radio.addEventListener('change', (event) => {
                        selectedCheckoutAddress = savedAddresses.find(addr => addr.id === parseInt(event.target.value));
                        showToast(`Selected address: ${selectedCheckoutAddress.fullName}`, 'info', 1500);
                        // Hide new address form if an existing one is selected
                        newCheckoutAddressForm.classList.add('hidden');
                        // Ensure required attributes are removed from new address form fields
                        setNewAddressFormRequired(false);
                    });
                });

                // Pre-select the first address if available
                if (savedAddresses.length > 0) {
                    document.getElementById(`addr-${savedAddresses[0].id}`).checked = true;
                    selectedCheckoutAddress = savedAddresses[0];
                }
            }
        }

        /**
         * Validates selected address and mobile number, then proceeds to payment.
         */
        function proceedToPayment() {
            const mobile = checkoutMobileInput.value.trim();

            if (!mobile) {
                showToast("Please enter a mobile number for delivery.", 'error');
                return;
            }
            if (!/^[0-9]{10}$/.test(mobile)) { // Simple 10-digit mobile number validation
                showToast("Please enter a valid 10-digit mobile number.", 'error');
                return;
            }

            // If new address form is visible and not hidden by selecting existing address
            if (!newCheckoutAddressForm.classList.contains('hidden')) {
                // Validate new address form fields
                if (!newAddrFullNameInput.value.trim() || !newAddrLine1Input.value.trim() || !newAddrCityInput.value.trim() || !newAddrStateInput.value.trim() || !newAddrZipCodeInput.value.trim() || !newAddrCountryInput.value.trim()) {
                    showToast("Please fill in all required fields for the new address.", 'error');
                    return;
                }
                // If form is valid, save it as a new address and set it as selected
                saveNewAddressForCheckout(); // This will save and set selectedCheckoutAddress
            }

            if (!selectedCheckoutAddress) {
                showToast("Please select an address or add a new one.", 'error');
                return;
            }

            // All good, proceed to payment page
            showToast("Address and mobile confirmed. Proceeding to payment.", 'success', 2000);
            showPage(paymentPage);
        }

        /**
         * Shows the form to add a new address on the checkout page.
         */
        function addNewAddressForCheckout() {
            newCheckoutAddressForm.classList.remove('hidden');
            newCheckoutAddressForm.reset();
            setNewAddressFormRequired(true); // Make new address inputs required
            selectedCheckoutAddress = null; // Clear any previously selected address
            // Uncheck all radio buttons for existing addresses
            document.querySelectorAll('input[name="selectedCheckoutAddress"]').forEach(radio => {
                radio.checked = false;
            });
            window.scrollTo(0, document.body.scrollHeight); // Scroll to the form
        }

        /**
         * Sets the required attribute for new address form fields.
         * @param {boolean} isRequired - True to make fields required, false otherwise.
         */
        function setNewAddressFormRequired(isRequired) {
            const fields = [
                newAddrFullNameInput, newAddrLine1Input, newAddrCityInput,
                newAddrStateInput, newAddrZipCodeInput, newAddrCountryInput, newAddrTypeInput
            ];
            fields.forEach(field => {
                if (isRequired) {
                    field.setAttribute('required', 'true');
                } else {
                    field.removeAttribute('required');
                }
            });
        }

        /**
         * Saves the new address entered on the checkout page and selects it.
         */
        function saveNewAddressForCheckout() {
            // This function is called by the 'Use This Address' button's submit event.
            // Form validation is handled by HTML5 'required' attribute and `proceedToPayment`
            const newAddress = {
                id: Date.now(), // Simple unique ID
                fullName: newAddrFullNameInput.value.trim(),
                addressLine1: newAddrLine1Input.value.trim(),
                addressLine2: newAddrLine2Input.value.trim(),
                city: newAddrCityInput.value.trim(),
                state: newAddrStateInput.value.trim(),
                zipCode: newAddrZipCodeInput.value.trim(),
                country: newAddrCountryInput.value.trim(),
                type: newAddrTypeInput.value // Save the address type
            };

            savedAddresses.push(newAddress);
            saveAddresses();
            selectedCheckoutAddress = newAddress; // Set the newly added address as selected
            newCheckoutAddressForm.classList.add('hidden'); // Hide the form
            setNewAddressFormRequired(false); // Remove required attributes
            renderCheckoutAddresses(); // Re-render the list to show the new address selected
            showToast("New address saved and selected for checkout!", 'success');
        }


        /**
         * Handles submission of the payment form and simulates order placement.
         * @param {Event} event - The form submission event.
         */
        function processPayment(event) {
            event.preventDefault(); // Prevent default form submission

            const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

            if (selectedPaymentMethod === 'Credit / Debit Card') {
                // Validate card details only if card is selected
                const cardNumber = document.getElementById('cardNumber').value.trim();
                const expiryDate = document.getElementById('expiryDate').value.trim();
                const cvv = document.getElementById('cvv').value.trim();
                const cardName = document.getElementById('cardName').value.trim();

                if (!cardNumber || !expiryDate || !cvv || !cardName) {
                    showToast("Please fill in all required card details.", 'error', 3000);
                    return;
                }

                if (!/^[0-9]{13,19}$/.test(cardNumber)) {
                    showToast("Please enter a valid card number.", 'error', 3000);
                    return;
                }
                if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expiryDate)) {
                    showToast("Please enter a valid expiry date (MM/YY).", 'error', 3000);
                    return;
                }
                if (!/^[0-9]{3,4}$/.test(cvv)) {
                    showToast("Please enter a valid CVV.", 'error', 3000);
                    return;
                }
            } else if (selectedPaymentMethod === 'UPI') {
                showToast("Simulating UPI payment...", 'info', 2000);
                // In a real app, you'd show a UPI payment interface here
            } else if (selectedPaymentMethod === 'Cash on Delivery') {
                showToast("Cash on Delivery selected.", 'info', 2000);
            }


            // Simulate payment processing
            toggleLoadingOverlay(true);
            showToast("Processing payment...", 'info', 2000);

            setTimeout(() => {
                toggleLoadingOverlay(false);
                // In a real app, this would be a server response
                showToast("Payment successful! Order placed.", 'success', 3000);
                addOrder(selectedPaymentMethod); // Pass payment method to addOrder
                cart = []; // Clear the cart after successful order
                saveCart();
                updateCartCount();
                showPage(orderConfirmationPage);
            }, 1500); // Simulate network delay
        }

        /**
         * Resets the app to the initial product Browse state.
         */
        function resetApp() {
            cart = []; // Ensure cart is empty
            saveCart();
            updateCartCount();
            searchInput.value = ''; // Clear search input
            categoryFilter.value = 'all'; // Reset filter
            sortOrder.value = 'default'; // Reset sort
            currentFilterCategory = 'all';
            currentSortOrder = 'default';
            currentPriceRange = null; // Reset price range filter
            renderProducts(); // Re-render all products (no search query, default filters/sort)
            showPage(productsPage);
            // Clear address and payment forms
            paymentForm.reset();
            selectedCheckoutAddress = null; // Reset selected address for checkout
            startOfferCarousel(); // Restart carousel on home page reset
        }

        // --- Profile Functions ---
        function renderProfile() {
            // Display mode
            profileDisplayDiv.classList.remove('hidden');
            profileEditForm.classList.add('hidden');

            displayName.textContent = userProfile.name || 'N/A';
            displayMobile.textContent = userProfile.mobile || 'N/A';
            displayEmail.textContent = userProfile.email || 'N/A';
            displayGender.textContent = userProfile.gender || 'N/A';
            displayDob.textContent = userProfile.dob || 'N/A';
            // Removed occupation

            showPage(profilePage);
        }

        function editProfile() {
            // Edit mode
            profileDisplayDiv.classList.add('hidden');
            profileEditForm.classList.remove('hidden');

            profileNameInput.value = userProfile.name;
            profileMobileInput.value = userProfile.mobile;
            profileEmailInput.value = userProfile.email;
            profileGenderInput.value = userProfile.gender;
            profileDobInput.value = userProfile.dob;
            // Removed profileOccupationInput
        }

        function saveProfile(event) {
            event.preventDefault();
            userProfile.name = profileNameInput.value.trim();
            userProfile.mobile = profileMobileInput.value.trim();
            userProfile.email = profileEmailInput.value.trim();
            userProfile.gender = profileGenderInput.value;
            userProfile.dob = profileDobInput.value;
            // Removed userProfile.occupation

            saveUserProfile();
            showToast("Profile updated successfully!", 'success');
            renderProfile(); // Go back to display mode
        }

        function cancelEditProfile() {
            renderProfile(); // Revert to display mode without saving
        }

        // --- Addresses Functions (for My Addresses page) ---
        function renderAddresses() {
            addressListContainer.innerHTML = ''; // Clear existing addresses
            addEditAddressForm.classList.add('hidden'); // Hide add/edit form by default
            addEditAddressForm.reset(); // Clear form fields

            if (savedAddresses.length === 0) {
                noAddressesMessage.classList.remove('hidden');
            } else {
                noAddressesMessage.classList.add('hidden');
                savedAddresses.forEach(addr => {
                    const addressDiv = document.createElement('div');
                    addressDiv.className = 'bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center relative'; // Added relative for dropdown positioning
                    addressDiv.innerHTML = `
                        <div class="text-left mb-1.5 sm:mb-0">
                            <p class="font-semibold text-gray-900 text-sm">${addr.fullName} ${addr.type ? `<span class="ml-1 sm:ml-2 bg-blue-100 text-blue-800 text-xxs sm:text-xs font-medium px-1.5 py-0.5 rounded-full">${addr.type}</span>` : ''}</p>
                            <p class="text-gray-700 text-xs sm:text-sm">${addr.addressLine1}${addr.addressLine2 ? ', ' + addr.addressLine2 : ''}</p>
                            <p class="text-gray-700 text-xs sm:text-sm">${addr.city}, ${addr.state} ${addr.zipCode}</p>
                            <p class="text-gray-700 text-xs sm:text-sm">${addr.country}</p>
                        </div>
                        <div class="relative">
                            <button data-id="${addr.id}" class="address-options-btn text-gray-500 hover:text-gray-700 p-0.5 sm:p-1 rounded-full hover:bg-gray-200 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </button>
                            <div data-id="${addr.id}" class="address-dropdown-menu dropdown-menu">
                                <a href="#" data-id="${addr.id}" class="edit-address-action block px-3 py-1.5 text-gray-800 hover:bg-gray-100 rounded-t-lg text-sm">Edit</a>
                                <a href="#" data-id="${addr.id}" class="delete-address-action block px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-b-lg text-sm">Delete</a>
                            </div>
                        </div>
                    `;
                    addressListContainer.appendChild(addressDiv);
                });
            }
            showPage(addressesPage);

            // Add event listeners for address options buttons
            document.querySelectorAll('.address-options-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent document click from closing immediately
                    const addressId = parseInt(e.currentTarget.dataset.id);
                    const dropdown = document.querySelector(`.address-dropdown-menu[data-id="${addressId}"]`);
                    // Close all other dropdowns
                    document.querySelectorAll('.address-dropdown-menu').forEach(menu => {
                        if (menu !== dropdown) {
                            menu.classList.remove('active'); // Use remove('active')
                        }
                    });
                    dropdown.classList.toggle('active'); // Use toggle('active')
                });
            });

            // Add event listeners for edit/delete actions within dropdowns
            document.querySelectorAll('.edit-address-action').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const addressId = parseInt(e.target.dataset.id);
                    editAddress(addressId);
                    // Close dropdown after action
                    document.querySelector(`.address-dropdown-menu[data-id="${addressId}"]`).classList.remove('active'); // Use remove('active')
                });
            });
            document.querySelectorAll('.delete-address-action').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const addressId = parseInt(e.target.dataset.id);
                    deleteAddress(addressId);
                    // Close dropdown after action
                    document.querySelector(`.address-dropdown-menu[data-id="${addressId}"]`).classList.remove('active'); // Use remove('active')
                });
            });

            // Close address dropdowns when clicking anywhere else
            document.addEventListener('click', (e) => {
                document.querySelectorAll('.address-dropdown-menu').forEach(menu => {
                    // Check if the click target is NOT inside the dropdown or its parent button
                    if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
                        menu.classList.remove('active');
                    }
                });
            });
        }

        function addNewAddress() {
            addEditAddressForm.reset();
            editAddressId.value = ''; // Clear edit ID for new address
            addrTypeInput.value = 'Other'; // Set default type for new address
            addEditAddressForm.classList.remove('hidden');
            window.scrollTo(0, document.body.scrollHeight); // Scroll to the form
        }

        function saveAddress(event) {
            event.preventDefault();
            const newAddress = {
                fullName: addrFullNameInput.value.trim(),
                addressLine1: addrLine1Input.value.trim(),
                addressLine2: addrLine2Input.value.trim(),
                city: addrCityInput.value.trim(),
                state: addrStateInput.value.trim(),
                zipCode: addrZipCodeInput.value.trim(),
                country: addrCountryInput.value.trim(),
                type: addrTypeInput.value // Save the address type
            };

            if (editAddressId.value) {
                // Editing existing address
                const idToEdit = parseInt(editAddressId.value);
                const index = savedAddresses.findIndex(addr => addr.id === idToEdit);
                if (index !== -1) {
                    savedAddresses[index] = { ...newAddress, id: idToEdit };
                    showToast("Address updated successfully!", 'success');
                }
            } else {
                // Adding new address
                newAddress.id = Date.now(); // Simple unique ID
                savedAddresses.push(newAddress);
                showToast("Address added successfully!", 'success');
            }
            saveAddresses();
            renderAddresses(); // Re-render the list
        }

        function editAddress(id) {
            const addrToEdit = savedAddresses.find(addr => addr.id === id);
            if (addrToEdit) {
                editAddressId.value = addrToEdit.id;
                addrFullNameInput.value = addrToEdit.fullName;
                addrLine1Input.value = addrToEdit.addressLine1;
                addrLine2Input.value = addrToEdit.addressLine2;
                addrCityInput.value = addrToEdit.city;
                addrStateInput.value = addrToEdit.state;
                addrZipCodeInput.value = addrZipCodeInput.value;
                addrCountryInput.value = addrToEdit.country;
                addrTypeInput.value = addrToEdit.type || 'Other'; // Set type for editing
                addEditAddressForm.classList.remove('hidden');
                window.scrollTo(0, document.body.scrollHeight); // Scroll to the form
            }
        }

        function deleteAddress(id) {
            showConfirmationModal(
                "Delete Address",
                "Are you sure you want to delete this address?",
                () => {
                    savedAddresses = savedAddresses.filter(addr => addr.id !== id);
                    saveAddresses();
                    renderAddresses();
                    showToast("Address deleted.", 'info');
                },
                "Delete",
                "bg-red-500"
            );
        }

        // --- Orders Functions ---
        /**
         * Determines the current status of an order based on its timestamps.
         * @param {object} order - The order object.
         * @returns {string} The current status ('Packed', 'Shipped', 'Out for Delivery', 'Delivered').
         */
        function getDynamicOrderStatus(order) {
            const now = new Date();
            now.setHours(0, 0, 0, 0); // Normalize current date to start of day

            const orderDate = new Date(order.orderDateTimestamp);
            orderDate.setHours(0, 0, 0, 0); // Normalize order date to start of day

            const expectedDeliveryDateObj = new Date(order.expectedDeliveryTimestamp);
            expectedDeliveryDateObj.setHours(0, 0, 0, 0); // Normalize expected delivery date to start of day

            // Calculate difference in days
            const diffTime = now.getTime() - orderDate.getTime();
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Number of full days passed

            if (now.getTime() >= expectedDeliveryDateObj.getTime()) {
                return 'Delivered';
            } else if (diffDays >= 2) { // 3rd day (daysSinceOrder = 2)
                return 'Out for Delivery';
            } else if (diffDays >= 1) { // 2nd day (daysSinceOrder = 1)
                return 'Shipped';
            } else { // 1st day (daysSinceOrder = 0)
                return 'Packed';
            }
        }

        function addOrder(paymentMethod) { // Added paymentMethod parameter
            if (cart.length === 0) return; // Don't add empty orders

            const now = new Date();
            const orderDateTimestamp = now.getTime(); // Timestamp for order placement
            const orderDateFormatted = now.toLocaleDateString('en-IN');
            const orderTimeFormatted = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

            const deliveryDate = new Date(now);
            deliveryDate.setDate(now.getDate() + 3); // 3 days from now
            deliveryDate.setHours(23, 59, 59, 999); // End of the delivery day
            const expectedDeliveryTimestamp = deliveryDate.getTime();
            const expectedDeliveryDateFormatted = deliveryDate.toLocaleDateString('en-IN');

            const newOrder = {
                id: Date.now(), // Unique order ID
                orderDateTimestamp: orderDateTimestamp, // New: timestamp for order placement
                expectedDeliveryTimestamp: expectedDeliveryTimestamp, // New: timestamp for expected delivery
                date: orderDateFormatted,
                time: orderTimeFormatted,
                items: JSON.parse(JSON.stringify(cart)), // Deep copy of cart items
                total: cart.reduce((sum, item) => {
                    const itemPrice = item.discount ? item.price * (1 - item.discount / 100) : item.price;
                    return sum + itemPrice * item.quantity;
                }, 0).toFixed(0),
                shippingAddress: selectedCheckoutAddress ? { ...selectedCheckoutAddress } : null, // Save the selected address
                mobileNumber: checkoutMobileInput.value.trim(), // Save the mobile number
                paymentMethod: paymentMethod, // Save the payment method
                expectedDeliveryDate: expectedDeliveryDateFormatted // For display
            };
            myOrders.unshift(newOrder); // Add to the beginning of the list
            saveOrders();
        }

        function renderOrders() {
            orderListContainer.innerHTML = ''; // Clear existing orders

            if (myOrders.length === 0) {
                noOrdersMessage.classList.remove('hidden');
            } else {
                noOrdersMessage.classList.add('hidden');
                const orderStatusSteps = ['Packed', 'Shipped', 'Out for Delivery', 'Delivered'];

                myOrders.forEach(order => {
                    const orderDiv = document.createElement('div');
                    orderDiv.className = 'bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200';

                    const currentStatus = getDynamicOrderStatus(order);
                    const currentStatusIndex = orderStatusSteps.indexOf(currentStatus);

                    // Build the timeline HTML
                    let timelineHtml = `
                        <div class="flex items-center justify-between text-xxs sm:text-sm mb-2 sm:mb-4 relative">
                            <div class="absolute left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
                            <div class="absolute left-0 h-0.5 bg-blue-600 z-10 transition-all duration-500 ease-in-out" style="width: ${(currentStatusIndex / (orderStatusSteps.length - 1)) * 100}%"></div>
                    `;

                    orderStatusSteps.forEach((step, index) => {
                        const isActive = index <= currentStatusIndex;
                        const isDelivered = step === 'Delivered' && currentStatus === 'Delivered';
                        const dotColor = isActive ? (isDelivered ? 'bg-green-600' : 'bg-blue-600') : 'bg-gray-300';
                        const textColor = isActive ? (isDelivered ? 'text-green-600' : 'text-blue-600') : 'text-gray-500';
                        const activeClass = isActive ? 'active' : '';
                        const deliveredClass = isDelivered ? 'delivered' : '';

                        timelineHtml += `
                            <div class="flex-1 flex flex-col items-center z-10">
                                <div class="w-3 h-3 sm:w-4 sm:h-4 rounded-full ${dotColor} border-2 border-white shadow-sm timeline-dot ${activeClass} ${deliveredClass}"></div>
                                <span class="mt-0.5 sm:mt-1 text-center font-medium ${textColor}">${step}</span>
                            </div>
                        `;
                    });
                    timelineHtml += '</div>'; // Close timeline container

                    orderDiv.innerHTML = `
                        <div class="flex justify-between items-center mb-1.5 sm:mb-2 pb-1.5 sm:pb-2 border-b border-gray-100">
                            <h3 class="font-bold text-base sm:text-lg text-gray-900">Order ID: ${order.id}</h3>
                            <span class="text-xs sm:text-sm text-gray-600">${order.date} ${order.time}</span>
                        </div>
                        <div class="mb-1.5 sm:mb-2">
                            <p class="font-semibold text-gray-800 text-sm">Shipping Address:</p>
                            ${order.shippingAddress ? `
                                <p class="text-gray-700 text-xs sm:text-sm">${order.shippingAddress.fullName} ${order.shippingAddress.type ? `<span class="ml-1 sm:ml-2 bg-blue-100 text-blue-800 text-xxs sm:text-xs font-medium px-1.5 py-0.5 rounded-full">${order.type}</span>` : ''}</p>
                                <p class="text-gray-700 text-xs sm:text-sm">${order.shippingAddress.addressLine1}${order.shippingAddress.addressLine2 ? ', ' + order.shippingAddress.addressLine2 : ''}</p>
                                <p class="text-gray-700 text-xs sm:text-sm">${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zipCode}</p>
                                <p class="text-gray-700 text-xs sm:text-sm">${order.shippingAddress.country}</p>
                                <p class="text-gray-700 text-xs sm:text-sm">Mobile: ${order.mobileNumber}</p>
                            ` : '<p class="text-gray-500 text-xs sm:text-sm">Address not provided for this order.</p>'}
                            <p class="text-gray-700 text-xs sm:text-sm mt-1 sm:mt-2">Payment Method: <span class="font-semibold">${order.paymentMethod || 'N/A'}</span></p>
                            <p class="text-gray-700 text-xs sm:text-sm mt-1 sm:mt-2">Expected Delivery: <span class="font-semibold">${order.expectedDeliveryDate}</span></p>
                        </div>

                        <div class="timeline-container relative mb-2 sm:mb-4">
                            ${timelineHtml}
                        </div>

                        <ul class="list-disc list-inside text-gray-700 text-xs sm:text-sm mb-1.5 sm:mb-2">
                            ${order.items.map(item => {
                                const itemPrice = item.discount ? item.price * (1 - item.discount / 100) : item.price;
                                return `<li>${item.title} x ${item.quantity} (₹${(itemPrice * item.quantity).toFixed(0)})</li>`;
                            }).join('')} </ul>
                        <p class="text-right font-bold text-base sm:text-lg text-gray-800">Total: ₹${order.total}</p>
                    `;
                    orderListContainer.appendChild(orderDiv);
                });
            }
            showPage(myOrdersPage);
        }

        // --- Wishlist Functions ---
        function renderWishlist() {
            wishlistContainer.innerHTML = ''; // Clear existing items

            if (wishlist.length === 0) {
                emptyWishlistMessage.classList.remove('hidden');
            } else {
                emptyWishlistMessage.classList.add('hidden');
                wishlist.forEach(product => {
                    const wishlistItemCard = document.createElement('div');
                    // Adjusted classes for responsive design
                    wishlistItemCard.className = 'bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer';
                    wishlistItemCard.dataset.productId = product.id; // Store product ID

                    const averageRating = product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length;
                    const starRating = averageRating ? averageRating.toFixed(1) : 'N/A';
                    const reviewCount = product.reviews.length;

                    // Calculate discounted price if applicable
                    const isDiscounted = product.discount && product.discount > 0;
                    const discountedPrice = isDiscounted ? product.price * (1 - product.discount / 100) : product.price;

                    // Use the product's image URL
                    const imageUrl = product.image;

                    wishlistItemCard.innerHTML = `
                        <div class="relative">
                            <img src="${imageUrl}" alt="${product.title}" loading="lazy" onerror="this.onerror=null;this.src='${getImagePlaceholderUrl(product.title, product.category)}';" class="w-full h-24 sm:h-40 object-cover">
                            ${isDiscounted ? `<span class="absolute top-1 right-1 bg-red-500 text-white text-xxs font-bold px-1 py-0.5 rounded-full">- ${product.discount}%</span>` : ''}
                             ${product.additionalImages && product.additionalImages.length > 0 ? `
                                <div class="absolute bottom-1 left-1 bg-gray-800 bg-opacity-75 text-white rounded-full p-1 text-xxs flex items-center space-x-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>+${product.additionalImages.length}</span>
                                </div>
                            ` : ''}
                        </div>
                        <div class="p-1 sm:p-3">
                            <h3 class="text-xs sm:text-base font-semibold text-gray-900 mb-0.5">${product.title}</h3>
                            <p class="text-xxs sm:text-xs text-gray-600 mb-0.5 truncate">${product.description}</p>
                            <div class="flex items-center mb-1">
                                <span class="text-yellow-500 mr-0.5 text-xs">★</span>
                                <span class="text-gray-600 text-xxs">${starRating} (${reviewCount} reviews)</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm sm:text-lg font-bold text-blue-600">
                                    ${isDiscounted ? `<span class="line-through text-gray-500 text-xs mr-1">₹${product.price.toFixed(0)}</span>` : ''}
                                    ₹${discountedPrice.toFixed(0)}
                                </span>
                                <div class="flex space-x-0.5">
                                    <button data-product-id="${product.id}" class="add-to-cart-btn bg-blue-500 hover:bg-blue-600 text-white font-medium py-0.5 px-1 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-xxs">
                                        + Cart
                                    </button>
                                    <button data-product-id="${product.id}" class="remove-from-wishlist-btn bg-red-100 text-red-700 hover:bg-red-200 p-0.5 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    wishlistContainer.appendChild(wishlistItemCard);
                });

                document.querySelectorAll('#wishlistContainer .add-to-cart-btn').forEach(button => {
                    button.addEventListener('click', (event) => {
                        event.stopPropagation();
                        const productId = parseInt(event.target.dataset.productId);
                        addToCart(productId);
                    });
                });

                document.querySelectorAll('.remove-from-wishlist-btn').forEach(button => {
                    button.addEventListener('click', (event) => {
                        event.stopPropagation();
                        const productId = parseInt(event.target.closest('button').dataset.productId);
                        toggleWishlist(productId); // This also handles removal
                    });
                });

                document.querySelectorAll('#wishlistContainer .cursor-pointer').forEach(card => {
                    card.addEventListener('click', (event) => {
                        const productId = parseInt(event.currentTarget.dataset.productId);
                        openProductDetailModal(productId);
                        addRecentlyViewed(productId);
                    });
                });
            }
            showPage(myWishlistPage);
        }

        // --- Recently Viewed Functions ---
        function renderRecentlyViewed() {
            recentlyViewedContainer.innerHTML = '';
            if (recentlyViewed.length === 0) {
                recentlyViewedSection.classList.add('hidden');
            } else {
                recentlyViewedSection.classList.remove('hidden');
                recentlyViewed.forEach(product => {
                    const productCard = document.createElement('div');
                    // Adjusted classes for responsive design
                    productCard.className = 'bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer';
                    productCard.dataset.productId = product.id;

                    const averageRating = product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length;
                    const starRating = averageRating ? averageRating.toFixed(1) : 'N/A';
                    const reviewCount = product.reviews.length;

                    // Calculate discounted price if applicable
                    const isDiscounted = product.discount && product.discount > 0;
                    const discountedPrice = isDiscounted ? product.price * (1 - product.discount / 100) : product.price;

                    // Use the product's image URL
                    const imageUrl = product.image;

                    productCard.innerHTML = `
                        <div class="relative">
                            <img src="${imageUrl}" alt="${product.title}" loading="lazy" onerror="this.onerror=null;this.src='${getImagePlaceholderUrl(product.title, product.category)}';" class="w-full h-24 sm:h-40 object-cover">
                            ${isDiscounted ? `<span class="absolute top-1 right-1 bg-red-500 text-white text-xxs font-bold px-1 py-0.5 rounded-full">- ${product.discount}%</span>` : ''}
                             ${product.additionalImages && product.additionalImages.length > 0 ? `
                                <div class="absolute bottom-1 left-1 bg-gray-800 bg-opacity-75 text-white rounded-full p-1 text-xxs flex items-center space-x-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>+${product.additionalImages.length}</span>
                                </div>
                            ` : ''}
                        </div>
                        <div class="p-1 sm:p-3">
                            <h3 class="text-xs sm:text-base font-semibold text-gray-900 mb-0.5">${product.title}</h3>
                            <p class="text-xxs sm:text-xs text-gray-600 mb-0.5 truncate">${product.description}</p>
                            <div class="flex items-center mb-1">
                                <span class="text-yellow-500 mr-0.5 text-xs">★</span>
                                <span class="text-gray-600 text-xxs">${starRating} (${reviewCount} reviews)</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm sm:text-lg font-bold text-blue-600">
                                    ${isDiscounted ? `<span class="line-through text-gray-500 text-xs mr-1">₹${product.price.toFixed(0)}</span>` : ''}
                                    ₹${discountedPrice.toFixed(0)}
                                </span>
                                <div class="flex space-x-0.5">
                                    <button data-product-id="${product.id}" class="add-to-cart-btn bg-blue-500 hover:bg-blue-600 text-white font-medium py-0.5 px-1 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-xxs">
                                        + Cart
                                    </button>
                                    <button data-product-id="${product.id}" class="add-to-wishlist-btn bg-gray-200 text-gray-700 hover:bg-gray-300 p-0.5 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="${wishlist.some(item => item.id === product.id) ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    recentlyViewedContainer.appendChild(productCard);
                });
                // Add event listeners to "Add to Cart" and "Add to Wishlist" buttons
                document.querySelectorAll('#recentlyViewedContainer .add-to-cart-btn').forEach(button => {
                    button.addEventListener('click', (event) => {
                        event.stopPropagation();
                        const productId = parseInt(event.target.dataset.productId);
                        addToCart(productId);
                    });
                });
                document.querySelectorAll('#recentlyViewedContainer .add-to-wishlist-btn').forEach(button => {
                    button.addEventListener('click', (event) => {
                        event.stopPropagation();
                        const productId = parseInt(event.target.closest('button').dataset.productId);
                        toggleWishlist(productId);
                    });
                });
                document.querySelectorAll('#recentlyViewedContainer .cursor-pointer').forEach(card => {
                    card.addEventListener('click', (event) => {
                        const productId = parseInt(event.currentTarget.dataset.productId);
                        openProductDetailModal(productId);
                        addRecentlyViewed(productId); // Add to recently viewed again to bring to front
                    });
                });
            }
        }

        // --- Offer Gallery Functions ---
        function renderCurrentOffer() {
            const offer = offers[currentOfferIndex];
            if (offer) {
                offerImage.src = offer.image;
                offerImage.alt = offer.message;
                offerMessage.textContent = offer.message;
            }
        }

        function nextOffer() {
            currentOfferIndex = (currentOfferIndex + 1) % offers.length;
            renderCurrentOffer();
        }

        function prevOffer() {
            currentOfferIndex = (currentOfferIndex - 1 + offers.length) % offers.length;
            renderCurrentOffer();
        }

        function startOfferCarousel() {
            clearInterval(offerInterval); // Clear any existing interval
            if (offers.length > 1) { // Only start if there's more than one offer
                offerInterval = setInterval(nextOffer, OFFER_INTERVAL_TIME);
            }
        }

        function stopOfferCarousel() {
            clearInterval(offerInterval);
        }

        function applyOfferFilter(offer) {
            stopOfferCarousel(); // Stop carousel when an offer is clicked
            renderProducts('', offer.filter); // Apply the filter from the offer
            showToast(`Filtering by: ${offer.message.split('!')[0]}`, 'info', 2500);
            showPage(productsPage); // Ensure we are on the products page
        }


        // --- Logout Function ---
        function handleLogout() {
            showConfirmationModal(
                "Confirm Logout",
                "Are you sure you want to log out?",
                () => {
                    // In a real application, this would involve clearing authentication tokens,
                    // session data on the server, etc.
                    localStorage.removeItem('shoppingCart');
                    localStorage.removeItem('userProfile'); // Profile data is now persistent unless explicitly cleared
                    localStorage.removeItem('savedAddresses'); // Addresses are now persistent unless explicitly cleared
                    localStorage.removeItem('myOrders'); // Orders are now persistent unless explicitly cleared
                    localStorage.removeItem('shoppingWishlist'); // Clear wishlist on logout
                    localStorage.removeItem('recentlyViewed'); // Clear recently viewed on logout
                    cart = [];
                    wishlist = [];
                    recentlyViewed = [];
                    // userProfile = { name: '', mobile: '', email: '' }; // No longer reset profile on logout, it's persistent
                    // savedAddresses = []; // No longer reset addresses on logout, they are persistent
                    // myOrders = []; // No longer reset orders on logout, they are persistent
                    updateCartCount();
                    showToast("You have been logged out.", 'info');
                    resetApp(); // Go back to a clean home page
                },
                "Yes, Logout",
                "bg-red-500"
            );
        }

        // --- Event Listeners ---

        // Navigation Bar
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            resetApp(); // Go to home page and reset
        });

        homeButton.addEventListener('click', (e) => { // New: Home button event listener
            e.preventDefault();
            resetApp();
        });

        searchInput.addEventListener('input', () => {
            stopOfferCarousel(); // Stop carousel when search is active
            renderProducts(searchInput.value); // Re-render with search query
            showPage(productsPage); // Ensure products page is visible when searching
        });

        // Account Dropdown Toggle
        accountButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling to document and closing immediately
            accountDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking anywhere else on the document
        document.addEventListener('click', (e) => {
            if (!accountButton.contains(e.target) && !accountDropdown.contains(e.target)) {
                accountDropdown.classList.remove('active');
            }
        });

        // Account Dropdown Links
        profileLink.addEventListener('click', (e) => {
            e.preventDefault();
            stopOfferCarousel(); // Stop carousel when navigating away from products page
            renderProfile();
        });

        addressesLink.addEventListener('click', (e) => {
            e.preventDefault();
            stopOfferCarousel(); // Stop carousel when navigating away from products page
            renderAddresses();
        });

        myOrdersLink.addEventListener('click', (e) => {
            e.preventDefault();
            stopOfferCarousel(); // Stop carousel when navigating away from products page
            renderOrders();
        });

        myWishlistLink.addEventListener('click', (e) => {
            e.preventDefault();
            stopOfferCarousel(); // Stop carousel when navigating away from products page
            renderWishlist();
        });

        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            handleLogout(); // Use the new handleLogout that shows a modal
        });


        // Cart Modal
        cartButton.addEventListener('click', () => {
            renderCartItems(); // Ensure cart items are up-to-date when opening
            cartModal.classList.remove('hidden');
        });

        closeCartButton.addEventListener('click', () => {
            cartModal.classList.add('hidden');
        });

        // Close modal when clicking outside of it
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.add('hidden');
            }
        });

        // Product Detail Modal
        closeProductDetailButton.addEventListener('click', () => {
            productDetailModal.classList.add('hidden');
            // Reset image zoom if it was applied
            const detailImage = document.getElementById('mainProductImage');
            if (detailImage) {
                detailImage.classList.remove('scale-[1.5]');
                detailImage.style.cursor = 'zoom-in';
            }
        });
        productDetailModal.addEventListener('click', (e) => {
            if (e.target === productDetailModal) {
                productDetailModal.classList.add('hidden');
                // Reset image zoom if it was applied
                const detailImage = document.getElementById('mainProductImage');
                if (detailImage) {
                    detailImage.classList.remove('scale-[1.5]');
                    detailImage.style.cursor = 'zoom-in';
                }
            }
        });
        detailModalAddToCartButton.addEventListener('click', (event) => {
            // Changed to currentTarget for more robust product ID retrieval
            const productId = parseInt(event.currentTarget.dataset.productId);
            addToCart(productId);
            productDetailModal.classList.add('hidden'); // Close modal after adding to cart
        });
        detailModalWishlistButton.addEventListener('click', (event) => { // New: Wishlist button in modal
            const productId = parseInt(event.currentTarget.dataset.productId);
            toggleWishlist(productId);
            productDetailModal.classList.add('hidden'); // Close modal after adding to wishlist
        });

        // Checkout Flow Buttons
        checkoutButton.addEventListener('click', navigateToAddressPage);

        // New event listener for proceeding from address selection to payment
        proceedToPaymentButton.addEventListener('click', proceedToPayment);

        // New address form on checkout page
        addNewAddressForCheckoutButton.addEventListener('click', addNewAddressForCheckout);
        cancelNewAddressForCheckoutButton.addEventListener('click', () => {
            newCheckoutAddressForm.classList.add('hidden');
            newCheckoutAddressForm.reset();
            setNewAddressFormRequired(false); // Remove required attributes
            // Re-select the first address if available, or ensure no address is selected
            if (savedAddresses.length > 0) {
                document.getElementById(`addr-${savedAddresses[0].id}`).checked = true;
                selectedCheckoutAddress = savedAddresses[0];
            } else {
                selectedCheckoutAddress = null;
            }
        });
        newCheckoutAddressForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission
            saveNewAddressForCheckout(); // Save the new address
            proceedToPayment(); // Then try to proceed to payment
        });


        paymentForm.addEventListener('submit', processPayment); // From payment page to confirmation page
        backToAddressButton.addEventListener('click', () => {
            showPage(addressPage); // Go back to address page
        });

        continueShoppingButton.addEventListener('click', resetApp); // From confirmation page back to home

        // Back to Home buttons from new account pages
        backToHomeFromProfile.addEventListener('click', () => showPage(productsPage));
        backToHomeFromAddresses.addEventListener('click', () => showPage(productsPage));
        backToHomeFromOrders.addEventListener('click', () => showPage(productsPage));
        backToHomeFromWishlist.addEventListener('click', () => showPage(productsPage));

        // Profile Form (Edit mode)
        editProfileButton.addEventListener('click', editProfile);
        cancelEditProfileButton.addEventListener('click', cancelEditProfile);
        profileEditForm.addEventListener('submit', saveProfile);
        manageAddressesLink.addEventListener('click', (e) => {
            e.preventDefault();
            renderAddresses();
        });

        // Addresses Page Buttons (for My Addresses section)
        addNewAddressButton.addEventListener('click', addNewAddress);
        cancelAddEditAddress.addEventListener('click', () => {
            addEditAddressForm.classList.add('hidden');
            addEditAddressForm.reset();
            editAddressId.value = '';
        });
        addEditAddressForm.addEventListener('submit', saveAddress);

        // Payment Method selection logic
        paymentMethodRadios.forEach(radio => {
            radio.addEventListener('change', (event) => {
                if (event.target.value === 'Credit / Debit Card') {
                    cardDetailsDiv.classList.remove('hidden');
                    // Make card inputs required
                    document.getElementById('cardNumber').setAttribute('required', 'true');
                    document.getElementById('expiryDate').setAttribute('required', 'true');
                    document.getElementById('cvv').setAttribute('required', 'true');
                    document.getElementById('cardName').setAttribute('required', 'true');
                } else {
                    cardDetailsDiv.classList.add('hidden');
                    // Remove required attribute for other payment methods
                    document.getElementById('cardNumber').removeAttribute('required');
                    document.getElementById('expiryDate').removeAttribute('required');
                    document.getElementById('cvv').removeAttribute('required');
                    document.getElementById('cardName').removeAttribute('required');
                }
            });
        });

        // Filter and Sort Event Listeners
        categoryFilter.addEventListener('change', (e) => {
            currentFilterCategory = e.target.value;
            currentPriceRange = null; // Clear price range filter when category filter is used
            renderProducts(searchInput.value);
            startOfferCarousel(); // Restart carousel if user manually filters
        });

        sortOrder.addEventListener('change', (e) => {
            currentSortOrder = e.target.value;
            renderProducts(searchInput.value);
            startOfferCarousel(); // Restart carousel if user manually sorts
        });

        // Offer Gallery Event Listeners
        offerGallery.addEventListener('click', () => {
            applyOfferFilter(offers[currentOfferIndex]);
        });
        prevOfferBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the gallery click event
            stopOfferCarousel(); // Stop auto-change when manually navigating
            prevOffer();
            startOfferCarousel(); // Restart auto-change after manual navigation
        });
        nextOfferBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the gallery click event
            stopOfferCarousel(); // Stop auto-change when manually navigating
            nextOffer();
            startOfferCarousel(); // Restart auto-change after manual navigation
        });

        // New: Clear Recently Viewed Button Event Listener
        clearRecentlyViewedBtn.addEventListener('click', clearRecentlyViewed);

        // New: Close Toast Button Event Listener
        closeToastButton.addEventListener('click', hideToast);


        // --- Initial Setup ---
        window.onload = () => {
            populateCategoryFilter(); // Populate categories when page loads
            renderProducts(); // Display all products initially
            updateCartCount(); // Update count on page load from local storage
            showPage(productsPage); // Ensure products page is the default view
            renderCurrentOffer(); // Display the first offer
            startOfferCarousel(); // Start the automatic offer rotation
        };