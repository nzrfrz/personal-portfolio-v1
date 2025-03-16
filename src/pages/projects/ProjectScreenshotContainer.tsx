import { use, useMemo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, EffectFlip, Mousewheel } from 'swiper/modules';

import { IoClose } from "react-icons/io5";
import styles from "../../_styles/ProjectScreenshotContainer.module.css";

import { IProjects } from "../../_utils";
import { GlobalContext } from "../../context/createContext";

interface ThisProps {
  selectedProjectData?: IProjects;
  isScreenshotContainerOpen?: boolean;
  onClose: () => void;
}

export const ProjectScreenshotContainer: React.FC<ThisProps> = ({
  selectedProjectData,
  isScreenshotContainerOpen = false,
  onClose,
}) => {
  if (isScreenshotContainerOpen === false) return;

  const { windowDimension } = use(GlobalContext);

  const renderLandscapeImageCarouselVertical = useMemo(() => {
    const imageData = selectedProjectData?.projectScreenshot;
    if (!imageData || imageData.length === 0) return;

    return (
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={16}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className={styles.mySwiperVertical}
      >
        {
          imageData.map((item, index) =>
            <SwiperSlide key={index} className={styles.mySwiperSliderVertical}>
              <img src={item} />
            </SwiperSlide>
          )
        }
      </Swiper>
    )
  }, [selectedProjectData]);

  const renderLandscapeImageCarousel = useMemo(() => {
    const imageData = selectedProjectData?.projectScreenshot;
    if (!imageData || imageData.length === 0) return;

    return (
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        initialSlide={2}
        slidesPerView={2}
        slidesPerGroup={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {
          imageData.map((item, index) =>
            <SwiperSlide key={index} className={styles.mySwiperSlider}>
              <img src={item} />
            </SwiperSlide>
          )
        }
      </Swiper>
    )
  }, [selectedProjectData]);

  const renderPortraitImageCarousel = useMemo(() => {
    const imageData = selectedProjectData?.projectScreenshot;
    if (!imageData || imageData.length === 0) return;

    return (
      <Swiper
        effect={'flip'}
        loop={true}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className={styles.mySwiperPortrait}
      >
        {
          imageData.map((item, index) =>
            <SwiperSlide key={index} className={styles.mySwiperSliderPortrait}>
              <img src={item} />
            </SwiperSlide>
          )
        }
      </Swiper>
    );
  }, [selectedProjectData]);

  const renderCarousel = useMemo(() => {
    const screenWidth = windowDimension.width;
    const projectType = selectedProjectData?.projectType;
    const imageOrientation = selectedProjectData?.thumbOrientation;

    switch (true) {
      case projectType === "game" && imageOrientation === "portrait":
      case projectType === "mobile" && imageOrientation === "portrait":
      case projectType === "website" && imageOrientation === "portrait":
        return renderPortraitImageCarousel;
      case projectType === "game" && imageOrientation === "landscape" && screenWidth >= 651:
      case projectType === "mobile" && imageOrientation === "landscape" && screenWidth >= 651:
      case projectType === "website" && imageOrientation === "landscape" && screenWidth >= 651:
        return renderLandscapeImageCarousel;
      case projectType === "game" && imageOrientation === "landscape" && screenWidth <= 650:
      case projectType === "mobile" && imageOrientation === "landscape" && screenWidth <= 650:
      case projectType === "website" && imageOrientation === "landscape" && screenWidth <= 650:
        return renderLandscapeImageCarouselVertical;
      default:
        break;
    }
  }, [selectedProjectData, windowDimension]);


  return (
    <>
      <button
        className={styles.closeBtn}
        onClick={onClose}
        style={{ display: isScreenshotContainerOpen === true ? "flex" : "none" }}
      >
        <IoClose color="white" fontSize="30px" />
      </button>

      <div
        className={styles.container}
        style={{ display: isScreenshotContainerOpen === true ? "flex" : "none" }}
      >
        {renderCarousel}
      </div>
    </>
  );
};