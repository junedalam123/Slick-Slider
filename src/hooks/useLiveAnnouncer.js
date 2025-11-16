import { useEffect } from "react";


export const useLiveAnnouncer = (message = "") => {
  useEffect(() => {
    let region = document.getElementById("a11y-live-region");
    let created = false;

    if (!region) {
      region = document.createElement("div");
      region.id = "a11y-live-region";
      region.setAttribute("aria-live", "polite");
      region.setAttribute("aria-atomic", "true");
      region.className = "sr-only";
      document.body.appendChild(region);
      created = true;
    }

  
    region.textContent = message;

    return () => {
      // clear text on cleanup
      if (region) region.textContent = "";
      if (created && region && region.parentNode) {
        region.parentNode.removeChild(region);
      }
    };
  }, [message]);
};
