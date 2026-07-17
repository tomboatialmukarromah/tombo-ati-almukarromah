import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/loginService";
import Button from "../components/UI/Button";
import InputField from "../components/UI/Fields/InputField";
import { FiMail, FiLock } from "react-icons/fi";
import SEO from "../components/common/SEO";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const result = await loginAdmin(email, password);
    setLoading(false);

    if (result.success) {
      navigate("/dashboard"); // Jika sukses, arahkan ke dashboard
    } else {
      setErrorMsg("Email atau Password salah. Silakan coba lagi.");
    }
  };

  return (
    <main className="min-h-screen bg-light flex items-center justify-center px-6">
      <SEO title="Login Admin" description="Halaman login admin Tombo Ati Al Mukarramah." noindex={true} />
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-secondary/20 shadow-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="font-heading font-bold text-2xl text-dark">
            Portal Admin
          </h1>
          <p className="font-body text-sm text-muted">
            Masuk untuk mengakses dashboard analisis data
          </p>
        </div>

        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-xl font-body text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <InputField
            label="Email Admin"
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@tomboati.com"
            icon={FiMail}
          />
          <InputField
            label="Password"
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            icon={FiLock}
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full py-3.5"
            disabled={loading}
          >
            {loading ? "Memverifikasi..." : "Masuk Ke Sistem"}
          </Button>
        </form>
      </div>
    </main>
  );
}
