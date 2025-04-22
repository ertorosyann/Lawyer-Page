import { Blogs, Lawyer, Partner } from "@/types/items";
import axios from "axios";

export const fetchLawyers = async (): Promise<Lawyer[] | undefined> => {
  try {
    const response = await axios.get("/api/lawyers");
    return response.data;
  } catch (error) {
    console.error("Error fetching lawyers:", error);
  }
};

export const fetchPartners = async (): Promise<Partner[] | undefined> => {
  try {
    const response = await axios.get("/api/partners");
    return response.data;
  } catch (error) {
    console.error("Error fetching lawyers:", error);
  }
};

export const fetchBlogs = async (): Promise<Blogs[] | undefined> => {
  try {
    const response = await axios.get("/api/blogs");
    return response.data;
  } catch (error) {
    console.error("Error fetching lawyers:", error);
  }
};
