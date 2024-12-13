
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import { Suspense } from "react";
import clsx from "clsx";

import AboutDetails from "@/components/about";
import Form from "@/components/contact/form";


export default function Home() {
  return (
   <>
      <Image src = {bg} alt = "background"  className = "-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>

      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4 top-1/2">
        <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          Reach out to the realm
        </h1>
        <p className="text-center font-light">
        Step into the sphere of connection and let your thoughts flow freely. Whether you wish to share an idea, ask a question, or simply say hello, your message is a valued spark in this space. Use the form below to send your words into the ether, and await a thoughtful reply from this corner of the cosmos.
        </p>
        </div>
      </article>
      <br/>
      <Form/>
  </>
  );
}
