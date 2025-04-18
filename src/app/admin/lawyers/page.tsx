"use client";
import { more } from "@/app/assets/svg";
import { Area } from "@/custom/Area";
import { Button } from "@/custom/Button";
import ModalForAdding from "@/custom/ModalForAdding";
import ModalForDelete from "@/custom/ModalForDelete";
import ModalForEdit from "@/custom/ModalForEdit";
import Image from "next/image";
import { useState } from "react";

export const lawyerImages = [
  { image: "/lawyer-White.png", titile: "Casey Arbenz" },
  { image: "/lawyer-White.png", titile: "Casey Arbenz" },
  { image: "/lawyer-White.png", titile: "Casey Arbenz" },
  { image: "/lawyer-White.png", titile: "Casey Arbenz" },
  { image: "/lawyer-White.png", titile: "Casey Arbenz" },
  { image: "/lawyer-White.png", titile: "Casey Arbenz" },
];

export default function Laywers() {
  const [addLawyerIsOpen, setAddLawyerIsOpen] = useState(false);
  const [selectedPopupIndex, setSelectedPopupIndex] = useState<number | null>(
    null
  );
  const [lawyerEdit, setLawyerEdit] = useState<number | null>(null);
  const [lawyerDelet, setLawyerDelet] = useState<number | null>(null);

  function handleDeletLawyer() {} // befor adding;

  return (
    <section>
      <div className="grid gap-10">
        <div className="flex justify-between font-[600] text-[24px] pb-10 bg-[#F3F4F6] items-center">
          <h1>Our Laywers</h1>
          <Button
            className="px-10 py-5 rounded-2xl text-white"
            onClick={() => setAddLawyerIsOpen(true)}
          >
            Add Laywer +
          </Button>
        </div>
        <div className="p-10 grid grid-cols-5 gap-20">
          {lawyerImages.map((src, index) => (
            <div key={index}>
              <Area className="relative rounded-[4px] grid gap-6 bg-white">
                <div className="absolute top-4 right-4 z-40">
                  <button
                    onClick={() =>
                      setSelectedPopupIndex(
                        selectedPopupIndex === index ? null : index
                      )
                    }
                    className="cursor-pointer"
                  >
                    {more}
                  </button>
                  {/* Popup по click */}
                  {selectedPopupIndex === index && (
                    <div className="absolute right-0 top-full mt-2 flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[220px]">
                      <button
                        onClick={() => {
                          setLawyerEdit(index);
                          setSelectedPopupIndex(null);
                        }}
                        className="px-4 py-2 text-left text-[26px] hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setLawyerDelet(index);
                          setSelectedPopupIndex(null);
                        }}
                        className="px-4 py-2 text-left text-[26px] text-red-600 hover:bg-gray-100"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>

                <Image
                  src={src.image}
                  alt={`Lawyer Image ${index + 1}`}
                  width={1257}
                  height={354}
                  className="rounded-[4px]"
                />

                <h3 className="text-center font-500 text-[20px]">
                  {src.titile}
                </h3>
              </Area>
            </div>
          ))}
        </div>
      </div>

      <ModalForAdding
        isOpen={addLawyerIsOpen}
        onClose={() => setAddLawyerIsOpen(false)}
        title="Add Laywer"
        fields={["Name", "Surname"]}
        imageRequired={true}
      />

      {lawyerEdit !== null && (
        <ModalForEdit
          title={lawyerImages[lawyerEdit].titile}
          isOpen={lawyerEdit !== null}
          onClose={() => setLawyerEdit(null)}
          fields={[{ title: lawyerImages[lawyerEdit].titile }]}
          imageRequired={true}
        />
      )}
      {lawyerDelet !== null && (
        <ModalForDelete
          isOpen={lawyerDelet !== null}
          onClose={() => setLawyerDelet(null)}
          onSave={() => {
            handleDeletLawyer();
            setLawyerDelet(null);
          }}
        />
      )}
    </section>
  );
}
