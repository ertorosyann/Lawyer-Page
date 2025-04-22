"use client";
import axios from "axios";
import { Button } from "./Button";

type ModalForDeleteProps = {
  isOpen: boolean;
  onClose: () => void;
  addType: string;
  image: File | null;
  formData: { [key: string]: string };
  fetchAndUpdate: () => Promise<void>;
};

export default function ModalForDelete({
  isOpen,
  onClose,
  addType,
  image,
  formData,
  fetchAndUpdate,
}: ModalForDeleteProps) {
  if (!isOpen) return null;

  const uploadImage = async (image: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await axios.post("/api/uploadImage", formData);
      return res.data.url;
    } catch (error) {
      console.error("Image upload failed", error);
      return null;
    }
  };

  const addLawyer = async () => {
    let imageUrl: string | null = null;
    if (image) {
      imageUrl = await uploadImage(image);
    }
    try {
      await axios.post("/api/lawyers", {
        image: imageUrl,
        name: formData.name,
        surname: formData.surname,
      });
      await fetchAndUpdate();
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  };

  const addPartner = async () => {
    let imageUrl: string | null = null;

    if (image) {
      imageUrl = await uploadImage(image);
    }
    try {
      await axios.post("/api/partners", {
        image: imageUrl,
        description: formData.description,
        title: formData.title,
      });
      await fetchAndUpdate();
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  };

  const addBlog = async () => {
    let imageUrl: string | null = null;
    if (image) {
      imageUrl = await uploadImage(image);
    }
    try {
      await axios.post("/api/blogs", {
        image: imageUrl,
        description: formData.description,
      });
      await fetchAndUpdate();
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  };

  const editPartner = async () => {
    let imageUrl: string | null = null;
    if (image) {
      imageUrl = await uploadImage(image);
    }
    try {
      await axios.put("/api/partners", {
        id: formData.id,
        image: imageUrl,
        description: formData.description,
        title: formData.title,
      });
      await fetchAndUpdate();
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  };

  const editLawyer = async () => {
    let imageUrl: string | null = null;
    console.log({
      id: formData.id,
      image: imageUrl,
      description: formData.description,
      title: formData.title,
    });
    if (image) {
      imageUrl = await uploadImage(image);
    }
    try {
      await axios.put("/api/lawyers", {
        id: formData.id,
        image: imageUrl,
        name: formData.name,
        surname: formData.surname,
      });
      await fetchAndUpdate();
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  };

  const editBlog = async () => {
    let imageUrl: string | null = null;
    if (image) {
      imageUrl = await uploadImage(image);
    }
    try {
      await axios.put("/api/blogs", {
        id: formData.id,
        image: imageUrl,
        description: formData.description,
      });
      await fetchAndUpdate();
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  };

  const handleSave = () => {
    switch (addType) {
      case "lawyer":
        addLawyer();
        break;
      case "partner":
        addPartner();
        break;
      case "blog":
        addBlog();
        break;
      case "editPartner":
        editPartner();
        break;
      case "editLawyer":
        editLawyer();
        break;
      case "editBlog":
        editBlog();
        break;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/20  flex items-center justify-center ">
      <div className="bg-white p-8 rounded-xl shadow-xl min-w-[500px] relative text-center grid gap-16 ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[28px] text-gray-400 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-[28px] font-[700] text-[#1D1D1F] pt-15">
          Are you sure you want to save these changes?
        </h2>

        <div className="flex justify-center text-[26px] gap-4">
          <Button
            className="px-6 py-3 bg-white text-[#4040CDCC] rounded-lg hover:bg-gray-300 hover:text-[#4040cd]"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="px-6 py-3 bg-[#4040CDCC] text-white rounded-lg hover:bg-[#4040cd]"
            onClick={() => {
              handleSave();
            }}
          >
            Yes, Save
          </Button>
        </div>
      </div>
    </div>
  );
}
