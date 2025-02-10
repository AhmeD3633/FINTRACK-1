import React from "react";
import { motion, useInView } from "framer-motion";
import FacebookIcon from "../../assets/media/facebook (2).png";
import LinkedInIcon from "../../assets/media/linkedin (2).png";
import InstagramIcon from "../../assets/media/instagram.png";
import YoutubeIcon from "../../assets/media/youtube.png";

const Icons = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once

  const socialMediaData = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/18URNANfUz/",
      icon: FacebookIcon,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/fintrack.eg?igsh=aWhoZmh6d2x1czZu",
      icon: InstagramIcon,
    },
    // { name: "LinkedIn", url: "https://linkedin.com", icon: LinkedInIcon },
    {
      name: "YouTube",
      url: "https://youtube.com/@fintrackeg?si=bk4GUeM1UhEMI8Z9",
      icon: YoutubeIcon,
    },
  ];

  return (
    <div ref={ref} className="flex flex-wrap gap-10 justify-center p-4">
      {socialMediaData.map((social, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.2 }}
        >
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <img
              src={social.icon}
              alt={social.name}
              className="transition-transform transform"
            />
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Icons;
