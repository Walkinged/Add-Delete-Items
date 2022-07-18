const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  //ul.appendChild(li);
  ul.prepend(li);
});

/* const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log('item clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    e.target.remove();
  });
}); */

ul.addEventListener('click', e =>{
    if (e.target.tagName === 'LI')
    {
        e.target.remove();
    }
});