import Menu from "./ui/Menu"
import Photo from "../assets/images/photo.jpg"
import ArrowDown from "../assets/arrow-down.svg?react"

const HeaderSection = () => {
  return (
    <>
      <Menu />
      <section className="mt-20 flex flex-col md:flex-row md:items-center md:gap-12">
        <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
          <img src={Photo} alt="photo" className="w-full h-full object-cover" />
        </div>
        <div className="pl-2 text-gray-50 font-bold flex flex-col gap-3 md:pl-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-12">
            Hello!
            <span className="block">My name is Danya</span>
          </h1>
          <p className="text-xl md:text-2xl font-normal">
            I am a Frontend Developer from Ukraine who is passionate about web technologies and continuous learning.
          </p>
        </div>
      </section>
      <div className="w-full flex justify-center pt-4 md:pt-8">
        <ArrowDown className="arrows-animate h-7 text-white overflow-visible" />
      </div>
    </>
  )
}

export default HeaderSection;
