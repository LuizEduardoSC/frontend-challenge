import React from "react";

interface Props {
    onSearch: (value: string) => void;
}

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
    return (
    <input
        type="text"
        placeholder="Buscar usuário..."
        onChange={(e) => onSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "16px", width: "100%" }}
    />
    );
};