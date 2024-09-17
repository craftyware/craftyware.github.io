import Image from "next/image";
import logo from "@/assets/logo.png"

export default function Home() {
  return (
    <Image src={logo} alt="logo" style={{margin:"100px 5% auto 5%", width:"90%"}}/>
  )
}
