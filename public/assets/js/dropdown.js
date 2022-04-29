let dropdownBtn = document.querySelector('.dropbtn');
    let menuContent = document.querySelector('.dropdown-content');
    dropdownBtn.addEventListener('click',()=>{
       if(menuContent.style.display===""){
          menuContent.style.display="block";
       } else {
          menuContent.style.display="";
       }
    })