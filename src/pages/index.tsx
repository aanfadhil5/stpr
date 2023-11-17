import { DM_Sans } from "next/font/google";
import MainLayout from "@/components/layout/Main";
import Hero from "@/components/hero/Hero";
import LayoutCard from "@/components/hero/LayoutCard";

const dm = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <LayoutCard />
    </MainLayout>
  );
}
