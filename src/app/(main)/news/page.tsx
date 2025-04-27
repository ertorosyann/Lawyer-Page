"use client";
import { arrowRight, clock } from "@/app/assets/svg";
import { Area } from "@/custom/Area";
import { Button } from "@/custom/Button";
import { fetchBlogs } from "@/lib/actions";
import { Blogs } from "@/types/items";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function News() {
  const [news, setNews] = useState<Blogs[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    (async () => {
      const fetchedNews = await fetchBlogs();

      const sortedNews = fetchedNews.slice().sort((a, b) => {
        return (
          new Date(b.createTime).getTime() - new Date(a.createTime).getTime()
        );
      });

      setNews(sortedNews);
    })();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <section className="bg-news-gradient mobile:w-full">
        <div className="max-w-[1024px] mx-auto pb-25">
          <div className="grid justify-center  gap-2 ">
            <div className="text-center px-20 mobile:px-10">
              <h1 className="font-[700] text-[42px] text-muted-light mobile:text-[20px]">
                Legal Insights and Industry News
              </h1>
              <p className="font-[500] text-[24px] text-muted mobile:text-[16px]">
                Stay up to date with the latest developments in law, legal
                precedents, and industry news. Our team at Tatoyan regularly
                shares insights and articles on relevant topics to keep our
                clients informed about key changes in legal landscapes.
              </p>
            </div>

            <div className="grid gap-2 mobile:m-5">
              <h3 className="text-[24px] font-[500] text-[#6A49A2]">
                Recent News
              </h3>
              <div className="grid lg:grid-cols-2 gap-15 mobile:grid-cols-1">
                {news[0] && (
                  <Area variant="lower__shadow" className="grid gap-4">
                    <Image
                      src={news[0]?.image || "/uploads/news1.png"}
                      alt="GIF"
                      width={489}
                      height={269}
                    />
                    <div className="grid gap-15">
                      <div className="grid gap-6">
                        <h3 className="font-[600] text-[20px] text-muted-light">
                          {news[0]?.title}
                        </h3>
                        <p className="text-muted-light text-[20px] font-[600] leading-[120%]">
                          {news[0]?.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                          {clock}
                          <p className="font-[200] text-[16px] leading-[100%] text-muted">
                            {news[0]?.createTime
                              ? format(
                                  new Date(news[0].createTime),
                                  "MMMM d, yyyy"
                                )
                              : null}
                          </p>
                        </div>
                        <Link href={`/news/${news[0]._id}`}>
                          <div className="text-muted cursor-pointer">
                            {arrowRight}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Area>
                )}
                <div className="grid gap-15">
                  {news[1] && (
                    <Area
                      variant="lower__shadow"
                      className="flex gap-4 mobile:grid mobile:gap-4"
                    >
                      <Image
                        src={news[1]?.image || "/uploads/news2.png"}
                        alt="GIF"
                        width={237}
                        height={236}
                        className="mobile:w-full"
                      />
                      <div className="grid md:justify-between w-1/2 mobile:w-full mobile:gap-4">
                        <p className="text-muted-light text-[20px] font-[600] leading-[120%]">
                          {news[1]?.description}
                        </p>
                        <div className="flex justify-between mobile:px-0 mobile:py-0">
                          {clock}
                          <p className="font-[500] text-[16px] leading-[100%] text-muted">
                            {news[1]?.createTime
                              ? format(
                                  new Date(news[1].createTime),
                                  "MMMM d, yyyy"
                                )
                              : null}
                          </p>
                          <Link href={`/news/${news[1]._id}`}>
                            <div className="text-muted cursor-pointer">
                              {arrowRight}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Area>
                  )}
                  {news[2] && (
                    <Area
                      variant="lower__shadow"
                      className="flex gap-4 mobile:grid mobile:gap-4"
                    >
                      <Image
                        src={news[2]?.image || "/uploads/news3.png"}
                        alt="GIF"
                        width={237}
                        height={236}
                        className="mobile:w-full"
                      />
                      <div className="grid md:justify-between w-1/2 mobile:w-full mobile:gap-4">
                        <p className="text-muted-light text-[20px] font-[600] leading-[120%]">
                          {news[1]?.description}
                        </p>
                        <div className="flex justify-between mobile:px-0 mobile:py-0">
                          {clock}
                          <p className="font-[500] text-[16px] leading-[100%] text-muted">
                            {news[2]?.createTime
                              ? format(
                                  new Date(news[2].createTime),
                                  "MMMM d, yyyy"
                                )
                              : null}
                          </p>
                          <Link href={`/news/${news[2]._id}`}>
                            <div className="text-muted cursor-pointer">
                              {arrowRight}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Area>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mobile:hidden">
        <div className="flex justify-center">
          <Image
            src="/main.gif"
            unoptimized
            alt="GIF"
            width={650}
            height={580}
            className="rotate-[-133.81deg]"
          />
        </div>
      </section>

      <section className="max-w-[1024px] mx-auto mobile:w-full">
        <div className="grid gap-15 mobile:m-5">
          <h3 className="text-[24px] font-[500] text-[#6A49A2]">All Posts</h3>
          <div className="grid lg:grid-cols-3 gap-15 mobile:grid-cols-1">
            {news.slice(3, 3 + visibleCount).map((newss) => (
              <Area
                key={newss._id}
                variant="lower__shadow"
                className="grid gap-4"
              >
                <Image
                  src={newss.image}
                  alt={`Image ${newss._id} is not find `}
                  width={301}
                  height={258}
                />
                <div className="grid  gap-10">
                  <div className="grid gap-2">
                    <h3 className="font-[600] text-[20px] text-muted-light">
                      {newss.title}
                    </h3>
                    <p className="text-muted-light text-[20px] font-[600] leading-[120%]">
                      {newss.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center ">
                    <div className="flex  gap-3  items-center">
                      {clock}
                      <p className="font-[500] text-[16px] leading-[100%] text-muted">
                        {newss?.createTime
                          ? format(new Date(newss.createTime), "MMMM d, yyyy")
                          : null}
                      </p>
                    </div>
                    <Link href={`/news/${newss._id}`}>
                      <div className="text-muted cursor-pointer">
                        {arrowRight}
                      </div>
                    </Link>
                  </div>
                </div>
              </Area>
            ))}
          </div>
          {visibleCount < news.length - 3 && (
            <div className="grid justify-center">
              <Button
                onClick={handleLoadMore}
                className="font-600 text-[20px] text-muted-light leading-[100%] px-6 py-3"
              >
                Upload More
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
