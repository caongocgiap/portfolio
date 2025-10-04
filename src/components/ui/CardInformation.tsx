export default function CardInformation() {
  return (
    <div
      className="w-3/4 h-96 p-6 rounded-[46px] bg-white/16 backdrop-blur-lg shadow-lg text-white
      border border-white/50"
    >
      <div className="flex space-x-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
      </div>

      <p className="mt-6 text-lg opacity-80">
        I work with Spring Boot, Thymeleaf and ReactJS, and I love creating
        full-stack projects and clones to practice and learn. I am always
        focused on growing my knowledge and building high-quality solutions.
      </p>
    </div>
  );
}
