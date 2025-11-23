import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.small};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.small};
    font-size: 1rem;

    &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
    }
`;
