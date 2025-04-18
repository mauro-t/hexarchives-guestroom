"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PageLoadContext = createContext({
  pageLoaded: false,
});

export function PageLoadContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (typeof window == "undefined") return;
    function handleLoad() {
      setPageLoaded(true);
    }
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <PageLoadContext value={{ pageLoaded }}>
      <div className={`${pageLoaded ? "visible" : "invisible"}`}>
        {children}
      </div>
    </PageLoadContext>
  );
}

export function useIsPageLoaded() {
  const { pageLoaded } = useContext(PageLoadContext);

  return pageLoaded;
}
