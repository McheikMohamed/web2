var express = require('express')
var router = express.Router()

const Affiche = [
    {
        id: 1,
        title: 'Les aventures de Sherlock',
        duration: 120,
        budget: 1.8,
        link: 'www.kinepolice/Les-aventures-de-Sherlock',
    },
    {
        id: 2,
        title: 'Les aventures de Tintin',
        duration: 240,
        budget: 2.1,
        link: 'www.kinepolice/Les-aventures-de-Tintin',
    },
    {
        id: 3,
        title: 'Les aventures de Mahmoud',
        duration: 180,
        budget: 1.4,
        link: 'www.kinepolice/Les-aventures-de-Mahmoud',
    },
]

/*Get Affiche*/
/*router.get('/',(req,res,next)=>{
  console.log('Get /cinema')
  return res.json(Affiche);
})*/

router.get('/', (req, res, next) => {
    const dureeMinimum = req?.query?.minimumDuration

    if (dureeMinimum) {
        let copyAffiche = Affiche.filter(
            (film) => film.duration >= dureeMinimum
        )
        res.json(copyAffiche ?? Affiche)
    }
    res.json(Affiche)
})

router.get('/:id', (req, res, next) => {
    console.log('Get /cinema/id')

    const idFound = Affiche.findIndex((film) => film.id == req.params.id)

    if (!Affiche[idFound]) res.sendStatus(404)

    return res.json(Affiche[idFound])
})

router.post('/', (req, res, next) => {
    const title = req?.body?.title?.length !== 0 ? req.body.title : undefined
    const duration = req?.body?.duration > 0 ? req.body.duration : undefined
    const budget = req?.body?.budget > 0 ? req.body.budget : undefined
    const link = req?.body?.link?.length !== 0 ? req.body.link : undefined

    console.log('POST film')

    if (!title || !duration || !budget || !link)
        return res.sendStatus(400) /*Bad request*/

    const lastItemIndex = Affiche?.length !== 0 ? Affiche.length - 1 : undefined
    const lastID = lastItemIndex !== undefined ? Affiche[lastItemIndex].id : 0
    const nextID = lastID + 1

    let newFilm = {
        id: nextID,
        title: title,
        duration: duration,
        budget: budget,
        link: link,
    }

    if (Affiche.find((film) => film.title == newFilm.title)) {
        res.sendStatus(409)
    } else {
        Affiche.push(newFilm)
        return res.json(newFilm)
    }
})

router.delete('/:id', (req, res, next) => {
    const idFound = Affiche.findIndex((film) => film.id == req.params.id)
    if (idFound < 0) res.sendStatus(404)

    const filmRemovedFromAffiche = Affiche.splice(idFound, 1)
    const filmRemoved = filmRemovedFromAffiche[0]
    res.json(filmRemoved)
})



module.exports = router
