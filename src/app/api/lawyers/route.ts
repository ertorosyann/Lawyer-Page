import { connectDB } from "@/lib/mongodb";
import Lawyer from "@/models/lawyer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { image, name, surname } = await request.json();

    const newLawyer = new Lawyer({
      image: image,
      name: name,
      surname: surname,
    });

    await newLawyer.save();
    return NextResponse.json(newLawyer, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch lawyers" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const lawyers = await Lawyer.find();
    return NextResponse.json(lawyers, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch lawyers" },
      { status: 500 }
    );
  }
}
