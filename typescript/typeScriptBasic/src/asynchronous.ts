function makePromise():Promise<string>{
    return(  new Promise((resolve, reject) =>{
        const data:string = "hey there";
        if(data){
            resolve(data);
        }
        else{
            reject("failed data");
        }
    })
    )


}

async function getPromise():Promise<string>{
    const data = await makePromise();
    return data
}

console.log("from promise:",getPromise())

// fetching 

const getPosts = async ():Promise<user> =>{
    const data =await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const jsonData =  await data.json();
    console.log("data from getPosts inside getPosts async method:", jsonData)
    return jsonData
}
interface user{
    userId: number;
    id:number;
    title:string;
    completed:boolean
}
async ():Promise<void> =>{
    const posts = await getPosts();
    console.log("data async: ", posts)

}
console.log("data from getPosts outside everything:",getPosts());
getPosts().then(value => console.log("value in then:", value))
