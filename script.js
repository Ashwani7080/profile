for(let i=1; i<=8; i++)
 {
    const elem=document.getElementById(i+"");
    elem.addEventListener("click",visitLink);
 }

    function visitLink(event){
        const id=event.target.id;
        
        if(id=="1")
        {
            setTimeout(function() { window.open('https://www.instagram.com/abhi_shrivastav.abhay', "_blank") }, 1);
        }


        else if(id=="2")
        {
            setTimeout(function() { window.open('https://wa.me/7080774165', "_blank") }, 1);
        }
        else if(id=="7")
        {
            setTimeout(function() { window.open('https://wa.me/9648539878', "_blank") }, 1);
        }
        else if(id=="3")
        {
            setTimeout(function() { window.open('https://www.facebook.com/profile.php?id=100008507022890', "_blank") }, 1);
        }
         else if(id=="8")
        {
            setTimeout(function() { window.open('tel:+917080774165', "_blank") }, 1);
        }

        else if(id=="4")
        {
            setTimeout(function() { window.open('https://t.me/Abhay7080', "_blank") }, 1);
        }

        else if(id=="5")
        {
            setTimeout(function() { window.open('https://twitter.com/Ashwani45449425', "_blank") }, 1);
        }
        else if(id=="6")
        {
            setTimeout(function() { window.open('https://t.snapchat.com/SawFLQor', "_blank") }, 1);
        }

          }
          
