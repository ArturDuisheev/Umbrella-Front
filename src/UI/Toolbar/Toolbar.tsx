'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import NavList from '@/UI/Toolbar/components/NavList/NavList';
import FormLink from '@/components/FormLink/FormLink';
import '../Toolbar/Toolbar.scss';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from '@/lib/hooks';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

const Toolbar = () => {
  const [open, setOpen] = useState(false);
  const [openServices, setOpenServices] = useState<boolean>(false);
  const [bgc, setBgc] = useState(false);
  const pathname = usePathname();
  const scroll = useScrollPosition();
  const isMobile = useMediaQuery(992);

  const handleCloseServices = () => {
    setOpenServices(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (scroll > 50) {
      setBgc(true);
    } else {
      setBgc(false);
    }
  }, [scroll]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Determine the class for header
  const headerClass = () => {
    let classNames = '';

    if (pathname === '/about-us') {
      classNames += 'header-about-us ';
    } else if (pathname === '/form') {
      classNames += 'header-form ';
    }

    if (bgc) {
      classNames += 'bgc';
    }

    return classNames.trim();
  };

  return (
    <header className={`header ${headerClass()}`}>
      <div className="content">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-wrapper-logo-desktop">
              <Link className="header-wrapper-logo-desktop-link" href="/">
                <img
                  className="header-wrapper-logo-desktop-logo-img"
                  src="/assets/toolbar/logo.svg"
                  alt="Umbrella agency"
                />
              </Link>
            </div>

            {!isMobile && (
              <div className="header-wrapper-nav">
                <NavList setOpen={setOpen} open={open} />
              </div>
            )}

            <div className="header-wrapper-link-button">
              <FormLink />
            </div>

            <div className="header-wrapper-mobile">
              <div className="header-wrapper-mobile-burger">
                {open ? (
                  <img
                    src="/assets/toolbar/close-menu.svg"
                    alt="Close"
                    onClick={() => setOpen(false)}
                  />
                ) : (
                  <img src="/assets/toolbar/menu.svg" alt="Menu" onClick={() => setOpen(true)} />
                )}
              </div>
              <div className={`header-wrapper-mobile-menu ${open ? 'active ' : ''}`}>
                <div className="header-wrapper-mobile-menu-logo">
                  <Link
                    className="header-wrapper-mobile-menu-logo-link"
                    href="/"
                    onClick={() => setOpen(false)}
                  >
                    <img
                      className="header-wrapper-mobile-menu-logo-img"
                      src="/assets/toolbar/logo-mobile.svg"
                      alt="Umbrella agency"
                    />
                  </Link>
                </div>
                <div className="header-wrapper-mobile-menu-nav">
                  <NavList
                    isMobile={true}
                    open={open}
                    setOpen={setOpen}
                    setOpenServices={setOpenServices}
                    openServices={openServices}
                    handleCloseServices={handleCloseServices}
                  />
                  <FormLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
