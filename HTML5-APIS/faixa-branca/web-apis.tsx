import { Button } from "../button";
import { Input } from "../Input";
import { Container } from "./styles";
import React, { useState, ChangeEvent } from "react";


export default function TodoContainer() {
  const [task, setTask] = useState('');
  const successCallback = (position: GeolocationPosition) => {
    console.log(position);
  };
  
  const errorCallback = (error: GeolocationPositionError) => {
    console.log(error);
  };
  const id = navigator.geolocation.watchPosition(successCallback, errorCallback);

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleAddTask() {
    window.localStorage.setItem('task', task);
    window.sessionStorage.setItem('task', task);
  }
  function handleRemoveTask() {
    window.localStorage.removeItem('task');
    window.sessionStorage.removeItem('task');

  }
  function handleShowTask() {
    const storageTask = window.localStorage.getItem('task');
    alert(storageTask);
  }

  

  function showGeolocation() {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }

  return (
    <>
    <Container>
      <Input
       placeholder="Digite sua tarefa"
       onChange={handleChangeTask}
      />
      <Button
        onClick={handleAddTask}
      >
        Adcionar tarefa
      </Button>
      <Button
        onClick={handleRemoveTask}
      >
        Remover tarefa
      </Button>
      <Button
        onClick={handleShowTask}
      >
        Mostrar tarefa
      </Button>
    </Container>
    <Button onClick={showGeolocation}>
      ativar geolocalizaocao
    </Button>
    </>
  )
}
