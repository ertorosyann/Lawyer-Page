"use client";
import { Button } from "@/custom/Button";
import { more } from "@/app/assets/svg";
import { Area } from "@/custom/Area";
import { useEffect, useState } from "react";
import Image from "next/image";
import ModalForAdding from "@/custom/ModalForAdding";
import ModalForEdit from "@/custom/ModalForEdit";
import ModalForDelete from "@/custom/ModalForDelete";
import axios from "axios";
import { Blogs } from "@/types/items";

export default function Blog() {
  const [addBlogIsOpen, setAddBlogIsOpen] = useState(false);
  const [selectedPopupIndex, setSelectedPopupIndex] = useState<number | null>(
    null
  );
  const [blogEdit, setBlogEdit] = useState<number | null>(null);
  const [blogDelet, setBlogDelet] = useState<number | null>(null);
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  function handleDeletBlog() {} // befor adding;

  return (
    <section>
      <div className="grid gap-10">
        <div className="flex justify-between font-[600] text-[24px] pb-10 bg-[#F3F4F6] items-center">
          <h1>Our Blogs</h1>
          <Button
            className="px-10 py-5 rounded-2xl text-white"
            onClick={() => setAddBlogIsOpen(true)}
          >
            Add Blog +
          </Button>
        </div>
        <div className="p-10 grid grid-cols-5 gap-20">
          {blogs.map((src, index) => (
            <div key={index}>
              <Area className="rounded-[4px] grid gap-6 bg-white">
                <div className="relative flex justify-end">
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
                          setBlogEdit(index);
                          setSelectedPopupIndex(null);
                        }}
                        className="px-4 py-2 text-left text-[26px] hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setBlogDelet(index);
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
                  priority
                  width={300}
                  height={354}
                  className="rounded-[4px]"
                />
                <h2 className="font-500 text-[20px]">{src.title}</h2>
                <p className="font-[600] text-[16px]">{src.description}</p>
              </Area>
            </div>
          ))}
        </div>
      </div>

      {/* Add Blog Modal */}
      <ModalForAdding
        isOpen={addBlogIsOpen}
        onClose={() => setAddBlogIsOpen(false)}
        title="Add Blog"
        fields={["description"]}
        imageRequired={true}
        addType="blog"
      />

      {/* Edit Modal — только 1 */}
      {blogEdit !== null && (
        <ModalForEdit
          title="Blog Edit"
          isOpen={blogEdit !== null}
          onClose={() => setBlogEdit(null)}
          fields={[
            {
              title: blogs[blogEdit].title,
              description: blogs[blogEdit].description,
            },
          ]}
          imageRequired={true}
        />
      )}
      {blogDelet !== null && (
        <ModalForDelete
          isOpen={blogDelet !== null}
          onClose={() => setBlogDelet(null)}
          onSave={() => {
            handleDeletBlog();
            setBlogDelet(null);
          }}
        />
      )}
    </section>
  );
}
