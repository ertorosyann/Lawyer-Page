"use client";
import { Button } from "./Button";

type ModalForDeleteProps = {
  isOpen: boolean;
  onClose: () => void;
  fields: string[] | { [key: string]: string }[];
};

export default function ModalForDelete({
  isOpen,
  onClose,
  fields,
}: ModalForDeleteProps) {
  if (!isOpen) return null;

  const handleSave = () => {
    console.log(fields);
  }; //before adding

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
              onClose();
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
