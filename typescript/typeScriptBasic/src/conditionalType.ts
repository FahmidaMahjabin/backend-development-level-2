interface Bird{
    legs: number,
    canFly: boolean,
    name: string
}
interface Owl extends Bird{
    color: string
}

type birdFood = keyof Bird extends "name" ? number: string;

type RemoveFriend<listOfFriend, friend> = listOfFriend extends friend?never: listOfFriend;
type friends = "Moneca" | "Rachel" | "Pheobe";
type currentFriends = RemoveFriend<friends, "Rachel">

type Area = {
    height: number;
    width: number;
    
}
type Volume<Type> ={
    [key in keyof Type]: string;
}
type marbel = Volume<Area>;