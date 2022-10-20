import React from "react";
import Image from "next/image";
import { CheckoutContext } from "../../../contexts/checkout.context";
import {
  Modal,
  ModalBody,
  ModalButton,
  ModalFooter,
  ModalHeader,
  ROLE,
  SIZE,
} from "baseui/modal";
import { CartActionType, CheckoutActionType } from "../../../types";
import { SIZE as BUTTON_SIZE } from "baseui/button";
import { CartContext } from "../../../contexts/cart.context";
import { useStyletron } from "baseui";
import { useRouter } from "next/router";
import Button from "../../atoms/button";

function CheckoutModal() {
  const [css, theme] = useStyletron();
  const { dispatch, state } = React.useContext(CheckoutContext);
  const { dispatch: cartDispatch, state: cartState } =
    React.useContext(CartContext);
  const router = useRouter();

  const checkout = () => {
    dispatch({ type: CheckoutActionType.CLOSE_CHECKOUT_MODAL });
    cartDispatch({ type: CartActionType.CLEAR_CART });
    router?.push("/");
  };

  return (
    <Modal
      onClose={checkout}
      closeable
      isOpen={true}
      // isOpen={state.modalOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
      overrides={{
        Dialog: {
          style: () => ({
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }),
        },
      }}
    >
      <ModalHeader>THANK YOU FOR YOUR ORDER</ModalHeader>
      <ModalBody>
        Your ordered items
        <ul className={css({ padding: 0, listStyleType: "none" })}>
          {cartState.items.map((item) => (
            <li key={item.id}>
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                })}
              >
                <div className={css({ display: "flex" })}>
                  <div
                    className={css({
                      height: "2.5rem",
                      width: "2.5rem",
                      position: "relative",
                      marginRight: "1rem",
                    })}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout={"fill"}
                      className={css({ objectFit: "contain" })}
                    />
                  </div>
                  <p
                    className={css({
                      display: "flex",
                      justifyContent: "space-between",
                    })}
                  >
                    {item.name}
                  </p>
                </div>
                <p
                  className={css({
                    display: "flex",
                    justifyContent: "space-between",
                  })}
                >
                  {`x${item.quantity}`}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button onClick={checkout}>Continue shopping</Button>
      </ModalFooter>
    </Modal>
  );
}

export default CheckoutModal;
