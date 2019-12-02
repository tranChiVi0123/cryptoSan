export class Post {
    _id: string;
    plaintext: string;
    key: string;
    ciphertext: string;
    level: number;
    description: string;
    caesar: string;
    submittedby: string;
}
export class PostUpdate{
    _id: string;
    solvedby:string;
}
export class PostNew {
    plaintext: string;
    key: string;
    ciphertext: string;
    level: number;
    description: string;
    caesar: string;
    submittedby: string;
}