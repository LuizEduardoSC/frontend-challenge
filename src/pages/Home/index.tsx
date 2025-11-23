import React, { useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { UserDetailModal } from "../../components/UserDetailModal";
import { UserList } from "../../components/UserList";
import { useUsers } from "../../hooks/useUsers";
import type { User } from "../../types/User";
import { Container, Title, Message } from "./styles";

export const Home: React.FC = () => {
    const { users, loading, error } = useUsers();
    const [search, setSearch] = useState("");
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const filteredUsers = users.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <Message>Carregando...</Message>;
    if (error) return <Message>Erro: {error}</Message>;

    return (
        <Container>
            <Title>Lista de Usuários</Title>
            <SearchBar onSearch={setSearch} />
            {filteredUsers.length > 0 ? (
                <UserList users={filteredUsers} onSelect={setSelectedUser} />
            ) : (
                <Message>Nenhum usuário encontrado</Message>
            )}
            <UserDetailModal
                user={selectedUser}
                onClose={() => setSelectedUser(null)}
            />
        </Container>
    );
};