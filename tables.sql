
CREATE TABLE User (
  user_id CHAR(36),

  first_name VARCHAR(32) NULL,
  last_name VARCHAR(32) NULL,
  status TINYINT,
  password CHAR(60) NOT NULL,

  join_date DATETIME,

  PRIMARY KEY (user_id)
);

CREATE TABLE Log (
  time_stamp DATETIME,

  user_id CHAR(36),
  desc VARCHAR(255),

  PRIMARY KEY(time_stamp),
  FOREIGN KEY (user_id) REFERENCES User (user_id)
);