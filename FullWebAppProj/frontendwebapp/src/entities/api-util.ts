export enum AuthApiStatus {
    None = "None",
    CannotCreateDuplicateUserBadRequest = "CannotCreateDuplicateUserBadRequest",
    CannotCreateDuplicateUserVerificationRequestBadRequest = "CannotCreateDuplicateUserVerificationRequestBadRequest",
    DuplicateUserReturnedInternalError = "DuplicateUserReturnedInternalError",
    UserNotFound = "UserNotFound",
    UserNotVerified = "UserNotVerified",
    UserVerificationNotFound = "UserVerificationNotFound",
    UserVerificationTokenExpired = "UserVerificationTokenExpired",
    InternalError = "InternalError",
    SuccessPendingEmailVerification = "SuccessPendingEmailVerification",
    Success = "Success",
    SellerShopCreationError = "SellerShopCreationError",
}

export enum AuthApiStatusCode {
    None = 100,
    Success = 200,
    Created = 201,
    NoContent = 204,
    Failed = 400,
    Unauthorized = 401,
    InternalServerError = 500,
}

export enum Roles {
    SuperAdmin = 1,
    Admin = 2,
    User = 3
}

export interface AuthApiMessage {
    message: string,
}

export const AuthApiMessage = "User registered successfully. An email verification link has been sent.";

export interface TokenResponse
{
    token: string
}

export interface AuthAttributes
{
    email: string,
    password: string
}

export interface UserAttributes
{
    id:number,
    name: string
    email: string,
   
}

export interface RoleAttributes
{
    id: number,
    name: string
}

export interface RoleData
{
    id?: number,
    name: string
}

export interface UserData
{
    id?: number,
    name: string,
    email: string,
    roleName: string
}

export interface CategoryData
{
    id?: number,
    name: string
}

export interface ProductData
{
    id?: number,
    name: string,
    price: number
}


export enum StateStatus {
    Idle = 'idle',
    Success = 'success',
    Failed = 'failed'
}


export interface Company
{
    id: number,
    name: string,
    description: string
    imageUrl: string
}

export interface Job
{
    id: number | string;
    title: string;
    location: string;
    companyId: string;
    categoryId: string | number;
    status: boolean;
    salary: number
}

export interface Application
{
    id: number ;
    jobId: number;
    userId: number ;
    companyId: number ;
}

export interface User
{
    id: string ;
    name: string;
    email: string;
    roleId: string;
}

export interface Role
{
    id: string,
    name: string
}

export interface Category
{
    id: string,
    name: string,
    imageUrl:string
}

export interface Product
{
    id: string,
    categoryId: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
    description: string;
}