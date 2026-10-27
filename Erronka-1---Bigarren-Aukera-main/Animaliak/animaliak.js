const animals = {
  luna: { name: 'Luna', image: 'Argazkiak/Gato1.png', species: 'Katua', breed: 'Europako katu arrunta', sex: 'Arra', color: 'Gris marraduna', age: '12/04/2021 (5 urte)' },
  simba: { name: 'Simba', image: 'Argazkiak/Gato2.png', species: 'Katua', breed: 'Europako katu arrunta', sex: 'Arra', color: 'Laranja eta zuria', age: '08/09/2022 (4 urte)' },
  nala: { name: 'Nala', image: 'Argazkiak/Gato3.png', species: 'Katua', breed: 'Europako katu arrunta', sex: 'Emea', color: 'Hiru koloretakoa', age: '21/02/2023 (3 urte)' },
  rocky: { name: 'Rocky', image: 'Argazkiak/Perro1.png', species: 'Txakurra', breed: 'Mestizoa', sex: 'Arra', color: 'Marroia eta zuria', age: '17/06/2020 (6 urte)' },
  kira: { name: 'Kira', image: 'Argazkiak/Perro2.png', species: 'Txakurra', breed: 'Artzain alemaniarra', sex: 'Emea', color: 'Beltza eta arre kolorekoa', age: '03/11/2021 (4 urte)' },
  toby: { name: 'Toby', image: 'Argazkiak/Perro3.png', species: 'Txakurra', breed: 'Beaglea', sex: 'Arra', color: 'Hiru koloretakoa', age: '29/01/2022 (4 urte)' },
  rio: { name: 'Río', image: 'Argazkiak/Loro.png', species: 'Hegaztia', breed: 'Amazoniako loroa', sex: 'Arra', color: 'Berdea eta horia', age: '15/05/2018 (8 urte)' },
  paco: { name: 'Paco', image: 'Argazkiak/Periquito.png', species: 'Hegaztia', breed: 'Perikito australiarra', sex: 'Arra', color: 'Urdina eta zuria', age: '10/08/2023 (2 urte)' },
  sol: { name: 'Sol', image: 'Argazkiak/Canario.png', species: 'Hegaztia', breed: 'Kanario horia', sex: 'Emea', color: 'Horia', age: '06/03/2022 (4 urte)' }
};

const dialog = document.querySelector('.animalien-elkarrizketa');
const dialogImage = document.querySelector('#elkarrizketa-irudia');
const fields = {
  title: document.querySelector('#elkarrizketa-izenburua'),
  species: document.querySelector('#elkarrizketa-espeziea'),
  breed: document.querySelector('#elkarrizketa-arraza'),
  sex: document.querySelector('#elkarrizketa-sexua'),
  color: document.querySelector('#elkarrizketa-kolorea'),
  age: document.querySelector('#elkarrizketa-adina')
};

document.querySelectorAll('.animalien-botoia').forEach((button) => {
  button.addEventListener('click', () => {
    const animal = animals[button.dataset.animalia];
    fields.title.textContent = animal.name;
    dialogImage.src = animal.image;
    dialogImage.alt = animal.name;
    fields.species.textContent = animal.species;
    fields.breed.textContent = animal.breed;
    fields.sex.textContent = animal.sex;
    fields.color.textContent = animal.color;
    fields.age.textContent = animal.age;
    dialog.showModal();
  });
});

document.querySelector('.elkarrizketa-itxi').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});