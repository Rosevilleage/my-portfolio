interface CarouselProps {
  images: string[];
  w: number;
}
import Image from "next/image";
import Slider from "react-slick";

export default function CarouserlSlide({ images, w }: CarouselProps) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div
            key={img}
            style={{
              width: w,
              height: w / 2,
            }}
          >
            <Image
              src={img}
              alt={`image${i}`}
              width={w / 1.3}
              height={w / 3}
              style={{ margin: "auto", borderRadius: "0.5rem" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
