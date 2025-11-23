import React from "react";
import { Input } from "./styles";

interface Props {
    onSearch: (value: string) => void;
}

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
    return (
        <Input
            type="text"
            placeholder="Buscar usuário..."
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};