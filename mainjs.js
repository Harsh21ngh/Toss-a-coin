function flipCoin(userChoice) {
    const coinElement = document.getElementById('coin');
    const outputElement = document.getElementById('output');
  
    // Randomly select either head or tail for the computer's choice
    const user = { head: 1, tail: 2 };
    const revuser = { 1: "head", 2: "tail" };
    const computerChoice = Math.random() < 0.5 ? 1 : 2;
  
    // Reset coin animation and clear previous state
    coinElement.classList.remove('head', 'tail', 'flip');
    void coinElement.offsetWidth; // Force reflow for the new animation
    coinElement.classList.add('flip');
    outputElement.textContent = 'Flipping...';
  
    setTimeout(() => {
      coinElement.classList.remove('flip');
      coinElement.classList.add(computerChoice === 1 ? 'head' : 'tail');
  
      if (userChoice === revuser[computerChoice]) {
        outputElement.textContent = `🎉 YOU WON!! Your Choice: ${userChoice}, Computer Choice: ${revuser[computerChoice]}`;
      } else {
        outputElement.textContent = `😔 YOU LOSE. Your Choice: ${userChoice}, Computer Choice: ${revuser[computerChoice]}`;
      }
    }, 1500); // Wait for 1.5 seconds, duration of the flip animation
  }
  