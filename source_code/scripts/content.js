let renderedHtml = document.documentElement.outerHTML;
    
let blob = new Blob([renderedHtml], {type: 'text/html'});

let link = document.createElement('a');

link.download = 'rendered_page.html';

link.href = URL.createObjectURL(blob);

document.body.appendChild(link);

link.click();

document.body.removeChild(link);