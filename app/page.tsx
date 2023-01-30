import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Slider from "@/components/Slider";
import ScrollMenu from "@/components/ScrollMenu";
import ProductCard from "@/components/ProductCard";
import CategoriesItems from "@/components/CategoriesItems";
import NewsCard from "@/components/NewsCard";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const productsData = await fetch("https://dope-red.vercel.app/api/products");
  const productsRes = await productsData.json();

  const newsData = await fetch("https://dope-red.vercel.app/api/news");
  const newsRes = await newsData.json();

  return (
    <main className={styles.main}>
      <div>
        <Slider />
        <ScrollMenu title="Fresh Styles">
          {productsRes.map((product: any) => (
            <ProductCard
              key={product.title}
              photo={product.photo}
              title={product.title}
              price={product.price}
              rate={product.rate}
              count={product.count}
            />
          ))}
        </ScrollMenu>
        <ScrollMenu title="Shop By Category">
          <CategoriesItems />
        </ScrollMenu>
        <ScrollMenu title="Best Sellers">
          {productsRes.map((product: any) =>
            product.isBestSelling ? (
              <ProductCard
                key={product.title}
                photo={product.photo}
                title={product.title}
                price={product.price}
                rate={product.rate}
                count={product.count}
              />
            ) : null
          )}
        </ScrollMenu>
        <ScrollMenu title="DOPE News!">
          {newsRes.map((news: any) => (
            <NewsCard
              key={news.title}
              photo={news.photo}
              title={news.title}
              author={news.author}
              authorPhoto={news.authorPhoto}
              overview={news.overview}
              readingTime={news.readingTime}
            />
          ))}
        </ScrollMenu>
      </div>
    </main>
  );
}
