import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/Slider";
import ScrollMenu from "@/components/ScrollMenu";
import ProductCard from "@/components/ProductCard";
import CategoriesItems from "@/components/CategoriesItems";
import NewsCard from "@/components/NewsCard";
import fetcher from "@/services/fetch";

export default async function Home() {
  const products = await fetcher(`/api/products`);
  const newsRes = await fetcher(`/api/news`);

  return (
    <main className={styles.main}>
      <div>
        <Slider />
        <ScrollMenu title="Fresh Styles">
          {products.map((product: any) => (
            <ProductCard
              id={product?.id}
              key={product.id}
              photo={product.photo}
              title={product.title}
              price={product.price}
              rate={product.rate}
              count={product.count}
              colors={product.colors}
            />
          ))}
        </ScrollMenu>
        <ScrollMenu title="Shop By Category">
          <CategoriesItems />
        </ScrollMenu>
        <ScrollMenu title="Best Sellers">
          {products.map((product: any) =>
            product.isBestSelling ? (
              <ProductCard
                id={product.id}
                key={product.id}
                photo={product.photo}
                title={product.title}
                price={product.price}
                rate={product.rate}
                count={product.count}
                colors={product.colors}
              />
            ) : null
          )}
        </ScrollMenu>
        <ScrollMenu title="DOPE News!">
          {newsRes.map((news: any) => (
            <NewsCard
              key={news.id}
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
