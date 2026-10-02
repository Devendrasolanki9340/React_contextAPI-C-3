import { createContext, useState } from "react"


//  setup out black store --
export const MyStore = createContext()

//  make a provider of our store who handle data and serves to the customres

export const ContextProvider =({children})=>{

    const [centeralValue, setCenteralValue] = useState("make on text save")

    return <MyStore.Provider value={centeralValue}>
        {children}
    </MyStore.Provider>
}