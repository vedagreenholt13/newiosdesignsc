
 $(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'media/voice.mp3');

   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);


    $('body').click(function() {
       audioElement.play();

   });
});

 $(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'media/websuhx.mp3');

   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);
   

    $('body').click(function() {
       audioElement.play();

   });

});
