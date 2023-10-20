import AnimatedText from "@component/components/AnimatedText"
import Container from "@component/components/container";
import Skills from "../skills/skills";

const About = () => {
    return (
     
      <Container>  
       <main className="flex flex-col items-center justify-center self-center p-2.5">
         <AnimatedText text={"Passion Fuels Purpose!"} className="text-8xl text-center" />
         <div className="uppercase text-lg font-semibold">
         BIOGRAPHY
         </div>
         <div className="text-lg text-center py-4">
         I am a passionate computer science graduate with a B.Tech degree, specializing in web development and software development from the ground up. With a strong foundation in various programming languages and frameworks, I bring a wealth of experience to the table. I excel in crafting stunning landing pages infused with captivating animations, creating immersive user experiences that leave a lasting impression. My versatility extends across the tech stack, allowing me to adapt seamlessly to any projects requirements. I am committed to delivering innovative and high-quality solutions, and I look forward to contributing my skills to your next web or software development endeavor.
         </div>
       </main>
       <Skills />
       </Container>
      
 )
}


export default About;