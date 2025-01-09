import imgBg from '../assets/the first eleven.jpg'

const Theme = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-red-600" />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={imgBg} 
          alt="Soccer ball on field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Black overlay */}
      </div>
      
      {/* 3D Text Container */}
      <div className="relative h-full flex items-center justify-center">
        {/* First text layer - "behind" effect */}
        <div className="absolute text-center transform -translate-y-8">
          <h2 className="text-[12vw] font-extrabold leading-none tracking-tighter opacity-70">
            <span className="block text-red-500">
              PLAY HARD
            </span>
            <span className="block text-green-500">
              DREAM BIG
            </span>
          </h2>
        </div>
        
        {/* Ball image overlay - middle layer */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="relative w-[40vw] h-[40vw]">
            <img 
              src={imgBg} 
              alt="Soccer ball detail"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        {/* Main text layer - "front" effect */}
        <div className="text-center transform perspective">
          <h2 className="text-[12vw] font-extrabold leading-none tracking-tighter text-shadow-3d">
            <span className="block text-white">
              PLAY HARD
            </span>
            <span className="block text-white">
              DREAM BIG
            </span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Theme

