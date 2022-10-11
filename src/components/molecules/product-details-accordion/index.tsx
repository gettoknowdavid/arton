import React from "react";
import { Accordion, Panel } from "baseui/accordion";
import RichText from "../../atoms/rich-text";
import { ProductType } from "../../../types";

type Props = {
  product: ProductType;
};

function ProductDetailsAccordion(props: Props) {
  const { product } = props;
  return (
    <Accordion
      renderAll
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            marginTop: "2rem",
            borderTopWidth: `0.1px`,
            borderTopStyle: `solid`,
            borderTopColor: $theme.colors.mono600,
          }),
        },
        Content: {
          style: ({ $theme }) => ({
            ...$theme.typography.font100,
            paddingTop: 0,
            paddingBottom: "1.5rem",
            paddingLeft: ".75rem",
            paddingRight: ".75rem",
          }),
        },
        Header: {
          style: ({ $theme }) => ({
            ...$theme.typography.font100,
            textTransform: "uppercase",
            backgroundColor: `transparent`,
            paddingTop: "0.65rem",
            paddingRight: "0.5rem",
            paddingBottom: "0.65rem",
            paddingLeft: 0,
          }),
        },
        PanelContainer: {
          style: ({ $theme }) => ({
            backgroundColor: `transparent`,
            borderBottomColor: $theme.colors.mono600,
          }),
        },
      }}
    >
      <Panel title="Details">
        <RichText content={product.attributes.details} />
      </Panel>
      <Panel title="Care">
        <RichText content={product.attributes.care} />
      </Panel>
    </Accordion>
  );
}

export default ProductDetailsAccordion;
