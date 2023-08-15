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
    rows: 1,
    slidesPerRow: 1,
  };
  return (
    <div className="relative" style={{ width: w, height: "max-content" }}>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={img} style={{ height: w / 3, width: w, margin: "auto" }}>
            <Image
              src={img}
              alt={`image${i}`}
              width={w}
              height={w / 3}
              style={{
                margin: "auto",
                borderRadius: "0.5rem",
              }}
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
