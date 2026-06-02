
export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export type BodyType = "json" | "form" | "multipart" | "text" | "none";
export type ResponseType = "json" | "text" | "blob" | "arraybuffer";

export type HTTPBody = unknown;
export type HTTPQuery = Record<string, string | number | boolean | null | undefined>;
export type HTTPHeaders = Record<string, string>;

export interface HTTPRequest<TRequestBody = HTTPBody, TRequestQuery = HTTPQuery> {
    url: string
    baseURL?: string
    isAbsoluteUrl?: boolean
    method: HTTPMethod
    body?: TRequestBody
    query?: TRequestQuery
    headers?: HTTPHeaders
    bodyType?: BodyType
    responseType?: ResponseType
    timeout?: number // Mile Second
    onUploadProgress?: (progress: number) => void
    onDownloadProgress?: (progress: number) => void
}

export interface HTTPResponse<TResponseBody = unknown> {
    isSuccess: boolean
    statusCode: number
    body?: TResponseBody | null
    headers?: HTTPHeaders | null
    message?: string
    error?: unknown
}

export interface HTTPHooks<TResponseBody = unknown, TRequestBody = HTTPBody, TRequestQuery = HTTPQuery> {
    before?: (request: HTTPRequest<TRequestBody, TRequestQuery>) => void;
    success?: (response: HTTPResponse<TResponseBody>) => void;
    error?: (error: HTTPResponse<TResponseBody>) => void;
    finally?: () => void;
}

export interface HTTPClient {
  request<TResponseBody = unknown, TRequestBody = unknown, TRequestQuery = unknown>(request: HTTPRequest<TRequestBody, TRequestQuery>, hooks?: HTTPHooks<TResponseBody, TRequestBody, TRequestQuery>): Promise<HTTPResponse<TResponseBody>>
}
