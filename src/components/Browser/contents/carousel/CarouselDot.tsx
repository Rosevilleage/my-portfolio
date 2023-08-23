import { BsDot } from "react-icons/bs";

interface CarouselDotProps {
  dotMaterials: {
    images: string[];
    currentIndex: number;
    dotHandler: (idx: number) => void;
  };
}

export default function CarouselDot({ dotMaterials }: CarouselDotProps) {
  const { images, currentIndex, dotHandler } = dotMaterials;
  return (
    <div className="flex items-center mx-auto w-max">
      {images.map((img, i) => (
        <div key={img + i}>
          <BsDot
            size={35}
            color={
              currentIndex === i + 1 ? "rgb(41, 41, 41)" : "rgb(177, 177, 177)"
            }
            onClick={() => dotHandler(i + 1)}
            className="cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}
