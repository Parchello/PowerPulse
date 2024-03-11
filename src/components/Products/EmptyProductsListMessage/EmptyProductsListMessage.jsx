import { AskToTry, EmptyListInfoBox, EmptyListMessage } from "./EmptyProductsListMessage.styled";

export const EmptyProductsListMessage = () => {
    return (
      <>
        <EmptyListInfoBox>
          <EmptyListMessage>
            <span>Sorry, no results were found &nbsp;</span>
            for the product filters you selected. You may want to consider other
            search options to find the product you want. Our range is wide and
            you have the opportunity to find more options that suit your needs.
          </EmptyListMessage>
          <AskToTry>Try changing the search parameters.</AskToTry>
        </EmptyListInfoBox>
      </>
    );
}