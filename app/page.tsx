// import HeroSection from "./components/homeComponents/HeroSection";
import Section from "./components/homeComponents/Section";
import OurValueSection from "./components/homeComponents/OurValueSection";
import { LampEffect } from "./components/homeComponents/LampEffect";

const welcomeSectionContent = {
  bgColor: "bg-[#E7E6EE]",
  heading: "Welcome to Mobiz Technologies",
  description: (
    <>
      We are a leading provider of custom software development, mobile
      application development, and digital transformation services,
      headquartered in Kerala, India, with a growing presence in the UAE. Our
      expertise extends globally, serving clients across diverse industries. At
      Mobiz, we help businesses of all sizes turn their ideas into reality,
      delivering innovative digital solutions tailored to meet their unique
      needs. With a team of highly skilled professionals, we offer scalable,
      secure, and reliable software solutions, from enterprise-level systems to
      specialized applications, empowering our clients to achieve their goals
      with confidence.
    </>
  ),
  imagePath: "/images/welcome-section-image.svg",
  imgWidth: 641,
  imgHeight: 515,
  altText: "welcome section image",
  flexDirection: "lg:flex-row-reverse",
  imgAlign: "mr-auto",
};

const pDescription = (
  <>
    At Mobiz, we specialize in creating customized solutions that cater to the
    unique needs of each client. Whether your goal is to streamline internal
    operations, enhance customer service, manage sales and collections, monitor
    and manage teams, or introduce new digital products, we offer the expertise
    to help you succeed. Our team of seasoned professionals is passionate about
    technology and committed to delivering high-quality solutions that exceed
    expectations.
    <br />
    <br />
    We take pride in our attention to detail, our ability to stay ahead of
    industry trends and best practices, and our unwavering dedication to
    providing exceptional customer service. At Mobiz, our primary goal is to
    deliver software solutions tailored to the specific needs of our clients.
    With a strong commitment to quality, reliability, and customer satisfaction,
    Mobiz is the top choice for businesses seeking custom development services.
  </>
);
const whatWeDoContent = {
  bgColor: "bg-white",
  heading: "What We Do",
  description: pDescription,
  imagePath: "/images/whatWe-section-image.svg",
  imgWidth: 641,
  imgHeight: 515,
  altText: "why us section image",
  flexDirection: "lg:flex-row",
  imgAlign: "ml-auto",
};

export default function Home() {
  return (
    <main className="pt-4">
      <div className="-z-40">
        <LampEffect />
      </div>

      <Section {...welcomeSectionContent} />
      <Section {...whatWeDoContent}></Section>
      <OurValueSection />
    </main>
  );
}
