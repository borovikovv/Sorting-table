import { FILTER_HOBBY, FILTER_PROFESSION } from "../constans/constans";

export const filterProfAC = (prof) => ({
    type: FILTER_PROFESSION,
    payload: prof
});

export const filterHobbyAC = (hobby) => ({
   type:  FILTER_HOBBY,
    payload: hobby
});


