"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import ModalForSave from "./ModalForSave";

type ModalForAddingProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fields: string[];
  imageRequired?: boolean;
  addType: string;
  fetchAndUpdate: () => Promise<void>;
};

export default function ModalForAdding({
  isOpen,
  onClose,
  title,
  fields,
  imageRequired = false,
  addType,
  fetchAndUpdate,
}: ModalForAddingProps) {
  const [image, setImage] = useState<File | null>(null);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60  flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg relative min-w-[1024px] grid gap-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[40px] text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="text-[24px] font-[500] leading-[100%] grid gap-6 p-5 text-[#1D1D1FCC]">
          <h2 className="text-[25px] font-[500] text-center">{title}</h2>

          {fields.map((field) => (
            <div key={field} className="grid gap-2">
              <p>{field} in English</p>
              <input
                type="text"
                placeholder={`${field} in English`}
                className="w-full px-4 py-5 bg-[#F3F4F6] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={formData[field] || ""}
                onChange={(e) => handleInputChange(e, field)}
              />
              <p>{field} in Armenian</p>
              <input
                type="text"
                placeholder={`${field} in Armenian`}
                className="w-full px-4 py-5 bg-[#F3F4F6] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={formData[field] || ""}
                onChange={(e) => handleInputChange(e, field)}
              />
            </div>
          ))}

          {/* Image Upload Section */}
          {imageRequired && (
            <div className="grid gap-2">
              <p className="text-[16px] font-medium">Upload an Image</p>

              {!image && (
                <>
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
                </>
              )}

              {image && (
                <div className="mt-2 grid gap-4">
                  <div className="relative w-full max-w-[150px] h-[150px]">
                    <Image
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      priority
                      fill
                      className="object-cover rounded-lg"
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
              isOpen={isSaveModalOpen}
              formData={formData}
              addType={addType}
              image={image}
              fetchAndUpdate={fetchAndUpdate}
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
