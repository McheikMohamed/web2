const express = require('express')
const { serialize, parse } = require('../utils/json')
const router = express.Router()

const jsonDbPath = ('../utils/json')

// eslint-disable-next-line n/no-path-concat
const Affiche = [
  {
    id: 1,
    title: 'Les aventures de Sherlock',
    duration: 120,
    budget: 1.8,
    link: 'www.kinepolice/Les-aventures-de-Sherlock'
  },
  {
    id: 2,
    title: 'Les aventures de Tintin',
    duration: 240,
    budget: 2.1,
    link: 'www.kinepolice/Les-aventures-de-Tintin'
  },
  {
    id: 3,
    title: 'Les aventures de Mahmoud',
    duration: 180,
    budget: 1.4,
    link: 'www.kinepolice/Les-aventures-de-Mahmoud'
  }
]

/* Get Affiche */
/* router.get('/',(req,res,next)=>{
  console.log('Get /cinema')
  return res.json(Affiche);
}) */

router.get('/', (req, res, next) => {
  const dureeMinimum = req?.query?.minimumDuration

  const films = parse(jsonDbPath, Affiche)

  if (dureeMinimum) {
    const copyAffiche = films.filter(
      (film) => film.duration >= dureeMinimum
    )
    res.json(copyAffiche ?? films)
  }

  serialize(jsonDbPath, films)
  res.json(films)
})

router.get('/:id', (req, res, next) => {
  console.log('Get /cinema/id')

  const films = parse(jsonDbPath, Affiche)

  const idFound = films.findIndex((film) => film.id === req.params.id)

  if (idFound < 0) res.sendStatus(404)

  return res.json(films[idFound])
})

router.post('/', (req, res, next) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined
  const duration = req?.body?.duration > 0 ? req.body.duration : undefined
  const budget = req?.body?.budget > 0 ? req.body.budget : undefined
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined

  console.log('POST film')

  if (!title || !duration || !budget || !link) {
    return res.sendStatus(400)
  } /* Bad request */

  const films = parse(jsonDbPath, Affiche)
  const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined
  const lastID = lastItemIndex !== undefined ? films[lastItemIndex].id : 0
  const nextID = lastID + 1

  const newFilm = {
    id: nextID,
    title,
    duration,
    budget,
    link
  }

  if (Affiche.find((film) => film.title === newFilm.title)) {
    res.sendStatus(409)
  } else {
    films.push(newFilm)
    serialize(jsonDbPath, films)
    return res.json(newFilm)
  }
})

router.delete('/:id', (req, res, next) => {
  const films = parse(jsonDbPath, Affiche)
  const idFound = films.findIndex((film) => film.id === req.params.id)
  if (idFound < 0) res.sendStatus(404)

  const filmRemovedFromAffiche = films.splice(idFound, 1)
  const filmRemoved = filmRemovedFromAffiche[0]

  serialize(jsonDbPath, films)
  res.json(filmRemoved)
})

router.patch('/:id', (req, res, next) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined
  const duration = req?.body?.duration > 0 ? req.body.duration : undefined
  const budget = req?.body?.budget > 0 ? req.body.budget : undefined
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined

  if (
    (!title && !duration && !budget && !link) ||
        title?.length === 0 ||
        duration <= 0 ||
        budget <= 0 ||
        link?.length === 0
  ) {
    res.sendStatus(400)
  }

  const films = parse(jsonDbPath, Affiche)

  const idFound = films.findIndex((film) => film.id === req.params.id)
  if (idFound < 0) res.sendStatus(404)

  const updatedFilm = { ...films[idFound], ...req.body }
  films[idFound] = updatedFilm

  serialize(jsonDbPath, films)
  res.json(updatedFilm)
})

router.put('/:id', (req, res, next) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined
  const duration = req?.body?.duration > 0 ? req.body.duration : undefined
  const budget = req?.body?.budget > 0 ? req.body.budget : undefined
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined

  if (
    !title ||
        !duration ||
        !budget ||
        !link ||
        title?.length === 0 ||
        duration <= 0 ||
        budget <= 0 ||
        link?.length === 0
  ) {
    res.sendStatus(400)
  }

  const films = parse(jsonDbPath, Affiche)

  const idFound = films.findIndex((film) => film.id === req.params.id)
  if (idFound < 0) {
    const newFilm = {
      id: films.length + 1,
      title,
      duration,
      budget,
      link
    }
    films.push(newFilm)

    serialize(jsonDbPath, films)
    res.json(newFilm)
  }

  const updatedFilm = { ...films[idFound], ...req.body }

  films[idFound] = updatedFilm

  serialize(jsonDbPath, films)
  res.json(updatedFilm)
})

module.exports = router
