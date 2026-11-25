import { CONFIGURATION } from "@/config/config";
import axios from "axios";

export const oojClient = axios.create({
    baseURL: CONFIGURATION.OOJ_CLIENT_BASE_URL,
    timeout: 5000, 
});