import Horizon from '@horizon/client'

export function configureHorizon () {
  const horizon = new Horizon({
    authType: 'unauthenticated'
  })

  window.horizon = horizon

  horizon.connect()

  return horizon
}
