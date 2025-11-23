import React from "react";
import type { User } from "../../types/User";
import { Card, Name, Email } from "./styles";

interface Props {
    user: User;
    onClick: () => void;
}

export const UserCard: React.FC<Props> = ({ user, onClick }) => (
    <Card onClick={onClick}>
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
    </Card>
);