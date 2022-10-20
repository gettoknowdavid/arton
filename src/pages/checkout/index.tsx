import React, { ReactElement } from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import { useStyletron } from "baseui";
import FormControl from "../../components/atoms/form-control";
import Input from "../../components/atoms/input";
import { Block } from "baseui/block";
import Button from "../../components/atoms/button";
import { CartContext, totalAmount } from "../../contexts/cart.context";
import CartSummaryItem from "../../components/atoms/cart-summary-item";
import { PaymentCard, valid } from "baseui/payment-card";
import MaskedInput from "../../components/atoms/input/masked-input";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { validateEmail, validatePhone } from "../../lib/validators";
import BackButton from "../../components/atoms/back-button";
import { currency } from "../../lib/currency-formatter";
import { CheckoutActionType } from "../../types";
import { CheckoutContext } from "../../contexts/checkout.context";
import CheckoutModal from "../../components/molecules/checkout-modal";
import { SmileySad } from "phosphor-react";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
};

function Checkout() {
  const { state } = React.useContext(CartContext);
  const { dispatch } = React.useContext(CheckoutContext);

  const subtotal = totalAmount(state);
  const vat = totalAmount(state) * 0.2;
  const delivery = 50;
  const grandTotal = subtotal + vat + delivery;

  const [isDisabled, setIsDisabled] = React.useState(true);

  const [css, theme] = useStyletron();

  const [number, setNumber] = React.useState("");
  const [expiration, setExpiration] = React.useState("");
  const [code, setCode] = React.useState("");

  const { card, isValid: isCardValid } = valid.number(number);
  let codeLength;
  if (card && card.code && card.code.size) {
    codeLength = card.code.size;
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);

  React.useEffect(() => {
    if (
      !errors.name &&
      !errors.email &&
      !errors.phone &&
      !errors.address &&
      !errors.zip &&
      !errors.city &&
      !errors.country &&
      isCardValid &&
      code.trim().length === 3 &&
      expiration.trim().length !== 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [code, errors, expiration, isCardValid, setIsDisabled]);

  if (!state.items.length) {
    return (
      <div
        className={css({
          width: "100%",
          height: "calc(100vh - 2.8125rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        })}
      >
        <SmileySad size={60} weight={"duotone"} />
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
          No products in cart to checkout
        </h1>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={css({ position: "relative" })}
    >
      <CheckoutModal />
      <div
        className={css({
          zIndex: 90,
          position: "relative",
          marginTop: "2.8125rem",
          height: "2.8125rem",
          padding: "0.75rem 0.75rem",
          [theme.mediaQuery.large]: {
            position: "absolute",
            top: "2.8125rem",
            marginTop: 0,
            marginLeft: 0,
          },
        })}
      >
        <BackButton />
      </div>
      <FlexGrid
        flexGridColumnCount={[1, 1, 1, 2]}
        flexGridColumnGap={"1rem"}
        paddingTop={"5rem"}
        paddingRight={["0", "0", "7rem", "20rem"]}
        paddingBottom={"5rem"}
        paddingLeft={["0", "0", "7rem", "20rem"]}
      >
        <FlexGridItem>
          <div
            className={css({
              paddingTop: 0,
              paddingRight: "1rem",
              paddingBottom: 0,
              paddingLeft: "1rem",
              backgroundColor: "transparent",
              textAlign: "center",
              [theme.mediaQuery.large]: {
                textAlign: "left",
                backgroundColor: "rgba(225,225,225,0.15)",
                marginBottom: "1rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              },
            })}
          >
            <h1
              className={css({
                ...theme.typography.font400,
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                margin: 0,
                [theme.mediaQuery.large]: { margin: "initial" },
              })}
            >
              Checkout
            </h1>
          </div>
          <div
            className={css({
              paddingTop: "1rem",
              paddingRight: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "1rem",
              backgroundColor: "transparent",
              [theme.mediaQuery.large]: {
                marginBottom: "1rem",
                backgroundColor: "rgba(225,225,225,0.15)",
              },
            })}
          >
            <div>
              <h2
                className={css({
                  ...theme.typography.font100,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  margin: 0,
                })}
              >
                Billing Details
              </h2>
              <FlexGrid
                flexGridColumnCount={[1, 1, 2, 2]}
                flexGridColumnGap={"1rem"}
                paddingTop={"0.7rem"}
              >
                <FlexGridItem>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <FormControl
                        label={() => field.name}
                        error={errors.name ? "Name is required" : ""}
                      >
                        <Input placeholder={"John Doe"} {...field} />
                      </FormControl>
                    )}
                  />
                </FlexGridItem>
                <FlexGridItem>
                  <Controller
                    name={"email"}
                    control={control}
                    defaultValue=""
                    rules={{ required: true, validate: validateEmail }}
                    render={({ field }) => (
                      <FormControl
                        label={() => field.name}
                        error={errors.email ? "Valid email is required" : ""}
                      >
                        <Input placeholder={"johndoe@mail.com"} {...field} />
                      </FormControl>
                    )}
                  />
                </FlexGridItem>
                <FlexGridItem>
                  <Controller
                    name={"phone"}
                    control={control}
                    defaultValue={""}
                    rules={{ required: true, validate: validatePhone }}
                    render={({ field }) => (
                      <FormControl
                        label={() => field.name}
                        error={
                          errors.phone
                            ? "Valid Nigerian phone number required"
                            : ""
                        }
                      >
                        <Input placeholder={"+234 812 3456 789"} {...field} />
                      </FormControl>
                    )}
                  />
                </FlexGridItem>
              </FlexGrid>
            </div>

            <div className={css({ marginTop: "1rem" })}>
              <h2
                className={css({
                  ...theme.typography.font100,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  margin: 0,
                })}
              >
                Shopping Info
              </h2>

              <Block paddingTop={"0.7rem"}>
                <Controller
                  name={"address"}
                  control={control}
                  defaultValue={""}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormControl
                      label={() => field.name}
                      error={errors.address ? "Address is required" : ""}
                    >
                      <Input placeholder={"123 John Doe Avenue"} {...field} />
                    </FormControl>
                  )}
                />

                <FlexGrid
                  flexGridColumnCount={[1, 1, 2, 2]}
                  flexGridColumnGap={"1rem"}
                >
                  <FlexGridItem>
                    <Controller
                      name={"zip"}
                      control={control}
                      defaultValue={""}
                      rules={{
                        required: true,
                        pattern: {
                          value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                          message: "Invalid ZIP Code",
                        },
                      }}
                      render={({ field }) => (
                        <FormControl
                          label={() => field.name}
                          error={errors.zip ? "Valid ZIP code is required" : ""}
                        >
                          <Input placeholder={"123456"} {...field} />
                        </FormControl>
                      )}
                    />
                  </FlexGridItem>
                  <FlexGridItem>
                    <Controller
                      name={"city"}
                      control={control}
                      defaultValue={""}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <FormControl
                          label={() => field.name}
                          error={errors.city ? "City is required" : ""}
                        >
                          <Input placeholder={"Lagos"} {...field} />
                        </FormControl>
                      )}
                    />
                  </FlexGridItem>
                  <FlexGridItem>
                    <Controller
                      name={"country"}
                      control={control}
                      defaultValue={""}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <FormControl
                          label={() => field.name}
                          error={errors.country ? "Country is required" : ""}
                        >
                          <Input placeholder={"Nigeria"} {...field} />
                        </FormControl>
                      )}
                    />
                  </FlexGridItem>
                </FlexGrid>
              </Block>
            </div>

            <div className={css({ marginTop: "1rem" })}>
              <h2
                className={css({
                  ...theme.typography.font100,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginTop: 0,
                  marginBottom: "1rem",
                })}
              >
                Payment Info
              </h2>
              <div className={css({ display: "flex" })}>
                <FormControl
                  caption="Card number"
                  width={"100%"}
                  error={!valid ? "Valid card number is required" : ""}
                >
                  <PaymentCard
                    error={!valid}
                    value={number}
                    onChange={(e) => setNumber(e.currentTarget.value)}
                    placeholder="Card number"
                    overrides={{
                      Input: {
                        style: ({ $theme }) => ({
                          ...$theme.typography.font100,
                        }),
                      },
                    }}
                  />
                </FormControl>
                <FormControl
                  caption="Expiration date"
                  width={"14rem"}
                  error={!valid ? "Valid date is required" : ""}
                >
                  <MaskedInput
                    value={expiration}
                    onChange={(e) => setExpiration(e.currentTarget.value)}
                    placeholder="MM/YY"
                    mask="99/99"
                  />
                </FormControl>
                <FormControl caption="CVC" width={"10rem"} marginRight={0}>
                  <MaskedInput
                    value={code}
                    onChange={(event) => setCode(event.currentTarget.value)}
                    placeholder="CVC"
                    mask={codeLength ? "9".repeat(codeLength) : "999"}
                  />
                </FormControl>
              </div>
            </div>
          </div>
        </FlexGridItem>
        <FlexGridItem
          maxWidth={["100%", "100%", "100%", "30rem"]}
          width={"100%"}
          height={"100%"}
          backgroundColor={"rgba(225,225,225,0.2)"}
          paddingTop={"1rem"}
          paddingRight={"1rem"}
          paddingBottom={"2rem"}
          paddingLeft={"1rem"}
        >
          <div>
            <h1
              className={css({
                ...theme.typography.font400,
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                margin: 0,
                paddingBottom: "1rem",
                borderBottom: `1px solid ${theme.colors.mono400}`,
              })}
            >
              Summary
            </h1>
            <ul className={css({ padding: 0 })}>
              {state.items.map((item) => (
                <CartSummaryItem key={item.id} item={item} />
              ))}
            </ul>

            <div
              className={css({
                paddingBottom: "1rem",
                marginBottom: "2rem",
                borderBottom: `1px solid ${theme.colors.mono400}`,
              })}
            >
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                })}
              >
                <p
                  className={css({
                    ...theme.typography.font200,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBlock: "0.1rem",
                  })}
                >
                  Sub-total
                </p>
                <p
                  className={css({
                    ...theme.typography.font300,
                    fontWeight: 600,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBlock: "0.1rem",
                  })}
                >
                  {currency.format(subtotal)}
                </p>
              </div>
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                })}
              >
                <p
                  className={css({
                    ...theme.typography.font200,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBlock: "0.1rem",
                  })}
                >
                  VAT (Included)
                </p>
                <p
                  className={css({
                    ...theme.typography.font300,
                    fontWeight: 600,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBlock: "0.1rem",
                  })}
                >
                  {currency.format(vat)}
                </p>
              </div>
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                })}
              >
                <p
                  className={css({
                    ...theme.typography.font200,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBlock: "0.1rem",
                  })}
                >
                  Delivery
                </p>
                <p
                  className={css({
                    ...theme.typography.font300,
                    fontWeight: 600,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBlock: "0.1rem",
                  })}
                >
                  {currency.format(delivery)}
                </p>
              </div>
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                })}
              >
                <p
                  className={css({
                    ...theme.typography.font200,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBlock: "0.75rem",
                  })}
                >
                  Grand Total
                </p>
                <p
                  className={css({
                    ...theme.typography.font400,
                    fontWeight: 600,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBlock: "0.75rem",
                  })}
                >
                  {currency.format(grandTotal)}
                </p>
              </div>
            </div>
            <Button
              type={"submit"}
              disabled={isDisabled}
              onClick={() => {
                dispatch({ type: CheckoutActionType.TOGGLE_CHECKOUT_MODAL });
              }}
            >
              Proceed to Pay
            </Button>
          </div>
        </FlexGridItem>
      </FlexGrid>
    </form>
  );
}

export default Checkout;

Checkout.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SEO title={"Checkout"} description={""} />
      <Layout>{page}</Layout>
    </>
  );
};
