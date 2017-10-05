const fetchAttractions = () => {
  return fetch('/api')
  .then(res => {
    return res.json()
  })
  .catch(console.error)
}

const fetchItinerary = (itineraryId) => {
  return fetch('/api/itineraries/${itineraryId}`')
  .then(res => {
    return res.json(res)
  })
  .catch(console.error)
}


const postItinerary = itinerary =>
  fetch('/api/itineraries',{
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(itinerary)
  })
  .then(res => res.json())
  .catch(console.error);



// NB: hotels, rest, actives will be on req.body


module.exports = {fetchAttractions,fetchItinerary,postItinerary};
