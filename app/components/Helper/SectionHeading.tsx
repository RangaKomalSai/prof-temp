import React from 'react';

type Props = {
  heading: string;
};

const SectionHeading: React.FC<Props> = ({ heading }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase text-blue-950 font-semibold">
        {heading}
      </h1>
      <p className="w-11/12 sm:w-10/12 md:w-3/5 lg:w-1/2 text-sm md:text-base mt-4 mx-auto text-gray-500 text-opacity-70 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia maxime, modi saepe inventore voluptate dolores voluptates voluptatum, iste esse tempora illo ad aperiam vitae! Voluptatum in nihil quaerat quidem?
      </p>
    </div>
  );
};

export default SectionHeading;
