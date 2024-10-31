import { FaAnglesUp } from "react-icons/fa6";
const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <section className="w-full flex flex-row justify-center items-center gap-2 md:gap-16 lg:gap-20">
      <div className="flex justify-center text-poppins text-dirty-white">
        <p className="text-sm md:text-lg lg:text-lg p-8 tracking-wider font-normal text-center">© Chan Villamor | Aspiring, UI/ UX Designer & Software Engineer</p>
      </div>

      <div className="cursor-pointer" onClick={scrollToTop}>
        <FaAnglesUp className="text-lg md:text-2xl lg:text-2xl text-dirty-white hover:text-green-500 hover:duration-200" />
      </div>
    </section>
  )
}
export default Footer