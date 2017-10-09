$(document).ready(function(){
var video = document.querySelector('#videoes');
		var promisifiedOldGUM = function(constraints) {
			// 第一个拿到getUserMedia，如果存在            
			var getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia|| navigator.oGetUserMedia);
			// 有些浏览器只是不实现它-返回一个不被拒绝的承诺与一个错误保持一致的接口            
			if (!getUserMedia) {
				return Promise.reject(new Error('getUserMedia未在这个浏览器实现'));
			}
			// 否则，调用包在一个旧navigator.getusermedia承诺           
			return new Promise(function(resolve, reject) {
				getUserMedia.call(navigator, constraints, resolve, reject);
			});
		}
		
		// 旧的浏览器可能无法实现mediadevices可言，所以我们设置一个空的对象第一        
		if (navigator.mediaDevices === undefined) {
			navigator.mediaDevices = {};
		}
		
		// 一些浏览器部分实现mediadevices。我们不能只指定一个对象        
		// 随着它将覆盖现有的性能getUserMedia。.        
		// 在这里，我们就要错过添加getUserMedia财产。.        
		if (navigator.mediaDevices.getUserMedia === undefined) {
			navigator.mediaDevices.getUserMedia = promisifiedOldGUM;
		}		
		// Prefer camera resolution nearest to 540x360.        
		var constraint = {
			audio : false,
			video : {
				width : 540,
				height : 360
			}
		};
		navigator.mediaDevices.getUserMedia(constraint)
			.then(function(stream) {
				video.src = window.URL.createObjectURL(stream);
				video.onloadedmetadata = function(e) {
					video.play();
				};
			}).catch(function(err) {
			console.log(err.name + ": " + err.message);
		});
		
		var c=document.getElementById("otherCanvas");
		var ctx=c.getContext("2d");
		document.getElementById("pictures").addEventListener("click", function() {
			ctx.drawImage(video, 0, 0, 540, 360);
			convertCanvasToImage();
		});
		
		// 从 canvas 提取图片 image  
		function convertCanvasToImage(canvas) {  	
		  // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持  
		  // 指定格式 jpeg canvas只能对Jpeg格式的图片进行压缩； 如果使用的是PNG格式，那么base64转码后比图片还要大，用户体验不好
		var canvas=document.getElementById("otherCanvas");
		canvas.src= canvas.toDataURL("image/jpeg");     
		var Pics= canvas.src;
		 Pics = Pics.replace(/^data:image\/(png|jpeg);base64,/,"");
		 //console.log(Pics);	
		
		 } 
	
})