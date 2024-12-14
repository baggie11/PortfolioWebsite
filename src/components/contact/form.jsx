"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import {Toaster , toast} from "sonner";

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);

  const sendEmail = (params) => {

    const toastId = toast.loading("Sending your message , please wait..")
    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID , process.env.NEXT_PUBLIC_TEMPLATE_ID, params, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate : {
            throttle : 5000 //once cannot send more than 1 email per 5 seconds
        }
      })
      .then(
        () => {
            toast.success("I have received your message , I will get back to you soon!",{
                id : toastId //replace the loading with the success message
            })
        },
        (error) => {
          console.log(error)
          toast.error("There was error sending your message. Please try again later!",{
            id : toastId
          })
        },
      );
  };

  const onSubmit = (data) => {
    const  templateParams = {
        to_name  : "Bagavati",
        from_name : data.Name,
        reply_to : data.Email,
        message : data.Message,
    };
    sendEmail(templateParams);
  };
  
  return (
    <>
    <Toaster richColors = {true}/>
    <form onSubmit={handleSubmit(onSubmit)}
    className='mac-w-md w-full flex flex-col items-center justify0center space-y-9 top-10'
    >
      <input type="text" placeholder="Name" {...register("Name", {required: "This field is required",minLength : {value : 3 , message : "Name should be atleast 3 characters long"}, maxLength: 80})} 
      className='w-1/3 p-2 rounded-md shadow-lg text-foreground focus:outline-non focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {errors.Name && (
  <span className='inline-block self-start text-accent ml-112'>
    {errors.Name.message}
  </span>
)}

      <input type="text" placeholder="Email" {...register("Email", {required: "This field is required", pattern: /^\S+@\S+$/i})} 
      className='w-1/3 p-2 rounded-md shadow-lg text-foreground focus:outline-non focus:ring-2 focus:ring-accent/50 custom-bg'
      />
        {errors.Email && <span className='inline-block self-start text-accent ml-112'>{errors.Email.message}</span>}
      <textarea  placeholder="Message" {...register("Message", {required: "This field is required" , min : 50 })}
      className='w-1/3 p-2 rounded-md shadow-lg text-foreground focus:outline-non focus:ring-2 focus:ring-accent/50 custom-bg'
      />
        {errors.Message && <span className='inline-block self-start text-accent ml-112'>{errors.Message.message}</span>}

      <input
      value = "Cast your message"
      type="submit" className='px-10 py-4 rounded-md shadow-lg bg-background broder border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize' />
    </form>
    </>
   
  );
}