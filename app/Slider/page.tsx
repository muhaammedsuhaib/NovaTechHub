// components/LogoSlider.js or components/LogoSlider.tsx
import './style.css'
const LogoSlider = () => {
    return (
      <div className="logos relative overflow-hidden bg-black">
        <div className="absolute top-0 left-0 w-16 h-full bg-transparent from-transparent to-white"></div>
        <div className="absolute top-0 right-0 w-16 h-full to-white"></div>
        
        <div className="logo_items whitespace-nowrap animate-slides">
          {[...Array(95)].map((data,index) => (
            <button key={index}  type="button"
                  className="p-2 text-gray-300 hover:text-black hover:bg-white">JavaScript </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default LogoSlider;
  