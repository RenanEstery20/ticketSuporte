import { create } from "../controllers/tickets/create.js";

export const tickets = [
    {
        method: "POST",
        patch: "/tickets",
        controller: create
    }
]