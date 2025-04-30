"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import ModalForSave from "./ModalForSave";

type ModalForAddingProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fields: { [key: string]: string }[];
  imageRequired?: boolean;
  editType: string;
  editIndex: string;
  fetchAndUpdate: () => Promise<void>;
};

export default function ModalForEdit({
  isOpen,
  onClose,
  title,
  fields,
  imageRequired = false,
  editType,
  editIndex,
  fetchAndUpdate,
}: ModalForAddingProps) {
  const [image, setImage] = useState<File | null>(null);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isOpen) {
      const initialData: { [key: string]: string } = {};
      fields.forEach((fieldObj) => {
        Object.entries(fieldObj).forEach(([key, value]) => {
          initialData[key] = value;
        });
      });
      setFormData(initialData);
    }
  }, [isOpen, fields]);

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
    setFormData({ ...formData, [field]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20  flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl h-[600px] relative min-w-[1024px] grid gap-5">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[40px] text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="text-[28px] font-[500] leading-[100%] grid gap-8 p-10 text-[#1D1D1FCC]">
          <h2 className="text-[25px] font-[700] text-center ">{title}</h2>

          <div className="flex gap-10">
            <div className="w-1/2">
              {fields.map((fieldObj, i) =>
                Object.entries(fieldObj).map(([key]) =>
                  key == "image" ? null : (
                    <div key={`${key}-${i}`} className="grid gap-4">
                      <p className="text-[18px]">{key}</p>
                      <input
                        type="text"
                        placeholder={key}
                        value={formData[key] || ""}
                        className="w-full px-4 py-5 bg-[#F3F4F6] rounded-lg text-[18px] text-muted"
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    </div>
                  )
                )
              )}
            </div>
            <div className="w-1/2 ">
              {/* Image Upload Section */}
              {imageRequired && (
                <div className="flex justify-between h-[200px]">
                  <div className="grid">
                    <p className="text-[18px] font-[500]">Image Now</p>
                    <Image
                      src={fields[0].image}
                      width={100}
                      height={100}
                      alt="Preview"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="grid">
                    {image ? null : (
                      <>
                        <p className="text-[18px] font-[500]">
                          Upload an Image
                        </p>
                        <input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileUpload}
                        />
                        <label
                          htmlFor="file-upload"
                          className="w-[250px] flex items-center justify-center px-2  bg-[#F3F4F6] text-muted border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-gray-600 hover:text-black transition-[300]"
                        >
                          <span className="text-sm">
                            Click to upload or drag file here
                          </span>
                        </label>
                      </>
                    )}

                    {image && (
                      <div className=" grid gap-10">
                        <div className="grid  gap-14">
                          <p className="text-[18px] font-[500]">
                            Editing image
                          </p>
                          <Image
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            width={150}
                            height={100}
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <button
                            onClick={removeImage}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-[20px]"
                          >
                            Delete image
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="grid justify-end">
            <Button
              onClick={() => setIsSaveModalOpen(true)}
              className="mt-1 text-white text-[20px]  px-5 py-6 rounded-lg cursor-pointer"
            >
              Save Changes
            </Button>
            <ModalForSave
              isOpen={isSaveModalOpen}
              addType={editType}
              image={image}
              formData={{ ...formData, id: editIndex }}
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
