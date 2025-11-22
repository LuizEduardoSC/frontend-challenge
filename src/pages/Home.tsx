import React, { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { SearchBar } from "../components/SearchBar";
import { UserList } from "../components/UserList";
import { UserDetailModal } from "../components/UserDetailModal";
import type { User } from "../types/User";


export const Home: React.FC = () => {
    const { users, loading, error } = useUsers();
    const [search, setSearch] = useState("");
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const filteredUsers = users.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h1>Lista de Usuários</h1>
            <SearchBar onSearch={setSearch} />
            <UserList users={filteredUsers} onSelect={setSelectedUser} />
            <UserDetailModal user={selectedUser} onClose={() => setSelectedUser(null)} />
        </div>
    );
};