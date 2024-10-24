import {
  YoutubeIcon,
  FacebookIcon,
  TwitterIcon,
} from "@/components/Icons/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-slate-700 p-4 text-white">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Bali
          Sri Organik
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
