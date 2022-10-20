import React from "react";

export function useOutsideClick(action: () => void) {
  const ref = React.useRef<any>(null);

  const handleClickOutside = React.useCallback(
    (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        action();
      }
    },
    [action]
  );

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return { ref };
}
