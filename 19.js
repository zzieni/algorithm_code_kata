/**
 * 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
 * n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
 */

function solution(n) {
  var answer = 0;
  let sqrt = Math.sqrt(n);
  if (sqrt % 1 !== 0) {
    // 나머지를 이용해 소숫점 판별, 제곱근이 아닐 경우
    answer = -1;
  } else {
    answer = Math.pow(sqrt + 1, 2); // 제곱근일 경우
  }
  return answer;
}

console.log(solution(121));
console.log(solution(3));
