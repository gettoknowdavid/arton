import React from "react";
import { ANCHOR, Drawer as BaseDrawer, SIZE } from "baseui/drawer";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { closeDrawer, selectGlobal } from "../../../store/slices/global.slice";
import { useStyletron } from "baseui";
import config from "../../../config";
import { NavItemType } from "../../../types";
import { Input } from "baseui/input";
import { MagnifyingGlass } from "phosphor-react";

function Drawer() {
  const [css, theme] = useStyletron();
  const [value, setValue] = React.useState("");

  const navList = config.nav;

  const dispatch = useRootDispatch();
  const { drawerOpen } = useRootSelector(selectGlobal);

  return (
    <BaseDrawer
      isOpen={drawerOpen}
      onClose={() => dispatch(closeDrawer())}
      autoFocus
      anchor={ANCHOR.right}
      size={SIZE.full}
      overrides={{
        DrawerBody: {
          style: () => ({
            marginTop: "2.8125rem",
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
          }),
        },
      }}
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="WHAT ARE YOU LOOKING FOR?"
        startEnhancer={() => <MagnifyingGlass />}
        overrides={{
          InputContainer: {
            style: () => ({
              outline: `transparent solid`,
              backgroundColor: "transparent",
            }),
          },
          Input: {
            style: ({ $theme }) => ({
              ...$theme.typography.font200,
              outline: `transparent solid`,
              backgroundColor: "transparent",
            }),
          },
          Root: {
            style: () => ({
              // height: "3rem",
              paddingRight: ".75rem",
              paddingLeft: ".75rem",
              paddingTop: "0 1rem 0 2.8125rem",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "black",
              borderLeftWidth: 0,
              backgroundColor: "transparent",
              outline: `transparent solid`,
            }),
          },
          StartEnhancer: {
            style: () => ({
              paddingRight: 0,
              paddingLeft: 0,
              backgroundColor: "transparent",
            }),
          },
        }}
      />
      <div
        className={css({
          position: "relative",
          height: "100%",
          WebkitTransform: "translateX(0)",
          transform: "translateX(0)",
          overflow: "hidden",
          width: "200%",
          backgroundColor: theme.colors.white,
        })}
      >
        <ul
          className={css({
            display: "flex",
            margin: 0,
            WebkitBoxOrient: "vertical",
            WebkitBoxDirection: "normal",
            MsFlexDirection: "column",
            flexDirection: "column",
            MsFlexWrap: "nowrap",
            flexWrap: "nowrap",
            padding: "0",
            listStyle: "none",
            backgroundColor: "#fff",
          })}
        >
          {navList.map((item: NavItemType) => (
            <li
              key={item.id}
              className={css({
                borderBottomWidth: "0.063rem",
                borderBottomStyle: "solid",
                borderBottomColor: theme.colors.black,
                display: "list-item",
                textAlign: "left",
                height: "100%",
              })}
            >
              <a
                className={css({
                  ...theme.typography.font100,
                  lineHeight: "130%",
                  letterSpacing: ".05rem",
                  textTransform: "uppercase",
                  WebkitTransition: "-webkit-box-shadow .15s ease-out",
                  transition: "-webkit-box-shadow .15s ease-out",
                  WebkitBoxShadow: "0 0 0 0 #aaaaac",
                  boxShadow: "0 0 0 0 #aaaaac",
                  position: "relative",
                  MsFlexPack: "left",
                  justifyContent: "left",
                  WebkitBoxAlign: "center",
                  MsFlexAlign: "center",
                  alignItems: "center",
                  width: "100%",
                  padding: "0 .75rem",
                  height: "3.75rem",
                  color: "#000",
                  textAlign: "left",
                  border: "none",
                  background: "none",
                  textDecoration: "none",
                  display: "flex",
                })}
              >
                {item.title}
              </a>
            </li>
          ))}
          <li>
            <ul
              className={css({
                WebkitBoxOrient: "vertical",
                WebkitBoxDirection: "normal",
                MsFlexDirection: "column",
                flexDirection: "column",
                MsFlexWrap: "nowrap",
                flexWrap: "nowrap",
                padding: "0",
                listStyle: "none",
                backgroundColor: "#fff",
                marginTop: "1.75rem",
                marginBottom: "1.75rem",
                height: "auto",
                overflowY: "hidden",
                textTransform: "uppercase",
              })}
            >
              <li
                className={css({
                  marginTop: ".75rem",
                  marginRight: ".75rem",
                  marginLeft: ".75rem",
                })}
              >
                <a
                  className={css({
                    ...theme.typography.font100,
                    letterSpacing: ".05em",
                    textTransform: "uppercase",
                    height: "auto",
                    display: "inline-block",
                    width: "auto",
                    padding: "0",
                    margin: "0",
                  })}
                >
                  <span>LOGIN</span>
                </a>
              </li>
              <li
                className={css({
                  marginTop: ".75rem",
                  marginRight: ".75rem",
                  marginLeft: ".75rem",
                })}
              >
                <a
                  className={css({
                    ...theme.typography.font100,
                    letterSpacing: ".05em",
                    textTransform: "uppercase",
                    height: "auto",
                    display: "inline-block",
                    width: "auto",
                    padding: "0",
                    margin: "0",
                  })}
                >
                  <span>Country/Region: International Version</span>
                </a>
              </li>
              <li
                className={css({
                  marginTop: ".75rem",
                  marginRight: ".75rem",
                  marginLeft: ".75rem",
                })}
              >
                <a
                  className={css({
                    ...theme.typography.font100,
                    letterSpacing: ".05em",
                    textTransform: "uppercase",
                    height: "auto",
                    display: "inline-block",
                    width: "auto",
                    padding: "0",
                    margin: "0",
                  })}
                >
                  <span>Language: English</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </BaseDrawer>
  );
}

export default Drawer;
