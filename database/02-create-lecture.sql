USE JIKANWARI;
CREATE TABLE lectures(
    lecture_id INT AUTO_INCREMENT,
    lecture_name VARCHAR(50) NOT NULL,
    lecture_teacher VARCHAR(50) NOT NULL,
    lecture_day VARCHAR(5) NOT NULL,
    lecture_start_time INT NOT NULL,
    lecture_end_time INT NOT NULL,
    PRIMARY KEY(lecture_id)
);