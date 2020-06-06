 var canvas = document.querySelector('canvas');

 canvas.width = window.innerWidth
 canvas.height = window.innerHeight
 var c = canvas.getContext('2d')


        // var maxx=1707,maxy=859
        // var sx=maxx/2,sy=0
        // var nodelength = 100

        function drawline(startx,starty,extendx,extendy){
            c.beginPath()
            c.moveTo(startx,starty)
            c.lineTo(extendx,extendy)
            c.lineWidth = 1.7;
            c.strokeStyle = 'black'
            c.stroke()
            //c.moveTo(extendx,extendy)
        }
        // function drawtree(layers){
        //     for(var i = 0; i<layers; i++){
        //         for(var j = 0; j<(2**i);j++){
        //             px = sx - (i* (nodelength / 2) )
        //             fromx = px + (j * nodelength) 
        //             fromy = sy + nodelength * i
        //             tox = fromx
        //             toy = fromy + nodelength
        //             drawline(fromx, fromy, tox, toy)

        //         }
        //     }
        // }
        // //drawline(1707/2,859,1707/2,500)
        // drawtree(4)
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}

function timer2(ms) {
    return new Promise(res => setTimeout(res, ms));
}

// async function drawtree(){
//     var sleeptime = 300;
//     var sx = window.innerWidth/2       
//     var sy = window.innerHeight
//     var height = 500
//     var dis = 500
//     var p = new Object();
//     var layers = 6
//     p.x = sx;
//     p.y = sy;
//     var oldlist = [p];
//     var newlist = []
//     for(var i=0; i<=layers; i++){
//         sleeptime = sleeptime / 2;
//         for(k = 0; k<oldlist.length; k++){
//             t = oldlist[k];
            
//             await timer(sleeptime);
//             x1 = t.x - (dis/2);
//             y1 = sy - (((2**(i+1))-1)*height)/2**(i+1)
//             p1 = new Object();
//             p1.x = x1;
//             p1.y = y1;
//             newlist[newlist.length]=p1;
//             drawline(t.x, t.y, x1, y1);

//             await timer(sleeptime);
//             x2 = t.x + (dis/2);
//             y2 = sy - (((2**(i+1))-1)*height)/2**(i+1)
//             p2 = new Object();
//             p2.x = x2;
//             p2.y = y2;
//             newlist[newlist.length]=p2;
//             drawline(t.x, t.y, x2, y2);
//         }

        
//         oldlist = newlist;
//         newlist = [];
//         dis = Math.floor(dis / 2);
//         //height = Math.floor(height / 2);
//     }
// }

// async function drawtreev(){
//     var sleeptime = 300;
//     var sx = window.innerWidth/2       
//     var sy = 0
//     var height = 500
//     var dis = 500
//     var p = new Object();
//     var layers = 6
//     p.x = sx;
//     p.y = sy;
//     var oldlist = [p];
//     var newlist = []
//     for(var i=0; i<=layers; i++){
//         sleeptime = sleeptime / 2;
//         for(k = 0; k<oldlist.length; k++){
//             t = oldlist[k];
            
//            // await timer2(sleeptime);
//             x1 = t.x - (dis/2);
//             y1 = sy + (((2**(i+1))-1)*height)/2**(i+1)
//             p1 = new Object();
//             p1.x = x1;
//             p1.y = y1;
//             newlist[newlist.length]=p1;
//             drawline(t.x, t.y, x1, y1);

//             //await timer2(sleeptime);
//             x2 = t.x + (dis/2);
//             y2 = sy + (((2**(i+1))-1)*height)/2**(i+1)
//             p2 = new Object();
//             p2.x = x2;
//             p2.y = y2;
//             newlist[newlist.length]=p2;
//             drawline(t.x, t.y, x2, y2);
//         }

        
//         oldlist = newlist;
//         newlist = [];
//         dis = Math.floor(dis / 2);
//         //height = Math.floor(height / 2);
//     }
// }

async function drawtreefull(){
    var sleeptime = 300;
    var sx = window.innerWidth/2       
    var sy = 0
    var height = 500
    var dis = 500
    var p = new Object();
    var layers = 6
    p.x = sx;
    p.y = sy;
    var toplist = [p];
    var newtoplist = []

    var p = new Object();
    p.x = sx;
    by = window.innerHeight
    p.y = by;
    var bottomlist = [p];
    var newbottomlist = []

    await timer(2000)
    for(var i=0; i<=layers; i++){
        sleeptime = sleeptime / 2;
        for(k = 0; k<toplist.length; k++){
            t = toplist[k];
            
           await timer2(sleeptime);
            x1 = t.x - (dis/2);
            y1 = sy + (((2**(i+1))-1)*height)/2**(i+1)
            p1 = new Object();
            p1.x = x1;
            p1.y = y1;
            newtoplist[newtoplist.length]=p1;
            drawline(t.x, t.y, x1, y1);

            await timer2(sleeptime);
            x2 = t.x + (dis/2);
            y2 = sy + (((2**(i+1))-1)*height)/2**(i+1)
            p2 = new Object();
            p2.x = x2;
            p2.y = y2;
            newtoplist[newtoplist.length]=p2;
            drawline(t.x, t.y, x2, y2);
        }

        for(k = 0; k<bottomlist.length; k++){
            t = bottomlist[k];
            
            await timer(sleeptime);
            x1 = t.x - (dis/2);
            y1 = by - (((2**(i+1))-1)*height)/2**(i+1)
            p1 = new Object();
            p1.x = x1;
            p1.y = y1;
            newbottomlist[newbottomlist.length]=p1;
            drawline(t.x, t.y, x1, y1);

            await timer(sleeptime);
            x2 = t.x + (dis/2);
            y2 = by - (((2**(i+1))-1)*height)/2**(i+1)
            p2 = new Object();
            p2.x = x2;
            p2.y = y2;
            newbottomlist[newbottomlist.length]=p2;
            drawline(t.x, t.y, x2, y2);
        }
        
        toplist = newtoplist;
        newtoplist = [];

        bottomlist = newbottomlist;
        newbottomlist = [];

        dis = Math.floor(dis / 2);
        //height = Math.floor(height / 2);
    }

}


drawtreefull();
//drawtree();