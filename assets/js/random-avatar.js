document.addEventListener('DOMContentLoaded', function() {
  const avatarImages = [
    '/assets/images/my_avatars/20230111_181329.jpg',
    '/assets/images/my_avatars/20230201_185356.jpg',
    '/assets/images/my_avatars/20230420_195842.jpg',
    '/assets/images/my_avatars/20230921_134513.jpg',
    '/assets/images/my_avatars/20231030_162006.jpg',
    '/assets/images/my_avatars/20240421_185551.jpg',
    '/assets/images/my_avatars/20240701_152745.jpg',
    '/assets/images/my_avatars/20241005_155428.jpg',
    '/assets/images/my_avatars/20241007_223833.jpg',
    '/assets/images/my_avatars/20241119_111004.jpg',
    '/assets/images/my_avatars/20241226_044556.jpg',
    '/assets/images/my_avatars/20250104_204713.jpg',
    '/assets/images/my_avatars/20250122_130839.jpg',
    '/assets/images/my_avatars/20250122_145516.jpg',
    '/assets/images/my_avatars/20250219_200352.jpg',
    '/assets/images/my_avatars/20250227_210340.jpg',
    '/assets/images/my_avatars/20250305_141154-ANIMATION.gif',
    '/assets/images/my_avatars/20250327_143251.jpg',
    '/assets/images/my_avatars/20250429_105039.jpg',
    '/assets/images/my_avatars/20250507_130538.jpg',
    '/assets/images/my_avatars/20250507_131734.jpg',
    '/assets/images/my_avatars/20250512_112719.jpg',
    '/assets/images/my_avatars/BeautyPlus_20241009014259015_save.jpg',
    '/assets/images/my_avatars/DSC_1055.jpg',
    '/assets/images/my_avatars/DSC_1058.jpg',
    '/assets/images/my_avatars/DSC_1063.jpg',
    '/assets/images/my_avatars/DSC_1064.jpg',
    '/assets/images/my_avatars/DSC_1283.jpg',
    '/assets/images/my_avatars/DSCF2853.jpg',
    '/assets/images/my_avatars/E52DBCD1-8B2C-42F5-91BA-568D3952424C.jpg',
    '/assets/images/my_avatars/IMG_5942.jpg',
    '/assets/images/my_avatars/IMG_6529.jpg',
    '/assets/images/my_avatars/IMG_20210629_074704.jpg',
    '/assets/images/my_avatars/IMG_20231024_162542_274-01.jpeg',
    '/assets/images/my_avatars/IMG-20190513-WA0001.jpg',
    '/assets/images/my_avatars/IMG-20221230-WA0007-02.jpeg',
    '/assets/images/my_avatars/MVIMG_20211018_142459.jpg',
    '/assets/images/my_avatars/MVIMG_20220817_025823.jpg',
    '/assets/images/my_avatars/Screenshot_20230903_013954_Grindr-01.jpeg',
    '/assets/images/my_avatars/tmp_754f5459-353e-443d-98f0-fb524a796579.png'
  ];

  const randomIndex = Math.floor(Math.random() * avatarImages.length);
  const randomAvatarSrc = avatarImages[randomIndex];

  const avatarContainer = document.querySelector('.author__avatar');
  if (avatarContainer) {
    const avatarImgElement = avatarContainer.querySelector('img.u-photo');
    if (avatarImgElement) {
      // Prepend site.baseurl if it exists and the path doesn't already have it
      // This is important for correct pathing if the site is not at the root of the domain
      let finalSrc = randomAvatarSrc;
      if (typeof site !== 'undefined' && site.baseurl && !randomAvatarSrc.startsWith(site.baseurl)) {
        // Ensure baseurl doesn't end with a slash and randomAvatarSrc doesn't start with one, or vice-versa
        let base = site.baseurl;
        let path = randomAvatarSrc;
        if (base.endsWith('/') && path.startsWith('/')) {
            path = path.substring(1);
        } else if (!base.endsWith('/') && !path.startsWith('/')) {
            base = base + '/';
        }
        finalSrc = base + path;
      } else if (typeof site === 'undefined' || !site.baseurl) {
        // If site.baseurl is not defined or empty, ensure the path starts with a slash if it's root-relative
        if (!randomAvatarSrc.startsWith('/') && !randomAvatarSrc.startsWith('http')) {
            finalSrc = '/' + randomAvatarSrc;
        }
      }
      // Ensure the path is relative to the root if it's not an absolute URL
      if (!finalSrc.startsWith('http') && !finalSrc.startsWith('/')) {
        finalSrc = '/' + finalSrc;
      }
      // Remove double slashes that might occur if baseurl is "/"
      finalSrc = finalSrc.replace(/\/\//g, '/');

      avatarImgElement.src = finalSrc;
    }
  }
});