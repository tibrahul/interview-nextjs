import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import { HomeBottomContent, HomeContent } from "@/mock/mock";
import HomeCard from "@/components/HomeCard";
import { AppImage } from "@/assets/images";
import AdBanner from "@/components/AdBanner";
import AboutUs from "@/components/AboutUs";
import Accordion from "@/components/Accordion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <section className="mx-auto px-5 pt-5">
          <article className="container mx-auto lg:max-w-6xl lg:pt-10 sm:pt-0">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl lg:text-[7.5rem] dark:text-white">
              LOREM IPSUM
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-12">
              {HomeContent.map((content) => <div key={content.id}>
                <HomeCard content={content} />
              </div>)}
            </div>
          </article>
          <article className="container mx-auto lg:max-w-6xl lg:pt-10 sm:pt-0 lg:mt-24 py-10 mb-[10rem] lg:block md:hidden sm:hidden max-sm:hidden relative backgroundContainer cursor-pointer" id="about">
            <AboutUs />
          </article>
        </section>
        <section>
          <AdBanner />
        </section>
        <section className="mx-auto px-5 pt-5">
          <article className="container mx-auto lg:max-w-6xl lg:pt-10 sm:pt-0">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl lg:text-[7.5rem] dark:text-white">
              LOREM IPSUM
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-12">
              {HomeBottomContent.map((content) => <div key={content.id}>
                <HomeCard content={content} />
              </div>)}
            </div>
          </article>
          <article className="container mx-auto pt-20 lg:px-4 lg:max-w-6xl lg:mt-[15rem] md:mt-[5rem]">
            <h1 className="text-4xl max-sm:mb-16 font-extrabold tracking-wider leading-none md:text-[120px] lg:text-[5.9rem] text-white uppercase">
              lorem ipsum dolor
            </h1>
          </article>
        </section>
        <section className="lg:mt-[4rem] lg:pb-[17rem]">
          <Accordion />
        </section>
      </main>
    </div >
  );
}
