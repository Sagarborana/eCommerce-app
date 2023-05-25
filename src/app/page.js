import Image from "next/image";
import HomePage from "./home/page";
import { CartProvider } from "./components/CartContext";

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
