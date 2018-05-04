function alignImg(img, container, cb) { // img: 源图片  container: canvas画布  cb: 回调函数
  /* img是已经加载完成的图片 **/
  
  // 容器宽高
  var containerW = container.width;
  var containerH = container.height;
  var containerRatio = containerW/containerH;

  // 图片的长宽及比例
  var imgW = img.width;
  var imgH = img.height;
  var imgRatio = imgW/imgH;

  var startX, startY, width, height; // 画布绘制图片的参数

  if(imgRatio > containerRatio) { // drawImage(rowImage, startX, startY, width, height)
    cb(0, (containerH - imgH/imgW*containerW)/2, containerW, imgH/imgW*containerW);
  } else {
    cb((containerW - imgW/imgH*containerH)/2, 0, imgW/imgH*containerH, containerH);
  }
}

// 预加载图片
function preImage(imgURL, cb) {
  var img = new Image();
  img.src = imgURL;

  if(img.complate) { // 如果图片已经存在缓存中
      cb.call(img); // 执行回调函数，并且将img对象作为回调函数的this进行执行
      return;
  }
  img.onload = () => { // 首次加载图片，等图片加载完成执行回调函数
      cb.call(img);
  }
}