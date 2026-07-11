export interface ActionResponse<T = null> {
  success: boolean;
  message: string;
  data: T | null;
  error?: unknown;
}

export function successResponse<T>(
  message: string,
  data?: T
): ActionResponse<T> {
  return {
    success: true,
    message,
    data: data ?? null,
  };
}

export function errorResponse(
  message: string,
  error?: unknown
): ActionResponse<null> {
  return {
    success: false,
    message,
    data: null,
    error,
  };
}