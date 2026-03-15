import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/',           label: 'Home'        },
  { to: '/about',      label: 'About'       },
  { to: '/visits',     label: 'Visits'      },
  { to: '/gallery',    label: 'Gallery'     },
  { to: '/voices',     label: 'Voices'      },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/media',      label: 'Media'       },
  { to: '/upcoming',   label: 'Upcoming'    },
  { to: '/team',       label: 'Team'        },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
        PROJECT <span>COMPASS</span>
      </NavLink>

      <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
