import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/useAuth';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 flex h-auto flex-col items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm sm:h-16 sm:flex-row sm:px-[6vw] sm:py-0">
      <Link to="/" className="text-xl font-extrabold tracking-wide text-rose-600">
        PEER SUPPORT
      </Link>
      <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold sm:gap-6">
        <li>
          <Link to="/" className="hover:text-rose-600">Home</Link>
        </li>
        <li>
          <Link to="/forum" className="hover:text-rose-600">Forum</Link>
        </li>
        <li>
          <Link to="/groups" className="hover:text-rose-600">Groups</Link>
        </li>
        <li>
          <Link to="/resources" className="hover:text-rose-600">Resources</Link>
        </li>
        <li>
          <Link to="/chat" className="hover:text-rose-600">Chat</Link>
        </li>
        {user ? (
          <>
            <li className="text-slate-500">Hi, {user.name}</li>
            <li>
              <button
                onClick={handleLogout}
                className="rounded-lg bg-slate-800 px-4 py-1.5 text-white hover:bg-slate-700"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="hover:text-rose-600">Login</Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="rounded-lg bg-rose-600 px-4 py-1.5 text-white hover:bg-rose-700"
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
