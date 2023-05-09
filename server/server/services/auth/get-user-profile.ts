import { UserProfile } from "../../global/interfaces";
import { UsersDB } from "../../global/interfaces/sql.interfaces";
import { Gender, Handees } from "../../global/types";
import { getDateTimeFromTs } from "../../utils";

export default function getUserProfile(usersDB: UsersDB): UserProfile {
  return {
    username: usersDB.__username__,
    verified: usersDB._verified,
    description: usersDB._description,
    mood: usersDB._mood,
    url: usersDB._url,
    pfp: usersDB._pfp,
    firstName: usersDB._firstName,
    lastName: usersDB._lastName,
    lang: usersDB._lang,
    age: usersDB._age,
    gender: usersDB._gender as Gender,
    handees: usersDB._handees as Handees,
    nationality: usersDB._nationality,
    country: usersDB._country,
    flag: usersDB._flag,
    city: usersDB._city,
    timezone: usersDB._timezone,
    gmt: usersDB._gmt,
    g4alXP: usersDB._g4alXP,
    achievements: usersDB._achievements.split(","),
    topics: usersDB._topics.split(","),
    updatedOn: getDateTimeFromTs(usersDB._updated_at, usersDB._gmt),
    createdOn: getDateTimeFromTs(usersDB._created_at, usersDB._gmt),
  };
}
