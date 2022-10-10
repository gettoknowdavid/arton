import React from "react";
import Image from "next/image";
import { styled, useStyletron } from "baseui";
import { ImageType } from "../../../types";

export const StyledPImageList = styled("ul", ({ $theme }) => ({
  margin: 0,
  flexDirection: "row-reverse",
  listStyleType: "none",
  height: "80vh",
  width: "calc(((100% - 0px) / 1) - 0.5px)",
  float: "right",
  overflow: "auto",
  whiteSpace: "nowrap",
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  [$theme.mediaQuery.small]: { display: "none" },
  [$theme.mediaQuery.medium]: { display: "none" },
  [$theme.mediaQuery.large]: { display: "flex" },
}));

export const StyledPImageListItem = styled("li", () => ({
  aspectRatio: 12 / 16,
  height: "80vh",
  marginLeft: "1rem",
  position: "relative",
  width: "100%",
}));

type ProductPageImageListProps = {
  images: ImageType[];
};

function ProductPageImageList(props: ProductPageImageListProps) {
  const [css] = useStyletron();

  return (
    <StyledPImageList>
      {props.images.map((image) => {
        return (
          <StyledPImageListItem key={image.id}>
            <Image
              src={image.attributes.url}
              alt={image.attributes.alternativeText}
              className={css({ objectFit: "cover" })}
              layout={"fill"}
              priority
            />
          </StyledPImageListItem>
        );
      })}
    </StyledPImageList>
  );
}

export default ProductPageImageList;
