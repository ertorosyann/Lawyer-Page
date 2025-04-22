"use client";
import ModalForAdding from "@/custom/ModalForAdding";
import { more } from "@/app/assets/svg";
import { Area } from "@/custom/Area";
import { Button } from "@/custom/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModalForEdit from "@/custom/ModalForEdit";
import ModalForDelete from "@/custom/ModalForDelete";
import { Partner } from "@/types/items";
import { fetchPartners } from "@/lib/actions";

export default function Partners() {
  const [addPartnerIsOpen, setAddPartnerIsOpen] = useState(false);
  const [partnersEdit, setPartnersEdit] = useState<number | null>(null);
  const [partnersDelet, setPartnersDelet] = useState<number | null>(null);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [partnerId, setPartnerId] = useState<string>("");
  const [selectedPopupIndex, setSelectedPopupIndex] = useState<number | null>(
    null
  );

  const fetchPartnersAndSet = async () => {
    const data = await fetchPartners();
    if (data) {
      setPartners(data);
    }
  };

  useEffect(() => {
    fetchPartnersAndSet();
  }, []);

  return (
    <section>
      <div className="grid gap-10">
        <div className="flex justify-between font-[600] text-[24px] pb-10 bg-[#F3F4F6] items-center">
          <h1>Our Partners</h1>
          <Button
            className="px-10 py-5 rounded-2xl text-white"
            onClick={() => setAddPartnerIsOpen(true)}
          >
            Add Partner +
          </Button>
        </div>
        <div className="p-10 grid grid-cols-5 gap-20 items-center">
          {partners.map((partner, index) => (
            <div key={index}>
              <Area className="rounded-[4px] flex flex-col gap-5 bg-white p-8">
                <div className="relative flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedPopupIndex(
                        selectedPopupIndex === index ? null : index
                      );
                    }}
                    className="cursor-pointer"
                  >
                    {more}
                  </button>
                  {/* Popup по click */}
                  {selectedPopupIndex === index && (
                    <div className="absolute right-0 top-full mt-2 flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[220px]">
                      <button
                        onClick={() => {
                          setPartnersEdit(index);
                          setSelectedPopupIndex(null);
                          setPartnerId(partner._id);
                        }}
                        className="px-4 py-2 text-left text-[26px] hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setPartnersDelet(index);
                          setSelectedPopupIndex(null);
                          setPartnerId(partner._id);
                        }}
                        className="px-4 py-2 text-left text-[26px] text-red-600 hover:bg-gray-100"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>

                <h3 className="font-600 text-[26px]"> {partner.title}</h3>
                <Image
                  src={partner.image}
                  priority
                  alt={`Lawyer Image ${index + 1}`}
                  width={257}
                  height={78}
                  className="rounded-[4px]"
                />
                <p className="font-[600] text-[16px] break-words w-full">
                  {partner.description}
                </p>
              </Area>
            </div>
          ))}
        </div>
      </div>
      <ModalForAdding
        isOpen={addPartnerIsOpen}
        onClose={() => setAddPartnerIsOpen(false)}
        title="Add Partner"
        fields={["title", "description"]}
        imageRequired={true}
        addType="partner"
        fetchAndUpdate={fetchPartnersAndSet}
      />

      {partnersEdit !== null && (
        <ModalForEdit
          title="Partner Update"
          isOpen={partnersEdit !== null}
          onClose={() => setPartnersEdit(null)}
          imageRequired={true}
          editType="editPartner"
          editIndex={partnerId}
          fetchAndUpdate={fetchPartnersAndSet}
          fields={[
            {
              image: partners[partnersEdit].image,
              description: partners[partnersEdit].description,
              title: partners[partnersEdit].title,
            },
          ]}
        />
      )}
      {partnersDelet !== null && (
        <ModalForDelete
          id={partnerId}
          isOpen={partnersDelet !== null}
          onClose={() => {
            setPartnersDelet(null);
          }}
          deleteType="partner"
          fetchAndUpdate={fetchPartnersAndSet}
        />
      )}
    </section>
  );
}
