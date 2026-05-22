
export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export type BodyType = "json" | "form" | "multipart" | "text" | "none";
export type ResponseType = "json" | "text" | "blob" | "arraybuffer";

export type HTTPBody = unknown;
export type HTTPQuery = Record<string, string | number | boolean | null | undefined>;
export type HTTPHeaders = Record<string, string>;

export interface HTTPRequest<TBody = HTTPBody, TQuery = HTTPQuery> {
    url: string
    baseURL?: string
    method: HTTPMethod
    body?: TBody
    query?: TQuery
    headers?: HTTPHeaders
    bodyType?: BodyType
    responseType?: ResponseType
    timeout?: number // Mile Second
    showLoader?: boolean
    onUploadProgress?: (progress: number) => void
    onDownloadProgress?: (progress: number) => void
}

export interface HTTPResponse<TData = unknown> {
    success: boolean
    status: number
    data: TData
    headers?: HTTPHeaders
    message?: string
    error?: unknown
}

export interface HTTPHooks<TData = unknown> {
    before?: (request: HTTPRequest) => void;
    success?: (response: HTTPResponse<TData>) => void;
    error?: (error: HTTPResponse<TData>) => void;
    finally?: () => void;
}

export interface HTTPClient {
  request<TData = unknown, TBody = unknown, TQuery = unknown>(request: HTTPRequest<TBody, TQuery>, hooks?: HTTPHooks<TData>): Promise<HTTPResponse<TData>>
}
