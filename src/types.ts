export interface Config {
  api_url: string
}

export interface Plant {
  uid: string
  name: string
}

export interface Datapoint {
  day: string
  plant_uid: string
  total_energy_expected: number
  total_energy_observed: number
  total_irradiation_expected: number
  total_irradiation_observed: number
}