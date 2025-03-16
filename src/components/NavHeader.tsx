import { useNavHeaderAnim } from "../animation";
import { routeRegistry } from "../routes/RouteRegistry";

import styles from "../_styles/NavHeader.module.css";

export function NavHeader() {

  const {
    location,
    navigateTo,
    windowDimension,
    navlinkRef,
    navlinkWrapperRef,
    navlinkHoverAnim,
    navlinkHoverReset,
    navHeaderContainerRef,
  } = useNavHeaderAnim(styles);  
  
  return (
    <div ref={navHeaderContainerRef} className={styles.container}>
      <div className={styles.navHeaderContent}>
        <div
          className={styles.navLinkContainer}
          style={{ display: windowDimension.width <= 650 ? "none" : "flex" }}
        >
          {
            routeRegistry.map((route, index) =>
              <div
                key={route.label}
                className={styles.navLinkWrapper}
                onClick={() => {
                  navigateTo(route.path);
                  navlinkHoverReset(false, navlinkWrapperRef, index);
                }}
                ref={(el) => { navlinkWrapperRef.current[index] = el }}
                onMouseEnter={() => navlinkHoverAnim(false, navlinkWrapperRef, index)}
                onMouseLeave={() => navlinkHoverReset(false, navlinkWrapperRef, index)}
              >
                <div ref={navlinkRef} className={location.pathname === route.path ? styles.activeNavLink : styles.navLink}>
                  <div className={styles.navlinkUnderlined}></div>
                  <div className={styles.navLabel}>{route.key}</div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};