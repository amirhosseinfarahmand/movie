import { useContext, createContext, useState, useEffect } from "react";

const PageProviderContext = createContext();
const PageProviderActionContext = createContext();

const PageProvider = ({ children }) => {
  const [statePage, setStatePage] = useState();
  console.log(statePage);

  return (
    <PageProviderContext.Provider value={statePage}>
      <PageProviderActionContext.Provider value={setStatePage}>
        {children}
      </PageProviderActionContext.Provider>
    </PageProviderContext.Provider>
  );
};

export default PageProvider;

export const usePage = () => useContext(PageProviderContext);
export const usePageAction = () => useContext(PageProviderActionContext);
