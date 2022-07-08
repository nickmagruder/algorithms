CREATE TABLE students3
  (id INT, name STRING, value DOUBLE);
  
INSERT INTO students3 VALUES (1, "Yve", 1.0);
INSERT INTO students3 VALUES (2, "Omar", 2.5);
INSERT INTO students3 VALUES (3, "Elia", 3.3);

INSERT INTO students3
VALUES 
  (4, "Ted", 4.7),
  (5, "Tiffany", 5.5),
  (6, "Vini", 6.3);
  
UPDATE students3
SET value = value + 1
WHERE name LIKE "T%";

DELETE FROM students3
WHERE value > 6;

CREATE OR REPLACE TEMP VIEW updates(id, name, value, type) AS VALUES
  (2, "Omar", 15.2, "update"),
  (3, "", null, "delete"),
  (7, "Blue", 7.7, "insert"),
  (11, "Diya", 8.8, "update");
  
MERGE INTO students3 b
USING updates u
ON b.id=u.id
WHEN MATCHED AND u.type = "update"
  THEN UPDATE SET *
WHEN MATCHED AND u.type = "delete"
  THEN DELETE
WHEN NOT MATCHED AND u.type = "insert"
  THEN INSERT *;