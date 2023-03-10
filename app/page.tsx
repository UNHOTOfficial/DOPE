import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/Slider";
import ScrollMenu from "@/components/ScrollMenu";
import ProductCard from "@/components/ProductCard";
import NewsCard from "@/components/NewsCard";
import fetcher from "@/services/fetch";
import CategoryItem from "@/components/CategoryItem";

export default async function Home() {
  const productsData = fetcher(`/api/products`, "static");
  const newsResData = fetcher(`/api/news`, "static");
  const categoriesData = fetcher("/api/categories", "static");

  const [products, newsRes, categories] = await Promise.all([
    productsData,
    newsResData,
    categoriesData,
  ]);

  return (
    <main className={styles.main}>
      <div>
        <Slider />
        <ScrollMenu title="Fresh Styles">
          {products.data.map((product: any) => (
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
          {categories.data.map((category: any) => (
            <CategoryItem
              key={category.title}
              image={category.image}
              title={category.title}
            />
          ))}
        </ScrollMenu>
        <ScrollMenu title="Best Sellers">
          {products.data.map((product: any) =>
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
          {newsRes.data.map((news: any) => (
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
