import { Product } from "types";
import {
    Wallet,
    Gamepad2,
    PhoneCall,
    Earth,
    EuroIcon,
    WalletCards,
    Plane,
    Network,
    Monitor,
    LoaderIcon,
    IdCard,
    ShoppingBag
  } from "lucide-react";



  export const Products: Product[] = [
    {
      icon: Earth,
      Name: "Mobile data",
      href: "/User/Mobiledata"
    },
    {
      icon: PhoneCall,
      Name: "Airtime Topup",
      href: "/User/AirtimeTopup"
    },
    {
      icon: Gamepad2,
      Name: "Sport wallet Funding",
      href: "/User/Betting"
    },
    {
      icon: Monitor,
      Name: "Tv subscription",
      href: "/User/Tvsubscription"
    },
    {
      icon: IdCard,
      Name: "Bank Transfer",
      href: "/User/Transactions"
    },
    {
      icon: Network,
      Name: "Novatransfer",
      href: "/User/Wallet2wallet",
    },
    {
      icon: WalletCards,
      Name: "Education bills",
      href: "/User/Education"
    },
    {
      icon: ShoppingBag,
      Name: "Novamart",
      href: "/User/Xelviomart"
    },
    {
      icon: EuroIcon,
      Name: "Convert Currency",
      href: "/User/Convertmoney"
    },
    {
      icon: Plane,
      Name: "Travel Payment",
      href: "/User/Travel"
    },
    {
      icon: Wallet,
      Name: "Airtime to cash",
      href: "/User/Reward",
    },
    {
      icon: LoaderIcon,
      Name: "view More",
      href: "/User/More"
    },
  ]



