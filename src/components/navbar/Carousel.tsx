import cabines from "/images/cabines.jpg";
import cabine2 from "/images/cabine2.jpg";
import stand from "/images/stand.jpg";
import ImageSlider from "./ImageSlider";

const IMAGES = [cabines, cabine2, stand];

export default function Carousel() {
  return (
    <div className="pl-20 pr-20 max-w-[850px] w-full max-h-[500px] aspect-[8/6] m-auto">
      <ImageSlider autoSlide={true}>
        {IMAGES.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </ImageSlider>
    </div>
  );
}
