import styled from "styled-components";
import type { User } from "../types/User";

interface Props {
    user: User;
    onClick: () => void;
}

const Card = styled.div`
    background: ${({ theme }) => theme.colors.cardBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.medium};
    padding: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing.small};
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
    }
`;

const Name = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const Email = styled.p`
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.secondary};
`;

export const UserCard: React.FC<Props> = ({ user, onClick }) => (
    <Card onClick={onClick}>
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
    </Card>
);