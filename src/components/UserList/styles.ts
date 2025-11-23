import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
    margin-top: ${({ theme }) => theme.spacing.medium};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        flex-direction: column;
    }
`;
