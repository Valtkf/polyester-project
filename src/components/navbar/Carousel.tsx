import cabines from "../../../images/cabines.jpg";
import stand from "../../../images/stand.jpg";
import ImageSlider from "./ImageSlider";

const IMAGES = [cabines, stand];
export default function Carousel() {
  return (
    <div className=" max-w-[1200px] w-full max-h-[500px] aspect-[8/6] m-auto">
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}
