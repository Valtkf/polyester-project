import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState } from "react";

type ImageSliderProps = {
  imageUrls: string[];
};

export default function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="w-full h-full relative">
      <img
        src={imageUrls[imageIndex]}
        className="object-cover h-full w-full block"
      />
      <button className="block absolute top-0 bottom-0 left-0">
        <ArrowBigLeft style={{ color: "#fff" }} size={40} />
      </button>
      <button className="block absolute top-0 bottom-0 right-0 p-4">
        <ArrowBigRight style={{ color: "#fff" }} size={40} />
      </button>
    </div>
  );
}
