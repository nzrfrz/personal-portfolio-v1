import { useMemo } from "react";

import { fabContentData } from "../_utils";
import { useNavlogoAnim } from "../animation";

import { IoClose } from "react-icons/io5";
import logo from "../assets/nzrfrz-logo.png";
import styles from "../_styles/NavLogo.module.css";

export function NavLogo() {

  const {
    navLogoRef,
    logoRouteItemsRef,
    windowDimension,
    isNavlogoOpen,
    onLogoClick,
    onRouteLinkClick,
    onExternalLinkClick,
    onHoverExtLink,
    onContainerClick,
  } = useNavlogoAnim();

  const navLogoItems = useMemo(() => {
    if (windowDimension.width > 650) return fabContentData.filter((content) => content.type !== "route");

    return fabContentData;
  }, [windowDimension, fabContentData]);

  return (
    <div 
    onClick={onContainerClick}
    className={isNavlogoOpen === true ? styles.navLogoContainer : ""}
    >
      <div className={styles.wrapper}>

        <button
          ref={navLogoRef}
          onClick={onLogoClick}
          className={styles.logoButton}
        >
          {isNavlogoOpen === true ? <IoClose color="white" fontSize="30px" /> : <img src={logo} alt="nzrfrz" width="20px" />}
        </button>

        {
          navLogoItems.map((item, index) =>
            <div
              key={index}
              className={styles.routeItemWrapper}
              ref={(el) => { logoRouteItemsRef.current[index] = el; }}
            >
              {
                item.type === "route" ?
                  <div
                    onClick={() => onRouteLinkClick(item.path as string)}
                    className={location.pathname === item.path ? styles.activeNavLink : styles.navLink}
                  >
                    <div className={styles.navLabel}>{item.title}</div>
                  </div>
                  :
                  <div
                    className={styles.imageWrapper}
                    onMouseEnter={() => onHoverExtLink(index)}
                  >
                    <img
                      width="23px"
                      height="auto"
                      src={item?.icon as string}
                      onClick={() => onExternalLinkClick(item.path as string)}
                    />
                  </div>
              }
            </div>
          )
        }

      </div>
    </div>
  );
};