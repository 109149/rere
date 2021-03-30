import React from "react";

const useEffectSkipFirstRender = (cb, deps) => {
  const firstRender = React.useRef(true);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    cb();
  }, [cb, deps]);
};

export default useEffectSkipFirstRender;
