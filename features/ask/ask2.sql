CREATE PROCEDURE sp_AnalyzeCustomerMetrics
    @d1 DATE,
    @d2 DATE,
    @f INT
AS
BEGIN
    DECLARE @t1 TABLE (
        i INT,
        v DECIMAL(18,2),
        c CHAR(2)
    )

    DECLARE @r1 DECIMAL(18,2) = 0
    DECLARE @x INT
    DECLARE @y CHAR(2)

    ;WITH q1 AS (
        SELECT 
            o.OrderID AS a,
            c.CustomerID AS b,
            r.RegionID AS c,
            DATEADD(day, -30, o.OrderDate) AS d
        FROM Orders o
        INNER JOIN Customers c ON c.CustomerID = o.CustomerID
        LEFT JOIN Regions r ON r.RegionID = c.RegionID
        WHERE o.OrderDate BETWEEN @d1 AND @d2
    ),
    q2 AS (
        SELECT 
            p.ProductID AS e,
            s.SupplierID AS f,
            od.Quantity * od.UnitPrice AS g,
            q1.c AS h
        FROM q1
        INNER JOIN OrderDetails od ON od.OrderID = q1.a
        INNER JOIN Products p ON p.ProductID = od.ProductID
        LEFT JOIN Suppliers s ON s.SupplierID = p.SupplierID
        WHERE p.Discontinued = 0
    )
    INSERT INTO @t1 (i, v, c)
    SELECT 
        ROW_NUMBER() OVER (PARTITION BY q2.h ORDER BY q2.g DESC) AS i,
        SUM(q2.g) OVER (PARTITION BY q2.h, q2.f) AS v,
        LEFT(MAX(s.Country) OVER (PARTITION BY q2.h), 2) AS c
    FROM q2
    INNER JOIN Suppliers s ON s.SupplierID = q2.f
    WHERE q2.g > (
        SELECT AVG(g) * 1.5
        FROM q2 AS sub
        WHERE sub.h = q2.h
    )

    SELECT @x = COUNT(DISTINCT c)
    FROM @t1
    WHERE v > (
        SELECT AVG(v) * @f
        FROM @t1 AS sub2
        WHERE sub2.c = t1.c
    )

    UPDATE t
    SET t.v = t.v * 
        CASE 
            WHEN t.i % 3 = 0 THEN 1.1
            WHEN t.i % 3 = 1 THEN 0.9
            ELSE 1.05
        END
    FROM @t1 t
    WHERE EXISTS (
        SELECT 1
        FROM @t1 sub3
        WHERE sub3.c = t.c
        GROUP BY sub3.c
        HAVING COUNT(*) > 5
    )

    SELECT 
        c,
        SUM(v) AS TotalValue,
        COUNT(DISTINCT i) AS UniqueCount
    FROM @t1
    GROUP BY c
    HAVING SUM(v) > @r1
    ORDER BY TotalValue DESC
END
