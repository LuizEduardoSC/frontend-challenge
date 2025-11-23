import styled from "styled-components";

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.medium};
`;

export const Title = styled.h1`
    font-size: 1.6rem;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Message = styled.p`
    text-align: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-top: ${({ theme }) => theme.spacing.medium};
`;
