import featured1 from './assets/img/product1.png';
import featured2 from './assets/img/product2.png';
import featured3 from './assets/img/product3.png';
import featured4 from './assets/img/product4.png';
import newProduct1 from './assets/img/PearlMaster.png';
import newProduct2 from './assets/img/DateJust31.png';
import newProduct3 from './assets/img/DateJust36.png';
import newProduct4 from './assets/img/Lady-DateJust.png';
import newProduct5 from './assets/img/CosmoGraph.png';
import newProduct6 from './assets/img/CelliniMoonphase.png';
import newProduct7 from './assets/img/OysterPerpetual.png';
import newProduct8 from './assets/img/SkyDweller.png';

import product1 from './assets/img/CelliniMoonphase.png';
import product2 from './assets/img/OysterPerpetual.png';
import product3 from './assets/img/SkyDweller.png';
import product4 from './assets/img/Day-Date-40.png';
import product5 from './assets/img/SkyDweller.png';
import product6 from './assets/img/PearlMaster.png';
import product7 from './assets/img/DateJust31.png';
import product8 from './assets/img/DateJust36.png';
import product9 from './assets/img/Lady-DateJust.png';
import product10 from './assets/img/CosmoGraph.png';
import product11 from './assets/img/CelliniMoonphase.png';
import product12 from './assets/img/OysterPerpetual.png';
import product13 from './assets/img/SkyDweller.png';
import product14 from './assets/img/Day-Date-40.png';
import product15 from './assets/img/PearlMaster.png';
import product16 from './assets/img/DateJust31.png';
import product17 from './assets/img/DateJust36.png';
import product18 from './assets/img/Lady-DateJust.png';
import product19 from './assets/img/CosmoGraph.png';
import product20 from './assets/img/DateJust36.png';
import product21 from './assets/img/Lady-DateJust.png';
import product22 from './assets/img/CosmoGraph.png';

import paginator from './utils/paginator';

export const filteredProducts = [
  {
    id: 1,
    name: 'Cellini Moonphase',
    price: 1000,
    description:
      'The Cellini Moonphase has a white lacquer dial with a blue enamelled disc at 6 showing the full moon and the new moon, the former depicted by a meteorite applique and the latter by a silver ring. The Cellini Moonphase also displays the date around the circumference of the dial, via a centre hand with a crescent moon at its tip.',
    brand: 'rolex',
    category: 'men',
    featured: true,
    image: product1,

    colors: ['#ece6db', '#000', '#D4AF37'],
  },
  {
    id: 2,
    name: 'Oyster Perpetual',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.Once the sunray finish has been completed, the dial colour is applied using Physical Vapour Deposition or electroplating. A light coat of varnish gives the dial its final look.',
    brand: 'rolex',
    category: 'men',
    featured: true,
    image: product2,
    colors: ['#ece6db', '#000', '#D4AF37'],
  },
  {
    id: 3,
    name: 'Sky-Dweller',
    price: 3000,
    description: `A fixed inverted red triangle on the dial points to the chosen reference time,the time at home or at the travellers usual workplace,on the off-centre 24-hour disc. At a glance, this 24-hour display clearly distinguishes daytime hours from night-time hours in the other time zone. The dials now feature rectangular index hour markers and longer hands, as well as a Chromalight display with long-lasting luminescence, which enhances legibility.`,
    brand: 'rolex',
    category: 'men',
    featured: true,
    image: product3,

    colors: ['#ece6db', '#000', '#D4AF37'],
  },
  {
    id: 4,
    name: 'Day-Date 40',
    price: 1000,
    description:
      'The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, always in gold.',
    brand: 'rolex',
    category: 'men',

    image: product4,

    colors: ['#ece6db', '#000', '#D4AF37'],
  },
  {
    id: 5,
    name: 'Sky-Dweller',
    price: 3000,
    description: `A fixed inverted red triangle on the dial points to the chosen reference time,the time at home or at the travellers usual workplace,on the off-centre 24-hour disc. At a glance, this 24-hour display clearly distinguishes daytime hours from night-time hours in the other time zone. The dials now feature rectangular index hour markers and longer hands, as well as a Chromalight display with long-lasting luminescence, which enhances legibility.`,
    brand: 'rolex',
    category: 'men',
    image: product5,

    colors: ['#ece6db', '#000', '#D4AF37'],
  },

  {
    id: 6,
    name: 'Pearl Master',
    price: 1000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product6,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 7,
    name: 'Date Just 31',
    price: 1000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product7,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 8,
    name: 'DateJust 36',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product8,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 9,
    name: 'Lady-Datejust',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product9,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 10,
    name: 'Cosmograph Daytona',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.',
    brand: 'rolex',
    category: 'women',

    image: product10,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 11,
    name: 'Cellini Moonphase',
    price: 1000,
    description:
      'The Cellini Moonphase has a white lacquer dial with a blue enamelled disc at 6 showing the full moon and the new moon, the former depicted by a meteorite applique and the latter by a silver ring. The Cellini Moonphase also displays the date around the circumference of the dial, via a centre hand with a crescent moon at its tip.',
    brand: 'rolex',
    category: 'men',

    image: product11,

    colors: ['#ece6db', '#000', '#D4AF37'],
  },
  {
    id: 12,
    name: 'Oyster Perpetual',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.Once the sunray finish has been completed, the dial colour is applied using Physical Vapour Deposition or electroplating. A light coat of varnish gives the dial its final look.',
    brand: 'rolex',
    category: 'men',
    image: product12,
    colors: ['#ece6db', '#000', '#D4AF37'],
  },

  {
    id: 13,
    name: 'Sky-Dweller',
    price: 3000,
    description: `A fixed inverted red triangle on the dial points to the chosen reference time,the time at home or at the travellers usual workplace,on the off-centre 24-hour disc. At a glance, this 24-hour display clearly distinguishes daytime hours from night-time hours in the other time zone. The dials now feature rectangular index hour markers and longer hands, as well as a Chromalight display with long-lasting luminescence, which enhances legibility.`,
    brand: 'rolex',
    category: 'men',
    image: product13,

    colors: ['#ece6db', '#000', '#D4AF37'],
  },
  {
    id: 14,
    name: 'Day-Date 40',
    price: 1000,
    description:
      'The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, always in gold.',
    brand: 'rolex',
    category: 'men',

    image: product14,

    colors: ['#ece6db', '#000', '#D4AF37'],
  },
  {
    id: 15,
    name: 'Pearl Master',
    price: 1000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product15,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 16,
    name: 'Day-Date 31',
    price: 1000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product16,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 17,
    name: 'DateJust 36',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product17,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 18,
    name: 'Lady-Datejust',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product18,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 19,
    name: 'Cosmograph Daytona',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.',
    brand: 'rolex',
    category: 'women',

    image: product19,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 20,
    name: 'DateJust 36',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product20,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 21,
    name: 'Lady-Datejust',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product21,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 22,
    name: 'Cosmograph Daytona',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.',
    brand: 'rolex',
    category: 'women',

    image: product22,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
];

export const featuredProducts = [
  {
    id: 1,
    name: 'Cellini Moonphase',
    price: 1000,
    description:
      'The Cellini Moonphase has a white lacquer dial with a blue enamelled disc at 6 showing the full moon and the new moon, the former depicted by a meteorite applique and the latter by a silver ring. The Cellini Moonphase also displays the date around the circumference of the dial, via a centre hand with a crescent moon at its tip.',
    brand: 'rolex',
    category: 'men',
    featured: true,
    image: featured1,

    colors: ['#ece6db', '#000', '#D4AF37'],
  },
  {
    id: 2,
    name: 'Oyster Perpetual',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.Once the sunray finish has been completed, the dial colour is applied using Physical Vapour Deposition or electroplating. A light coat of varnish gives the dial its final look.',
    brand: 'rolex',
    category: 'men',
    featured: true,
    image: featured2,
    colors: ['#ece6db', '#000', '#D4AF37'],
  },
  {
    id: 3,
    name: 'Sky-Dweller',
    price: 3000,
    description: `A fixed inverted red triangle on the dial points to the chosen reference time,the time at home or at the travellers usual workplace,on the off-centre 24-hour disc. At a glance, this 24-hour display clearly distinguishes daytime hours from night-time hours in the other time zone. The dials now feature rectangular index hour markers and longer hands, as well as a Chromalight display with long-lasting luminescence, which enhances legibility.`,
    brand: 'rolex',
    category: 'men',
    featured: true,
    image: featured3,

    colors: ['#ece6db', '#000', '#D4AF37'],
  },
  {
    id: 4,
    name: 'Day-Date 40',
    price: 1000,
    description:
      'The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, always in gold.',
    brand: 'rolex',
    category: 'men',

    image: featured4,

    colors: ['#ece6db', '#000', '#D4AF37'],
  },
];

export const newProducts = [
  {
    id: 1,
    name: 'Pearl Master',
    price: 1000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: newProduct1,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 2,
    name: 'Date Just 31',
    price: 1000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: newProduct2,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 3,
    name: 'DateJust 36',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: newProduct3,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 4,
    name: 'Lady-Datejust',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: newProduct4,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 5,
    name: 'Cosmograph Daytona',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.',
    brand: 'rolex',
    category: 'women',

    image: newProduct5,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
  },
  {
    id: 6,
    name: 'Cellini Moonphase',
    price: 1000,
    description:
      'The Cellini Moonphase has a white lacquer dial with a blue enamelled disc at 6 showing the full moon and the new moon, the former depicted by a meteorite applique and the latter by a silver ring. The Cellini Moonphase also displays the date around the circumference of the dial, via a centre hand with a crescent moon at its tip.',
    brand: 'rolex',
    category: 'men',

    image: newProduct6,

    colors: ['#ece6db', '#000', '#D4AF37'],
  },
  {
    id: 7,
    name: 'Oyster Perpetual',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.Once the sunray finish has been completed, the dial colour is applied using Physical Vapour Deposition or electroplating. A light coat of varnish gives the dial its final look.',
    brand: 'rolex',
    category: 'men',
    image: newProduct7,
    colors: ['#ece6db', '#000', '#D4AF37'],
  },
  {
    id: 8,
    name: 'Sky-Dweller',
    price: 3000,
    description: `A fixed inverted red triangle on the dial points to the chosen reference time,the time at home or at the travellers usual workplace,on the off-centre 24-hour disc. At a glance, this 24-hour display clearly distinguishes daytime hours from night-time hours in the other time zone. The dials now feature rectangular index hour markers and longer hands, as well as a Chromalight display with long-lasting luminescence, which enhances legibility.`,
    brand: 'rolex',
    category: 'men',
    image: newProduct8,

    colors: ['#ece6db', '#000', '#D4AF37'],
  },
];

export const sortOptions = [
  { name: 'Price: Low to High', value: 'price-lowest', current: false },
  { name: 'Price: High to Low', value: 'price-highest', current: false },
  { name: 'Name: A-Z', value: 'name-a', current: true },
  { name: 'Name: Z-A', value: 'name-z', current: false },
];

export const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'all', label: 'All', checked: true },
      { value: 'men', label: 'Men', checked: false },
      { value: 'women', label: 'Women', checked: false },
    ],
  },
  {
    id: 'company',
    name: 'Company',
    options: [
      { value: 'cartier', label: 'Cartier', checked: true },
      { value: 'rolex', label: 'Rolex', checked: false },
      { value: 'omega', label: 'Omega', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'black', label: 'Black', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '100', label: '0-100', checked: false },
      { value: '500', label: '100-500', checked: false },
      { value: '1000', label: '500-1000', checked: true },
    ],
  },
];

export const singleProducts = [
  {
    id: 1,
    name: 'Pearl Master',
    price: 1000,
    brand: 'Rolex',
    category: 'men',
    featured: true,
    image: product1,
    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],
    description:
      'The Cellini Moonphase has a white lacquer dial with a blue enamelled disc at 6 showing the full moon and the new moon, the former depicted by a meteorite applique and the latter by a silver ring. The Cellini Moonphase also displays the date around the circumference of the dial, via a centre hand with a crescent moon at its tip.',

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 2,
    name: 'Oyster Perpetual',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.Once the sunray finish has been completed, the dial colour is applied using Physical Vapour Deposition or electroplating. A light coat of varnish gives the dial its final look.',
    brand: 'rolex',
    category: 'men',
    featured: true,
    image: product2,
    colors: ['#ece6db', '#000', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 3,
    name: 'Sky-Dweller',
    price: 3000,
    description: `A fixed inverted red triangle on the dial points to the chosen reference time,the time at home or at the travellers usual workplace,on the off-centre 24-hour disc. At a glance, this 24-hour display clearly distinguishes daytime hours from night-time hours in the other time zone. The dials now feature rectangular index hour markers and longer hands, as well as a Chromalight display with long-lasting luminescence, which enhances legibility.`,
    brand: 'rolex',
    category: 'men',
    featured: true,
    image: product3,
    colors: ['#ece6db', '#000', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 4,
    name: 'Day-Date 40',
    price: 1000,
    description:
      'The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, always in gold.',
    brand: 'rolex',
    category: 'men',

    image: product4,

    colors: ['#ece6db', '#000', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 5,
    name: 'Sky-Dweller',
    price: 3000,
    description: `A fixed inverted red triangle on the dial points to the chosen reference time,the time at home or at the travellers usual workplace,on the off-centre 24-hour disc. At a glance, this 24-hour display clearly distinguishes daytime hours from night-time hours in the other time zone. The dials now feature rectangular index hour markers and longer hands, as well as a Chromalight display with long-lasting luminescence, which enhances legibility.`,
    brand: 'rolex',
    category: 'men',
    image: product5,

    colors: ['#ece6db', '#000', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },

  {
    id: 6,
    name: 'Pearl Master',
    price: 1000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product6,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 7,
    name: 'Date Just 31',
    price: 1000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product7,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 8,
    name: 'DateJust 36',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product8,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 9,
    name: 'Lady-Datejust',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product9,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 10,
    name: 'Cosmograph Daytona',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.',
    brand: 'rolex',
    category: 'women',

    image: product10,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 11,
    name: 'Cellini Moonphase',
    price: 1000,
    description:
      'The Cellini Moonphase has a white lacquer dial with a blue enamelled disc at 6 showing the full moon and the new moon, the former depicted by a meteorite applique and the latter by a silver ring. The Cellini Moonphase also displays the date around the circumference of the dial, via a centre hand with a crescent moon at its tip.',
    brand: 'rolex',
    category: 'men',

    image: product11,

    colors: ['#ece6db', '#000', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 12,
    name: 'Oyster Perpetual',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.Once the sunray finish has been completed, the dial colour is applied using Physical Vapour Deposition or electroplating. A light coat of varnish gives the dial its final look.',
    brand: 'rolex',
    category: 'men',
    image: product12,
    colors: ['#ece6db', '#000', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },

  {
    id: 13,
    name: 'Sky-Dweller',
    price: 3000,
    description: `A fixed inverted red triangle on the dial points to the chosen reference time,the time at home or at the travellers usual workplace,on the off-centre 24-hour disc. At a glance, this 24-hour display clearly distinguishes daytime hours from night-time hours in the other time zone. The dials now feature rectangular index hour markers and longer hands, as well as a Chromalight display with long-lasting luminescence, which enhances legibility.`,
    brand: 'rolex',
    category: 'men',
    image: product13,

    colors: ['#ece6db', '#000', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 14,
    name: 'Day-Date 40',
    price: 1000,
    description:
      'The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, always in gold.',
    brand: 'rolex',
    category: 'men',

    image: product14,

    colors: ['#ece6db', '#000', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 15,
    name: 'Pearl Master',
    price: 1000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product15,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 16,
    name: 'Day-Date 31',
    price: 1000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product16,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 17,
    name: 'DateJust 36',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product17,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 18,
    name: 'Lady-Datejust',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product18,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 19,
    name: 'Cosmograph Daytona',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.',
    brand: 'rolex',
    category: 'women',

    image: product19,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 20,
    name: 'DateJust 36',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product20,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 21,
    name: 'Lady-Datejust',
    price: 2000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.',
    brand: 'rolex',
    category: 'women',

    image: product21,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
  {
    id: 22,
    name: 'Cosmograph Daytona',
    price: 2000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.',
    brand: 'rolex',
    category: 'women',

    image: product22,

    colors: ['#ece6db', '#E0BFB8', '#D4AF37'],

    stock: 20,
    shipping: true,
    reviews: [],
    numReviews: 0,
    averageRating: 0,
  },
];
