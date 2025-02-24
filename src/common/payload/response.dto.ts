export interface ResponseDto<T> {
    data: T;
    message: string;
    statusCode: number;
}
