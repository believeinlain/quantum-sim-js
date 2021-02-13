
class App {
    constructor() {
        var appWidth = 300;
        var appHeight = 150;

        // create the canvas html element and attach it to the webpage
        var canvas = document.getElementById('display');
        canvas.style.width = appWidth;
        canvas.style.height = appHeight;
        canvas.setAttribute('width', appWidth);
        canvas.setAttribute('height', appHeight);

        // test canvas
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'orange';
        ctx.fillRect(0, 0, appWidth, appHeight);
    
        ctx.fillStyle = 'black';
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);

        // create the interactive terminal
        var term = new Terminal();
        var terminal = document.getElementById('terminal');
        if (terminal) term.open(terminal);
        
        function runFakeTerminal() {
            if (term._initialized) {
              return;
            }
        
            term._initialized = true;
        
            term.prompt = () => {
              term.write('\r\n$ ');
            };
        
            term.writeln('Welcome to xterm.js');
            term.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
            term.writeln('Type some keys and commands to play around.');
            term.writeln('');
            prompt(term);
        
            term.onData(e => {
              switch (e) {
                case '\r': // Enter
                case '\u0003': // Ctrl+C
                  prompt(term);
                  break;
                case '\u007F': // Backspace (DEL)
                  // Do not delete the prompt
                  if (term._core.buffer.x > 2) {
                    term.write('\b \b');
                  }
                  break;
                default: // Print all other characters for demo
                  term.write(e);
              }
            });
          }
        
          function prompt(term) {
            term.write('\r\n$ ');
          }

        if (terminal) runFakeTerminal();
    }
}

new App();