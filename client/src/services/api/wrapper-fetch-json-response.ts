import { FetchJsonResponse } from "./types/fetch-json-response";
import HTTP_CODES_ENUM from "./types/http-codes";

async function wrapperFetchJsonResponse<T>(
  response: Response,
): Promise<FetchJsonResponse<T>> {
  const status = response.status;

  const isEmptyBody = [
    HTTP_CODES_ENUM.NO_CONTENT,
    HTTP_CODES_ENUM.SERVICE_UNAVAILABLE,
    HTTP_CODES_ENUM.INTERNAL_SERVER_ERROR,
  ].includes(status);

  if (isEmptyBody) {
    return { status, data: undefined } as FetchJsonResponse<T>;
  }

  const json = await response.json();

  return {
    status,
    data: json.data,
  } as FetchJsonResponse<T>;
}

export default wrapperFetchJsonResponse;
