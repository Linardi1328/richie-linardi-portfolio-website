import Image from "next/image";
import {
  portfolioPhotos,
  type PortfolioPhotoId,
} from "@/data/portfolio-photos";

export function PortfolioPhotograph({
  photo,
  preload = false,
  className = "",
}: {
  photo: PortfolioPhotoId;
  preload?: boolean;
  className?: string;
}) {
  const item = portfolioPhotos[photo];

  return (
    <figure className={`portfolio-photograph ${className}`}>
      <Image
        alt={item.alt}
        height={item.height}
        preload={preload}
        sizes="(min-width: 900px) 32vw, 92vw"
        src={item.src}
        width={item.width}
      />
      <figcaption>{item.caption}</figcaption>
    </figure>
  );
}
