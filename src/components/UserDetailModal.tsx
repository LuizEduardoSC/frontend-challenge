import React from "react";
import type { User } from "../types/User";


interface Props {
    user: User | null;
    onClose: () => void;
}

export const UserDetailModal: React.FC<Props> = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Telefone: {user.phone}</p>
                <p>Empresa: {user.company.name}</p>
                <p>Cidade: {user.address.city}</p>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};