"use client";
import { inter, press_start } from "@/app/fonts";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { ModalParams } from "@/types";

interface ModalProps {
  handleModal: ({ name, modalData }: ModalParams) => void;
}

const Modal = ({ handleModal }: ModalProps) => {
  const { name, modalData } = useSelector((state: RootState) => state.modal);

  return (
    <Dialog.Content className="fixed top-1/2  left-1/2 box-border overflow-y-scroll max-h-[90vh] w-[95vw] z-50 translate-x-[-50%] translate-y-[-50%] rounded-[20px] bg-bec-svg p-[25px] focus:outline-none">
      <button
        onClick={() => {
          handleModal({ name: "", modalData: [] as any });
        }}
      >
        <Image
          src="/cross.svg"
          width={50}
          height={50}
          alt="cross"
          className="absolute top-16 right-10 w-8 h-8"
        />
      </button>
      <div className="grid grid-cols border border-hack-green rounded-xl p-10 ">
        {modalData.map((md) => (
          <>
            <p
              className={`${press_start.className} flex items-center text-3xl`}
            >
              {md.heading}
            </p>
            <p className={`${inter.className} flex items-center text-lg mb-10`}>
              {md.details}
            </p>
          </>
        ))}
      </div>
    </Dialog.Content>
  );
};

export default Modal;
