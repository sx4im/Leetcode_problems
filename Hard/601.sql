-- 601. Human Traffic of Stadium
WITH Consecutive AS (
    SELECT
        id,
        visit_date,
        people,
        id - ROW_NUMBER() OVER (ORDER BY id) AS grp
    FROM
        Stadium
    WHERE
        people >= 100
)
SELECT
    id,
    visit_date,
    people
FROM
    Consecutive
WHERE
    grp IN (
        SELECT
            grp
        FROM
            Consecutive
        GROUP BY
            grp
        HAVING
            COUNT(*) >= 3
    )
ORDER BY
    visit_date;