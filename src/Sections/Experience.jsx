import React from "react";

const Experience = () => {
  const details = [
    {
      company: "Company-1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, suscipit nostrum dolor fugit animi neque? Sed odio officia excepturi molestias.",
    },
    {
      company: "Company-1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, suscipit nostrum dolor fugit animi neque? Sed odio officia excepturi molestias.",
    },
    {
      company: "Company-1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, suscipit nostrum dolor fugit animi neque? Sed odio officia excepturi molestias.",
    },
    {
      company: "Company-1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, suscipit nostrum dolor fugit animi neque? Sed odio officia excepturi molestias.",
    },
    {
      company: "Company-1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, suscipit nostrum dolor fugit animi neque? Sed odio officia excepturi molestias.",
    },
    {
      company: "Company-1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, suscipit nostrum dolor fugit animi neque? Sed odio officia excepturi molestias.",
    },
    {
      company: "Company-1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, suscipit nostrum dolor fugit animi neque? Sed odio officia excepturi molestias.",
    },
    {
      company: "Company-1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, suscipit nostrum dolor fugit animi neque? Sed odio officia excepturi molestias.",
    },
    {
      company: "Company-1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, suscipit nostrum dolor fugit animi neque? Sed odio officia excepturi molestias.",
    },
    {
      company: "Company-1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, suscipit nostrum dolor fugit animi neque? Sed odio officia excepturi molestias.",
    },
    {
      company: "Company-1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, suscipit nostrum dolor fugit animi neque? Sed odio officia excepturi molestias.",
    },
  ];

  return (
    <section
      id="Experience"
      className="w-full min-h-screen bg-[#FE4A23] text-white py-10 px-4 sm:px-6 lg:px-0"
    >
      <div className="w-full max-w-[80%] mx-auto">
        <ul className="list-disc">
          <li className="text-2xl sm:text-3xl">Experience</li>
        </ul>
        <p className="w-full sm:w-[60%] md:w-[50%] lg:w-[30%] text-lg sm:text-xl mt-6 sm:mt-10">
          Damit du genau weißt, wie ein Projekt bei mir abläuft, findest du hier
          einen Überblick über alle wichtigen Phasen.
        </p>
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20 w-full max-w-[80%] mx-auto font-secondary">
        {details.map((item, index) => (
          <div
            key={index}
            className="border-t border-white flex flex-col sm:flex-row justify-between items-start pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 gap-4 sm:gap-6 lg:gap-0"
          >
            <div className="w-full sm:w-[10%] flex-shrink-0">
              <p className="text-base sm:text-lg font-medium">
                {index < 9 ? `0${index + 1}` : index + 1}.
              </p>
            </div>
            <div className="w-full sm:w-[20%] flex-shrink-0">
              <p className="text-base sm:text-lg font-medium">{item.company}</p>
            </div>
            <div className="w-full sm:w-[40%] lg:w-[40%]">
              <p className="text-base sm:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
