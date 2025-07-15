-- 185. Department Top Three Salaries
-- # Write your MySQL query statement below
SELECT 
    d.Name AS Department,
    e.Name AS Employee,
    e.Salary
FROM (
    SELECT 
        Name,
        Salary,
        DepartmentId,
        DENSE_RANK() OVER (
            PARTITION BY DepartmentId 
            ORDER BY Salary DESC
        ) AS rnk
    FROM Employee
) e
JOIN Department d ON e.DepartmentId = d.Id
WHERE e.rnk <= 3;