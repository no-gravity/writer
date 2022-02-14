export let filename = 'new_file.txt';

export function save(text) {
    const link = document.createElement('a');
    link.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,'
        + encodeURIComponent(text)
    );
    link.setAttribute('download', filename);

    if (document.createEvent) {
        var evnt = document.createEvent('MouseEvents');
        evnt.initEvent('click', true, true);
        link.dispatchEvent(evnt);
    }
    else {
        link.click();
    }
}

export async function load() {
  return new Promise((resolve, reject) => {
    const el = document.createElement('input');
    el.type = 'file';
    el.addEventListener('change', function() {
      var fr=new FileReader();
      fr.onload=function() {
        resolve(fr.result)
        filename = el.files[0].name;
      }
      fr.readAsText(this.files[0]);
    })
    el.click();
  })
}
