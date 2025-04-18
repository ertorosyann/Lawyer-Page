import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Admin from "@/models/admin";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });

    await newAdmin.save();
    return NextResponse.json({ message: "Admin created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create admin" },
      { status: 500 }
    );
  }
}
