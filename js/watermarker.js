	
	
	
				 	       var canvas = document.getElementById("canvas")
        var context = canvas.getContext("2d")

        var offCanvas = document.getElementById("offCanvas")
        var offContext = offCanvas.getContext("2d")
	
		var watermarkCanvas = document.getElementById("watermark-canvas")
        var watermarkContext = watermarkCanvas.getContext("2d")

        var image = new Image()
        var isMouseDown = false
        var scale

        window.onload = function(){

            canvas.width = 600
            canvas.height = 340

            image.src = "../img/zs.jpg"
            image.onload = function(){

                offCanvas.width = image.width
                offCanvas.height = image.height
                scale = offCanvas.width / canvas.width

                context.drawImage( image , 0 , 0 , canvas.width , canvas.height )
                 context.drawImage( watermarkCanvas , canvas.width - watermarkCanvas.width ,
                                                  canvas.height - watermarkCanvas.height )
                offContext.drawImage( image , 0 , 0 )
            }
            //setup watermark canvas
            watermarkCanvas.width = 800
            watermarkCanvas.height = 100

            watermarkContext.font = "bold 20px Arial";
            watermarkContext.fillStyle = "rgba( 0 , 0 , 0 , 0.7 )";
            watermarkContext.textBaseline = "right";
            watermarkContext.fillText( "== renbuzuosiwangshaonian.cn ==" , 400, 80 );
        }

        function windowToCanvas( x , y ){
            var bbox = canvas.getBoundingClientRect()
            return {x:x-bbox.left , y:y-bbox.top}
        }



        function drawCanvasWithMagnifier( isShowMagnifier , point ){
            context.clearRect( 0 , 0 , canvas.width , canvas.height )
            context.drawImage( image , 0 , 0 , canvas.width , canvas.height )
              context.drawImage( watermarkCanvas , canvas.width - watermarkCanvas.width ,
                                                  canvas.height - watermarkCanvas.height )
            if( isShowMagnifier == true ){
                drawMagnifier( point )
            }
        }

        function drawMagnifier( point ){

            var mr = 200

            var imageLG_cx = point.x * scale
            var imageLG_cy = point.y * scale

            var sx = imageLG_cx - mr
            var sy = imageLG_cy - mr

            var dx = point.x - mr
            var dy = point.y - mr

            context.save()

            
            context.strokeStyle = "#069"

            context.beginPath()
            context.arc( point.x , point.y , mr , 0 , Math.PI*2 , false )
            context.stroke()
            context.clip()
            context.drawImage( offCanvas , sx , sy , 2*mr , 2*mr , dx , dy , 2*mr , 2*mr )
            context.restore()
        }
                canvas.onmousedown = function(e){
            isMouseDown = true
            point = windowToCanvas( e.clientX , e.clientY )
            console.log( point.x , point.y )
            drawCanvasWithMagnifier( true , point )
        }

        canvas.onmouseup = function(e){
            isMouseDown = false
            drawCanvasWithMagnifier( false )
        }

        canvas.onmouseout = function(e){
            isMouseDown = false
            drawCanvasWithMagnifier( false )
        }

        canvas.onmousemove = function(e){
            if( isMouseDown == true ){
                point = windowToCanvas( e.clientX , e.clientY )
                console.log( point.x , point.y )
                
                drawCanvasWithMagnifier( true , point )
            }
        }
					 	       var canvas = document.getElementById("canvas")
        var context = canvas.getContext("2d")

        var offCanvas = document.getElementById("offCanvas")
        var offContext = offCanvas.getContext("2d")
	
		var watermarkCanvas = document.getElementById("watermark-canvas")
        var watermarkContext = watermarkCanvas.getContext("2d")

        var image = new Image()
        var isMouseDown = false
        var scale

        window.onload = function(){

            canvas.width = 600
            canvas.height = 340

            image.src = "../img/zs.jpg"
            image.onload = function(){

                offCanvas.width = image.width
                offCanvas.height = image.height
                scale = offCanvas.width / canvas.width

                context.drawImage( image , 0 , 0 , canvas.width , canvas.height )
                 context.drawImage( watermarkCanvas , canvas.width - watermarkCanvas.width ,
                                                  canvas.height - watermarkCanvas.height )
                offContext.drawImage( image , 0 , 0 )
            }
            //setup watermark canvas
            watermarkCanvas.width = 800
            watermarkCanvas.height = 100

            watermarkContext.font = "bold 20px Arial";
            watermarkContext.fillStyle = "rgba( 0 , 0 , 0 , 0.7 )";
            watermarkContext.textBaseline = "right";
            watermarkContext.fillText( "== renbuzuosiwangshaonian.cn ==" , 400, 80 );
        }

        function windowToCanvas( x , y ){
            var bbox = canvas.getBoundingClientRect()
            return {x:x-bbox.left , y:y-bbox.top}
        }



        function drawCanvasWithMagnifier( isShowMagnifier , point ){
            context.clearRect( 0 , 0 , canvas.width , canvas.height )
            context.drawImage( image , 0 , 0 , canvas.width , canvas.height )
              context.drawImage( watermarkCanvas , canvas.width - watermarkCanvas.width ,
                                                  canvas.height - watermarkCanvas.height )
            if( isShowMagnifier == true ){
                drawMagnifier( point )
            }
        }

        function drawMagnifier( point ){

            var mr = 200

            var imageLG_cx = point.x * scale
            var imageLG_cy = point.y * scale

            var sx = imageLG_cx - mr
            var sy = imageLG_cy - mr

            var dx = point.x - mr
            var dy = point.y - mr

            context.save()

            
            context.strokeStyle = "#069"

            context.beginPath()
            context.arc( point.x , point.y , mr , 0 , Math.PI*2 , false )
            context.stroke()
            context.clip()
            context.drawImage( offCanvas , sx , sy , 2*mr , 2*mr , dx , dy , 2*mr , 2*mr )
            context.restore()
        }
                canvas.onmousedown = function(e){
            isMouseDown = true
            point = windowToCanvas( e.clientX , e.clientY )
            console.log( point.x , point.y )
            drawCanvasWithMagnifier( true , point )
        }

        canvas.onmouseup = function(e){
            isMouseDown = false
            drawCanvasWithMagnifier( false )
        }

        canvas.onmouseout = function(e){
            isMouseDown = false
            drawCanvasWithMagnifier( false )
        }

        canvas.onmousemove = function(e){
            if( isMouseDown == true ){
                point = windowToCanvas( e.clientX , e.clientY )
                console.log( point.x , point.y )
                
                drawCanvasWithMagnifier( true , point )
            }
        }