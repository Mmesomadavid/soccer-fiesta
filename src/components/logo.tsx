import LogoImg from '../assets/logo.png'

const Logo = () => {
  return (
    <div className="w-[80px] h-auto">
      <img src={LogoImg} alt="Logo" className="w-full h-auto object-contain" draggable="false" />
    </div>
  );
};

export default Logo;
