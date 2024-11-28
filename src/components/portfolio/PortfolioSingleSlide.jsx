import { motion } from "framer-motion";
import googlePlay from "../../assets/media/Mask Group 51.png";
import appleStore from "../../assets/media/apple-store-icon-png-free-download-fourjayorg-app-store-icon-png-1000_736.png";

const PortfolioSingleSlide = ({ project }) => {
  const type = project.type;
  const websiteUrl = project.website_url;

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4 flex flex-col space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-medium leading-[56px] mb-2">
            {project.name}
          </h2>
          <h4 className="text-base md:text-lg text-[18px] font-semibold leading-7 text-[#5070D1]">
            Description:
          </h4>
          <p className="text-md md:text-lg font-normal">
            {project.description}
          </p>
          <h4 className="text-base md:text-lg text-[18px] font-semibold leading-7 text-[#5070D1]">
            Impact:
          </h4>
          <p className="text-md md:text-lg font-normal">{project.impact}</p>
          <h4 className="text-base md:text-lg text-[18px] font-semibold leading-7 text-[#5070D1]">
            View Live:
          </h4>
          {type === "web" ? (
            <motion.a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md md:text-lg font-normal text-[#8B6FC4] hover:text-[#6F42C1] cursor-pointer"
              whileHover={{ scale: 1.05, color: "#6F42C1" }}
              whileTap={{ scale: 0.95 }}
            >
              Click here to visit the website
            </motion.a>
          ) : (
            <div className="flex mt-4">
              <motion.a
                href={project.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={appleStore} alt="App Store" />
              </motion.a>
              <motion.a
                href={project.android}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={googlePlay} alt="Google Play" />
              </motion.a>
            </div>
          )}
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src={project.image}
            alt="BOGO Plus Mobile App"
            className="w-full rounded-lg object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSingleSlide;
