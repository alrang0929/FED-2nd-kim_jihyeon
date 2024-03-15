//큐브 애니메이션 JS - cube.js

/* 

[요구사항 분석]

1. 버튼을 클릭하여 멈춰있던 큐브의 애니메이션
설정 상태 업데이트하여 작동시킨다.

2. 이때 버튼은 돌아에서 멈춰로 변경시킨다.

3. 다시 멈춰버튼을 클릭 시 돌고있던 큐브에 애니메이션
설정상태를 변경하여 멈추게 한다.
-> 버튼은 다시 돌아로 변경

*/

//1. 대상선정
//1-1 이벤트 대상 선정: .btngo
const btngo = document.querySelector('.btngo');
console.log('대상:',btngo);

//1-2 변경대상: .cube
const cube = document.querySelector('.cube');
console.log('대상:',cube);