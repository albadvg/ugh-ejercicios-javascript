const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];
  
  let myInputText;
  
  let body$$ = document.querySelector('body');
  let myBtn$$ = document.querySelector('button');
  
  
  function showStreamers() {
      myInputText = document.querySelector('input[data-function="toFilterStreamers');
      const filteredStreamers = streamers.filter(streamer => {
          return streamer.name.includes(myInputText.value);
      })
      console.log(filteredStreamers);
  }
  
  myBtn$$.addEventListener('click', showStreamers);
  
  body$$.appendChild(myBtn$$);
  