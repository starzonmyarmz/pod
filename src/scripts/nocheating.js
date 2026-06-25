// Hack for determining if browser devtools is open

setInterval(() => {
  const startTime = performance.now();

  // If DevTools are open, the browser pauses here
  debugger;

  const endTime = performance.now();

  // If execution took longer than 100ms, a breakpoint likely triggered it
  if (endTime - startTime > 100) {
    console.warn("DevTools detection triggered!");
    // Insert defensive actions here (e.g., redirect or clear page)
  }
}, 1000);
