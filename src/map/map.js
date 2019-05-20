import api from '../services/api.js';

const name = document.getElementById('name');
const title = document.getElementById('title');
const grade = document.getElementById('grade');
const coffee = document.getElementById('coffee');

const user = api.getUser();

if(!user){
    window.location = './';
}

name.textContent = user.name;
title.textContent = user.title;
grade.textContent = user.grade;
coffee.textContent = user.coffee;

