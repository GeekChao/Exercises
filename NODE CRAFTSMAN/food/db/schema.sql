DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS Keywords;

CREATE TABLE Category(
    id INTEGER PRIMARY KEY,
    category TEXT NOT NULL UNIQUE
);

CREATE TABLE Keywords(
    id INTEGER PRIMARY KEY,
    keyword TEXT NOT NULL UNIQUE,
    category_id INTEGER NOT NULL,
    FOREIGN KEY(category_id) REFERENCES Category(id)
);

/*dump data*/
INSERT INTO Category VALUES (1, 'Vegetable');
INSERT INTO Category VALUES (2, 'Utility');
INSERT INTO Category VALUES (3, 'Chef');

INSERT INTO Keywords VALUES (1, 'Eggplant', 1);
INSERT INTO Keywords VALUES (2, 'Knife', 2);
INSERT INTO Keywords VALUES (3, 'Kevin Zou', 3);