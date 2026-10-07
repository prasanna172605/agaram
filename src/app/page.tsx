import Navbar from "./sections/navbar";
import Navbar2 from "./sections/navbar2";
import HeroSection from "./sections/hero-section";
import ProductGridSection from "./sections/product-grid-section";
import ProductGridSection2 from "./sections/product-grid-section2";
import ProductGridSection3 from "./sections/product-grid-section3";
import HaveQuestionSection from "./sections/have-question-section";
import Footer from "./sections/footer";
import Icon from "./svgs/svg-icon";

export default function Page() {
  return (
    <>
      <Icon cid={"n1"} />
      <Navbar />
      <Navbar2 />
      <div className="block grow" data-cid="n50">
        <main className="block" data-cid="n51">
          <HeroSection />
          <ProductGridSection />
          <ProductGridSection2 />
          <ProductGridSection3 />
          <HaveQuestionSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
