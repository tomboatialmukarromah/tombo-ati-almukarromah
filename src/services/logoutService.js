import { supabase } from "../supabaseClient";

export const logoutAdmin = async () => {
  await supabase.auth.signOut();
};
