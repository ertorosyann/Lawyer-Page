"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import ModalForSave from "./ModalForSave";

type ModalForAddingProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fields: { [key: string]: string }[];
  imageRequired?: boolean;
};

export default function ModalForEdit({
  isOpen,
  onClose,
  title,
  fields,
  imageRequired = false,
}: ModalForAddingProps) {
  const [image, setImage] = useState<File | null>(null);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  // const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!");
      setImage(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   field: string
  // ) => {
  //   setFormData({ ...formData, [field]: e.target.value });
  // };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20  flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg relative min-w-[1024px] grid gap-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[40px] text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="text-[28px] font-[500] leading-[100%] grid gap-6 p-10 text-[#1D1D1FCC]">
          <h2 className="text-[30px] font-[500] text-center">{title}</h2>

          {fields.map((fieldObj, i) =>
            Object.entries(fieldObj).map(([key, value]) => (
              <div key={`${key}-${i}`} className="grid gap-4">
                <p className="capitalize">{key}</p>
                <input
                  type="text"
                  placeholder={key}
                  defaultValue={value}
                  className="w-full px-4 py-5 bg-[#F3F4F6] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  // onChange={...}
                />
              </div>
            ))
          )}

          {/* Image Upload Section */}
          {imageRequired && (
            <div className="grid gap-4">
              <p className="text-[26px] font-[500]">Upload an Image</p>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
              <label
                htmlFor="file-upload"
                className="w-full flex items-center justify-center px-4 py-6 bg-[#F3F4F6] text-gray-500 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-gray-600 hover:text-black transition"
              >
                <span className="text-sm">
                  Click to upload or drag file here
                </span>
              </label>
            </div>
          )}

          {image && (
            <div className=" grid gap-4">
              <div className="relative w-full max-w-[200px] h-[200px] ">
                <Image
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <button
                onClick={removeImage}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition w-fit"
              >
                Delete image
              </button>
            </div>
          )}

          {/* Save Button */}
          <div className="grid justify-end">
            <Button
              onClick={() => setIsSaveModalOpen(true)}
              className="mt-4 text-white  px-5 py-6 rounded-lg cursor-pointer"
            >
              Save Changes
            </Button>
            <ModalForSave
              fields={fields}
              isOpen={isSaveModalOpen}
              onClose={() => {
                setIsSaveModalOpen(false);
                onClose();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
