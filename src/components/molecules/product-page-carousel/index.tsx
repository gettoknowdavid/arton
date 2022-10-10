import React from "react";
import { Block } from "baseui/block";
import { CaretLeft, CaretRight } from "phosphor-react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { useStyletron } from "baseui";
import { ImageType } from "../../../types";

type Props = {
  images: ImageType[];
};

function ProductPageCarousel(props: Props) {
  const [css, theme] = useStyletron();

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      dynamicHeight
      renderArrowPrev={(clickHandler: () => void, hasPrev: boolean) =>
        hasPrev && (
          <Block
            onClick={clickHandler}
            className={css({
              position: "absolute",
              zIndex: 2,
              top: "calc(50% - 15px)",
              height: "1.75rem",
              width: "1.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              cursor: "pointer",
              left: 0,
            })}
          >
            <CaretLeft />
          </Block>
        )
      }
      renderArrowNext={(clickHandler: () => void, hasNext: boolean) =>
        hasNext && (
          <Block
            onClick={clickHandler}
            className={css({
              position: "absolute",
              zIndex: 2,
              top: "calc(50% - 15px)",
              height: "1.75rem",
              width: "1.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              cursor: "pointer",
              right: 0,
            })}
          >
            <CaretRight />
          </Block>
        )
      }
      className={css({
        [theme.mediaQuery.small]: { display: "initial" },
        [theme.mediaQuery.medium]: { display: "initial" },
        [theme.mediaQuery.large]: { display: "none" },
      })}
    >
      {props.images.map((image) => (
        <div
          key={image.id}
          className={css({
            position: "relative",
            width: "100%",
            [theme.mediaQuery.small]: { height: "60vh" },
            [theme.mediaQuery.medium]: { height: "85vh" },
            [theme.mediaQuery.large]: { height: "100%" },
          })}
        >
          <Image
            src={image.attributes.url}
            alt={image.attributes.alternativeText}
            layout={"fill"}
            className={css({ objectFit: "cover" })}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default ProductPageCarousel;
