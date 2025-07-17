-- 262. Trips and Users
SELECT
    Request_at AS Day,
    ROUND(
        SUM(CASE 
                WHEN Status IN ('cancelled_by_driver', 'cancelled_by_client') 
                THEN 1 
                ELSE 0 
            END) * 1.0 
        / COUNT(*), 2
    ) AS "Cancellation Rate"
FROM Trips t
JOIN Users c ON t.Client_Id = c.Users_Id AND c.Banned = 'No'
JOIN Users d ON t.Driver_Id = d.Users_Id AND d.Banned = 'No'
WHERE Request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY Request_at
ORDER BY Request_at;
