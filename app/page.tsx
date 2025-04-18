import Credits from "@/components/credits";
import Divider from "@/components/divider";
import Footer from "@/components/footer";
import GlitchText from "@/components/glitch-text";
import Header from "@/components/header";
import Modal from "@/components/modal";
import ProceedDeeper from "@/components/proceed-deeper";
import WhatAreYouLookingFor from "@/components/what-are-you-looking-for";
import WhatsThis from "@/components/whats-this";

export default function Home() {
  return (
    <>
      <Header />
      <Divider>
        <GlitchText text="Welcome to hex archive" />
      </Divider>
      <WhatAreYouLookingFor />
      <Divider>
        <ProceedDeeper />
      </Divider>
      <WhatsThis />
      <Credits />
      {/* <Modal /> */}
      <Footer />
    </>
  );
}
