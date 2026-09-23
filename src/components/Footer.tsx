import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <Image src={logo} alt="Liga Coop" height={40} style={{ width: "auto" }} />
        <p>
          © {new Date().getFullYear()} {siteConfig.legalName}. Caxias do
          Sul/RS.
        </p>
      </div>
    </footer>
  );
}
