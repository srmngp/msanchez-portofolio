import React from 'react'
import ArtProductionDetails from '../../../components/ArtProductionDetails'
import Image from 'next/image'

export default function ALaVera() {
    const carrouselImages = <>
        <Image
            key={1}
            src={"/art-production/a-la-vera/Rectangle-1.png"}
            alt={"A la vera de mis raíces - 1"}
            width={800}
            height={600}
            className='w-full h-auto object-cover' />
        <Image
            key={2}
            src={"/art-production/a-la-vera/Rectangle-2.png"}
            alt={"A la vera de mis raíces - 2"}
            width={300}
            height={200}
            className='w-full h-auto object-cover' />
        <Image
            key={3}
            src={"/art-production/a-la-vera/Rectangle-3.png"}
            alt={"A la vera de mis raíces - 3"}
            width={300}
            height={200}
            className='w-full h-auto object-cover' />
        <Image
            key={4}
            src={"/art-production/a-la-vera/Rectangle-4.png"}
            alt={"A la vera de mis raíces - 4"}
            width={300}
            height={200}
            className='w-full h-auto object-cover' />
        <Image
            key={5}
            src={"/art-production/a-la-vera/Rectangle-5.png"}
            alt={"A la vera de mis raíces - 5"}
            width={300}
            height={200}
            className='w-full h-auto object-cover' />
    </>

    return (
        <>
            <ArtProductionDetails
                image={"/art-production/a-la-vera/a-la-vera-de-mis-raices.png"}
                title="A la vera de mis raíces"
                description={"A textile project that reconnects with cultural traditions through crochet. By combining ancestral craft with contemporary composition, the work positions landscape as both backdrop and protagonist, symbolizing the longing for origin and belonging."}
                carrouselImages={carrouselImages}
                artistName="María Sánchez"
                year="2021"
                location="Málaga, Spain"
            />
        </>
    )
}
