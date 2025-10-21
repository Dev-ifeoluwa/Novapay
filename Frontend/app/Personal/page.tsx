import Footer from "components/BusinessComponent/Footer";
import Navbar from "components/BusinessComponent/Navbar";
import BankWith from "components/PersonalComponent/BankWith";
import Benefit from "components/PersonalComponent/Benefit";
import Hero from "components/PersonalComponent/Hero";
import Payment from "components/PersonalComponent/Payment";
import PersonalAccount from "components/PersonalComponent/PersonalAccount";

export default function PersonalPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <BankWith />
      <Benefit />
      <PersonalAccount />
      <Payment />
      <Footer />
    </>
  );
}
