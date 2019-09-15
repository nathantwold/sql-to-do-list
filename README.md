Weekend project #3
My first full-stack web app!

DB (weekend-to-do-app) Setup:

CREATE TABLE "list" (
    "id" serial primary key,
    "task" varchar (120),
    "complete" BIT DEFAULT '0'
    );

INSERT INTO "list"("task")
VALUES('get groceries');
INSERT INTO "list"("task")
VALUES('feed cats');
INSERT INTO "list"("task")
VALUES('code stuff');

SELECT * FROM "list";
