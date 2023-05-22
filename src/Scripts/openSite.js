function openIframe(elementName) {
  console.log(elementName);

  if (elementName == 'linux') {
    console.log('true');
    var url = 'https://linuxtutors.xyz/';

    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    win.document.title = 'Proxy';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
    window.close();
  }
  //end of linux
  if (elementName == 'velocity') {
    console.log('true');
    var url = 'https://velocity.radon.games/';

    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    win.document.title = 'Proxy';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
    window.close();
  }
  //end of velocity
  if (elementName == 'velocity') {
    console.log('true');
    var url = 'https://velocity.radon.games/';

    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    win.document.title = 'Proxy';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
    window.close();
  }
}

export default openIframe;
