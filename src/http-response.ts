import { HttpRequest } from "./http-request";

export class HttpResponse
{
    get status(): number { return this.response.status; }

    get statusText(): string { return this.response.statusText; }

    get headers(): Headers { return this.response.headers; }

    get trailer(): Promise<Headers> { return this.response.trailer };

    get ok(): boolean { return this.response.ok; }

    get redirected(): boolean { return this.response.redirected; }

    get type(): ResponseType { return this.response.type; }

    get url(): string { return this.response.url; }

    constructor(
        public readonly response: Response,
        public readonly request: HttpRequest)
    {
    }

    async json(): Promise<any>
    {
        return this.response.json();
    }

    async text(): Promise<string>
    {
        return this.response.text();
    }

    async arrayBuffer(): Promise<ArrayBuffer>
    {
        return this.response.arrayBuffer();
    }

    async formData(): Promise<FormData>
    {
        return this.response.formData();
    }

    async blob(): Promise<Blob>
    {
        return this.response.blob();
    }

    async cloneInternalResponse(): Promise<Response>
    {
        return this.response.clone();
    }
}