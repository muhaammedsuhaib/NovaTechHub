// components/LogoSlider.js or components/LogoSlider.tsx
import './style.css'
const LogoSlider = () => {
    return (
      <div className="logos relative overflow-hidden">
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-transparent to-white"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-transparent to-white"></div>
        
        <div className="logo_items whitespace-nowrap animate-slides">
          {[...Array(25)].map((data,index) => (
            <img
              key={index}
              src="https://navneetdwivedi.github.io/Logo_Slider/logo.png"
              alt="Logo"
              className="inline-block max-h-16 mx-1"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default LogoSlider;
  