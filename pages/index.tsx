import { useState } from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <div className={isDark ? "dark" : ""}>
      <div className="dark:bg-darkTheme ">
        <Header {...{ setIsDark, isDark }} />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
