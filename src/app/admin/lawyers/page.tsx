"use client";
import { more } from "@/app/assets/svg";
import { Area } from "@/custom/Area";
import { Button } from "@/custom/Button";
import ModalForAdding from "@/custom/ModalForAdding";
import ModalForDelete from "@/custom/ModalForDelete";
import ModalForEdit from "@/custom/ModalForEdit";
import { fetchLawyers } from "@/lib/actions";
import { Lawyer } from "@/types/items";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Laywers() {
  const [addLawyerIsOpen, setAddLawyerIsOpen] = useState(false);
  const [lawyerEdit, setLawyerEdit] = useState<number | null>(null);
  const [lawyerDelet, setLawyerDelet] = useState<number | null>(null);
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [lawyerId, setLawyerId] = useState<string>("");
  const [selectedPopupIndex, setSelectedPopupIndex] = useState<number | null>(
    null
  );

  const fetchLawyersAndSet = async () => {
    const data = await fetchLawyers();
    if (data) {
      setLawyers(data);
    }
  };

  useEffect(() => {
    fetchLawyersAndSet();
  }, []);

  return (
    <>
      <div className="grid gap-10 ">
        <div className="flex justify-between font-[600] text-[24px] p-10  items-center">
          <h1 className="text-[30px] font-[700]">Our Laywers</h1>
          <Button
            className="px-10 py-5 rounded-2xl text-white"
            onClick={() => setAddLawyerIsOpen(true)}
          >
            Add Laywer +
          </Button>
        </div>
        <div className=" grid grid-cols-3 gap-10 p-10">
          {lawyers.map((lawyer, index) => (
            <div key={index} className="">
              <Area className="relative rounded-[4px] grid gap-5 bg-white p-8 border-[#ad90de] ">
                <div className="absolute top-4 right-4 z-40">
                  <button
                    onClick={() =>
                      setSelectedPopupIndex(
                        selectedPopupIndex === index ? null : index
                      )
                    }
                    className="cursor-pointer p-3 hover:bg-[#d0d0d0] rounded-[10px]"
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
                          setLawyerId(lawyer._id);
                        }}
                        className="px-4 py-2 text-left text-[26px] hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setLawyerDelet(index);
                          setSelectedPopupIndex(null);
                          setLawyerId(lawyer._id);
                        }}
                        className="px-4 py-2 text-left text-[26px] text-red-600 hover:bg-gray-100"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid items-center gap-4">
                  <Image
                    src={lawyer.image}
                    alt={`Lawyer Image ${index + 1}`}
                    priority
                    width={100}
                    height={50}
                    className="rounded-[4px] object-cover"
                  />
                  <p className="text-center font-500 text-[20px]">
                    {lawyer.name_am} {lawyer.surname_am}
                  </p>
                  <p className="text-center font-500 text-[20px]">
                    {lawyer.name_en}
                    {lawyer.surname_en}
                  </p>
                </div>
                <p className="text-[14px] text-muted">
                  {lawyer.description_am} {lawyer.description_en}
                </p>
              </Area>
            </div>
          ))}
        </div>
      </div>

      <ModalForAdding
        isOpen={addLawyerIsOpen}
        onClose={() => setAddLawyerIsOpen(false)}
        title="Add Laywer"
        fields={["name", "surname", "description"]}
        imageRequired={true}
        addType="lawyer"
        fetchAndUpdate={fetchLawyersAndSet}
      />

      {lawyerEdit !== null && (
        <ModalForEdit
          title="Lawyer Update"
          isOpen={lawyerEdit !== null}
          onClose={() => setLawyerEdit(null)}
          imageRequired={true}
          editType="editLawyer"
          editIndex={lawyerId}
          fetchAndUpdate={fetchLawyersAndSet}
          fields={[
            {
              image: lawyers[lawyerEdit].image,
              name_am: lawyers[lawyerEdit].name_am,
              name_en: lawyers[lawyerEdit].name_en,
              surname_en: lawyers[lawyerEdit].surname_en,
              surname_am: lawyers[lawyerEdit].surname_am,
              description_en: lawyers[lawyerEdit].description_en,
              description_am: lawyers[lawyerEdit].description_am,
            },
          ]}
        />
      )}
      {lawyerDelet !== null && (
        <ModalForDelete
          id={lawyerId}
          isOpen={lawyerDelet !== null}
          onClose={() => setLawyerDelet(null)}
          deleteType="lawyer"
          fetchAndUpdate={fetchLawyersAndSet}
        />
      )}
    </>
  );
}
