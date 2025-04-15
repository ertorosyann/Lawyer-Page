"use client";
import { moscowNews, News } from "@/lib/moscowNews";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { Area } from "@/custom/Area";
import Link from "next/link";
import { arrowRight, clock } from "@/app/assets/svg";

export default function NewsSlugPage() {
  const params = useParams();
  const slug = params?.slug;

  const post = moscowNews.find((item: News) => item.slug == slug);

  if (!post) {
    return notFound();
  }

  return (
    <section className="max-w-[1024px] mx-auto ">
      <div className=" flex gap-15">
        <Area variant="lower__shadow" className="grid gap-4 w-[75%]">
          <Image src={post.image} alt={post.title} width={852} height={350} />
          <div className="grid gap-6">
            <h1 className="text-[28px] font-bold text-muted-light ">
              {post.title}
            </h1>
            <p className="text-[20px] leading-[100%] font-[600] text-muted ">
              Lorem ipsum dolor sit amet consectetur. Sit dictum amet bibendum
              mauris. Iaculis eget diam scelerisque tortor elit sed eu tristique
              amet. Leo etiam consectetur mauris urna scelerisque lectus dui. Eu
              at et id euismod neque quam erat. Lorem ipsum dolor sit amet
              consectetur. Sit dictum amet bibendum mauris. Iaculis eget diam
              scelerisque tortor elit sed eu tristique amet. Leo etiam
              consectetur mauris urna scelerisque lectus dui. Eu at et id
              euismod neque quam erat. Lorem ipsum dolor sit amet consectetur.
              Sit dictum amet bibendum mauris. Iaculis eget diam scelerisque
              tortor elit sed eu tristique amet. Leo etiam consectetur mauris
              urna scelerisque lectus dui. Eu at et id euismod neque quam erat.
              Lorem ipsum dolor sit amet consectetur. Sit dictum amet bibendum
              mauris. Iaculis eget diam scelerisque tortor elit sed eu tristique
              amet. Leo etiam consectetur mauris urna scelerisque lectus dui. Eu
              at et id euismod neque quam erat. Lorem ipsum dolor sit amet
              consectetur. Sit dictum amet bibendum mauris. Iaculis eget diam
              scelerisque tortor elit sed eu tristique amet. Leo etiam
              consectetur mauris urna scelerisque lectus dui. Eu at et id
              euismod neque quam erat. Lorem ipsum dolor sit amet consectetur.
              Sit dictum amet bibendum mauris. Iaculis eget diam scelerisque
              tortor elit sed eu tristique amet. Leo etiam consectetur mauris
              urna scelerisque lectus dui. Eu at et id euismod neque quam erat.
              Lorem ipsum dolor sit amet consectetur. Sit dictum amet bibendum
              mauris. Iaculis eget diam scelerisque tortor elit sed eu tristique
              amet. Leo etiam consectetur mauris urna scelerisque lectus dui. Eu
              at et id euismod neque quam erat.
            </p>
          </div>
        </Area>

        <div className="flex flex-col gap-4 w-[25%]">
          <h3 className="text-[20px] text-[#6A49A2] font-[500]">
            Recent Posts
          </h3>
          <div className="grid gap-10">
            {moscowNews
              // .filter((news) => news.slug !== slug)
              .slice(0, 7)
              .map((news) => (
                <Area
                  key={+Date.now() + Math.random()}
                  variant="lower__shadow"
                  className="flex text-center justify-between"
                >
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={80}
                    height={80}
                    className="w-1/3"
                  />
                  <div className="grid justify-between items-center gap-10">
                    <div className="grid gap-2">
                      <h3 className="font-[600] text-[16px] text-muted-light ">
                        {news.title}
                      </h3>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        {clock}
                        <p className="font-[500] text-[10px] leading-[100%] text-[#717173]">
                          {news.date}
                        </p>
                      </div>
                      <Link href={`/news/${news.slug}`}>
                        <div className="text-[#717173] cursor-pointer">
                          {arrowRight}
                        </div>
                      </Link>
                    </div>
                  </div>
                </Area>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
