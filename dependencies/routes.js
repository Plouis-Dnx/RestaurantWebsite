const express = require('express');
const router = express.Router();

//Connection to Database
const db = require('./db');

// GET

// Récupérer une réservation pour pouvoir les afficher plus tard
router.get('/reservations', (req, res) => {
    const data = `SELECT * FROM reservations`;
    db.all(data, (err, results) => {
        if (err) {
            console.error('Error while executing request', err.message);
            res.status(500).send('Server error');
            return;
        }
        res.json(results);
    });
});

// POST

// Ajouter une réservation
router.post('/book', (req, res) => {
    const {date, heure, nbpersonnes} = req.body;
    if(!date || !heure || !nbpersonnes){
        res.status(400).json({error: "Not enough arguments."});
        return;
    }
    try{
        db.run(
            `INSERT INTO reservations(date, heure, nbpersonnes) VALUES (?, ?, ?)`,
            [date, heure, nbpersonnes], (err) => {
                if(err) {
                    console.log('Server error', err.message);
                    return res.status(500).json({error: 'Server error.'});
                }
                res.status(201).json({message: 'Reservation successfully added.'});
            }
        );
    } catch (err) {
        console.log('Error : ', err);
        res.status(500).json({error: 'Server error.'});
    }
});

// PUT

// Modifier une réservation
router.put('/update', (req, res) => {
    const {date, heure, nbpersonnes} = req.body;
    if(!date || !heure || !nbpersonnes){
        res.status(400).json({error: "Not enough arguments."});
        return;
    }
    db.run('UPDATE reservation SET date = ? AND SET heure = ? AND SET nbpersonnes = ?',
        [date, heure, nbpersonnes], (err) => {
            if(err){
                console.log('Failed to update reservation.', err.message);
                return res.status(500).json({error: 'Failed to update reservation.'});
            }
            res.status(200).json({message: 'Reservation updated successfully.'});
        }
    );
});

// DELETE

// Annuler une réservation
router.delete('/cancel', (req, res) => {
    const idReservation = req.body;
    if(!idReservation) {
        res.status(400).json({error: "Not enough arguments. Waiting for a specific reservation."});
        return;
    }
    try{
        db.run('DELETE FROM reservations WHERE idReservation = ?',
            [idReservation], (err) => {
                if(err) {
                    console.log('Failed to delete reservation', err.message);
                    return res.status(500).json({error: 'Failed to delete account'});
                }
                res.status(201).json({message: 'Reservation deleted successfully.'});
            }
        );
    } catch (e) {
        console.log('Error : ', e);
        res.status(500).json({error: 'Server error.'});
    }
})


// S'il y a une erreur, l'afficher sur la page web directement !!!!!!!

module.exports = router;