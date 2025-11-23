import styled from "styled-components";

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.medium};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 90%;
    padding: ${({ theme }) => theme.spacing.small};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    padding: ${({ theme }) => theme.spacing.small};
    }
`;

export const Title = styled.h1`
    font-size: 1.6rem;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    }
`;

export const Message = styled.p`
    text-align: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-top: ${({ theme }) => theme.spacing.medium};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    }
`;