import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/AuthContext';



const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editError, setEditError] = useState('');
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const profileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout, user, updateProfile } = useAuth();
  const profileName = user?.name?.trim() || 'User';
  const profileEmail = user?.email?.trim() || 'user@peersupport.app';
  const profileInitial = profileName.charAt(0).toUpperCase();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Resources', to: '/resources' },
    { name: 'Contact', to: '/contact' },
  ];

  const guestLinks = [
    { name: 'Resources', to: '/resources' },
    { name: 'Login', to: '/login' },
    { name: 'Signup', to: '/signup' },
  ];

  const handleLogout = () => {
    const shouldLogout = window.confirm('Are you sure you want to log out?')
    if (!shouldLogout) return

    setIsProfileOpen(false);
    setIsEditingProfile(false);
    logout();
    navigate('/login');
  };

  const handleSaveProfile = async () => {
    setEditError('');
    setIsSavingProfile(true);

    try {
      await updateProfile({ name: editName, email: editEmail });
      setIsEditingProfile(false);
    } catch (err) {
      setEditError(err?.message || 'Could not update profile.');
    } finally {
      setIsSavingProfile(false);
    }
  };

  useEffect(() => {
    const onClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  useEffect(() => {
    if (!isProfileOpen) return;
    setEditName(profileName);
    setEditEmail(profileEmail);
    setEditError('');
  }, [isProfileOpen, profileName, profileEmail]);

  return (
    <>
      <nav className="sticky top-0 z-50 flex h-auto flex-col items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm sm:h-18.5 sm:flex-row sm:px-[6vw] sm:py-0">
        <div className="text-xl font-extrabold tracking-wide text-rose-600">PEER SUPPORT</div>
        <ul className="flex flex-wrap items-center justify-center gap-4 font-bold sm:gap-8" style={{ fontSize: '1rem' }}>
          {(isAuthenticated ? navLinks : guestLinks).map(link => (
            <li key={link.name}>
              <Link
                to={link.to}
                className={
                  (location.pathname === link.to
                    ? 'text-rose-600 border-b-2 border-rose-600 pb-0.5 font-bold'
                    : 'text-slate-800 font-bold hover:text-rose-600 transition-colors')
                  + ' text-base md:text-base lg:text-base xl:text-base'
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
          {isAuthenticated && (
            <li className="relative" ref={profileMenuRef}>
              <button
                type="button"
                onClick={() => setIsProfileOpen(prev => !prev)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 shadow-sm transition hover:border-rose-300"
              >
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-sm font-bold text-white">
                  {profileInitial}
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-white bg-emerald-500" />
                </div>
                <span className="text-sm font-semibold text-slate-700">{profileName}</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-60 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
                  <div className="mb-2 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-xs font-bold text-white">
                      {profileInitial}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">{profileName}</div>
                      <div className="max-w-[150px] truncate text-[11px] text-slate-500">{profileEmail}</div>
                    </div>
                  </div>

                  {!isEditingProfile && (
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handleLogout}
                        className="flex-1 rounded-md bg-rose-600 px-2 py-1.5 text-xs font-bold text-white transition hover:bg-rose-700"
                      >
                        Logout
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditingProfile(true)}
                        className="flex-1 rounded-md border border-slate-300 px-2 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-rose-300 hover:text-rose-600"
                      >
                        Edit
                      </button>
                    </div>
                  )}

                  {isEditingProfile && (
                    <div className="space-y-1.5">
                      <input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        placeholder="Full name"
                        className="w-full rounded-md border border-slate-300 px-2.5 py-1.5 text-xs outline-none focus:border-rose-400"
                      />
                      <input
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full rounded-md border border-slate-300 px-2.5 py-1.5 text-xs outline-none focus:border-rose-400"
                      />
                      {editError && <div className="text-xs text-red-500">{editError}</div>}

                      <div className="flex items-center gap-1.5 pt-0.5">
                        <button
                          type="button"
                          onClick={handleSaveProfile}
                          disabled={isSavingProfile}
                          className="flex-1 rounded-md bg-rose-600 px-2.5 py-1.5 text-xs font-bold text-white transition hover:bg-rose-700 disabled:opacity-60"
                        >
                          {isSavingProfile ? 'Saving...' : 'Save'}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsEditingProfile(false);
                            setEditError('');
                            setEditName(profileName);
                            setEditEmail(profileEmail);
                          }}
                          className="flex-1 rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-semibold text-slate-700"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
