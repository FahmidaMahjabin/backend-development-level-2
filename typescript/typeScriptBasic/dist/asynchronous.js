"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function makePromise() {
    return (new Promise((resolve, reject) => {
        const data = "hey there";
        if (data) {
            resolve(data);
        }
        else {
            reject("failed data");
        }
    }));
}
function getPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield makePromise();
        return data;
    });
}
console.log("from promise:", getPromise());
// fetching 
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    const jsonData = yield data.json();
    console.log("data from getPosts inside getPosts async method:", jsonData);
    return jsonData;
});
() => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield getPosts();
    console.log("data async: ", posts);
});
console.log("data from getPosts outside everything:", getPosts());
getPosts().then(value => console.log("value in then:", value));
