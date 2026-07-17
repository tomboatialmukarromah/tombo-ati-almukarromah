import { supabase } from "../supabaseClient";

/**
 * Fungsi untuk memproses login admin
 * @param {string} email
 * @param {string} password
 */
export const loginAdmin = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { success: true, user: data.user };
  } catch (error) {
    console.error("Login gagal:", error.message);
    return { success: false, error: error.message };
  }
};

/**
 * Fungsi untuk proses logout
 */

