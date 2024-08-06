-- 오늘은 insert into
-- INSERT INTO `테이블명` 
-- (`항목1`,`항목2`,`항목3`,`항목3`) 
-- VALUES ("이도","01011112222","서울시 종로구","세종대왕 만만세~!!!");


-- INSERT INTO `friends` 
-- (`fname`,`ftel`,`faddr`,`fmsg`) 
-- VALUES ("이도","01011112222","서울시 종로구","세종대왕 만만세~!!!");

-- 1. 먼저 테이블 만들기 (mydb 데이터 베이스에 생성)
-- CREATE TABLE `friends`(
--    fnum int NOT null AUTO_INCREMENT,
--     fname varchar(20),
--     ftel char(11),
--     faddr varchar(200),
--     fmsg text(1000),
--     fdate timestamp,
--     PRIMARY KEY (fnum)
-- );

-- 2. 레코드 입력
-- INSERT INTO `테이블명` (컬럼명들) VALUES (값들);

-- 예시)

-- INSERT INTO `friends` (`fname`,`ftel`,`faddr`,`fmsg`) 
-- VALUES ("이도","01011112222","서울시 종로구","세종대왕 만만세~!!!");

-- 3. 선택쿼리 실행
-- SELECT fname FROM `friends` WHERE fname = '공유';
-- 4. 선택항목 별칭 as 출력하기
-- SELECT `fname` as "이름",`faddr` as "주소",`ftel` as "전화번호" FROM `friends` WHERE `faddr` like "%은평구";
