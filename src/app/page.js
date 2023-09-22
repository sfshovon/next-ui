"use client"
import { NextUIProvider } from "@nextui-org/react";
import Banner from "./Components/Banner/Banner";
import Brands from "./Components/Brands/Brands";
import Guidelines from "./Components/Guidelines/Guidelines";
import Services from "./Components/Services/Services";
import Video from "./Components/Video/Video";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="container mx-auto md:w-full xl:max-w-screen-2xl px-0 md:px-16">
        <Banner/>
        <Video videoId="rAZXWkVhCgg" />
        <Services/>
        <Brands/>
        <Guidelines/>
      </div>
    </NextUIProvider>
  )
}

