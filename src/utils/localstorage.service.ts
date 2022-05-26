export function setJwtToken(jwtToken: string){
    localStorage.setItem('token', jwtToken);
}

export function getJwtToken(){
    return localStorage.getItem('token');
}