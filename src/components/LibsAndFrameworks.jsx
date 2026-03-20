import ReactI from "../assets/react.svg";
import Tail from "../assets/tailwind-icon.svg";

const LibsAndFrameworks = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Libraries — mt aligns "Libraries:" title so icon lines up with card icon on desktop */}
      <div className="flex flex-col gap-5">
        <h2 className="text-gray-50 font-bold text-3xl md:mt-[56px]">Libraries:</h2>
        <div className="flex items-center gap-7">
          <img src={ReactI} alt="react" className="w-24" />
          <h3 className="text-gray-50 text-2xl font-bold">React</h3>
        </div>
        <p className="text-gray-50 text-lg">
          I build modern user interfaces using React. I understand
          component-based architecture, props, state, and React hooks such as
          useState and useEffect. I enjoy structuring applications into
          reusable components and organizing project structure.
        </p>
      </div>

      {/* Frameworks */}
      <div className="flex flex-col gap-5">
        <h2 className="text-gray-50 font-bold text-3xl">Frameworks:</h2>
        <div className="flex items-center gap-7">
          <img src={Tail} alt="tailwind" className="w-24" />
          <h3 className="text-gray-50 text-2xl font-bold">Tailwind CSS</h3>
        </div>
        <p className="text-gray-50 text-lg">
          I use Tailwind CSS to build modern and responsive user interfaces
          quickly. I understand how to compose utility classes to create
          layouts, spacing, typography, and responsive designs while keeping
          the code clean and consistent.
        </p>
      </div>
    </div>
  );
};

export default LibsAndFrameworks;
