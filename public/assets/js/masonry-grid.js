function resizeGridItem(item){
    grid = document.getElementsByClassName("grid")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('row-gap'));
    var rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
      item.style.gridRowEnd = "span "+rowSpan;
    hoverColor(rowSpan);
  }

  function hoverColor(rowSpan) {
    if (rowSpan<=10){
      var abc = rowSpan+1;
    }else{
      var abc = rowSpan;
    }
    let items = document.querySelectorAll('.product-item');
    items.forEach(item => {
      item.addEventListener('mouseover', () => {
        let rowSpace = rowSpan + 3;
        item.style.gridRowEnd = "span "+rowSpace;
      });
      item.addEventListener('mouseout', () => {
        item.style.gridRowEnd = "span "+abc;
      });
      
    });
  }
 
  
  function resizeAllGridItems(){
    allItems = document.getElementsByClassName("product-item");
    for(x=0;x<allItems.length;x++){
      resizeGridItem(allItems[x]);
    }
  }
  
  function resizeInstance(instance){
    item = instance.elements[0];
    resizeGridItem(item);
  }
  
  window.onload = resizeAllGridItems();
  window.addEventListener("resize", resizeAllGridItems);
  
  allItems = document.getElementsByClassName("product-item");
  for(x=0;x<allItems.length;x++){
    imagesLoaded( allItems[x], resizeInstance);
  }