import { connectDB } from "@/lib/mongodb";
import Lawyer from "@/models/lawyer";
import { NextRequest, NextResponse } from "next/server";

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

export async function PUT(request: NextRequest) {
  try {
    await connectDB();
    const { id, image, name, surname } = await request.json();

    console.log("id = ", id);

    const updateLawyer = await Lawyer.findByIdAndUpdate(id, {
      image,
      name,
      surname,
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
