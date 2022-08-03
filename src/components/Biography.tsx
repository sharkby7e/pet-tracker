import React, { FunctionComponent } from "react";

type Props = {
  name: string;
  bio: string;
  children?: React.ReactNode;
};

const Biography: FunctionComponent<Props> = ({
  name,
  bio,
  children,
}: Props) => {
  return (
    <div>
      <h1>This is the story of a cat named...{name}</h1>
      <div>{children}</div>
      <p>{bio}</p>
    </div>
  );
};

export default Biography;
