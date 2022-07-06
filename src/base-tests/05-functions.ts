
export interface User {
    uid: string;
    username: string;
}

export const getUser = (): User => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

export const getActiveUser = ( name: string ): User =>({
    uid: 'ABC567',
    username: name
})
