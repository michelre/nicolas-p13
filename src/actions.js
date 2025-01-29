import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, signin, updateUser } from "./api";

const signinAction = createAsyncThunk(
    'users/signin',
    async ({email, password}) => {
        const response = await signin(email, password)
        return response.body
      },
)

const getUserAction = createAsyncThunk(
    'users/getUser',
    async ({token}) => {
        const response = await getUser(token)
        return response.body
      },
)

const updateUserAction = createAsyncThunk(
    'users/updateUser',
    async ({firstName, lastName, token}) => {
        const response = await updateUser({firstName, lastName}, token)
        return response.body
      },
)

export {signinAction, getUserAction, updateUserAction}