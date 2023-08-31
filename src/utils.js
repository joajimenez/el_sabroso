export function createElement(elTipe, elClass, elText) {
  const element = document.createElement(`${elTipe}`);
  element.classList.add(`${elClass}`);
  element.textContent = `${elText}`;
  return element;
}

export function createImage(src, alt) {
  const image = document.createElement('img');
  image.src = `${src}`;
  image.alt = `${alt}`;
  return image;
}

export function createNav(brand, links) {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  nav.classList.add('navbar');
  nav.appendChild(ul);

  const brandLi = document.createElement('li');
  brandLi.innerHTML = `<strong>${brand}</strong>`;
  ul.appendChild(brandLi);

  links.forEach((link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = link.href;
    a.textContent = link.text;

    li.appendChild(a);
    ul.appendChild(li);
  });

  return nav;
}

// const navbar = createNav('El Sabroso', [
//   { text: 'MENU', href: 'www.google.com' },
//   { text: 'ABOUT', href: 'www.google.com' },
// ]);

// app.appendChild(nav);
