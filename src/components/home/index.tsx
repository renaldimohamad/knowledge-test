import {Container} from "react-bootstrap"
import {HeaderSection} from "../../pages/home/header-section"
import {LogoRow} from "../../pages/home/logo-row"
import {CardCarousel} from "../../pages/home/card-carousel"

const Index = () => {
   const logoRow = [
      {
         photos:
            "https://seeklogo.com/images/S/sotreq-logo-BAB24615EB-seeklogo.com.png",
      },
      {
         photos:
            "https://images.seeklogo.com/logo-png/43/1/canva-logo-png_seeklogo-438258.png?v=638686986770000000",
      },
      {
         photos:
            "https://seeklogo.com/images/L/Lionsgate-logo-B8E4F63078-seeklogo.com.png",
      },
      {
         photos:
            "https://seeklogo.com/images/O/Oxy_Mentholatum-logo-912BBAED5C-seeklogo.com.gif",
      },
      {
         photos:
            "https://images.seeklogo.com/logo-png/52/1/asana-logo-png_seeklogo-525124.png?v=638685992160000000",
      },
      {
         photos:
            "https://seeklogo.com/images/E/elo-servicos-sa-logo-3CAEF69C1F-seeklogo.com.png",
      },
      {
         photos:
            "https://seeklogo.com/images/G/glossier-logo-B9986A0849-seeklogo.com.png",
      },
   ]

   const cardContent = [
      {
         id: 1,
         src: "https://seeklogo.com/images/S/sotreq-logo-BAB24615EB-seeklogo.com.png",
         alt: "Third slide",
         title: "Streamline Your Teamwork",
         content:
            "Easily organize tasks, share updates, and collaborate with your team in one place. Boost productivity with real-time tracking and seamless integration.",
      },
      {
         id: 2,
         src: "https://images.seeklogo.com/logo-png/43/1/canva-logo-png_seeklogo-438258.png?v=638686986770000000",
         alt: "Third slide",
         title: "Design with Ease",
         content:
            "Create stunning visuals effortlessly using tools like Canva. Simplify your design process and unlock creativity with ready-to-use templates.",
      },
      {
         id: 3,
         src: "https://seeklogo.com/images/G/glossier-logo-B9986A0849-seeklogo.com.png",
         alt: "Third slide",
         title: "  Elevate Your Workflow",
         content:
            "Enhance your brand’s visibility and engage with your audience through Glossier’s innovative tools. Build trust, connect, and grow.",
      },
      {
         id: 4,
         src: "https://seeklogo.com/images/G/glossier-logo-B9986A0849-seeklogo.com.png",
         alt: "Third slide",
         title: "Collaborate with your team",
         content:
            "Combine powerful tools like Slack and Jira to achieve new heights in efficiency. Simplify project management and stay on top of deadlines.",
      },
   ]

   return (
      <div className="text-center d-flex flex-column">
         <HeaderSection />
         <LogoRow logoRow={logoRow} />
         <Container>
            <CardCarousel cardContent={cardContent} />
         </Container>
      </div>
   )
}

export default Index
