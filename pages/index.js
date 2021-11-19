import Image from "next/image";
import Logo from "../public/images/logo.jpg";

export default function Home() {
  return (
    <div>
      <h3>Home page</h3>
      <Image
          src={Logo}
          alt="ASF Logo"
          width={50}
          height={50}
          placeholder="blur"
          
        />
    </div>
  );
}
