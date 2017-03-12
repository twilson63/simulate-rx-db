const fetch = require('isomorphic-fetch')
const { map, set, lensProp, compose } = require('ramda')

async function generateMedications () {
  const meds = await fetch('https://rxnav.nlm.nih.gov/REST/Prescribe/allconcepts.json?tty=SCD+SBD')
    .then(res => res.json())
    .then(res => res.minConceptGroup.minConcept)
    .then(meds => map(
      compose(
        med => set(lensProp('_id'), 'rxnorm/' + med.rxcui, med),
        set(lensProp('type'), 'medication')
      ),
      meds)
    )
  return meds
}

module.exports = generateMedications
