let timerId = setInterval(() => alert('째깍'), 2000);
setTimeout(() => { clearInterval(timerId); alert('정지'); }, 5000)