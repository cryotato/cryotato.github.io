document.addEventListener('DOMContentLoaded', function() {
  const avatarData = [
    { src: '/assets/images/my_avatars/20230111_181329.jpg', caption: 'Jan 11, 2023' },
    { src: '/assets/images/my_avatars/20230201_185356.jpg', caption: 'Feb 1, 2023' },
    { src: '/assets/images/my_avatars/20230420_195842.jpg', caption: 'Apr 20, 2023' },
    { src: '/assets/images/my_avatars/20230921_134513.jpg', caption: 'Sep 21, 2023' },
    { src: '/assets/images/my_avatars/20231030_162006.jpg', caption: 'Oct 30, 2023' },
    { src: '/assets/images/my_avatars/20240421_185551.jpg', caption: 'Apr 21, 2024' },
    { src: '/assets/images/my_avatars/20240701_152745.jpg', caption: 'Jul 1, 2024' },
    { src: '/assets/images/my_avatars/20241005_155428.jpg', caption: 'Oct 5, 2024' },
    { src: '/assets/images/my_avatars/20241007_223833.jpg', caption: 'Oct 7, 2024' },
    { src: '/assets/images/my_avatars/20241119_111004.jpg', caption: 'Nov 19, 2024' },
    { src: '/assets/images/my_avatars/20241226_044556.jpg', caption: 'Dec 26, 2024' },
    { src: '/assets/images/my_avatars/20250104_204713.jpg', caption: 'Jan 4, 2025' },
    { src: '/assets/images/my_avatars/20250107_1710512.jpg', caption: 'Jan 7, 2025' },
    { src: '/assets/images/my_avatars/20250122_130839.jpg', caption: 'Jan 22, 2025 (1)' },
    { src: '/assets/images/my_avatars/20250122_145516.jpg', caption: 'Jan 22, 2025 (2)' },
    { src: '/assets/images/my_avatars/20250219_180001.jpg', caption: 'Feb 19, 2025 (1)' },
    { src: '/assets/images/my_avatars/20250219_200352.jpg', caption: 'Feb 19, 2025 (2)' },
    { src: '/assets/images/my_avatars/20250225_120146.jpg', caption: 'Feb 25, 2025' },
    { src: '/assets/images/my_avatars/20250227_210340.jpg', caption: 'Feb 27, 2025' },
    // { src: '/assets/images/my_avatars/20250305_141154-ANIMATION.gif', caption: 'Mar 5, 2025 GIF' },
    { src: '/assets/images/my_avatars/20250327_143251.jpg', caption: 'Mar 27, 2025' },
    { src: '/assets/images/my_avatars/20250409_114652.jpg', caption: 'Apr 9, 2025' },
    { src: '/assets/images/my_avatars/20250420_153011.jpg', caption: 'Apr 20, 2025 (1)' },
    { src: '/assets/images/my_avatars/20250420_191810.jpg', caption: 'Apr 20, 2025 (2)' },
    { src: '/assets/images/my_avatars/20250429_105039.jpg', caption: 'Apr 29, 2025' },
    { src: '/assets/images/my_avatars/20250507_130538.jpg', caption: 'May 7, 2025 (1)' },
    { src: '/assets/images/my_avatars/20250507_131734.jpg', caption: 'May 7, 2025 (2)' },
    { src: '/assets/images/my_avatars/20250507_220022.jpg', caption: 'May 7, 2025 (3)' },
    { src: '/assets/images/my_avatars/20250512_112719.jpg', caption: 'May 12, 2025' },
    { src: '/assets/images/my_avatars/BeautyPlus_20241009014259015_save.jpg', caption: 'BeautyPlus Edit' },
    { src: '/assets/images/my_avatars/DSC_1055.jpg', caption: 'DSC 1055' },
    { src: '/assets/images/my_avatars/DSC_1058.jpg', caption: 'DSC 1058' },
    { src: '/assets/images/my_avatars/DSC_1063.jpg', caption: 'DSC 1063' },
    { src: '/assets/images/my_avatars/DSC_1064.jpg', caption: 'DSC 1064' },
    { src: '/assets/images/my_avatars/DSC_1283.jpg', caption: 'DSC 1283' },
    { src: '/assets/images/my_avatars/DSCF2853.jpg', caption: 'DSCF 2853' },
    { src: '/assets/images/my_avatars/E52DBCD1-8B2C-42F5-91BA-568D3952424C.jpg', caption: 'iOS Image' },
    { src: '/assets/images/my_avatars/IMG_5942.jpg', caption: 'IMG 5942' },
    { src: '/assets/images/my_avatars/IMG_6529.jpg', caption: 'IMG 6529' },
    { src: '/assets/images/my_avatars/IMG_6532.jpg', caption: 'IMG 6532' },
    { src: '/assets/images/my_avatars/IMG_20210629_074704.jpg', caption: 'Jun 29, 2021' },
    { src: '/assets/images/my_avatars/IMG_20231024_162542_274-01.jpeg', caption: 'Oct 24, 2023' },
    { src: '/assets/images/my_avatars/IMG-20190513-WA0001.jpg', caption: 'May 13, 2019 (WhatsApp)' },
    { src: '/assets/images/my_avatars/IMG-20221230-WA0007-02.jpeg', caption: 'Dec 30, 2022 (WhatsApp)' },
    { src: '/assets/images/my_avatars/MVIMG_20211018_142459.jpg', caption: 'Oct 18, 2021 (Motion)' },
    { src: '/assets/images/my_avatars/MVIMG_20220817_025823.jpg', caption: 'Aug 17, 2022 (Motion)' },
    { src: '/assets/images/my_avatars/Screenshot_20230903_013954_Grindr-01.jpeg', caption: 'Screenshot Sep 3, 2023' },
    { src: '/assets/images/my_avatars/tmp_754f5459-353e-443d-98f0-fb524a796579.png', caption: 'Temporary Image' }
  ];

  const randomIndex = Math.floor(Math.random() * avatarData.length);
  const selectedAvatar = avatarData[randomIndex];

  const avatarContainer = document.querySelector('.author__avatar');
  if (avatarContainer) {
    const avatarImgElement = avatarContainer.querySelector('img.u-photo');
    const avatarCaptionElement = avatarContainer.querySelector('.author__avatar-caption');

    if (avatarImgElement) {
      let finalSrc = selectedAvatar.src;
      if (typeof site !== 'undefined' && site.baseurl && !finalSrc.startsWith(site.baseurl)) {
        let base = site.baseurl;
        let path = finalSrc;
        if (base.endsWith('/') && path.startsWith('/')) {
            path = path.substring(1);
        } else if (!base.endsWith('/') && !path.startsWith('/')) {
            base = base + '/';
        }
        finalSrc = base + path;
      } else if (typeof site === 'undefined' || !site.baseurl) {
        if (!finalSrc.startsWith('/') && !finalSrc.startsWith('http')) {
            finalSrc = '/' + finalSrc;
        }
      }
      finalSrc = finalSrc.replace(/\/\//g, '/');
      avatarImgElement.src = finalSrc;
    }

    if (avatarCaptionElement) {
      avatarCaptionElement.textContent = selectedAvatar.caption;
    }
  }
});