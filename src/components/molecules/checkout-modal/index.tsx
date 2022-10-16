import React from "react";
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
import { BUTTON_KIND } from "baseui/message-card";
import { CartContext } from "../../../contexts/cart.context";

function CheckoutModal() {
  const { dispatch, state } = React.useContext(CheckoutContext);
  const { dispatch: cartDispatch } = React.useContext(CartContext);

  return (
    <Modal
      onClose={() => {
        dispatch({ type: CheckoutActionType.CLOSE_CHECKOUT_MODAL });
        cartDispatch({ type: CartActionType.CLEAR_CART });
      }}
      closeable
      isOpen={state.modalOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
    >
      <ModalHeader>Hello world</ModalHeader>
      <ModalBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
        faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
      </ModalBody>
      <ModalFooter>
        <ModalButton kind={BUTTON_KIND.tertiary}>Cancel</ModalButton>
        <ModalButton>Okay</ModalButton>
      </ModalFooter>
    </Modal>
  );
}

export default CheckoutModal;
