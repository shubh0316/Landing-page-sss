import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FC } from "react";
import { CiLinkedin } from "react-icons/ci";

const Footer: FC = () => {
  return (
    <footer>
      <>
      <div className="w-full text-black"></div>
      <div className="flex flex-row justify-between text-white bg-black p-10">
        <h1>shubhanker portfolio</h1>
        <h1>All Copyrights are reserved</h1>
        <h1 className="w-40 h-20"><CiLinkedin /></h1>
      </div>
      </>
    </footer>
  );
};

export default Footer;