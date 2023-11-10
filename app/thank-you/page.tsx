import type { NextPage } from "next";
import Navigation from "@/components/Navigation";
const ThankYou: NextPage = () => {
  return (
    <>
      <Navigation />
      <h2>
        Thank you for your <br /> message
      </h2>
      <p>Check the console for your message 🙃</p>
    </>
  );
};
export default ThankYou;
