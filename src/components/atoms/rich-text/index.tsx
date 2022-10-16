import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { useStyletron } from "baseui";

type RichTextProps = {
  content: any;
};

function RichText(props: RichTextProps) {
  const [css] = useStyletron();

  return (
    <ReactMarkdown
      className={css({
        fontWeight: 300,
        margin: 0,
        padding: 0,
      })}
      components={{
        p({ children }) {
          return <p className={css({ margin: 0 })}>{children}</p>;
        },
        ul({ children }) {
          return (
            <ul
              className={css({
                listStyleType: '"-  "',
                margin: 0,
                paddingBlock: 0,
                paddingLeft: "0.5rem",
              })}
            >
              {children}
            </ul>
          );
        },
      }}
    >
      {props.content}
    </ReactMarkdown>
  );
}

export default RichText;
