import { connectDB } from "@/lib/mongodb";
import Lawyer from "@/models/lawyer";
import { unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

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

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { image, name, surname, description } = await request.json();

    const newLawyer = new Lawyer({
      image: image,
      name: name,
      surname: surname,
      description: description,
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

export async function PUT(request: NextRequest) {
  try {
    await connectDB();
    const { id, image, name, surname, description } = await request.json();


    const updateLawyer = await Lawyer.findByIdAndUpdate(id, {
      image,
      name,
      surname,
      description,
    });

    if (!updateLawyer) {
      return NextResponse.json({ error: "Partner not found" }, { status: 404 });
    }

    return NextResponse.json(updateLawyer, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update partner" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await connectDB();
    const { id } = await request.json();

    const deletedLawyer = await Lawyer.findByIdAndDelete(id);

    if (!deletedLawyer) {
      return NextResponse.json({ error: "Lawyer not found" }, { status: 404 });
    }

    if (deletedLawyer.image) {
      const imagePath = path.join(process.cwd(), "public", deletedLawyer.image);
      try {
        await unlink(imagePath);
        console.log("Image file deleted:", imagePath);
      } catch (fileError) {
        console.error("Failed to delete image file:", fileError);
      }
    }

    return NextResponse.json(
      { message: "Lawyer deleted successfully", deletedLawyer },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete Lawyer" },
      { status: 500 }
    );
  }
}
