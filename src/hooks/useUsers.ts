import { useEffect, useState } from "react";
import type { User } from "../types/User";


export function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar usuários");
        return res.json();
        })
        .then((data: User[]) => setUsers(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    return { users, loading, error };
}
