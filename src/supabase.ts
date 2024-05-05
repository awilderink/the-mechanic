import { createClient } from "@supabase/supabase-js";
import type { Database } from "../database.types";

export const supabase = createClient<Database>(
	"https://yfqolmckjxtqycmsotum.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmcW9sbWNranh0cXljbXNvdHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MjcwOTMsImV4cCI6MjAyMDQwMzA5M30.qyt9UR52cJK6jB1fdQPWe_JpMLqvORMJhEpLIIEHlN8",
);
