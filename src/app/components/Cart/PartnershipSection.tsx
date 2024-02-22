'use client'
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '@/redux/modalSlice';
import Providers from '@/redux/Providers';

import Offers from '@/app/components/Cart/Offers';
import Additional from '@/app/components/Cart/Additional'
import Cart from '@/app/components/Cart/Cart';

import Modal from '@/app/components/Cart/Modal';

import { ModalParams } from '@/types';
import * as Dialog from '@radix-ui/react-dialog';

const Section = () => {
    const { showModal } = useSelector((state: RootState) => state.modal);

    const dispatch = useDispatch();

    const handleModal = ({ name, modalData }: ModalParams) => dispatch(toggleModal({ name, modalData }))
    return (
        <Dialog.Root open={showModal} onOpenChange={() => handleModal({ name: "", modalData: [] })}>
            <Offers />
            <Additional />
            <Cart />
            <Dialog.Portal>
                <Dialog.Overlay className='fixed w-full h-full top-0 left-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm' />
                <Modal handleModal={handleModal} />
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default function PartnershipSection() {
    return <Providers>
        <Section />
    </Providers>
}