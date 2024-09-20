import HeroSection from "./components/homeComponents/HeroSection";
import Section from "./components/homeComponents/Section";
import OurValueSection from "./components/homeComponents/OurValueSection";

const welcomeSectionContent = {
  bgColor: "bg-[#E7E6EE]",
  heading: "Welcome to mobiz technologies",
  description:
    "We are a leading provider of custom software development, mobile application development, and digital transformation services, headquartered in Kerala, India, with a growing presence in the UAE. Our expertise extends globally, serving clients across diverse industries.",
  imagePath: "/images/welcome-section-img.svg",
  imgWidth: 5760,
  imgHeight: 3840,
  altText: "welcome section image",
  flexDirection: "lg:flex-row-reverse",
  imgAlign: "mr-auto",
};

const whatWeDoContent = {
  bgColor: "bg-white",
  heading: "What We Do",
  description:
    "At Mobiz, we specialize in creating customized solutions that cater to the unique needs of each client. Whether your goal is to streamline internal operations, enhance customer service, manage sales and collections, monitor and manage teams, or introduce new digital products, we offer the expertise to help you succeed.",
  imagePath: "/images/whatWe-sec-img.svg",
  imgWidth: 5374,
  imgHeight: 3583,
  altText: "why us section image",
  flexDirection: "lg:flex-row",
  imgAlign: "ml-auto",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Section {...welcomeSectionContent} />
      <Section {...whatWeDoContent}></Section>
      <OurValueSection />
    </main>
  );
}
