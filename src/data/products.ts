import sweetmint from "../assets/sweetmint.png";
import butter from "../assets/butter.png"
import fruit from "../assets/fruit.png"
import islandint from "../assets/islandint.png"
import kaachaaam from "../assets/kaachaaam.png"
import kohdrops from "../assets/kohdrops.png"
import lemmontwist from "../assets/lemmontwist .png"
import lemontea from "../assets/lemontea.png"
import mambosoda from "../assets/mambosoda.png"
import milkycandy from "../assets/milkycandy.png"
import pilipip from "../assets/pilipip.png"
import spicyguava from "../assets/spicyguava.png"
import spicytamarind from "../assets/spicytamarind.png"
import four from "../assets/four.png"


import hero from"../assets/hero.png";
export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  flavour: string;
  category: "Truffles" | "Fudge" | "Gummies" | "Bonbons";
  price: number;
  image: string;
  bg: string;
  
  badge?: string;
};

// export const products: Product[] = [
//   {
//     id: "1", slug: "mint-chocolate-truffles", name: " Pranav SWEET MINT",
//     description: "A cool and refreshing feeling found only in our sweet Mint.", flavour: "Tamu Mint",
//     category: "Truffles", price: 60, image: hero, bg: "var(--mint)", badge: "Best seller",
//   },
//   {
//     id: "2", slug: "salted-caramel-fudge", name: "Pranav Spicy Tamarind(Ukwa ju)",
//     description: "Spicy tamarind(Ukwa ju) has the taste y'all want.", flavour: "Tamarind",
//     category: "Fudge", price: 90, image: butter , bg: "var(--peach)", badge: "Fan favourite",
//   },
//   {
//     id: "3", slug: "peach-gummy-rings", name: " Pranav Kaccha Aam",
//     description: "Have you tried this Kaccha Aam(embe mbichi)", flavour: "Kaacha Aam",
//     category: "Gummies", price: 90, image: hero, bg: "var(--peach)",
//   },
//   {
//     id: "4", slug: "coconut-cocoa-bonbons", name: "Coconut Cocoa Bonbons",
//     description: "Toasted coconut in milk chocolate.", flavour: "Coconut Chocolate",
//     category: "Bonbons", price: 600, image: hero, bg: "var(--mint)", badge: "New",
//   },
// ];
export const products: Product[] = [
  { id: "sweet-mint", name: "Sweet Mint (Tamu Mint)", description: "A cool and refreshing feeling found only in our Sweet Mint🌬️", price: 200, flavours: ["Mint", "Cool"], image: sweetmint, emoji: "🍬", bestSeller: true, stock: 100 },
  { id: "island-mint", name: "Island Mint", description: "Very heavy on the paradise taste with our very own Island mint🏝️", price: 200, flavours: ["Mint", "Cool"], image: islandint, emoji: "🌴", stock: 100 },
  { id: "koh-drops", name: "Koh-Drops", description: "Enjoy the combination of mint and eucalyptus with our very own Koh-drops🤞🏾", price: 200, flavours: ["Menthol", "Eucalyptus"], image: kohdrops, emoji: "🌿", stock: 100 },
  { id: "butter-scotch", name: "Butter Scotch Hard Candy", description: "Chokolataaa with a little caramel and butter taste yummy butterscotch 😝", price: 200, flavours: ["Butterscotch", "Caramel"], image: butter, emoji: "🧈", bestSeller: true, stock: 100 },
  { id: "milk-candy", name: "Milk Candy (Maziwa)", description: "Where are my milk lovers? We bring you our milk candy🫦", price: 200, flavours: ["Milky", "Creamy"], image: milkycandy, emoji: "🥛", stock: 100 },
  { id: "fruity-four", name: "Fruity Four", description: "Ever heard of banana sweet? well this fruity four has got you with 4 fruit flavors; watermelon ,banana,Mango,passion", price: 200, flavours: ["Fruity", "watermelon", "banana", "Mango", "passion"], image: four, emoji: "🍹", bestSeller: true, stock: 100 },
  { id: "fruit-medley", name: "Fruit Medley", description: "Our sweet tooth people we got you with our very own assorted fruit medley ☺️", price: 200, flavours: ["Fruity", "Mixed"], image: fruit, emoji: "🍎", stock: 100 },
  { id: "mambo-soda", name: "Mambo Soda", description: "Three refreshing soda flavours: Cola, Mojito and Orange Soda.", price: 200, flavours: ["Cola", "Mojito", "Orange", "Soda"], image: mambosoda, emoji: "🥤", bestSeller: true, stock: 100 },
  { id: "iced-lemon-tea", name: "Iced Lemon Tea", description: "Refreshingly sweet iced lemon tea flavour.", price: 200, flavours: ["Lemon", "Tea"], image: lemontea, emoji: "🍋", stock: 100 },
  { id: "lemon-twist", name: "Lemon Twist (Limao)", description: "A zesty, powder-filled lemon explosion.", price: 200, flavours: ["Lemon", "Tangy", "Powder-filled"], image: lemmontwist, emoji: "🍋", stock: 100 },
  { id: "kaccha-aam", name: "Kaccha Aam (Embe Mbichi)", description: "Powder-filled raw mango candy with a sweet, tangy feel.", price: 200, flavours: ["Mango", "Tangy", "Powder-filled"], image: kaachaaam, emoji: "🥭", stock: 100 },
  { id: "spicy-guava", name: "Spicy Guava (Pilipili Pera)", description: "A spicy and sweet explosion with a powder-filled centre.", price: 200, flavours: ["Guava", "Spicy", "Powder-filled"], image: spicyguava, emoji: "🍈", stock: 100 },
  { id: "spicy-tamarind", name: "Spicy Tamarind (Ukwaju)", description: "Tangy tamarind with a spicy kick and a liquid-filled centre.", price: 200, flavours: ["Tamarind", "Spicy", "Tangy", "Liquid-filled"], image: spicytamarind, emoji: "🌶️", stock: 100 },
  { id: "pili-pili", name: "Pili Pili", description: "Spicy and sweet chilli candy for those who like it hot.", price: 200, flavours: ["Chilli", "Spicy"], image: pilipip, emoji: "🌶️", stock: 100 },
]

export const flavours = [
  { name: "Cool Mint", text: "Fresh peppermint & dark cocoa", image: sweetmint, bg: "var(--mint)" },
  { name: "Sunny Peach", text: "Juicy, sweet & sugar-dusted", image: sweetmint, bg: "var(--peach)" },
  { name: "Salted Caramel", text: "Buttery, slow-cooked richness", image: sweetmint, bg: "var(--cream-dark)" },
  { name: "Mango Chili", text: "Tropical sweetness with a kick", image: sweetmint, bg: "var(--peach)" },
];

export const testimonials = [
  { name: "Wanjiku", text: "The best truffles in Nairobi — my kids fight over the last one!" },
  { name: "Brian O.", text: "Fudge is rich, soft and perfectly salty. Ordering again." },
  { name: "Aisha", text: "Super juicy peach rings, lovely packaging too." },
];

export const formatKsh = (n: number) => `KSh ${n.toLocaleString("en-KE")}`;