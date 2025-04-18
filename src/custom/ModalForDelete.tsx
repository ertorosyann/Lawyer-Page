"use client";
import { Button } from "./Button";

type ModalForDeleteProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
};

export default function ModalForDelete({
  isOpen,
  onClose,
  onSave,
}: ModalForDeleteProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20  flex items-center justify-center text-">
      <div className="bg-white p-8 rounded-xl shadow-xl min-w-[500px] relative text-center grid gap-16 ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[28px] text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-[28px] font-[700] text-[#1D1D1F] pt-15">
          Are you sure you want to delete this item?
        </h2>

        <div className="flex justify-center text-[26px] gap-4">
          <Button
            className="px-6 py-3 bg-white text-[#B21F1FCC] rounded-lg hover:bg-gray-300 hover:text-red-700"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="px-6 py-3 bg-[#B21F1FCC] text-white rounded-lg hover:bg-red-700"
            onClick={onSave}
          >
            Yes, Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
