-- 주석문: -- 
-- DB에는 크게 두가지 DML / DDL 이 있다
-- DML = CRUD (Creat(Insert) Read(Select) Update Delete)
-- [SELECT 선택항목 FROM 테이블명 where 조건절;]

-- SELECT * FROM Customers ;
-- SELECT city FROM Customers;
-- SELECT ContactName,city FROM Customers;
-- SELECT ContactName,city FROM Customers where City = "Madrid";
-- like 검색하기: %있는 부분이 자유로운 부분 (ex: 중간에 특정 문자열 있는거 서치 > %aa%)
-- SELECT * from Customers where City like 'a%';
SELECT * from Customers where City like '%n';
        