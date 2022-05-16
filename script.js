let move = 40;
gsap.to('.box', {ease: "bounce", duration: 2, stagger: .3, delay: 1.5, y: function(i) {
    if(i%2 === 1) {
        return move;
    }
     else {
       return -move;
     }
}}) 