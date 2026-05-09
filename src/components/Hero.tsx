import hero from "../assets/hero.png";
import { AspectRatio } from "./ui/aspect-ratio";

const Hero = () => {
    return (
        <AspectRatio ratio={16 / 6}>
            <img
                src={hero}
                alt="burger and fries background"
                className="w-full h-full object-cover"
                fetchPriority="high"
            />
        </AspectRatio>
    );
};

export default Hero;
