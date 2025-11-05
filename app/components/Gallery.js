"use client"

import Image from "next/image";

// Frame styles for different image layouts
export const frameStyles = {
    half: "w-full md:w-1/2 overflow-hidden md:h-[908px]",
    halfAuto: "w-full md:w-1/2 overflow-hidden",
    full: "w-full max-w-[1376px] overflow-hidden md:h-[800px]",
};

// Layout styles for gallery structure
export const layoutStyles = {
    section: "flex flex-col items-center gap-10 py-6",
    container: "flex flex-col items-center gap-10 w-full",
    row: "flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-[1374px]",
    fullRow: "w-full max-w-[1376px]",
    image: "w-full h-full object-cover",
};

// Default dimensions for different frame types
export const defaultSizes = {
    half: { width: 678, height: 908 },
    halfAuto: { width: 678, height: 908 },
    full: { width: 1376, height: 800 },
};

export function ImageFrame({ 
    src, 
    alt = "", 
    width, 
    height, 
    variant = "half"
}) {
    const size = {
        width: width ?? defaultSizes[variant].width,
        height: height ?? defaultSizes[variant].height,
    };

    return (
        <div className={frameStyles[variant]}>
            {src && (
                <Image 
                    src={src} 
                    alt={alt} 
                    width={size.width} 
                    height={size.height} 
                    className={layoutStyles.image} 
                />
            )}
        </div>
    );
}
