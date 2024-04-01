import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import Carousel from "./carousel";

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <Carousel></Carousel>
      {/*
      <Image
        src="/Home_Momo.png"
        loading="eager"
        priority={true}
        quality={100}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0 lg:pt-32"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute right-0 lg:right-24 bottom-6 flex justify-center items-center bg-white opacity-75">
        <div className="text-stone-700 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-12 w-3/4 lg:w-full">
          <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black text-right ml-auto uppercase">
            La moda che dura nel tempo.
          </h1>
          <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black text-right">
          Riduci l'impatto, non lo stile. Scopri la moda eco-friendly nel nostro negozio di abbigliamento.
          
          </p>
          <div className="">
          <UnderlineLink href="/store">Explore products</UnderlineLink>
          </div>
          </div>
      </div>
*/}

    </div>
  );
};

export default Hero;
