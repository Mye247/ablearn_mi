new Promise
const dd = await promise;


async function someFunction() {
    return 5; // resolve값
    throw new error();
}

//결과값을 뽑고 싶다면 await쓰기
//그냥 함수만쓰면 Promise를 반환함
const a = await someFunction();

new Promise((resolve, reject)=>{
    resolve(100);

    reject(0);
})