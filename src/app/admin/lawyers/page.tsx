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
        <div className="`p-10 grid  grid-cols-3 gap-20`">
          {lawyers.map((lawyer, index) => (
            <div key={index} className="w-60">
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

                <Image
                  src={lawyer.image}
                  alt={`Lawyer Image ${index + 1}`}
                  priority
                  width={100}
                  height={50}
                  className="rounded-[4px] object-cover"
                />
                <p className="text-center font-500 text-[20px]">
                  {lawyer.name} {lawyer.surname}
                </p>
                <p className="text-[14px] text-muted">{lawyer.description}</p>
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
              name: lawyers[lawyerEdit].name,
              surname: lawyers[lawyerEdit].surname,
              description: lawyers[lawyerEdit].description,
              image: lawyers[lawyerEdit].image,
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
