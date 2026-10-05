import sweetmint from "../assets/sweetmint.png";
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

export const products: Product[] = [
  {
    id: "1", slug: "mint-chocolate-truffles", name: " Pranav SWEET MINT",
    description: "A cool and refreshing feeling found only in our sweet Mint.", flavour: "Tamu Mint",
    category: "Truffles", price: 60, image: hero, bg: "var(--mint)", badge: "Best seller",
  },
  {
    id: "2", slug: "salted-caramel-fudge", name: "Pranav Spicy Tamarind(Ukwa ju)",
    description: "Spicy tamarind(Ukwa ju) has the taste y'all want.", flavour: "Tamarind",
    category: "Fudge", price: 90, image: hero, bg: "var(--peach)", badge: "Fan favourite",
  },
  {
    id: "3", slug: "peach-gummy-rings", name: " Pranav Kaccha Aam",
    description: "Have you tried this Kaccha Aam(embe mbichi)", flavour: "Kaacha Aam",
    category: "Gummies", price: 90, image: hero, bg: "var(--peach)",
  },
  {
    id: "4", slug: "coconut-cocoa-bonbons", name: "Coconut Cocoa Bonbons",
    description: "Toasted coconut in milk chocolate.", flavour: "Coconut Chocolate",
    category: "Bonbons", price: 600, image: hero, bg: "var(--mint)", badge: "New",
  },
];

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