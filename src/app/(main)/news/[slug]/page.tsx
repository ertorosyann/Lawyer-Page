"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Area } from "@/custom/Area";
import Link from "next/link";
import { arrowRight, clock } from "@/app/assets/svg";
import { useEffect, useState } from "react";
import { Blogs } from "@/types/items";
import { fetchBlogs } from "@/lib/actions";
import { format } from "date-fns";
import { Button } from "@/custom/Button";

export default function NewsSlugPage() {
  const [news, setNews] = useState<Blogs[]>([]);

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
          <Button className="text-[20px] p-4 rounded-[16px] hover:bg-[#717173] hover:text-black">
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
            <h1 className="text-[28px] font-bold text-muted-light ">
              {post.title}
            </h1>
            <p className="text-[20px] leading-[100%] font-[600] text-muted ">
              {post.description}
            </p>
          </div>
        </Area>

        <div className="grid gap-4 w-[25%]  mobile:w-full mobile:mx-auto ">
          <h3 className="text-[20px] text-[#6A49A2] font-[500]">
            Recent Posts
          </h3>
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
                        <h3 className="font-[600] text-[16px] text-muted-light ">
                          {news.title}
                        </h3>
                        <p className="text-[14px] text-muted">
                          {" "}
                          {news.description}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                          {clock}
                          <p className="font-[500] text-[10px] leading-[100%] text-muted">
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
