\encoding UTF8

DROP TABLE IF EXISTS journal_entry;
DROP TABLE IF EXISTS journal_gif;

CREATE TABLE journal_entry (
  entry_id SERIAL PRIMARY KEY,
  name text,
  entry_date date
);

CREATE TABLE journal_gif (
  entry_id SERIAL REFERENCES journal_entry(entry_id),
  gif_link text
);

INSERT INTO journal_entry (entry_id, name, entry_date)
  VALUES
 (1, 'TestName', '1-1-2023'), (2, 'TestName2', '2-2-2023');


INSERT INTO journal_gif (entry_id, gif_link)
  VALUES
 (1, 'https://google.com');
