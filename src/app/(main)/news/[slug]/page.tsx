"use client";
import { arrowRight, clock } from "@/app/assets/svg";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchBlogs } from "@/lib/actions";
import { Button } from "@/custom/Button";
import { Blogs } from "@/types/items";
import { useLocale } from "next-intl";
import { Area } from "@/custom/Area";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function NewsSlugPage() {
  const [news, setNews] = useState<Blogs[]>([]);
  const locale = useLocale();

  useEffect(() => {
    (async () => {
      setNews(await fetchBlogs());
    })();
  }, []);

  const { slug } = useParams();

  const post = news.find((item: Blogs) => item._id == slug);

  if (!post) {
    return <div className="text-center p-8">News post not found.</div>;
  }

  return (
    <section className="max-w-[1024px] mx-auto mobile:w-full">
      <div className="pb-10">
        <Link href={"/news"}>
          <Button className="text-xl p-4 rounded-[16px] hover:bg-[#717173] hover:text-black">
            Back to News
          </Button>
        </Link>
      </div>
      <div className=" flex gap-10 mobile:grid mobile:m-5">
        <Area
          variant="lower__shadow"
          className="grid gap-4 p-10 w-[75%] mobile:w-full mobile:mx-auto"
        >
          <Image
            src={post.image}
            alt={`Image ${post._id} not found`}
            width={852}
            height={350}
            className="object-cover"
          />
          <div className="grid gap-6">
            <h1 className="text-3xl font-bold text-muted-light ">
              {post[`title_${locale}` as keyof Blogs]}
            </h1>
            <p className="text-xl leading-[100%] font-semibold text-muted ">
              {post[`description_${locale}` as keyof Blogs]}
            </p>
          </div>
        </Area>

        <div className="grid gap-4 w-[25%]  mobile:w-full mobile:mx-auto ">
          <h3 className="text-xl text-[#6A49A2] font-medium">Recent Posts</h3>
          <div className="overflow-y-auto max-h-[600px]">
            {/* add scrolling */}
            <div className="grid gap-10 p-2 ">
              {news
                .filter((news) => news._id !== slug)
                .map((news) => (
                  <Area
                    key={news._id}
                    variant="lower__shadow"
                    className="grid p-3"
                  >
                    <Image
                      src={news.image}
                      alt={`Image ${news._id} not found`}
                      width={80}
                      height={80}
                      className="w-full object-cover"
                    />
                    <div className="grid justify-between items-center gap-10">
                      <div className="grid gap-2">
                        <h3 className="font-semibold text-base text-muted-light ">
                          {news[`title_${locale}` as keyof Blogs]}
                        </h3>
                        <p className="text-sm text-muted">
                          {news[`description_${locale}` as keyof Blogs]}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                          {clock}
                          <p className="font-medium text-[10px] leading-[100%] text-muted">
                            {news?.createTime
                              ? format(
                                  new Date(news.createTime),
                                  "MMMM d, yyyy"
                                )
                              : null}
                          </p>
                        </div>
                        <Link href={`/news/${news._id}`}>
                          <div className="text-muted cursor-pointer">
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
      </div>
    </section>
  );
}
