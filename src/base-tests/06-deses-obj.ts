export interface Person {
    age: number;
    codeName: string;
    latlng: {
        lat: number;
        lng: number;
    }
}

interface UsContextProps {
    age: number;
    code: string;
    name: string;
    position?: string;
}

export const usContext = ( { code, name, age, position = 'Captain' }:UsContextProps ): Person => {
    
    return {
        age,
        codeName: code,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}
