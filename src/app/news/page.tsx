import {
  arrowRight,
  clock,
  // partner1_bg,
  // partner2_bg,
  // partner3_bg,
  // partner4_bg,
  // partner5_bg,
  // partner6_bg,
} from "@/app/assets/svg";
import { Area } from "@/custom/Area";
import { Button } from "@/custom/Button";
import { moscowNews } from "@/lib/moscowNews";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  return (
    <>
      <section className="bg-news-gradient ">
        <div className="max-w-[1024px] mx-auto pb-25">
          <div className="grid justify-center  gap-2 ">
            <div className="text-center px-20">
              <h1 className="font-[700] text-[42px] text-muted-light">
                Legal Insights and Industry News
              </h1>
              <p className="font-[500] text-[24px] text-muted">
                Stay up to date with the latest developments in law, legal
                precedents, and industry news. Our team at Tatoyan regularly
                shares insights and articles on relevant topics to keep our
                clients informed about key changes in legal landscapes.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-[24px] font-[500] text-[#6A49A2]">
                Recent News
              </h3>
              <div className="grid lg:grid-cols-2 gap-15">
                <Area variant="lower__shadow" className="grid gap-4">
                  <Image src="/news.png" alt="GIF" width={489} height={269} />
                  <div className="grid justify-between gap-15">
                    <div className="grid gap-6">
                      <h3 className="font-[600] text-[20px] text-muted-light">
                        Exciting News: Facundo Banchero to Join LFN Secondment
                        Program in Colombia
                      </h3>
                      <p className="text-[#D0D0D099] text-[20px] font-[600] leading-[120%]">
                        Lorem ipsum dolor sit amet consectetur. Sit dictum amet
                        bibendum mauris. Iaculis eget diam scelerisque tortor
                        elit sed eu tristique amet. Leo etiam consectetur mauris
                        urna scelerisque lectus dui. Eu at et id euismod neque
                        quam erat.
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        {clock}
                        <p className="font-[500] text-[16px] leading-[100%] text-[#717173]">
                          February 24, 2025
                        </p>
                      </div>
                      <div className="text-[#717173]">{arrowRight}</div>
                    </div>
                  </div>
                </Area>
                <div className="grid gap-15">
                  <Area variant="lower__shadow" className="flex gap-4">
                    <Image src="/news.png" alt="GIF" width={237} height={236} />
                    <div className="flex flex-col justify-between w-1/2">
                      <p className="text-[#D0D0D099] text-[20px] font-[600] leading-[120%]">
                        Exciting News: Facundo Banchero to Join LFN Secondment
                        Program in Colombia
                      </p>
                      <div className="flex justify-between">
                        {clock}
                        <p className="font-[500] text-[16px] leading-[100%] text-[#717173]">
                          February 24, 2025
                        </p>
                        <div className="text-[#717173]">{arrowRight}</div>
                      </div>
                    </div>
                  </Area>
                  <Area variant="lower__shadow" className="flex gap-4">
                    <Image src="/news.png" alt="GIF" width={237} height={236} />
                    <div className="flex flex-col justify-between w-1/2">
                      <p className="text-[#D0D0D099] text-[20px] font-[600] leading-[120%]">
                        Exciting News: Facundo Banchero to Join LFN Secondment
                        Program in Colombia
                      </p>
                      <div className="flex justify-between">
                        {clock}
                        <p className="font-[500] text-[16px] leading-[100%] text-[#717173]">
                          February 24, 2025
                        </p>
                        <div className="text-[#717173]">{arrowRight}</div>
                      </div>
                    </div>
                  </Area>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto">
        <div className="flex justify-center">
          <Image
            src="/main.gif"
            alt="GIF"
            width={650}
            height={580}
            className="rotate-[-133.81deg]"
          />
        </div>
      </section>

      <section className="max-w-[1024px] mx-auto">
        <div className="grid gap-15">
          <h3 className="text-[24px] font-[500] text-[#6A49A2]">All Posts</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-15">
            {moscowNews.map((news, i) => (
              <Area key={i} variant="lower__shadow" className="grid gap-4">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={301}
                  height={258}
                />
                <div className="grid justify-between gap-10">
                  <div className="grid gap-2">
                    <h3 className="font-[600] text-[20px] text-muted-light">
                      {news.title}
                    </h3>
                    <p className="text-[#D0D0D099] text-[20px] font-[600] leading-[120%]">
                      {news.subtitle}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      {clock}
                      <p className="font-[500] text-[16px] leading-[100%] text-[#717173]">
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
          <div className="grid justify-center">
            <Button className="font-600 text-[20px] text-muted-light leading-[100%] px-6 py-3">
              Upload More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
