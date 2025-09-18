import imgBg from "../assets/bg-3.jpg"

const Theme = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Nike-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900" />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={imgBg}
          alt="Soccer ball on field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80" />
      </div>

      {/* Nike-inspired geometric shapes */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/10 rounded-lg transform rotate-45 blur-3xl" />

      {/* Main text layer with Nike-style typography */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center transform perspective">
          <h2 className="text-[8vw] sm:text-[10vw] md:text-[12vw] font-black leading-none tracking-tighter">
            <span className="block text-white drop-shadow-2xl">PLAY HARD</span>
            <span className="block text-blue-300 drop-shadow-2xl">DREAM BIG</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mt-8 font-medium tracking-wide">
            WHERE LEGENDS ARE BORN
          </p>
        </div>
      </div>
    </div>
  )
}

export default Theme
