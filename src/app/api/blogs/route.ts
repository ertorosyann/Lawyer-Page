import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { image, description } = await request.json();
    console.log(image, description);

    const newBlog = new Blog({
      image: image,
      description: description,
    });

    await newBlog.save();
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
