const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {

 const rows = Number(req.query.rows);

 const cols = Number(req.query.cols);

 if (!Number.isInteger(rows) || !Number.isInteger(cols)) {

  res.render('board', { title: 'Board Display', errorMessage: 'Query parameters must be integers.' });

 } else if (rows < 1 || rows > 10) {

  res.render('board', { title: 'Board Display', errorMessage: 'Rows out of range. Must be between 1 and 10.' });

 } else if (cols < 1 || cols > 10) {

  res.render('board', { title: 'Board Display', errorMessage: 'Columns out of range. Must be between 1 and 10.' });

 } else {

  const tableData = generateTableData(rows, cols);

  res.render('board', { title: 'Board Display', tableData });

 }

});

function generateTableData(rows, cols) {

 // Generate your table data based on the rows and cols

 // Return the data as needed for your Pug template

}

module.exports = router;

