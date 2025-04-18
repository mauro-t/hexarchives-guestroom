import Credits from "@/components/credits";
import Divider from "@/components/divider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Modal from "@/components/modal";
import WhatAreYouLookingFor from "@/components/what-are-you-looking-for";
import WhatsThis from "@/components/whats-this";

export default function Home() {
  return (
    <>
      <Header />
      <Divider>
        <h1 className="font-ot-jubilee text-fluid-md uppercase">
          Welcome to hex archive
        </h1>
      </Divider>
      <WhatAreYouLookingFor />
      <Divider>
        <div className="flex justify-between gap-4 font-ot-jubilee text-fluid-md uppercase md:w-full md:max-w-md">
          <span>Feel</span>
          <span>like</span>
          <span>going</span>
          <span>deeper?</span>
        </div>
      </Divider>
      <WhatsThis />
      <Credits />
      <Modal />
      <Footer />
    </>
  );
}
