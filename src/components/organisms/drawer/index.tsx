import React from "react";
import { ANCHOR, Drawer as BaseDrawer, SIZE } from "baseui/drawer";
import { useRootDispatch, useRootSelector } from "../../../hooks";
import { closeDrawer, selectGlobal } from "../../../store/slices/global.slice";
import { useStyletron } from "baseui";
import config from "../../../config";
import { NavItemType } from "../../../types";
import {
  DrawerOverrides,
  StyledDrawerBody,
  StyledDrawerLink,
  StyledDrawerList,
  StyledDrawerListItem,
} from "./drawer.styles";
import SearchBox from "../../atoms/search-box";
import Link from "next/link";
import { useRouter } from "next/router";

function Drawer() {
  const [css, theme] = useStyletron();

  const dispatch = useRootDispatch();
  const { drawerOpen } = useRootSelector(selectGlobal);

  const router = useRouter();
  const goToLink = (slug: string) => {
    dispatch(closeDrawer());
    router?.push(`/${slug}`);
  };

  const navList = config.nav;

  return (
    <BaseDrawer
      isOpen={drawerOpen}
      onClose={() => dispatch(closeDrawer())}
      autoFocus
      anchor={ANCHOR.right}
      size={SIZE.full}
      overrides={DrawerOverrides}
    >
      <SearchBox />
      <StyledDrawerBody>
        <StyledDrawerList>
          {navList.map((item: NavItemType) => (
            <StyledDrawerListItem
              key={item.id}
              onClick={() => goToLink(item.slug)}
            >
              <StyledDrawerLink>{item.title}</StyledDrawerLink>
            </StyledDrawerListItem>
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
                  <span>Country/Region: International</span>
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
        </StyledDrawerList>
      </StyledDrawerBody>
    </BaseDrawer>
  );
}

export default Drawer;
