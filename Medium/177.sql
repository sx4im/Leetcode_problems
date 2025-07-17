-- 177. Nth Highest Salary
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    DECLARE result INT;
    SET N = N - 1;
    
    SELECT DISTINCT Salary INTO result
    FROM Employee
    ORDER BY Salary DESC
    LIMIT 1 OFFSET N;
    
    RETURN result;
END