import { HeroHolder } from "./HeroLayout.styled"

export const HeroLayout = ({children}) => { 
    return (
      
        <>
            <HeroHolder>{ children }</HeroHolder>
        </>
       
           
    )
}