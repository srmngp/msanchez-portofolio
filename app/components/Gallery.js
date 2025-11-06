import Image from "next/image";

export function ImageFrame({ 
    src, 
    alt = "", 
    width = 678,
    height = 908,
    className
}) {
    return (
        <div className={className}>
            {src && (
                <Image 
                    src={src} 
                    alt={alt} 
                    width={width} 
                    height={height} 
                    className="w-full h-full object-cover"
                />
            )}
        </div>
    );
}
