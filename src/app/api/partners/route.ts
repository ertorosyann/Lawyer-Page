import { connectDB } from "@/lib/mongodb";
import Partner from "@/models/partner";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const partners = await Partner.find();
    console.log(partners);

    return NextResponse.json(partners, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch partners" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { image, description } = await request.json();

    const newPartner = new Partner({
      image: image,
      description: description,
    });

    await newPartner.save();
    return NextResponse.json(newPartner, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch lawyers" },
      { status: 500 }
    );
  }
}
