import StripeCheckout from "react-stripe-checkout";

const KEY = "pk_test_51OdTsKGTY2nJebNQ5uMehiWidLMAMw7A20VNfvaowvYVtME32FaMwj7PtFZjCr98lREEhCAOgMc7UPBjpiWExSi800oMSHhWd3"

const Pay = () => {

    const onToken = (token) => {
        console.log(token)
    }

    return (
        < div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
            <StripeCheckout
                name="HUDEV Shop"
                image="https://avatars.githubusercontent.com/u/72237544?v=4" 
                billingAddress
                shippingAddress
                description="Seu total é R$ 20,00"
                amount={2000}
                token={onToken}
                stripeKey= {KEY}

            >
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                >
                    Pay Now
                </button>
            </StripeCheckout>
        </div>
    );
};

export default Pay;