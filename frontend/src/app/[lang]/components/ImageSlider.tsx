"use client";
import { Slide } from "react-slideshow-image";
import { getStrapiMedia } from "../utils/api-helpers";

interface Image {
  id: number;
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    url: string;
  };
}

interface SlidShowProps {
  picture: {
    data: Image[];
  };
}
export default function Slideshow({ data }: { data: SlidShowProps }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="slide-container w-full ">
        <Slide
          duration={5000}
          canSwipe={true}
          autoplay={true}
          arrows={false}
          infinite
        >
          {data.picture.data.map((fadeImage: Image, index) => {
            const imageUrl = getStrapiMedia(fadeImage.attributes.url);
            return (
              <div key={index} className="w-full  aspect-[2/1] flex">
                {imageUrl && (
                  <img
                    className="w-full h-full object-cover "
                    alt="alt text"
                    src={imageUrl}
                  />
                )}
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
}
