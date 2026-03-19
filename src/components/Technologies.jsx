import KnowladgeCard from "./ui/KnowladgeCard";
import Html from "../assets/html-icon.svg";
import Css from "../assets/css-icon.svg";
import JS from "../assets/js-icon.svg";
import ReactI from "../assets/react.svg";
import Tail from "../assets/tailwind-icon.svg";

const cardInfo = [
  {
    id: 1,
    img: Html,
    name: "HTML",
    description:
      "I have a solid understanding of HTML and use it to build clear and well-structured web pages. I know how to create semantic layouts using elements like headers, sections, articles, and forms. I follow good practices to keep the markup clean, readable, and accessible.",
  },
  {
    id: 2,
    img: Css,
    name: "CSS",
    description:
      "I use CSS to style web pages and create responsive layouts. I understand Flexbox and Grid, and I know how to organize styles so that the code stays clean and maintainable. I also work with modern approaches to layout and responsiveness.",
  },
  {
    id: 3,
    img: JS,
    name: "JavaScript",
    description:
      "I use JavaScript to add interactivity to web applications. I understand core concepts such as functions, arrays, objects, closures, and asynchronous code. I focus on writing readable and maintainable code and enjoy solving logical problems.",
  }
];



//   {
//     id: 4,
//     img: ReactI,
//     name: "React",
//     description:
//       "I build modern user interfaces using React. I understand component-based architecture, props, state, and React hooks such as useState and useEffect. I enjoy structuring applications into reusable components and organizing project structure.",
//   },
//   {
//     id: 5,
//     img: Tail,
//     name: "Tailwind CSS",
//     description:
//       "I use Tailwind CSS to build modern and responsive user interfaces quickly. I understand how to compose utility classes to create layouts, spacing, typography, and responsive designs while keeping the code clean and consistent.",
//   }

const Technologies = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h2 className="text-gray-50 font-bold text-3xl">
          Technologies What I Can Use:
        </h2>
           {cardInfo.map((item)=> (
            <KnowladgeCard key={item.id} img={item.img} name={item.name} description={item.description}/>
           ))}
      </div>
      <div className="flex flex-col gap-5 px-3">
        <h2 className="text-gray-50 font-bold text-3xl">Libreies:</h2>
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-7 ">
                <img src={ReactI} alt="react" className="w-24"/>
                <h3 className="text-gray-50 text-2xl font-bold">
                    React
                </h3>
            </div>
            <div className="text-gray-50 text-lg">
                <p>
                    I build modern user interfaces using React. I understand component-based architecture, props, state, and React hooks such as useState and useEffect. I enjoy structuring applications into reusable components and organizing project structure.
                </p>
            </div>
        </div>
        <div className="flex flex-col mt-5">
            <h2 className="text-gray-50 font-bold text-3xl">Frameworks:</h2>
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-7 ">
                <img src={Tail} alt="tailwind" className="w-24"/>
                <h3 className="text-gray-50 text-2xl font-bold">
                    Tailwindcss
                </h3>
            </div>
            <div className="text-gray-50 text-lg">
                <p>
                    I use Tailwind CSS to build modern and responsive user interfaces quickly. I understand how to compose utility classes to create layouts, spacing, typography, and responsive designs while keeping the code clean and consistent.
                </p>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
