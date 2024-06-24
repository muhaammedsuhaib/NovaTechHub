// components/LogoSlider.js or components/LogoSlider.tsx
import './style.css'
const LogoSlider = () => {
    return (
      <div className="logos relative overflow-hidden">
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-transparent to-white"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-transparent to-white"></div>
        
        <div className="logo_items whitespace-nowrap animate-slides">
          {[...Array(95)].map((data,index) => (
            <button key={index}  type="button"
                  className="bg-gray-800 p-2 text-gray-400 hover:text-white hover:bg-slate-400">JavaScript </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default LogoSlider;
  