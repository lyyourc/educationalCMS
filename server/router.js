import express from 'express';
import connection from './config/db';

const router = express.Router();

router.route('/student')
  .get((req, res) => {
    connection.query(
      'SELECT * FROM student',
      (err, result) => {
        if (err) throw err;
        res.json(result);
      });
  })

  .post((req, res) => {
    const body = req.body;

    const student = {
      studentId: body.studentId,
      name: body.name
    };

    connection.query(
      'INSERT INTO student SET ?',
      student,
      (err, result) => {
        if (err) throw err;
        res.json(result);
      });
  });

router.route('/student/:studentId')
  .put((req, res) => {
    const body = req.body;

    connection.query(
      'UPDATE student SET name = ? WHERE studentId = ?',
      [body.name, req.params.studentId],
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        res.json(result);
      }
    );
  })
  .delete((req, res) => {
    connection.query(
      'DELETE FROM student WHERE studentId = ?',
      req.params.studentId,
      (err, result) => {
        if (err) throw err;

        res.json(result);
      }
    );
  });

export default router;
