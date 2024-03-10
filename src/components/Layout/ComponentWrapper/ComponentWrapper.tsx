import React, { FC, ReactNode } from "react";

interface ComponentWrapperProps {
  children: ReactNode;
}

const ComponentWrapper: FC<ComponentWrapperProps> = ({ children }) => {
  return <div className="appWrapper">{children}</div>;
};

export default ComponentWrapper;
