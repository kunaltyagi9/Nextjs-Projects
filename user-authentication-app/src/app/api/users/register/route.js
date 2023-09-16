import Connection from '@/database/config';
import User from '@/models/user';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

Connection();

export const POST = async (NextRequest) => {
    try {
        const body = await NextRequest.json();
        console.log(body);
        const { name, username, password } = body;

        if (!name || !username || !password) {
            return new Response("Name, Username and Password is required", { status: 401 });
        }

        const user = await User.findOne({ username });
        if (user) {
            return new Response("Username already exist", { status: 400 });
        }

        const salt = await bcryptjs.genSalt(12);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            name,
            username,
            password: hashedPassword,
        })

        await newUser.save();
        
        return new Response("User saved successfully", { status: 200 });
    } catch (error) {
        console.log(error);
    }
}