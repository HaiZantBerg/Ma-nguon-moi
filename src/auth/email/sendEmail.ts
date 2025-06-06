"use server";

import { CreateEmailOptions, CreateEmailRequestOptions, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
    payload: CreateEmailOptions,
    options?: CreateEmailRequestOptions,
) => {
    const { error, data } = await resend.emails.send(payload, options);

    if (error) return console.error(error);

    return data;
};
