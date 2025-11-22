import React from "react";
import type { User } from "../types/User";

import { UserCard } from "./UserCard";

interface Props {
    users: User[];
    onSelect: (user: User) => void;
}

export const UserList: React.FC<Props> = ({ users, onSelect }) => {
    return (
    <div>
        {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={() => onSelect(user)} />
        ))}
    </div>
    );
};