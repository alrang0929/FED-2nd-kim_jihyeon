-- 오늘의 쿼리 : update
-- update 테이블명 set 컬럼명=값 where 특정항목
-- UPDATE `friends` SET `ftel`='888',`faddr`='제주도',`fmsg`='여름휴가만세!' WHERE `fnum` = 3
-- UPDATE `friends` SET `ftel`='66777',`faddr`='포항',`fmsg`='포항포항항포항' WHERE `fnum` = 2
-- UPDATE `friends` SET `fmsg`='이게 몰까몰까' WHERE `fnum` = 1

-- 오늘의 쿼리 : delete 조건절 중요!
-- delete from 테이블명 where 특정항목
-- DELETE FROM `friends` WHERE `fnum` = 3