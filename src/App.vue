<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/button">Button</router-link> |
      <router-link to="/checkbox">Checkbox</router-link> |
      <router-link to="/radio">Radio</router-link> |
      <router-link to="/select">Select</router-link> |
      <router-link to="/switch">Switch</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
