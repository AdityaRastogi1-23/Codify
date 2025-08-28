import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { RiCloseLargeLine } from 'react-icons/ri';
import { FaBook, FaBookReader, FaEnvelope, FaGraduationCap, FaHome, FaRoad, FaSignInAlt, FaSignOutAlt, FaUser, FaUserPlus, FaUserTie } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

function MobileMenu({ isOpen, onClose, isLoggedIn, userdata }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return createPortal(
    <div
      className={`
        fixed inset-0 z-[9000]
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        transition-all duration-300 ease-in-out
      `}
    >
      <div className="relative h-full w-full">
        {/* Overlay */}
        <div
          className={`
            absolute inset-0 bg-black/50 backdrop-blur-sm
            transition-opacity duration-300 ease-in-out
            ${isOpen ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={onClose}
        ></div>

        {/* Menu panel */}
        <div className={`
          absolute right-0 top-0 h-full w-64 overflow-y-auto z-[9100]
          ${isDark ? 'bg-dark-bg-primary' : 'bg-white'}
          ${isDark ? 'text-dark-text-primary' : 'text-light-text-primary'}
          shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="px-4 pt-5 pb-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaGraduationCap className={`text-2xl ${isDark ? 'text-primary' : 'text-primary'}`} />
                <span className="ml-2 font-righteous text-xl">Codify</span>
              </div>
              <button
                onClick={onClose}
                className={`
                  rounded-md p-2 focus:outline-none transition-colors z-[9200]
                  ${isDark
                    ? 'text-dark-text-primary hover:bg-dark-bg-tertiary'
                    : 'text-light-text-primary hover:bg-light-bg-tertiary'}
                `}
              >
                <span className="sr-only">Close menu</span>
                <RiCloseLargeLine className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6">
              <nav className="grid gap-y-2">
                <NavLink
                  to="/"
                  onClick={onClose}
                  className={({ isActive }) => `
                    px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                    ${isActive
                      ? isDark
                        ? 'bg-dark-bg-tertiary text-primary'
                        : 'bg-light-bg-tertiary text-primary'
                      : isDark
                        ? 'text-dark-text-primary hover:bg-dark-bg-tertiary'
                        : 'text-light-text-primary hover:bg-light-bg-tertiary'
                    }
                  `}
                >
                  <FaHome className='text-xl' /> <span className='text-xl'>Home</span>
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={onClose}
                  className={({ isActive }) => `
                    px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                    ${isActive
                      ? isDark
                        ? 'bg-dark-bg-tertiary text-primary'
                        : 'bg-light-bg-tertiary text-primary'
                      : isDark
                        ? 'text-dark-text-primary hover:bg-dark-bg-tertiary'
                        : 'text-light-text-primary hover:bg-light-bg-tertiary'
                    }
                  `}
                >
                  <FaUser className='text-xl' /> <span className='text-xl'>About</span>
                </NavLink>

                <NavLink
                  to="/courses"
                  onClick={onClose}
                  className={({ isActive }) => `
                    px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                    ${isActive
                      ? isDark
                        ? 'bg-dark-bg-tertiary text-primary'
                        : 'bg-light-bg-tertiary text-primary'
                      : isDark
                        ? 'text-dark-text-primary hover:bg-dark-bg-tertiary'
                        : 'text-light-text-primary hover:bg-light-bg-tertiary'
                    }
                  `}
                >
                  <FaBook className='text-xl' /> <span className='text-xl'>Courses</span>
                </NavLink>
                <NavLink
                  to="/notes"
                  onClick={onClose}
                  className={({ isActive }) => `
                    px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                    ${isActive
                      ? isDark
                        ? 'bg-dark-bg-tertiary text-primary'
                        : 'bg-light-bg-tertiary text-primary'
                      : isDark
                        ? 'text-dark-text-primary hover:bg-dark-bg-tertiary'
                        : 'text-light-text-primary hover:bg-light-bg-tertiary'
                    }
                  `}
                >
                  <FaBookReader className='text-xl' /> <span className='text-xl'>Notes</span>
                </NavLink>

                <NavLink
                  to="/roadmap"
                  onClick={onClose}
                  className={({ isActive }) => `
                    px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                    ${isActive
                      ? isDark
                        ? 'bg-dark-bg-tertiary text-primary'
                        : 'bg-light-bg-tertiary text-primary'
                      : isDark
                        ? 'text-dark-text-primary hover:bg-dark-bg-tertiary'
                        : 'text-light-text-primary hover:bg-light-bg-tertiary'
                    }
                  `}
                >
                  <FaRoad className='text-xl' /> <span className='text-xl'>Roadmaps</span>
                </NavLink>

                <NavLink
                  to="/contributors"
                  onClick={onClose}
                  className={({ isActive }) => `
                    px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                    ${isActive
                      ? isDark
                        ? 'bg-dark-bg-tertiary text-primary'
                        : 'bg-light-bg-tertiary text-primary'
                      : isDark
                        ? 'text-dark-text-primary hover:bg-dark-bg-tertiary'
                        : 'text-light-text-primary hover:bg-light-bg-tertiary'
                    }
                  `}
                >
                  <FaUser className='text-xl' /> <span className='text-xl'>Contributors</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={onClose}
                  className={({ isActive }) => `
                    px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                    ${isActive
                      ? isDark
                        ? 'bg-dark-bg-tertiary text-primary'
                        : 'bg-light-bg-tertiary text-primary'
                      : isDark
                        ? 'text-dark-text-primary hover:bg-dark-bg-tertiary'
                        : 'text-light-text-primary hover:bg-light-bg-tertiary'
                    }
                  `}
                >
                  <FaEnvelope className='text-xl' /> <span className='text-xl'>Contact</span>
                </NavLink>

                {isLoggedIn ? (
                  <>
                    <NavLink
                      to="/dashboard"
                      onClick={onClose}
                      className={({ isActive }) => `
                        px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                        ${isActive
                          ? isDark
                            ? 'bg-dark-bg-tertiary text-primary'
                            : 'bg-light-bg-tertiary text-primary'
                          : isDark
                            ? 'text-dark-text-primary hover:bg-dark-bg-tertiary'
                            : 'text-light-text-primary hover:bg-light-bg-tertiary'
                        }
                      `}
                    >
                      <FaUser className='text-xl' /> <span className='text-xl'>Dashboard</span>
                    </NavLink>

                    {(userdata?.isAdmin || userdata?.isReadOnlyAdmin) && (
                      <NavLink
                        to="/admin"
                        onClick={onClose}
                        className={({ isActive }) => `
                          px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                          ${isActive
                            ? isDark
                              ? 'bg-dark-bg-tertiary text-primary'
                              : 'bg-light-bg-tertiary text-primary'
                            : isDark
                              ? 'text-dark-text-primary hover:bg-dark-bg-tertiary'
                              : 'text-light-text-primary hover:bg-light-bg-tertiary'
                          }
                        `}
                      >
                        <FaUserTie className='text-xl' /> <span className='text-xl'>Admin Panel</span>
                      </NavLink>
                    )}

                    <NavLink
                      to="/logout"
                      onClick={onClose}
                      className={`
                        px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                        ${isDark
                          ? 'bg-primary/10 text-primary hover:bg-primary/20'
                          : 'bg-primary/10 text-primary hover:bg-primary/20'}
                      `}
                    >
                      <FaSignOutAlt className='text-xl' /> <span className='text-xl'>Logout</span>
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      onClick={onClose}
                      className={`
                        px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                        ${isDark
                          ? 'text-dark-text-primary hover:bg-dark-bg-tertiary'
                          : 'text-light-text-primary hover:bg-light-bg-tertiary'}
                      `}
                    >
                      <FaSignInAlt className='text-xl' /> <span className='text-xl'>Login</span>
                    </NavLink>

                    <NavLink
                      to="/signup"
                      onClick={onClose}
                      className={`
                        px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                        ${isDark
                          ? 'bg-primary text-white hover:bg-primary-dark'
                          : 'bg-primary text-white hover:bg-primary-dark'}
                      `}
                    >
                      <FaUserPlus className='text-xl' /> <span className='text-xl'>Sign Up</span>
                    </NavLink>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default MobileMenu;
