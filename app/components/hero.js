"use client"

export default function Hero() {
    return (
        <section className="px-4 py-6 sm:px-6 sm:py-8 md:py-10 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">

                <h1 className="font-black leading-none text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]">
                    MARIA
                    <br />
                    SANCHEZ
                    <br />
                    MOLINA
                </h1>
                <div className="text-left lg:text-right self-start lg:self-end text-sm sm:text-base md:text-lg lg:text-xl">
                    <p>FULL TIME DESIGNER</p>
                    <p>VISUAL ARTIST BY HEART</p>
                </div>

            </div>
        </section>
    )
}
