import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
    margin-top: ${({ theme }) => theme.spacing.medium};

  /* Tablet */
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column; /* mantém 1 coluna */
    }

  /* Desktop */
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        flex-direction: column; /* mantém 1 coluna */
    }
`;