
<template>
<nav class="navbar">

<div class="logo">
<img src="@/assets/cpu.png" alt="">
<div>
<h2>Oklahoma University</h2>
<p>SCIENTIA ET FIDES</p>
</div>
</div>



<ul class="nav-links">
  <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/">About</router-link></li>
  <li><router-link to="/admissions">Admission</router-link></li>
  <li><router-link to="/">Academics</router-link></li>
  <li><router-link to="/">Campus Life</router-link></li>
</ul>

<button class="login-btn">
Portal Login
</button>

</nav>
</template>

<style scoped>
.navbar{
background:white;
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 50px;
}

.logo{
display:flex;
align-items:center;
gap:15px;
}

.logo img{
width:65px;
}

.logo h2{
color:#2B1B5E;
font-size:1.5rem;
}

.logo p{
color:#CBA100;
font-size:.8rem;
letter-spacing:3px;
}

.nav-links{
display:flex;
gap:30px;
list-style:none;
}

.nav-links a{
text-decoration:none;
color:#333;
font-weight:500;
}

.login-btn{
background:#2B1B5E;
color:white;
border:none;
padding:12px 24px;
border-radius:8px;
cursor:pointer;
}
</style>