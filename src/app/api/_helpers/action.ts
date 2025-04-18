"use server";

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/admin";
import bcrypt from "bcryptjs";

export const handleLogin = async (message: string, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email.trim() || !password.trim()) {
    return "Please fill your email or password";
  }
  try {
    await connectDB();
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return "Admin not found";
    }

    const correctPassword = await bcrypt.compare(password, admin.password);
    if (!correctPassword) {
      return "Incorrect password";
    }

    return "success";
  } catch (error) {
    return "Login failed. Please try again.";
  }
};
