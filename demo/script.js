let users = [
  {
    "id": 1,
    "name": "Leanne Graham",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
  }
]
const list = document.getElementById('list')



list.appendChild(document.createElement('li'))


list.innerHTML = `
      ${users.sort((a, b) => b.name < a.name).map((user) => `<li id=${user.id}>` + user.name + '</li>')}
  `

