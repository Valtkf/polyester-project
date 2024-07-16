import street from "/images/street.jpeg";
import street2 from "/images/street2.jpg";
import lights from "/images/lights.jpg";
import ImageSlider from "./ImageSlider";

const IMAGES = [street, street2, lights];

export default function Carousel() {
  return (
    <div className="pl-6 pr-6 max-w-[720px] w-full max-h-[500px] aspect-[8/6] m-auto mb-4">
      <ImageSlider autoSlide={true}>
        {IMAGES.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </ImageSlider>
    </div>
  );
}
