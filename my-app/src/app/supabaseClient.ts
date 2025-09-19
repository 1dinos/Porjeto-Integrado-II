import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://toomytxlivvptomscqpk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvb215dHhsaXZ2cHRvbXNjcXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyNjc1MDksImV4cCI6MjA3Mzg0MzUwOX0.cJwXITdx7Qg82GOdIofU8DFDZStMcL1hrZUt54flf5Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)