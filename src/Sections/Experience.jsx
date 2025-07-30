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
      className="w-full min-h-screen bg-[#FE4A23] text-white py-10"
    >
      <div className="w-[80%] mx-auto">
        <ul className="list-disc">
          <li className="text-3xl">Experience</li>
        </ul>
        <p className="w-[30%] text-xl mt-10">
          Damit du genau weißt, wie ein Projekt bei mir abläuft, findest du hier
          einen Überblick über alle wichtigen Phasen.
        </p>
      </div>

      <div className="mt-20 w-[80%] mx-auto font-secondary">
        {details.map((item, index) => (
          <div className="border-t border-white flex justify-between items-start pt-10 pb-20">
            <div className="w-[10%] align-top">
              <p className="text-lg">
                {index < 9 ? `0${index + 1}` : index + 1}.
              </p>
            </div>
            <div className="w-[20%]">
              <p className="text-lg">{item.company}</p>
            </div>
            <div className="w-[40%]">
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
