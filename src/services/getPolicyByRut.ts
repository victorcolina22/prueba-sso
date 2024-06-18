import { PUBLIC_INDIVIDUAL_POLICY_URL } from "../constants";

export const getPolicyByRut = async () => {
  const response = await fetch(`${PUBLIC_INDIVIDUAL_POLICY_URL}`);
  const result = await response.json();
  return result;
};
