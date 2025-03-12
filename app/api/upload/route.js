import { NextResponse } from "next/server";
import fs from 'fs';
import { pipeline } from "stream";
import { promisify } from "util";

const pump = promisify(pipeline);

export async function POST(request, response) {
    try {
        //
    } catch (error) {
        //
    }
}