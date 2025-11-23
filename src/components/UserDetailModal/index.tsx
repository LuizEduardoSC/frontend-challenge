import React from "react";
import type { User } from "../../types/User";
import { Overlay, Modal, Title, Info, CloseButton } from "./styles";

interface Props {
    user: User | null;
    onClose: () => void;
}

export const UserDetailModal: React.FC<Props> = ({ user, onClose }) => {
    if (!user) return null;

    return (
    <Overlay>
        <Modal>
        <Title>{user.name}</Title>
        <Info>Email: {user.email}</Info>
        <Info>Telefone: {user.phone}</Info>
        <Info>Empresa: {user.company.name}</Info>
        <Info>Cidade: {user.address.city}</Info>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
        </Modal>
    </Overlay>
    );
};