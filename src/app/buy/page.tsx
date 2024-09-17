import Script from "next/script";

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }

export default function BuyPage() {
    return (<>
        <Script src="https://js.stripe.com/v3/pricing-table.js"/>
        <stripe-pricing-table 
            pricing-table-id="prctbl_1Q01usK7NOkvCxw733zOzSvX"
            publishable-key="pk_test_51PzzwGK7NOkvCxw7SGP58uFx2i0xMCNdxakFwhC89BdFQm7MqnrcEwATLreris4tOAzswACBfndDoVaD5xXZsEhT00CK0RgWfN"
        />
    </>)
}