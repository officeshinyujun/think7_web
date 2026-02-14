import Image from "next/image";
import styles from "./page.module.css";
import { VStack } from "@/components/general/VStack";
import Typo from "@/components/general/Typo";

export default function Home() {
  return (
    <VStack fullWidth>
      <Typo.XS>XS</Typo.XS>
    </VStack>    
  );
}
