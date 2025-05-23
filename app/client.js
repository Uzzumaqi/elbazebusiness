import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kvxbfbsyitogqokgzfya.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2eGJmYnN5aXRvZ3Fva2d6ZnlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5Mzk4NzYsImV4cCI6MjA2MzUxNTg3Nn0.T9owUcSiQNMOxCyRdR5UjmI13ua6QGjjNNEQKd6SBoE"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;