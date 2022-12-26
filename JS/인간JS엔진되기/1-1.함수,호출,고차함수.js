// 함수 선언
const add = (a, b) => a + b;

function calculator(func, a, b) {
    return func(a, b);
}

// 함수 호출
add(3, 5); // 8
calculator(add, 3, 5); // 8

// 잘못된 경우
calculator(add(), 3, 5); // ❌
document.querySelector("#header").addEventListener("click", add()); // ❌

// 반드시 틀린 경우는 아님
// 함수의 리턴을 잘 봐야함 (리턴값으로 대체해보자)
const onClick = () => () => {
    console.log("hello");
};

document.querySelector("#header").addEventListener("click", onClick()); // hello

