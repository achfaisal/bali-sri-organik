import {
  YoutubeIcon,
  FacebookIcon,
  TwitterIcon,
} from "@/components/Icons/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-slate-700 p-10 text-white">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <TwitterIcon />
          </a>
          <a>
            <YoutubeIcon />
          </a>
          <a>
            <FacebookIcon />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - Bali Sri Organik</p>
      </aside>
    </footer>
  );
};

export default Footer;
