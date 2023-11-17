import React, { ReactNode } from "react";
import { DM_Sans } from "next/font/google";

import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const dm = DM_Sans({ subsets: ["latin"] });

const MainLayout = (props: Props) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 gap-y-16 ${dm.className}`}
    >
      <Header />
      {props.children}
      <Footer />
    </main>
  );
};

export default MainLayout;
