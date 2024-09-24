const anchor=document.querySelectorAll('a[data-scroll]');

anchor.forEach(anchor => {
    anchor.addEventListener("click",function(e){
      e.preventDefault();
      const  targetsection=anchor.getAttribute("href");
      const targetsectionid=document.querySelectorAll(targetsection);

      targetsection.scrollIntoView({
        behaviour:'scroll',
        block:'nearest',
       inline:'nearest'
      });
    });
});