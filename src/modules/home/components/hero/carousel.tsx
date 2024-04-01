"use client"

import UnderlineLink from '@modules/common/components/underline-link';
import { useState, useEffect } from 'react';
import Image from "next/image"

const images = [
    {
        src: 'shopstuff.jpg', title: 'La forza della natura nei nostri tessuti, resistenza garantita.', description: "Riduci l'impatto, non lo stile. Scopri la moda eco-friendly nel nostro negozio di abbigliamento."
    },
    { src: 'ClaudiaVestitoLungo.jpg', title: "Dal passato al presente, l'eleganza resta immutata. ", description: "Esplora la nostra collezione di abbigliamento, dove lo stile classico si fonde con l'eterna bellezza della moda." },
    { src: 'felpamare.jpg', title: "Capi che resistono al tempo, per una moda senza età.", description: "Moda sostenibile, eredità di stile: investi nel tuo guardaroba, investi nel futuro. Abbigliamento eco-friendly per generazioni di eleganza." },
    // Aggiungi qui altre immagini e descrizioni
];

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 500000); // Cambia l'intervallo di tempo desiderato (in millisecondi)

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="">
      <Image
        src={`/${images[currentImageIndex].src}`}
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
            <div className="absolute right-0 lg:right-24 bottom-6 flex justify-center items-center bg-white opacity-75 w-1/2">
                <div className="text-stone-700 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-12 w-3/4 lg:w-full">
                    <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black text-right ml-auto uppercase">
                        {images[currentImageIndex].title}
                    </h1>
                    <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black text-right">
                        {images[currentImageIndex].description}

                    </p>
                    <div className="">
                        <UnderlineLink href="/store">Explore products</UnderlineLink>
                    </div>
                </div>
            </div>


            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
                onClick={handlePrev}
            >
                Prev
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
                onClick={handleNext}
            >
                Next
            </button>
        </div>
    );
};

export default Carousel;
