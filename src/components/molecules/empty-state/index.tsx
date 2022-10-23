import React from "react";
import { ShoppingCart } from "phosphor-react";
import { useStyletron } from "baseui";

type EmptyStateProps = {
  icon?: React.ReactNode;
  content: string;
  height?: string;
};

function EmptyState(props: EmptyStateProps) {
  const [css, theme] = useStyletron();

  return (
    <div
      className={css({
        width: "100%",
        height: props.height ?? "calc(100vh - 2.8125rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      })}
    >
      {props.icon}
      <h1
        className={css({
          ...theme.typography.font400,
          fontWeight: 300,
          textTransform: "uppercase",
          letterSpacing: "1px",
          marginTop: "2rem",
          textAlign: "center",
          lineHeight: "2.4rem",
        })}
      >
        Oops...
        <br />
        {props.content}
      </h1>
    </div>
  );
}

export default EmptyState;
