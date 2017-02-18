// <!--* Floating image script- By Virtual_Max (http://www.geocities.com/siliconvalley/lakes/8620)-->
// <!--* Modified by Dynamic Drive for various improvements-->
// <!--* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code-->


// <!--//Step 1: Define unique variable names depending on number of flying images (ie:3):-->
var chip01, chip02, chip03, chip04, chip05, chip06, chip07, chip08, chip09, chip10, chip11, chip12

function pagestart(){
//Step 2: Using the same variable names as 1), add or delete more of the below lines:
    chip01=new Chip("chip01",47,68);
    chip02=new Chip("chip02",47,68);
    chip03=new Chip("chip03",47,68);
    chip04=new Chip("chip04",47,68);
    chip05=new Chip("chip05",47,68);
    chip06=new Chip("chip06",47,68);
    chip07=new Chip("chip07",47,68);
    chip08=new Chip("chip08",47,68);
    chip09=new Chip("chip09",47,68);
    chip10=new Chip("chip10",47,68);
    chip11=new Chip("chip11",47,68);
    chip12=new Chip("chip12",47,68);
    chip13=new Chip("chip13",47,608);
    chip14=new Chip("chip14",47,68);
    chip15=new Chip("chip15",47,68);
    
//Step 3: Using the same variable names as 1), add or delete more of the below lines:
    movechip("chip01");
    movechip("chip02");
    movechip("chip03");
    movechip("chip04");
    movechip("chip05");
    movechip("chip06");
    movechip("chip07");
    movechip("chip08");
    movechip("chip09");
    movechip("chip10");
    movechip("chip11");
    movechip("chip12");
    movechip("chip13");
    movechip("chip14");
    movechip("chip15");

}

if (window.addEventListener)
window.addEventListener("load", pagestart, false)
else if (window.attachEvent)
window.attachEvent("onload", pagestart)
else if (document.getElementById)
window.onload=pagestart


// Step 4: Define your flying images. For each image's ID tag, use the same variable names as 1) above
document.write('\
\
    <DIV ID="chip01" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip01.gif" BORDER=0></a></DIV>\
    <DIV ID="chip02" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip02.gif" BORDER=0></a></DIV>\
    <DIV ID="chip03" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip03.gif" BORDER=0></a></DIV>\
    <DIV ID="chip04" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip04.gif" BORDER=0></a></DIV>\
    <DIV ID="chip05" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip05.gif" BORDER=0></a></DIV>\
    <DIV ID="chip06" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip06.gif" BORDER=0></a></DIV>\
    <DIV ID="chip07" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip07.gif" BORDER=0></a></DIV>\
    <DIV ID="chip08" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip08.gif" BORDER=0></a></DIV>\
    <DIV ID="chip09" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip09.gif" BORDER=0></a></DIV>\
    <DIV ID="chip10" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip10.gif" BORDER=0></a></DIV>\
    <DIV ID="chip11" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip11.gif" BORDER=0></a></DIV>\
    <DIV ID="chip12" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip12.gif" BORDER=0></a></DIV>\
    <DIV ID="chip13" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip13.gif" BORDER=0></a></DIV>\
    <DIV ID="chip14" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip14.gif" BORDER=0></a></DIV>\
    <DIV ID="chip15" STYLE="position:absolute; left: -500px; width:47; height:68;"><IMG SRC="home/chip15.gif" BORDER=0></a></DIV>\
\
');