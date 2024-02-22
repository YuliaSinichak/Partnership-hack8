'use client'
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { iSellingPoint, iOptional } from '@/types';
import emailjs from '@emailjs/browser';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { generateMessage } from '@/hooks/generateEmail';

import AnimatedElement from "@/hooks/AnimatedElement";

import { press_start, inter } from "../../fonts";


// Create a Yup schema for form validation
const validationSchema = Yup.object({
  company_name: Yup.string().required('Required'),
  company_email: Yup.string().email('Invalid email address').required('Required'),
});




const SP = ({ name, price }: iSellingPoint) => {
  return <div className="w-full flex flex-col justify-between items-start">
    <div className='w-full flex flex-row justify-between items-center'>
    <span className={`${inter.className} text-3xl`}>{name}</span>
    <span className={`${press_start.className} text-hack-green text-xl`}>${price}</span>
    </div>
    <span className='text-xl'>+</span>
  </div>
}

const OPT = ({ name, price }: iOptional) => {
  return <div className="w-full flex flex-col justify-between items-start">
    <div className='w-full flex flex-row justify-between items-center'>
    <span className={`${inter.className} text-3xl`}>{name}</span>
    <span className={`${press_start.className} text-hack-green text-xl`}>${price}</span>
    </div>
    <span className='text-xl'>+</span>
  </div>
}

export default function Cart() {
  const sellingPoints = useSelector((state: RootState) => state.sponsorship);
  const optionalPoints = useSelector((state: RootState) => state.optionalPackets);

  const inputRef = useRef<HTMLInputElement>(null);

  const activeSellingPoints = sellingPoints.filter(item => item.active);
  const activeOptionalPoints = optionalPoints.filter(item => item.active);

  const selligPointsPriceSum = activeSellingPoints.reduce((acc, item) => acc + item.price, 0);

  const activeOptionsPriceSum = activeOptionalPoints.reduce((acc, item) => acc + item.price, 0);

  const isDiscount = activeSellingPoints.length == 3;
  const totalSum = ((isDiscount ? 0.9 : 1) * selligPointsPriceSum) + activeOptionsPriceSum;

  const handleForm = (result: any) => {
    console.log({ activeSellingPoints, activeOptionalPOints: activeOptionalPoints, totalSum, ...result });

    const serviceId: string = process?.env?.NEXT_PUBLIC_SERVICE_ID || '';
    const templateId: string = process?.env?.NEXT_PUBLIC_TEMPLATE_ID || '';
    const publicKey: string = process?.env?.NEXT_PUBLIC_PUBLIC_KEY || '';


    const stringEmail = generateMessage(result.company_name, activeSellingPoints, activeOptionalPoints, activeOptionsPriceSum, selligPointsPriceSum, totalSum, isDiscount)

    const templateParams = {
      company_email: result.company_email,
      message: stringEmail

    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const formik = useFormik({
    initialValues: {
      company_name: '',
      company_email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleForm(values);
      resetForm();
    },
  });


  return (
    <section className="flex flex-col items-center justify-center mx-auto w-full max-w-[1400px] gap-8 my-10 self-center">
      <h2 className={`${press_start.className} text-hack-green text-3xl md:text-5xl my-16 text-center`}>Кошик</h2>
      <div className="w-auto">
       
        <div className="col-span-1 flex flex-col gap-5">

          <form className="border rounded-2xl lg:py-6 lg:px-14 px-20 py-4 flex flex-rows gap-10" onSubmit={formik.handleSubmit} >  
            <div className="col-span-2 max-w-lg mx-auto w-full flex flex-col gap-5">
              <h3 className={`${press_start.className} text-center text-hack-green text-2xl`}>Offers</h3>
                {sellingPoints.filter(sp => sp.active).map(sp => SP(sp))}
          
                {optionalPoints.filter((opt) => opt.active).length ?
                  <>
                    <h3 className={`${press_start.className} text-center text-hack-green text-2xl`}>Options</h3>
                      {optionalPoints.filter(opt => opt.active).map(opt => OPT(opt))} 
                  </>
                : null}
          
                <button onClick={() => inputRef.current?.focus()} className={`${press_start.className} text-hack-green text-xl md:text-3xl rounded-2xl w-fit py-2 md:self-start self-center`}>= ${totalSum}</button>
          
            </div> 
            <div className=''>    
            <input
              ref={inputRef}
              type="text"
              name="company_name"
              className="w-full mt-8 p-5 border-2 focus:border-hack-green outline-none text-lg bg-transparent rounded-2xl"
              placeholder="Назва компанії"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company_name} />
            {formik.touched.company_name && formik.errors.company_name ? (
              <div className="text-red-400">{formik.errors.company_name}</div>
            ) : null}
            <input
              type="email"
              name="company_email"
              className="w-full mt-8 p-5 border-2 focus:border-hack-green outline-none text-lg bg-transparent rounded-2xl"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company_email}
            />
            {formik.touched.company_email && formik.errors.company_email ? (
              <div className="text-red-400">{formik.errors.company_email}</div>
            ) : null}
            <button
              // disabled={!formik.isValid || formik.isSubmitting}
              className={`${press_start.className} border-2 rounded-xl bg-black border-hack-green hover:scale-105 focus: text-hack-green outline-none w-full sm:w-fit px-10 py-4 my-5 self-center text-md`} type="submit">Оформити</button>
            </div>
          </form>
        </div>
      </div>
    </section >
  )
}