"use client"

import { ImageFrame } from "../../../components/Gallery";
import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";

export default function HeartOfGold() {

  const getGallerySectionStyle = () => "flex flex-col items-center gap-10 py-6";
  const getGalleryContainerStyle = () => "flex flex-col items-center gap-[40px] w-full";

  const getSplitRowStyle = () => "flex flex-col md:flex-row items-center justify-center gap-[40px] w-full max-w-[1374px] h-[940px]";
  const getFullRowStyle = () => "w-full max-w-[1376px]";

  const getFullFrameStyle = (height) => `w-full max-w-[1376px] overflow-hidden h-[${height}px]`;
  const getLeftFrameStyle = () => "w-[666px] h-[940px] overflow-hidden";
  const getRightFrameStyle = () => "w-[678px] h-[940px] overflow-hidden";

  const gallery = (
    <section className={getGallerySectionStyle()}>
      <div className={getGalleryContainerStyle()}>

        <div className={getFullRowStyle()}>
          <ImageFrame
            src="/design-projects/heart-of-gold/imagen1_hog.png"
            alt="heart-of-gold-1"
            width={1376}
            height={800}
            className={getFullFrameStyle(800)}
          />
        </div>

        <div className={getSplitRowStyle()}>
          <ImageFrame
            src="/design-projects/heart-of-gold/imagen2_hog.png"
            alt="heart-of-gold-2"
            width={666}
            height={940}
            className={getLeftFrameStyle()}
          />
          <ImageFrame
            src="/design-projects/heart-of-gold/imagen3_hog.png"
            alt="heart-of-gold-3"
            width={678}
            height={940}
            className={getRightFrameStyle()}
          />
        </div>

        <div className={getSplitRowStyle()}>
          <ImageFrame
            src="/design-projects/heart-of-gold/imagen4_hog.png"
            alt="heart-of-gold-4"
            width={666}
            height={940}
            className={getLeftFrameStyle()}
          />
          <ImageFrame
            src="/design-projects/heart-of-gold/imagen5_hog.png"
            alt="heart-of-gold-5"
            width={678}
            height={940}
            className={getRightFrameStyle()}
          />
        </div>

        <div className={getFullRowStyle()}>
          <ImageFrame
            src="/design-projects/heart-of-gold/imagen6_hog.png"
            alt="heart-of-gold-6"
            width={1376}
            height={950}
            className={getFullFrameStyle(950)}
          />
        </div>

        <div className={getFullRowStyle()}>
          <ImageFrame
            src="/design-projects/heart-of-gold/imagen7_hog.png"
            alt="heart-of-gold-7"
            width={1376}
            height={950}
            className={getFullFrameStyle(950)}
          />
        </div>

      </div>
    </section>
  )

  return (
    <ProjectDetails
      image="/design-projects/heart-of-gold/portada_hog.png"
      title="Heart of Gold Hostel"
      description={[
        "As part of a practical exercise, I selected the hostel where I previously worked to design and develop new graphic and branding materials based on their existing corporate identity.",
        "My role as a Graphic Designer involved research, Adobe Suite, Figma, branding, and UI design. The outcome was a refreshed visual identity and communication assets that enhanced the hostel's visibility and strengthened guest engagement.",
        "2024"
      ]}
      galleryComponent={gallery}
      footer={
        <ProjectFooter
          sections={{
            "Agency": ["Contenedor Cultural"],
            "Creative director": ["Agustin Linares"],
            "Designer": ["Maria Sanchez", "Lola Palacios", "Una mas"],
            "Location": ["Berlin, Germany"]
          }}
        />
      }
    />
  )
}
