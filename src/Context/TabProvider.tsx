import React, { createContext, useState, useContext } from "react";

// Define the tab data structure
interface Tab {
  id: string;
  name: string;
  path: string;
}

// Define the context value type
interface TabsContextType {
  tabs: Tab[];
  addTab: (tab: Tab) => void;
  removeTab: (id: string) => void;
}

// Default context value
const defaultContextValue: TabsContextType = {
  tabs: [],
  addTab: () => {},
  removeTab: () => {},
};

// Create the context with the default value
const TabsContext = createContext<TabsContextType>(defaultContextValue);

export const useTabs = () => useContext(TabsContext);

// TabsProvider now accepts children as a prop
export const TabsProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [tabs, setTabs] = useState<Tab[]>([]);

  const addTab = (tab: Tab) => {
    setTabs((prevTabs) => {
      if (prevTabs.some((t) => t.id === tab.id)) return prevTabs; // Avoid duplicates
      return [...prevTabs, tab];
    });
  };

  const removeTab = (id: string) => {
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== id));
  };

  return (
    <TabsContext.Provider value={{ tabs, addTab, removeTab }}>
      {children} {/* Render child components */}
    </TabsContext.Provider>
  );
};
