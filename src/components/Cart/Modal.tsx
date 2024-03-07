"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useSelector } from "react-redux";
import AnimatedElement from "@/hooks/AnimatedElement";

import { inter, press_start } from "@/app/fonts";
import { RootState } from "@/redux/store";
import { ModalParams } from "@/types";

interface ModalProps {
  handleModal: ({ name, modalData }: ModalParams) => void;
}

const Modal = ({ handleModal }: ModalProps) => {
  const { name, modalData } = useSelector((state: RootState) => state.modal);

  return (
    <Dialog.Content className="fixed top-1/2 left-1/2 box-border overflow-y-scroll max-h-[80vh] w-[85vw] z-50 translate-x-[-50%] translate-y-[-50%] focus:outline-none">
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
          className="absolute top-10 lg:top-16 right-4 lg:right-10 w-8 h-8"
        />
      </button>
      <div className="grid grid-cols border border-hack-green rounded-lg p-4 lg:p-10 bg-black">
        {modalData.map((md) => (
          <>
            <p
              className={`${press_start.className} flex items-center text-lg lg:text-3xl`}
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
