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
  StyledDrawerExtraLink,
  StyledDrawerExtraList,
  StyledDrawerExtraListItem,
  StyledDrawerLink,
  StyledDrawerList,
  StyledDrawerListItem,
} from "./drawer.styles";
import SearchBox from "../../atoms/search-box";
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
      anchor={ANCHOR.top}
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

          {/*Extra List*/}
          <li>
            <StyledDrawerExtraList>
              <StyledDrawerExtraListItem>
                <StyledDrawerExtraLink>
                  <span>LOGIN</span>
                </StyledDrawerExtraLink>
              </StyledDrawerExtraListItem>
              <StyledDrawerExtraListItem>
                <StyledDrawerExtraLink>
                  <span>Country/Region: International</span>
                </StyledDrawerExtraLink>
              </StyledDrawerExtraListItem>
              <StyledDrawerExtraListItem>
                <StyledDrawerExtraLink>
                  <span>Language: English</span>
                </StyledDrawerExtraLink>
              </StyledDrawerExtraListItem>
            </StyledDrawerExtraList>
          </li>
        </StyledDrawerList>
      </StyledDrawerBody>
    </BaseDrawer>
  );
}

export default Drawer;
