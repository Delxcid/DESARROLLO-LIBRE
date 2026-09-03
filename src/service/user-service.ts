import { API_BASE_URL } from "../api/apiBASE";
import type { LoginPayLoad, LoginResponse } from "../models/user";



export async function loginUser(
  payload: LoginPayLoad
): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = "Error al iniciar sesión";

    try {
      const err = await response.json();
      message = err?.message ?? message;
    } catch (error) {
      console.log("error",error);
    }

    throw new Error(message)
  }

  return response.json()
}