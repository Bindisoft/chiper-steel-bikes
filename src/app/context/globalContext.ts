import { createContext, useContext } from "react"
import { stateApp } from "../types/stateApp"
import { initialState } from "../data/initialState"

export type GlobalContent = {
  state: stateApp
  setState:(state: stateApp) => void
}

export const GlobalContext = createContext<GlobalContent>({
  state: initialState, // set a default value
  setState: () => {},
})

export const useGlobalContext = () => useContext(GlobalContext)