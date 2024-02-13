import type { RequestEvent } from './$types';
import {text} from "@sveltejs/kit";

// request body is always `null` if `content-type` header is not set/empty
export async function POST({ request }: RequestEvent): Promise<Response> {
    console.log(`headers content-type: '${request.headers.get("content-type")}'`, request.body == null)
    if (request.body == null) {
        return text("body missing")
    }
    return text("body present")
}
