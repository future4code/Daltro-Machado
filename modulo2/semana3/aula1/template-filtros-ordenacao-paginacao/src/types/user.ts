
export type user = {
   id: number,
   name: string,
   email: string,
   type: string
}

export type searchUserInput = {
   name: string,
   type: string,
   field: string,
   search: string,
   orderBy: string,
   orderType: string,
   page: string
}