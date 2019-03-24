(function() {
  // 绘制矩形 canvas-rect
  const canvas = document.getElementById('canvas-rect');
  canvas.width = 400;
  canvas.height = 400;
  const context = canvas.getContext('2d');
  
  // 绘制矩形边框
  context.rect(50, 50, 100, 80);
  context.lineWidth = 10;
  context.strokeStyle = '#000';
  context.stroke();

  // 绘制填充颜色的矩形
  context.fillStyle = "#125394";
  context.fillRect(50, 150, 100, 80);
  

  // 绘制填充颜色的矩形
  // 再清除矩形内部的区域
  context.fillStyle = "#009688";
  context.fillRect(50, 250, 200, 120);
  context.clearRect(100, 300, 80, 40);

})();


(function() {
  // 绘制圆形 canvas-arc
  const canvas = document.getElementById('canvas-arc');
  canvas.width = 400;
  canvas.height = 400;

  const context = canvas.getContext('2d');
  context.beginPath();
  context.arc(200, 200, 100, Math.PI * 0, Math.PI * 2, true)
  context.lineWidth = 10;
  context.strokeStyle = '#000';
  context.stroke();

})();



(function() {
  // 绘制圆弧形 canvas-arcTo
  const canvas = document.getElementById('canvas-arcTo');
  canvas.width = 400;
  canvas.height = 400;

  const context = canvas.getContext('2d');
  context.beginPath();
  context.moveTo(100, 100);
  context.arcTo(300, 100, 300, 300, 200);
  context.lineWidth = 10;
  context.strokeStyle = "#000";
  context.stroke();

})();


(function() {
  // 绘制二次曲线 canvas-quadraticCurveTo
  const canvas = document.getElementById('canvas-quadraticCurveTo');
  canvas.width = 400;
  canvas.height = 400;

  const context = canvas.getContext('2d');
  context.beginPath();
  context.moveTo(50, 350);
  context.quadraticCurveTo(200, 0, 350, 350);
  context.lineWidth = 10;
  context.strokeStyle = "#000";
  context.stroke();
})();


(function() {
  // 绘制三次曲线 canvas-bezierCurveTo
  const canvas = document.getElementById('canvas-bezierCurveTo');
  canvas.width = 400;
  canvas.height = 400;

  const context = canvas.getContext('2d');
  context.beginPath();
  context.moveTo(50, 200);
  context.bezierCurveTo(150, 0, 200, 350, 350, 200);
  context.lineWidth = 10;
  context.strokeStyle = "#000";
  context.stroke();
})();

(function() {
  // 绘制三次曲线 canvas-ellipse
  const canvas = document.getElementById('canvas-bezierCurveTo');
  canvas.width = 400;
  canvas.height = 400;

  const context = canvas.getContext('2d');
  context.beginPath();
  context.lineWidth = 10;
  context.strokeStyle = "#125394";
  context.ellipse(200, 200, 80, 160, 90 * Math.PI/180, 0, 2 * Math.PI); //倾斜45°角
  context.stroke();
})();


