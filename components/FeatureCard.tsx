import React from "react";

interface Props {
  feature?: string;
}

const FeatureCard: React.FC<Props> = ({ feature }) => {
  return (
    <div className="flex flex-col gap-y-2 bg-zinc-800 rounded-lg p-8">
      <h1 className="text-white font-semibold text-2xl">
        {feature || "Feature name"}
      </h1>
      <p className="text-zinc-400">
        A short description that describes the feature in a bit more detail for
        the user so they understand it better.
      </p>
    </div>
  );
};

export default FeatureCard;
