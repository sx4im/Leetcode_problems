-- 181. Employees Earning More Than Their Managers
# Write your MySQL query statement below
SELECT e.Name AS Employee
FROM Employee e
JOIN Employee m ON e.ManagerId = m.Id
WHERE e.Salary > m.Salary;
