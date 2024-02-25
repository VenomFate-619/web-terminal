import { ReactElement, useEffect, useState } from "react";

interface PropsType {
  children: ReactElement;
}

export const ClientOnly = ({ children }: PropsType) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};
