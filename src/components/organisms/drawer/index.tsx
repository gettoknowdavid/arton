import React from "react";
import { ANCHOR, Drawer as BaseDrawer, SIZE } from "baseui/drawer";
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
import { GlobalContext } from "../../../contexts/global.context";

function Drawer() {
  const { drawerOpen, closeDrawer } = React.useContext(GlobalContext);

  const router = useRouter();
  const goToLink = (slug: string) => {
    closeDrawer();
    router?.push(`/${slug}`);
  };

  return (
    <BaseDrawer
      isOpen={drawerOpen}
      onClose={closeDrawer}
      autoFocus
      anchor={ANCHOR.top}
      size={SIZE.full}
      overrides={DrawerOverrides}
    >
      <StyledDrawerBody>
        <StyledDrawerList>
          {config.nav.map((item: NavItemType) => (
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
