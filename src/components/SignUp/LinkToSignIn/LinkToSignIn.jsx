import { LinkText, SigninLink } from "./LinkToSignIn.styled"

export const LinkToSignIn = () => {
    return(
        <>
        <LinkText>Already have an account? <SigninLink to="/login">Sign In</SigninLink></LinkText>
        </>
    )
}