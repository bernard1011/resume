import ProjSec from "../assets/projsec.svg";
import RobH from "../assets/robot.svg";
import SecP from "../assets/htmlcss.svg";
import KnowladgeCard from "./ui/KnowladgeCard";

const myproj = [
  {
    id: 1,
    img: RobH,
    name: "Robot-Human",
    description:
      "Developed an interactive React application using functional components and Hooks. Implemented dynamic state management and conditional rendering. Built a project structure with reusable components. Deployed the application via Vercel",
    url: "https://robot-human.vercel.app/",
  },
  {
    id: 2,
    img: SecP,
    name: "Landing",
    description:
      "Developed a fully responsive landing page using HTML5 and CSS3. Used Flexbox and Grid for modern layout design. Focused on semantic markup and responsiveness. Deployed the website via Netlify",
    url: "https://landingpagebernard.netlify.app/",
  },
];

const MyProj = () => {
  return (
    <section className="flex flex-col">
      <div className="flex items-center gap-5 mb-5">
        <img src={ProjSec} alt="my projects" className="w-full max-w-28" />
        <h2 className="text-gray-50 text-3xl font-bold">My Projects:</h2>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-5 md:items-stretch flex flex-col gap-5">
        {myproj.map((item) => (
          <KnowladgeCard
            key={item.id}
            img={item.img}
            name={item.name}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProj;
