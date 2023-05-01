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


function isUser(){
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  users.map((user) => {
    if(ids.includes(user.id)){
      console.log('é o usuário')
    }
    else {
      console.log('não é')
    }
  })

}
isUser()