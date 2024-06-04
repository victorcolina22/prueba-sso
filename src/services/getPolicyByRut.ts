import { PUBLIC_INDIVIDUAL_POLICY_URL } from "../constants"

export const getPolicyByRut = async (rut: string) => {
  const response = await fetch(`${PUBLIC_INDIVIDUAL_POLICY_URL}/${rut}`)
  const result = await response.json()
  return result
}
