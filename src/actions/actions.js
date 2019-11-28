import { FILTER_HOBBY, FILTER_PROFESSION } from "../constans/constans";

export const filterProfession = (profession) => ({
    type: FILTER_PROFESSION,
    payload: profession
});

export const filterHobby = (hobby) => ({
   type:  FILTER_HOBBY,
    payload: hobby
});


