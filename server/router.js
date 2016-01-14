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
    connection.query(
      'INSERT INTO student SET ?',
      req.body,
      (err, result) => {
        if (err) throw err;
        res.json(result);
      });
  });

router.route('/student/:studentId')
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
