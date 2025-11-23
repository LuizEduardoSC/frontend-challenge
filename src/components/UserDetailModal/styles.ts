import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h2`
    margin-bottom: 12px;
    font-size: 1.4rem;
`;

export const Info = styled.p`
    margin: 6px 0;
    font-size: 0.95rem;
    color: #444;
`;

export const CloseButton = styled.button`
    margin-top: 16px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    }
`;
