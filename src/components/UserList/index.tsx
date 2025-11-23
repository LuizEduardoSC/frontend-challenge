import React from "react";
import type { User } from "../../types/User";
import { UserCard } from "../UserCard";
import { ListContainer } from "./styles";

interface Props {
    users: User[];
    onSelect: (user: User) => void;
}

export const UserList: React.FC<Props> = ({ users, onSelect }) => {
    return (
        <ListContainer>
            {users.map((user) => (
                <UserCard key={user.id} user={user} onClick={() => onSelect(user)} />
            ))}
        </ListContainer>
    );
};