import React from "react";
import { ANCHOR, Drawer as BaseDrawer, SIZE } from "baseui/drawer";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { closeDrawer, selectGlobal } from "../../../store/slices/global.slice";
import { useStyletron } from "baseui";
import config from "../../../config";
import { NavItemType } from "../../../types";
import NavItem from "../../atoms/nav-item";

function Drawer() {
  const [css, theme] = useStyletron();

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
            height: "100%",
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
                })}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </BaseDrawer>
  );
}

export default Drawer;
