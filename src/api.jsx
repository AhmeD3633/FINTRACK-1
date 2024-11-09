import axios from "axios";

export const fetchAllData = async () => {
  try {
    const [
      heroData,
      toolsAndSkillsData,
      socialMediaData,
      technicalSkills,
      services,
    ] = await Promise.all([
      axios.get("https://backend.omarbendary.com/api/head-section/"),
      axios.get("https://backend.omarbendary.com/api/tools-and-skills/"),
      axios.get("https://backend.omarbendary.com/api/social-media-platform/"),
      axios.get("https://backend.omarbendary.com/api/technical-skills/"),
      axios.get("https://backend.omarbendary.com/api/service/"),
    ]);
    return {
      heroData: heroData.data,
      toolsAndSkillsData: toolsAndSkillsData.data,
      socialMediaData: socialMediaData.data,
      technicalSkills: technicalSkills.data,
      services: services.data,
    };
  } catch (err) {
    console.log("Error fetching hero data:", err);
    throw err;
  }
};
