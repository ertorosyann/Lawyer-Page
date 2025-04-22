import { Blogs, Lawyer, Partner } from "@/types/items";
import axios from "axios";

export const fetchLawyers = async (): Promise<Lawyer[]> => {
  try {
    const response = await axios.get("/api/lawyers");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching lawyers:");
  }
};

export const fetchPartners = async (): Promise<Partner[]> => {
  try {
    const response = await axios.get("/api/partners");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Partners:");
  }
};

export const fetchBlogs = async (): Promise<Blogs[]> => {
  try {
    const response = await axios.get("/api/blogs");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Blogs:");
  }
};
