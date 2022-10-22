 var slide1=
 `<div>
 
    <ul>
       <li><span>UI/UX:</span>  designing and create User Interfaces.
        </li>
        
       <li><span>BATH ROOM SINGER:</span>  One of the best Bathroom Singer in the World.</li>
       <li><span>Chef:</span> This skill is  under process and under the guidence of <span>MOM<span> .</li>
    </ul>
 </div>`
 var slide2=`<div class="tab-content"
      
 id="experience">

    <ul>
       <li>A newbie.</li>
    </ul>
 </div>`
 var slide3=`
 <div class="tab-content"
    
 id="education">
   <ul>
      <li>NONE.</li>
   </ul>
</div>`
function displayslide1(){
    document.getElementById('slide').innerHTML=slide1;
}
function displayslide2(){
    document.getElementById('slide').innerHTML=slide2;
}
function displayslide3(){
    document.getElementById('slide').innerHTML=slide3;
}
document.getElementById('tab-links1').addEventListener('click',displayslide1);
document.getElementById('tab-links2').addEventListener('click',displayslide2);
document.getElementById('tab-links3').addEventListener('click',displayslide3); 
var btn=document.getElementById("btn");
function togglebtn(){
   btn.classList.toggle("allow");
}