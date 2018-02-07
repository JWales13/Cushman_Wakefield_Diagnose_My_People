var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');



router.get('/', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {

            client.query(`SELECT possible_responses.question_id, question,questions.style_id, question_styles.display_style_type ,array_agg(response_text) as responses, array_agg(possible_responses.id) as response_ids, category.id as kpi_id, kpi FROM questions
            INNER JOIN possible_responses on questions.id = possible_responses.question_id
            INNER JOIN category ON questions.kpi_id = category.id
            INNER JOIN question_styles ON question_styles.id = questions.style_id
            WHERE kpi = 'demographic'
            GROUP BY question, kpi, possible_responses.question_id, category.id, question,questions.style_id, question_styles.display_style_type
            ORDER BY question_id;`,
                function (errorMakingDatabaseQuery, result) {
                    done();
                    if (errorMakingDatabaseQuery) {
                        console.log('error', errorMakingDatabaseQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                });
        }
    });
});


router.get('/location', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {

            client.query(`SELECT possible_responses.question_id, question,questions.style_id, question_styles.display_style_type ,array_agg(response_text) as responses, array_agg(possible_responses.id) as response_ids, category.id as kpi_id, kpi FROM questions
            INNER JOIN possible_responses on questions.id = possible_responses.question_id
            INNER JOIN category ON questions.kpi_id = category.id
            INNER JOIN question_styles ON question_styles.id = questions.style_id
            WHERE kpi = 'location'
            GROUP BY question, kpi, possible_responses.question_id, category.id, question,questions.style_id, question_styles.display_style_type
            ORDER BY question_id;`,
                function (errorMakingDatabaseQuery, result) {
                    done();
                    if (errorMakingDatabaseQuery) {
                        console.log('error', errorMakingDatabaseQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                });
        }
    });
});

router.get('/brand', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {


            client.query(`SELECT possible_responses.question_id, question,questions.style_id, question_styles.display_style_type ,array_agg(response_text) as responses, array_agg(possible_responses.id) as response_ids, category.id as kpi_id, kpi FROM questions
            INNER JOIN possible_responses on questions.id = possible_responses.question_id
            INNER JOIN category ON questions.kpi_id = category.id
            INNER JOIN question_styles ON question_styles.id = questions.style_id
            WHERE kpi = 'brand'
            GROUP BY question, kpi, possible_responses.question_id, category.id, question,questions.style_id, question_styles.display_style_type
            ORDER BY question_id;`,
                function (errorMakingDatabaseQuery, result) {
                    done();
                    if (errorMakingDatabaseQuery) {
                        console.log('error', errorMakingDatabaseQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                });
        }
    });
});


router.get('/retention', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {


            client.query(`SELECT possible_responses.question_id, question,questions.style_id, question_styles.display_style_type ,array_agg(response_text) as responses, array_agg(possible_responses.id) as response_ids, category.id as kpi_id, kpi FROM questions
            INNER JOIN possible_responses on questions.id = possible_responses.question_id
            INNER JOIN category ON questions.kpi_id = category.id
            INNER JOIN question_styles ON question_styles.id = questions.style_id
            WHERE kpi = 'retention'
            GROUP BY question, kpi, possible_responses.question_id, category.id, question,questions.style_id, question_styles.display_style_type
            ORDER BY question_id;`,
                function (errorMakingDatabaseQuery, result) {
                    done();
                    if (errorMakingDatabaseQuery) {
                        console.log('error', errorMakingDatabaseQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                });
        }
    });
});

router.get('/amenities', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {


            client.query(`SELECT possible_responses.question_id, question,questions.style_id, question_styles.display_style_type ,array_agg(response_text) as responses, array_agg(possible_responses.id) as response_ids, category.id as kpi_id, kpi FROM questions
            INNER JOIN possible_responses on questions.id = possible_responses.question_id
            INNER JOIN category ON questions.kpi_id = category.id
            INNER JOIN question_styles ON question_styles.id = questions.style_id
            WHERE kpi = 'amenities'
            GROUP BY question, kpi, possible_responses.question_id, category.id, question,questions.style_id, question_styles.display_style_type
            ORDER BY question_id;`,
                function (errorMakingDatabaseQuery, result) {
                    done();
                    if (errorMakingDatabaseQuery) {
                        console.log('error', errorMakingDatabaseQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                });
        }
    });
});

router.get('/conclusion', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {


            client.query(`SELECT possible_responses.question_id, question,questions.style_id, question_styles.display_style_type ,array_agg(response_text) as responses, array_agg(possible_responses.id) as response_ids, category.id as kpi_id, kpi FROM questions
            INNER JOIN possible_responses on questions.id = possible_responses.question_id
            INNER JOIN category ON questions.kpi_id = category.id
            INNER JOIN question_styles ON question_styles.id = questions.style_id
            WHERE kpi = 'conclusion'
            GROUP BY question, kpi, possible_responses.question_id, category.id, question,questions.style_id, question_styles.display_style_type
            ORDER BY question_id;`,
                function (errorMakingDatabaseQuery, result) {
                    done();
                    if (errorMakingDatabaseQuery) {
                        console.log('error', errorMakingDatabaseQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                });
        }
    });
});

router.post('/', function (req, res) {
    console.log('employee response:', req.body);
    var employeeResponseId = req.body.selectedResponse.id;
    var employeeResponseClient = req.body.clientId;
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`INSERT INTO employee_results (question_id, response_id, client_id)
            VALUES ((SELECT question_id FROM possible_responses
            WHERE possible_responses.id = $1), $1, $2); `, [employeeResponseId, employeeResponseClient],
                function (errorMakingDatabaseQuery, result) {
                    done();
                    if (errorMakingDatabaseQuery) {
                        console.log('error', errorMakingDatabaseQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                });
        }
    });
});


router.post('/input', function (req, res) {
    console.log('employee response:', req.body);
    var employeeResponseQuestionId = 43;
    var employeeResponseInput = req.body.response_from_input;
    var employeeResponseClient = 2;
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`INSERT INTO employee_results (question_id, response_from_input, client_id) VALUES ($1, $2, $3); `, [employeeResponseQuestionId, employeeResponseInput, employeeResponseClient],
                function (errorMakingDatabaseQuery, result) {
                    done();
                    if (errorMakingDatabaseQuery) {
                        console.log('error', errorMakingDatabaseQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                });
        }
    });
});


router.get('/client-info', function (req, res) {
        pool.connect(function (errorConnectingToDatabase, client, done) {
            if (errorConnectingToDatabase) {
                console.log('error', errorConnectingToDatabase);
                res.sendStatus(500);
            } else {

                client.query(`SELECT id, organization, logo_url, survey_hash FROM client;`,
                    function (errorMakingDatabaseQuery, result) {
                        done();
                        if (errorMakingDatabaseQuery) {
                            console.log('error', errorMakingDatabaseQuery);
                            res.sendStatus(500);
                        } else {
                            res.send(result.rows);
                        }
                    });
            }
        });
});

module.exports = router;