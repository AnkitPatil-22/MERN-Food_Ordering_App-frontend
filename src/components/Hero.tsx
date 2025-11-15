import hero from "../assets/hero.png";

const Hero = () => {
    return (
        <div>
            <img
                src={hero}
                alt="burger and fries background"
                className="w-full max-h-[600 px] object-cover"
            />
        </div>
    );
};

export default Hero;
