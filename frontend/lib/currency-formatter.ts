export const currencyFormatter = (locale: string = "en-US") => {
    return new Intl.NumberFormat(locale, {style: "currency", currency: "USD"});
}