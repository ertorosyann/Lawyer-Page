'use client'
import { useParams } from "next/navigation";

export default function NewsDetail() {
  const params = useParams();
  const slug = params.slug;

  return (
    <div>
      <h1>News detail for: {slug}</h1>
    </div>
  );
}
