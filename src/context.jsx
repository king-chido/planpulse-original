import { createContext, useState } from "react";
import { data, cardData } from "./localdata";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [datas, setDatas] = useState(data);
  const [title, setTitle] = useState("Overview");
  const [cardDatas, setCardDatas] = useState(cardData);
  return (
    <AppContext.Provider
      value={{
        datas,
        setDatas,
        title,
        setTitle,
        cardDatas,
        setCardDatas,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
