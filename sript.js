
var vNavimg = document.getElementsByClassName("single-hs-item");


for(var i=0;i<vNavimg.length;i++){
    setHeight(vNavimg[i]);
}

function setHeight(div) {
    if(window.innerWidth < 640){
                   let h= window.innerHeight;
                   let k=h - 66;
                   let h1= k+"px";
                   
                   div.style.height = h1;
                 

                  
                  
                }
                if(window.innerWidth >= 640){
                  let h= window.innerHeight;
                  
                  let k=h - 80;
                  let h1= k+"px";
                  div.style.height = h1;
            
                 
               }
    

}
    window.addEventListener('resize', function(event) {
        for(var i=0;i<vNavimg.length;i++){
         setHeight(vNavimg[i]);
   }
   function setHeight(div) {      
                if(window.innerWidth < 640){
                   let h= window.innerHeight;
                   let k=h - 66;
                   let h1= k+"px";
                   
                   div.style.height = h1;
                 

                  
                  
                }
                if(window.innerWidth >= 640){
                  let h= window.innerHeight;
                  
                  let k=h - 80;
                  let h1= k+"px";
                  div.style.height = h1;
            
                 
               }}
   
                        }, true); 
                    

 
  
         
           
           let aks=document.getElementById('btn');
           let t=document.getElementById("pop");
              aks.addEventListener("click",function main(){
           
              if(t.style.display=="none") { t.style.display= "contents";
               document.getElementById("nun").style.display="none";
              }
              else{t.style.display= "none";
              document.getElementById("nun").style.display="contents";
                }
           });
           
             if(window.innerWidth < 640){
               let h= window.innerHeight;
               
                let k=h - 110;
                let h1= k+"px";
             
               
                document.getElementById("mob").style.height= h1;
                

                
            
            }
            if(window.innerWidth >= 640){
                let h= window.innerHeight;
               
               let k=h - 142;
               let h1= k+"px";
              
               document.getElementById("mob").style.height= h1;
              
             

            }
               
               
                window.addEventListener('resize', function(event) {
                
                    
             if(window.innerWidth < 640){
                let h= window.innerHeight;
                let k=h - 110;
                let h1= k+"px";
                
                document.getElementById("mob").style.height= h1;
               
               
             }
             if(window.innerWidth >= 640){
               let h= window.innerHeight;
               
               let k=h - 142;
               let h1= k+"px";
              
               document.getElementById("mob").style.height= h1;
              
            }

                     }, true); 
          
            
                   
               
               
               
        


           
           let s2b=document.getElementById('s2b');
           let s2=document.getElementById("s2");
           let t92=document.getElementById("t92"); 
              s2b.addEventListener("click",function main(){
           
              if(s2.style.display=="none") { s2.style.display= "contents";
              t92.style.transform="rotate(90deg)";
                t92.style.transition= "transform 0.2s linear 0s";
                t92.style.fill="#000";
            
            
            
            }
              else{s2.style.display= "none";
              t92.style.transform="rotate(0deg)";
                t92.style.transition= "transform 0.2s linear 0s";
                t92.style.fill="#A9A9B2";
            
            
            
            }
           });




          

         

   
          document.getElementById("mm1").style.display="none";
           let ank1=document.getElementById('ok1');
           let l1=document.getElementById("nn1");
           let r1=document.getElementById("mm1");
           
              ank1.addEventListener("mouseover",function main(){
           
              if(l1.style.display=="none") {
                   l1.style.display= "block";
                   
                   r1.style.display="block";
                }
             
        });
        
    
       ank1.addEventListener("mouseout",function main(){
           
           if(l1.style.display=="block") {
                l1.style.display= "none";
                
                r1.style.display="none";
             }
          
     });
     r1.addEventListener("mouseover",function main(){
           
           if(l1.style.display=="none") {
                l1.style.display= "block";
                
                r1.style.display="block";
             }
          
     });
     r1.addEventListener("mouseout",function main(){
           
           if(l1.style.display=="block") {
                l1.style.display= "none";
                
                r1.style.display="none";
             }
          
     });
     l1.addEventListener("mouseover",function main(){
           
           if(l1.style.display=="none") {
                l1.style.display= "block";
                
                r1.style.display="block";
             }
          
     });
     l1.addEventListener("mouseout",function main(){
           
           if(l1.style.display=="block") {
                l1.style.display= "none";
                
                r1.style.display="none";
             }
          
     });

          
          $( ".not-css-z73p9t" ).click(function() { $('svg', this).attr('class', icon);
   $('svg use', this ).attr('xlink:href', '#' + icon);
 });
 
 $( ".css-z73p9t" ).click(function() {
   $( this ).toggleClass( "strike" );
   var icon = 'icon-';
   icon += ( ! $(this).hasClass('strike') ) ? 'empire' : 'rebel';
 
   $('svg', this).attr('class', icon);
   $('svg use', this ).attr('xlink:href', '#' + icon);
 });


 // Hero slider JS
$('.hero-slider').owlCarousel({
animateOut: 'slideOutLeft',
animateIn: 'heartBeat',
items:1,
loop:true,
nav:true,
dots: true,
autoplay:true,
autoplayTimeout:8000,
})