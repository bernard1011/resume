import Menu from "./ui/Menu"
import Photo from "../assets/images/photo.jpg"
import ArrowDown from "../assets/arrow-down.svg?react"



const HeaderSection = () => {
    return (<>
            <Menu />
            <section className="mt-20">
                <div className="w-56 h-56 rounded-full overflow-hidden">
                    <img src={Photo} alt="photo" className="w-full h-full  object-cover" />
                </div>
                <div className="pl-2 text-gray-50 font-bold flex flex-col gap-3">
                    <h1 className="text-3xl leading-12">
                        Hello!
                        <span className="block">My name is Danya</span>
                    </h1>
                    <p className="text-xl">
                        I am a  Frontend Developer from Ukraine who is passionate about web technologies and continuous learning.
                    </p>
                </div>
                <div className="w-full flex justify-center pt-12">
  <ArrowDown className="arrows-animate h-7 text-white overflow-visible" />
</div>
            </section>
    </>)
}

export default HeaderSection;