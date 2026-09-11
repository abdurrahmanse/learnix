export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number = 500, data: unknown = null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

export interface ApiErrorResponse {
  detail: string | Array<{ loc: string[]; msg: string; type: string }>;
}
