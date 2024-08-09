-- 240808 오늘의 쿼리
-- 모두 지워보자 ^0^
-- delete from 테이블명
delete from `friends`
-- 지우고 입력하면 이전 데이터 이후에 입력함
-- 데이터 여백이 지워지지 않아서 그럼!
-- 완전히 지우려면 troncate table 테이블명 써야됨
TRUNCATE TABLE `friends`
-- 전체 데이터 갯수 구하기
SELECT COUNT(*)AS 전체겟수 FROM `friends`


